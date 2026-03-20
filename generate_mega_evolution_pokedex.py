#!/usr/bin/python3
"""
Extract mega evolution data from per-game pokedex files and combine them into
a single mega_evolution_pokedex.js file. Each mega is taken from the game
where it was first introduced.

Official mega introductions:
  - X/Y: The original 28 megas
  - ORAS: 20 additional megas (Beedrill, Pidgeot, Slowbro, etc.)
  - Sun/Moon and beyond: no new official megas

Custom/fan-made megas that don't appear in the official lists are assigned
to the earliest game file where they appear in the data.
"""
import json
import os

# ---------------------------------------------------------------------------
# JSON helpers (reused from generate_split_pokedex_files.py)
# ---------------------------------------------------------------------------

def read_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        raw = f.read()
        return json.loads(raw[raw.index('{'):])


class CompactJSONEncoder(json.JSONEncoder):
    def __init__(self, *args, **kwargs):
        if kwargs.get("indent") is None:
            kwargs["indent"] = 4
        super().__init__(*args, **kwargs)
        self.indentation_level = 0

    def encode(self, o):
        if isinstance(o, list):
            return self._encode_list(o)
        if isinstance(o, dict):
            return self._encode_object(o)
        return json.dumps(
            o,
            skipkeys=self.skipkeys,
            ensure_ascii=self.ensure_ascii,
            check_circular=self.check_circular,
            allow_nan=self.allow_nan,
            sort_keys=self.sort_keys,
            indent=self.indent,
            separators=(self.item_separator, self.key_separator),
            default=self.default if hasattr(self, "default") else None,
        )

    def _encode_object(self, o):
        if not o:
            return "{}"
        elif self._put_dict_on_single_line(o):
            contents = ", ".join(f"{json.dumps(k)}: {self.encode(v)}" for k, v in o.items())
            return f"{{{contents}}}"
        self.indentation_level += 1
        output = [
            f"{self.indent_str}{json.dumps(k)}: {self.encode(v)}" for k, v in o.items()
        ]
        self.indentation_level -= 1
        return "{\n" + ",\n".join(output) + "\n" + self.indent_str + "}"

    def _put_dict_on_single_line(self, o):
        flat_dict = not any(isinstance(x, (dict, list)) for x in o.values())
        return len(o) == 3 and flat_dict

    def _encode_list(self, o):
        if self._put_list_on_single_line(o):
            return "[" + ", ".join(self.encode(el) for el in o) + "]"
        elif not o:
            return "[]"
        self.indentation_level += 1
        output = [self.indent_str + self.encode(el) for el in o]
        self.indentation_level -= 1
        return "[\n" + ",\n".join(output) + "\n" + self.indent_str + "]"

    def iterencode(self, o, **kwargs):
        return self.encode(o)

    def _put_list_on_single_line(self, o):
        return len(o) == 2 and isinstance(o[0], int) and isinstance(o[1], str)

    @property
    def indent_str(self) -> str:
        if isinstance(self.indent, int):
            return " " * (self.indentation_level * self.indent)
        elif isinstance(self.indent, str):
            return self.indentation_level * self.indent
        else:
            raise ValueError(f"indent must either be of type int or str (is: {type(self.indent)})")


def export_js(path, obj, var_name="mega_evolution_pokedex"):
    with open(path, 'w', encoding='utf-8') as f:
        out = json.dumps(obj, cls=CompactJSONEncoder, indent=4)
        f.write(f"export const {var_name} = {out}")


# ---------------------------------------------------------------------------
# Game files in chronological order (only games that can contain megas)
# ---------------------------------------------------------------------------
GAME_FILES = [
    ("X and Y",                  "pokedex/x_y.js"),
    ("Omega Ruby and Alpha Sapphire", "pokedex/omega_ruby_alpha_sapphire.js"),
    ("Sun and Moon",             "pokedex/sun_moon.js"),
    ("Ultra Sun and Ultra Moon", "pokedex/ultra_sun_ultra_moon.js"),
    ("Sword and Shield",         "pokedex/sword_shield.js"),
    ("Scarlet and Violet",       "pokedex/scarlet_violet.js"),
]

# ---------------------------------------------------------------------------
# Official mega evolution introduction mapping
# Maps mega species name -> game where it was officially introduced.
# Custom/fan-made megas not listed here will be assigned to the first game
# file where they appear in the data.
# ---------------------------------------------------------------------------
OFFICIAL_INTRODUCTIONS = {}

# X and Y - original 28 megas
_XY_MEGAS = [
    "Mega Venusaur", "Mega Charizard X", "Mega Charizard Y", "Mega Blastoise",
    "Mega Alakazam", "Mega Gengar", "Mega Kangaskhan", "Mega Pinsir",
    "Mega Gyarados", "Mega Aerodactyl", "Mega Mewtwo X", "Mega Mewtwo Y",
    "Mega Ampharos", "Mega Scizor", "Mega Heracross", "Mega Houndoom",
    "Mega Tyranitar", "Mega Blaziken", "Mega Gardevoir", "Mega Mawile",
    "Mega Aggron", "Mega Medicham", "Mega Manectric", "Mega Banette",
    "Mega Absol", "Mega Garchomp", "Mega Lucario", "Mega Abomasnow",
]
for name in _XY_MEGAS:
    OFFICIAL_INTRODUCTIONS[name] = "X and Y"

# Omega Ruby and Alpha Sapphire - 20 additional megas
_ORAS_MEGAS = [
    "Mega Beedrill", "Mega Pidgeot", "Mega Slowbro", "Mega Steelix",
    "Mega Sceptile", "Mega Swampert", "Mega Sableye", "Mega Sharpedo",
    "Mega Camerupt", "Mega Altaria", "Mega Glalie", "Mega Salamence",
    "Mega Metagross", "Mega Latias", "Mega Latios", "Mega Rayquaza",
    "Mega Lopunny", "Mega Gallade", "Mega Audino", "Mega Diancie",
]
for name in _ORAS_MEGAS:
    OFFICIAL_INTRODUCTIONS[name] = "Omega Ruby and Alpha Sapphire"


# ---------------------------------------------------------------------------
# Main logic
# ---------------------------------------------------------------------------
def is_mega(species_name):
    """Check if a species name is a mega evolution."""
    return species_name.startswith("Mega ")


def get_introduction_game(species_name, first_appearance_game):
    """
    Determine which game a mega was introduced in.
    Uses the official mapping if available, otherwise falls back to the
    first game where the mega appears in the data.
    """
    return OFFICIAL_INTRODUCTIONS.get(species_name, first_appearance_game)


def main():
    # Step 1: Scan all game files to find the first appearance of each mega
    first_appearance = {}  # species_name -> game_name
    game_data = {}         # game_name -> full pokedex dict

    for game_name, filepath in GAME_FILES:
        if not os.path.exists(filepath):
            print(f"  Skipping {filepath} (not found)")
            continue

        pokedex = read_json(filepath)
        game_data[game_name] = pokedex

        for species_name in pokedex:
            if is_mega(species_name) and species_name not in first_appearance:
                first_appearance[species_name] = game_name

    # Step 2: Determine which game each mega should be sourced from
    # and collect the mega data
    mega_pokedex = {}
    source_tracking = {}  # For reporting

    for species_name, first_game in sorted(first_appearance.items()):
        intro_game = get_introduction_game(species_name, first_game)

        # If the intro game doesn't have this mega in the data, fall back to
        # the first game where it actually appears
        if intro_game not in game_data or species_name not in game_data[intro_game]:
            intro_game = first_game

        mega_pokedex[species_name] = game_data[intro_game][species_name]

        if intro_game not in source_tracking:
            source_tracking[intro_game] = []
        source_tracking[intro_game].append(species_name)

    # Step 3: Write the output file
    output_path = "mega_evolution_pokedex.js"
    export_js(output_path, mega_pokedex)

    # Report
    print(f"Wrote {len(mega_pokedex)} mega evolutions to {output_path}")
    print()
    for game_name, megas in sorted(source_tracking.items(),
                                    key=lambda x: [g for g, _ in GAME_FILES].index(x[0])):
        print(f"  {game_name}: {len(megas)} megas")
        for m in sorted(megas):
            print(f"    - {m}")


if __name__ == "__main__":
    main()
