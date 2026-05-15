"""Regenerate trainers/heartgold_soulsilver.js from the HeartGold disassembly.

Reads:
  - <decomp>/files/poketool/trainer/trainers.json   (the trainer table)
  - <decomp>/files/poketool/personal/personal.json  (per-species base stats / abilities)
  - <decomp>/include/constants/*.h                  (constant -> integer maps)
  - trainers/heartgold_soulsilver.js                (kept only for cosmetic
                                                     top-level name / class strings)
  - moves.js                                        (pretty move names by rom_id)

For every trainer party member we recompute the PID using the exact algorithm
in src/trainer_data.c (CreateNPCTrainerParty), derive nature/ability from the
PID, then derive level stats with the nature multiplier applied. The previous
file had incorrect natures (and therefore stats); this script regenerates the
whole file from the disassembly as the source of truth.
"""

from __future__ import annotations

import json
import re
import struct
from pathlib import Path

# --------------------------------------------------------------------------- #
# Paths
# --------------------------------------------------------------------------- #
ROOT = Path(__file__).resolve().parent
DECOMP = Path(r"A:/decomps/stp-pokeheartgold")
TRAINERS_JSON = DECOMP / "files/poketool/trainer/trainers.json"
PERSONAL_JSON = DECOMP / "files/poketool/personal/personal.json"
WOTBL_NARC = DECOMP / "files/poketool/personal/wotbl.narc"
CONST_DIR = DECOMP / "include/constants"
TRAINER_DATA_C = DECOMP / "src/trainer_data.c"
EXISTING_JS = ROOT / "trainers" / "heartgold_soulsilver.js"
MOVES_JS = ROOT / "moves.js"
OUT_JS = ROOT / "trainers" / "heartgold_soulsilver.js"


# --------------------------------------------------------------------------- #
# Helpers: parse the disassembly's #define maps
# --------------------------------------------------------------------------- #
DEFINE_RE = re.compile(r"^#define\s+(\w+)\s+(.+?)\s*$")


def parse_defines(path: Path, prefix: str) -> dict[str, int]:
    """Parse `#define <PREFIX>_FOO N` lines, evaluating bit-shift expressions."""
    raw: dict[str, str] = {}
    out: dict[str, int] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        m = DEFINE_RE.match(line)
        if not m:
            continue
        name, value = m.group(1), m.group(2).strip()
        if not name.startswith(prefix):
            continue
        raw[name] = value

    def resolve(name: str, seen: set[str]) -> int:
        if name in out:
            return out[name]
        if name in seen:
            raise ValueError(f"cycle: {name}")
        seen = seen | {name}
        expr = raw[name]
        # Substitute referenced symbols.
        def repl(m: re.Match) -> str:
            sym = m.group(0)
            if sym in raw:
                return str(resolve(sym, seen))
            return sym
        substituted = re.sub(r"\b[A-Z_][A-Z0-9_]*\b", repl, expr)
        # Strip C suffixes/casts.
        substituted = re.sub(r"\(\s*u?\d+\s*\)", "", substituted)
        substituted = substituted.replace("UL", "").replace("U", "")
        try:
            val = eval(substituted, {"__builtins__": {}}, {})
        except Exception:
            return -1
        out[name] = int(val)
        return out[name]

    for name in raw:
        try:
            resolve(name, set())
        except Exception:
            pass
    return out


# --------------------------------------------------------------------------- #
# Pretty-name helpers
# --------------------------------------------------------------------------- #
SPECIES_OVERRIDES = {
    "SPECIES_NIDORAN_F": "Nidoran_F",
    "SPECIES_NIDORAN_M": "Nidoran_M",
    "SPECIES_FARFETCHD": "Farfetch'd",
    "SPECIES_MR_MIME": "Mr. Mime",
    "SPECIES_HO_OH": "Ho-Oh",
    "SPECIES_MIME_JR": "Mime Jr.",
    "SPECIES_PORYGON2": "Porygon2",
    "SPECIES_PORYGON_Z": "Porygon-Z",
    "SPECIES_NONE": None,
}

MOVE_OVERRIDES = {
    "MOVE_NONE": None,
    "MOVE_DOUBLE_EDGE": "Double-Edge",
    "MOVE_LOCK_ON": "Lock-On",
    "MOVE_MUD_SLAP": "Mud-Slap",
    "MOVE_SAND_ATTACK": "Sand-Attack",
    "MOVE_WILL_O_WISP": "Will-O-Wisp",
    "MOVE_SOFT_BOILED": "Soft-Boiled",
    "MOVE_X_SCISSOR": "X-Scissor",
    "MOVE_U_TURN": "U-turn",
    "MOVE_V_CREATE": "V-create",
    "MOVE_TRICK_OR_TREAT": "Trick-or-Treat",
    "MOVE_FREEZE_DRY": "Freeze-Dry",
    "MOVE_TOPSY_TURVY": "Topsy-Turvy",
    "MOVE_MULTI_ATTACK": "Multi-Attack",
    "MOVE_BABY_DOLL_EYES": "Baby-Doll Eyes",
    "MOVE_POWER_UP_PUNCH": "Power-Up Punch",
    "MOVE_KINGS_SHIELD": "King's Shield",
    "MOVE_FORESTS_CURSE": "Forest's Curse",
    "MOVE_LAND_S_WRATH": "Land's Wrath",
    "MOVE_NATURES_MADNESS": "Nature's Madness",
    "MOVE_FAINT_ATTACK": "Faint Attack",
    # Gen 1-3 names compacted to fit the in-game character limit; preserve the
    # spellings used by the rest of this project's data files.
    "MOVE_POISON_POWDER": "PoisonPowder",
    "MOVE_BUBBLE_BEAM": "BubbleBeam",
    "MOVE_SMOKE_SCREEN": "SmokeScreen",
    "MOVE_SONIC_BOOM": "SonicBoom",
    "MOVE_DOUBLE_SLAP": "DoubleSlap",
    "MOVE_THUNDER_SHOCK": "ThunderShock",
    "MOVE_THUNDER_PUNCH": "ThunderPunch",
    "MOVE_VICE_GRIP": "ViceGrip",
    "MOVE_SOLAR_BEAM": "SolarBeam",
    "MOVE_DYNAMIC_PUNCH": "DynamicPunch",
    "MOVE_DRAGON_BREATH": "DragonBreath",
    "MOVE_EXTREME_SPEED": "ExtremeSpeed",
    "MOVE_ANCIENT_POWER": "AncientPower",
    "MOVE_FEATHER_DANCE": "FeatherDance",
}

ITEM_OVERRIDES = {
    "ITEM_NONE": None,
    "ITEM_X_ATTACK": "X Attack",
    "ITEM_X_DEFEND": "X Defend",
    "ITEM_X_DEFENSE": "X Defense",
    "ITEM_X_SPEED": "X Speed",
    "ITEM_X_ACCURACY": "X Accuracy",
    "ITEM_X_SPECIAL": "X Special",
    "ITEM_X_SP_DEF": "X Sp. Def",
    "ITEM_DIRE_HIT": "Dire Hit",
    "ITEM_TINYMUSHROOM": "TinyMushroom",
    "ITEM_BLACKGLASSES": "Black Glasses",
    "ITEM_BLACKBELT": "Black Belt",
    "ITEM_NEVERMELTICE": "NeverMeltIce",
    "ITEM_TWISTEDSPOON": "TwistedSpoon",
    "ITEM_LIGHT_BALL": "Light Ball",
}

ABILITY_OVERRIDES = {
    "ABILITY_NONE": None,
}


def titlecase_const(const: str, prefix: str, overrides: dict[str, str | None]) -> str | None:
    """Generic constant -> pretty name converter."""
    if const in overrides:
        return overrides[const]
    body = const[len(prefix) :]
    parts = body.split("_")
    return " ".join(p.capitalize() for p in parts if p)


def pretty_species(const: str) -> str | None:
    return titlecase_const(const, "SPECIES_", SPECIES_OVERRIDES)


def pretty_move(const: str) -> str | None:
    return titlecase_const(const, "MOVE_", MOVE_OVERRIDES)


def pretty_item(const: str) -> str | None:
    return titlecase_const(const, "ITEM_", ITEM_OVERRIDES)


def pretty_ability(const: str) -> str | None:
    return titlecase_const(const, "ABILITY_", ABILITY_OVERRIDES)


NATURES = [
    "Hardy", "Lonely", "Brave", "Adamant", "Naughty",
    "Bold", "Docile", "Relaxed", "Impish", "Lax",
    "Timid", "Hasty", "Serious", "Jolly", "Naive",
    "Modest", "Mild", "Quiet", "Bashful", "Rash",
    "Calm", "Gentle", "Sassy", "Careful", "Quirky",
]
# Each entry: (increased_stat, decreased_stat) or None for neutral.
NATURE_EFFECT = {
    "Hardy": None, "Docile": None, "Serious": None,
    "Bashful": None, "Quirky": None,
    "Lonely": ("attack", "defense"),
    "Brave": ("attack", "speed"),
    "Adamant": ("attack", "special_attack"),
    "Naughty": ("attack", "special_defense"),
    "Bold": ("defense", "attack"),
    "Relaxed": ("defense", "speed"),
    "Impish": ("defense", "special_attack"),
    "Lax": ("defense", "special_defense"),
    "Timid": ("speed", "attack"),
    "Hasty": ("speed", "defense"),
    "Jolly": ("speed", "special_attack"),
    "Naive": ("speed", "special_defense"),
    "Modest": ("special_attack", "attack"),
    "Mild": ("special_attack", "defense"),
    "Quiet": ("special_attack", "speed"),
    "Rash": ("special_attack", "special_defense"),
    "Calm": ("special_defense", "attack"),
    "Gentle": ("special_defense", "defense"),
    "Sassy": ("special_defense", "speed"),
    "Careful": ("special_defense", "special_attack"),
}


# --------------------------------------------------------------------------- #
# Level-up learnset (wotbl.narc) -- used for default-moveset trainer types
# --------------------------------------------------------------------------- #
LEARNSET_END = 0xFFFF
LEARNSET_MOVE_MASK = 0x01FF
LEARNSET_LEVEL_SHIFT = 9


def parse_narc_members(path: Path) -> list[bytes]:
    """Return the file image of each NARC member, in order."""
    data = path.read_bytes()
    assert data[:4] == b"NARC"
    off = 16
    assert data[off:off+4] == b"BTAF"
    fatb_size = struct.unpack_from("<I", data, off + 4)[0]
    n_files = struct.unpack_from("<I", data, off + 8)[0]
    fatb_entries = off + 12
    fntb_off = off + fatb_size
    assert data[fntb_off:fntb_off+4] == b"BTNF"
    fntb_size = struct.unpack_from("<I", data, fntb_off + 4)[0]
    fimg_off = fntb_off + fntb_size
    assert data[fimg_off:fimg_off+4] == b"GMIF"
    fimg_data = fimg_off + 8
    members = []
    for i in range(n_files):
        start, end = struct.unpack_from("<II", data, fatb_entries + i * 8)
        members.append(data[fimg_data + start:fimg_data + end])
    return members


def parse_learnsets(path: Path) -> list[list[tuple[int, int]]]:
    """[(level, move), ...] for each species."""
    out: list[list[tuple[int, int]]] = []
    for member in parse_narc_members(path):
        entries: list[tuple[int, int]] = []
        for i in range(0, len(member), 2):
            (e,) = struct.unpack_from("<H", member, i)
            if e == LEARNSET_END:
                break
            move = e & LEARNSET_MOVE_MASK
            level = e >> LEARNSET_LEVEL_SHIFT
            entries.append((level, move))
        out.append(entries)
    return out


def default_moveset(learnset: list[tuple[int, int]], level: int) -> list[int]:
    """Replicate InitBoxMonMoveset: walk the learnset in order, for each move
    at or below `level` add to a free slot, skip if already known, rotate FIFO
    when full."""
    slots: list[int] = []
    for entry_level, move in learnset:
        if entry_level > level:
            break
        if move in slots:
            continue
        if len(slots) < 4:
            slots.append(move)
        else:
            slots = slots[1:] + [move]
    return slots


# --------------------------------------------------------------------------- #
# Game logic: PID generation, stats
# --------------------------------------------------------------------------- #
LCG_MUL = 1103515245
LCG_ADD = 24691
MASK32 = 0xFFFFFFFF


def lc_random(seed: int) -> tuple[int, int]:
    """One step of the Gen3/4 LCG. Returns (new_state, u16_value)."""
    new_state = (seed * LCG_MUL + LCG_ADD) & MASK32
    return new_state, new_state >> 16


def compute_pid(difficulty: int, level: int, species: int, trainer_id: int,
                trainer_class: int, pid_gender: int) -> int:
    """Replicates CreateNPCTrainerParty's PID generation."""
    state = (difficulty + level + species + trainer_id) & MASK32
    last_u16 = state >> 16  # If trainer_class is 0 we never iterate; this matches.
    for _ in range(trainer_class):
        state, last_u16 = lc_random(state)
    return ((last_u16 << 8) + pid_gender) & MASK32


def apply_pid_gender_override(pid: int, gender_override: int, ability_override: int,
                              species_gender_ratio: int) -> int:
    """In-place equivalent of TrMon_OverridePidGender. The caller persists `pid`
    across the whole party (see CreateNPCTrainerParty) — any bits set by one
    Pokemon's override leak into later Pokemon's pidGender."""
    if gender_override == 0 and ability_override == 0:
        return pid
    if gender_override != 0:
        pid = species_gender_ratio
        if gender_override == 1:
            pid += 2
        else:
            pid -= 2
        pid &= 0xFF
    if ability_override == 1:
        pid &= ~1 & 0xFF
    elif ability_override == 2:
        pid |= 1
    return pid


def calc_stat(base: int, iv: int, level: int, is_hp: bool,
              nature_mod: float) -> int:
    """Standard Gen 3+ stat formula. EV = 0 for NPC trainer mons."""
    if is_hp:
        if base == 1:  # Shedinja.
            return 1
        return ((2 * base + iv) * level) // 100 + level + 10
    base_stat = ((2 * base + iv) * level) // 100 + 5
    return int(base_stat * nature_mod)


def nature_mod(nature: str, stat: str) -> float:
    eff = NATURE_EFFECT.get(nature)
    if eff is None:
        return 1.0
    inc, dec = eff
    if stat == inc:
        return 1.1
    if stat == dec:
        return 0.9
    return 1.0


# --------------------------------------------------------------------------- #
# Trainer gender table -- parsed directly from src/trainer_data.c rather than
# transcribed, so we can't drift out of sync with the decomp.
# --------------------------------------------------------------------------- #
def parse_trainer_genders(path: Path) -> list[str]:
    src = path.read_text(encoding="utf-8")
    m = re.search(r"sTrainerGenders\[\]\s*=\s*\{(.*?)\};", src, re.S)
    if not m:
        raise RuntimeError("could not find sTrainerGenders[] in trainer_data.c")
    return re.findall(r"TRAINER_MALE|TRAINER_FEMALE|TRAINER_DOUBLE", m.group(1))


def trainer_class_to_gender(class_id: int, table: list[str]) -> str:
    """'M' or 'F'. Doubles map to male (matches the comment in
    CreateNPCTrainerParty)."""
    return "F" if table[class_id] == "TRAINER_FEMALE" else "M"


# --------------------------------------------------------------------------- #
# Top-level metadata from the existing JS (cosmetic name + class strings only)
# --------------------------------------------------------------------------- #
def parse_existing_js(path: Path) -> dict[int, tuple[str, str]]:
    """Return {rom_id: (name, trainer_class)} from the previous file."""
    txt = path.read_text(encoding="utf-8")
    # Block per trainer: "<id>": { ... rom_id ... name ... trainer_class ... }
    out: dict[int, tuple[str, str]] = {}
    pattern = re.compile(
        r'"(\d+)":\s*\{\s*"rom_id":\s*\d+,\s*"name":\s*"([^"]*)",\s*"trainer_class":\s*"([^"]*)"',
    )
    for m in pattern.finditer(txt):
        out[int(m.group(1))] = (m.group(2), m.group(3))
    return out


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def main() -> None:
    species_ids = parse_defines(CONST_DIR / "species.h", "SPECIES_")
    move_ids = parse_defines(CONST_DIR / "moves.h", "MOVE_")
    item_ids = parse_defines(CONST_DIR / "items.h", "ITEM_")
    ability_ids = parse_defines(CONST_DIR / "abilities.h", "ABILITY_")
    class_ids = parse_defines(CONST_DIR / "trainer_class.h", "TRAINERCLASS_")

    personal_raw = json.loads(PERSONAL_JSON.read_text(encoding="utf-8"))
    base_stats: list[dict] = personal_raw["baseStats"]
    learnsets = parse_learnsets(WOTBL_NARC)
    trainer_genders = parse_trainer_genders(TRAINER_DATA_C)
    # Build move-id -> name map. moves.h reuses the MOVE_ prefix at the bottom
    # for unrelated enums (MOVE_ATTRIBUTE_*, MOVE_CONTEST_*) whose values
    # collide with real move IDs (e.g. MOVE_ATTRIBUTE_CONTEST_EFFECT == 10 ==
    # MOVE_SCRATCH). Skip those.
    move_id_to_name: dict[int, str] = {}
    for name, mid in move_ids.items():
        if name.startswith(("MOVE_ATTRIBUTE_", "MOVE_CONTEST_")):
            continue
        if mid in move_id_to_name:
            continue  # first definition wins
        move_id_to_name[mid] = name

    trainers_raw = json.loads(TRAINERS_JSON.read_text(encoding="utf-8"))
    trainers = trainers_raw["trainers"]

    existing = parse_existing_js(EXISTING_JS)

    out: dict[str, dict] = {}

    for rom_id, trainer in enumerate(trainers):
        name, klass = existing.get(rom_id, ("", ""))
        class_const = trainer["class"]
        class_id = class_ids[class_const]
        trainer_type = trainer["type"]
        is_double = bool(trainer.get("double", 0))
        has_moves = trainer_type in ("TRTYPE_MON_MOVES", "TRTYPE_MON_ITEM_MOVES")
        has_item = trainer_type in ("TRTYPE_MON_ITEM", "TRTYPE_MON_ITEM_MOVES")
        trainer_gender = trainer_class_to_gender(class_id, trainer_genders)

        items = [pretty_item(it) for it in trainer.get("items", []) if pretty_item(it) is not None]

        # pidGender is initialized once per party (per trainer-gender) and any
        # bits set by an override on one Pokemon persist through the rest of the
        # party. This is the source of the previously-wrong stats for mons that
        # came after one with an ABILITY_OVERRIDE_SECOND, e.g. Red's Charizard.
        pid_gender = 0x78 if trainer_gender == "F" else 0x88

        party: list[dict] = []
        for poke in trainer.get("party", []):
            species_const = poke["species"]
            species_id_raw = species_ids[species_const] & 0x3FF  # form bits in upper, but JSON stores plain enum
            species = base_stats[species_id_raw]

            level = poke["level"]
            difficulty = poke["difficulty"]
            gender_override = {
                "TRPOKE_GENDER_OVERRIDE_OFF": 0,
                "TRPOKE_GENDER_OVERRIDE_MALE": 1,
                "TRPOKE_GENDER_OVERRIDE_FEMALE": 2,
            }[poke["genderOverride"]]
            ability_override = {
                "TRPOKE_ABILITY_OVERRIDE_OFF": 0,
                "TRPOKE_ABILITY_OVERRIDE_FIRST": 1,
                "TRPOKE_ABILITY_OVERRIDE_SECOND": 2,
            }[poke["abilityOverride"]]

            species_gender_ratio = int(round(species["genderRatio"] * 255))
            pid_gender = apply_pid_gender_override(
                pid_gender, gender_override, ability_override, species_gender_ratio
            )
            pid = compute_pid(difficulty, level, species_id_raw, rom_id, class_id, pid_gender)

            nature = NATURES[pid % 25]
            ability_slot = pid & 1
            ability_const = species["abilities"][ability_slot]
            if ability_const == "ABILITY_NONE":
                ability_const = species["abilities"][0]
            ability = pretty_ability(ability_const)

            iv = (difficulty * 31) // 255

            stat_keys = ("hp", "attack", "defense", "speed", "special_attack", "special_defense")
            base_map = {
                "hp": species["hp"],
                "attack": species["atk"],
                "defense": species["def"],
                "speed": species["speed"],
                "special_attack": species["spatk"],
                "special_defense": species["spdef"],
            }
            stats = {
                k: calc_stat(base_map[k], iv, level, k == "hp", nature_mod(nature, k))
                for k in stat_keys
            }

            base_exp = species["expYield"]
            experience_yield = (base_exp * level // 7) * 3 // 2

            held_item = pretty_item(poke["item"]) if has_item else None
            if has_moves:
                moves = [pretty_move(m) for m in poke["moves"]]
            else:
                # Default-moveset trainer types: the in-game routine
                # InitBoxMonMoveset fills the moves from the species level-up
                # learnset, taking the last 4 distinct moves learned by this
                # level. We replicate that here.
                move_ints = default_moveset(learnsets[species_id_raw], level)
                moves = [pretty_move(move_id_to_name[m]) for m in move_ints]

            party.append({
                "species": pretty_species(species_const),
                "level": level,
                "experience_yield": experience_yield,
                "nature": nature,
                "ability": ability,
                "held_item": held_item,
                "stats": stats,
                "moves": moves,
            })

        out[str(rom_id)] = {
            "rom_id": rom_id,
            "name": name,
            "trainer_class": klass,
            "location": None,
            "money": -1,
            "is_double_battle": is_double,
            "items": items,
            "party": party,
        }

    js = "export const trainers = " + json.dumps(out, indent=4, ensure_ascii=False) + "\n"
    OUT_JS.write_text(js, encoding="utf-8")
    print(f"Wrote {OUT_JS} with {len(out)} trainers")

    # Quick verification: Red's Charizard
    red = out["260"]
    for mon in red["party"]:
        if mon["species"] == "Charizard":
            print(f"Red's Charizard -> nature {mon['nature']}, speed {mon['stats']['speed']}")
            break


if __name__ == "__main__":
    main()
