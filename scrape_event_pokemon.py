#!/usr/bin/env python3
"""
scrape_event_pokemon.py — event Pokémon distributions from Bulbapedia.

Reads every Bulbapedia "List of ... event Pokémon distributions" page (see
SOURCE_PAGES), parses the event templates with ``event_wikitext.py`` and
groups the Pokémon by generation and by the page/event they were distributed
in.

    python scrape_event_pokemon.py                   # write events/generation_<n>.js
    python scrape_event_pokemon.py --list            # also write event_pokemon_list.md for review
    python scrape_event_pokemon.py --no-cache        # re-fetch the list pages first

Output: one file per generation, ``events/generation_<n>.js``, exporting
``eventPokemon = {channel: {event: [pokemon, ...]}}``.  Each Pokémon carries
the species fields of the pokedex/*.js files (dex number, types, base stats,
abilities …, taken from that generation's pokedex file) followed by the event
fields (level, OT, ID, moves, nature, IVs, ribbons, distributions with ISO
start/end dates …).

Requires the Bulbapedia proxy (see SCRAPING.md) for uncached pages.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

import bulba_fetch as bf
import event_dates as edates
import event_wikitext as ew

# (page title, channel label).  The generation comes from the page title when
# it names one, otherwise from the template (multi-generation pages such as
# the movie / Tanabata / game-based lists are split by template).
SOURCE_PAGES: list[tuple[str, str]] = [
    # Generation I
    ("List of Japanese event Pokémon distributions in Generation I", "Japanese events"),
    ("List of European language event Pokémon distributions in Generation I", "European language events"),
    ("List of game-based Pokémon distributions in Generation I", "Game-based distributions"),
    # Generation II
    ("List of Japanese event Pokémon distributions in Generation II", "Japanese events"),
    ("List of European language event Pokémon distributions in Generation II", "European language events"),
    ("List of PCNY event Pokémon distributions in Generation II", "Pokémon Center New York"),
    ("List of game-based Pokémon distributions in Generation II", "Game-based distributions"),
    # Generation III
    ("List of Japanese event Pokémon distributions in Generation III", "Japanese events"),
    ("List of English event Pokémon distributions in Generation III", "English events"),
    ("List of German event Pokémon distributions in Generation III", "German events"),
    ("List of Spanish event Pokémon distributions in Generation III", "Spanish events"),
    ("List of French event Pokémon distributions in Generation III", "French events"),
    ("List of Italian event Pokémon distributions in Generation III", "Italian events"),
    ("List of PCNY event Pokémon distributions in Generation III", "Pokémon Center New York"),
    ("List of Gather More Pokémon! Campaign event Pokémon", "Gather More Pokémon! Campaign"),
    ("List of Party of the Decade event Pokémon distributions", "Party of the Decade"),
    ("List of Journey Across America event Pokémon distributions", "Journey Across America"),
    ("List of Trade and Battle Day event Pokémon distributions", "Trade and Battle Day"),
    ("List of game-based Pokémon distributions in Generation III", "Game-based distributions"),
    ("Pokémon Colosseum Bonus Disc", "Pokémon Colosseum Bonus Disc"),
    # Generation IV
    ("List of local Japanese event Pokémon distributions in Generation IV", "Local Japanese events"),
    ("List of local English event Pokémon distributions in Generation IV", "Local English events"),
    ("List of local German event Pokémon distributions in Generation IV", "Local German events"),
    ("List of local Spanish event Pokémon distributions in Generation IV", "Local Spanish events"),
    ("List of local French event Pokémon distributions in Generation IV", "Local French events"),
    ("List of local Italian event Pokémon distributions in Generation IV", "Local Italian events"),
    ("List of local Korean event Pokémon distributions in Generation IV", "Local Korean events"),
    ("List of Wi-Fi Japanese event Pokémon distributions in Generation IV", "Wi-Fi Japanese events"),
    ("List of Wi-Fi English event Pokémon distributions in Generation IV", "Wi-Fi English events"),
    ("List of Wi-Fi German event Pokémon distributions in Generation IV", "Wi-Fi German events"),
    ("List of Wi-Fi Spanish event Pokémon distributions in Generation IV", "Wi-Fi Spanish events"),
    ("List of Wi-Fi French event Pokémon distributions in Generation IV", "Wi-Fi French events"),
    ("List of Wi-Fi Italian event Pokémon distributions in Generation IV", "Wi-Fi Italian events"),
    ("List of Wi-Fi Korean event Pokémon distributions in Generation IV", "Wi-Fi Korean events"),
    ("List of GTS event Pokémon distributions in Generation IV", "GTS events"),
    ("List of traded event Pokémon distributions in Generation IV", "Traded events"),
    ("List of game-based Pokémon distributions in Generation IV", "Game-based distributions"),
    # Generation V
    ("List of local Japanese event Pokémon distributions in Generation V", "Local Japanese events"),
    ("List of local English event Pokémon distributions in Generation V", "Local English events"),
    ("List of local German event Pokémon distributions in Generation V", "Local German events"),
    ("List of local Spanish event Pokémon distributions in Generation V", "Local Spanish events"),
    ("List of local French event Pokémon distributions in Generation V", "Local French events"),
    ("List of local Italian event Pokémon distributions in Generation V", "Local Italian events"),
    ("List of local Korean event Pokémon distributions in Generation V", "Local Korean events"),
    ("List of Wi-Fi Japanese event Pokémon distributions in Generation V", "Wi-Fi Japanese events"),
    ("List of Wi-Fi English event Pokémon distributions in Generation V", "Wi-Fi English events"),
    ("List of Wi-Fi German event Pokémon distributions in Generation V", "Wi-Fi German events"),
    ("List of Wi-Fi Spanish event Pokémon distributions in Generation V", "Wi-Fi Spanish events"),
    ("List of Wi-Fi French event Pokémon distributions in Generation V", "Wi-Fi French events"),
    ("List of Wi-Fi Italian event Pokémon distributions in Generation V", "Wi-Fi Italian events"),
    ("List of Wi-Fi Korean event Pokémon distributions in Generation V", "Wi-Fi Korean events"),
    # Generation VI
    ("List of Japanese region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Japan)"),
    ("List of American region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Americas)"),
    ("List of PAL region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (PAL)"),
    ("List of Korean region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Korea)"),
    ("List of Taiwanese region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Taiwan)"),
    ("List of Japanese region serial code event Pokémon distributions in Generation VI", "Serial code (Japan)"),
    ("List of American region serial code event Pokémon distributions in Generation VI", "Serial code (Americas)"),
    ("List of PAL region serial code event Pokémon distributions in Generation VI", "Serial code (PAL)"),
    ("List of Korean region serial code event Pokémon distributions in Generation VI", "Serial code (Korea)"),
    ("List of Taiwanese region serial code event Pokémon distributions in Generation VI", "Serial code (Taiwan)"),
    ("List of local event Pokémon distributions in Generation VI", "Local events"),
    ("List of traded event Pokémon distributions in Generation VI", "Traded events"),
    ("List of game-based Pokémon distributions in Generation VI", "Game-based distributions"),
    # Generation VII
    ("List of Japanese region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Japan)"),
    ("List of American region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Americas)"),
    ("List of PAL region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (PAL)"),
    ("List of Korean region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Korea)"),
    ("List of Taiwanese region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Taiwan)"),
    ("List of Japanese region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Japan)"),
    ("List of American region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Americas)"),
    ("List of PAL region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (PAL)"),
    ("List of Korean region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Korea)"),
    ("List of Taiwanese region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Taiwan)"),
    ("List of local event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Local events"),
    ("List of event Pokémon distributions in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!", "Let's Go, Pikachu! and Let's Go, Eevee!"),
    ("List of mainland China region event Pokémon distributions in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!", "Let's Go (mainland China)"),
    ("List of game-based Pokémon distributions in Generation VII", "Game-based distributions"),
    # Generation VIII
    ("List of event Pokémon distributions in Pokémon Sword and Shield", "Sword and Shield"),
    ("List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl", "Brilliant Diamond and Shining Pearl"),
    ("List of event Pokémon distributions in Pokémon Legends: Arceus", "Legends: Arceus"),
    ("List of traded event Pokémon distributions in Generation VIII", "Traded events"),
    ("List of game-based Pokémon distributions in Generation VIII", "Game-based distributions"),
    # Generation IX
    ("List of event Pokémon distributions in Pokémon Scarlet and Violet", "Scarlet and Violet"),
    ("List of event Pokémon distributions in Pokémon Legends: Z-A", "Legends: Z-A"),
    ("List of game-based Pokémon distributions in Generation IX", "Game-based distributions"),
    ("List of event distributions in Pokémon Champions", "Pokémon Champions"),
    # Multi-generation themed lists (mostly re-list events from the pages above)
    ("List of movie event Pokémon", "Movie events"),
    ("List of Tanabata event Pokémon", "Tanabata events"),
]

ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9}
ROMAN_OF = {v: k for k, v in ROMAN.items()}
PAGE_GEN_OVERRIDE = {
    "Sun, Moon, Ultra Sun, and Ultra Moon": 7, "Let's Go, Pikachu!": 7,
    "Sword and Shield": 8, "Brilliant Diamond": 8, "Legends: Arceus": 8,
    "Scarlet and Violet": 9, "Legends: Z-A": 9, "Pokémon Champions": 9,
}

# Generation I-V game flags -> game names
OLD_GAME_FLAGS = {
    "jred": "Red (JP)", "jgreen": "Green (JP)", "jblue": "Blue (JP)",
    "red": "Red", "blue": "Blue", "yellow": "Yellow",
    "gold": "Gold", "silver": "Silver", "crystal": "Crystal",
    "ruby": "Ruby", "sapphire": "Sapphire", "firered": "FireRed",
    "leafgreen": "LeafGreen", "emerald": "Emerald", "colo": "Colosseum",
    "box": "Pokémon Box",
    "diamond": "Diamond", "pearl": "Pearl", "platinum": "Platinum",
    "heartgold": "HeartGold", "soulsilver": "SoulSilver",
    "black": "Black", "white": "White", "black2": "Black 2", "white2": "White 2",
}
NEW_GAME_CODES = {
    "x": "X", "y": "Y", "xy": "X and Y", "oras": "Omega Ruby and Alpha Sapphire",
    "xyoras": "X, Y, Omega Ruby and Alpha Sapphire",
    "sm": "Sun and Moon", "us": "Ultra Sun and Ultra Moon", "usum": "Ultra Sun and Ultra Moon",
    "smusum": "Sun, Moon, Ultra Sun and Ultra Moon",
    "pe": "Let's Go, Pikachu! and Let's Go, Eevee!", "swsh": "Sword and Shield",
    "bdsp": "Brilliant Diamond and Shining Pearl", "la": "Legends: Arceus",
    "sv": "Scarlet and Violet", "za": "Legends: Z-A", "champs": "Pokémon Champions",
    "s": "Sun", "m": "Moon", "um": "Ultra Moon", "sus": "Sun and Ultra Sun",
    "mum": "Moon and Ultra Moon", "or": "Omega Ruby", "as": "Alpha Sapphire",
    "sw": "Sword", "sh": "Shield", "e": "Let's Go, Eevee!", "p": "Let's Go, Pikachu!",
    "v": "Violet", "scar": "Scarlet",
    "home": "Pokémon HOME", "bank": "Pokémon Bank", "go": "Pokémon GO",
}


# Distribution-row game codes (Gen VI+) -> the games they cover.
GAME_LISTS = {
    "x": ["X"], "y": ["Y"], "xy": ["X", "Y"], "oras": ["Omega Ruby", "Alpha Sapphire"],
    "or": ["Omega Ruby"], "as": ["Alpha Sapphire"],
    "xyoras": ["X", "Y", "Omega Ruby", "Alpha Sapphire"],
    "s": ["Sun"], "m": ["Moon"], "sm": ["Sun", "Moon"], "um": ["Ultra Moon"],
    "us": ["Ultra Sun", "Ultra Moon"], "usum": ["Ultra Sun", "Ultra Moon"],
    "sus": ["Sun", "Ultra Sun"], "mum": ["Moon", "Ultra Moon"],
    "smusum": ["Sun", "Moon", "Ultra Sun", "Ultra Moon"],
    "pe": ["Let's Go, Pikachu!", "Let's Go, Eevee!"], "p": ["Let's Go, Pikachu!"],
    "e": ["Let's Go, Eevee!"],
    "swsh": ["Sword", "Shield"], "sw": ["Sword"], "sh": ["Shield"],
    "bdsp": ["Brilliant Diamond", "Shining Pearl"], "la": ["Legends: Arceus"],
    "sv": ["Scarlet", "Violet"], "scar": ["Scarlet"], "v": ["Violet"],
    "za": ["Legends: Z-A"], "champs": ["Pokémon Champions"],
    "home": ["Pokémon HOME"], "bank": ["Pokémon Bank"], "go": ["Pokémon GO"],
}


def page_generation(title: str) -> int | None:
    m = re.search(r"Generation ([IVX]+)\b", title)
    if m:
        return ROMAN[m.group(1)]
    for k, g in PAGE_GEN_OVERRIDE.items():
        if k in title:
            return g
    return None


def _clean_list(vals) -> str:
    return ", ".join(v for v in (ew.clean(x) for x in vals) if v and v.lower() != "hide")


def summarize(ev: dict, channel: str) -> dict:
    """Flatten a parsed template into the fields shown in the review list."""
    p = ev["params"]
    gen = page_generation(ev["page"]) or ev["generation"]
    # Old templates on multi-gen pages carry their own generation.
    if page_generation(ev["page"]) is None:
        gen = ev["generation"]
    species = ew.clean(p.get("pokemon"))
    form = ew.clean(p.get("form"))
    moves = [ew.clean(p.get(f"move{i}")) for i in range(1, 5)]
    moves = [m for m in moves if m]
    if ev["generation"] <= 5:
        games = [name for flag, name in OLD_GAME_FLAGS.items()
                 if p.get(flag, "").strip().lower() == "yes"]
        dists = [{
            "games": ", ".join(games),
            "where": ew.clean(p.get("country") or p.get("distribution") or ""),
            "date": ew.clean(p.get("datedis") or p.get("date") or ""),
        }]
    else:
        dists = []
        for d in ev["distributions"]:
            raw = d["raw"]
            game = NEW_GAME_CODES.get(raw[0].strip().lower(), ew.clean(raw[0])) if raw else ""
            dists.append({"games": game, "where": _clean_list(raw[1:-1]),
                          "date": ew.clean(raw[-1]) if len(raw) > 1 else ""})
    headings = [h for h in ev["headings"] if h and not re.match(
        r"(List of\b|Event Pokémon$)", h, re.I)]
    return {
        "generation": gen,
        "channel": channel,
        "page": ev["page"],
        "headings": headings,
        "event": headings[-1] if headings else species,
        "species": species,
        "form": form,
        "level": ew.clean(p.get("level")),
        "shiny": p.get("shiny", "").strip().lower() == "yes",
        "egg": bool(re.search(r"hatch", p.get("ot", ""), re.I)),
        "ot": ew.clean(p.get("ot")),
        "id": ew.clean(p.get("id")),
        "moves": moves,
        "distributions": dists,
        "template": ev["template"],
    }


# Themed pages that mostly re-list Pokémon already on the per-region pages.
# Their entries are kept only when no per-region page lists the same Pokémon.
AGGREGATE_CHANNELS = {"Movie events", "Tanabata events", "Pokémon Colosseum Bonus Disc"}


def fingerprint(s: dict) -> tuple:
    return (s["generation"], s["species"], s["form"], s["level"], s["shiny"],
            s["ot"], s["id"], tuple(sorted(s["moves"])))


def collect(use_cache: bool = True, with_templates: bool = False) -> list:
    titles = [t for t, _ in SOURCE_PAGES]
    texts = bf.prefetch_wikitext(titles, use_cache=use_cache)
    out: list[dict] = []
    seen: dict[tuple, dict] = {}
    for title, channel in SOURCE_PAGES:
        text = texts.get(title)
        if not text:
            print(f"  ! missing page: {title}", file=sys.stderr)
            continue
        for ev in ew.parse_page(text, title):
            s = summarize(ev, channel)
            fp = fingerprint(s)
            if channel in AGGREGATE_CHANNELS and fp in seen:
                seen[fp].setdefault("also_listed_in", []).append(f"{channel} — {s['event']}")
                continue
            seen.setdefault(fp, s)
            out.append((ev, s) if with_templates else s)
    return out


# ---------------------------------------------------------------------------
# Full entries
# ---------------------------------------------------------------------------

POKEDEX_DIR = Path("pokedex")
# pokedex files tried (in order) for a generation's species data
GEN_POKEDEX = {
    1: ["yellow", "red_blue"],
    2: ["crystal", "gold_silver"],
    3: ["emerald", "firered_leafgreen", "ruby_sapphire"],
    4: ["heartgold_soulsilver", "platinum", "diamond_pearl"],
    5: ["black2_white2", "black_white"],
    6: ["omega_ruby_alpha_sapphire", "x_y"],
    7: ["ultra_sun_ultra_moon", "sun_moon"],
    8: ["sword_shield", "brilliant_diamond_shining_pearl", "legends_arceus"],
    9: ["scarlet_violet", "legends_za"],
}
CHANNEL_POKEDEX = {
    "Brilliant Diamond and Shining Pearl": "brilliant_diamond_shining_pearl",
    "Legends: Arceus": "legends_arceus",
    "Legends: Z-A": "legends_za",
}
SPECIES_FIELDS = ["national_dex_number", "base_stats", "ev_yield", "type_1", "type_2",
                  "catch_rate", "base_experience", "gender_ratio", "egg_cycles",
                  "base_friendship", "growth_rate", "egg_group_1", "egg_group_2",
                  "abilities", "hidden_ability", "weight"]
STAT_KEYS = [("hp", "hp"), ("atk", "attack"), ("def", "defense"),
             ("spa", "special_attack"), ("spd", "special_defense"), ("spe", "speed")]
OLD_IV_KEYS = [("HP", "hp"), ("Attack", "attack"), ("Defense", "defense"),
               ("SpAtk", "special_attack"), ("SpDef", "special_defense"), ("Speed", "speed")]
GENDERS = {"m": "Male", "male": "Male", "♂": "Male", "f": "Female", "female": "Female",
           "♀": "Female", "2": "Random", "random": "Random"}
REGIONAL = {"alola": "Alolan", "galar": "Galarian", "hisui": "Hisuian", "paldea": "Paldean"}
FORM_FILLER = {"form", "forme", "mode", "style", "pattern", "cloak", "size", "flower",
               "cap", "the", "of", "rider"}

_pokedex_cache: dict[str, dict] = {}


def load_pokedex(name: str) -> dict:
    if name not in _pokedex_cache:
        text = (POKEDEX_DIR / f"{name}.js").read_text(encoding="utf-8")
        _pokedex_cache[name] = json.loads(text[text.index("{"):text.rindex("}") + 1])
    return _pokedex_cache[name]


def _num(v: str | None):
    v = ew.clean(v)
    if re.fullmatch(r"-?\d+", v or ""):
        return int(v)
    return v or None


def _pokedex_keys(species: str, form: str, gmax: bool) -> list[str]:
    keys = []
    f = form.lower()
    for word, prefix in REGIONAL.items():
        if word in f:
            keys.append(f"{prefix} {species}")
    if gmax:
        keys.append(f"{species} (Gmax)")
    if form:
        words = [w for w in re.findall(r"[\w'-]+", form)
                 if w.lower() not in FORM_FILLER and w.lower() != species.lower()]
        if words:
            keys.append(f"{species} ({' '.join(words)})")
            keys += [f"{species} ({w})" for w in words]
    keys.append(species)
    return keys


def species_data(species: str, form: str, gmax: bool, gen: int, channel: str) -> tuple[dict, str | None]:
    """The pokedex/*.js entry for an event Pokémon and a reference to it."""
    files = ([CHANNEL_POKEDEX[channel]] if channel in CHANNEL_POKEDEX else []) + GEN_POKEDEX[gen]
    # later generations as a last resort (a species missing from a regional dex)
    files += [f for g in range(gen + 1, 10) for f in GEN_POKEDEX[g]]
    for key in _pokedex_keys(species, form, gmax):
        for f in files:
            # the pokedex files spell Farfetch’d / Sirfetch’d with a typographic apostrophe
            dex = load_pokedex(f)
            entry = dex.get(key) or dex.get(key.replace("'", "’"))
            if entry:
                return entry, f"pokedex/{f}.js#{key}"
    return {}, None


def _list_or_single(vals: list):
    vals = [v for v in vals if v not in (None, "")]
    if not vals:
        return None
    return vals[0] if len(vals) == 1 else vals


def _stats(p: dict, suffix: str):
    out = {name: _num(p.get(f"{k}{suffix}")) for k, name in STAT_KEYS}
    return None if all(v is None for v in out.values()) else out


def _tidy(text: str | None) -> str | None:
    """Capitalize the first letter and drop stray <br> separators."""
    if not text:
        return None
    text = re.sub(r",?\s*/\s*", " ", text).strip() if " / " in text and "," in text else text
    text = text[:1].upper() + text[1:]
    return re.sub(r"^Serial Code\b", "Serial code", text)


def _dist(games, method, language, location, date) -> dict:
    method, language = _tidy(method), _tidy(language)
    periods = edates.parse_dates(date)
    start, end = edates.span(periods)
    d = {"games": games, "method": method, "language": language,
         "location": location, "date": date or None,
         "start_date": start, "end_date": end}
    if len(periods) > 1:
        d["periods"] = periods
    return d


def _old_distributions(p: dict, games: list[str]) -> list[dict]:
    """Gen I-V: one template = one distribution; ``country`` may hold
    ``{{tt|Country|dates}}`` items, one per country."""
    raw_country = p.get("country") or ""
    date_text = ew.clean(p.get("datedis") or p.get("date") or "")
    per_country = [(ew.clean(m.group(1)), ew.clean(m.group(2)))
                   for m in re.finditer(r"\{\{tt\|([^|{}]+)\|([^{}]+)\}\}", raw_country)
                   if re.search(r"\d{4}", m.group(2))]
    rows = per_country or [(ew.clean(raw_country), date_text)]
    return [_dist(games, None, None, where or None, date) for where, date in rows]


def _new_distributions(ev: dict) -> list[dict]:
    """Gen VI+: one row per ``G<n>event/entry`` template."""
    out = []
    tmpl = ev["template"]
    for d in ev["distributions"]:
        raw = [ew.clean(x) for x in d["raw"]]
        raw = [None if (x or "").lower() in ("", "hide") else x for x in raw]
        code = d["raw"][0].strip().lower() if d["raw"] else ""
        games = GAME_LISTS.get(code, [raw[0]] if raw and raw[0] else [])
        date = raw[-1] if len(raw) > 1 else None
        mid = raw[1:-1]
        if len(mid) == 3:                        # Gen VI/VII, Let's Go: method, language, location
            method, language, location = mid
        elif len(mid) == 2:                      # Gen VIII: method, location
            method, language, location = mid[0], None, mid[1]
            if code == "home":                   # HOME rows: (hidden), method
                method, location = mid[1], None
        else:                                    # Gen IX: method
            method, language, location = (mid[0] if mid else None), None, None
        out.append(_dist(games, method, language, location, date))
    return out


def build_entry(ev: dict, s: dict) -> dict:
    """Full record for one event Pokémon: pokedex-style species fields, then event fields."""
    p = ev["params"]
    old = ev["generation"] <= 5
    footer = ev.get("footer") or {}
    fnamed = footer.get("named", {})
    gmax = p.get("gigantamax", "").strip().lower() == "yes"

    species_entry, pokedex_ref = species_data(s["species"], s["form"], gmax,
                                              s["generation"], s["channel"])
    rec: dict = {"species": s["species"], "form": s["form"] or None}
    for f in SPECIES_FIELDS:
        rec[f] = species_entry.get(f)
    # the event template is form-accurate for dex number and types
    ndex = re.match(r"\d+", (p.get("dexno") or p.get("ndex") or "").strip())
    if ndex:
        rec["national_dex_number"] = int(ndex.group(0))
    t1 = ew.clean(p.get("typea") if old else p.get("type"))
    t2 = ew.clean(p.get("typeb") if old else p.get("type2"))
    if t1:
        rec["type_1"], rec["type_2"] = t1, (t2 or t1)
    rec["pokedex_entry"] = pokedex_ref

    shiny_raw = p.get("shiny", "").strip().lower()
    shiny = True if shiny_raw == "yes" else ("possible" if shiny_raw in ("maybe", "egg") else False)
    is_egg = (s["egg"] or p.get("egg", "").strip().lower() == "yes"
              or p.get("encounter", "").strip().lower().startswith("egg")
              or footer.get("name", "").endswith("/egg"))
    if old:
        abilities = [ew.clean(p.get("ability1")), ew.clean(p.get("ability2"))]
        if not any(abilities) and not re.fullmatch(r"\d*", p.get("ability", "").strip()):
            abilities = [ew.clean(p.get("ability"))]
        items = [ew.clean(p.get("item1")), ew.clean(p.get("item2"))]
        if not any(items) and not re.fullmatch(r"\d*", p.get("item", "").strip()):
            items = [ew.clean(p.get("item")), ew.clean(p.get("item2"))]
        ribbons = [ew.clean(p.get("ribbon"))]
        fateful = "fateful" in (p.get("encounter", "") + p.get("encoutner", "")).lower()
        ivs = ({name: _num(ev["ivs"].get(k)) for k, name in OLD_IV_KEYS}
               if ev.get("ivs") else None)
        games = [name for flag, name in OLD_GAME_FLAGS.items()
                 if p.get(flag, "").strip().lower() == "yes"]
        dists = _old_distributions(p, games)
        ot_gender = {"blue": "Male", "red": "Female"}.get(p.get("otcolor", "").strip().lower())
        language = ew.clean(p.get("originlang")) or None
    else:
        abilities = [ew.clean(p.get(k)) for k in ("ability", "ability2", "ability3")]
        items = [ew.clean(p.get("item"))]
        ribbons = [ew.clean(p.get("ribbon")), ew.clean(p.get("ribbon2"))]
        fateful = p.get("fateful", "").strip().lower() == "yes"
        ivs = _stats(p, "iv")
        dists = _new_distributions(ev)
        games = []
        for d in dists:
            games += [g for g in d["games"] if g not in games]
        ot_gender = None
        language = ew.clean(fnamed.get("originlang")) or None

    gender = ew.clean(p.get("gender"))
    ball = ew.clean(p.get("ball"))
    moves = [ew.clean(p.get(f"move{i}")) for i in range(1, 5)]
    relearn = [m for i, m in enumerate(moves, 1)
               if m and p.get(f"move{i}rel", "").strip().lower() == "yes"]
    headings = s["headings"]
    rec.update({
        "event_name": headings[-1] if headings else s["species"],
        "event_section": " — ".join(headings[1:-1]) if len(headings) > 2 else None,
        "level": _num(p.get("level")),
        "shiny": shiny,
        "is_egg": bool(is_egg),
        "nickname": ew.clean(p.get("nick")) or None,
        # gender=tt means the gender is only explained in a tooltip (gendertt)
        "gender": GENDERS.get(gender.lower(), gender) if gender and gender != "tt" else None,
        "gender_note": ew.clean(p.get("gendertt")) or None,
        "nature": ew.clean(p.get("nature")) or None,
        "ability": _list_or_single(abilities),
        "held_item": _list_or_single(items),
        "ball": (ball if ball.endswith("Ball") else f"{ball} Ball") if ball else None,
        # Gen III lists one OT per OT-gender color, often the same name twice
        "ot": " / ".join(dict.fromkeys(s["ot"].split(" / "))) or None,
        "ot_gender": ot_gender,
        "trainer_id": s["id"] or None,
        "moves": [m for m in moves if m],
        "relearn_moves": relearn or None,
        "ivs": ivs,
        "guaranteed_perfect_ivs": _num(p.get("iv")),
        "evs": _stats(p, "ev"),
        "awakening_values": _stats(p, "av"),
        "effort_levels": _stats(p, "el"),
        "stat_points": _stats(p, "sp"),
        "met_location": ew.clean(p.get("met")) or None,
        "met_level": _num(p.get("metlevel")),
        "egg_met_location": ew.clean(p.get("eggmet")) or None,
        "fateful_encounter": fateful,
        "ribbons": [r for r in ribbons if r],
        "mark": ew.clean(p.get("mark")) or None,
        "title": ew.clean(p.get("title")) or None,
        "tera_type": ew.clean(p.get("teratype")) or None,
        "gigantamax": gmax,
        "dynamax_level": _num(p.get("dynalevel")),
        "alpha": p.get("alpha", "").strip().lower() == "yes",
        "scale": _num(fnamed.get("scale")),
        "origin_language": language,
        "wonder_card": ({"id": _num(p.get("wcid")), "title": ew.clean(p.get("wctitle")) or None}
                        if p.get("wcid") or p.get("wctitle") else None),
        "games": games,
        "distributions": dists,
        "source_page": s["page"],
    })
    if s.get("also_listed_in"):
        rec["also_listed_in"] = s["also_listed_in"]
    # generation-specific fields are only written when the template has them
    for k in ("event_section", "gender_note", "ot_gender", "relearn_moves", "guaranteed_perfect_ivs", "evs",
              "awakening_values", "effort_levels", "stat_points", "met_level",
              "egg_met_location", "mark", "title", "tera_type", "dynamax_level", "scale",
              "wonder_card"):
        if rec.get(k) is None:
            del rec[k]
    for k in ("gigantamax", "alpha"):
        if not rec[k]:
            del rec[k]
    return rec


def write_generation_files(pairs: list[tuple[dict, dict]], out_dir: Path) -> dict[int, int]:
    """events/generation_<n>.js = {channel: {event: [pokemon, ...]}}."""
    out_dir.mkdir(parents=True, exist_ok=True)
    by_gen: dict[int, dict[str, dict[str, list[dict]]]] = defaultdict(lambda: defaultdict(lambda: defaultdict(list)))
    for ev, s in pairs:
        group = s["headings"][0] if s["headings"] else s["species"]
        by_gen[s["generation"]][s["channel"]][group].append(build_entry(ev, s))
    counts = {}
    for g, channels in sorted(by_gen.items()):
        n = sum(len(v) for evs in channels.values() for v in evs.values())
        counts[g] = n
        header = (f"// Event Pokémon distributed in Generation {ROMAN_OF[g]} ({n} Pokémon), scraped from\n"
                  f"// Bulbapedia's event distribution lists by scrape_event_pokemon.py.\n"
                  f"// Structure: {{ channel/list page: {{ event: [ pokemon, ... ] }} }}.\n"
                  f"// Species fields (national_dex_number .. weight) come from the pokedex/*.js entry\n"
                  f"// named in pokedex_entry (types and dex number from the event itself); every field\n"
                  f"// from event_name on describes the distributed Pokémon.\n\n")
        body = json.dumps(channels, ensure_ascii=False, indent=4)
        (out_dir / f"generation_{g}.js").write_text(
            header + f"export const eventPokemon = {body};\n", encoding="utf-8")
    return counts


# ---------------------------------------------------------------------------
# Pokémon Dream World (Global Link promotions)
# ---------------------------------------------------------------------------

DREAM_WORLD_PAGE = "List of Pokémon Global Link promotions/Pokémon"
DREAM_WORLD_CHANNEL = "Global Link promotions"
# (parameter prefix, Global Link language group) as shown by {{glevent}}
DREAM_WORLD_REGIONS = [("jp", "Japanese"),
                       ("in", "English, French, German, Italian, Spanish"),
                       ("ko", "Korean")]
# {{glevent}} defaults: Black/White yes, Black 2/White 2 no
DREAM_WORLD_GAMES = [("black", "Black", "yes"), ("white", "White", "yes"),
                     ("black2", "Black 2", "no"), ("white2", "White 2", "no")]


def _dream_world_password(raw: str | None, translation: str | None):
    """{{glevent}} password: none/N/A -> None, unique -> "One-time use", several lines -> list."""
    key = (raw or "").strip().lower()
    if key in ("", "none", "n/a", "???"):
        return None, None
    if key == "unique":
        return "One-time use", None
    if key == "varies":
        return "Varies", None
    # one password per country: "<br>"-separated, or "CODE (Country), CODE (Country)"
    parts = [ew.clean(x) for x in re.split(r"<br\s*/?>|(?<=\)),\s*", raw, flags=re.I)]
    parts = [x for x in parts if x]
    trans = ew.clean(translation)
    return (parts[0] if len(parts) == 1 else parts), (trans if trans and trans != "N/A" else None)


_PLACE_FILLER = {"and", "the", "of", "rest", "countries", "initially", "rescheduled"}


def _place_words(text: str) -> set[str]:
    return {w.lower() for w in re.findall(r"[A-Za-z]+", text)} - _PLACE_FILLER


def _dream_world_dates(text: str) -> list[tuple[str | None, str | None]]:
    """Availability text -> [(countries, dates)].  The international column
    gives per-country runs: "Dates (Countries) / Dates (Countries)"."""
    text = text.replace("??, ", "").replace("??,", "")     # "August ??, 2012" -> "August 2012"
    segs = re.split(r"(?<=\))\s*(?:/|,)\s*", text)
    out = []
    for seg in segs:
        m = re.match(r"^(.*?)\s*\(([^()]*(?:\[[^\]]*\][^()]*)*)\)$", seg.strip())
        if m and re.search(r"\d{4}", m.group(1)):
            out.append((m.group(2).strip(), m.group(1).strip()))
        else:
            out.append((None, seg.strip()))
    return out if len(out) > 1 or out[0][0] else [(None, text.strip())]


def dream_world_entries(use_cache: bool = True) -> dict[str, list[dict]]:
    """{event: [pokemon, ...]} from the Global Link promotions page ({{glevent}})."""
    text = bf.prefetch_wikitext([DREAM_WORLD_PAGE], use_cache=use_cache)[DREAM_WORLD_PAGE]
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    events: dict[str, list[dict]] = defaultdict(list)
    i = 0
    while (j := text.find("{{glevent", i)) != -1:
        k = ew._match_close(text, j)
        _, p, pos = ew.parse_template(text[j:k])
        i = k
        pos += [""] * (12 - len(pos))
        species = ew.clean(pos[1])
        species_entry, pokedex_ref = species_data(species, "", False, 5, DREAM_WORLD_CHANNEL)
        rec: dict = {"species": species, "form": None}
        for f in SPECIES_FIELDS:
            rec[f] = species_entry.get(f)
        ndex = re.match(r"\d+", pos[0].strip())
        if ndex:
            rec["national_dex_number"] = int(ndex.group(0))
        rec["pokedex_entry"] = pokedex_ref

        event = ew.clean(p.get("anchor")) or species
        games = [name for flag, name, default in DREAM_WORLD_GAMES
                 if (p.get(flag) or default).strip().lower() == "yes"]
        dists = []
        for prefix, language in DREAM_WORLD_REGIONS:
            raw_date = p.get(f"{prefix}a")
            if not raw_date:                     # region not shown by the template
                continue
            notes = [ew.clean(m.group(1)) for m in re.finditer(r"\{\{tt\|\*\|([^{}]*)\}\}", raw_date)]
            date_text = ew.clean(raw_date).rstrip("*").strip()
            password, translation = _dream_world_password(p.get(f"{prefix}p"), p.get(f"{prefix}pt"))
            details = ew.clean(p.get(f"{prefix}i"))
            runs = _dream_world_dates(date_text)

            def _mine(where: str) -> list[str]:
                # the passwords whose country overlaps this run's countries
                return [x for x in password
                        if _place_words(re.sub(r"^\S+\s*", "", x)) & _place_words(where)]
            claimed = ({x for where, _ in runs if where for x in _mine(where)}
                       if isinstance(password, list) else set())
            for where, date in runs:
                if date in ("", "???", "N/A"):
                    date = None
                # "December 1, 2010 to ???": the start is known, the end is not
                open_end = bool(date and re.search(r"\s+to\s+\?+$", date))
                d = _dist(games, "Global Link", language, where,
                          re.sub(r"\s+to\s+\?+$", "", date) if open_end else date)
                if open_end:
                    d["date"], d["end_date"] = date, None
                pw = password
                if where and isinstance(password, list):
                    # a run naming no password's country ("Europe") gets the unclaimed ones
                    mine = _mine(where) or [x for x in password if x not in claimed] or password
                    pw = mine[0] if len(mine) == 1 else mine
                d["password"] = pw
                d["password_translation"] = translation
                d["date_note"] = "; ".join(notes) or None
                d["details"] = details or None
                dists.append({k2: v for k2, v in d.items() if v is not None or (k2 == "end_date" and d["start_date"])})

        moves = [ew.clean(pos[n]) for n in (5, 7, 9, 11)]
        rec.update({
            "event_name": event,
            "level": _num(pos[2]),
            "shiny": False,
            "gender": GENDERS.get(p.get("gender", "").strip().lower()),
            "ability": ew.clean(pos[3]) or None,
            "ball": "Dream Ball",
            "ot": "(Player's)",
            "trainer_id": "(Player's)",
            "moves": [m for m in moves if m],
            "met_location": "Entree Forest",
            "met_level": _num(pos[2]),
            "games": games,
            "distributions": dists,
            "source_page": DREAM_WORLD_PAGE,
        })
        events[event].append({k2: v for k2, v in rec.items() if v not in (None, [], "")})
    return events


def write_dream_world_file(events: dict[str, list[dict]], out_dir: Path) -> int:
    """events/dream_world.js = {"Global Link promotions": {event: [pokemon, ...]}}."""
    out_dir.mkdir(parents=True, exist_ok=True)
    n = sum(len(v) for v in events.values())
    header = (f"// Pokémon Dream World event Pokémon ({n} Pokémon): the Global Link promotions,\n"
              f"// scraped from Bulbapedia's \"{DREAM_WORLD_PAGE}\" by scrape_event_pokemon.py.\n"
              f"// Each was sent to the Dream World Friend Board, then caught in the Entree Forest\n"
              f"// (Black/White, Black 2/White 2) after the next Game Sync, so OT/ID are the player's.\n"
              f"// Structure: {{ \"{DREAM_WORLD_CHANNEL}\": {{ event: [ pokemon, ... ] }} }}; one distribution\n"
              f"// per Global Link language group, with its password and availability dates.\n\n")
    body = json.dumps({DREAM_WORLD_CHANNEL: events}, ensure_ascii=False, indent=4)
    (out_dir / "dream_world.js").write_text(header + f"export const eventPokemon = {body};\n",
                                            encoding="utf-8")
    return n


# ---------------------------------------------------------------------------
# Review list
# ---------------------------------------------------------------------------

def _line(s: dict) -> str:
    name = s["species"] + (f" ({s['form']})" if s["form"] else "")
    bits = [f"**{name}**" + (" ★" if s["shiny"] else ""), f"Lv. {s['level'] or '?'}"]
    if s["egg"]:
        bits.append("Egg")
    elif s["ot"] or s["id"]:
        bits.append(f"OT {s['ot'] or '?'} / ID {s['id'] or '?'}")
    if s["moves"]:
        bits.append("; ".join(s["moves"]))
    d = s["distributions"]
    if d:
        games = sorted({x["games"] for x in d if x["games"]})
        dates = [x["date"] for x in d if x["date"]]
        if games:
            bits.append(" / ".join(games))
        if dates:
            bits.append(dates[0] if len(dates) == 1 else f"{dates[0]} … {dates[-1]} ({len(dates)} runs)")
    line = " — ".join(bits)
    if s.get("also_listed_in"):
        line += f"  _(also listed in: {'; '.join(s['also_listed_in'])})_"
    return line


def write_list(entries: list[dict], path: Path) -> None:
    by_gen: dict[int, dict[str, dict[str, list[dict]]]] = defaultdict(lambda: defaultdict(lambda: defaultdict(list)))
    for s in entries:
        by_gen[s["generation"]][s["channel"]][s["event"]].append(s)
    lines = [
        "# Event Pokémon — review list",
        "",
        "Source: Bulbapedia event distribution lists (one section per list page).",
        f"Total event Pokémon: {len(entries)}.",
        "",
        "★ = shiny. \"Egg\" = OT/ID are the hatcher's. The themed Movie / Tanabata / "
        "Colosseum Bonus Disc pages are only kept for Pokémon not already on a "
        "per-region page; the per-region entry notes where else it is listed.",
        "",
        "## Summary",
        "",
        "| Generation | Channel / list | Events | Pokémon |",
        "|---|---|---:|---:|",
    ]
    for g in sorted(by_gen):
        for ch, evs in by_gen[g].items():
            mons = [s for v in evs.values() for s in v]
            lines.append(f"| {ROMAN_OF[g]} | {ch} | {len(evs)} | {len(mons)} |")
    for g in sorted(by_gen):
        lines += ["", f"## Generation {ROMAN_OF[g]}"]
        for ch, evs in by_gen[g].items():
            lines += ["", f"### {ch}", ""]
            for ev_name, mons in evs.items():
                if len(mons) == 1:
                    lines.append(f"- {ev_name}: {_line(mons[0])}")
                else:
                    lines.append(f"- {ev_name}")
                    lines += [f"  - {_line(s)}" for s in mons]
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--list", action="store_true", help="also write the review list")
    ap.add_argument("--list-path", default="event_pokemon_list.md")
    ap.add_argument("--output-dir", default="events")
    ap.add_argument("--no-cache", action="store_true")
    args = ap.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")
    pairs = collect(use_cache=not args.no_cache, with_templates=True)
    entries = [s for _, s in pairs]
    if args.list:
        write_list(entries, Path(args.list_path))
        print(f"wrote {args.list_path}: {len(entries)} entries")
    counts = write_generation_files(pairs, Path(args.output_dir))
    for g, n in counts.items():
        print(f"wrote {args.output_dir}/generation_{g}.js: {n} Pokémon")
    n = write_dream_world_file(dream_world_entries(use_cache=not args.no_cache), Path(args.output_dir))
    print(f"wrote {args.output_dir}/dream_world.js: {n} Pokémon")


if __name__ == "__main__":
    main()
