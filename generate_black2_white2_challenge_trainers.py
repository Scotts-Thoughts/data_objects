"""Produce trainers/black2_white2_challenge.js: the BW2 trainers as fought in
CHALLENGE MODE.

How the game does it (Black 2 ROM, verified by disassembly):
  * The trainer NARC holds the challenge-specific TEAMS (gym leaders / E4 /
    champion / rivals get an extra Pokemon and custom move/item sets) in a high
    index block; when Challenge Mode is active the field scripts branch on
    GameGetDifficulty (script opcode 0x2AF) and call those trainer IDs instead.
  * The level increase is applied after the party is built, by arm9
    0x020185D0: for every enemy Pokemon, level += offset (Easy Mode: -offset,
    minimum 1; Normal Mode: unchanged), via Pokemon_SetValue(MON_DATA_LEVEL)
    only. Stats, moves and experience points are NOT recalculated, so a
    challenge-mode Pokemon keeps its Normal-Mode stats and moves (Bulbapedia's
    Key System page says the same: Iris's L63 Haxorus has L59 stats).
  * The offset is a property of the ZONE the battle happens in: bits 13-15 of
    the u16 at 0x22 of the zone header (a/0/1/2, 48 bytes per zone), read by
    arm9 0x02018CDC. Values in the ROM: 0-5.

This script therefore maps every trainer to the zone(s) it is fought in:
  1. NPC entities (a/1/2/6, file = zone header u16 @0x16) whose script id is
     3000 + trainer id;
  2. otherwise the zone script (a/0/5/6, file = zone header u16 @0x06): the
     trainer-battle opcodes 0x0085 / 0x0094 with a literal trainer id;
  3. otherwise SetVar (0x0028) of the variable those opcodes take, in the same
     script file.
A trainer found in zones with different offsets takes the highest one.
Big Stadium / Small Court trainers are picked at run time, so the script scan
cannot place them reliably (some are also referenced by other zones' scripts);
the trainers that Bulbapedia's "Big Stadium and Small Court" page lists (matched
by class, name and levels; every one shows +2 there) are pinned to the stadium
zone (STADIUM_ZONE) and take its ROM offset (source "zone_stadium"). Trainers
still not found (Black Tower / White Treehollow, Join Avenue, some rematches)
get an ESTIMATED offset from their last Pokemon's level, calibrated on the
zone-mapped trainers; their challenge_level_offset_source is "estimated".

The transform keeps every field of trainers/black2_white2.js (stats and moves
unchanged), adds the offset to each level, and sets
prize_money = money * 4 * (challenge level of the last Pokemon)
(ov93_021D7FBC: prize byte * level of the last Pokemon * 4).

Usage:
    python generate_black2_white2_challenge_trainers.py [--rom PATH] [--out PATH]
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from generate_black2_white2_pwt_trainers import NDS, parse_narc, decode_text_file, u16

ROOT = Path(__file__).resolve().parent
DEFAULT_ROM = str(ROOT.parent / "roms" / "originals" / "5-Black2.nds")
TRAINERS_JS = ROOT / "trainers" / "black2_white2.js"
POKEDEX_JS = ROOT / "pokedex" / "black2_white2.js"
DEFAULT_OUT = ROOT / "trainers" / "black2_white2_challenge.js"

TRDATA_PATH = "a/0/9/1"
TEXT_NARC_PATH = "a/0/0/2"
SCRIPT_NARC_PATH = "a/0/5/6"
ZONE_HEADERS_PATH = "a/0/1/2"
ZONE_ENTITIES_PATH = "a/1/2/6"
TRAINER_NAME_TEXT_FILE = 382
# script opcodes (u16) that start a trainer battle, each followed by a u16 trainer id
TRAINER_BATTLE_OPCODES = (0x85, 0x94)
SETVAR_OPCODE = 0x28
NPC_TRAINER_SCRIPT_BASE = 3000
# Big Stadium / Small Court (Nimbasa City): zone 42, and the trainer ids fought
# there per Bulbapedia's "Big Stadium and Small Court" page.
STADIUM_ZONE = 42
STADIUM_TRAINERS = frozenset([
    1, 2, 3, 7, 8, 9, 13, 14, 15, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91, 92, 95, 96, 98, 99, 100, 103, 104,
    105, 106, 107, 108, 110, 111, 112, 115, 116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 131, 132, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241,
    242, 243, 244, 245, 246, 247, 248, 249, 250, 251,
])

# Known gym/E4/champion trainer rom_ids -> offset documented on Bulbapedia
# (Cheren +1 ... Marlon/E4/Iris +4). Used only to VALIDATE the zone offsets.
ANCHOR_OFFSETS = {
    156: 1, 764: 1,   # Cheren
    157: 1, 765: 1,   # Roxie
    154: 2, 766: 2,   # Burgh
    153: 2, 767: 2,   # Elesa
    158: 3, 768: 3,   # Clay
    155: 3, 769: 3,   # Skyla
    159: 4, 770: 4,   # Drayden
    160: 4, 771: 4,   # Marlon
    38: 4, 39: 4, 40: 4, 41: 4, 772: 4, 773: 4, 774: 4, 775: 4,     # Elite Four
    143: 4, 144: 4, 145: 4, 146: 4, 777: 4, 778: 4, 779: 4, 780: 4,  # E4 rematch
    341: 4, 776: 4, 536: 4, 781: 4,   # Champion Iris
}


def estimated_offset(ace_level: int) -> int:
    """Most common zone offset for zone-mapped trainers with this last-Pokemon
    level. Only used for trainers that could not be mapped to a zone."""
    if ace_level <= 14:
        return 1
    if ace_level <= 25:
        return 2
    if ace_level <= 36:
        return 3
    if ace_level <= 59:
        return 4
    return 5


# --------------------------------------------------------------------------- #
# Loaders
# --------------------------------------------------------------------------- #
def load_js_object(path: Path) -> dict:
    txt = path.read_text(encoding="utf-8")
    txt = txt[txt.index("{"):txt.rindex("}") + 1]
    return json.loads(txt)


def _script_refs(b: bytes, num_trainers: int):
    literal, varrefs = set(), set()
    for i in range(len(b) - 5):
        if u16(b, i) in TRAINER_BATTLE_OPCODES:
            a = u16(b, i + 2)
            if 1 <= a < num_trainers:
                literal.add(a)
            elif 0x8000 <= a < 0x8100:
                varrefs.add(a)
    via_var = set()
    if varrefs:
        for i in range(len(b) - 5):
            if u16(b, i) == SETVAR_OPCODE and u16(b, i + 2) in varrefs:
                v = u16(b, i + 4)
                if 1 <= v < num_trainers:
                    via_var.add(v)
    return literal, via_var


def build_zone_offsets(nds: NDS, num_trainers: int) -> dict[int, tuple[int, str, list[int]]]:
    """trainer id -> (offset, source, all candidate offsets)."""
    zones = parse_narc(nds.file_by_path(ZONE_HEADERS_PATH))[0]
    entities = parse_narc(nds.file_by_path(ZONE_ENTITIES_PATH))
    scripts = parse_narc(nds.file_by_path(SCRIPT_NARC_PATH))
    refs: dict[int, dict[str, set[int]]] = {}
    cache = {}
    for z in range(len(zones) // 48):
        rec = zones[z * 48:(z + 1) * 48]
        offset = u16(rec, 0x22) >> 13
        ent, scr = u16(rec, 0x16), u16(rec, 0x06)
        if ent < len(entities) and len(entities[ent]) >= 8:
            b = entities[ent]
            base = 8 + b[4] * 0x14
            for k in range(b[5]):
                s = u16(b, base + k * 0x24 + 0x0A)
                if NPC_TRAINER_SCRIPT_BASE < s < NPC_TRAINER_SCRIPT_BASE + num_trainers:
                    refs.setdefault(s - NPC_TRAINER_SCRIPT_BASE, {}).setdefault("npc", set()).add(offset)
        if scr < len(scripts):
            if scr not in cache:
                cache[scr] = _script_refs(scripts[scr], num_trainers)
            literal, via_var = cache[scr]
            for t in literal:
                refs.setdefault(t, {}).setdefault("script", set()).add(offset)
            for t in via_var:
                refs.setdefault(t, {}).setdefault("script_var", set()).add(offset)
    out = {}
    stadium_offset = u16(zones, STADIUM_ZONE * 48 + 0x22) >> 13
    for t in STADIUM_TRAINERS:
        others = sorted(set().union(*refs[t].values())) if t in refs else []
        out[t] = (stadium_offset, "zone_stadium", others)
    for t, by in refs.items():
        if t in out:
            continue
        for how in ("npc", "script", "script_var"):
            if how in by:
                offs = sorted(by[how])
                out[t] = (max(offs), "zone" if len(offs) == 1 else "zone_max_of_several", offs)
                break
    return out


def build_variant_map(nds: NDS, num_trainers: int):
    """Derive which rom_ids are challenge-mode-specific teams.

    A difficulty-gated battle is emitted as `if challenge: battle(C) else
    battle(N)`, so the two trainer IDs appear ADJACENT in the script's battle
    sequence and share a trainer name (e.g. Shauntal's script lists
    [772, 38, 777, 143] = challenge/normal first, challenge/normal rematch). We
    pair each adjacent same-name pair, taking the higher rom_id (the appended
    high block) as the challenge variant. Only scripts that call
    GameGetDifficulty (opcode 0x2AF) are considered. Returns
    (challenge_to_normal, normal_to_challenge).
    """
    names = decode_text_file(parse_narc(nds.file_by_path(TEXT_NARC_PATH))[TRAINER_NAME_TEXT_FILE])
    scripts = parse_narc(nds.file_by_path(SCRIPT_NARC_PATH))

    def name_of(tid):
        return names[tid] if tid < len(names) else str(tid)

    challenge_to_normal = {}
    for b in scripts:
        if b"\xaf\x02" not in bytes(b):  # script does not branch on difficulty
            continue
        refs = []
        for i in range(len(b) - 3):
            if b[i] in TRAINER_BATTLE_OPCODES and b[i + 1] == 0x00:
                tid = u16(b, i + 2)
                if 1 <= tid < num_trainers and (not refs or refs[-1] != tid):
                    refs.append(tid)
        j = 0
        while j + 1 < len(refs):
            a, c = refs[j], refs[j + 1]
            if a != c and name_of(a) == name_of(c):
                challenge_to_normal[max(a, c)] = min(a, c)
                j += 2
            else:
                j += 1
    # Drop chained pairings (generic-named rivals list several adjacent
    # starter-variant challenge teams): a real normal team is never itself a
    # challenge variant of something else.
    challenge_to_normal = {c: n for c, n in challenge_to_normal.items() if n not in challenge_to_normal}
    normal_to_challenge = {n: c for c, n in challenge_to_normal.items()}
    return challenge_to_normal, normal_to_challenge


# --------------------------------------------------------------------------- #
# Core
# --------------------------------------------------------------------------- #
def build(rom_path: str):
    trainers = load_js_object(TRAINERS_JS)
    nds = NDS(rom_path)
    num = len(parse_narc(nds.file_by_path(TRDATA_PATH)))
    assert num == len(trainers), (num, len(trainers))
    challenge_to_normal, normal_to_challenge = build_variant_map(nds, num)
    zone_offsets = build_zone_offsets(nds, num)
    print(f"Variant map: {len(challenge_to_normal)} challenge-specific teams paired to their normal entries")

    with_party = [int(k) for k, t in trainers.items() if t.get("party")]
    mapped = [t for t in with_party if t in zone_offsets]
    print(f"Zone offsets: {len(mapped)} of {len(with_party)} trainers with parties mapped to a zone; "
          f"{len(with_party) - len(mapped)} estimated")
    several = [(t, zone_offsets[t][2]) for t in mapped if zone_offsets[t][1] == "zone_max_of_several"]
    stadium_conflicts = [(t, zone_offsets[t][2]) for t in mapped if zone_offsets[t][1] == "zone_stadium"
                         and zone_offsets[t][2] and zone_offsets[t][2] != [zone_offsets[t][0]]]
    if stadium_conflicts:
        print("  stadium trainers also referenced by zones with other offsets (stadium used):", stadium_conflicts)
    if several:
        print("  found in zones with different offsets (highest used):", several)

    fail = [(rid, zone_offsets.get(rid, (None,))[0], exp) for rid, exp in ANCHOR_OFFSETS.items()
            if zone_offsets.get(rid, (None,))[0] != exp]
    print("Anchor check:", "OK" if not fail else f"MISMATCHES {fail}")

    out = {}
    for rid_s, t in trainers.items():
        rid = int(rid_s)
        new_t = dict(t)
        new_t["is_challenge_variant"] = rid in challenge_to_normal
        if rid in challenge_to_normal:
            new_t["normal_rom_id"] = challenge_to_normal[rid]
        if rid in normal_to_challenge:
            new_t["challenge_rom_id"] = normal_to_challenge[rid]
        party = t.get("party", [])
        if not party:
            out[rid_s] = new_t
            continue
        if rid in zone_offsets:
            offset, source, _ = zone_offsets[rid]
        else:
            offset, source = estimated_offset(party[-1]["level"]), "estimated"
        new_party = []
        for mon in party:
            m = dict(mon)
            m["level"] = mon["level"] + offset  # stats/moves stay at the Normal-Mode level
            new_party.append(m)
        new_t["challenge_level_offset"] = offset
        new_t["challenge_level_offset_source"] = source
        new_t["party"] = new_party
        new_t["prize_money"] = t.get("money", 0) * 4 * new_party[-1]["level"]
        out[rid_s] = new_t
    return out


def to_js(trainers: dict) -> str:
    header = (
        "// BW2 trainers as fought in CHALLENGE MODE.\n"
        "// Generated by generate_black2_white2_challenge_trainers.py from black2_white2.js + ROM.\n"
        "// Each Pokemon's level is the base level + challenge_level_offset, the offset stored in the header\n"
        "// of the zone the battle is in (source \"zone\" / \"zone_max_of_several\" / \"zone_stadium\";\n"
        "// \"estimated\" = trainer not located, offset guessed from its last Pokemon's level).\n"
        "// The game changes only the level: stats and moves are the\n"
        "// Normal-Mode ones and are kept unchanged. 'money' is the raw prize byte; 'prize_money' is the\n"
        "// actual reward = money * 4 * last Pokemon's challenge level.\n"
        "// 'is_challenge_variant' marks the challenge-mode-specific teams (gyms/E4/champion/rivals); these\n"
        "// are the entries actually fought in Challenge Mode. 'normal_rom_id'/'challenge_rom_id' cross-link\n"
        "// a battle's normal and challenge versions.\n\n"
    )
    return header + "export const challengeTrainers = " + json.dumps(trainers, indent=4, ensure_ascii=False) + ";\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--rom", default=DEFAULT_ROM)
    ap.add_argument("--out", default=str(DEFAULT_OUT))
    args = ap.parse_args()

    trainers = build(args.rom)
    Path(args.out).write_text(to_js(trainers), encoding="utf-8")
    n = sum(1 for t in trainers.values() if t.get("party"))
    print(f"Wrote {len(trainers)} trainers ({n} with parties) -> {args.out}")


if __name__ == "__main__":
    main()
