# Pokédex Scraping Guide

Scripts for scraping Pokédex data for Gen 5–9 games from [PokéAPI](https://pokeapi.co) and producing `.js` files in the same format as the existing `pokedex/` split files.

---

## Dependencies

### Python version

Python **3.10 or newer** is required. Check your version with:

```bash
python --version
```

### Python packages

Only one external package is needed:

```bash
python -m pip install requests
```

---

## Scripts

### `scrape_pokedex.py`

Scrapes Pokédex data (base stats, types, abilities, learnsets, evolution families, etc.) for the following games and writes one `.js` file per game into the `pokedex/` directory:

| Game | Output file |
|---|---|
| Black 2 and White 2 | `pokedex/black2_white2.js` |
| X and Y | `pokedex/x_y.js` |
| Omega Ruby and Alpha Sapphire | `pokedex/omega_ruby_alpha_sapphire.js` |
| Sun and Moon | `pokedex/sun_moon.js` |
| Ultra Sun and Ultra Moon | `pokedex/ultra_sun_ultra_moon.js` |
| Sword and Shield | `pokedex/sword_shield.js` |
| Scarlet and Violet | `pokedex/scarlet_violet.js` |

**Usage:**

```bash
# Scrape all games
python scrape_pokedex.py

# Scrape a single game
python scrape_pokedex.py --game "X and Y"

# Write output to a different directory
python scrape_pokedex.py --output-dir some/other/dir

# Re-fetch all pages even if cached
python scrape_pokedex.py --no-cache
```

**Valid `--game` values:**
- `"Black 2 and White 2"`
- `"X and Y"`
- `"Omega Ruby and Alpha Sapphire"`
- `"Sun and Moon"`
- `"Ultra Sun and Ultra Moon"`
- `"Sword and Shield"`
- `"Scarlet and Violet"`

**Runtime:** The first run fetches one API page per Pokémon (1025 species × 2 endpoints each). Expect 20–40 minutes depending on your connection. All responses are cached locally in `.scrape_cache_api/` so subsequent runs complete in seconds.

---

### `scrape_tmhm.py`

Does two things in sequence:

1. **Updates `tmhm.js`** — Fetches machine (TM/HM/TR) data from PokéAPI for Gen 6–9 and appends the ordered TM lists as new entries (`"6"` through `"9"`) to `tmhm.js`. Existing entries are left untouched.

2. **Sorts `tm_hm_learnset`** — Re-sorts every Pokémon's `tm_hm_learnset` in all seven scraped pokedex files to match the canonical in-game TM order (TMs by number, then TRs for Gen 8, then HMs).

**Run this after `scrape_pokedex.py` has finished.**

**Usage:**

```bash
# Do both steps (normal usage)
python scrape_tmhm.py

# Only update tmhm.js, do not touch pokedex files
python scrape_tmhm.py --tmhm-only

# Only re-sort pokedex files using the existing tmhm.js
python scrape_tmhm.py --sort-only

# Re-fetch all data even if cached
python scrape_tmhm.py --no-cache
```

**Runtime:** The first run fetches details for every machine entry in PokéAPI (~1700+ records). Expect 5–10 minutes. Subsequent runs are instant thanks to the shared `.scrape_cache_api/` cache.

---

## Recommended order of operations

```bash
# 1. Install the dependency
python -m pip install requests

# 2. Scrape all Pokédex data
python scrape_pokedex.py

# 3. Add TM orderings to tmhm.js and sort the scraped files
python scrape_tmhm.py
```

---

## Caching

Both scripts share a local cache directory (`.scrape_cache_api/`) that stores every API response as a `.json` file. This means:

- Re-running either script after a completed run is near-instant.
- If you interrupt a run partway through, the next run picks up where it left off with no duplicate requests.
- To force a full re-fetch (e.g. after a PokéAPI data update), pass `--no-cache` or delete the `.scrape_cache_api/` directory.

---

## What the scraper produces

Each output file contains **base forms plus all mechanically distinct alternate forms** available in that game:

| Form type | Games included |
|---|---|
| Mega Evolutions | X/Y, ORAS, Sun/Moon, Ultra Sun/Ultra Moon |
| Primal Reversion (Kyogre, Groudon) | ORAS, Sun/Moon, Ultra Sun/Ultra Moon |
| Alolan forms | Sun/Moon, Ultra Sun/Ultra Moon |
| Galarian forms | Sword/Shield |
| Hisuian forms | Scarlet/Violet |
| Paldean forms | Scarlet/Violet |
| Other alternate forms (Rotom, Deoxys, Giratina, etc.) | Any game where they have move data |

Alternate form entries use display names such as `"Mega Venusaur"`, `"Alolan Rattata"`, `"Galarian Meowth"`, `"Giratina (Origin)"`, etc.

## Generation accuracy

The script applies three layers of generation-specific filtering:

1. **Base stats** — PokéAPI always returns current stats. `STAT_CHANGE_LOG` in the script hardcodes the old values for every Pokémon whose stats changed in Gens 6–9 (sourced from [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Base_stats)). For a Gen 5 game, all Gen 6–9 buffs are undone; for a Gen 6 game, Gen 7–9 buffs are undone; and so on.

2. **Abilities** — Each ability's introduction generation is fetched from PokéAPI and cached. Abilities introduced after the game's generation are excluded. This prevents, e.g., Weezing getting Neutralizing Gas (Gen 8) in an X/Y entry.

3. **Alternate forms** — Form types are gated by generation (see table above). A Galarian form will never appear in an X/Y file; Mega Evolutions won't appear in Sword/Shield or later.

## Known limitations

- **Evolution methods** — Only level-up evolutions are captured with a level number. Trade evolutions, item evolutions, friendship evolutions, etc. are stored as `"method": null, "parameter": null`, consistent with the convention used in the existing hand-crafted files.
- **Hidden abilities** — Not included in the `abilities` list, matching the style of the existing Gen 1–5 data.
- **Catch rates** — PokéAPI returns current catch rates. A small number of Pokémon had their catch rate changed across generations; these are not overridden.
- **Move names** — Fetched from PokéAPI's English name field. A small number of move names changed spelling between generations (e.g. "Vise Grip" / "Vice Grip"). The names in the scraped files reflect the current English name.
- **Cosmetic forms** — Purely cosmetic variants (Vivillon wing patterns, Furfrou trims, etc.) are included if PokéAPI has separate move data for them. They share identical stats/types/moves with the base form.
- **Adding future stat changes** — If PokéAPI is updated with new stat changes, add entries to `STAT_CHANGE_LOG` in `scrape_pokedex.py` following the existing pattern.
