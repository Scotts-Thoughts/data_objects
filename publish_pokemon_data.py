#!/usr/bin/env python3
"""Copy the published data files into a checkout of the public Pokémon Data repo.

    python publish_pokemon_data.py K:/Programs/pokemon-data
    python publish_pokemon_data.py K:/Programs/pokemon-data --check   # report only

Only data files are published (no scrapers, caches or reports). LAYOUT maps each
destination path in the public repo to its source in this repo. Files are copied
byte-for-byte with LF line endings. Data files in the destination that LAYOUT no
longer lists are reported but never deleted.

Deliberately not published:
  pokedex.js           superseded by pokedex/<game>.js (2024 combined Gen 1-4 file)
  moves_gen6_9.js      raw PokéAPI scrape; moves.js holds the corrected Gens 1-9
  trainers/red.js      stale pre-2024 duplicate of trainers/red_blue.js
  event_pokemon_list.md, scrape_report.json, inventory_sprites/   tooling output
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

POKEDEX_GAMES = [
    "red_blue", "yellow", "gold_silver", "crystal", "ruby_sapphire", "emerald",
    "firered_leafgreen", "diamond_pearl", "platinum", "heartgold_soulsilver",
    "black_white", "black2_white2", "x_y", "omega_ruby_alpha_sapphire",
    "sun_moon", "ultra_sun_ultra_moon", "sword_shield",
    "brilliant_diamond_shining_pearl", "legends_arceus", "scarlet_violet",
    "legends_za",
]
REGIONAL_DEXES = [
    "red_blue_yellow_firered_leafgreen", "gold_silver_crystal",
    "heartgold_soulsilver", "ruby_sapphire_emerald", "omega_ruby_alpha_sapphire",
    "diamond_pearl_brilliant_diamond_shining_pearl", "platinum", "black_white",
    "black2_white2", "x_y", "sun_moon", "ultra_sun_ultra_moon", "sword_shield",
    "legends_arceus", "scarlet_violet", "legends_za",
]
ENCOUNTER_GAMES = [
    "red_blue", "yellow", "gold_silver", "crystal", "ruby_sapphire", "emerald",
    "firered_leafgreen", "diamond_pearl", "platinum", "heartgold_soulsilver",
    "black_white", "black2_white2", "x_y", "omega_ruby_alpha_sapphire",
    "sun_moon", "ultra_sun_ultra_moon",
]
TRAINER_FILES = [
    "red_blue", "yellow", "gold_silver", "crystal", "ruby", "sapphire", "emerald",
    "firered_leafgreen", "diamond_pearl", "platinum", "heartgold_soulsilver",
    "black_white", "black2_white2", "black2_white2_challenge", "black2_white2_pwt",
]
EVENT_FILES = [f"generation_{n}" for n in range(1, 10)] + ["dream_world"]


def layout() -> dict[str, str]:
    m: dict[str, str] = {}
    for g in POKEDEX_GAMES:
        m[f"pokedex/{g}.js"] = f"pokedex/{g}.js"
    m["pokedex/mega_evolutions.js"] = "pokedex/mega_evolution_pokedex.js"
    for r in REGIONAL_DEXES:
        m[f"regional_dex/{r}.js"] = f"regional_dex/{r}_regional_dex.js"
    m["version_exclusives.js"] = "version_exclusives.js"
    for g in ENCOUNTER_GAMES:
        m[f"encounters/by_location/{g}.js"] = f"encounters/{g}.js"
        m[f"encounters/by_pokemon/{g}.js"] = f"encounters/{g}_by_pokemon.js"
    for t in TRAINER_FILES:
        m[f"trainers/{t}.js"] = f"trainers/{t}.js"
    for e in EVENT_FILES:
        m[f"events/{e}.js"] = f"events/{e}.js"
    m["moves/moves.js"] = "moves.js"
    m["moves/tm_hm.js"] = "tmhm.js"
    m["moves/move_effects.js"] = "effects.js"
    m["moves/unobtainable_moves.js"] = "unobtainable_moves.js"
    m["mechanics/type_chart.js"] = "effectiveness.js"
    m["mechanics/stat_modifiers.js"] = "mods.js"
    m["mechanics/natures.js"] = "natures.js"
    m["items/type_boosting_items.js"] = "items.js"
    m["items/mega_stones.js"] = "mega_stones.js"
    return m


def normalized(path: Path) -> bytes:
    return path.read_bytes().replace(b"\r\n", b"\n")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("dest", type=Path, help="checkout of the pokemon-data repo")
    ap.add_argument("--check", action="store_true", help="report differences, write nothing")
    args = ap.parse_args()

    m = layout()
    missing = [src for src in m.values() if not (ROOT / src).is_file()]
    if missing:
        print("missing source files:", *missing, sep="\n  ")
        return 1

    changed = 0
    for dest, src in m.items():
        data = normalized(ROOT / src)
        out = args.dest / dest
        if out.is_file() and out.read_bytes() == data:
            continue
        changed += 1
        print(f"{'would update' if args.check else 'update'} {dest}  <- {src}")
        if not args.check:
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_bytes(data)

    published = set(m)
    for f in sorted(args.dest.rglob("*.js")):
        rel = f.relative_to(args.dest).as_posix()
        if not rel.startswith(".") and rel not in published:
            print(f"not in LAYOUT (left in place): {rel}")

    print(f"{len(m)} files, {changed} {'differ' if args.check else 'written'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
