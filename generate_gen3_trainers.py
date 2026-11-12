"""Regenerate the Gen 3 trainer files from the pret disassemblies.

Outputs (all in trainers/):
  ruby.js, sapphire.js       <- A:/decomps/pokeruby    (one shared trainer table)
  emerald.js                 <- A:/decomps/pokeemerald
  firered_leafgreen.js       <- A:/decomps/pokefirered (FIRERED learnsets; see below)

Reads from each decomp (read-only):
  - include/constants/*.h                       (#define / enum constant values)
  - charmap.txt                                 (game text encoding, for the PID name hash)
  - src/data/trainers.h  (pokeruby: trainers_en.h)        the gTrainers table
  - src/data/trainer_parties.h                            party arrays
  - src/data/text/species_names.h (pokeruby: species_names_en.h)
  - src/data/pokemon/species_info.h (pokeruby: base_stats.h)
  - src/data/pokemon/level_up_learnsets.h + level_up_learnset_pointers.h
  - src/battle_main.c (pokeruby: data/trainer_money.inc)  gTrainerMoneyTable
Reads from this repo:
  - moves.js                       (move names, matched by rom_id for generation 3)
  - pokedex/<game>.js              (species / ability spellings used as keys)
  - trainers/<file>.js             (kept only for the cosmetic `name`,
                                    `trainer_class` and `location` strings and for
                                    the order of the entries)

Per party member we replicate CreateNPCTrainerParty (src/battle_main.c):
  personality = (0x80 if double battle else 0x78 if F_TRAINER_FEMALE else 0x88)
                + (nameHash << 8)
  where nameHash is NOT reset between party members: for every mon it adds the
  sum of the encoded trainer-name bytes and of the encoded species-name bytes.
  nature = personality % 25 (stored as the nature index, 0 = Hardy), the ability
  slot = personality & 1 (always 0, since the low byte is 0x78/0x80/0x88),
  IVs = iv * 31 / 255 for all six stats, EVs = 0.
Moves: custom movesets come from the party data; otherwise GiveBoxMonInitialMoveset
(walk the level-up learnset up to the level, skip known moves, FIFO when full).
Money: 4 * lastMonLevel * gTrainerMoneyTable[class] (* 2 for double battles).
Experience: (expYield * level / 7) * 150 / 100 (trainer battle bonus).

FireRed and LeafGreen share every trainer table; the only version difference that
can reach this data is Dugtrio's level-1 learnset order, which can change a
default moveset at levels 17-20. No trainer in the file hits it (checked by
running with VERSION_DEFINE = "LEAFGREEN"), so the FIRERED build is used.

Usage:  python generate_gen3_trainers.py [--check]
  --check   compare only, write nothing; prints a diff summary.
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DECOMPS = Path("A:/decomps")
PFX = "export const trainers = "

GAMES = {
    "ruby": dict(decomp="pokeruby", pokedex="ruby_sapphire", version="RUBY"),
    "sapphire": dict(decomp="pokeruby", pokedex="ruby_sapphire", version="SAPPHIRE"),
    "emerald": dict(decomp="pokeemerald", pokedex="emerald", version="EMERALD"),
    "firered_leafgreen": dict(decomp="pokefirered", pokedex="firered_leafgreen", version="FIRERED"),
}

NATURES = [
    "Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed",
    "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild",
    "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky",
]
# stat order of the nature table: atk, def, spe, spa, spd
NATURE_STATS = ["attack", "defense", "speed", "special_attack", "special_defense"]


def nature_effect(n: int) -> tuple[str, str] | None:
    up, down = n // 5, n % 5
    if up == down:
        return None
    return NATURE_STATS[up], NATURE_STATS[down]


# --------------------------------------------------------------------------- #
# Minimal C helpers
# --------------------------------------------------------------------------- #
def strip_comments(s: str) -> str:
    s = re.sub(r"/\*.*?\*/", " ", s, flags=re.S)
    return re.sub(r"//[^\n]*", "", s)


def apply_ifdefs(s: str, defined: set[str]) -> str:
    """Resolve #if defined(X) / #ifdef / #elif defined / #else / #endif blocks
    (only the simple forms that appear in these data files)."""
    out, stack = [], []  # stack of (taking_now, any_taken)
    for line in s.split("\n"):
        st = line.strip()
        m = re.match(r"#\s*(if|ifdef|ifndef|elif)\b(.*)", st)
        if m:
            kind, cond = m.group(1), m.group(2).strip()
            names = re.findall(r"defined\s*\(\s*(\w+)\s*\)", cond) or [cond]
            val = any(n in defined for n in names)
            if kind == "ifndef":
                val = not val
            if kind == "elif":
                taking, taken = stack.pop()
                parent = all(t for t, _ in stack)
                stack.append((parent and not taken and val, taken or val))
            else:
                parent = all(t for t, _ in stack)
                stack.append((parent and val, val))
            continue
        if re.match(r"#\s*else\b", st):
            taking, taken = stack.pop()
            parent = all(t for t, _ in stack)
            stack.append((parent and not taken, True))
            continue
        if re.match(r"#\s*endif\b", st):
            stack.pop()
            continue
        if all(t for t, _ in stack):
            out.append(line)
    return "\n".join(out)


def c_eval(expr: str, consts: dict[str, int]) -> int:
    expr = expr.strip()
    expr = re.sub(r"\b(0x[0-9A-Fa-f]+|\d+)[uUlL]+\b", r"\1", expr)
    expr = re.sub(r"\(\s*(?:u8|u16|u32|s8|s16|s32)\s*\)", "", expr)
    expr = expr.replace("TRUE", "1").replace("FALSE", "0")

    def sub(m):
        name = m.group(0)
        if name in consts:
            return str(consts[name])
        raise KeyError(name)

    expr = re.sub(r"\b[A-Za-z_]\w*\b", sub, expr)
    expr = expr.replace("/", "//")
    return int(eval(expr, {"__builtins__": {}}, {}))


def parse_constants(inc_dirs: list[Path]) -> dict[str, int]:
    raw_defs: dict[str, str] = {}
    enums: list[list[tuple[str, str | None]]] = []
    for d in inc_dirs:
        for p in sorted(d.glob("*.h")):
            s = strip_comments(p.read_text(encoding="utf-8", errors="replace"))
            s = re.sub(r"\\\n", " ", s)
            for m in re.finditer(r"^[ \t]*#define[ \t]+(\w+)[ \t]+(.+)$", s, re.M):
                raw_defs.setdefault(m.group(1), m.group(2).strip())
            for m in re.finditer(r"\benum\b\s*\w*\s*\{(.*?)\}", s, re.S):
                items = []
                for part in m.group(1).split(","):
                    part = part.strip()
                    if not part:
                        continue
                    if "=" in part:
                        k, v = part.split("=", 1)
                        items.append((k.strip(), v.strip()))
                    else:
                        items.append((part, None))
                enums.append(items)
    consts: dict[str, int] = {}
    # iterate to a fixed point
    for _ in range(20):
        changed = False
        for k, v in raw_defs.items():
            if k in consts:
                continue
            try:
                consts[k] = c_eval(v, consts)
                changed = True
            except Exception:
                pass
        for items in enums:
            val = -1
            ok = True
            for k, v in items:
                if v is not None:
                    try:
                        val = c_eval(v, consts)
                    except Exception:
                        ok = False
                        break
                else:
                    val += 1
                if k not in consts:
                    consts[k] = val
                    changed = True
            if not ok:
                continue
        if not changed:
            break
    return consts


def find_block(s: str, start: int) -> tuple[str, int]:
    """s[start] == '{'. Return inner text and index after the matching '}'."""
    assert s[start] == "{", s[start:start + 30]
    depth = 0
    i = start
    while i < len(s):
        c = s[i]
        if c == '"':
            i += 1
            while s[i] != '"':
                i += 2 if s[i] == "\\" else 1
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return s[start + 1:i], i + 1
        i += 1
    raise ValueError("unbalanced")


def split_top(s: str, sep: str = ",") -> list[str]:
    out, depth, cur, instr = [], 0, [], False
    for c in s:
        if c == '"':
            instr = not instr
        if not instr:
            if c in "{(":
                depth += 1
            elif c in "})":
                depth -= 1
            elif c == sep and depth == 0:
                out.append("".join(cur))
                cur = []
                continue
        cur.append(c)
    if "".join(cur).strip():
        out.append("".join(cur))
    return out


def parse_fields(body: str) -> dict[str, str]:
    """`.a = x, .b = {y, z}` -> {'a': 'x', 'b': '{y, z}'} (top-level only).
    Also tolerates pokeruby's `.moves = A, B, C, D` (no braces)."""
    out: dict[str, str] = {}
    parts = split_top(body)
    last = None
    for p in parts:
        p = p.strip()
        m = re.match(r"\.(\w+)\s*=\s*(.*)$", p, re.S)
        if m:
            last = m.group(1)
            out[last] = m.group(2).strip()
        elif p and last is not None:
            out[last] += ", " + p
        elif p:
            out.setdefault("_positional", "")
            out["_positional"] += p + ","
    return out


def object_macros(s: str) -> dict[str, str]:
    s2 = re.sub(r"\\\n", " ", s)
    out = {}
    for m in re.finditer(r"^[ \t]*#define[ \t]+(\w+)[ \t]+(.+)$", s2, re.M):
        out[m.group(1)] = m.group(2)
    return out


def expand_macros(s: str, macros: dict[str, str]) -> str:
    if not macros:
        return s
    pat = re.compile(r"\b(" + "|".join(map(re.escape, macros)) + r")\b(?!\s*\()")
    for _ in range(5):
        s2 = pat.sub(lambda m: macros[m.group(1)], s)
        if s2 == s:
            break
        s = s2
    return s


# --------------------------------------------------------------------------- #
# Text encoding
# --------------------------------------------------------------------------- #
def load_charmap(path: Path) -> dict[str, list[int]]:
    cm: dict[str, list[int]] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.split("@")[0].strip()
        m = re.match(r"^'(.+)'\s*=\s*([0-9A-Fa-f ]+)$", line)
        if m:
            ch = m.group(1).replace("\\'", "'")
            cm.setdefault(ch, [int(x, 16) for x in m.group(2).split()])
            continue
        m = re.match(r"^(\w+)\s*=\s*([0-9A-Fa-f ]+)$", line)
        if m:
            cm.setdefault("{" + m.group(1) + "}", [int(x, 16) for x in m.group(2).split()])
    return cm


def encode(text: str, cm: dict[str, list[int]]) -> list[int]:
    out, i = [], 0
    while i < len(text):
        if text[i] == "{":
            j = text.index("}", i)
            out += cm[text[i:j + 1]]
            i = j + 1
            continue
        out += cm[text[i]]
        i += 1
    return out


# --------------------------------------------------------------------------- #
# Decomp loading
# --------------------------------------------------------------------------- #
class Gen3Decomp:
    def __init__(self, name: str, version: str):
        self.name = name
        self.dir = DECOMPS / name
        self.version = version
        self.defined = {version, "ENGLISH"}
        d = self.dir
        ruby = name == "pokeruby"
        self.consts = parse_constants([d / "include/constants", d / "include"])
        self.charmap = load_charmap(d / "charmap.txt")
        self.f_species_names = d / ("src/data/text/species_names_en.h" if ruby else "src/data/text/species_names.h")
        self.f_base = d / ("src/data/pokemon/base_stats.h" if ruby else "src/data/pokemon/species_info.h")
        self.f_learn = d / "src/data/pokemon/level_up_learnsets.h"
        self.f_learnptr = d / "src/data/pokemon/level_up_learnset_pointers.h"
        self.f_trainers = d / ("src/data/trainers_en.h" if ruby else "src/data/trainers.h")
        self.f_parties = d / "src/data/trainer_parties.h"
        self._load()

    def read(self, p: Path) -> str:
        b = p.read_bytes()
        try:
            t = b.decode("utf-8")
        except UnicodeDecodeError:
            t = b.decode("latin-1")
        return apply_ifdefs(strip_comments(t), self.defined)

    def cv(self, expr: str) -> int:
        return c_eval(expr, self.consts)

    def _load(self):
        c = self.consts
        # species names
        self.species_name = {}
        for m in re.finditer(r"\[(SPECIES_\w+)\]\s*=\s*_\(\"([^\"]*)\"\)", self.read(self.f_species_names)):
            self.species_name[c[m.group(1)]] = m.group(2)
        # base stats
        self.base = {}
        s = self.read(self.f_base)
        for m in re.finditer(r"\[(SPECIES_\w+)\]\s*=\s*\{", s):
            body, _ = find_block(s, m.end() - 1)
            f = parse_fields(body)
            if "baseHP" not in f:
                continue
            if "abilities" in f:
                abil = re.findall(r"ABILITY_\w+", f["abilities"])
            else:
                abil = [f["ability1"], f["ability2"]]
            self.base[c[m.group(1)]] = dict(
                hp=self.cv(f["baseHP"]), attack=self.cv(f["baseAttack"]),
                defense=self.cv(f["baseDefense"]), speed=self.cv(f["baseSpeed"]),
                special_attack=self.cv(f["baseSpAttack"]), special_defense=self.cv(f["baseSpDefense"]),
                exp=self.cv(f["expYield"]), abilities=abil,
            )
        # learnsets
        s = self.read(self.f_learn)
        arrays = {}
        for m in re.finditer(r"(\w+)\s*\[\]\s*=\s*\{", s):
            body, _ = find_block(s, m.end() - 1)
            arrays[m.group(1)] = [(int(a), mv) for a, mv in
                                  re.findall(r"LEVEL_UP_MOVE\(\s*(\d+)\s*,\s*(MOVE_\w+)\s*\)", body)]
        s = self.read(self.f_learnptr)
        m = re.search(r"gLevelUpLearnsets\[[^\]]*\]\s*=\s*\{", s)
        body, _ = find_block(s, m.end() - 1)
        self.learnset = {}
        if "[SPECIES_" in body:
            for sp, arr in re.findall(r"\[(SPECIES_\w+)\]\s*=\s*(\w+)", body):
                self.learnset[c[sp]] = [(lv, c[mv]) for lv, mv in arrays[arr]]
        else:
            for i, arr in enumerate(x.strip() for x in body.split(",") if x.strip()):
                self.learnset[i] = [(lv, c[mv]) for lv, mv in arrays[arr]]
        # money
        if self.name == "pokeruby":
            s = strip_comments((self.dir / "data/trainer_money.inc").read_text(encoding="utf-8"))
            self.money = {}
            for cls, val in re.findall(r"\.byte\s+(\w+),\s*(\d+)", s):
                if cls in c:
                    self.money.setdefault(c[cls], int(val))
            m = re.search(r"\.byte\s+(?:-1|0xFF),\s*(\d+)", s)
            self.money_default = int(m.group(1)) if m else None
        else:
            s = self.read(self.dir / "src/battle_main.c")
            m = re.search(r"gTrainerMoneyTable\[\]\s*=\s*\{", s)
            body, _ = find_block(s, m.end() - 1)
            self.money = {}
            self.money_default = None
            for cls, val in re.findall(r"\{\s*(\w+)\s*,\s*(\d+)\s*\}", body):
                if cls == "0xFF":
                    self.money_default = int(val)
                else:
                    self.money.setdefault(c[cls], int(val))
        # parties
        macros = object_macros(self.read(self.f_parties))
        s = self.read(self.f_parties)
        s = re.sub(r"^[ \t]*#define[^\n]*(\\\n[^\n]*)*", "", s, flags=re.M)
        s = expand_macros(s, macros)
        self.parties = {}
        for m in re.finditer(r"struct\s+(TrainerMon\w+)\s+(\w+)\s*\[\]\s*=\s*\{", s):
            body, _ = find_block(s, m.end() - 1)
            mons = []
            for el in split_top(body):
                el = el.strip()
                if not el:
                    continue
                assert el[0] == "{", el
                f = parse_fields(el[1:-1] if el.endswith("}") else el[1:])
                mons.append(dict(
                    iv=self.cv(f.get("iv", "0")),
                    level=self.cv(f.get("lvl", f.get("level", "0"))),
                    species=self.cv(f["species"]),
                    item=self.cv(f.get("heldItem", "0")),
                    moves=[self.cv(x) for x in re.findall(r"MOVE_\w+", f.get("moves", ""))],
                ))
            self.parties[m.group(2)] = (m.group(1), mons)
        # trainers
        s = self.read(self.f_trainers)
        self.trainers = {}
        for m in re.finditer(r"\[(TRAINER_\w+)\]\s*=\s*\{", s):
            body, _ = find_block(s, m.end() - 1)
            tid = c[m.group(1)]
            f = parse_fields(body)
            party_txt = f.get("party", "NULL")
            pm = re.search(r"=\s*(\w+)", party_txt) or re.search(r"\(\s*(\w+)\s*\)", party_txt)
            pname = pm.group(1) if pm else "NULL"
            ptype, mons = self.parties.get(pname, (None, []))
            nm = re.search(r'_\("([^"]*)"\)', f["trainerName"])
            self.trainers[tid] = dict(
                const=m.group(1),
                cls=self.cv(f.get("trainerClass", "0")),
                female="F_TRAINER_FEMALE" in f.get("encounterMusic_gender", ""),
                name=nm.group(1),
                items=[self.cv(x) for x in re.findall(r"ITEM_\w+", f.get("items", ""))],
                double=self.cv(f.get("doubleBattle", "FALSE")) == 1,
                ptype=ptype,
                party=mons,
                party_name=pname,
                party_size=len(mons) if "partySize" not in f or "ARRAY_COUNT" in f.get("partySize", "")
                else self.cv(f["partySize"]),
            )
            if "ARRAY_COUNT" not in party_txt and "partySize" in f and "ARRAY_COUNT" not in f["partySize"]:
                ps = self.cv(f["partySize"])
                self.trainers[tid]["party"] = mons[:ps]
                self.trainers[tid]["declared_size"] = ps


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


def calc_stats(base: dict, iv: int, level: int, nature: int, shedinja: bool) -> dict:
    eff = nature_effect(nature)
    out = {}
    for k in ("hp", "attack", "defense", "speed", "special_attack", "special_defense"):
        n = 2 * base[k] + iv
        if k == "hp":
            out[k] = 1 if shedinja else n * level // 100 + level + 10
            continue
        v = n * level // 100 + 5
        if eff and k == eff[0]:
            v = v * 110 // 100
        elif eff and k == eff[1]:
            v = v * 90 // 100
        out[k] = v
    return out


# --------------------------------------------------------------------------- #
# Name mapping to repo keys
# --------------------------------------------------------------------------- #
def loadjs(path: Path):
    t = path.read_text(encoding="utf-8")
    t = t[t.index("=") + 1:].strip().rstrip(";")
    return json.loads(t)


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9♀♂]", "", s.lower())


ITEM_NAME_OVERRIDES = {
    # in-game spellings for the few items whose constant does not title-case cleanly
    "ITEM_GUARD_SPEC": "Guard Spec.",
    "ITEM_X_DEFEND": "X Defend",
    "ITEM_SILVER_POWDER": "Silver Powder",
    "ITEM_BLACK_BELT": "Black Belt",
    "ITEM_TWISTED_SPOON": "Twisted Spoon",
}


def item_name(const: str) -> str:
    if const in ITEM_NAME_OVERRIDES:
        return ITEM_NAME_OVERRIDES[const]
    return " ".join(p.capitalize() for p in const[len("ITEM_"):].split("_"))


class Namer:
    def __init__(self, dec: Gen3Decomp, pokedex_game: str, gen: str = "3"):
        self.dec = dec
        moves = loadjs(ROOT / "moves.js")[gen]
        self.move_by_id = {v["rom_id"]: k for k, v in moves.items()}
        self.pokedex = loadjs(ROOT / "pokedex" / f"{pokedex_game}.js")
        pk = {}
        for k in self.pokedex:
            pk.setdefault(norm(k), []).append(k)
        self.pk = pk
        abil = set()
        for v in self.pokedex.values():
            abil.update(a for a in v["abilities"] if a)
        self.abil = {norm(a): a for a in abil}
        # item id -> constant, taken from constants/items.h only (other headers
        # reuse the ITEM_ prefix for unrelated enums such as ITEM_EFFECT_*)
        self.item_const = {}
        items_h = strip_comments((dec.dir / "include/constants/items.h").read_text(encoding="utf-8"))
        for m in re.finditer(r"^\s*(?:#define\s+)?(ITEM_\w+)\b", items_h, re.M):
            k = m.group(1)
            if k in dec.consts:
                self.item_const.setdefault(dec.consts[k], k)

    def species(self, sid: int) -> str:
        nm = self.dec.species_name[sid]
        cands = self.pk.get(norm(nm))
        assert cands and len(cands) == 1, (nm, cands)
        return cands[0]

    def move(self, mid: int) -> str:
        return self.move_by_id[mid]

    def ability(self, const: str) -> str:
        return self.abil[norm(const[len("ABILITY_"):])]

    def item(self, iid: int) -> str | None:
        if iid == 0:
            return None
        return item_name(self.item_const[iid])


# --------------------------------------------------------------------------- #
# Build
# --------------------------------------------------------------------------- #
def build_trainer(dec: Gen3Decomp, nm: Namer, tid: int) -> dict:
    t = dec.trainers[tid]
    c = dec.consts
    name_bytes = sum(encode(t["name"], dec.charmap))
    name_hash = 0
    party = []
    custom = t["ptype"] in ("TrainerMonNoItemCustomMoves", "TrainerMonItemCustomMoves")
    has_item = t["ptype"] in ("TrainerMonItemDefaultMoves", "TrainerMonItemCustomMoves")
    for mon in t["party"]:
        pv = 0x80 if t["double"] else (0x78 if t["female"] else 0x88)
        name_hash += name_bytes
        name_hash += sum(encode(dec.species_name[mon["species"]], dec.charmap))
        pv = (pv + (name_hash << 8)) & 0xFFFFFFFF
        nature = pv % 25
        base = dec.base[mon["species"]]
        abil = base["abilities"]
        slot = pv & 1 if abil[1] != "ABILITY_NONE" else 0
        iv = mon["iv"] * 31 // 255
        lvl = mon["level"]
        shedinja = mon["species"] == c.get("SPECIES_SHEDINJA")
        if custom:
            # custom movesets keep all four slots; MOVE_NONE -> null
            moves = [nm.move(m) if m else None for m in mon["moves"]]
            moves += [None] * (4 - len(moves))
        else:
            moves = [nm.move(m) for m in default_moveset(dec.learnset[mon["species"]], lvl)]
        party.append({
            "species": nm.species(mon["species"]),
            "level": lvl,
            "experience_yield": (base["exp"] * lvl // 7) * 150 // 100,
            "nature": nature,
            "ability": nm.ability(abil[slot]),
            "held_item": nm.item(mon["item"]) if has_item else None,
            "stats": calc_stats(base, iv, lvl, nature, shedinja),
            "moves": moves,
            "_iv": iv,
        })
    money = None
    if t["party"]:
        val = dec.money.get(t["cls"], dec.money_default)
        last = t["party"][-1]["level"] & 0xFF
        money = 4 * last * val * (2 if t["double"] else 1)
    return dict(
        rom_id=tid,
        money=money,
        is_double_battle=t["double"],
        items=[nm.item(i) for i in t["items"] if i],
        party=party,
    )


def load_existing(fname: str):
    raw = (ROOT / "trainers" / f"{fname}.js").read_bytes().decode("utf-8")
    crlf = "\r\n" in raw
    t = raw.replace("\r\n", "\n")
    assert t.startswith(PFX)
    return json.loads(t[len(PFX):]), crlf, raw.endswith("\n"), raw


def dump(d, crlf, trailing):
    s = PFX + json.dumps(d, indent=4, ensure_ascii=False)
    if trailing:
        s += "\n"
    if crlf:
        s = s.replace("\n", "\r\n")
    return s


def regenerate(fname: str, check: bool) -> dict:
    cfg = GAMES[fname]
    dec = Gen3Decomp(cfg["decomp"], cfg["version"])
    nm = Namer(dec, cfg["pokedex"])
    old, crlf, trailing, raw = load_existing(fname)
    assert dump(old, crlf, trailing) == raw, "existing file does not round-trip"
    new = {}
    for k, ot in old.items():
        tid = int(k)
        g = build_trainer(dec, nm, tid)
        nt = {}
        for key in ot:
            if key == "name":
                # the old title-casing lower-cased the second name of pairs
                # ("Sis And Bro Rita & sam"); in-game it is "RITA & SAM"
                nt[key] = re.sub(r"& ([a-z])", lambda m: "& " + m.group(1).upper(), ot[key])
            elif key in ("trainer_class", "location"):
                nt[key] = ot[key]
            elif key == "party":
                nt[key] = [{kk: v for kk, v in p.items() if not kk.startswith("_")}
                           for p in g["party"]]
            else:
                nt[key] = g[key]
        new[k] = nt
    if not check:
        (ROOT / "trainers" / f"{fname}.js").write_bytes(dump(new, crlf, trailing).encode("utf-8"))
    return dict(dec=dec, old=old, new=new)


if __name__ == "__main__":
    check = "--check" in sys.argv
    targets = [a for a in sys.argv[1:] if not a.startswith("--")] or list(GAMES)
    for fname in targets:
        r = regenerate(fname, check)
        diff = Counter()
        for k in r["old"]:
            o, n = r["old"][k], r["new"][k]
            for f in o:
                if f == "party":
                    if len(o[f]) != len(n[f]):
                        diff["party_len"] += 1
                    for po, pn in zip(o[f], n[f]):
                        for ff in po:
                            if po[ff] != pn[ff]:
                                diff["mon." + ff] += 1
                elif o[f] != n[f]:
                    diff[f] += 1
        print(fname, "checked" if check else "written", len(r["new"]), "trainers; differing fields:", dict(diff))
