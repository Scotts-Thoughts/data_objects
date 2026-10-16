#!/usr/bin/env python3
"""
event_wikitext.py — parse Bulbapedia's event-distribution list pages.

Every "List of ... event Pokémon distributions ..." page is a sequence of
headings (== / === / ====) with one or more Pokémon templates below them:

* Generations I-V:  ``{{G1event|...}}`` … ``{{G5event|...}}`` — one template
  holds the Pokémon *and* its distribution (date, country, games).
* Generation VI+:   ``{{G6event/head|...}}`` (the Pokémon) followed by one or
  more ``{{G6event/entry|...}}`` / ``{{G6event/entrybottom|...}}`` rows (the
  distributions) and an optional ``{{G6event/footer...}}``.  Later games use
  ``G7event``, ``PEevent``, ``SwShevent``, ``BDSPevent``, ``LAevent``,
  ``SVevent``, ``ZAevent`` and ``Champsevent`` heads with the matching
  ``G7``/``G8``/``G9`` entry rows.

``parse_page`` returns one dict per Pokémon template with the template's
parameters, its distribution rows and the heading path it sits under.
"""
from __future__ import annotations

import re

# ---------------------------------------------------------------------------
# Generic template parsing
# ---------------------------------------------------------------------------


def _match_close(text: str, i: int) -> int:
    """Index just past the ``}}`` closing the ``{{`` at text[i]."""
    depth = 0
    n = len(text)
    while i < n:
        if text.startswith("{{", i):
            depth += 1
            i += 2
        elif text.startswith("}}", i):
            depth -= 1
            i += 2
            if depth == 0:
                return i
        else:
            i += 1
    return n


def _split_top(body: str) -> list[str]:
    """Split a template body on ``|`` that are not inside {{ }} or [[ ]]."""
    parts, buf, depth_t, depth_l, i = [], [], 0, 0, 0
    while i < len(body):
        two = body[i:i + 2]
        if two == "{{":
            depth_t += 1; buf.append(two); i += 2; continue
        if two == "}}":
            depth_t -= 1; buf.append(two); i += 2; continue
        if two == "[[":
            depth_l += 1; buf.append(two); i += 2; continue
        if two == "]]":
            depth_l -= 1; buf.append(two); i += 2; continue
        c = body[i]
        if c == "|" and depth_t == 0 and depth_l == 0:
            parts.append("".join(buf)); buf = []
        else:
            buf.append(c)
        i += 1
    parts.append("".join(buf))
    return parts


def parse_template(raw: str) -> tuple[str, dict[str, str], list[str]]:
    """``{{name|a|k=v}}`` -> (name, {k: v}, [a])."""
    parts = _split_top(raw[2:-2])
    name = parts[0].strip()
    named: dict[str, str] = {}
    positional: list[str] = []
    for p in parts[1:]:
        m = re.match(r"\s*([A-Za-z0-9_ \-]+?)\s*=(.*)$", p, re.S)
        if m and "{{" not in m.group(1):
            named[m.group(1).strip()] = m.group(2).strip()
        else:
            positional.append(p.strip())
    return name, named, positional


# ---------------------------------------------------------------------------
# Markup cleanup
# ---------------------------------------------------------------------------

# Templates whose visible text is their last positional argument.
_LAST_ARG = {"wp", "jwp", "tt", "color", "obp", "dl", "rf", "pkmn", "p", "m",
             "a", "i", "g", "game", "game2", "2v2", "v2", "jpn", "ga", "t",
             "type", "stat", "aniseries", "ani", "pmin", "bp", "cat", "rt",
             "mdl", "sup", "gameabbrev4", "gameabbrev5", "gameabbrev6",
             "flag"}
# Templates whose visible text is their *first* positional argument.
_FIRST_ARG = {"tt", "sc", "nowrap", "tooltip"}
_DROP = {"-", "clear", "bulbanews", "bulbanews/2", "ref", "dl"}


def _render_template(raw: str) -> str:
    name, named, pos = parse_template(raw)
    key = name.strip().lower()
    if key in ("-", "clear", "bulbanews", "bulbanews/2"):
        return ""
    if key == "tt":                      # {{tt|shown|tooltip}}
        return clean(pos[0]) if pos else ""
    if key in ("dl", "obp", "rf"):     # {{DL|Page|shown}} / {{OBP|Name|disambig}}
        if key == "obp":
            return clean(pos[0]) if pos else ""
        return clean(pos[-1]) if pos else ""
    if key in ("game", "game2"):        # {{game|Platinum}} -> Pokémon Platinum
        return "Pokémon " + clean(pos[0]) if pos else ""
    if key == "2v2" and len(pos) >= 2:
        return f"Pokémon {clean(pos[0])} and {clean(pos[1])}"
    if key == "v2" and pos:
        return "Pokémon " + clean(pos[0]) + " Version"
    if key in ("ivs", "iv"):
        return "IV"
    if key == "code" or key == "nbsp":
        return " "
    if pos:
        return clean(pos[-1] if key in _LAST_ARG else pos[0])
    return ""


def clean(text: str | None) -> str:
    """Strip wiki markup down to plain display text."""
    if not text:
        return ""
    s = text
    # templates, innermost first
    for _ in range(10):
        m = None
        for m in re.finditer(r"\{\{(?:(?!\{\{|\}\}).)*\}\}", s, re.S):
            break
        if not m:
            break
        s = s[:m.start()] + _render_template(m.group(0)) + s[m.end():]
    s = re.sub(r"\[\[(?:[^\]|]*\|)?([^\]]*)\]\]", r"\1", s)        # [[a|b]]
    s = re.sub(r"\[https?://\S+\s+([^\]]*)\]", r"\1", s)            # [url text]
    s = re.sub(r"\[https?://\S+\]", "", s)
    s = re.sub(r"<br\s*/?>", " / ", s, flags=re.I)
    s = re.sub(r"<ref[^>]*/>|<ref[^>]*>.*?</ref>", "", s, flags=re.S | re.I)
    s = re.sub(r"<[^>]+>", "", s)
    s = s.replace("&nbsp;", " ").replace("'''", "").replace("''", "")
    s = re.sub(r"\s+", " ", s).strip()
    return s


# ---------------------------------------------------------------------------
# Page parsing
# ---------------------------------------------------------------------------

HEAD_GEN = {
    "G6event/head": 6, "G7event/head": 7, "PEevent/head": 7,
    "SwShevent/head": 8, "BDSPevent/head": 8, "LAevent/head": 8,
    "SVevent/head": 9, "ZAevent/head": 9, "Champsevent/head": 9,
}
OLD_GEN = {"G1event": 1, "G2event": 2, "G3event": 3, "G4event": 4, "G5event": 5}
HEAD_GAME = {
    "PEevent/head": "Let's Go, Pikachu! and Let's Go, Eevee!",
    "SwShevent/head": "Sword and Shield",
    "BDSPevent/head": "Brilliant Diamond and Shining Pearl",
    "LAevent/head": "Legends: Arceus",
    "SVevent/head": "Scarlet and Violet",
    "ZAevent/head": "Legends: Z-A",
    "Champsevent/head": "Pokémon Champions",
}


def _canon_name(name: str) -> str:
    n = name.strip().replace("_", " ")
    n = re.sub(r"^Template:", "", n, flags=re.I)
    return n[:1].upper() + n[1:]


def _is_entry(name: str) -> bool:
    return bool(re.match(r"G\d+event/entry(bottom)?$", name))


def _is_footer(name: str) -> bool:
    return bool(re.match(r"(G\d+event|\w+event)/footer", name))


def parse_page(text: str, page_title: str) -> list[dict]:
    """Every Pokémon event template on a page, in page order."""
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    out: list[dict] = []
    headings: list[tuple[int, str]] = []
    current: dict | None = None
    i, n = 0, len(text)
    heading_re = re.compile(r"^(={2,6})\s*(.*?)\s*\1\s*$", re.M)
    # pre-index heading positions
    hpos = [(m.start(), len(m.group(1)), clean(m.group(2))) for m in heading_re.finditer(text)]
    hi = 0
    while i < n:
        j = text.find("{{", i)
        # advance headings up to j
        limit = j if j != -1 else n
        while hi < len(hpos) and hpos[hi][0] < limit:
            _, lvl, title = hpos[hi]
            headings = [h for h in headings if h[0] < lvl] + [(lvl, title)]
            current = None
            hi += 1
        if j == -1:
            break
        k = _match_close(text, j)
        raw = text[j:k]
        name, named, pos = parse_template(raw)
        cname = _canon_name(name)
        if cname in OLD_GEN or cname in HEAD_GEN:
            gen = OLD_GEN.get(cname) or HEAD_GEN[cname]
            current = {
                "page": page_title,
                "headings": [h[1] for h in headings],
                "template": cname,
                "generation": gen,
                "params": named,
                "distributions": [],
                "footer": None,
            }
            if cname in HEAD_GAME:
                current["head_game"] = HEAD_GAME[cname]
            out.append(current)
            i = k
            continue
        if current is not None and _is_entry(cname):
            current["distributions"].append({"raw": pos, "named": named})
        elif current is not None and _is_footer(cname):
            current["footer"] = {"name": cname, "named": named, "raw": pos}
        i = k if (cname in OLD_GEN or cname in HEAD_GEN or _is_entry(cname)
                  or _is_footer(cname)) else j + 2
    return out
