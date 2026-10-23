// Event Pokémon distributed in Generation IX (157 Pokémon), scraped from
// Bulbapedia's event distribution lists by scrape_event_pokemon.py.
// Structure: { channel/list page: { event: [ pokemon, ... ] } }.
// Species fields (national_dex_number .. weight) come from the pokedex/*.js entry
// named in pokedex_entry (types and dex number from the event itself); every field
// from event_name on describes the distributed Pokémon.

export const eventPokemon = {
    "Scarlet and Violet": {
        "Yuma Kinugawa's Hisuian Typhlosion": [
            {
                "species": "Typhlosion",
                "form": "Hisuian Form",
                "national_dex_number": 157,
                "base_stats": {
                    "hp": 73,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 119,
                    "special_defense": 85,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 240,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Frisk",
                "weight": 69.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Hisuian Typhlosion",
                "event_name": "Yuma Kinugawa's Hisuian Typhlosion",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "バクフーン",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Blaze",
                "held_item": "Choice Specs",
                "ball": "Cherish Ball",
                "ot": "キヌガク",
                "trainer_id": "260213",
                "moves": [
                    "Eruption",
                    "Shadow Ball",
                    "Heat Wave",
                    "Overheat"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 11,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 36,
                    "attack": null,
                    "defense": 4,
                    "special_attack": 214,
                    "special_defense": 28,
                    "speed": 228
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Fire",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 527,
                    "title": "キヌガク's Typhlosion Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: EU1C 26HE ATWA VE",
                        "language": null,
                        "location": null,
                        "date": "February 13 to 21, 2026",
                        "start_date": "2026-02-13",
                        "end_date": "2026-02-21"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Federico Camporesi's Whimsicott": [
            {
                "species": "Whimsicott",
                "form": null,
                "national_dex_number": 547,
                "base_stats": {
                    "hp": 60,
                    "attack": 67,
                    "defense": 85,
                    "special_attack": 77,
                    "special_defense": 75,
                    "speed": 116
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Grass",
                "type_2": "Fairy",
                "catch_rate": 75,
                "base_experience": 168,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Grass",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Prankster",
                    "Infiltrator"
                ],
                "hidden_ability": "Chlorophyll",
                "weight": 6.6,
                "pokedex_entry": "pokedex/scarlet_violet.js#Whimsicott",
                "event_name": "Federico Camporesi's Whimsicott",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Calm",
                "ability": "Prankster",
                "held_item": "Covert Cloak",
                "ball": "Cherish Ball",
                "ot": "Federico",
                "trainer_id": "251121",
                "moves": [
                    "Moonblast",
                    "Tailwind",
                    "Light Screen",
                    "Encore"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 3,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 252,
                    "attack": null,
                    "defense": 52,
                    "special_attack": null,
                    "special_defense": 206,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "Italian",
                "wonder_card": {
                    "id": 526,
                    "title": "Federico's Whimsicott Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: LA1C 26TA 1LW1 ND",
                        "language": null,
                        "location": null,
                        "date": "November 21 to 30, 2025",
                        "start_date": "2025-11-21",
                        "end_date": "2025-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Center Birthday Fidough": [
            {
                "species": "Fidough",
                "form": null,
                "national_dex_number": 926,
                "base_stats": {
                    "hp": 37,
                    "attack": 55,
                    "defense": 70,
                    "special_attack": 30,
                    "special_defense": 55,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 190,
                "base_experience": 62,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Own Tempo"
                ],
                "hidden_ability": "Klutz",
                "weight": 10.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Fidough",
                "event_name": "Pokémon Center Birthday Fidough",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Own Tempo",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "251101",
                "moves": [
                    "Celebrate",
                    "Baby-Doll Eyes",
                    "Play Rough",
                    "Charm"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 70,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2025 to January 31, 2027",
                        "start_date": "2025-11-01",
                        "end_date": "2027-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Paldea's Shiny Legendary Paradox Pokémon": [
            {
                "species": "Miraidon",
                "form": null,
                "national_dex_number": 1008,
                "base_stats": {
                    "hp": 100,
                    "attack": 85,
                    "defense": 100,
                    "special_attack": 135,
                    "special_defense": 115,
                    "speed": 135
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Dragon",
                "catch_rate": 3,
                "base_experience": 335,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Hadron Engine"
                ],
                "hidden_ability": null,
                "weight": 240.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Miraidon",
                "event_name": "Paldea's Shiny Legendary Paradox Pokémon",
                "level": 100,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Modest",
                "ability": "Hadron Engine",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "250926",
                "moves": [
                    "Electro Drift",
                    "Thunder",
                    "Overheat",
                    "Hyper Beam"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Electric",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1540,
                    "title": "Shiny Miraidon Gift"
                },
                "games": [
                    "Sun"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sun"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 26 to October 24, 2025",
                        "start_date": "2025-09-26",
                        "end_date": "2025-10-24"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Koraidon",
                "form": null,
                "national_dex_number": 1007,
                "base_stats": {
                    "hp": 100,
                    "attack": 135,
                    "defense": 115,
                    "special_attack": 85,
                    "special_defense": 100,
                    "speed": 135
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Dragon",
                "catch_rate": 3,
                "base_experience": 335,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Orichalcum Pulse"
                ],
                "hidden_ability": null,
                "weight": 303.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Koraidon",
                "event_name": "Paldea's Shiny Legendary Paradox Pokémon",
                "level": 100,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Orichalcum Pulse",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "250926",
                "moves": [
                    "Collision Course",
                    "Close Combat",
                    "Flare Blitz",
                    "Giga Impact"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 20,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fighting",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1540,
                    "title": "Shiny Koraidon Gift"
                },
                "games": [
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 26 to October 24, 2025",
                        "start_date": "2025-09-26",
                        "end_date": "2025-10-24"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Luca Ceribelli's Farigiraf": [
            {
                "species": "Farigiraf",
                "form": null,
                "national_dex_number": 981,
                "base_stats": {
                    "hp": 120,
                    "attack": 90,
                    "defense": 70,
                    "special_attack": 110,
                    "special_defense": 70,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 260,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Cud Chew",
                    "Armor Tail"
                ],
                "hidden_ability": "Sap Sipper",
                "weight": 160.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Farigiraf",
                "event_name": "Luca Ceribelli's Farigiraf",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Bold",
                "ability": "Armor Tail",
                "held_item": "Electric Seed",
                "ball": "Cherish Ball",
                "ot": "Luca",
                "trainer_id": "250815",
                "moves": [
                    "Psychic Noise",
                    "Foul Play",
                    "Helping Hand",
                    "Trick Room"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 7,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 204,
                    "attack": null,
                    "defense": 164,
                    "special_attack": 4,
                    "special_defense": 110,
                    "speed": 28
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "Italian",
                "wonder_card": {
                    "id": 525,
                    "title": "Luca's Farigiraf Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: W0RL DSAR M0RT A1L",
                        "language": null,
                        "location": null,
                        "date": "August 15 to 22, 2025",
                        "start_date": "2025-08-15",
                        "end_date": "2025-08-22"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "2025 Pokémon World Championships Toedscool": [
            {
                "species": "Toedscool",
                "form": null,
                "national_dex_number": 948,
                "base_stats": {
                    "hp": 40,
                    "attack": 40,
                    "defense": 35,
                    "special_attack": 50,
                    "special_defense": 100,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Ground",
                "type_2": "Grass",
                "catch_rate": 190,
                "base_experience": 67,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [
                    "Mycelium Might"
                ],
                "hidden_ability": null,
                "weight": 33.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Toedscool",
                "event_name": "2025 Pokémon World Championships Toedscool",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Mycelium Might",
                "held_item": "Black Glasses",
                "ball": "Cherish Ball",
                "ot": "Worlds25 / WCS25",
                "trainer_id": "250815",
                "moves": [
                    "Celebrate",
                    "Giga Drain",
                    "Magical Leaf",
                    "Spikes"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "WCS 2025",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "tera_type": "Ground",
                "origin_language": null,
                "wonder_card": {
                    "id": 524,
                    "title": "Worlds25’s Toedscool Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 14 to 29, 2025",
                        "start_date": "2025-08-14",
                        "end_date": "2025-08-29"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Paldea's Shiny Treasures of Ruin": [
            {
                "species": "Chi-Yu",
                "form": null,
                "national_dex_number": 1004,
                "base_stats": {
                    "hp": 55,
                    "attack": 80,
                    "defense": 80,
                    "special_attack": 135,
                    "special_defense": 120,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Fire",
                "catch_rate": 6,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Beads Of Ruin"
                ],
                "hidden_ability": null,
                "weight": 4.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Chi-Yu",
                "event_name": "Shiny Chi-Yu",
                "level": 75,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Modest",
                "ability": "Beads of Ruin",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "250919",
                "moves": [
                    "Heat Wave",
                    "Dark Pulse",
                    "Snarl",
                    "Flamethrower"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fire",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1548,
                    "title": "Shiny Chi-Yu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "September 19 to 30, 2025",
                        "start_date": "2025-09-19",
                        "end_date": "2025-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Ting-Lu",
                "form": null,
                "national_dex_number": 1003,
                "base_stats": {
                    "hp": 155,
                    "attack": 110,
                    "defense": 125,
                    "special_attack": 55,
                    "special_defense": 80,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 3,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Ground",
                "catch_rate": 6,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Vessel Of Ruin"
                ],
                "hidden_ability": null,
                "weight": 699.7,
                "pokedex_entry": "pokedex/scarlet_violet.js#Ting-Lu",
                "event_name": "Shiny Ting-Lu",
                "level": 75,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Impish",
                "ability": "Vessel of Ruin",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "250905",
                "moves": [
                    "Stomping Tantrum",
                    "Stone Edge",
                    "Snarl",
                    "Heavy Slam"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 20,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ground",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1546,
                    "title": "Shiny Ting-Lu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "September 5 to 30, 2025",
                        "start_date": "2025-09-05",
                        "end_date": "2025-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Chien-Pao",
                "form": null,
                "national_dex_number": 1002,
                "base_stats": {
                    "hp": 80,
                    "attack": 120,
                    "defense": 80,
                    "special_attack": 90,
                    "special_defense": 65,
                    "speed": 135
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 6,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Sword Of Ruin"
                ],
                "hidden_ability": null,
                "weight": 152.2,
                "pokedex_entry": "pokedex/scarlet_violet.js#Chien-Pao",
                "event_name": "Shiny Chien-Pao",
                "level": 75,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Sword of Ruin",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "250822",
                "moves": [
                    "Icicle Crash",
                    "Crunch",
                    "Sacred Sword",
                    "Ice Shard"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 20,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ice",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1544,
                    "title": "Shiny Chien-Pao Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "August 22 to September 30, 2025",
                        "start_date": "2025-08-22",
                        "end_date": "2025-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Wo-Chien",
                "form": null,
                "national_dex_number": 1001,
                "base_stats": {
                    "hp": 85,
                    "attack": 85,
                    "defense": 100,
                    "special_attack": 95,
                    "special_defense": 135,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 3,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Grass",
                "catch_rate": 6,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Tablets Of Ruin"
                ],
                "hidden_ability": null,
                "weight": 74.2,
                "pokedex_entry": "pokedex/scarlet_violet.js#Wo-Chien",
                "event_name": "Shiny Wo-Chien",
                "level": 75,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Calm",
                "ability": "Tablets of Ruin",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "250808",
                "moves": [
                    "Giga Drain",
                    "Dark Pulse",
                    "Snarl",
                    "Pollen Puff"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Grass",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1542,
                    "title": "Shiny Wo-Chien Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 30, 2025",
                        "start_date": "2025-08-08",
                        "end_date": "2025-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Ray Yamanaka's Amoonguss": [
            {
                "species": "Amoonguss",
                "form": null,
                "national_dex_number": 591,
                "base_stats": {
                    "hp": 114,
                    "attack": 85,
                    "defense": 70,
                    "special_attack": 85,
                    "special_defense": 80,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Poison",
                "catch_rate": 75,
                "base_experience": 162,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [
                    "Effect Spore"
                ],
                "hidden_ability": "Regenerator",
                "weight": 10.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Amoonguss",
                "event_name": "Ray Yamanaka's Amoonguss",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "モロバレル",
                "gender": "Male",
                "nature": "Relaxed",
                "ability": "Regenerator",
                "held_item": "Rocky Helmet",
                "ball": "Cherish Ball",
                "ot": "レイ",
                "trainer_id": "250621",
                "moves": [
                    "Spore",
                    "Sludge Bomb",
                    "Rage Powder",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": null,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 236,
                    "attack": null,
                    "defense": 156,
                    "special_attack": null,
                    "special_defense": 118,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 68,
                    "title": "レイ's Amoonguss Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "June 21 to September 30, 2025",
                        "start_date": "2025-06-21",
                        "end_date": "2025-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Hyuma Hara's Flutter Mane": [
            {
                "species": "Flutter Mane",
                "form": null,
                "national_dex_number": 987,
                "base_stats": {
                    "hp": 55,
                    "attack": 55,
                    "defense": 55,
                    "special_attack": 135,
                    "special_defense": 135,
                    "speed": 135
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 1,
                    "speed": 1
                },
                "type_1": "Ghost",
                "type_2": "Fairy",
                "catch_rate": 30,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Protosynthesis"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flutter Mane",
                "event_name": "Hyuma Hara's Flutter Mane",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ハバタクカミ",
                "gender": null,
                "nature": "Timid",
                "ability": "Protosynthesis",
                "held_item": "Booster Energy",
                "ball": "Cherish Ball",
                "ot": "ヒュウマ",
                "trainer_id": "250621",
                "moves": [
                    "Moonblast",
                    "Icy Wind",
                    "Trick Room",
                    "Taunt"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 22,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 150,
                    "attack": null,
                    "defense": 236,
                    "special_attack": 116,
                    "special_defense": 4,
                    "speed": 4
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 67,
                    "title": "ヒュウマ's Flutter Mane Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 24MH ABAT AKUK AM1",
                        "language": null,
                        "location": null,
                        "date": "June 21 to 22, 2025",
                        "start_date": "2025-06-21",
                        "end_date": "2025-06-22"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Wolfe Glick's Incineroar": [
            {
                "species": "Incineroar",
                "form": null,
                "national_dex_number": 727,
                "base_stats": {
                    "hp": 95,
                    "attack": 115,
                    "defense": 90,
                    "special_attack": 80,
                    "special_defense": 90,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Dark",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Intimidate",
                "weight": 83.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Incineroar",
                "event_name": "Wolfe Glick's Incineroar",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Careful",
                "ability": "Intimidate",
                "held_item": "Safety Goggles",
                "ball": "Cherish Ball",
                "ot": "Wolfe",
                "trainer_id": "250613",
                "moves": [
                    "Protect",
                    "Parting Shot",
                    "Flare Blitz",
                    "Fake Out"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 15,
                    "special_defense": 31,
                    "speed": 29
                },
                "evs": {
                    "hp": 252,
                    "attack": null,
                    "defense": 124,
                    "special_attack": null,
                    "special_defense": 132,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Bug",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 523,
                    "title": "Wolfe's Incineroar Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: NA1C 25C0 NPER 1SH",
                        "language": null,
                        "location": null,
                        "date": "June 13 to 20, 2025",
                        "start_date": "2025-06-13",
                        "end_date": "2025-06-20"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Juyoung Hong's Porygon2": [
            {
                "species": "Porygon2",
                "form": null,
                "national_dex_number": 233,
                "base_stats": {
                    "hp": 85,
                    "attack": 80,
                    "defense": 90,
                    "special_attack": 105,
                    "special_defense": 95,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 180,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Trace",
                    "Download"
                ],
                "hidden_ability": "Analytic",
                "weight": 32.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Porygon2",
                "event_name": "Juyoung Hong's Porygon2",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quiet",
                "ability": "Download",
                "held_item": "Eviolite",
                "ball": "Cherish Ball",
                "ot": "홍주영",
                "trainer_id": "250607",
                "moves": [
                    "Tera Blast",
                    "Ice Beam",
                    "Recover",
                    "Trick Room"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 246,
                    "attack": null,
                    "defense": 132,
                    "special_attack": null,
                    "special_defense": 132,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1020,
                    "title": "홍주영's Porygon2 Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: N01S UPP0 RTPT C24",
                        "language": null,
                        "location": null,
                        "date": "June 7 to 9, 2025",
                        "start_date": "2025-06-07",
                        "end_date": "2025-06-09"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Town 2025 Ditto": [
            {
                "species": "Ditto",
                "form": null,
                "national_dex_number": 132,
                "base_stats": {
                    "hp": 48,
                    "attack": 48,
                    "defense": 48,
                    "special_attack": 48,
                    "special_defense": 48,
                    "speed": 48
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 35,
                "base_experience": 101,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ditto",
                "egg_group_2": "Ditto",
                "abilities": [
                    "Limber"
                ],
                "hidden_ability": "Imposter",
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Ditto",
                "event_name": "Pokémon Town 2025 Ditto",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Bashful",
                "ability": "Limber",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "포켓몬타운",
                "trainer_id": "250425",
                "moves": [
                    "Transform"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "mark": "Excited",
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1019,
                    "title": "Ditto Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "April 25 to June 30, 2025",
                        "start_date": "2025-04-25",
                        "end_date": "2025-06-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Wei Chyr's Rillaboom": [
            {
                "species": "Rillaboom",
                "form": null,
                "national_dex_number": 812,
                "base_stats": {
                    "hp": 100,
                    "attack": 125,
                    "defense": 90,
                    "special_attack": 60,
                    "special_defense": 70,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 265,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Grassy Surge",
                "weight": 90.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Rillaboom",
                "event_name": "Wei Chyr's Rillaboom",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Grassy Surge",
                "held_item": "Choice Band",
                "ball": "Cherish Ball",
                "ot": "Wei Chyr",
                "trainer_id": "250419",
                "moves": [
                    "Grassy Glide",
                    "Wood Hammer",
                    "U-turn",
                    "High Horsepower"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 110,
                    "attack": 252,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 148
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Grass",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 66,
                    "title": "Wei Chyr's Rillaboom Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: R1LL AB00 M202 4TW",
                        "language": null,
                        "location": null,
                        "date": "April 19 to July 31, 2025",
                        "start_date": "2025-04-19",
                        "end_date": "2025-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Marco Silva's Jumpluff": [
            {
                "species": "Jumpluff",
                "form": null,
                "national_dex_number": 189,
                "base_stats": {
                    "hp": 75,
                    "attack": 55,
                    "defense": 70,
                    "special_attack": 55,
                    "special_defense": 95,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Grass",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 207,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Fairy",
                "egg_group_2": "Grass",
                "abilities": [
                    "Chlorophyll",
                    "Leaf Guard"
                ],
                "hidden_ability": "Infiltrator",
                "weight": 3.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Jumpluff",
                "event_name": "Marco Silva's Jumpluff",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Timid",
                "ability": "Chlorophyll",
                "held_item": "Covert Cloak",
                "ball": "Cherish Ball",
                "ot": "Marco",
                "trainer_id": "250221",
                "moves": [
                    "Sleep Powder",
                    "Sunny Day",
                    "Tailwind",
                    "Rage Powder"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 25,
                    "defense": 31,
                    "special_attack": 28,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 164,
                    "attack": null,
                    "defense": 150,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 196
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "Italian",
                "wonder_card": {
                    "id": 519,
                    "title": "Marco's Jumpluff Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: EU1C 25SU NNYD AY",
                        "language": null,
                        "location": null,
                        "date": "February 21 to 28, 2025",
                        "start_date": "2025-02-21",
                        "end_date": "2025-02-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Day 2025 Eevee": [
            {
                "species": "Eevee",
                "form": null,
                "national_dex_number": 133,
                "base_stats": {
                    "hp": 55,
                    "attack": 55,
                    "defense": 50,
                    "special_attack": 45,
                    "special_defense": 65,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 65,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Run Away",
                    "Adaptability"
                ],
                "hidden_ability": "Anticipation",
                "weight": 6.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Eevee",
                "event_name": "Pokémon Day 2025 Eevee",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Adaptability",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "POKEMONDAY25",
                "trainer_id": "250227",
                "moves": [
                    "Hyper Voice",
                    "Swift",
                    "Sunny Day",
                    "Tera Blast"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Flying",
                "origin_language": null,
                "wonder_card": {
                    "id": 514,
                    "title": "Flying Tera Type Eevee Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 7 to July 1, 2025",
                        "start_date": "2025-02-07",
                        "end_date": "2025-07-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Sir Aaron's Lucario": [
            {
                "species": "Lucario",
                "form": null,
                "national_dex_number": 448,
                "base_stats": {
                    "hp": 70,
                    "attack": 110,
                    "defense": 70,
                    "special_attack": 115,
                    "special_defense": 70,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Steel",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": "Justified",
                "weight": 54.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Lucario",
                "event_name": "Sir Aaron's Lucario",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "아론",
                "trainer_id": "250122",
                "moves": [
                    "Aura Sphere",
                    "Extreme Speed",
                    "Heal Pulse",
                    "Detect"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "mark": "Charismatic",
                "tera_type": "Fighting",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1010,
                    "title": "아론's Lucario Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 22 to March 31, 2025",
                        "start_date": "2025-01-22",
                        "end_date": "2025-03-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "The Great Pokémon Get Operation 2024 Pokémon": [
            {
                "species": "Keldeo",
                "form": null,
                "national_dex_number": 647,
                "base_stats": {
                    "hp": 91,
                    "attack": 72,
                    "defense": 90,
                    "special_attack": 129,
                    "special_defense": 90,
                    "speed": 108
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Fighting",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Justified"
                ],
                "hidden_ability": null,
                "weight": 48.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Keldeo",
                "event_name": "Keldeo",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Docile",
                "ability": "Justified",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "대작전",
                "trainer_id": "241122",
                "moves": [
                    "Retaliate",
                    "Aqua Tail",
                    "Take Down",
                    "Sacred Sword"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fighting",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1011,
                    "title": "Mythical Pokémon Keldeo Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2024 to May 31, 2025",
                        "start_date": "2024-11-22",
                        "end_date": "2025-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Zarude",
                "form": null,
                "national_dex_number": 893,
                "base_stats": {
                    "hp": 105,
                    "attack": 120,
                    "defense": 105,
                    "special_attack": 70,
                    "special_defense": 95,
                    "speed": 105
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Grass",
                "catch_rate": 3,
                "base_experience": 300,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Leaf Guard"
                ],
                "hidden_ability": null,
                "weight": 70.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Zarude",
                "event_name": "Zarude",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quirky",
                "ability": "Leaf Guard",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "대작전",
                "trainer_id": "241122",
                "moves": [
                    "Scary Face",
                    "Grass Knot",
                    "Bite",
                    "U-turn"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dark",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1012,
                    "title": "Mythical Pokémon Zarude Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2024 to May 31, 2025",
                        "start_date": "2024-11-22",
                        "end_date": "2025-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Deoxys",
                "form": null,
                "national_dex_number": 386,
                "base_stats": {
                    "hp": 50,
                    "attack": 150,
                    "defense": 50,
                    "special_attack": 150,
                    "special_defense": 50,
                    "speed": 150
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 60.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Deoxys",
                "event_name": "Deoxys",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Serious",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "대작전",
                "trainer_id": "241122",
                "moves": [
                    "Psychic",
                    "Gravity",
                    "Skill Swap",
                    "Zen Headbutt"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Psychic",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1013,
                    "title": "Mythical Pokémon Deoxys Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2024 to May 31, 2025",
                        "start_date": "2024-11-22",
                        "end_date": "2025-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Get Large-scale Campaign 2024 Pokémon": [
            {
                "species": "Keldeo",
                "form": null,
                "national_dex_number": 647,
                "base_stats": {
                    "hp": 91,
                    "attack": 72,
                    "defense": 90,
                    "special_attack": 129,
                    "special_defense": 90,
                    "speed": 108
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Fighting",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Justified"
                ],
                "hidden_ability": null,
                "weight": 48.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Keldeo",
                "event_name": "Keldeo",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Docile",
                "ability": "Justified",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "だいさくせん",
                "trainer_id": "241122",
                "moves": [
                    "Retaliate",
                    "Aqua Tail",
                    "Take Down",
                    "Sacred Sword"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fighting",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 54,
                    "title": "Mythical Pokémon Keldeo Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2024 to May 31, 2025",
                        "start_date": "2024-11-22",
                        "end_date": "2025-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Zarude",
                "form": null,
                "national_dex_number": 893,
                "base_stats": {
                    "hp": 105,
                    "attack": 120,
                    "defense": 105,
                    "special_attack": 70,
                    "special_defense": 95,
                    "speed": 105
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Grass",
                "catch_rate": 3,
                "base_experience": 300,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Leaf Guard"
                ],
                "hidden_ability": null,
                "weight": 70.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Zarude",
                "event_name": "Zarude",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quirky",
                "ability": "Leaf Guard",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "だいさくせん",
                "trainer_id": "241122",
                "moves": [
                    "Scary Face",
                    "Grass Knot",
                    "Bite",
                    "U-turn"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dark",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 55,
                    "title": "Mythical Pokémon Zarude Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2024 to May 31, 2025",
                        "start_date": "2024-11-22",
                        "end_date": "2025-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Deoxys",
                "form": null,
                "national_dex_number": 386,
                "base_stats": {
                    "hp": 50,
                    "attack": 150,
                    "defense": 50,
                    "special_attack": 150,
                    "special_defense": 50,
                    "speed": 150
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 60.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Deoxys",
                "event_name": "Deoxys",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Serious",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "だいさくせん",
                "trainer_id": "241122",
                "moves": [
                    "Psychic",
                    "Gravity",
                    "Skill Swap",
                    "Zen Headbutt"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Psychic",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 56,
                    "title": "Mythical Pokémon Deoxys Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2024 to May 31, 2025",
                        "start_date": "2024-11-22",
                        "end_date": "2025-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Patrick Connors's Pelipper": [
            {
                "species": "Pelipper",
                "form": null,
                "national_dex_number": 279,
                "base_stats": {
                    "hp": 60,
                    "attack": 50,
                    "defense": 100,
                    "special_attack": 95,
                    "special_defense": 70,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 2,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 154,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Flying",
                "abilities": [
                    "Keen Eye",
                    "Drizzle"
                ],
                "hidden_ability": "Rain Dish",
                "weight": 28.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pelipper",
                "event_name": "Patrick Connors's Pelipper",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Drizzle",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "Patrick&ZeroWidthSpace;",
                "trainer_id": "241115",
                "moves": [
                    "Protect",
                    "Weather Ball",
                    "Hurricane",
                    "Wide Guard"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 8,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 12,
                    "attack": null,
                    "defense": 4,
                    "special_attack": 238,
                    "special_defense": 4,
                    "speed": 252
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Ghost",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 513,
                    "title": "Patrick&ZeroWidthSpace;'s Pelipper Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: W1DE GUAR DLA1 C25",
                        "language": null,
                        "location": null,
                        "date": "November 15 to 22, 2024",
                        "start_date": "2024-11-15",
                        "end_date": "2024-11-22"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Center Birthday Tandemaus": [
            {
                "species": "Tandemaus",
                "form": null,
                "national_dex_number": 924,
                "base_stats": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 45,
                    "special_attack": 40,
                    "special_defense": 45,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 61,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 50,
                "growth_rate": "Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Run Away",
                    "Pickup"
                ],
                "hidden_ability": "Own Tempo",
                "weight": 1.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Tandemaus",
                "event_name": "Pokémon Center Birthday Tandemaus",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Own Tempo",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "241101",
                "moves": [
                    "Celebrate",
                    "Tera Blast",
                    "Baby-Doll Eyes",
                    "Echoed Voice"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 62,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2024 to January 31, 2026",
                        "start_date": "2024-11-01",
                        "end_date": "2026-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Tomoya Ogawa's Sylveon": [
            {
                "species": "Sylveon",
                "form": null,
                "national_dex_number": 700,
                "base_stats": {
                    "hp": 95,
                    "attack": 65,
                    "defense": 65,
                    "special_attack": 110,
                    "special_defense": 130,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Cute Charm"
                ],
                "hidden_ability": "Pixilate",
                "weight": 23.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Sylveon",
                "event_name": "Tomoya Ogawa's Sylveon",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Pixilate",
                "held_item": "Choice Specs",
                "ball": "Cherish Ball",
                "ot": "トモヤ",
                "trainer_id": "240816",
                "moves": [
                    "Hyper Voice",
                    "Tera Blast",
                    "Hyper Beam",
                    "Sleep Talk"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 126,
                    "attack": null,
                    "defense": 180,
                    "special_attack": 172,
                    "special_defense": 4,
                    "speed": 28
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Fire",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 512,
                    "title": "トモヤ's Sylveon Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: SLEE PTAL KW0R LDS",
                        "language": null,
                        "location": null,
                        "date": "August 16 to 19, 2024",
                        "start_date": "2024-08-16",
                        "end_date": "2024-08-19"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "2024 Pokémon World Championships Steenee": [
            {
                "species": "Steenee",
                "form": null,
                "national_dex_number": 762,
                "base_stats": {
                    "hp": 52,
                    "attack": 40,
                    "defense": 48,
                    "special_attack": 40,
                    "special_defense": 48,
                    "speed": 62
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 120,
                "base_experience": 102,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [
                    "Leaf Guard",
                    "Oblivious"
                ],
                "hidden_ability": "Sweet Veil",
                "weight": 8.2,
                "pokedex_entry": "pokedex/scarlet_violet.js#Steenee",
                "event_name": "2024 Pokémon World Championships Steenee",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Random",
                "ability": "Leaf Guard",
                "held_item": "Safety Goggles",
                "ball": "Cherish Ball",
                "ot": "Worlds24 / WCS24",
                "trainer_id": "240816",
                "moves": [
                    "Celebrate",
                    "Sunny Day",
                    "Splash",
                    "Dazzling Gleam"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "WCS 2024",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "tera_type": "Water",
                "origin_language": null,
                "wonder_card": {
                    "id": 511,
                    "title": "Steenee with Celebrate Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 15 to 30, 2024",
                        "start_date": "2024-08-15",
                        "end_date": "2024-08-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Roy's Fuecoco": [
            {
                "species": "Fuecoco",
                "form": null,
                "national_dex_number": 909,
                "base_stats": {
                    "hp": 67,
                    "attack": 45,
                    "defense": 59,
                    "special_attack": 63,
                    "special_defense": 40,
                    "speed": 36
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Unaware",
                "weight": 9.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Fuecoco",
                "event_name": "Roy's Fuecoco",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Blaze",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Roy / Rory / Rhod / Rod / ロイ / 로드 / 罗伊 / 羅伊",
                "trainer_id": "230512",
                "moves": [
                    "Tackle",
                    "Ember"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic",
                    "Partner"
                ],
                "tera_type": "Fire",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1537,
                    "title": "Roy's Fuecoco Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 909T EAMU P06",
                        "language": null,
                        "location": null,
                        "date": "July 24, 2024 to January 31, 2025",
                        "start_date": "2024-07-24",
                        "end_date": "2025-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "PokéDoko Eevee": [
            {
                "species": "Eevee",
                "form": null,
                "national_dex_number": 133,
                "base_stats": {
                    "hp": 55,
                    "attack": 55,
                    "defense": 50,
                    "special_attack": 45,
                    "special_defense": 65,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 65,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Run Away",
                    "Adaptability"
                ],
                "hidden_ability": "Anticipation",
                "weight": 6.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Eevee",
                "event_name": "PokéDoko Eevee",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Run Away",
                    "Adaptability"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Helping Hand",
                    "Covet",
                    "Sand Attack",
                    "Quick Attack"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon event",
                "fateful_encounter": true,
                "ribbons": [],
                "mark": "Vigor",
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 50,
                    "title": "Eevee Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "July 14 to September 30, 2024",
                        "start_date": "2024-07-14",
                        "end_date": "2024-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Nils Dunlop's Porygon2": [
            {
                "species": "Porygon2",
                "form": null,
                "national_dex_number": 233,
                "base_stats": {
                    "hp": 85,
                    "attack": 80,
                    "defense": 90,
                    "special_attack": 105,
                    "special_defense": 95,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 180,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Trace",
                    "Download"
                ],
                "hidden_ability": "Analytic",
                "weight": 32.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Porygon2",
                "event_name": "Nils Dunlop's Porygon2",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quiet",
                "ability": "Download",
                "held_item": "Eviolite",
                "ball": "Cherish Ball",
                "ot": "Nils",
                "trainer_id": "240607",
                "moves": [
                    "Tera Blast",
                    "Ice Beam",
                    "Recover",
                    "Trick Room"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 252,
                    "attack": 4,
                    "defense": 126,
                    "special_attack": 92,
                    "special_defense": 36,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Flying",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 510,
                    "title": "Nils's Porygon2 Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: NA1C TR1C KR00 M",
                        "language": null,
                        "location": null,
                        "date": "June 7 to 10, 2024",
                        "start_date": "2024-06-07",
                        "end_date": "2024-06-10"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Kaito Arii's Talonflame": [
            {
                "species": "Talonflame",
                "form": null,
                "national_dex_number": 663,
                "base_stats": {
                    "hp": 78,
                    "attack": 81,
                    "defense": 71,
                    "special_attack": 74,
                    "special_defense": 69,
                    "speed": 126
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Flame Body"
                ],
                "hidden_ability": "Gale Wings",
                "weight": 24.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Talonflame",
                "event_name": "Kaito Arii's Talonflame",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Gale Wings",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ナーク",
                "trainer_id": "240601",
                "moves": [
                    "Acrobatics",
                    "Tailwind",
                    "Protect",
                    "Quick Guard"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 158,
                    "attack": 252,
                    "defense": 4,
                    "special_attack": null,
                    "special_defense": 4,
                    "speed": 92
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Ghost",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 49,
                    "title": "ナーク's Talonflame Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: F1AR R0W2 3MAS TER",
                        "language": null,
                        "location": null,
                        "date": "June 1 to 2, 2024",
                        "start_date": "2024-06-01",
                        "end_date": "2024-06-02"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Dot's Quaxly": [
            {
                "species": "Quaxly",
                "form": null,
                "national_dex_number": 912,
                "base_stats": {
                    "hp": 55,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 50,
                    "special_defense": 45,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Moxie",
                "weight": 6.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Quaxly",
                "event_name": "Dot's Quaxly",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Serious",
                "ability": "Torrent",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Dot / Doti / ドット / 도트 / 点点 / 小點",
                "trainer_id": "230804",
                "moves": [
                    "Pound",
                    "Water Gun"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 29,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic",
                    "Partner"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1536,
                    "title": "Dot's Quaxly Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: D0T1 STPA RTNE R",
                        "language": null,
                        "location": null,
                        "date": "May 19 to November 30, 2024",
                        "start_date": "2024-05-19",
                        "end_date": "2024-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Melvin Keh's Gyarados": [
            {
                "species": "Gyarados",
                "form": null,
                "national_dex_number": 130,
                "base_stats": {
                    "hp": 95,
                    "attack": 125,
                    "defense": 79,
                    "special_attack": 60,
                    "special_defense": 100,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Intimidate"
                ],
                "hidden_ability": "Moxie",
                "weight": 235.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gyarados",
                "event_name": "Melvin Keh's Gyarados",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Careful",
                "ability": "Intimidate",
                "held_item": "Aguav Berry",
                "ball": "Cherish Ball",
                "ot": "Sophia",
                "trainer_id": "240512",
                "moves": [
                    "Waterfall",
                    "Thunder Wave",
                    "Taunt",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 252,
                    "attack": 20,
                    "defense": 30,
                    "special_attack": null,
                    "special_defense": 156,
                    "speed": 52
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Steel",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 52,
                    "title": "Sophia's Gyarados Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GYAR AD0S 2023 SG",
                        "language": null,
                        "location": null,
                        "date": "May 12 to June 30, 2024",
                        "start_date": "2024-05-12",
                        "end_date": "2024-06-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Shin Yeo-myeong's Flutter Mane": [
            {
                "species": "Flutter Mane",
                "form": null,
                "national_dex_number": 987,
                "base_stats": {
                    "hp": 55,
                    "attack": 55,
                    "defense": 55,
                    "special_attack": 135,
                    "special_defense": 135,
                    "speed": 135
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 1,
                    "speed": 1
                },
                "type_1": "Ghost",
                "type_2": "Fairy",
                "catch_rate": 30,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Protosynthesis"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flutter Mane",
                "event_name": "Shin Yeo-myeong's Flutter Mane",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Timid",
                "ability": "Protosynthesis",
                "held_item": "Choice Specs",
                "ball": "Cherish Ball",
                "ot": "신여명",
                "trainer_id": "240505",
                "moves": [
                    "Shadow Ball",
                    "Dazzling Gleam",
                    "Moonblast",
                    "Thunderbolt"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": null,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 20,
                    "attack": null,
                    "defense": 36,
                    "special_attack": 196,
                    "special_defense": 4,
                    "speed": 252
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1008,
                    "title": "신여명's Flutter Mane Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 987W 1THS PECS",
                        "language": null,
                        "location": null,
                        "date": "May 5 to 7, 2024",
                        "start_date": "2024-05-05",
                        "end_date": "2024-05-07"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Marco Silva's Iron Hands": [
            {
                "species": "Iron Hands",
                "form": null,
                "national_dex_number": 992,
                "base_stats": {
                    "hp": 154,
                    "attack": 140,
                    "defense": 108,
                    "special_attack": 50,
                    "special_defense": 68,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Electric",
                "catch_rate": 50,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Quark Drive"
                ],
                "hidden_ability": null,
                "weight": 380.7,
                "pokedex_entry": "pokedex/scarlet_violet.js#Iron Hands",
                "event_name": "Marco Silva's Iron Hands",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Quark Drive",
                "held_item": "Assault Vest",
                "ball": "Cherish Ball",
                "ot": "Marco",
                "trainer_id": "240405",
                "moves": [
                    "Drain Punch",
                    "Volt Switch",
                    "Wild Charge",
                    "Fake Out"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 124,
                    "attack": 76,
                    "defense": 4,
                    "special_attack": null,
                    "special_defense": 252,
                    "speed": 52
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion",
                    "Partner"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "Italian",
                "wonder_card": {
                    "id": 509,
                    "title": "Marco's Iron Hands Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: FAKE 0UTE U1C",
                        "language": null,
                        "location": null,
                        "date": "April 5 to 8, 2024",
                        "start_date": "2024-04-05",
                        "end_date": "2024-04-08"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Liko's Sprigatito": [
            {
                "species": "Sprigatito",
                "form": null,
                "national_dex_number": 906,
                "base_stats": {
                    "hp": 40,
                    "attack": 61,
                    "defense": 54,
                    "special_attack": 45,
                    "special_defense": 45,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Protean",
                "weight": 4.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Sprigatito",
                "event_name": "Liko's Sprigatito",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Quirky",
                "ability": "Overgrow",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Liko / リコ / 리코 / 莉可",
                "trainer_id": "230414",
                "moves": [
                    "Scratch",
                    "Leafage"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 29,
                    "speed": 20
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic",
                    "Partner"
                ],
                "tera_type": "Grass",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1535,
                    "title": "Liko's Sprigatito Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: L1K0 W1TH 906",
                        "language": null,
                        "location": null,
                        "date": "March 15 to September 30, 2024",
                        "start_date": "2024-03-15",
                        "end_date": "2024-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "YOASOBI's Pawmot": [
            {
                "species": "Pawmot",
                "form": null,
                "national_dex_number": 923,
                "base_stats": {
                    "hp": 70,
                    "attack": 115,
                    "defense": 70,
                    "special_attack": 70,
                    "special_defense": 60,
                    "speed": 105
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 245,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Volt Absorb",
                    "Natural Cure"
                ],
                "hidden_ability": "Iron Fist",
                "weight": 41.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pawmot",
                "event_name": "YOASOBI's Pawmot",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Jolly",
                "ability": "Volt Absorb",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "YOASOBI / ヨアソビ / 요아소비 / 夜游 / 夜遊",
                "trainer_id": "231118",
                "moves": [
                    "Double Shock",
                    "Discharge",
                    "Quick Attack",
                    "Nuzzle"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Electric",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1534,
                    "title": "YOASOBI's Pawmot"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: Y0AS 0B1B 1R1B 1R1",
                        "language": null,
                        "location": null,
                        "date": "March 13, 2024 to February 28, 2025",
                        "start_date": "2024-03-13",
                        "end_date": "2025-02-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Project Kabigon Toissho Snorlax": [
            {
                "species": "Snorlax",
                "form": null,
                "national_dex_number": 143,
                "base_stats": {
                    "hp": 160,
                    "attack": 110,
                    "defense": 65,
                    "special_attack": 65,
                    "special_defense": 110,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 25,
                "base_experience": 189,
                "gender_ratio": 31,
                "egg_cycles": 40,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Monster",
                "abilities": [
                    "Immunity",
                    "Thick Fat"
                ],
                "hidden_ability": "Gluttony",
                "weight": 460.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Snorlax",
                "event_name": "Project Kabigon Toissho Snorlax",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Lax",
                "ability": "Gluttony",
                "held_item": null,
                "ball": "Dream Ball",
                "ot": "プロカビ",
                "trainer_id": "240223",
                "moves": [
                    "Rest",
                    "Block",
                    "Yawn",
                    "Body Slam"
                ],
                "ivs": {
                    "hp": 22,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "mark": "Uncommon",
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 48,
                    "title": "プロカビ's Snorlax"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 23 to March 31, 2024",
                        "start_date": "2024-02-23",
                        "end_date": "2024-03-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "CoroCoro Paradox Pokémon": [
            {
                "species": "Scream Tail",
                "form": null,
                "national_dex_number": 985,
                "base_stats": {
                    "hp": 115,
                    "attack": 65,
                    "defense": 99,
                    "special_attack": 65,
                    "special_defense": 115,
                    "speed": 111
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Psychic",
                "catch_rate": 50,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Protosynthesis"
                ],
                "hidden_ability": null,
                "weight": 8.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Scream Tail",
                "event_name": "CoroCoro Paradox Pokémon",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Protosynthesis",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Hyper Voice",
                    "Psychic Fangs",
                    "Crunch",
                    "Wish"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fairy",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 38,
                    "title": "Scream Tail Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 15, 2024 to March 14, 2024",
                        "start_date": "2024-01-15",
                        "end_date": "2024-03-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Brute Bonnet",
                "form": null,
                "national_dex_number": 986,
                "base_stats": {
                    "hp": 111,
                    "attack": 127,
                    "defense": 99,
                    "special_attack": 79,
                    "special_defense": 99,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Dark",
                "catch_rate": 50,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Protosynthesis"
                ],
                "hidden_ability": null,
                "weight": 21.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Brute Bonnet",
                "event_name": "CoroCoro Paradox Pokémon",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Protosynthesis",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Giga Drain",
                    "Sucker Punch",
                    "Spore",
                    "Ingrain"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Grass",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 39,
                    "title": "Brute Bonnet Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 15, 2024 to March 14, 2024",
                        "start_date": "2024-01-15",
                        "end_date": "2024-03-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Flutter Mane",
                "form": null,
                "national_dex_number": 987,
                "base_stats": {
                    "hp": 55,
                    "attack": 55,
                    "defense": 55,
                    "special_attack": 135,
                    "special_defense": 135,
                    "speed": 135
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 1,
                    "speed": 1
                },
                "type_1": "Ghost",
                "type_2": "Fairy",
                "catch_rate": 30,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Protosynthesis"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flutter Mane",
                "event_name": "CoroCoro Paradox Pokémon",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Protosynthesis",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Mystical Fire",
                    "Power Gem",
                    "Psyshock",
                    "Phantom Force"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ghost",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 40,
                    "title": "Flutter Mane Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 15, 2024 to March 14, 2024",
                        "start_date": "2024-01-15",
                        "end_date": "2024-03-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Iron Hands",
                "form": null,
                "national_dex_number": 992,
                "base_stats": {
                    "hp": 154,
                    "attack": 140,
                    "defense": 108,
                    "special_attack": 50,
                    "special_defense": 68,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Electric",
                "catch_rate": 50,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Quark Drive"
                ],
                "hidden_ability": null,
                "weight": 380.7,
                "pokedex_entry": "pokedex/scarlet_violet.js#Iron Hands",
                "event_name": "CoroCoro Paradox Pokémon",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Quark Drive",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Charge",
                    "Wild Charge",
                    "Close Combat",
                    "Detect"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fighting",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 41,
                    "title": "Iron Hands Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 15, 2024 to March 14, 2024",
                        "start_date": "2024-01-15",
                        "end_date": "2024-03-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Iron Jugulis",
                "form": null,
                "national_dex_number": 993,
                "base_stats": {
                    "hp": 94,
                    "attack": 80,
                    "defense": 86,
                    "special_attack": 122,
                    "special_defense": 80,
                    "speed": 108
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Flying",
                "catch_rate": 30,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Quark Drive"
                ],
                "hidden_ability": null,
                "weight": 111.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Iron Jugulis",
                "event_name": "CoroCoro Paradox Pokémon",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Quark Drive",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Hyper Voice",
                    "Air Slash",
                    "Knock Off",
                    "Dark Pulse"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dark",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 42,
                    "title": "Iron Jugulis Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 15, 2024 to March 14, 2024",
                        "start_date": "2024-01-15",
                        "end_date": "2024-03-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Iron Thorns",
                "form": null,
                "national_dex_number": 995,
                "base_stats": {
                    "hp": 100,
                    "attack": 134,
                    "defense": 110,
                    "special_attack": 70,
                    "special_defense": 84,
                    "speed": 72
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Rock",
                "type_2": "Electric",
                "catch_rate": 30,
                "base_experience": 285,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Quark Drive"
                ],
                "hidden_ability": null,
                "weight": 303.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Iron Thorns",
                "event_name": "CoroCoro Paradox Pokémon",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Quark Drive",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Sandstorm",
                    "Wild Charge",
                    "Pin Missile",
                    "Earthquake"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Rock",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 43,
                    "title": "Iron Thorns Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 15, 2024 to March 14, 2024",
                        "start_date": "2024-01-15",
                        "end_date": "2024-03-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Winter Festa 2023 Baxcalibur": [
            {
                "species": "Baxcalibur",
                "form": null,
                "national_dex_number": 998,
                "base_stats": {
                    "hp": 115,
                    "attack": 145,
                    "defense": 92,
                    "special_attack": 75,
                    "special_defense": 86,
                    "speed": 87
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Ice",
                "catch_rate": 10,
                "base_experience": 300,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "Dragon",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Thermal Exchange"
                ],
                "hidden_ability": "Ice Body",
                "weight": 210.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Baxcalibur",
                "event_name": "Winter Festa 2023 Baxcalibur",
                "level": 54,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Thermal Exchange",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "윈터페스타",
                "trainer_id": "240101",
                "moves": [
                    "Glaive Rush",
                    "Scale Shot",
                    "Icicle Spear",
                    "Ice Shard"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ice",
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1007,
                    "title": "Baxcalibur Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "December 30, 2023 to February 10, 2024",
                        "start_date": "2023-12-30",
                        "end_date": "2024-02-10"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "CoroCoro Roaring Moon & Iron Valiant": [
            {
                "species": "Roaring Moon",
                "form": null,
                "national_dex_number": 1005,
                "base_stats": {
                    "hp": 105,
                    "attack": 139,
                    "defense": 71,
                    "special_attack": 55,
                    "special_defense": 101,
                    "speed": 119
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Dark",
                "catch_rate": 10,
                "base_experience": 295,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Protosynthesis"
                ],
                "hidden_ability": null,
                "weight": 380.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Roaring Moon",
                "event_name": "CoroCoro Roaring Moon & Iron Valiant",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Protosynthesis",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Night Slash",
                    "Dragon Dance",
                    "Dragon Rush",
                    "Fly"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dragon",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 36,
                    "title": "Roaring Moon Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "December 15, 2023 to February 14, 2024",
                        "start_date": "2023-12-15",
                        "end_date": "2024-02-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Iron Valiant",
                "form": null,
                "national_dex_number": 1006,
                "base_stats": {
                    "hp": 74,
                    "attack": 130,
                    "defense": 90,
                    "special_attack": 120,
                    "special_defense": 60,
                    "speed": 116
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fighting",
                "catch_rate": 10,
                "base_experience": 295,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Quark Drive"
                ],
                "hidden_ability": null,
                "weight": 35.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Iron Valiant",
                "event_name": "CoroCoro Roaring Moon & Iron Valiant",
                "level": 75,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Quark Drive",
                "held_item": null,
                "ball": "Friend Ball",
                "ot": "コロコロ",
                "trainer_id": "5656",
                "moves": [
                    "Leaf Blade",
                    "Moonblast",
                    "Close Combat",
                    "Knock Off"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fairy",
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 37,
                    "title": "Iron Valiant Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "December 15, 2023 to February 14, 2024",
                        "start_date": "2023-12-15",
                        "end_date": "2024-02-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Paldea's Gimmighoul": [
            {
                "species": "Gimmighoul",
                "form": null,
                "national_dex_number": 999,
                "base_stats": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 70,
                    "special_attack": 75,
                    "special_defense": 70,
                    "speed": 10
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Ghost",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 60,
                "gender_ratio": 255,
                "egg_cycles": 50,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Rattled"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gimmighoul",
                "event_name": "Paldea's Gimmighoul",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Timid",
                "ability": "Rattled",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Paldea / パルデア / 팔데아 / 帕底亚 / 帕底亞",
                "trainer_id": "231213",
                "moves": [
                    "Astonish",
                    "Tackle"
                ],
                "ivs": {
                    "hp": null,
                    "attack": null,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 31
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [],
                "mark": "Upbeat",
                "tera_type": "Ghost",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1527,
                    "title": "Gimmighoul Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: SEEY 0U1N PALD EA",
                        "language": null,
                        "location": null,
                        "date": "December 13, 2023 to November 30, 2024",
                        "start_date": "2023-12-13",
                        "end_date": "2024-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Shiny Lucario": [
            {
                "species": "Lucario",
                "form": null,
                "national_dex_number": 448,
                "base_stats": {
                    "hp": 70,
                    "attack": 110,
                    "defense": 70,
                    "special_attack": 115,
                    "special_defense": 70,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Steel",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": "Justified",
                "weight": 54.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Lucario",
                "event_name": "Shiny Lucario",
                "level": 75,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Naive",
                "ability": "Inner Focus",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Flash Cannon",
                    "Aura Sphere",
                    "Bullet Punch",
                    "Ice Punch"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Steel",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1530,
                    "title": "Shiny Lucario Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: SH1N YBUD DY",
                        "language": null,
                        "location": null,
                        "date": "December 7, 2023 to January 3, 2024",
                        "start_date": "2023-12-07",
                        "end_date": "2024-01-03"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Darkrai": [
            {
                "species": "Darkrai",
                "form": null,
                "national_dex_number": 491,
                "base_stats": {
                    "hp": 70,
                    "attack": 90,
                    "defense": 90,
                    "special_attack": 135,
                    "special_defense": 90,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Dark",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Bad Dreams"
                ],
                "hidden_ability": null,
                "weight": 50.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Darkrai",
                "event_name": "Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Dark Pulse",
                    "Shadow Ball",
                    "Hypnosis",
                    "Dream Eater"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dark",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1529,
                    "title": "Mythical Pokémon Darkrai Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: NEWM 00N1 SC0M 1NG",
                        "language": null,
                        "location": null,
                        "date": "December 7 to 21, 2023",
                        "start_date": "2023-12-07",
                        "end_date": "2023-12-21"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Team Star's Revavroom": [
            {
                "species": "Revavroom",
                "form": null,
                "national_dex_number": 966,
                "base_stats": {
                    "hp": 80,
                    "attack": 119,
                    "defense": 90,
                    "special_attack": 54,
                    "special_defense": 67,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Poison",
                "catch_rate": 75,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Overcoat"
                ],
                "hidden_ability": "Filter",
                "weight": 120.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Revavroom",
                "event_name": "Team Star's Revavroom",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Naughty",
                "ability": "Overcoat",
                "held_item": null,
                "ball": "Heal Ball",
                "ot": "Team Star / スターだん / 스타단 / 天星队的 / 天星隊的",
                "trainer_id": "231122",
                "moves": [
                    "Iron Head",
                    "Swagger",
                    "Poison Jab",
                    "Tera Blast"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "evs": {
                    "hp": null,
                    "attack": 252,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": null
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [],
                "mark": "Peeved",
                "tera_type": "Fighting",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1526,
                    "title": "Revavroom Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: TEAM STAR",
                        "language": null,
                        "location": null,
                        "date": "November 22, 2023 to October 31, 2024",
                        "start_date": "2023-11-22",
                        "end_date": "2024-10-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Alex Gómez Berna's Dragapult": [
            {
                "species": "Dragapult",
                "form": null,
                "national_dex_number": 887,
                "base_stats": {
                    "hp": 88,
                    "attack": 120,
                    "defense": 75,
                    "special_attack": 100,
                    "special_defense": 75,
                    "speed": 142
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Dragon",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 300,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Clear Body",
                    "Infiltrator"
                ],
                "hidden_ability": "Cursed Body",
                "weight": 50.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Dragapult",
                "event_name": "Alex Gómez Berna's Dragapult",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Clear Body",
                "held_item": "Choice Band",
                "ball": "Cherish Ball",
                "ot": "Alex",
                "trainer_id": "231117",
                "moves": [
                    "Tera Blast",
                    "Dragon Darts",
                    "Phantom Force",
                    "U-turn"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 12,
                    "attack": 252,
                    "defense": 4,
                    "special_attack": null,
                    "special_defense": 28,
                    "speed": 212
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Ghost",
                "scale": 128,
                "origin_language": "Spanish",
                "wonder_card": {
                    "id": 508,
                    "title": "Alex's Dragapult Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: LA1C PHAN T0M4 CE",
                        "language": null,
                        "location": null,
                        "date": "November 17 to 20, 2023",
                        "start_date": "2023-11-17",
                        "end_date": "2023-11-20"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Store Fidough": [
            {
                "species": "Fidough",
                "form": null,
                "national_dex_number": 926,
                "base_stats": {
                    "hp": 37,
                    "attack": 55,
                    "defense": 70,
                    "special_attack": 30,
                    "special_defense": 55,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 190,
                "base_experience": 62,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Own Tempo"
                ],
                "hidden_ability": "Klutz",
                "weight": 10.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Fidough",
                "event_name": "Pokémon Store Fidough",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Own Tempo",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "포켓몬스토어",
                "trainer_id": "231103",
                "moves": [
                    "Play Rough",
                    "Charm",
                    "Lick",
                    "Tail Whip"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "mark": "Uncommon",
                "tera_type": "Fairy",
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1006,
                    "title": "Fidough Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 3 to December 31, 2023",
                        "start_date": "2023-11-03",
                        "end_date": "2023-12-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Center Birthday Pawmi & Charcadet": [
            {
                "species": "Pawmi",
                "form": null,
                "national_dex_number": 921,
                "base_stats": {
                    "hp": 45,
                    "attack": 50,
                    "defense": 20,
                    "special_attack": 40,
                    "special_defense": 25,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 48,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Static",
                    "Natural Cure"
                ],
                "hidden_ability": "Iron Fist",
                "weight": 2.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pawmi",
                "event_name": "Pokémon Center Birthday Pawmi & Charcadet",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Static",
                    "Natural Cure"
                ],
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "231101",
                "moves": [
                    "Thunder Shock",
                    "Growl",
                    "Tera Blast",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Electric",
                "origin_language": null,
                "wonder_card": {
                    "id": 31,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2023 to January 31, 2025",
                        "start_date": "2023-11-01",
                        "end_date": "2025-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Charcadet",
                "form": null,
                "national_dex_number": 935,
                "base_stats": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 40,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 90,
                "base_experience": 51,
                "gender_ratio": 127,
                "egg_cycles": 35,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Flash Fire"
                ],
                "hidden_ability": "Flame Body",
                "weight": 10.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Charcadet",
                "event_name": "Pokémon Center Birthday Pawmi & Charcadet",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Flash Fire",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "231101",
                "moves": [
                    "Ember",
                    "Astonish",
                    "Tera Blast",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fire",
                "origin_language": null,
                "wonder_card": {
                    "id": 31,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2023 to January 31, 2025",
                        "start_date": "2023-11-01",
                        "end_date": "2025-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Trixie's Mimikyu": [
            {
                "species": "Mimikyu",
                "form": null,
                "national_dex_number": 778,
                "base_stats": {
                    "hp": 55,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 50,
                    "special_defense": 105,
                    "speed": 96
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Ghost",
                "type_2": "Fairy",
                "catch_rate": 45,
                "base_experience": 167,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Disguise"
                ],
                "hidden_ability": null,
                "weight": 0.7,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mimikyu",
                "event_name": "Trixie's Mimikyu",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Disguise",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "Trixie",
                "trainer_id": "231006",
                "moves": [
                    "Thunderbolt",
                    "Destiny Bond",
                    "Phantom Force",
                    "Curse"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Electric",
                "origin_language": "English",
                "wonder_card": {
                    "id": 507,
                    "title": "Electric Tera Type Mimikyu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "October 11, 2023 to January 1, 2024",
                        "start_date": "2023-10-11",
                        "end_date": "2024-01-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Glaseado Mountain Cetitan": [
            {
                "species": "Cetitan",
                "form": null,
                "national_dex_number": 975,
                "base_stats": {
                    "hp": 170,
                    "attack": 113,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 73
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Ice",
                "type_2": "Ice",
                "catch_rate": 50,
                "base_experience": 182,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Thick Fat",
                    "Slush Rush"
                ],
                "hidden_ability": "Sheer Force",
                "weight": 700.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Cetitan",
                "event_name": "Glaseado Mountain Cetitan",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Thick Fat",
                    "Slush Rush"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Glaseado / Montanata / Mont Nappé / SierraNapada / S. Napada / ナッペやま / 나페산 / 霜抹山",
                "trainer_id": "230906",
                "moves": [
                    "Body Slam",
                    "Amnesia",
                    "Ice Spinner",
                    "Double-Edge"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [],
                "mark": "Ferocious",
                "tera_type": "Ice",
                "origin_language": null,
                "wonder_card": {
                    "id": 1524,
                    "title": "Cetitan Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: L1KE AFLU TE",
                        "language": null,
                        "location": null,
                        "date": "September 6, 2023 to August 31, 2024",
                        "start_date": "2023-09-06",
                        "end_date": "2024-08-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Eduardo Cunha's East Sea Gastrodon": [
            {
                "species": "Gastrodon",
                "form": "East Sea",
                "national_dex_number": 423,
                "base_stats": {
                    "hp": 111,
                    "attack": 83,
                    "defense": 68,
                    "special_attack": 92,
                    "special_defense": 82,
                    "speed": 39
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Ground",
                "catch_rate": 75,
                "base_experience": 166,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Sticky Hold",
                    "Storm Drain"
                ],
                "hidden_ability": "Sand Force",
                "weight": 29.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gastrodon",
                "event_name": "Eduardo Cunha's East Sea Gastrodon",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Calm",
                "ability": "Storm Drain",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "Eduardo",
                "trainer_id": "230811",
                "moves": [
                    "Earth Power",
                    "Icy Wind",
                    "Yawn",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": null,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 8
                },
                "evs": {
                    "hp": 180,
                    "attack": null,
                    "defense": 92,
                    "special_attack": 92,
                    "special_defense": 144,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 506,
                    "title": "Eduardo's Gastrodon Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 23WC SGAS TR0D 0N",
                        "language": null,
                        "location": null,
                        "date": "August 10 to 14, 2023",
                        "start_date": "2023-08-10",
                        "end_date": "2023-08-14"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "My very own Mew": [
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Hyper Voice",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Aura Sphere",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fighting",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Air Slash",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Flying",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Sludge Bomb",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Poison",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Earth Power",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ground",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Power Gem",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Rock",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pollen Puff",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Bug",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Shadow Ball",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ghost",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Flash Cannon",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Steel",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Flamethrower",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fire",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Surf",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Energy Ball",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Grass",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Thunderbolt",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Electric",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Psyshock",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Psychic",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Ice Beam",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Ice",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Dragon Pulse",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dragon",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Dark Pulse",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dark",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Mew",
                "form": null,
                "national_dex_number": 151,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Mew",
                "event_name": "My very own Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Dazzling Gleam",
                    "Swift",
                    "Light Screen",
                    "Life Dew"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1521,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: GETY 0URM EW",
                        "language": null,
                        "location": null,
                        "date": "August 8 to September 18, 2023",
                        "start_date": "2023-08-08",
                        "end_date": "2023-09-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "2023 Pokémon World Championships Stretchy Form Tatsugiri": [
            {
                "species": "Tatsugiri",
                "form": "Stretchy Form",
                "national_dex_number": 978,
                "base_stats": {
                    "hp": 68,
                    "attack": 50,
                    "defense": 60,
                    "special_attack": 120,
                    "special_defense": 95,
                    "speed": 82
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Water",
                "catch_rate": 100,
                "base_experience": 166,
                "gender_ratio": 127,
                "egg_cycles": 35,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Water2",
                "abilities": [
                    "Commander"
                ],
                "hidden_ability": "Storm Drain",
                "weight": 8.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Tatsugiri",
                "event_name": "2023 Pokémon World Championships Stretchy Form Tatsugiri",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Commander",
                "held_item": "Big Nugget",
                "ball": "Cherish Ball",
                "ot": "Worlds23 / WCS23",
                "trainer_id": "230811",
                "moves": [
                    "Draco Meteor",
                    "Muddy Water",
                    "Helping Hand",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "WCS 2023",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "tera_type": "Dragon",
                "origin_language": null,
                "wonder_card": {
                    "id": 505,
                    "title": "Tatsugiri (Stretchy Form) Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 7 to 31, 2023",
                        "start_date": "2023-08-07",
                        "end_date": "2023-08-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Chaiyawat Traiwichcha's Grimmsnarl": [
            {
                "species": "Grimmsnarl",
                "form": null,
                "national_dex_number": 861,
                "base_stats": {
                    "hp": 95,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 95,
                    "special_defense": 75,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Fairy",
                "catch_rate": 45,
                "base_experience": 255,
                "gender_ratio": 0,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Prankster",
                    "Frisk"
                ],
                "hidden_ability": "Pickpocket",
                "weight": 61.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Grimmsnarl",
                "event_name": "Chaiyawat Traiwichcha's Grimmsnarl",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Calm",
                "ability": "Prankster",
                "held_item": "Light Clay",
                "ball": "Cherish Ball",
                "ot": "Nontaro",
                "trainer_id": "230728",
                "moves": [
                    "Thunder Wave",
                    "Spirit Break",
                    "Reflect",
                    "Light Screen"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": null,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 252,
                    "attack": null,
                    "defense": 212,
                    "special_attack": 4,
                    "special_defense": 36,
                    "speed": 4
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Dark",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 24,
                    "title": "Nontaro's Grimmsnarl Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: THA1 2022 CHAMP",
                        "language": null,
                        "location": null,
                        "date": "July 27 to August 18, 2023",
                        "start_date": "2023-07-27",
                        "end_date": "2023-08-18"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Dark Terastal Charizard": [
            {
                "species": "Charizard",
                "form": null,
                "national_dex_number": 6,
                "base_stats": {
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 240,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Solar Power",
                "weight": 90.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Charizard",
                "event_name": "Dark Terastal Charizard",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Adamant",
                "ability": "Blaze",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Crunch",
                    "Flare Blitz",
                    "Acrobatics",
                    "Belly Drum"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Dark",
                "origin_language": null,
                "wonder_card": {
                    "id": 1522,
                    "title": "Dark Tera Type Charizard Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: DARK TERA 0006",
                        "language": null,
                        "location": null,
                        "date": "July 21 to August 31, 2023",
                        "start_date": "2023-07-21",
                        "end_date": "2023-08-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Paul Chua's Arcanine": [
            {
                "species": "Arcanine",
                "form": null,
                "national_dex_number": 59,
                "base_stats": {
                    "hp": 90,
                    "attack": 110,
                    "defense": 80,
                    "special_attack": 100,
                    "special_defense": 80,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 75,
                "base_experience": 194,
                "gender_ratio": 63,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Intimidate",
                    "Flash Fire"
                ],
                "hidden_ability": "Justified",
                "weight": 155.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Arcanine",
                "event_name": "Paul Chua's Arcanine",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "Arcanine",
                "gender": "Female",
                "nature": "Adamant",
                "ability": "Intimidate",
                "held_item": "Safety Goggles",
                "ball": "Cherish Ball",
                "ot": "Paul",
                "trainer_id": "230630",
                "moves": [
                    "Flare Blitz",
                    "Will-o-Wisp",
                    "Protect",
                    "Extreme Speed"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 8,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 236,
                    "attack": 76,
                    "defense": 116,
                    "special_attack": 6,
                    "special_defense": 16,
                    "speed": 56
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Grass",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 504,
                    "title": "Paul's Arcanine Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: PAUL EU1C W1N",
                        "language": null,
                        "location": null,
                        "date": "June 30 to July 3, 2023",
                        "start_date": "2023-06-30",
                        "end_date": "2023-07-03"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Wonseok Jung's East Sea Gastrodon": [
            {
                "species": "Gastrodon",
                "form": "East Sea",
                "national_dex_number": 423,
                "base_stats": {
                    "hp": 111,
                    "attack": 83,
                    "defense": 68,
                    "special_attack": 92,
                    "special_defense": 82,
                    "speed": 39
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Ground",
                "catch_rate": 75,
                "base_experience": 166,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Sticky Hold",
                    "Storm Drain"
                ],
                "hidden_ability": "Sand Force",
                "weight": 29.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gastrodon",
                "event_name": "Wonseok Jung's East Sea Gastrodon",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "트리토돈",
                "gender": "Male",
                "nature": "Bold",
                "ability": "Storm Drain",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "정원석",
                "trainer_id": "230603",
                "moves": [
                    "Earth Power",
                    "Ice Beam",
                    "Yawn",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": null,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 8
                },
                "evs": {
                    "hp": 180,
                    "attack": null,
                    "defense": 204,
                    "special_attack": null,
                    "special_defense": 124,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1005,
                    "title": "정원석's Gastrodon Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: PTCC HAMP 10N2 122",
                        "language": null,
                        "location": null,
                        "date": "June 17 to 19, 2023",
                        "start_date": "2023-06-17",
                        "end_date": "2023-06-19"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Yasuharu Shimizu's Bronzong": [
            {
                "species": "Bronzong",
                "form": null,
                "national_dex_number": 437,
                "base_stats": {
                    "hp": 67,
                    "attack": 89,
                    "defense": 116,
                    "special_attack": 79,
                    "special_defense": 116,
                    "speed": 33
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Psychic",
                "catch_rate": 90,
                "base_experience": 175,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Levitate",
                    "Heatproof"
                ],
                "hidden_ability": "Heavy Metal",
                "weight": 187.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Bronzong",
                "event_name": "Yasuharu Shimizu's Bronzong",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ドータクン",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Levitate",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "そらみつ",
                "trainer_id": "230610",
                "moves": [
                    "Body Press",
                    "Iron Defense",
                    "Protect",
                    "Trick Room"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 22,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 252,
                    "attack": null,
                    "defense": 252,
                    "special_attack": null,
                    "special_defense": 4,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Steel",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 28,
                    "title": "そらみつ's Bronzong Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 22SE N10R CHAM P",
                        "language": null,
                        "location": null,
                        "date": "June 10 to 11, 2023",
                        "start_date": "2023-06-10",
                        "end_date": "2023-06-11"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Marcus's Bronzong": [
            {
                "species": "Bronzong",
                "form": null,
                "national_dex_number": 437,
                "base_stats": {
                    "hp": 67,
                    "attack": 89,
                    "defense": 116,
                    "special_attack": 79,
                    "special_defense": 116,
                    "speed": 33
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Psychic",
                "catch_rate": 90,
                "base_experience": 175,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Levitate",
                    "Heatproof"
                ],
                "hidden_ability": "Heavy Metal",
                "weight": 187.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Bronzong",
                "event_name": "Marcus's Bronzong",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "동탁군",
                "gender": null,
                "nature": "Modest",
                "ability": "Levitate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "기신",
                "trainer_id": "230531",
                "moves": [
                    "Flash Cannon",
                    "Gyro Ball",
                    "Psychic",
                    "Hypnosis"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "tera_type": "Psychic",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1003,
                    "title": "기신's Bronzing Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "May 31 to July 31, 2023",
                        "start_date": "2023-05-31",
                        "end_date": "2023-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Michina Town Pichu": [
            {
                "species": "Pichu",
                "form": null,
                "national_dex_number": 172,
                "base_stats": {
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 41,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Static"
                ],
                "hidden_ability": "Lightning Rod",
                "weight": 2.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pichu",
                "event_name": "Michina Town Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "피츄",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "미케나",
                "trainer_id": "230531",
                "moves": [
                    "Charge",
                    "Endure",
                    "Volt Tackle",
                    "Helping Hand"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "tera_type": "Electric",
                "scale": 128,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1002,
                    "title": "Shiny Pichu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "May 31 to July 31, 2023",
                        "start_date": "2023-05-31",
                        "end_date": "2023-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "25th Anniversary Pikatto Pika Pika Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 112,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Static"
                ],
                "hidden_ability": "Lightning Rod",
                "weight": 6.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pikachu",
                "event_name": "25th Anniversary Pikatto Pika Pika Pikachu",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": "マイぴか",
                "gender": "Male",
                "nature": "Random",
                "ability": "Static",
                "held_item": "TM025",
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "230422",
                "moves": [
                    "Celebrate",
                    "Play Nice",
                    "Present",
                    "Thunderbolt"
                ],
                "ivs": {
                    "hp": 25,
                    "attack": 25,
                    "defense": 25,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 25
                },
                "evs": {
                    "hp": 25,
                    "attack": 25,
                    "defense": 25,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 25
                },
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "tera_type": "Electric",
                "scale": 0,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 25,
                    "title": "ポケセン’s Pikachu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "April 22 to July 31, 2023",
                        "start_date": "2023-04-22",
                        "end_date": "2023-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 112,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Static"
                ],
                "hidden_ability": "Lightning Rod",
                "weight": 6.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pikachu",
                "event_name": "25th Anniversary Pikatto Pika Pika Pikachu",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": "マイぴか",
                "gender": "Male",
                "nature": "Random",
                "ability": "Static",
                "held_item": "TM025",
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "230422",
                "moves": [
                    "Celebrate",
                    "Play Nice",
                    "Present",
                    "Thunderbolt"
                ],
                "ivs": {
                    "hp": 25,
                    "attack": 25,
                    "defense": 25,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 25
                },
                "evs": {
                    "hp": 25,
                    "attack": 25,
                    "defense": 25,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 25
                },
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "tera_type": "Electric",
                "scale": 255,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 25,
                    "title": "ポケセン’s Pikachu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "April 22 to July 31, 2023",
                        "start_date": "2023-04-22",
                        "end_date": "2023-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Gavin Michaels' Palafin": [
            {
                "species": "Palafin",
                "form": null,
                "national_dex_number": 964,
                "base_stats": {
                    "hp": 100,
                    "attack": 70,
                    "defense": 72,
                    "special_attack": 53,
                    "special_defense": 62,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 160,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Water2",
                "abilities": [
                    "Zero To Hero"
                ],
                "hidden_ability": null,
                "weight": 60.2,
                "pokedex_entry": "pokedex/scarlet_violet.js#Palafin",
                "event_name": "Gavin Michaels' Palafin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "Palafin",
                "gender": "Female",
                "nature": "Adamant",
                "ability": "Zero to Hero",
                "held_item": "Mystic Water",
                "ball": "Cherish Ball",
                "ot": "Gavin",
                "trainer_id": "230414",
                "moves": [
                    "Jet Punch",
                    "Wave Crash",
                    "Haze",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 17,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 252,
                    "attack": 252,
                    "defense": 4,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Water",
                "scale": 128,
                "origin_language": "English",
                "wonder_card": {
                    "id": 503,
                    "title": "Gavin's Palafin Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 0C1C V1CT 0RGA V1N",
                        "language": null,
                        "location": null,
                        "date": "April 14 to 17, 2023",
                        "start_date": "2023-04-14",
                        "end_date": "2023-04-17"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Flying Terastal Lechonk": [
            {
                "species": "Lechonk",
                "form": null,
                "national_dex_number": 915,
                "base_stats": {
                    "hp": 54,
                    "attack": 45,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 45,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 255,
                "base_experience": 51,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Aroma Veil",
                    "Gluttony"
                ],
                "hidden_ability": "Thick Fat",
                "weight": 10.2,
                "pokedex_entry": "pokedex/scarlet_violet.js#Lechonk",
                "event_name": "Flying Terastal Lechonk",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Random",
                "ability": "Thick Fat",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tera Blast",
                    "Mud Shot",
                    "Covet",
                    "Dig"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Flying",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 502,
                    "title": "Flying Tera Type Lechonk Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "March 31 to July 1, 2023",
                        "start_date": "2023-03-31",
                        "end_date": "2023-07-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "The Hidden Treasure of Area Zero Hisuian Zoroark": [
            {
                "species": "Zoroark",
                "form": "Hisuian Form",
                "national_dex_number": 571,
                "base_stats": {
                    "hp": 55,
                    "attack": 100,
                    "defense": 60,
                    "special_attack": 125,
                    "special_defense": 60,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Illusion"
                ],
                "hidden_ability": null,
                "weight": 73.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Hisuian Zoroark",
                "event_name": "The Hidden Treasure of Area Zero Hisuian Zoroark",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Illusion",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Happy Hour",
                    "Bitter Malice",
                    "Nasty Plot",
                    "Tera Blast"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "mark": "Charismatic",
                "tera_type": "Dark",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 1513,
                    "title": "Zoroark (Hisuian Form) Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 27, 2023 to February 29, 2024",
                        "start_date": "2023-02-27",
                        "end_date": "2024-02-29"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Jiseok Lee's Garganacl": [
            {
                "species": "Garganacl",
                "form": null,
                "national_dex_number": 934,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 130,
                    "special_attack": 45,
                    "special_defense": 90,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 3,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Rock",
                "type_2": "Rock",
                "catch_rate": 45,
                "base_experience": 250,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Purifying Salt",
                    "Sturdy"
                ],
                "hidden_ability": "Clear Body",
                "weight": 240.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Garganacl",
                "event_name": "Jiseok Lee's Garganacl",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "Garganacl",
                "gender": "Male",
                "nature": "Careful",
                "ability": "Purifying Salt",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "Jiseok",
                "trainer_id": "230217",
                "moves": [
                    "Salt Cure",
                    "Recover",
                    "Wide Guard",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 22,
                    "special_defense": 31,
                    "speed": 31
                },
                "evs": {
                    "hp": 252,
                    "attack": null,
                    "defense": 60,
                    "special_attack": null,
                    "special_defense": 198,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "tera_type": "Poison",
                "origin_language": "English",
                "wonder_card": {
                    "id": 501,
                    "title": "Jiseok's Garganacl Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Password: 1STC HAMP SV",
                        "language": null,
                        "location": null,
                        "date": "February 16 to 20, 2023",
                        "start_date": "2023-02-16",
                        "end_date": "2023-02-20"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Jump Festa 2023 Gyarados": [
            {
                "species": "Gyarados",
                "form": null,
                "national_dex_number": 130,
                "base_stats": {
                    "hp": 95,
                    "attack": 125,
                    "defense": 79,
                    "special_attack": 60,
                    "special_defense": 100,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Intimidate"
                ],
                "hidden_ability": "Moxie",
                "weight": 235.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gyarados",
                "event_name": "Jump Festa 2023 Gyarados",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Twister",
                    "Ice Fang",
                    "Whirlpool",
                    "Bite"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 31,
                    "special_attack": 20,
                    "special_defense": 31,
                    "speed": 20
                },
                "met_location": "a crystal cavern",
                "fateful_encounter": true,
                "ribbons": [],
                "tera_type": "Ground",
                "origin_language": null,
                "wonder_card": {
                    "id": 6,
                    "title": "Ground Tera Type Gyarados Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "December 17, 2022 to January 31, 2023",
                        "start_date": "2022-12-17",
                        "end_date": "2023-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Pokémon Center Birthday Flabébé": [
            {
                "species": "Flabébé",
                "form": "Red Flower",
                "national_dex_number": 669,
                "base_stats": {
                    "hp": 44,
                    "attack": 38,
                    "defense": 39,
                    "special_attack": 61,
                    "special_defense": 79,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 225,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Flower Veil"
                ],
                "hidden_ability": "Symbiosis",
                "weight": 0.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flabébé",
                "event_name": "Pokémon Center Birthday Flabébé",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Flabébé / フラベベ",
                "gender": "Female",
                "nature": "Random",
                "ability": "Flower Veil",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン",
                "trainer_id": "221118",
                "moves": [
                    "Vine Whip",
                    "Fairy Wind",
                    "Wish",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 18, 2022 to January 31, 2024",
                        "start_date": "2022-11-18",
                        "end_date": "2024-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Flabébé",
                "form": "Yellow Flower",
                "national_dex_number": 669,
                "base_stats": {
                    "hp": 44,
                    "attack": 38,
                    "defense": 39,
                    "special_attack": 61,
                    "special_defense": 79,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 225,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Flower Veil"
                ],
                "hidden_ability": "Symbiosis",
                "weight": 0.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flabébé",
                "event_name": "Pokémon Center Birthday Flabébé",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Flabébé / フラベベ",
                "gender": "Female",
                "nature": "Random",
                "ability": "Flower Veil",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン",
                "trainer_id": "221118",
                "moves": [
                    "Vine Whip",
                    "Fairy Wind",
                    "Wish",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 18, 2022 to January 31, 2024",
                        "start_date": "2022-11-18",
                        "end_date": "2024-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Flabébé",
                "form": "Orange Flower",
                "national_dex_number": 669,
                "base_stats": {
                    "hp": 44,
                    "attack": 38,
                    "defense": 39,
                    "special_attack": 61,
                    "special_defense": 79,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 225,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Flower Veil"
                ],
                "hidden_ability": "Symbiosis",
                "weight": 0.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flabébé",
                "event_name": "Pokémon Center Birthday Flabébé",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Flabébé / フラベベ",
                "gender": "Female",
                "nature": "Random",
                "ability": "Flower Veil",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン",
                "trainer_id": "221118",
                "moves": [
                    "Vine Whip",
                    "Fairy Wind",
                    "Wish",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 18, 2022 to January 31, 2024",
                        "start_date": "2022-11-18",
                        "end_date": "2024-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Flabébé",
                "form": "Blue Flower",
                "national_dex_number": 669,
                "base_stats": {
                    "hp": 44,
                    "attack": 38,
                    "defense": 39,
                    "special_attack": 61,
                    "special_defense": 79,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 225,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Flower Veil"
                ],
                "hidden_ability": "Symbiosis",
                "weight": 0.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flabébé",
                "event_name": "Pokémon Center Birthday Flabébé",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Flabébé / フラベベ",
                "gender": "Female",
                "nature": "Random",
                "ability": "Flower Veil",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン",
                "trainer_id": "221118",
                "moves": [
                    "Vine Whip",
                    "Fairy Wind",
                    "Wish",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 18, 2022 to January 31, 2024",
                        "start_date": "2022-11-18",
                        "end_date": "2024-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            },
            {
                "species": "Flabébé",
                "form": "White Flower",
                "national_dex_number": 669,
                "base_stats": {
                    "hp": 44,
                    "attack": 38,
                    "defense": 39,
                    "special_attack": 61,
                    "special_defense": 79,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 225,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Flower Veil"
                ],
                "hidden_ability": "Symbiosis",
                "weight": 0.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Flabébé",
                "event_name": "Pokémon Center Birthday Flabébé",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Flabébé / フラベベ",
                "gender": "Female",
                "nature": "Random",
                "ability": "Flower Veil",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン",
                "trainer_id": "221118",
                "moves": [
                    "Vine Whip",
                    "Fairy Wind",
                    "Wish",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 18, 2022 to January 31, 2024",
                        "start_date": "2022-11-18",
                        "end_date": "2024-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ],
        "Flying Terastal Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 112,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Static"
                ],
                "hidden_ability": "Lightning Rod",
                "weight": 6.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Pikachu",
                "event_name": "Flying Terastal Pikachu",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "gender_note": "This Pikachu was exclusively male if redeemed before February 3, 2023",
                "nature": "Random",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Fly",
                    "Tail Whip",
                    "Thunder Shock",
                    "Quick Attack"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "tera_type": "Flying",
                "origin_language": null,
                "wonder_card": {
                    "id": 1501,
                    "title": "Flying Tera Type Pikachu Gift"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "November 18, 2022 to February 28, 2023",
                        "start_date": "2022-11-18",
                        "end_date": "2023-02-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Scarlet and Violet"
            }
        ]
    },
    "Legends: Z-A": {
        "2026 Pokémon World Championships Greninja": [
            {
                "species": "Greninja",
                "form": null,
                "national_dex_number": 658,
                "base_stats": {
                    "hp": 72,
                    "attack": 95,
                    "defense": 67,
                    "special_attack": 103,
                    "special_defense": 71,
                    "speed": 122
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Water",
                "type_2": "Dark",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Protean",
                "weight": 40.0,
                "pokedex_entry": "pokedex/legends_za.js#Greninja",
                "event_name": "2026 Pokémon World Championships Greninja",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Modest",
                "ability": "Protean",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Worlds26 / WCS26",
                "trainer_id": "260828",
                "moves": [
                    "Water Shuriken",
                    "Dark Pulse",
                    "Hydro Pump",
                    "Ice Beam"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "WCS 2026",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 603,
                    "title": "Greninja Gift"
                },
                "games": [
                    "Legends: Z-A"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Z-A"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 28, 2026 Onwards",
                        "start_date": "2026-08-28",
                        "end_date": null
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Z-A"
            }
        ],
        "Charizard's Charge Alpha Charizard": [
            {
                "species": "Charizard",
                "form": null,
                "national_dex_number": 6,
                "base_stats": {
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 240,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Solar Power",
                "weight": 90.5,
                "pokedex_entry": "pokedex/legends_za.js#Charizard",
                "event_name": "Charizard's Charge Alpha Charizard",
                "level": 36,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Solar Power",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Solar Beam",
                    "Dragon Claw",
                    "Flamethrower",
                    "Air Slash"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "alpha": true,
                "scale": 255,
                "origin_language": null,
                "wonder_card": {
                    "id": 1607,
                    "title": "Charizard Gift"
                },
                "games": [
                    "Legends: Z-A"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Z-A"
                        ],
                        "method": "Password: B1G0 006",
                        "language": null,
                        "location": null,
                        "date": "December 9, 2025 to January 21, 2026",
                        "start_date": "2025-12-09",
                        "end_date": "2026-01-21"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Z-A"
            }
        ],
        "Pokémon Center Birthday Audino": [
            {
                "species": "Audino",
                "form": null,
                "national_dex_number": 531,
                "base_stats": {
                    "hp": 103,
                    "attack": 60,
                    "defense": 86,
                    "special_attack": 60,
                    "special_defense": 86,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 255,
                "base_experience": 390,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Healer",
                    "Regenerator"
                ],
                "hidden_ability": "Klutz",
                "weight": 31.0,
                "pokedex_entry": "pokedex/legends_za.js#Audino",
                "event_name": "Pokémon Center Birthday Audino",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Healer",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "251101",
                "moves": [
                    "Growl",
                    "Wish",
                    "Disarming Voice",
                    "Safeguard"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": 101,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Legends: Z-A"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Z-A"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2025 to January 31, 2027",
                        "start_date": "2025-11-01",
                        "end_date": "2027-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Z-A"
            }
        ],
        "Pokémon Center Kagawa Slowpoke": [
            {
                "species": "Slowpoke",
                "form": null,
                "national_dex_number": 79,
                "base_stats": {
                    "hp": 90,
                    "attack": 65,
                    "defense": 65,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Psychic",
                "catch_rate": 190,
                "base_experience": 63,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Monster",
                "egg_group_2": "Water1",
                "abilities": [
                    "Oblivious",
                    "Own Tempo"
                ],
                "hidden_ability": "Regenerator",
                "weight": 36.0,
                "pokedex_entry": "pokedex/legends_za.js#Slowpoke",
                "event_name": "Pokémon Center Kagawa Slowpoke",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Oblivious",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "251024",
                "moves": [
                    "Calm Mind",
                    "Growl",
                    "Water Pulse",
                    "Safeguard"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Special"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 102,
                    "title": "ポケセン’s Slowpoke Gift"
                },
                "games": [
                    "Legends: Z-A"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Z-A"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "October 23, 2025 to January 31, 2026",
                        "start_date": "2025-10-23",
                        "end_date": "2026-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Z-A"
            }
        ],
        "Mega Evolution Ralts": [
            {
                "species": "Ralts",
                "form": null,
                "national_dex_number": 280,
                "base_stats": {
                    "hp": 28,
                    "attack": 25,
                    "defense": 25,
                    "special_attack": 45,
                    "special_defense": 35,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Fairy",
                "catch_rate": 235,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Synchronize",
                    "Trace"
                ],
                "hidden_ability": "Telepathy",
                "weight": 6.6,
                "pokedex_entry": "pokedex/legends_za.js#Ralts",
                "event_name": "Mega Evolution Ralts",
                "level": 6,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": "Gardevoirite",
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Disarming Voice",
                    "Growl",
                    "Confusion",
                    "Swift"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1601,
                    "title": "Ralts and Gardevoirite Gift"
                },
                "games": [
                    "Legends: Z-A"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Z-A"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "October 16, 2025 to February 28, 2026",
                        "start_date": "2025-10-16",
                        "end_date": "2026-02-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Z-A"
            }
        ]
    },
    "Game-based distributions": {
        "2026 Pokémon Japan Championships Garchomp": [
            {
                "species": "Garchomp",
                "form": null,
                "national_dex_number": 445,
                "base_stats": {
                    "hp": 108,
                    "attack": 130,
                    "defense": 95,
                    "special_attack": 80,
                    "special_defense": 85,
                    "speed": 102
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Ground",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Sand Veil"
                ],
                "hidden_ability": "Rough Skin",
                "weight": 95.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Garchomp",
                "event_name": "2026 Pokémon Japan Championships Garchomp",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Adamant",
                "ability": "Rough Skin",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PJCS26",
                "trainer_id": "260606",
                "moves": [
                    "Earthquake",
                    "Dragon Claw",
                    "Rock Slide",
                    "Protect"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "tera_type": "Dragon",
                "scale": 128,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": null,
                    "title": "Gift for visiting PJCS2026!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "NFC Tag",
                        "language": null,
                        "location": null,
                        "date": "June 6 to 7, 2026",
                        "start_date": "2026-06-06",
                        "end_date": "2026-06-07"
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ],
        "Shiny Volcanion": [
            {
                "species": "Volcanion",
                "form": null,
                "national_dex_number": 721,
                "base_stats": {
                    "hp": 80,
                    "attack": 110,
                    "defense": 120,
                    "special_attack": 130,
                    "special_defense": 90,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Water Absorb"
                ],
                "hidden_ability": null,
                "weight": 195.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Volcanion",
                "event_name": "Shiny Volcanion",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Modest",
                "ability": "Water Absorb",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "260427",
                "moves": [
                    "Steam Eruption",
                    "Flare Blitz",
                    "Hydro Pump",
                    "Heavy Slam"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Game Pokédex Completion Commemoration No. 6!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "April 27, 2026 onwards",
                        "start_date": "2026-04-27",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ],
        "Alpha Lumiose first partner Pokémon": [
            {
                "species": "Chikorita",
                "form": null,
                "national_dex_number": 152,
                "base_stats": {
                    "hp": 45,
                    "attack": 49,
                    "defense": 65,
                    "special_attack": 49,
                    "special_defense": 65,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 64,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Leaf Guard",
                "weight": 6.4,
                "pokedex_entry": "pokedex/scarlet_violet.js#Chikorita",
                "event_name": "Chikorita",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Quiet",
                "ability": "Leaf Guard",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Dazzling Gleam"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "alpha": true,
                "scale": 255,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Legends: Z-A Link Gift No. 1!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "April 2, 2026 onwards",
                        "start_date": "2026-04-02",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            },
            {
                "species": "Tepig",
                "form": null,
                "national_dex_number": 498,
                "base_stats": {
                    "hp": 65,
                    "attack": 63,
                    "defense": 45,
                    "special_attack": 45,
                    "special_defense": 45,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Thick Fat",
                "weight": 9.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Tepig",
                "event_name": "Tepig",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Brave",
                "ability": "Thick Fat",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Wild Charge"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "alpha": true,
                "scale": 255,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Legends: Z-A Link Gift No. 2!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "April 2, 2026 onwards",
                        "start_date": "2026-04-02",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            },
            {
                "species": "Totodile",
                "form": null,
                "national_dex_number": 158,
                "base_stats": {
                    "hp": 50,
                    "attack": 65,
                    "defense": 64,
                    "special_attack": 44,
                    "special_defense": 48,
                    "speed": 43
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Sheer Force",
                "weight": 9.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Totodile",
                "event_name": "Totodile",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Sheer Force",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Dragon Claw"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "alpha": true,
                "scale": 255,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Legends: Z-A Link Gift No. 3!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "April 2, 2026 onwards",
                        "start_date": "2026-04-02",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ],
        "Pokémon Center Birthday Fidough": [
            {
                "species": "Fidough",
                "form": null,
                "national_dex_number": 926,
                "base_stats": {
                    "hp": 37,
                    "attack": 55,
                    "defense": 70,
                    "special_attack": 30,
                    "special_defense": 55,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 190,
                "base_experience": 62,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Own Tempo"
                ],
                "hidden_ability": "Klutz",
                "weight": 10.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Fidough",
                "event_name": "Pokémon Center Birthday Fidough",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Own Tempo",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "251101",
                "moves": [
                    "Celebrate",
                    "Baby-Doll Eyes",
                    "Play Rough",
                    "Charm"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Fairy",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Center HAPPY BIRTHDAY 2025–2026 Fidough"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "NFC Tag",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2025 to October 31, 2026",
                        "start_date": "2025-11-01",
                        "end_date": "2026-10-31"
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ],
        "Pokémon Center Birthday Tandemaus": [
            {
                "species": "Tandemaus",
                "form": null,
                "national_dex_number": 924,
                "base_stats": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 45,
                    "special_attack": 40,
                    "special_defense": 45,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 61,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 50,
                "growth_rate": "Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Run Away",
                    "Pickup"
                ],
                "hidden_ability": "Own Tempo",
                "weight": 1.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Tandemaus",
                "event_name": "Pokémon Center Birthday Tandemaus",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Own Tempo",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PokéCenter / ポケセン / 寶可夢中心",
                "trainer_id": "241101",
                "moves": [
                    "Celebrate",
                    "Tera Blast",
                    "Baby-Doll Eyes",
                    "Echoed Voice"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Happy birthday from the Pokémon Center!"
                },
                "games": [
                    "Scarlet",
                    "Violet"
                ],
                "distributions": [
                    {
                        "games": [
                            "Scarlet",
                            "Violet"
                        ],
                        "method": "NFC Tag",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2024 to October 31, 2025",
                        "start_date": "2024-11-01",
                        "end_date": "2025-10-31"
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ],
        "Shiny Meloetta": [
            {
                "species": "Meloetta",
                "form": null,
                "national_dex_number": 648,
                "base_stats": {
                    "hp": 100,
                    "attack": 77,
                    "defense": 77,
                    "special_attack": 128,
                    "special_defense": 128,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 1,
                    "speed": 1
                },
                "type_1": "Normal",
                "type_2": "Psychic",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Serene Grace"
                ],
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Meloetta",
                "event_name": "Shiny Meloetta",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Modest",
                "ability": "Serene Grace",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "241016",
                "moves": [
                    "Relic Song",
                    "Echoed Voice",
                    "Psybeam",
                    "Sing"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "the Paldea region",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "tera_type": "Normal",
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Game Pokédex Completion Commemoration No. 1!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "October 16, 2024 onwards",
                        "start_date": "2024-10-16",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ],
        "Hidden Ability Paldea first partner Pokémon": [
            {
                "species": "Sprigatito",
                "form": null,
                "national_dex_number": 906,
                "base_stats": {
                    "hp": 40,
                    "attack": 61,
                    "defense": 54,
                    "special_attack": 45,
                    "special_defense": 45,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Protean",
                "weight": 4.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Sprigatito",
                "event_name": "Sprigatito",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Protean",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Tail Whip",
                    "Leafage"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "tera_type": "Grass",
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Link Gift No. 7!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "May 30, 2023 onwards",
                        "start_date": "2023-05-30",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            },
            {
                "species": "Fuecoco",
                "form": null,
                "national_dex_number": 909,
                "base_stats": {
                    "hp": 67,
                    "attack": 45,
                    "defense": 59,
                    "special_attack": 63,
                    "special_defense": 40,
                    "speed": 36
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Unaware",
                "weight": 9.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Fuecoco",
                "event_name": "Fuecoco",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Bold",
                "ability": "Unaware",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Ember"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 31,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "tera_type": "Fire",
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Link Gift No. 8!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "May 30, 2023 onwards",
                        "start_date": "2023-05-30",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            },
            {
                "species": "Quaxly",
                "form": null,
                "national_dex_number": 912,
                "base_stats": {
                    "hp": 55,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 50,
                    "special_defense": 45,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Moxie",
                "weight": 6.1,
                "pokedex_entry": "pokedex/scarlet_violet.js#Quaxly",
                "event_name": "Quaxly",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Moxie",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Growl",
                    "Water Gun"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "tera_type": "Water",
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Link Gift No. 9!"
                },
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Gift Box",
                        "language": null,
                        "location": null,
                        "date": "May 30, 2023 onwards",
                        "start_date": "2023-05-30",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IX"
            }
        ]
    },
    "Pokémon Champions": {
        "Francesco Pio Pero's Sylveon": [
            {
                "species": "Sylveon",
                "form": null,
                "national_dex_number": 700,
                "base_stats": {
                    "hp": 95,
                    "attack": 65,
                    "defense": 65,
                    "special_attack": 110,
                    "special_defense": 130,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Cute Charm"
                ],
                "hidden_ability": "Pixilate",
                "weight": 23.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Sylveon",
                "event_name": "Francesco Pio Pero's Sylveon",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Pixilate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Detect",
                    "Hyper Voice",
                    "Yawn",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "title": "FrancescoPio's Sylveon / the Battle Champion",
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 20 to 22, 2026",
                        "start_date": "2026-11-20",
                        "end_date": "2026-11-22"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Global Challenge 2027 II Basculegion": [
            {
                "species": "Basculegion",
                "form": "Male",
                "national_dex_number": 902,
                "base_stats": {
                    "hp": 120,
                    "attack": 112,
                    "defense": 65,
                    "special_attack": 80,
                    "special_defense": 75,
                    "speed": 78
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Ghost",
                "catch_rate": 135,
                "base_experience": 265,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water2",
                "egg_group_2": "Water2",
                "abilities": [
                    "Swift Swim",
                    "Adaptability"
                ],
                "hidden_ability": "Mold Breaker",
                "weight": 110.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Basculegion",
                "event_name": "Global Challenge 2027 II Basculegion",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "November 3, 2026",
                        "start_date": "2026-11-03",
                        "end_date": "2026-11-03"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Monthly Challenge Series October 2026 Sirfetch'd": [
            {
                "species": "Sirfetch'd",
                "form": null,
                "national_dex_number": 865,
                "base_stats": {
                    "hp": 62,
                    "attack": 135,
                    "defense": 95,
                    "special_attack": 68,
                    "special_defense": 82,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 177,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Ground",
                "abilities": [
                    "Steadfast"
                ],
                "hidden_ability": "Scrappy",
                "weight": 117.0,
                "pokedex_entry": "pokedex/legends_za.js#Sirfetch'd",
                "event_name": "Monthly Challenge Series October 2026 Sirfetch'd",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "October 26, 2026",
                        "start_date": "2026-10-26",
                        "end_date": "2026-10-26"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-7 Battle Pass Pokémon": [
            {
                "species": "Baxcalibur",
                "form": null,
                "national_dex_number": 998,
                "base_stats": {
                    "hp": 115,
                    "attack": 145,
                    "defense": 92,
                    "special_attack": 75,
                    "special_defense": 86,
                    "speed": 87
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Ice",
                "catch_rate": 10,
                "base_experience": 300,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "Dragon",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Thermal Exchange"
                ],
                "hidden_ability": "Ice Body",
                "weight": 210.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Baxcalibur",
                "event_name": "Baxcalubur",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Thermal Exchange",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Glaive Rush",
                    "Icicle Crash",
                    "Earthquake",
                    "Dragon Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-7 Battle Pass Season M-7 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "October 7 to November 4, 2026",
                        "start_date": "2026-10-07",
                        "end_date": "2026-11-04"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Absol",
                "form": null,
                "national_dex_number": 359,
                "base_stats": {
                    "hp": 65,
                    "attack": 130,
                    "defense": 60,
                    "special_attack": 75,
                    "special_defense": 60,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Dark",
                "catch_rate": 30,
                "base_experience": 163,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure",
                    "Super Luck"
                ],
                "hidden_ability": "Justified",
                "weight": 47.0,
                "pokedex_entry": "pokedex/legends_za.js#Absol",
                "event_name": "Absol",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Justified",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Night Slash",
                    "Shadow Claw",
                    "Sucker Punch",
                    "Swords Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-7 Battle Pass Season M-7 Battle Pass (Lv. 8)",
                        "language": null,
                        "location": null,
                        "date": "October 7 to November 4, 2026",
                        "start_date": "2026-10-07",
                        "end_date": "2026-11-04"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Cinderace",
                "form": null,
                "national_dex_number": 815,
                "base_stats": {
                    "hp": 80,
                    "attack": 116,
                    "defense": 75,
                    "special_attack": 65,
                    "special_defense": 75,
                    "speed": 119
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 265,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Libero",
                "weight": 33.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Cinderace",
                "event_name": "Cinderace",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Libero",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Pyro Ball",
                    "High Jump Kick",
                    "U-turn",
                    "Sucker Punch"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-7 Battle Pass Season M-7 Battle Pass (Lv. 27)",
                        "language": null,
                        "location": null,
                        "date": "October 7 to November 4, 2026",
                        "start_date": "2026-10-07",
                        "end_date": "2026-11-04"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Global Challenge 2027 I Archaludon": [
            {
                "species": "Archaludon",
                "form": null,
                "national_dex_number": 1018,
                "base_stats": {
                    "hp": 90,
                    "attack": 105,
                    "defense": 130,
                    "special_attack": 125,
                    "special_defense": 65,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 3,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Dragon",
                "catch_rate": 10,
                "base_experience": 300,
                "gender_ratio": 127,
                "egg_cycles": 30,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Stamina",
                    "Sturdy"
                ],
                "hidden_ability": "Stalwart",
                "weight": 60.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Archaludon",
                "event_name": "Global Challenge 2027 I Archaludon",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Calm",
                "ability": "Stamina",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Protect",
                    "Flash Cannon",
                    "Dragon Pulse",
                    "Electro Shot"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": null,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": 32,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "September 29, 2026",
                        "start_date": "2026-09-29",
                        "end_date": "2026-09-29"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Monthly Challenge Series September 2026 Indeedee": [
            {
                "species": "Indeedee",
                "form": "Female",
                "national_dex_number": 876,
                "base_stats": {
                    "hp": 70,
                    "attack": 55,
                    "defense": 65,
                    "special_attack": 95,
                    "special_defense": 105,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Normal",
                "catch_rate": 30,
                "base_experience": 166,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Own Tempo",
                    "Synchronize"
                ],
                "hidden_ability": "Psychic Surge",
                "weight": 28.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Indeedee (Female)",
                "event_name": "Monthly Challenge Series September 2026 Indeedee",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Modest",
                "ability": "Psychic Surge",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Psychic",
                    "Alluring Voice",
                    "Trick Room",
                    "Healing Wish"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "September 21, 2026",
                        "start_date": "2026-09-21",
                        "end_date": "2026-09-21"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-6 Battle Pass Pokémon": [
            {
                "species": "Golisopod",
                "form": null,
                "national_dex_number": 768,
                "base_stats": {
                    "hp": 75,
                    "attack": 125,
                    "defense": 140,
                    "special_attack": 60,
                    "special_defense": 90,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 2,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Bug",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 186,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Water3",
                "abilities": [
                    "Emergency Exit"
                ],
                "hidden_ability": null,
                "weight": 108.0,
                "pokedex_entry": "pokedex/legends_za.js#Golisopod",
                "event_name": "Golisopod",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Emergency Exit",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "First Impression",
                    "U-turn",
                    "Iron Head",
                    "Close Combat"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-6 Battle Pass Season M-6 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "September 9 to October 7, 2026",
                        "start_date": "2026-09-09",
                        "end_date": "2026-10-07"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Lucario",
                "form": null,
                "national_dex_number": 448,
                "base_stats": {
                    "hp": 70,
                    "attack": 110,
                    "defense": 70,
                    "special_attack": 115,
                    "special_defense": 70,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Steel",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": "Justified",
                "weight": 54.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Lucario",
                "event_name": "Lucario",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Aura Sphere",
                    "Flash Cannon",
                    "Vacuum Wave",
                    "Nasty Plot"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-6 Battle Pass Season M-6 Battle Pass (Lv. 10)",
                        "language": null,
                        "location": null,
                        "date": "September 9 to October 7, 2026",
                        "start_date": "2026-09-09",
                        "end_date": "2026-10-07"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Rillaboom",
                "form": null,
                "national_dex_number": 812,
                "base_stats": {
                    "hp": 100,
                    "attack": 125,
                    "defense": 90,
                    "special_attack": 60,
                    "special_defense": 70,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 265,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Grassy Surge",
                "weight": 90.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Rillaboom",
                "event_name": "Rillaboom",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Grassy Surge",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Grassy Glide",
                    "High Horsepower",
                    "Knock Off",
                    "U-turn"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-6 Battle Pass Season M-6 Battle Pass (Lv. 27)",
                        "language": null,
                        "location": null,
                        "date": "September 9 to October 7, 2026",
                        "start_date": "2026-09-09",
                        "end_date": "2026-10-07"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "2026 Worlds Twitch Drops": [
            {
                "species": "Incineroar",
                "form": null,
                "national_dex_number": 727,
                "base_stats": {
                    "hp": 95,
                    "attack": 115,
                    "defense": 90,
                    "special_attack": 80,
                    "special_defense": 90,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Dark",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Intimidate",
                "weight": 83.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Incineroar",
                "event_name": "2026 Worlds Incineroar",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Careful",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Fake Out",
                    "Parting Shot",
                    "Throat Chop",
                    "Flare Blitz"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": null,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": 32,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "title": "the Festive",
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 28 to September 3, 2026",
                        "start_date": "2026-08-28",
                        "end_date": "2026-09-03"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Monthly Challenge Series August 2026 Alolan Raichu": [
            {
                "species": "Raichu",
                "form": "Alolan Form",
                "national_dex_number": 26,
                "base_stats": {
                    "hp": 60,
                    "attack": 85,
                    "defense": 50,
                    "special_attack": 95,
                    "special_defense": 85,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Electric",
                "type_2": "Psychic",
                "catch_rate": 75,
                "base_experience": 243,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Surge Surfer"
                ],
                "hidden_ability": null,
                "weight": 21.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Alolan Raichu",
                "event_name": "Monthly Challenge Series August 2026 Alolan Raichu",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Surge Surfer",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Rising Voltage",
                    "Psychic",
                    "Surf",
                    "Encore"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "August 24, 2026",
                        "start_date": "2026-08-24",
                        "end_date": "2026-08-24"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "CoroCoro Comic Charizard": [
            {
                "species": "Charizard",
                "form": null,
                "national_dex_number": 6,
                "base_stats": {
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 240,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Solar Power",
                "weight": 90.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Charizard",
                "event_name": "CoroCoro Comic Charizard",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Blaze",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Flare Blitz",
                    "Outrage",
                    "Dragon Claw",
                    "Dragon Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 10, 2026 to November 8, 2026",
                        "start_date": "2026-08-10",
                        "end_date": "2026-11-08"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-5 Battle Pass Pokémon": [
            {
                "species": "Excadrill",
                "form": null,
                "national_dex_number": 530,
                "base_stats": {
                    "hp": 110,
                    "attack": 135,
                    "defense": 60,
                    "special_attack": 50,
                    "special_defense": 65,
                    "speed": 88
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Ground",
                "type_2": "Steel",
                "catch_rate": 60,
                "base_experience": 178,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Sand Rush",
                    "Sand Force"
                ],
                "hidden_ability": "Mold Breaker",
                "weight": 40.4,
                "pokedex_entry": "pokedex/scarlet_violet.js#Excadrill",
                "event_name": "Excadrill",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Mold Breaker",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Earthquake",
                    "Iron Head",
                    "Rock Slide",
                    "Horn Drill"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-5 Battle Pass Season M-5 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "August 5 to September 9, 2026",
                        "start_date": "2026-08-05",
                        "end_date": "2026-09-09"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Scrafty",
                "form": null,
                "national_dex_number": 560,
                "base_stats": {
                    "hp": 65,
                    "attack": 90,
                    "defense": 115,
                    "special_attack": 45,
                    "special_defense": 115,
                    "speed": 58
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Fighting",
                "catch_rate": 90,
                "base_experience": 171,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Shed Skin",
                    "Moxie"
                ],
                "hidden_ability": "Intimidate",
                "weight": 30.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Scrafty",
                "event_name": "Scrafty",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Drain Punch",
                    "Knock Off",
                    "Poison Jab",
                    "Dragon Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-5 Battle Pass Season M-5 Battle Pass (Lv. 10)",
                        "language": null,
                        "location": null,
                        "date": "August 5 to September 9, 2026",
                        "start_date": "2026-08-05",
                        "end_date": "2026-09-09"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Chandelure",
                "form": null,
                "national_dex_number": 609,
                "base_stats": {
                    "hp": 60,
                    "attack": 55,
                    "defense": 90,
                    "special_attack": 145,
                    "special_defense": 90,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Ghost",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 234,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Flash Fire",
                    "Flame Body"
                ],
                "hidden_ability": "Infiltrator",
                "weight": 34.3,
                "pokedex_entry": "pokedex/scarlet_violet.js#Chandelure",
                "event_name": "Chandelure",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Flash Fire",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Overheat",
                    "Flamethrower",
                    "Shadow Ball",
                    "Energy Ball"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-5 Battle Pass Season M-5 Battle Pass (Lv. 25)",
                        "language": null,
                        "location": null,
                        "date": "August 5 to September 9, 2026",
                        "start_date": "2026-08-05",
                        "end_date": "2026-09-09"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Monthly Challenge Series July 2026 Mawile": [
            {
                "species": "Mawile",
                "form": null,
                "national_dex_number": 303,
                "base_stats": {
                    "hp": 50,
                    "attack": 85,
                    "defense": 85,
                    "special_attack": 55,
                    "special_defense": 55,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Fairy",
                "catch_rate": 45,
                "base_experience": 133,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hyper Cutter",
                    "Intimidate"
                ],
                "hidden_ability": "Sheer Force",
                "weight": 11.5,
                "pokedex_entry": "pokedex/legends_za.js#Mawile",
                "event_name": "Monthly Challenge Series July 2026 Mawile",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Play Rough",
                    "Knock Off",
                    "Sucker Punch",
                    "Swords Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "July 27, 2026",
                        "start_date": "2026-07-27",
                        "end_date": "2026-07-27"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "CoroCoro Comic Lucario": [
            {
                "species": "Lucario",
                "form": null,
                "national_dex_number": 448,
                "base_stats": {
                    "hp": 70,
                    "attack": 110,
                    "defense": 70,
                    "special_attack": 115,
                    "special_defense": 70,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Steel",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": "Justified",
                "weight": 54.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Lucario",
                "event_name": "CoroCoro Comic Lucario",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Steel Beam",
                    "Aura Sphere",
                    "Dark Pulse",
                    "Dragon Pulse"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "July 15, 2026 to October 15, 2026",
                        "start_date": "2026-07-15",
                        "end_date": "2026-10-15"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-4 Battle Pass Pokémon": [
            {
                "species": "Blaziken",
                "form": null,
                "national_dex_number": 257,
                "base_stats": {
                    "hp": 80,
                    "attack": 120,
                    "defense": 70,
                    "special_attack": 110,
                    "special_defense": 70,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Speed Boost",
                "weight": 52.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Blaziken",
                "event_name": "Blaziken",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Speed Boost",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Flare Blitz",
                    "High Jump Kick",
                    "Knock Off",
                    "Protect"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-4 Battle Pass Season M-4 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "July 8 to August 5, 2026",
                        "start_date": "2026-07-08",
                        "end_date": "2026-08-05"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Swampert",
                "form": null,
                "national_dex_number": 260,
                "base_stats": {
                    "hp": 100,
                    "attack": 110,
                    "defense": 90,
                    "special_attack": 85,
                    "special_defense": 90,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Ground",
                "catch_rate": 45,
                "base_experience": 241,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Damp",
                "weight": 81.9,
                "pokedex_entry": "pokedex/scarlet_violet.js#Swampert",
                "event_name": "Swampert",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Torrent",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Wave Crash",
                    "Flip Turn",
                    "Earthquake",
                    "Ice Punch"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-4 Battle Pass Season M-4 Battle Pass (Lv. 10)",
                        "language": null,
                        "location": null,
                        "date": "July 8 to August 5, 2026",
                        "start_date": "2026-07-08",
                        "end_date": "2026-08-05"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Sceptile",
                "form": null,
                "national_dex_number": 254,
                "base_stats": {
                    "hp": 70,
                    "attack": 85,
                    "defense": 65,
                    "special_attack": 105,
                    "special_defense": 85,
                    "speed": 120
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Unburden",
                "weight": 52.2,
                "pokedex_entry": "pokedex/scarlet_violet.js#Sceptile",
                "event_name": "Sceptile",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Timid",
                "ability": "Overgrow",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Leaf Storm",
                    "Dragon Pulse",
                    "Focus Blast",
                    "Shed Tail"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-4 Battle Pass Season M-4 Battle Pass (Lv. 25)",
                        "language": null,
                        "location": null,
                        "date": "July 8 to August 5, 2026",
                        "start_date": "2026-07-08",
                        "end_date": "2026-08-05"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Monthly Challenge Series June 2026 Tyranitar": [
            {
                "species": "Tyranitar",
                "form": null,
                "national_dex_number": 248,
                "base_stats": {
                    "hp": 100,
                    "attack": 134,
                    "defense": 110,
                    "special_attack": 95,
                    "special_defense": 100,
                    "speed": 61
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Rock",
                "type_2": "Dark",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Monster",
                "abilities": [
                    "Sand Stream"
                ],
                "hidden_ability": "Unnerve",
                "weight": 202.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Tyranitar",
                "event_name": "Monthly Challenge Series June 2026 Tyranitar",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Sand Stream",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Stone Edge",
                    "Knock Off",
                    "Earthquake",
                    "Dragon Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "June 29, 2026",
                        "start_date": "2026-06-29",
                        "end_date": "2026-06-29"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-3 Battle Pass Pokémon": [
            {
                "species": "Eelektross",
                "form": null,
                "national_dex_number": 604,
                "base_stats": {
                    "hp": 85,
                    "attack": 115,
                    "defense": 80,
                    "special_attack": 105,
                    "special_defense": 80,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 30,
                "base_experience": 232,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Levitate"
                ],
                "hidden_ability": null,
                "weight": 80.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Eelektross",
                "event_name": "Eelekross",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Levitate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Supercell Slam",
                    "Drain Punch",
                    "Liquidation",
                    "Coil"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-3 Battle Pass Season M-2 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "June 17 to July 8, 2026",
                        "start_date": "2026-06-17",
                        "end_date": "2026-07-08"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Metagross",
                "form": null,
                "national_dex_number": 376,
                "base_stats": {
                    "hp": 80,
                    "attack": 135,
                    "defense": 130,
                    "special_attack": 95,
                    "special_defense": 90,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 3,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Psychic",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 40,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Clear Body"
                ],
                "hidden_ability": "Light Metal",
                "weight": 550.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Metagross",
                "event_name": "Metagross",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Jolly",
                "ability": "Clear Body",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Iron Head",
                    "Psychic Fangs",
                    "Ice Punch",
                    "Bullet Punch"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-3 Battle Pass Season M-3 Battle Pass (Lv. 10)",
                        "language": null,
                        "location": null,
                        "date": "June 17 to July 8, 2026",
                        "start_date": "2026-06-17",
                        "end_date": "2026-07-08"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Starmie",
                "form": null,
                "national_dex_number": 121,
                "base_stats": {
                    "hp": 60,
                    "attack": 75,
                    "defense": 85,
                    "special_attack": 100,
                    "special_defense": 85,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Water",
                "type_2": "Psychic",
                "catch_rate": 60,
                "base_experience": 182,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water3",
                "egg_group_2": "Water3",
                "abilities": [
                    "Illuminate",
                    "Natural Cure"
                ],
                "hidden_ability": "Analytic",
                "weight": 80.0,
                "pokedex_entry": "pokedex/legends_za.js#Starmie",
                "event_name": "Starmie",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Natural Cure",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Liquidation",
                    "Flip Turn",
                    "Ice Spinner",
                    "Aqua Jet"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-3 Battle Pass Season M-3 Battle Pass (Lv. 25)",
                        "language": null,
                        "location": null,
                        "date": "June 17 to July 8, 2026",
                        "start_date": "2026-06-17",
                        "end_date": "2026-07-08"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Early download bonus Raichu": [
            {
                "species": "Raichu",
                "form": null,
                "national_dex_number": 26,
                "base_stats": {
                    "hp": 60,
                    "attack": 90,
                    "defense": 55,
                    "special_attack": 90,
                    "special_defense": 80,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 75,
                "base_experience": 218,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Static"
                ],
                "hidden_ability": "Lightning Rod",
                "weight": 30.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Raichu",
                "event_name": "Early download bonus Raichu",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Lightning Rod",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Volt Tackle",
                    "Play Rough",
                    "Drain Punch",
                    "Trailblaze"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Early Download Bonus"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Mailbox",
                        "language": null,
                        "location": null,
                        "date": "June 17 to September 1, 2026",
                        "start_date": "2026-06-17",
                        "end_date": "2026-09-01"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "2026 NAIC Blastoise": [
            {
                "species": "Blastoise",
                "form": null,
                "national_dex_number": 9,
                "base_stats": {
                    "hp": 79,
                    "attack": 83,
                    "defense": 100,
                    "special_attack": 85,
                    "special_defense": 105,
                    "speed": 78
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 3,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Rain Dish",
                "weight": 85.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Blastoise",
                "event_name": "2026 NAIC Blastoise",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Rain Dish",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Water Spout",
                    "Water Pulse",
                    "Aura Sphere",
                    "Shell Smash"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "title": "the Festive",
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "June 12 to 18, 2026",
                        "start_date": "2026-06-12",
                        "end_date": "2026-06-18"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "2026 Japan Championships Charizard": [
            {
                "species": "Charizard",
                "form": null,
                "national_dex_number": 6,
                "base_stats": {
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 240,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Solar Power",
                "weight": 90.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Charizard",
                "event_name": "2026 Japan Championships Charizard",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Blaze",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Flare Blitz",
                    "Dragon Claw",
                    "Thunder Punch",
                    "Dragon Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "title": "the Festive",
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Password: L12ARD0NPJCS26",
                        "language": null,
                        "location": null,
                        "date": "June 6 to 14, 2026",
                        "start_date": "2026-06-06",
                        "end_date": "2026-06-14"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Monthly Challenge Series May 2026 Gallade": [
            {
                "species": "Gallade",
                "form": null,
                "national_dex_number": 475,
                "base_stats": {
                    "hp": 68,
                    "attack": 125,
                    "defense": 65,
                    "special_attack": 65,
                    "special_defense": 115,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 233,
                "gender_ratio": 0,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Steadfast",
                    "Sharpness"
                ],
                "hidden_ability": "Justified",
                "weight": 52.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gallade",
                "event_name": "Monthly Challenge Series May 2026 Gallade",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Justified",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Close Combat",
                    "Psycho Cut",
                    "Ice Punch",
                    "Swords Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "June 1, 2026",
                        "start_date": "2026-06-01",
                        "end_date": "2026-06-01"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Pokémon Sports Day 2026 Gyarados": [
            {
                "species": "Gyarados",
                "form": null,
                "national_dex_number": 130,
                "base_stats": {
                    "hp": 95,
                    "attack": 125,
                    "defense": 79,
                    "special_attack": 60,
                    "special_defense": 100,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Intimidate"
                ],
                "hidden_ability": "Moxie",
                "weight": 235.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gyarados",
                "event_name": "Pokémon Sports Day 2026 Gyarados",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Waterfall",
                    "Earthquake",
                    "Ice Fang",
                    "Dragon Dance"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "title": "the Festive",
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Mystery Gift"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Password: DRAG0NDANCEPTC26",
                        "language": null,
                        "location": null,
                        "date": "May 24 to 31, 2026",
                        "start_date": "2026-05-24",
                        "end_date": "2026-05-31"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-2 Battle Pass Pokémon": [
            {
                "species": "Skarmory",
                "form": null,
                "national_dex_number": 227,
                "base_stats": {
                    "hp": 65,
                    "attack": 80,
                    "defense": 140,
                    "special_attack": 40,
                    "special_defense": 70,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 2,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Flying",
                "catch_rate": 25,
                "base_experience": 163,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Keen Eye",
                    "Sturdy"
                ],
                "hidden_ability": "Weak Armor",
                "weight": 50.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Skarmory",
                "event_name": "Skarmory",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Sturdy",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Brave Bird",
                    "Iron Head",
                    "Swords Dance",
                    "Roost"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-2 Battle Pass Season M-2 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "May 13 to June 17, 2026",
                        "start_date": "2026-05-13",
                        "end_date": "2026-06-17"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Kangaskhan",
                "form": null,
                "national_dex_number": 115,
                "base_stats": {
                    "hp": 105,
                    "attack": 95,
                    "defense": 80,
                    "special_attack": 40,
                    "special_defense": 80,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 172,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Monster",
                "egg_group_2": "Monster",
                "abilities": [
                    "Early Bird",
                    "Scrappy"
                ],
                "hidden_ability": "Inner Focus",
                "weight": 80.0,
                "pokedex_entry": "pokedex/legends_za.js#Kangaskhan",
                "event_name": "Kangaskhan",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Double-Edge",
                    "Earthquake",
                    "Fake Out",
                    "Sucker Punch"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-2 Battle Pass Season M-2 Battle Pass (Lv. 10)",
                        "language": null,
                        "location": null,
                        "date": "April 8 to May 13, 2026",
                        "start_date": "2026-04-08",
                        "end_date": "2026-05-13"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Gengar",
                "form": null,
                "national_dex_number": 94,
                "base_stats": {
                    "hp": 60,
                    "attack": 65,
                    "defense": 60,
                    "special_attack": 130,
                    "special_defense": 75,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Ghost",
                "type_2": "Poison",
                "catch_rate": 45,
                "base_experience": 225,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Cursed Body"
                ],
                "hidden_ability": null,
                "weight": 40.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gengar",
                "event_name": "Gengar",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Timid",
                "ability": "Cursed Body",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Shadow Ball",
                    "Sludge Bomb",
                    "Focus Blast",
                    "Substitute"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-2 Battle Pass Season M-2 Battle Pass (Lv. 25)",
                        "language": null,
                        "location": null,
                        "date": "May 13 to June 17, 2026",
                        "start_date": "2026-05-13",
                        "end_date": "2026-06-17"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Global Challenge 2026 I Venusaur": [
            {
                "species": "Venusaur",
                "form": null,
                "national_dex_number": 3,
                "base_stats": {
                    "hp": 80,
                    "attack": 82,
                    "defense": 83,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Poison",
                "catch_rate": 45,
                "base_experience": 236,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Chlorophyll",
                "weight": 100.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Venusaur",
                "event_name": "Global Challenge 2026 I Venusaur",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Chlorophyll",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Giga Drain",
                    "Sludge Bomb",
                    "Earth Power",
                    "Sleep Powder"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "May 5, 2026",
                        "start_date": "2026-05-05",
                        "end_date": "2026-05-05"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Warm-Up Challenge Gardevoir": [
            {
                "species": "Gardevoir",
                "form": null,
                "national_dex_number": 282,
                "base_stats": {
                    "hp": 68,
                    "attack": 65,
                    "defense": 65,
                    "special_attack": 125,
                    "special_defense": 115,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Psychic",
                "type_2": "Fairy",
                "catch_rate": 45,
                "base_experience": 233,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Synchronize",
                    "Trace"
                ],
                "hidden_ability": "Telepathy",
                "weight": 48.4,
                "pokedex_entry": "pokedex/scarlet_violet.js#Gardevoir",
                "event_name": "Warm-Up Challenge Gardevoir",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Trace",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Hyper Voice",
                    "Psyshock",
                    "Focus Blast",
                    "Calm Mind"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Competition Reward"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Official Online Competition",
                        "language": null,
                        "location": null,
                        "date": "April 13, 2026",
                        "start_date": "2026-04-13",
                        "end_date": "2026-04-13"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Season M-1 Battle Pass Pokémon": [
            {
                "species": "Emboar",
                "form": null,
                "national_dex_number": 500,
                "base_stats": {
                    "hp": 110,
                    "attack": 123,
                    "defense": 65,
                    "special_attack": 100,
                    "special_defense": 65,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 238,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Reckless",
                "weight": 150.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Emboar",
                "event_name": "Emboar",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Blaze",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Flare Blitz",
                    "Close Combat",
                    "Earthquake",
                    "Sucker Punch"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-1 Battle Pass Season M-1 Battle Pass (Lv. 2)",
                        "language": null,
                        "location": null,
                        "date": "April 8 to May 13, 2026",
                        "start_date": "2026-04-08",
                        "end_date": "2026-05-13"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Feraligatr",
                "form": null,
                "national_dex_number": 160,
                "base_stats": {
                    "hp": 85,
                    "attack": 105,
                    "defense": 100,
                    "special_attack": 79,
                    "special_defense": 83,
                    "speed": 78
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 239,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Water1",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Sheer Force",
                "weight": 88.8,
                "pokedex_entry": "pokedex/scarlet_violet.js#Feraligatr",
                "event_name": "Feraligatr",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Torrent",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Ice Punch",
                    "Liquidation",
                    "Dragon Dance",
                    "Double-Edge"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-1 Battle Pass Season M-1 Battle Pass (Lv. 10)",
                        "language": null,
                        "location": null,
                        "date": "April 8 to May 13, 2026",
                        "start_date": "2026-04-08",
                        "end_date": "2026-05-13"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            },
            {
                "species": "Meganium",
                "form": null,
                "national_dex_number": 154,
                "base_stats": {
                    "hp": 80,
                    "attack": 82,
                    "defense": 100,
                    "special_attack": 83,
                    "special_defense": 100,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 236,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Grass",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Leaf Guard",
                "weight": 100.5,
                "pokedex_entry": "pokedex/scarlet_violet.js#Meganium",
                "event_name": "Meganium",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Overgrow",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Solar Beam",
                    "Dazzling Gleam",
                    "Synthesis",
                    "Earth Power"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "20px|link=Pokémon Champions Season M-1 Battle Pass Season M-1 Battle Pass (Lv. 25)",
                        "language": null,
                        "location": null,
                        "date": "April 8 to May 13, 2026",
                        "start_date": "2026-04-08",
                        "end_date": "2026-05-13"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Champion Machamp": [
            {
                "species": "Machamp",
                "form": null,
                "national_dex_number": 68,
                "base_stats": {
                    "hp": 90,
                    "attack": 130,
                    "defense": 80,
                    "special_attack": 65,
                    "special_defense": 85,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 227,
                "gender_ratio": 63,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Guts",
                    "No Guard"
                ],
                "hidden_ability": "Steadfast",
                "weight": 130.0,
                "pokedex_entry": "pokedex/legends_za.js#Machamp",
                "event_name": "Champion Machamp",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "No Guard",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Dynamic Punch",
                    "Stone Edge",
                    "Ice Punch",
                    "Bullet Punch"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 32,
                    "attack": 32,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": null,
                    "speed": 2
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Campaign Gift"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Password: CHAMP10N",
                        "language": null,
                        "location": null,
                        "date": "April 8, 2026 to August 31, 2026",
                        "start_date": "2026-04-08",
                        "end_date": "2026-08-31"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ],
        "Early download bonus Dragonite": [
            {
                "species": "Dragonite",
                "form": null,
                "national_dex_number": 149,
                "base_stats": {
                    "hp": 91,
                    "attack": 134,
                    "defense": 95,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": "Multiscale",
                "weight": 210.0,
                "pokedex_entry": "pokedex/scarlet_violet.js#Dragonite",
                "event_name": "Early download bonus Dragonite",
                "level": null,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Multiscale",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": null,
                "trainer_id": null,
                "moves": [
                    "Draco Meteor",
                    "Fire Blast",
                    "Ice Beam",
                    "Extreme Speed"
                ],
                "ivs": null,
                "stat_points": {
                    "hp": 2,
                    "attack": null,
                    "defense": null,
                    "special_attack": 32,
                    "special_defense": null,
                    "speed": 32
                },
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Early Download Bonus"
                },
                "games": [
                    "Pokémon Champions"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon Champions"
                        ],
                        "method": "Mailbox",
                        "language": null,
                        "location": null,
                        "date": "April 8 to August 31, 2026",
                        "start_date": "2026-04-08",
                        "end_date": "2026-08-31"
                    }
                ],
                "source_page": "List of event distributions in Pokémon Champions"
            }
        ]
    }
};
