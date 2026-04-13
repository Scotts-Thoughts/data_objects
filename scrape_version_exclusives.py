#!/usr/bin/python3
"""
Version-exclusive Pokémon scraper.

Pulls two independent sources and cross-references them:

    1. Bulbapedia's "Version-exclusive Pokémon" page — authoritative, covers
       gifts, trades, and event-only exclusives as well as wild encounters.
    2. PokéAPI encounter data — used to verify each Bulbapedia entry by
       checking whether the species actually appears in one version's wild
       encounter tables but not the other's. PokéAPI misses gifts/trades/
       events, so a "not confirmed" flag means the exclusive is likely a
       non-wild entry rather than a data error.

Output:
    version_exclusives.js  — one object per paired game:
        {
          "Red and Blue": {
            "Red":  ["Ekans", "Arbok", ...],
            "Blue": ["Sandshrew", ...]
          },
          ...
        }

Usage:
    python scrape_version_exclusives.py
    python scrape_version_exclusives.py --no-cache
    python scrape_version_exclusives.py --game "X and Y"
    python scrape_version_exclusives.py --output version_exclusives.js

Requirements:
    pip install requests beautifulsoup4
"""

import argparse
import json
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
CACHE_DIR = Path(".scrape_cache_api")         # shared with other scrapers
BULBA_CACHE_DIR = Path("bulba_cache")         # shared with other scrapers
REQUEST_DELAY = 0.3
MAX_RETRIES = 3
TOTAL_SPECIES = 1025

BULBA_URL = "https://bulbapedia.bulbagarden.net/wiki/Version-exclusive_Pok%C3%A9mon"

HEADERS = {"User-Agent": "pokedex-scraper/2.0"}
_last_request_time: float = 0.0


# Each paired game maps to:
#   bulba_section  — id of the <span class="mw-headline"> that introduces the tables
#   bulba_columns  — list of (column-label-in-table, our-version-name) tuples for the
#                    two columns we care about. Any other columns in the same table
#                    (Emerald, Platinum, Yellow, etc.) are ignored when computing
#                    exclusivity within the pair.
#   pokeapi_versions — our-version-name → PokéAPI version slug
GAME_PAIRS: dict[str, dict] = {
    "Red and Blue": {
        # Bulbapedia's Gen I table uses Japanese R/G/B/Y columns.
        # Western "Red" = JP Red, Western "Blue" = JP Green (gameplay-wise).
        "bulba_section":    "Generation_I",
        "bulba_columns":    [("R", "Red"), ("G", "Blue")],
        "pokeapi_versions": {"Red": "red", "Blue": "blue"},
    },
    "Gold and Silver": {
        "bulba_section":    "Generation_II",
        "bulba_columns":    [("G", "Gold"), ("S", "Silver")],
        "pokeapi_versions": {"Gold": "gold", "Silver": "silver"},
    },
    "Ruby and Sapphire": {
        "bulba_section":    "Ruby,_Sapphire,_and_Emerald",
        "bulba_columns":    [("R", "Ruby"), ("S", "Sapphire")],
        "pokeapi_versions": {"Ruby": "ruby", "Sapphire": "sapphire"},
    },
    "FireRed and LeafGreen": {
        "bulba_section":    "FireRed_and_LeafGreen",
        "bulba_columns":    [("FR", "FireRed"), ("LG", "LeafGreen")],
        "pokeapi_versions": {"FireRed": "firered", "LeafGreen": "leafgreen"},
    },
    "Diamond and Pearl": {
        "bulba_section":    "Diamond,_Pearl,_and_Platinum",
        "bulba_columns":    [("D", "Diamond"), ("P", "Pearl")],
        "pokeapi_versions": {"Diamond": "diamond", "Pearl": "pearl"},
    },
    "HeartGold and SoulSilver": {
        "bulba_section":    "HeartGold_and_SoulSilver",
        "bulba_columns":    [("HG", "HeartGold"), ("SS", "SoulSilver")],
        "pokeapi_versions": {"HeartGold": "heartgold", "SoulSilver": "soulsilver"},
    },
    "Black and White": {
        "bulba_section":    "Black_and_White",
        "bulba_columns":    [("B", "Black"), ("W", "White")],
        "pokeapi_versions": {"Black": "black", "White": "white"},
    },
    "Black 2 and White 2": {
        "bulba_section":    "Black_2_and_White_2",
        "bulba_columns":    [("B2", "Black 2"), ("W2", "White 2")],
        "pokeapi_versions": {"Black 2": "black-2", "White 2": "white-2"},
    },
    "X and Y": {
        "bulba_section":    "X_and_Y",
        "bulba_columns":    [("X", "X"), ("Y", "Y")],
        "pokeapi_versions": {"X": "x", "Y": "y"},
    },
    "Omega Ruby and Alpha Sapphire": {
        "bulba_section":    "Omega_Ruby_and_Alpha_Sapphire",
        "bulba_columns":    [("OR", "Omega Ruby"), ("AS", "Alpha Sapphire")],
        "pokeapi_versions": {"Omega Ruby": "omega-ruby", "Alpha Sapphire": "alpha-sapphire"},
    },
    "Sun and Moon": {
        "bulba_section":    "Sun_and_Moon",
        "bulba_columns":    [("S", "Sun"), ("M", "Moon")],
        "pokeapi_versions": {"Sun": "sun", "Moon": "moon"},
    },
    "Ultra Sun and Ultra Moon": {
        "bulba_section":    "Ultra_Sun_and_Ultra_Moon",
        "bulba_columns":    [("US", "Ultra Sun"), ("UM", "Ultra Moon")],
        "pokeapi_versions": {"Ultra Sun": "ultra-sun", "Ultra Moon": "ultra-moon"},
    },
    "Let's Go Pikachu and Let's Go Eevee": {
        "bulba_section":    "Pokémon:_Let's_Go,_Pikachu!_and_Let's_Go,_Eevee!",
        "bulba_columns":    [("P", "Let's Go Pikachu"), ("E", "Let's Go Eevee")],
        "pokeapi_versions": {
            "Let's Go Pikachu": "lets-go-pikachu",
            "Let's Go Eevee":   "lets-go-eevee",
        },
    },
    "Sword and Shield": {
        "bulba_section":    "Sword_and_Shield",
        "bulba_columns":    [("Sw", "Sword"), ("Sh", "Shield")],
        "pokeapi_versions": {"Sword": "sword", "Shield": "shield"},
    },
    "Brilliant Diamond and Shining Pearl": {
        "bulba_section":    "Brilliant_Diamond_and_Shining_Pearl",
        "bulba_columns":    [("BD", "Brilliant Diamond"), ("SP", "Shining Pearl")],
        "pokeapi_versions": {
            "Brilliant Diamond": "brilliant-diamond",
            "Shining Pearl":     "shining-pearl",
        },
    },
    "Scarlet and Violet": {
        "bulba_section":    "Scarlet_and_Violet",
        "bulba_columns":    [("S", "Scarlet"), ("V", "Violet")],
        "pokeapi_versions": {"Scarlet": "scarlet", "Violet": "violet"},
    },
}


# ---------------------------------------------------------------------------
# HTTP / caching
# ---------------------------------------------------------------------------

def _api_cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return CACHE_DIR / (safe[:220] + ".json")


def api_get(url: str, use_cache: bool = True):
    global _last_request_time
    path = _api_cache_path(url)
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
            print(f"    [pokeapi attempt {attempt}/{MAX_RETRIES}] {exc}")
            if attempt < MAX_RETRIES:
                time.sleep(REQUEST_DELAY * (attempt + 1))
    return None


def _bulba_cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return BULBA_CACHE_DIR / (safe[:220] + ".html")


def bulba_get(url: str, use_cache: bool = True) -> str | None:
    global _last_request_time
    path = _bulba_cache_path(url)
    if use_cache and path.exists():
        return path.read_text(encoding="utf-8")

    elapsed = time.time() - _last_request_time
    if elapsed < REQUEST_DELAY:
        time.sleep(REQUEST_DELAY - elapsed)

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=30)
            if resp.status_code == 404:
                return None
            resp.raise_for_status()
            _last_request_time = time.time()
            html = resp.text
            if use_cache:
                BULBA_CACHE_DIR.mkdir(exist_ok=True)
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

_POKEMON_NAME_FIXUPS = {
    "nidoran-f":    "Nidoran F",
    "nidoran-m":    "Nidoran M",
    "mr-mime":      "Mr. Mime",
    "mime-jr":      "Mime Jr.",
    "type-null":    "Type: Null",
    "jangmo-o":     "Jangmo-o",
    "hakamo-o":     "Hakamo-o",
    "kommo-o":      "Kommo-o",
    "tapu-koko":    "Tapu Koko",
    "tapu-lele":    "Tapu Lele",
    "tapu-bulu":    "Tapu Bulu",
    "tapu-fini":    "Tapu Fini",
    "ho-oh":        "Ho-Oh",
    "porygon-z":    "Porygon-Z",
    "mr-rime":      "Mr. Rime",
    "sirfetchd":    "Sirfetch'd",
    "farfetchd":    "Farfetch'd",
    "flabebe":      "Flabébé",
    "chi-yu":       "Chi-Yu",
    "chien-pao":    "Chien-Pao",
    "ting-lu":      "Ting-Lu",
    "wo-chien":     "Wo-Chien",
    "great-tusk":   "Great Tusk",
    "scream-tail":  "Scream Tail",
    "brute-bonnet": "Brute Bonnet",
    "flutter-mane": "Flutter Mane",
    "slither-wing": "Slither Wing",
    "sandy-shocks": "Sandy Shocks",
    "iron-treads":  "Iron Treads",
    "iron-bundle":  "Iron Bundle",
    "iron-hands":   "Iron Hands",
    "iron-jugulis": "Iron Jugulis",
    "iron-moth":    "Iron Moth",
    "iron-thorns":  "Iron Thorns",
    "iron-valiant": "Iron Valiant",
    "iron-leaves":  "Iron Leaves",
    "iron-boulder": "Iron Boulder",
    "iron-crown":   "Iron Crown",
    "roaring-moon": "Roaring Moon",
    "walking-wake": "Walking Wake",
    "gouging-fire": "Gouging Fire",
    "raging-bolt":  "Raging Bolt",
}


# Default-form suffixes PokéAPI tacks onto species slugs (e.g. "tornadus-
# incarnate" for the base Tornadus). Stripped before display so that wild
# encounter data lines up with the base-species name.
_DEFAULT_FORM_SUFFIXES = (
    "-incarnate", "-altered", "-land", "-red-striped", "-standard",
    "-plant", "-average", "-50", "-baile", "-midday", "-solo", "-amped",
    "-full-belly", "-single-strike", "-family-of-four",
)


def pokemon_display_name(slug: str) -> str:
    for suf in _DEFAULT_FORM_SUFFIXES:
        if slug.endswith(suf):
            slug = slug[: -len(suf)]
            break
    if slug in _POKEMON_NAME_FIXUPS:
        return _POKEMON_NAME_FIXUPS[slug]
    return " ".join(w.capitalize() for w in slug.split("-"))


# ---------------------------------------------------------------------------
# Bulbapedia name → codebase name
# ---------------------------------------------------------------------------
#
# Bulbapedia writes form entries very differently from this repo's pokedex
# files. Examples:
#
#   Bulbapedia                              →  codebase
#   ----------------------------------------   ----------------------------
#   "Sandshrew Alolan Form"                 →  "Alolan Sandshrew"
#   "Ponyta Galarian Form"                  →  "Galarian Ponyta"
#   "Charizard Mega Charizard X"            →  "Mega Charizard X"
#   "Mewtwo Mega Mewtwo"                    →  "Mega Mewtwo"
#   "Kyurem Black Kyurem"                   →  "Kyurem (Black)"
#   "Necrozma Dusk Mane Necrozma"           →  "Necrozma (Dusk)"
#   "Necrozma Dawn Wings Necrozma"          →  "Necrozma (Dawn)"
#   "Basculin Red-Striped Form"             →  "Basculin"
#   "Basculin Blue-Striped Form"            →  "Basculin (Blue Striped)"
#   "Tauros Paldean Form Blaze Breed"       →  "Tauros (Paldea Blaze Breed)"
#   "Shellos West Sea"                      →  "Shellos (West Sea)"
#   "Machamp Gigantamax Machamp"            →  "Gigantamax Machamp"
#   "Pikachu Partner"                       →  "Partner Pikachu"
#   "Nidoran♀" / "Nidoran♂"                 →  "Nidoran F" / "Nidoran M"

_REGIONAL_FORMS = ["Alolan", "Galarian", "Hisuian", "Paldean"]


def normalize_bulba_name(raw: str) -> str:
    name = raw.strip()
    # Non-breaking spaces and other unicode whitespace → regular space
    name = name.replace("\u00a0", " ")
    name = re.sub(r"\s+", " ", name)

    # Nidoran gender symbols
    name = name.replace("Nidoran♀", "Nidoran F")
    name = name.replace("Nidoran♂", "Nidoran M")

    # Tauros Paldean breed forms — check BEFORE the generic regional-form rule.
    m = re.match(r"^Tauros Paldean Form (\w+) Breed$", name)
    if m:
        return f"Tauros (Paldea {m.group(1)} Breed)"

    # Regional forms: "{Species} {Regional} Form" → "{Regional} {Species}"
    for region in _REGIONAL_FORMS:
        m = re.match(rf"^(.+?) {region} Form$", name)
        if m:
            return f"{region} {m.group(1)}"

    # Mega: "{Species} Mega {Species}( X| Y)?" → "Mega {Species}( X| Y)?"
    m = re.match(r"^(\S+) Mega \1( [XY])?$", name)
    if m:
        suffix = m.group(2) or ""
        return f"Mega {m.group(1)}{suffix}"

    # Primal Reversion: "{Species} Primal {Species}" → "Primal {Species}"
    m = re.match(r"^(\S+) Primal \1$", name)
    if m:
        return f"Primal {m.group(1)}"

    # Gigantamax: "{Species} Gigantamax {Species}" → "Gigantamax {Species}"
    m = re.match(r"^(\S+) Gigantamax \1$", name)
    if m:
        return f"Gigantamax {m.group(1)}"

    # Partner Pikachu / Eevee from LGPE
    if name == "Pikachu Partner": return "Partner Pikachu"
    if name == "Eevee Partner":   return "Partner Eevee"

    # Kyurem Black/White
    m = re.match(r"^Kyurem (Black|White) Kyurem$", name)
    if m:
        return f"Kyurem ({m.group(1)})"

    # Necrozma Dusk Mane / Dawn Wings
    if name == "Necrozma Dusk Mane Necrozma":  return "Necrozma (Dusk)"
    if name == "Necrozma Dawn Wings Necrozma": return "Necrozma (Dawn)"

    # Basculin stripes — Red-Striped is the base form; the others get parens.
    m = re.match(r"^Basculin (Red|Blue|White)-Striped Form$", name)
    if m:
        colour = m.group(1)
        if colour == "Red":
            return "Basculin"
        return f"Basculin ({colour} Striped)"

    # Shellos / Gastrodon West or East Sea
    m = re.match(r"^(Shellos|Gastrodon) (West|East) Sea$", name)
    if m:
        return f"{m.group(1)} ({m.group(2)} Sea)"

    # Incarnate / Therian formes, Altered / Origin Forme etc. — pattern
    # "{Species} {Forme-Type} Forme" → "{Species} ({Forme-Type})"
    m = re.match(r"^(\S+) (.+?) Forme?$", name)
    if m and m.group(2) in ("Therian", "Incarnate", "Origin", "Altered"):
        if m.group(2) == "Incarnate":
            return m.group(1)
        return f"{m.group(1)} ({m.group(2)})"

    # Ursaluna Bloodmoon Ursaluna — rare but possible
    m = re.match(r"^(\S+) Bloodmoon \1$", name)
    if m:
        return f"{m.group(1)} (Bloodmoon)"

    return name


def species_from_codebase_name(name: str) -> str:
    """
    Reduce a normalized codebase name such as 'Alolan Sandshrew' or
    'Mega Charizard X' down to the bare species ('Sandshrew', 'Charizard')
    for matching against PokéAPI species-level encounter data.
    """
    # Strip parenthesized form suffix: 'Kyurem (Black)' → 'Kyurem'
    name = re.sub(r"\s*\(.*\)\s*$", "", name).strip()
    prefixes = [
        "Alolan ", "Galarian ", "Hisuian ", "Paldean ",
        "Mega ", "Primal ", "Gigantamax ", "Partner ",
    ]
    for p in prefixes:
        if name.startswith(p):
            name = name[len(p):]
            break
    # 'Mega Charizard X' → after removing 'Mega ' = 'Charizard X' → drop trailing X/Y
    name = re.sub(r" [XY]$", "", name)
    return name.strip()


# ---------------------------------------------------------------------------
# Bulbapedia parsing
# ---------------------------------------------------------------------------

def _cell_is_available(td) -> bool:
    """A version cell is "available" when its background colour is not white."""
    style = td.get("style") or ""
    m = re.search(r"background\s*:\s*([^;]+)", style, flags=re.I)
    if not m:
        return False
    bg = m.group(1).strip().lower()
    return bg not in ("#fff", "#ffffff", "white")


def _iter_pair_tables(soup: BeautifulSoup, section_id: str):
    """Yield every <table> between the given h4-span and the next h2/h3/h4."""
    span = soup.find("span", id=section_id)
    if not span:
        return
    start = span.parent  # the h4 (or h3) element
    for sibling in start.find_next_siblings():
        if sibling.name in ("h2", "h3", "h4"):
            return
        if sibling.name == "table":
            yield sibling
        for nested in getattr(sibling, "find_all", lambda *a, **k: [])("table"):
            yield nested


def parse_bulbapedia(html: str) -> dict[str, dict[str, list[str]]]:
    """
    Return {pair_name: {version_name: [pokemon_display_name, ...]}}.
    """
    soup = BeautifulSoup(html, "html.parser")
    result: dict[str, dict[str, list[str]]] = {}

    for pair_name, cfg in GAME_PAIRS.items():
        section_id = cfg["bulba_section"]
        wanted = cfg["bulba_columns"]  # [(label, our_version_name), ...]
        wanted_labels = [lbl for lbl, _ in wanted]
        by_version: dict[str, list[str]] = {v: [] for _, v in wanted}
        seen: dict[str, set[str]] = {v: set() for _, v in wanted}

        tables = list(_iter_pair_tables(soup, section_id))
        if not tables:
            print(f"  [warn] Bulbapedia: no tables found for '{pair_name}' "
                  f"(section id={section_id!r})")
            result[pair_name] = by_version
            continue

        for table in tables:
            rows = table.find_all("tr", recursive=False)
            if not rows:
                rows = table.find_all("tr")
            if len(rows) < 2:
                continue

            # Identify the version columns by scanning the first data row for
            # the expected label text. This tolerates tables that include
            # extra columns we don't care about (Emerald, Platinum, Yellow...).
            first = rows[1].find_all(["th", "td"], recursive=False)
            label_to_idx: dict[str, int] = {}
            for i, td in enumerate(first):
                txt = td.get_text(" ", strip=True)
                if txt in wanted_labels and txt not in label_to_idx:
                    label_to_idx[txt] = i
            if not all(lbl in label_to_idx for lbl in wanted_labels):
                # Header row is not shaped how we expect — skip quietly.
                continue

            # The name cell is the last non-version cell before the first
            # version column. Typical layout: [dex#, sprite, name, v1, v2...]
            first_version_idx = min(label_to_idx.values())
            name_idx = first_version_idx - 1

            for row in rows[1:]:
                cells = row.find_all(["th", "td"], recursive=False)
                if len(cells) <= first_version_idx:
                    continue
                raw_name = cells[name_idx].get_text(" ", strip=True)
                if not raw_name:
                    continue
                name = normalize_bulba_name(raw_name)

                avail = {
                    lbl: _cell_is_available(cells[label_to_idx[lbl]])
                    for lbl in wanted_labels
                }
                # Exclusive within the pair = available in exactly one column.
                hits = [lbl for lbl, on in avail.items() if on]
                if len(hits) != 1:
                    continue
                our_version = dict(wanted)[hits[0]]
                if name not in seen[our_version]:
                    seen[our_version].add(name)
                    by_version[our_version].append(name)

        result[pair_name] = by_version

    return result


# ---------------------------------------------------------------------------
# PokéAPI parsing
# ---------------------------------------------------------------------------

def fetch_pokeapi_species_versions(use_cache: bool) -> dict[str, set[str]]:
    """
    For every species 1..1025, return {display_name: set(version_slugs)}
    derived from /pokemon/{id}/encounters. Wild encounters only.
    """
    out: dict[str, set[str]] = {}
    for pid in range(1, TOTAL_SPECIES + 1):
        if pid % 100 == 0 or pid == 1:
            print(f"    PokéAPI encounters: {pid}/{TOTAL_SPECIES}")
        poke = api_get(f"{API_BASE}/pokemon/{pid}", use_cache=use_cache)
        if not poke:
            continue
        slug = poke["name"]
        name = pokemon_display_name(slug)

        enc = api_get(f"{API_BASE}/pokemon/{pid}/encounters", use_cache=use_cache)
        if not enc:
            out.setdefault(name, set())
            continue

        versions: set[str] = set()
        for loc in enc:
            for vd in loc.get("version_details", []):
                versions.add(vd["version"]["name"])
        out.setdefault(name, set()).update(versions)
    return out


def derive_pokeapi_exclusives(
    species_versions: dict[str, set[str]],
) -> dict[str, dict[str, list[str]]]:
    """
    Compute {pair_name: {version_name: [pokemon, ...]}} purely from PokéAPI
    wild-encounter data.
    """
    result: dict[str, dict[str, list[str]]] = {}
    for pair_name, cfg in GAME_PAIRS.items():
        version_slugs = cfg["pokeapi_versions"]  # our_version_name -> slug
        by_version: dict[str, list[str]] = {v: [] for v in version_slugs}

        for name, vset in species_versions.items():
            present_in = [
                v for v, slug in version_slugs.items() if slug in vset
            ]
            if len(present_in) == 1:
                by_version[present_in[0]].append(name)

        for v in by_version:
            by_version[v].sort()
        result[pair_name] = by_version
    return result


# ---------------------------------------------------------------------------
# Cross-reference
# ---------------------------------------------------------------------------

def cross_reference(
    bulba: dict[str, dict[str, list[str]]],
    pokeapi: dict[str, dict[str, list[str]]],
) -> None:
    """Print a diff between Bulbapedia and PokéAPI for each paired game."""
    print()
    print("=" * 72)
    print("Cross-reference: Bulbapedia (authoritative) vs PokéAPI (wild only)")
    print("=" * 72)

    for pair_name in GAME_PAIRS:
        b = bulba.get(pair_name, {})
        p = pokeapi.get(pair_name, {})
        print(f"\n{pair_name}")
        for version in b:
            b_set_species = {species_from_codebase_name(n) for n in b[version]}
            p_set = set(p.get(version, []))

            both        = b_set_species & p_set
            only_bulba  = b_set_species - p_set
            only_api    = p_set - b_set_species

            print(f"  {version}: {len(b[version])} Bulba entries, "
                  f"{len(p_set)} PokéAPI-derived entries, "
                  f"{len(both)} confirmed")
            if only_bulba:
                sample = ", ".join(sorted(only_bulba)[:8])
                extra  = f" (+{len(only_bulba) - 8} more)" if len(only_bulba) > 8 else ""
                print(f"    - Bulba only (likely gift/trade/event): "
                      f"{sample}{extra}")
            if only_api:
                sample = ", ".join(sorted(only_api)[:8])
                extra  = f" (+{len(only_api) - 8} more)" if len(only_api) > 8 else ""
                print(f"    - PokéAPI only (CHECK — may indicate a bug): "
                      f"{sample}{extra}")


# ---------------------------------------------------------------------------
# Output
# ---------------------------------------------------------------------------

def write_js_file(
    data: dict[str, dict[str, list[str]]],
    output_path: Path,
    only_pair: str | None = None,
) -> None:
    if only_pair:
        data = {only_pair: data[only_pair]}

    lines: list[str] = ["export const version_exclusives = {"]
    for pair_name, versions in data.items():
        lines.append(f"    {json.dumps(pair_name)}: {{")
        for version_name, pokemon_list in versions.items():
            if not pokemon_list:
                lines.append(f"        {json.dumps(version_name)}: [],")
                continue
            lines.append(f"        {json.dumps(version_name)}: [")
            for name in pokemon_list:
                lines.append(f"            {json.dumps(name)},")
            lines.append("        ],")
        lines.append("    },")
    lines.append("};")
    lines.append("")

    output_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"  Wrote {output_path}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument(
        "--game",
        help="Scrape only one paired game (default: all).",
        choices=list(GAME_PAIRS.keys()),
    )
    parser.add_argument(
        "--output",
        default="version_exclusives.js",
        help="Output .js path (default: version_exclusives.js)",
    )
    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Bypass both the PokéAPI and Bulbapedia caches.",
    )
    parser.add_argument(
        "--skip-pokeapi",
        action="store_true",
        help="Skip PokéAPI fetch and cross-reference (Bulbapedia only).",
    )
    args = parser.parse_args()
    use_cache = not args.no_cache

    print("Step 1/3: Fetching Bulbapedia version-exclusive page...")
    html = bulba_get(BULBA_URL, use_cache=use_cache)
    if not html:
        print("  ERROR: could not fetch Bulbapedia page.")
        return 1
    bulba_data = parse_bulbapedia(html)

    total = sum(len(v) for pair in bulba_data.values() for v in pair.values())
    print(f"  Parsed {total} Bulbapedia exclusives across "
          f"{len(bulba_data)} game pairs.")

    if not args.skip_pokeapi:
        print()
        print("Step 2/3: Fetching PokéAPI encounter data (1..1025)...")
        species_versions = fetch_pokeapi_species_versions(use_cache=use_cache)
        pokeapi_data = derive_pokeapi_exclusives(species_versions)
        cross_reference(bulba_data, pokeapi_data)
    else:
        print("  (Skipping PokéAPI cross-reference.)")

    print()
    print("Step 3/3: Writing output JS file...")
    write_js_file(bulba_data, Path(args.output), only_pair=args.game)
    return 0


if __name__ == "__main__":
    sys.exit(main())
