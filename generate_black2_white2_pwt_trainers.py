"""Extract the Pokemon World Tournament (PWT) trainers from a Black 2 / White 2 ROM.

PWT data is NOT in the regular trainer NARC (a/0/9/2 + a/0/9/3, which Frost's
Gen5 editor exposes). It lives in its own files in the same NDS filesystem:

    a/2/5/4   pwttr1    68 trainers, each -> set IDs used for 1-on-1 battles
    a/2/5/5   pwttr6    68 trainers, each -> 6 set IDs (the full 6-mon roster)
    a/2/5/6   pwtpoke   the actual Pokemon "set" definitions

Each PWT trainer points at a list of set IDs in pwtpoke. Each set is a 16-byte
record (reverse-engineered and verified against Serebii's PWT pages):

    offset 0  u16  species (national dex number)
    offset 2  u16  move 1
    offset 4  u16  move 2
    offset 6  u16  move 3
    offset 8  u16  move 4
    offset 10 u8   EV-spread index (selects an in-game EV preset; the preset
                   table lives in the game binary, not in these NARCs)
    offset 11 u8   nature (0-24, standard nature order)
    offset 12 u16  held item
    offset 14 u8   form
    offset 15 u8   (always 0)

PWT Pokemon are always level 50. Ability and IVs are not stored per-Pokemon
(the game derives them), so they are not emitted.

Names (species / move / item) are decoded from the ROM's own text NARC, the
same way the editor does it (PPTxtHandler.GetStrings), so the output is fully
ROM-native and self-consistent.

Usage:
    python generate_black2_white2_pwt_trainers.py [--rom PATH] [--out PATH]
"""

from __future__ import annotations

import argparse
import struct
from pathlib import Path

# --------------------------------------------------------------------------- #
# Defaults
# --------------------------------------------------------------------------- #
ROOT = Path(__file__).resolve().parent
DEFAULT_ROM = r"P:\Scott's Thoughts Programs\FrostsGen5Editor\my files\5-White2.nds"
DEFAULT_OUT = ROOT / "trainers" / "black2_white2_pwt.js"

# BW2 text-file indices inside the message NARC (from VersionConstants.cs)
TEXT_NARC_PATH = "a/0/0/2"
POKEMON_NAME_TEXT_FILE = 90
MOVE_NAME_TEXT_FILE = 403
ITEM_NAME_TEXT_FILE = 64

PWT_TR1 = "a/2/5/4"   # 1-on-1 choices
PWT_TR6 = "a/2/5/5"   # 6-on-6 roster
PWT_POKE = "a/2/5/6"  # set definitions

NATURES = [
    "Hardy", "Lonely", "Brave", "Adamant", "Naughty",
    "Bold", "Docile", "Relaxed", "Impish", "Lax",
    "Timid", "Hasty", "Serious", "Jolly", "Naive",
    "Modest", "Mild", "Quiet", "Bashful", "Rash",
    "Calm", "Gentle", "Sassy", "Careful", "Quirky",
]


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
def decode_set(f: bytes, names: dict) -> dict:
    species = u16(f, 0)
    move_ids = [u16(f, 2 + 2 * k) for k in range(4)]
    item = u16(f, 12)
    nature_idx = f[11]
    return {
        "species": names["pokemon"][species] if species < len(names["pokemon"]) else f"#{species}",
        "species_dex": species,
        "level": 50,
        "nature": NATURES[nature_idx] if nature_idx < len(NATURES) else f"#{nature_idx}",
        "held_item": names["item"][item] if item and item < len(names["item"]) else None,
        "ev_spread_index": f[10],
        "form": f[14],
        "moves": [names["move"][m] if m < len(names["move"]) else f"#{m}"
                  for m in move_ids if m != 0],
    }


def trainer_sets(entry: bytes) -> list[int]:
    """pwttr entry: [u16 flag][u16 count][count x u16 set ids]."""
    count = u16(entry, 2)
    return [u16(entry, 4 + 2 * i) for i in range(count)]


def build(rom_path: str) -> dict:
    nds = NDS(rom_path)

    text_narc = parse_narc(nds.file_by_path(TEXT_NARC_PATH))
    names = {
        "pokemon": decode_text_file(text_narc[POKEMON_NAME_TEXT_FILE]),
        "move": decode_text_file(text_narc[MOVE_NAME_TEXT_FILE]),
        "item": decode_text_file(text_narc[ITEM_NAME_TEXT_FILE]),
    }

    pwtpoke = parse_narc(nds.file_by_path(PWT_POKE))
    tr1 = parse_narc(nds.file_by_path(PWT_TR1))
    tr6 = parse_narc(nds.file_by_path(PWT_TR6))

    trainers = {}
    # subfile 0 is a null/dummy entry in both pwttr files; real trainers start at 1
    for idx in range(1, len(tr6)):
        sets_6 = trainer_sets(tr6[idx])
        sets_1 = trainer_sets(tr1[idx]) if idx < len(tr1) else []
        if not sets_6:
            continue
        trainers[str(idx)] = {
            "pwt_index": idx,
            "roster": [decode_set(pwtpoke[s], names) for s in sets_6],
            "single_battle_picks": [decode_set(pwtpoke[s], names) for s in sets_1],
        }
    return trainers


# --------------------------------------------------------------------------- #
# Output
# --------------------------------------------------------------------------- #
def to_js(trainers: dict) -> str:
    import json
    body = json.dumps(trainers, indent=4, ensure_ascii=False)
    header = (
        "// Pokemon World Tournament trainers, extracted from the Black 2 / White 2 ROM.\n"
        "// Source files: a/2/5/5 (pwttr6 roster), a/2/5/4 (pwttr1 1v1), a/2/5/6 (pwtpoke sets).\n"
        "// All PWT Pokemon are level 50. Ability/IVs are game-derived and not stored per-Pokemon.\n"
        "// ev_spread_index selects an in-game EV preset (the preset table is in the game binary).\n\n"
    )
    return header + "export const pwtTrainers = " + body + ";\n"


def main():
    ap = argparse.ArgumentParser(description="Extract BW2 PWT trainers from a ROM.")
    ap.add_argument("--rom", default=DEFAULT_ROM, help="path to the Black2/White2 .nds ROM")
    ap.add_argument("--out", default=str(DEFAULT_OUT), help="output .js path")
    args = ap.parse_args()

    trainers = build(args.rom)
    Path(args.out).write_text(to_js(trainers), encoding="utf-8")

    n_mons = sum(len(t["roster"]) for t in trainers.values())
    print(f"Wrote {len(trainers)} PWT trainers ({n_mons} roster Pokemon) -> {args.out}")
    # quick sanity print
    first = next(iter(trainers.values()))
    print("Trainer", first["pwt_index"], "roster:")
    for m in first["roster"]:
        print(f"   {m['species']:<12} {m['nature']:<8} @ {m['held_item']}  {m['moves']}")


if __name__ == "__main__":
    main()
