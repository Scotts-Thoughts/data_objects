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
from urllib.parse import quote as _url_quote

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

# Version groups with non-standard stats that shouldn't represent their generation.
# LGPE had boosted/different move stats (e.g. Solar Beam 200 power) that were reverted
# in Sword/Shield. Without this filter, the Sword/Shield past_values entry reflects the
# LGPE value, contaminating the gen 7 resolution.
VARIANT_VERSION_GROUPS = {
    "lets-go-pikachu-lets-go-eevee",
    "legends-arceus",
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
# Bulbapedia cross-reference
# ---------------------------------------------------------------------------

BULBA_CACHE_DIR = Path("bulba_cache")
BULBA_API = "https://bulbapedia.bulbagarden.net/w/api.php"

_ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5,
           "VI": 6, "VII": 7, "VIII": 8, "IX": 9}

# In-memory cache of parsed Bulbapedia per-gen stats (move_name -> result)
_bulba_parse_cache: dict[str, dict | None] = {}


def _bulba_cache_path(english_name: str) -> Path:
    safe = re.sub(r'[<>:"/\\|?*]', '_', english_name)
    return BULBA_CACHE_DIR / (safe + ".json")


def _fetch_bulba_wikitext(english_name: str) -> str | None:
    """Fetch raw wikitext for a Bulbapedia move page via the MediaWiki API."""
    BULBA_CACHE_DIR.mkdir(exist_ok=True)
    cache_file = _bulba_cache_path(english_name)

    if cache_file.exists():
        with open(cache_file, encoding="utf-8") as f:
            data = json.load(f)
        return data.get("wikitext")  # None if cached miss

    slug = english_name.replace(" ", "_")
    url = (f"{BULBA_API}?action=parse"
           f"&page={_url_quote(slug, safe='_()-')}_(move)"
           f"&prop=wikitext&format=json")

    time.sleep(0.5)  # Bulbapedia rate limits
    try:
        resp = requests.get(url, timeout=30,
                            headers={"User-Agent": "PokemonDataScraper/1.0"})
        resp.raise_for_status()
        result = resp.json()
    except requests.RequestException as e:
        print(f"    WARNING: Bulbapedia fetch failed for '{english_name}': {e}")
        return None

    if "error" in result:
        # Page doesn't exist — cache the miss
        with open(cache_file, "w", encoding="utf-8") as f:
            json.dump({"wikitext": None}, f)
        return None

    wikitext = result.get("parse", {}).get("wikitext", {}).get("*", "")
    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump({"wikitext": wikitext}, f)
    return wikitext


def _parse_roman_gen(s: str) -> int:
    """Convert a roman numeral generation string to int. Returns 0 on failure."""
    return _ROMAN.get(s.strip(), 0)


def _parse_bulba_infobox(wikitext: str) -> dict:
    """
    Extract current power, accuracy, PP from the MoveInfobox template.
    Handles both plain values and {{tt|displayed|tooltip}} templates.
    Returns {"power": int|None, "accuracy": int|None, "pp": int|None}.
    """
    stats = {}

    # Find the MoveInfobox block
    m = re.search(r'\{\{MoveInfobox\b(.*?)\n\}\}', wikitext, re.DOTALL)
    if not m:
        return stats

    # Limit to first ~50 lines (header portion) to avoid matching fields
    # from nested Moveentry/Conquest templates deeper in the infobox body.
    infobox_lines = m.group(1).split('\n')
    infobox = '\n'.join(infobox_lines[:50])

    # Map of infobox field names to our field names
    field_map = {"power": "power", "accuracy": "accuracy", "basepp": "pp"}

    for wiki_field, our_field in field_map.items():
        # Bulbapedia infoboxes use two formats:
        #   "field=value |"  (pipe at end of line — field at start of line)
        #   "|field=value"   (pipe at start — field after pipe)
        # Try start-of-line first, then pipe-prefixed as fallback.
        fm = re.search(rf'^{wiki_field}\s*=\s*(.*)', infobox, re.MULTILINE)
        if not fm:
            fm = re.search(rf'\|{wiki_field}\s*=\s*(.*)', infobox)
        if not fm:
            continue
        raw = fm.group(1).strip().rstrip(' |')

        # Handle {{tt|displayed_value|tooltip}}
        tt = re.match(r'\{\{tt\|([^|]+)\|', raw)
        if tt:
            raw = tt.group(1).strip()

        # Parse the numeric value (— means None)
        if raw in ("—", "???", ""):
            stats[our_field] = None
        else:
            num = re.match(r'(\d+)', raw)
            if num:
                stats[our_field] = int(num.group(1))

    return stats


def _parse_bulba_tt_history(wikitext: str) -> list:
    """
    Parse {{tt|current|tooltip}} templates in the MoveInfobox for historical
    per-generation stat values.

    Tooltip text formats:
      "95 in Generations I-V"
      "20 in Generations I-III; 10 in Generations IV-VIII"
      "70 prior to Generation IX"

    Returns [(field, gen_start, gen_end, value), ...].
    """
    m = re.search(r'\{\{MoveInfobox\b(.*?)\n\}\}', wikitext, re.DOTALL)
    if not m:
        return []

    # Limit to header portion to avoid nested template matches
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
        raw = fm.group(1).strip().rstrip(' |')

        # Extract the tooltip text from {{tt|displayed|tooltip_text}}
        tt = re.match(r'\{\{tt\|[^|]+\|([^}]+)\}\}', raw)
        if not tt:
            continue
        tooltip = tt.group(1)

        # Split by semicolons for multiple ranges
        for segment in tooltip.split(";"):
            segment = segment.strip()

            # Pattern: "VALUE in Generation(s) X(-Y)"
            rm = re.search(
                r'(\d+)\s+in\s+Generations?\s+([IVX]+)\s*[-–to ]*\s*([IVX]*)',
                segment
            )
            if rm:
                val = int(rm.group(1))
                start = _parse_roman_gen(rm.group(2))
                end_str = rm.group(3).strip()
                end = _parse_roman_gen(end_str) if end_str else start
                if start:
                    results.append((our_field, start, end or start, val))
                continue

            # Pattern: "VALUE prior to Generation X"
            rm = re.search(r'(\d+)\s+prior\s+to\s+Generation\s+([IVX]+)', segment)
            if rm:
                val = int(rm.group(1))
                before_gen = _parse_roman_gen(rm.group(2))
                if before_gen:
                    results.append((our_field, 1, before_gen - 1, val))

    return results


def _parse_bulba_effect_changes(wikitext: str) -> list:
    """
    Parse stat change descriptions from the Effect section wikitext.
    Returns [(gen, field, new_val, old_val_or_None), ...].
    """
    # Extract the Effect section
    effect_m = re.search(
        r'==\s*Effect\s*==\s*\n(.*?)(?=\n==\s*[^=]|\Z)', wikitext, re.DOTALL
    )
    if not effect_m:
        return []

    text = effect_m.group(1)
    changes = []
    seen = set()

    patterns = [
        # "power/PP/accuracy was reduced/increased from A to B"
        (r'Generation\s+([IVX]+)[^.]{0,150}?'
         r'((?:base\s+)?power)\s+(?:was|has\s+been)\s+'
         r'(?:increased|decreased|reduced|changed)\s+from\s+(\d+)\s+to\s+(\d+)',
         "power", lambda m: (int(m.group(3)), int(m.group(4)))),

        (r'Generation\s+([IVX]+)[^.]{0,150}?'
         r'(PP)\s+(?:was|has\s+been)\s+'
         r'(?:increased|decreased|reduced|changed)\s+from\s+(\d+)\s+to\s+(\d+)',
         "pp", lambda m: (int(m.group(3)), int(m.group(4)))),

        (r'Generation\s+([IVX]+)[^.]{0,150}?'
         r'(accuracy)\s+(?:was|has\s+been)\s+'
         r'(?:increased|decreased|reduced|changed)\s+from\s+(\d+)%?\s+to\s+(\d+)',
         "accuracy", lambda m: (int(m.group(3)), int(m.group(4)))),

        # "power/PP/accuracy was reduced/increased to B" (no "from")
        (r'Generation\s+([IVX]+)[^.]{0,150}?'
         r'((?:base\s+)?power)\s+(?:was|has\s+been)\s+'
         r'(?:increased|decreased|reduced|changed)\s+to\s+(\d+)',
         "power", lambda m: (None, int(m.group(3)))),

        (r'Generation\s+([IVX]+)[^.]{0,150}?'
         r'(PP)\s+(?:was|has\s+been)\s+'
         r'(?:increased|decreased|reduced|changed)\s+to\s+(\d+)',
         "pp", lambda m: (None, int(m.group(3)))),

        (r'Generation\s+([IVX]+)[^.]{0,150}?'
         r'(accuracy)\s+(?:was|has\s+been)\s+'
         r'(?:increased|decreased|reduced|changed)\s+to\s+(\d+)',
         "accuracy", lambda m: (None, int(m.group(3)))),
    ]

    # Game names that indicate variant-specific changes (not main series)
    variant_indicators = re.compile(
        r"Let.s\s+Go|Legends:\s*Arceus|Legends:\s*Z-A", re.IGNORECASE
    )

    for pat, field, extractor in patterns:
        for m in re.finditer(pat, text, re.IGNORECASE):
            gen = _parse_roman_gen(m.group(1))
            if gen == 0:
                continue
            key = (gen, field)
            if key in seen:
                continue
            # Skip changes that only apply to variant games (e.g. LGPE)
            matched_text = m.group(0)
            if variant_indicators.search(matched_text):
                continue
            seen.add(key)
            old_val, new_val = extractor(m)
            changes.append((gen, field, new_val, old_val))

    return changes


def _build_bulba_gen_values(current_val, tt_ranges: list, effect_changes: list,
                            intro_gen: int) -> dict:
    """
    Build {gen: value} from Bulbapedia infobox tooltip ranges + effect changes.
    tt_ranges: [(gen_start, gen_end, value), ...]
    effect_changes: [(gen, new_val, old_val_or_None), ...]
    """
    if current_val is None:
        return {}

    result = {}

    # Phase 1: Apply tooltip ranges (most reliable)
    for start, end, val in tt_ranges:
        for g in range(max(start, intro_gen), min(end, 9) + 1):
            result[g] = val

    # Fill remaining gens with current value (tooltip ranges cover the old values,
    # so gens not covered by a tooltip range use the current value)
    for g in range(intro_gen, 10):
        if g not in result:
            result[g] = current_val

    # Phase 2: Apply effect changes as a secondary source (fills gaps)
    if effect_changes and not tt_ranges:
        # No tooltip data — build from changes only
        changes = sorted(effect_changes, key=lambda c: c[0])

        # Before first change
        first_gen, first_new, first_old = changes[0]
        if first_old is not None:
            for g in range(intro_gen, first_gen):
                result[g] = first_old

        # At and between changes
        for i, (gen, new_val, _) in enumerate(changes):
            next_gen = changes[i + 1][0] if i + 1 < len(changes) else 10
            for g in range(gen, next_gen):
                result[g] = new_val

    # Phase 3: Validate against current infobox value.
    # Effect changes can be incomplete when two changes happen in the same
    # generation (e.g. Diamond/Pearl buffed Hypnosis accuracy to 70, then
    # Platinum reverted it to 60 — both Gen IV — but only the first change
    # is captured). The current infobox value always applies to gen 9.
    # If the computed gen 9 value doesn't match, the chain is incomplete;
    # correct from the last change gen onwards.
    if result.get(9) != current_val:
        last_change_gen = max((g for g, _, _ in effect_changes), default=intro_gen) if effect_changes else intro_gen
        for g in range(last_change_gen, 10):
            result[g] = current_val

    return result


def _parse_bulba_flags(wikitext: str) -> dict:
    """
    Extract move flags from the Bulbapedia MoveInfobox wikitext.
    Returns a dict of flag_name -> bool.
    """
    m = re.search(r'\{\{MoveInfobox\b(.*?)\n\}\}', wikitext, re.DOTALL)
    if not m:
        return {}

    # Limit to header portion (flags are in the first ~50 lines)
    infobox_lines = m.group(1).split('\n')
    infobox = '\n'.join(infobox_lines[:50])

    # Map Bulbapedia infobox param names to our flag names
    flag_map = {
        "touches":    "makes_contact",
        "protect":    "affected_by_protect",
        "magiccoat":  "affected_by_magic_coat",
        "snatch":     "affected_by_snatch",
        "mirrormove": "affected_by_mirror_move",
        "kingsrock":  "affected_by_kings_rock",
    }

    flags = {}
    for wiki_param, our_name in flag_map.items():
        fm = re.search(rf'^{wiki_param}\s*=\s*(\w+)', infobox, re.MULTILINE)
        if not fm:
            fm = re.search(rf'\|{wiki_param}\s*=\s*(\w+)', infobox)
        if fm:
            flags[our_name] = fm.group(1).lower() == "yes"

    return flags


# In-memory cache for Bulbapedia flags (move_name -> dict)
_bulba_flags_cache: dict[str, dict] = {}


def get_bulba_flags(english_name: str) -> dict:
    """
    Get move flags from Bulbapedia. Returns dict of flag_name -> bool.
    Cached in memory after first parse.
    """
    if english_name in _bulba_flags_cache:
        return _bulba_flags_cache[english_name]

    wikitext = _fetch_bulba_wikitext(english_name)
    if not wikitext:
        _bulba_flags_cache[english_name] = {}
        return {}

    flags = _parse_bulba_flags(wikitext)
    _bulba_flags_cache[english_name] = flags
    return flags


def get_bulba_gen_stats(english_name: str, intro_gen: int) -> dict | None:
    """
    Get Bulbapedia-validated per-generation stats for a move.
    Returns {gen: {"power": X, "accuracy": Y, "pp": Z}} or None.
    Only includes fields/gens where Bulbapedia data is available.
    Results are cached in memory after first parse.
    """
    if english_name in _bulba_parse_cache:
        return _bulba_parse_cache[english_name]

    wikitext = _fetch_bulba_wikitext(english_name)
    if not wikitext:
        _bulba_parse_cache[english_name] = None
        return None

    current = _parse_bulba_infobox(wikitext)
    if not current:
        _bulba_parse_cache[english_name] = None
        return None

    tt_history = _parse_bulba_tt_history(wikitext)
    effect_changes = _parse_bulba_effect_changes(wikitext)

    result = {}
    for field in ("power", "accuracy", "pp"):
        cur_val = current.get(field)
        if cur_val is None:
            continue

        field_tt = [(s, e, v) for f, s, e, v in tt_history if f == field]
        field_changes = [(g, n, o) for g, f, n, o in effect_changes if f == field]

        gen_vals = _build_bulba_gen_values(cur_val, field_tt, field_changes, intro_gen)
        for g, v in gen_vals.items():
            result.setdefault(g, {})[field] = v

    result = result if result else None
    _bulba_parse_cache[english_name] = result
    return result


# ---------------------------------------------------------------------------
# Per-generation value resolution
# ---------------------------------------------------------------------------

def _vg_name(pv: dict) -> str:
    return (pv.get("version_group") or {}).get("name", "")


def _vg_gen(pv: dict) -> int:
    return VERSION_GROUP_TO_GEN.get(_vg_name(pv), 0)


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

    Variant version groups (e.g. LGPE) can contaminate this chain. If a variant
    in the same gen as target_gen changed a value, the next gen's past_value
    reflects the variant's value, not the main series value. In that case, the
    variant's own past_value entry stores the correct pre-variant (main series)
    value, so we use that instead.
    """
    entries = [pv for pv in past_values if pv.get(field) is not None]

    # Check for a variant VG in the same gen that changed this field.
    # Its stored value = what the main series had before the variant changed it.
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


def get_type_for_gen(current_type: str, past_values: list, target_gen: int) -> str:
    """Return the move type as it was in target_gen (same semantics as get_scalar_for_gen)."""
    entries = [pv for pv in past_values if pv.get("type") is not None]

    # Same variant handling as get_scalar_for_gen
    same_gen_variants = [
        pv for pv in entries
        if _vg_name(pv) in VARIANT_VERSION_GROUPS and _vg_gen(pv) == target_gen
    ]
    if same_gen_variants:
        raw_type = same_gen_variants[0]["type"]["name"]
        return TYPE_MAP.get(raw_type, raw_type.title())

    relevant = [pv for pv in entries if _vg_gen(pv) > target_gen]

    if not relevant:
        return current_type

    relevant.sort(key=_vg_gen)
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

def get_flags(move_data: dict, bulba_flags: dict | None = None) -> dict:
    """
    Extract boolean flag values for a move.
    PokeAPI does NOT provide move flags, so we source them from Bulbapedia.
    Falls back to all-False if Bulbapedia data is unavailable.
    """
    defaults = {
        "makes_contact":           False,
        "affected_by_protect":     False,
        "affected_by_magic_coat":  False,
        "affected_by_snatch":      False,
        "affected_by_mirror_move": False,
        "affected_by_kings_rock":  False,
    }
    if bulba_flags:
        defaults.update(bulba_flags)
    return defaults


# ---------------------------------------------------------------------------
# Per-generation field overrides (not tracked by PokeAPI past_values)
# ---------------------------------------------------------------------------

# Priority values that changed across gens. PokeAPI only stores current (Gen 9).
# Format: {move_name: [(from_gen, priority), ...]} — value applies from from_gen
# until the next entry. Source: Bulbapedia priority brackets by generation.
_PRIORITY_OVERRIDES = {
    # Protect/Detect/Endure: +2 (Gen II) -> +3 (Gen III) -> +4 (Gen V+)
    "Protect":       [(2, 2), (3, 3), (5, 4)],
    "Detect":        [(2, 2), (3, 3), (5, 4)],
    "Endure":        [(2, 2), (3, 3), (5, 4)],
    # Roar/Whirlwind: 0 (Gen I) -> -1 (Gen II) -> -6 (Gen III+)
    "Roar":          [(1, 0), (2, -1), (3, -6)],
    "Whirlwind":     [(1, 0), (2, -1), (3, -6)],
    # Counter: -1 (Gen I-II) -> -5 (Gen III+)
    "Counter":       [(1, -1), (3, -5)],
    # Mirror Coat: -1 (Gen II) -> -5 (Gen III+)
    "Mirror Coat":   [(2, -1), (3, -5)],
    # ExtremeSpeed: +1 (Gen II-IV) -> +2 (Gen V+)
    "Extreme Speed": [(2, 1), (5, 2)],
    "ExtremeSpeed":  [(2, 1), (5, 2)],  # alternate spelling
    # Fake Out: +1 (Gen III-IV) -> +3 (Gen V+)
    "Fake Out":      [(3, 1), (5, 3)],
    # Follow Me: +3 (Gen III-V) -> +2 (Gen VI+)
    "Follow Me":     [(3, 3), (6, 2)],
    # Ally Switch: +1 (Gen V-VI) -> +2 (Gen VII+)
    "Ally Switch":   [(5, 1), (7, 2)],
    # Rage Powder: +3 (Gen V) -> +2 (Gen VI+)
    "Rage Powder":   [(5, 3), (6, 2)],
    # Bide: 0 (Gen I-III) -> +1 (Gen IV+)
    "Bide":          [(1, 0), (4, 1)],
    # Teleport: 0 (Gen I-VII) -> -6 (Gen VIII+, via LGPE)
    "Teleport":      [(1, 0), (8, -6)],
    # Magic Room: -7 (Gen V) -> 0 (Gen VI+)
    "Magic Room":    [(5, -7), (6, 0)],
    # Wonder Room: -7 (Gen V) -> 0 (Gen VI+)
    "Wonder Room":   [(5, -7), (6, 0)],
}


def _get_priority_for_gen(move_name: str, pokeapi_priority: int,
                          target_gen: int) -> int:
    """Return the correct priority for a move in the given generation."""
    overrides = _PRIORITY_OVERRIDES.get(move_name)
    if not overrides:
        return pokeapi_priority

    # Find the applicable entry (latest from_gen <= target_gen)
    result = pokeapi_priority
    for from_gen, prio in overrides:
        if from_gen <= target_gen:
            result = prio
    return result


# Per-generation flag overrides. Bulbapedia infobox gives current (Gen 9) flags;
# these overrides correct earlier gens where flags differed.
# Format: {move_name: {flag_field: [(from_gen, value), ...]}}
# Source: Bulbapedia "List of modified moves"
_FLAG_OVERRIDES = {
    # --- Contact changes (Gen III -> IV) ---
    "AncientPower":  {"makes_contact": [(3, True),  (4, False)]},
    "Ancient Power": {"makes_contact": [(3, True),  (4, False)]},
    "Covet":         {"makes_contact": [(3, False), (4, True)]},
    "Faint Attack":  {"makes_contact": [(2, False), (4, True)]},
    "Feint Attack":  {"makes_contact": [(2, False), (4, True)]},
    "Fake Out":      {"makes_contact": [(3, False), (4, True)]},
    "Overheat":      {"makes_contact": [(3, True),  (4, False)]},

    # --- Protect changes ---
    # Gen II -> III
    "Conversion 2":  {"affected_by_protect": [(2, True),  (3, False)]},
    "Mean Look":     {"affected_by_protect": [(2, False), (3, True), (6, False)]},
    "Nightmare":     {"affected_by_protect": [(2, False), (3, True)]},
    "Spider Web":    {"affected_by_protect": [(2, False), (3, True), (6, False)]},
    # Gen IV -> V
    "Counter":       {"affected_by_protect": [(1, False), (5, True)]},
    "Metal Burst":   {"affected_by_protect": [(4, False), (5, True)]},
    "Mirror Coat":   {"affected_by_protect": [(2, False), (5, True)]},
    # Gen V -> VI
    "Bestow":        {"affected_by_protect": [(5, True),  (6, False)]},
    "Block":         {"affected_by_protect": [(3, True),  (6, False)]},

    # --- Magic Coat / Magic Bounce changes ---
    # Gen III -> IV
    "Kinesis":       {"affected_by_magic_coat": [(1, False), (4, True)]},
    # Gen IV -> V (many moves became reflectable)
    "Defog":         {"affected_by_magic_coat": [(4, False), (5, True)]},
    "Disable":       {"affected_by_magic_coat": [(1, False), (5, True)]},
    "Embargo":       {"affected_by_magic_coat": [(4, False), (5, True)]},
    "Encore":        {"affected_by_magic_coat": [(2, False), (5, True)]},
    "Foresight":     {"affected_by_magic_coat": [(2, False), (5, True)]},
    "Heal Block":    {"affected_by_magic_coat": [(4, False), (5, True)]},
    "Miracle Eye":   {"affected_by_magic_coat": [(4, False), (5, True)]},
    "Odor Sleuth":   {"affected_by_magic_coat": [(3, False), (5, True)]},
    "Roar":          {"affected_by_magic_coat": [(1, False), (5, True)]},
    "Spikes":        {"affected_by_magic_coat": [(2, False), (5, True)]},
    "Spite":         {"affected_by_magic_coat": [(2, False), (5, True)]},
    "Stealth Rock":  {"affected_by_magic_coat": [(4, False), (5, True)]},
    "Taunt":         {"affected_by_magic_coat": [(3, False), (5, True)]},
    "Torment":       {"affected_by_magic_coat": [(3, False), (5, True)]},
    "Toxic Spikes":  {"affected_by_magic_coat": [(4, False), (5, True)]},
    "Whirlwind":     {"affected_by_magic_coat": [(1, False), (5, True)]},

    # --- Snatch changes (Gen IV -> V) ---
    "Acupressure":   {"affected_by_snatch": [(4, True),  (5, False)]},
    "Aqua Ring":     {"affected_by_snatch": [(4, False), (5, True)]},
    "Conversion":    {"affected_by_snatch": [(1, False), (5, True)]},
    "Healing Wish":  {"affected_by_snatch": [(4, False), (5, True)]},
    "Imprison":      {"affected_by_snatch": [(3, False), (5, True)]},
    "Lucky Chant":   {"affected_by_snatch": [(4, False), (5, True)]},
    "Lunar Dance":   {"affected_by_snatch": [(4, False), (5, True)]},
    "Magnet Rise":   {"affected_by_snatch": [(4, False), (5, True)]},
    "Power Trick":   {"affected_by_snatch": [(4, False), (5, True)]},
    "Psych Up":      {"affected_by_snatch": [(2, True),  (5, False)]},
    "Recycle":       {"affected_by_snatch": [(3, False), (5, True)]},
    "Wish":          {"affected_by_snatch": [(3, False), (5, True)]},

    # --- Mirror Move changes ---
    # Gen III -> IV
    "Struggle":      {"affected_by_mirror_move": [(1, True),  (4, False)]},
    "Taunt":         {"affected_by_mirror_move": [(3, False), (4, True)]},
    "Teeter Dance":  {"affected_by_mirror_move": [(3, False), (4, True)]},
    # Gen V -> VI
    "Feint":         {"affected_by_mirror_move": [(4, False), (6, True)]},
}

# Merge flag overrides for moves that have multiple flag fields changing.
# (e.g. Roar has both priority and magic_coat overrides)
# Counter and Mirror Coat already have protect overrides above; merge priority.
for _name, _pri_overrides in _PRIORITY_OVERRIDES.items():
    if _name in _FLAG_OVERRIDES:
        pass  # priority is handled separately, not in _FLAG_OVERRIDES


def _apply_flag_overrides(flags: dict, move_name: str, target_gen: int) -> dict:
    """Apply per-generation flag overrides to the flag dict."""
    overrides = _FLAG_OVERRIDES.get(move_name)
    if not overrides:
        return flags

    result = dict(flags)
    for field, gen_values in overrides.items():
        val = result.get(field)
        for from_gen, override_val in gen_values:
            if from_gen <= target_gen:
                val = override_val
        if val is not None:
            result[field] = val
    return result


# ---------------------------------------------------------------------------
# Category (Physical / Special / Status)
# ---------------------------------------------------------------------------

# In Gens 1-3, category was determined by the move's TYPE, not the individual move.
# The Physical/Special split happened in Gen 4 (Diamond/Pearl), where each move
# received its own category independent of type.
_PHYSICAL_TYPES = {"Normal", "Fighting", "Flying", "Ground", "Rock",
                   "Bug", "Ghost", "Poison", "Steel"}
_SPECIAL_TYPES  = {"Fire", "Water", "Grass", "Electric", "Ice",
                   "Psychic", "Dragon", "Dark"}


def get_category_for_gen(damage_class: str, move_type: str, target_gen: int) -> str:
    """
    Return the correct category for a move in the given generation.
    Gen 4+: per-move category from PokeAPI's damage_class.
    Gen 1-3: category determined by the move's type (physical/special split).
    Status moves remain Status in all gens.
    """
    if target_gen >= 4:
        return damage_class.title()

    # Gen 1-3: Status moves are still Status
    if damage_class == "status":
        return "Status"

    # Gen 1-3: damaging moves — category is determined by type
    if move_type in _PHYSICAL_TYPES:
        return "Physical"
    if move_type in _SPECIAL_TYPES:
        return "Special"

    # Edge case: Unknown/??? type (Curse in gen 2-4) — Curse is Status anyway,
    # but if somehow a damaging move has an unknown type, use PokeAPI's value
    return damage_class.title()


# ---------------------------------------------------------------------------
# Move entry builder
# ---------------------------------------------------------------------------

def build_move_entry(move_data: dict, target_gen: int,
                     bulba_stats: dict | None = None,
                     use_bulba: bool = False) -> dict:
    """Build a single move entry dict in moves.js format for the given generation."""
    rom_id      = move_data["id"]
    name        = get_english_name(move_data)
    past_values = move_data.get("past_values", [])

    # Resolve per-generation scalar stats from PokeAPI
    power        = get_scalar_for_gen(move_data.get("power"),        past_values, "power",         target_gen)
    accuracy     = get_scalar_for_gen(move_data.get("accuracy"),     past_values, "accuracy",      target_gen)
    pp           = get_scalar_for_gen(move_data.get("pp"),           past_values, "pp",            target_gen)
    effect_chance= get_scalar_for_gen(move_data.get("effect_chance"), past_values, "effect_chance", target_gen)

    # Cross-reference with Bulbapedia — use Bulbapedia as truth when values differ
    if bulba_stats:
        bulba_gen = bulba_stats.get(target_gen, {})
        for field, pokeapi_val in [("power", power), ("accuracy", accuracy), ("pp", pp)]:
            bulba_val = bulba_gen.get(field)
            if bulba_val is not None and bulba_val != pokeapi_val:
                print(f"    BULBA OVERRIDE: {name} gen {target_gen} "
                      f"{field}: PokeAPI={pokeapi_val} -> Bulba={bulba_val}")
                if field == "power":
                    power = bulba_val
                elif field == "accuracy":
                    accuracy = bulba_val
                elif field == "pp":
                    pp = bulba_val

    # Resolve per-generation type (must happen before category, since gen 1-3
    # category depends on the move's type in that generation)
    current_type = TYPE_MAP.get(move_data["type"]["name"], move_data["type"]["name"].title())
    move_type    = get_type_for_gen(current_type, past_values, target_gen)

    category = get_category_for_gen(
        move_data["damage_class"]["name"], move_type, target_gen
    )
    priority = _get_priority_for_gen(
        name, move_data.get("priority", 0), target_gen
    )
    target   = TARGET_MAP.get(
        (move_data.get("target") or {}).get("name", "selected-pokemon"),
        "Foe Or Ally"
    )

    meta   = move_data.get("meta")
    effect = derive_effect(meta, name)

    # Get flags from Bulbapedia (PokeAPI doesn't provide move flags)
    bulba_flags = get_bulba_flags(name) if use_bulba else None
    flags  = get_flags(move_data, bulba_flags)
    flags  = _apply_flag_overrides(flags, name, target_gen)

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
# Only 'effect' is manually curated. Kings rock data now comes from Bulbapedia
# (infobox parsing was fixed to correctly read the kingsrock flag).
PRESERVE_FIELDS = {"effect"}

# Fields that change per-generation and should always be updated from scraped data
GEN_VARIABLE_FIELDS = {"power", "accuracy", "pp", "type", "effect_chance", "category"}


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
    parser.add_argument(
        "--no-bulba", action="store_true",
        help="Skip Bulbapedia cross-reference (use PokeAPI data only)"
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

    use_bulba = not args.no_bulba
    if use_bulba:
        print("Bulbapedia cross-reference: ENABLED (use --no-bulba to skip)")
    else:
        print("Bulbapedia cross-reference: DISABLED")

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

            # Get Bulbapedia data (fetched once per move, cached in memory)
            bulba_stats = None
            if use_bulba:
                bulba_stats = get_bulba_gen_stats(name, move_gen)

            scraped_entry = build_move_entry(move_data, target_gen, bulba_stats,
                                              use_bulba=use_bulba)

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
