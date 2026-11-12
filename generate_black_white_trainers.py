"""Regenerate trainers/black_white.js and trainers/black2_white2.js from the original ROMs.

Inputs (read-only):
  - the Black / Black 2 ROM (the trainer tables are byte-identical in Black vs White and
    in Black 2 vs White 2, so either ROM of a pair gives the same output):
      BW : a/0/9/2 TRData, a/0/9/3 TRPoke, text a/0/0/2 (190 names, 191 classes,
           70 species, 203 moves, 54 items, 182 abilities)
      BW2: a/0/9/1 TRData, a/0/9/2 TRPoke, text a/0/0/2 (382 names, 383 classes,
           90 species, 403 moves, 64 items, 374 abilities)
      both: a/0/1/6 personal (0x3C/0x4C per species+form), a/0/1/8 level-up learnsets
  - pokedex/<game>.js  (only for species / forme key names and ability spellings)
  - moves.js key "5"   (move names by rom_id)

Trainer Pokemon are rebuilt exactly as the game builds them (BW: the matching decomp,
src/tr_tool.c sub_0202A4B4 / sub_0202A994 / sub_0202A9F4 and src/poke_tool.c; BW2: the
same machine code at 0x020308C0 in the Black 2 arm9, minus BW's two forced natures):

  seed = iv_byte + level + species + trainer_id;  rnd = seed
  repeat trainer_class times: rnd = MATH_Rand32(ctx, 0x10000)   (64-bit LCG
      x = x * 0x5D588B656C078965 + 0x269EC3, rnd = top 16 bits of x>>32)
  pid = (rnd << 8) + gender_mod   (136 male class / 120 female class; if the mon's
      gender/ability byte is non-zero: gender nibble 1/2 -> species ratio +2/-2,
      ability nibble 1 -> clear bit 0, 2 -> set bit 0)
  nature  = (pid >> 8) % 25   (BW only: trainer 586 Reshiram -> Jolly, 587 Zekrom -> Timid)
  ability = ability nibble 0: form-0 species' 2nd ability if it has one and pid bit 16,
            else its 1st;  1: form's 1st;  2: form's 2nd (1st if none);  3: form's hidden
  IVs     = iv_byte * 31 // 255 for all six stats; EVs 0
  moves   = explicit (format bit 0) or the last four distinct level-up moves of the
            FORM-0 learnset (Pokemon_InitWith runs before the form is set)
  stats   = computed with the form's base stats and the final nature.

Output conventions (unchanged from the previous files unless noted):
  - money: the raw prize byte (TRData byte 17); the prize paid is money * 4 * level of
    the last Pokemon (ov93_021D7FBC).
  - is_double_battle: TRData byte 2 == 1; battle_type: "single"/"double"/"triple"/"rotation".
  - species: pokedex key; a non-zero form with its own pokedex entry uses the forme key
    (e.g. "Rotom (Wash)", "Wormadam (Sandy)", "Basculin (Blue Striped)").
  - moves: moves.js keys; abilities: the pokedex spelling; items: modern punctuation.
  - "⒆⒇" (the PKMN glyph pair) -> "Pokémon", ⑭/⑮ -> ♂/♀.
  - experience_yield: the form's base experience (personal 0x22).

Usage:
    python generate_black_white_trainers.py [--game bw|bw2|both] [--check]
    --check  only prints a diff summary against the current files.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from generate_black2_white2_pwt_trainers import NDS, parse_narc, decode_text_file, u16, u32

ROOT = Path(__file__).resolve().parent
ROMS = ROOT.parent / "roms" / "originals"

GAMES = {
    "bw": dict(rom=ROMS / "5-Black.nds", trdata="a/0/9/2", trpoke="a/0/9/3", names=190, classes=191,
               species=70, moves=203, items=54, abilities=182, dex="black_white", out="black_white.js",
               forced_natures={(586, 643): 13, (587, 644): 10}),
    "bw2": dict(rom=ROMS / "5-Black2.nds", trdata="a/0/9/1", trpoke="a/0/9/2", names=382, classes=383,
                species=90, moves=403, items=64, abilities=374, dex="black2_white2", out="black2_white2.js",
                forced_natures={}),
}

NATURES = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax",
           "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash",
           "Calm", "Gentle", "Sassy", "Careful", "Quirky"]
_STATS5 = ["attack", "defense", "speed", "special_attack", "special_defense"]
STAT_ORDER = ["hp", "attack", "defense", "speed", "special_attack", "special_defense"]
TYPES = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel",
         "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark"]
BATTLE_TYPES = {0: "single", 1: "double", 2: "triple", 3: "rotation"}

# Gen-5 ROM item spellings -> modern punctuation / spacing
ITEM_FIXES = {
    "X Defend": "X Defense", "X Special": "X Sp. Atk", "X Sp. Def": "X Sp. Def",
    "BrightPowder": "Bright Powder", "NeverMeltIce": "Never-Melt Ice", "BlackGlasses": "Black Glasses",
    "SilverPowder": "Silver Powder", "TwistedSpoon": "Twisted Spoon", "DeepSeaTooth": "Deep Sea Tooth",
    "DeepSeaScale": "Deep Sea Scale", "Parlyz Heal": "Paralyze Heal", "Thunderstone": "Thunder Stone",
    "TinyMushroom": "Tiny Mushroom", "BalmMushroom": "Balm Mushroom", "EnergyPowder": "Energy Powder",
    "Energypowder": "Energy Powder", "Up-Grade": "Up-Grade", "Dowsing MCHN": "Dowsing Machine",
}

M64, A64, MASK64 = 0x5D588B656C078965, 0x269EC3, (1 << 64) - 1


def fix_glyphs(s: str) -> str:
    return s.replace("⒆⒇", "Pokémon").replace("⑭", "♂").replace("⑮", "♀")


def fix_item(s: str) -> str:
    return ITEM_FIXES.get(s, s)


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", s.lower())


def load_js(path: Path) -> dict:
    t = path.read_text(encoding="utf-8")
    return json.loads(t[t.index("{"):t.rindex("}") + 1])


def trainer_pid(trainer_id, iv_byte, level, species, trainer_class, gender_mod):
    x = (iv_byte + level + species + trainer_id) & MASK64
    rnd = x
    for _ in range(trainer_class):
        x = (M64 * x + A64) & MASK64
        rnd = ((x >> 32) * 0x10000) >> 32
    return ((rnd << 8) + gender_mod) & 0xFFFFFFFF


def calc_stats(base: dict, iv: int, level: int, nature: str, shedinja: bool) -> dict:
    i = NATURES.index(nature)
    inc, dec = _STATS5[i // 5], _STATS5[i % 5]
    out = {}
    for s in STAT_ORDER:
        c = (2 * base[s] + iv) * level // 100
        if s == "hp":
            out[s] = 1 if shedinja else c + level + 10
        else:
            v = c + 5
            if inc != dec and s == inc:
                v = v * 110 // 100
            elif inc != dec and s == dec:
                v = v * 90 // 100
            out[s] = v
    return out


class Game:
    def __init__(self, key: str, rom: Path | None = None):
        c = self.c = GAMES[key]
        self.key = key
        nds = NDS(str(rom or c["rom"]))
        msg = parse_narc(nds.file_by_path("a/0/0/2"))
        txt = lambda b: decode_text_file(msg[b])
        self.trdata = parse_narc(nds.file_by_path(c["trdata"]))
        self.trpoke = parse_narc(nds.file_by_path(c["trpoke"]))
        self.personal = parse_narc(nds.file_by_path("a/0/1/6"))
        self.learnsets = parse_narc(nds.file_by_path("a/0/1/8"))
        self.tnames, self.tclasses = txt(c["names"]), txt(c["classes"])
        self.items, self.abil_txt = txt(c["items"]), txt(c["abilities"])
        self.rom_moves = txt(c["moves"])
        del nds, msg
        self.dex = load_js(ROOT / "pokedex" / f"{c['dex']}.js")
        moves5 = load_js(ROOT / "moves.js")["5"]
        self.move_by_id = {v["rom_id"]: k for k, v in moves5.items()}
        self.base_key = {}
        for k, v in self.dex.items():
            if "(" not in k:
                self.base_key[v["national_dex_number"]] = k
        self.ability_spelling = {}
        for v in self.dex.values():
            for a in v.get("abilities", []) + [v.get("hidden_ability")]:
                if a:
                    self.ability_spelling.setdefault(norm(a), a)

    # personal data ------------------------------------------------------- #
    def form_index(self, sp, form):
        d = self.personal[sp]
        start, count = u16(d, 0x1C), d[0x20]
        if start == 0 or count <= form or form == 0:
            return sp
        return start + form - 1

    def base_stats(self, idx):
        d = self.personal[idx]
        return dict(hp=d[0], attack=d[1], defense=d[2], speed=d[3], special_attack=d[4], special_defense=d[5])

    def species_key(self, sp, form):
        base = self.base_key[sp]
        if form == 0:
            return base
        idx = self.form_index(sp, form)
        if idx == sp:
            return base
        bs = self.base_stats(idx)
        abil = {norm(self.abil_txt[a]) for a in self.personal[idx][24:27] if a}
        types = {TYPES[self.personal[idx][6]], TYPES[self.personal[idx][7]]}
        for k, v in self.dex.items():
            if k.startswith(base + " (") and v["base_stats"] == bs and \
                    {v["type_1"], v.get("type_2") or v["type_1"]} == types and \
                    {norm(a) for a in v["abilities"] + [v.get("hidden_ability")] if a} == abil:
                return k
        return base  # cosmetic form (no separate pokedex entry)

    def default_moves(self, sp, level):
        b = self.learnsets[sp]  # form-0 learnset
        moves = []
        for i in range(0, len(b) - 3, 4):
            mv, lv = u16(b, i), u16(b, i + 2)
            if mv == 0xFFFF or lv > level:
                break
            if mv in moves:
                continue
            moves = (moves + [mv])[-4:]
        return moves

    def ability_name(self, aid):
        s = self.abil_txt[aid]
        return self.ability_spelling.get(norm(s), s)

    # trainers -------------------------------------------------------------- #
    def trainer(self, tid: int) -> dict:
        d, p = self.trdata[tid], self.trpoke[tid]
        fmt, tclass, btype, npk = d[0], d[1], d[2], d[3]
        has_moves, has_item = bool(fmt & 1), bool(fmt & 2)
        stride = 8 + (8 if has_moves else 0) + (2 if has_item else 0)
        party = []
        for k in range(npk):
            r = p[k * stride:(k + 1) * stride]
            party.append(self.build_mon(tid, tclass, r, has_moves, has_item))
        return {
            "rom_id": tid,
            "name": fix_glyphs(self.tnames[tid]),
            "trainer_class": fix_glyphs(self.tclasses[tclass]),
            "location": None,
            "money": d[17] if len(d) > 17 else 0,
            "is_double_battle": btype == 1,
            "battle_type": BATTLE_TYPES.get(btype, str(btype)),
            "items": [fix_item(self.items[u16(d, 4 + 2 * i)]) for i in range(4) if u16(d, 4 + 2 * i)],
            "party": party,
        }

    def build_mon(self, tid, tclass, r, has_moves, has_item, female_class=False):
        iv_byte, ga, level, sp, form = r[0], r[1], u16(r, 2), u16(r, 4), u16(r, 6)
        q = 8
        item = 0
        if has_item:
            item = u16(r, q); q += 2
        explicit = [u16(r, q + 2 * j) for j in range(4)] if has_moves else None
        fidx = self.form_index(sp, form)
        base, fd = self.personal[sp], self.personal[fidx]
        # class gender only affects the PID's low byte (gender), never nature/ability
        gmod = 120 if female_class else 136
        gender, abil_n = ga & 0x0F, (ga & 0xF0) >> 4
        if ga:
            if gender:
                gmod = fd[0x12] + (2 if gender == 1 else -2)
            if abil_n == 1:
                gmod &= ~1
            elif abil_n == 2:
                gmod |= 1
        pid = trainer_pid(tid, iv_byte, level, sp, tclass, gmod)
        bit16 = bool(pid & 0x10000)
        a = base[25] if (base[25] and bit16) else base[24]
        if abil_n == 3:
            a = fd[26] if fd[26] else (fd[25] if (fd[25] and bit16) else fd[24])
        elif abil_n:
            a = fd[25] if (fd[25] and abil_n == 2) else fd[24]
        nature_i = self.c["forced_natures"].get((tid, sp), (pid >> 8) % 25)
        nature = NATURES[nature_i]
        iv = iv_byte * 31 // 255
        move_ids = [m for m in explicit if m] if explicit is not None else self.default_moves(sp, level)
        return {
            "species": self.species_key(sp, form),
            "level": level,
            "experience_yield": u16(fd, 0x22),
            "nature": nature,
            "ability": self.ability_name(a),
            "held_item": fix_item(self.items[item]) if item else None,
            "stats": calc_stats(self.base_stats(fidx), iv, level, nature, sp == 292),
            "moves": [self.move_by_id[m] for m in move_ids],
        }

    def all_trainers(self) -> dict:
        return {str(t): self.trainer(t) for t in range(len(self.trdata))}


# --------------------------------------------------------------------------- #
# Writer: the hand-formatted layout of trainers/black_white.js
# --------------------------------------------------------------------------- #
def _j(v) -> str:
    return json.dumps(v, ensure_ascii=False)


def _inline_list(v) -> str:
    return "[" + ", ".join(_j(x) for x in v) + "]"


def to_js(trainers: dict) -> str:
    out = ["export const trainers = {"]
    tkeys = list(trainers)
    for ti, tk in enumerate(tkeys):
        t = trainers[tk]
        out.append(f"    {_j(tk)}: {{")
        for k, v in t.items():
            if k == "party":
                out.append('        "party": [')
                for mi, m in enumerate(v):
                    out.append("            {")
                    mk = list(m)
                    for ki, (k2, v2) in enumerate(m.items()):
                        comma = "," if ki < len(mk) - 1 else ""
                        if k2 == "stats":
                            out.append('                "stats": {')
                            sk = list(v2)
                            for si, s in enumerate(sk):
                                out.append(f"                    {_j(s)}: {_j(v2[s])}" + ("," if si < len(sk) - 1 else ""))
                            out.append("                }" + comma)
                        elif isinstance(v2, list):
                            out.append(f"                {_j(k2)}: {_inline_list(v2)}{comma}")
                        else:
                            out.append(f"                {_j(k2)}: {_j(v2)}{comma}")
                    out.append("            }" + ("," if mi < len(v) - 1 else ""))
                out.append("        ]")
            elif isinstance(v, list):
                out.append(f"        {_j(k)}: {_inline_list(v)},")
            else:
                out.append(f"        {_j(k)}: {_j(v)},")
        out.append("    }" + ("," if ti < len(tkeys) - 1 else ""))
    out.append("};")
    return "\r\n".join(out) + "\r\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--game", choices=["bw", "bw2", "both"], default="both")
    ap.add_argument("--check", action="store_true", help="report differences only, do not write")
    args = ap.parse_args()
    for key in (["bw", "bw2"] if args.game == "both" else [args.game]):
        g = Game(key)
        new = g.all_trainers()
        path = ROOT / "trainers" / GAMES[key]["out"]
        old = load_js(path)
        changed = sum(1 for k in new if old.get(k) != new[k])
        print(f"{key}: {len(new)} trainers, {sum(len(t['party']) for t in new.values())} Pokemon, "
              f"{changed} trainers differ from {path.name}")
        if not args.check:
            path.write_bytes(to_js(new).encode("utf-8"))
            print(f"  wrote {path}")


if __name__ == "__main__":
    main()
