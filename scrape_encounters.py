#!/usr/bin/python3
"""
Wild encounter scraper using PokéAPI (https://pokeapi.co).

Fetches encounter data for all 1025 Pokémon species and produces two JS files
per game:
    encounters/<game>.js          — organized by location
    encounters/<game>_by_pokemon.js — organized by Pokémon

Usage:
    python scrape_encounters.py                         # all games
    python scrape_encounters.py --game "Red and Blue"   # one game
    python scrape_encounters.py --no-cache              # bypass cache
    python scrape_encounters.py --output-dir encounters  # set output dir

Requirements:
    pip install requests
"""

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

import requests


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

API_BASE = "https://pokeapi.co/api/v2"
CACHE_DIR = Path(".scrape_cache_api")    # shared with other scrapers
REQUEST_DELAY = 0.3    # seconds between live requests
MAX_RETRIES = 3

# Maps our canonical game names to PokéAPI version slugs and output filenames.
# "versions" lists the PokéAPI version slugs whose encounter data we merge.
GAME_CONFIG = {
    "Red and Blue": {
        "filename":  "red_blue.js",
        "versions":  ["red", "blue"],
    },
    "Yellow": {
        "filename":  "yellow.js",
        "versions":  ["yellow"],
    },
    "Gold and Silver": {
        "filename":  "gold_silver.js",
        "versions":  ["gold", "silver"],
    },
    "Crystal": {
        "filename":  "crystal.js",
        "versions":  ["crystal"],
    },
    "Ruby and Sapphire": {
        "filename":  "ruby_sapphire.js",
        "versions":  ["ruby", "sapphire"],
    },
    "Emerald": {
        "filename":  "emerald.js",
        "versions":  ["emerald"],
    },
    "FireRed and LeafGreen": {
        "filename":  "firered_leafgreen.js",
        "versions":  ["firered", "leafgreen"],
    },
    "Diamond and Pearl": {
        "filename":  "diamond_pearl.js",
        "versions":  ["diamond", "pearl"],
    },
    "Platinum": {
        "filename":  "platinum.js",
        "versions":  ["platinum"],
    },
    "HeartGold and SoulSilver": {
        "filename":  "heartgold_soulsilver.js",
        "versions":  ["heartgold", "soulsilver"],
    },
    "Black and White": {
        "filename":  "black_white.js",
        "versions":  ["black", "white"],
    },
    "Black 2 and White 2": {
        "filename":  "black2_white2.js",
        "versions":  ["black-2", "white-2"],
    },
    "X and Y": {
        "filename":  "x_y.js",
        "versions":  ["x", "y"],
    },
    "Omega Ruby and Alpha Sapphire": {
        "filename":  "omega_ruby_alpha_sapphire.js",
        "versions":  ["omega-ruby", "alpha-sapphire"],
    },
    "Sun and Moon": {
        "filename":  "sun_moon.js",
        "versions":  ["sun", "moon"],
    },
    "Ultra Sun and Ultra Moon": {
        "filename":  "ultra_sun_ultra_moon.js",
        "versions":  ["ultra-sun", "ultra-moon"],
    },
    "Sword and Shield": {
        "filename":  "sword_shield.js",
        "versions":  ["sword", "shield"],
    },
    "Scarlet and Violet": {
        "filename":  "scarlet_violet.js",
        "versions":  ["scarlet", "violet"],
    },
}

# Total species count in PokéAPI
TOTAL_SPECIES = 1025

# Encounter methods to use readable display names
METHOD_DISPLAY = {
    "walk":               "Walk",
    "old-rod":            "Old Rod",
    "good-rod":           "Good Rod",
    "super-rod":          "Super Rod",
    "surf":               "Surf",
    "rock-smash":         "Rock Smash",
    "headbutt":           "Headbutt",
    "dark-grass":         "Dark Grass",
    "grass-spots":        "Grass Spots",
    "cave-spots":         "Cave Spots",
    "bridge-spots":       "Bridge Spots",
    "super-rod-spots":    "Super Rod Spots",
    "surf-spots":         "Surf Spots",
    "yellow-flowers":     "Yellow Flowers",
    "purple-flowers":     "Purple Flowers",
    "red-flowers":        "Red Flowers",
    "rough-terrain":      "Rough Terrain",
    "gift":               "Gift",
    "gift-egg":           "Gift Egg",
    "only-one":           "Static",
    "pokeflute":          "Pokeflute",
    "headbutt-low":       "Headbutt (Low)",
    "headbutt-normal":    "Headbutt (Normal)",
    "headbutt-high":      "Headbutt (High)",
    "squirt-bottle":      "Squirt Bottle",
    "wailmer-pail":       "Wailmer Pail",
    "seaweed":            "Seaweed",
    "roaming-grass":      "Roaming (Grass)",
    "roaming-water":      "Roaming (Water)",
    "devon-scope":        "Devon Scope",
    "feebas-tile-fishing": "Feebas Tile Fishing",
    "island-scan":        "Island Scan",
    "sos-encounter":      "SOS Encounter",
    "bubbling-spots":     "Bubbling Spots",
    "berry-piles":        "Berry Piles",
    "npc-trade":          "NPC Trade",
    "sos-from-bubbling-spot": "SOS (Bubbling Spot)",
    "horde":              "Horde",
    "overworld":          "Overworld",
    "overworld-water":    "Overworld (Water)",
    "overworld-flying":   "Overworld (Flying)",
    "overworld-special":  "Overworld (Special)",
    "overworld-flying-special": "Overworld (Flying Special)",
    "overworld-water-special":  "Overworld (Water Special)",
}


# ---------------------------------------------------------------------------
# HTTP / caching (same pattern as scrape_pokedex.py)
# ---------------------------------------------------------------------------

HEADERS = {"User-Agent": "pokedex-scraper/2.0"}
_last_request_time: float = 0.0


def _cache_path(url: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", url)
    return CACHE_DIR / (safe[:220] + ".json")


def api_get(url: str, use_cache: bool = True) -> dict | list | None:
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
# Name helpers
# ---------------------------------------------------------------------------

def pokemon_display_name(slug: str) -> str:
    """Convert PokéAPI slug to display name: 'mr-mime' → 'Mr. Mime'."""
    special = {
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
    if slug in special:
        return special[slug]
    return " ".join(w.capitalize() for w in slug.split("-"))


_location_name_cache: dict[str, str] = {}


def location_area_display_name(area_slug: str, area_url: str,
                                use_cache: bool) -> str:
    """Get an English display name for a location area."""
    if area_slug in _location_name_cache:
        return _location_name_cache[area_slug]

    data = api_get(area_url, use_cache=use_cache)
    if data:
        # Try English name from the location-area itself
        for n in data.get("names", []):
            if n["language"]["name"] == "en":
                name = n["name"]
                _location_name_cache[area_slug] = name
                return name

        # Fall back to the parent location's English name
        loc_url = data.get("location", {}).get("url")
        if loc_url:
            loc_data = api_get(loc_url, use_cache=use_cache)
            if loc_data:
                for n in loc_data.get("names", []):
                    if n["language"]["name"] == "en":
                        # Append area suffix if the area slug differs from location
                        loc_slug = loc_data["name"]
                        suffix = area_slug.removeprefix(loc_slug).strip("-")
                        name = n["name"]
                        if suffix and suffix != "area":
                            suffix_display = " ".join(
                                w.capitalize() for w in suffix.split("-")
                            )
                            name = f"{name} — {suffix_display}"
                        _location_name_cache[area_slug] = name
                        return name

    # Last resort: humanize the slug
    name = " ".join(w.capitalize() for w in area_slug.split("-"))
    _location_name_cache[area_slug] = name
    return name


def method_display_name(method_slug: str) -> str:
    """Get display name for an encounter method."""
    return METHOD_DISPLAY.get(method_slug, method_slug.replace("-", " ").title())


# ---------------------------------------------------------------------------
# Fetch all encounter data
# ---------------------------------------------------------------------------

def fetch_all_encounters(use_cache: bool) -> list[dict]:
    """
    Fetch encounter data for all Pokémon.
    Returns a list of (pokemon_slug, encounters_list) tuples.
    """
    all_data = []
    for pokemon_id in range(1, TOTAL_SPECIES + 1):
        url = f"{API_BASE}/pokemon/{pokemon_id}/encounters"
        if pokemon_id % 50 == 0 or pokemon_id == 1:
            print(f"  Fetching encounters: {pokemon_id}/{TOTAL_SPECIES}...")

        # We also need the pokemon name slug
        poke_url = f"{API_BASE}/pokemon/{pokemon_id}"
        poke_data = api_get(poke_url, use_cache=use_cache)
        if not poke_data:
            continue
        slug = poke_data["name"]

        enc_data = api_get(url, use_cache=use_cache)
        if enc_data is None:
            enc_data = []

        all_data.append((slug, enc_data))

    return all_data


# ---------------------------------------------------------------------------
# Build encounter tables for one game
# ---------------------------------------------------------------------------

def build_encounters_for_game(
    all_encounters: list[tuple[str, list]],
    versions: list[str],
    use_cache: bool,
) -> dict[str, dict[str, list]]:
    """
    Build a location-based encounter dict for a set of game versions.

    Returns:
        {location_display_name: {method_display: [{pokemon, min_level, max_level, chance}, ...]}}
    """
    by_location: dict[str, dict[str, list]] = {}

    for pokemon_slug, encounters in all_encounters:
        pokemon_name = pokemon_display_name(pokemon_slug)

        for loc_entry in encounters:
            area_slug = loc_entry["location_area"]["name"]
            area_url = loc_entry["location_area"]["url"]

            for version_detail in loc_entry["version_details"]:
                if version_detail["version"]["name"] not in versions:
                    continue

                for enc_detail in version_detail["encounter_details"]:
                    method_slug = enc_detail["method"]["name"]
                    method = method_display_name(method_slug)
                    min_lvl = enc_detail["min_level"]
                    max_lvl = enc_detail["max_level"]
                    chance = enc_detail["chance"]

                    loc_name = location_area_display_name(
                        area_slug, area_url, use_cache
                    )

                    if loc_name not in by_location:
                        by_location[loc_name] = {}
                    if method not in by_location[loc_name]:
                        by_location[loc_name][method] = []

                    entry = {
                        "pokemon": pokemon_name,
                        "min_level": min_lvl,
                        "max_level": max_lvl,
                        "chance": chance,
                    }

                    # Avoid duplicates (can happen when merging two versions)
                    if entry not in by_location[loc_name][method]:
                        by_location[loc_name][method].append(entry)

    # Sort encounters within each method by chance (descending), then name
    for loc in by_location.values():
        for method in loc:
            loc[method].sort(key=lambda e: (-e["chance"], e["pokemon"]))

    return by_location


def build_by_pokemon(
    by_location: dict[str, dict[str, list]],
) -> dict[str, list]:
    """
    Invert the by-location table into a by-Pokémon table.

    Returns:
        {pokemon_name: [{location, method, min_level, max_level, chance}, ...]}
    """
    by_pokemon: dict[str, list] = {}

    for loc_name, methods in by_location.items():
        for method, entries in methods.items():
            for entry in entries:
                pokemon = entry["pokemon"]
                if pokemon not in by_pokemon:
                    by_pokemon[pokemon] = []

                rec = {
                    "location": loc_name,
                    "method": method,
                    "min_level": entry["min_level"],
                    "max_level": entry["max_level"],
                    "chance": entry["chance"],
                }
                if rec not in by_pokemon[pokemon]:
                    by_pokemon[pokemon].append(rec)

    # Sort by location name, then method
    for pokemon in by_pokemon:
        by_pokemon[pokemon].sort(key=lambda e: (e["location"], e["method"]))

    # Sort Pokémon alphabetically
    return dict(sorted(by_pokemon.items()))


# ---------------------------------------------------------------------------
# JS output
# ---------------------------------------------------------------------------

def _js_string(s: str) -> str:
    """Quote a string for JS output, escaping as needed."""
    escaped = s.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def write_by_location_js(
    by_location: dict[str, dict[str, list]],
    filepath: str,
) -> None:
    """Write the by-location encounter file."""
    lines = ["export const encounters = {"]

    sorted_locations = sorted(by_location.keys())
    for i, loc_name in enumerate(sorted_locations):
        methods = by_location[loc_name]
        lines.append(f"    {_js_string(loc_name)}: {{")

        sorted_methods = sorted(methods.keys())
        for j, method in enumerate(sorted_methods):
            entries = methods[method]
            lines.append(f"        {_js_string(method)}: [")

            for entry in entries:
                pokemon = _js_string(entry["pokemon"])
                min_lvl = entry["min_level"]
                max_lvl = entry["max_level"]
                chance = entry["chance"]
                lines.append(
                    f"            {{pokemon: {pokemon}, "
                    f"min_level: {min_lvl}, max_level: {max_lvl}, "
                    f"chance: {chance}}},"
                )

            comma = "," if j < len(sorted_methods) - 1 else ""
            lines.append(f"        ]{comma}")

        comma = "," if i < len(sorted_locations) - 1 else ""
        lines.append(f"    }}{comma}")

    lines.append("};")
    lines.append("")

    os.makedirs(os.path.dirname(filepath) or ".", exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"  Wrote {filepath} ({len(sorted_locations)} locations)")


def write_by_pokemon_js(
    by_pokemon: dict[str, list],
    filepath: str,
) -> None:
    """Write the by-Pokémon encounter file."""
    lines = ["export const encounters_by_pokemon = {"]

    pokemon_names = list(by_pokemon.keys())
    for i, pokemon in enumerate(pokemon_names):
        entries = by_pokemon[pokemon]
        lines.append(f"    {_js_string(pokemon)}: [")

        for entry in entries:
            loc = _js_string(entry["location"])
            method = _js_string(entry["method"])
            min_lvl = entry["min_level"]
            max_lvl = entry["max_level"]
            chance = entry["chance"]
            lines.append(
                f"        {{location: {loc}, method: {method}, "
                f"min_level: {min_lvl}, max_level: {max_lvl}, "
                f"chance: {chance}}},"
            )

        comma = "," if i < len(pokemon_names) - 1 else ""
        lines.append(f"    ]{comma}")

    lines.append("};")
    lines.append("")

    os.makedirs(os.path.dirname(filepath) or ".", exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"  Wrote {filepath} ({len(pokemon_names)} Pokémon)")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Scrape wild encounter data from PokéAPI."
    )
    parser.add_argument(
        "--game",
        type=str,
        default=None,
        help="Scrape only this game (e.g. \"Red and Blue\"). Default: all.",
    )
    parser.add_argument(
        "--output-dir",
        type=str,
        default="encounters",
        help="Directory for output files (default: encounters)",
    )
    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Bypass the API response cache.",
    )
    args = parser.parse_args()

    use_cache = not args.no_cache

    # Determine which games to process
    if args.game:
        if args.game not in GAME_CONFIG:
            print(f"Unknown game: {args.game!r}")
            print(f"Valid games: {', '.join(GAME_CONFIG.keys())}")
            sys.exit(1)
        games = {args.game: GAME_CONFIG[args.game]}
    else:
        games = GAME_CONFIG

    # Fetch all encounter data once (shared across all games)
    print("Fetching encounter data for all Pokémon...")
    all_encounters = fetch_all_encounters(use_cache)
    print(f"  Fetched data for {len(all_encounters)} Pokémon.\n")

    # Process each game
    for game_name, config in games.items():
        print(f"Processing: {game_name}")
        versions = config["versions"]
        filename = config["filename"]

        by_location = build_encounters_for_game(
            all_encounters, versions, use_cache
        )

        if not by_location:
            print(f"  No encounter data found — skipping.\n")
            continue

        by_pokemon = build_by_pokemon(by_location)

        # Write by-location file
        loc_path = os.path.join(args.output_dir, filename)
        write_by_location_js(by_location, loc_path)

        # Write by-pokemon file
        base, ext = os.path.splitext(filename)
        poke_path = os.path.join(args.output_dir, f"{base}_by_pokemon{ext}")
        write_by_pokemon_js(by_pokemon, poke_path)

        print()

    print("Done!")


if __name__ == "__main__":
    main()
