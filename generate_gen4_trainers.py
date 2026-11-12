"""Regenerate trainers/diamond_pearl.js and trainers/platinum.js from the retail ROMs.

Reads (read-only):
  - roms/originals/4-Diamond.nds, 4-Platinum.nds   (A:/Dropbox/stp-projects/programs/roms)
      poketool/trainer/trdata.narc   trainer headers (20 bytes: type, class, sprite,
                                     party size, items[4], AI flags, double flag)
      poketool/trainer/trpoke.narc   parties (u16 difficulty, u16 level, u16 species
                                     (bits 10-15 = form), [u16 item], [u16 moves[4]],
                                     then u16 ball seal in Platinum only)
      poketool/personal/personal.narc (DP) / pl_personal.narc (Pt)  base stats
      poketool/personal/wotbl.narc   level-up learnsets
      overlay 11 (DP) / overlay 16 (Pt)  per-class prize multiplier table
  - A:/decomps/pokeplatinum   (vanilla pret clone)
      include/data/trainer_class_genders.h, include/data/trainer_class_prize_mul.h,
      generated/trainer_classes.txt, res/trainers/data/*.json (cross-check only)
  - A:/decomps/pokeheartgold/include/constants/{items,abilities}.h  (id -> constant)
  - moves.js (move names by rom_id, generation 4), pokedex/<game>.js (species /
    ability keys), and the existing trainers/<game>.js (kept only for the cosmetic
    `name`, `trainer_class` and `location` strings).

Diamond and Pearl share identical trdata/trpoke/wotbl NARCs (checked byte-for-byte);
Pearl's personal.narc differs from Diamond's only in wild held items, so Diamond
is used.

Party generation replicates CreateNPCTrainerParty (pret/pokediamond
arm9/src/trainer_data.c; pokeplatinum src/trainer_data.c TrainerData_BuildParty):
  seed = difficulty + level + species + trainerId          (species without form bits)
  repeat trainerClass times: seed = LCRNG_Next()            (returns the high 16 bits)
  pid  = (seed << 8) + (120 if the class is female else 136)
  nature = pid % 25, ability slot = pid & 1 (always 0 here), IVs = (u8)(difficulty*31/255)
  for all six stats, EVs 0. If that u8 is >= 32 the IVs are rolled from the same
  LCRNG after a non-shiny OT ID (Platinum Volkner's Electivire, difficulty 2500). The mon is created as form 0 and the form is set afterwards without a
  stat recalculation, so a trainer's Wormadam (Sandy/Trash) keeps Plant Cloak
  stats and (for default movesets) Plant Cloak level-up moves in battle.
Default moves: walk the level-up learnset to the level, skip known moves, FIFO.
Prize money: lastMonLevel * 4 * prizeMul[class] (* 2 in double battles).
Experience: (baseExp * level / 7) * 150 / 100.

The DP class-gender table is not in any local decomp; it is copied from
pret/pokediamond (sTrainerClassGenderCountTbl) and asserted to exist verbatim in
the Diamond arm9 binary at run time.

Usage: python generate_gen4_trainers.py [--check] [diamond_pearl|platinum ...]
"""

from __future__ import annotations

import json
import re
import struct
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ROMS = Path("A:/Dropbox/stp-projects/programs/roms/originals")
PLAT = Path("A:/decomps/pokeplatinum")
HGSS = Path("A:/decomps/pokeheartgold")
PFX = "export const trainers = "

# pret/pokediamond arm9/src/trainer_data.c sTrainerClassGenderCountTbl (0 male, 1 female, 2 double)
DP_CLASS_GENDER = [
    0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 0, 0, 0, 1, 2,
    0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 2, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 0,
]

GAMES = {
    "diamond_pearl": dict(rom="4-Diamond.nds", personal="poketool/personal/personal.narc",
                          pokedex="diamond_pearl", n_classes=98, pad_moves=False),
    "platinum": dict(rom="4-Platinum.nds", personal="poketool/personal/pl_personal.narc",
                     pokedex="platinum", n_classes=105, pad_moves=True),
}

NATURE_STATS = ["attack", "defense", "speed", "special_attack", "special_defense"]
NATURES = [
    "Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed",
    "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild",
    "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky",
]


# --------------------------------------------------------------------------- #
# NDS / NARC
# --------------------------------------------------------------------------- #
class NDS:
    def __init__(self, path: Path):
        self.d = path.read_bytes()
        d = self.d
        self.fnt_off, _, self.fat_off, _ = struct.unpack_from("<IIII", d, 0x40)
        self.arm9_off, _, _, self.arm9_size = struct.unpack_from("<IIII", d, 0x20)
        self.ovt9_off, self.ovt9_size = struct.unpack_from("<II", d, 0x50)
        self.paths: dict[str, int] = {}
        self._walk(0xF000, "")

    def _walk(self, dirid: int, prefix: str):
        d = self.d
        sub, first, _ = struct.unpack_from("<IHH", d, self.fnt_off + (dirid & 0xFFF) * 8)
        p, fid = self.fnt_off + sub, first
        while True:
            ln = d[p]
            p += 1
            if ln == 0:
                break
            name = d[p:p + (ln & 0x7F)].decode("latin-1")
            p += ln & 0x7F
            if ln & 0x80:
                sid = struct.unpack_from("<H", d, p)[0]
                p += 2
                self._walk(sid, prefix + name + "/")
            else:
                self.paths[prefix + name] = fid
                fid += 1

    def file_by_id(self, fid: int) -> bytes:
        s, e = struct.unpack_from("<II", self.d, self.fat_off + fid * 8)
        return self.d[s:e]

    def file(self, path: str) -> bytes:
        return self.file_by_id(self.paths[path])

    def arm9(self) -> bytes:
        return self.d[self.arm9_off:self.arm9_off + self.arm9_size]

    def overlays(self) -> list[bytes]:
        return [self.file_by_id(struct.unpack_from("<8I", self.d, self.ovt9_off + i * 32)[6])
                for i in range(self.ovt9_size // 32)]


def narc(data: bytes) -> list[bytes]:
    assert data[:4] == b"NARC"
    fsz, n = struct.unpack_from("<II", data, 20)
    fnt = 16 + fsz
    fimg = fnt + struct.unpack_from("<I", data, fnt + 4)[0]
    return [data[fimg + 8 + s:fimg + 8 + e]
            for s, e in (struct.unpack_from("<II", data, 28 + i * 8) for i in range(n))]


# --------------------------------------------------------------------------- #
# ROM tables
# --------------------------------------------------------------------------- #
def parse_trdata(b: bytes) -> dict:
    mtype, cls, _sprite, n = struct.unpack_from("<BBBB", b, 0)
    items = list(struct.unpack_from("<4H", b, 4))
    _ai, double = struct.unpack_from("<II", b, 12)
    return dict(type=mtype, cls=cls, n=n, items=items, double=double)


def parse_trpoke(b: bytes, mtype: int, n: int, seal: bool) -> list[dict]:
    has_moves, has_item = mtype & 1, mtype & 2
    size = (8 if seal else 6) + (2 if has_item else 0) + (8 if has_moves else 0)
    assert len(b) >= size * n, (len(b), size, n)
    mons = []
    for i in range(n):
        o = i * size
        diff, level, species = struct.unpack_from("<HHH", b, o)
        o += 6
        item = None
        if has_item:
            item = struct.unpack_from("<H", b, o)[0]
            o += 2
        moves = None
        if has_moves:
            moves = list(struct.unpack_from("<4H", b, o))
        mons.append(dict(difficulty=diff, level=level, species=species & 0x3FF,
                         form=species >> 10, item=item, moves=moves))
    return mons


def parse_personal(b: bytes) -> dict:
    hp, atk, de, spe, spa, spd = b[0:6]
    return dict(hp=hp, attack=atk, defense=de, speed=spe, special_attack=spa,
                special_defense=spd, exp=b[9], abilities=[b[22], b[23]], gender=b[16])


def parse_wotbl(b: bytes) -> list[tuple[int, int]]:
    out = []
    for i in range(0, len(b) - 1, 2):
        e = struct.unpack_from("<H", b, i)[0]
        if e == 0xFFFF:
            break
        out.append((e >> 9, e & 0x1FF))
    return out


class LCRNG:
    def __init__(self, seed: int):
        self.state = seed & 0xFFFFFFFF

    def next(self) -> int:
        self.state = (self.state * 0x41C64E6D + 0x6073) & 0xFFFFFFFF
        return self.state >> 16


STAT_KEYS = ("hp", "attack", "defense", "speed", "special_attack", "special_defense")


def trainer_mon_pid_ivs(difficulty: int, level: int, species: int, tid: int, cls: int,
                        gender_mod: int) -> tuple[int, dict]:
    """PID and IVs exactly as CreateNPCTrainerParty + Pokemon_InitWith produce them."""
    rng = LCRNG(difficulty + level + species + tid)
    rnd = rng.state
    for _ in range(cls):
        rnd = rng.next()
    pid = ((rnd << 8) + gender_mod) & 0xFFFFFFFF
    iv = (difficulty * 31 // 255) & 0xFF  # stored in a u8
    if iv < 32:
        return pid, {k: iv for k in STAT_KEYS}
    # INIT_IVS_RANDOM path (only Platinum Volkner's Electivire, difficulty 2500):
    # Pokemon_InitWith first rolls a non-shiny OT ID, then two IV words, all from
    # the same LCRNG that was just seeded for the PID.
    while True:
        otid = rng.next() | (rng.next() << 16)
        if ((otid >> 16) ^ (otid & 0xFFFF) ^ (pid >> 16) ^ (pid & 0xFFFF)) >= 8:
            break
    a, b = rng.next(), rng.next()
    return pid, {"hp": a & 31, "attack": (a >> 5) & 31, "defense": (a >> 10) & 31,
                 "speed": b & 31, "special_attack": (b >> 5) & 31, "special_defense": (b >> 10) & 31}


def default_moveset(learnset, level):
    slots: list[int] = []
    for lv, mv in learnset:
        if lv > level:
            break
        if mv in slots:
            continue
        if len(slots) < 4:
            slots.append(mv)
        else:
            slots = slots[1:] + [mv]
    return slots


def calc_stats(base: dict, ivs: dict, level: int, nature: int) -> dict:
    up, down = nature // 5, nature % 5
    out = {}
    for k in STAT_KEYS:
        n = 2 * base[k] + ivs[k]
        if k == "hp":
            out[k] = 1 if base[k] == 1 else n * level // 100 + level + 10
            continue
        v = n * level // 100 + 5
        if up != down and k == NATURE_STATS[up]:
            v = v * 110 // 100
        elif up != down and k == NATURE_STATS[down]:
            v = v * 90 // 100
        out[k] = v
    return out


# --------------------------------------------------------------------------- #
# Decomp tables / names
# --------------------------------------------------------------------------- #
def defines(path: Path, prefix: str) -> dict[int, str]:
    out: dict[int, str] = {}
    for m in re.finditer(r"^#define\s+(" + prefix + r"\w+)\s+(\d+|0x[0-9A-Fa-f]+)\s*$",
                         path.read_text(encoding="utf-8"), re.M):
        out.setdefault(int(m.group(2), 0), m.group(1))
    return out


def plat_class_tables() -> tuple[list[int], list[int]]:
    classes = [l.strip() for l in (PLAT / "generated/trainer_classes.txt").read_text().splitlines() if l.strip()]
    pm = dict((a, int(b)) for a, b in re.findall(
        r"\[(TRAINER_CLASS_\w+)\]\s*=\s*(\d+)", (PLAT / "include/data/trainer_class_prize_mul.h").read_text()))
    gm = dict(re.findall(r"\[(TRAINER_CLASS_\w+)\]\s*=\s*(\w+)",
                         (PLAT / "include/data/trainer_class_genders.h").read_text()))
    return [pm[c] for c in classes], [1 if gm[c] == "GENDER_FEMALE" else 0 for c in classes]


def loadjs(path: Path):
    t = path.read_text(encoding="utf-8")
    return json.loads(t[t.index("=") + 1:].strip().rstrip(";"))


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", s.lower())


ITEM_NAMES = {
    "ITEM_X_SP__DEF": "X Sp. Def",
    "ITEM_X_DEFENSE": "X Defend",  # Gen 4 in-game name
    "ITEM_KINGS_ROCK": "King's Rock",
    "ITEM_NEVER_MELT_ICE": "Never-Melt Ice",
    "ITEM_UP_GRADE": "Up-Grade",
    "ITEM_GUARD_SPEC": "Guard Spec.",
    "ITEM_BLACKGLASSES": "Black Glasses",
    "ITEM_BLACKBELT": "Black Belt",
    "ITEM_TWISTEDSPOON": "Twisted Spoon",
    "ITEM_SILVERPOWDER": "Silver Powder",
    "ITEM_TINYMUSHROOM": "Tiny Mushroom",
    "ITEM_DEEPSEATOOTH": "Deep Sea Tooth",
    "ITEM_DEEPSEASCALE": "Deep Sea Scale",
    "ITEM_BRIGHTPOWDER": "Bright Powder",
}


class Namer:
    def __init__(self, pokedex_game: str):
        self.move_by_id = {v["rom_id"]: k for k, v in loadjs(ROOT / "moves.js")["4"].items()}
        self.pokedex = loadjs(ROOT / "pokedex" / f"{pokedex_game}.js")
        self.by_dex: dict[int, list[str]] = {}
        for k, v in self.pokedex.items():
            self.by_dex.setdefault(v["national_dex_number"], []).append(k)
        abil = set()
        for v in self.pokedex.values():
            abil.update(a for a in v["abilities"] if a)
        self.abil = {norm(a): a for a in abil}
        self.item_const = defines(HGSS / "include/constants/items.h", "ITEM_")
        self.abil_const = defines(HGSS / "include/constants/abilities.h", "ABILITY_")

    def species(self, sid: int, form: int) -> str:
        keys = self.by_dex[sid]
        # Species whose forms are cosmetic (Burmy, Shellos, Gastrodon, Unown, ...)
        # have a single pokedex key; forms with their own key (Wormadam, Rotom,
        # Giratina, Shaymin, Deoxys) are listed in form order.
        if sid == 351 or form >= len(keys):
            return keys[0]
        return keys[form]

    def move(self, mid: int) -> str:
        return self.move_by_id[mid]

    def ability(self, aid: int) -> str:
        return self.abil[norm(self.abil_const[aid][len("ABILITY_"):])]

    def item(self, iid: int) -> str | None:
        if not iid:
            return None
        c = self.item_const[iid]
        return ITEM_NAMES.get(c) or " ".join(p.capitalize() for p in c[5:].split("_"))


# --------------------------------------------------------------------------- #
# Build
# --------------------------------------------------------------------------- #
class Game:
    def __init__(self, fname: str):
        cfg = GAMES[fname]
        self.fname = fname
        rom = NDS(ROMS / cfg["rom"])
        self.trdata = [parse_trdata(b) for b in narc(rom.file("poketool/trainer/trdata.narc"))]
        tp = narc(rom.file("poketool/trainer/trpoke.narc"))
        self.parties = [parse_trpoke(tp[i], t["type"], t["n"], fname != "diamond_pearl") for i, t in enumerate(self.trdata)]
        self.personal = [parse_personal(b) if len(b) >= 24 else None
                         for b in narc(rom.file(cfg["personal"]))]
        self.learnsets = [parse_wotbl(b) for b in narc(rom.file("poketool/personal/wotbl.narc"))]
        prize, gender = plat_class_tables()
        n = cfg["n_classes"]
        if fname == "diamond_pearl":
            gender = DP_CLASS_GENDER
            assert rom.arm9().find(bytes(gender)) >= 0, "DP gender table not found in arm9"
            prize = prize[:n]
        # the prize table must exist verbatim in one of the battle overlays
        assert any(ov.find(bytes(prize[:n])) >= 0 for ov in rom.overlays()), "prize table not in ROM"
        self.prize, self.gender = prize[:n], gender[:n]
        self.namer = Namer(cfg["pokedex"])
        self.pad_moves = cfg["pad_moves"]

    def build(self, tid: int) -> dict:
        t, nm = self.trdata[tid], self.namer
        gmod = 120 if self.gender[t["cls"]] == 1 else 136
        party = []
        for mon in self.parties[tid]:
            sp = mon["species"]
            base = self.personal[sp]
            pid, ivs = trainer_mon_pid_ivs(mon["difficulty"], mon["level"], sp, tid, t["cls"], gmod)
            nature = pid % 25
            a1, a2 = base["abilities"]
            ability = a2 if (a2 and pid & 1) else a1
            lvl = mon["level"]
            if mon["moves"] is not None:
                moves = [nm.move(m) if m else None for m in mon["moves"]]  # MOVE_NONE -> null
                # Keep each file's existing convention: platinum.js lists all four
                # slots (empty ones as null), diamond_pearl.js drops trailing empties.
                while not self.pad_moves and moves and moves[-1] is None:
                    moves.pop()
            else:
                moves = [nm.move(m) for m in default_moveset(self.learnsets[sp], lvl)]
            party.append({
                "species": nm.species(sp, mon["form"]),
                "level": lvl,
                "experience_yield": (base["exp"] * lvl // 7) * 150 // 100,
                "nature": NATURES[nature],
                "ability": nm.ability(ability),
                "held_item": nm.item(mon["item"]) if mon["item"] is not None else None,
                "stats": calc_stats(base, ivs, lvl, nature),
                "moves": moves,
            })
        money = -1
        if party:
            money = (self.parties[tid][-1]["level"] & 0xFFFF) * 4 * self.prize[t["cls"]] * (2 if t["double"] else 1)
        return dict(rom_id=tid, money=money, is_double_battle=bool(t["double"]),
                    items=[nm.item(i) for i in t["items"] if i], party=party)


def load_existing(fname: str):
    raw = (ROOT / "trainers" / f"{fname}.js").read_bytes().decode("utf-8")
    t = raw.replace("\r\n", "\n")
    assert t.startswith(PFX)
    return json.loads(t[len(PFX):]), "\r\n" in raw, raw.endswith("\n"), raw


def dump(d, crlf, trailing):
    s = PFX + json.dumps(d, indent=4, ensure_ascii=False)
    if trailing:
        s += "\n"
    return s.replace("\n", "\r\n") if crlf else s


def regenerate(fname: str, check: bool) -> dict:
    g = Game(fname)
    old, crlf, trailing, raw = load_existing(fname)
    assert dump(old, crlf, trailing) == raw, "existing file does not round-trip"
    assert len(old) == len(g.trdata) and all(int(k) < len(g.trdata) for k in old)
    new = {}
    for k, ot in old.items():
        b = g.build(int(k))
        new[k] = {key: (ot[key] if key in ("name", "trainer_class", "location") else b[key]) for key in ot}
    if not check:
        (ROOT / "trainers" / f"{fname}.js").write_bytes(dump(new, crlf, trailing).encode("utf-8"))
    return dict(game=g, old=old, new=new)


if __name__ == "__main__":
    check = "--check" in sys.argv
    for fname in [a for a in sys.argv[1:] if not a.startswith("--")] or list(GAMES):
        r = regenerate(fname, check)
        diff = Counter()
        for k in r["old"]:
            o, n = r["old"][k], r["new"][k]
            for f in o:
                if f == "party":
                    diff["party_len"] += len(o[f]) != len(n[f])
                    for po, pn in zip(o[f], n[f]):
                        for ff in po:
                            diff["mon." + ff] += po[ff] != pn[ff]
                else:
                    diff[f] += o[f] != n[f]
        print(fname, "checked" if check else "written", len(r["new"]), "trainers; differing:",
              {k: v for k, v in diff.items() if v})
