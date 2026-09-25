"""
learnset_errata.py — corrections for learnset rows that Bulbapedia itself gets
wrong, checked against the game decompilations.

`bulba_learnsets.get_learnsets` applies these after parsing, so the scraper
and verify_bulbapedia.py both see the corrected lists. Only add an entry when
the ROM (or, for games without a decomp, every independent source) disagrees
with Bulbapedia, and cite the source. Parser mistakes belong in
bulba_learnsets.py, not here.

Each entry:
    game     GAME_INFO key ("Gold and Silver", "Platinum", …)
    species  learnset page species names the correction applies to
    form     descriptor words of the form (empty = the base entry)
    field    Learnsets attribute: egg, tutor, tm_hm, …
    add / remove   move names (modern spelling)
    why      the source that proves it
"""
from __future__ import annotations

ERRATA: list[dict] = [
    # Bulbapedia's Gen II breed rows for these two families are tagged
    # Crystal-only; the ROMs have it the other way round.
    {"game": "Gold and Silver", "species": ["Bulbasaur", "Ivysaur", "Venusaur"], "field": "egg",
     "add": ["Charm"], "why": "pokegold data/pokemon/egg_moves.asm:5 (BulbasaurEggMoves has CHARM)"},
    {"game": "Crystal", "species": ["Bulbasaur", "Ivysaur", "Venusaur"], "field": "egg",
     "remove": ["Charm"], "why": "pokecrystal data/pokemon/egg_moves.asm:13 (Charm removed in Crystal)"},
    {"game": "Gold and Silver", "species": ["Pidgey", "Pidgeotto", "Pidgeot"], "field": "egg",
     "add": ["Steel Wing"], "why": "pokegold data/pokemon/egg_moves.asm:32 (PidgeyEggMoves has STEEL_WING)"},
    {"game": "Crystal", "species": ["Pidgey", "Pidgeotto", "Pidgeot"], "field": "egg",
     "remove": ["Steel Wing"], "why": "pokecrystal data/pokemon/egg_moves.asm:39 (Steel Wing removed in Crystal)"},
    {"game": "Crystal", "species": ["Wooper"], "field": "egg",
     "remove": ["Rain Dance"], "why": "pokecrystal data/pokemon/egg_moves.asm:597 (WooperEggMoves: Body Slam, AncientPower, Safeguard)"},
    # Bulbapedia's Sandy Cloak tutor table leaves out Rollout.
    {"game": "Platinum", "species": ["Wormadam"], "form": ["sandy"], "field": "tutor",
     "add": ["Rollout"], "why": "pokeplatinum res/pokemon/wormadam/forms/sandy/data.json by_tutor"},
    {"game": "HeartGold and SoulSilver", "species": ["Wormadam"], "form": ["sandy"], "field": "tutor",
     "add": ["Rollout"], "why": "pokeheartgold files/fielddata/wazaoshie (SPECIES_WORMADAM_SANDY tutor bits)"},
    # Scarlet/Violet has no decomp: these are rows where PokéAPI and Showdown
    # (both built from the game's data) agree against Bulbapedia.
    {"game": "Scarlet and Violet", "species": ["Noibat"], "field": "tm_hm",
     "remove": ["Double-Edge", "Breaking Swipe", "Dragon Cheer", "Psychic Noise"],
     "why": "PokéAPI + Showdown: Noivern-only TMs"},
    {"game": "Scarlet and Violet", "species": ["Raichu"], "form": ["alolan"], "field": "tm_hm",
     "remove": ["Disarming Voice"], "why": "PokéAPI + Showdown: Alolan Raichu has no Disarming Voice TM"},
    {"game": "Scarlet and Violet", "species": ["Urshifu"], "form": ["rapid", "strike"], "field": "tm_hm",
     "remove": ["Metal Claw"], "why": "PokéAPI + Showdown: TM031 Metal Claw is Single Strike only"},
    {"game": "Scarlet and Violet", "species": ["Shinx", "Luxio", "Luxray"], "field": "egg",
     "add": ["Night Slash"], "why": "PokéAPI + Showdown (shinx nightslash 9E)"},
]


def _insert(moves: list[str], move: str) -> None:
    """Add a move, keeping an alphabetical list alphabetical."""
    if move in moves:
        return
    if moves == sorted(moves):
        i = 0
        while i < len(moves) and moves[i] < move:
            i += 1
        moves.insert(i, move)
    else:
        moves.append(move)


def apply_errata(ls, species: str, game: str, descriptor: frozenset[str]) -> None:
    for e in ERRATA:
        if e["game"] != game or species not in e["species"]:
            continue
        if frozenset(e.get("form", ())) != frozenset(descriptor):
            continue
        moves: list[str] = getattr(ls, e["field"])
        for m in e.get("remove", ()):
            while m in moves:
                moves.remove(m)
        for m in e.get("add", ()):
            _insert(moves, m)
