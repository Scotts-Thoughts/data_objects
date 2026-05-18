#!/usr/bin/python3
"""
Regional Pokédex scraper for Gen 1-9 games using PokéAPI (https://pokeapi.co).

For each game (or group of games sharing a regional Pokédex), writes one file
to the `regional_dex/` directory in the form:

    export const regional_dex = {
        1: "Victini",
        2: "Snivy",
        ...
    };

Games with multiple sub-dexes (X/Y, Sw/Sh, S/V) are merged into a single file
with entries renumbered 1..N in canonical sub-dex order; the boundaries are
preserved in a comment at the top of the file.

Requirements:
    pip install requests

Usage:
    python scrape_regional_dex.py                              # all games
    python scrape_regional_dex.py --game black2_white2         # one output
    python scrape_regional_dex.py --list                       # list outputs
    python scrape_regional_dex.py --no-cache                   # bypass cache
    python scrape_regional_dex.py --output-dir some/other/dir
"""

import argparse
import json
import re
import sys
import time
from pathlib import Path

import requests


API_BASE = "https://pokeapi.co/api/v2"
CACHE_DIR = Path(".scrape_cache_api")
DEFAULT_OUTPUT_DIR = Path("regional_dex")
REQUEST_DELAY = 0.3
MAX_RETRIES = 3
HEADERS = {"User-Agent": "regional-dex-scraper/1.0"}


# ---------------------------------------------------------------------------
# Output → list of PokéAPI pokedex names, in the order they should be merged.
#
# Filenames follow the user-specified convention of joining all games that
# share the dex (e.g. R/B/Y and FR/LG both use the Kanto dex, so they go
# into one file).  The trailing "_regional_dex" matches the example given.
# ---------------------------------------------------------------------------
REGIONAL_DEXES: list[tuple[str, list[str]]] = [
    # Gen 1 — Kanto (R/B/Y) and FR/LG share the same 151-entry dex.
    ("red_blue_yellow_firered_leafgreen_regional_dex.js", ["kanto"]),
    # Gen 2 — original Johto (G/S/C) and updated Johto (HG/SS) are distinct.
    ("gold_silver_crystal_regional_dex.js",               ["original-johto"]),
    ("heartgold_soulsilver_regional_dex.js",              ["updated-johto"]),
    # Gen 3 — Hoenn (R/S/E) and updated Hoenn (ORAS).
    ("ruby_sapphire_emerald_regional_dex.js",             ["hoenn"]),
    ("omega_ruby_alpha_sapphire_regional_dex.js",         ["updated-hoenn"]),
    # Gen 4 — D/P (original sinnoh) and Pt (extended).  BDSP also uses the
    # original-sinnoh dex (151 entries).
    ("diamond_pearl_brilliant_diamond_shining_pearl_regional_dex.js",
                                                          ["original-sinnoh"]),
    ("platinum_regional_dex.js",                          ["extended-sinnoh"]),
    # Gen 5 — Unova.
    ("black_white_regional_dex.js",                       ["original-unova"]),
    ("black2_white2_regional_dex.js",                     ["updated-unova"]),
    # Gen 6 — Kalos is split into three sub-dexes in-game.
    ("x_y_regional_dex.js",                               ["kalos-central",
                                                           "kalos-coastal",
                                                           "kalos-mountain"]),
    # Gen 7 — Alola (S/M and US/UM each have their own merged dex on PokéAPI).
    ("sun_moon_regional_dex.js",                          ["original-alola"]),
    ("ultra_sun_ultra_moon_regional_dex.js",              ["updated-alola"]),
    # Gen 8 — Galar (+ DLC) and Hisui (PLA).
    ("sword_shield_regional_dex.js",                      ["galar",
                                                           "isle-of-armor",
                                                           "crown-tundra"]),
    ("legends_arceus_regional_dex.js",                    ["hisui"]),
    # Gen 9 — Paldea (+ DLC).  Legends Z-A intentionally omitted (PokéAPI
    # doesn't have its data yet).
    ("scarlet_violet_regional_dex.js",                    ["paldea",
                                                           "kitakami",
                                                           "blueberry"]),
]


# ---------------------------------------------------------------------------
# HTTP / caching layer  (shared cache dir with scrape_pokedex.py)
# ---------------------------------------------------------------------------
_last_request_time: float = 0.0


def _cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return CACHE_DIR / (safe[:220] + ".json")


def api_get(url: str, use_cache: bool = True) -> dict | None:
    """Fetch a PokéAPI URL, returning parsed JSON.  Cached to CACHE_DIR."""
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
# Species display-name resolution
# ---------------------------------------------------------------------------
_species_name_cache: dict[str, str] = {}


def slug_to_title(slug: str) -> str:
    return " ".join(word.capitalize() for word in slug.split("-"))


def get_species_display_name(species_slug: str, species_url: str,
                             use_cache: bool) -> str:
    """Return the English display name for a species (e.g. 'Mr. Mime')."""
    if species_slug in _species_name_cache:
        return _species_name_cache[species_slug]

    data = api_get(species_url, use_cache=use_cache)
    name = None
    if data:
        for entry in data.get("names", []):
            if entry.get("language", {}).get("name") == "en":
                name = entry["name"]
                break

    if name is None:
        name = slug_to_title(species_slug)

    _species_name_cache[species_slug] = name
    return name


# ---------------------------------------------------------------------------
# Per-dex scrape
# ---------------------------------------------------------------------------
def fetch_pokedex(pokedex_name: str, use_cache: bool
                  ) -> list[tuple[int, str, str]]:
    """
    Return entries for a single PokéAPI pokedex, sorted by entry_number.
    Each tuple is (entry_number, species_slug, species_url).
    """
    data = api_get(f"{API_BASE}/pokedex/{pokedex_name}", use_cache=use_cache)
    if not data:
        raise RuntimeError(f"Pokédex '{pokedex_name}' not found on PokéAPI")

    entries = []
    for entry in data.get("pokemon_entries", []):
        num = entry["entry_number"]
        species = entry["pokemon_species"]
        entries.append((num, species["name"], species["url"]))

    entries.sort(key=lambda t: t[0])
    return entries


def build_merged_dex(pokedex_names: list[str], use_cache: bool
                     ) -> tuple[dict[int, str], list[tuple[str, int, int]]]:
    """
    Concatenate one or more pokedexes into a single 1..N numbering.
    Returns (merged_dict, boundaries) where boundaries is a list of
    (pokedex_name, start, end) tuples describing where each sub-dex sits
    in the merged numbering.
    """
    merged: dict[int, str] = {}
    boundaries: list[tuple[str, int, int]] = []
    cursor = 0

    for pdx_name in pokedex_names:
        entries = fetch_pokedex(pdx_name, use_cache=use_cache)
        if not entries:
            continue
        start = cursor + 1
        for _orig_num, species_slug, species_url in entries:
            cursor += 1
            display = get_species_display_name(species_slug, species_url,
                                               use_cache=use_cache)
            merged[cursor] = display
        boundaries.append((pdx_name, start, cursor))

    return merged, boundaries


# ---------------------------------------------------------------------------
# JS file writer
# ---------------------------------------------------------------------------
def write_dex_file(path: Path, dex: dict[int, str],
                   boundaries: list[tuple[str, int, int]]) -> None:
    lines: list[str] = []
    if len(boundaries) > 1:
        spans = ", ".join(f"{name} ({s}-{e})" for name, s, e in boundaries)
        lines.append(f"// Merged from PokéAPI sub-dexes: {spans}")
    elif boundaries:
        lines.append(f"// Source: PokéAPI pokedex '{boundaries[0][0]}'")

    lines.append("export const regional_dex = {")
    for num in sorted(dex):
        species = dex[num].replace('"', '\\"')
        lines.append(f'    {num}: "{species}",')
    lines.append("};")
    lines.append("")

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines), encoding="utf-8")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--game", help="Output stem to build (e.g. 'black2_white2' "
                                       "or full filename). Default: all.")
    parser.add_argument("--list", action="store_true",
                        help="List all output filenames and exit.")
    parser.add_argument("--output-dir", default=str(DEFAULT_OUTPUT_DIR),
                        help=f"Output directory (default: {DEFAULT_OUTPUT_DIR})")
    parser.add_argument("--no-cache", action="store_true",
                        help="Re-fetch all API responses, ignoring cache.")
    args = parser.parse_args()

    if args.list:
        for filename, _ in REGIONAL_DEXES:
            print(filename)
        return 0

    selected = REGIONAL_DEXES
    if args.game:
        needle = args.game.lower().removesuffix(".js")
        selected = [(fn, pdx) for fn, pdx in REGIONAL_DEXES
                    if needle in fn.lower().removesuffix(".js")]
        if not selected:
            print(f"No matching output for --game '{args.game}'.", file=sys.stderr)
            print("Use --list to see available outputs.", file=sys.stderr)
            return 1

    use_cache = not args.no_cache
    output_dir = Path(args.output_dir)

    for filename, pokedex_names in selected:
        print(f"Building {filename}  (from: {', '.join(pokedex_names)})")
        try:
            dex, boundaries = build_merged_dex(pokedex_names, use_cache=use_cache)
        except RuntimeError as exc:
            print(f"  ERROR: {exc}", file=sys.stderr)
            continue
        out_path = output_dir / filename
        write_dex_file(out_path, dex, boundaries)
        print(f"  wrote {len(dex)} entries to {out_path}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
