#!/usr/bin/env python3
"""
bulba_stats.py — base stats per form and generation from Bulbapedia species
pages.

The ``====Base stats====`` section of a species page holds one or more stat
templates, optionally under form sub-headings ("Blade Forme", "Alolan
Ninetales", "Mega Venusaur") and generation-range sub-headings ("Generations
VI-VII", "Generation VIII onward"):

    ====Base stats====
    =====Shield Forme=====
    ======Generations VI-VII======
    {{Stats|type=Steel|type2=Ghost|HP=60|Attack=50|Defense=150|SpAtk=50|SpDef=150|Speed=60}}
    ======Generation VIII onward======
    {{Stats|...}}

Generation I pages use ``{{BaseStats with RBY|...|SpAtk=95|SpDef=80|Special=80}}``
whose ``Special`` value is the Generation I stat.

    stats = load_stats("Aegislash")                      -> list[StatBlock]
    block = lookup_stats("Aegislash", {"blade"}, gen=7)   -> StatBlock | None

Used by the scraper to cross-check (and, for Gen I, correct) PokéAPI's
current-generation stats, and by verify_bulbapedia.py.
"""
from __future__ import annotations

import re
from dataclasses import dataclass

import bulba_fetch as bf
from bulba_learnsets import form_words, iter_templates, split_template, strip_markup

ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9}

STAT_KEYS = {
    "hp": "hp", "attack": "attack", "defense": "defense",
    "spatk": "special_attack", "spdef": "special_defense", "speed": "speed",
    "special": "special",
}

# Bulbapedia form wording -> the words our display names use.
FORM_SYNONYMS: dict[str, str] = {
    "jumbo": "super",
    "average": "",          # "Average Size" is the base form
    "medium": "",
    "altered": "",
    "land": "",
    "normal": "",
    "incarnate": "",
    "aria": "",
    "ordinary": "",
    "shield": "",
    "disguised": "",
    "single": "",           # Single Strike Style is the base Urshifu
    "strike": "",
    "midday": "",
    "baile": "",
    "solo": "",
    "amped": "",
    "hero": "hero",
    "zero": "",
    "ice": "ice",
    "rider": "",
    "crowned": "crowned",
    "sword": "",            # "Crowned Sword" -> crowned
    "red": "",              # Red-Striped Basculin is the base form
    "striped": "",
    "school": "school",
    "meteor": "",
    "core": "core",
    "male": "",
    "female": "female",
    "plant": "",
    "west": "",
    "sea": "",
    "spring": "",
    "overcast": "",
    "standard": "",
    "50": "",
    "10": "10",
    "complete": "complete",
    "confined": "",
    "unbound": "unbound",
    "original": "",
    "hoenn": "",
    "sinnoh": "",
    "many": "",             # "Hero of Many Battles" (base Zacian / Zamazenta)
    "battles": "",
    "galar": "galarian",
    "alola": "alolan",
    "hisui": "hisuian",
    "paldea": "paldean",
    "power": "",
    "construct": "",
    "size": "",
    "combat": "",
    "blaze": "",
    "aqua": "",
    "breed": "",
}

# Headings that scope a stat block to one game rather than a form.
GAME_HEADINGS: dict[str, str] = {
    "legends: arceus": "LA",
    "legends arceus": "LA",
    "legends: z-a": "ZA",
    "legends z-a": "ZA",
}

# Side-series games whose stat blocks never apply to the core games.
SIDE_GAME_WORDS = ("xd", "colosseum", "stadium", "pokémon go", "mystery dungeon", "unite")


@dataclass
class StatBlock:
    form: frozenset[str]            # descriptor words (empty = base form)
    gens: frozenset[int]            # generations the block applies to
    stats: dict[str, int]           # hp/attack/defense/special_attack/special_defense/speed
    special: int | None = None      # Gen I Special, when the page gives it
    heading: str = ""
    game: str | None = None         # block scoped to one game tag (LA / ZA)
    version: int = 0                # ordinal of a "Version x.y.z" patch heading


def _gen_range(text: str) -> frozenset[int] | None:
    """'Generations VI-VII' -> {6,7}; 'Generation VIII onward' -> {8,9};
    'Generation I' -> {1}; None if the heading is not a generation range."""
    t = strip_markup(text)
    m = re.match(r"Generations?\s+([IVX]+)(?:\s*(?:[-–]|to)\s*([IVX]+))?(\s+(?:onwards?|on|and later))?", t, re.I)
    if not m:
        return None
    a = ROMAN.get(m.group(1).upper())
    if a is None:
        return None
    if m.group(3):
        return frozenset(range(a, 10))
    b = ROMAN.get(m.group(2).upper()) if m.group(2) else a
    return frozenset(range(a, (b or a) + 1))


def _normalize_form(words: frozenset[str]) -> frozenset[str]:
    out = set()
    for w in words:
        w2 = FORM_SYNONYMS.get(w, w)
        if w2:
            out.add(w2)
    return frozenset(out)


def parse_stats(text: str, species: str) -> list[StatBlock]:
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    lines = text.splitlines()
    blocks: list[StatBlock] = []
    in_section = False
    section_level = 0
    form: frozenset[str] = frozenset()
    gens: frozenset[int] | None = None
    game: str | None = None
    skip = False                    # side-series block
    version = 0                     # "Version 1.0.1+" patch blocks, in page order
    heading_text = ""
    buf: list[str] | None = None
    for raw in lines:
        line = raw.strip()
        m = re.match(r"^(={2,6})\s*(.*?)\s*\1\s*$", line)
        if m:
            level, htext = len(m.group(1)), m.group(2)
            plain = strip_markup(htext).lower()
            if plain == "base stats":
                in_section = True
                section_level = level
                form, gens = frozenset(), None
                continue
            if in_section:
                if level <= section_level:
                    in_section = False
                    continue
                gr = _gen_range(htext)
                scoped = next((tag for key, tag in GAME_HEADINGS.items() if key in plain), None)
                if gr is not None:
                    gens = gr
                    skip = False
                elif scoped is not None:
                    game = scoped
                    gens = None
                    skip = False
                elif any(w in plain for w in SIDE_GAME_WORDS):
                    skip = True
                elif plain.startswith("version "):
                    version += 1
                    skip = False
                else:
                    form = _normalize_form(form_words(htext) - form_words(species))
                    gens = None
                    game = None
                    skip = False
                    version = 0
                heading_text = plain
            continue
        if not in_section:
            continue
        low = line.lower()
        start = -1
        if buf is None:
            for marker in ("{{stats", "{{basestats", "{{base stats"):
                start = low.find(marker)
                if start >= 0:
                    break
        if buf is None and start >= 0:
            buf = [line[start:]]
        elif buf is not None:
            buf.append(line)
        if buf is not None and line.endswith("}}"):
            tpl = " ".join(buf)
            buf = None
            name, pos, named = split_template(tpl)
            stats: dict[str, int] = {}
            special = None
            for k, v in named.items():
                key = STAT_KEYS.get(k.strip().lower())
                mv = re.match(r"\s*(\d+)", v)
                if not key or not mv:
                    continue
                if key == "special":
                    special = int(mv.group(1))
                else:
                    stats[key] = int(mv.group(1))
            if len(stats) == 6 and not skip:
                g = gens if gens is not None else frozenset(range(1, 10))
                blocks.append(StatBlock(form=form, gens=g, stats=stats, special=special,
                                        heading=heading_text, game=game, version=version))
    return blocks


_cache: dict[str, list[StatBlock] | None] = {}


def load_stats(species: str, use_cache: bool = True) -> list[StatBlock] | None:
    key = bf.normalize_title(species)
    if key in _cache:
        return _cache[key]
    text, _ = bf.fetch_wikitext_following_redirects(bf.species_title(species), use_cache)
    blocks = parse_stats(text, species) if text else None
    _cache[key] = blocks
    return blocks


def lookup_stats(species: str, descriptor: frozenset[str] | set[str], gen: int,
                 use_cache: bool = True, game_tag: str | None = None) -> StatBlock | None:
    """Stat block for a form in a generation.  Forms without their own block
    (Gigantamax, cosmetic variants …) fall back to the base form.  A block
    scoped to a game (Cherrim's Legends: Arceus buff) is used only for that
    game."""
    blocks = load_stats(species, use_cache)
    if not blocks:
        return None
    desc = _normalize_form(frozenset(descriptor))
    usable = [b for b in blocks if b.game is None or b.game == game_tag]

    def pick_form(cands: list[StatBlock]) -> list[StatBlock]:
        """Blocks for the requested form (best-overlap heading), else base."""
        if desc:
            scored = []
            for b in cands:
                if not b.form:
                    continue
                overlap = len(b.form & desc)
                if overlap:
                    scored.append((-overlap, len(b.form - desc), len(desc - b.form)))
            if scored:
                best = min(scored)
                return [b for b in cands if b.form and (-len(b.form & desc), len(b.form - desc), len(desc - b.form)) == best]
        base = [b for b in cands if not b.form]
        if base:
            return base
        # No undecorated block: Bulbapedia lists the default form first.
        first_form = cands[0].form if cands else None
        return [b for b in cands if b.form == first_form]

    same_form = pick_form(usable)
    if not same_form:
        return None
    # Prefer a game-scoped block (Cherrim in Legends: Arceus), then the block
    # whose generation range covers the game, then the latest range before
    # it (a "Generation VII" block still describes Generation IX), and among
    # patch-version blocks the most recent.
    def rank(b: StatBlock):
        covers = gen in b.gens
        before = max(b.gens) if max(b.gens) <= gen else -1
        return (b.game is not None, covers, before, b.version)
    return max(same_form, key=rank)


def gen_stats(block: StatBlock, gen: int) -> dict[str, int]:
    """Stats as stored in our files: Gen I uses the Special value for both
    special stats."""
    out = dict(block.stats)
    if gen == 1 and block.special is not None:
        out["special_attack"] = block.special
        out["special_defense"] = block.special
    return {k: out[k] for k in ("hp", "attack", "defense", "speed", "special_attack", "special_defense")}


if __name__ == "__main__":
    import sys
    if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    for sp in sys.argv[1:]:
        print("==", sp)
        for b in load_stats(sp) or []:
            print("  ", sorted(b.form), sorted(b.gens), b.stats, "special=", b.special, "|", b.heading)
