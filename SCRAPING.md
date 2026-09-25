# Pokédex Scraping Guide

Scripts for producing the per-game Pokédex files (`pokedex/<game>.js`) for
every mainline game from Red/Blue to Legends: Z-A.

**Two sources, one rule.** Species data (types, abilities, EV yields, catch
rates, items, evolution families …) comes from [PokéAPI](https://pokeapi.co).
Every move list — level-up, TM/HM, tutor, egg, prior-evolution, transfer,
form-change — comes from **Bulbapedia's per-generation learnset pages**, read
from their wikitext, so each list is exactly Bulbapedia's list in Bulbapedia's
order. Base stats are taken from Bulbapedia's species page too (it records
generation-specific values and the Gen I Special stat), with PokéAPI as the
fallback.

---

## Dependencies

- Python **3.10+** with `requests` (`python -m pip install requests`)
- Node + the `electron` package from the Solodex checkout (`../solodex`) for
  the Bulbapedia proxy (see next section)

---

## Bulbapedia is behind Cloudflare — start the proxy first

Bulbapedia answers plain HTTP clients with a 403 "Just a moment…" challenge.
`bulba_proxy.js` opens a hidden Electron window that clears the challenge and
then serves fetches on `http://127.0.0.1:8765`. Run it in its own terminal
before anything that needs uncached pages:

```bash
cd data_objects
..\solodex\node_modules\.bin\electron.cmd bulba_proxy.js        # Windows
../solodex/node_modules/.bin/electron bulba_proxy.js            # macOS/Linux
```

If Cloudflare re-challenges (it does when requests come too fast) the proxy
shows its window so you can click the checkbox, then carries on. All Python
helpers detect the proxy automatically (`BULBA_PROXY` env var overrides the
address) and read from `.scrape_cache_bulbapedia/wikitext/` when a page is
already cached, so re-runs need no network at all.

---

## Scripts

### `scrape_pokedex.py` — the per-game files

```bash
python scrape_pokedex.py                          # every game
python scrape_pokedex.py --game "Platinum"        # one game
python scrape_pokedex.py --diff --game "X and Y"  # scrape to a temp dir and diff
python scrape_pokedex.py --no-cache               # re-fetch everything
python scrape_pokedex.py --output-dir some/dir
```

Game names are the keys of `GAME_CONFIG` (`"Red and Blue"`, `"Yellow"`, …,
`"Scarlet and Violet"`, `"Legends Z-A"`).

The run starts by prefetching every Bulbapedia page the selected games need
through the MediaWiki API (50 titles per request — a full refresh is ~250
requests), then walks PokéAPI's species list. It writes
`scrape_report.json` at the end; read it (see below).

**Runtime:** a full scrape from a warm cache takes ~25 minutes of parsing; a
cold Bulbapedia cache adds ~15 minutes, a cold PokéAPI cache much more.

### `verify_bulbapedia.py` — prove the files match Bulbapedia

```bash
python verify_bulbapedia.py                        # all files in pokedex/
python verify_bulbapedia.py --game sun_moon --show 20
python verify_bulbapedia.py --dir ../solodex/data_objects-main/pokedex
python verify_bulbapedia.py --pokedex-js ../solodex/data_objects-main/pokedex.js
python verify_bulbapedia.py --refresh              # re-fetch pages, then compare
```

Re-derives every entry's lists from the cached wikitext and compares them
field by field (order included), plus base stats. Exit status 1 on any
difference. `--refresh` is how you find out whether Bulbapedia has been
edited since the last scrape.

Matching Bulbapedia is not the same as matching the game. Where Bulbapedia's
own table is wrong (checked against the decompilations, or for Gen 5+ against
PokéAPI and Showdown together), add a cited entry to `learnset_errata.py`.
`bulba_learnsets.get_learnsets` applies it, so the scraper and this verifier
both see the corrected list. Parser mistakes are fixed in `bulba_learnsets.py`
instead.

### `merge_gen1to4_pokedex.py` — the Solodex Gen 1-4 file

Solodex reads Gen 1-4 from a single `pokedex.js` whose stats and other
species fields were extracted from the ROMs (and are checked against the
decompilations by `npm run verify:stats`). This script refreshes only the
learnset fields of that file from the per-game scrape:

```bash
python merge_gen1to4_pokedex.py --old ../solodex/data_objects-main/pokedex.js \
    --new-dir pokedex --out ../solodex/data_objects-main/pokedex.js
```

### `scrape_mega_evolutions.py`

Produces `pokedex/mega_evolution_pokedex.js` (all Mega forms in one file).
Unchanged apart from fetching through the proxy.

### `scrape_tmhm.py`

Maintains `tmhm.js` (TM number → move per generation). Its `--sort-only`
mode is no longer needed: `tm_hm_learnset` already comes out of the scraper
in Bulbapedia's TM order, and Solodex sorts by TM number itself.

---

## Recommended order of operations

```bash
# 1. terminal A
..\solodex\node_modules\.bin\electron.cmd bulba_proxy.js

# 2. terminal B
python scrape_pokedex.py                      # all games -> pokedex/, scrape_report.json
python verify_bulbapedia.py                   # must print OK for every game
python merge_gen1to4_pokedex.py --old ../solodex/data_objects-main/pokedex.js \
    --new-dir pokedex --out ../solodex/data_objects-main/pokedex.js
cp pokedex/*.js ../solodex/data_objects-main/pokedex/
cd ../solodex && npm run verify:stats && npm test
```

---

## Reading `scrape_report.json`

| key | meaning | action |
|---|---|---|
| `pokeapi_fallback` | entries with no Bulbapedia learnset page; lists came from PokéAPI | check the page title; add a name alias if the page exists |
| `bulbapedia_excluded` | PokéAPI has move data for the game but Bulbapedia's page has no table for that form/game — entry dropped | usually right (Deoxys formes, LGPE-only data); investigate if a whole game's worth appears |
| `stat_mismatch` | Bulbapedia's block differs from PokéAPI + `STAT_CHANGE_LOG` | Bulbapedia wins; Gen I differences are the Special stat and expected |
| `no_bulbapedia_stats` | no stat block found for the form/gen; PokéAPI used | check the species page's Base stats headings |
| `form_unmatched` | form had no heading of its own; base table used | expected for Megas, Gmax, Rotom, Castform … |
| `unknown_moves` | move names not present in `moves.js` | a spelling Bulbapedia uses that `MOVE_RENAMES` doesn't map yet |

---

## What the scraper produces

Each output file contains base forms plus every alternate form with its own
stats, types or learnset. Battle-only transformations and cosmetic variants
(Totems, Busted Mimikyu, cap Pikachu, Minior colours, Koraidon/Miraidon
modes, Squawkabilly plumages …) are excluded — see `EXCLUDED_FORM_PATTERNS`.

Display names: `"Mega Venusaur"`, `"Primal Kyogre"`, `"Alolan Raichu"`,
`"Galarian Darmanitan (Zen)"`, `"Paldean Tauros (Combat Breed)"`,
`"Giratina (Origin)"`, `"Venusaur (Gmax)"`.

Level-up entries are `[level, move]` with two sentinels: `0` = learned on
evolution, `-1` = Move Reminder only (Legends: Z-A tables).

Optional fields, present only when non-empty: `transfer_learnset`,
`prior_evolution_learnset`, `form_change_learnset`, `zygarde_cube_learnset`,
`light_ball_egg_learnset`. `learnset_source` is `"bulbapedia"` or
`"pokeapi"`.

## Caching

- `.scrape_cache_api/` — PokéAPI JSON.
- `.scrape_cache_bulbapedia/wikitext/` — Bulbapedia wikitext, one file per
  title (missing pages are cached as a sentinel).
- `.scrape_cache_bulbapedia/*.html` — rendered pages, only used by
  `scrape_mega_evolutions.py`.

Delete a single wikitext file to re-fetch that page, or use `--no-cache` /
`verify_bulbapedia.py --refresh` for everything.
