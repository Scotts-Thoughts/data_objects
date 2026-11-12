#!/usr/bin/python3
"""
Wild-encounter generator built from the original game data (stdlib only).

Writes, per game, the same two files scrape_encounters.py (PokéAPI) used to write:
    encounters/<game>.js             location -> method -> [slot entries]
    encounters/<game>_by_pokemon.js  species  -> [records]   (exact inversion)

Inputs (all read-only)
----------------------
Gen 1  pret pokered / pokeyellow     /a/Cygwin/home/scott/pokered, pokeyellow
       data/wild/grass_water.asm, data/wild/maps/*.asm, data/wild/good_rod.asm,
       data/wild/super_rod.asm, constants/map_constants.asm
Gen 2  pret pokegold / pokecrystal   /a/Cygwin/home/scott/pokegold, pokecrystal
       data/wild/{johto,kanto}_{grass,water}.asm, swarm_{grass,water}.asm,
       fish.asm, treemons.asm, treemon_maps.asm, bug_contest_mons.asm,
       data/maps/{maps,attributes,landmarks,blocks}.asm, data/tilesets/*_collision.asm
Gen 3  pret pokeruby / pokeemerald / pokefirered (/a/decomps/...)
       src/data/wild_encounters.json, data/maps/*/map.json
Gen 4  pret pokeplatinum  res/field/encounters/*.json + map headers
       pret pokeheartgold files/fielddata/encountdata/{g,s}_enc_data.csv,
                          files/arc/headbutt.json
       Diamond/Pearl: original ROMs (no decomp), fielddata/encountdata/{d,p}_enc_data.narc
       files/data/mushi/mushi_encount.csv (Bug-Catching Contest)
Gen 5  original ROMs (5-Black.nds ...), encounter NARC a/1/2/6 (BW) / a/1/2/7 (B2W2)
       -> helper module generate_encounters_gen5.py (details in its docstring)
Gen 6-7 original decrypted 3DS ROMs (6-X.3ds ... 7-Ultra Moon.3ds)
       -> helper module generate_encounters_gen67.py (details in its docstring)
ROMs live in /a/Dropbox/stp-projects/programs/roms/originals (POKEMON_ROM_DIR).
The local pokecrystal checkout carries non-vanilla commits; set POKECRYSTAL_ROOT
to a clean upstream tree (its wild data is identical, so output is unchanged).
Non-wild one-off encounters (gifts, eggs, static/legendary encounters, roamers,
trades, Island Scan, Poké Flute / Squirt Bottle / Devon Scope etc.) are not
encounter-table data; they are taken from the PokéAPI response cache
(.scrape_cache_api/, gitignored, filled by scrape_encounters.py) with locations
renamed to the in-game names (PKAPI_AREA_NAMES / PKAPI_FIXES below). For those
methods chance is always 100 ("one fixed encounter").

Output conventions (documented in the README / audit report)
------------------------------------------------------------
* Slot entry: {pokemon, min_level, max_level, chance[, version][, time][, season]}
  - chance: integer % of that method's table (identical slots are summed).
  - version: present only when the entry exists in just one version of the pair
    (e.g. "Red"); absent = both versions.
  - time: list of "Morning"/"Day"/"Night" when not all times of day.
  - season: list of "Spring"/"Summer"/"Autumn"/"Winter" when not all seasons.
  For any one version/time/season, the entries that apply sum to 100.
  Gen 7 uses time ["Day"]/["Night"] only. Exceptions to the sum rule: one-off
  methods (above), "SOS Encounter*" (ally slots that differ from the regular
  slot, chance = that slot's rate), ORAS "DexNav" and Gen 7 weather SOS (chance 0:
  no rate stored). Gen 6 "Horde": chance = horde rate x members/5.
* Conditional slot replacements are separate methods named "<Base> (<Condition>)",
  e.g. "Walk (Swarm)", "Walk (Poké Radar)", "Walk (Dual-Slot Ruby)",
  "Walk (Hoenn Sound)", "Super Rod (Swarm)". They list only the replacement
  slots; chance is the share of the base table those slots take while the
  condition is active.
* Locations use the English in-game names; when one place has several encounter
  tables a sub-area is appended in parentheses, e.g. "Mt. Moon (B1F)".

Usage:
    python generate_encounters.py                 # all supported games
    python generate_encounters.py --game crystal  # one game (file stem)
    python generate_encounters.py --output-dir out
"""

import argparse
import glob
import json
import os
import re
import sys
from collections import defaultdict
from fractions import Fraction
import builtins


def open(path, mode="r", **kw):  # noqa: A001 - all text inputs are UTF-8
    if "b" not in mode:
        kw.setdefault("encoding", "utf-8")
    return builtins.open(path, mode, **kw)

HERE = os.path.dirname(os.path.abspath(__file__))
if os.name == "nt":
    CYG = "A:/Cygwin/home/scott"
    DEC = "A:/decomps"
    ROMS = "A:/Dropbox/stp-projects/programs/roms/originals"
else:
    CYG = "/a/Cygwin/home/scott"
    DEC = "/a/decomps"
    ROMS = "/a/Dropbox/stp-projects/programs/roms/originals"

TIMES = ["Morning", "Day", "Night"]
SEASONS = ["Spring", "Summer", "Autumn", "Winter"]

# ---------------------------------------------------------------------------
# Species names (keys of pokedex/<game>.js)
# ---------------------------------------------------------------------------

_JS_KEY = re.compile(r'^    "((?:[^"\\]|\\.)*)": \{')


def pokedex_keys(game):
    keys = []
    with open(os.path.join(HERE, "pokedex", game + ".js"), encoding="utf-8") as f:
        for line in f:
            m = _JS_KEY.match(line)
            if m:
                keys.append(json.loads('"' + m.group(1) + '"'))
    return keys


def _norm(s):
    s = s.replace("\u2640", "F").replace("\u2642", "M").replace("é", "E")
    return re.sub(r"[^A-Z0-9]", "", s.upper())


class Species:
    """Maps decomp species constants (SPECIES_X / X) to pokedex keys."""

    def __init__(self, game):
        self.game = game
        self.by_norm = {}
        for k in pokedex_keys(game):
            if "(" in k:
                continue  # alternate forms are keyed "Name (Form)"
            self.by_norm.setdefault(_norm(k), k)

    def __call__(self, const):
        c = const.removeprefix("SPECIES_")
        n = _norm(c)
        if n in self.by_norm:
            return self.by_norm[n]
        raise KeyError(f"{self.game}: unknown species {const}")


# ---------------------------------------------------------------------------
# Aggregation and output
# ---------------------------------------------------------------------------

def _factor(contexts, dims):
    """Split a set of context tuples into a list of per-dimension subsets whose
    cartesian products partition it."""
    if not dims:
        return [()]
    by_first = defaultdict(set)
    for c in contexts:
        by_first[c[0]].add(c[1:])
    groups = defaultdict(list)
    for v, rest in by_first.items():
        groups[frozenset(rest)].append(v)
    out = []
    for rest, vals in groups.items():
        vals = sorted(vals, key=dims[0][1].index)
        for term in _factor(rest, dims[1:]):
            out.append((tuple(vals),) + term)
    return out


class Game:
    """Collects raw slot records for one output file and writes it."""

    DIM_ORDER = ["version", "time", "season"]

    def __init__(self, stem, versions=None, times=False, seasons=False):
        self.stem = stem
        self.dims = []
        if versions and len(versions) > 1:
            self.dims.append(("version", list(versions)))
        if times:
            self.dims.append(("time", list(TIMES) if times is True else list(times)))
        if seasons:
            self.dims.append(("season", list(SEASONS)))
        self.raw = defaultdict(lambda: defaultdict(lambda: defaultdict(Fraction)))
        # raw[location][method][(ctx, pokemon, min, max)] -> chance

    def add(self, location, method, pokemon, lmin, lmax, chance, **ctx):
        """Add one slot. ctx gives a value (or list of values) per dimension;
        omitted dimensions mean 'all values'."""
        if lmin > lmax:
            lmin, lmax = lmax, lmin
        axes = []
        for name, values in self.dims:
            v = ctx.pop(name, None)
            if v is None:
                axes.append(values)
            elif isinstance(v, (list, tuple, set)):
                axes.append([x for x in values if x in v])
            else:
                assert v in values, (name, v)
                axes.append([v])
        assert not ctx, ctx
        combos = [()]
        for a in axes:
            combos = [c + (x,) for c in combos for x in a]
        for c in combos:
            self.raw[location][method][(c, pokemon, lmin, lmax)] += Fraction(chance)

    def build(self):
        out = {}
        for loc, methods in self.raw.items():
            out[loc] = {}
            for meth, slots in methods.items():
                per_key = defaultdict(dict)   # (pokemon,min,max) -> {ctx: chance}
                for (ctx, p, a, b), ch in slots.items():
                    per_key[(p, a, b)][ctx] = ch   # chance 0 kept (DexNav, weather SOS)
                entries = []
                for (p, a, b), ctxs in per_key.items():
                    by_chance = defaultdict(set)
                    for c, ch in ctxs.items():
                        by_chance[ch].add(c)
                    for ch, cset in by_chance.items():
                        for term in _factor(cset, self.dims):
                            e = {"pokemon": p, "min_level": a, "max_level": b,
                                 "chance": _num(ch)}
                            for (name, values), sub in zip(self.dims, term):
                                if len(sub) == len(values):
                                    continue
                                if name == "version":
                                    assert len(sub) == 1
                                    e["version"] = sub[0]
                                else:
                                    e[name] = list(sub)
                            entries.append(e)
                entries.sort(key=_entry_sort_key(self.dims))
                if entries:
                    out[loc][meth] = entries
            if not out[loc]:
                del out[loc]
        return out


def _num(fr):
    if fr.denominator == 1:
        return int(fr)
    v = round(float(fr), 2)
    return int(v) if v == int(v) else v


def _entry_sort_key(dims):
    order = {name: values for name, values in dims}

    def key(e):
        k = [-e["chance"], e["pokemon"], e["min_level"], e["max_level"]]
        for name in ("version", "time", "season"):
            v = e.get(name)
            if v is None:
                k.append(())
            elif isinstance(v, list):
                k.append(tuple(order[name].index(x) for x in v))
            else:
                k.append((order[name].index(v),))
        return k
    return key


def natural_key(s):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", s)]


METHOD_ORDER = [
    "Walk", "Dark Grass", "Grass Spots", "Cave Spots", "Bridge Spots",
    "Surf", "Surf Spots", "Old Rod", "Good Rod", "Super Rod", "Super Rod Spots",
    "Rock Smash", "Headbutt", "Headbutt (Rare Tree)", "Headbutt (Special Tree)",
    "Bug-Catching Contest",
]


def method_key(m):
    base = m.split(" (")[0]
    if m in METHOD_ORDER:
        return (METHOD_ORDER.index(m), 0, m)
    if base in METHOD_ORDER:
        return (METHOD_ORDER.index(base), 1, m)
    return (len(METHOD_ORDER), 0, m)


def _js_string(s):
    return json.dumps(s, ensure_ascii=False)


def _fmt_extra(e):
    parts = []
    if "version" in e:
        parts.append(f"version: {_js_string(e['version'])}")
    for name in ("time", "season"):
        if name in e:
            parts.append(f"{name}: [" + ", ".join(_js_string(x) for x in e[name]) + "]")
    return "".join(", " + p for p in parts)


def write_files(by_location, out_dir, stem):
    locs = sorted(by_location, key=natural_key)
    lines = ["export const encounters = {"]
    for i, loc in enumerate(locs):
        methods = by_location[loc]
        lines.append(f"    {_js_string(loc)}: {{")
        ms = sorted(methods, key=method_key)
        for j, m in enumerate(ms):
            lines.append(f"        {_js_string(m)}: [")
            for e in methods[m]:
                lines.append(
                    f"            {{pokemon: {_js_string(e['pokemon'])}, "
                    f"min_level: {e['min_level']}, max_level: {e['max_level']}, "
                    f"chance: {e['chance']}{_fmt_extra(e)}}},")
            lines.append("        ]" + ("," if j < len(ms) - 1 else ""))
        lines.append("    }" + ("," if i < len(locs) - 1 else ""))
    lines += ["};", ""]
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, stem + ".js"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))

    by_pokemon = defaultdict(list)
    for loc in locs:
        for m in sorted(by_location[loc], key=method_key):
            for e in by_location[loc][m]:
                r = {"location": loc, "method": m}
                r.update({k: v for k, v in e.items() if k != "pokemon"})
                by_pokemon[e["pokemon"]].append(r)
    names = sorted(by_pokemon)
    lines = ["export const encounters_by_pokemon = {"]
    for i, p in enumerate(names):
        lines.append(f"    {_js_string(p)}: [")
        for r in by_pokemon[p]:
            lines.append(
                f"        {{location: {_js_string(r['location'])}, method: {_js_string(r['method'])}, "
                f"min_level: {r['min_level']}, max_level: {r['max_level']}, "
                f"chance: {r['chance']}{_fmt_extra(r)}}},")
        lines.append("    ]" + ("," if i < len(names) - 1 else ""))
    lines += ["};", ""]
    with open(os.path.join(out_dir, stem + "_by_pokemon.js"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))
    print(f"  wrote {stem}.js ({len(locs)} locations), {stem}_by_pokemon.js ({len(names)} species)")


# ---------------------------------------------------------------------------
# Name helpers
# ---------------------------------------------------------------------------

_SMALL = {"OF", "THE", "AND"}


def title_case(s):
    """'MT. PYRE' -> 'Mt. Pyre', 'CAVE OF ORIGIN' -> 'Cave of Origin'."""
    s = s.replace("POKéMON", "POKÉMON").replace("#MON", "POKÉMON")
    words = s.split()
    out = []
    for i, w in enumerate(words):
        if i and w in _SMALL:
            out.append(w.lower())
        elif w == "S.S.":
            out.append(w)
        else:
            out.append("-".join(p[:1] + p[1:].lower() for p in w.split("-")))
    r = " ".join(out)
    r = re.sub(r"\bMt\.(?=\S)", "Mt. ", r)
    return r


def camel_words(s):
    """'RubyPath_B1F_Stairs' -> 'Ruby Path B1F Stairs'."""
    s = s.replace("_", " ")
    s = re.sub(r"(?<=[a-z])(?=[A-Z0-9])", " ", s)
    s = re.sub(r"(?<=[0-9])(?=[A-Z][a-z])", " ", s)
    s = re.sub(r"\bRoom(\d)", r"Room \1", s)
    return " ".join(s.split())


# ---------------------------------------------------------------------------
# RGBDS asm helpers (Gen 1 / Gen 2)
# ---------------------------------------------------------------------------

def asm_lines(path, symbols):
    """Read an asm file, strip comments, and resolve IF DEF(...)/ELIF/ELSE/ENDC
    for the given set of defined symbols. Yields stripped non-empty lines."""
    stack = []          # list of (active, taken)
    with open(path, encoding="utf-8") as f:
        for raw in f:
            line = raw.split(";")[0].strip()
            if not line:
                continue
            m = re.match(r"IF\s+DEF\((\w+)\)", line)
            if m:
                parent = all(a for a, _ in stack)
                cond = m.group(1) in symbols
                stack.append((parent and cond, cond))
                continue
            m = re.match(r"ELIF\s+DEF\((\w+)\)", line)
            if m:
                _, taken = stack.pop()
                parent = all(a for a, _ in stack)
                cond = (not taken) and m.group(1) in symbols
                stack.append((parent and cond, taken or cond))
                continue
            if line == "ELSE":
                _, taken = stack.pop()
                parent = all(a for a, _ in stack)
                stack.append((parent and not taken, True))
                continue
            if line == "ENDC":
                stack.pop()
                continue
            if all(a for a, _ in stack):
                yield line


def rgbds_value(expr):
    """Evaluate expressions like '70 percent + 1' (percent = * $ff / 100)."""
    e = expr.replace("percent", "* 255 // 100").replace("$", "0x")
    return int(eval(e, {"__builtins__": {}}))


def percents_from_weights(weights):
    """Exact percentages (Fractions) from integer weights."""
    tot = sum(weights)
    return [Fraction(100 * w, tot) for w in weights]


def round_percents(fracs):
    """Largest-remainder rounding of a slot table to integers summing to 100."""
    floors = [int(f) for f in fracs]
    rem = 100 - sum(floors)
    order = sorted(range(len(fracs)), key=lambda i: -(fracs[i] - floors[i]))
    for i in order[:rem]:
        floors[i] += 1
    return floors


# ---------------------------------------------------------------------------
# Gen 1
# ---------------------------------------------------------------------------

GEN1_SLOT_WEIGHTS = [51, 51, 39, 25, 25, 25, 13, 13, 11, 3]   # probabilities.asm (/256)

GEN1_NAMES = {
    "DIGLETTS_CAVE": "Diglett's Cave",
    "VERMILION_DOCK": "Vermilion Harbor",
    "CERULEAN_GYM": "Cerulean Gym",
    "SAFARI_ZONE_CENTER": "Safari Zone (Center)",
    "SAFARI_ZONE_EAST": "Safari Zone (East)",
    "SAFARI_ZONE_NORTH": "Safari Zone (North)",
    "SAFARI_ZONE_WEST": "Safari Zone (West)",
}


def gen1_location(const):
    if const in GEN1_NAMES:
        return GEN1_NAMES[const]
    words = const.split("_")
    floor = None
    if re.fullmatch(r"B?\d+F", words[-1]):
        floor = words.pop()
    name = title_case(" ".join(words)).replace("Mt ", "Mt. ").replace("Pokemon", "Pokémon")
    return f"{name} ({floor})" if floor else name


_GEN1_FISHABLE = {}


def gen1_fishable_maps(root):
    """Map constants where a rod can be used: the map's tileset is in
    WaterTilesets and its blocks contain the water tile $14 or a shore tile
    ($32, $48; not in the Vermilion Dock tileset) - IsNextTileShoreOrWater."""
    if root in _GEN1_FISHABLE:
        return _GEN1_FISHABLE[root]
    water_ts = re.findall(r"db\s+([A-Z_]+)", open(os.path.join(root, "data/tilesets/water_tilesets.asm")).read())
    ts_consts = re.findall(r"^\s*const\s+(\w+)", open(os.path.join(root, "constants/tileset_constants.asm")).read(), re.M)
    ts_labels = re.findall(r"^\s*tileset\s+(\w+),", open(os.path.join(root, "data/tilesets/tileset_headers.asm")).read(), re.M)
    const_of_label = dict(zip(ts_labels, ts_consts))
    bst = {}
    pending = []
    for line in open(os.path.join(root, "gfx/tilesets.asm")):
        for lab in re.findall(r"(\w+)_Block::", line):
            pending.append(lab)
        m = re.search(r'INCBIN\s+"([^"]+\.bst)"', line)
        if m:
            for lab in pending:
                bst[const_of_label[lab]] = open(os.path.join(root, m.group(1)), "rb").read()
            pending = []
    blk_path = dict(re.findall(r'^(\w+)_Blocks:\s*INCBIN\s+"([^"]+)"', open(os.path.join(root, "maps.asm")).read(), re.M))
    out = set()
    for hp in glob.glob(os.path.join(root, "data/maps/headers/*.asm")):
        m = re.search(r"map_header\s+(\w+),\s*(\w+),\s*(\w+)", open(hp).read())
        label, const, ts = m.groups()
        if ts not in water_ts or label not in blk_path:
            continue
        blocks = set(open(os.path.join(root, blk_path[label]), "rb").read())
        tiles = set()
        for b in blocks:
            tiles.update(bst[ts][b * 16:(b + 1) * 16])
        ok = {0x14} if ts == "SHIP_PORT" else {0x14, 0x32, 0x48}
        if tiles & ok:
            out.add(const)
    _GEN1_FISHABLE[root] = out
    return out


def gen1(stem):
    root = os.path.join(CYG, "pokeyellow" if stem == "yellow" else "pokered")
    if stem == "yellow":
        versions = {"Yellow": set()}
    else:
        versions = {"Red": {"_RED"}, "Blue": {"_BLUE"}}
    sp = Species(stem)
    g = Game(stem, versions=list(versions))
    pct = round_percents(percents_from_weights(GEN1_SLOT_WEIGHTS))

    consts = [m.group(1) for m in re.finditer(
        r"^\s*map_const\s+(\w+)", open(os.path.join(root, "constants/map_constants.asm")).read(), re.M)]
    ptrs = re.findall(r"^\s*dw\s+(\w+)WildMons", open(os.path.join(root, "data/wild/grass_water.asm")).read(), re.M)
    assert len(consts) == len(ptrs), (len(consts), len(ptrs))
    files = {}
    for path in glob.glob(os.path.join(root, "data/wild/maps/*.asm")):
        txt = open(path).read()
        for lab in re.findall(r"^(\w+)WildMons:", txt, re.M):
            files[lab] = path

    for ver, syms in versions.items():
        vkw = {"version": ver} if len(versions) > 1 else {}
        for const, lab in zip(consts, ptrs):
            if lab == "Nothing":
                continue
            loc = gen1_location(const)
            kind = None
            slot = 0
            for line in asm_lines(files[lab], syms):
                m = re.match(r"def_(grass|water)_wildmons\s+(\d+)", line)
                if m:
                    kind, slot = m.group(1), 0
                    continue
                m = re.match(r"db\s+(\d+),\s*(\w+)", line)
                if m and kind:
                    method = "Walk" if kind == "grass" else "Surf"
                    lvl = int(m.group(1))
                    g.add(loc, method, sp(m.group(2)), lvl, lvl, pct[slot], **vkw)
                    slot += 1
                elif line.startswith("end_"):
                    assert slot in (0, 10), (lab, slot)
                    kind = None

        # Fishing: rods are listed for the maps in super_rod.asm (the game's
        # designated fishing maps) whose blocks actually contain water/shore
        # tiles. (The tile test alone over-matches: tile $14 is not water in
        # every water-capable tileset, e.g. gyms/ship interiors.) This drops
        # Cerulean Cave 2F, which is in the list but has no water.
        good = re.findall(r"db\s+(\d+),\s*(\w+)", open(os.path.join(root, "data/wild/good_rod.asm")).read())
        sr = open(os.path.join(root, "data/wild/super_rod.asm")).read()
        if stem == "yellow":
            fish = {}
            for m in re.finditer(r"^\s*db\s+(\w+),\s*(\w+),\s*(\d+),\s*(\w+),\s*(\d+),\s*(\w+),\s*(\d+),\s*(\w+),\s*(\d+)", sr, re.M):
                c = m.groups()
                fish[c[0]] = [(c[1], int(c[2])), (c[3], int(c[4])), (c[5], int(c[6])), (c[7], int(c[8]))]
            # engine/items/super_rod.asm: thresholds $66, $b2, $e5 on a random byte
            ypct = round_percents(percents_from_weights([0x66, 0xB2 - 0x66, 0xE5 - 0xB2, 0x100 - 0xE5]))
            for const, slots in fish.items():
                if const not in gen1_fishable_maps(root):
                    continue
                loc = gen1_location(const)
                for (s, lvl), p in zip(slots, ypct):
                    g.add(loc, "Super Rod", sp(s), lvl, lvl, p, **vkw)
        else:
            groups = {}
            for m in re.finditer(r"^\.(Group\d+):\s*\n\s*db\s+(\d+)\s*\n((?:\s*db\s+\d+,\s*\w+\s*\n?)+)", sr, re.M):
                mons = re.findall(r"db\s+(\d+),\s*(\w+)", m.group(3))
                assert len(mons) == int(m.group(2))
                groups[m.group(1)] = mons
            fish = {}
            for m in re.finditer(r"dbw\s+(\w+),\s*\.(Group\d+)", sr):
                fish[m.group(1)] = groups[m.group(2)]
            for const, mons in fish.items():
                if const not in gen1_fishable_maps(root):
                    continue
                loc = gen1_location(const)
                # ReadSuperRodData: uniform choice among the group's entries
                ps = round_percents(percents_from_weights([1] * len(mons)))
                for (lvl, s), p in zip(mons, ps):
                    g.add(loc, "Super Rod", sp(s), int(lvl), int(lvl), p, **vkw)
        for const in fish:
            if const not in gen1_fishable_maps(root):
                continue
            loc = gen1_location(const)
            g.add(loc, "Old Rod", sp("MAGIKARP"), 5, 5, 100, **vkw)
            for lvl, s in good:   # ItemUseGoodRod: 50/50
                g.add(loc, "Good Rod", sp(s), int(lvl), int(lvl), 50, **vkw)
    return g


# ---------------------------------------------------------------------------
# Gen 2
# ---------------------------------------------------------------------------

GEN2_GRASS_PCT = [30, 30, 20, 10, 5, 4, 1]   # probabilities.asm
GEN2_WATER_PCT = [60, 30, 10]


class Gen2Maps:
    """Map constant -> landmark name, fish group, tileset, water presence."""

    def __init__(self, root):
        self.root = root
        attrs = open(os.path.join(root, "data/maps/attributes.asm")).read()
        self.label_to_const = dict(re.findall(r"map_attributes\s+(\w+),\s*(\w+),", attrs))
        lm_consts = re.findall(r"^\s*const\s+(LANDMARK_\w+)", open(os.path.join(root, "constants/landmark_constants.asm")).read(), re.M)
        lm_txt = open(os.path.join(root, "data/maps/landmarks.asm")).read()
        lm_labels = re.findall(r"^\s*landmark\s+-?\d+,\s*-?\d+,\s*(\w+)", lm_txt, re.M)
        names = {}
        for lab, s in re.findall(r'^(\w+):\s*db\s+"([^"]*)"', lm_txt, re.M):
            names[lab] = s.replace("<BSP>", " ").replace("@", "").replace("MT.", "MT. ")
        self.landmark = {c: title_case(names[l]) for c, l in zip(lm_consts, lm_labels)}
        self.maps = {}
        for m in re.finditer(r"^\s*map\s+(\w+),\s*(\w+),\s*(\w+),\s*(\w+),\s*\w+,\s*\w+,\s*\w+,\s*(\w+)",
                             open(os.path.join(root, "data/maps/maps.asm")).read(), re.M):
            label, tileset, env, lm, fish = m.groups()
            const = self.label_to_const[label]
            self.maps[const] = dict(label=label, tileset=tileset, env=env, landmark=lm, fish=fish)
        self._water_cache = {}
        self._wc = None

    def name(self, const):
        info = self.maps[const]
        return self.landmark[info["landmark"]], info

    def has_water(self, const):
        """True if the map's blocks use a metatile with a WATER_TILE collision."""
        if const in self._water_cache:
            return self._water_cache[const]
        info = self.maps[const]
        blocks = open(os.path.join(self.root, "data/maps/blocks.asm")).read()
        path = None
        pending = []          # consecutive labels share the next INCBIN
        for line in blocks.splitlines():
            m = re.match(r"^(\w+)_Blocks:", line)
            if m:
                pending.append(m.group(1))
                continue
            m = re.search(r'INCBIN\s+"([^"]+)"', line)
            if m:
                if info["label"] in pending:
                    path = m.group(1)
                    break
                pending = []
        blk = open(os.path.join(self.root, path), "rb").read()
        coll_path = os.path.join(self.root, self._coll_files()[info["tileset"]])
        colls = re.findall(r"tilecoll\s+(\w+),\s*(\w+),\s*(\w+),\s*(\w+)", open(coll_path).read())
        water = self._water_colls()
        res = any(any(c in water for c in colls[b]) for b in set(blk) if b < len(colls))
        self._water_cache[const] = res
        return res

    def _coll_files(self):
        """TILESET_* constant -> collision asm path (via data/tilesets.asm order
        and the TilesetXColl:: labels in gfx/tilesets.asm)."""
        if hasattr(self, "_cf"):
            return self._cf
        consts = re.findall(r"^\s*const\s+(TILESET_\w+)", open(os.path.join(self.root, "constants/tileset_constants.asm")).read(), re.M)
        labels = re.findall(r"^\s*tileset\s+(\w+)", open(os.path.join(self.root, "data/tilesets.asm")).read(), re.M)
        inc = {}
        pending = []
        for line in open(os.path.join(self.root, "gfx/tilesets.asm")):
            m = re.match(r"^(\w+)Coll::", line)
            if m:
                pending.append(m.group(1))
                continue
            m = re.search(r'INCLUDE\s+"([^"]+_collision\.asm)"', line)
            if m:
                for p in pending:
                    inc[p] = m.group(1)
                pending = []
            elif line.strip() and not line.startswith(";"):
                pending = []
        if labels and labels[0] == "Tileset0":
            labels = labels[1:]       # constants start at 1 (const_def 1)
        assert len(labels) == len(consts), (len(labels), len(consts))
        self._cf = {c: inc[l] for c, l in zip(consts, labels) if l in inc}
        return self._cf

    def _water_colls(self):
        if self._wc is not None:
            return self._wc
        consts = {}
        for m in re.finditer(r"^DEF\s+COLL_(\w+)\s+EQU\s+\$([0-9a-fA-F]+)",
                             open(os.path.join(self.root, "constants/collision_constants.asm")).read(), re.M):
            consts[m.group(1)] = int(m.group(2), 16)
        perms = []
        for line in open(os.path.join(self.root, "data/collision/collision_permissions.asm")):
            m = re.match(r"\s*db\s+([A-Z_| ]+?)\s*(;.*)?$", line)
            if m:
                perms.append("WATER_TILE" in m.group(1))
        wc = {n for n, v in consts.items() if v < len(perms) and perms[v]}
        wc |= {f"{i:02x}" for i, w in enumerate(perms) if w} | {f"{i:02X}" for i, w in enumerate(perms) if w}
        self._wc = wc
        return wc


# Full-name overrides where landmark + map-constant suffix reads badly.
GEN2_NAME_OVERRIDES = {
    "MOUNT_MOON_SQUARE": "Mt. Moon Square",
    "OLIVINE_PORT": "Olivine Port",
    "VERMILION_PORT": "Vermilion Port",
    "NATIONAL_PARK_BUG_CONTEST": "National Park",
    "RUINS_OF_ALPH_HO_OH_CHAMBER": "Ruins of Alph (Ho-Oh Chamber)",
    "WHIRL_ISLAND_NW": "Whirl Islands (NW)",
    "WHIRL_ISLAND_NE": "Whirl Islands (NE)",
    "WHIRL_ISLAND_SW": "Whirl Islands (SW)",
    "WHIRL_ISLAND_SE": "Whirl Islands (SE)",
    "WHIRL_ISLAND_CAVE": "Whirl Islands (Cave)",
    "WHIRL_ISLAND_B1F": "Whirl Islands (B1F)",
    "WHIRL_ISLAND_B2F": "Whirl Islands (B2F)",
    "WHIRL_ISLAND_LUGIA_CHAMBER": "Whirl Islands (Lugia Chamber)",
}
# Unused / unreachable maps (the GSC Safari Zone is closed).
GEN2_SKIP_MAPS = {"FUCHSIA_SAFARI_ZONE_BETA", "SAFARI_ZONE_BETA", "SAFARI_ZONE_FUCHSIA_GATE_BETA",
                  # contest copy of National Park: same place, same fish/tree data
                  "NATIONAL_PARK_BUG_CONTEST"}


def gen2_location(maps, const):
    base, info = maps.name(const)
    lm = info["landmark"].removeprefix("LANDMARK_")
    if const in GEN2_NAME_OVERRIDES:
        return GEN2_NAME_OVERRIDES[const]
    cw = const.replace("MOUNT_", "MT_").split("_")
    lw = lm.split("_")
    i = 0
    while i < min(len(cw), len(lw)) and cw[i] == lw[i]:
        i += 1
    rest = cw[i:] if i == len(lw) else cw
    if not rest:
        return base
    suf = " ".join(w if re.fullmatch(r"B?\d+F", w) else w.capitalize() for w in rest)
    return f"{base} ({suf})"


def _gen2_tables(path, syms, nslots):
    """Parse def_grass_wildmons / def_water_wildmons / map_id blocks."""
    out = []      # (map_const, [(lvl, species), ...])
    cur = None
    for line in asm_lines(path, syms):
        m = re.match(r"(?:def_(?:grass|water)_wildmons|map_id)\s+(\w+)", line)
        if m:
            cur = (m.group(1), [])
            out.append(cur)
            continue
        m = re.match(r"db\s+(\d+),\s*([A-Z_0-9]+)$", line)
        if m and cur:
            cur[1].append((int(m.group(1)), m.group(2)))
    for c, mons in out:
        assert len(mons) == nslots, (path, c, len(mons))
    return out


def gen2(stem):
    crystal = stem == "crystal"
    # The local pokecrystal checkout carries non-vanilla commits (extra maps);
    # point POKECRYSTAL_ROOT at a clean upstream tree (e.g. a `git archive
    # origin/master` extract). Wild data itself is identical upstream.
    root = (os.environ.get("POKECRYSTAL_ROOT") or os.path.join(CYG, "pokecrystal")) if crystal         else os.path.join(CYG, "pokegold")
    versions = {"Crystal": set()} if crystal else {"Gold": {"_GOLD"}, "Silver": {"_SILVER"}}
    sp = Species(stem)
    g = Game(stem, versions=list(versions), times=True)
    maps = Gen2Maps(root)

    def W(f):
        return os.path.join(root, "data/wild", f)

    for ver, syms in versions.items():
        vkw = {"version": ver} if len(versions) > 1 else {}
        normal_grass = {}
        for f in ("johto_grass.asm", "kanto_grass.asm"):
            for const, mons in _gen2_tables(W(f), syms, 21):
                normal_grass[const] = mons
                loc = gen2_location(maps, const)
                for t, tname in enumerate(TIMES):
                    for i in range(7):
                        lvl, s = mons[t * 7 + i]
                        g.add(loc, "Walk", sp(s), lvl, lvl, GEN2_GRASS_PCT[i], time=tname, **vkw)
        normal_water = {}
        for f in ("johto_water.asm", "kanto_water.asm"):
            for const, mons in _gen2_tables(W(f), syms, 3):
                normal_water[const] = mons
                loc = gen2_location(maps, const)
                for i, (lvl, s) in enumerate(mons):
                    g.add(loc, "Surf", sp(s), lvl, lvl, GEN2_WATER_PCT[i], **vkw)
        # Swarms are full replacement tables; emit only the slots that change.
        for const, mons in _gen2_tables(W("swarm_grass.asm"), syms, 21):
            loc = gen2_location(maps, const)
            base = normal_grass[const]
            for t, tname in enumerate(TIMES):
                for i in range(7):
                    if mons[t * 7 + i] != base[t * 7 + i]:
                        lvl, s = mons[t * 7 + i]
                        g.add(loc, "Walk (Swarm)", sp(s), lvl, lvl, GEN2_GRASS_PCT[i], time=tname, **vkw)
        for const, mons in _gen2_tables(W("swarm_water.asm"), syms, 3):
            loc = gen2_location(maps, const)
            base = normal_water[const]
            for i in range(3):
                if mons[i] != base[i]:
                    lvl, s = mons[i]
                    g.add(loc, "Surf (Swarm)", sp(s), lvl, lvl, GEN2_WATER_PCT[i], **vkw)

        _gen2_fishing(g, root, maps, sp, syms, vkw)
        _gen2_trees(g, root, maps, sp, syms, vkw)

        # Bug-Catching Contest (National Park, Tue/Thu/Sat)
        mons = []
        for line in asm_lines(W("bug_contest_mons.asm"), syms):
            m = re.match(r"db\s+(-?\d+),\s*(\w+),\s*(\d+),\s*(\d+)", line)
            if m and int(m.group(1)) > 0:
                mons.append((int(m.group(1)), m.group(2), int(m.group(3)), int(m.group(4))))
        assert sum(x[0] for x in mons) == 100
        for p, s, a, b in mons:
            g.add("National Park", "Bug-Catching Contest", sp(s), a, b, p, **vkw)
    return g


def _gen2_fishing(g, root, maps, sp, syms, vkw):
    group_order = []
    tables = {}
    time_groups = []
    cur = None
    in_time = False
    for line in asm_lines(os.path.join(root, "data/wild/fish.asm"), syms):
        m = re.match(r"fishgroup\s+[^,]+,\s*\.(\w+),\s*\.(\w+),\s*\.(\w+)", line)
        if m:
            group_order.append(m.groups())
            continue
        if line.startswith("TimeFishGroups"):
            in_time = True
            continue
        m = re.match(r"\.(\w+):$", line)
        if m:
            if cur is None or tables[cur[-1]]:
                cur = []          # consecutive labels share one table
            cur.append(m.group(1))
            tables[m.group(1)] = []
            continue
        if in_time:
            m = re.match(r"db\s+(\w+),\s*(\d+),\s*(\w+),\s*(\d+)", line)
            if m:
                time_groups.append(((m.group(1), int(m.group(2))), (m.group(3), int(m.group(4)))))
            continue
        row = None
        m = re.match(r"db\s+(.+?),\s*time_group\s+(\d+)$", line)
        if m:
            row = (rgbds_value(m.group(1)), None, int(m.group(2)))
        else:
            m = re.match(r"db\s+(.+?),\s*(\w+),\s*(\d+)$", line)
            if m:
                row = (rgbds_value(m.group(1)), m.group(2), int(m.group(3)))
        if row and cur:
            for lab in cur:
                tables[lab].append(row)
    fg_consts = re.findall(r"^\s*const\s+(FISHGROUP_\w+)", open(os.path.join(root, "constants/map_data_constants.asm")).read(), re.M)
    assert fg_consts[0] == "FISHGROUP_NONE"
    groups = dict(zip(fg_consts[1:], group_order))

    def emit(loc, method, table, base=None):
        # A random byte r selects the first slot with r <= threshold (fish.asm
        # .loop); exact /256 shares are rounded to whole percents per table.
        prev = -1
        exact = []
        for thr, _, _ in table:
            exact.append(Fraction(100 * (thr - prev), 256))
            prev = thr
        assert prev == 255, (loc, method, table)
        pcts = round_percents(exact)
        for k, (thr, s, x) in enumerate(table):
            p = pcts[k]
            if base is not None and (s, x) == base[k][1:]:
                continue
            if s is None:   # time_group: morning/day species, night species
                day, nite = time_groups[x]
                g.add(loc, method, sp(day[0]), day[1], day[1], p, time=["Morning", "Day"], **vkw)
                g.add(loc, method, sp(nite[0]), nite[1], nite[1], p, time="Night", **vkw)
            else:
                g.add(loc, method, sp(s), x, x, p, **vkw)

    for const, info in maps.maps.items():
        fg = info["fish"]
        if fg == "FISHGROUP_NONE" or info["env"] in ("INDOOR", "GATE") or const in GEN2_SKIP_MAPS:
            continue
        if not maps.has_water(const):
            continue
        loc = gen2_location(maps, const)
        for method, lab in zip(("Old Rod", "Good Rod", "Super Rod"), groups[fg]):
            emit(loc, method, tables[lab])
        swarm = {"FISHGROUP_QWILFISH": "FISHGROUP_QWILFISH_SWARM",
                 "FISHGROUP_REMORAID": "FISHGROUP_REMORAID_SWARM"}.get(fg)
        if swarm:
            for method, lab, blab in zip(("Old Rod", "Good Rod", "Super Rod"), groups[swarm], groups[fg]):
                t, b = tables[lab], tables[blab]
                assert [x[0] for x in t] == [x[0] for x in b]
                if t != b:
                    emit(loc, method + " (Swarm)", t, base=b)


def _gen2_trees(g, root, maps, sp, syms, vkw):
    sets = {}
    cur = None
    for line in asm_lines(os.path.join(root, "data/wild/treemons.asm"), syms):
        m = re.match(r"(TreeMonSet_\w+):", line)
        if m:
            cur = m.group(1)
            sets[cur] = [[]]
            continue
        m = re.match(r"db\s+(-?\d+)(?:,\s*(\w+),\s*(\d+))?", line)
        if m and cur:
            if int(m.group(1)) == -1:
                sets[cur].append([])
            else:
                sets[cur][-1].append((int(m.group(1)), m.group(2), int(m.group(3))))
    set_consts = []
    for cf in sorted(glob.glob(os.path.join(root, "constants", "*.asm"))):
        set_consts += re.findall(r"^\s*const\s+(TREEMON_SET_\w+)", open(cf).read(), re.M)
    # GetTreeMons ignores set 0 (NONE) and, in Gold/Silver, the last two sets
    # (UNUSED, CITY) - see engine/events/treemons.asm.
    ignored = {"TREEMON_SET_NONE", "TREEMON_SET_UNUSED", "TREEMON_SET_CITY"}
    order = re.findall(r"dw\s+(TreeMonSet_\w+)", open(os.path.join(root, "data/wild/treemons.asm")).read())
    set_of = dict(zip(set_consts, order))
    for const, tset in re.findall(r"treemon_map\s+(\w+),\s*(\w+)", open(os.path.join(root, "data/wild/treemon_maps.asm")).read()):
        if const in GEN2_SKIP_MAPS:
            continue
        tables = [t for t in sets[set_of[tset]] if t]
        if tset in ignored or not tables:
            continue
        loc = gen2_location(maps, const)
        if tset == "TREEMON_SET_ROCK":
            assert sum(p for p, _, _ in tables[0]) == 100
            for p, s, lvl in tables[0]:
                g.add(loc, "Rock Smash", sp(s), lvl, lvl, p, **vkw)
            continue
        for method, t in zip(("Headbutt", "Headbutt (Rare Tree)"), tables):
            assert sum(p for p, _, _ in t) == 100
            for p, s, lvl in t:
                g.add(loc, method, sp(s), lvl, lvl, p, **vkw)


# ---------------------------------------------------------------------------
# Gen 3
# ---------------------------------------------------------------------------

GEN3_NAME_OVERRIDES = {
    # map name -> location
    "Underwater1": "Route 124 (Underwater)",         # Ruby/Sapphire naming
    "Underwater2": "Route 126 (Underwater)",
    "Underwater_Route124": "Route 124 (Underwater)",
    "Underwater_Route126": "Route 126 (Underwater)",
    "Route21_North": "Route 21 (North)",
    "Route21_South": "Route 21 (South)",
    "SSAnne_Exterior": "Vermilion Harbor",           # FRLG: S.S. Anne dock area
    "SevenIsland_SevaultCanyon_Entrance": "Sevault Canyon (Entrance)",
    "SixIsland_AlteringCave": "Altering Cave",
    "AbandonedShip_HiddenFloorCorridors": "Abandoned Ship (Hidden Floor Corridors)",
    "AbandonedShip_Rooms_B1F": "Abandoned Ship (B1F Rooms)",
    "GraniteCave_StevensRoom": "Granite Cave (Steven's Room)",
    "MeteorFalls_StevensCave": "Meteor Falls (Steven's Cave)",
    "MeteorFalls_1F_1R": "Meteor Falls (1F, Room 1)",
    "MeteorFalls_1F_2R": "Meteor Falls (1F, Room 2)",
    "MeteorFalls_B1F_1R": "Meteor Falls (B1F, Room 1)",
    "MeteorFalls_B1F_2R": "Meteor Falls (B1F, Room 2)",
    "MagmaHideout_2F_1R": "Magma Hideout (2F, Room 1)",
    "MagmaHideout_2F_2R": "Magma Hideout (2F, Room 2)",
    "MagmaHideout_2F_3R": "Magma Hideout (2F, Room 3)",
    "MagmaHideout_3F_1R": "Magma Hideout (3F, Room 1)",
    "MagmaHideout_3F_2R": "Magma Hideout (3F, Room 2)",
    "MagmaHideout_3F_3R": "Magma Hideout (3F, Room 3)",
    "ShoalCave_LowTideEntranceRoom": "Shoal Cave (Entrance Room)",
    "ShoalCave_LowTideInnerRoom": "Shoal Cave (Inner Room)",
    "ShoalCave_LowTideStairsRoom": "Shoal Cave (Stairs Room)",
    "ShoalCave_LowTideLowerRoom": "Shoal Cave (Lower Room)",
    "ShoalCave_LowTideIceRoom": "Shoal Cave (Ice Room)",
    "MtEmber_RubyPath_B1F_Stairs": "Mt. Ember (Ruby Path B1F Stairs)",
    "MtEmber_RubyPath_B2F_Stairs": "Mt. Ember (Ruby Path B2F Stairs)",
    "SevenIsland_TanobyRuins": "Tanoby Ruins",
    "FiveIsland_Meadow": "Five Isle Meadow",
    "ThreeIsland_Port": "Three Isle Port",
    "DiglettsCave_B1F": "Diglett's Cave",
    "SafariZone_Center": "Safari Zone (Center)",
    "SafariZone_East": "Safari Zone (East)",
    "SafariZone_North": "Safari Zone (North)",
    "SafariZone_West": "Safari Zone (West)",
}

# Hoenn Safari Zone areas (RSE) use compass names too.
_GEN3_SAFARI_HOENN = {
    "SafariZone_Northwest": "Safari Zone (Northwest)",
    "SafariZone_North": "Safari Zone (North)",
    "SafariZone_Northeast": "Safari Zone (Northeast)",
    "SafariZone_Southwest": "Safari Zone (Southwest)",
    "SafariZone_South": "Safari Zone (South)",
    "SafariZone_Southeast": "Safari Zone (Southeast)",
}


def _gen3_maps(root):
    maps = {}
    for p in glob.glob(os.path.join(root, "data/maps/*/map.json")):
        j = json.load(open(p))
        maps[j["id"]] = (j["name"], j["region_map_section"])
    names = {}
    for s in json.load(open(os.path.join(root, "src/data/region_map/region_map_sections.json")))["map_sections"]:
        if s.get("name"):
            names[s["id"]] = s["name"].replace("{NAME_END}", "")
    return maps, names


def gen3_location(map_name, mapsec, secnames):
    if map_name in GEN3_NAME_OVERRIDES:
        return GEN3_NAME_OVERRIDES[map_name]
    if map_name in _GEN3_SAFARI_HOENN:
        return _GEN3_SAFARI_HOENN[map_name]
    base = title_case(secnames[mapsec]).replace("Digletts", "Diglett's")
    # sub-area = map name minus the part naming the mapsec
    parts = map_name.split("_")
    sec_key = re.sub(r"[^A-Z0-9]", "", mapsec.removeprefix("MAPSEC_").replace("KANTO_", ""))
    rest = []
    found = False
    for i, p in enumerate(parts):
        if re.sub(r"[^A-Z0-9]", "", p.upper()) == sec_key:
            rest = parts[i + 1:]
            found = True
            break
    if not found:
        rest = parts[1:] if len(parts) > 1 else []
    if not rest:
        return base
    return f"{base} ({camel_words(' '.join(rest))})"


GEN3_RATES = {
    "land_mons": [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1],
    "water_mons": [60, 30, 5, 4, 1],
    "rock_smash_mons": [60, 30, 5, 4, 1],
    "fishing_mons": [70, 30, 60, 20, 20, 40, 40, 15, 4, 1],
}
GEN3_FISH_GROUPS = {"Old Rod": [0, 1], "Good Rod": [2, 3, 4], "Super Rod": [5, 6, 7, 8, 9]}

GEN3_GAMES = {
    "ruby_sapphire": ("pokeruby", {"Ruby": "_Ruby", "Sapphire": "_Sapphire"}),
    "emerald": ("pokeemerald", {"Emerald": ""}),
    "firered_leafgreen": ("pokefirered", {"FireRed": "_FireRed", "LeafGreen": "_LeafGreen"}),
}


def gen3(stem):
    dec, versions = GEN3_GAMES[stem]
    root = os.path.join(DEC, dec)
    sp = Species(stem)
    g = Game(stem, versions=list(versions))
    maps, secnames = _gen3_maps(root)
    j = json.load(open(os.path.join(root, "src/data/wild_encounters.json")))
    for grp in j["wild_encounter_groups"]:
        if grp["label"] != "gWildMonHeaders":
            continue  # Battle Pyramid / Battle Pike are Frontier facilities
        # rates are declared in the group's "fields"; check they match ours
        for f in grp["fields"]:
            assert f["encounter_rates"] == GEN3_RATES[f["type"]], f
        seen_alt = set()
        for e in grp["encounters"]:
            label = e["base_label"]
            if len(versions) > 1:
                vs = [v for v, suf in versions.items() if label.endswith(suf)]
                assert len(vs) == 1, label
                vkw = {"version": vs[0]}
            else:
                vkw = {}
            # Altering Cave has 9 tables switched by a Mystery Event; only the
            # first (Zubat) is reachable without it.
            if "AlteringCave" in label:
                key = (e["map"], vkw.get("version"))
                if key in seen_alt:
                    continue
                seen_alt.add(key)
            name, mapsec = maps[e["map"]]
            if "Unused" in name:
                continue  # Emerald keeps R/S Cave of Origin maps it never loads
            loc = gen3_location(name, mapsec, secnames)
            for kind, method in (("land_mons", "Walk"), ("water_mons", "Surf"),
                                 ("rock_smash_mons", "Rock Smash")):
                if kind in e:
                    rates = GEN3_RATES[kind]
                    mons = e[kind]["mons"]
                    assert len(mons) == len(rates)
                    if kind == "water_mons" and name.startswith("Underwater"):
                        method = "Seaweed"     # Dive: underwater seaweed
                    for r, m in zip(rates, mons):
                        g.add(loc, method, sp(m["species"]), m["min_level"], m["max_level"], r, **vkw)
            if "fishing_mons" in e:
                mons = e["fishing_mons"]["mons"]
                rates = GEN3_RATES["fishing_mons"]
                for method, idx in GEN3_FISH_GROUPS.items():
                    for i in idx:
                        m = mons[i]
                        g.add(loc, method, sp(m["species"]), m["min_level"], m["max_level"], rates[i], **vkw)
    return g


# ---------------------------------------------------------------------------
# Gen 4: Diamond/Pearl/Platinum
# ---------------------------------------------------------------------------

DPPT_LAND = [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1]       # GetGroundEncounterSlot
DPPT_SURF = [60, 30, 5, 4, 1]                                  # GetWaterEncounterSlot
DPPT_ROD = {"Old Rod": [60, 30, 5, 4, 1],                      # GetRodEncounterSlot
            "Good Rod": [40, 40, 15, 4, 1],
            "Super Rod": [40, 40, 15, 4, 1]}
DUAL_SLOT = [("ruby", "Ruby"), ("sapphire", "Sapphire"), ("emerald", "Emerald"),
             ("firered", "FireRed"), ("leafgreen", "LeafGreen")]


def add_dppt_table(g, sp, loc, t, vkw):
    """Add one Platinum-style encounter table (dict as in pokeplatinum's
    res/field/encounters/*.json) to g."""
    if t["land_rate"]:
        land = t["land_encounters"]
        for i, (r, e) in enumerate(zip(DPPT_LAND, land)):
            lvl = e["level"]
            if i in (2, 3):   # morning in the base table; day/night replace them
                k = i - 2
                g.add(loc, "Walk", sp(e["species"]), lvl, lvl, r, time="Morning", **vkw)
                g.add(loc, "Walk", sp(t["day"][k]), lvl, lvl, r, time="Day", **vkw)
                g.add(loc, "Walk", sp(t["night"][k]), lvl, lvl, r, time="Night", **vkw)
            else:
                g.add(loc, "Walk", sp(e["species"]), lvl, lvl, r, **vkw)
        # Slot replacements: list only the slots whose species change.
        repl = [("Walk (Swarm)", "swarms", [0, 1]),
                ("Walk (Poké Radar)", "radar", [4, 5, 10, 11])]
        repl += [(f"Walk (Dual-Slot {name})", key, [8, 9]) for key, name in DUAL_SLOT]
        for method, key, slots in repl:
            for sp_const, i in zip(t[key], slots):
                if sp_const != land[i]["species"] and sp_const != "SPECIES_NONE":
                    lvl = land[i]["level"]
                    g.add(loc, method, sp(sp_const), lvl, lvl, DPPT_LAND[i], **vkw)
    for method, key, rates in (("Surf", "surf", DPPT_SURF), ("Old Rod", "old_rod", DPPT_ROD["Old Rod"]),
                               ("Good Rod", "good_rod", DPPT_ROD["Good Rod"]),
                               ("Super Rod", "super_rod", DPPT_ROD["Super Rod"])):
        if t[key + "_rate"]:
            for r, e in zip(rates, t[key + "_encounters"]):
                g.add(loc, method, sp(e["species"]), e["level_min"], e["level_max"], r, **vkw)


def _pt_headers():
    root = os.path.join(DEC, "pokeplatinum")
    names = {m["id"]: m["en_US"] for m in json.load(open(os.path.join(root, "res/text/location_names.json")))["messages"]}
    txt = open(os.path.join(root, "include/data/map_headers.h")).read()
    out = {}
    for m in re.finditer(r"\[(MAP_HEADER_\w+)\] = \{(.*?)\n    \}", txt, re.S):
        body = m.group(2)
        enc = re.search(r"wildEncountersArchiveID = (\w+)", body).group(1)
        lab = re.search(r"mapLabelTextID = (\w+)", body).group(1)
        if enc != "ENCOUNTERS_NONE":
            out.setdefault(enc, []).append((m.group(1), names[lab]))
    return out


def dppt_location(stem, base):
    """Location name from the in-game place name plus a sub-area taken from
    the decomp's descriptive table name."""
    if stem in DPPT_NAME_OVERRIDES:
        return DPPT_NAME_OVERRIDES[stem]
    words = stem.removeprefix("encounters_").split("_")
    bw = re.sub(r"[^a-z0-9 ]", "", base.lower().replace("mt.", "mt")).split()
    i = 0
    while i < min(len(words), len(bw)) and words[i] == bw[i]:
        i += 1
    rest = words[i:] if i == len(bw) else words
    if not rest:
        return base
    suf = " ".join(w.upper() if re.fullmatch(r"b?\d+f", w) else w.capitalize() for w in rest)
    return f"{base} ({suf})"


DPPT_NAME_OVERRIDES = {
    "encounters_pokemon_league": "Pokémon League",
    "encounters_fuego_ironworks_outside": "Fuego Ironworks",
    "encounters_valley_windworks_outside": "Valley Windworks",
    "encounters_solaceon_ruins_room_5_southeast_deadend": "Solaceon Ruins (Room 5 Southeast Dead End)",
    "encounters_mt_coronet_4f_rooms_1_and_2": "Mt. Coronet (4F Rooms 1 and 2)",
}
for _i in range(1, 6):
    DPPT_NAME_OVERRIDES[f"encounters_route_209_lost_tower_{_i}f"] = f"Lost Tower ({_i}F)"
for _i in range(1, 7):
    DPPT_NAME_OVERRIDES[f"encounters_great_marsh_{_i}"] = f"Great Marsh (Area {_i})"


def platinum(stem):
    root = os.path.join(DEC, "pokeplatinum", "res/field/encounters")
    sp = Species(stem)
    g = Game(stem, times=True)
    headers = _pt_headers()
    for enc, hs in sorted(headers.items()):
        bases = {b for _, b in hs}
        assert len(bases) == 1, (enc, hs)
        loc = dppt_location(enc, bases.pop())
        t = json.load(open(os.path.join(root, enc + ".json")))
        add_dppt_table(g, sp, loc, t, {})
    return g


def dex_names(game):
    """National dex number -> pokedex key (base forms only)."""
    out = {}
    cur = None
    with open(os.path.join(HERE, "pokedex", game + ".js"), encoding="utf-8") as f:
        for line in f:
            m = _JS_KEY.match(line)
            if m:
                cur = json.loads('"' + m.group(1) + '"')
                continue
            m = re.match(r'\s+"national_dex_number": (\d+)', line)
            if m and cur and "(" not in cur:
                out.setdefault(int(m.group(1)), cur)
    return out


def _dppt_bin_to_json(b, names):
    """Decode one 0x1A8-byte DP/Pt encounter file (layout: pokeplatinum
    tools/jsoncnv/encounter.py) into the decomp's JSON shape."""
    import struct
    assert len(b) == 0x1A8, len(b)

    def u(o):
        return struct.unpack_from("<I", b, o)[0]

    def spn(x):
        return "SPECIES_NONE" if x == 0 else names[x]

    t = {"land_rate": u(0),
         "land_encounters": [{"level": u(4 + 8 * i), "species": spn(u(8 + 8 * i))} for i in range(12)]}
    o = 100
    for key, n in (("swarms", 2), ("day", 2), ("night", 2), ("radar", 4)):
        t[key] = [spn(u(o + 4 * i)) for i in range(n)]
        o += 4 * n
    o += 24  # rate_form0..4, unown_table
    for key, _ in DUAL_SLOT:
        t[key] = [spn(u(o)), spn(u(o + 4))]
        o += 8

    def water(o):
        return [{"level_max": b[o + 8 * i], "level_min": b[o + 8 * i + 1], "species": spn(u(o + 8 * i + 4))}
                for i in range(5)]
    t["surf_rate"] = u(o)
    t["surf_encounters"] = water(o + 4)
    o += 44 + 44
    for rod in ("old", "good", "super"):
        t[rod + "_rod_rate"] = u(o)
        t[rod + "_rod_encounters"] = water(o + 4)
        o += 44
    assert o == 0x1A8
    return t


def diamond_pearl(stem):
    """Diamond/Pearl have no decomp. Their encounter NARCs have the same 183
    files and binary layout as Platinum's, in the same order (verified by
    matching every file's species/levels against the Platinum decomp and
    PokéAPI's DP locations), so Platinum's table names give the locations.
    Files 81-105 (Platinum's unreferenced encounters_unknown_533..557) are
    copies of the Turnback Cave pillar-2 table and are skipped."""
    sys.path.insert(0, HERE)
    from generate_encounters_gen5 import NDS, parse_narc
    order = [l.strip() for l in open(os.path.join(DEC, "pokeplatinum/res/field/encounters/encounters.order")) if l.strip()]
    headers = _pt_headers()
    names = dex_names(stem)
    g = Game(stem, versions=["Diamond", "Pearl"], times=True)
    for ver, rom, narc in (("Diamond", "4-Diamond.nds", "d_enc_data"), ("Pearl", "4-Pearl.nds", "p_enc_data")):
        files = parse_narc(NDS(os.path.join(ROMS, rom)).file_by_path(f"fielddata/encountdata/{narc}.narc"))
        assert len(files) == len(order) == 183
        for i, (enc, f) in enumerate(zip(order, files)):
            if enc.startswith("encounters_unknown_"):
                continue
            # Platinum stopped using the Turnback Cave entrance/pillar/Giratina
            # room tables (ENCOUNTERS_NONE in its headers); DP still uses them.
            base = headers[enc][0][1] if enc in headers else "Turnback Cave"
            assert enc in headers or "turnback" in enc, enc
            loc = dppt_location(enc, base)
            t = _dppt_bin_to_json(f, names)
            add_dppt_table(g, lambda x: x if x != "SPECIES_NONE" else x, loc, t, {"version": ver})
    return g


# ---------------------------------------------------------------------------
# Gen 4: HeartGold/SoulSilver
# ---------------------------------------------------------------------------
# Slot rolls (asm/overlay_02_02245B80.s): grass 20,20,10,10,10,10,5,5,4,4,1,1;
# EncounterSlot_WildMonSlotRoll_Surfing 60,30,5,4,1; _Fishing 40,30,15,10,5;
# _RockSmash 80,20; _Headbutt 50,15,15,10,5,5.
# Replacements: ov02_02246B00 radio (Hoenn/Sinnoh sound: slots 2,3 <- sound[0],
# slots 4,5 <- sound[1]); ov02_02246B58 grass swarm (slots 0,1 <- swarm[0]);
# ov02_02246B9C surf swarm (slot 0 <- swarm[1]); ov02_02246BD8 fishing swarm
# (swarm[3] into Old Rod slot 2 / Good Rod slots 0,2,3 / Super Rod all);
# ov02_02246AD4 night fishing (swarm[2] into Good Rod slot 3 / Super Rod slot 1).

HGSS_LAND = [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1]
HGSS_SURF = [60, 30, 5, 4, 1]
HGSS_ROD = [40, 30, 15, 10, 5]
HGSS_SMASH = [80, 20]
HGSS_HEADBUTT = [50, 15, 15, 10, 5, 5]
HGSS_FISH_SWARM_SLOTS = {"Old Rod": [2], "Good Rod": [0, 2, 3], "Super Rod": [0, 1, 2, 3, 4]}
HGSS_NIGHT_FISH_SLOT = {"Good Rod": 3, "Super Rod": 1}

HGSS_NAME_OVERRIDES = {
    "MAP_DRAGONS_DEN": "Dragon's Den",
}
# Tables that are placeholders or only used by scripted events: the Bug-Catching
# Contest map (the contest uses data/mushi/mushi_encount.csv instead), the
# Clefairy-dance map of Mt. Moon Square, the Sinjoh-event Ruins of Alph maps and
# the Safari Zone entrance exterior (all-Rattata/all-Goldeen dummy table).
HGSS_SKIP_MAPS = {
    "MAP_NATIONAL_PARK_BUG_CATCHING_CONTEST", "MAP_MOUNT_MOON_SQUARE_CLEFAIRY_EVENT",
    "MAP_RUINS_OF_ALPH_UNDERGROUND_HALL_SINJOH_EVENT", "MAP_RUINS_OF_ALPH_HALL_ENTRANCE_SINJOH_EVENT",
    "MAP_RUINS_OF_ALPH_UNDERGROUND_HALL_SINJOH_EVENT_2", "MAP_SAFARI_ZONE_ENTRANCE_EXTERIOR",
}


def _hgss_place(name):
    """HGSS place names spell Pokemon in capitals ('SLOWPOKE Well')."""
    name = name.replace("’", "'")
    return re.sub(r"\b[A-Z]{3,}\b", lambda m: m.group(0).capitalize(), name)


def _hgss_headers():
    root = os.path.join(DEC, "pokeheartgold")
    secs = {}
    for m in re.finditer(r"#define\s+(MAPSEC_\w+)\s+(\d+)", open(os.path.join(root, "include/constants/map_sections.h")).read()):
        secs[m.group(1)] = int(m.group(2))
    rows = re.findall(r'<row id="[^"]+" index="(\d+)">.*?<language name="English">(.*?)</language>',
                      open(os.path.join(root, "files/msgdata/msg/msg_0279.gmm")).read(), re.S)
    names = {int(i): n for i, n in rows}
    txt = open(os.path.join(root, "src/data/map_headers.h")).read()
    out = []      # in map-id order: (MAP_ const, encounter code or None, place name)
    for m in re.finditer(r"\[(MAP_\w+)\] = \{(.*?)\n\s*\},", txt, re.S):
        body = m.group(2)
        enc = re.search(r"wildEncounterBank = (\w+)", body).group(1)
        sec = re.search(r"\.mapsec = (\w+)", body).group(1)
        out.append((m.group(1), None if enc == "ENCDATA_NA" else enc.removeprefix("ENCDATA_"), _hgss_place(names[secs[sec]])))
    return out


def hgss_location(map_const, base):
    if map_const in HGSS_NAME_OVERRIDES:
        return HGSS_NAME_OVERRIDES[map_const]
    words = map_const.removeprefix("MAP_").lower().replace("mount_", "mt_").split("_")
    bw = re.sub(r"[^a-z0-9 ]", "", base.lower().replace("mt.", "mt").replace("é", "e")
                .replace("’s", "").replace("'s", "")).split()
    i = 0
    while i < min(len(words), len(bw)) and words[i] == bw[i]:
        i += 1
    rest = words[i:] if i else words
    if not rest:
        return base
    suf = " ".join(w.upper() if re.fullmatch(r"b?\d+f", w) else w.capitalize() for w in rest)
    return f"{base} ({suf})"


def heartgold_soulsilver(stem):
    import csv
    root = os.path.join(DEC, "pokeheartgold/files")
    sp = Species(stem)
    g = Game(stem, versions=["HeartGold", "SoulSilver"], times=True)
    headers = _hgss_headers()
    locname = {}
    const_of = {}
    for const, code, base in headers:
        if code and const not in HGSS_SKIP_MAPS:
            assert code not in locname, code
            locname[code] = hgss_location(const, base)
            const_of[code] = const
    # Swarms only happen on the maps in sSwarmMapLUT (src/unk_02097F6C.c):
    # type 0 = grass (swarm[0]), 1 = surf (swarm[1]), 2 = fishing (swarm[3]).
    # Other tables carry filler values in the swarm fields.
    swarm_type = {c: int(t) for c, t in re.findall(
        r"\{\s*(MAP_\w+),\s*(\d)\s*\}", open(os.path.join(DEC, "pokeheartgold/src/unk_02097F6C.c")).read())}
    for ver, fn in (("HeartGold", "g_enc_data.csv"), ("SoulSilver", "s_enc_data.csv")):
        vkw = {"version": ver}
        for row in csv.DictReader(open(os.path.join(root, "fielddata/encountdata", fn))):
            code = row["mapname"]
            if code not in locname:
                continue   # table not referenced by any map header
            loc = locname[code]
            if int(row["rate_walk"]):
                lv = [int(row[f"land_lvl{i}"]) for i in range(12)]
                for t, tname in (("morn", "Morning"), ("day", "Day"), ("nite", "Night")):
                    for i in range(12):
                        g.add(loc, "Walk", sp(row[f"land_species_{t}{i}"]), lv[i], lv[i], HGSS_LAND[i], time=tname, **vkw)
                for key, method in (("hoenn", "Walk (Hoenn Sound)"), ("sinnoh", "Walk (Sinnoh Sound)")):
                    snd = [row[key + "1"], row[key + "2"]]
                    for i, s in zip((2, 3, 4, 5), (snd[0], snd[0], snd[1], snd[1])):
                        # these slots carry the same species at every time in practice;
                        # list against the morning table
                        if s != "SPECIES_NONE" and s != row[f"land_species_morn{i}"]:
                            g.add(loc, method, sp(s), lv[i], lv[i], HGSS_LAND[i], **vkw)
                sw = row["swarm_species0"]
                if swarm_type.get(const_of[code]) == 0:
                    for i in (0, 1):
                        g.add(loc, "Walk (Swarm)", sp(sw), lv[i], lv[i], HGSS_LAND[i], **vkw)

            def slots(prefix, n):
                return [(int(row[f"lvl_min_{prefix}{i}"]), int(row[f"lvl_max_{prefix}{i}"]), row[f"species_{prefix}{i}"]) for i in range(n)]
            if int(row["rate_surf"]):
                s5 = slots("surf", 5)
                for r, (a, b, s) in zip(HGSS_SURF, s5):
                    g.add(loc, "Surf", sp(s), a, b, r, **vkw)
                sw = row["swarm_species1"]
                if swarm_type.get(const_of[code]) == 1 and sw != s5[0][2]:
                    g.add(loc, "Surf (Swarm)", sp(sw), s5[0][0], s5[0][1], HGSS_SURF[0], **vkw)
            if int(row["rate_smash"]):
                for r, (a, b, s) in zip(HGSS_SMASH, slots("smash", 2)):
                    g.add(loc, "Rock Smash", sp(s), a, b, r, **vkw)
            for method, prefix, rate in (("Old Rod", "oldrod", "rate_oldrod"), ("Good Rod", "goodrod", "rate_goodrod"),
                                         ("Super Rod", "superrod", "rate_superrod")):
                if not int(row[rate]):
                    continue
                s5 = slots(prefix, 5)
                night = HGSS_NIGHT_FISH_SLOT.get(method)
                nsp = row["swarm_species2"]
                for i, (r, (a, b, s)) in enumerate(zip(HGSS_ROD, s5)):
                    if i == night and nsp not in ("SPECIES_NONE", s):
                        g.add(loc, method, sp(s), a, b, r, time=["Morning", "Day"], **vkw)
                        g.add(loc, method, sp(nsp), a, b, r, time="Night", **vkw)
                    else:
                        assert not (i == night and nsp == "SPECIES_NONE"), (code, method)
                        g.add(loc, method, sp(s), a, b, r, **vkw)
                fsw = row["swarm_species3"]
                if swarm_type.get(const_of[code]) == 2:
                    for i in HGSS_FISH_SWARM_SLOTS[method]:
                        a, b, s = s5[i]
                        if s != fsw:
                            g.add(loc, method + " (Swarm)", sp(fsw), a, b, HGSS_ROD[i], **vkw)

    # Headbutt (files/arc/headbutt.json; per-version species may differ)
    # Bug-Catching Contest (src/overlay_bug_contest.c): set 0 before the
    # National Dex, sets 1-3 on Tuesday/Thursday/Saturday after it. A roll
    # r in 0..99 picks the first entry with r >= rate.
    mushi = list(csv.DictReader(open(os.path.join(root, "data/mushi/mushi_encount.csv"))))
    assert len(mushi) == 40
    for k, method in enumerate(("Bug-Catching Contest", "Bug-Catching Contest (Tuesday, National Dex)",
                                "Bug-Catching Contest (Thursday, National Dex)",
                                "Bug-Catching Contest (Saturday, National Dex)")):
        rows = mushi[10 * k:10 * k + 10]
        prev = 100
        for r in rows:
            rate = int(r["rate"])
            g.add("National Park", method, sp(r["species"]), int(r["lvlmin"]), int(r["lvlmax"]), prev - rate)
            prev = rate
        assert prev == 0

    # headbutt.json has one table per map id, in map-header order
    hb = json.load(open(os.path.join(root, "arc/headbutt.json")))["tables"]
    assert len(hb) == len(headers)
    for t, (const, _, base) in zip(hb, headers):
        if const in HGSS_SKIP_MAPS:
            continue
        loc = hgss_location(const, base)
        for key, method in (("CommonMons", "Headbutt"), ("RareMons", "Headbutt (Rare Tree)"),
                            ("SecretMons", "Headbutt (Special Tree)")):
            mons = t[key]
            if not mons:
                continue
            assert len(mons) == 6
            for r, m in zip(HGSS_HEADBUTT, mons):
                s = m["species"]
                if isinstance(s, dict):
                    for ver, k in (("HeartGold", "gold"), ("SoulSilver", "silver")):
                        g.add(loc, method, sp(s[k]), m["minLevel"], m["maxLevel"], r, version=ver)
                else:
                    g.add(loc, method, sp(s), m["minLevel"], m["maxLevel"], r)
    return g


# ---------------------------------------------------------------------------
# Gen 5 (ROM extraction lives in generate_encounters_gen5.py)
# ---------------------------------------------------------------------------

def gen5(stem):
    sys.path.insert(0, HERE)
    import generate_encounters_gen5 as g5
    versions = [v for v, _ in g5.GAMES[stem]["roms"]]
    g = Game(stem, versions=versions, seasons=True)
    for r in g5.extract(stem):
        kw = {}
        if "version" in r:
            kw["version"] = r["version"]
        if "season" in r:
            kw["season"] = r["season"]
        g.add(r["location"], r["method"], r["pokemon"], r["min_level"], r["max_level"], r["chance"], **kw)
    return g


# ---------------------------------------------------------------------------
# Gen 6-7 (ROM extraction lives in generate_encounters_gen67.py)
# ---------------------------------------------------------------------------

def gen67(stem):
    sys.path.insert(0, HERE)
    import generate_encounters_gen67 as g67
    cfg = g67.GAMES[stem]
    versions = [v for v, _ in cfg["versions"]]
    g = Game(stem, versions=versions, times=["Day", "Night"] if cfg["gen"] == 7 else False)
    recs = g67.extract(stem)
    # Gen 7: a place can have several separate tables for the same method
    # (different grass patches). Give each such table, with its SOS allies,
    # its own "(Area N)" sub-location so every table still sums to 100.
    relabel = {}
    if cfg["gen"] == 7:
        tables = defaultdict(set)
        for r in recs:
            if not r["method"].startswith("SOS"):
                tables[(r["location"], r["method"])].add(r["table"])
        for loc in sorted({l for l, _ in tables}):
            multi = sorted({t for (l, _), ts in tables.items() if l == loc and len(ts) > 1 for t in ts},
                           key=lambda t: [int(x) for x in t.split(".")])
            for i, t in enumerate(multi, 1):
                relabel[(loc, t)] = f"{loc} (Area {i})"
    for r in recs:
        if (r["location"], r.get("table")) in relabel:
            r = dict(r, location=relabel[(r["location"], r["table"])])
        kw = {}
        if "version" in r:
            kw["version"] = r["version"]
        if "time" in r:
            kw["time"] = r["time"]
        chance = r["chance"]
        if r["method"] == "Horde":
            # one of 3 hordes of 5 is picked at its rate; count each member's share
            chance = Fraction(chance * r["horde_count"], 5)
        g.add(r["location"], r["method"], r["pokemon"], r["min_level"], r["max_level"], chance, **kw)
    return g


# ---------------------------------------------------------------------------
# One-off encounters from the PokéAPI cache (gifts, eggs, static encounters...)
# ---------------------------------------------------------------------------

PKAPI_CACHE = os.path.join(HERE, ".scrape_cache_api")
PKAPI_VERSIONS = {
    "red_blue": {"red": "Red", "blue": "Blue"}, "yellow": {"yellow": "Yellow"},
    "gold_silver": {"gold": "Gold", "silver": "Silver"}, "crystal": {"crystal": "Crystal"},
    "ruby_sapphire": {"ruby": "Ruby", "sapphire": "Sapphire"}, "emerald": {"emerald": "Emerald"},
    "firered_leafgreen": {"firered": "FireRed", "leafgreen": "LeafGreen"},
    "diamond_pearl": {"diamond": "Diamond", "pearl": "Pearl"}, "platinum": {"platinum": "Platinum"},
    "heartgold_soulsilver": {"heartgold": "HeartGold", "soulsilver": "SoulSilver"},
    "black_white": {"black": "Black", "white": "White"},
    "black2_white2": {"black-2": "Black 2", "white-2": "White 2"},
    "x_y": {"x": "X", "y": "Y"},
    "omega_ruby_alpha_sapphire": {"omega-ruby": "Omega Ruby", "alpha-sapphire": "Alpha Sapphire"},
    "sun_moon": {"sun": "Sun", "moon": "Moon"},
    "ultra_sun_ultra_moon": {"ultra-sun": "Ultra Sun", "ultra-moon": "Ultra Moon"},
}
# Methods that are not encounter-table data. Event distributions
# (colosseum-bonus-disc-*, pokemon-channel-pal, pokemon-ranger) are dropped.
PKAPI_SPECIAL = {
    "gift": "Gift", "gift-egg": "Gift Egg", "only-one": "Static", "pokeflute": "Poké Flute",
    "squirt-bottle": "Squirt Bottle", "wailmer-pail": "Wailmer Pail", "devon-scope": "Devon Scope",
    "roaming-grass": "Roaming (Grass)", "roaming-water": "Roaming (Water)",
    "feebas-tile-fishing": "Feebas Tile Fishing", "island-scan": "Island Scan", "npc-trade": "NPC Trade",
}

# PokéAPI location-area slug -> in-game location, where the generic renaming
# below doesn't give the in-game name. Keyed by slug (shared across games).
PKAPI_AREA_NAMES = {
    "celadon-city-celadon-mansion": "Celadon City (Celadon Mansion)",
    "cinnabar-island-cinnabar-lab": "Cinnabar Island (Pokémon Lab)",
    "kanto-route-3-pokemon-center": "Route 4 (Pokémon Center)",   # Magikarp salesman (Mt. Moon Pokémon Center is on Route 4)
    "kanto-route-4-pokemon-center": "Route 4 (Pokémon Center)",
    "saffron-city-fighting-dojo": "Saffron City (Fighting Dojo)",
    "saffron-city-silph-co-7f": "Silph Co. (7F)",
    "kanto-victory-road-2-2f": "Victory Road (2F)",
    "goldenrod-city-bills-house": "Goldenrod City (Bill's House)",
    "goldenrod-city-north-gate": "Goldenrod City (North Gate)",
    "cianwood-city-manias-house": "Cianwood City (Mania's House)",
    "roaming-johto-area": "Johto (Roaming)",
    "roaming-kanto-area": "Kanto (Roaming)",
    "roaming-hoenn-area": "Hoenn (Roaming)",
    "roaming-sinnoh-area": "Sinnoh (Roaming)",
}


# Per-game fixes after review against Bulbapedia's availability lists:
# None drops a PokéAPI entry that belongs to another game/place; a string renames.
PKAPI_FIXES = {
    ("gold_silver", "Bell Tower (roof)"): "Tin Tower (Roof)",
    ("crystal", "Bell Tower (roof)"): "Tin Tower (Roof)",
    ("crystal", "Bell Tower (1F)"): "Tin Tower (1F)",
    ("ruby_sapphire", "Lighthouse Basement"): None,           # no such Electrode
    ("ruby_sapphire", "Weather Institute (Road 119)"): "Weather Institute",
    ("ruby_sapphire", "Mossdeep City (Steven's house)"): "Mossdeep City (Steven's House)",
    ("emerald", "Team Magma Hideout"): None,                  # Emerald: Aqua Hideout only
    ("emerald", "Weather Institute (Road 119)"): "Weather Institute",
    ("emerald", "Mossdeep City (Steven's house)"): "Mossdeep City (Steven's House)",
    ("emerald", "Hoenn Battle Frontier"): "Battle Frontier",
    ("firered_leafgreen", "Mt. Ember Summit"): "Mt. Ember (Summit)",
    ("diamond_pearl", "Lake Verity (before Galactic intervention)"): "Lake Verity",
    ("diamond_pearl", "Iron Island (B2F left)"): "Iron Island (B2F Left Room)",
    ("platinum", "Iron Island (B2F left)"): "Iron Island (B2F Left Room)",
    ("platinum", "Team Rocket HQ"): None,                     # HGSS data mis-tagged
    ("platinum", "Union Cave (B2F)"): None,
    ("platinum", "Sinjoy Ruins"): None,
    ("heartgold_soulsilver", "Silph Co."): "Saffron City (Silph Co.)",
    ("heartgold_soulsilver", "Pokémon Center (Cianwood City)"): "Cianwood City (Pokémon Center)",
    ("heartgold_soulsilver", "Violet City (Poke Mart)"): "Violet City (Poké Mart)",
    ("heartgold_soulsilver", "Mt. Silver (top)"): "Mt. Silver Cave (Moltres Chamber)",
    ("heartgold_soulsilver", "Sinjoy Ruins"): "Sinjoh Ruins",
    ("black_white", "Team Flare Secret HQ"): "Unova (Roaming)",   # Thundurus/Tornadus roam
    ("black_white", "Lighthouse Basement"): "Liberty Garden",
    ("black_white", "Relic Castle (D)"): "Relic Castle",
    ("black_white", "Dreamyard (B1F)"): "Dreamyard",
    ("black_white", "Giant Chasm (forest cave)"): "Giant Chasm",
    ("black_white", "Game Freak HQ 1F (Castelia City)"): "Castelia City (Game Freak Building)",
    ("black_white", "Victory Road (4F middle room)"): "Victory Road",
    ("black2_white2", "Relic Castle (D)"): "Relic Castle",
    ("black2_white2", "Giant Chasm (forest cave)"): "Giant Chasm",
    ("black2_white2", "Weather Institute (Road 6)"): "Route 6 (Weather Institute)",
    ("black2_white2", "Nature Sanctuary"): "Nature Preserve",
    ("sun_moon", "New Mauville"): None,                    # ORAS data mis-tagged
}


def _pkapi_json(url):
    p = os.path.join(PKAPI_CACHE, re.sub(r"[^a-zA-Z0-9._-]", "_", url)[:220] + ".json")
    if not os.path.exists(p):
        return None
    return json.load(open(p))


def _pkapi_raw_name(slug, url):
    """The display name scrape_encounters.py derived for a location area."""
    name = None
    d = _pkapi_json(url)
    if d:
        for n in d.get("names", []):
            if n["language"]["name"] == "en":
                name = n["name"]
        if not name and d.get("location"):
            ld = _pkapi_json(d["location"]["url"])
            if ld:
                for n in ld.get("names", []):
                    if n["language"]["name"] == "en":
                        name = n["name"]
                        loc_slug = ld["name"]
                        suffix = slug.removeprefix(loc_slug).strip("-")
                        if suffix and suffix != "area":
                            name = f"{name} — " + " ".join(w.capitalize() for w in suffix.split("-"))
    if not name:
        name = " ".join(w.capitalize() for w in slug.split("-"))
    return name


def _pkapi_area_name(slug, url, stem=None):
    if slug in PKAPI_AREA_NAMES:
        return PKAPI_AREA_NAMES[slug]
    name = _pkapi_raw_name(slug, url)
    if stem in ("x_y", "omega_ruby_alpha_sapphire", "sun_moon", "ultra_sun_ultra_moon"):
        sys.path.insert(0, HERE)
        import generate_encounters_gen67 as g67
        mapped = g67.POKEAPI_LOCATION_NAMES.get(stem, {}).get(name)
        if mapped:
            return mapped
    name = re.sub(r"^(?:Kanto |Johto |Hoenn |Sinnoh |Unova |Kalos |Alola )?Road (\d+)", r"Route \1", name)
    name = re.sub(r"\bMount\b", "Mt.", name).replace("Pokemon", "Pokémon").replace("Digletts", "Diglett's")
    return name


def add_pokeapi_specials(g, stem):
    """Merge PokéAPI's non-table encounters into g. Their locations are mapped
    onto an existing location name when one matches after normalisation."""
    versions = PKAPI_VERSIONS[stem]
    dex = dex_names(stem)
    existing = {re.sub(r"[^a-z0-9]", "", l.lower()): l for l in g.raw}
    n = 0
    for path in glob.glob(os.path.join(PKAPI_CACHE, "https___pokeapi.co_api_v2_pokemon_*_encounters.json")):
        pid = int(re.search(r"pokemon_(\d+)_encounters", path).group(1))
        if pid not in dex:
            continue
        for le in json.load(open(path)):
            slug, url = le["location_area"]["name"], le["location_area"]["url"]
            for vd in le["version_details"]:
                ver = versions.get(vd["version"]["name"])
                if not ver:
                    continue
                for ed in vd["encounter_details"]:
                    method = PKAPI_SPECIAL.get(ed["method"]["name"])
                    if not method:
                        continue
                    loc = _pkapi_area_name(slug, url, stem)
                    if (stem, loc) in PKAPI_FIXES:
                        loc = PKAPI_FIXES[(stem, loc)]
                        if loc is None:
                            continue
                    if loc == "Unova (Roaming)":
                        method = "Roaming (Grass)"
                    loc = existing.get(re.sub(r"[^a-z0-9]", "", loc.lower()), loc)
                    kw = {"version": ver} if len(versions) > 1 else {}
                    # one fixed encounter: record it once per (version, level)
                    key = (loc, method, dex[pid], ed["min_level"], ed["max_level"], ver)
                    if key in _SPECIAL_SEEN:
                        continue
                    _SPECIAL_SEEN.add(key)
                    g.add(loc, method, dex[pid], ed["min_level"], ed["max_level"], 100, **kw)
                    n += 1
    return n


_SPECIAL_SEEN = set()


EXTRACTORS = {
    "red_blue": gen1, "yellow": gen1,
    "gold_silver": gen2, "crystal": gen2,
    "ruby_sapphire": gen3, "emerald": gen3, "firered_leafgreen": gen3,
    "platinum": platinum, "diamond_pearl": diamond_pearl,
    "heartgold_soulsilver": heartgold_soulsilver,
    "black_white": gen5, "black2_white2": gen5,
    "x_y": gen67, "omega_ruby_alpha_sapphire": gen67, "sun_moon": gen67, "ultra_sun_ultra_moon": gen67,
}


def main():
    ap = argparse.ArgumentParser(description="Generate encounters/*.js from game data.")
    ap.add_argument("--game", action="append", choices=sorted(EXTRACTORS),
                    help="file stem to generate (repeatable); default: all")
    ap.add_argument("--output-dir", default=os.path.join(HERE, "encounters"))
    ap.add_argument("--no-specials", action="store_true",
                    help="skip the gift/static/roamer entries taken from the PokéAPI cache")
    args = ap.parse_args()
    for stem in args.game or list(EXTRACTORS):
        print(f"{stem}:")
        g = EXTRACTORS[stem](stem)
        if not args.no_specials:
            n = add_pokeapi_specials(g, stem)
            print(f"  {n} one-off encounters from the PokéAPI cache")
        write_files(g.build(), args.output_dir, stem)


if __name__ == "__main__":
    main()
