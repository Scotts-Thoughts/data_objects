#!/usr/bin/env python3
"""
bulba_learnsets.py — Bulbapedia learnset tables, parsed from wikitext.

The goal of the pokedex scrape is to reproduce Bulbapedia's per-game learnset
lists *in Bulbapedia's order*.  Instead of scraping the rendered HTML (fragile,
and the tables carry no machine-readable game markers) this module reads the
raw wikitext of each species' ``Generation N learnset`` subpage — or, for
Generation IX, the species page itself when no subpage exists yet — and
interprets the ``{{learnlist/...}}`` templates directly.

Page structure (all optional, nesting by heading order not heading level):

    [==== Game group ====]              Gen VII only: "Sun, Moon, USUM" vs LGPE
      ==== By leveling up ====          category
        [===== Alolan Vulpix =====]     form sub-heading, may carry {{sup/4|PtHGSS}}
          [{{gameabbrev8|SwSh}}]        game label(s) for the next table (Gen 8/9)
          {{learnlist/levelh/7|...|SM|USUM}}   table header, may name level columns
          {{learnlist/levelVII|1|1|Tackle|...}} rows
          {{learnlist/levelf/7|...}}    footer

Row templates are documented in ``ROW_SPECS`` — which parameter is the move,
which are level columns, which are per-game yes/no flags (tutors) and which
carry a game restriction (``HGSS``, ``{{sup/6|XY}}`` …).  The layout was
checked against the live template sources; ``python bulba_learnsets.py
--check-templates`` re-verifies it.

Public API:

    page = load_page(species_name, gen, use_cache=True)      -> Page | None
    ls   = select_learnsets(page, game, form_descriptor)      -> Learnsets
    ls   = get_learnsets(species_name, gen, game, form_descriptor)

``form_descriptor`` is the set of lowercase words that distinguish the form
from the base species ("alolan", {"dusk"}, {"sandy"}); empty for the base
form.  Games are named as in scrape_pokedex.GAME_CONFIG ("Platinum").

Move names are normalised to the modern (Generation VI+) spelling used by
moves.js, e.g. Bulbapedia's "SolarBeam" on a Gen III page becomes
"Solar Beam".
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

import bulba_fetch as bf
import learnset_errata

# ---------------------------------------------------------------------------
# Games
# ---------------------------------------------------------------------------

# game name -> (generation, Bulbapedia tag)
GAME_INFO: dict[str, tuple[int, str]] = {
    "Red and Blue":                        (1, "RB"),
    "Yellow":                              (1, "Y"),
    "Gold and Silver":                     (2, "GS"),
    "Crystal":                             (2, "C"),
    "Ruby and Sapphire":                   (3, "RS"),
    "Emerald":                             (3, "E"),
    "FireRed and LeafGreen":               (3, "FRLG"),
    "Diamond and Pearl":                   (4, "DP"),
    "Platinum":                            (4, "Pt"),
    "HeartGold and SoulSilver":            (4, "HGSS"),
    "Black and White":                     (5, "BW"),
    "Black 2 and White 2":                 (5, "B2W2"),
    "X and Y":                             (6, "XY"),
    "Omega Ruby and Alpha Sapphire":       (6, "ORAS"),
    "Sun and Moon":                        (7, "SM"),
    "Ultra Sun and Ultra Moon":            (7, "USUM"),
    "Sword and Shield":                    (8, "SwSh"),
    "Brilliant Diamond and Shining Pearl": (8, "BDSP"),
    "Legends Arceus":                      (8, "LA"),
    "Scarlet and Violet":                  (9, "SV"),
    "Legends Z-A":                         (9, "ZA"),
}

TAG_TO_GAME: dict[str, str] = {tag: game for game, (_, tag) in GAME_INFO.items()}

# Every game tag Bulbapedia may reference within a generation, including
# games we don't produce data for (LGPE, XD, Colosseum, Stadium …).  Marker
# tokens are expanded per generation because single letters are ambiguous
# ("S" is Sapphire in Gen III, Sun in Gen VII, Scarlet in Gen IX).
_MARKERS: dict[int, dict[str, set[str]]] = {
    1: {"RB": {"RB"}, "RGB": {"RB"}, "R": {"RB"}, "G": {"RB"}, "B": {"RB"},
        "RG": {"RB"}, "Y": {"Y"}, "RBY": {"RB", "Y"}, "RGBY": {"RB", "Y"},
        "Stad": {"Stadium"}, "Stadium": {"Stadium"}},
    2: {"GS": {"GS"}, "G": {"GS"}, "S": {"GS"}, "C": {"C"}, "GSC": {"GS", "C"},
        "Stad2": {"Stadium2"}},
    3: {"RS": {"RS"}, "R": {"RS"}, "S": {"RS"}, "E": {"E"}, "RSE": {"RS", "E"},
        "FRLG": {"FRLG"}, "FR": {"FRLG"}, "LG": {"FRLG"},
        "RSEFRLG": {"RS", "E", "FRLG"}, "FRLGE": {"FRLG", "E"}, "RSFRLG": {"RS", "FRLG"},
        "Colo": {"Colo"}, "XD": {"XD"}, "ColoXD": {"Colo", "XD"}},
    4: {"DP": {"DP"}, "D": {"DP"}, "P": {"DP"}, "Pt": {"Pt"}, "HGSS": {"HGSS"},
        "HG": {"HGSS"}, "SS": {"HGSS"}, "DPPt": {"DP", "Pt"},
        "PtHGSS": {"Pt", "HGSS"}, "DPPtHGSS": {"DP", "Pt", "HGSS"},
        "PBR": {"PBR"}},
    5: {"BW": {"BW"}, "B": {"BW"}, "W": {"BW"}, "B2W2": {"B2W2"}, "B2": {"B2W2"},
        "W2": {"B2W2"}, "BWB2W2": {"BW", "B2W2"}},
    6: {"XY": {"XY"}, "X": {"XY"}, "Y": {"XY"}, "ORAS": {"ORAS"}, "OR": {"ORAS"},
        "AS": {"ORAS"}, "XYORAS": {"XY", "ORAS"}},
    7: {"SM": {"SM"}, "S": {"SM"}, "M": {"SM"}, "USUM": {"USUM"}, "US": {"USUM"},
        "UM": {"USUM"}, "SMUSUM": {"SM", "USUM"},
        "LGPE": {"LGPE"}, "PE": {"LGPE"}, "LGP": {"LGPE"}, "LGE": {"LGPE"}},
    8: {"SwSh": {"SwSh"}, "Sw": {"SwSh"}, "Sh": {"SwSh"}, "EP": {"SwSh"},
        "IoA": {"SwSh"}, "CT": {"SwSh"}, "BDSP": {"BDSP"}, "BD": {"BDSP"},
        "SP": {"BDSP"}, "LA": {"LA"}, "PLA": {"LA"}},
    9: {"SV": {"SV"}, "S": {"SV"}, "V": {"SV"}, "TM": {"SV"}, "ID": {"SV"},
        "ZA": {"ZA"}, "LZA": {"ZA"}, "PLZA": {"ZA"}, "MD": {"ZA"}},
}

# The games each generation's pages describe (used when a table carries no
# label: it applies to every game the species is available in).
GEN_GAMES: dict[int, list[str]] = {
    1: ["RB", "Y"], 2: ["GS", "C"], 3: ["RS", "E", "FRLG"],
    4: ["DP", "Pt", "HGSS"], 5: ["BW", "B2W2"], 6: ["XY", "ORAS"],
    7: ["SM", "USUM"], 8: ["SwSh", "BDSP", "LA"], 9: ["SV", "ZA"],
}


def expand_marker(token: str, gen: int) -> set[str] | None:
    """'PtHGSS' -> {'Pt','HGSS'}; None if the token is not a game marker."""
    return _MARKERS.get(gen, {}).get(token.strip())


# ---------------------------------------------------------------------------
# Row template specifications
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class RowSpec:
    kind: str                     # level / tm / tutor / breed / event / transfer / prevo
    move: int                     # 1-based index of the move-name parameter
    levels: tuple[int, ...] = ()  # level column parameter indexes (level rows)
    columns: tuple[str, ...] = () # default game tag per level column
    flags: tuple[tuple[int, str, str], ...] = ()   # (param, game tag, default) tutor availability
    only: tuple[str, ...] = ()    # games this template can describe ("" = any game of the gen)


def _levels(move: int, *cols: str, only: tuple[str, ...] = ()) -> RowSpec:
    n = len(cols) if cols else 1
    return RowSpec("level", move, tuple(range(1, n + 1)), cols, only=only)


# Generation VIII/IX pages mix games that use different templates: the plain
# "8" templates describe Sword/Shield and BDSP, the LA/PLA ones Legends:
# Arceus, the plain "9" templates Scarlet/Violet and the ZA ones Legends: Z-A.
_ONLY_8 = ("SwSh", "BDSP")
_ONLY_9 = ("SV",)


ROW_SPECS: dict[str, RowSpec] = {
    # single level column
    **{f"level{n}": RowSpec("level", 2, (1,)) for n in range(1, 8)},
    "level8": RowSpec("level", 2, (1,), only=_ONLY_8),
    "level9": RowSpec("level", 2, (1,), only=_ONLY_9),
    # two level columns, default column order when the header names none
    "leveli":   _levels(3, "RB", "Y"),
    "levelii":  _levels(3, "GS", "C"),
    "leveliii": _levels(3, "RSE", "FRLG"),
    "levelivs": _levels(3, "DP", "PtHGSS"),
    "levelivj": _levels(3, "DPPt", "HGSS"),
    "levelv":   _levels(3, "BW", "B2W2"),
    "levelvi":  _levels(3, "XY", "ORAS"),
    "levelvii": _levels(3, "SM", "USUM"),
    # Legends games: param 2 is the mastery / Plus level, not a game column
    "levella":  RowSpec("level", 3, (1,), ("LA",), only=("LA",)),
    "levelza":  RowSpec("level", 3, (1,), ("ZA",), only=("ZA",)),
    # TMs / HMs / TRs
    **{f"tm{n}": RowSpec("tm", 2) for n in range(1, 8)},
    "tm8":  RowSpec("tm", 2, only=_ONLY_8),
    "tr":   RowSpec("tm", 2, only=("SwSh",)),
    "tm9":  RowSpec("tm", 2, only=_ONLY_9),
    "tmza": RowSpec("tm", 2, only=("ZA",)),
    # tutors: per-game yes/no flags (param, tag, default)
    "tutor1": RowSpec("tutor", 1, flags=((8, "Stadium", "yes"), (9, "Stadium", "yes"))),
    "tutor2": RowSpec("tutor", 1, flags=((8, "C", "yes"),)),
    "tutor3": RowSpec("tutor", 1, flags=((11, "FRLG", "yes"), (12, "E", "yes"), (13, "XD", "yes"))),
    "tutor4": RowSpec("tutor", 1, flags=((11, "DP", "no"), (12, "Pt", "no"), (13, "HGSS", "no"))),
    "tutor5": RowSpec("tutor", 1, flags=((9, "BW", "no"), (10, "B2W2", "no"))),
    "tutor6": RowSpec("tutor", 1, flags=((9, "XY", "no"), (10, "ORAS", "no"))),
    "tutor7": RowSpec("tutor", 1, flags=((9, "SM", "no"), (10, "USUM", "no"))),
    "tutor8": RowSpec("tutor", 1, flags=((9, "SwSh", "no"), (10, "SwSh", "no"), (11, "BDSP", "no")), only=_ONLY_8),
    "tutor9": RowSpec("tutor", 1, flags=((9, "SV", "no"),), only=_ONLY_9),
    "tutorpla": RowSpec("tutor", 1, only=("LA",)),
    # breeding: param 1 = parents, 2 = move.  Legends games have no breeding.
    **{f"breed{n}": RowSpec("breed", 2) for n in range(2, 8)},
    "breed8": RowSpec("breed", 2, only=_ONLY_8),
    "breed9": RowSpec("breed", 2, only=_ONLY_9),
    # events / special / form change: param 1 = description, 2 = move
    **{f"event{n}": RowSpec("event", 2) for n in range(1, 10)},
    "eventza": RowSpec("event", 2, only=("ZA",)),
    # transfer from another generation: species, dex, move
    **{f"prevgen{n}": RowSpec("transfer", 3) for n in range(1, 10)},
    # prior evolution: (dex, name, flag) x2, then move
    **{f"prevo{n}": RowSpec("prevo", 7) for n in range(1, 10)},
}

# Section heading text (lowercased, markup stripped) -> learnset category
CATEGORY_HEADINGS: dict[str, str] = {
    "by leveling up": "level",
    "by level up": "level",
    "by tm/hm": "tm",
    "by tm": "tm",
    "by hm": "tm",
    "by tm/tr": "tm",
    "by tr": "tm",
    "by breeding": "breed",
    "by tutoring": "tutor",
    "by move tutor": "tutor",
    "by a prior evolution": "prevo",
    "by prior evolution": "prevo",
    "by transfer from another generation": "transfer",
    "by events": "event",
    "by event": "event",
    "special moves": "special",
    "form change": "formchange",
    "zygarde cube": "zygarde",
    "dream world moves": "dreamworld",
    "by dream world": "dreamworld",
    "trading card game-only moves": "ignore",
    "animated series-only moves": "ignore",
    "tcg-only moves": "ignore",
    "learnset": "learnset",
}

# Words that never distinguish a form ("Dusk Form" ≡ "Dusk").
_FORM_NOISE_WORDS = {
    "form", "forme", "formes", "forms", "style", "size", "cloak", "mode",
    "variety", "pattern", "the", "of", "and",
}


# ---------------------------------------------------------------------------
# Move-name normalisation
# ---------------------------------------------------------------------------

# Bulbapedia uses the spelling of the generation the page describes.  Map
# every historical spelling onto the modern one used by moves.js.
MOVE_RENAMES: dict[str, str] = {
    "AncientPower":   "Ancient Power",
    "BubbleBeam":     "Bubble Beam",
    "DoubleSlap":     "Double Slap",
    "DragonBreath":   "Dragon Breath",
    "DynamicPunch":   "Dynamic Punch",
    "ExtremeSpeed":   "Extreme Speed",
    "FeatherDance":   "Feather Dance",
    "Faint Attack":   "Feint Attack",
    "GrassWhistle":   "Grass Whistle",
    "Hi Jump Kick":   "High Jump Kick",
    "PoisonPowder":   "Poison Powder",
    "Sand-Attack":    "Sand Attack",
    "Selfdestruct":   "Self-Destruct",
    "SelfDestruct":   "Self-Destruct",
    "SmellingSalt":   "Smelling Salts",
    "SmokeScreen":    "Smokescreen",
    "Softboiled":     "Soft-Boiled",
    "SolarBeam":      "Solar Beam",
    "SonicBoom":      "Sonic Boom",
    "ThunderPunch":   "Thunder Punch",
    "ThunderShock":   "Thunder Shock",
    "ViceGrip":       "Vise Grip",
    "Vice Grip":      "Vise Grip",
    "Conversion2":    "Conversion 2",
    "Lock-on":        "Lock-On",
    "Mud Slap":       "Mud-Slap",
}


def normalize_move_name(name: str) -> str:
    name = strip_markup(name).strip()
    name = MOVE_RENAMES.get(name, name)
    # moves.js (and PokéAPI) write King’s Shield etc. with U+2019.
    return name.replace("'", "’")


# ---------------------------------------------------------------------------
# Wikitext helpers
# ---------------------------------------------------------------------------

def split_template(text: str) -> tuple[str, list[str], dict[str, str]]:
    """Split '{{name|a|b|k=v}}' into (name, [a, b], {k: v}).

    Nested templates and links inside parameters are kept intact.
    """
    body = text.strip()
    if body.startswith("{{"):
        body = body[2:]
    if body.endswith("}}"):
        body = body[:-2]
    parts: list[str] = []
    depth = 0
    cur: list[str] = []
    i = 0
    while i < len(body):
        two = body[i:i + 2]
        if two in ("{{", "[["):
            depth += 1
            cur.append(two)
            i += 2
            continue
        if two in ("}}", "]]"):
            depth -= 1
            cur.append(two)
            i += 2
            continue
        ch = body[i]
        if ch == "|" and depth == 0:
            parts.append("".join(cur))
            cur = []
        else:
            cur.append(ch)
        i += 1
    parts.append("".join(cur))
    name = parts[0].strip()
    numbered: dict[int, str] = {}
    named: dict[str, str] = {}
    anon = 0
    for p in parts[1:]:
        m = re.match(r"\s*([A-Za-z][A-Za-z0-9_ -]*?)\s*=(.*)$", p, re.S)
        n = re.match(r"\s*(\d+)\s*=(.*)$", p, re.S)
        if m:
            named[m.group(1).strip()] = m.group(2).strip()
        elif n:
            # "13=yes" sets positional parameter 13, as MediaWiki does
            # (Magcargo's Gen III tutor row); it does not advance the count.
            numbered[int(n.group(1))] = n.group(2).strip()
        else:
            anon += 1
            numbered[anon] = p.strip()
    positional = [numbered.get(i, "") for i in range(1, max(numbered, default=0) + 1)]
    return name, positional, named


def iter_templates(line: str):
    """Yield every top-level {{...}} template on a line, in order."""
    i = 0
    n = len(line)
    while i < n:
        start = line.find("{{", i)
        if start < 0:
            return
        depth = 0
        j = start
        while j < n:
            two = line[j:j + 2]
            if two == "{{":
                depth += 1
                j += 2
                continue
            if two == "}}":
                depth -= 1
                j += 2
                if depth == 0:
                    break
                continue
            j += 1
        yield line[start:j]
        i = j


def strip_markup(text: str) -> str:
    """Reduce wikitext to plain text: links -> label, {{tt|X|..}} -> X,
    {{pkmn|x}} -> x, other templates -> their first argument, tags removed."""
    out = text
    for _ in range(6):        # nested templates: resolve inside-out
        new = re.sub(r"\{\{([^{}]*)\}\}", _template_text, out)
        if new == out:
            break
        out = new
    out = re.sub(r"\[\[(?:[^\]|]*\|)?([^\]]*)\]\]", r"\1", out)
    out = re.sub(r"<[^>]+>", "", out)
    out = out.replace("'''", "").replace("''", "")
    out = out.replace("&nbsp;", " ").replace("\xa0", " ")
    return re.sub(r"\s+", " ", out).strip()


def _template_text(m: re.Match) -> str:
    body = m.group(1)
    parts = body.split("|")
    name = parts[0].strip().lower()
    if name in ("tt", "sup/ss", "sup/t"):
        return parts[1] if len(parts) > 1 else ""
    if name.startswith("sup/"):
        return ""                     # game superscripts carry no text
    if name in ("pkmn", "pkmn2", "dl", "dwa", "bag3", "bag", "mcolor", "m", "a", "p"):
        return parts[-1] if len(parts) > 1 else ""
    if name.startswith("msp") or name.startswith("ms/"):
        return parts[-1] if len(parts) > 1 else ""
    return parts[1] if len(parts) > 1 else ""


def heading_of(line: str) -> tuple[int, str] | None:
    m = re.match(r"^(={2,6})\s*(.*?)\s*\1\s*$", line.strip())
    if not m:
        return None
    return len(m.group(1)), m.group(2)


def descriptor_for(display_name: str, species: str) -> frozenset[str]:
    """Words that distinguish a form's display name from its species name:
    ("Alolan Vulpix", "Vulpix") -> {"alolan"}; ("Rotom (Heat)", "Rotom") ->
    {"heat"}; the base form gives an empty set."""
    return form_words(display_name) - form_words(species)


def form_words(text: str) -> frozenset[str]:
    """Descriptor words of a form heading / display name."""
    plain = strip_markup(text).replace("’", "'")
    plain = re.sub(r"[()\[\]/,:%]", " ", plain)
    plain = plain.replace("-", " ")
    words = {w.lower() for w in plain.split() if w}
    return frozenset(w for w in words if w not in _FORM_NOISE_WORDS)


# ---------------------------------------------------------------------------
# Page model
# ---------------------------------------------------------------------------

@dataclass
class Row:
    template: str
    params: list[str]
    named: dict[str, str]
    spec: RowSpec
    move: str
    games: set[str] | None          # explicit per-row restriction, else None

    def level_for(self, column: int) -> int | None:
        """Level in the given column: int, 0 = on evolution, -1 = reminder
        only, None = not learned."""
        idx = self.spec.levels[column] - 1 if column < len(self.spec.levels) else None
        if idx is None or idx >= len(self.params):
            return None
        return parse_level(self.params[idx])

    def level_note(self, column: int) -> str | None:
        """Text of a {{tt|*|…}} note on the level cell, or None."""
        idx = self.spec.levels[column] - 1 if column < len(self.spec.levels) else None
        if idx is None or idx >= len(self.params):
            return None
        m = re.search(r"\{\{tt\|\*\|([^{}|]*)", self.params[idx], re.I)
        return m.group(1) if m else None

    def tutor_available(self, tag: str) -> bool:
        if not self.spec.flags:
            return not self.spec.only or tag in self.spec.only
        hit = False
        for (p, flag_tag, default) in self.spec.flags:
            if flag_tag != tag:
                continue
            val = self.params[p - 1].strip().lower() if p - 1 < len(self.params) else ""
            if not val:
                val = default
            if val == "yes":
                hit = True
        return hit

    @property
    def tm_code(self) -> str | None:
        if self.spec.kind != "tm":
            return None
        return strip_markup(self.params[0]) if self.params else None

    @property
    def description(self) -> str:
        """First parameter of breed / event / prevo rows as plain text."""
        return strip_markup(self.params[0]) if self.params else ""


@dataclass
class Table:
    kind: str                        # category (level / tm / breed / …)
    group: str                       # "main" or "LGPE"
    form: frozenset[str]             # descriptor words of the form heading
    form_games: set[str] | None      # games the form heading is marked for
    labels: set[str] | None          # {{gameabbrevN|…}} labels before the table
    columns: list[str]               # level column tags from the header
    rows: list[Row] = field(default_factory=list)
    section: str = ""                # raw heading path, for diagnostics

    def applies_to(self, tag: str, available: set[str]) -> bool:
        if self.form_games is not None and tag not in self.form_games:
            return False
        only = {g for r in self.rows for g in r.spec.only}
        if only and tag not in only:
            return False
        if self.labels is not None:
            return tag in self.labels
        return tag in available or bool(only)

    def level_column(self, tag: str) -> int | None:
        """Index of the level column for a game, or None if not applicable."""
        if not self.rows:
            return None
        spec = self.rows[0].spec
        cols = self.columns or list(spec.columns)
        if len(spec.levels) <= 1:
            return 0
        gen = _gen_of_tag(tag)
        for i, col in enumerate(cols):
            games = expand_marker(col, gen) or {col}
            if tag in games:
                return i
        return None


@dataclass
class Page:
    species: str
    gen: int
    title: str
    tables: list[Table]
    available: set[str]              # games the availability sentence names
    has_learnset: bool


def _gen_of_tag(tag: str) -> int:
    game = TAG_TO_GAME.get(tag)
    if game:
        return GAME_INFO[game][0]
    for gen, markers in _MARKERS.items():
        if tag in markers:
            return gen
    return 0


def parse_level(text: str) -> int | None:
    t = strip_markup(text).strip().rstrip("*").strip()
    if not t or t.upper() in ("N/A", "NA", "—", "-", "–"):
        return None
    tl = t.lower().rstrip(".")
    if tl in ("evo", "evolve", "evolution", "start"):
        return 0 if tl != "start" else 1
    if tl in ("rem", "reminder"):
        return -1
    m = re.match(r"(\d+)", t)
    return int(m.group(1)) if m else None


_AVAIL_RE = re.compile(r"is (?:only )?available in (.+?)(?:\.|$)", re.I)


def _parse_availability(line: str, gen: int) -> set[str]:
    m = _AVAIL_RE.search(line)
    if not m:
        return set()
    seg = m.group(1)
    found: set[str] = set()
    for name, tag in (
        ("Sword and Shield", "SwSh"), ("Brilliant Diamond and Shining Pearl", "BDSP"),
        ("Legends: Arceus", "LA"), ("Scarlet and Violet", "SV"), ("Legends: Z-A", "ZA"),
        ("Sun and Moon", "SM"), ("Ultra Sun and Ultra Moon", "USUM"),
        ("Let's Go", "LGPE"), ("X and Y", "XY"), ("Omega Ruby and Alpha Sapphire", "ORAS"),
    ):
        if name.lower() in seg.lower():
            found.add(tag)
    return found


def _row_games(params: list[str], spec: RowSpec, gen: int) -> set[str] | None:
    """Explicit per-row game restriction from {{sup/N|X}} or bare markers."""
    games: set[str] = set()
    seen_marker = False
    for i, p in enumerate(params, start=1):
        if i == spec.move or i in spec.levels:
            continue
        if spec.kind == "tm" and i == 1:
            continue
        for tpl in iter_templates(p):
            name, pos, _ = split_template(tpl)
            n = name.lower()
            if n.startswith("sup/") and n not in ("sup/ss", "sup/t"):
                for tok in pos[:1]:
                    exp = expand_marker(tok, gen)
                    if exp is not None:
                        games |= exp
                        seen_marker = True
        bare = p.strip()
        # A bare game token in the trailing (non-stat) parameters, e.g. the
        # "HGSS" on Gen IV rows.  Single letters are only markers on the
        # Gen I-III templates ("C", "Y", the "E" on Pichu's Emerald-only
        # Volt Tackle row); later they would be ambiguous (a stray "X" sits
        # on Thundurus's Gen VI Bite row, which ORAS has too).
        # Rows with one level column per game already say which games learn
        # the move (N/A in the others); a trailing token there is a parameter
        # the template never renders ({{learnlist/levelIVs|22|36|Thrash|…|||DP}}
        # would otherwise drop Totodile's Pt/HGSS level).
        if spec.kind == "level" and len(spec.levels) > 1:
            continue
        if bare and "{" not in bare and i > spec.move + 3 and (len(bare) > 1 or gen <= 3):
            exp = expand_marker(bare, gen)
            if exp is not None:
                games |= exp
                seen_marker = True
    return games if seen_marker else None


# Game titles as they appear in headings ("Pokémon Sword, Shield, Brilliant
# Diamond, and Shining Pearl", "Pokémon: Let's Go, Pikachu! and Let's Go,
# Eevee!").  Longest needles first so "ultra sun" is consumed before "sun".
_HEADING_GAME_NEEDLES: list[tuple[str, str]] = [
    ("brilliant diamond", "BDSP"), ("shining pearl", "BDSP"),
    ("legends: arceus", "LA"), ("legends arceus", "LA"),
    ("legends: z-a", "ZA"), ("legends z-a", "ZA"),
    ("ultra sun", "USUM"), ("ultra moon", "USUM"),
    ("let's go", "LGPE"), ("omega ruby", "ORAS"), ("alpha sapphire", "ORAS"),
    ("heartgold", "HGSS"), ("soulsilver", "HGSS"), ("firered", "FRLG"), ("leafgreen", "FRLG"),
    ("black 2", "B2W2"), ("white 2", "B2W2"),
    ("scarlet", "SV"), ("violet", "SV"), ("sword", "SwSh"), ("shield", "SwSh"),
    ("platinum", "Pt"), ("diamond", "DP"), ("pearl", "DP"), ("emerald", "E"),
    ("ruby", "RS"), ("sapphire", "RS"), ("crystal", "C"), ("gold", "GS"), ("silver", "GS"),
    ("black", "BW"), ("white", "BW"), ("sun", "SM"), ("moon", "SM"),
    ("yellow", "Y"), ("red", "RB"), ("blue", "RB"), ("x and y", "XY"),
]


def heading_games(plain: str, gen: int) -> set[str] | None:
    """Games named by a heading, or None when the heading is not a list of
    game titles (a form name, a category …)."""
    text = plain.lower()
    if not (text.startswith("pokémon") or text.startswith("pokemon")
            or "let's go" in text or "legends" in text):
        return None
    valid = set(GEN_GAMES.get(gen, [])) | {"LGPE", "XD", "Colo", "Stadium", "Stadium2", "PBR"}
    found: set[str] = set()
    for needle, tag in _HEADING_GAME_NEEDLES:
        if needle in text:
            text = text.replace(needle, " ")
            if tag in valid:
                found.add(tag)
    return found or None


def _logical_lines(text: str):
    """Lines of wikitext, with a template that wraps onto the next line(s)
    joined back into one (Larvesta's Gen VI String Shot breed row lists its
    fathers over two lines; read line by line, the row was dropped)."""
    buffered: list[str] = []
    for raw in text.splitlines():
        buffered.append(raw)
        joined = "".join(buffered)
        if joined.lstrip().startswith("{{") and joined.count("{{") > joined.count("}}"):
            if len(buffered) < 6:
                continue
            # never closes: not a wrapped row, hand the lines back unchanged
            yield from buffered
        else:
            yield joined
        buffered = []
    yield from buffered


def parse_page(text: str, species: str, gen: int, title: str = "",
               species_page: bool = False) -> Page:
    tables: list[Table] = []
    available: set[str] = set()
    group_labels: set[str] | None = None      # Gen VII "Sun, Moon, USUM" / "Let's Go" blocks
    category: str | None = None
    category_level = 0
    form: frozenset[str] = frozenset()
    form_games: set[str] | None = None
    in_form = False                           # under a form sub-heading (even "=====Raichu=====")
    category_labels: set[str] | None = None   # {{gameabbrev}} before any form heading
    form_labels: set[str] | None = None       # {{gameabbrev}} / game sub-heading inside a form
    current: Table | None = None
    heading_path: list[str] = []
    # On a species page only the ===Learnset=== section holds learnlists;
    # learnset subpages consist of nothing else.
    in_learnset = not species_page

    def labels_now() -> set[str] | None:
        return form_labels or category_labels or group_labels

    # Editors park unverified tables inside HTML comments (Mimikyu's Busted
    # Form TM list with Surf); <includeonly> blocks are not rendered either.
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    text = re.sub(r"<includeonly>.*?</includeonly>", "", text, flags=re.S | re.I)

    for raw in _logical_lines(text):
        line = raw.strip()
        if not line:
            continue
        h = heading_of(line)
        if h:
            level, htext = h
            plain = strip_markup(htext).lower().strip()
            plain_key = re.sub(r"\s+", " ", plain)
            current = None
            if species_page:
                if level <= 3:
                    in_learnset = plain_key == "learnset"
                    category = None
                    form = frozenset()
                    form_games = None
                    in_form = False
                    category_labels = form_labels = None
                    continue
                if not in_learnset:
                    continue
            cat = CATEGORY_HEADINGS.get(plain_key)
            if cat is None and plain_key.startswith("by "):
                cat = "other"
            if cat is not None:
                category = cat
                category_level = level
                form = frozenset()
                form_games = None
                in_form = False
                category_labels = form_labels = None
                heading_path = [plain_key]
                continue
            games = heading_games(plain_key, gen)
            if games is not None:
                if category is None or level <= category_level:
                    # A game block above the categories (Gen VII pages).
                    group_labels = games
                    category = None
                    form = frozenset()
                    form_games = None
                    in_form = False
                    category_labels = form_labels = None
                else:
                    # A game sub-heading inside a category: label the tables
                    # that follow, keep the current form.
                    form_labels = games
                    heading_path = heading_path[:2] + [plain_key]
                continue
            # Otherwise a form sub-heading (possibly with game superscripts).
            if category is not None:
                form = form_words(htext) - form_words(species)
                fg: set[str] = set()
                for tpl in iter_templates(htext):
                    name, pos, _ = split_template(tpl)
                    if name.lower().startswith("sup/") and name.lower() not in ("sup/ss", "sup/t") and pos:
                        exp = expand_marker(pos[0], gen)
                        if exp:
                            fg |= exp
                form_games = fg or None
                form_labels = None
                in_form = True
                heading_path = heading_path[:1] + [plain_key]
            continue

        if not in_learnset:
            continue

        if "is available in" in line or "are available in" in line:
            available |= _parse_availability(line, gen)

        line_labels: set[str] | None = None   # {{gameabbrev}}s on this line, unioned
        for tpl in iter_templates(line):
            name, pos, named = split_template(tpl)
            lname = name.lower()
            if lname.startswith("gameabbrev"):
                if pos:
                    exp = expand_marker(pos[0], gen) or {pos[0]}
                    line_labels = (line_labels or set()) | exp
                    # A label line replaces the previous label for the tables
                    # that follow; inside a form heading it scopes to that form.
                    if in_form:
                        form_labels = line_labels
                    else:
                        category_labels = line_labels
                continue
            if not lname.startswith("learnlist/"):
                continue
            tname = lname[len("learnlist/"):]
            if tname.endswith("null") or tname == "alltm":
                continue
            base = tname.split("/")[0]
            if base.endswith("h") and base[:-1] in ("level", "tm", "breed", "tutor", "event", "prevgen", "prevo"):
                # table header; trailing params may name the level columns
                kind = category or base[:-1]
                columns: list[str] = []
                if base == "levelh":
                    for p in pos[3:]:
                        if expand_marker(p, gen) is not None or p in ("RGB", "RBY"):
                            columns.append(p)
                current = Table(kind=kind, group="main", form=form, form_games=form_games,
                                labels=labels_now(), columns=columns,
                                section=" / ".join(heading_path))
                tables.append(current)
                continue
            if base.endswith("f") and base[:-1] in ("level", "tm", "breed", "tutor", "event", "prevgen", "prevo"):
                current = None
                continue
            spec = ROW_SPECS.get(base)
            if spec is None:
                continue
            if current is None:
                current = Table(kind=category or spec.kind, group="main", form=form,
                                form_games=form_games, labels=labels_now(), columns=[],
                                section=" / ".join(heading_path))
                tables.append(current)
            if spec.move - 1 >= len(pos):
                continue
            move = normalize_move_name(pos[spec.move - 1])
            if not move:
                continue
            current.rows.append(Row(template=base, params=pos, named=named, spec=spec,
                                    move=move, games=_row_games(pos, spec, gen)))

    has_learnset = any(t.rows for t in tables)
    return Page(species=species, gen=gen, title=title, tables=tables,
                available=available, has_learnset=has_learnset)


# ---------------------------------------------------------------------------
# Loading
# ---------------------------------------------------------------------------

_page_cache: dict[tuple[str, int], Page | None] = {}


def load_page(species: str, gen: int, use_cache: bool = True) -> Page | None:
    key = (bf.normalize_title(species), gen)
    if key in _page_cache:
        return _page_cache[key]
    title = bf.learnset_title(species, gen)
    text, final = bf.fetch_wikitext_following_redirects(title, use_cache)
    species_page = False
    if text is None and gen >= 9:
        title = bf.species_title(species)
        text, final = bf.fetch_wikitext_following_redirects(title, use_cache)
        species_page = True
    page = parse_page(text, species, gen, final, species_page) if text else None
    _page_cache[key] = page
    return page


# ---------------------------------------------------------------------------
# Selection
# ---------------------------------------------------------------------------

@dataclass
class Learnsets:
    found: bool = False                     # a level-up table applied to the game
    level_up: list[list] = field(default_factory=list)
    tm_hm: list[str] = field(default_factory=list)
    tm_codes: dict[str, str] = field(default_factory=dict)
    tutor: list[str] = field(default_factory=list)
    egg: list[str] = field(default_factory=list)
    light_ball_egg: list[str] = field(default_factory=list)
    prior_evolution: list[str] = field(default_factory=list)
    transfer: list[str] = field(default_factory=list)
    form_change: list[str] = field(default_factory=list)
    zygarde_cube: list[str] = field(default_factory=list)
    special: list[str] = field(default_factory=list)
    form_matched: bool = False              # a heading matched the descriptor
    diagnostics: list[str] = field(default_factory=list)


def _pick_tables(page: Page, kind: str, tag: str, descriptor: frozenset[str],
                 available: set[str]) -> tuple[list[Table], bool]:
    """Tables of a category that apply to the game, preferring the form's own
    heading and falling back to the base (unlabelled / first) table."""
    group = "main"
    cands = [t for t in page.tables if t.kind == kind and t.group == group]
    # "=====All forms=====" (Deoxys's Gen IX TMs): shared by every form, on
    # top of the form's own table.
    shared = [t for t in cands if t.form == _ALL_FORMS and t.applies_to(tag, available)]
    cands = [t for t in cands if t.form != _ALL_FORMS]
    if not cands:
        return shared, False
    chosen, matched = _pick_form_tables(cands, tag, descriptor, available)
    # An unlabelled table next to one labelled for this game belongs to the
    # other game(s): Feebas's Gen VIII page has an unlabelled SwSh TM table
    # followed by a "BDSP" one, and BDSP took both.
    if any(t.labels is not None and tag in t.labels for t in chosen):
        chosen = [t for t in chosen if t.labels is not None]
    return shared + chosen, matched


_ALL_FORMS = frozenset({"all"})


def _pick_form_tables(cands: list[Table], tag: str, descriptor: frozenset[str],
                      available: set[str]) -> tuple[list[Table], bool]:
    if descriptor:
        own = [t for t in cands if t.form and descriptor <= t.form]
        if not own:
            # A heading that names part of the form ("Galarian Darmanitan" for
            # "Galarian Darmanitan (Zen)"); take the most specific one.
            partial = [t for t in cands if t.form and t.form <= descriptor]
            if partial:
                best = max(len(t.form) for t in partial)
                own = [t for t in partial if len(t.form) == best]
        if own:
            return [t for t in own if t.applies_to(tag, available)], True
    base = [t for t in cands if not t.form]
    if not base:
        # Every table is under a form heading: take the first form (the base
        # form) unless the descriptor names another one.
        first_form = cands[0].form
        base = [t for t in cands if t.form == first_form]
    chosen = [t for t in base if t.applies_to(tag, available)]
    if not chosen:
        # A game with its own templates (Legends: Arceus, Legends: Z-A) may
        # have its single table filed under some other form's heading —
        # Shaymin's LA table sits under "Sky Forme".  It is the only data
        # for that game, so use it.
        chosen = [t for t in cands
                  if t.applies_to(tag, available)
                  and any(tag in r.spec.only for r in t.rows)]
    return chosen, False


def _dedupe(seq: list[str]) -> list[str]:
    out: list[str] = []
    for s in seq:
        if s not in out:
            out.append(s)
    return out


def select_learnsets(page: Page, game: str, descriptor: frozenset[str] | set[str] = frozenset()) -> Learnsets:
    gen, tag = GAME_INFO[game]
    descriptor = frozenset(descriptor)
    ls = Learnsets()
    available = set(page.available) or set(GEN_GAMES[gen])

    def row_ok(row: Row) -> bool:
        # patch=Prior to Version 3.0.0: removed by a game update
        if row.named.get("patch", "").lower().startswith("prior to"):
            return False
        return row.games is None or tag in row.games

    # --- level-up -------------------------------------------------------
    tables, matched = _pick_tables(page, "level", tag, descriptor, available)
    ls.form_matched = matched
    entries: list[tuple[int, int, str]] = []
    for t in tables:
        col = t.level_column(tag)
        if col is None:
            continue
        for order, row in enumerate(t.rows):
            if not row_ok(row):
                continue
            lvl = row.level_for(col)
            if lvl is None:
                continue
            # "50{{tt|*|Eternal Flower Floette}}": only that form learns it.
            # Notes that don't name the species ("Version 2.0.0 onwards" on
            # Legends: Z-A rows) are not form restrictions.
            note = row.level_note(col)
            if note is not None and form_words(page.species) <= form_words(note):
                note_form = form_words(note) - form_words(page.species)
                if note_form and not (note_form & descriptor):
                    continue
            entries.append((lvl, order, row.move))
    if entries or tables:
        ls.found = bool(entries)
    # Stable sort by level keeps Bulbapedia's row order for equal levels.
    # Reminder-only (-1) and evolution (0) moves sort ahead of level 1.
    entries.sort(key=lambda e: (e[0], e[1]))
    # Identical rows collapse: Legends: Arceus lists Roar of Time twice at 60,
    # once per forme's power/accuracy.
    ls.level_up = []
    for lvl, _, move in entries:
        if [lvl, move] not in ls.level_up:
            ls.level_up.append([lvl, move])

    # --- TM / HM / TR ----------------------------------------------------
    tables, _ = _pick_tables(page, "tm", tag, descriptor, available)
    for t in tables:
        for row in t.rows:
            if not row_ok(row):
                continue
            if row.move not in ls.tm_hm:
                ls.tm_hm.append(row.move)
                code = row.tm_code
                if code:
                    ls.tm_codes[row.move] = code

    # --- tutors ----------------------------------------------------------
    tables, _ = _pick_tables(page, "tutor", tag, descriptor, available)
    for t in tables:
        for row in t.rows:
            if not row_ok(row):
                continue
            if not row.tutor_available(tag):
                continue
            if row.move not in ls.tutor:
                ls.tutor.append(row.move)

    # --- breeding --------------------------------------------------------
    tables, _ = _pick_tables(page, "breed", tag, descriptor, available)
    for t in tables:
        for row in t.rows:
            if not row_ok(row):
                continue
            if "light ball" in (row.params[0].lower() if row.params else ""):
                if row.move not in ls.light_ball_egg:
                    ls.light_ball_egg.append(row.move)
                continue
            if row.move not in ls.egg:
                ls.egg.append(row.move)

    # --- prior evolution -------------------------------------------------
    tables, _ = _pick_tables(page, "prevo", tag, descriptor, available)
    for t in tables:
        for row in t.rows:
            if row_ok(row) and row.move not in ls.prior_evolution:
                ls.prior_evolution.append(row.move)

    # --- transfer --------------------------------------------------------
    tables, _ = _pick_tables(page, "transfer", tag, descriptor, available)
    for t in tables:
        for row in t.rows:
            if row_ok(row) and row.move not in ls.transfer:
                ls.transfer.append(row.move)

    # --- form change / zygarde cube / special ---------------------------
    for kind in ("formchange", "zygarde", "special", "event"):
        tables, _ = _pick_tables(page, kind, tag, descriptor, available)
        for t in tables:
            for row in t.rows:
                if not row_ok(row):
                    continue
                desc = row.description.lower()
                if kind == "zygarde" or "zygarde cube" in desc:
                    if row.move not in ls.zygarde_cube:
                        ls.zygarde_cube.append(row.move)
                elif kind == "formchange" or desc.startswith("form change"):
                    if row.move not in ls.form_change:
                        ls.form_change.append(row.move)
                elif kind == "special":
                    if row.move not in ls.special:
                        ls.special.append(row.move)
    return ls


def get_learnsets(species: str, gen: int, game: str,
                  descriptor: frozenset[str] | set[str] = frozenset(),
                  use_cache: bool = True) -> Learnsets | None:
    page = load_page(species, gen, use_cache)
    if page is None:
        return None
    ls = select_learnsets(page, game, descriptor)
    learnset_errata.apply_errata(ls, species, game, frozenset(descriptor))
    return ls


# ---------------------------------------------------------------------------
# Template self-check
# ---------------------------------------------------------------------------

def check_templates() -> int:
    """Compare ROW_SPECS against the live template sources.  Returns the
    number of mismatches."""
    bad = 0
    for name, spec in sorted(ROW_SPECS.items()):
        title = "Template:Learnlist/" + _canonical_template_name(name)
        text, _ = bf.fetch_wikitext_following_redirects(title)
        if not text:
            print(f"  ?? {name}: template page not found")
            continue
        m = re.search(r"\[\[\{\{\{(\d+)\|[^}]*\}\}\} \(move\)", text)
        if not m:
            print(f"  ?? {name}: no move link found in template")
            continue
        if int(m.group(1)) != spec.move:
            print(f"  !! {name}: move param is {m.group(1)}, spec says {spec.move}")
            bad += 1
        flags = re.findall(r"\{\{#switch: ?\{\{\{(\d+)\|(yes|no)\}\}\}", text)
        params = sorted({int(a) for a, _ in flags})
        spec_params = sorted({p for p, _, _ in spec.flags})
        if params != spec_params:
            print(f"  !! {name}: flag params {params} vs spec {spec_params}")
            bad += 1
    print("templates checked:", len(ROW_SPECS), "mismatches:", bad)
    return bad


def _canonical_template_name(lower: str) -> str:
    special = {"leveli": "levelI", "levelii": "levelII", "leveliii": "levelIII",
               "levelivs": "levelIVs", "levelivj": "levelIVj",
               "levelv": "levelV", "levelvi": "levelVI", "levelvii": "levelVII",
               "levella": "levelLA", "levelza": "levelZA", "tmza": "tmZA",
               "tutorpla": "tutorPLA", "eventza": "eventZA"}
    return special.get(lower, lower)


# ---------------------------------------------------------------------------
# CLI (debugging aid)
# ---------------------------------------------------------------------------

def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("species", nargs="?")
    ap.add_argument("--game", default="Platinum")
    ap.add_argument("--form", default="", help="form descriptor words, e.g. 'alolan' or 'dusk'")
    ap.add_argument("--no-cache", action="store_true")
    ap.add_argument("--check-templates", action="store_true")
    ap.add_argument("--dump-tables", action="store_true")
    args = ap.parse_args()
    if args.check_templates:
        sys.exit(1 if check_templates() else 0)
    if not args.species:
        ap.error("species required")
    gen = GAME_INFO[args.game][0]
    page = load_page(args.species, gen, use_cache=not args.no_cache)
    if page is None:
        print("no page")
        sys.exit(1)
    if args.dump_tables:
        for t in page.tables:
            print(f"[{t.kind}] group={t.group} form={sorted(t.form)} form_games={t.form_games} "
                  f"labels={t.labels} columns={t.columns} rows={len(t.rows)}  ({t.section})")
    ls = select_learnsets(page, args.game, descriptor_for(args.form, args.species) if args.form else frozenset())
    print(json.dumps(ls.__dict__, indent=1, ensure_ascii=False))


if __name__ == "__main__":
    if sys.stdout.encoding and sys.stdout.encoding.lower() not in ("utf-8", "utf8"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    main()
