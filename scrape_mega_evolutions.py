#!/usr/bin/python3
"""
Scrape Mega Evolution Pokédex data directly from PokeAPI.

Fetches comprehensive data for all 96 Mega Evolution forms:
  - X and Y: 28 original Mega forms
  - Omega Ruby and Alpha Sapphire: 20 additional Mega forms
  - Legends Z-A: 48 new Mega forms (including Z variants and form megas)

Each entry uses the same schema as the per-game pokedex files produced by
scrape_pokedex.py. Megas are sourced from the version group where they
were officially introduced.

Output:
    pokedex/mega_evolution_pokedex.js

Usage:
    python scrape_mega_evolutions.py                # scrape all megas
    python scrape_mega_evolutions.py --no-cache     # bypass API cache
    python scrape_mega_evolutions.py --discover     # verify list against PokeAPI

Requirements:
    pip install requests beautifulsoup4
"""

import argparse
import json
import os
import re
import sys
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
REQUEST_DELAY = 0.3
MAX_RETRIES = 3
OUTPUT_PATH = "pokedex/mega_evolution_pokedex.js"


# ---------------------------------------------------------------------------
# Version group configuration
# ---------------------------------------------------------------------------

VERSION_GROUP_CONFIGS = {
    "x-y": {
        "versions":   ["x", "y"],
        "generation":  6,
    },
    "omega-ruby-alpha-sapphire": {
        "versions":   ["omega-ruby", "alpha-sapphire"],
        "generation":  6,
    },
    "legends-za": {
        "versions":   ["legends-za"],
        "generation":  9,
    },
    "mega-dimension": {
        "versions":   ["mega-dimension"],
        "generation":  9,
    },
}

# Fallback version groups to try (most recent first) when a ZA mega has no
# move data from its own version groups or Bulbapedia.  Megas share their base
# form's movepool, so we pull the base form's moves from the newest available
# game as a reasonable placeholder until PokéAPI / Bulbapedia have ZA data.
BASE_FORM_FALLBACK_VGS = [
    "scarlet-violet",
    "ultra-sun-ultra-moon",
    "sun-moon",
    "omega-ruby-alpha-sapphire",
    "x-y",
]


# ---------------------------------------------------------------------------
# Complete Mega Evolution registry
#
# All 96 official Mega Evolution forms.
# Format: (pokemon_api_slug, species_api_slug, [version_groups_to_try])
#
# version_groups_to_try is ordered by priority — the script tries each
# until it finds one with move data for this form.
# ---------------------------------------------------------------------------

# --- X and Y: 28 forms ---
XY_MEGAS = [
    ("venusaur-mega",      "venusaur",     ["x-y"]),
    ("charizard-mega-x",   "charizard",    ["x-y"]),
    ("charizard-mega-y",   "charizard",    ["x-y"]),
    ("blastoise-mega",     "blastoise",    ["x-y"]),
    ("alakazam-mega",      "alakazam",     ["x-y"]),
    ("gengar-mega",        "gengar",       ["x-y"]),
    ("kangaskhan-mega",    "kangaskhan",   ["x-y"]),
    ("pinsir-mega",        "pinsir",       ["x-y"]),
    ("gyarados-mega",      "gyarados",     ["x-y"]),
    ("aerodactyl-mega",    "aerodactyl",   ["x-y"]),
    ("mewtwo-mega-x",      "mewtwo",       ["x-y"]),
    ("mewtwo-mega-y",      "mewtwo",       ["x-y"]),
    ("ampharos-mega",      "ampharos",     ["x-y"]),
    ("scizor-mega",        "scizor",       ["x-y"]),
    ("heracross-mega",     "heracross",    ["x-y"]),
    ("houndoom-mega",      "houndoom",     ["x-y"]),
    ("tyranitar-mega",     "tyranitar",    ["x-y"]),
    ("blaziken-mega",      "blaziken",     ["x-y"]),
    ("gardevoir-mega",     "gardevoir",    ["x-y"]),
    ("mawile-mega",        "mawile",       ["x-y"]),
    ("aggron-mega",        "aggron",       ["x-y"]),
    ("medicham-mega",      "medicham",     ["x-y"]),
    ("manectric-mega",     "manectric",    ["x-y"]),
    ("banette-mega",       "banette",      ["x-y"]),
    ("absol-mega",         "absol",        ["x-y"]),
    ("garchomp-mega",      "garchomp",     ["x-y"]),
    ("lucario-mega",       "lucario",      ["x-y"]),
    ("abomasnow-mega",     "abomasnow",   ["x-y"]),
]

# --- Omega Ruby and Alpha Sapphire: 20 forms ---
ORAS_MEGAS = [
    ("beedrill-mega",      "beedrill",     ["omega-ruby-alpha-sapphire"]),
    ("pidgeot-mega",       "pidgeot",      ["omega-ruby-alpha-sapphire"]),
    ("slowbro-mega",       "slowbro",      ["omega-ruby-alpha-sapphire"]),
    ("steelix-mega",       "steelix",      ["omega-ruby-alpha-sapphire"]),
    ("sceptile-mega",      "sceptile",     ["omega-ruby-alpha-sapphire"]),
    ("swampert-mega",      "swampert",     ["omega-ruby-alpha-sapphire"]),
    ("sableye-mega",       "sableye",      ["omega-ruby-alpha-sapphire"]),
    ("sharpedo-mega",      "sharpedo",     ["omega-ruby-alpha-sapphire"]),
    ("camerupt-mega",      "camerupt",     ["omega-ruby-alpha-sapphire"]),
    ("altaria-mega",       "altaria",      ["omega-ruby-alpha-sapphire"]),
    ("glalie-mega",        "glalie",       ["omega-ruby-alpha-sapphire"]),
    ("salamence-mega",     "salamence",    ["omega-ruby-alpha-sapphire"]),
    ("metagross-mega",     "metagross",    ["omega-ruby-alpha-sapphire"]),
    ("latias-mega",        "latias",       ["omega-ruby-alpha-sapphire"]),
    ("latios-mega",        "latios",       ["omega-ruby-alpha-sapphire"]),
    ("rayquaza-mega",      "rayquaza",     ["omega-ruby-alpha-sapphire"]),
    ("lopunny-mega",       "lopunny",      ["omega-ruby-alpha-sapphire"]),
    ("gallade-mega",       "gallade",      ["omega-ruby-alpha-sapphire"]),
    ("audino-mega",        "audino",       ["omega-ruby-alpha-sapphire"]),
    ("diancie-mega",       "diancie",      ["omega-ruby-alpha-sapphire"]),
]

# --- Legends Z-A: 48 new forms ---
ZA_MEGAS = [
    ("clefable-mega",             "clefable",      ["legends-za", "mega-dimension"]),
    ("victreebel-mega",           "victreebel",    ["legends-za", "mega-dimension"]),
    ("starmie-mega",              "starmie",       ["legends-za", "mega-dimension"]),
    ("dragonite-mega",            "dragonite",     ["legends-za", "mega-dimension"]),
    ("meganium-mega",             "meganium",      ["legends-za", "mega-dimension"]),
    ("feraligatr-mega",           "feraligatr",    ["legends-za", "mega-dimension"]),
    ("skarmory-mega",             "skarmory",      ["legends-za", "mega-dimension"]),
    ("froslass-mega",             "froslass",      ["legends-za", "mega-dimension"]),
    ("emboar-mega",               "emboar",        ["legends-za", "mega-dimension"]),
    ("excadrill-mega",            "excadrill",     ["legends-za", "mega-dimension"]),
    ("scolipede-mega",            "scolipede",     ["legends-za", "mega-dimension"]),
    ("scrafty-mega",              "scrafty",       ["legends-za", "mega-dimension"]),
    ("eelektross-mega",           "eelektross",    ["legends-za", "mega-dimension"]),
    ("chandelure-mega",           "chandelure",    ["legends-za", "mega-dimension"]),
    ("chesnaught-mega",           "chesnaught",    ["legends-za", "mega-dimension"]),
    ("delphox-mega",              "delphox",       ["legends-za", "mega-dimension"]),
    ("greninja-mega",             "greninja",      ["legends-za", "mega-dimension"]),
    ("pyroar-mega",               "pyroar",        ["legends-za", "mega-dimension"]),
    ("floette-mega",              "floette",       ["legends-za", "mega-dimension"]),
    ("malamar-mega",              "malamar",       ["legends-za", "mega-dimension"]),
    ("barbaracle-mega",           "barbaracle",    ["legends-za", "mega-dimension"]),
    ("dragalge-mega",             "dragalge",      ["legends-za", "mega-dimension"]),
    ("hawlucha-mega",             "hawlucha",      ["legends-za", "mega-dimension"]),
    ("zygarde-mega",              "zygarde",       ["legends-za", "mega-dimension"]),
    ("drampa-mega",               "drampa",        ["legends-za", "mega-dimension"]),
    ("falinks-mega",              "falinks",       ["legends-za", "mega-dimension"]),
    ("raichu-mega-x",             "raichu",        ["legends-za", "mega-dimension"]),
    ("raichu-mega-y",             "raichu",        ["legends-za", "mega-dimension"]),
    ("chimecho-mega",             "chimecho",      ["legends-za", "mega-dimension"]),
    ("absol-mega-z",              "absol",         ["legends-za", "mega-dimension"]),
    ("staraptor-mega",            "staraptor",     ["legends-za", "mega-dimension"]),
    ("garchomp-mega-z",           "garchomp",      ["legends-za", "mega-dimension"]),
    ("lucario-mega-z",            "lucario",       ["legends-za", "mega-dimension"]),
    ("heatran-mega",              "heatran",       ["legends-za", "mega-dimension"]),
    ("darkrai-mega",              "darkrai",       ["legends-za", "mega-dimension"]),
    ("golurk-mega",               "golurk",        ["legends-za", "mega-dimension"]),
    ("meowstic-mega",             "meowstic",      ["legends-za", "mega-dimension"]),
    ("crabominable-mega",         "crabominable",  ["legends-za", "mega-dimension"]),
    ("golisopod-mega",            "golisopod",     ["legends-za", "mega-dimension"]),
    ("magearna-mega",             "magearna",      ["legends-za", "mega-dimension"]),
    ("magearna-original-mega",    "magearna",      ["legends-za", "mega-dimension"]),
    ("zeraora-mega",              "zeraora",       ["legends-za", "mega-dimension"]),
    ("scovillain-mega",           "scovillain",    ["legends-za", "mega-dimension"]),
    ("glimmora-mega",             "glimmora",      ["legends-za", "mega-dimension"]),
    ("tatsugiri-curly-mega",      "tatsugiri",     ["legends-za", "mega-dimension"]),
    ("tatsugiri-droopy-mega",     "tatsugiri",     ["legends-za", "mega-dimension"]),
    ("tatsugiri-stretchy-mega",   "tatsugiri",     ["legends-za", "mega-dimension"]),
    ("baxcalibur-mega",           "baxcalibur",    ["legends-za", "mega-dimension"]),
]

# Flat registry combining all sources
MEGA_REGISTRY = XY_MEGAS + ORAS_MEGAS + ZA_MEGAS


# ---------------------------------------------------------------------------
# PokéAPI mappings
# ---------------------------------------------------------------------------

STAT_MAP = {
    "hp":              "hp",
    "attack":          "attack",
    "defense":         "defense",
    "special-attack":  "special_attack",
    "special-defense": "special_defense",
    "speed":           "speed",
}

GENDER_RATE_MAP = {
    -1: 255, 0: 0, 1: 31, 2: 63, 4: 127, 6: 191, 7: 225, 8: 254,
}

EGG_GROUP_MAP = {
    "monster": "Monster", "water1": "Water1", "bug": "Bug", "flying": "Flying",
    "field": "Field", "fairy": "Fairy", "plant": "Grass", "humanshape": "HumanLike",
    "water3": "Water3", "mineral": "Mineral", "indeterminate": "Amorphous",
    "water2": "Water2", "ditto": "Ditto", "dragon": "Dragon",
    "no-eggs": "NoEggsDiscovered",
}

GROWTH_RATE_MAP = {
    "slow": "Slow", "medium-slow": "Medium Slow", "medium": "Medium Fast",
    "medium-fast": "Medium Fast", "fast": "Fast", "erratic": "Erratic",
    "fluctuating": "Fluctuating",
}

GEN_NAME_TO_NUM = {
    "generation-i": 1, "generation-ii": 2, "generation-iii": 3,
    "generation-iv": 4, "generation-v": 5, "generation-vi": 6,
    "generation-vii": 7, "generation-viii": 8, "generation-ix": 9,
}

GEN_TO_ROMAN = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
                6: "VI", 7: "VII", 8: "VIII", 9: "IX"}

VERSION_GROUP_TO_BP_COLUMN = {
    "x-y": "XY",
    "omega-ruby-alpha-sapphire": "ORAS",
}

# Historical stat changes for Mega forms.
# Format: {slug: [(changed_in_gen, {stat: OLD_value}), ...]}
# Mega Alakazam SpDef: 95 in Gen 6, buffed to 105 in Gen 7.
STAT_CHANGE_LOG: dict[str, list[tuple[int, dict[str, int]]]] = {
    "alakazam-mega": [(7, {"special_defense": 95})],
}


# ---------------------------------------------------------------------------
# JSON encoder (matches scrape_pokedex.py exactly)
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
            o, skipkeys=self.skipkeys, ensure_ascii=self.ensure_ascii,
            check_circular=self.check_circular, allow_nan=self.allow_nan,
            sort_keys=self.sort_keys, indent=self.indent,
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
        return len(o) == 3 and not any(isinstance(v, (dict, list)) for v in o.values())

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
    def indent_str(self):
        if isinstance(self.indent, int):
            return " " * (self.indentation_level * self.indent)
        if isinstance(self.indent, str):
            return self.indentation_level * self.indent
        raise ValueError(f"indent must be int or str (got {type(self.indent)})")


# ---------------------------------------------------------------------------
# HTTP / caching
# ---------------------------------------------------------------------------

HEADERS = {"User-Agent": "pokedex-scraper/2.0"}
_last_request_time: float = 0.0


def _cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return CACHE_DIR / (safe[:220] + ".json")


def api_get(url: str, use_cache: bool = True) -> dict | None:
    global _last_request_time
    path = _cache_path(url)
    if use_cache and path.exists():
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            path.unlink()

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
# Bulbapedia HTML fetching
# ---------------------------------------------------------------------------

def _bulbapedia_cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return BULBAPEDIA_CACHE_DIR / (safe[:220] + ".html")


def fetch_bulbapedia_html(url: str, use_cache: bool = True) -> str | None:
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


# ---------------------------------------------------------------------------
# Name helpers
# ---------------------------------------------------------------------------

_move_name_cache: dict[str, str] = {}
_species_name_cache: dict[str, str] = {}
_ability_gen_cache: dict[str, int] = {}


def slug_to_title(slug: str) -> str:
    return " ".join(word.capitalize() for word in slug.split("-"))


def get_move_name(slug: str, url: str, use_cache: bool) -> str:
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
    for entry in names_list:
        if entry.get("language", {}).get("name") == "en":
            return entry["name"]
    return None


def get_ability_generation(slug: str, use_cache: bool) -> int:
    if slug in _ability_gen_cache:
        return _ability_gen_cache[slug]
    data = api_get(f"{API_BASE}/ability/{slug}", use_cache=use_cache)
    gen_num = 1
    if data:
        gen_name = (data.get("generation") or {}).get("name", "generation-i")
        gen_num = GEN_NAME_TO_NUM.get(gen_name, 1)
    _ability_gen_cache[slug] = gen_num
    return gen_num


def mega_display_name(species_name: str, pokemon_slug: str, species_slug: str) -> str:
    """Derive display name for a Mega form.

    Examples:
        venusaur-mega           → Mega Venusaur
        charizard-mega-x        → Mega Charizard X
        raichu-mega-y           → Mega Raichu Y
        absol-mega-z            → Mega Absol Z
        tatsugiri-curly-mega    → Mega Tatsugiri Curly
        magearna-original-mega  → Mega Magearna Original
    """
    form_suffix = pokemon_slug[len(species_slug):].lstrip("-")

    # Standard mega
    if form_suffix == "mega":
        return f"Mega {species_name}"

    # X / Y / Z variants  (mega-x, mega-y, mega-z)
    if form_suffix == "mega-x":
        return f"Mega {species_name} X"
    if form_suffix == "mega-y":
        return f"Mega {species_name} Y"
    if form_suffix == "mega-z":
        return f"Mega {species_name} Z"

    # Form + mega  (e.g. curly-mega, original-mega)
    if form_suffix.endswith("-mega"):
        form_part = form_suffix[:-5]   # strip trailing "-mega"
        form_display = form_part.replace("-", " ").title()
        return f"Mega {species_name} {form_display}"

    # Fallback
    return f"Mega {species_name}"


# ---------------------------------------------------------------------------
# Bulbapedia level-1 move ordering
# ---------------------------------------------------------------------------

_bulbapedia_level1_cache: dict[str, list[str] | None] = {}


def _parse_level1_moves_from_table(
    table, preferred_level_col: str | None = None,
) -> list[str]:
    move_col = 1
    level_col = 0
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
        level_cell = cells[level_col]
        for hidden in level_cell.find_all("span", style=re.compile(r"display:\s*none")):
            hidden.decompose()
        level_text = level_cell.get_text(strip=True)
        if level_text not in ("1", "\u2014"):
            if level_text.isdigit() and int(level_text) > 1:
                break
            continue
        if level_text != "1":
            continue
        link = cells[move_col].find("a")
        if link:
            moves.append(link.get_text(strip=True))
    return moves


def _bulbapedia_learnset_url(species_name: str, game_gen: int) -> str:
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
    cache_key = f"{species_name}|{form_name}|{game_gen}|{version_group}"
    if cache_key in _bulbapedia_level1_cache:
        return _bulbapedia_level1_cache[cache_key]

    url = _bulbapedia_learnset_url(species_name, game_gen)
    html = fetch_bulbapedia_html(url, use_cache)
    if not html:
        _bulbapedia_level1_cache[cache_key] = None
        return None

    soup = BeautifulSoup(html, "html.parser")
    heading = soup.find("span", id="By_leveling_up")
    if not heading:
        _bulbapedia_level1_cache[cache_key] = None
        return None

    node = heading.parent
    target_table = None

    def _find_sortable_table(element):
        if element.name == "table" and "sortable" in (element.get("class") or []):
            return element
        return element.find("table", class_="sortable")

    if form_name:
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
    level1 = [m for m in level_up if m[0] == 1]
    if len(level1) <= 1:
        return level_up

    bp_order = get_bulbapedia_level1_order(
        species_name, form_name, game_gen, use_cache, version_group,
    )
    if not bp_order:
        return level_up

    order_map = {name: i for i, name in enumerate(bp_order)}
    level1.sort(key=lambda m: order_map.get(m[1], len(bp_order)))

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
# Bulbapedia Legends Z-A learnset scraper
#
# When PokeAPI has no move data for a ZA mega, fall back to scraping the
# base Pokémon's Bulbapedia page for the ZA-specific learnset tables.
#
# ZA tables are identified either by a green "ZA" game label paragraph
# or by their unique column structure (has "CD" column instead of Acc./PP).
# ---------------------------------------------------------------------------

def _find_sortable_table(element):
    """Find a sortable table: either the element itself or nested inside."""
    if element.name == "table" and "sortable" in (element.get("class") or []):
        return element
    return element.find("table", class_="sortable")


def _has_za_label(element) -> bool:
    """Check if an element is a ZA game-label paragraph."""
    if element.name != "p":
        return False
    for span in element.find_all("span"):
        if "31CA56" in (span.get("style") or "") and span.get_text(strip=True) == "ZA":
            return True
    return False


def _is_za_format_table(table) -> bool:
    """Check if a sortable table uses ZA-format columns (has a CD column)."""
    header_row = table.find("tr")
    if not header_row:
        return False
    headers = [th.get_text(strip=True) for th in header_row.find_all("th")]
    return "CD" in headers


def _find_za_table_in_section(soup, section_id: str):
    """Find the ZA-specific sortable table after a Bulbapedia section heading.

    Handles both layouts:
      - Pokémon in SV + ZA: SV table first, then ZA-labeled table
      - Pokémon in ZA only: single unlabeled table with ZA column structure
    """
    heading_span = soup.find("span", id=section_id)
    if not heading_span:
        return None

    node = heading_span.parent  # the <h4>

    # Walk siblings, collecting tables with their preceding label context
    tables_with_label: list[tuple] = []
    prev_label: str | None = None

    for sibling in node.find_next_siblings():
        if sibling.name in ("h3", "h4"):
            break

        # Detect game-label paragraphs
        if sibling.name == "p":
            if _has_za_label(sibling):
                prev_label = "za"
            # SV label has red "S" with color #F34134
            elif sibling.find("span", style=lambda s: s and "F34134" in str(s)):
                prev_label = "sv"
            continue

        tbl = _find_sortable_table(sibling)
        if tbl:
            tables_with_label.append((tbl, prev_label))
            prev_label = None

    # Priority 1: table explicitly labeled ZA
    for tbl, label in tables_with_label:
        if label == "za":
            return tbl

    # Priority 2: unlabeled table with ZA column structure (ZA-only Pokémon)
    for tbl, label in tables_with_label:
        if label is None and _is_za_format_table(tbl):
            return tbl

    return None


def _parse_za_level_up_table(table) -> list[list]:
    """Parse a ZA-format level-up table.

    ZA columns: Learn | Plus | Move | Type | Cat. | Power | CD
    Returns [[level, "Move Name"], ...]
    """
    moves = []
    for row in table.find_all("tr"):
        cells = row.find_all("td")
        if len(cells) < 7:
            continue

        # Level (column 0)
        level_cell = cells[0]
        for hidden in level_cell.find_all("span", style=re.compile(r"display:\s*none")):
            hidden.decompose()
        level_text = level_cell.get_text(strip=True).rstrip("*")

        if level_text in ("Evo.", "Rem."):
            level = 0
        elif level_text.isdigit():
            level = int(level_text)
        else:
            continue

        # Move name (column 2)
        move_cell = cells[2]
        link = move_cell.find("a")
        move_name = link.get_text(strip=True) if link else move_cell.get_text(strip=True)
        if move_name:
            moves.append([level, move_name])

    moves.sort(key=lambda x: x[0])
    return moves


def _parse_za_tm_table(table) -> list[str]:
    """Parse a ZA-format TM table.

    ZA columns: Icon | TM | Move | Type | Cat. | Pwr. | CD
    Returns ["Move Name", ...]
    """
    moves = []
    for row in table.find_all("tr"):
        cells = row.find_all("td")
        if len(cells) < 7:
            continue

        # Move name (column 2)
        move_cell = cells[2]
        link = move_cell.find("a")
        move_name = link.get_text(strip=True) if link else move_cell.get_text(strip=True)
        if move_name and move_name not in moves:
            moves.append(move_name)

    return moves


def scrape_bulbapedia_za_learnset(
    species_name: str, use_cache: bool,
) -> tuple[list[list], list[str]]:
    """Scrape Legends Z-A learnset from Bulbapedia for the given species.

    Returns (level_up, tm_moves) where:
      - level_up: [[level, "Move Name"], ...]
      - tm_moves: ["Move Name", ...]
    """
    url = f"{BULBAPEDIA_BASE}/{species_name.replace(' ', '_')}_(Pok%C3%A9mon)"
    html = fetch_bulbapedia_html(url, use_cache)
    if not html:
        return [], []

    soup = BeautifulSoup(html, "html.parser")

    # Level-up moves
    level_up_table = _find_za_table_in_section(soup, "By_leveling_up")
    level_up = _parse_za_level_up_table(level_up_table) if level_up_table else []

    # TM moves
    tm_table = _find_za_table_in_section(soup, "By_TM")
    tm_moves = _parse_za_tm_table(tm_table) if tm_table else []

    return level_up, tm_moves


# ---------------------------------------------------------------------------
# Historical stat helpers
# ---------------------------------------------------------------------------

def apply_historical_stats(slug: str, stats: dict, game_gen: int) -> dict:
    changes = STAT_CHANGE_LOG.get(slug)
    if not changes:
        return stats
    result = dict(stats)
    for (changed_in_gen, old_values) in changes:
        if game_gen < changed_in_gen:
            result.update(old_values)
    return result


# ---------------------------------------------------------------------------
# Evolution chain parser
# ---------------------------------------------------------------------------

def _parse_evo_details(d: dict) -> dict:
    trigger = (d.get("trigger") or {}).get("name", "")
    method = None
    param = None
    extras = {}

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
    elif trigger == "spin":
        method = "spin"
    elif trigger in ("tower-of-darkness", "tower-of-waters"):
        method = trigger.replace("-", "_")
    elif trigger == "three-critical-hits":
        method = "three_critical_hits"
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
    elif trigger == "use-move":
        method = "use_move"
        param = slug_to_title(d["known_move"]["name"]) if d.get("known_move") else None
    else:
        method = trigger.replace("-", "_") if trigger else None

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

def parse_held_items(
    pokemon_data: dict, target_versions: list[str],
) -> tuple[str | None, str | None]:
    common = None
    rare = None
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
# Move parsing
# ---------------------------------------------------------------------------

def parse_moves(pokemon_data: dict, version_group: str, use_cache: bool):
    level_up:    list[list] = []
    tm_hm:       list[str]  = []
    tutor:       list[str]  = []
    egg_moves:   list[str]  = []
    form_change: list[str]  = []

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

    level_up.sort(key=lambda x: x[0])
    return level_up, tm_hm, tutor, egg_moves, form_change


def try_parse_moves(pokemon_data: dict, base_pokemon_data: dict | None,
                    version_groups: list[str], use_cache: bool):
    """Try each version group in order until move data is found.

    Falls back to base_pokemon_data if the mega form has no moves.
    Returns (level_up, tm_hm, tutor, egg_moves, form_change, used_vg).
    """
    for vg in version_groups:
        level_up, tm_hm, tutor, egg_moves, form_change = \
            parse_moves(pokemon_data, vg, use_cache)
        if level_up or tm_hm or tutor or egg_moves:
            return level_up, tm_hm, tutor, egg_moves, form_change, vg

        # Try base form as fallback for this version group
        if base_pokemon_data:
            level_up, tm_hm, tutor, egg_moves, form_change = \
                parse_moves(base_pokemon_data, vg, use_cache)
            if level_up or tm_hm or tutor or egg_moves:
                return level_up, tm_hm, tutor, egg_moves, form_change, vg

    return [], [], [], [], [], None


# ---------------------------------------------------------------------------
# Entry builder
# ---------------------------------------------------------------------------

def build_mega_entry(
    species_data:      dict,
    mega_pokemon_data: dict,
    base_pokemon_data: dict | None,
    version_groups:    list[str],
    display_name:      str,
    use_cache:         bool,
) -> tuple[dict | None, str | None, bool]:
    """Build one Mega Evolution Pokédex entry.

    Tries version groups in order until move data is found.  Falls back to
    Bulbapedia ZA learnset scraping when PokeAPI has no move data.  If still
    no move data, builds the entry with empty learnsets.

    Returns (entry_dict, used_version_group, bulbapedia_sourced).
    """
    level_up, tm_hm, tutor, egg_moves, form_change, used_vg = \
        try_parse_moves(mega_pokemon_data, base_pokemon_data,
                        version_groups, use_cache)

    has_moves = bool(level_up or tm_hm or tutor or egg_moves)

    # If no PokeAPI move data, try scraping from Bulbapedia (ZA learnsets)
    bp_sourced = False
    if not has_moves:
        base_species_name = (
            get_english_name(species_data.get("names", []))
            or slug_to_title(species_data["name"])
        )
        bp_level_up, bp_tm = scrape_bulbapedia_za_learnset(
            base_species_name, use_cache,
        )
        if bp_level_up or bp_tm:
            level_up = bp_level_up
            tm_hm = bp_tm
            has_moves = True
            bp_sourced = True

    # Last resort: pull the base form's moves from the most recent game
    # available in PokéAPI.  Megas share their base form's movepool.
    if not has_moves and base_pokemon_data:
        for fallback_vg in BASE_FORM_FALLBACK_VGS:
            level_up, tm_hm, tutor, egg_moves, form_change = \
                parse_moves(base_pokemon_data, fallback_vg, use_cache)
            if level_up or tm_hm or tutor or egg_moves:
                has_moves = True
                used_vg = None  # keep original vg resolution below
                break

    # Use the matched version group, or fall back to the first in the list
    if used_vg:
        vg_config = VERSION_GROUP_CONFIGS[used_vg]
    else:
        used_vg = version_groups[0]
        vg_config = VERSION_GROUP_CONFIGS[used_vg]
    game_gen = vg_config["generation"]
    target_versions = vg_config["versions"]

    # Basic fields
    dex_num = species_data["id"]
    weight  = round(mega_pokemon_data["weight"] / 10, 1)

    # Base stats with historical correction
    raw_stats = {k: 0 for k in STAT_MAP.values()}
    ev_yield  = {k: 0 for k in STAT_MAP.values()}
    for stat_entry in mega_pokemon_data.get("stats", []):
        key = STAT_MAP.get(stat_entry["stat"]["name"])
        if key:
            raw_stats[key] = stat_entry["base_stat"]
            ev_yield[key]  = stat_entry["effort"]

    pokemon_slug = mega_pokemon_data["name"]
    base_stats = apply_historical_stats(pokemon_slug, raw_stats, game_gen)

    # Types
    types  = sorted(mega_pokemon_data.get("types", []), key=lambda t: t["slot"])
    type_1 = types[0]["type"]["name"].capitalize() if types else None
    type_2 = types[1]["type"]["name"].capitalize() if len(types) > 1 else type_1

    # Abilities
    abilities = []
    hidden_ability = None
    for a in sorted(mega_pokemon_data.get("abilities", []), key=lambda a: a["slot"]):
        ability_slug = a["ability"]["name"]
        ability_gen  = get_ability_generation(ability_slug, use_cache)
        if ability_gen > game_gen:
            continue
        if a["is_hidden"]:
            hidden_ability = slug_to_title(ability_slug)
        else:
            abilities.append(slug_to_title(ability_slug))

    # Held items
    common_item, rare_item = parse_held_items(mega_pokemon_data, target_versions)

    # Species-level fields
    gender_rate     = species_data.get("gender_rate", -1)
    gender_ratio    = GENDER_RATE_MAP.get(gender_rate, 127)
    catch_rate      = species_data.get("capture_rate")
    base_friendship = species_data.get("base_happiness")
    base_exp        = mega_pokemon_data.get("base_experience")
    egg_cycles      = species_data.get("hatch_counter")
    growth_rate     = GROWTH_RATE_MAP.get(
        (species_data.get("growth_rate") or {}).get("name", ""), None
    )

    raw_egg_groups = [
        EGG_GROUP_MAP.get(eg["name"], eg["name"].capitalize())
        for eg in species_data.get("egg_groups", [])
    ]
    egg_group_1 = raw_egg_groups[0] if raw_egg_groups else None
    egg_group_2 = raw_egg_groups[1] if len(raw_egg_groups) > 1 else egg_group_1

    # Evolution family
    evo_family = fetch_evolution_family(species_data, use_cache)

    # Reorder level-1 moves via Bulbapedia (skip if already sourced from BP)
    if not bp_sourced:
        base_species_name = (
            get_english_name(species_data.get("names", []))
            or slug_to_title(species_data["name"])
        )
        level_up = reorder_level1_moves(
            level_up, base_species_name, display_name, game_gen, use_cache,
            used_vg,
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
        "hidden_ability":      hidden_ability,
        "level_up_learnset":   level_up,
        "tm_hm_learnset":      tm_hm,
        "tutor_learnset":      tutor,
        "egg_moves":           egg_moves,
        "weight":              weight,
        "evolution_family":    evo_family,
    }

    if form_change:
        entry["form_change_learnset"] = form_change

    return entry, used_vg, bp_sourced


# ---------------------------------------------------------------------------
# Discovery: find all mega forms in PokeAPI
# ---------------------------------------------------------------------------

def discover_megas(use_cache: bool) -> list[str]:
    """Query the PokeAPI pokemon list and return all slugs containing '-mega'."""
    print("Discovering Mega Evolutions from PokeAPI...")
    data = api_get(f"{API_BASE}/pokemon?limit=100000", use_cache=use_cache)
    if not data:
        print("ERROR: could not fetch pokemon list")
        return []
    all_pokemon = data.get("results", [])
    megas = sorted(p["name"] for p in all_pokemon if "-mega" in p["name"])
    print(f"  Found {len(megas)} Mega forms in PokeAPI:")
    for m in megas:
        print(f"    {m}")
    return megas


# ---------------------------------------------------------------------------
# Output
# ---------------------------------------------------------------------------

def export_js(path: str, pokedex: dict) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        out = json.dumps(pokedex, cls=CompactJSONEncoder, indent=4)
        f.write(f"export const mega_evolution_pokedex = {out}")
    print(f"\nWritten {len(pokedex)} entries -> {path}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    parser = argparse.ArgumentParser(
        description="Scrape Mega Evolution Pokédex data from PokeAPI"
    )
    parser.add_argument(
        "--no-cache", action="store_true",
        help="Re-fetch all data even if cached locally",
    )
    parser.add_argument(
        "--output", default=OUTPUT_PATH, metavar="PATH",
        help=f"Output file path (default: {OUTPUT_PATH})",
    )
    parser.add_argument(
        "--discover", action="store_true",
        help="Discover all mega forms in PokeAPI and compare with the known list",
    )
    args = parser.parse_args()

    use_cache = not args.no_cache
    CACHE_DIR.mkdir(exist_ok=True)
    BULBAPEDIA_CACHE_DIR.mkdir(exist_ok=True)

    # ------------------------------------------------------------------
    # Discovery / verification mode
    # ------------------------------------------------------------------
    if args.discover:
        discovered = discover_megas(use_cache)
        known = {slug for slug, _, _ in MEGA_REGISTRY}
        discovered_set = set(discovered)

        missing = sorted(known - discovered_set)
        extra   = sorted(discovered_set - known)

        print(f"\nKnown: {len(known)}, Discovered: {len(discovered_set)}")
        if missing:
            print(f"\nIn our list but NOT in PokeAPI ({len(missing)}):")
            for m in missing:
                print(f"  - {m}")
        if extra:
            print(f"\nIn PokeAPI but NOT in our list ({len(extra)}):")
            for m in extra:
                print(f"  + {m}")
        if not missing and not extra:
            print("\nLists match perfectly!")
        return

    # ------------------------------------------------------------------
    # Main scraping
    # ------------------------------------------------------------------
    total = len(MEGA_REGISTRY)
    pokedex: dict = {}
    species_cache: dict[str, dict] = {}
    pokemon_cache: dict[str, dict] = {}
    counts = {
        "x-y": 0,
        "omega-ruby-alpha-sapphire": 0,
        "legends-za": 0,
        "mega-dimension": 0,
    }

    print(f"\nScraping {total} Mega Evolution forms from PokeAPI...\n")

    for i, (pokemon_slug, species_slug, version_groups) in enumerate(MEGA_REGISTRY, 1):
        print(f"  [{i:>2}/{total}] {pokemon_slug:<30}", end=" ", flush=True)

        # Fetch species data (shared across forms of the same species)
        if species_slug not in species_cache:
            sd = api_get(f"{API_BASE}/pokemon-species/{species_slug}", use_cache=use_cache)
            if not sd:
                print("ERROR (species fetch failed)")
                continue
            species_cache[species_slug] = sd
        species_data = species_cache[species_slug]

        # Fetch mega pokemon data
        if pokemon_slug not in pokemon_cache:
            md = api_get(f"{API_BASE}/pokemon/{pokemon_slug}", use_cache=use_cache)
            if not md:
                print("ERROR (mega pokemon fetch failed)")
                continue
            pokemon_cache[pokemon_slug] = md
        mega_data = pokemon_cache[pokemon_slug]

        # Fetch base form pokemon data (for fallback moves).
        # Use the species data's default variety URL since some species
        # (e.g. tatsugiri, meowstic, zygarde) have a default variety slug
        # that differs from the species slug.
        if species_slug not in pokemon_cache:
            default_variety = next(
                (v for v in species_data.get("varieties", []) if v["is_default"]),
                None,
            )
            if default_variety:
                bd = api_get(default_variety["pokemon"]["url"], use_cache=use_cache)
            else:
                bd = api_get(f"{API_BASE}/pokemon/{species_slug}", use_cache=use_cache)
            if bd:
                pokemon_cache[species_slug] = bd
            else:
                pokemon_cache[species_slug] = None
        base_data = pokemon_cache[species_slug]

        # Resolve display name
        base_species_name = get_english_name(species_data.get("names", []))
        if not base_species_name:
            base_species_name = slug_to_title(species_slug)
        _species_name_cache[species_slug] = base_species_name

        display_name = mega_display_name(base_species_name, pokemon_slug, species_slug)

        # Build the entry (tries PokeAPI first, then Bulbapedia for ZA)
        entry, used_vg, bp_sourced = build_mega_entry(
            species_data, mega_data, base_data,
            version_groups, display_name, use_cache,
        )

        if entry:
            pokedex[display_name] = entry
            counts[used_vg] += 1
            has_moves = bool(entry.get("level_up_learnset") or entry.get("tm_hm_learnset"))
            if bp_sourced:
                status = "ok (moves from Bulbapedia)"
            elif has_moves:
                status = "ok"
            else:
                status = "ok (stats only, no move data)"
            print(f"{status}  (#{species_data['id']}  {display_name}  [{used_vg}])")
        else:
            print("ERROR (entry build failed)")

    # Report
    bp_count = sum(1 for k in pokedex
                   if pokedex[k].get("level_up_learnset") or pokedex[k].get("tm_hm_learnset"))
    no_moves = len(pokedex) - bp_count if bp_count < len(pokedex) else 0
    print(f"\n{'='*60}")
    print(f"  Total Mega Evolutions scraped: {len(pokedex)}")
    print(f"    X and Y:                     {counts['x-y']}")
    print(f"    Omega Ruby / Alpha Sapphire: {counts['omega-ruby-alpha-sapphire']}")
    print(f"    Legends Z-A:                 {counts['legends-za']}")
    print(f"    Mega Dimension:              {counts['mega-dimension']}")
    if no_moves:
        print(f"    (stats only, no moves):      {no_moves}")
    print(f"{'='*60}")

    if len(pokedex) < total:
        missing = []
        for slug, species, _ in MEGA_REGISTRY:
            name = _species_name_cache.get(species, slug_to_title(species))
            dn = mega_display_name(name, slug, species)
            if dn not in pokedex:
                missing.append(f"{slug} ({dn})")
        if missing:
            print(f"\nWARNING: {len(missing)} mega(s) could not be scraped:")
            for m in missing:
                print(f"  - {m}")

    export_js(args.output, pokedex)
    print("\nDone!")


if __name__ == "__main__":
    main()
