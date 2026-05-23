#!/usr/bin/env python3
"""
verify_level1_order.py — verify (and optionally fix) the ordering of the
level-1 ("[1, ...]") moves in every pokedex/<game>.js file against the
in-game order published on Bulbapedia.

Why this exists
---------------
PokeAPI does not preserve the in-game order of moves learned at the same
level.  scrape_pokedex.py re-orders the level-1 block using Bulbapedia, but
its form-heading matching is fragile (e.g. "Lycanroc (Dusk)" never matched
Bulbapedia's "Dusk Form" heading, so its order was left as raw PokeAPI
output).  This tool re-derives the correct order directly from the cached
Bulbapedia pages with robust per-game column selection and form matching.

Safety
------
A file's level-1 block is only ever *reordered* (never added to / removed
from).  A fix is applied only when the SET of level-1 moves in the file is
exactly the SET Bulbapedia lists for that game/form — so every fix is a pure
permutation.  Before writing a file, we require that re-encoding the
*unmodified* parsed data reproduces the file byte-for-byte; otherwise the
file is skipped.  The net diff is therefore only reordered "[1, ...]" lines.

Usage
-----
    python verify_level1_order.py --check            # report only (all games)
    python verify_level1_order.py --check --game sun_moon
    python verify_level1_order.py --fix              # apply safe fixes
    python verify_level1_order.py --check --show-unverified
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup

import scrape_pokedex as sp

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

POKEDEX_DIR = Path("pokedex")

# ---------------------------------------------------------------------------
# Per-version-group Bulbapedia level-column header.
#
# When a generation's learnset table has more than one level column (one per
# game / game-pair in the gen), this names the column to read.  When the
# named column is absent the parser falls back to the first level column,
# which is correct for the gen's lead game and for single-column tables.
# ---------------------------------------------------------------------------
COLUMN_MAP: dict[str, str] = {
    "red-blue":                   "RGB",   # Gen 1 columns: "RGB" + "Y"
    "yellow":                     "Y",
    "gold-silver":                "GS",    # Gen 2: usually single "Level"
    "crystal":                    "C",
    "ruby-sapphire":              "RS",    # Gen 3: usually single "Level"
    "emerald":                    "E",
    "firered-leafgreen":          "FRLG",
    "diamond-pearl":              "DP",    # Gen 4 columns: "DP" + "PtHGSS"
    "platinum":                   "PtHGSS",
    "heartgold-soulsilver":       "PtHGSS",
    "black-white":                "BW",    # Gen 5 columns: "BW" + "B2W2"
    "black-2-white-2":            "B2W2",
    "x-y":                        "XY",    # Gen 6 columns: "XY" + "ORAS"
    "omega-ruby-alpha-sapphire":  "ORAS",
    "sun-moon":                   "SM",    # Gen 7 columns: "SM" + "USUM"
    "ultra-sun-ultra-moon":       "USUM",
    "sword-shield":               "SwSh",  # Gen 8 (multi-column when differing)
    "brilliant-diamond-shining-pearl": "BDSP",
    "legends-arceus":             "LA",
    # scarlet-violet / legends-za: bare species page, single "Level" column.
}

# Games whose cached Bulbapedia learnset source is NOT game-accurate, so their
# level-1 order must not be auto-fixed from these pages (report only):
#   - BDSP shares the Gen VIII page, which carries Sword/Shield level-up data,
#     not the Gen-4-style learnsets BDSP actually uses.
#   - Legends: Arceus / Legends: Z-A use bespoke move systems not represented
#     as standard learnset tables on Bulbapedia (yet).
FIX_EXCLUDE = {
    "brilliant_diamond_shining_pearl",
    "legends_arceus",
    "legends_za",
}

# Known form prefixes used in our display names.
PREFIX_FORMS = (
    "Alolan", "Galarian", "Hisuian", "Paldean",
    "Mega", "Primal", "Gigantamax", "Eternamax", "Partner",
)

# A handful of move-name spelling differences between PokeAPI (file) and
# Bulbapedia's gen-specific pages.  Normalised forms are mapped to a common
# token so set-comparison treats them as identical.  Keys/values are already
# normalised (lowercase, alphanumerics only).
MOVE_ALIASES: dict[str, str] = {
    "visegrip": "vicegrip",          # "Vise Grip" (new) vs "Vice Grip" (old)
}


def norm_move(name: str) -> str:
    """Normalise a move name for spelling-insensitive comparison."""
    n = re.sub(r"[^a-z0-9]", "", name.lower())
    return MOVE_ALIASES.get(n, n)


# ---------------------------------------------------------------------------
# Bulbapedia table location + parsing
# ---------------------------------------------------------------------------

def _heading_rank(el) -> int | None:
    if getattr(el, "name", None) and re.fullmatch(r"h[1-6]", el.name):
        return int(el.name[1])
    return None


def _find_sortable(el):
    if getattr(el, "name", None) == "table" and "sortable" in (el.get("class") or []):
        return el
    return el.find("table", class_="sortable") if hasattr(el, "find") else None


def _table_rows(table):
    """Return (headers, rows) where rows = [(move_name, [cell_text per column])].

    Hidden Bulbapedia sort-key spans (e.g. <span style="display:none">01</span>)
    are stripped so a level cell reads as "1" rather than "011"."""
    header = table.find("tr")
    headers = [th.get_text(strip=True) for th in header.find_all("th")] if header else []
    move_col = headers.index("Move") if "Move" in headers else 1
    rows = []
    for tr in table.find_all("tr"):
        cells = tr.find_all("td")
        if len(cells) <= move_col:
            continue
        levels = []
        for c in cells:
            for hidden in c.find_all("span", style=re.compile(r"display:\s*none")):
                hidden.decompose()
            levels.append(c.get_text(strip=True))
        link = cells[move_col].find("a")
        name = link.get_text(strip=True) if link else cells[move_col].get_text(strip=True)
        if name:
            rows.append((name, levels))
    return headers, rows


def _extract_tables(soup):
    """
    Parse a learnset page once into a compact, low-memory structure: an ordered
    list of (descriptor_words: frozenset, headers, rows) — the base/default
    table (descriptor ∅) plus one per form sub-heading under "By leveling up".
    The first table per descriptor wins.
    """
    span = soup.find("span", id="By_leveling_up")
    if not span:
        return []
    node = span.parent
    base_rank = _heading_rank(node) or 4
    out, seen = [], set()
    cur_desc = frozenset()
    for sib in node.find_next_siblings():
        r = _heading_rank(sib)
        if r is not None and r <= base_rank:
            break
        if r is not None and r > base_rank:
            cur_desc = frozenset(
                re.sub(r"[()]", "", sib.get_text(strip=True)).lower().split())
            continue
        tbl = _find_sortable(sib)
        if tbl and cur_desc not in seen:
            seen.add(cur_desc)
            headers, rows = _table_rows(tbl)
            out.append((cur_desc, headers, rows))
    return out


_tables_cache: dict[tuple[str, int], list] = {}

ALLOW_NETWORK = False   # set by --online; default is cache-only (deterministic)


def get_tables(base_species: str, gen: int, use_cache: bool) -> list:
    """Cached, soup-discarding accessor for a page's level-up tables."""
    key = (base_species, gen)
    if key in _tables_cache:
        return _tables_cache[key]
    url = sp._bulbapedia_learnset_url(base_species, gen)
    if not ALLOW_NETWORK and not sp._bulbapedia_cache_path(url).exists():
        _tables_cache[key] = []          # not cached and offline → unverifiable
        return []
    html = sp.fetch_bulbapedia_html(url, use_cache)
    tables = _extract_tables(BeautifulSoup(html, "html.parser")) if html else []
    _tables_cache[key] = tables          # soup is local and freed here
    return tables


def bulbapedia_level1(base_species, descriptor_words, gen, version_group, use_cache):
    """Return Bulbapedia's ordered level-1 move list, or None if unavailable."""
    tables = get_tables(base_species, gen, use_cache)
    if not tables:
        return None

    chosen = None
    if descriptor_words:
        # Form: the sub-heading whose words ⊇ the descriptor ("Dusk" matches
        # "Dusk Form"; "Alolan" matches "Alolan Raichu").
        for desc, headers, rows in tables:
            if descriptor_words.issubset(desc):
                chosen = (headers, rows)
                break
    if chosen is None:
        # Base/default form, or a form (Mega/Primal/G-max, Rotom appliance,
        # Therian forme, size form, …) that shares the base learnset and has no
        # heading of its own.  The set-equality gate keeps this safe for forms
        # that genuinely differ.
        _, headers, rows = tables[0]
        chosen = (headers, rows)

    headers, rows = chosen
    preferred = COLUMN_MAP.get(version_group)
    ci = headers.index(preferred) if preferred in headers else 0
    moves = [name for name, levels in rows if ci < len(levels) and levels[ci] == "1"]
    return moves or None


# ---------------------------------------------------------------------------
# Display-name -> (base species, form descriptor words)
# ---------------------------------------------------------------------------

def build_base_map(data: dict) -> dict[int, str]:
    """national_dex_number -> base (undecorated) species name, from the file."""
    base: dict[int, str] = {}
    for name, entry in data.items():
        dex = entry.get("national_dex_number")
        if dex is None:
            continue
        if "(" in name or any(name.startswith(p + " ") for p in PREFIX_FORMS):
            continue   # a form, not the base
        base.setdefault(dex, name)
    return base


def split_form(name: str, entry: dict, base_map: dict[int, str]) -> tuple[str, set[str]]:
    """
    Return (base_species_name, descriptor_words).

    base_species_name is what Bulbapedia titles the species page; descriptor
    words distinguish the form (empty for the base form).
    """
    dex = entry.get("national_dex_number")
    base = base_map.get(dex)
    if not base:
        # Fall back to a heuristic when the file has no undecorated entry.
        if "(" in name:
            base = name[: name.index("(")].strip()
        else:
            base = name

    name_words = set(re.sub(r"[()]", " ", name).lower().split())
    base_words = set(base.lower().split())
    descriptor = name_words - base_words
    return base, descriptor


# ---------------------------------------------------------------------------
# Reordering
# ---------------------------------------------------------------------------

def reordered_level_up(level_up: list, bp_order: list[str]):
    """
    Return (new_level_up, changed) where the level-1 entries are reordered to
    match bp_order.  Returns (level_up, False) if the SET doesn't match (so
    the caller can flag it unverified) — caller should gate on set equality
    first; this function trusts that the sets match.
    """
    idx = {}
    for i, m in enumerate(bp_order):
        idx.setdefault(norm_move(m), i)
    level1 = [m for m in level_up if m[0] == 1]
    reordered = sorted(level1, key=lambda m: idx.get(norm_move(m[1]), len(bp_order)))
    if reordered == level1:
        return level_up, False
    it = iter(reordered)
    out = []
    for m in level_up:
        out.append(next(it) if m[0] == 1 else m)
    return out, True


# ---------------------------------------------------------------------------
# File framing (parse / re-encode byte-exactly)
# ---------------------------------------------------------------------------

_FRAME_RE = re.compile(r"(?P<prefix>.*?)(?P<body>\{.*\})(?P<suffix>\s*;?\s*)$", re.DOTALL)


def load_js(path: Path):
    text = path.read_text(encoding="utf-8")
    m = _FRAME_RE.match(text)
    data = json.loads(m.group("body"))
    return text, m.group("prefix"), data, m.group("suffix")


def encode_js(prefix: str, data: dict, suffix: str) -> str:
    body = sp.CompactJSONEncoder(indent=4, ensure_ascii=True).encode(data)
    return prefix + body + suffix


# ---------------------------------------------------------------------------
# Per-game verification
# ---------------------------------------------------------------------------

class Result:
    __slots__ = ("ok", "mismatch", "unverified")

    def __init__(self):
        self.ok = 0
        self.mismatch: list[tuple] = []      # (species, current, expected)
        self.unverified: list[tuple] = []    # (species, reason, detail)


def verify_game(game_name, cfg, use_cache, data) -> tuple[Result, dict]:
    gen = cfg["generation"]
    vg = cfg["version_group"]
    base_map = build_base_map(data)
    res = Result()

    for species, entry in data.items():
        level_up = entry.get("level_up_learnset")
        if not level_up:
            continue
        level1 = [m for m in level_up if m[0] == 1]
        if len(level1) <= 1:
            continue

        base, descriptor = split_form(species, entry, base_map)
        bp = bulbapedia_level1(base, descriptor, gen, vg, use_cache)
        if not bp:
            res.unverified.append((species, "no-bp-table", f"base={base!r} desc={sorted(descriptor)}"))
            continue

        file_norm = sorted(norm_move(m[1]) for m in level1)
        bp_norm = sorted(norm_move(m) for m in bp)
        if file_norm != bp_norm:
            only_file = sorted(set(file_norm) - set(bp_norm))
            only_bp = sorted(set(bp_norm) - set(file_norm))
            res.unverified.append(
                (species, "set-mismatch", f"file_only={only_file} bp_only={only_bp}")
            )
            continue

        new_level_up, changed = reordered_level_up(level_up, bp)
        if changed:
            cur = [m[1] for m in level1]
            exp = [m[1] for m in new_level_up if m[0] == 1]
            res.mismatch.append((species, cur, exp))
            entry["level_up_learnset"] = new_level_up   # staged for --fix
        else:
            res.ok += 1
    return res, data


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    mode = ap.add_mutually_exclusive_group(required=True)
    mode.add_argument("--check", action="store_true", help="report only")
    mode.add_argument("--fix", action="store_true", help="apply safe reorderings")
    ap.add_argument("--game", help="restrict to one game (filename stem, e.g. sun_moon)")
    ap.add_argument("--online", action="store_true",
                    help="allow fetching uncached Bulbapedia pages (default: cache-only)")
    ap.add_argument("--no-cache", action="store_true",
                    help="with --online, re-fetch even cached pages")
    ap.add_argument("--show-unverified", action="store_true",
                    help="list every unverified species (not just a summary)")
    ap.add_argument("--include-unreliable", action="store_true",
                    help="also auto-fix BDSP / Legends games (off by default)")
    args = ap.parse_args()
    global ALLOW_NETWORK
    ALLOW_NETWORK = args.online
    use_cache = not args.no_cache

    games = [(n, c) for n, c in sp.GAME_CONFIG.items()]
    if args.game:
        games = [(n, c) for n, c in games if Path(c["filename"]).stem == args.game]
        if not games:
            sys.exit(f"unknown game: {args.game}")

    grand = {"ok": 0, "mismatch": 0, "unverified": 0, "fixed_files": 0}
    reasons: dict[str, int] = {}

    for game_name, cfg in games:
        path = POKEDEX_DIR / cfg["filename"]
        if not path.exists():
            continue
        text, prefix, data, suffix = load_js(path)

        # Safety gate: confirm we can reproduce the file byte-for-byte before
        # we ever consider writing it.
        reproducible = encode_js(prefix, json.loads(_FRAME_RE.match(text).group("body")), suffix) == text

        res, data = verify_game(game_name, cfg, use_cache, data)
        grand["ok"] += res.ok
        grand["mismatch"] += len(res.mismatch)
        grand["unverified"] += len(res.unverified)
        for _, reason, _ in res.unverified:
            reasons[reason] = reasons.get(reason, 0) + 1

        tag = "" if reproducible else "  [NOT BYTE-REPRODUCIBLE — fix disabled]"
        print(f"\n=== {game_name}  ({cfg['filename']}){tag}")
        print(f"    ok={res.ok}  mismatch={len(res.mismatch)}  unverified={len(res.unverified)}")
        for species, cur, exp in res.mismatch:
            print(f"    MISMATCH  {species}")
            print(f"        current : {cur}")
            print(f"        expected: {exp}")
        if args.show_unverified:
            for species, reason, detail in res.unverified:
                print(f"    unverified[{reason}]  {species}  {detail}")

        excluded = (Path(cfg["filename"]).stem in FIX_EXCLUDE
                    and not args.include_unreliable)
        if args.fix and res.mismatch and excluded:
            print("    -> NOT auto-fixed (Bulbapedia source not game-accurate; "
                  "use --include-unreliable to override)")
        elif args.fix and res.mismatch and reproducible:
            new_text = encode_js(prefix, data, suffix)
            path.write_text(new_text, encoding="utf-8", newline="")
            grand["fixed_files"] += 1
            print(f"    -> wrote {len(res.mismatch)} fixes to {path}")

    print("\n" + "=" * 60)
    print(f"TOT:  ok={grand['ok']}  mismatch={grand['mismatch']}  "
          f"unverified={grand['unverified']}")
    if reasons:
        print("unverified reasons:", reasons)
    if args.fix:
        print(f"files written: {grand['fixed_files']}")


if __name__ == "__main__":
    main()
