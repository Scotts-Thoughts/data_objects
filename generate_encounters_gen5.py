"""Helper for generate_encounters.py: extract Gen 5 (Black/White, Black 2/White 2) wild-encounter tables from the original ROMs.

Inputs (read-only):
  ROMs   A:/Dropbox/stp-projects/programs/roms/originals/5-Black.nds, 5-White.nds  (game "black_white")
         A:/Dropbox/stp-projects/programs/roms/originals/5-Black2.nds, 5-White2.nds (game "black2_white2")
  NARCs  encounter tables   BW a/1/2/6 (112 files)   BW2 a/1/2/7 (135 files)
         zone headers       a/0/1/2 (single file of 48-byte records; BW 427 zones, BW2 615 zones)
                              +0x14 u16 encounter file (BW: 0xFFFF = none; BW2: low 13 bits, 0x1FFF = none)
                              +0x1A u8  place-name index
         text               a/0/0/2  place names = file 89 (BW) / 109 (BW2); species names = 70 / 90
  Pokedex keys  data_objects/pokedex/black_white.js, pokedex/black2_white2.js (species -> key mapping)

Encounter file = 1 or 4 (spring, summer, autumn, winter) 0xE8-byte blocks:
  8 rate bytes (grass, dark grass, shaking spot, surf, surf spot, super rod, super rod spot, pad),
  then 12+12+12+5+5+5+5 slots of {u16 species|form<<11, u8 min, u8 max}. Rate 0 = table unused.
Season order verified by Deerling's form (0..3 = Spring..Winter) in each block.

extract(game) -> list of records
  {"location","method","pokemon","min_level","max_level","chance", ["version"], ["season"]}
One record per raw slot after collapsing slots that are identical in both versions and/or
all seasons (see _collapse). Identical encounter files under one place name are emitted once.
"""
from __future__ import annotations

import json
import re
import struct
import sys
from pathlib import Path

import os
ROM_DIR = Path(os.environ.get("POKEMON_ROM_DIR", "A:/Dropbox/stp-projects/programs/roms/originals"))
REPO = Path(__file__).resolve().parent

GAMES = {
    "black_white": dict(roms=[("Black", "5-Black.nds"), ("White", "5-White.nds")],
                        enc_narc="a/1/2/6", place_text=89, species_text=70,
                        pokedex="pokedex/black_white.js"),
    "black2_white2": dict(roms=[("Black 2", "5-Black2.nds"), ("White 2", "5-White2.nds")],
                          enc_narc="a/1/2/7", place_text=109, species_text=90,
                          pokedex="pokedex/black2_white2.js"),
}
ZONE_NARC = "a/0/1/2"
TEXT_NARC = "a/0/0/2"
SEASONS = ["Spring", "Summer", "Autumn", "Winter"]

# (table key, slot count, method, slot chances)
GRASS_PCT = [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1]
SURF_PCT = [60, 30, 5, 4, 1]
ROD_PCT = [40, 40, 15, 4, 1]
TABLES = [
    ("grass", 12, "Walk", GRASS_PCT),
    ("dark", 12, "Dark Grass", GRASS_PCT),
    ("spot", 12, None, GRASS_PCT),          # Grass / Cave / Bridge Spots, by location
    ("surf", 5, "Surf", SURF_PCT),
    ("surfspot", 5, "Surf Spots", SURF_PCT),
    ("rod", 5, "Super Rod", ROD_PCT),
    ("rodspot", 5, "Super Rod Spots", ROD_PCT),
]
for _t in TABLES:
    assert sum(_t[3]) == 100 and len(_t[3]) == _t[1]

def u16(b, o):
    return struct.unpack_from("<H", b, o)[0]


def u32(b, o):
    return struct.unpack_from("<I", b, o)[0]


# --------------------------------------------------------------------------- #
# NDS filesystem: locate files by their FNT path (e.g. "a/2/5/6")
# --------------------------------------------------------------------------- #
class NDS:
    def __init__(self, path: str):
        self.data = Path(path).read_bytes()
        d = self.data
        self.fnt_off = u32(d, 0x40)
        self.fat_off = u32(d, 0x48)
        self.paths: dict[str, int] = {}
        self._walk_fnt(0, "")

    def _fat_entry(self, fid):
        o = self.fat_off + fid * 8
        return u32(self.data, o), u32(self.data, o + 4)

    def _walk_fnt(self, dir_id, prefix):
        d, base = self.data, self.fnt_off
        entry = base + (dir_id & 0xFFF) * 8
        sub_off = u32(d, entry)
        first_file = u16(d, entry + 4)
        p = base + sub_off
        fid = first_file
        while True:
            t = d[p]
            p += 1
            if t == 0:
                break
            length = t & 0x7F
            name = d[p:p + length].decode("ascii")
            p += length
            if t & 0x80:  # subdirectory
                subid = u16(d, p)
                p += 2
                self._walk_fnt(subid, prefix + name + "/")
            else:
                self.paths[prefix + name] = fid
                fid += 1

    def file_by_path(self, path: str) -> bytes:
        s, e = self._fat_entry(self.paths[path])
        return self.data[s:e]


def parse_narc(b: bytes) -> list[bytes]:
    """Split a NARC container into its sub-files."""
    assert b[0:4] == b"NARC", b[0:4]
    o = 0x10
    assert b[o:o + 4] == b"BTAF", b[o:o + 4]
    btaf_size = u32(b, o + 4)
    nfiles = u32(b, o + 8)
    fat = []
    p = o + 12
    for _ in range(nfiles):
        fat.append((u32(b, p), u32(b, p + 4)))
        p += 8
    o += btaf_size
    assert b[o:o + 4] == b"BTNF", b[o:o + 4]
    o += u32(b, o + 4)
    assert b[o:o + 4] == b"GMIF", b[o:o + 4]
    img = o + 8
    return [b[img + s:img + e] for (s, e) in fat]


# --------------------------------------------------------------------------- #
# Gen-5 text decoder (port of PPTxtHandler.GetStrings) — section 0 only
# --------------------------------------------------------------------------- #
def _decompress(chars: list[int]) -> list[int]:
    out = []
    j = 1
    shift = 0
    trans = 0
    while True:
        if shift >= 0x10:
            shift -= 0x10
            if shift > 0:
                v = trans | ((chars[j] << (9 - shift)) & 0x1FF)
                if (v & 0xFF) == 0xFF:
                    break
                if v not in (0x0, 0x1):
                    out.append(v)
        else:
            v = (chars[j] >> shift) & 0x1FF
            if (v & 0xFF) == 0xFF:
                break
            if v not in (0x0, 0x1):
                out.append(v)
            shift += 9
            if shift < 0x10:
                trans = (chars[j] >> shift) & 0x1FF
                shift += 9
            j += 1
    return out


def decode_text_file(ds: bytes) -> list[str]:
    num_sections = u16(ds, 0)
    num_entries = u16(ds, 2)
    pos = 12
    section_offset = []
    for _ in range(min(num_sections, 16)):
        section_offset.append(u32(ds, pos))
        pos += 4
    pos = section_offset[0]
    pos += 4  # skip section size
    table_offsets = []
    char_counts = []
    for _ in range(num_entries):
        table_offsets.append(u32(ds, pos)); pos += 4
        char_counts.append(u16(ds, pos)); pos += 2
        pos += 2  # unknown
    out = []
    for j in range(num_entries):
        cc = char_counts[j]
        pos = section_offset[0] + table_offsets[j]
        enc = [u16(ds, pos + 2 * k) for k in range(cc)]
        key = enc[cc - 1] ^ 0xFFFF
        for k in range(cc - 1, -1, -1):
            enc[k] ^= key
            key = ((key >> 3) | (key << 13)) & 0xFFFF
        if enc and enc[0] == 0xF100:
            enc = _decompress(enc)
            cc = len(enc)
        s = []
        for k in range(cc):
            c = enc[k]
            if c == 0xFFFF:
                break
            if 20 < c <= 0xFFF0 and c != 0xF000:
                s.append(chr(c))
        out.append("".join(s))
    return out


# --------------------------------------------------------------------------- #
# PWT extraction
# --------------------------------------------------------------------------- #


# --------------------------------------------------------------------------- #
# Location naming
# --------------------------------------------------------------------------- #
# Encounter files that share a place name but have different contents get a
# Bulbapedia-style sub-area suffix, keyed by (game, lowest encounter-file index
# of the group of byte-identical files).  Files with identical contents under
# one place name are emitted once (e.g. the 4 Twist Mountain floors).
# Sub-area names follow the area headings of the Bulbapedia location pages (matched by
# comparing species/chance/level tables); "" = keep the bare place name.
# Entries marked (?) are not distinguished on Bulbapedia and are named from the zone
# layout (zone header parent / map matrix) and PokeAPI's area names.
SUBAREA: dict[str, dict[int, str]] = {
    "black_white": {
        3: "Ruins", 4: "Basement",                                   # Dreamyard
        5: "Outer area", 6: "Inner area",                            # Pinwheel Forest
        7: "Entrance", 8: "Desert",                                  # Desert Resort
        9: "1F-B1F", 11: "B2F-B6F", 15: "Lowest floor", 30: "Volcarona's room",  # Relic Castle
        41: "1F", 42: "B1F", 43: "B2F",                              # Chargestone Cave
        48: "Entrance", 49: "Outside", 50: "1F", 51: "2F",           # Dragonspiral Tower
        52: "Outside", 53: "1F middle and rightmost rooms",          # Victory Road
        54: "1F leftmost room, 2F-3F", 56: "4F middle room",
        62: "4F leftmost and rightmost rooms, 5F-7F",
        68: "Entrance", 69: "Cave", 70: "Crater forest", 71: "Cave depths",  # Giant Chasm
        89: "2F", 90: "3F", 91: "4F", 92: "5F",                      # Celestial Tower
        96: "1F", 97: "B1F", 98: "B2F",                              # Challenger's Cave
        99: "", 100: "Badge Check Gates",  # Route 10 (?) zone 358 = one of the 9 1x1 gate-area maps (zones 356-364)
    },
    "black2_white2": {
        6: "Ruins", 7: "Basement",                                   # Dreamyard
        8: "Outer area", 9: "Inner area",                            # Pinwheel Forest
        10: "Entrance", 11: "Desert",                                # Desert Resort
        12: "1F-B1F", 14: "Lowest floor", 18: "Volcarona's room",    # Relic Castle
        20: "1F", 21: "B1F", 22: "B2F",                              # Chargestone Cave
        27: "Entrance", 28: "Outside", 29: "1F", 30: "2F",           # Dragonspiral Tower
        31: "4F",            # Victory Road: zone 228 = top floor of the BW Victory Road (BW map 198)
        71: "1F", 72: "Grove", 73: "Outside 1", 74: "2F", 75: "2F Back",
        76: "Outside 2", 77: "3F",
        78: "North cave",  # (?) zone 594, 2x2 cave; same as 1F except Super Rod levels; not on Bulbapedia
        32: "Entrance", 33: "Cave", 34: "Crater forest",             # Giant Chasm (Cave = cave + cave depths)
        37: "", 38: "Side room",  # Castelia Sewers (?) zone 496 only; differs from the rest only in rod-spot levels
        44: "Outer area", 45: "Inner area",  # Floccesy Ranch (?) 44 = overworld zone (water only), 45 = ranch map
        46: "Entrance", 47: "Inside",                                # Virbank Complex
        48: "Exterior", 49: "Interior entrances", 50: "Interior main",  # Reversal Mountain
        61: "1F", 65: "B1F",  # Strange House (?) per PokeAPI; Bulbapedia has one table
        81: "Exit to Castelia City", 82: "Middle", 83: "Exit to Driftveil City",  # Relic Passage
        84: "Entrance", 85: "Interior",  # Clay Tunnel (?) 84 = zone 506 (entry zone, no water), 85 = zones 507-508
        93: "1F", 94: "B1F",  # Seaside Cave: zone 515 (entry, parent) = 1F. Bulbapedia lists the two tables swapped.
        112: "2F", 113: "3F", 114: "4F", 115: "5F",                  # Celestial Tower
    },
}

# Method label for the "shaking spot" table (dust clouds in caves, shadows on bridges),
# from the Bulbapedia location pages (Rustling / Dust / Shadow).
CAVE_SPOT_PLACES = {
    "Chargestone Cave", "Twist Mountain", "Wellspring Cave", "Mistralton Cave", "Guidance Chamber",
    "Challenger's Cave", "Trial Chamber", "Relic Passage", "Clay Tunnel",
    "Underground Ruins", "Rock Peak Chamber", "Iceberg Chamber", "Iron Chamber", "Seaside Cave",
}
CAVE_SPOT_LOCATIONS = {
    "black_white": {"Victory Road", "Giant Chasm (Cave)", "Giant Chasm (Cave depths)"},  # all BW VR spots are dust
    "black2_white2": {"Victory Road (2F)", "Victory Road (2F Back)", "Victory Road (3F)", "Victory Road (4F)",
                      "Giant Chasm (Cave)", "Reversal Mountain (Interior entrances)",
                      "Reversal Mountain (Interior main)"},  # Exterior uses rustling grass
}
BRIDGE_SPOT_PLACES = {"Driftveil Drawbridge", "Marvelous Bridge"}  # Village Bridge uses rustling grass

# Tables present in the ROM but unreachable because the map has no water in those seasons
# (Bulbapedia: Castelia Sewers needs Surf in spring/summer only; the water is drained in autumn/winter).
UNREACHABLE = {
    ("black2_white2", "Castelia Sewers"): (("surf", "surfspot", "rod", "rodspot"), ("Autumn", "Winter")),
}


def spot_method(game: str, place: str, label: str) -> str:
    if place in BRIDGE_SPOT_PLACES:
        return "Bridge Spots"
    if place in CAVE_SPOT_PLACES or label in CAVE_SPOT_LOCATIONS[game] or \
            (game == "black_white" and place == "Victory Road"):
        return "Cave Spots"
    return "Grass Spots"


# --------------------------------------------------------------------------- #
# Pokedex keys
# --------------------------------------------------------------------------- #
FORM_KEYS = {(550, 1): "Basculin (Blue Striped)"}
# Form bits that are not separate pokedex entries (mapped to the base key, no warning).
COSMETIC_FORMS = {585: "Deerling season", 586: "Sawsbuck season"}


def load_pokedex(path: Path) -> tuple[dict[int, str], set[str]]:
    text = path.read_text(encoding="utf-8")
    base: dict[int, str] = {}
    keys: set[str] = set()
    pat = re.compile(r'^    ("(?:[^"\\]|\\.)*"): \{\s*\n\s*"species": [^\n]*\n'
                     r'\s*"rom_id": (\d+),\s*\n\s*"national_dex_number": (\d+)', re.M)
    for m in pat.finditer(text):
        key = json.loads(m.group(1))
        keys.add(key)
        dex = int(m.group(3))
        if "(" not in key and dex not in base:
            base[dex] = key
    return base, keys


# --------------------------------------------------------------------------- #
# Encounter parsing
# --------------------------------------------------------------------------- #
def parse_encounter_file(f: bytes) -> list[dict]:
    """-> one dict per season block: table key -> list of (species, form, min, max), or None if rate 0."""
    assert len(f) in (0xE8, 4 * 0xE8), len(f)
    out = []
    for b in range(len(f) // 0xE8):
        blk = f[b * 0xE8:(b + 1) * 0xE8]
        p = 8
        tabs = {}
        for ti, (key, cnt, _m, _pct) in enumerate(TABLES):
            slots = []
            for _ in range(cnt):
                v = u16(blk, p)
                slots.append((v & 0x7FF, v >> 11, blk[p + 2], blk[p + 3]))
                p += 4
            tabs[key] = slots if blk[ti] else None
        assert p == 0xE8
        out.append(tabs)
    return out


def _load(game: str):
    cfg = GAMES[game]
    roms = [(v, NDS(str(ROM_DIR / fn))) for v, fn in cfg["roms"]]
    zones = [parse_narc(n.file_by_path(ZONE_NARC))[0] for _, n in roms]
    assert zones[0] == zones[1], "zone headers differ between versions"
    texts = [parse_narc(n.file_by_path(TEXT_NARC)) for _, n in roms]
    places = decode_text_file(texts[0][cfg["place_text"]])
    assert places == decode_text_file(texts[1][cfg["place_text"]])
    assert places[6] == "Striaton City", places[6]
    rom_species = decode_text_file(texts[0][cfg["species_text"]])
    assert rom_species[495] == "Snivy", rom_species[495]
    enc = [parse_narc(n.file_by_path(cfg["enc_narc"])) for _, n in roms]
    assert len(enc[0]) == len(enc[1])
    z = zones[0]
    file_place: dict[int, set[str]] = {}
    file_zones: dict[int, list[int]] = {}
    for i in range(len(z) // 48):
        r = z[i * 48:(i + 1) * 48]
        w = u16(r, 0x14)
        if game == "black_white":
            w = None if w == 0xFFFF else w
        else:
            w = None if (w & 0x1FFF) == 0x1FFF else (w & 0x1FFF)
        if w is None:
            continue
        assert w < len(enc[0]), (i, w)
        file_place.setdefault(w, set()).add(places[r[0x1A]])
        file_zones.setdefault(w, []).append(i)
    return cfg, roms, enc, file_place, file_zones, rom_species


def location_groups(game: str, _loaded=None):
    """-> (list of (location label, place, [file indices]), unmapped file indices)."""
    cfg, roms, enc, file_place, file_zones, _ = _loaded or _load(game)
    unmapped = [i for i in range(len(enc[0])) if i not in file_place]
    by_place: dict[str, list[int]] = {}
    for f in sorted(file_place):
        ps = file_place[f]
        assert len(ps) == 1, (f, ps)
        by_place.setdefault(next(iter(ps)), []).append(f)
    groups = []
    for place, files in by_place.items():
        content: dict[tuple[bytes, bytes], list[int]] = {}
        for f in files:
            content.setdefault((enc[0][f], enc[1][f]), []).append(f)
        gl = list(content.values())
        for fs in gl:
            if len(gl) == 1:
                label = place
            else:
                sub = SUBAREA[game].get(fs[0])
                if sub is None:
                    print(f"WARNING: no sub-area label for {game} {place} files {fs}", file=sys.stderr)
                    sub = f"file {fs[0]}"
                label = f"{place} ({sub})" if sub else place
            groups.append((label, place, fs))
    labels = [g[0] for g in groups]
    assert len(labels) == len(set(labels)), "duplicate location labels"
    return groups, unmapped


def _collapse(raw: dict, versions: list[str], seasonal: bool) -> list[tuple]:
    """raw: (version, season) -> slot value. Returns [(version|None, seasons|None, value)]."""
    out = []
    values = []
    for v in raw.values():
        if v not in values:
            values.append(v)
    seasons_all = SEASONS if seasonal else [None]
    for val in values:
        per_v = {ver: [s for s in seasons_all if raw.get((ver, s)) == val] for ver in versions}
        if per_v[versions[0]] == per_v[versions[1]]:
            todo = [(None, per_v[versions[0]])]
        else:
            todo = [(ver, ss) for ver, ss in per_v.items() if ss]
        for ver, ss in todo:
            out.append((ver, None if (not seasonal or ss == SEASONS) else ss, val))
    return out


def extract(game: str) -> list[dict]:
    loaded = _load(game)
    cfg, roms, enc, file_place, file_zones, rom_species = loaded
    base, keys = load_pokedex(REPO / cfg["pokedex"])
    versions = [v for v, _ in roms]
    groups, _unmapped = location_groups(game, loaded)
    unknown_forms: set[tuple[int, int]] = set()

    def name(sp: int, form: int) -> str:
        if form and (sp, form) in FORM_KEYS:
            k = FORM_KEYS[(sp, form)]
        else:
            if form and sp not in COSMETIC_FORMS:
                unknown_forms.add((sp, form, rom_species[sp]))
            k = base[sp]
        assert k in keys, k
        return k

    records = []
    for label, place, files in groups:
        f = files[0]
        parsed = {ver: parse_encounter_file(enc[vi][f]) for vi, ver in enumerate(versions)}
        nblk = {len(p) for p in parsed.values()}
        assert len(nblk) == 1, (label, nblk)
        seasonal = nblk.pop() == 4
        if (game, place) in UNREACHABLE and not seasonal:
            # single-table file used all year: expand to 4 identical seasons so the override can apply
            parsed = {ver: p * 4 for ver, p in parsed.items()}
            seasonal = True
        seasons = SEASONS if seasonal else [None]
        for key, cnt, method, pct in TABLES:
            meth = method or spot_method(game, place, label)
            unreach = UNREACHABLE.get((game, place))  # (tables, seasons) to drop
            for k in range(cnt):
                raw = {}
                for ver in versions:
                    for si, s in enumerate(seasons):
                        tab = parsed[ver][si][key]
                        if unreach and key in unreach[0] and s in unreach[1]:
                            continue
                        if tab is None:
                            continue
                        sp, form, lo, hi = tab[k]
                        assert sp and lo and hi and lo <= hi, (label, key, k, tab[k])
                        raw[(ver, s)] = (name(sp, form), lo, hi)
                for ver, ss, (pk, lo, hi) in _collapse(raw, versions, seasonal):
                    rec = {"location": label, "method": meth, "pokemon": pk,
                           "min_level": lo, "max_level": hi, "chance": pct[k]}
                    if ver:
                        rec["version"] = ver
                    if ss:
                        rec["season"] = ss
                    records.append(rec)
    if unknown_forms:
        print(f"WARNING: unmapped forms (mapped to base species): {sorted(unknown_forms)}", file=sys.stderr)
    return records


def main():
    out_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
    for game in GAMES:
        recs = extract(game)
        (out_dir / f"{game}_raw.json").write_text(json.dumps(recs, ensure_ascii=False, indent=1),
                                                  encoding="utf-8")
        print(game, len(recs), "records")


if __name__ == "__main__":
    main()
