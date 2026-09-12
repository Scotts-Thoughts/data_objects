# Scraping internals & data-correctness mechanisms

Companion to `SCRAPING.md`. That doc is how to *run* the scrapers; this doc
is how they *work* — what each correctness layer is for and where to look
when an entry is wrong.

Modules:

- `bulba_fetch.py` — Bulbapedia transport: proxy detection, per-title
  wikitext cache, batched MediaWiki API prefetch.
- `bulba_learnsets.py` — wikitext learnset parser (the heart of the scrape).
- `bulba_stats.py` — base-stat blocks from species pages.
- `scrape_pokedex.py` — PokéAPI species walk + per-game file assembly.
- `verify_bulbapedia.py` — independent re-derivation and comparison.
- `merge_gen1to4_pokedex.py` — learnset refresh of Solodex's Gen 1-4 file.
- `bulba_proxy.js` — Electron process that clears Cloudflare.

---

## 1. Why wikitext, not HTML

The rendered learnset tables lose information: game restrictions are colour
swatches, per-game level columns are unlabeled when the games agree, and the
page layout differs between species. The wikitext is a list of
`{{learnlist/…}}` template calls whose positional parameters are documented
in the template sources. `ROW_SPECS` in `bulba_learnsets.py` records, per
template, which parameter is the move, which are level columns, which are
tutor availability flags and which games the template can describe.
`python bulba_learnsets.py --check-templates` fetches the live template
sources and confirms the move parameter and flag parameters still match.

Page shape handled by `parse_page`:

```
[==== Game group ====]              Gen VII only: "Sun, Moon, USUM" vs "Let's Go"
  ==== By leveling up ====          category (CATEGORY_HEADINGS)
    [===== Alolan Vulpix =====]     form heading; may carry {{sup/4|PtHGSS}}
      [{{gameabbrev8|SwSh}}]        label(s): the next table is for these games
      {{learnlist/levelh/7|…|SM|USUM}}   header; trailing params name level columns
      {{learnlist/levelVII|1|1|Tackle|…}} rows
      {{learnlist/levelf/7|…}}      footer
```

Generation IX: the `/Generation_IX_learnset` subpage is used when it exists,
otherwise the `===Learnset===` section of the species page, where
`{{gameabbrev9|SV}}` / `{{gameabbrev9|ZA}}` labels and the `level9` vs
`levelZA` templates separate Scarlet/Violet from Legends: Z-A.

## 2. Selecting rows for one game

`select_learnsets(page, game, descriptor)`:

1. **Tables** — pick the category's tables under the heading whose words
   contain the form descriptor (`descriptor_for("Alolan Vulpix", "Vulpix")`
   → `{alolan}`); if none, a heading whose words are a subset of the
   descriptor ("Galarian Darmanitan" for "Galarian Darmanitan (Zen)"); else
   the base (unlabeled / first) table. Megas, Gmax, Rotom appliances,
   Castform, size forms … share the base table and are reported as
   `form_unmatched` — that is expected.
2. **Table applicability** — a form heading marked `{{sup/4|PtHGSS}}` only
   applies to those games; a table labeled `{{gameabbrev8|BDSP}}` only to
   BDSP; templates carry an `only` set (`level8`/`tm8` → SwSh+BDSP,
   `levelLA`/`tutorPLA` → LA, `level9`/`tm9`/`breed9` → SV, `levelZA`/`tmZA`
   → ZA); an unlabeled table applies to every game the page's availability
   sentence names ("X is available in {{pkmn|Sword and Shield}} and …").
3. **Rows** — a row marked `{{sup/6|XY}}`, `{{sup/7|USUM}}` or a bare
   `HGSS`/`PtHGSS`/`DPPt` parameter is restricted to those games
   (`expand_marker`, gen-aware because "S" means Sapphire, Sun or Scarlet
   depending on the page). Tutor rows carry yes/no flags per game
   (`tutor4`: DP, Pt, HGSS; `tutor8`: SwSh, SwSh-DLC, BDSP …). Two-column
   level templates (`levelI`, `levelII`, `levelIII`, `levelIVs`,
   `levelIVj`, `levelV`, `levelVI`, `levelVII`) hold one level per game
   group; the header names the columns (`RGB|Y`, `DP|PtHGSS`) or the
   template's default order applies. `N/A` = not learned in that game.
4. **Order** — rows keep Bulbapedia's order; the level-up list is then
   stable-sorted by the chosen game's level, so equal levels stay in page
   order (this is what makes the Move-Reminder split in Solodex right).

Level values: integers, `Evo.` → `0`, `Rem.` → `-1`, `{{tt|Evo.|…}}`
wrappers are unwrapped.

`found` is True when at least one level-up row applies. The scraper treats
`found == False` on an existing page as "not in this game" (Deoxys Normal
Forme in FireRed, Sky Forme Shaymin in Diamond, a Pokémon whose Gen VIII page
is just `{{learnlist/MoveNA}}`).

## 3. Presence rules in `build_entry`

| Bulbapedia page | Bulbapedia `found` | PokéAPI has moves for the VG | result |
|---|---|---|---|
| yes | yes | yes | entry, lists from Bulbapedia |
| yes | yes | no | skipped — the shared base table also "applies" to forms the game lacks (an Alolan form in BDSP); PokéAPI breaks the tie |
| yes | yes | (VG has no PokéAPI data: Legends Z-A) | entry, Bulbapedia only |
| yes | no | any | skipped, logged as `bulbapedia_excluded` |
| no | — | yes | entry from PokéAPI, logged as `pokeapi_fallback` |
| no | — | no | skipped |

Battle-only and cosmetic PokéAPI varieties never reach this point
(`EXCLUDED_FORM_PATTERNS`); Mega/Primal/Gmax/regional forms are gated by
generation and version group first (`form_valid_for_generation`).

## 4. Move-name normalisation

Bulbapedia spells moves the way the generation did (`SolarBeam`,
`Faint Attack`, `Hi Jump Kick`, `Sand-Attack`); `MOVE_RENAMES` maps every
historical spelling onto the modern one used by `moves.js`, and possessives
get the typographic apostrophe (`King’s Shield`) that `moves.js` and PokéAPI
use. Every scraped name is checked against `moves.js` +
`moves_gen6_9.js`; anything unknown lands in `scrape_report.json` under
`unknown_moves` — extend `MOVE_RENAMES` when that happens.

## 5. Base stats

`bulba_stats.parse_stats` reads the `====Base stats====` section of the
species page: `{{Stats}}` / `{{BaseStats}}` / `{{BaseStats with RBY}}`
blocks under optional form headings ("Blade Forme", "Mega Alakazam",
"Small Variety") and generation-range headings ("Generations VI-VII",
"Generation I to V", "Generation VIII onward"), game-scoped headings
("Legends: Arceus"), patch-version headings ("Version 1.0.1+") and
side-series headings (XD, Colosseum — skipped).

`lookup_stats(species, descriptor, gen, game_tag)` picks the block whose
form words best overlap the descriptor (`FORM_SYNONYMS` maps "Jumbo" →
"super", "Ice Rider" → "ice", "Galar" → "galarian" …), then prefers, in
order: a block scoped to the game, a block whose generation range covers
the game, the latest range before it, the most recent patch version.
Generation I entries use the `Special=` value for both special stats.

The scraper uses the Bulbapedia block when one is found (`stat_mismatch` in
the report lists where it disagreed with PokéAPI + `STAT_CHANGE_LOG`) and
PokéAPI otherwise. `VG_STAT_OVERRIDES` (Legends: Z-A ability
compensations) are applied last either way. `STAT_CHANGE_LOG` is now only a
fallback, but keep it correct (Aegislash Blade: Atk/SpA 150 → 140 in Gen
VIII).

## 6. Forms

A PokéAPI variety becomes an entry when it differs from the base form in
stats, types or learnset (or is an established named form). `EXCLUDED_FORM_PATTERNS`
lists the rest. `derive_form_display_name` produces the display names
Solodex classifies with `src/renderer/src/data/forms.ts`:

- `Mega X` / `Mega X Y` / `Primal X` / `X (Mega Z)`
- `Alolan X`, `Galarian X (Zen)`, `Paldean Tauros (Combat Breed)`
- `X (Origin)`, `X (Small)`, `X (Female)`, `X (Gmax)`, `Minior (Core)`

Adding a form: if PokéAPI lists it as a variety it appears automatically;
give it a sprite id in Solodex's `formSprites.ts`. If it should not appear,
add a pattern. If Bulbapedia names it differently from our descriptor, add a
`FORM_SYNONYMS` entry (stats) — learnset headings are matched on shared
words and rarely need help.

## 7. Where to look when something's wrong

| Symptom | First place to look |
|---|---|
| Move list differs from Bulbapedia | `python bulba_learnsets.py "<Species>" --game "<Game>" --form "<display name>" --dump-tables` — shows which tables were picked and why |
| A form got the base form's moves | the page's headings vs `descriptor_for()`; `form_unmatched` in the report |
| A Pokémon is missing from a game | `bulbapedia_excluded` in the report, then `applies_to()` (labels / availability sentence) |
| Wrong stats | `python bulba_stats.py "<Species>"` lists every block with its form words and generation range |
| A move name is misspelled | `unknown_moves` in the report → `MOVE_RENAMES` |
| Everything 403s | the proxy is not running, or Cloudflare wants a click in its window |
| A template changed on Bulbapedia | `python bulba_learnsets.py --check-templates` |

## 8. Gen 1-4 and Solodex

Solodex's `pokedex.js` keeps ROM-derived species fields for Gen 1-4 (its
base stats are verified against the decomps by `npm run verify:stats`).
`merge_gen1to4_pokedex.py` copies only the learnset fields from the
per-game scrape into it, drops entries Bulbapedia says are not in the game,
and adds forms the old file never had. Verify the merged file with
`python verify_bulbapedia.py --pokedex-js ../solodex/data_objects-main/pokedex.js`.
