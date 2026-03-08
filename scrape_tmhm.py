#!/usr/bin/python3
"""
Scrape TM/HM/TR data from PokéAPI for Gen 6-9 games, then:
  1. Add new generation entries to tmhm.js
  2. Re-sort tm_hm_learnset in the scraped pokedex files

Usage:
    python scrape_tmhm.py                # both steps
    python scrape_tmhm.py --tmhm-only    # only update tmhm.js
    python scrape_tmhm.py --sort-only    # only sort pokedex files (uses existing tmhm.js)
    python scrape_tmhm.py --no-cache     # bypass API cache

Requirements:
    pip install requests
"""

import argparse
import json
import os
import re
import time
from pathlib import Path

import requests


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

API_BASE   = "https://pokeapi.co/api/v2"
CACHE_DIR  = Path(".scrape_cache_api")    # shared with scrape_pokedex.py
TMHM_PATH  = "tmhm.js"
POKEDEX_DIR = "pokedex"

REQUEST_DELAY = 0.3
MAX_RETRIES   = 3

# For each new tmhm.js key, which PokéAPI version group to use as the source.
# Using the "later" game in each pair so we get the superset of TMs/HMs.
NEW_GEN_VERSION_GROUPS = {
    "6": "omega-ruby-alpha-sapphire",   # ORAS has HM07 Dive that XY lacks
    "7": "ultra-sun-ultra-moon",        # USUM TMs identical to SM; no HMs in Gen 7
    "8": "sword-shield",                # TM01-100 + TR01-99, no HMs
    "9": "scarlet-violet",              # TM001-TM171 (or however many exist)
}

# Which tmhm.js key to use when sorting each scraped pokedex file
POKEDEX_FILE_TO_GEN = {
    "black2_white2.js":             "5",   # already in tmhm.js
    "x_y.js":                       "6",
    "omega_ruby_alpha_sapphire.js": "6",
    "sun_moon.js":                  "7",
    "ultra_sun_ultra_moon.js":      "7",
    "sword_shield.js":              "8",
    "scarlet_violet.js":            "9",
}

# Sort order for machine type prefixes within a learnset
_PREFIX_ORDER = {"TM": 0, "TR": 1, "HM": 2}


# ---------------------------------------------------------------------------
# HTTP / caching (same pattern as scrape_pokedex.py)
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
# Machine helpers
# ---------------------------------------------------------------------------

def machine_key(item_name: str) -> str:
    """'tm01' → 'TM01', 'tr01' → 'TR01', 'tm001' → 'TM001'"""
    return item_name.upper()


def machine_sort_key(key: str) -> tuple:
    """Sort key so TM < TR < HM, then by number."""
    m = re.match(r"([A-Z]+)(\d+)", key)
    if not m:
        return (99, 9999)
    prefix = m.group(1)
    number = int(m.group(2))
    return (_PREFIX_ORDER.get(prefix, 99), number)


def get_move_display_name(move_url: str, use_cache: bool) -> str:
    """Return the English display name for a move, e.g. 'Solar Beam'."""
    data = api_get(move_url, use_cache=use_cache)
    if data:
        for entry in data.get("names", []):
            if entry["language"]["name"] == "en":
                return entry["name"]
        # Fallback: derive from slug
        slug = data.get("name", "")
        return " ".join(w.capitalize() for w in slug.split("-"))
    return ""


# ---------------------------------------------------------------------------
# Build TM/HM/TR dict for one generation
# ---------------------------------------------------------------------------

def build_gen_tmhm(all_machines: list[dict], version_group: str, use_cache: bool) -> dict:
    """
    Filter all_machines to those belonging to version_group, fetch English
    move names, and return an ordered dict: {"TM01": "Hone Claws", ...}.
    """
    relevant = [
        m for m in all_machines
        if m.get("version_group", {}).get("name") == version_group
    ]

    if not relevant:
        print(f"  WARNING: no machines found for version group '{version_group}'")
        return {}

    # Sort by TM/TR/HM prefix then number
    relevant.sort(key=lambda m: machine_sort_key(machine_key(m["item"]["name"])))

    result = {}
    for i, machine in enumerate(relevant, 1):
        key  = machine_key(machine["item"]["name"])
        name = get_move_display_name(machine["move"]["url"], use_cache)
        if name:
            result[key] = name
        if i % 50 == 0:
            print(f"    {i}/{len(relevant)} machines processed")

    return result


# ---------------------------------------------------------------------------
# tmhm.js I/O
# ---------------------------------------------------------------------------

def read_tmhm_js() -> dict:
    """Parse tmhm.js into a plain Python dict (handles trailing commas)."""
    raw = Path(TMHM_PATH).read_text(encoding="utf-8")
    raw = raw[raw.index("{"):]
    # Strip JS trailing commas (invalid in JSON)
    raw = re.sub(r",(\s*[}\]])", r"\1", raw)
    return json.loads(raw)


def write_tmhm_js(data: dict) -> None:
    """Write data back to tmhm.js in the same format."""
    # Produce the inner per-gen objects with 4-space indentation
    lines = ["export const tmhm = {"]
    for gen_key, tm_map in data.items():
        lines.append(f'    "{gen_key}": {{')
        for tm_key, move_name in tm_map.items():
            lines.append(f'        "{tm_key}": "{move_name}",')
        lines.append("    },")
    lines.append("}")
    Path(TMHM_PATH).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"  Written {TMHM_PATH}")


# ---------------------------------------------------------------------------
# Pokedex file I/O  (CompactJSONEncoder copied from generate_split_pokedex_files.py)
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


def read_pokedex_js(path: str) -> dict:
    raw = Path(path).read_text(encoding="utf-8")
    raw = raw[raw.index("{"):]
    raw = re.sub(r",(\s*[}\]])", r"\1", raw)   # strip any trailing commas
    return json.loads(raw)


def write_pokedex_js(path: str, data: dict) -> None:
    with open(path, "w", encoding="utf-8") as f:
        out = json.dumps(data, cls=CompactJSONEncoder, indent=4)
        f.write("export const pokedex = " + out)


# ---------------------------------------------------------------------------
# Sorting logic
# ---------------------------------------------------------------------------

def build_move_order(tm_map: dict) -> dict[str, int]:
    """
    Given {"TM01": "Hone Claws", "TM02": "Dragon Claw", ...},
    return {"Hone Claws": 0, "Dragon Claw": 1, ...} for fast lookup.
    """
    return {move_name: i for i, move_name in enumerate(tm_map.values())}


def sort_tm_learnset(tm_list: list[str], move_order: dict[str, int]) -> list[str]:
    """Sort a tm_hm_learnset by the canonical TM ordering; unknowns go last."""
    return sorted(tm_list, key=lambda m: move_order.get(m, len(move_order)))


def sort_pokedex_file(filepath: str, move_order: dict[str, int]) -> int:
    """
    Re-sort every Pokémon's tm_hm_learnset in the file.
    Returns the number of Pokémon whose list changed order.
    """
    data    = read_pokedex_js(filepath)
    changed = 0

    for pokemon in data.values():
        original = pokemon.get("tm_hm_learnset", [])
        sorted_  = sort_tm_learnset(original, move_order)
        if sorted_ != original:
            pokemon["tm_hm_learnset"] = sorted_
            changed += 1

    write_pokedex_js(filepath, data)
    return changed


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def step_update_tmhm(use_cache: bool) -> dict:
    """Fetch machine data and add Gen 6-9 entries to tmhm.js. Returns updated data."""
    print("\n--- Step 1: Fetching machine list from PokéAPI ---")
    machine_list = api_get(f"{API_BASE}/machine?limit=10000", use_cache=use_cache)
    if not machine_list:
        print("ERROR: could not fetch machine list")
        return {}

    stubs = machine_list.get("results", [])
    print(f"  Found {len(stubs)} total machines. Fetching details (this takes a few minutes on first run)...")

    all_machines = []
    for i, stub in enumerate(stubs, 1):
        m = api_get(stub["url"], use_cache=use_cache)
        if m:
            all_machines.append(m)
        if i % 200 == 0:
            print(f"  [{i}/{len(stubs)}] machines fetched")

    print(f"  Fetched {len(all_machines)} machine details.")

    tmhm_data = read_tmhm_js()
    print(f"  Existing tmhm.js keys: {list(tmhm_data.keys())}")

    for gen_key, version_group in NEW_GEN_VERSION_GROUPS.items():
        if gen_key in tmhm_data:
            print(f"\n  Gen {gen_key} already in tmhm.js — skipping fetch, keeping existing data.")
            continue

        print(f"\n  Building Gen {gen_key} ({version_group})...")
        gen_map = build_gen_tmhm(all_machines, version_group, use_cache)
        if gen_map:
            tmhm_data[gen_key] = gen_map
            print(f"  Gen {gen_key}: {len(gen_map)} entries (TMs/TRs/HMs)")
        else:
            print(f"  Gen {gen_key}: no data found — check version group name '{version_group}'")

    write_tmhm_js(tmhm_data)
    return tmhm_data


def step_sort_pokedex(tmhm_data: dict) -> None:
    """Sort tm_hm_learnset in all scraped pokedex files using tmhm_data."""
    print("\n--- Step 2: Sorting tm_hm_learnsets ---")

    for filename, gen_key in POKEDEX_FILE_TO_GEN.items():
        filepath = os.path.join(POKEDEX_DIR, filename)
        if not os.path.exists(filepath):
            print(f"  {filename}: not found, skipping")
            continue

        if gen_key not in tmhm_data:
            print(f"  {filename}: no tmhm.js entry for gen '{gen_key}', skipping")
            continue

        move_order = build_move_order(tmhm_data[gen_key])
        changed    = sort_pokedex_file(filepath, move_order)
        print(f"  {filename}: {changed} Pokémon reordered")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Scrape TM data and sort tm_hm_learnsets in scraped pokedex files"
    )
    parser.add_argument("--tmhm-only", action="store_true",
                        help="Only update tmhm.js; do not sort pokedex files")
    parser.add_argument("--sort-only", action="store_true",
                        help="Only sort pokedex files; do not fetch new TM data")
    parser.add_argument("--no-cache", action="store_true",
                        help="Re-fetch all data even if cached locally")
    args = parser.parse_args()
    use_cache = not args.no_cache

    CACHE_DIR.mkdir(exist_ok=True)

    if args.sort_only:
        tmhm_data = read_tmhm_js()
        step_sort_pokedex(tmhm_data)
    elif args.tmhm_only:
        step_update_tmhm(use_cache)
    else:
        tmhm_data = step_update_tmhm(use_cache)
        if tmhm_data:
            step_sort_pokedex(tmhm_data)

    print("\nDone.")


if __name__ == "__main__":
    main()
