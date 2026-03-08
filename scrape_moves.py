#!/usr/bin/env python3
"""
Scrapes move data from PokeAPI and updates moves.js with per-generation stats.

Usage:
    python scrape_moves.py [--gens 1 2 3 4 5 6 7 8 9] [--output moves.js]

Output:
    Updates the target .js file, merging scraped per-generation data into existing
    data. Manually-curated fields (effect, affected_by_kings_rock) are preserved.

Notes:
    - 'effect' field is derived from PokeAPI meta data and will need manual review/refinement.
    - 'affected_by_kings_rock' defaults to False (not available in PokeAPI) - needs manual review.
    - Per-generation stat values are computed from PokeAPI's past_values data.
    - API responses are cached in ./move_cache/ to avoid re-downloading on reruns.
"""

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

try:
    import requests
except ImportError:
    print("ERROR: 'requests' not installed. Run: pip install requests")
    sys.exit(1)


POKEAPI_BASE = "https://pokeapi.co/api/v2"
CACHE_DIR = Path("move_cache")

# Maps PokeAPI version group names to generation numbers
VERSION_GROUP_TO_GEN = {
    "red-blue": 1,
    "yellow": 1,
    "gold-silver": 2,
    "crystal": 2,
    "ruby-sapphire": 3,
    "firered-leafgreen": 3,
    "emerald": 3,
    "diamond-pearl": 4,
    "heartgold-soulsilver": 4,
    "platinum": 4,
    "black-white": 5,
    "black-2-white-2": 5,
    "x-y": 6,
    "omega-ruby-alpha-sapphire": 6,
    "sun-moon": 7,
    "ultra-sun-ultra-moon": 7,
    "lets-go-pikachu-lets-go-eevee": 7,
    "sword-shield": 8,
    "brilliant-diamond-and-shining-pearl": 8,
    "legends-arceus": 8,
    "scarlet-violet": 9,
    "the-teal-mask": 9,
    "the-indigo-disk": 9,
}

# Maps PokeAPI generation names to generation numbers
GEN_FROM_NAME = {
    "generation-i": 1,
    "generation-ii": 2,
    "generation-iii": 3,
    "generation-iv": 4,
    "generation-v": 5,
    "generation-vi": 6,
    "generation-vii": 7,
    "generation-viii": 8,
    "generation-ix": 9,
}

# Maps PokeAPI target names to moves.js target strings
TARGET_MAP = {
    "specific-move": "Target Depends",
    "selected-pokemon-me-first": "Foe Or Ally",
    "ally": "Ally",
    "users-field": "Self",
    "user-or-ally": "Self Or Ally",
    "opponents-field": "Foe Side",
    "user": "Self",
    "random-opponent": "Random",
    "all-other-pokemon": "Others",
    "selected-pokemon": "Foe Or Ally",
    "all-opponents": "All Foes",
    "entire-field": "All",
    "user-and-allies": "Self And Ally",
    "all-pokemon": "All",
    "fainting-pokemon": "Foe Or Ally",
}

# Maps PokeAPI type names to title-case type strings
TYPE_MAP = {
    "normal": "Normal",
    "fire": "Fire",
    "water": "Water",
    "electric": "Electric",
    "grass": "Grass",
    "ice": "Ice",
    "fighting": "Fighting",
    "poison": "Poison",
    "ground": "Ground",
    "flying": "Flying",
    "psychic": "Psychic",
    "bug": "Bug",
    "rock": "Rock",
    "ghost": "Ghost",
    "dragon": "Dragon",
    "dark": "Dark",
    "steel": "Steel",
    "fairy": "Fairy",
    "stellar": "Stellar",
    "shadow": "Shadow",
}


# ---------------------------------------------------------------------------
# Caching
# ---------------------------------------------------------------------------

def cached_get(url: str) -> dict:
    """GET with file-based caching. Creates CACHE_DIR if needed."""
    CACHE_DIR.mkdir(exist_ok=True)
    # Build a safe filename from the URL
    cache_key = url.replace(POKEAPI_BASE + "/", "").replace("/", "__").replace("?", "_")
    cache_file = CACHE_DIR / (cache_key + ".json")

    if cache_file.exists():
        with open(cache_file, encoding="utf-8") as f:
            return json.load(f)

    time.sleep(0.25)  # Be respectful of PokeAPI rate limits
    resp = requests.get(url, timeout=30)
    resp.raise_for_status()
    data = resp.json()

    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump(data, f)

    return data


# ---------------------------------------------------------------------------
# Per-generation value resolution
# ---------------------------------------------------------------------------

def get_scalar_for_gen(current, past_values: list, field: str, target_gen: int):
    """
    Return the value of a scalar move field (power, accuracy, pp, effect_chance)
    as it was in target_gen.

    PokeAPI past_values semantics: each entry's version_group is the version group
    WHERE THE CHANGE HAPPENED (i.e. the first version group where the new value
    applied). The stored value is what the field was BEFORE that version group.
    Example: Flamethrower's entry {version_group: x-y (gen 6), power: 95} means
    "power changed IN gen 6; before gen 6 it was 95."

      - Find past_value entries where version_group.gen > target_gen
      - Take the oldest such entry (smallest gen > target_gen)
      - Return its value (that's what existed at target_gen)
      - If no such entries, the current value applies at target_gen
    """
    relevant = [
        pv for pv in past_values
        if pv.get(field) is not None
        and VERSION_GROUP_TO_GEN.get(
            (pv.get("version_group") or {}).get("name", ""), 0
        ) > target_gen
    ]

    if not relevant:
        return current

    relevant.sort(
        key=lambda pv: VERSION_GROUP_TO_GEN.get(pv["version_group"]["name"], 0)
    )
    return relevant[0][field]


def get_type_for_gen(current_type: str, past_values: list, target_gen: int) -> str:
    """Return the move type as it was in target_gen (same semantics as get_scalar_for_gen)."""
    relevant = [
        pv for pv in past_values
        if pv.get("type") is not None
        and VERSION_GROUP_TO_GEN.get(
            (pv.get("version_group") or {}).get("name", ""), 0
        ) > target_gen
    ]

    if not relevant:
        return current_type

    relevant.sort(
        key=lambda pv: VERSION_GROUP_TO_GEN.get(pv["version_group"]["name"], 0)
    )
    raw_type = relevant[0]["type"]["name"]
    return TYPE_MAP.get(raw_type, raw_type.title())


# ---------------------------------------------------------------------------
# Effect derivation
# ---------------------------------------------------------------------------

def derive_effect(meta: dict | None, move_name: str) -> str:
    """
    Derive a snake_case effect identifier from PokeAPI move meta data.
    This is a best-effort approximation; manual review is recommended.
    """
    if meta is None:
        return "basic_hit"

    category   = (meta.get("category") or {}).get("name", "")
    ailment    = (meta.get("ailment") or {}).get("name", "none")
    min_hits   = meta.get("min_hits")
    max_hits   = meta.get("max_hits")
    drain      = meta.get("drain", 0) or 0
    crit_rate  = meta.get("crit_rate", 0) or 0
    flinch_pct = meta.get("flinch_chance", 0) or 0
    ailment_pct = meta.get("ailment_chance", 0) or 0

    # OHKO
    if category == "ohko":
        return "one_hit_ko"

    # Multi-hit
    if min_hits is not None and max_hits is not None:
        if min_hits == 2 and max_hits == 5:
            return "two_to_five_hits"
        if min_hits == 2 and max_hits == 2:
            return "two_hits"
        if min_hits == 3 and max_hits == 3:
            return "three_hits"
        return f"multi_hit_{min_hits}_to_{max_hits}"

    # Drain / recoil
    if drain > 0:
        return "drain_hp"
    if drain < 0:
        pct = abs(drain)
        if pct == 25:
            return "quarter_recoil_on_hit"
        if pct == 33:
            return "third_recoil_on_hit"
        if pct == 50:
            return "half_recoil_on_hit"
        return f"recoil_{pct}"

    # Heal self (non-damage)
    if category == "heal":
        return "heal_self"

    # Secondary ailment (damage + ailment chance)
    AILMENT_MAP = {
        "burn":          "may_burn",
        "freeze":        "may_freeze",
        "paralysis":     "may_paralyze",
        "poison":        "may_poison",
        "badly-poisoned":"may_badly_poison",
        "confusion":     "may_confuse",
        "infatuation":   "may_infatuate",
        "flinch":        "may_flinch",
    }
    if ailment != "none" and ailment_pct > 0 and category in ("damage+ailment", "damage"):
        return AILMENT_MAP.get(ailment, f"may_{ailment.replace('-', '_')}")

    # Status-only ailment moves
    STATUS_MAP = {
        "sleep":         "put_to_sleep",
        "poison":        "poison",
        "badly-poisoned":"badly_poison",
        "paralysis":     "paralyze",
        "burn":          "burn",
        "freeze":        "freeze",
        "confusion":     "confuse",
        "infatuation":   "infatuate",
    }
    if ailment != "none" and category == "ailment":
        return STATUS_MAP.get(ailment, ailment.replace("-", "_"))

    # Flinch only (no other secondary)
    if flinch_pct > 0 and ailment == "none":
        return "may_flinch"

    # High crit rate
    if crit_rate > 0:
        return "high_crit_rate"

    # Broad category fallbacks
    CATEGORY_MAP = {
        "damage":               "basic_hit",
        "net-good-stats":       "stat_change",
        "swagger":              "swagger",
        "damage+lower":         "damage_lower_stat",
        "damage+raise":         "damage_raise_stat",
        "damage+heal":          "drain_hp",
        "whole-field-effect":   "field_effect",
        "field-effect":         "field_effect",
        "force-switch":         "force_switch",
        "unique":               move_name.lower().replace(" ", "_").replace("-", "_"),
    }
    if category in CATEGORY_MAP:
        return CATEGORY_MAP[category]

    return "basic_hit"


# ---------------------------------------------------------------------------
# Flavor text
# ---------------------------------------------------------------------------

# Preferred version groups per generation (most recent first)
_GEN_PREFERRED_VGS = {
    1: ["yellow", "red-blue"],
    2: ["crystal", "gold-silver"],
    3: ["emerald", "firered-leafgreen", "ruby-sapphire"],
    4: ["heartgold-soulsilver", "platinum", "diamond-pearl"],
    5: ["black-2-white-2", "black-white"],
    6: ["omega-ruby-alpha-sapphire", "x-y"],
    7: ["ultra-sun-ultra-moon", "sun-moon"],
    8: ["sword-shield", "brilliant-diamond-and-shining-pearl"],
    9: ["the-indigo-disk", "the-teal-mask", "scarlet-violet"],
}


def get_flavor_text(move_data: dict, target_gen: int) -> str:
    """Return the best-match English flavor text for a move in the target generation."""
    en_entries = [
        e for e in move_data.get("flavor_text_entries", [])
        if (e.get("language") or {}).get("name") == "en"
    ]
    if not en_entries:
        return ""

    preferred = _GEN_PREFERRED_VGS.get(target_gen, [])
    for vg in preferred:
        for e in en_entries:
            if (e.get("version_group") or {}).get("name") == vg:
                return _clean_text(e["flavor_text"])

    # Fall back to the most recent English entry
    return _clean_text(en_entries[-1]["flavor_text"])


def _clean_text(text: str) -> str:
    return text.replace("\n", " ").replace("\f", " ").replace("\r", " ").strip()


# ---------------------------------------------------------------------------
# English name
# ---------------------------------------------------------------------------

def get_english_name(move_data: dict) -> str:
    """Return the English display name of the move."""
    for entry in move_data.get("names", []):
        if (entry.get("language") or {}).get("name") == "en":
            return entry["name"]
    # Fallback: convert API slug to title case
    return move_data["name"].replace("-", " ").title()


# ---------------------------------------------------------------------------
# Flags
# ---------------------------------------------------------------------------

def get_flags(move_data: dict) -> dict:
    """Extract boolean flag values from PokeAPI move data."""
    flag_set = {f["name"] for f in move_data.get("flags", [])}
    return {
        "makes_contact":           "contact"    in flag_set,
        "affected_by_protect":     "protect"    in flag_set,
        "affected_by_magic_coat":  "reflectable" in flag_set,
        "affected_by_snatch":      "snatch"     in flag_set,
        "affected_by_mirror_move": "mirror"     in flag_set,
        # King's Rock is not tracked in PokeAPI flags; defaults to False.
        # Review manually: generally applies to direct-damage moves with no secondary effect.
        "affected_by_kings_rock":  False,
    }


# ---------------------------------------------------------------------------
# Move entry builder
# ---------------------------------------------------------------------------

def build_move_entry(move_data: dict, target_gen: int) -> dict:
    """Build a single move entry dict in moves.js format for the given generation."""
    rom_id      = move_data["id"]
    name        = get_english_name(move_data)
    past_values = move_data.get("past_values", [])

    # Resolve per-generation scalar stats
    power        = get_scalar_for_gen(move_data.get("power"),        past_values, "power",         target_gen)
    accuracy     = get_scalar_for_gen(move_data.get("accuracy"),     past_values, "accuracy",      target_gen)
    pp           = get_scalar_for_gen(move_data.get("pp"),           past_values, "pp",            target_gen)
    effect_chance= get_scalar_for_gen(move_data.get("effect_chance"), past_values, "effect_chance", target_gen)

    # Resolve per-generation type
    current_type = TYPE_MAP.get(move_data["type"]["name"], move_data["type"]["name"].title())
    move_type    = get_type_for_gen(current_type, past_values, target_gen)

    category = move_data["damage_class"]["name"].title()
    priority = move_data.get("priority", 0)
    target   = TARGET_MAP.get(
        (move_data.get("target") or {}).get("name", "selected-pokemon"),
        "Foe Or Ally"
    )

    meta   = move_data.get("meta")
    effect = derive_effect(meta, name)
    flags  = get_flags(move_data)

    description = get_flavor_text(move_data, target_gen)

    return {
        "rom_id":       rom_id,
        "move":         name,
        "type":         move_type,
        "category":     category,
        "pp":           pp,
        "power":        power,
        "accuracy":     accuracy,
        "priority":     priority,
        "effect":       effect,
        "effect_chance": effect_chance,
        "target":       target,
        **flags,
        "description":  description,
    }


# ---------------------------------------------------------------------------
# Reading / writing moves.js
# ---------------------------------------------------------------------------

# Fields that are manually curated and should NOT be overwritten when merging
PRESERVE_FIELDS = {"effect", "affected_by_kings_rock"}

# Fields that change per-generation and should always be updated from scraped data
GEN_VARIABLE_FIELDS = {"power", "accuracy", "pp", "type", "effect_chance"}


def read_existing_moves(path: Path) -> dict:
    """Read existing moves.js and return the parsed dict, or empty dict if not found."""
    if not path.exists():
        return {}

    text = path.read_text(encoding="utf-8")

    # Strip the "export const moves = " prefix and any trailing whitespace
    json_match = re.search(r'export\s+const\s+moves\s*=\s*', text)
    if not json_match:
        print(f"WARNING: Could not parse {path}, starting fresh.")
        return {}

    json_str = text[json_match.end():]
    # Strip trailing semicolons/whitespace
    json_str = json_str.rstrip().rstrip(';')

    try:
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"WARNING: JSON parse error in {path}: {e}")
        print("Starting fresh.")
        return {}


def merge_move_entry(existing: dict, scraped: dict) -> dict:
    """
    Merge a scraped move entry into an existing one.
    - Gen-variable fields (power, accuracy, pp, type, effect_chance) always come from scraped data
    - Manually-curated fields (effect, affected_by_kings_rock) are preserved from existing
    - All other fields are updated from scraped data
    """
    merged = dict(scraped)  # Start with scraped data

    for field in PRESERVE_FIELDS:
        if field in existing:
            merged[field] = existing[field]

    return merged


def write_moves_js(path: Path, data: dict):
    """Write the moves data to a .js file in the expected format."""
    json_str = json.dumps(data, indent=4, ensure_ascii=False)
    path.write_text(f"export const moves = {json_str}\n", encoding="utf-8")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--gens", nargs="+", type=int, default=[1, 2, 3, 4, 5, 6, 7, 8, 9],
        metavar="N", help="Generations to scrape (default: 1-9)"
    )
    parser.add_argument(
        "--output", default="moves.js",
        help="Output file path (default: moves.js)"
    )
    parser.add_argument(
        "--no-merge", action="store_true",
        help="Don't merge with existing data; overwrite completely"
    )
    return parser.parse_args()


def main():
    args = parse_args()
    target_gens = sorted(args.gens)
    out_path = Path(args.output)

    # Read existing data for merging
    existing_data = {}
    if not args.no_merge:
        existing_data = read_existing_moves(out_path)
        if existing_data:
            print(f"Read existing data from {out_path}: gens {list(existing_data.keys())}")
        else:
            print(f"No existing data found in {out_path}, will create fresh.")

    print(f"Fetching move list from PokeAPI...")
    move_list = cached_get(f"{POKEAPI_BASE}/move?limit=10000")
    all_move_refs = move_list["results"]
    print(f"Found {len(all_move_refs)} moves total.\n")

    # Start from existing data (preserves gens we're not scraping)
    output = dict(existing_data)
    changes_log = {}

    for target_gen in target_gens:
        print(f"=== Processing Gen {target_gen} ===")
        gen_key = str(target_gen)
        existing_gen = existing_data.get(gen_key, {})
        gen_moves = {}
        skipped = 0
        updated = 0
        added = 0

        for i, move_ref in enumerate(all_move_refs):
            move_data = cached_get(move_ref["url"])

            # Skip moves introduced after target_gen
            move_gen = GEN_FROM_NAME.get(
                (move_data.get("generation") or {}).get("name", ""), 99
            )
            if move_gen > target_gen:
                skipped += 1
                continue

            if (i + 1) % 100 == 0:
                print(f"  [{i + 1}/{len(all_move_refs)}] {move_data['name']} ...")

            name  = get_english_name(move_data)
            scraped_entry = build_move_entry(move_data, target_gen)

            if name in existing_gen:
                # Log changes to gen-variable fields
                old = existing_gen[name]
                for field in GEN_VARIABLE_FIELDS:
                    old_val = old.get(field)
                    new_val = scraped_entry.get(field)
                    if old_val != new_val:
                        changes_log.setdefault(gen_key, []).append(
                            f"  {name}.{field}: {old_val} -> {new_val}"
                        )

                gen_moves[name] = merge_move_entry(existing_gen[name], scraped_entry)
                updated += 1
            else:
                gen_moves[name] = scraped_entry
                added += 1

        print(f"  -> {len(gen_moves)} moves total, {updated} updated, {added} new, {skipped} skipped")
        output[gen_key] = gen_moves

    # Sort output keys numerically
    output = dict(sorted(output.items(), key=lambda kv: int(kv[0])))

    # Print change summary
    if changes_log:
        print(f"\n=== Changes to gen-variable fields ===")
        for gen_key in sorted(changes_log.keys(), key=int):
            changes = changes_log[gen_key]
            print(f"Gen {gen_key}: {len(changes)} field(s) changed:")
            for change in changes:
                print(change)
    else:
        print(f"\nNo gen-variable field changes detected.")

    # Write output
    write_moves_js(out_path, output)

    print(f"\nOutput written to: {out_path}")
    print(f"Total entries: { {g: len(output[str(g)]) for g in target_gens} }")


if __name__ == "__main__":
    main()
