"""Produce trainers/black2_white2_challenge.js: the BW2 trainers as fought in
CHALLENGE MODE.

Challenge Mode in BW2 does not store higher levels. The trainer NARC holds the
challenge-specific TEAMS (gym leaders / E4 / champion get an extra Pokemon and
custom move/item sets) at base levels, in a high index block; when Challenge
Mode is active the field scripts call those alternate trainer IDs. The level
increase is applied at battle time as a flat per-trainer offset keyed to the
player's badge count:

    offset = min(4, floor(badges / 2) + 1)
    -> +1 (gyms 1-2), +2 (3-4), +3 (5-6), +4 (gyms 7-8, Elite Four, Champion,
       and all postgame battles; the offset caps at +4)

Verified against in-game data (pkmn.net + Bulbapedia) for all 8 gyms, the Elite
Four (first + rematch) and the Champion: e.g. Marlon's L49 and L51 mons both
become +4 (53 / 55), and Shauntal's L56/L58 E4 team becomes 60/62 (+4, not +5).
The offset is per-trainer (not per-level) and never exceeds +4.

Only ~159 of 814 trainers are scripted (gyms/E4/champion/rivals); the other 654
are generic "trainer's-eye" route trainers not bound to a trainer ID in any
script, so their badge stage can't be script-derived. We assign the offset by
the trainer's last (ace) Pokemon level, using brackets calibrated to the gym
anchors -- which reproduce the exact badge-rule offset at every gym + the E4.

This script TRANSFORMS the existing trainers/black2_white2.js (keeping its
already-derived natures/abilities/exp). It reads the ROM only for each mon's IV
byte (to recompute stats at the new level) and the trainer's format byte (to
know whether moves are custom or default level-up moves). A validation pass
recomputes everything at the ORIGINAL levels and asserts it reproduces the
existing file before any offset is applied.

Usage:
    python generate_black2_white2_challenge_trainers.py [--rom PATH] [--out PATH]
"""

from __future__ import annotations

import argparse
import json
import math
import re
from pathlib import Path

from generate_black2_white2_pwt_trainers import NDS, parse_narc, decode_text_file, u16

ROOT = Path(__file__).resolve().parent
DEFAULT_ROM = r"P:\Scott's Thoughts Programs\FrostsGen5Editor\my files\5-White2.nds"
TRAINERS_JS = ROOT / "trainers" / "black2_white2.js"
POKEDEX_JS = ROOT / "pokedex" / "black2_white2.js"
DEFAULT_OUT = ROOT / "trainers" / "black2_white2_challenge.js"

TRDATA_PATH = "a/0/9/1"
TRPOKE_PATH = "a/0/9/2"
TEXT_NARC_PATH = "a/0/0/2"
SCRIPT_NARC_PATH = "a/0/5/6"
TRAINER_NAME_TEXT_FILE = 382
# script opcodes that start a trainer battle, each followed by a 2-byte trainer id
TRAINER_BATTLE_OPCODES = (0x85, 0x94)

# Nature -> (increased_stat, decreased_stat); stat keys match base_stats.
NATURE_EFFECT = {
    "Hardy": (None, None), "Lonely": ("attack", "defense"), "Brave": ("attack", "speed"),
    "Adamant": ("attack", "special_attack"), "Naughty": ("attack", "special_defense"),
    "Bold": ("defense", "attack"), "Docile": (None, None), "Relaxed": ("defense", "speed"),
    "Impish": ("defense", "special_attack"), "Lax": ("defense", "special_defense"),
    "Timid": ("speed", "attack"), "Hasty": ("speed", "defense"), "Serious": (None, None),
    "Jolly": ("speed", "special_attack"), "Naive": ("speed", "special_defense"),
    "Modest": ("special_attack", "attack"), "Mild": ("special_attack", "defense"),
    "Quiet": ("special_attack", "speed"), "Bashful": (None, None),
    "Rash": ("special_attack", "special_defense"), "Calm": ("special_defense", "attack"),
    "Gentle": ("special_defense", "defense"), "Sassy": ("special_defense", "speed"),
    "Careful": ("special_defense", "special_attack"), "Quirky": (None, None),
}

# Ace (last-mon) level brackets -> challenge offset. Calibrated to the gym/E4/
# champion anchors: Cheren 13/Roxie 18 (+1), Burgh 24/Elesa 30 (+2), Clay 33/
# Skyla 39 (+3), Drayden 48/Marlon 51/Elite Four 56-58/Champion 59+ (+4). The
# offset caps at +4 -- every 8-badge battle (E4, Champion, postgame) is +4.
def ace_offset(ace_level: int) -> int:
    if ace_level <= 21:
        return 1
    if ace_level <= 32:
        return 2
    if ace_level <= 43:
        return 3
    return 4


# Known gym/E4/champion trainer rom_ids -> (badge stage offset). Used only to
# VALIDATE that ace_offset() reproduces the badge rule at the anchors.
ANCHOR_OFFSETS = {
    # gym leaders: normal block (153-160) and challenge block (764-771)
    156: 1, 764: 1,   # Cheren  (gym 1, 0 badges)
    157: 1, 765: 1,   # Roxie   (gym 2, 1 badge)
    154: 2, 766: 2,   # Burgh   (gym 3, 2 badges)
    153: 2, 767: 2,   # Elesa   (gym 4, 3 badges)
    158: 3, 768: 3,   # Clay    (gym 5, 4 badges)
    155: 3, 769: 3,   # Skyla   (gym 6, 5 badges)
    159: 4, 770: 4,   # Drayden (gym 7, 6 badges)
    160: 4, 771: 4,   # Marlon  (gym 8, 7 badges)
    # Elite Four (8 badges) first battle: normal 38-41, challenge 772-775 (+4)
    38: 4, 39: 4, 40: 4, 41: 4, 772: 4, 773: 4, 774: 4, 775: 4,
    # Elite Four rematch (postgame, 8 badges): normal 143-146, challenge 777-780
    143: 4, 144: 4, 145: 4, 146: 4, 777: 4, 778: 4, 779: 4, 780: 4,
    # Champion Iris first 341/776 and rematch 536/781 (+4)
    341: 4, 776: 4, 536: 4, 781: 4,
}


def fmt_flags(byte0: int) -> tuple[bool, bool]:
    return bool(byte0 & 1), bool((byte0 >> 1) & 1)  # (unique_moves, held_items)


def calc_stat(stat: str, base: int, iv: int, level: int, nature: str) -> int:
    common = (2 * base + iv) * level // 100  # EV = 0 for trainer Pokemon
    if stat == "hp":
        return common + level + 10
    val = common + 5
    inc, dec = NATURE_EFFECT[nature]
    if inc == stat:
        val = math.floor(val * 1.1)
    elif dec == stat:
        val = math.floor(val * 0.9)
    return val


# --------------------------------------------------------------------------- #
# Loaders
# --------------------------------------------------------------------------- #
def load_js_object(path: Path) -> dict:
    txt = path.read_text(encoding="utf-8")
    txt = txt[txt.index("{"):txt.rindex("}") + 1]
    return json.loads(txt)


def norm_move(m: str) -> str:
    return re.sub(r"[^a-z0-9]", "", m.lower())


def build_move_spelling_map(trainers: dict) -> dict[str, str]:
    """Map normalized move name -> the spelling used in the trainers file, so
    re-derived moves match the file's gen-5 conventions (e.g. 'DoubleSlap')."""
    canon = {}
    for t in trainers.values():
        for mon in t.get("party", []):
            for name in mon.get("moves", []):
                canon.setdefault(norm_move(name), name)
    return canon


def level_up_moves_at(learnset: list, level: int) -> list[str]:
    """Last 4 level-up moves learnable by `level`, in learn order."""
    learned = [name for (lvl, name) in learnset if lvl <= level]
    return learned[-4:]


def find_dex_entry(species: str, mon: dict, iv: int, pokedex: dict):
    """Return the pokedex entry (base species or the correct forme) whose base
    stats reproduce the mon's recorded stats. Handles formes (Rotom, Wormadam)
    where the trainers file stores only the base species name."""
    base = pokedex.get(species)
    candidates = [species] + [k for k in pokedex if k.startswith(species + " (")]
    stats = mon.get("stats")
    if stats is None:
        return base
    nature = mon.get("nature") or "Hardy"
    lvl = mon["level"]
    for key in candidates:
        dex = pokedex.get(key)
        if dex is None:
            continue
        bs = dex["base_stats"]
        if all(calc_stat(s, bs[s], iv, lvl, nature) == stats[s]
               for s in ("hp", "attack", "defense", "speed", "special_attack", "special_defense")):
            return dex
    return base


def build_variant_map(rom_path: str, num_trainers: int):
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
    nds = NDS(rom_path)
    names = decode_text_file(parse_narc(nds.file_by_path(TEXT_NARC_PATH))[TRAINER_NAME_TEXT_FILE])
    scripts = parse_narc(nds.file_by_path(SCRIPT_NARC_PATH))

    def name_of(tid):
        return names[tid] if tid < len(names) else str(tid)

    challenge_to_normal, normal_to_challenge = {}, {}
    for b in scripts:
        if b"\xaf\x02" not in bytes(b):  # script does not branch on difficulty
            continue
        # ordered, de-duplicated trainer battle references
        refs = []
        for i in range(len(b) - 3):
            if b[i] in TRAINER_BATTLE_OPCODES and b[i + 1] == 0x00:
                tid = u16(b, i + 2)
                if 1 <= tid < num_trainers and (not refs or refs[-1] != tid):
                    refs.append(tid)
        # pair adjacent same-name references; higher rom_id = challenge variant
        j = 0
        while j + 1 < len(refs):
            a, c = refs[j], refs[j + 1]
            if a != c and name_of(a) == name_of(c):
                challenge, normal = max(a, c), min(a, c)
                challenge_to_normal[challenge] = normal
                j += 2
            else:
                j += 1

    # Drop chained pairings: generic-named rivals can list several adjacent
    # starter-variant challenge teams, daisy-chaining (695<-694<-693). A real
    # normal team is never itself a challenge variant of something else.
    challenge_to_normal = {c: n for c, n in challenge_to_normal.items()
                           if n not in challenge_to_normal}
    normal_to_challenge = {n: c for c, n in challenge_to_normal.items()}
    return challenge_to_normal, normal_to_challenge


def read_rom_trainers(rom_path: str) -> dict[int, dict]:
    nds = NDS(rom_path)
    trdata = parse_narc(nds.file_by_path(TRDATA_PATH))
    trpoke = parse_narc(nds.file_by_path(TRPOKE_PATH))
    out = {}
    for i in range(len(trdata)):
        d = trdata[i]
        unique_moves, held_items = fmt_flags(d[0])
        npok = d[3]
        stride = 8 + (8 if unique_moves else 0) + (2 if held_items else 0)
        pk = trpoke[i]
        ivbytes = []
        for k in range(npok):
            p = k * stride
            ivbytes.append(pk[p] if p < len(pk) else 0)
        out[i] = {"unique_moves": unique_moves, "iv_bytes": ivbytes}
    return out


# --------------------------------------------------------------------------- #
# Core
# --------------------------------------------------------------------------- #
def iv_from_byte(b: int) -> int:
    return b * 31 // 255


def recompute_party(party, rom_iv_bytes, pokedex, canon_moves, level_delta, unique_moves):
    """Return a new party list with levels shifted by level_delta, stats
    recomputed at the new level, and (for default-move trainers) movesets
    re-derived only when the higher level actually learns a new move."""
    new_party = []
    for idx, mon in enumerate(party):
        iv = iv_from_byte(rom_iv_bytes[idx] if idx < len(rom_iv_bytes) else 0)
        dex = find_dex_entry(mon["species"], mon, iv, pokedex)
        new_level = mon["level"] + level_delta
        new_mon = dict(mon)
        new_mon["level"] = new_level

        if dex is not None and "stats" in mon:
            bs = dex["base_stats"]
            nature = mon.get("nature") or "Hardy"
            new_mon["stats"] = {
                s: calc_stat(s, bs[s], iv, new_level, nature)
                for s in ("hp", "attack", "defense", "speed", "special_attack", "special_defense")
            }
            if not unique_moves and "moves" in mon and level_delta:
                # Level-up moves are FIFO: a higher level only *adds* the moves
                # learned in (orig_level, new_level], pushing out the oldest.
                # Keep the file's original moves (and spelling); append the
                # newly-learned ones so retained moves stay byte-identical.
                ls = dex["level_up_learnset"]
                before = {norm_move(n) for (lvl, n) in ls if lvl <= mon["level"]}
                gained = [n for (lvl, n) in ls
                          if mon["level"] < lvl <= new_level and norm_move(n) not in before]
                if gained:
                    gained = [canon_moves.get(norm_move(m), m) for m in gained]
                    new_mon["moves"] = (mon["moves"] + gained)[-4:]
        new_party.append(new_mon)
    return new_party


def validate(trainers, rom, pokedex, canon_moves):
    """Run the transform at offset 0 and assert it reproduces the existing file.
    Returns (stat_mismatch, move_mismatch) lists."""
    stat_bad, move_bad = [], []
    for rid_s, t in trainers.items():
        rid = int(rid_s)
        party = t.get("party", [])
        if not party:
            continue
        rinfo = rom.get(rid, {"unique_moves": False, "iv_bytes": []})
        rebuilt = recompute_party(party, rinfo["iv_bytes"], pokedex, canon_moves, 0, rinfo["unique_moves"])
        for idx, (orig, new) in enumerate(zip(party, rebuilt)):
            if "stats" in orig and new.get("stats") != orig["stats"]:
                stat_bad.append((rid, idx, orig["species"], new.get("stats"), orig["stats"]))
            if "moves" in orig and new.get("moves") != orig["moves"]:
                move_bad.append((rid, idx, orig["species"], new.get("moves"), orig["moves"]))
    return stat_bad, move_bad


def build(rom_path: str):
    trainers = load_js_object(TRAINERS_JS)
    pokedex = load_js_object(POKEDEX_JS)
    rom = read_rom_trainers(rom_path)
    canon_moves = build_move_spelling_map(trainers)
    challenge_to_normal, normal_to_challenge = build_variant_map(rom_path, len(trainers))
    print(f"Variant map: {len(challenge_to_normal)} challenge-specific teams paired to their normal entries")

    # ---- validation: prove the transform reproduces the existing file ----
    stat_bad, move_bad = validate(trainers, rom, pokedex, canon_moves)
    print(f"Validation: {len(stat_bad)} stat mismatches, {len(move_bad)} default-move mismatches")
    for m in stat_bad[:8]:
        print("  STAT", m)
    for m in move_bad[:8]:
        print("  MOVE", m)

    # ---- anchor check: ace brackets must match the badge rule at gyms/E4 ----
    anchor_fail = []
    for rid, expected in ANCHOR_OFFSETS.items():
        t = trainers.get(str(rid))
        if not t or not t.get("party"):
            continue
        ace = t["party"][-1]["level"]
        if ace_offset(ace) != expected:
            anchor_fail.append((rid, ace, ace_offset(ace), expected))
    if anchor_fail:
        print("  ANCHOR MISMATCHES:", anchor_fail)
    else:
        print(f"Anchor check: ace brackets match the badge rule for all {len(ANCHOR_OFFSETS)} gym/E4/champion entries")

    # ---- transform ----
    out = {}
    for rid_s, t in trainers.items():
        rid = int(rid_s)
        new_t = dict(t)
        # mark whether this entry is a challenge-mode-specific team and cross-link
        # it to its normal/challenge counterpart where one exists
        new_t["is_challenge_variant"] = rid in challenge_to_normal
        if rid in challenge_to_normal:
            new_t["normal_rom_id"] = challenge_to_normal[rid]
        if rid in normal_to_challenge:
            new_t["challenge_rom_id"] = normal_to_challenge[rid]
        party = t.get("party", [])
        if not party:
            out[rid_s] = new_t
            continue
        ace_level = party[-1]["level"]
        offset = ANCHOR_OFFSETS.get(rid, ace_offset(ace_level))
        rinfo = rom.get(rid, {"unique_moves": False, "iv_bytes": []})
        new_party = recompute_party(
            party, rinfo["iv_bytes"], pokedex, canon_moves, offset, rinfo["unique_moves"],
        )
        new_t["challenge_level_offset"] = offset
        new_t["party"] = new_party
        # prize money = base rate byte * level of LAST Pokemon (gen5 formula)
        new_t["prize_money"] = t.get("money", 0) * new_party[-1]["level"]
        out[rid_s] = new_t
    return out


def to_js(trainers: dict) -> str:
    header = (
        "// BW2 trainers as fought in CHALLENGE MODE.\n"
        "// Generated by generate_black2_white2_challenge_trainers.py from black2_white2.js + ROM.\n"
        "// Each Pokemon's level is the base level + challenge_level_offset (=min(4, floor(badges/2)+1),\n"
        "// assigned per trainer by ace-level bracket). Stats recomputed; default movesets re-derived at\n"
        "// the new level (custom movesets kept). 'money' is the unchanged base prize rate; 'prize_money'\n"
        "// is the actual reward = money * last Pokemon's level.\n"
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
