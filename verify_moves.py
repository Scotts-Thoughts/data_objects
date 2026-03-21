#!/usr/bin/env python3
"""
Cross-reference moves.js data against multiple online sources to find discrepancies.

Sources checked:
  1. PokeAPI  --cached raw JSON in move_cache/ (re-derived independently)
  2. Bulbapedia --MediaWiki API for move infobox data
  3. PokemonDB --scraped HTML move pages

Fields verified (per generation where applicable):
  - type, category, power, pp, accuracy

Usage:
    python verify_moves.py [--gens 1 2 3 ...] [--limit N] [--skip-pokemondb] [--skip-bulba]
"""

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote as _url_quote

try:
    import requests
except ImportError:
    print("ERROR: 'requests' not installed. Run: pip install requests")
    sys.exit(1)

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("ERROR: 'beautifulsoup4' not installed. Run: pip install beautifulsoup4")
    sys.exit(1)


# =============================================================================
# Configuration
# =============================================================================

POKEAPI_BASE = "https://pokeapi.co/api/v2"
MOVE_CACHE_DIR = Path("move_cache")
BULBA_CACHE_DIR = Path("bulba_cache")
PDB_CACHE_DIR = Path("pokemondb_move_cache")
SEREBII_CACHE_DIR = Path("serebii_move_cache")

VERSION_GROUP_TO_GEN = {
    "red-blue": 1, "yellow": 1,
    "gold-silver": 2, "crystal": 2,
    "ruby-sapphire": 3, "firered-leafgreen": 3, "emerald": 3,
    "diamond-pearl": 4, "heartgold-soulsilver": 4, "platinum": 4,
    "black-white": 5, "black-2-white-2": 5,
    "x-y": 6, "omega-ruby-alpha-sapphire": 6,
    "sun-moon": 7, "ultra-sun-ultra-moon": 7,
    "lets-go-pikachu-lets-go-eevee": 7,
    "sword-shield": 8, "brilliant-diamond-and-shining-pearl": 8,
    "legends-arceus": 8,
    "scarlet-violet": 9, "the-teal-mask": 9, "the-indigo-disk": 9,
}

VARIANT_VERSION_GROUPS = {
    "lets-go-pikachu-lets-go-eevee",
    "legends-arceus",
}

GEN_FROM_NAME = {
    "generation-i": 1, "generation-ii": 2, "generation-iii": 3,
    "generation-iv": 4, "generation-v": 5, "generation-vi": 6,
    "generation-vii": 7, "generation-viii": 8, "generation-ix": 9,
}

TYPE_MAP = {
    "normal": "Normal", "fire": "Fire", "water": "Water",
    "electric": "Electric", "grass": "Grass", "ice": "Ice",
    "fighting": "Fighting", "poison": "Poison", "ground": "Ground",
    "flying": "Flying", "psychic": "Psychic", "bug": "Bug",
    "rock": "Rock", "ghost": "Ghost", "dragon": "Dragon",
    "dark": "Dark", "steel": "Steel", "fairy": "Fairy",
    "stellar": "Stellar", "shadow": "Shadow",
}

_PHYSICAL_TYPES = {"Normal", "Fighting", "Flying", "Ground", "Rock",
                   "Bug", "Ghost", "Poison", "Steel"}
_SPECIAL_TYPES  = {"Fire", "Water", "Grass", "Electric", "Ice",
                   "Psychic", "Dragon", "Dark"}

_ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5,
           "VI": 6, "VII": 7, "VIII": 8, "IX": 9}


# =============================================================================
# Caching helpers
# =============================================================================

def _cached_get_json(url: str, cache_dir: Path, cache_key: str) -> dict | None:
    """GET JSON with file-based caching."""
    cache_dir.mkdir(exist_ok=True)
    cache_file = cache_dir / (cache_key + ".json")
    if cache_file.exists():
        with open(cache_file, encoding="utf-8") as f:
            return json.load(f)

    time.sleep(0.3)
    try:
        resp = requests.get(url, timeout=30)
        resp.raise_for_status()
        data = resp.json()
    except requests.RequestException as e:
        print(f"  WARNING: GET {url} failed: {e}")
        return None

    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump(data, f)
    return data


def _cached_get_html(url: str, cache_dir: Path, cache_key: str) -> str | None:
    """GET HTML with file-based caching."""
    cache_dir.mkdir(exist_ok=True)
    cache_file = cache_dir / (cache_key + ".html")
    if cache_file.exists():
        with open(cache_file, encoding="utf-8") as f:
            return f.read()

    time.sleep(0.5)
    try:
        resp = requests.get(url, timeout=30,
                            headers={"User-Agent": "PokemonDataVerifier/1.0"})
        resp.raise_for_status()
        html = resp.text
    except requests.RequestException as e:
        print(f"  WARNING: GET {url} failed: {e}")
        return None

    with open(cache_file, "w", encoding="utf-8") as f:
        f.write(html)
    return html


# =============================================================================
# Read moves.js
# =============================================================================

def read_moves_js(path: Path) -> dict:
    """Parse moves.js and return {gen_str: {move_name: {...}, ...}, ...}."""
    text = path.read_text(encoding="utf-8")
    m = re.search(r'export\s+const\s+moves\s*=\s*', text)
    if not m:
        print(f"ERROR: Could not parse {path}")
        sys.exit(1)
    json_str = text[m.end():].rstrip().rstrip(';')
    return json.loads(json_str)


# =============================================================================
# PokeAPI verification (independent re-derivation)
# =============================================================================

def _pokeapi_cache_file(move_id: int) -> Path:
    return MOVE_CACHE_DIR / f"move__{move_id}__.json"


def _load_pokeapi_move(move_id: int) -> dict | None:
    """Load a PokeAPI move from cache (doesn't fetch --uses existing cache)."""
    cf = _pokeapi_cache_file(move_id)
    if cf.exists():
        with open(cf, encoding="utf-8") as f:
            return json.load(f)
    return None


def _pokeapi_get_english_name(move_data: dict) -> str:
    for entry in move_data.get("names", []):
        if (entry.get("language") or {}).get("name") == "en":
            return entry["name"]
    return move_data["name"].replace("-", " ").title()


def _vg_gen(pv: dict) -> int:
    vg = (pv.get("version_group") or {}).get("name", "")
    return VERSION_GROUP_TO_GEN.get(vg, 0)


def _vg_name(pv: dict) -> str:
    return (pv.get("version_group") or {}).get("name", "")


def _get_scalar_for_gen(current, past_values: list, field: str, target_gen: int):
    """Independently re-derive a field value for a target gen from PokeAPI data."""
    entries = [pv for pv in past_values if pv.get(field) is not None]

    # Variant VG in same gen
    same_gen_variants = [
        pv for pv in entries
        if _vg_name(pv) in VARIANT_VERSION_GROUPS and _vg_gen(pv) == target_gen
    ]
    if same_gen_variants:
        return same_gen_variants[0][field]

    relevant = [pv for pv in entries if _vg_gen(pv) > target_gen]
    if not relevant:
        return current

    relevant.sort(key=_vg_gen)
    return relevant[0][field]


def _get_type_for_gen(current_type: str, past_values: list, target_gen: int) -> str:
    entries = [pv for pv in past_values if pv.get("type") is not None]

    same_gen_variants = [
        pv for pv in entries
        if _vg_name(pv) in VARIANT_VERSION_GROUPS and _vg_gen(pv) == target_gen
    ]
    if same_gen_variants:
        raw = same_gen_variants[0]["type"]["name"]
        return TYPE_MAP.get(raw, raw.title())

    relevant = [pv for pv in entries if _vg_gen(pv) > target_gen]
    if not relevant:
        return current_type

    relevant.sort(key=_vg_gen)
    raw = relevant[0]["type"]["name"]
    return TYPE_MAP.get(raw, raw.title())


def _get_category_for_gen(damage_class: str, move_type: str, target_gen: int) -> str:
    if target_gen >= 4:
        return damage_class.title()
    if damage_class == "status":
        return "Status"
    if move_type in _PHYSICAL_TYPES:
        return "Physical"
    if move_type in _SPECIAL_TYPES:
        return "Special"
    return damage_class.title()


def verify_against_pokeapi(moves_data: dict, target_gens: list[int]) -> list[dict]:
    """
    Re-derive move values from raw PokeAPI cache and compare against moves.js.
    Returns list of discrepancy dicts.
    """
    discrepancies = []

    # Build rom_id -> cached PokeAPI data lookup
    api_cache = {}
    for f in MOVE_CACHE_DIR.glob("move__*__.json"):
        try:
            mid = int(f.stem.replace("move__", "").replace("__", ""))
            api_cache[mid] = f
        except ValueError:
            continue

    for gen in target_gens:
        gen_key = str(gen)
        gen_moves = moves_data.get(gen_key, {})

        for move_name, our_data in gen_moves.items():
            rom_id = our_data.get("rom_id")
            if rom_id is None or rom_id not in api_cache:
                continue

            with open(api_cache[rom_id], encoding="utf-8") as f:
                api_data = json.load(f)

            # Check intro gen
            intro_gen = GEN_FROM_NAME.get(
                (api_data.get("generation") or {}).get("name", ""), 99
            )
            if intro_gen > gen:
                discrepancies.append({
                    "source": "PokeAPI",
                    "gen": gen,
                    "move": move_name,
                    "field": "existence",
                    "ours": "present",
                    "theirs": f"not introduced until gen {intro_gen}",
                })
                continue

            past_values = api_data.get("past_values", [])
            current_type = TYPE_MAP.get(api_data["type"]["name"],
                                        api_data["type"]["name"].title())
            damage_class = api_data["damage_class"]["name"]

            # Derive expected values
            expected_type = _get_type_for_gen(current_type, past_values, gen)
            expected_cat = _get_category_for_gen(damage_class, expected_type, gen)
            expected_power = _get_scalar_for_gen(api_data.get("power"),
                                                  past_values, "power", gen)
            expected_pp = _get_scalar_for_gen(api_data.get("pp"),
                                               past_values, "pp", gen)
            expected_acc = _get_scalar_for_gen(api_data.get("accuracy"),
                                                past_values, "accuracy", gen)

            checks = [
                ("type", our_data.get("type"), expected_type),
                ("category", our_data.get("category"), expected_cat),
                ("power", our_data.get("power"), expected_power),
                ("pp", our_data.get("pp"), expected_pp),
                ("accuracy", our_data.get("accuracy"), expected_acc),
            ]

            for field, ours, theirs in checks:
                o, t = ours, theirs
                # Normalize 0/None for power and accuracy (status moves)
                if field in ("power", "accuracy"):
                    o = _normalize_power_acc(o)
                    t = _normalize_power_acc(t)
                if o != t:
                    discrepancies.append({
                        "source": "PokeAPI",
                        "gen": gen,
                        "move": move_name,
                        "field": field,
                        "ours": ours,
                        "theirs": theirs,
                    })

    return discrepancies


# =============================================================================
# Bulbapedia verification
# =============================================================================

BULBA_API = "https://bulbapedia.bulbagarden.net/w/api.php"


def _fetch_bulba_wikitext(move_name: str) -> str | None:
    """Fetch raw wikitext for a move's Bulbapedia page (cached)."""
    BULBA_CACHE_DIR.mkdir(exist_ok=True)
    safe = re.sub(r'[<>:"/\\|?*]', '_', move_name)
    cache_file = BULBA_CACHE_DIR / (safe + ".json")

    if cache_file.exists():
        with open(cache_file, encoding="utf-8") as f:
            data = json.load(f)
        return data.get("wikitext")

    slug = move_name.replace(" ", "_")
    url = (f"{BULBA_API}?action=parse"
           f"&page={_url_quote(slug, safe='_()-')}_(move)"
           f"&prop=wikitext&format=json")

    time.sleep(0.5)
    try:
        resp = requests.get(url, timeout=30,
                            headers={"User-Agent": "PokemonDataVerifier/1.0"})
        resp.raise_for_status()
        result = resp.json()
    except requests.RequestException:
        return None

    if "error" in result:
        with open(cache_file, "w", encoding="utf-8") as f:
            json.dump({"wikitext": None}, f)
        return None

    wikitext = result.get("parse", {}).get("wikitext", {}).get("*", "")
    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump({"wikitext": wikitext}, f)
    return wikitext


def _parse_bulba_infobox(wikitext: str) -> dict:
    """Extract current power/accuracy/pp/type/category from MoveInfobox."""
    m = re.search(r'\{\{MoveInfobox\b(.*?)\n\}\}', wikitext, re.DOTALL)
    if not m:
        return {}

    full_infobox = m.group(1)

    # The MoveInfobox header fields are in the first ~50 lines before
    # Pokemon learn-set entries start. Limit parsing to the header portion
    # to avoid matching |type= from nested Moveentry templates.
    infobox_lines = full_infobox.split('\n')
    infobox = '\n'.join(infobox_lines[:50])

    stats = {}

    # Type — match at start of line (infobox uses "type=X |" format)
    tm = re.search(r'^type\s*=\s*(\w+)', infobox, re.MULTILINE)
    if not tm:
        # Fallback: try with pipe prefix
        tm = re.search(r'\|type\s*=\s*(\w+)', infobox)
    if tm:
        stats["type"] = tm.group(1).strip().title()

    # Category / damage class — match at start of line
    cm = re.search(r'^damagecategory\s*=\s*(\w+)', infobox, re.MULTILINE)
    if not cm:
        cm = re.search(r'\|damagecategory\s*=\s*(\w+)', infobox)
    if cm:
        stats["category"] = cm.group(1).strip().title()

    # Numeric fields
    field_map = {"power": "power", "accuracy": "accuracy", "basepp": "pp"}
    for wiki_field, our_field in field_map.items():
        fm = re.search(rf'^{wiki_field}\s*=\s*(.*)', infobox, re.MULTILINE)
        if not fm:
            fm = re.search(rf'\|{wiki_field}\s*=\s*(.*)', infobox)
        if not fm:
            continue
        raw = fm.group(1).strip()
        # Strip trailing pipe separators
        raw = raw.rstrip(' |')

        # Handle {{tt|displayed_value|tooltip}}
        tt = re.match(r'\{\{tt\|([^|]+)\|', raw)
        if tt:
            raw = tt.group(1).strip()

        if raw in ("\u2014", "???", "", "\u2014 |"):
            stats[our_field] = None
        else:
            num = re.match(r'(\d+)', raw)
            if num:
                stats[our_field] = int(num.group(1))

    # Flags — these are always in the header portion
    flag_map = {
        "touches":    "makes_contact",
        "protect":    "affected_by_protect",
        "magiccoat":  "affected_by_magic_coat",
        "snatch":     "affected_by_snatch",
        "mirrormove": "affected_by_mirror_move",
        "kingsrock":  "affected_by_kings_rock",
    }
    for wiki_param, our_name in flag_map.items():
        fm = re.search(rf'^{wiki_param}\s*=\s*(\w+)', infobox, re.MULTILINE)
        if not fm:
            fm = re.search(rf'\|{wiki_param}\s*=\s*(\w+)', infobox)
        if fm:
            stats[our_name] = fm.group(1).lower() == "yes"

    return stats


def _parse_bulba_gen_history(wikitext: str) -> list:
    """
    Parse {{tt|current|tooltip}} templates for historical per-gen values.
    Returns [(field, gen_start, gen_end, value), ...].
    """
    m = re.search(r'\{\{MoveInfobox\b(.*?)\n\}\}', wikitext, re.DOTALL)
    if not m:
        return []

    # Limit to header portion of infobox
    infobox_lines = m.group(1).split('\n')
    infobox = '\n'.join(infobox_lines[:50])
    field_map = {"power": "power", "accuracy": "accuracy", "basepp": "pp"}
    results = []

    for wiki_field, our_field in field_map.items():
        fm = re.search(rf'^{wiki_field}\s*=\s*(.*)', infobox, re.MULTILINE)
        if not fm:
            fm = re.search(rf'\|{wiki_field}\s*=\s*(.*)', infobox)
        if not fm:
            continue
        raw = fm.group(1).strip()

        tt = re.match(r'\{\{tt\|[^|]+\|([^}]+)\}\}', raw)
        if not tt:
            continue
        tooltip = tt.group(1)

        for segment in tooltip.split(";"):
            segment = segment.strip()

            rm = re.search(
                r'(\d+)\s+in\s+Generations?\s+([IVX]+)\s*[-–to ]*\s*([IVX]*)',
                segment
            )
            if rm:
                val = int(rm.group(1))
                start = _ROMAN.get(rm.group(2).strip(), 0)
                end_str = rm.group(3).strip()
                end = _ROMAN.get(end_str, 0) if end_str else start
                if start:
                    results.append((our_field, start, end or start, val))
                continue

            rm = re.search(r'(\d+)\s+prior\s+to\s+Generation\s+([IVX]+)', segment)
            if rm:
                val = int(rm.group(1))
                before_gen = _ROMAN.get(rm.group(2).strip(), 0)
                if before_gen:
                    results.append((our_field, 1, before_gen - 1, val))

    return results


def verify_against_bulbapedia(moves_data: dict, target_gens: list[int]) -> list[dict]:
    """
    Verify moves.js against Bulbapedia infobox data.
    For the latest gen, checks current infobox values.
    For historical gens, checks tooltip history ranges.
    Returns list of discrepancy dicts.
    """
    discrepancies = []
    latest_gen = max(target_gens)

    # Collect unique move names from the latest gen we're checking
    all_move_names = set()
    for gen in target_gens:
        all_move_names.update(moves_data.get(str(gen), {}).keys())

    print(f"\n  Checking {len(all_move_names)} unique moves against Bulbapedia...")

    for i, move_name in enumerate(sorted(all_move_names)):
        if (i + 1) % 100 == 0:
            print(f"    [{i+1}/{len(all_move_names)}] {move_name}...")

        wikitext = _fetch_bulba_wikitext(move_name)
        if not wikitext:
            continue

        # Parse current (latest gen) values
        bulba_current = _parse_bulba_infobox(wikitext)
        if not bulba_current:
            continue

        # Parse historical gen ranges
        gen_history = _parse_bulba_gen_history(wikitext)

        # Build per-gen expected values for power/accuracy/pp
        # History ranges give old values; current infobox gives latest values
        for gen in target_gens:
            gen_key = str(gen)
            our_data = moves_data.get(gen_key, {}).get(move_name)
            if not our_data:
                continue

            # Check numeric fields
            for field in ("power", "pp", "accuracy"):
                # Find applicable historical value for this gen
                bulba_val = None

                # Check tooltip history ranges
                for hfield, start, end, val in gen_history:
                    if hfield == field and start <= gen <= end:
                        bulba_val = val
                        break

                # If no historical range covers this gen, use current value
                # (but only for the latest gen or gens after all historical ranges)
                if bulba_val is None:
                    # Check if any range exists for this field
                    field_ranges = [(s, e, v) for f, s, e, v in gen_history if f == field]
                    if field_ranges:
                        max_covered = max(e for s, e, v in field_ranges)
                        if gen > max_covered:
                            bulba_val = bulba_current.get(field)
                    else:
                        # No history at all --current value applies to all gens
                        bulba_val = bulba_current.get(field)

                if bulba_val is not None:
                    our_val = our_data.get(field)
                    if our_val != bulba_val:
                        discrepancies.append({
                            "source": "Bulbapedia",
                            "gen": gen,
                            "move": move_name,
                            "field": field,
                            "ours": our_val,
                            "theirs": bulba_val,
                        })

            # Check type and category (from current infobox --mainly for latest gen)
            if gen == latest_gen:
                if "type" in bulba_current:
                    our_type = our_data.get("type")
                    bulba_type = bulba_current["type"]
                    if our_type and bulba_type and our_type != bulba_type:
                        discrepancies.append({
                            "source": "Bulbapedia",
                            "gen": gen,
                            "move": move_name,
                            "field": "type",
                            "ours": our_type,
                            "theirs": bulba_type,
                        })

                if "category" in bulba_current:
                    our_cat = our_data.get("category")
                    bulba_cat = bulba_current["category"]
                    if our_cat and bulba_cat and our_cat != bulba_cat:
                        discrepancies.append({
                            "source": "Bulbapedia",
                            "gen": gen,
                            "move": move_name,
                            "field": "category",
                            "ours": our_cat,
                            "theirs": bulba_cat,
                        })

                # Check flags (only for latest gen since infobox shows current values)
                for flag in ("makes_contact", "affected_by_protect",
                             "affected_by_magic_coat", "affected_by_snatch",
                             "affected_by_mirror_move", "affected_by_kings_rock"):
                    if flag in bulba_current:
                        our_flag = our_data.get(flag)
                        bulba_flag = bulba_current[flag]
                        if our_flag is not None and our_flag != bulba_flag:
                            discrepancies.append({
                                "source": "Bulbapedia",
                                "gen": gen,
                                "move": move_name,
                                "field": flag,
                                "ours": our_flag,
                                "theirs": bulba_flag,
                            })

    return discrepancies


# =============================================================================
# PokemonDB verification
# =============================================================================

def _pokemondb_slug(move_name: str) -> str:
    """Convert a move name to PokemonDB URL slug."""
    slug = move_name.lower()
    # Normalize smart quotes to apostrophes, then keep them
    # PokemonDB uses "kings-shield" style (drop apostrophe)
    slug = slug.replace("\u2019", "'")
    slug = slug.replace("'", "")
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    return slug


def _normalize_power_acc(value):
    """Treat 0 and None as equivalent for status move power/accuracy."""
    if value == 0:
        return None
    return value


def _parse_pokemondb_move(html: str, move_name: str) -> dict | None:
    """
    Parse a PokemonDB move page to extract: type, category, power, pp, accuracy.
    Also extracts gen-specific historical changes if present.
    Returns {"current": {...}, "changes": [...]} or None.
    """
    soup = BeautifulSoup(html, "html.parser")

    result = {"current": {}, "changes": []}

    # The move vitals table has the main stats
    vitals_table = soup.find("table", class_="vitals-table")
    if not vitals_table:
        return None

    rows = vitals_table.find_all("tr")
    for row in rows:
        th = row.find("th")
        td = row.find("td")
        if not th or not td:
            continue

        label = th.get_text(strip=True).lower()
        value = td.get_text(strip=True)

        if label == "type":
            result["current"]["type"] = value.strip().title()
        elif label == "category":
            cat_text = value.strip()
            if cat_text.lower() in ("physical", "special", "status"):
                result["current"]["category"] = cat_text.title()
        elif label == "power":
            if value == "—" or value == "":
                result["current"]["power"] = None
            else:
                m = re.match(r'(\d+)', value)
                if m:
                    result["current"]["power"] = int(m.group(1))
        elif label in ("accuracy", "acc."):
            if value == "—" or value == "∞" or value == "":
                result["current"]["accuracy"] = None
            else:
                m = re.match(r'(\d+)', value)
                if m:
                    result["current"]["accuracy"] = int(m.group(1))
        elif label == "pp":
            m = re.match(r'(\d+)', value)
            if m:
                result["current"]["pp"] = int(m.group(1))

    # Look for "Changes" section --PokemonDB shows historical gen changes
    # in a section like "In other generations" or "Changes" with a table
    changes_header = None
    for h in soup.find_all(["h2", "h3"]):
        if "change" in h.get_text(strip=True).lower():
            changes_header = h
            break

    if changes_header:
        # Look for list items after the header
        next_elem = changes_header.find_next_sibling()
        while next_elem and next_elem.name not in ("h2", "h3"):
            if next_elem.name in ("ul", "ol"):
                for li in next_elem.find_all("li"):
                    text = li.get_text(strip=True)
                    result["changes"].append(text)
            elif next_elem.name == "p":
                text = next_elem.get_text(strip=True)
                if text:
                    result["changes"].append(text)
            next_elem = next_elem.find_next_sibling()

    return result


def verify_against_pokemondb(moves_data: dict, target_gens: list[int]) -> list[dict]:
    """
    Verify latest-gen moves.js data against PokemonDB scraped HTML.
    PokemonDB shows current gen data, so we only check the latest gen.
    Returns list of discrepancy dicts.
    """
    discrepancies = []
    latest_gen = max(target_gens)
    gen_key = str(latest_gen)
    gen_moves = moves_data.get(gen_key, {})

    print(f"\n  Checking {len(gen_moves)} gen {latest_gen} moves against PokemonDB...")

    for i, (move_name, our_data) in enumerate(sorted(gen_moves.items())):
        if (i + 1) % 100 == 0:
            print(f"    [{i+1}/{len(gen_moves)}] {move_name}...")

        slug = _pokemondb_slug(move_name)
        url = f"https://pokemondb.net/move/{slug}"
        cache_key = slug

        html = _cached_get_html(url, PDB_CACHE_DIR, cache_key)
        if not html:
            continue

        parsed = _parse_pokemondb_move(html, move_name)
        if not parsed or not parsed["current"]:
            continue

        pdb = parsed["current"]

        checks = []
        if "type" in pdb:
            checks.append(("type", our_data.get("type"), pdb["type"]))
        if "category" in pdb:
            checks.append(("category", our_data.get("category"), pdb["category"]))
        if "power" in pdb:
            checks.append(("power", our_data.get("power"), pdb["power"]))
        if "pp" in pdb:
            checks.append(("pp", our_data.get("pp"), pdb["pp"]))
        if "accuracy" in pdb:
            checks.append(("accuracy", our_data.get("accuracy"), pdb["accuracy"]))

        for field, ours, theirs in checks:
            o, t = ours, theirs
            if field in ("power", "accuracy"):
                o = _normalize_power_acc(o)
                t = _normalize_power_acc(t)
            if o != t:
                discrepancies.append({
                    "source": "PokemonDB",
                    "gen": latest_gen,
                    "move": move_name,
                    "field": field,
                    "ours": ours,
                    "theirs": theirs,
                })

    return discrepancies


# =============================================================================
# Reporting
# =============================================================================

def print_discrepancies(discrepancies: list[dict]):
    """Print discrepancies in a clear, organized format."""
    if not discrepancies:
        print("\n" + "=" * 70)
        print("  NO DISCREPANCIES FOUND")
        print("=" * 70)
        return

    # Group by source
    by_source = {}
    for d in discrepancies:
        by_source.setdefault(d["source"], []).append(d)

    print("\n" + "=" * 70)
    print(f"  DISCREPANCY REPORT -- {len(discrepancies)} total issues found")
    print("=" * 70)

    for source in sorted(by_source.keys()):
        items = by_source[source]
        print(f"\n{'-' * 70}")
        print(f"  SOURCE: {source} ({len(items)} discrepancies)")
        print(f"{'-' * 70}")

        # Sub-group by gen
        by_gen = {}
        for d in items:
            by_gen.setdefault(d["gen"], []).append(d)

        for gen in sorted(by_gen.keys()):
            gen_items = by_gen[gen]
            print(f"\n  Gen {gen} ({len(gen_items)} issues):")

            # Sub-group by field for a cleaner view
            by_field = {}
            for d in gen_items:
                by_field.setdefault(d["field"], []).append(d)

            for field in sorted(by_field.keys()):
                field_items = by_field[field]
                print(f"    [{field}] ({len(field_items)} moves)")
                for d in sorted(field_items, key=lambda x: x["move"]):
                    print(f"      {d['move']:30s}  ours={str(d['ours']):>10s}  "
                          f"{source}={str(d['theirs']):>10s}")

    # Summary by field
    print(f"\n{'-' * 70}")
    print("  SUMMARY BY FIELD:")
    by_field_total = {}
    for d in discrepancies:
        by_field_total.setdefault(d["field"], 0)
        by_field_total[d["field"]] += 1
    for field, count in sorted(by_field_total.items(), key=lambda x: -x[1]):
        print(f"    {field:30s} {count:5d} discrepancies")

    # Summary by source
    print(f"\n  SUMMARY BY SOURCE:")
    for source, items in sorted(by_source.items()):
        print(f"    {source:30s} {len(items):5d} discrepancies")

    # Agreement analysis: moves where 2+ sources disagree with our data
    multi_source = {}
    for d in discrepancies:
        key = (d["gen"], d["move"], d["field"])
        multi_source.setdefault(key, set()).add(d["source"])

    multi_confirmed = {k: v for k, v in multi_source.items() if len(v) >= 2}
    if multi_confirmed:
        print(f"\n{'-' * 70}")
        print(f"  HIGH CONFIDENCE ISSUES (2+ sources disagree with our data):")
        print(f"{'-' * 70}")
        for (gen, move, field), sources in sorted(multi_confirmed.items()):
            matching_discs = [d for d in discrepancies
                             if d["gen"] == gen and d["move"] == move
                             and d["field"] == field]
            sources_str = ", ".join(sorted(sources))
            our_val = matching_discs[0]["ours"]
            their_vals = {d["source"]: d["theirs"] for d in matching_discs}
            print(f"  Gen {gen} {move:30s} {field:12s} ours={str(our_val):>8s}  "
                  f"sources: {their_vals}")


# =============================================================================
# Main
# =============================================================================

def parse_args():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument(
        "--gens", nargs="+", type=int, default=[1, 2, 3, 4, 5, 6, 7, 8, 9],
        metavar="N", help="Generations to verify (default: all)"
    )
    parser.add_argument(
        "--input", default="moves.js",
        help="Input moves.js file (default: moves.js)"
    )
    parser.add_argument(
        "--limit", type=int, default=0,
        help="Limit number of moves to check per source (0=all, useful for testing)"
    )
    parser.add_argument(
        "--skip-pokemondb", action="store_true",
        help="Skip PokemonDB verification (saves time on first run)"
    )
    parser.add_argument(
        "--skip-bulba", action="store_true",
        help="Skip Bulbapedia verification"
    )
    parser.add_argument(
        "--skip-pokeapi", action="store_true",
        help="Skip PokeAPI verification"
    )
    parser.add_argument(
        "--moves", nargs="+", default=None,
        help="Only check specific moves (by name)"
    )
    return parser.parse_args()


def main():
    # Ensure UTF-8 output on Windows
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    args = parse_args()
    target_gens = sorted(args.gens)
    input_path = Path(args.input)

    print(f"Reading moves data from {input_path}...")
    moves_data = read_moves_js(input_path)
    total_entries = sum(len(moves_data.get(str(g), {})) for g in target_gens)
    print(f"Loaded {total_entries} move entries across gens {target_gens}")

    # Filter to specific moves if requested
    if args.moves:
        move_set = set(args.moves)
        for gen_key in list(moves_data.keys()):
            moves_data[gen_key] = {k: v for k, v in moves_data[gen_key].items()
                                    if k in move_set}
        filtered = sum(len(moves_data.get(str(g), {})) for g in target_gens)
        print(f"Filtered to {filtered} entries for moves: {args.moves}")

    all_discrepancies = []

    # 1. PokeAPI verification
    if not args.skip_pokeapi:
        print(f"\n{'=' * 50}")
        print(f"  VERIFYING AGAINST POKEAPI")
        print(f"{'=' * 50}")
        pokeapi_discs = verify_against_pokeapi(moves_data, target_gens)
        all_discrepancies.extend(pokeapi_discs)
        print(f"  Found {len(pokeapi_discs)} discrepancies vs PokeAPI")

    # 2. Bulbapedia verification
    if not args.skip_bulba:
        print(f"\n{'=' * 50}")
        print(f"  VERIFYING AGAINST BULBAPEDIA")
        print(f"{'=' * 50}")
        bulba_discs = verify_against_bulbapedia(moves_data, target_gens)
        all_discrepancies.extend(bulba_discs)
        print(f"  Found {len(bulba_discs)} discrepancies vs Bulbapedia")

    # 3. PokemonDB verification
    if not args.skip_pokemondb:
        print(f"\n{'=' * 50}")
        print(f"  VERIFYING AGAINST POKEMONDB")
        print(f"{'=' * 50}")
        pdb_discs = verify_against_pokemondb(moves_data, target_gens)
        all_discrepancies.extend(pdb_discs)
        print(f"  Found {len(pdb_discs)} discrepancies vs PokemonDB")

    # Print full report
    print_discrepancies(all_discrepancies)


if __name__ == "__main__":
    main()
