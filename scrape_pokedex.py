#!/usr/bin/python3
"""
Pokédex scraper for Gen 1-9 games.

Species data (stats, types, abilities, evolution families, held items …)
comes from PokéAPI (https://pokeapi.co).  Learnsets come from Bulbapedia:
every per-game move list (level-up, TM/HM, tutor, egg, prior-evolution,
transfer, form-change) is read from the ``Generation N learnset`` wikitext
via bulba_learnsets.py, so the lists match Bulbapedia's tables in
Bulbapedia's order.  Base stats are cross-checked against — and, where the
species page gives generation-specific values, taken from — Bulbapedia's
``Base stats`` section (bulba_stats.py).

Bulbapedia sits behind a Cloudflare challenge: run ``bulba_proxy.js`` with
Electron (see its header) before scraping anything that is not cached.

Games:
    Red and Blue, Yellow, Gold and Silver, Crystal,
    Ruby and Sapphire, Emerald, FireRed and LeafGreen,
    Diamond and Pearl, Platinum, HeartGold and SoulSilver,
    Black and White, Black 2 and White 2,
    X and Y, Omega Ruby and Alpha Sapphire,
    Sun and Moon, Ultra Sun and Ultra Moon,
    Sword and Shield, Brilliant Diamond and Shining Pearl, Legends Arceus,
    Scarlet and Violet, Legends Z-A

Output:
    pokedex/<filename>.js — same format as the existing split files
    scrape_report.json    — entries that fell back to PokéAPI, stat
                            disagreements, unknown move names

Usage:
    python scrape_pokedex.py                         # all games
    python scrape_pokedex.py --game "X and Y"        # one game
    python scrape_pokedex.py --no-cache              # bypass cache
    python scrape_pokedex.py --output-dir pokedex    # set output dir
    python scrape_pokedex.py --diff                  # compare against existing files
    python scrape_pokedex.py --diff --game "Emerald" # diff a single game

Requirements:
    pip install requests
"""

import argparse
import difflib
import json
import os
import re
import shutil
import sys
import tempfile
import time
from pathlib import Path

import requests

import bulba_fetch as bf
import bulba_learnsets as bl
import bulba_stats as bs
from scrape_mega_evolutions import XY_MEGAS, ORAS_MEGAS, ZA_MEGAS

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

API_BASE = "https://pokeapi.co/api/v2"
CACHE_DIR = Path(".scrape_cache_api")
REQUEST_DELAY = 0.3    # seconds between live requests
MAX_RETRIES = 3

GEN_TO_ROMAN = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
                6: "VI", 7: "VII", 8: "VIII", 9: "IX"}

# Maps our canonical game names to PokéAPI identifiers.
#   version_group  — used to filter move learnsets
#   versions       — used to filter held items (version-specific)
#   generation     — integer gen number (used for ability/form/stat filtering)
GAME_CONFIG = {
    "Red and Blue": {
        "filename":      "red_blue.js",
        "version_group": "red-blue",
        "versions":      ["red", "blue"],
        "generation":    1,
    },
    "Yellow": {
        "filename":      "yellow.js",
        "version_group": "yellow",
        "versions":      ["yellow"],
        "generation":    1,
    },
    "Gold and Silver": {
        "filename":      "gold_silver.js",
        "version_group": "gold-silver",
        "versions":      ["gold", "silver"],
        "generation":    2,
    },
    "Crystal": {
        "filename":      "crystal.js",
        "version_group": "crystal",
        "versions":      ["crystal"],
        "generation":    2,
    },
    "Ruby and Sapphire": {
        "filename":      "ruby_sapphire.js",
        "version_group": "ruby-sapphire",
        "versions":      ["ruby", "sapphire"],
        "generation":    3,
    },
    "Emerald": {
        "filename":      "emerald.js",
        "version_group": "emerald",
        "versions":      ["emerald"],
        "generation":    3,
    },
    "FireRed and LeafGreen": {
        "filename":      "firered_leafgreen.js",
        "version_group": "firered-leafgreen",
        "versions":      ["firered", "leafgreen"],
        "generation":    3,
    },
    "Diamond and Pearl": {
        "filename":      "diamond_pearl.js",
        "version_group": "diamond-pearl",
        "versions":      ["diamond", "pearl"],
        "generation":    4,
    },
    "Platinum": {
        "filename":      "platinum.js",
        "version_group": "platinum",
        "versions":      ["platinum"],
        "generation":    4,
    },
    "HeartGold and SoulSilver": {
        "filename":      "heartgold_soulsilver.js",
        "version_group": "heartgold-soulsilver",
        "versions":      ["heartgold", "soulsilver"],
        "generation":    4,
    },
    "Black and White": {
        "filename":      "black_white.js",
        "version_group": "black-white",
        "versions":      ["black", "white"],
        "generation":    5,
    },
    "Black 2 and White 2": {
        "filename":      "black2_white2.js",
        "version_group": "black-2-white-2",
        "versions":      ["black-2", "white-2"],
        "generation":    5,
    },
    "X and Y": {
        "filename":      "x_y.js",
        "version_group": "x-y",
        "versions":      ["x", "y"],
        "generation":    6,
    },
    "Omega Ruby and Alpha Sapphire": {
        "filename":      "omega_ruby_alpha_sapphire.js",
        "version_group": "omega-ruby-alpha-sapphire",
        "versions":      ["omega-ruby", "alpha-sapphire"],
        "generation":    6,
    },
    "Sun and Moon": {
        "filename":      "sun_moon.js",
        "version_group": "sun-moon",
        "versions":      ["sun", "moon"],
        "generation":    7,
    },
    "Ultra Sun and Ultra Moon": {
        "filename":      "ultra_sun_ultra_moon.js",
        "version_group": "ultra-sun-ultra-moon",
        "versions":      ["ultra-sun", "ultra-moon"],
        "generation":    7,
    },
    "Sword and Shield": {
        "filename":      "sword_shield.js",
        "version_group": "sword-shield",
        "versions":      ["sword", "shield"],
        "generation":    8,
    },
    "Brilliant Diamond and Shining Pearl": {
        "filename":      "brilliant_diamond_shining_pearl.js",
        "version_group": "brilliant-diamond-shining-pearl",
        "versions":      ["brilliant-diamond", "shining-pearl"],
        "generation":    8,
    },
    "Legends Arceus": {
        "filename":      "legends_arceus.js",
        "version_group": "legends-arceus",
        "versions":      ["legends-arceus"],
        "generation":    8,
    },
    "Scarlet and Violet": {
        "filename":      "scarlet_violet.js",
        "version_group": "scarlet-violet",
        "versions":      ["scarlet", "violet"],
        "generation":    9,
    },
    "Legends Z-A": {
        "filename":      "legends_za.js",
        "version_group": "legends-za",
        "versions":      ["legends-za"],
        "generation":    9,
        # PokéAPI has no legends-za learnsets; Bulbapedia is the only source
        # and decides which Pokémon are in the game.
        "no_pokeapi_learnsets": True,
    },
}

# Version groups PokéAPI has no learnset data for at all.  For these games
# Bulbapedia alone decides presence; everywhere else a Pokémon must have
# PokéAPI move data for the version group *and* a Bulbapedia learnset.
VERSION_GROUPS_WITHOUT_POKEAPI_LEARNSETS = {
    cfg["version_group"] for cfg in GAME_CONFIG.values() if cfg.get("no_pokeapi_learnsets")
}

# PokéAPI generation name → integer
GEN_NAME_TO_NUM: dict[str, int] = {
    "generation-i":    1,
    "generation-ii":   2,
    "generation-iii":  3,
    "generation-iv":   4,
    "generation-v":    5,
    "generation-vi":   6,
    "generation-vii":  7,
    "generation-viii": 8,
    "generation-ix":   9,
}

# PokéAPI stat slug → our field name
STAT_MAP = {
    "hp":              "hp",
    "attack":          "attack",
    "defense":         "defense",
    "special-attack":  "special_attack",
    "special-defense": "special_defense",
    "speed":           "speed",
}

# PokéAPI gender_rate (octiles of female probability; -1 = genderless)
# → ROM gender-ratio byte
GENDER_RATE_MAP = {
    -1: 255,   # genderless
     0:   0,   # always male
     1:  31,   # 12.5 % female
     2:  63,   # 25 %
     4: 127,   # 50 %
     6: 191,   # 75 %
     7: 225,   # 87.5 %
     8: 254,   # always female
}

# PokéAPI egg-group slug → our stored string
EGG_GROUP_MAP = {
    "monster":       "Monster",
    "water1":        "Water1",
    "bug":           "Bug",
    "flying":        "Flying",
    "field":         "Field",
    "fairy":         "Fairy",
    "plant":         "Grass",
    "humanshape":    "HumanLike",
    "water3":        "Water3",
    "mineral":       "Mineral",
    "indeterminate": "Amorphous",
    "water2":        "Water2",
    "ditto":         "Ditto",
    "dragon":        "Dragon",
    "no-eggs":       "NoEggsDiscovered",
}

# PokéAPI growth-rate slug → our stored string
# PokéAPI returns "fast-then-very-slow" for Fluctuating and
# "slow-then-very-fast" for Erratic — the older "fluctuating"/"erratic"
# slugs are kept as defensive aliases.
GROWTH_RATE_MAP = {
    "slow":                "Slow",
    "medium-slow":         "Medium Slow",
    "medium":              "Medium Fast",   # PokéAPI may use "medium" for medium-fast
    "medium-fast":         "Medium Fast",
    "fast":                "Fast",
    "slow-then-very-fast": "Erratic",
    "fast-then-very-slow": "Fluctuating",
    "erratic":             "Erratic",
    "fluctuating":         "Fluctuating",
}

# ---------------------------------------------------------------------------
# Form generation rules
# ---------------------------------------------------------------------------

# Form suffix patterns and the (min_gen, max_gen or None) they are valid for.
# The suffix is checked as a substring of the pokemon's slug AFTER the species slug.
# max_gen=None means no upper limit.
FORM_GENERATION_RULES: list[tuple[str, int, int | None]] = [
    # Regional forms
    ("alola",  7, None),   # Alolan forms: Gen 7+
    ("galar",  8, None),   # Galarian forms: Gen 8+
    ("hisui",  8, None),   # Hisuian forms: Gen 8+ (introduced in LA, also in SV/LZA)
    ("paldea", 9, None),   # Paldean forms: Gen 9+
    # Transformation mechanics
    ("primal", 6, 7),      # Primal Reversion: Gen 6–7 only
    # NOTE: Mega Evolutions are handled per-slug via _MEGA_GEN_RANGE below,
    # NOT by a blanket keyword rule, because different megas were introduced
    # in different generations.
    # NOTE: Gigantamax forms are handled via GMAX_VERSION_GROUPS below
    # because they only exist in Sword/Shield, not in any other Gen 8 game.
]

# Gigantamax forms only appear in Sword/Shield, even though they are Gen 8
# (BDSP and Legends Arceus are also Gen 8 but have no Gigantamax mechanic).
GMAX_VERSION_GROUPS: set[str] = {"sword-shield"}

# Per-slug generation ranges for Mega Evolutions.
# XY and ORAS megas: available in Gen 6–7 (removed in Gen 8) AND returning
# in Legends Z-A (Gen 9), which is handled as a special case in
# form_valid_for_generation.  Scarlet/Violet is also Gen 9 but does not
# have megas.
# ZA megas are handled separately via _ZA_MEGA_SLUGS because they are tied
# to a specific game (Legends Z-A).
_MEGA_GEN_RANGE: dict[str, tuple[int, int]] = {}
for _slug, _base, _vgs in XY_MEGAS + ORAS_MEGAS:
    _MEGA_GEN_RANGE[_slug] = (6, 7)

_ZA_MEGA_SLUGS: set[str] = {_slug for _slug, _base, _vgs in ZA_MEGAS}
_ZA_VERSION_GROUP = "legends-za"

# Lookup: species_slug → list of (mega_pokemon_slug,) for ZA megas.
# Used to inject ZA megas that PokéAPI doesn't list as species varieties.
_ZA_MEGA_BY_SPECIES: dict[str, list[str]] = {}
for _slug, _base, _vgs in ZA_MEGAS:
    _ZA_MEGA_BY_SPECIES.setdefault(_base, []).append(_slug)

# ---------------------------------------------------------------------------
# Historical base stat changes
#
# PokéAPI always returns CURRENT (latest-gen) stats. For games in earlier
# generations we must override with the stats that were active at that time.
#
# Source: https://bulbapedia.bulbagarden.net/wiki/Base_stats
#
# Format: {pokemon_api_slug: [(changed_in_gen, {stat_name: OLD_value, ...}), ...]}
#
# "changed_in_gen" is the generation when the stat was INCREASED to the current
# PokéAPI value. "OLD_value" is what the stat was BEFORE that generation.
#
# For a game at generation G, any change where changed_in_gen > G has not
# happened yet, so we substitute OLD_value for that stat.
# ---------------------------------------------------------------------------

STAT_CHANGE_LOG: dict[str, list[tuple[int, dict[str, int]]]] = {
    # =====================================================================
    # Generation VI changes  (old values apply for Gen 5 games: BW2)
    # =====================================================================
    "butterfree":   [(6, {"special_attack": 80})],
    "beedrill":     [(6, {"attack": 80})],
    "pidgeot":      [(6, {"speed": 91})],
    "pikachu":      [(6, {"defense": 30, "special_defense": 40})],
    "raichu":       [(6, {"speed": 100})],
    "nidoqueen":    [(6, {"attack": 82})],
    "nidoking":     [(6, {"attack": 92})],
    "clefable":     [(6, {"special_attack": 85})],
    "wigglytuff":   [(6, {"special_attack": 75})],
    "vileplume":    [(6, {"special_attack": 100})],
    "poliwrath":    [(6, {"attack": 85})],
    "alakazam":     [(6, {"special_defense": 85})],
    "victreebel":   [(6, {"special_defense": 60})],
    "golem":        [(6, {"attack": 110})],
    "ampharos":     [(6, {"defense": 75})],
    "bellossom":    [(6, {"defense": 85})],
    "azumarill":    [(6, {"special_attack": 50})],
    "jumpluff":     [(6, {"special_defense": 85})],
    "beautifly":    [(6, {"special_attack": 90})],
    "exploud":      [(6, {"special_defense": 63})],
    "staraptor":    [(6, {"special_defense": 50})],
    "roserade":     [(6, {"defense": 55})],
    "stoutland":    [(6, {"attack": 100})],
    "unfezant":     [(6, {"attack": 105})],
    "gigalith":     [(6, {"special_defense": 70})],
    "seismitoad":   [(6, {"attack": 85})],
    "leavanny":     [(6, {"special_defense": 70})],
    "scolipede":    [(6, {"attack": 90})],
    "krookodile":   [(6, {"defense": 70})],

    # =====================================================================
    # Generation VII changes  (old values apply for Gen 6 games: XY, ORAS)
    # =====================================================================
    "arbok":        [(7, {"attack": 85})],
    "dugtrio":      [(7, {"attack": 80})],
    "farfetchd":    [(7, {"attack": 65})],
    "dodrio":       [(7, {"speed": 100})],
    "electrode":    [(7, {"speed": 140})],
    "exeggutor":    [(7, {"special_defense": 65})],
    "noctowl":      [(7, {"special_attack": 76})],
    "ariados":      [(7, {"special_defense": 60})],
    "qwilfish":     [(7, {"defense": 75})],
    "magcargo":     [(7, {"hp": 50, "special_attack": 80})],
    "corsola":      [(7, {"hp": 55, "defense": 85, "special_defense": 85})],
    "mantine":      [(7, {"hp": 65})],
    "swellow":      [(7, {"special_attack": 50})],
    "pelipper":     [(7, {"special_attack": 85})],
    "masquerain":   [(7, {"special_attack": 80, "speed": 60})],
    "delcatty":     [(7, {"speed": 70})],
    "volbeat":      [(7, {"defense": 55, "special_defense": 75})],
    "illumise":     [(7, {"defense": 55, "special_defense": 75})],
    "lunatone":     [(7, {"hp": 70})],
    "solrock":      [(7, {"hp": 70})],
    "chimecho":     [(7, {"hp": 65, "defense": 70, "special_defense": 80})],
    "woobat":       [(7, {"hp": 55})],
    "crustle":      [(7, {"attack": 95})],
    "beartic":      [(7, {"attack": 110})],
    "cryogonal":    [(7, {"hp": 70, "defense": 30})],
    # Mega Alakazam also got a Sp. Def buff in Gen 7
    "alakazam-mega": [(7, {"special_defense": 95})],

    # =====================================================================
    # Generation VIII changes  (old values apply for Gen 7 games: SM, USUM)
    # =====================================================================
    # Aegislash formes: defense/sp_def of Shield and attack/sp_def of Blade
    # were 150 in Gen 6–7, reduced to 140 in Gen 8.
    # PokéAPI default variety for Aegislash is "aegislash-shield".
    "aegislash-shield": [(8, {"defense": 150, "special_defense": 150})],
    "aegislash-blade":  [(8, {"attack": 150, "special_attack": 150})],

    # =====================================================================
    # Generation VIII → IX changes  (old values apply for Gen 8 games)
    #
    # Per Bulbapedia, only Cresselia, Zacian (both forms), and Zamazenta
    # (both forms) had inter-generation stat changes between Gen 8 and Gen 9.
    #
    # NOTE: Hisuian Zorua/Zoroark and the Treasures of Ruin (Wo-Chien,
    # Chien-Pao, Ting-Lu, Chi-Yu) had stat changes WITHIN Gen 9 via patches
    # (SV launch bugs / 1.0.1 patch).  These are intra-generation patches,
    # not inter-generation changes:
    #   - Hisuian Zorua/Zoroark had correct (current) stats in LA the whole
    #     time; SV 1.0.0 had launch bugs that were corrected in patch 1.2.0.
    #     We do NOT override them — LA gets PokéAPI's current values, which
    #     match Bulbapedia's documented LA stats.
    #   - Treasures of Ruin debuted in SV; they don't appear in any pre-Gen-9
    #     game so a "for game_gen < 9" override would never trigger.
    # =====================================================================
    "cresselia":         [(9, {"defense": 120, "special_defense": 130})],
    "zacian":            [(9, {"attack": 130})],
    "zacian-crowned":    [(9, {"attack": 170})],
    "zamazenta":         [(9, {"attack": 130})],
    "zamazenta-crowned": [(9, {"attack": 130, "defense": 145, "special_defense": 145})],
}


# ---------------------------------------------------------------------------
# Per-version-group base stat overrides
#
# Some games change a Pokémon's base stats to compensate for game-specific
# mechanic differences.  In Pokémon Legends: Z-A, abilities are absent, so
# Pokémon that relied on Pure Power / Huge Power get a flat Attack boost.
#
# Source: https://www.serebii.net/legendsz-a/updatedstats.shtml
#
# Format: {pokemon_api_slug: {version_group: {stat_name: NEW_value, ...}}}
# These overrides take precedence over PokéAPI's current values when
# scraping the matching version_group.
# ---------------------------------------------------------------------------

VG_STAT_OVERRIDES: dict[str, dict[str, dict[str, int]]] = {
    # LZA absence-of-abilities Attack compensations:
    "meditite":      {"legends-za": {"attack":  56}},   # +16 (Pure Power)
    "medicham":      {"legends-za": {"attack":  84}},   # +24 (Pure Power)
    "medicham-mega": {"legends-za": {"attack": 140}},   # +40 (Pure Power)
    "mawile-mega":   {"legends-za": {"attack": 147}},   # +42 (Huge Power)
}


# ---------------------------------------------------------------------------
# JSON encoder — matches generate_split_pokedex_files.py exactly
# ---------------------------------------------------------------------------

class CompactJSONEncoder(json.JSONEncoder):
    def __init__(self, *args, **kwargs):
        if kwargs.get("indent") is None:
            kwargs["indent"] = 4
        super().__init__(*args, **kwargs)
        self.indentation_level = 0

    def encode(self, o):
        if isinstance(o, list):
            return self._encode_list(o)
        if isinstance(o, dict):
            return self._encode_object(o)
        return json.dumps(
            o,
            skipkeys=self.skipkeys,
            ensure_ascii=self.ensure_ascii,
            check_circular=self.check_circular,
            allow_nan=self.allow_nan,
            sort_keys=self.sort_keys,
            indent=self.indent,
            separators=(self.item_separator, self.key_separator),
            default=self.default if hasattr(self, "default") else None,
        )

    def _encode_object(self, o):
        if not o:
            return "{}"
        if self._put_dict_on_single_line(o):
            contents = ", ".join(
                f"{json.dumps(k)}: {self.encode(v)}" for k, v in o.items()
            )
            return f"{{{contents}}}"
        self.indentation_level += 1
        output = [
            f"{self.indent_str}{json.dumps(k)}: {self.encode(v)}"
            for k, v in o.items()
        ]
        self.indentation_level -= 1
        return "{\n" + ",\n".join(output) + "\n" + self.indent_str + "}"

    def _put_dict_on_single_line(self, o):
        flat = not any(isinstance(v, (dict, list)) for v in o.values())
        return len(o) == 3 and flat

    def _encode_list(self, o):
        if not o:
            return "[]"
        if self._put_list_on_single_line(o):
            return "[" + ", ".join(self.encode(el) for el in o) + "]"
        self.indentation_level += 1
        output = [self.indent_str + self.encode(el) for el in o]
        self.indentation_level -= 1
        return "[\n" + ",\n".join(output) + "\n" + self.indent_str + "]"

    def iterencode(self, o, **kwargs):
        return self.encode(o)

    def _put_list_on_single_line(self, o):
        return len(o) == 2 and isinstance(o[0], int) and isinstance(o[1], str)

    @property
    def indent_str(self) -> str:
        if isinstance(self.indent, int):
            return " " * (self.indentation_level * self.indent)
        if isinstance(self.indent, str):
            return self.indentation_level * self.indent
        raise ValueError(f"indent must be int or str (got {type(self.indent)})")


# ---------------------------------------------------------------------------
# HTTP / caching layer
# ---------------------------------------------------------------------------

HEADERS = {"User-Agent": "pokedex-scraper/2.0 (github.com/your-repo)"}
_last_request_time: float = 0.0


def _cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return CACHE_DIR / (safe[:220] + ".json")


def api_get(url: str, use_cache: bool = True) -> dict | None:
    """
    Fetch a PokéAPI URL, returning the parsed JSON dict.
    Responses are cached to CACHE_DIR as .json files.
    """
    global _last_request_time

    path = _cache_path(url)
    if use_cache and path.exists():
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            path.unlink()   # corrupt cache entry — re-fetch

    elapsed = time.time() - _last_request_time
    if elapsed < REQUEST_DELAY:
        time.sleep(REQUEST_DELAY - elapsed)

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=20)
            if resp.status_code == 404:
                return None     # resource doesn't exist — not an error
            resp.raise_for_status()
            _last_request_time = time.time()
            data = resp.json()
            if use_cache:
                CACHE_DIR.mkdir(exist_ok=True)
                path.write_text(json.dumps(data), encoding="utf-8")
            return data
        except requests.RequestException as exc:
            print(f"    [attempt {attempt}/{MAX_RETRIES}] {exc}")
            if attempt < MAX_RETRIES:
                time.sleep(REQUEST_DELAY * (attempt + 1))

    return None


# ---------------------------------------------------------------------------
# Name helpers
# ---------------------------------------------------------------------------

_move_name_cache: dict[str, str] = {}
_species_name_cache: dict[str, str] = {}   # slug → English display name
_ability_gen_cache: dict[str, int] = {}    # ability slug → generation number


def slug_to_title(slug: str) -> str:
    """'thunder-punch' → 'Thunder Punch'  (fast fallback, no API call)."""
    return " ".join(word.capitalize() for word in slug.split("-"))


def get_move_name(slug: str, url: str, use_cache: bool) -> str:
    """Return the official English move name for a given slug."""
    if slug in _move_name_cache:
        return _move_name_cache[slug]
    data = api_get(url, use_cache=use_cache)
    if data:
        for entry in data.get("names", []):
            if entry["language"]["name"] == "en":
                _move_name_cache[slug] = entry["name"]
                return entry["name"]
    name = slug_to_title(slug)
    _move_name_cache[slug] = name
    return name


def get_english_name(names_list: list[dict]) -> str | None:
    """Extract the English name from a PokéAPI names array."""
    for entry in names_list:
        if entry.get("language", {}).get("name") == "en":
            return entry["name"]
    return None


def get_ability_generation(slug: str, use_cache: bool) -> int:
    """Return the generation number in which this ability was introduced."""
    if slug in _ability_gen_cache:
        return _ability_gen_cache[slug]
    data = api_get(f"{API_BASE}/ability/{slug}", use_cache=use_cache)
    gen_num = 1
    if data:
        gen_name = (data.get("generation") or {}).get("name", "generation-i")
        gen_num = GEN_NAME_TO_NUM.get(gen_name, 1)
    _ability_gen_cache[slug] = gen_num
    return gen_num


# ---------------------------------------------------------------------------
# Bulbapedia learnsets
#
# All per-game move lists come from Bulbapedia's wikitext (bulba_learnsets).
# PokéAPI's learnsets are kept only as a presence signal ("does this version
# group have data for this Pokémon?") and as a last-resort fallback when a
# species has no Bulbapedia learnset page at all.
# ---------------------------------------------------------------------------

# Every move name moves.js knows, used to flag spelling drift in the scrape.
_known_move_names: set[str] | None = None


def known_move_names() -> set[str]:
    global _known_move_names
    if _known_move_names is None:
        names: set[str] = set()
        for fname in ("moves.js", "moves_gen6_9.js"):
            try:
                text = Path(fname).read_text(encoding="utf-8")
            except FileNotFoundError:
                continue
            body = text[text.index("{"):]
            try:
                data = json.loads(body)
            except json.JSONDecodeError:
                continue
            for gen_table in data.values():
                names.update(gen_table.keys())
        _known_move_names = names
    return _known_move_names


class ScrapeReport:
    """Collects everything a human should look at after a scrape."""

    def __init__(self) -> None:
        self.pokeapi_fallback: list[dict] = []     # entries with no Bulbapedia learnset
        self.bulbapedia_excluded: list[dict] = []  # PokéAPI had data, Bulbapedia says not in game
        self.stat_mismatch: list[dict] = []        # Bulbapedia stats != PokéAPI-derived stats
        self.no_bulbapedia_stats: list[dict] = []
        self.unknown_moves: dict[str, list[str]] = {}
        self.form_unmatched: list[dict] = []       # form descriptor matched no heading

    def note_moves(self, game: str, display: str, moves: list[str]) -> None:
        known = known_move_names()
        for m in moves:
            if m not in known:
                self.unknown_moves.setdefault(m, []).append(f"{game}: {display}")

    def write(self, path: str) -> None:
        payload = {k: v for k, v in self.__dict__.items()}
        Path(path).write_text(json.dumps(payload, indent=1, ensure_ascii=False), encoding="utf-8")

    def summary(self) -> str:
        return (f"pokeapi-fallback={len(self.pokeapi_fallback)} "
                f"bulbapedia-excluded={len(self.bulbapedia_excluded)} "
                f"stat-mismatch={len(self.stat_mismatch)} "
                f"no-bulbapedia-stats={len(self.no_bulbapedia_stats)} "
                f"form-unmatched={len(self.form_unmatched)} "
                f"unknown-moves={len(self.unknown_moves)}")


REPORT = ScrapeReport()
# ---------------------------------------------------------------------------
# Historical stat helpers
# ---------------------------------------------------------------------------

def apply_historical_stats(slug: str, stats: dict, game_gen: int) -> dict:
    """
    Override stats with historical values for games that predate certain
    generation changes. PokéAPI always returns current stats; this function
    walks STAT_CHANGE_LOG and patches in old values wherever the change
    hadn't occurred yet at game_gen.
    """
    changes = STAT_CHANGE_LOG.get(slug)
    if not changes:
        return stats
    result = dict(stats)
    for (changed_in_gen, old_values) in changes:
        if game_gen < changed_in_gen:
            result.update(old_values)
    return result


def apply_version_group_stat_overrides(
    slug: str, stats: dict, version_group: str,
) -> dict:
    """
    Apply game-specific (per-version-group) base stat overrides.

    Used for games that adjust base stats to compensate for missing
    mechanics (e.g. Legends Z-A removes the abilities mechanic, so
    Mawile-Mega / Medicham etc. get flat Attack increases to make up
    for the loss of Huge Power / Pure Power).
    """
    overrides = VG_STAT_OVERRIDES.get(slug, {}).get(version_group)
    if not overrides:
        return stats
    result = dict(stats)
    result.update(overrides)
    return result


# ---------------------------------------------------------------------------
# Form helpers
# ---------------------------------------------------------------------------

def form_valid_for_generation(
    pokemon_slug: str,
    species_slug: str,
    game_gen: int,
    version_group: str,
) -> bool:
    """
    Return True if this alternate form should be included for the given
    game generation based on FORM_GENERATION_RULES.

    Forms not matching any rule have no generation restriction and are
    always included (e.g. Rotom appliance forms, Deoxys formes, Giratina
    Origin, etc.), subject to the usual move-data availability check.
    """
    # ZA Mega Evolutions are exclusive to Legends Z-A, even though SV is
    # also Gen 9.
    if pokemon_slug in _ZA_MEGA_SLUGS:
        return version_group == _ZA_VERSION_GROUP

    # Other Mega Evolutions (XY/ORAS) have per-slug generation ranges
    # AND return in Legends Z-A (Gen 9, but specifically not Scarlet/Violet).
    if pokemon_slug in _MEGA_GEN_RANGE:
        min_gen, max_gen = _MEGA_GEN_RANGE[pokemon_slug]
        if min_gen <= game_gen <= max_gen:
            return True
        return version_group == _ZA_VERSION_GROUP

    # Derive the form suffix: everything after the species slug
    form_suffix = pokemon_slug[len(species_slug):].lstrip("-")

    # Gigantamax forms exist only in Sword/Shield, even though SwSh is one
    # of several Gen 8 version groups.  Gating by version group is required
    # because BDSP and Legends Arceus are also Gen 8 but have no Gigantamax.
    if "gmax" in form_suffix:
        return version_group in GMAX_VERSION_GROUPS

    for (keyword, min_gen, max_gen) in FORM_GENERATION_RULES:
        if keyword in form_suffix:
            if game_gen < min_gen:
                return False
            if max_gen is not None and game_gen > max_gen:
                return False
    return True


def derive_form_display_name(
    species_display_name: str,
    species_slug: str,
    pokemon_slug: str,
) -> str:
    """
    Derive a human-readable display name for a non-default Pokémon form.

    Examples:
        venusaur  / venusaur-mega              → "Mega Venusaur"
        charizard / charizard-mega-x           → "Mega Charizard X"
        absol     / absol-mega-z               → "Mega Absol Z"
        tatsugiri / tatsugiri-curly-mega       → "Mega Tatsugiri Curly"
        magearna  / magearna-original-mega     → "Mega Magearna Original"
        kyogre    / kyogre-primal              → "Primal Kyogre"
        rattata   / rattata-alola              → "Alolan Rattata"
        meowth    / meowth-galar               → "Galarian Meowth"
        braviary  / braviary-hisui             → "Hisuian Braviary"
        giratina  / giratina-origin            → "Giratina (Origin)"
    """
    form_suffix = pokemon_slug[len(species_slug):].lstrip("-")

    # Mega Evolutions
    if form_suffix == "mega":
        return f"Mega {species_display_name}"
    if form_suffix == "mega-x":
        return f"Mega {species_display_name} X"
    if form_suffix == "mega-y":
        return f"Mega {species_display_name} Y"
    if form_suffix == "mega-z":
        return f"Mega {species_display_name} Z"

    # Form + mega  (e.g. "curly-mega" → "Mega Tatsugiri Curly",
    #               "original-mega" → "Mega Magearna Original")
    if form_suffix.endswith("-mega"):
        form_part = form_suffix[:-5]  # strip trailing "-mega"
        form_display = form_part.replace("-", " ").title()
        return f"Mega {species_display_name} {form_display}"

    # Primal Reversion
    if form_suffix == "primal":
        return f"Primal {species_display_name}"

    # Regional forms, optionally with a sub-form:
    #   darmanitan-galar-standard   → "Galarian Darmanitan"
    #   darmanitan-galar-zen        → "Galarian Darmanitan (Zen)"
    #   tauros-paldea-combat-breed  → "Paldean Tauros (Combat Breed)"
    regional_map = {
        "alola":  "Alolan",
        "galar":  "Galarian",
        "hisui":  "Hisuian",
        "paldea": "Paldean",
    }
    parts = form_suffix.split("-")
    if parts[0] in regional_map:
        rest = [p for p in parts[1:] if p != "standard"]
        name = f"{regional_map[parts[0]]} {species_display_name}"
        if rest:
            name += " (" + " ".join(rest).title() + ")"
        return name

    # Minior: one Meteor Form (the default variety) and one Core entry; the
    # colours are cosmetic.
    if species_slug == "minior" and form_suffix in ("red",):
        return f"{species_display_name} (Core)"

    # Generic fallback — e.g. "origin" → "Giratina (Origin)"
    form_display = form_suffix.replace("-", " ").title()
    return f"{species_display_name} ({form_display})"


# Non-default PokéAPI varieties that are not worth an entry of their own:
# battle-only transformations and cosmetic variants with the base form's
# stats, types and moves.  Matched against the full pokemon slug.
EXCLUDED_FORM_PATTERNS: list[re.Pattern] = [re.compile(p) for p in (
    r"-totem",                      # Totem Pokémon (SM/USUM)
    r"^mimikyu-busted",             # Disguise broken
    r"^pikachu-(original|hoenn|sinnoh|unova|kalos|alola|partner|world)-cap$",
    r"^pikachu-(rock-star|belle|pop-star|phd|libre|cosplay)$",
    r"^(pikachu|eevee)-starter$",   # Let's Go partners
    r"^greninja-battle-bond$",      # same as Greninja until it transforms
    r"^rockruff-own-tempo$",        # ability variant
    r"^eternatus-eternamax$",       # unobtainable
    r"^cramorant-(gulping|gorging)$",
    r"^morpeko-hangry$",
    r"^maushold-family-of-three$",
    r"^dudunsparce-three-segment$",
    r"^squawkabilly-.*-plumage$",
    r"^tatsugiri-(droopy|stretchy)$",
    r"^(koraidon|miraidon)-.*-(build|mode)$",
    r"^(poltchageist-artisan|sinistcha-masterpiece)$",
    r"^zygarde-(10|50)-power-construct$",
    r"^zarude-dada$",
    r"^magearna-original$",
    r"^keldeo-resolute$",
    r"^minior-(orange|yellow|green|blue|indigo|violet)(-meteor)?$",
    r"^alcremie-.*-(cream|swirl)",  # only the default sweet is a variety anyway
)]


def form_excluded(pokemon_slug: str) -> bool:
    return any(p.search(pokemon_slug) for p in EXCLUDED_FORM_PATTERNS)


# ---------------------------------------------------------------------------
# Evolution chain parser
# ---------------------------------------------------------------------------

def _parse_evo_details(d: dict) -> dict:
    """Parse a single PokeAPI evolution_details entry into method/parameter/extras."""
    trigger = (d.get("trigger") or {}).get("name", "")
    method = None
    param = None
    extras = {}

    # -- Optional qualifiers that can appear on any trigger --
    time_of_day = d.get("time_of_day", "")
    if time_of_day:
        extras["time_of_day"] = time_of_day
    gender = d.get("gender")
    if gender is not None:
        extras["gender"] = "female" if gender == 1 else "male" if gender == 2 else gender

    if trigger == "level-up":
        if d.get("relative_physical_stats") is not None:
            method = "stats"
            param = d["relative_physical_stats"]
            if d.get("min_level"):
                extras["min_level"] = d["min_level"]
        elif d.get("location"):
            method = "location"
            param = slug_to_title(d["location"]["name"])
        elif d.get("known_move"):
            method = "move"
            param = slug_to_title(d["known_move"]["name"])
        elif d.get("min_affection") is not None and d.get("known_move_type"):
            method = "affection"
            param = slug_to_title(d["known_move_type"]["name"])
        elif d.get("known_move_type"):
            method = "move_type"
            param = slug_to_title(d["known_move_type"]["name"])
        elif d.get("held_item"):
            method = "held_item"
            param = slug_to_title(d["held_item"]["name"])
        elif d.get("min_happiness") is not None:
            method = "friendship"
            param = None
        elif d.get("min_beauty") is not None:
            method = "beauty"
            param = d["min_beauty"]
        elif d.get("party_species"):
            method = "party_species"
            param = slug_to_title(d["party_species"]["name"])
        elif d.get("party_type"):
            method = "party_type"
            param = slug_to_title(d["party_type"]["name"])
        elif d.get("needs_overworld_rain"):
            method = "rain"
            param = d.get("min_level")
        elif d.get("turn_upside_down"):
            method = "upside_down"
            param = d.get("min_level")
        elif d.get("min_level"):
            method = "level"
            param = d["min_level"]
        else:
            method = "level"
            param = None

    elif trigger == "use-item":
        method = "item"
        param = slug_to_title(d["item"]["name"]) if d.get("item") else None

    elif trigger == "trade":
        method = "trade"
        if d.get("held_item"):
            param = slug_to_title(d["held_item"]["name"])
        elif d.get("trade_species"):
            param = slug_to_title(d["trade_species"]["name"])
        else:
            param = None

    elif trigger == "shed":
        method = "shed"
        param = None

    elif trigger == "spin":
        method = "spin"
        param = None

    elif trigger in ("tower-of-darkness", "tower-of-waters"):
        method = trigger.replace("-", "_")
        param = None

    elif trigger == "three-critical-hits":
        method = "three_critical_hits"
        param = None

    elif trigger == "take-damage":
        method = "take_damage"
        param = d.get("min_damage_taken")

    elif trigger == "agile-style-move":
        method = "agile_style_move"
        param = slug_to_title(d["used_move"]["name"]) if d.get("used_move") else None

    elif trigger == "strong-style-move":
        method = "strong_style_move"
        param = slug_to_title(d["used_move"]["name"]) if d.get("used_move") else None

    elif trigger == "recoil-damage":
        method = "recoil_damage"
        param = None

    elif trigger == "use-move":
        method = "use_move"
        param = slug_to_title(d["known_move"]["name"]) if d.get("known_move") else None

    else:
        # Covers "other", "three-defeated-bisharp", "gimmmighoul-coins",
        # and any future triggers added to PokeAPI.
        method = trigger.replace("-", "_") if trigger else None
        param = None

    return {"method": method, "parameter": param, **extras}


def _flatten_chain(node: dict, parent_evo: dict) -> list[dict]:
    slug = node["species"]["name"]
    result = [{"species_slug": slug, **parent_evo}]

    for child in node.get("evolves_to", []):
        details = child.get("evolution_details", [{}])
        d = details[0] if details else {}
        evo = _parse_evo_details(d)
        result.extend(_flatten_chain(child, evo))

    return result


def fetch_evolution_family(species_data: dict, use_cache: bool) -> list[dict]:
    evo_url = (species_data.get("evolution_chain") or {}).get("url")
    if not evo_url:
        slug = species_data["name"]
        return [{"species": slug_to_title(slug), "method": None, "parameter": None}]

    chain_data = api_get(evo_url, use_cache=use_cache)
    if not chain_data:
        slug = species_data["name"]
        return [{"species": slug_to_title(slug), "method": None, "parameter": None}]

    flat = _flatten_chain(chain_data["chain"], {"method": None, "parameter": None})

    result = []
    for entry in flat:
        s = entry["species_slug"]
        if s not in _species_name_cache:
            sd = api_get(f"{API_BASE}/pokemon-species/{s}", use_cache=use_cache)
            if sd:
                name = get_english_name(sd.get("names", []))
                _species_name_cache[s] = name or slug_to_title(s)
            else:
                _species_name_cache[s] = slug_to_title(s)
        result.append({
            "species": _species_name_cache[s],
            **{k: v for k, v in entry.items() if k != "species_slug"},
        })

    return result


# ---------------------------------------------------------------------------
# Pre-evolution egg-move inheritance
#
# PokéAPI lists egg moves only on the *base* form of an evolution family
# (e.g. Bellsprout has the egg moves; Weepinbell and Victreebel have empty
# egg-move lists in PokéAPI for every pre-Gen-9 version group).
#
# In-game an evolved Pokémon can know any of its line's egg moves, because
# the egg hatches as the base form with the egg move and retains it through
# evolution.  So we walk back through evolves_from_species and union the
# pre-evolutions' egg moves into the evolved form's list.
#
# Skipped for games without a breeding mechanic — see callers.
# ---------------------------------------------------------------------------

# Games that have no breeding/Eggs mechanic.  Egg moves are not obtainable
# in these games regardless of what PokéAPI lists, so inheritance is skipped.
NO_BREEDING_VERSION_GROUPS: set[str] = {
    "legends-arceus",
    "legends-za",
}


def collect_inherited_egg_moves(
    species_data: dict,
    version_group: str,
    use_cache: bool,
) -> list[str]:
    """
    Walk up the evolution chain from this species and collect every egg move
    its pre-evolutions have for the given version_group.

    Returns a list of move display names in PokéAPI traversal order, with
    duplicates removed.  Egg moves on the species itself are NOT included
    here — that's parse_moves' job; the caller should union the two lists.
    """
    if version_group in NO_BREEDING_VERSION_GROUPS:
        return []

    inherited: list[str] = []
    current = species_data
    visited: set[str] = {current["name"]}

    while True:
        evolves_from = current.get("evolves_from_species")
        if not evolves_from:
            break
        pre_url = evolves_from.get("url")
        if not pre_url:
            break

        pre_species = api_get(pre_url, use_cache=use_cache)
        if not pre_species:
            break
        pre_slug = pre_species.get("name")
        if not pre_slug or pre_slug in visited:
            break
        visited.add(pre_slug)

        # Get the default variety's pokemon data — that's where egg moves live.
        default_variety = next(
            (v for v in pre_species.get("varieties", []) if v["is_default"]),
            None,
        )
        if not default_variety:
            current = pre_species
            continue
        pre_pokemon = api_get(default_variety["pokemon"]["url"], use_cache=use_cache)
        if not pre_pokemon:
            current = pre_species
            continue

        # Pull egg moves for this VG.
        for move_entry in pre_pokemon.get("moves", []):
            move_slug = move_entry["move"]["name"]
            move_url  = move_entry["move"]["url"]
            for vgd in move_entry.get("version_group_details", []):
                if (vgd["version_group"]["name"] == version_group
                        and vgd["move_learn_method"]["name"] == "egg"):
                    name = get_move_name(move_slug, move_url, use_cache)
                    if name not in inherited:
                        inherited.append(name)
                    break

        current = pre_species

    return inherited


# ---------------------------------------------------------------------------
# Held items
# ---------------------------------------------------------------------------

def parse_held_items(pokemon_data: dict, target_versions: list[str]) -> tuple[str | None, str | None]:
    common = None
    rare   = None

    for held in pokemon_data.get("held_items", []):
        item_name = slug_to_title(held["item"]["name"])
        for vd in held.get("version_details", []):
            if vd["version"]["name"] in target_versions:
                rarity = vd["rarity"]
                if rarity >= 50 and common is None:
                    common = item_name
                elif rarity < 50 and rare is None:
                    rare = item_name

    return common, rare


# ---------------------------------------------------------------------------
# Move parsing helper
# ---------------------------------------------------------------------------

def parse_moves(pokemon_data: dict, version_group: str, use_cache: bool):
    """
    Parse move data from a pokemon_data dict for the given version group.
    Returns (level_up, tm_hm, tutor, egg_moves, form_change, zygarde_cube,
             light_ball_egg).
    """
    level_up:       list[list] = []
    tm_hm:          list[str]  = []
    tutor:          list[str]  = []
    egg_moves:      list[str]  = []
    form_change:    list[str]  = []
    zygarde_cube:   list[str]  = []
    light_ball_egg: list[str]  = []

    for move_entry in pokemon_data.get("moves", []):
        move_slug = move_entry["move"]["name"]
        move_url  = move_entry["move"]["url"]

        for vgd in move_entry.get("version_group_details", []):
            if vgd["version_group"]["name"] != version_group:
                continue

            method = vgd["move_learn_method"]["name"]
            name   = get_move_name(move_slug, move_url, use_cache)

            if method == "level-up":
                level_up.append([vgd["level_learned_at"], name])
            elif method == "machine":
                if name not in tm_hm:
                    tm_hm.append(name)
            elif method == "tutor":
                if name not in tutor:
                    tutor.append(name)
            elif method == "egg":
                if name not in egg_moves:
                    egg_moves.append(name)
            elif method == "form-change":
                if name not in form_change:
                    form_change.append(name)
            elif method == "zygarde-cube":
                if name not in zygarde_cube:
                    zygarde_cube.append(name)
            elif method == "light-ball-egg":
                if name not in light_ball_egg:
                    light_ball_egg.append(name)

    level_up.sort(key=lambda x: x[0])
    return level_up, tm_hm, tutor, egg_moves, form_change, zygarde_cube, light_ball_egg


# ---------------------------------------------------------------------------
# Core Pokémon builder
# ---------------------------------------------------------------------------

def build_entry(
    species_data:       dict,
    pokemon_data:       dict,
    game_name:          str,
    version_group:      str,
    target_versions:    list[str],
    game_gen:           int,
    use_cache:          bool,
    display_name_override: str | None = None,
    fallback_moves_data:   dict | None = None,
) -> dict | None:
    """
    Build one Pokédex entry dict for the given game.

    display_name_override    — if set, use this as the entry's "species" key
                               (used for alternate forms like "Mega Venusaur").
    fallback_moves_data      — if the primary pokemon_data has no PokéAPI moves
                               for this version group, try this data instead
                               (Mega/Primal/Gmax forms inherit the base
                               learnset).

    Returns None if the Pokémon (or form) is not in this game.
    """
    base_species_name = (
        get_english_name(species_data.get("names", []))
        or slug_to_title(species_data["name"])
    )
    _species_name_cache[species_data["name"]] = base_species_name
    display_name = display_name_override or base_species_name
    descriptor = bl.descriptor_for(display_name, base_species_name)
    game_tag = bl.GAME_INFO[game_name][1]
    pokemon_slug = pokemon_data["name"]

    # --- PokéAPI learnsets: presence signal and last-resort fallback ---------
    api_level_up, api_tm_hm, api_tutor, api_egg, api_form_change, api_zygarde, api_light_ball = \
        parse_moves(pokemon_data, version_group, use_cache)
    api_present = bool(api_level_up or api_tm_hm or api_tutor or api_egg)
    if not api_present and fallback_moves_data:
        api_level_up, api_tm_hm, api_tutor, api_egg, api_form_change, api_zygarde, api_light_ball = \
            parse_moves(fallback_moves_data, version_group, use_cache)
        api_present = bool(api_level_up or api_tm_hm or api_tutor or api_egg)
    pokeapi_covers_vg = version_group not in VERSION_GROUPS_WITHOUT_POKEAPI_LEARNSETS

    # --- Bulbapedia learnsets (authoritative) -------------------------------
    bp = bl.get_learnsets(base_species_name, game_gen, game_name, descriptor, use_cache)

    if bp is not None and bp.found:
        if pokeapi_covers_vg and not api_present:
            # Bulbapedia's shared base table also "applies" to forms the game
            # doesn't actually have (an Alolan form in BDSP, say); PokéAPI's
            # per-version-group data is the tie-breaker there.
            return None
        level_up      = [list(m) for m in bp.level_up]
        tm_hm         = list(bp.tm_hm)
        tutor         = list(bp.tutor)
        egg_moves     = list(bp.egg)
        light_ball_egg = list(bp.light_ball_egg) or api_light_ball
        form_change   = list(bp.form_change) or api_form_change
        zygarde_cube  = list(bp.zygarde_cube) or api_zygarde
        transfer_moves = list(bp.transfer)
        prior_evolution = list(bp.prior_evolution)
        source = "bulbapedia"
        if descriptor and not bp.form_matched:
            REPORT.form_unmatched.append({"game": game_name, "species": display_name,
                                          "descriptor": sorted(descriptor)})
    elif bp is not None:
        # The page exists but has no level-up table that applies to this
        # form in this game: Bulbapedia says it is not obtainable here.
        if api_present:
            REPORT.bulbapedia_excluded.append({"game": game_name, "species": display_name})
        return None
    else:
        # No Bulbapedia learnset page for this generation.
        if not api_present:
            return None
        level_up, tm_hm, tutor, egg_moves = api_level_up, api_tm_hm, api_tutor, api_egg
        light_ball_egg, form_change, zygarde_cube = api_light_ball, api_form_change, api_zygarde
        transfer_moves, prior_evolution = [], []
        for em in collect_inherited_egg_moves(species_data, version_group, use_cache):
            if em not in egg_moves:
                egg_moves.append(em)
        source = "pokeapi"
        REPORT.pokeapi_fallback.append({"game": game_name, "species": display_name})

    if version_group in NO_BREEDING_VERSION_GROUPS:
        egg_moves, light_ball_egg = [], []

    REPORT.note_moves(game_name, display_name,
                      [m for _, m in level_up] + tm_hm + tutor + egg_moves + transfer_moves
                      + prior_evolution + form_change + zygarde_cube + light_ball_egg)

    # --- Basic fields ---
    # Use the species dex number for both fields; the PokéAPI form id
    # (10000+) for non-default varieties is not meaningful as a dex number.
    dex_num = species_data["id"]
    weight  = round(pokemon_data["weight"] / 10, 1)   # hectograms → kg

    # Base stats & EV yield — PokéAPI gives current values; patch in the
    # historical values, then prefer Bulbapedia's generation-specific block.
    raw_stats  = {k: 0 for k in STAT_MAP.values()}
    ev_yield   = {k: 0 for k in STAT_MAP.values()}
    for stat_entry in pokemon_data.get("stats", []):
        key = STAT_MAP.get(stat_entry["stat"]["name"])
        if key:
            raw_stats[key] = stat_entry["base_stat"]
            ev_yield[key]  = stat_entry["effort"]

    api_stats = apply_historical_stats(pokemon_slug, raw_stats, game_gen)
    # Gen 1: a single "Special" stat (no SpA/SpD split).  PokéAPI's SpA is
    # only sometimes the old Special; Bulbapedia's page gives the real value.
    if game_gen <= 1:
        api_stats["special_defense"] = api_stats["special_attack"]

    block = bs.lookup_stats(base_species_name, descriptor, game_gen, use_cache, game_tag)
    if block is not None and (game_gen > 1 or block.special is not None):
        base_stats = bs.gen_stats(block, game_gen)
        if base_stats != {k: api_stats[k] for k in base_stats}:
            REPORT.stat_mismatch.append({"game": game_name, "species": display_name,
                                         "bulbapedia": base_stats, "pokeapi": api_stats,
                                         "heading": block.heading})
    else:
        base_stats = dict(api_stats)
        REPORT.no_bulbapedia_stats.append({"game": game_name, "species": display_name})
    base_stats = apply_version_group_stat_overrides(pokemon_slug, base_stats, version_group)
    base_stats = {k: base_stats[k] for k in STAT_MAP.values()}

    # Gen 1-2: EV yield equals base stats (stat experience mechanic).
    if game_gen <= 2:
        ev_yield = dict(base_stats)

    # Gen 1-2: weight was not a game mechanic.
    if game_gen <= 2:
        weight = None

    # Types — use past_types when scraping a generation before a type change.
    # PokéAPI's past_types entries list the *last* generation a historical typing
    # applied.  If any entry's generation >= game_gen, those types were in effect.
    types = sorted(pokemon_data.get("types", []), key=lambda t: t["slot"])
    for pt in pokemon_data.get("past_types", []):
        pt_gen = int(pt["generation"]["url"].rstrip("/").split("/")[-1])
        if pt_gen >= game_gen:
            types = sorted(pt["types"], key=lambda t: t["slot"])
            break
    type_1  = types[0]["type"]["name"].capitalize() if len(types) > 0 else None
    type_2  = types[1]["type"]["name"].capitalize() if len(types) > 1 else type_1

    # Abilities — separate hidden ability from normal abilities.
    # Gen 1-2: abilities did not exist.
    # Gen 3-4: abilities exist but hidden abilities do not (Gen 5 feature).
    #
    # PokéAPI's top-level "abilities" list reflects the *current* generation.
    # "past_abilities" entries list slots that differed in earlier generations;
    # each entry names the *last* generation the historical config applied.
    # If an entry's generation >= game_gen, those overrides are in effect.
    abilities = []
    hidden_ability = None
    if game_gen >= 3:
        # Build slot→entry mapping from current abilities.
        effective = {
            a["slot"]: a
            for a in pokemon_data.get("abilities", [])
        }

        # Apply past_abilities overrides.  For a given slot, if multiple
        # entries qualify (past_gen >= game_gen), pick the one with the
        # smallest past_gen (most specific to our era).
        overrides: dict[int, tuple[dict, int]] = {}   # slot → (entry, gen)
        for pa in pokemon_data.get("past_abilities", []):
            pa_gen_name = pa.get("generation", {}).get("name", "generation-i")
            pa_gen = GEN_NAME_TO_NUM.get(pa_gen_name, 1)
            if pa_gen >= game_gen:
                for entry in pa.get("abilities", []):
                    slot = entry["slot"]
                    if slot not in overrides or pa_gen < overrides[slot][1]:
                        overrides[slot] = (entry, pa_gen)

        for slot, (entry, _) in overrides.items():
            if entry["ability"] is None:
                effective.pop(slot, None)       # slot didn't exist yet
            else:
                effective[slot] = entry

        for a in sorted(effective.values(), key=lambda a: a["slot"]):
            ability_slug = a["ability"]["name"]
            ability_gen  = get_ability_generation(ability_slug, use_cache)
            if ability_gen > game_gen:
                continue
            if a["is_hidden"]:
                if game_gen >= 5:
                    hidden_ability = slug_to_title(ability_slug)
                # Gen 3-4: skip hidden abilities entirely
            else:
                abilities.append(slug_to_title(ability_slug))

    # Held items
    common_item, rare_item = parse_held_items(pokemon_data, target_versions)

    # --- Species-level fields ---
    gender_rate     = species_data.get("gender_rate", -1)
    gender_ratio    = GENDER_RATE_MAP.get(gender_rate, 127)
    catch_rate      = species_data.get("capture_rate")
    base_friendship = species_data.get("base_happiness")
    base_exp        = pokemon_data.get("base_experience")
    egg_cycles      = species_data.get("hatch_counter")
    growth_rate     = GROWTH_RATE_MAP.get(
        (species_data.get("growth_rate") or {}).get("name", ""), None
    )

    raw_egg_groups = [
        EGG_GROUP_MAP.get(eg["name"], eg["name"].capitalize())
        for eg in species_data.get("egg_groups", [])
    ]
    egg_group_1 = raw_egg_groups[0] if len(raw_egg_groups) > 0 else None
    egg_group_2 = raw_egg_groups[1] if len(raw_egg_groups) > 1 else egg_group_1

    # Gen 1: no breeding, no gender, no friendship.
    if game_gen <= 1:
        gender_ratio    = None
        egg_cycles      = None
        base_friendship = None
        egg_group_1     = None
        egg_group_2     = None

    # Evolution family
    evo_family = fetch_evolution_family(species_data, use_cache)

    entry = {
        "species":             display_name,
        "rom_id":              dex_num,
        "national_dex_number": dex_num,
        "base_stats":          base_stats,
        "ev_yield":            ev_yield,
        "type_1":              type_1,
        "type_2":              type_2,
        "catch_rate":          catch_rate,
        "base_experience":     base_exp,
        "common_item":         common_item,
        "rare_item":           rare_item,
        "gender_ratio":        gender_ratio,
        "egg_cycles":          egg_cycles,
        "base_friendship":     base_friendship,
        "growth_rate":         growth_rate,
        "egg_group_1":         egg_group_1,
        "egg_group_2":         egg_group_2,
        "abilities":           abilities,
    }

    # hidden_ability only exists as a concept from Gen 5 onward.
    if game_gen >= 5:
        entry["hidden_ability"] = hidden_ability

    entry.update({
        "level_up_learnset":   level_up,
        "tm_hm_learnset":      tm_hm,
        "tutor_learnset":      tutor,
        "egg_moves":           egg_moves,
        "weight":              weight,
        "evolution_family":    evo_family,
    })

    # Special move categories — only include when non-empty to keep data clean.
    if transfer_moves:
        entry["transfer_learnset"] = transfer_moves
    if prior_evolution:
        entry["prior_evolution_learnset"] = prior_evolution
    if form_change:
        entry["form_change_learnset"] = form_change
    if zygarde_cube:
        entry["zygarde_cube_learnset"] = zygarde_cube
    if light_ball_egg:
        entry["light_ball_egg_learnset"] = light_ball_egg
    entry["learnset_source"] = source

    return entry
# ---------------------------------------------------------------------------
# Game pokédex builder
# ---------------------------------------------------------------------------

def build_game_pokedex(
    game_name: str,
    config:    dict,
    all_species: list[dict],
    use_cache: bool,
) -> dict:
    version_group          = config["version_group"]
    target_versions        = config["versions"]
    game_gen               = config["generation"]
    total                  = len(all_species)

    print(f"\n{'='*60}")
    print(f"  {game_name}  (gen {game_gen}, version-group: {version_group})")
    print(f"{'='*60}")

    pokedex: dict = {}
    skipped = 0

    for i, species_stub in enumerate(all_species, 1):
        species_slug = species_stub["name"]
        print(f"  [{i:>4}/{total}] {species_slug:<28}", end=" ", flush=True)

        # Fetch species data
        species_data = api_get(species_stub["url"], use_cache=use_cache)
        if not species_data:
            print("ERROR (species fetch failed)")
            skipped += 1
            continue

        varieties = species_data.get("varieties", [])
        if not varieties:
            print("skip (no varieties)")
            skipped += 1
            continue

        # Resolve base species display name (used for form name derivation)
        base_display_name = (
            get_english_name(species_data.get("names", []))
            or slug_to_title(species_slug)
        )
        _species_name_cache[species_slug] = base_display_name

        # ---- Default (base) form ----
        default_variety = next(
            (v for v in varieties if v["is_default"]), None
        )
        if not default_variety:
            print("skip (no default variety)")
            skipped += 1
            continue

        base_pokemon_data = api_get(default_variety["pokemon"]["url"], use_cache=use_cache)
        if not base_pokemon_data:
            print("ERROR (base pokemon fetch failed)")
            skipped += 1
            continue

        base_entry = build_entry(
            species_data, base_pokemon_data,
            game_name, version_group, target_versions, game_gen, use_cache,
        )

        forms_added = []

        if base_entry is not None:
            pokedex[base_display_name] = base_entry
            forms_added.append(base_display_name)

        # ---- Alternate / non-default forms ----
        for variety in varieties:
            if variety["is_default"]:
                continue

            form_slug = variety["pokemon"]["name"]

            # Battle-only / cosmetic variants never get an entry.
            if form_excluded(form_slug):
                continue

            # Check generation constraints for this form type
            if not form_valid_for_generation(form_slug, species_slug, game_gen, version_group):
                continue

            form_pokemon_data = api_get(variety["pokemon"]["url"], use_cache=use_cache)
            if not form_pokemon_data:
                continue

            # Mega/Primal/Gigantamax forms share the base form's movepool.
            # Pass base_pokemon_data as a fallback when the form has no moves
            # in PokéAPI (which is normal for these transformation forms).
            is_shared_learnset_form = (
                "-mega" in form_slug
                or "-primal" in form_slug
                or "-gmax" in form_slug
            )
            fallback = base_pokemon_data if is_shared_learnset_form else None

            form_display = derive_form_display_name(
                base_display_name, species_slug, form_slug
            )

            form_entry = build_entry(
                species_data, form_pokemon_data,
                game_name, version_group, target_versions, game_gen, use_cache,
                display_name_override=form_display,
                fallback_moves_data=fallback,
            )

            if form_entry is not None:
                pokedex[form_display] = form_entry
                forms_added.append(form_display)

        # ---- Inject ZA megas not listed as PokéAPI varieties ----
        if version_group == "legends-za" and species_slug in _ZA_MEGA_BY_SPECIES:
            variety_slugs = {v["pokemon"]["name"] for v in varieties
                            if not v["is_default"]}
            for mega_slug in _ZA_MEGA_BY_SPECIES[species_slug]:
                if mega_slug in variety_slugs:
                    continue  # already processed in the varieties loop
                mega_display = derive_form_display_name(
                    base_display_name, species_slug, mega_slug
                )
                if mega_display in pokedex:
                    continue
                mega_pokemon_data = api_get(
                    f"{API_BASE}/pokemon/{mega_slug}", use_cache=use_cache
                )
                if not mega_pokemon_data:
                    continue
                fallback = base_pokemon_data if base_pokemon_data else None
                form_entry = build_entry(
                    species_data, mega_pokemon_data,
                    game_name, version_group, target_versions, game_gen, use_cache,
                    display_name_override=mega_display,
                    fallback_moves_data=fallback,
                )
                if form_entry is not None:
                    pokedex[mega_display] = form_entry
                    forms_added.append(mega_display)

        if forms_added:
            print(f"ok  (#{species_data['id']}  {', '.join(forms_added)})")
        else:
            print("skip (not in game)")
            skipped += 1

    base_count = sum(1 for k, v in pokedex.items() if k == v["species"] and
                     not any(p in k for p in ("Mega ", "Primal ", "Alolan ", "Galarian ",
                                               "Hisuian ", "Paldean ")))
    alt_count = len(pokedex) - base_count
    print(f"\n  Base forms: {base_count}, Alternate/Mega forms: {alt_count}, Skipped: {skipped}")
    return pokedex


# ---------------------------------------------------------------------------
# Output
# ---------------------------------------------------------------------------

def export_js(path: str, pokedex: dict) -> None:
    with open(path, "w", encoding="utf-8") as f:
        out = json.dumps(pokedex, cls=CompactJSONEncoder, indent=4)
        f.write("export const pokedex = " + out)
    print(f"  Written {len(pokedex)} entries -> {path}")


# ---------------------------------------------------------------------------
# Master species list
# ---------------------------------------------------------------------------

def get_all_species(use_cache: bool) -> list[dict]:
    print("Fetching species list from PokeAPI...")
    data = api_get(f"{API_BASE}/pokemon-species?limit=10000", use_cache=use_cache)
    if not data:
        print("ERROR: could not fetch species list")
        return []
    results = data.get("results", [])
    print(f"  Found {len(results)} species.")
    return results


def prefetch_bulbapedia(all_species: list[dict], games: dict, use_cache: bool) -> None:
    """Pull every Bulbapedia page the selected games need into the wikitext
    cache with batched API queries (50 titles per request) before the
    per-Pokémon loop starts asking for them one at a time."""
    names: list[str] = []
    for stub in all_species:
        sd = api_get(stub["url"], use_cache=use_cache)
        if sd:
            names.append(get_english_name(sd.get("names", [])) or slug_to_title(sd["name"]))
    gens = sorted({cfg["generation"] for cfg in games.values()})
    titles = [bf.species_title(n) for n in names]          # base stats, Gen IX fallback
    for g in gens:
        titles += [bf.learnset_title(n, g) for n in names]
    print(f"Prefetching {len(titles)} Bulbapedia pages (cached ones are skipped)...")
    bf.prefetch_wikitext(titles, use_cache=use_cache)


# ---------------------------------------------------------------------------
# Diff mode
# ---------------------------------------------------------------------------

def _parse_js_pokedex(path: str) -> dict | None:
    """Read a pokedex .js file and parse its JSON content."""
    try:
        text = Path(path).read_text(encoding="utf-8")
    except FileNotFoundError:
        return None
    # Strip the "export const pokedex = " prefix
    prefix = "export const pokedex = "
    if text.startswith(prefix):
        text = text[len(prefix):]
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return None


def _diff_values(old, new, path="") -> list[str]:
    """Recursively compare two values and return a list of difference strings."""
    diffs = []
    if type(old) != type(new):
        diffs.append(f"  {path}: {old!r} -> {new!r}")
    elif isinstance(old, dict):
        all_keys = set(old) | set(new)
        for k in sorted(all_keys):
            sub = f"{path}.{k}" if path else k
            if k not in old:
                diffs.append(f"  {sub}: (missing) -> {new[k]!r}")
            elif k not in new:
                diffs.append(f"  {sub}: {old[k]!r} -> (missing)")
            else:
                diffs.extend(_diff_values(old[k], new[k], sub))
    elif isinstance(old, list):
        if old != new:
            # For short lists, show whole values; for long lists, show count
            if len(str(old)) + len(str(new)) < 200:
                diffs.append(f"  {path}: {old!r} -> {new!r}")
            else:
                diffs.append(f"  {path}: list differs (old={len(old)} items, new={len(new)} items)")
    elif old != new:
        diffs.append(f"  {path}: {old!r} -> {new!r}")
    return diffs


def _write_unified_diff(old_path: str, new_path: str, diff_path: str) -> bool:
    """
    Write a unified diff file comparing old_path and new_path.
    Returns True if differences exist, False if files are identical.
    """
    if old_path:
        try:
            old_lines = Path(old_path).read_text(encoding="utf-8").splitlines(keepends=True)
        except FileNotFoundError:
            old_lines = []
    else:
        old_lines = []

    if new_path:
        try:
            new_lines = Path(new_path).read_text(encoding="utf-8").splitlines(keepends=True)
        except FileNotFoundError:
            new_lines = []
    else:
        new_lines = []

    old_label = old_path or "/dev/null"
    new_label = new_path or "/dev/null"

    diff_lines = list(difflib.unified_diff(
        old_lines, new_lines,
        fromfile=old_label, tofile=new_label,
        lineterm="",
    ))

    if not diff_lines:
        return False

    with open(diff_path, "w", encoding="utf-8") as f:
        f.write("\n".join(diff_lines) + "\n")

    return True


def compare_pokedex_files(
    new_path: str,
    old_path: str,
    game_name: str,
    diff_dir: str | None = None,
) -> bool:
    """
    Compare a newly scraped pokedex file against the existing one.
    Prints a human-readable summary report.
    If diff_dir is set, writes a unified diff file there.
    Returns True if there are differences, False if identical.
    """
    old_data = _parse_js_pokedex(old_path)
    new_data = _parse_js_pokedex(new_path)

    filename = os.path.basename(old_path)
    print(f"\n{'='*60}")
    print(f"  {game_name}  ({filename})")
    print(f"{'='*60}")

    if old_data is None and new_data is None:
        print("  Both files missing or unparseable.")
        return False
    if old_data is None:
        print(f"  NEW FILE: {new_path} ({len(new_data)} entries)")
        print(f"  No existing file at {old_path}")
        if diff_dir:
            diff_name = Path(filename).stem + ".diff"
            _write_unified_diff("", new_path, os.path.join(diff_dir, diff_name))
            print(f"  Diff written to {diff_name}")
        return True
    if new_data is None:
        print(f"  ERROR: could not parse new file {new_path}")
        return True

    old_keys = set(old_data.keys())
    new_keys = set(new_data.keys())

    added   = sorted(new_keys - old_keys)
    removed = sorted(old_keys - new_keys)
    common  = sorted(old_keys & new_keys)

    changed = []
    unchanged = 0
    for name in common:
        diffs = _diff_values(old_data[name], new_data[name])
        if diffs:
            changed.append((name, diffs))
        else:
            unchanged += 1

    has_diff = bool(added or removed or changed)

    if added:
        print(f"\n  Added ({len(added)}):")
        for name in added:
            print(f"    + {name}")

    if removed:
        print(f"\n  Removed ({len(removed)}):")
        for name in removed:
            print(f"    - {name}")

    if changed:
        print(f"\n  Changed ({len(changed)}):")
        for name, diffs in changed:
            print(f"    {name}:")
            for d in diffs:
                print(f"      {d}")

    print(f"\n  Summary: {len(added)} added, {len(removed)} removed, "
          f"{len(changed)} changed, {unchanged} unchanged")

    if not has_diff:
        print("  No differences found.")

    # Write unified diff file
    if diff_dir and has_diff:
        diff_name = Path(filename).stem + ".diff"
        diff_path = os.path.join(diff_dir, diff_name)
        _write_unified_diff(old_path, new_path, diff_path)
        print(f"  Diff file: {diff_path}")

    return has_diff


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    # Ensure stdout can handle Unicode (e.g. Nidoran♀/♂) on Windows.
    if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    parser = argparse.ArgumentParser(
        description="Scrape Pokedex data for Gen 1-9 games from PokeAPI"
    )
    parser.add_argument(
        "--game",
        choices=list(GAME_CONFIG.keys()),
        metavar="GAME",
        help=(
            "Scrape a single game. Choices:\n  "
            + "\n  ".join(GAME_CONFIG)
        ),
    )
    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Re-fetch all data even if cached locally",
    )
    parser.add_argument(
        "--output-dir",
        default="pokedex",
        metavar="DIR",
        help="Output directory for .js files (default: pokedex/)",
    )
    parser.add_argument(
        "--diff",
        action="store_true",
        help="Scrape to a temp directory and compare against existing files",
    )
    args = parser.parse_args()

    use_cache  = not args.no_cache
    output_dir = args.output_dir

    os.makedirs(output_dir, exist_ok=True)
    CACHE_DIR.mkdir(exist_ok=True)

    all_species = get_all_species(use_cache=use_cache)
    if not all_species:
        sys.exit(1)

    games = (
        {args.game: GAME_CONFIG[args.game]}
        if args.game
        else GAME_CONFIG
    )

    prefetch_bulbapedia(all_species, games, use_cache)

    if args.diff:
        # Scrape to a temp directory, then compare against the real output dir.
        tmp_dir = tempfile.mkdtemp(prefix="pokedex_diff_")
        diff_dir = os.path.join(tmp_dir, "diffs")
        os.makedirs(diff_dir, exist_ok=True)
        print(f"\nDiff mode: scraping to temp dir {tmp_dir}")

        any_diff = False
        for game_name, config in games.items():
            pokedex  = build_game_pokedex(game_name, config, all_species, use_cache)
            tmp_path = os.path.join(tmp_dir, config["filename"])
            export_js(tmp_path, pokedex)

            old_path = os.path.join(output_dir, config["filename"])
            has_diff = compare_pokedex_files(
                tmp_path, old_path, game_name, diff_dir=diff_dir,
            )
            if has_diff:
                any_diff = True

        print(f"\n{'='*60}")
        if any_diff:
            diff_files = sorted(os.listdir(diff_dir))
            print(f"Differences found. {len(diff_files)} diff file(s) written to:")
            print(f"  {diff_dir}")
            for df in diff_files:
                print(f"    {df}")
            print(f"\nScraped files preserved at:")
            print(f"  {tmp_dir}")
        else:
            print("No differences found across all games.")
            shutil.rmtree(tmp_dir, ignore_errors=True)

        sys.exit(1 if any_diff else 0)
    else:
        for game_name, config in games.items():
            pokedex  = build_game_pokedex(game_name, config, all_species, use_cache)
            out_path = os.path.join(output_dir, config["filename"])
            export_js(out_path, pokedex)

    REPORT.write("scrape_report.json")
    print("\nReport:", REPORT.summary(), "-> scrape_report.json")
    if REPORT.unknown_moves:
        print("  Unknown move names (not in moves.js):")
        for name, where in sorted(REPORT.unknown_moves.items()):
            print(f"    {name!r}: {where[0]}{' …' if len(where) > 1 else ''}")
    print("\nAll done.")


if __name__ == "__main__":
    main()
