#!/usr/bin/python3
"""
Game-accurate species fields from PKHeX's per-game personal tables.

PokéAPI only knows *current* species data (Gen 8+ base friendship, Gen 6+
catch rates and EXP yields, modern EV yields, egg cycles, held items …), so
the per-game files used to carry modern values in older games.  This module
reads the personal table that the game itself ships with — as dumped by PKHeX
(https://github.com/kwsch/PKHeX, ``PKHeX.Core/Resources/byte/personal``) — and
returns the species fields for one (game, species, form) in the files'
conventions.  ``scrape_pokedex.py`` uses it to override the PokéAPI values.

Pinned source: kwsch/PKHeX commit 61da5c6f68fbc0f8fa5b09212dc8329169a830db
(2026-10-30).  The files are downloaded once into ``.scrape_cache_pkhex/`` (git-
ignored) and only ever parsed as bytes / text.  Record layouts follow
``PKHeX.Core/PersonalInfo/Info/PersonalInfo*.cs`` at that commit; Gen 2/3 item
IDs are converted to modern item IDs with the tables in
``PKHeX.Core/PKM/Util/Conversion/ItemConverter.cs``.

Fields provided (see ``FIELDS``): types, catch_rate, base_experience,
ev_yield (Gen 3+), common_item / rare_item, gender_ratio, egg_cycles,
base_friendship, growth_rate, egg groups, abilities / hidden_ability, weight
(Gen 5+; Gen 3-4 tables have no weight).  Base stats are exposed for
comparison only — the scraper keeps taking them from Bulbapedia.

Conventions (documented in SCRAPING.md):
- Modern English names with correct punctuation, ASCII apostrophe
  ("King's Rock", "Dragon's Maw", "Soul-Heart", "Leek").  Gen 2/3 items are
  named by their modern equivalent (Gen 2 "Berry" -> "Oran Berry",
  "BrightPowder" -> "Bright Powder"), as PKHeX/Bulbapedia identify them.
- Held items: the game's slots are Item1 = 50 % (Gen 2: ~23 %), Item2 = 5 %
  (Gen 2: ~2 %), Item3 = 1 % (Gen 5+, only with Compound Eyes / Super Luck
  etc.).  ``common_item`` = Item1, ``rare_item`` = Item2; Item3 is not stored
  (the files have no field for it).  Gen 3+: the same item in Item1 and
  Item2 means it is always held — stored as ``common_item`` = item,
  ``rare_item`` = null, which is how PokéAPI's rarity-100 entries were
  already represented.  Gen 2 has no such rule, so equal slots are kept.
- Corrections to PKHeX, checked against vanilla decomps / original ROMs:
  Yellow Kadabra and Pikachu catch rates (``_ROM_CORRECTIONS``) and the
  Diamond-only Electirizer/Magmarizer slots (``_DIAMOND_ITEMS``).
- Gen 1: no held items, gender, eggs, friendship or abilities (left null /
  empty by the scraper).  Gen 2: base friendship is 70 for every species
  (the game has no per-species value).
- Abilities: [Ability1] or [Ability1, Ability2] (duplicates and empty slots
  dropped); ``hidden_ability`` (Gen 5+) is AbilityH, or null when it is
  empty or repeats a regular ability (no Hidden Ability).  Gen 2 egg groups
  are read high nibble first (pokecrystal ``dn``).
- Gen 9 tables have no held-item slots (SV/Z-A wild items are not species
  data), so held items are left to the caller there.
- Legends: Arceus has no held items and no Eggs: common/rare item and
  egg_cycles are null.  Legends: Arceus and Z-A have no Abilities; their
  tables hold placeholder slots, so abilities are left to the caller.
- A form the table has no record of its own for (Gen 3-4 Castform weathers,
  Gigantamax) takes the base species' record for everything except types
  and weight, which are left to the caller.

CLI:
    python game_species_data.py --compare                # every pokedex/*.js
    python game_species_data.py --compare --game Crystal --show 20
"""

from __future__ import annotations

import argparse
import json
import re
import struct
import sys
import urllib.request
from collections import Counter, defaultdict
from functools import lru_cache
from pathlib import Path

PKHEX_COMMIT = "61da5c6f68fbc0f8fa5b09212dc8329169a830db"
_RAW = f"https://raw.githubusercontent.com/kwsch/PKHeX/{PKHEX_COMMIT}/PKHeX.Core"
CACHE_DIR = Path(__file__).resolve().parent / ".scrape_cache_pkhex"

_TEXT_FILES = {
    "text_Items_en.txt":     "Resources/text/items/text_Items_en.txt",
    "text_ItemsG2_en.txt":   "Resources/text/items/gen2/text_ItemsG2_en.txt",
    "text_ItemsG3_en.txt":   "Resources/text/items/gen3/text_ItemsG3_en.txt",
    "text_Abilities_en.txt": "Resources/text/other/en/text_Abilities_en.txt",
    "text_Types_en.txt":     "Resources/text/other/en/text_Types_en.txt",
    "ItemConverter.cs":      "PKM/Util/Conversion/ItemConverter.cs",
}

# GAME_CONFIG key -> PKHeX personal table suffix.
GAME_TABLES = {
    "Red and Blue":                        "rb",
    "Yellow":                              "y",
    "Gold and Silver":                     "gs",
    "Crystal":                             "c",
    "Ruby and Sapphire":                   "rs",
    "Emerald":                             "e",
    "FireRed and LeafGreen":               "fr",
    "Diamond and Pearl":                   "dp",
    "Platinum":                            "pt",
    "HeartGold and SoulSilver":            "hgss",
    "Black and White":                     "bw",
    "Black 2 and White 2":                 "b2w2",
    "X and Y":                             "xy",
    "Omega Ruby and Alpha Sapphire":       "ao",
    "Sun and Moon":                        "sm",
    "Ultra Sun and Ultra Moon":            "uu",
    "Sword and Shield":                    "swsh",
    "Brilliant Diamond and Shining Pearl": "bdsp",
    "Legends Arceus":                      "la",
    "Scarlet and Violet":                  "sv",
    "Legends Z-A":                         "za",
}

GAME_FILES = {
    "Red and Blue": "red_blue", "Yellow": "yellow", "Gold and Silver": "gold_silver",
    "Crystal": "crystal", "Ruby and Sapphire": "ruby_sapphire", "Emerald": "emerald",
    "FireRed and LeafGreen": "firered_leafgreen", "Diamond and Pearl": "diamond_pearl",
    "Platinum": "platinum", "HeartGold and SoulSilver": "heartgold_soulsilver",
    "Black and White": "black_white", "Black 2 and White 2": "black2_white2",
    "X and Y": "x_y", "Omega Ruby and Alpha Sapphire": "omega_ruby_alpha_sapphire",
    "Sun and Moon": "sun_moon", "Ultra Sun and Ultra Moon": "ultra_sun_ultra_moon",
    "Sword and Shield": "sword_shield",
    "Brilliant Diamond and Shining Pearl": "brilliant_diamond_shining_pearl",
    "Legends Arceus": "legends_arceus", "Scarlet and Violet": "scarlet_violet",
    "Legends Z-A": "legends_za",
}

# In Gen 3 each game shows Deoxys in a different Forme (Ruby/Sapphire Normal,
# Emerald Speed, FireRed Attack, LeafGreen Defense); PKHeX's per-game tables
# hold that Forme's stats.  (game, display name) -> table to read instead.
_TABLE_OVERRIDES = {
    ("FireRed and LeafGreen", "Deoxys (Defense)"): "lg",
}

# Values where PKHeX's table deliberately differs from the cartridge, checked
# against the vanilla decompilations (byte-matching ROM builds):
# pret/pokeyellow data/pokemon/base_stats/{kadabra,pikachu}.asm give catch
# rates 100 and 190; PKHeX's personal_y stores 96 / 163 (the Gen 2 item IDs
# TwistedSpoon / Light Ball, for its trade-legality checks).
_ROM_CORRECTIONS = {
    ("y", 64): {"catch_rate": 100},
    ("y", 25): {"catch_rate": 190},
}

# Diamond and Pearl differ in one thing: the Electirizer / Magmarizer slots
# (PKHeX's personal_dp is Pearl's table; read from the original Diamond and
# Pearl ROMs, poketool/personal{,_pearl}/personal.narc).  The combined file
# records each slot as filled when either version fills it.
#   dex: (Diamond Item1, Item2)       Pearl has them the other way round.
_DIAMOND_ITEMS = {
    125: (322, 0), 239: (322, 0), 466: (322, 0),   # Electabuzz line: Electirizer
    126: (0, 323), 240: (0, 323), 467: (0, 323),   # Magmar line: Magmarizer
}

# record size, generation
_FORMATS = {
    "rb": (0x1C, 1), "y": (0x1C, 1),
    "gs": (0x20, 2), "c": (0x20, 2),
    "rs": (0x1C, 3), "e": (0x1C, 3), "fr": (0x1C, 3), "lg": (0x1C, 3),
    "dp": (0x2C, 4), "pt": (0x2C, 4), "hgss": (0x2C, 4),
    "bw": (0x3C, 5), "b2w2": (0x4C, 5),
    "xy": (0x40, 6), "ao": (0x50, 6),
    "sm": (0x54, 7), "uu": (0x54, 7),
    "swsh": (0xB0, 8), "bdsp": (0x44, 8), "la": (0xB0, 8),
    "sv": (0x50, 9), "za": (0x50, 9),
}

# Gen 1/2 tables keep the cartridge's own type bytes.
_TYPES_GB = {
    0: "Normal", 1: "Fighting", 2: "Flying", 3: "Poison", 4: "Ground",
    5: "Rock", 7: "Bug", 8: "Ghost", 9: "Steel", 20: "Fire", 21: "Water",
    22: "Grass", 23: "Electric", 24: "Psychic", 25: "Ice", 26: "Dragon",
    27: "Dark",
}

GROWTH = {0: "Medium Fast", 1: "Erratic", 2: "Fluctuating", 3: "Medium Slow",
          4: "Fast", 5: "Slow"}

EGG_GROUPS = {1: "Monster", 2: "Water1", 3: "Bug", 4: "Flying", 5: "Field",
              6: "Fairy", 7: "Grass", 8: "HumanLike", 9: "Water3",
              10: "Mineral", 11: "Amorphous", 12: "Water2", 13: "Ditto",
              14: "Dragon", 15: "NoEggsDiscovered"}

STAT_KEYS = ("hp", "attack", "defense", "speed", "special_attack", "special_defense")
OUT_STAT_ORDER = ("hp", "attack", "defense", "special_attack", "special_defense", "speed")

# Games without the Ability mechanic: their tables carry placeholder ability
# slots (Legends: Z-A Megas copy the base form's), so abilities are left to
# the caller there.
NO_ABILITY_GAMES = {"Legends Arceus", "Legends Z-A"}

# Species fields this module is authoritative for (comparison + override).
FIELDS = ("type_1", "type_2", "catch_rate", "base_experience", "ev_yield",
          "common_item", "rare_item", "gender_ratio", "egg_cycles",
          "base_friendship", "growth_rate", "egg_group_1", "egg_group_2",
          "abilities", "hidden_ability", "weight")

# ---------------------------------------------------------------------------
# Download / text resources
# ---------------------------------------------------------------------------


def _fetch(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    print(f"  downloading {url}", file=sys.stderr)
    with urllib.request.urlopen(url, timeout=60) as resp:
        data = resp.read()
    dest.write_bytes(data)


def _path_personal(key: str) -> Path:
    p = CACHE_DIR / "personal" / f"personal_{key}"
    if not p.exists():
        _fetch(f"{_RAW}/Resources/byte/personal/personal_{key}", p)
    return p


def _path_text(name: str) -> Path:
    sub = "cs" if name.endswith(".cs") else "text"
    p = CACHE_DIR / sub / name
    if not p.exists():
        _fetch(f"{_RAW}/{_TEXT_FILES[name]}", p)
    return p


def _lines(name: str) -> list[str]:
    raw = _path_text(name).read_bytes()
    if raw[:2] in (b"\xff\xfe", b"\xfe\xff"):
        text = raw.decode("utf-16")
    else:
        text = raw.decode("utf-8-sig")
    return text.splitlines()


def _ascii_apostrophe(s: str) -> str:
    return s.replace("’", "'")


@lru_cache(maxsize=None)
def _type_names() -> list[str]:
    return _lines("text_Types_en.txt")


@lru_cache(maxsize=None)
def _ability_names() -> list[str]:
    return [_ascii_apostrophe(s) for s in _lines("text_Abilities_en.txt")]


# PKHeX spellings that differ from the official English item names.
_ITEM_NAME_FIXES = {"Upgrade": "Up-Grade"}


@lru_cache(maxsize=None)
def _item_names() -> list[str]:
    return [_ITEM_NAME_FIXES.get(n, n)
            for n in (_ascii_apostrophe(s) for s in _lines("text_Items_en.txt"))]


@lru_cache(maxsize=None)
def _item_converter(gen: int) -> list[int]:
    """Item2to4 / Item3to4 from ItemConverter.cs (data only)."""
    src = _path_text("ItemConverter.cs").read_text(encoding="utf-8")
    name = {2: "Item2to4", 3: "Item3to4"}[gen]
    m = re.search(name + r"\s*=>\s*\[(.*?)\];", src, re.S)
    body = re.sub(r"//[^\n]*", "", m.group(1))
    out = []
    for tok in body.replace("\n", " ").split(","):
        tok = tok.strip()
        if not tok:
            continue
        out.append(128 if tok == "NaN" else int(tok))
    return out


def item_name(item_id: int, gen: int) -> str | None:
    if not item_id:
        return None
    if gen in (2, 3):
        conv = _item_converter(gen)
        modern = conv[item_id] if item_id < len(conv) else 128
        if modern == 128:
            # No modern counterpart: fall back to the game's own name.
            names = _lines("text_ItemsG2_en.txt" if gen == 2 else "text_ItemsG3_en.txt")
            return names[item_id]
        item_id = modern
    return _item_names()[item_id]


# ---------------------------------------------------------------------------
# Record decoding
# ---------------------------------------------------------------------------


def _u16(b: bytes, o: int) -> int:
    return struct.unpack_from("<H", b, o)[0]


def _evs(word: int) -> dict:
    vals = {k: (word >> (2 * i)) & 3 for i, k in enumerate(STAT_KEYS)}
    return {k: vals[k] for k in OUT_STAT_ORDER}


def _decode(rec: bytes, gen: int, key: str) -> dict:
    r: dict = {}
    if gen == 1:
        hp, atk, df, spe, spc = rec[1:6]
        r["stats"] = dict(hp=hp, attack=atk, defense=df, special_attack=spc,
                          special_defense=spc, speed=spe)
        r["types"] = (_TYPES_GB[rec[6]], _TYPES_GB[rec[7]])
        r["catch_rate"], r["base_experience"] = rec[8], rec[9]
        r["growth"] = rec[0x13]
        return r
    if gen == 2:
        hp, atk, df, spe, spa, spd = rec[1:7]
        r["stats"] = dict(hp=hp, attack=atk, defense=df, special_attack=spa,
                          special_defense=spd, speed=spe)
        r["types"] = (_TYPES_GB[rec[7]], _TYPES_GB[rec[8]])
        r["catch_rate"], r["base_experience"] = rec[9], rec[0xA]
        r["items"] = [rec[0xB], rec[0xC]]
        r["gender"], r["hatch"], r["friendship"] = rec[0xD], rec[0xF], 70
        r["growth"] = rec[0x16]
        # ``dn EGG_A, EGG_B`` in pokecrystal: the first group is the high
        # nibble (PKHeX's EggGroup1/2 read them the other way round).
        r["eggs"] = (rec[0x17] >> 4, rec[0x17] & 0xF)
        return r

    hp, atk, df, spe, spa, spd = rec[0:6]
    r["stats"] = dict(hp=hp, attack=atk, defense=df, special_attack=spa,
                      special_defense=spd, speed=spe)
    tn = _type_names()
    r["types"] = (tn[rec[6]], tn[rec[7]])
    r["catch_rate"] = rec[8]
    r["evs"] = _evs(_u16(rec, 0xA))
    if gen in (3, 4):
        r["base_experience"] = rec[9]
        r["items"] = [_u16(rec, 0xC), _u16(rec, 0xE)]
        r["gender"], r["hatch"], r["friendship"], r["growth"] = rec[0x10:0x14]
        r["eggs"] = (rec[0x14], rec[0x15])
        r["abilities"] = [rec[0x16], rec[0x17]]
        if gen == 4:
            r["form_count"], r["form_stats"] = rec[0x29], _u16(rec, 0x2A)
        return r
    if gen <= 8:
        r["items"] = [_u16(rec, 0xC), _u16(rec, 0xE), _u16(rec, 0x10)]
        r["gender"], r["hatch"], r["friendship"], r["growth"] = rec[0x12:0x16]
        r["eggs"] = (rec[0x16], rec[0x17])
        if gen <= 7:
            r["abilities"] = [rec[0x18], rec[0x19], rec[0x1A]]
            r["form_stats"] = _u16(rec, 0x1C)
        else:
            r["abilities"] = [_u16(rec, 0x18), _u16(rec, 0x1A), _u16(rec, 0x1C)]
            r["form_stats"] = _u16(rec, 0x1E)
            r["present"] = bool((rec[0x21] >> 6) & 1)
        r["form_count"] = rec[0x20]
        r["base_experience"] = _u16(rec, 0x22)
        r["weight"] = _u16(rec, 0x26)
        return r
    # Gen 9 (SV, Z-A)
    r["gender"], r["hatch"], r["friendship"], r["growth"] = rec[0xC:0x10]
    r["eggs"] = (rec[0x10], rec[0x11])
    r["abilities"] = [_u16(rec, 0x12), _u16(rec, 0x14), _u16(rec, 0x16)]
    r["form_stats"], r["form_count"] = _u16(rec, 0x18), rec[0x1A]
    r["present"] = rec[0x1C] != 0
    r["weight"] = _u16(rec, 0x22)
    r["base_experience"] = _u16(rec, 0x4C)
    return r


@lru_cache(maxsize=None)
def load_table(key: str) -> list[dict]:
    size, gen = _FORMATS[key]
    data = _path_personal(key).read_bytes()
    if len(data) % size:
        raise ValueError(f"personal_{key}: {len(data)} bytes is not a multiple of {size}")
    return [_decode(data[i:i + size], gen, key) for i in range(0, len(data), size)]


def table_index(key: str, species: int, form: int) -> int:
    """PKHeX's PersonalInfo.FormIndex: alternate forms live at
    FormStatsIndex + form - 1; forms that share the base data (cosmetic
    forms, or form >= FormCount) resolve to the species itself."""
    gen = _FORMATS[key][1]
    if form == 0 or gen <= 3:
        return species
    rec = load_table(key)[species]
    fs, fc = rec.get("form_stats", 0), rec.get("form_count", 1)
    if fs <= 0 or form >= fc:
        return species
    return fs + form - 1


# ---------------------------------------------------------------------------
# Display name -> form number
# ---------------------------------------------------------------------------

# Form numbers follow PKHeX's FormConverter (= the games' form indices).
# Keys are the descriptor in parentheses / the prefix used by the scraper.
_FORM_BY_SPECIES: dict[str, dict[str, int]] = {
    "Castform":   {"Sunny": 1, "Rainy": 2, "Snowy": 3},
    "Deoxys":     {"Attack": 1, "Defense": 2, "Speed": 3},
    "Wormadam":   {"Sandy": 1, "Trash": 2},
    "Rotom":      {"Heat": 1, "Wash": 2, "Frost": 3, "Fan": 4, "Mow": 5},
    "Giratina":   {"Origin": 1},
    "Shaymin":    {"Sky": 1},
    "Dialga":     {"Origin": 1},
    "Palkia":     {"Origin": 1},
    "Basculin":   {"Blue Striped": 1, "White Striped": 2},
    "Darmanitan": {"Zen": 1, "Galarian": 2, "Galarian Zen": 3},
    "Meloetta":   {"Pirouette": 1},
    "Tornadus":   {"Therian": 1}, "Thundurus": {"Therian": 1},
    "Landorus":   {"Therian": 1}, "Enamorus": {"Therian": 1},
    "Kyurem":     {"White": 1, "Black": 2},
    "Greninja":   {"Ash": 2, "Mega": 3},
    "Meowstic":   {"Female": 1, "Mega": 2},
    "Indeedee":   {"Female": 1}, "Basculegion": {"Female": 1},
    "Oinkologne": {"Female": 1},
    "Aegislash":  {"Blade": 1},
    "Pumpkaboo":  {"Small": 1, "Large": 2, "Super": 3},
    "Gourgeist":  {"Small": 1, "Large": 2, "Super": 3},
    "Hoopa":      {"Unbound": 1},
    "Floette":    {"Eternal": 5, "Mega": 6},
    "Zygarde":    {"10": 1, "Complete": 4, "Mega": 5},
    "Oricorio":   {"Pom Pom": 1, "Pau": 2, "Sensu": 3},
    "Lycanroc":   {"Midnight": 1, "Dusk": 2},
    "Wishiwashi": {"School": 1},
    "Minior":     {"Core": 7},
    "Necrozma":   {"Dusk": 1, "Dawn": 2, "Ultra": 3},
    "Toxtricity": {"Low Key": 1, "Low Key Gmax": 1, "Amped Gmax": 0},
    "Eiscue":     {"Noice": 1},
    "Zacian":     {"Crowned": 1}, "Zamazenta": {"Crowned": 1},
    "Urshifu":    {"Rapid Strike": 1, "Rapid Strike Gmax": 1, "Single Strike Gmax": 0},
    "Calyrex":    {"Ice": 1, "Shadow": 2},
    "Ursaluna":   {"Bloodmoon": 1},
    "Palafin":    {"Hero": 1},
    "Gimmighoul": {"Roaming": 1},
    "Ogerpon":    {"Wellspring Mask": 1, "Hearthflame Mask": 2, "Cornerstone Mask": 3},
    "Terapagos":  {"Terastal": 1, "Stellar": 2},
    "Tauros":     {"Paldean Combat Breed": 1, "Paldean Blaze Breed": 2,
                   "Paldean Aqua Breed": 3},
    "Meowth":     {"Alolan": 1, "Galarian": 2},
    "Raichu":     {"Alolan": 1, "Mega X": 2, "Mega Y": 3},
    "Slowbro":    {"Mega": 1, "Galarian": 2},
    "Magearna":   {"Mega": 2, "Mega Original": 3},
    "Tatsugiri":  {"Mega Curly": 3, "Mega Droopy": 4, "Mega Stretchy": 5},
    "Charizard":  {"Mega X": 1, "Mega Y": 2},
    "Mewtwo":     {"Mega X": 1, "Mega Y": 2},
    "Absol":      {"Mega Z": 2}, "Garchomp": {"Mega Z": 2}, "Lucario": {"Mega Z": 2},
}

_PREFIXES = ("Mega", "Primal", "Alolan", "Galarian", "Hisuian", "Paldean")


def split_display_name(display: str, base: str) -> str:
    """'Mega Charizard X' -> 'Mega X'; 'Galarian Darmanitan (Zen)' ->
    'Galarian Zen'; 'Rotom (Heat)' -> 'Heat'; base name -> ''."""
    if display == base:
        return ""
    words = []
    rest = display
    for p in _PREFIXES:
        if rest.startswith(p + " "):
            words.append(p)
            rest = rest[len(p) + 1:]
            break
    m = re.match(re.escape(base) + r"(?: (\w+))?(?: \((.+)\))?$", rest)
    if not m:
        raise ValueError(f"cannot split {display!r} on {base!r}")
    if m.group(1):
        words.append(m.group(1))
    if m.group(2):
        words.append(m.group(2))
    return " ".join(words)


def form_number(base: str, descriptor: str) -> int:
    """Form index for a display-name descriptor (see split_display_name)."""
    if not descriptor:
        return 0
    table = _FORM_BY_SPECIES.get(base, {})
    if descriptor in table:
        return table[descriptor]
    if descriptor == "Gmax" or descriptor.endswith(" Gmax"):
        return 0           # Gigantamax is not a personal-table form
    if descriptor in ("Mega", "Primal", "Alolan", "Galarian", "Hisuian", "Paldean"):
        return 1
    if descriptor == "Mega X":
        return 1
    if descriptor == "Mega Y":
        return 2
    raise KeyError(f"no form number for {base!r} / {descriptor!r}")


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------


def table_key(game: str, display: str) -> str:
    return _TABLE_OVERRIDES.get((game, display), GAME_TABLES[game])


def raw_record(game: str, dex: int, display: str, base: str) -> tuple[dict, bool]:
    """The table record for an entry, and whether the table has a record of
    its own for the form (False for a form the table does not store: Gen 3-4
    Castform weathers, Gigantamax, cosmetic forms -> base species record)."""
    key = table_key(game, display)
    desc = split_display_name(display, base)
    form = form_number(base, desc)
    idx = table_index(key, dex, form)
    own = (form == 0 or idx != dex or (game, display) in _TABLE_OVERRIDES)         and "Gmax" not in desc
    return load_table(key)[idx], own


def species_fields(game: str, gen: int, dex: int, display: str, base: str) -> dict:
    """The game's species fields for one pokedex entry, in the files'
    conventions.  ``display`` is the entry key ("Rotom (Heat)") and ``base``
    the species' English name ("Rotom")."""
    rec, own = raw_record(game, dex, display, base)
    out: dict = {"_base_stats": {k: rec["stats"][k] for k in OUT_STAT_ORDER},
                 "_own_record": own}
    if own:
        # A form without its own record (Gen 3-4 Castform weathers) only
        # changes type in battle; its type is left to the caller.
        t1, t2 = rec["types"]
        out["type_1"], out["type_2"] = t1, t2
    fix = _ROM_CORRECTIONS.get((table_key(game, display), dex), {}) if own else {}
    out["catch_rate"] = fix.get("catch_rate", rec["catch_rate"])
    out["base_experience"] = rec["base_experience"]
    out["growth_rate"] = GROWTH[rec["growth"]]
    if gen <= 2:
        # Stat experience: the scraper sets ev_yield = base stats.
        out["ev_yield"] = None
    else:
        out["ev_yield"] = rec["evs"]
    if gen == 1:
        return out

    items = rec.get("items")
    merged = game == "Diamond and Pearl" and dex in _DIAMOND_ITEMS
    if merged:
        d1, d2 = _DIAMOND_ITEMS[dex]
        items = [items[0] or d1, items[1] or d2]
    if items is not None:
        named = [item_name(i, gen) for i in items]
        # Gen 3+: equal slots mean "always held" (pokeemerald
        # SetWildMonHeldItem); Gen 2 has no such rule (23 % / 2 % each).
        if gen >= 3 and items[0] and items[0] == items[1] and not merged:
            common, rare = named[0], None          # 100 %
        else:
            common, rare = named[0], named[1]
        out["common_item"], out["rare_item"] = common, rare

    out["gender_ratio"] = rec["gender"]
    out["egg_cycles"] = rec["hatch"]
    out["base_friendship"] = rec["friendship"]
    e1, e2 = rec["eggs"]
    out["egg_group_1"] = EGG_GROUPS[e1]
    out["egg_group_2"] = EGG_GROUPS[e2]

    if gen >= 3 and game not in NO_ABILITY_GAMES:
        names = _ability_names()
        a = rec["abilities"]
        abil = []
        for x in a[:2]:
            if x and names[x] not in abil:
                abil.append(names[x])
        out["abilities"] = abil
        if gen >= 5:
            # Species without a Hidden Ability repeat a regular one in the
            # third slot (Gastly: Levitate x3; every Mega).
            h = a[2]
            out["hidden_ability"] = names[h] if h and h not in a[:2] else None
    if "weight" in rec and own:
        out["weight"] = round(rec["weight"] / 10, 1)

    if game == "Legends Arceus":
        # No held items and no Eggs in the game; the table stores leftover
        # item slots and a hatch-cycle count of 0.
        out["common_item"] = out["rare_item"] = None
        out["egg_cycles"] = None
    return out


# ---------------------------------------------------------------------------
# Comparison against pokedex/*.js
# ---------------------------------------------------------------------------

GAME_GEN = {g: _FORMATS[k][1] for g, k in GAME_TABLES.items()}


def load_pokedex(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    return json.loads(text[text.index("{"):])


def base_name_of(entry: dict, display: str) -> str:
    """Species name of an entry: the first evolution_family member whose
    name occurs in the display name (longest match)."""
    names = [m["species"] for m in entry.get("evolution_family", [])]
    hits = [n for n in names if n == display or display.startswith(n + " ")
            or (" " + n) in display]
    if hits:
        return max(hits, key=len)
    return display


def compare_game(game: str, pokedex: dict) -> tuple[Counter, list]:
    gen = GAME_GEN[game]
    counts: Counter = Counter()
    rows: list = []
    for display, entry in pokedex.items():
        base = base_name_of(entry, display)
        try:
            exp = species_fields(game, gen, entry["national_dex_number"], display, base)
        except (KeyError, ValueError, IndexError) as exc:
            counts["(unmapped)"] += 1
            rows.append((display, "(unmapped)", str(exc), None))
            continue
        if exp["_own_record"] and exp["_base_stats"] != entry["base_stats"]:
            counts["base_stats"] += 1
            rows.append((display, "base_stats", entry["base_stats"], exp["_base_stats"]))
        for f in FIELDS:
            if f not in exp:
                continue
            if f == "ev_yield" and exp[f] is None:
                continue
            if f == "hidden_ability" and f not in entry:
                continue
            have = entry.get(f)
            if have != exp[f]:
                counts[f] += 1
                rows.append((display, f, have, exp[f]))
    return counts, rows


def main() -> None:
    if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--compare", action="store_true",
                    help="compare pokedex/*.js species fields with the game tables")
    ap.add_argument("--game", choices=list(GAME_TABLES), metavar="GAME")
    ap.add_argument("--dir", default="pokedex")
    ap.add_argument("--show", type=int, default=0, help="print N differences per field")
    ap.add_argument("--json", metavar="PATH", help="write all differences as JSON")
    args = ap.parse_args()
    if not args.compare:
        ap.print_help()
        return
    games = [args.game] if args.game else list(GAME_TABLES)
    total = 0
    dump = {}
    for g in games:
        path = Path(args.dir) / (GAME_FILES[g] + ".js")
        if not path.exists():
            continue
        counts, rows = compare_game(g, load_pokedex(path))
        n = sum(counts.values())
        total += n
        print(f"{g:<38} {len(load_pokedex(path)):>4} entries  "
              + (", ".join(f"{k}={v}" for k, v in sorted(counts.items())) or "OK"))
        dump[g] = [list(map(lambda x: x if isinstance(x, (str, int, type(None), dict, list)) else str(x), r))
                   for r in rows]
        if args.show:
            per = defaultdict(int)
            for disp, f, have, exp in rows:
                per[f] += 1
                if per[f] <= args.show:
                    print(f"    {disp:<28} {f:<16} file={have!r}  game={exp!r}")
    if args.json:
        Path(args.json).write_text(json.dumps(dump, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"\n{total} differences")
    sys.exit(1 if total else 0)


if __name__ == "__main__":
    main()
