# Scraping internals & data-correctness mechanisms

Companion to `SCRAPING.md`. That doc is how to *run* the scrapers; this doc is how the scripts *work*, focused on the non-obvious correctness machinery layered on top of PokéAPI. If you're picking this work up later and wondering *why this `if` is here*, this is the document.

The core scrapers are:

- `scrape_pokedex.py` — produces one `pokedex/<game>.js` per game (RB through LZA).
- `scrape_mega_evolutions.py` — produces `pokedex/mega_evolution_pokedex.js`, a single file with all 96 Mega forms. Imports `XY_MEGAS`, `ORAS_MEGAS`, `ZA_MEGAS`, and the ZA Bulbapedia table parsers from itself, which `scrape_pokedex.py` re-imports.

A handful of correctness layers sit on top of PokéAPI's raw responses. Each one exists because PokéAPI is incomplete, inconsistent, or game-mechanic-agnostic in a specific way. They're listed below in roughly the order they execute during a scrape.

---

## 1. Form availability gating

**Function:** `form_valid_for_generation(pokemon_slug, species_slug, game_gen, version_group)` (`scrape_pokedex.py:1054`)

The default-variety Pokémon for a species is always processed. Alternate forms (Megas, Primals, Alolan/Galarian/Hisuian/Paldean, Gigantamax, etc.) are gated by this function. If it returns `False`, the form is skipped entirely.

Decision order (each clause short-circuits):

1. **ZA Megas** (`pokemon_slug in _ZA_MEGA_SLUGS`) — the 48 new mega forms introduced in Legends Z-A (or the Mega Dimension DLC). Returns `True` only if `version_group == "legends-za"`. Even though SV is also Gen 9, ZA megas don't appear in SV.

2. **XY/ORAS Megas** (`pokemon_slug in _MEGA_GEN_RANGE`, populated to `(6, 7)` for every entry in `XY_MEGAS + ORAS_MEGAS`). Returns `True` if `min_gen <= game_gen <= max_gen`, OR if `version_group == "legends-za"`. The LZA exception is because Legends Z-A reintroduces all 48 returning megas alongside its new ones (per Bulbapedia: *"all 48 previously known Mega Evolutions are available, alongside 26 new"*). Without this exception, the per-game LZA file would have only the new megas, missing returning ones like Mega Venusaur.

3. **Gigantamax forms** (`"gmax" in form_suffix`). Returns `True` only if `version_group in GMAX_VERSION_GROUPS`, currently `{"sword-shield"}`. Required because Gigantamax is exclusively a SwSh mechanic — BDSP and Legends Arceus are also Gen 8, but neither has Gigantamax. A purely generation-based rule would incorrectly include Gmax forms in those games.

4. **Regional / transformation forms** — checked via `FORM_GENERATION_RULES`, a list of `(suffix, min_gen, max_gen|None)` tuples checked as substrings of the form suffix:
   - `("alola", 7, None)` — Alolan: Gen 7+
   - `("galar", 8, None)` — Galarian: Gen 8+
   - `("hisui", 8, None)` — Hisuian: Gen 8+ (introduced in LA, not Gen 9 as a casual reading might suggest — they're playable in LA itself)
   - `("paldea", 9, None)` — Paldean: Gen 9+
   - `("primal", 6, 7)` — Primal Reversion: Gen 6–7 only

If a form's suffix matches no rule, it's accepted unconditionally and gets filtered later by move-data availability (see §3 below).

**Why this design:** The "gen-range plus version-group exception" pattern (Megas in LZA, Gmax in SwSh-only) lets us keep simple gen ranges as the primary signal while encoding game-specific mechanics that don't follow gen boundaries. ZA megas being version-group-only (not gen-based) is the cleanest expression of "these only exist in this one game."

**To extend:** Adding a new regional form (e.g. some hypothetical "blueberry" form) means adding one line to `FORM_GENERATION_RULES`. Adding a new game-locked mechanism (like a hypothetical "Gen 10 Z-Power forms only in LZA-2") means a new explicit `if` clause similar to the Gigantamax one — generation rules alone aren't enough.

---

## 2. Historical base-stat overrides

**Functions & data:** `STAT_CHANGE_LOG` (~line 333), `VG_STAT_OVERRIDES` (~line 425), `apply_historical_stats()` (~line 1078), `apply_version_group_stat_overrides()` (~line 1095). Both apply functions are called from `build_entry()` immediately after parsing raw stats.

PokéAPI always returns *current* base stats. Two correction layers:

### Layer A — `STAT_CHANGE_LOG` (inter-generation changes)

Format: `{pokemon_slug: [(changed_in_gen, {stat_name: OLD_value, ...}), ...]}`

For each tuple, if `game_gen < changed_in_gen` we substitute `OLD_value` for the named stats. Multiple tuples per Pokémon stack (Mega Alakazam has both a Gen 7 SpDef change and an inherited Alakazam baseline).

**Important:** Only inter-generation changes belong here, not intra-gen patches. Specifically excluded:
- The four Treasures of Ruin (Wo-Chien, Chien-Pao, Ting-Lu, Chi-Yu) had stat tweaks in SV patch 1.0.1 — these debuted in Gen 9 and don't appear in any earlier game, so a `game_gen < 9` override never fires anyway.
- Hisuian Zorua/Zoroark had buggy stats at SV launch (1.0.0) that were corrected in patch 1.2.0; they had the right stats in Legends Arceus the entire time. Earlier versions of this file had override entries that incorrectly downgraded the LA stats.

If you find yourself wanting to add a Gen-9-or-later patch entry, **don't** — verify it's actually an inter-generation change first by checking [Bulbapedia's category pages](https://bulbapedia.bulbagarden.net/wiki/Category:Pok%C3%A9mon_whose_base_stats_changed_in_Generation_IX) and Serebii's per-generation Updated Stats pages.

### Layer B — `VG_STAT_OVERRIDES` (game-specific compensations)

Format: `{pokemon_slug: {version_group: {stat_name: NEW_value, ...}}}`

Used when a specific game changes stats to compensate for a missing mechanic, not because the species was rebalanced. Currently only Legends Z-A entries:
- Meditite, Medicham, Mega Medicham, Mega Mawile — get bonus Attack to compensate for the absent abilities mechanic (Pure Power / Huge Power don't activate in LZA).

Source: [Serebii LZA Updated Stats](https://www.serebii.net/legendsz-a/updatedstats.shtml).

Apply order matters: `apply_historical_stats` runs first, then `apply_version_group_stat_overrides` overwrites. A Pokémon could in principle have both (e.g. a hypothetical `mega-something` entry with Gen-7 SpDef history *and* an LZA-only override). Today no Pokémon needs both, but the order is defensive.

**To extend:** New inter-gen change → add to `STAT_CHANGE_LOG`. New LA/LZA-only compensation → add to `VG_STAT_OVERRIDES`. Cherrim Sunshine Form's LA-only buff (Atk +30, SpD +39) is *not* in `VG_STAT_OVERRIDES` because PokéAPI exposes it only via the `pokemon-form` endpoint, not as a `pokemon-species` variety, so the species-iteration loop never sees it. Adding it would require a separate one-off pokemon-form fetch.

---

## 3. Move-data availability filter

After `parse_moves(pokemon_data, version_group, ...)`, if the result is *completely* empty (no level-up, TM, tutor, or egg moves), `build_entry` returns `None` and the form is skipped. This is what filters out species that simply don't exist in a given game — e.g. Bulbasaur is excluded from Black/White because PokéAPI has no `black-white` move entries for it.

**Important:** This filter runs *after* form gating (§1) and *after* fallbacks (§4). Form gating answers "should we even consider this form for this game?"; this filter answers "does PokéAPI agree that this Pokémon has data here?"

The filter is also why the form-gating rules are intentionally permissive: most cosmetic or battle-only forms (Pikachu cap forms, Mimikyu Busted, etc.) get filtered automatically by PokéAPI not having move data for them in inappropriate games.

---

## 4. Move-data fallback chain

**Location:** `build_entry()` lines ~1457 onward.

When `parse_moves(pokemon_data, version_group)` returns empty, the fallback ladder kicks in. The order is deliberate.

### 4a. Same-VG base-form fallback (Mega/Primal/Gmax)

`is_shared_learnset_form = "-mega" in form_slug or "-primal" in form_slug or "-gmax" in form_slug`

If the form has no moves but qualifies, parse `fallback_moves_data` (the base species' Pokémon data) for the same VG. This is correct because Mega/Primal/Gmax forms share their base form's movepool — PokéAPI just doesn't always populate that explicitly for the form variety. This is how `Pikachu (Gmax)` ends up with Pikachu's full SwSh learnset.

### 4b. Legends Z-A: Bulbapedia ZA learnset

PokéAPI has no `legends-za` data at all. If the primary parse and 4a fallback both came back empty *and* `version_group == "legends-za"`, we call `scrape_za_learnset(species_name)` (Bulbapedia, see §6).

Two important consequences are deliberately *not* propagated from fallback VGs for LZA:

- **No egg-move fallback for LZA.** Per Bulbapedia, *"Abilities, breeding, and Eggs are not featured in [LZA]."* `egg_moves`, `light_ball_egg_learnset`, and `zygarde_cube_learnset` stay empty. This was a real bug for a release — the loop was pulling SV egg moves into LZA and 246/529 LZA entries had eggs they shouldn't.
- **Form-change moves *are* pulled from a fallback VG.** Rotom's signature appliance moves (Overheat, Hydro Pump, Blizzard, Air Slash, Leaf Storm), Mega Evolution form-change moves, etc. are tied to the form, not to a particular game's breeding mechanic, so we walk `fallback_version_groups` and take the first non-empty `form_change` we find.

Sets a `bulbapedia_za_sourced` flag that's read later (§5).

### 4c. Cross-VG fallback (everything except legends-za)

If PokéAPI has nothing for the requested VG and we're *not* scraping LZA, walk `fallback_version_groups` looking for any VG that has moves. Only configured for LZA itself (currently — for past coverage gaps, the configured fallbacks were for LZA anyway). The `version_group != "legends-za"` guard ensures that a Pokémon excluded from LZA via the Bulbapedia scrape doesn't get rescued by inheriting (e.g.) SV's data and producing a phantom LZA entry.

---

## 5. Bulbapedia ZA learnset scraper

**Location:** `_parse_za_level_up_table`, `_parse_za_tm_table`, `_find_za_table_in_section` in `scrape_mega_evolutions.py`. `scrape_za_learnset()` in `scrape_pokedex.py` is a thin wrapper.

LZA-specific because PokéAPI doesn't carry it. Bulbapedia's species page (e.g. `/Bellsprout_(Pokémon)`) has separate "By leveling up" / "By TM" sections each containing one or more `<table class="sortable">` blocks. Combined SV+ZA pages stack two tables vertically with `<p>SV</p>` and `<p>ZA</p>` label paragraphs between them.

`_find_za_table_in_section(soup, section_id)` walks siblings of the section heading and:
1. Tracks the most recent label paragraph (looks for the green ZA badge `style="...31CA56..."` or the red SV badge `style="...F34134..."`).
2. Collects each sortable table found, with its label.
3. Priority 1: returns the first table explicitly labeled `"za"`.
4. Priority 2 (for ZA-only Pokémon with no SV table): returns the first unlabeled table whose columns include "CD" (the unique LZA cooldown column header — see `_is_za_format_table`).

The level-up table has columns `Learn | Plus | Move | Type | Cat. | Power | CD`:
- `Learn` (column 0) is the level we extract. Numeric levels become themselves; `"Evo."` (auto-learned at evolution) and `"Rem."` (Move-Reminder-only) both become **level 0**, matching the convention used elsewhere in the codebase: Move-Reminder-accessible moves belong in `level_up_learnset`, *not* `tutor_learnset`. (Compare SwSh Espeon, where pre-evo Eevee moves like Take Down/Charm appear at L1 in `level_up_learnset` rather than as tutor entries.)
- `Plus` (column 1) is the level the move acquires the [Plus Move](https://bulbapedia.bulbagarden.net/wiki/Plus_Move) mark — an unrelated move-enhancement mechanic. We **do not** read this column; if you do, your levels will be ~3 higher than expected for most moves.

The TM table reads the move name from the third `<td>`. There is no separate move-tutor table for LZA — Move Reminder is the only tutor-like mechanic, and it's already absorbed into `level_up_learnset` via `Rem.` rows above.

### Skipping the level-1 reorder for ZA-sourced data

Normally `reorder_level1_moves` consults Bulbapedia's per-generation learnset page to fix the order of L1 moves (PokéAPI's L1 ordering is unreliable). When `bulbapedia_za_sourced == True`, we skip this pass — the ZA scrape already returned moves in Bulbapedia's correct order, and re-running the reorder would land on the SV table on combined pages and shuffle ZA-only moves to the end. The flag is checked at the call site of `reorder_level1_moves` in `build_entry`.

---

## 6. Egg-move inheritance from pre-evolutions

**Function:** `collect_inherited_egg_moves(species_data, version_group, use_cache)` in `scrape_pokedex.py:1378`. Same logic re-implemented in `scrape_mega_evolutions.py` for the Mega file.

**Why:** PokéAPI lists `egg` learn-method moves only on the *base* form of an evolution family for Gen 1-7. So Bellsprout's Platinum egg moves come back populated, but Weepinbell's and Victreebel's come back empty even though all three can know those moves in-game (the egg hatches as Bellsprout with the move and retains it through evolution).

**How:** Walks back through `species_data["evolves_from_species"]` chain, fetches each pre-evolution species + its default variety's Pokémon data, and collects every move with `move_learn_method = "egg"` for the target version group. Returns a list of move names, deduped, in walk order.

In `build_entry`, the result is unioned with `egg_moves` from the species itself (so SV's expanded egg-move lists for evolved forms — which include extras like Stockpile/Spit Up/Swallow/Gastro Acid/Power Whip for Victreebel — are preserved).

**Skipped for breeding-less games:** `NO_BREEDING_VERSION_GROUPS = {"legends-arceus", "legends-za"}` returns immediately. Both games have no breeding mechanic per Bulbapedia. Red/Blue/Yellow are also breeding-less but have `version_group` slugs that include `"red-blue"` and `"yellow"` — there's no "evolves_from_species" data populated for any species there either, so the function naturally returns nothing without needing to be in the set.

**Edge cases handled:**
- Cycle protection via `visited` set (defensive — shouldn't happen in real evolution chains).
- Species with no `evolves_from_species` (base forms): early return with `[]`.
- Species without a default variety: skip but continue walking up the chain.

**Coverage check:** before this fix, only base-form Pokémon had populated `egg_moves` lists. After: 415/508 Plt entries, 415/508 HGSS entries, 547/673 B2W2 entries, etc. The remaining gaps are species with legitimately empty egg-move lists (Magikarp, Ditto, undiscovered-egg-group legendaries, baby-only forms).

---

## 7. Legends: Arceus tutor moves from Bulbapedia

**Function:** `scrape_la_tutor_moves(species_name, use_cache)` in `scrape_pokedex.py:967`.

**Why:** PokéAPI's `legends-arceus` `tutor` learn-method data is sparsely populated — about 10% of LA Pokémon have entries. Wyrdeer, Kleavor, Stantler, Pikachu, Bidoof, etc. all came back with `tutor_learnset: []` despite Zisu (the in-village Move Tutor NPC) teaching them many moves in-game.

**How:** Fetches `<species>_(Pokémon)/Generation_VIII_learnset` from Bulbapedia, finds the `By_tutoring` section, walks every sortable table inside it (helper `_collect_section_tables`), and filters rows whose first `<th>` cell has a link reading `"LA"`. The Game column is structured as `<th>` (not `<td>`), and the table body uses `<td>` for Move/Type/Power/etc. — so reading `tds[0]` after filtering on `th` cleanly gets the move name. Wired into `build_entry` for `version_group == "legends-arceus"`, unioning with whatever PokéAPI gave us.

### Two layout variants `_collect_section_tables` handles

Bulbapedia returns one of two layouts for the same content, apparently inconsistently across pages:

- **Flat layout:** the section heading H4 is followed directly by sibling `<p>` and `<table>` elements, terminated by the next heading.
- **Sectioned layout:** the H4 is followed by a single `<section class="mf-section-N collapsible-block">` element containing the section's tables and paragraphs.

This was caught only after I noticed Kleavor returning 0 tutor moves while Wyrdeer returned 16 — both Apr-2 cache files, same-shaped page in the rendered Bulbapedia view. Diff'ing the cached HTML revealed Kleavor was sectioned and Wyrdeer was flat. The helper now yields tables from either layout: walks H4 siblings, returns any direct-child `<table>` and any `<table>` that's a direct child of a sibling `<section>`.

**Why not always-fresh fetches?** Cached HTML is a hard requirement for fast iteration (`.scrape_cache_bulbapedia/` saves you hours). The dual-layout handling means we don't need to re-fetch even when caches are mixed. If you ever need to force a re-fetch on a page that looks wrong, delete the specific file under `.scrape_cache_bulbapedia/` and re-run that game.

### What remains empty after this fix

7 LA Pokémon legitimately have no tutor moves — Magikarp, Unown, Wurmple, Silcoon, Cascoon, Kricketot, Burmy. All confirmed via Bulbapedia: each species' Gen VIII page reads *"This Pokémon learns no moves by tutoring."*

---

## 7.5. TM/HM sorting in `scrape_tmhm.py`

`scrape_pokedex.py` emits `tm_hm_learnset` in PokéAPI's insertion order, which has nothing to do with in-game TM number. `scrape_tmhm.py --sort-only` (or the default full run) re-sorts every per-game pokedex file's `tm_hm_learnset` to canonical in-game order: TM01, TM02, …, then TR (Gen 8 only), then HM01, HM02, ….

### Per-version-group sort source

`POKEDEX_FILE_TO_VG` maps each pokedex filename to its PokéAPI `version_group` slug. For each file, the sorter:

1. Filters all PokéAPI machine records to that VG.
2. Sorts by `(prefix_order, number)` where `prefix_order = TM=0, TR=1, HM=2`.
3. Builds a `{move_name: index}` map.
4. Re-sorts each Pokémon's `tm_hm_learnset` using the map; unknown moves go to the end.

**Why per-VG and not per-gen.** Within a single generation, HMs can differ between games. HGSS uses HM05 Whirlpool while DP/Plt use HM05 Defog; FRLG omits HM08 Dive that RS/Em have. The Gen-level entry in `tmhm.js` only records one of those, so per-VG fetching gets each game right.

### `SORT_VG_ALIAS` — for incomplete PokéAPI VGs

`SORT_VG_ALIAS` redirects sorting to a different VG when the primary's machine data is too sparse to use directly. Currently:

```python
SORT_VG_ALIAS = {
    "brilliant-diamond-shining-pearl": "diamond-pearl",
}
```

PokéAPI has only **17 of ~100** BDSP machines populated. The 17 it does have are correctly numbered, but interleaved with HMs in a way that makes them useless as a sort base on their own. BDSP's TM list mostly overlaps with DP's (it's a remake), so DP's complete ordering produces a sensible result. Caveat: a small number of TMs were re-purposed in BDSP (e.g. BDSP TM10 = Work Up, DP TM10 = Hidden Power), so BDSP-specific moves end up at the tail of the list rather than at their correct in-game position. Fixing this fully would require scraping BDSP's TM table from Bulbapedia.

### What's not sorted

- `legends_arceus.js` — LA has no traditional TM/HM mechanic.
- `legends_za.js` — TM list comes from the LZA Bulbapedia table which is already in correct order during scraping.
- `mega_evolution_pokedex.js` — not a per-game file.

### Running the sorter

```bash
python scrape_tmhm.py --sort-only    # sort only, no API fetching for new gens
python scrape_tmhm.py                # update tmhm.js with any new gens then sort
```

The first run pulls ~2200 machine records (~5–10 minutes); subsequent runs are instant from the cache. If a re-scrape of `scrape_pokedex.py` outputs disturbed an order, just re-run `--sort-only`.

---

## 8. Growth-rate slug map (a small one — easy to overlook)

**Data:** `GROWTH_RATE_MAP` (~line 266 in `scrape_pokedex.py`).

PokéAPI uses descriptive curve-pattern slugs for two of the six growth rates that were initially missing from the map:

| PokéAPI slug | Our value (in-game name) |
|---|---|
| `slow-then-very-fast` | `Erratic` |
| `fast-then-very-slow` | `Fluctuating` |

The defensive aliases `"erratic"` and `"fluctuating"` are kept in the map in case PokéAPI renames slugs in the future, but they're dead today.

Without the descriptive-slug entries, ~86 species (Magikarp, Hariyama, Nincada, Volbeat, Wailmer, Shroomish, Caterpie line, etc.) had `growth_rate: null` in every output file. Volbeat is Erratic and Illumise is Fluctuating despite being gender counterparts — that's a real game-data quirk, not a bug.

---

## 9. Where to look when something's wrong

| Symptom | Most likely cause | First file to read |
|---|---|---|
| A Pokémon is missing from a game where it should appear | `form_valid_for_generation` rejection, or PokéAPI has no move data for that VG | `form_valid_for_generation`, then `parse_moves` |
| A Pokémon has wrong stats for an old game | `STAT_CHANGE_LOG` missing/wrong entry, or `VG_STAT_OVERRIDES` interfering | `STAT_CHANGE_LOG`, `apply_historical_stats` |
| A Pokémon has wrong stats only in LA or LZA | game-specific compensation needed (or wrongly applied) | `VG_STAT_OVERRIDES`, `apply_version_group_stat_overrides` |
| Evolved Pokémon has empty egg moves in Gen 1-7 | inheritance walk failed or species lacks `evolves_from_species` | `collect_inherited_egg_moves` |
| LZA entry has egg moves it shouldn't | LZA fallback chain regression (egg moves should never be pulled for LZA) | `build_entry`, the `version_group == "legends-za"` block |
| LA Pokémon has 0 tutor moves but Bulbapedia shows them | `_collect_section_tables` not handling the page's layout, or cached HTML is from a layout variant we don't support | `scrape_la_tutor_moves`, `_collect_section_tables` |
| Mega form has wrong learnset in a per-game file | `is_shared_learnset_form` not matching, or fallback chain missing | `build_entry` line ~1465 |
| LZA mega missing | `_MEGA_GEN_RANGE` LZA exception or `_ZA_MEGA_SLUGS` membership | `form_valid_for_generation` |
| Growth rate is `null` | `GROWTH_RATE_MAP` doesn't recognize the PokéAPI slug | `GROWTH_RATE_MAP` |
| `tm_hm_learnset` is in odd order (PokéAPI insertion order) for any game | `scrape_tmhm.py --sort-only` was never run after `scrape_pokedex.py` | run `python scrape_tmhm.py --sort-only` |
| One game's `tm_hm_learnset` ordering looks wrong despite running the sorter | `POKEDEX_FILE_TO_VG` missing entry, or PokéAPI machine data for that VG is too sparse | `scrape_tmhm.py:POKEDEX_FILE_TO_VG`, possibly add a `SORT_VG_ALIAS` entry |

---

## 10. Cache invalidation

Two caches:

- `.scrape_cache_api/` — PokéAPI JSON responses, keyed by URL with non-alphanumeric chars replaced.
- `.scrape_cache_bulbapedia/` — Bulbapedia HTML, same key scheme.

Both are checked in by default? **No.** They're large and meant to be local. If they get stale (e.g. PokéAPI updates, Bulbapedia adds new content), delete the specific files affected — or pass `--no-cache` for a full refetch.

The Bulbapedia cache is the one most likely to drift, especially for actively-edited LZA pages. If you see a Pokémon with suspiciously empty data in LZA or with the LA tutor list, delete `.scrape_cache_bulbapedia/https___*<Species>*.html` and re-run.

---

## 11. PokéAPI gaps we don't paper over

Limitations acknowledged in the code but not patched:

1. **DP move-tutor data is entirely absent in PokéAPI.** All `diamond-pearl` `tutor` queries return `[]`. We don't currently fall back to Bulbapedia for this. If you want it, the implementation pattern would mirror `scrape_la_tutor_moves` — find the `By_tutoring` section on the Gen IV learnset page, filter rows for the `DP` game badge.
2. **New ZA mega abilities (Mega Raichu X/Y, Mega Clefable, etc.).** PokéAPI returns `abilities: []` for these. Bulbapedia has the data (Galvanize, Pixilate, etc.) but we'd need a per-mega ability override table — a lot of manual data entry.
3. **Cherrim Sunshine Form's LA stats.** PokéAPI exposes Cherrim only as one variety (the Overcast form); the Sunshine Form's LA-only stat buff is on the `pokemon-form` endpoint, not `pokemon-species` varieties. Adding it would require a separate one-off fetch and a dedicated entry slug.
4. **Catch-rate history.** A few species had catch-rate changes across generations; PokéAPI returns the current value. No override table.
5. **Move-name spelling drift.** PokéAPI returns the *current* English name. "Vise Grip" vs. "Vice Grip", "DynamicPunch" vs. "Dynamic Punch", etc. across older games.
6. **Base happiness Gen-8 reduction.** Many species had base-friendship lowered from 70 to 50 in SwSh+. PokéAPI returns the current value (still 70 for many — possibly outdated, possibly correct depending on source — not currently overridden either way).

---

## 12. Verification commands

A few one-liners that have been useful for spot-checking. All assume `cd` into the repo root and Python 3.10+.

**Pokémon's data across all games:**
```bash
python -c "
import json, os
for f in sorted(os.listdir('pokedex')):
    if f.endswith('.js') and 'mega_evol' not in f:
        d = json.loads(open(f'pokedex/{f}',encoding='utf-8').read().replace('export const pokedex = ',''))
        if 'Victreebel' in d:
            e = d['Victreebel']
            print(f'{f}: tutor={len(e[\"tutor_learnset\"])}, eggs={len(e[\"egg_moves\"])}, type={e[\"type_1\"]}/{e[\"type_2\"]}')
"
```

**Form-count sanity check across all games:**
```bash
python -c "
import json, os
for f in sorted(os.listdir('pokedex')):
    if not f.endswith('.js') or 'mega_evol' in f: continue
    d = json.loads(open(f'pokedex/{f}',encoding='utf-8').read().replace('export const pokedex = ',''))
    print(f'{f}: total={len(d)} mega={sum(1 for k in d if k.startswith(\"Mega \"))} gmax={sum(1 for k in d if \"(Gmax)\" in k)} hisuian={sum(1 for k in d if k.startswith(\"Hisuian \"))}')
"
```

**Find entries where a field is unexpectedly empty:**
```bash
python -c "
import json
d = json.loads(open('pokedex/legends_arceus.js',encoding='utf-8').read().replace('export const pokedex = ',''))
for k, v in d.items():
    if not v.get('tutor_learnset'):
        print(k)
"
```

**Diff against PokéAPI directly for a single Pokémon:**
```bash
python -c "
import json, glob
d = json.load(open(glob.glob('.scrape_cache_api/*pokemon_71_.json')[0]))
for vg in ['platinum','heartgold-soulsilver','black-2-white-2','x-y','sun-moon']:
    eggs = [m['move']['name'] for m in d['moves'] for vgd in m['version_group_details']
            if vgd['version_group']['name']==vg and vgd['move_learn_method']['name']=='egg']
    print(f'{vg}: PokeAPI egg moves for Victreebel: {eggs}')
"
```

---

## 13. Mental model for adding a new game

If a new core Pokémon game ships and you need to add it:

1. Add an entry to `GAME_CONFIG` with `filename`, `version_group` (PokéAPI's slug for it), `versions` (list — for held-item rarity filtering), and `generation`.
2. Decide which existing forms it should include — if it's a Gen 9 game like LZA-2, you may need new entries in `FORM_GENERATION_RULES` (or a new explicit `version_group` exception in `form_valid_for_generation`, like Gigantamax has).
3. If the game has any LA/LZA-style stat compensations, add them to `VG_STAT_OVERRIDES`.
4. If the game has a different breeding/tutor mechanic, decide what the right output schema is — current convention: anything Move-Reminder-accessible goes in `level_up_learnset` at L0; only NPC-with-resource tutors go in `tutor_learnset`. Egg moves only when the game has actual breeding (otherwise skip via `NO_BREEDING_VERSION_GROUPS`).
5. If PokéAPI doesn't have data for the game (the LZA case), wire in a Bulbapedia fallback in `build_entry` analogous to the existing `if version_group == "legends-za":` block. Implement the parser in `scrape_mega_evolutions.py` so both scrapers can share it.
6. Run `python scrape_pokedex.py --game "<New Game Name>"`, spot-check one or two known Pokémon against Bulbapedia/Serebii, then run the full scrape.

---

## 14. Things I considered but didn't do

These are deliberately *not* implemented — listed so a future maintainer doesn't reinvent the same idea and waste time:

- **Deduping pre-evolution moves from `level_up_learnset`.** In Gen 1-7, evolved Pokémon's level-up tables include the pre-evolution's moves at their original learning levels (Ivysaur RB has Leech Seed at both L1 *and* L7). This is in-game-correct data, confirmed against Bulbapedia. Don't strip it — a previous version of the audit did, and it deleted real game data. The double-listings look like duplicates but aren't.
- **Routing LZA's `Rem.` moves to `tutor_learnset`.** They go in `level_up_learnset` at L0. The rationale is consistency with how older games represent Move-Reminder-accessible inherited moves (SwSh Espeon has Eevee's Take Down/Charm/etc. at L1 in `level_up_learnset`, not in `tutor_learnset`). `tutor_learnset` is reserved for traditional Move Tutor NPCs — BW2/USUM/ORAS shopkeepers, LA's Zisu — that don't exist in LZA. (See git history if you want the brief saga where this was wrong.)
- **Adding XY/ORAS Mega abilities to mega_evolution_pokedex.js manually.** Possible but tedious; would be a hardcoded `MEGA_ABILITY_OVERRIDES = {"raichu-mega-x": "Galvanize", ...}` table fed in just before serialization. Not done — wait for PokéAPI to fill in the data.
