#!/usr/bin/python3
"""
Pokédex scraper for Gen 1-9 games using the PokéAPI (https://pokeapi.co).

Uses the structured REST API. Level-1 move ordering is corrected
by consulting Bulbapedia learnset pages (requires beautifulsoup4).

Games:
    Red and Blue, Yellow, Gold and Silver, Crystal,
    Ruby and Sapphire, Emerald, FireRed and LeafGreen,
    Diamond and Pearl, Platinum, HeartGold and SoulSilver,
    Black and White, Black 2 and White 2,
    X and Y, Omega Ruby and Alpha Sapphire,
    Sun and Moon, Ultra Sun and Ultra Moon, Sword and Shield,
    Scarlet and Violet

Output:
    pokedex/<filename>.js — same format as the existing split files

Usage:
    python scrape_pokedex.py                         # all games
    python scrape_pokedex.py --game "X and Y"        # one game
    python scrape_pokedex.py --no-cache              # bypass cache
    python scrape_pokedex.py --output-dir pokedex    # set output dir
    python scrape_pokedex.py --diff                  # compare against existing files
    python scrape_pokedex.py --diff --game "Emerald" # diff a single game

Requirements:
    pip install requests beautifulsoup4
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
from bs4 import BeautifulSoup


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

API_BASE = "https://pokeapi.co/api/v2"
BULBAPEDIA_BASE = "https://bulbapedia.bulbagarden.net/wiki"
CACHE_DIR = Path(".scrape_cache_api")
BULBAPEDIA_CACHE_DIR = Path(".scrape_cache_bulbapedia")
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
    "Scarlet and Violet": {
        "filename":      "scarlet_violet.js",
        "version_group": "scarlet-violet",
        "versions":      ["scarlet", "violet"],
        "generation":    9,
    },
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
GROWTH_RATE_MAP = {
    "slow":        "Slow",
    "medium-slow": "Medium Slow",
    "medium":      "Medium Fast",   # PokéAPI may use "medium" for medium-fast
    "medium-fast": "Medium Fast",
    "fast":        "Fast",
    "erratic":     "Erratic",
    "fluctuating": "Fluctuating",
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
    ("hisui",  9, None),   # Hisuian forms: Gen 9 (accessible in SV)
    ("paldea", 9, None),   # Paldean forms: Gen 9+
    # Transformation mechanics
    ("mega",   6, 7),      # Mega Evolution: Gen 6–7 only (removed in Gen 8)
    ("primal", 6, 7),      # Primal Reversion: Gen 6–7 only
]

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
    "aegislash-blade":  [(8, {"attack": 150, "special_defense": 150})],

    # =====================================================================
    # Generation IX changes  (old values apply for Gen 8 games: SwSh)
    # =====================================================================
    "cresselia":         [(9, {"defense": 120, "special_defense": 130})],
    "zorua-hisui":       [(9, {"hp": 35, "attack": 60, "special_attack": 85, "special_defense": 70})],
    "zoroark-hisui":     [(9, {"hp": 55, "attack": 100, "special_attack": 125, "special_defense": 110})],
    "zacian":            [(9, {"attack": 130})],
    "zacian-crowned":    [(9, {"attack": 170})],
    "zamazenta":         [(9, {"attack": 130})],
    "zamazenta-crowned": [(9, {"attack": 130, "defense": 145, "special_defense": 145})],
    "wo-chien":          [(9, {"attack": 90, "special_attack": 100})],
    "chien-pao":         [(9, {"attack": 130})],
    "ting-lu":           [(9, {"hp": 165, "defense": 130, "special_attack": 50})],
    "chi-yu":            [(9, {"special_attack": 145})],
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
# Bulbapedia level-1 move ordering
# ---------------------------------------------------------------------------

# When Bulbapedia has multiple level columns (one per version pair within
# a generation), this maps the PokéAPI version_group slug to the header
# text of the column we should read.  Entries not listed here use the
# first level column (or the single "Level" column) by default.
VERSION_GROUP_TO_BP_COLUMN: dict[str, str] = {
    # Gen 4: columns are "DP" and "PtHGSS"
    "diamond-pearl":          "DP",
    "platinum":               "PtHGSS",
    "heartgold-soulsilver":   "PtHGSS",
    # Gen 5: columns are "BW" and "B2W2"
    "black-white":            "BW",
    "black-2-white-2":        "B2W2",
    # Gen 6: columns are "XY" and "ORAS"
    "x-y":                    "XY",
    "omega-ruby-alpha-sapphire": "ORAS",
    # Gen 7: columns are "SM" and "USUM"
    "sun-moon":               "SM",
    "ultra-sun-ultra-moon":   "USUM",
}

_bulbapedia_level1_cache: dict[str, list[str] | None] = {}


def _bulbapedia_cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return BULBAPEDIA_CACHE_DIR / (safe[:220] + ".html")


def fetch_bulbapedia_html(url: str, use_cache: bool = True) -> str | None:
    """Fetch a Bulbapedia page, returning raw HTML. Cached to disk."""
    global _last_request_time

    path = _bulbapedia_cache_path(url)
    if use_cache and path.exists():
        return path.read_text(encoding="utf-8")

    elapsed = time.time() - _last_request_time
    if elapsed < REQUEST_DELAY:
        time.sleep(REQUEST_DELAY - elapsed)

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=20)
            if resp.status_code == 404:
                return None
            resp.raise_for_status()
            _last_request_time = time.time()
            html = resp.text
            if use_cache:
                BULBAPEDIA_CACHE_DIR.mkdir(exist_ok=True)
                path.write_text(html, encoding="utf-8")
            return html
        except requests.RequestException as exc:
            print(f"    [bulbapedia attempt {attempt}/{MAX_RETRIES}] {exc}")
            if attempt < MAX_RETRIES:
                time.sleep(REQUEST_DELAY * (attempt + 1))

    return None


def _parse_level1_moves_from_table(
    table,
    preferred_level_col: str | None = None,
) -> list[str]:
    """
    Extract level-1 move names from a Bulbapedia sortable learnset table,
    preserving the order they appear on the page.

    preferred_level_col — if set, the header text of the level column to
        read (e.g. "USUM", "B2W2").  Falls back to the first column when
        the header is not found or the table has a single "Level" column.
    """
    # Determine column indices from the header row.
    # Some generations have multiple level columns (e.g. SM + USUM).
    move_col = 1   # default fallback
    level_col = 0  # default: first column
    header_row = table.find("tr")
    if header_row:
        headers = header_row.find_all("th")
        for i, th in enumerate(headers):
            text = th.get_text(strip=True)
            if text == "Move":
                move_col = i
            if preferred_level_col and text == preferred_level_col:
                level_col = i

    moves = []
    for row in table.find_all("tr"):
        cells = row.find_all("td")
        if len(cells) <= max(move_col, level_col):
            continue
        # Level cell contains <span style="display:none">01</span>1
        # Remove hidden sort-key spans before extracting the visible text.
        level_cell = cells[level_col]
        for hidden in level_cell.find_all("span", style=re.compile(r"display:\s*none")):
            hidden.decompose()
        level_text = level_cell.get_text(strip=True)
        if level_text not in ("1", "—"):
            # Once we pass level 1, we can stop — the table is sorted by level.
            if level_text.isdigit() and int(level_text) > 1:
                break
            continue
        if level_text != "1":
            continue
        # Move name column, inside an <a> tag.
        link = cells[move_col].find("a")
        if link:
            moves.append(link.get_text(strip=True))
    return moves


def _bulbapedia_learnset_url(species_name: str, game_gen: int) -> str:
    """Build the Bulbapedia learnset URL for the given species and generation."""
    encoded = species_name.replace(" ", "_")
    if game_gen <= 8:
        roman = GEN_TO_ROMAN[game_gen]
        return f"{BULBAPEDIA_BASE}/{encoded}_(Pok%C3%A9mon)/Generation_{roman}_learnset"
    else:
        return f"{BULBAPEDIA_BASE}/{encoded}_(Pok%C3%A9mon)"


def get_bulbapedia_level1_order(
    species_name: str,
    form_name: str | None,
    game_gen: int,
    use_cache: bool,
    version_group: str = "",
) -> list[str] | None:
    """
    Fetch the Bulbapedia learnset page and return the level-1 moves in order.

    species_name  — English species name (e.g. "Charizard", "Raichu")
    form_name     — form sub-heading to look for (e.g. "Alolan Raichu"),
                    or None for the default / base form.
    game_gen      — generation number (1-9)
    version_group — PokéAPI version-group slug, used to pick the correct
                    level column when Bulbapedia has multiple per gen.

    Returns a list of move names in the correct order, or None on failure.
    """
    cache_key = f"{species_name}|{form_name}|{game_gen}|{version_group}"
    if cache_key in _bulbapedia_level1_cache:
        return _bulbapedia_level1_cache[cache_key]

    url = _bulbapedia_learnset_url(species_name, game_gen)
    html = fetch_bulbapedia_html(url, use_cache)
    if not html:
        _bulbapedia_level1_cache[cache_key] = None
        return None

    soup = BeautifulSoup(html, "html.parser")

    # Find the "By leveling up" heading (h4 with id="By_leveling_up").
    heading = soup.find("span", id="By_leveling_up")
    if not heading:
        _bulbapedia_level1_cache[cache_key] = None
        return None

    # Walk forward from the heading to find the right table.
    # If form_name is set, look for an h5 matching that form name first.
    node = heading.parent  # the <h4>
    target_table = None

    def _find_sortable_table(element):
        """Find a sortable table: either the element itself or nested inside."""
        if element.name == "table" and "sortable" in (element.get("class") or []):
            return element
        return element.find("table", class_="sortable")

    if form_name:
        # Look for an h5 whose text matches form_name, then get its table.
        # Use word-set matching as a fallback for cases where our display name
        # format differs from Bulbapedia's heading (e.g. "Meowstic (Female)"
        # vs "Female Meowstic", "Rotom (Heat)" vs "Heat Rotom").
        form_words = set(re.sub(r"[()]", "", form_name).lower().split())
        for sibling in node.find_next_siblings():
            if sibling.name == "h4":
                break
            if sibling.name == "h5":
                h5_text = sibling.get_text(strip=True)
                h5_words = set(h5_text.lower().split())
                if form_name in h5_text or form_words.issubset(h5_words):
                    for s2 in sibling.find_next_siblings():
                        if s2.name in ("h4", "h5"):
                            break
                        tbl = _find_sortable_table(s2)
                        if tbl:
                            target_table = tbl
                            break
                    break
    else:
        # No form specified — find the first sortable table after the heading.
        for sibling in node.find_next_siblings():
            if sibling.name == "h4":
                break
            tbl = _find_sortable_table(sibling)
            if tbl:
                target_table = tbl
                break

    if not target_table:
        _bulbapedia_level1_cache[cache_key] = None
        return None

    preferred_col = VERSION_GROUP_TO_BP_COLUMN.get(version_group)
    moves = _parse_level1_moves_from_table(target_table, preferred_col)
    result = moves if moves else None
    _bulbapedia_level1_cache[cache_key] = result
    return result


def reorder_level1_moves(
    level_up: list[list],
    species_name: str,
    form_name: str | None,
    game_gen: int,
    use_cache: bool,
    version_group: str = "",
) -> list[list]:
    """
    Reorder level-1 moves in level_up according to the order on Bulbapedia.
    Moves at other levels are not affected.
    """
    level1 = [m for m in level_up if m[0] == 1]
    if len(level1) <= 1:
        return level_up

    bp_order = get_bulbapedia_level1_order(
        species_name, form_name, game_gen, use_cache, version_group,
    )
    if not bp_order:
        return level_up

    # Build a sort key: position in Bulbapedia list (unknown moves go to end).
    order_map = {name: i for i, name in enumerate(bp_order)}

    level1.sort(key=lambda m: order_map.get(m[1], len(bp_order)))

    # Re-insert sorted level-1 moves at their original position.
    result = []
    level1_iter = iter(level1)
    for m in level_up:
        if m[0] == 1:
            nxt = next(level1_iter, None)
            if nxt is not None:
                result.append(nxt)
        else:
            result.append(m)
    return result


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


# ---------------------------------------------------------------------------
# Form helpers
# ---------------------------------------------------------------------------

def form_valid_for_generation(pokemon_slug: str, species_slug: str, game_gen: int) -> bool:
    """
    Return True if this alternate form should be included for the given
    game generation based on FORM_GENERATION_RULES.

    Forms not matching any rule have no generation restriction and are
    always included (e.g. Rotom appliance forms, Deoxys formes, Giratina
    Origin, etc.), subject to the usual move-data availability check.
    """
    # Derive the form suffix: everything after the species slug
    form_suffix = pokemon_slug[len(species_slug):].lstrip("-")
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
        venusaur  / venusaur-mega        → "Mega Venusaur"
        charizard / charizard-mega-x     → "Mega Charizard X"
        kyogre    / kyogre-primal        → "Primal Kyogre"
        rattata   / rattata-alola        → "Alolan Rattata"
        meowth    / meowth-galar         → "Galarian Meowth"
        braviary  / braviary-hisui       → "Hisuian Braviary"
        giratina  / giratina-origin      → "Giratina (Origin)"
    """
    form_suffix = pokemon_slug[len(species_slug):].lstrip("-")

    # Mega Evolutions
    if form_suffix == "mega":
        return f"Mega {species_display_name}"
    if form_suffix == "mega-x":
        return f"Mega {species_display_name} X"
    if form_suffix == "mega-y":
        return f"Mega {species_display_name} Y"

    # Primal Reversion
    if form_suffix == "primal":
        return f"Primal {species_display_name}"

    # Regional forms
    regional_map = {
        "alola":  "Alolan",
        "galar":  "Galarian",
        "hisui":  "Hisuian",
        "paldea": "Paldean",
    }
    if form_suffix in regional_map:
        return f"{regional_map[form_suffix]} {species_display_name}"

    # Generic fallback — e.g. "origin" → "Giratina (Origin)"
    form_display = form_suffix.replace("-", " ").title()
    return f"{species_display_name} ({form_display})"


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
    version_group:      str,
    target_versions:    list[str],
    game_gen:           int,
    use_cache:          bool,
    display_name_override: str | None = None,
    fallback_moves_data:   dict | None = None,
) -> dict | None:
    """
    Build one Pokédex entry dict for the given game.

    display_name_override — if set, use this as the entry's "species" key
                            (used for alternate forms like "Mega Venusaur").
    fallback_moves_data   — if the primary pokemon_data has no moves for this
                            version group, try this data instead (used for
                            Mega/Primal forms which inherit the base learnset).

    Returns None if the Pokémon has no moves in this version group.
    """
    # --- Filter moves for this version group ---
    level_up, tm_hm, tutor, egg_moves, form_change, zygarde_cube, light_ball_egg = \
        parse_moves(pokemon_data, version_group, use_cache)

    # If this form has no move data and we have a fallback (base form), use it.
    if not level_up and not tm_hm and not tutor and not egg_moves and fallback_moves_data:
        level_up, tm_hm, tutor, egg_moves, form_change, zygarde_cube, light_ball_egg = \
            parse_moves(fallback_moves_data, version_group, use_cache)

    # A Pokémon not in this game has no move data for the version group.
    if not level_up and not tm_hm and not tutor and not egg_moves:
        return None

    # --- Basic fields ---
    # Use the species dex number for both fields; the PokéAPI form id
    # (10000+) for non-default varieties is not meaningful as a dex number.
    dex_num = species_data["id"]
    weight  = round(pokemon_data["weight"] / 10, 1)   # hectograms → kg

    # Base stats & EV yield — patch historical values before returning
    raw_stats  = {k: 0 for k in STAT_MAP.values()}
    ev_yield   = {k: 0 for k in STAT_MAP.values()}
    for stat_entry in pokemon_data.get("stats", []):
        key = STAT_MAP.get(stat_entry["stat"]["name"])
        if key:
            raw_stats[key] = stat_entry["base_stat"]
            ev_yield[key]  = stat_entry["effort"]

    pokemon_slug = pokemon_data["name"]
    base_stats = apply_historical_stats(pokemon_slug, raw_stats, game_gen)

    # Gen 1: a single "Special" stat (no SpA/SpD split).
    # PokéAPI returns the Gen 2+ split values. The original Special stat
    # equals what became special_attack in Gen 2; set both to that value.
    if game_gen <= 1:
        base_stats["special_defense"] = base_stats["special_attack"]

    # Gen 1-2: EV yield equals base stats (stat experience mechanic).
    if game_gen <= 2:
        ev_yield = dict(base_stats)

    # Gen 1-2: weight was not a game mechanic.
    if game_gen <= 2:
        weight = None

    # Types
    types   = sorted(pokemon_data.get("types", []), key=lambda t: t["slot"])
    type_1  = types[0]["type"]["name"].capitalize() if len(types) > 0 else None
    type_2  = types[1]["type"]["name"].capitalize() if len(types) > 1 else type_1

    # Abilities — separate hidden ability from normal abilities.
    # Gen 1-2: abilities did not exist.
    # Gen 3-4: abilities exist but hidden abilities do not (Gen 5 feature).
    abilities = []
    hidden_ability = None
    if game_gen >= 3:
        for a in sorted(pokemon_data.get("abilities", []), key=lambda a: a["slot"]):
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

    # Display name
    if display_name_override:
        display_name = display_name_override
    else:
        display_name = (
            get_english_name(species_data.get("names", []))
            or slug_to_title(species_data["name"])
        )
        _species_name_cache[species_data["name"]] = display_name

    # Reorder level-1 moves using Bulbapedia as a reference for correct order.
    base_species_name = (
        get_english_name(species_data.get("names", []))
        or slug_to_title(species_data["name"])
    )
    # For regional forms, pass the display name as the form sub-heading to
    # locate the correct table on Bulbapedia (e.g. "Alolan Raichu").
    form_heading = display_name_override if display_name_override else None
    level_up = reorder_level1_moves(
        level_up, base_species_name, form_heading, game_gen, use_cache,
        version_group,
    )

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
    if form_change:
        entry["form_change_learnset"] = form_change
    if zygarde_cube:
        entry["zygarde_cube_learnset"] = zygarde_cube
    if light_ball_egg:
        entry["light_ball_egg_learnset"] = light_ball_egg

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
    version_group   = config["version_group"]
    target_versions = config["versions"]
    game_gen        = config["generation"]
    total           = len(all_species)

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
            version_group, target_versions, game_gen, use_cache,
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

            # Check generation constraints for this form type
            if not form_valid_for_generation(form_slug, species_slug, game_gen):
                continue

            form_pokemon_data = api_get(variety["pokemon"]["url"], use_cache=use_cache)
            if not form_pokemon_data:
                continue

            # Mega/Primal forms typically share the base form's learnset.
            # Pass base_pokemon_data as a fallback when the form has no moves.
            is_mega_or_primal = "-mega" in form_slug or "-primal" in form_slug
            fallback = base_pokemon_data if is_mega_or_primal else None

            form_display = derive_form_display_name(
                base_display_name, species_slug, form_slug
            )

            form_entry = build_entry(
                species_data, form_pokemon_data,
                version_group, target_versions, game_gen, use_cache,
                display_name_override=form_display,
                fallback_moves_data=fallback,
            )

            if form_entry is not None:
                pokedex[form_display] = form_entry
                forms_added.append(form_display)

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
    BULBAPEDIA_CACHE_DIR.mkdir(exist_ok=True)

    all_species = get_all_species(use_cache=use_cache)
    if not all_species:
        sys.exit(1)

    games = (
        {args.game: GAME_CONFIG[args.game]}
        if args.game
        else GAME_CONFIG
    )

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

    print("\nAll done.")


if __name__ == "__main__":
    main()
