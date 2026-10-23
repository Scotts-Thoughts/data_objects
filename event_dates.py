#!/usr/bin/env python3
"""
event_dates.py — turn Bulbapedia's free-text distribution dates into ISO dates.

Handles the shapes used on the event lists, e.g.

    October 1 to 7, 2016                    -> 2016-10-01 .. 2016-10-07
    September 16 to November 17, 2022       -> 2022-09-16 .. 2022-11-17
    November 20, 2025 to October 31, 2026   -> 2025-11-20 .. 2026-10-31
    February 12, 2025 onwards               -> 2025-02-12 .. None
    August 1998 / Summer 2000 / 2007 and 2008
    December 28, 2001 to January 31, 2002; January 17 to 23, 2003   (several periods)

Partial dates keep only the precision the text has (``1998-08``, ``2000``).
Anything unrecognized yields no periods; the original text is always kept by
the caller.
"""
from __future__ import annotations

import re

MONTHS = {m: i for i, m in enumerate(
    ["january", "february", "march", "april", "may", "june", "july", "august",
     "september", "october", "november", "december"], 1)}
MONTH_ABBR = {m[:3]: i for m, i in MONTHS.items()}
_MONTH_RE = r"(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?"

# One point: "[Month] [day][, year]" or "year" — the parts are all optional
# because ranges share them ("October 1 to 7, 2016").
_POINT = re.compile(
    rf"^\s*(?P<month>{_MONTH_RE})?\s*(?P<day>\d{{1,2}})?(?:st|nd|rd|th)?\s*,?\s*(?P<year>\d{{4}})?\s*$",
    re.I)


def _month_num(s: str | None) -> int | None:
    if not s:
        return None
    s = s.lower().rstrip(".")
    return MONTHS.get(s) or MONTH_ABBR.get(s[:3])


def _point(text: str) -> dict | None:
    m = _POINT.match(text)
    if not m or not any(m.group(g) for g in ("month", "day", "year")):
        return None
    return {"y": int(m.group("year")) if m.group("year") else None,
            "m": _month_num(m.group("month")),
            "d": int(m.group("day")) if m.group("day") else None}


def _iso(p: dict | None) -> str | None:
    if not p or not p["y"]:
        return None
    if p["m"] and p["d"]:
        return f"{p['y']:04d}-{p['m']:02d}-{p['d']:02d}"
    if p["m"]:
        return f"{p['y']:04d}-{p['m']:02d}"
    return f"{p['y']:04d}"


def _period(text: str, year_hint: int | None) -> dict | None:
    t = re.sub(r"\s+", " ", text).strip().rstrip(".,").strip()
    t = re.sub(r"^(?:from|between)\s+", "", t, flags=re.I)
    t = re.sub(r"^(?:spring|summer|autumn|fall|winter)\s+(?=\d{4}$)", "", t, flags=re.I)
    if not t:
        return None
    onwards = bool(re.search(r"\s+onwards?$", t, re.I))
    t = re.sub(r"\s+onwards?$", "", t, flags=re.I)
    parts = re.split(r"\s+(?:to|until|through|-|–|and)\s+", t, maxsplit=1, flags=re.I)
    start = _point(parts[0])
    end = _point(parts[1]) if len(parts) > 1 else None
    if start is None or (len(parts) > 1 and end is None):
        return None
    if end:
        # "October 1 to 7, 2016": the start borrows the end's month/year.
        if start["y"] is None:
            start["y"] = end["y"]
            if start["m"] is not None and end["m"] is not None and start["m"] > end["m"]:
                start["y"] = end["y"] - 1 if end["y"] else None
        if end["m"] is None and end["d"] is not None:
            end["m"] = start["m"]
        if start["m"] is None and start["d"] is not None:
            start["m"] = end["m"]
    for p in (start, end):
        if p and p["y"] is None:
            p["y"] = year_hint
    s = _iso(start)
    if s is None:
        return None
    e = None if onwards else (_iso(end) if end else s)
    return {"start": s, "end": e}


def parse_dates(text: str | None) -> list[dict]:
    """Free-text distribution dates -> [{"start": iso, "end": iso|None}, ...]."""
    if not text:
        return []
    t = re.sub(r"\*+", "", text)
    chunks = re.split(rf"\s*;\s*|\s+/\s+|,?\s+and then from\s+|\s+&\s+|(?<=\d{{4}}),\s+(?=[A-Z])"
                      rf"|\s+and\s+(?={_MONTH_RE}\s+\d)", t)
    years = [int(y) for y in re.findall(r"\b(\d{4})\b", t)]
    out: list[dict] = []
    for i, chunk in enumerate(chunks):
        # a chunk without its own year takes the next year mentioned after it
        later = re.findall(r"\b(\d{4})\b", " ".join(chunks[i:]))
        hint = int(later[0]) if later else (years[-1] if years else None)
        p = _period(chunk, hint)
        if p is None:
            # "October 1 to 7, October 15 to 21, 2012" — split further on commas before a month
            sub = re.split(rf",\s+(?={_MONTH_RE})", chunk)
            if len(sub) > 1:
                ps = [_period(c, hint) for c in sub]
                if all(ps):
                    out.extend(ps)
                    continue
            # "2007 and 2008" style year lists
            ys = re.findall(r"\b(\d{4})\b", chunk)
            if ys and re.fullmatch(r"[\d\s,and]+", chunk.strip()):
                out.append({"start": ys[0], "end": ys[-1]})
            continue
        out.append(p)
    return out


def span(periods: list[dict]) -> tuple[str | None, str | None]:
    """Overall (start, end) of several periods; end None if any is open-ended."""
    if not periods:
        return None, None
    start = min(p["start"] for p in periods)
    ends = [p["end"] for p in periods]
    end = None if any(e is None for e in ends) else max(ends)
    return start, end
