#!/usr/bin/env python3
"""
scrape_event_pokemon.py — event Pokémon distributions from Bulbapedia.

Reads every Bulbapedia "List of ... event Pokémon distributions" page (see
SOURCE_PAGES), parses the event templates with ``event_wikitext.py`` and
groups the Pokémon by generation and by the page/event they were distributed
in.

    python scrape_event_pokemon.py --list            # write event_pokemon_list.md for review
    python scrape_event_pokemon.py --list --no-cache # re-fetch the list pages first

Requires the Bulbapedia proxy (see SCRAPING.md) for uncached pages.
"""
from __future__ import annotations

import argparse
import re
import sys
from collections import defaultdict
from pathlib import Path

import bulba_fetch as bf
import event_wikitext as ew

# (page title, channel label).  The generation comes from the page title when
# it names one, otherwise from the template (multi-generation pages such as
# the movie / Tanabata / game-based lists are split by template).
SOURCE_PAGES: list[tuple[str, str]] = [
    # Generation I
    ("List of Japanese event Pokémon distributions in Generation I", "Japanese events"),
    ("List of European language event Pokémon distributions in Generation I", "European language events"),
    ("List of game-based Pokémon distributions in Generation I", "Game-based distributions"),
    # Generation II
    ("List of Japanese event Pokémon distributions in Generation II", "Japanese events"),
    ("List of European language event Pokémon distributions in Generation II", "European language events"),
    ("List of PCNY event Pokémon distributions in Generation II", "Pokémon Center New York"),
    ("List of game-based Pokémon distributions in Generation II", "Game-based distributions"),
    # Generation III
    ("List of Japanese event Pokémon distributions in Generation III", "Japanese events"),
    ("List of English event Pokémon distributions in Generation III", "English events"),
    ("List of German event Pokémon distributions in Generation III", "German events"),
    ("List of Spanish event Pokémon distributions in Generation III", "Spanish events"),
    ("List of French event Pokémon distributions in Generation III", "French events"),
    ("List of Italian event Pokémon distributions in Generation III", "Italian events"),
    ("List of PCNY event Pokémon distributions in Generation III", "Pokémon Center New York"),
    ("List of Gather More Pokémon! Campaign event Pokémon", "Gather More Pokémon! Campaign"),
    ("List of Party of the Decade event Pokémon distributions", "Party of the Decade"),
    ("List of Journey Across America event Pokémon distributions", "Journey Across America"),
    ("List of Trade and Battle Day event Pokémon distributions", "Trade and Battle Day"),
    ("List of game-based Pokémon distributions in Generation III", "Game-based distributions"),
    ("Pokémon Colosseum Bonus Disc", "Pokémon Colosseum Bonus Disc"),
    # Generation IV
    ("List of local Japanese event Pokémon distributions in Generation IV", "Local Japanese events"),
    ("List of local English event Pokémon distributions in Generation IV", "Local English events"),
    ("List of local German event Pokémon distributions in Generation IV", "Local German events"),
    ("List of local Spanish event Pokémon distributions in Generation IV", "Local Spanish events"),
    ("List of local French event Pokémon distributions in Generation IV", "Local French events"),
    ("List of local Italian event Pokémon distributions in Generation IV", "Local Italian events"),
    ("List of local Korean event Pokémon distributions in Generation IV", "Local Korean events"),
    ("List of Wi-Fi Japanese event Pokémon distributions in Generation IV", "Wi-Fi Japanese events"),
    ("List of Wi-Fi English event Pokémon distributions in Generation IV", "Wi-Fi English events"),
    ("List of Wi-Fi German event Pokémon distributions in Generation IV", "Wi-Fi German events"),
    ("List of Wi-Fi Spanish event Pokémon distributions in Generation IV", "Wi-Fi Spanish events"),
    ("List of Wi-Fi French event Pokémon distributions in Generation IV", "Wi-Fi French events"),
    ("List of Wi-Fi Italian event Pokémon distributions in Generation IV", "Wi-Fi Italian events"),
    ("List of Wi-Fi Korean event Pokémon distributions in Generation IV", "Wi-Fi Korean events"),
    ("List of GTS event Pokémon distributions in Generation IV", "GTS events"),
    ("List of traded event Pokémon distributions in Generation IV", "Traded events"),
    ("List of game-based Pokémon distributions in Generation IV", "Game-based distributions"),
    # Generation V
    ("List of local Japanese event Pokémon distributions in Generation V", "Local Japanese events"),
    ("List of local English event Pokémon distributions in Generation V", "Local English events"),
    ("List of local German event Pokémon distributions in Generation V", "Local German events"),
    ("List of local Spanish event Pokémon distributions in Generation V", "Local Spanish events"),
    ("List of local French event Pokémon distributions in Generation V", "Local French events"),
    ("List of local Italian event Pokémon distributions in Generation V", "Local Italian events"),
    ("List of local Korean event Pokémon distributions in Generation V", "Local Korean events"),
    ("List of Wi-Fi Japanese event Pokémon distributions in Generation V", "Wi-Fi Japanese events"),
    ("List of Wi-Fi English event Pokémon distributions in Generation V", "Wi-Fi English events"),
    ("List of Wi-Fi German event Pokémon distributions in Generation V", "Wi-Fi German events"),
    ("List of Wi-Fi Spanish event Pokémon distributions in Generation V", "Wi-Fi Spanish events"),
    ("List of Wi-Fi French event Pokémon distributions in Generation V", "Wi-Fi French events"),
    ("List of Wi-Fi Italian event Pokémon distributions in Generation V", "Wi-Fi Italian events"),
    ("List of Wi-Fi Korean event Pokémon distributions in Generation V", "Wi-Fi Korean events"),
    # Generation VI
    ("List of Japanese region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Japan)"),
    ("List of American region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Americas)"),
    ("List of PAL region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (PAL)"),
    ("List of Korean region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Korea)"),
    ("List of Taiwanese region Nintendo Network event Pokémon distributions in Generation VI", "Nintendo Network (Taiwan)"),
    ("List of Japanese region serial code event Pokémon distributions in Generation VI", "Serial code (Japan)"),
    ("List of American region serial code event Pokémon distributions in Generation VI", "Serial code (Americas)"),
    ("List of PAL region serial code event Pokémon distributions in Generation VI", "Serial code (PAL)"),
    ("List of Korean region serial code event Pokémon distributions in Generation VI", "Serial code (Korea)"),
    ("List of Taiwanese region serial code event Pokémon distributions in Generation VI", "Serial code (Taiwan)"),
    ("List of local event Pokémon distributions in Generation VI", "Local events"),
    ("List of traded event Pokémon distributions in Generation VI", "Traded events"),
    ("List of game-based Pokémon distributions in Generation VI", "Game-based distributions"),
    # Generation VII
    ("List of Japanese region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Japan)"),
    ("List of American region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Americas)"),
    ("List of PAL region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (PAL)"),
    ("List of Korean region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Korea)"),
    ("List of Taiwanese region Nintendo Network event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Nintendo Network (Taiwan)"),
    ("List of Japanese region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Japan)"),
    ("List of American region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Americas)"),
    ("List of PAL region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (PAL)"),
    ("List of Korean region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Korea)"),
    ("List of Taiwanese region serial code event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Serial code (Taiwan)"),
    ("List of local event Pokémon distributions in Pokémon Sun, Moon, Ultra Sun, and Ultra Moon", "Local events"),
    ("List of event Pokémon distributions in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!", "Let's Go, Pikachu! and Let's Go, Eevee!"),
    ("List of mainland China region event Pokémon distributions in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!", "Let's Go (mainland China)"),
    ("List of game-based Pokémon distributions in Generation VII", "Game-based distributions"),
    # Generation VIII
    ("List of event Pokémon distributions in Pokémon Sword and Shield", "Sword and Shield"),
    ("List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl", "Brilliant Diamond and Shining Pearl"),
    ("List of event Pokémon distributions in Pokémon Legends: Arceus", "Legends: Arceus"),
    ("List of traded event Pokémon distributions in Generation VIII", "Traded events"),
    ("List of game-based Pokémon distributions in Generation VIII", "Game-based distributions"),
    # Generation IX
    ("List of event Pokémon distributions in Pokémon Scarlet and Violet", "Scarlet and Violet"),
    ("List of event Pokémon distributions in Pokémon Legends: Z-A", "Legends: Z-A"),
    ("List of game-based Pokémon distributions in Generation IX", "Game-based distributions"),
    ("List of event distributions in Pokémon Champions", "Pokémon Champions"),
    # Multi-generation themed lists (mostly re-list events from the pages above)
    ("List of movie event Pokémon", "Movie events"),
    ("List of Tanabata event Pokémon", "Tanabata events"),
]

ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9}
ROMAN_OF = {v: k for k, v in ROMAN.items()}
PAGE_GEN_OVERRIDE = {
    "Sun, Moon, Ultra Sun, and Ultra Moon": 7, "Let's Go, Pikachu!": 7,
    "Sword and Shield": 8, "Brilliant Diamond": 8, "Legends: Arceus": 8,
    "Scarlet and Violet": 9, "Legends: Z-A": 9, "Pokémon Champions": 9,
}

# Generation I-V game flags -> game names
OLD_GAME_FLAGS = {
    "jred": "Red (JP)", "jgreen": "Green (JP)", "jblue": "Blue (JP)",
    "red": "Red", "blue": "Blue", "yellow": "Yellow",
    "gold": "Gold", "silver": "Silver", "crystal": "Crystal",
    "ruby": "Ruby", "sapphire": "Sapphire", "firered": "FireRed",
    "leafgreen": "LeafGreen", "emerald": "Emerald", "colo": "Colosseum",
    "box": "Pokémon Box",
    "diamond": "Diamond", "pearl": "Pearl", "platinum": "Platinum",
    "heartgold": "HeartGold", "soulsilver": "SoulSilver",
    "black": "Black", "white": "White", "black2": "Black 2", "white2": "White 2",
}
NEW_GAME_CODES = {
    "x": "X", "y": "Y", "xy": "X and Y", "oras": "Omega Ruby and Alpha Sapphire",
    "xyoras": "X, Y, Omega Ruby and Alpha Sapphire",
    "sm": "Sun and Moon", "us": "Ultra Sun and Ultra Moon", "usum": "Ultra Sun and Ultra Moon",
    "smusum": "Sun, Moon, Ultra Sun and Ultra Moon",
    "pe": "Let's Go, Pikachu! and Let's Go, Eevee!", "swsh": "Sword and Shield",
    "bdsp": "Brilliant Diamond and Shining Pearl", "la": "Legends: Arceus",
    "sv": "Scarlet and Violet", "za": "Legends: Z-A", "champs": "Pokémon Champions",
    "s": "Sun", "m": "Moon", "um": "Ultra Moon", "sus": "Sun and Ultra Sun",
    "mum": "Moon and Ultra Moon", "or": "Omega Ruby", "as": "Alpha Sapphire",
    "sw": "Sword", "sh": "Shield", "e": "Let's Go, Eevee!", "p": "Let's Go, Pikachu!",
    "v": "Violet", "scar": "Scarlet",
    "home": "Pokémon HOME", "bank": "Pokémon Bank", "go": "Pokémon GO",
}


def page_generation(title: str) -> int | None:
    m = re.search(r"Generation ([IVX]+)\b", title)
    if m:
        return ROMAN[m.group(1)]
    for k, g in PAGE_GEN_OVERRIDE.items():
        if k in title:
            return g
    return None


def _clean_list(vals) -> str:
    return ", ".join(v for v in (ew.clean(x) for x in vals) if v and v.lower() != "hide")


def summarize(ev: dict, channel: str) -> dict:
    """Flatten a parsed template into the fields shown in the review list."""
    p = ev["params"]
    gen = page_generation(ev["page"]) or ev["generation"]
    # Old templates on multi-gen pages carry their own generation.
    if page_generation(ev["page"]) is None:
        gen = ev["generation"]
    species = ew.clean(p.get("pokemon"))
    form = ew.clean(p.get("form"))
    moves = [ew.clean(p.get(f"move{i}")) for i in range(1, 5)]
    moves = [m for m in moves if m]
    if ev["generation"] <= 5:
        games = [name for flag, name in OLD_GAME_FLAGS.items()
                 if p.get(flag, "").strip().lower() == "yes"]
        dists = [{
            "games": ", ".join(games),
            "where": ew.clean(p.get("country") or p.get("distribution") or ""),
            "date": ew.clean(p.get("datedis") or p.get("date") or ""),
        }]
    else:
        dists = []
        for d in ev["distributions"]:
            raw = d["raw"]
            game = NEW_GAME_CODES.get(raw[0].strip().lower(), ew.clean(raw[0])) if raw else ""
            dists.append({"games": game, "where": _clean_list(raw[1:-1]),
                          "date": ew.clean(raw[-1]) if len(raw) > 1 else ""})
    headings = [h for h in ev["headings"] if h and not re.match(
        r"(List of .*event|Event Pokémon|List of game-based)", h, re.I)]
    return {
        "generation": gen,
        "channel": channel,
        "page": ev["page"],
        "headings": headings,
        "event": headings[-1] if headings else species,
        "species": species,
        "form": form,
        "level": ew.clean(p.get("level")),
        "shiny": p.get("shiny", "").strip().lower() == "yes",
        "egg": bool(re.search(r"hatch", p.get("ot", ""), re.I)),
        "ot": ew.clean(p.get("ot")),
        "id": ew.clean(p.get("id")),
        "moves": moves,
        "distributions": dists,
        "template": ev["template"],
    }


# Themed pages that mostly re-list Pokémon already on the per-region pages.
# Their entries are kept only when no per-region page lists the same Pokémon.
AGGREGATE_CHANNELS = {"Movie events", "Tanabata events", "Pokémon Colosseum Bonus Disc"}


def fingerprint(s: dict) -> tuple:
    return (s["generation"], s["species"], s["form"], s["level"], s["shiny"],
            s["ot"], s["id"], tuple(sorted(s["moves"])))


def collect(use_cache: bool = True) -> list[dict]:
    titles = [t for t, _ in SOURCE_PAGES]
    texts = bf.prefetch_wikitext(titles, use_cache=use_cache)
    out: list[dict] = []
    seen: dict[tuple, dict] = {}
    for title, channel in SOURCE_PAGES:
        text = texts.get(title)
        if not text:
            print(f"  ! missing page: {title}", file=sys.stderr)
            continue
        for ev in ew.parse_page(text, title):
            s = summarize(ev, channel)
            fp = fingerprint(s)
            if channel in AGGREGATE_CHANNELS and fp in seen:
                seen[fp].setdefault("also_listed_in", []).append(f"{channel} — {s['event']}")
                continue
            seen.setdefault(fp, s)
            out.append(s)
    return out


# ---------------------------------------------------------------------------
# Review list
# ---------------------------------------------------------------------------

def _line(s: dict) -> str:
    name = s["species"] + (f" ({s['form']})" if s["form"] else "")
    bits = [f"**{name}**" + (" ★" if s["shiny"] else ""), f"Lv. {s['level'] or '?'}"]
    if s["egg"]:
        bits.append("Egg")
    elif s["ot"] or s["id"]:
        bits.append(f"OT {s['ot'] or '?'} / ID {s['id'] or '?'}")
    if s["moves"]:
        bits.append("; ".join(s["moves"]))
    d = s["distributions"]
    if d:
        games = sorted({x["games"] for x in d if x["games"]})
        dates = [x["date"] for x in d if x["date"]]
        if games:
            bits.append(" / ".join(games))
        if dates:
            bits.append(dates[0] if len(dates) == 1 else f"{dates[0]} … {dates[-1]} ({len(dates)} runs)")
    line = " — ".join(bits)
    if s.get("also_listed_in"):
        line += f"  _(also listed in: {'; '.join(s['also_listed_in'])})_"
    return line


def write_list(entries: list[dict], path: Path) -> None:
    by_gen: dict[int, dict[str, dict[str, list[dict]]]] = defaultdict(lambda: defaultdict(lambda: defaultdict(list)))
    for s in entries:
        by_gen[s["generation"]][s["channel"]][s["event"]].append(s)
    lines = [
        "# Event Pokémon — review list",
        "",
        "Source: Bulbapedia event distribution lists (one section per list page).",
        f"Total event Pokémon: {len(entries)}.",
        "",
        "★ = shiny. \"Egg\" = OT/ID are the hatcher's. The themed Movie / Tanabata / "
        "Colosseum Bonus Disc pages are only kept for Pokémon not already on a "
        "per-region page; the per-region entry notes where else it is listed.",
        "",
        "## Summary",
        "",
        "| Generation | Channel / list | Events | Pokémon |",
        "|---|---|---:|---:|",
    ]
    for g in sorted(by_gen):
        for ch, evs in by_gen[g].items():
            mons = [s for v in evs.values() for s in v]
            lines.append(f"| {ROMAN_OF[g]} | {ch} | {len(evs)} | {len(mons)} |")
    for g in sorted(by_gen):
        lines += ["", f"## Generation {ROMAN_OF[g]}"]
        for ch, evs in by_gen[g].items():
            lines += ["", f"### {ch}", ""]
            for ev_name, mons in evs.items():
                if len(mons) == 1:
                    lines.append(f"- {ev_name}: {_line(mons[0])}")
                else:
                    lines.append(f"- {ev_name}")
                    lines += [f"  - {_line(s)}" for s in mons]
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--list", action="store_true", help="write the review list")
    ap.add_argument("--list-path", default="event_pokemon_list.md")
    ap.add_argument("--no-cache", action="store_true")
    args = ap.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")
    entries = collect(use_cache=not args.no_cache)
    if args.list:
        write_list(entries, Path(args.list_path))
        print(f"wrote {args.list_path}: {len(entries)} entries")


if __name__ == "__main__":
    main()
