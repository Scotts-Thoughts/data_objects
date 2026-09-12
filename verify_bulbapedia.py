#!/usr/bin/env python3
"""
verify_bulbapedia.py — check that every learnset (and base-stat block) in the
pokedex files matches Bulbapedia, list for list and in Bulbapedia's order.

For each entry of each per-game file the tool re-derives the learnsets from
the cached Bulbapedia wikitext (bulba_learnsets) and the base stats from the
species page (bulba_stats), then compares:

    level_up_learnset, tm_hm_learnset, tutor_learnset, egg_moves,
    transfer_learnset, prior_evolution_learnset, base_stats

Entries whose ``learnset_source`` is "pokeapi" (no Bulbapedia page) are
reported separately rather than compared.

Usage:
    python verify_bulbapedia.py                      # every game in pokedex/
    python verify_bulbapedia.py --game sun_moon      # one file (filename stem)
    python verify_bulbapedia.py --dir ../solodex/data_objects-main/pokedex
    python verify_bulbapedia.py --pokedex-js ../solodex/data_objects-main/pokedex.js
                                                     # the merged Gen 1-4 file
    python verify_bulbapedia.py --refresh            # re-fetch pages first
    python verify_bulbapedia.py --show 20            # print up to 20 diffs per game

Exit status is 1 when any mismatch is found.  Run with the bulba_proxy up
when using --refresh (or when pages are missing from the cache).
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import bulba_fetch as bf
import bulba_learnsets as bl
import bulba_stats as bs
import scrape_pokedex as sp

FIELDS = [
    ("level_up_learnset", "level_up"),
    ("tm_hm_learnset", "tm_hm"),
    ("tutor_learnset", "tutor"),
    ("egg_moves", "egg"),
    ("transfer_learnset", "transfer"),
    ("prior_evolution_learnset", "prior_evolution"),
]

# Display names in the Gen 1-4 pokedex.js that differ from the scraper's.
POKEDEX_JS_ALIASES = {
    "Nidoran_F": "Nidoran♀",
    "Nidoran_M": "Nidoran♂",
    "Farfetch'd": "Farfetch’d",
    "Deoxys (Normal)": "Deoxys",
    "Giratina (Altered)": "Giratina",
    "Shaymin (Land)": "Shaymin",
    "Wormadam (Plant Cloak)": "Wormadam",
    "Wormadam (Sandy Cloak)": "Wormadam (Sandy)",
    "Wormadam (Trash Cloak)": "Wormadam (Trash)",
}


def load_js(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    return json.loads(text[text.index("{"):])


def base_species_of(display: str, entries: dict) -> str:
    """Undecorated species name for a display name, using the file itself
    (the base entry shares the national dex number)."""
    dex = entries[display]["national_dex_number"]
    for name, e in entries.items():
        if e["national_dex_number"] == dex and bl.form_words(name) <= bl.form_words(display):
            if not any(name.startswith(p + " ") for p in ("Mega", "Primal", "Alolan", "Galarian", "Hisuian", "Paldean")) and "(" not in name:
                return name
    # fall back: strip decorations
    info = display
    for p in ("Mega ", "Primal ", "Alolan ", "Galarian ", "Hisuian ", "Paldean "):
        if info.startswith(p):
            info = info[len(p):]
    if info.endswith(")") and " (" in info:
        info = info[: info.index(" (")]
    for suffix in (" X", " Y", " Z"):
        if display.startswith("Mega ") and info.endswith(suffix):
            info = info[: -len(suffix)]
    return info


def verify_game(game: str, entries: dict, show: int, use_cache: bool) -> tuple[int, int, list[str]]:
    gen, tag = bl.GAME_INFO[game]
    ok = bad = 0
    lines: list[str] = []
    fallback: list[str] = []
    for display, entry in entries.items():
        display_norm = POKEDEX_JS_ALIASES.get(display, display)
        if entry.get("learnset_source") == "pokeapi":
            fallback.append(display)
            continue
        species = POKEDEX_JS_ALIASES.get(base_species_of(display, entries), base_species_of(display, entries))
        species = POKEDEX_JS_ALIASES.get(species, species)
        descriptor = bl.descriptor_for(display_norm, species)
        ls = bl.get_learnsets(species, gen, game, descriptor, use_cache)
        diffs: list[str] = []
        if ls is None or not ls.found:
            diffs.append("no Bulbapedia learnset for this game/form")
        else:
            expected = {
                "level_up_learnset": [list(m) for m in ls.level_up],
                "tm_hm_learnset": ls.tm_hm,
                "tutor_learnset": ls.tutor,
                "egg_moves": [] if sp.GAME_CONFIG[game]["version_group"] in sp.NO_BREEDING_VERSION_GROUPS else ls.egg,
                "transfer_learnset": ls.transfer,
                "prior_evolution_learnset": ls.prior_evolution,
            }
            for field, _ in FIELDS:
                have = entry.get(field, [])
                have = [list(m) for m in have] if field == "level_up_learnset" else list(have)
                want = expected[field]
                if have != want:
                    if sorted(map(str, have)) == sorted(map(str, want)):
                        diffs.append(f"{field}: order differs")
                    else:
                        missing = [m for m in want if m not in have]
                        extra = [m for m in have if m not in want]
                        diffs.append(f"{field}: missing={missing[:6]} extra={extra[:6]}")
        block = bs.lookup_stats(species, descriptor, gen, use_cache, tag)
        if block is not None and (gen > 1 or block.special is not None):
            want_stats = bs.gen_stats(block, gen)
            have_stats = {k: entry["base_stats"].get(k) for k in want_stats}
            vg = sp.GAME_CONFIG[game]["version_group"]
            want_stats = sp.apply_version_group_stat_overrides(_slug_guess(display_norm), want_stats, vg)
            if have_stats != want_stats:
                diffs.append(f"base_stats: file={have_stats} bulbapedia={want_stats}")
        if diffs:
            bad += 1
            if len(lines) < show:
                lines.append(f"    {display}: " + "; ".join(diffs))
        else:
            ok += 1
    if fallback:
        lines.append(f"    ({len(fallback)} entries sourced from PokéAPI, not compared: {', '.join(fallback[:8])}{' …' if len(fallback) > 8 else ''})")
    return ok, bad, lines


def _slug_guess(display: str) -> str:
    """Rough PokéAPI slug for the VG_STAT_OVERRIDES lookup (Mega Medicham etc.)."""
    d = display.lower().replace("’", "").replace("'", "").replace(".", "").replace(":", "")
    if d.startswith("mega "):
        return d[5:].replace(" ", "-") + "-mega"
    return d.replace(" ", "-")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dir", default="pokedex", help="directory with per-game .js files")
    ap.add_argument("--game", help="only this file (stem, e.g. sun_moon)")
    ap.add_argument("--pokedex-js", help="also verify a Gen 1-4 pokedex.js (all games in one object)")
    ap.add_argument("--refresh", action="store_true", help="re-fetch every needed page before comparing")
    ap.add_argument("--show", type=int, default=10, help="mismatching entries to print per game")
    args = ap.parse_args()

    use_cache = not args.refresh
    targets: list[tuple[str, dict]] = []
    stem_to_game = {Path(c["filename"]).stem: g for g, c in sp.GAME_CONFIG.items()}
    if args.pokedex_js:
        data = load_js(Path(args.pokedex_js))
        for game, entries in data.items():
            if game in bl.GAME_INFO and (not args.game or stem_to_game.get(args.game) == game):
                targets.append((game, entries))
    else:
        for stem, game in stem_to_game.items():
            if args.game and stem != args.game:
                continue
            path = Path(args.dir) / f"{stem}.js"
            if path.exists():
                targets.append((game, load_js(path)))

    if args.refresh:
        titles: list[str] = []
        for game, entries in targets:
            gen = bl.GAME_INFO[game][0]
            for display in entries:
                sp_name = POKEDEX_JS_ALIASES.get(base_species_of(display, entries), base_species_of(display, entries))
                titles.append(bf.learnset_title(sp_name, gen))
                titles.append(bf.species_title(sp_name))
        bf.prefetch_wikitext(sorted(set(titles)), use_cache=False)
        use_cache = True

    total_bad = 0
    for game, entries in targets:
        ok, bad, lines = verify_game(game, entries, args.show, use_cache)
        total_bad += bad
        print(f"{'OK  ' if not bad else 'FAIL'} {game:38s} {ok} match, {bad} differ")
        for line in lines:
            print(line)
    sys.exit(1 if total_bad else 0)


if __name__ == "__main__":
    if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    main()
