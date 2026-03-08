scrape_moves.py
===============

Scrapes Pokemon move data from PokeAPI (https://pokeapi.co) for Gen 6-9 and
outputs it in the format used by moves.js.


REQUIREMENTS
------------
Python 3.10+  (uses built-in dict | None type union syntax)
requests      (pip install requests)


USAGE
-----
Basic (scrapes Gen 6, 7, 8, 9):
    python scrape_moves.py

Specific generations:
    python scrape_moves.py --gens 6 7

Custom output file:
    python scrape_moves.py --output my_moves.js

Both options:
    python scrape_moves.py --gens 8 9 --output moves_gen8_9.js


OUTPUT
------
A .js file (default: moves_gen6_9.js) containing an exported const with keys
"6", "7", "8", "9" — matching the structure of moves.js. Each key contains ALL
moves available in that generation (not just new ones) with that generation's stats.

Example structure:
    export const moves = {
        "6": {
            "Pound": { "rom_id": 1, "move": "Pound", ... },
            ...
        },
        "7": { ... },
        ...
    }

To use the output, copy the desired generation keys into moves.js alongside the
existing "1", "2", "3", "4" keys.


CACHING
-------
API responses are cached to ./move_cache/ on first run. Subsequent runs read from
cache and complete in seconds. Delete the move_cache/ folder to force a fresh
download from PokeAPI.

The first full run fetches 900+ individual move pages and will take several minutes.


FIELD NOTES
-----------
Most fields are pulled directly from PokeAPI and should be accurate:
    rom_id, move, type, category, pp, power, accuracy, priority,
    effect_chance, target, makes_contact, affected_by_protect,
    affected_by_magic_coat, affected_by_snatch, affected_by_mirror_move

Per-generation stat values (power, accuracy, pp, type) are resolved from
PokeAPI's past_values data, so a move like Charm correctly shows type "Normal"
in Gen 5 and "Fairy" in Gen 6.

Two fields require manual review after running:

  effect
    Derived from PokeAPI meta data (move category, ailment type, drain amount,
    etc.) and may not exactly match the snake_case convention used in this repo.
    Cross-reference with the existing effects in effects.js and moves.js.

  affected_by_kings_rock
    Always set to false. PokeAPI does not track this flag. As a general rule,
    direct-damage moves with no secondary effect are affected by King's Rock,
    but there are exceptions. Verify against Bulbapedia if needed.
