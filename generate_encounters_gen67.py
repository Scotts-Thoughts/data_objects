"""Helper for generate_encounters.py: extract wild-encounter tables for Gen 6/7 3DS games straight from decrypted ROMs.

Stdlib only. Read-only on the ROMs (seek + read; nothing is written to them).

Inputs
------
ROMs (decrypted NCSD, partition 0 NCCH with NoCrypto flag set):
    A:/Dropbox/stp-projects/programs/roms/originals/6-X.3ds, 6-Y.3ds,
    6-Omega Ruby.3ds, 6-Alpha Sapphire.3ds, 7-Sun.3ds, 7-Moon.3ds,
    7-Ultra Sun.3ds, 7-Ultra Moon.3ds
Species keys: A:/Dropbox/stp-projects/programs/data_objects/pokedex/<game>.js

Container path: NCSD partition 0 -> NCCH (+0x1B0 RomFS offset, media units 0x200)
-> IVFC level 3 (dir/file metadata tables) -> GARC ("CRAG"; FATO/FATB/FIMB).

X/Y   : zone GARC a/0/1/2 (one LZ11 "ZO" container per zone, last file = zonedata).
        ZO section 0 = 0x38-byte zone header (location text id at +0x1C, & 0x1FF);
        section 3 = encounters: 0x10 header + 94 slots x 4 bytes
        (u16 species|form<<11, u8 min, u8 max):
        12 grass, 12 yellow fl., 12 purple fl., 12 red fl., 12 rough terrain,
        5 surf, 5 rock smash, 3 old, 3 good, 3 super rod, 3x5 horde.
        Location names: text GARC a/0/7/4 file 72.
ORAS  : zone GARC a/0/1/3, same ZO container; section 3 = 0xE header + 61 slots:
        12 grass, 12 long grass, 3 DexNav-only, 5 surf, 5 rock smash,
        3 old, 3 good, 3 super rod, 3x5 horde.  Names: a/0/7/3 file 90.
SM/USUM: encounter GARC a/0/8/2 (Sun, Ultra Sun) or a/0/8/3 (Moon, Ultra Moon), 11 files per "area"; file 9 = "EA" mini-pack of
        tables (u32 header/terrain, day table @+4, night table @+0x168; table =
        u8 min, u8 max, 10 u8 rates, 8 sets x 10 u32 slots (set 0 = regular,
        1..7 = SOS allies), 6 u32 weather-SOS slots; u32 = species|form<<11).
        File 0 = "ED" entity pack; its sub-pack 6 lists per-zone encounter
        regions (u32 count, then 7-u32 records: kind, table index, flags, ...).
        zonedata a/0/7/7 file 0 (LZ11, 0x54 per zone; location text id at +0x1C);
        world data a/0/9/1 ("WD" mini; section 0 lists (u16 zone, u16 area) pairs,
        which also gives the zone order used by the ED sub-packs).
        Location names: a/0/3/2 file 67 (SM) / 72 (USUM); even line = name,
        following odd line = sub-area name (rendered "Name (Sub)").

Records (one per raw slot; identical tables/zones within a location are emitted once):
    location, method, pokemon (pokedex/<game>.js key), min_level, max_level,
    chance (percent within that table), version (only when version-exclusive),
    time (["Day"]/["Night"], Gen 7 only, only when day/night tables differ),
    plus bookkeeping: table ("area.index", Gen 7), zone (Gen 6 zone id), slot,
    horde_count (members of that species in the 5-slot horde), location_inferred
    (Gen 7 fishing/ambush/berry table whose owning zone was chosen by UNREF_OVERRIDE).
Methods:
    Gen 6: Walk (grass/cave floor), Yellow/Purple/Red Flowers, Rough Terrain (XY),
      Long Grass (ORAS tall grass), Seaweed (ORAS underwater zones), DexNav (ORAS
      3 DexNav-only slots; chance 0 = no fixed rate), Surf, Rock Smash, Old/Good/Super
      Rod, Horde (3 hordes of 5 at 60/35/5; chance = horde rate). Gen 6 slot rates:
      12-slot 10x9/5/4/1, 5-slot 50/30/15/4/1, rods 60/35/5 (rates are code-side).
    Gen 7: Walk / Surf (tables placed by the zone's encounter regions; Surf when the
      table's terrain byte is 4 = water), Fishing, Bubbling Spots (same species list
      as a fishing table but lower Magikarp slot rate), Berry Piles (Crabrawler-only),
      Ambush (other unplaced 1-3 species tables: rustling grass, dust/sand clouds,
      splashing water, flying shadows), SOS Encounter[ (<method>)] (per slot, ally
      species from SOS sets 1-7 that differ from the regular slot; chance = slot rate),
      SOS Encounter (Weather) (weather-only allies; rate not stored -> chance 0).
      Rates come from each table's 10 rate bytes. Placeholder tables containing only
      Pikipek that no zone references are dropped.
Not covered (not in these tables): gifts, statics/legendaries, trades, Friend Safari,
Island Scan, Poke Pelago, XY swooping/flying-shadow/rustling-bush/trash-can and Berry
tree encounters, USUM Ultra Space/Ultra Wormhole encounters, Zygarde.

Public API: extract(game) -> list[dict] for game in
    x_y / omega_ruby_alpha_sapphire / sun_moon / ultra_sun_ultra_moon
Run as a script to write <game>_raw.json next to this file.
"""
import json
import os
import re
import struct
import sys
from collections import Counter, defaultdict

ROM_DIR = os.environ.get('POKEMON_ROM_DIR', 'A:/Dropbox/stp-projects/programs/roms/originals')
DEX_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pokedex')
MU = 0x200

# --------------------------------------------------------------------------- containers

class RomFS:
    def __init__(self, path):
        self.f = f = open(path, 'rb')
        f.seek(0x100)
        assert f.read(4) == b'NCSD', path
        f.seek(0x120)
        off, _ = struct.unpack('<II', f.read(8))
        ncch = off * MU
        f.seek(ncch + 0x100)
        assert f.read(4) == b'NCCH'
        f.seek(ncch + 0x188)
        flags = f.read(8)
        assert flags[7] & 4, 'NCCH is encrypted (NoCrypto flag not set)'
        f.seek(ncch + 0x1B0)
        roff, _ = struct.unpack('<II', f.read(8))
        ivfc = ncch + roff * MU
        f.seek(ivfc)
        h = f.read(0x60)
        assert h[:4] == b'IVFC'
        master = struct.unpack_from('<I', h, 8)[0]
        bs = 1 << struct.unpack_from('<I', h, 0x4C)[0]
        l3 = ivfc + ((0x60 + master + bs - 1) // bs) * bs
        f.seek(l3)
        (_, _, _, dmo, dml, _, _, fmo, fml, fdo) = struct.unpack('<10I', f.read(0x28))
        f.seek(l3 + dmo); self.dm = f.read(dml)
        f.seek(l3 + fmo); self.fm = f.read(fml)
        self.fdata = l3 + fdo
        self.files = {}
        self._walk(0, '')

    def _walk(self, d, path):
        _, _, child, cfile, _, nl = struct.unpack_from('<6I', self.dm, d)
        name = self.dm[d + 0x18:d + 0x18 + nl].decode('utf-16le')
        p = (path + '/' + name) if d else ''
        fo = cfile
        while fo != 0xFFFFFFFF:
            _, sib, doff, dsz, _, fnl = struct.unpack_from('<IIQQII', self.fm, fo)
            fname = self.fm[fo + 0x20:fo + 0x20 + fnl].decode('utf-16le')
            self.files[(p + '/' + fname).lstrip('/')] = (doff, dsz)
            fo = sib
        c = child
        while c != 0xFFFFFFFF:
            self._walk(c, p)
            c = struct.unpack_from('<I', self.dm, c + 4)[0]

    def read(self, name):
        doff, dsz = self.files[name]
        self.f.seek(self.fdata + doff)
        return self.f.read(dsz)

    def garc(self, name):
        return garc_files(self.read(name))


def garc_files(data):
    assert data[:4] == b'CRAG'
    hsz = struct.unpack_from('<I', data, 4)[0]
    dataoff = struct.unpack_from('<I', data, 0x10)[0]
    assert data[hsz:hsz + 4] == b'OTAF'
    osz, cnt = struct.unpack_from('<IH', data, hsz + 4)
    offs = struct.unpack_from('<%dI' % cnt, data, hsz + 0xC)
    fatb = hsz + osz
    assert data[fatb:fatb + 4] == b'BTAF'
    base = fatb + 0xC
    out = []
    for o in offs:
        q = base + o
        vec = struct.unpack_from('<I', data, q)[0]
        q += 4
        subs = []
        for b in range(32):
            if vec >> b & 1:
                s, _, ln = struct.unpack_from('<III', data, q)
                q += 12
                subs.append(data[dataoff + s:dataoff + s + ln])
        out.append(subs[0] if len(subs) == 1 else subs)
    return out


def lz11(d):
    assert d[0] == 0x11
    size = d[1] | d[2] << 8 | d[3] << 16
    p = 4
    if size == 0:
        size = struct.unpack_from('<I', d, 4)[0]
        p = 8
    out = bytearray()
    while len(out) < size:
        flags = d[p]; p += 1
        for bit in range(8):
            if len(out) >= size:
                break
            if flags & (0x80 >> bit):
                b1 = d[p]; ind = b1 >> 4
                if ind == 0:
                    b2, b3 = d[p + 1], d[p + 2]; p += 3
                    ln = ((b1 & 0xF) << 4 | b2 >> 4) + 0x11
                    disp = ((b2 & 0xF) << 8 | b3) + 1
                elif ind == 1:
                    b2, b3, b4 = d[p + 1], d[p + 2], d[p + 3]; p += 4
                    ln = ((b1 & 0xF) << 12 | b2 << 4 | b3 >> 4) + 0x111
                    disp = ((b3 & 0xF) << 8 | b4) + 1
                else:
                    b2 = d[p + 1]; p += 2
                    ln = ind + 1
                    disp = ((b1 & 0xF) << 8 | b2) + 1
                for _ in range(ln):
                    out.append(out[-disp])
            else:
                out.append(d[p]); p += 1
    return bytes(out)


def unlz(d):
    return lz11(d) if d[:1] == b'\x11' else d


def mini(d):
    """Unpack a Game Freak 'mini' pack: 2-char magic, u16 count, u32 offsets[count+1]."""
    d = unlz(d)
    if len(d) < 4:
        return []
    n = struct.unpack_from('<H', d, 2)[0]
    offs = struct.unpack_from('<%dI' % (n + 1), d, 4)
    return [d[offs[i]:offs[i + 1]] for i in range(n)]


def decode_text(d):
    """Gen 6/7 text file (pk3DS TextFile): XOR key 0x7C89 + 0x2983*line, rotl3 per char."""
    _, lines, _, _, sdo = struct.unpack_from('<HHIII', d, 0)
    out = []
    key = 0x7C89
    for i in range(lines):
        off, ln = struct.unpack_from('<IH', d, sdo + 4 + i * 8)
        p = sdo + off
        k = key
        chars = []
        for j in range(ln):
            chars.append(struct.unpack_from('<H', d, p + j * 2)[0] ^ k)
            k = ((k << 3) | (k >> 13)) & 0xFFFF
        s = []
        j = 0
        while j < len(chars):
            c = chars[j]
            if c == 0:
                break
            if c == 0x10:                       # variable / control code
                j += 2 + chars[j + 1]
                continue
            s.append({0xE07F: ' ', 0xE08D: '\u2026', 0xE08E: '\u2642', 0xE08F: '\u2640'}.get(c, chr(c)))
            j += 1
        out.append(''.join(s))
        key = (key + 0x2983) & 0xFFFF
    return out

# --------------------------------------------------------------------------- species names

ALOLAN = {19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103, 105}
FORM_SUFFIX = {
    550: {1: 'Basculin (Blue Striped)'},
    710: {1: 'Pumpkaboo (Small)', 2: 'Pumpkaboo (Large)', 3: 'Pumpkaboo (Super)'},
    711: {1: 'Gourgeist (Small)', 2: 'Gourgeist (Large)', 3: 'Gourgeist (Super)'},
    741: {1: 'Oricorio (Pom Pom)', 2: 'Oricorio (Pau)', 3: 'Oricorio (Sensu)'},
    745: {1: 'Lycanroc (Midnight)'},
}
_dex_cache = {}


def load_dex(game):
    if game in _dex_cache:
        return _dex_cache[game]
    s = open(os.path.join(DEX_DIR, game + '.js'), encoding='utf-8').read()
    pat = re.compile(r'^    "((?:[^"\\]|\\.)*)": \{\s*\n\s*"species": "(?:[^"\\]|\\.)*",\s*\n\s*'
                     r'"rom_id": [^,]+,\s*\n\s*"national_dex_number": (\d+)', re.M)
    base, keys = {}, set()
    for m in pat.finditer(s):
        key = json.loads('"%s"' % m.group(1))
        keys.add(key)
        base.setdefault(int(m.group(2)), key)      # first key per dex number = base form
    _dex_cache[game] = (base, keys)
    return base, keys


WARN = []


def species_key(game, dexno, form):
    base, keys = load_dex(game)
    if dexno not in base:
        WARN.append('%s: dex %d not in pokedex' % (game, dexno))
        return '#%d' % dexno
    if form and form < 30:
        if dexno in ALOLAN and form == 1 and ('Alolan ' + base[dexno]) in keys:
            return 'Alolan ' + base[dexno]
        k = FORM_SUFFIX.get(dexno, {}).get(form)
        if k and k in keys:
            return k
    return base[dexno]


def clean_name(s):
    return s.replace('\u2019', "'").strip()

# --------------------------------------------------------------------------- Gen 6

GEN6_RATES12 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 4, 1]
GEN6_RATES5 = [50, 30, 15, 4, 1]
GEN6_RATES3 = [60, 35, 5]
HORDE_RATES = [60, 35, 5]

XY_LAYOUT = [('Walk', 12), ('Yellow Flowers', 12), ('Purple Flowers', 12), ('Red Flowers', 12),
             ('Rough Terrain', 12), ('Surf', 5), ('Rock Smash', 5), ('Old Rod', 3),
             ('Good Rod', 3), ('Super Rod', 3), ('Horde', 15)]
ORAS_LAYOUT = [('Walk', 12), ('Long Grass', 12), ('DexNav', 3), ('Surf', 5), ('Rock Smash', 5),
               ('Old Rod', 3), ('Good Rod', 3), ('Super Rod', 3), ('Horde', 15)]
# ORAS underwater (Dive) zones: their 12-slot "grass" table is seaweed.
ORAS_UNDERWATER_ZONES = {64, 65, 66, 67, 68, 69, 70}
# Sub-area names for zones that share a location name, where the floor/section is
# certain (cross-checked against level ranges, version-exclusive species and the
# hordes in the old PokeAPI-derived file).  Other multi-zone locations get
# "(Area N)" in zone-id order; the record's "zone" field identifies the map.
SUBAREA_NAMES = {
    'omega_ruby_alpha_sapphire': {78: 'Granite Cave (1F)', 79: 'Granite Cave (B1F)', 80: 'Granite Cave (B2F)',
                                  26: 'Route 104 (North)', 27: 'Route 104 (South)'},
}


def _gen6_rates(method, n):
    if n == 12:
        return GEN6_RATES12
    if n == 5:
        return GEN6_RATES5
    if n == 3 and method != 'DexNav':
        return GEN6_RATES3
    return [0] * n


def extract_gen6_version(game, rom, zone_garc, text_garc, text_file, layout, hdr):
    r = RomFS(rom)
    loc = decode_text(r.garc(text_garc)[text_file])
    zones = r.garc(zone_garc)
    out = []   # (zone, location, method, table_key, slot, species, min, max, chance, extra)
    for zi, raw in enumerate(zones):
        if isinstance(raw, list) or len(raw) < 8:
            continue
        d = unlz(raw)
        if d[:2] != b'ZO':
            continue
        n = struct.unpack_from('<H', d, 2)[0]
        offs = struct.unpack_from('<%dI' % (n + 1), d, 4)
        enc = d[offs[3]:offs[4]]
        if len(enc) <= hdr:
            continue
        name = clean_name(loc[struct.unpack_from('<H', d, offs[0] + 0x1C)[0] & 0x1FF])
        p = hdr
        for method, cnt in layout:
            slots = [struct.unpack_from('<HBB', enc, p + 4 * i) for i in range(cnt)]
            p += 4 * cnt
            m = method
            if game == 'omega_ruby_alpha_sapphire' and zi in ORAS_UNDERWATER_ZONES and method == 'Walk':
                m = 'Seaweed'
            if method == 'Horde':
                for h in range(3):
                    grp = Counter()
                    for sp, mn, mx in slots[h * 5:(h + 1) * 5]:
                        if sp & 0x7FF:
                            grp[(species_key(game, sp & 0x7FF, sp >> 11), mn, mx)] += 1
                    for (spk, mn, mx), c in grp.items():
                        out.append((zi, name, m, h, spk, mn, mx, HORDE_RATES[h], c))
                continue
            rates = _gen6_rates(method, cnt)
            for i, (sp, mn, mx) in enumerate(slots):
                if sp & 0x7FF:
                    out.append((zi, name, m, i, species_key(game, sp & 0x7FF, sp >> 11), mn, mx, rates[i], None))
    return out

# --------------------------------------------------------------------------- Gen 7

T7 = 0x164


def _slot7(v):
    return v & 0x7FF, (v >> 11) & 0x1F


def _parse_table7(t):
    mn, mx = t[0], t[1]
    rates = list(t[2:12])
    sets = [[_slot7(struct.unpack_from('<I', t, 0xC + (s * 10 + i) * 4)[0]) for i in range(10)] for s in range(8)]
    weather = [_slot7(struct.unpack_from('<I', t, 0xC + 0x140 + i * 4)[0]) for i in range(6)]
    return mn, mx, rates, sets, weather


def _is_dummy(day):
    """Unused placeholder tables contain nothing but Pikipek (only applied to tables
    that no zone's encounter region references)."""
    sp = {s for s, f in day[3][0] if s}
    return sp == {731}


# Fishing spots, ambush spots and berry piles are not placed through the ED encounter
# regions, so in areas whose zones carry different names the owning zone is not in the
# data.  Chosen by checking the species' Bulbapedia "Game locations" lines (e.g. Bruxish:
# Routes 13/14/15 + Secluded Shore, not Tapu Village; Crabrawler: Route 16 + Secluded
# Shore, not Routes 12/15; Luvdisc/Corsola: Melemele Sea).  Records placed this way carry
# "location_inferred": true.  Keyed by the set of zone names in the area.
UNREF_OVERRIDE = {
    frozenset(["Route 1 (Hau'oli Outskirts)", 'Route 1', 'Melemele Sea']): {'fishing': 'Melemele Sea'},
    frozenset(["Hau'oli City (Beachfront)", 'Melemele Sea']): {'fishing': 'Melemele Sea'},
    frozenset(["Kala'e Bay", 'Route 3']): {'fishing': "Kala'e Bay", 'ambush': 'Route 3', 'berry': 'Route 3'},
    frozenset(['Hano Grand Resort', 'Hano Beach']): {'ambush': 'Hano Beach'},
    frozenset(['Memorial Hill', 'Akala Outskirts']): {'fishing': 'Akala Outskirts'},
    frozenset(['Route 15', 'Route 16']): {'fishing': 'Route 15', 'berry': 'Route 16'},
    frozenset(['Secluded Shore', 'Route 12']): {'fishing': 'Secluded Shore', 'berry': 'Secluded Shore'},
    frozenset(['Tapu Village', 'Route 14']): {'fishing': 'Route 14'},
    frozenset(['Ancient Poni Path', 'Poni Breaker Coast']): {'fishing': 'Poni Breaker Coast',
                                                             'ambush': 'Poni Breaker Coast'},
}


def extract_gen7_version(game, rom, text_file, version):
    r = RomFS(rom)
    loc = decode_text(r.garc('a/0/3/2')[text_file])
    # Sun/US keep the encounter archive at a/0/8/2, Moon/UM at a/0/8/3 (the other is 0 bytes)
    enc = r.garc('a/0/8/2' if r.files['a/0/8/2'][1] else 'a/0/8/3')
    zd = unlz(r.garc('a/0/7/7')[0])
    Z = [zd[i * 0x54:(i + 1) * 0x54] for i in range(len(zd) // 0x54)]

    def zname(i):
        l = struct.unpack_from('<H', Z[i], 0x1C)[0]
        sub = loc[l + 1] if l + 1 < len(loc) and l % 2 == 0 else ''
        return clean_name(loc[l] + (' (%s)' % sub if sub else ''))

    area_zones = defaultdict(list)
    for wd in r.garc('a/0/9/1'):
        s0 = mini(wd)[0]
        o = struct.unpack_from('<4I', s0, 0)
        for p in range(o[2], o[3], 4):
            zi, ai = struct.unpack_from('<HH', s0, p)
            area_zones[ai].append(zi)

    out = []   # dicts without version
    unresolved = []
    for a in range(len(enc) // 11):
        ea = enc[a * 11 + 9]
        if isinstance(ea, list) or not ea:
            continue
        tables = mini(ea)
        if not any(tables):
            continue
        zs = area_zones.get(a, [])
        # per-zone encounter regions (ED sub-pack 6)
        refs = defaultdict(set)
        ed = mini(enc[a * 11 + 0])
        if len(ed) > 6:
            for li, x in enumerate(mini(ed[6])):
                if len(x) < 4:
                    continue
                n = struct.unpack_from('<I', x, 0)[0]
                for k in range(n):
                    rec = struct.unpack_from('<7I', x, 4 + k * 28)
                    if li < len(zs):
                        refs[rec[1]].add(zs[li])
        names_in_area = []
        for zi in zs:
            nm = zname(zi)
            if nm not in names_in_area:
                names_in_area.append(nm)
        parsed = []
        for ti, t in enumerate(tables):
            if len(t) < 0x168 + T7:
                continue
            day = _parse_table7(t[4:4 + T7])
            night = _parse_table7(t[0x168:0x168 + T7])
            parsed.append((ti, t[0], day, night))
        # fishing: each fishing spot has its own table; the area's bubbling-spot table has
        # the same species list but a lower slot-0 (Magikarp) rate.  A species list with a
        # single rate pattern is plain fishing.
        fish_groups = defaultdict(set)
        for ti, terrain, day, night in parsed:
            if terrain == 6 and ti not in refs and not _is_dummy(day):
                fish_groups[tuple(s for s, f in day[3][0])].add(day[2][0])
        for ti, terrain, day, night in parsed:
            if ti not in refs and _is_dummy(day):
                continue
            mn, mx, rates, sets, weather = day
            inferred = False
            if ti in refs:
                method = 'Surf' if terrain == 4 else 'Walk'
                cat = 'region'
                locs = sorted({zname(z) for z in refs[ti]}, key=names_in_area.index)
            else:
                main = [s for s, f in sets[0] if s]
                if terrain == 6:
                    grp = fish_groups[tuple(s for s, f in sets[0])]
                    bubbling = len(grp) > 1 and rates[0] == min(grp)
                    method = 'Bubbling Spots' if bubbling else 'Fishing'
                    cat = 'fishing'
                elif set(main) == {739}:      # Crabrawler
                    method, cat = 'Berry Piles', 'berry'
                elif rates == [20, 20, 10, 10, 10, 10, 10, 5, 4, 1]:
                    method, cat = ('Surf' if terrain == 4 else 'Walk'), 'unreferenced-region'
                else:
                    method, cat = 'Ambush', 'ambush'
                if len(names_in_area) == 1:
                    locs = names_in_area
                else:
                    ov = UNREF_OVERRIDE.get(frozenset(names_in_area), {})
                    if cat in ov:
                        locs = [ov[cat]]
                        inferred = True
                    else:
                        locs = [names_in_area[0]]
                        inferred = True
                        unresolved.append((a, names_in_area, ti, cat,
                                           [species_key(game, s, f) for s, f in sets[0] if s]))
            for lname in locs:
                rs = _records7(game, lname, method, a, ti, day, night)
                if inferred:
                    for x in rs:
                        x['location_inferred'] = True
                out.extend(rs)
    return out, unresolved


def _records7(game, lname, method, area, ti, day, night):
    recs = []
    tid = '%d.%d' % (area, ti)
    mn, mx, rates = day[0], day[1], day[2]

    def emit(meth, slot, d_sp, n_sp, chance, extra=None):
        if d_sp == n_sp:
            if d_sp[0]:
                recs.append(dict(location=lname, method=meth, pokemon=species_key(game, *d_sp),
                                 min_level=mn, max_level=mx, chance=chance, table=tid, slot=slot, **(extra or {})))
        else:
            for sp, tm in ((d_sp, 'Day'), (n_sp, 'Night')):
                if sp[0]:
                    recs.append(dict(location=lname, method=meth, pokemon=species_key(game, *sp),
                                     min_level=mn, max_level=mx, chance=chance, time=[tm],
                                     table=tid, slot=slot, **(extra or {})))

    for i in range(10):
        if rates[i] == 0:
            continue
        emit(method, i, day[3][0][i], night[3][0][i], rates[i])
    sos = 'SOS Encounter' if method == 'Walk' else 'SOS Encounter (%s)' % method
    wsos = 'SOS Encounter (Weather)' if method == 'Walk' else 'SOS Encounter (%s, Weather)' % method
    if True:
        # SOS allies: per slot, species in SOS sets 1..7 differing from the regular slot
        for i in range(10):
            if rates[i] == 0:
                continue
            seen = []
            for s in range(1, 8):
                pair = (day[3][s][i], night[3][s][i])
                if pair in seen:
                    continue
                seen.append(pair)
            for d_sp, n_sp in seen:
                if d_sp == day[3][0][i] and n_sp == night[3][0][i]:
                    continue
                if d_sp == n_sp:
                    if d_sp == day[3][0][i] and d_sp == night[3][0][i]:
                        continue
                    emit(sos, i, d_sp, n_sp, rates[i])
                else:
                    if d_sp != day[3][0][i]:
                        emit(sos, i, d_sp, (0, 0), rates[i])
                    if n_sp != night[3][0][i]:
                        emit(sos, i, (0, 0), n_sp, rates[i])
        # weather-dependent SOS allies (rain/hail/sandstorm...); rate not stored -> 0
        wd = {sp for sp in day[4] if sp[0]}
        wn = {sp for sp in night[4] if sp[0]}
        if not ({s for s, f in wd} <= {731}):
            for sp in sorted(wd | wn):
                if sp in wd and sp in wn:
                    emit(wsos, None, sp, sp, 0)
                elif sp in wd:
                    emit(wsos, None, sp, (0, 0), 0)
                else:
                    emit(wsos, None, (0, 0), sp, 0)
    # de-duplicate (same slot can repeat across SOS sets / day-night splits)
    uniq, seen = [], set()
    for r in recs:
        k = json.dumps(r, sort_keys=True)
        if k not in seen:
            seen.add(k)
            uniq.append(r)
    return uniq

# --------------------------------------------------------------------------- games

GAMES = {
    'x_y': dict(gen=6, versions=[('X', '6-X.3ds'), ('Y', '6-Y.3ds')],
                zone_garc='a/0/1/2', text_garc='a/0/7/4', text_file=72, layout=XY_LAYOUT, hdr=0x10),
    'omega_ruby_alpha_sapphire': dict(gen=6, versions=[('Omega Ruby', '6-Omega Ruby.3ds'),
                                                       ('Alpha Sapphire', '6-Alpha Sapphire.3ds')],
                                      zone_garc='a/0/1/3', text_garc='a/0/7/3', text_file=90,
                                      layout=ORAS_LAYOUT, hdr=0xE),
    'sun_moon': dict(gen=7, versions=[('Sun', '7-Sun.3ds'), ('Moon', '7-Moon.3ds')], text_file=67),
    'ultra_sun_ultra_moon': dict(gen=7, versions=[('Ultra Sun', '7-Ultra Sun.3ds'),
                                                  ('Ultra Moon', '7-Ultra Moon.3ds')], text_file=72),
}

UNRESOLVED = {}
ZONE_LABELS = {}   # gen 6: zone id -> location label (duplicate zones -> label of the identical zone)


def _gen6_records(game, cfg, vname, fname):
    rows = extract_gen6_version(game, os.path.join(ROM_DIR, fname), cfg['zone_garc'],
                                cfg['text_garc'], cfg['text_file'], cfg['layout'], cfg['hdr'])
    # group by zone to de-duplicate zones that share a name and identical tables
    byzone = defaultdict(list)
    names = {}
    for zi, name, m, slot, spk, mn, mx, ch, cnt in rows:
        byzone[zi].append((m, slot, spk, mn, mx, ch, cnt))
        names[zi] = name
    return byzone, names


def extract(game):
    cfg = GAMES[game]
    per_version = []
    if cfg['gen'] == 6:
        zone_tables = {}
        for vname, fname in cfg['versions']:
            byzone, names = _gen6_records(game, cfg, vname, fname)
            zone_tables[vname] = (byzone, names)
        # sub-area labels: zones sharing a location name whose tables differ (in either version)
        v0 = cfg['versions'][0][0]
        names = dict(zone_tables[v0][1])
        for v, (bz, nm) in zone_tables.items():
            names.update(nm)
        bylocname = defaultdict(list)
        for zi in sorted(names):
            bylocname[names[zi]].append(zi)
        label = {}
        for nm, zis in bylocname.items():
            sigs = []
            for zi in zis:
                sig = tuple(tuple(sorted(zone_tables[v][0].get(zi, []), key=repr)) for v in zone_tables)
                sigs.append(sig)
            distinct = []
            for zi, sig in zip(zis, sigs):
                if sig not in [s for s, _ in distinct]:
                    distinct.append((sig, zi))
            keep = {zi for _, zi in distinct}
            uw = lambda z: game == 'omega_ruby_alpha_sapphire' and z in ORAS_UNDERWATER_ZONES
            land = [zi for _, zi in distinct if not uw(zi)]
            for zi in keep:
                if zi in SUBAREA_NAMES.get(game, {}):
                    label[zi] = SUBAREA_NAMES[game][zi]
                elif uw(zi):
                    label[zi] = nm + ' (Underwater)'
                elif len(land) > 1:
                    label[zi] = '%s (Area %d)' % (nm, land.index(zi) + 1)
                else:
                    label[zi] = nm
            for zi, sig in zip(zis, sigs):
                rep = next(z for s_, z in distinct if s_ == sig)
                ZONE_LABELS.setdefault(game, {})[zi] = label[rep]
                if zi not in keep:
                    label[zi] = None   # duplicate of an earlier zone with identical tables
        for vname, _ in cfg['versions']:
            bz = zone_tables[vname][0]
            recs = []
            for zi in sorted(bz):
                if label.get(zi) is None:
                    continue
                for m, slot, spk, mn, mx, ch, cnt in bz[zi]:
                    r = dict(location=label[zi], method=m, pokemon=spk, min_level=mn, max_level=mx,
                             chance=ch, zone=zi, slot=slot)
                    if cnt is not None:
                        r['horde_count'] = cnt
                    recs.append(r)
            per_version.append((vname, recs))
    else:
        unresolved_all = []
        for vname, fname in cfg['versions']:
            recs, unresolved = extract_gen7_version(game, os.path.join(ROM_DIR, fname), cfg['text_file'], vname)
            per_version.append((vname, recs))
            unresolved_all.extend((vname,) + u for u in unresolved)
        UNRESOLVED[game] = unresolved_all
    # merge versions: identical records in both -> no version tag
    def key(r):
        return json.dumps(r, sort_keys=True, ensure_ascii=False)
    (va, ra), (vb, rb) = per_version
    cb = Counter(key(r) for r in rb)
    merged = []
    for r in ra:
        k = key(r)
        if cb[k] > 0:
            cb[k] -= 1
            merged.append(dict(r))
        else:
            merged.append(dict(r, version=va))
    for r in rb:
        k = key(r)
        if cb[k] > 0:
            cb[k] -= 1
            merged.append(dict(r, version=vb))
    if cfg['gen'] == 7:
        # de-duplicate tables that are identical (incl. version tags) within one location
        bytable, order = defaultdict(list), []
        for r in merged:
            k = (r['location'], r['table'])
            if k not in bytable:
                order.append(k)
            bytable[k].append(r)
        seen, kept = set(), []
        for k in order:
            rs = bytable[k]
            sig = (k[0], tuple(sorted(json.dumps({x: y for x, y in r.items() if x != 'table'},
                                                  sort_keys=True, ensure_ascii=False) for r in rs)))
            if sig in seen:
                continue
            seen.add(sig)
            kept.extend(rs)
        merged = kept
    return merged


FIELD_ORDER = ['location', 'method', 'pokemon', 'min_level', 'max_level', 'chance', 'version', 'time',
               'table', 'zone', 'slot', 'horde_count', 'location_inferred']


def main(argv):
    here = os.getcwd()  # raw dumps go to the current directory
    games = argv[1:] or list(GAMES)
    for g in games:
        recs = extract(g)
        recs = [{k: r[k] for k in FIELD_ORDER if k in r} for r in recs]
        with open(os.path.join(here, g + '_raw.json'), 'w', encoding='utf-8') as f:
            json.dump(recs, f, ensure_ascii=False, indent=1)
        print(g, len(recs), 'records,', len({r['location'] for r in recs}), 'locations')
        for u in UNRESOLVED.get(g, []):
            print('  UNRESOLVED', u)
    for w in sorted(set(WARN)):
        print('WARN', w)


if __name__ == '__main__':
    main(sys.argv)


# PokéAPI location-area display names (as scrape_encounters.py printed them) -> in-game names.
# Used by generate_encounters.py to place PokéAPI one-off encounters (gifts, statics, trades).
POKEAPI_LOCATION_NAMES = {
    "omega_ruby_alpha_sapphire": {
        "Ancient Tomb": "Ancient Tomb",
        "Battle Resort": "Battle Resort",
        "Cave of Origin (1F)": "Cave of Origin (1F)",
        "Cave of Origin (B1F)": "Cave of Origin (B1F)",
        "Cave of Origin (B2F)": "Cave of Origin (B2F)",
        "Cave of Origin (B3F)": "Cave of Origin (B3F)",
        "Cave of Origin (B4F)": "Cave of Origin (B4F)",
        "Cave of Origin (entrance)": "Cave of Origin (entrance)",
        "Contest Hall (Fallarbor Town)": "Fallarbor Town (Contest Hall)",
        "Contest Hall (Lilycove City)": "Lilycove City (Contest Hall)",
        "Contest Hall (Slateport City)": "Slateport City (Contest Hall)",
        "Contest Hall (Verdanturf Town)": "Verdanturf Town (Contest Hall)",
        "Crescent Isle": "Crescent Isle",
        "Desert Ruins": "Desert Ruins",
        "Fabled Cave": "Fabled Cave",
        "Fiery Path": "Fiery Path",
        "Gnarled Den": "Gnarled Den",
        "Granite Cave (1F)": "Granite Cave (1F)",
        "Granite Cave (B1F)": "Granite Cave (B1F)",
        "Granite Cave (B2F)": "Granite Cave (B2F)",
        "Island Cave": "Island Cave",
        "Jagged Pass": "Jagged Pass",
        "Lavaridge Town": "Lavaridge Town",
        "Meteor Falls": "Meteor Falls",
        "Meteor Falls (B1F)": "Meteor Falls (B1F)",
        "Meteor Falls (back)": "Meteor Falls (back)",
        "Meteor Falls (back/small room)": "Meteor Falls (back/small room)",
        "Mossdeep City (Steven's house)": "Mossdeep City (Steven's house)",
        "Mossdeep Space Center": "Mossdeep Space Center",
        "Mount Pyre (1F)": "Mt. Pyre (1F)",
        "Mount Pyre (2F)": "Mt. Pyre (2F)",
        "Mount Pyre (3F)": "Mt. Pyre (3F)",
        "Mount Pyre (4F)": "Mt. Pyre (4F)",
        "Mount Pyre (outside)": "Mt. Pyre (outside)",
        "Mount Pyre (summit)": "Mt. Pyre (summit)",
        "Nameless Cavern": "Nameless Cavern",
        "New Mauville": "New Mauville",
        "Pathless Plain": "Pathless Plain",
        "Petalburg Woods": "Petalburg Woods",
        "Road 101": "Route 101",
        "Road 102": "Route 102",
        "Road 103": "Route 103",
        "Road 110": "Route 110",
        "Road 111": "Route 111",
        "Road 112": "Route 112",
        "Road 113": "Route 113",
        "Road 114": "Route 114",
        "Road 115": "Route 115",
        "Road 116": "Route 116",
        "Road 117": "Route 117",
        "Road 118": "Route 118",
        "Road 119": "Route 119",
        "Road 120": "Route 120",
        "Road 121": "Route 121",
        "Road 123": "Route 123",
        "Route 104 — North Oras": "Route 104 (North)",
        "Route 104 — South Oras": "Route 104 (South)",
        "Rusturf Tunnel": "Rusturf Tunnel",
        "Safari Zone (NE/acro bike area)": "Safari Zone (NE/acro bike area)",
        "Safari Zone (NW/mach bike area)": "Safari Zone (NW/mach bike area)",
        "Safari Zone (SE)": "Safari Zone (SE)",
        "Safari Zone (SW)": "Safari Zone (SW)",
        "Scorched Slab (B1F)": "Scorched Slab (B1F)",
        "Scorched Slab (B2F)": "Scorched Slab (B2F)",
        "Scorched Slab (B3F)": "Scorched Slab (B3F)",
        "Sea Mauville (Inside)": "Sea Mauville (Inside)",
        "Seafloor Cavern": "Seafloor Cavern",
        "Shoal Cave": "Shoal Cave",
        "Shoal Cave (B1F)": "Shoal Cave (B1F)",
        "Shoal Cave — B2f": "Shoal Cave (B2F)",
        "Shoal Cave — B3f": "Shoal Cave (B3F)",
        "Shoal Cave — Low Tide": "Shoal Cave (low tide)",
        "Sky Pillar (1F)": "Sky Pillar (1F)",
        "Sky Pillar (3F)": "Sky Pillar (3F)",
        "Sky Pillar (5F)": "Sky Pillar (5F)",
        "Sky Pillar Apex": "Sky Pillar (summit)",
        "Soaring in the Sky": "Soaring in the sky",
        "Southern Island": "Southern Island",
        "Team Aqua Hideout": "Team Aqua Hideout",
        "Team Magma Hideout": "Team Magma Hideout",
        "Trackless Forest": "Trackless Forest",
        "Victory Road (1F)": "Victory Road (1F)",
        "Victory Road (B1F)": "Victory Road (B1F)",
        "Weather Institute (Road 119)": "Weather Institute (Road 119)"
    },
    "sun_moon": {
        "Aether Paradise — 2f": "Aether Paradise",
        "Akala Outskirts": "Akala Outskirts",
        "Altar of the Moone": "Altar of the Moone",
        "Altar of the Sunne": "Altar of the Sunne",
        "Ancient Poni Path": "Ancient Poni Path",
        "Berry Fields": "Berry Fields",
        "Blush Mountain": "Blush Mountain",
        "Brooklet Hill — Main": "Brooklet Hill",
        "Brooklet Hill — North": "Brooklet Hill",
        "Brooklet Hill — South": "Brooklet Hill",
        "Brooklet Hill — Totems Den": "Brooklet Hill (Totem's Den)",
        "Diglett’s Tunnel": "Diglett's Tunnel",
        "Exeggutor Island": "Exeggutor Island",
        "Haina Desert": "Haina Desert",
        "Hano Beach": "Hano Beach",
        "Hau'oli City — Main": "Hau'oli City",
        "Hau'oli City — Shopping District": "Hau'oli City (Shopping District)",
        "Hau’oli Cemetery": "Hau'oli Cemetery",
        "Iki Town": "Iki Town",
        "Kala’e Bay": "Kala'e Bay",
        "Konikoni City": "Konikoni City",
        "Lake of the Moone": "Lake of the Moone",
        "Lake of the Sunne": "Lake of the Sunne",
        "Lush Jungle — All Areas": "Lush Jungle",
        "Lush Jungle — East Cave": "Lush Jungle",
        "Lush Jungle — North": "Lush Jungle",
        "Lush Jungle — South": "Lush Jungle",
        "Lush Jungle — West": "Lush Jungle",
        "Malie City — Main": "Malie City",
        "Malie City — Outer Cape": "Malie City (Outer Cape)",
        "Malie Garden": "Malie Garden",
        "Melemele Meadow": "Melemele Meadow",
        "Melemele Sea": "Melemele Sea",
        "Memorial Hill": "Memorial Hill",
        "Mount Hokulani — Main": "Mount Hokulani",
        "Mount Lanakila — Cave": "Mount Lanakila",
        "Mount Lanakila — Outside": "Mount Lanakila",
        "New Mauville": "New Mauville",
        "Paniola Ranch": "Paniola Ranch",
        "Paniola Town": "Paniola Town",
        "Poké Pelago — Elite Four Defeated": "Poké Pelago",
        "Poké Pelago — Poni Island Reached": "Poké Pelago",
        "Poké Pelago — Ulaula Island Reached": "Poké Pelago",
        "Poni Breaker Coast": "Poni Breaker Coast",
        "Poni Gauntlet": "Poni Gauntlet",
        "Poni Grove": "Poni Grove",
        "Poni Meadow": "Poni Meadow",
        "Poni Plains — Center": "Poni Plains",
        "Poni Plains — East": "Poni Plains",
        "Poni Plains — North": "Poni Plains",
        "Poni Plains — West": "Poni Plains",
        "Poni Wilds": "Poni Wilds",
        "Resolution Cave": "Resolution Cave",
        "Route 1 — East": "Route 1",
        "Route 1 — Hauoli Outskirts": "Route 1 (Hau'oli Outskirts)",
        "Route 1 — South": "Route 1",
        "Route 1 — West": "Route 1",
        "Route 10": "Route 10",
        "Route 11": "Route 11",
        "Route 12": "Route 12",
        "Route 13": "Route 13",
        "Route 14": "Route 14",
        "Route 15 — Aether House": "Route 15",
        "Route 15 — Main": "Route 15",
        "Route 16 — Main": "Route 16",
        "Route 17 — All Areas": "Route 17",
        "Route 17 — Northeast": "Route 17",
        "Route 17 — West": "Route 17",
        "Route 2 — Main": "Route 2",
        "Route 2 — North": "Route 2",
        "Route 2 — South": "Route 2",
        "Route 3 — Main": "Route 3",
        "Route 3 — North": "Route 3",
        "Route 3 — South": "Route 3",
        "Route 4": "Route 4",
        "Route 5": "Route 5",
        "Route 6 — North": "Route 6",
        "Route 6 — South": "Route 6",
        "Route 7": "Route 7",
        "Route 8 — Fossil Restoration Center": "Route 8",
        "Route 8 — Main": "Route 8",
        "Route 9 — Main": "Route 9",
        "Royal Avenue — Abandoned Site": "Thrifty Megamart (Abandoned Site)",
        "Ruins of Abundance": "Ruins of Abundance",
        "Ruins of Conflict": "Ruins of Conflict",
        "Ruins of Hope": "Ruins of Hope",
        "Ruins of Life": "Ruins of Life",
        "Seafolk Village — Huntail Boat": "Seafolk Village",
        "Seafolk Village — Main": "Seafolk Village",
        "Seaward Cave": "Seaward Cave",
        "Secluded Shore": "Secluded Shore",
        "Tapu Village": "Tapu Village",
        "Ten Carat Hill — Farthest Hollow": "Ten Carat Hill (Farthest Hollow)",
        "Ten Carat Hill — Inside": "Ten Carat Hill",
        "Ula’ula Meadow": "Ula'ula Meadow",
        "Vast Poni Canyon — Inside": "Vast Poni Canyon",
        "Vast Poni Canyon — Northwest": "Vast Poni Canyon",
        "Vast Poni Canyon — Outside": "Vast Poni Canyon",
        "Verdant Cavern": "Verdant Cavern",
        "Verdant Cavern — Trial Site": "Verdant Cavern (Trial Site)",
        "Wela Volcano Park": "Wela Volcano Park"
    },
    "ultra_sun_ultra_moon": {
        "Akala Outskirts": "Akala Outskirts",
        "Ancient Poni Path": "Ancient Poni Path",
        "Berry Fields": "Berry Fields",
        "Blush Mountain": "Blush Mountain",
        "Brooklet Hill — Main": "Brooklet Hill",
        "Brooklet Hill — North": "Brooklet Hill",
        "Brooklet Hill — South": "Brooklet Hill",
        "Brooklet Hill — Totems Den": "Brooklet Hill (Totem's Den)",
        "Diglett’s Tunnel": "Diglett's Tunnel",
        "Dividing Peak Tunnel": "Dividing Peak Tunnel",
        "Exeggutor Island": "Exeggutor Island",
        "Haina Desert": "Haina Desert",
        "Hano Beach": "Hano Beach",
        "Hau'oli City — Beachfront": "Hau'oli City (Beachfront)",
        "Hau'oli City — Main": "Hau'oli City",
        "Hau'oli City — Shopping District": "Hau'oli City (Shopping District)",
        "Hau’oli Cemetery": "Hau'oli Cemetery",
        "Heahea Beach": "Heahea Beach",
        "Heahea City — Surf Association": "Heahea City",
        "Kala’e Bay": "Kala'e Bay",
        "Konikoni City": "Konikoni City",
        "Lake of the Moone": "Lake of the Moone",
        "Lake of the Sunne": "Lake of the Sunne",
        "Lush Jungle — East Cave": "Lush Jungle",
        "Lush Jungle — North": "Lush Jungle",
        "Lush Jungle — South": "Lush Jungle",
        "Lush Jungle — West": "Lush Jungle",
        "Mahalo Trail": "Mahalo Trail",
        "Malie City — Outer Cape": "Malie City (Outer Cape)",
        "Malie Garden": "Malie Garden",
        "Melemele Meadow": "Melemele Meadow",
        "Melemele Sea": "Melemele Sea",
        "Memorial Hill": "Memorial Hill",
        "Mount Hokulani — East": "Mount Hokulani",
        "Mount Hokulani — Main": "Mount Hokulani",
        "Mount Hokulani — West": "Mount Hokulani",
        "Mount Lanakila Crater": "Mount Lanakila",
        "Mount Lanakila — Base": "Mount Lanakila",
        "Mount Lanakila — Cave": "Mount Lanakila",
        "Mount Lanakila — Outside": "Mount Lanakila",
        "Paniola Ranch": "Paniola Ranch",
        "Paniola Town": "Paniola Town",
        "Poké Pelago — Elite Four Defeated": "Poké Pelago",
        "Poké Pelago — Poni Island Reached": "Poké Pelago",
        "Poké Pelago — Ulaula Island Reached": "Poké Pelago",
        "Poni Breaker Coast": "Poni Breaker Coast",
        "Poni Gauntlet": "Poni Gauntlet",
        "Poni Grove": "Poni Grove",
        "Poni Meadow": "Poni Meadow",
        "Poni Plains — Center": "Poni Plains",
        "Poni Plains — East": "Poni Plains",
        "Poni Plains — North": "Poni Plains",
        "Poni Plains — West": "Poni Plains",
        "Poni Wilds": "Poni Wilds",
        "Resolution Cave": "Resolution Cave",
        "Route 1 — East": "Route 1",
        "Route 1 — Hauoli Outskirts": "Route 1 (Hau'oli Outskirts)",
        "Route 1 — South": "Route 1",
        "Route 1 — Trainers School": "Route 1 (Trainers' School)",
        "Route 1 — West": "Route 1",
        "Route 10": "Route 10",
        "Route 11": "Route 11",
        "Route 12": "Route 12",
        "Route 13": "Route 13",
        "Route 14": "Route 14",
        "Route 15 — Aether House": "Route 15",
        "Route 15 — Main": "Route 15",
        "Route 16 — East": "Route 16",
        "Route 16 — Main": "Route 16",
        "Route 16 — West": "Route 16",
        "Route 17 — Northeast": "Route 17",
        "Route 17 — West": "Route 17",
        "Route 2 — Main": "Route 2",
        "Route 2 — North": "Route 2",
        "Route 2 — South": "Route 2",
        "Route 3 — Main": "Route 3",
        "Route 3 — North": "Route 3",
        "Route 3 — South": "Route 3",
        "Route 4": "Route 4",
        "Route 5": "Route 5",
        "Route 6 — North": "Route 6",
        "Route 6 — South": "Route 6",
        "Route 7": "Route 7",
        "Route 8 — Fossil Restoration Center": "Route 8",
        "Route 8 — Main": "Route 8",
        "Route 9 — Main": "Route 9",
        "Route 9 — Police Station": "Route 9",
        "Royal Avenue": "Royal Avenue",
        "Royal Avenue — Abandoned Site": "Thrifty Megamart (Abandoned Site)",
        "Ruins of Abundance": "Ruins of Abundance",
        "Ruins of Conflict": "Ruins of Conflict",
        "Ruins of Hope": "Ruins of Hope",
        "Ruins of Life": "Ruins of Life",
        "Sandy Cave": "Sandy Cave",
        "Seafolk Village — Huntail Boat": "Seafolk Village",
        "Seafolk Village — Main": "Seafolk Village",
        "Seaward Cave": "Seaward Cave",
        "Tapu Village": "Tapu Village",
        "Team Rocket's Castle": "Team Rocket's Castle",
        "Ten Carat Hill — Farthest Hollow": "Ten Carat Hill (Farthest Hollow)",
        "Ten Carat Hill — Inside": "Ten Carat Hill",
        "Trainers' School": "Route 1 (Trainers' School)",
        "Ula'ula Beach": "Ula'ula Beach",
        "Ula’ula Meadow": "Ula'ula Meadow",
        "Ultra Megalopolis": "Ultra Megalopolis",
        "Ultra Space Wilds Cave World": "Ultra Space Wilds (Cave World)",
        "Ultra Space Wilds Cliff World": "Ultra Space Wilds (Cliff World)",
        "Ultra Space Wilds Rocky World": "Ultra Space Wilds (Rocky World)",
        "Ultra Space Wilds Water World": "Ultra Space Wilds (Water World)",
        "Ultra Space Wilds — Cave": "Ultra Space Wilds (Cave)",
        "Ultra Space Wilds — Cliff": "Ultra Space Wilds (Cliff)",
        "Ultra Space Wilds — Crag": "Ultra Space Wilds (Crag)",
        "Ultra Space Wilds — Waterfall": "Ultra Space Wilds (Waterfall)",
        "Ultra Space — Ultra Crater": "Ultra Crater",
        "Ultra Space — Ultra Deep Sea": "Ultra Deep Sea",
        "Ultra Space — Ultra Desert": "Ultra Desert",
        "Ultra Space — Ultra Forest": "Ultra Forest",
        "Ultra Space — Ultra Jungle": "Ultra Jungle",
        "Ultra Space — Ultra Plant": "Ultra Plant",
        "Ultra Space — Ultra Ruin": "Ultra Ruin",
        "Vast Poni Canyon — Inside": "Vast Poni Canyon",
        "Vast Poni Canyon — Northwest": "Vast Poni Canyon",
        "Vast Poni Canyon — Outside": "Vast Poni Canyon",
        "Verdant Cavern — Trial Site": "Verdant Cavern (Trial Site)",
        "Wela Volcano Park": "Wela Volcano Park"
    },
    "x_y": {
        "Ambrette Town": "Ambrette Town",
        "Aquacorde Town": "Aquacorde Town",
        "Azure Bay": "Azure Bay",
        "Connecting Cave": "Connecting Cave",
        "Couriway Town": "Couriway Town",
        "Cyllage City": "Cyllage City",
        "Frost Cavern (unknown area 313)": "Frost Cavern (Area 1)",
        "Frost Cavern (unknown area 314)": "Frost Cavern (Area 2)",
        "Frost Cavern (unknown area 315)": "Frost Cavern (Area 3)",
        "Frost Cavern (unknown area 316)": "Frost Cavern (Area 2)",
        "Frost Cavern (unknown area 317)": "Frost Cavern (Area 2)",
        "Glittering Cave (unknown area 303)": "Glittering Cave (Area 1)",
        "Glittering Cave (unknown area 304)": "Glittering Cave (Area 2)",
        "Laverre City": "Laverre City",
        "Lost Hotel": "Lost Hotel",
        "Lumiose City": "Lumiose City",
        "Parfum Palace": "Parfum Palace",
        "Pokemon Village": "Pokémon Village",
        "Reflection Cave (unknown area 305)": "Reflection Cave",
        "Reflection Cave (unknown area 306)": "Reflection Cave",
        "Reflection Cave (unknown area 307)": "Reflection Cave",
        "Reflection Cave (unknown area 308)": "Reflection Cave",
        "Road 10": "Route 10",
        "Road 11": "Route 11",
        "Road 12": "Route 12",
        "Road 13": "Route 13",
        "Road 14": "Route 14",
        "Road 15": "Route 15",
        "Road 16": "Route 16",
        "Road 17": "Route 17",
        "Road 18": "Route 18",
        "Road 19": "Route 19",
        "Road 2": "Route 2",
        "Road 20": "Route 20",
        "Road 21": "Route 21",
        "Road 22": "Route 22",
        "Road 3": "Route 3",
        "Road 4": "Route 4",
        "Road 5": "Route 5",
        "Road 6": "Route 6",
        "Road 7": "Route 7",
        "Road 8": "Route 8",
        "Road 9": "Route 9",
        "Roaming Kalos": "Kalos (roaming)",
        "Santalune Forest": "Santalune Forest",
        "Sea Spirit’s Den": "Sea Spirit's Den",
        "Shalour City": "Shalour City",
        "Team Flare Secret HQ": "Team Flare Secret HQ",
        "Terminus Cave (unknown area 343)": "Terminus Cave (Area 1)",
        "Terminus Cave (unknown area 344)": "Terminus Cave (Area 1)",
        "Terminus Cave (unknown area 345)": "Terminus Cave (Area 1)",
        "Terminus Cave (unknown area 347)": "Terminus Cave (Area 2)",
        "Terminus Cave (unknown area 348)": "Terminus Cave (Area 2)",
        "Tower of Mastery": "Tower of Mastery",
        "Unknown Dungeon": "Unknown Dungeon",
        "Victory Road (unknown area 322)": "Victory Road (Area 1)",
        "Victory Road (unknown area 324)": "Victory Road (Area 2)",
        "Victory Road (unknown area 326)": "Victory Road (Area 3)",
        "Victory Road (unknown area 327)": "Victory Road (Area 4)",
        "Victory Road (unknown area 328)": "Victory Road (Area 5)"
    }
}
