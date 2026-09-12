#!/usr/bin/env python3
"""
merge_gen1to4_pokedex.py — refresh the learnsets in the Gen 1-4 ``pokedex.js``
from the freshly scraped per-game files while keeping its ROM-derived fields.

Solodex reads Gen 1-4 games from ``pokedex.js`` (one object keyed by game
name) whose base stats, EV yields, catch rates, base experience, held items,
abilities and evolution families were extracted from the game ROMs and are
cross-checked against the decompilations by ``npm run verify:stats``.  The
learnsets in that file, however, predate the Bulbapedia scraper.

This script rebuilds each Gen 1-4 game from the per-game scrape
(``pokedex/<game>.js``) and, for every entry the old file also has, keeps the
old ROM fields — only the learnset fields come from the new scrape:

    level_up_learnset, tm_hm_learnset, tutor_learnset, egg_moves,
    transfer_learnset, prior_evolution_learnset, form_change_learnset,
    light_ball_egg_learnset, learnset_source

Entries the scrape no longer produces (a Deoxys forme Bulbapedia says is not
in that game) are dropped; entries the old file lacked (Castform's weather
forms) are added whole.

Usage:
    python merge_gen1to4_pokedex.py                       # pokedex.js in place
    python merge_gen1to4_pokedex.py --old ../solodex/data_objects-main/pokedex.js \\
                                    --new-dir pokedex --out ../solodex/data_objects-main/pokedex.js
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from scrape_pokedex import CompactJSONEncoder, GAME_CONFIG

LEARNSET_FIELDS = [
    "level_up_learnset", "tm_hm_learnset", "tutor_learnset", "egg_moves",
    "transfer_learnset", "prior_evolution_learnset", "form_change_learnset",
    "light_ball_egg_learnset", "zygarde_cube_learnset", "learnset_source",
]

GEN14_GAMES = [g for g, c in GAME_CONFIG.items() if c["generation"] <= 4]

# old pokedex.js name -> scraper name
OLD_TO_NEW = {
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


def merge_game(old: dict, new: dict) -> tuple[dict, dict]:
    old_by_new_name = {OLD_TO_NEW.get(name, name): entry for name, entry in old.items()}
    merged: dict = {}
    stats = {"kept_rom_fields": 0, "added": 0, "dropped": sorted(set(old_by_new_name) - set(new))}
    for name, new_entry in new.items():
        old_entry = old_by_new_name.get(name)
        if old_entry is None:
            merged[name] = new_entry
            stats["added"] += 1
            continue
        entry = dict(old_entry)
        entry["species"] = name
        for field in LEARNSET_FIELDS:
            entry.pop(field, None)
            if field in new_entry:
                entry[field] = new_entry[field]
        merged[name] = entry
        stats["kept_rom_fields"] += 1
    return merged, stats


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--old", default="pokedex.js")
    ap.add_argument("--new-dir", default="pokedex")
    ap.add_argument("--out", default=None, help="default: overwrite --old")
    args = ap.parse_args()

    old_all = load_js(Path(args.old))
    out_all: dict = {}
    for game in old_all:            # keep the old file's game order
        cfg = GAME_CONFIG.get(game)
        if cfg is None or cfg["generation"] > 4:
            out_all[game] = old_all[game]
            continue
        new = load_js(Path(args.new_dir) / cfg["filename"])
        merged, stats = merge_game(old_all[game], new)
        out_all[game] = merged
        dropped = stats["dropped"]
        print(f"{game:28s} {len(merged)} entries  (ROM fields kept for {stats['kept_rom_fields']}, "
              f"added {stats['added']}, dropped {len(dropped)}{': ' + ', '.join(dropped) if dropped else ''})")

    out_path = Path(args.out or args.old)
    body = json.dumps(out_all, cls=CompactJSONEncoder, indent=4)
    out_path.write_text("export const pokedex = " + body, encoding="utf-8")
    print("wrote", out_path)


if __name__ == "__main__":
    main()
