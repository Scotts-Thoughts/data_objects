// Event Pokémon distributed in Generation IV (264 Pokémon), scraped from
// Bulbapedia's event distribution lists by scrape_event_pokemon.py.
// Structure: { channel/list page: { event: [ pokemon, ... ] } }.
// Species fields (national_dex_number .. weight) come from the pokedex/*.js entry
// named in pokedex_entry (types and dex number from the event itself); every field
// from event_name on describes the distributed Pokémon.

export const eventPokemon = {
    "Local Japanese events": {
        "2010 Birthday Chimchar": [
            {
                "species": "Chimchar",
                "form": null,
                "national_dex_number": 390,
                "base_stats": {
                    "hp": 44,
                    "attack": 58,
                    "defense": 44,
                    "special_attack": 58,
                    "special_defense": 44,
                    "speed": 61
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
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
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": null,
                "weight": 6.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Chimchar",
                "event_name": "2010 Birthday Chimchar",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒコザル",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Blaze",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "ナゴヤ",
                "ot_gender": "Male",
                "trainer_id": "09120",
                "moves": [
                    "Flamethrower",
                    "ThunderPunch",
                    "Grass Knot",
                    "Helping Hand"
                ],
                "ivs": null,
                "met_location": "PC Nagoya",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "September 12 to November 3, 2010",
                        "start_date": "2010-09-12",
                        "end_date": "2010-11-03"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "7-Eleven Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "7-Eleven Pikachu",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Docile",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "セブン",
                "ot_gender": "Male",
                "trainer_id": "08200",
                "moves": [
                    "Present",
                    "Quick Attack",
                    "ThunderShock",
                    "Tail Whip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "August 20 to September 5, 2010",
                        "start_date": "2010-08-20",
                        "end_date": "2010-09-05"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2010 World Championships Crobat": [
            {
                "species": "Crobat",
                "form": null,
                "national_dex_number": 169,
                "base_stats": {
                    "hp": 85,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 90,
                "base_experience": 241,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 75.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Crobat",
                "event_name": "2010 World Championships Crobat",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "CROBAT",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "WORLD10",
                "ot_gender": "Male",
                "trainer_id": "08150",
                "moves": [
                    "Heat Wave",
                    "Air Slash",
                    "Sludge Bomb",
                    "Super Fang"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2010",
                        "start_date": "2010-08-15",
                        "end_date": "2010-08-15"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2010 Birthday Charmander": [
            {
                "species": "Charmander",
                "form": null,
                "national_dex_number": 4,
                "base_stats": {
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
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
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": null,
                "weight": 8.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Charmander",
                "event_name": "2010 Birthday Charmander",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒトカゲ",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Blaze",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "トウキョー",
                "ot_gender": "Male",
                "trainer_id": "07200",
                "moves": [
                    "Return",
                    "Hidden Power",
                    "Quick Attack",
                    "Howl"
                ],
                "ivs": null,
                "met_location": "PC Tokyo",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 20 to November 3, 2010",
                        "start_date": "2010-07-20",
                        "end_date": "2010-11-03"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Cinema Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Cinema Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "セレビィ",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "えいがかん",
                "ot_gender": "Female",
                "trainer_id": "07100",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 10",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "July 3, 2010; July 10 to September 30, 2010",
                        "start_date": "2010-07-03",
                        "end_date": "2010-09-30",
                        "periods": [
                            {
                                "start": "2010-07-03",
                                "end": "2010-07-03"
                            },
                            {
                                "start": "2010-07-10",
                                "end": "2010-09-30"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Celebi"
                ]
            }
        ],
        "Crown Beasts": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ライコウ",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "クラウン",
                "ot_gender": "Male",
                "trainer_id": "06180",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 10",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "June 18 to August 31, 2010",
                        "start_date": "2010-06-18",
                        "end_date": "2010-08-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Raikou"
                ]
            },
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "エンテイ",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "クラウン",
                "ot_gender": "Male",
                "trainer_id": "06180",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 10",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "June 18 to August 31, 2010",
                        "start_date": "2010-06-18",
                        "end_date": "2010-08-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Entei"
                ]
            },
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "スイクン",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "クラウン",
                "ot_gender": "Male",
                "trainer_id": "06180",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 10",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "June 18 to August 31, 2010",
                        "start_date": "2010-06-18",
                        "end_date": "2010-08-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Suicune"
                ]
            }
        ],
        "2010 World Championships Eevee": [
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
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Eevee",
                "event_name": "2010 World Championships Eevee",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "イーブイ",
                "gender": "Male",
                "nature": "Hardy",
                "ability": [
                    "Adaptability",
                    "Run Away"
                ],
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "ＷＣＳ",
                "ot_gender": "Male",
                "trainer_id": "01110",
                "moves": [
                    "Iron Tail",
                    "Trump Card",
                    "Flail",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "January 11 to May 9, 2010",
                        "start_date": "2010-01-11",
                        "end_date": "2010-05-09"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2009 Birthday Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "2009 Birthday Pikachu",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Mild",
                "ability": "Static",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "ヨコハマ",
                "ot_gender": "Male",
                "trainer_id": "12269",
                "moves": [
                    "Surf",
                    "Thunder",
                    "Protect"
                ],
                "ivs": null,
                "met_location": "PC Yokohama",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "December 26, 2009 to November 3, 2010",
                        "start_date": "2009-12-26",
                        "end_date": "2010-11-03"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Ario Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Ario Pikachu",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Female",
                "nature": "Bashful",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "アリオ",
                "ot_gender": "Male",
                "trainer_id": "11219",
                "moves": [
                    "Present",
                    "Quick Attack",
                    "Thunder Wave",
                    "Tail Whip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "November 21 to 23, 2009",
                        "start_date": "2009-11-21",
                        "end_date": "2009-11-23"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Kyoto Cross Media Experience 2009 Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Kyoto Cross Media Experience 2009 Pikachu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Static",
                "held_item": "Soothe Bell",
                "ball": "Cherish Ball",
                "ot": "キョウト",
                "ot_gender": "Male",
                "trainer_id": "10039",
                "moves": [
                    "Last Resort",
                    "Present",
                    "Thunderbolt",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "October 3 to 4, 2009",
                        "start_date": "2009-10-03",
                        "end_date": "2009-10-04"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2009 Birthday Chimchar": [
            {
                "species": "Chimchar",
                "form": null,
                "national_dex_number": 390,
                "base_stats": {
                    "hp": 44,
                    "attack": 58,
                    "defense": 44,
                    "special_attack": 58,
                    "special_defense": 44,
                    "speed": 61
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
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
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": null,
                "weight": 6.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Chimchar",
                "event_name": "2009 Birthday Chimchar",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒコザル",
                "gender": "Male",
                "nature": "Mild",
                "ability": "Blaze",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "ナゴヤ",
                "ot_gender": "Male",
                "trainer_id": "09129",
                "moves": [
                    "Flamethrower",
                    "ThunderPunch",
                    "Grass Knot",
                    "Helping Hand"
                ],
                "ivs": null,
                "met_location": "PC Nagoya",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "September 12, 2009 to September 11, 2010",
                        "start_date": "2009-09-12",
                        "end_date": "2010-09-11"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2009 World Championships Weavile": [
            {
                "species": "Weavile",
                "form": null,
                "national_dex_number": 461,
                "base_stats": {
                    "hp": 70,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 85,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 34.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Weavile",
                "event_name": "2009 World Championships Weavile",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "WEAVILE",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pressure",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "WORLD09",
                "ot_gender": "Male",
                "trainer_id": "08159",
                "moves": [
                    "Fake Out",
                    "Ice Shard",
                    "Night Slash",
                    "Brick Break"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2009",
                        "start_date": "2009-08-15",
                        "end_date": "2009-08-15"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2009 Birthday Charmander": [
            {
                "species": "Charmander",
                "form": null,
                "national_dex_number": 4,
                "base_stats": {
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
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
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": null,
                "weight": 8.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Charmander",
                "event_name": "2009 Birthday Charmander",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒトカゲ",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Blaze",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "トウキョー",
                "ot_gender": "Male",
                "trainer_id": "07209",
                "moves": [
                    "Return",
                    "Hidden Power",
                    "Quick Attack",
                    "Howl"
                ],
                "ivs": null,
                "met_location": "PC Tokyo",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 20, 2009 to July 19, 2010",
                        "start_date": "2009-07-20",
                        "end_date": "2010-07-19"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Cinema Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Cinema Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "アルセウス",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "えいがかん",
                "ot_gender": "Male",
                "trainer_id": "07189",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 09",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 5, 2009; July 11 to 12, 2009; July 18 to September 30, 2009",
                        "start_date": "2009-07-05",
                        "end_date": "2009-09-30",
                        "periods": [
                            {
                                "start": "2009-07-05",
                                "end": "2009-07-05"
                            },
                            {
                                "start": "2009-07-11",
                                "end": "2009-07-12"
                            },
                            {
                                "start": "2009-07-18",
                                "end": "2009-09-30"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Arceus"
                ]
            }
        ],
        "Shokotan Pikachu-colored Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Shokotan Pikachu-colored Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ピチュー",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "しょこたん",
                "ot_gender": "Female",
                "trainer_id": "06199",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 09",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "June 19 to August 31, 2009",
                        "start_date": "2009-06-19",
                        "end_date": "2009-08-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Shokotan Pichu"
                ]
            }
        ],
        "Pokémon Center Meowth": [
            {
                "species": "Meowth",
                "form": null,
                "national_dex_number": 52,
                "base_stats": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 35,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
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
                "catch_rate": 255,
                "base_experience": 58,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pickup",
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 4.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Meowth",
                "event_name": "Pokémon Center Meowth",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "ニャース",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pickup",
                "held_item": "Amulet Coin",
                "ball": "Cherish Ball",
                "ot": "オーサカ",
                "ot_gender": "Male",
                "trainer_id": "03209",
                "moves": [
                    "Fake Out",
                    "Pay Day",
                    "Assist",
                    "Scratch"
                ],
                "ivs": null,
                "met_location": "Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "March 20 to April 12, 2009",
                        "start_date": "2009-03-20",
                        "end_date": "2009-04-12"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Sleeping Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Sleeping Pikachu",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Relaxed",
                "ability": "Static",
                "held_item": "Chesto Berry",
                "ball": "Cherish Ball",
                "ot": "おねむり",
                "ot_gender": "Male",
                "trainer_id": "02079",
                "moves": [
                    "Rest",
                    "Sleep Talk",
                    "Yawn",
                    "Snore"
                ],
                "ivs": null,
                "met_location": "Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "February 7 to March 15, 2009",
                        "start_date": "2009-02-07",
                        "end_date": "2009-03-15"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2008 Birthday Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "2008 Birthday Pikachu",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Modest",
                "ability": "Static",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "ヨコハマ",
                "ot_gender": "Male",
                "trainer_id": "12268",
                "moves": [
                    "Surf",
                    "Thunder",
                    "Protect"
                ],
                "ivs": null,
                "met_location": "PC Yokohama",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "December 26, 2008 to December 25, 2009",
                        "start_date": "2008-12-26",
                        "end_date": "2009-12-25"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Pokémon Center Eevee": [
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
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Eevee",
                "event_name": "Pokémon Center Eevee",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "イーブイ",
                "gender": "Female",
                "nature": "Lonely",
                "ability": "Adaptability",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ブイコレ",
                "ot_gender": "Female",
                "trainer_id": "12068",
                "moves": [
                    "Covet",
                    "Bite",
                    "Helping Hand",
                    "Attract"
                ],
                "ivs": null,
                "met_location": "Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "December 6, 2008 to January 12, 2009, March 6 to 19, 2009",
                        "start_date": "2008-12-06",
                        "end_date": "2009-03-19",
                        "periods": [
                            {
                                "start": "2008-12-06",
                                "end": "2009-01-12"
                            },
                            {
                                "start": "2009-03-06",
                                "end": "2009-03-19"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2008 TCG World Championships Milotic": [
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "2008 TCG World Championships Milotic",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "ミロカロス",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "ＷＣＳ",
                "ot_gender": "Male",
                "trainer_id": "10128",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Icy Wind"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "October 12, 2008 to January 25, 2009",
                        "start_date": "2008-10-12",
                        "end_date": "2009-01-25"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Pokémon Center Yokohama Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Pokémon Center Yokohama Pikachu",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Modest",
                "ability": "Static",
                "held_item": "Shell Bell",
                "ball": "Cherish Ball",
                "ot": "ヨコハマ",
                "ot_gender": "Male",
                "trainer_id": "10108",
                "moves": [
                    "Surf",
                    "Thunder",
                    "Protect"
                ],
                "ivs": null,
                "met_location": "PC Yokohama",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "October 10 to November 3, 2008",
                        "start_date": "2008-10-10",
                        "end_date": "2008-11-03"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2008 Tanabata Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "2008 Tanabata Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ジラーチ",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "タナバタ",
                "ot_gender": "Female",
                "trainer_id": "08188",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "August 18 to 31, 2008",
                        "start_date": "2008-08-18",
                        "end_date": "2008-08-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Tanabata events — 2008"
                ]
            }
        ],
        "2008 World Championships Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "2008 World Championships Lucario",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "WORLD08",
                "ot_gender": "Male",
                "trainer_id": "08178",
                "moves": [
                    "Force Palm",
                    "Bone Rush",
                    "Sunny Day",
                    "Blaze Kick"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 17, 2008",
                        "start_date": "2008-08-17",
                        "end_date": "2008-08-17"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2008 Birthday Charmander": [
            {
                "species": "Charmander",
                "form": null,
                "national_dex_number": 4,
                "base_stats": {
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
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
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": null,
                "weight": 8.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Charmander",
                "event_name": "2008 Birthday Charmander",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒトカゲ",
                "gender": "Male",
                "nature": "Naive",
                "ability": "Blaze",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "トウキョー",
                "ot_gender": "Male",
                "trainer_id": "07208",
                "moves": [
                    "Return",
                    "Hidden Power",
                    "Quick Attack",
                    "Howl"
                ],
                "ivs": null,
                "met_location": "PC Tokyo",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 20, 2008 to July 19, 2009",
                        "start_date": "2008-07-20",
                        "end_date": "2009-07-19"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Cinema Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Cinema Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "シェイミ",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "えいがかん",
                "ot_gender": "Female",
                "trainer_id": "07198",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 08",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 6, 2008; July 19 to September 30, 2008",
                        "start_date": "2008-07-06",
                        "end_date": "2008-09-30",
                        "periods": [
                            {
                                "start": "2008-07-06",
                                "end": "2008-07-06"
                            },
                            {
                                "start": "2008-07-19",
                                "end": "2008-09-30"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Shaymin"
                ]
            }
        ],
        "Movie Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Movie Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "レジギガス",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "テンイむら",
                "ot_gender": "Male",
                "trainer_id": "07198",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 08",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "June 20 to August 31, 2008",
                        "start_date": "2008-06-20",
                        "end_date": "2008-08-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Regigigas"
                ]
            }
        ],
        "McDonald's Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "McDonald's Pikachu",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Female",
                "nature": "Bashful",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "マック",
                "ot_gender": "Male",
                "trainer_id": "05308",
                "moves": [
                    "Quick Attack",
                    "ThunderShock",
                    "Tail Whip",
                    "Present"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "May 30 to June 19, 2008",
                        "start_date": "2008-05-30",
                        "end_date": "2008-06-19"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Strongest Pokémon": [
            {
                "species": "Salamence",
                "form": null,
                "national_dex_number": 373,
                "base_stats": {
                    "hp": 95,
                    "attack": 135,
                    "defense": 80,
                    "special_attack": 110,
                    "special_defense": 80,
                    "speed": 100
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
                "egg_group_1": "Dragon",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Intimidate"
                ],
                "hidden_ability": null,
                "weight": 102.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Salamence",
                "event_name": "Salamence",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ボーマンダ",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Intimidate",
                "held_item": "Dragon Fang",
                "ball": "Cherish Ball",
                "ot": "さいきょう",
                "ot_gender": "Male",
                "trainer_id": "02158",
                "moves": [
                    "Hydro Pump",
                    "Stone Edge",
                    "Fire Blast",
                    "Dragon Claw"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "February 15 to March 14, 2008",
                        "start_date": "2008-02-15",
                        "end_date": "2008-03-14"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            },
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
                "hidden_ability": null,
                "weight": 210.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Dragonite",
                "event_name": "Dragonite",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "カイリュー",
                "gender": "Male",
                "nature": "Mild",
                "ability": "Inner Focus",
                "held_item": "Yache Berry",
                "ball": "Cherish Ball",
                "ot": "さいきょう",
                "ot_gender": "Male",
                "trainer_id": "01158",
                "moves": [
                    "Draco Meteor",
                    "Thunderbolt",
                    "Outrage",
                    "Dragon Dance"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "January 15 to February 14, 2008",
                        "start_date": "2008-01-15",
                        "end_date": "2008-02-14"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            },
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "Milotic",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミロカロス",
                "gender": "Female",
                "nature": "Bold",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "さいきょう",
                "ot_gender": "Female",
                "trainer_id": "12157",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Ice Beam"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2007 to January 14, 2008",
                        "start_date": "2007-12-15",
                        "end_date": "2008-01-14"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magmortar",
                "form": null,
                "national_dex_number": 467,
                "base_stats": {
                    "hp": 75,
                    "attack": 95,
                    "defense": 67,
                    "special_attack": 125,
                    "special_defense": 95,
                    "speed": 83
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
                "type_2": "Fire",
                "catch_rate": 30,
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Flame Body"
                ],
                "hidden_ability": null,
                "weight": 68.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magmortar",
                "event_name": "Magmortar",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ブーバーン",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Flame Body",
                "held_item": "Charcoal",
                "ball": "Cherish Ball",
                "ot": "さいきょう",
                "ot_gender": "Male",
                "trainer_id": "12017",
                "moves": [
                    "Confuse Ray",
                    "Fire Punch",
                    "Lava Plume",
                    "Flamethrower"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 1 to 14, 2007",
                        "start_date": "2007-12-01",
                        "end_date": "2007-12-14"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            },
            {
                "species": "Electivire",
                "form": null,
                "national_dex_number": 466,
                "base_stats": {
                    "hp": 75,
                    "attack": 123,
                    "defense": 67,
                    "special_attack": 95,
                    "special_defense": 85,
                    "speed": 95
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
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Motor Drive"
                ],
                "hidden_ability": null,
                "weight": 138.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Electivire",
                "event_name": "Electivire",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "エレキブル",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Motor Drive",
                "held_item": "Magnet",
                "ball": "Cherish Ball",
                "ot": "さいきょう",
                "ot_gender": "Male",
                "trainer_id": "11157",
                "moves": [
                    "Light Screen",
                    "ThunderPunch",
                    "Discharge",
                    "Thunderbolt"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "November 15 to 30, 2007",
                        "start_date": "2007-11-15",
                        "end_date": "2007-11-30"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Golgo Octillery": [
            {
                "species": "Octillery",
                "form": null,
                "national_dex_number": 224,
                "base_stats": {
                    "hp": 75,
                    "attack": 105,
                    "defense": 75,
                    "special_attack": 105,
                    "special_defense": 75,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 75,
                "base_experience": 168,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Water2",
                "abilities": [
                    "Suction Cups",
                    "Sniper"
                ],
                "hidden_ability": null,
                "weight": 28.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Octillery",
                "event_name": "Golgo Octillery",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "オクタン",
                "gender": "Female",
                "nature": "Serious",
                "ability": "Suction Cups",
                "held_item": "Focus Band",
                "ball": "Cherish Ball",
                "ot": "ごるこ",
                "ot_gender": "Female",
                "trainer_id": "10147",
                "moves": [
                    "Octazooka",
                    "Ice Beam",
                    "Signal Beam",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "October 14 to 31, 2007",
                        "start_date": "2007-10-14",
                        "end_date": "2007-10-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "2007 Birthday Charmander": [
            {
                "species": "Charmander",
                "form": null,
                "national_dex_number": 4,
                "base_stats": {
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
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
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": null,
                "weight": 8.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Charmander",
                "event_name": "2007 Birthday Charmander",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒトカゲ",
                "gender": "Male",
                "nature": "Mild",
                "ability": "Blaze",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "トウキョー",
                "ot_gender": "Male",
                "trainer_id": "07207",
                "moves": [
                    "Return",
                    "Hidden Power",
                    "Quick Attack",
                    "Howl"
                ],
                "ivs": null,
                "met_location": "PC Tokyo",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 20, 2007 to July 19, 2008",
                        "start_date": "2007-07-20",
                        "end_date": "2008-07-19"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "PalCity Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "Second distribution",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "マナフィ",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Female",
                "trainer_id": "07157",
                "moves": [
                    "Heart Swap",
                    "Water Pulse",
                    "Whirlpool",
                    "Acid Armor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "July 28 to 29, August 3 to 5, / August 10 to 12, August 17 to 19, / August 31 to September 2, 2007",
                        "start_date": "2007-07-28",
                        "end_date": "2007-09-02",
                        "periods": [
                            {
                                "start": "2007-07-28",
                                "end": "2007-07-29"
                            },
                            {
                                "start": "2007-08-03",
                                "end": "2007-08-05"
                            },
                            {
                                "start": "2007-08-10",
                                "end": "2007-08-12"
                            },
                            {
                                "start": "2007-08-17",
                                "end": "2007-08-19"
                            },
                            {
                                "start": "2007-08-31",
                                "end": "2007-09-02"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            },
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "First distribution",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "マナフィ",
                "gender": null,
                "nature": "Hardy",
                "ability": "Hydration",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Female",
                "trainer_id": "07157",
                "moves": [
                    "Heart Swap",
                    "Water Pulse",
                    "Whirlpool",
                    "Acid Armor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "July 15 to 16, July 21 to 22, 2007",
                        "start_date": "2007-07-15",
                        "end_date": "2007-07-22",
                        "periods": [
                            {
                                "start": "2007-07-15",
                                "end": "2007-07-16"
                            },
                            {
                                "start": "2007-07-21",
                                "end": "2007-07-22"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "PalCity Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "PalCity Lucario",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Modest",
                "ability": "Steadfast",
                "held_item": "Metal Coat",
                "ball": "Cherish Ball",
                "ot": "PALCITY",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "Aura Sphere",
                    "Dark Pulse",
                    "Dragon Pulse",
                    "Water Pulse"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "July 15 to 16, July 28 to 29, / August 3 to 5, August 10 to 12, / August 17 to 19, August 31 to September 2, 2007",
                        "start_date": "2007-07-15",
                        "end_date": "2007-09-02",
                        "periods": [
                            {
                                "start": "2007-07-15",
                                "end": "2007-07-16"
                            },
                            {
                                "start": "2007-07-28",
                                "end": "2007-07-29"
                            },
                            {
                                "start": "2007-08-03",
                                "end": "2007-08-05"
                            },
                            {
                                "start": "2007-08-10",
                                "end": "2007-08-12"
                            },
                            {
                                "start": "2007-08-17",
                                "end": "2007-08-19"
                            },
                            {
                                "start": "2007-08-31",
                                "end": "2007-09-02"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "PalCity Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Fukuoka PalCity Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Quirky",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "Transform",
                    "Metronome",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "July 15 to 16, 2007",
                        "start_date": "2007-07-15",
                        "end_date": "2007-07-16"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Sapporo PalCity Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "Amnesia",
                    "Metronome",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "July 28 to 29, 2007",
                        "start_date": "2007-07-28",
                        "end_date": "2007-07-29"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Makuhari PalCity Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "Mega Punch",
                    "Metronome",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "August 3 to 5, 2007",
                        "start_date": "2007-08-03",
                        "end_date": "2007-08-05"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Nagoya PalCity Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "Psychic",
                    "Metronome",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "August 10 to 12, 2007",
                        "start_date": "2007-08-10",
                        "end_date": "2007-08-12"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Yokohama PalCity Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "Barrier",
                    "Metronome",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "August 17 to 19, 2007",
                        "start_date": "2007-08-17",
                        "end_date": "2007-08-19"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Osaka PalCity Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "パルシティ",
                "ot_gender": "Male",
                "trainer_id": "07157",
                "moves": [
                    "AncientPower",
                    "Metronome",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "August 31 to September 2, 2007",
                        "start_date": "2007-08-31",
                        "end_date": "2007-09-02"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Cinema Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Cinema Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ダークライ",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "えいがかん",
                "ot_gender": "Female",
                "trainer_id": "07147",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 1, 2007; July 14 to September 9, 2007",
                        "start_date": "2007-07-01",
                        "end_date": "2007-09-09",
                        "periods": [
                            {
                                "start": "2007-07-01",
                                "end": "2007-07-01"
                            },
                            {
                                "start": "2007-07-14",
                                "end": "2007-09-09"
                            }
                        ]
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Eigakan Darkrai"
                ]
            }
        ],
        "2007 Tanabata Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "2007 Tanabata Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ジラーチ",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": [
                    "Ganlon Berry",
                    "Salac Berry"
                ],
                "ball": "Cherish Ball",
                "ot": "タナバタ",
                "ot_gender": "Male",
                "trainer_id": "07077",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "July 1 to 22, 2007",
                        "start_date": "2007-07-01",
                        "end_date": "2007-07-22"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Tanabata events — 2007"
                ]
            }
        ],
        "10th Movie Deoxys": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "10th Movie Deoxys",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "デオキシス",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": "NeverMeltIce",
                "ball": "Cherish Ball",
                "ot": "１０ｔｈ",
                "ot_gender": "Male",
                "trainer_id": "07147",
                "moves": [
                    "Psycho Boost",
                    "Zap Cannon",
                    "Iron Defense",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie 07",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "June 23 to September 2, 2007",
                        "start_date": "2007-06-23",
                        "end_date": "2007-09-02"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — １０ｔｈ Deoxys"
                ]
            }
        ],
        "Yamamoto Whiscash": [
            {
                "species": "Whiscash",
                "form": null,
                "national_dex_number": 340,
                "base_stats": {
                    "hp": 110,
                    "attack": 78,
                    "defense": 73,
                    "special_attack": 76,
                    "special_defense": 71,
                    "speed": 60
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
                "base_experience": 164,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water2",
                "egg_group_2": "Water2",
                "abilities": [
                    "Oblivious",
                    "Anticipation"
                ],
                "hidden_ability": null,
                "weight": 23.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Whiscash",
                "event_name": "Yamamoto Whiscash",
                "level": 51,
                "shiny": false,
                "is_egg": false,
                "nickname": "ナマズン",
                "gender": "Female",
                "nature": "Gentle",
                "ability": "Oblivious",
                "held_item": "Rindo Berry",
                "ball": "Cherish Ball",
                "ot": "やまもと",
                "ot_gender": "Female",
                "trainer_id": "03217",
                "moves": [
                    "Earthquake",
                    "Aqua Tail",
                    "Zen Headbutt",
                    "Giga Impact"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "March 21 to April 9, 2007",
                        "start_date": "2007-03-21",
                        "end_date": "2007-04-09"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Shokotan Tropius": [
            {
                "species": "Tropius",
                "form": null,
                "national_dex_number": 357,
                "base_stats": {
                    "hp": 99,
                    "attack": 68,
                    "defense": 83,
                    "special_attack": 72,
                    "special_defense": 87,
                    "speed": 51
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
                "type_2": "Flying",
                "catch_rate": 200,
                "base_experience": 161,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Grass",
                "abilities": [
                    "Chlorophyll",
                    "Solar Power"
                ],
                "hidden_ability": null,
                "weight": 100.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Tropius",
                "event_name": "Shokotan Tropius",
                "level": 53,
                "shiny": false,
                "is_egg": false,
                "nickname": "トロピウス",
                "gender": "Female",
                "nature": "Jolly",
                "ability": "Chlorophyll",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "しょこたん",
                "ot_gender": "Female",
                "trainer_id": "02027",
                "moves": [
                    "Air Slash",
                    "Synthesis",
                    "Sunny Day",
                    "SolarBeam"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "February 3 to February 12, 2007",
                        "start_date": "2007-02-03",
                        "end_date": "2007-02-12"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "World Hobby Fair Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "World Hobby Fair Manaphy",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "マナフィ",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": "King's Rock",
                "ball": "Poké Ball",
                "ot": "みずのたみ",
                "ot_gender": "Female",
                "trainer_id": "12226",
                "moves": [
                    "Tail Glow",
                    "Bubble",
                    "Water Sport"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "January 14 to March 11, 2007",
                        "start_date": "2007-01-14",
                        "end_date": "2007-03-11"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — World Hobby Fair Manaphy"
                ]
            }
        ],
        "Pokémon Festa 2006 Pokémon": [
            {
                "species": "Electabuzz",
                "form": null,
                "national_dex_number": 125,
                "base_stats": {
                    "hp": 65,
                    "attack": 83,
                    "defense": 57,
                    "special_attack": 95,
                    "special_defense": 85,
                    "speed": 105
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
                "catch_rate": 45,
                "base_experience": 172,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Static"
                ],
                "hidden_ability": null,
                "weight": 30.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Electabuzz",
                "event_name": "Electabuzz",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "エレブー",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Static",
                "held_item": "Electirizer",
                "ball": "Poké Ball",
                "ot": "フェスタ",
                "ot_gender": "Male",
                "trainer_id": "11256",
                "moves": [
                    "Low Kick",
                    "Shock Wave",
                    "Light Screen",
                    "ThunderPunch"
                ],
                "ivs": null,
                "met_location": "Pokémon Festa 06",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "November 25, 2006 to January 31, 2007",
                        "start_date": "2006-11-25",
                        "end_date": "2007-01-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magmar",
                "form": null,
                "national_dex_number": 126,
                "base_stats": {
                    "hp": 65,
                    "attack": 95,
                    "defense": 57,
                    "special_attack": 100,
                    "special_defense": 85,
                    "speed": 93
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 173,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Flame Body"
                ],
                "hidden_ability": null,
                "weight": 44.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magmar",
                "event_name": "Magmar",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "ブーバー",
                "gender": "Male",
                "nature": "Quiet",
                "ability": "Flame Body",
                "held_item": "Magmarizer",
                "ball": "Poké Ball",
                "ot": "フェスタ",
                "ot_gender": "Male",
                "trainer_id": "11256",
                "moves": [
                    "SmokeScreen",
                    "Fire Spin",
                    "Confuse Ray",
                    "Fire Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Festa 06",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "November 25, 2006 to January 31, 2007",
                        "start_date": "2006-11-25",
                        "end_date": "2007-01-31"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Concert Chatot": [
            {
                "species": "Chatot",
                "form": null,
                "national_dex_number": 441,
                "base_stats": {
                    "hp": 76,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 92,
                    "special_defense": 42,
                    "speed": 91
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 30,
                "base_experience": 144,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Keen Eye",
                    "Tangled Feet"
                ],
                "hidden_ability": null,
                "weight": 1.9,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Chatot",
                "event_name": "Concert Chatot",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": "ペラップ",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Keen Eye",
                "held_item": "Soothe Bell",
                "ball": "Poké Ball",
                "ot": "コンサート",
                "ot_gender": "Male",
                "trainer_id": "10286",
                "moves": [
                    "Mirror Move",
                    "Fury Attack",
                    "Chatter",
                    "Taunt"
                ],
                "ivs": null,
                "met_location": "Pokémon Concert",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "October 28 to December 10, 2006",
                        "start_date": "2006-10-28",
                        "end_date": "2006-12-10"
                    }
                ],
                "source_page": "List of local Japanese event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Local English events": {
        "GameStop Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "GameStop Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "GAMESTP",
                "ot_gender": "Male",
                "trainer_id": "01311",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Canada",
                        "date": "January 31 to February 6, 2011",
                        "start_date": "2011-01-31",
                        "end_date": "2011-02-06"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — GameStop Suicune"
                ]
            }
        ],
        "Ash's Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Ash's Pikachu",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "PIKACHU",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "Ash",
                "ot_gender": "Male",
                "trainer_id": "01301",
                "moves": [
                    "Volt Tackle",
                    "Iron Tail",
                    "Quick Attack",
                    "Thunderbolt"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 30 to February 13, 2011",
                        "start_date": "2011-01-30",
                        "end_date": "2011-02-13"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Canada",
                        "date": "February 9 to 20, 2011",
                        "start_date": "2011-02-09",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "GameStop Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "GameStop Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "GAMESTP",
                "ot_gender": "Male",
                "trainer_id": "01171",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Canada",
                        "date": "January 17 to 23, 2011",
                        "start_date": "2011-01-17",
                        "end_date": "2011-01-23"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — GameStop Entei"
                ]
            }
        ],
        "GameStop Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "GameStop Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "GAMESTP",
                "ot_gender": "Male",
                "trainer_id": "01031",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Canada",
                        "date": "January 3 to 9, 2011",
                        "start_date": "2011-01-03",
                        "end_date": "2011-01-09"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — GameStop Raikou"
                ]
            }
        ],
        "European Winter 2011 Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "European Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Female",
                "trainer_id": "01211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Portugal",
                        "date": "February 4 to March 3, 2011",
                        "start_date": "2011-02-04",
                        "end_date": "2011-03-03"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Finland",
                        "date": "February 11 to March 4, 2011",
                        "start_date": "2011-02-11",
                        "end_date": "2011-03-04"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Sweden",
                        "date": "February 14 to March 3, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-03-03"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Denmark",
                        "date": "February 14 to March 4, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-03-04"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Norway",
                        "date": "February 14 to March 4, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-03-04"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "February 19 to 20; February 26 to 27, 2011",
                        "start_date": "2011-02-19",
                        "end_date": "2011-02-27",
                        "periods": [
                            {
                                "start": "2011-02-19",
                                "end": "2011-02-20"
                            },
                            {
                                "start": "2011-02-26",
                                "end": "2011-02-27"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Turkey",
                        "date": "February 25 to March 4, 2011",
                        "start_date": "2011-02-25",
                        "end_date": "2011-03-04"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "February 26, 2011",
                        "start_date": "2011-02-26",
                        "end_date": "2011-02-26"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Belgium",
                        "date": "February 26, 2011",
                        "start_date": "2011-02-26",
                        "end_date": "2011-02-26"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Greece",
                        "date": "March 4 to 12, 2011",
                        "start_date": "2011-03-04",
                        "end_date": "2011-03-12"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Poland",
                        "date": "August 20, 2011",
                        "start_date": "2011-08-20",
                        "end_date": "2011-08-20"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Americas Winter 2011 Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Americas Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Female",
                "trainer_id": "02211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 5 to March 20, 2011; February 21 to March 6, 2011",
                        "start_date": "2011-02-05",
                        "end_date": "2011-03-20",
                        "periods": [
                            {
                                "start": "2011-02-05",
                                "end": "2011-03-20"
                            },
                            {
                                "start": "2011-02-21",
                                "end": "2011-03-06"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Brazil, and Canada",
                        "date": "February 21 to March 6, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-03-06"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — North America Winter 2011 Celebi"
                ]
            }
        ],
        "2010 World Championships Crobat": [
            {
                "species": "Crobat",
                "form": null,
                "national_dex_number": 169,
                "base_stats": {
                    "hp": 85,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 90,
                "base_experience": 241,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 75.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Crobat",
                "event_name": "2010 World Championships Crobat",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "CROBAT",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "WORLD10",
                "ot_gender": "Male",
                "trainer_id": "08150",
                "moves": [
                    "Heat Wave",
                    "Air Slash",
                    "Sludge Bomb",
                    "Super Fang"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2010",
                        "start_date": "2010-08-15",
                        "end_date": "2010-08-15"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Australian Summer 2010 Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Australian Summer 2010 Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "SMR2010",
                "ot_gender": "Female",
                "trainer_id": "06030",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Australia",
                        "date": "June 3 to 13, 2010",
                        "start_date": "2010-06-03",
                        "end_date": "2010-06-13"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Video Game Championships 2010 Eevee": [
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
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Eevee",
                "event_name": "Video Game Championships 2010 Eevee",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "EEVEE",
                "gender": "Male",
                "nature": "Hardy",
                "ability": [
                    "Adaptability",
                    "Run Away"
                ],
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "VGC10",
                "ot_gender": "Male",
                "trainer_id": "05080",
                "moves": [
                    "Iron Tail",
                    "Trump Card",
                    "Flail",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "May 8 to June 28, 2010",
                        "start_date": "2010-05-08",
                        "end_date": "2010-06-28"
                    },
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "May 29, 2010",
                        "start_date": "2010-05-29",
                        "end_date": "2010-05-29"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Latin America Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Latin America Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "PKLATAM",
                "ot_gender": "Female",
                "trainer_id": "03010",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Chile, Colombia, Mexico, and Brazil",
                        "date": "2010",
                        "start_date": "2010",
                        "end_date": "2010"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "GameStop Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "GameStop Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "GAMESTP",
                "ot_gender": "Female",
                "trainer_id": "02270",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 27 to March 13, 2010",
                        "start_date": "2010-02-27",
                        "end_date": "2010-03-13"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "GameStop Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "GameStop Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "GAMESTP",
                "ot_gender": "Female",
                "trainer_id": "01300",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 30 to February 14, 2010",
                        "start_date": "2010-01-30",
                        "end_date": "2010-02-14"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — GameStop Pichu"
                ]
            }
        ],
        "European Michina Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "European Michina Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "MICHINA",
                "ot_gender": "Male",
                "trainer_id": "02010",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Finland",
                        "date": "February 20 to March 18, 2010",
                        "start_date": "2010-02-20",
                        "end_date": "2010-03-18"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Portugal",
                        "date": "February 26 to April 11, 2010",
                        "start_date": "2010-02-26",
                        "end_date": "2010-04-11"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Norway",
                        "date": "March 5 to April 2, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-04-02"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Sweden",
                        "date": "March 5 to April 2, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-04-02"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Denmark",
                        "date": "March 5 to April 2, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-04-02"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "March 13 to 14, March 20 to 21, 2010",
                        "start_date": "2010-03-13",
                        "end_date": "2010-03-21",
                        "periods": [
                            {
                                "start": "2010-03-13",
                                "end": "2010-03-14"
                            },
                            {
                                "start": "2010-03-20",
                                "end": "2010-03-21"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "March 27, 2010",
                        "start_date": "2010-03-27",
                        "end_date": "2010-03-27"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Belgium",
                        "date": "April 3 to 7, 2010",
                        "start_date": "2010-04-03",
                        "end_date": "2010-04-07"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Greece",
                        "date": "March 27 to April 10, 2010",
                        "start_date": "2010-03-27",
                        "end_date": "2010-04-10"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Europe Michina Arceus"
                ]
            }
        ],
        "Toys \"R\" Us Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Toys \"R\" Us Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "TRU",
                "ot_gender": "Male",
                "trainer_id": "11079",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Puerto Rico",
                        "date": "November 7 to 15, 2009",
                        "start_date": "2009-11-07",
                        "end_date": "2009-11-15"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Toys \"R\" Us Arceus"
                ]
            }
        ],
        "Australian Michina Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Australian Michina Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "Michina",
                "ot_gender": "Male",
                "trainer_id": "11059",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Australia",
                        "date": "November 5 to 16, 2009",
                        "start_date": "2009-11-05",
                        "end_date": "2009-11-16"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Australian Arceus"
                ]
            }
        ],
        "2009 World Championships Weavile": [
            {
                "species": "Weavile",
                "form": null,
                "national_dex_number": 461,
                "base_stats": {
                    "hp": 70,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 85,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 34.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Weavile",
                "event_name": "2009 World Championships Weavile",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "WEAVILE",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pressure",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "WORLD09",
                "ot_gender": "Male",
                "trainer_id": "08159",
                "moves": [
                    "Fake Out",
                    "Ice Shard",
                    "Night Slash",
                    "Brick Break"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2009",
                        "start_date": "2009-08-15",
                        "end_date": "2009-08-15"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "European Summer 2009 Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "European Summer 2009 Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "REGIGIGAS",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "EUSMR09",
                "ot_gender": "Male",
                "trainer_id": "07189",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "July 31 to September 6, 2009",
                        "start_date": "2009-07-31",
                        "end_date": "2009-09-06"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "August 29 to 30, 2009",
                        "start_date": "2009-08-29",
                        "end_date": "2009-08-30"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Europe Summer Regigigas"
                ]
            }
        ],
        "UK Video Game Championships 2009 Milotic": [
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "UK Video Game Championships 2009 Milotic",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "MILOTIC",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "VGC09",
                "ot_gender": "Male",
                "trainer_id": "05309",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Icy Wind"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "May 30, 2009",
                        "start_date": "2009-05-30",
                        "end_date": "2009-05-30"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "US Video Game Championships 2009 Milotic": [
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "US Video Game Championships 2009 Milotic",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "MILOTIC",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "VGC09",
                "ot_gender": "Male",
                "trainer_id": "05099",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Icy Wind"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "May 9 to June 13, 2009",
                        "start_date": "2009-05-09",
                        "end_date": "2009-06-13"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Movie 11 Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Movie 11 Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "Movie11",
                "ot_gender": "Male",
                "trainer_id": "04019",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "April 4 to 18, 2009",
                        "start_date": "2009-04-04",
                        "end_date": "2009-04-18"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Finland",
                        "date": "May 8 to 23, 2009",
                        "start_date": "2009-05-08",
                        "end_date": "2009-05-23"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Belgium",
                        "date": "May 9 to 22, 2009",
                        "start_date": "2009-05-09",
                        "end_date": "2009-05-22"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Norway",
                        "date": "May 15, May 22 to 29, 2009",
                        "start_date": "2009-05-15",
                        "end_date": "2009-05-29",
                        "periods": [
                            {
                                "start": "2009-05-15",
                                "end": "2009-05-15"
                            },
                            {
                                "start": "2009-05-22",
                                "end": "2009-05-29"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Sweden",
                        "date": "May 15, May 22 to 29, 2009",
                        "start_date": "2009-05-15",
                        "end_date": "2009-05-29",
                        "periods": [
                            {
                                "start": "2009-05-15",
                                "end": "2009-05-15"
                            },
                            {
                                "start": "2009-05-22",
                                "end": "2009-05-29"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Denmark",
                        "date": "May 15, May 22 to 29, 2009",
                        "start_date": "2009-05-15",
                        "end_date": "2009-05-29",
                        "periods": [
                            {
                                "start": "2009-05-15",
                                "end": "2009-05-15"
                            },
                            {
                                "start": "2009-05-22",
                                "end": "2009-05-29"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "May 22 to 23, 2009",
                        "start_date": "2009-05-22",
                        "end_date": "2009-05-23"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Greece",
                        "date": "May 29 to June 20, 2009",
                        "start_date": "2009-05-29",
                        "end_date": "2009-06-20"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Europe Movie 11 Shaymin"
                ]
            }
        ],
        "Toys \"R\" Us Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Toys \"R\" Us Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "REGIGIGAS",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "TRU",
                "ot_gender": "Male",
                "trainer_id": "03089",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Puerto Rico",
                        "date": "March 8 to 21, 2009",
                        "start_date": "2009-03-08",
                        "end_date": "2009-03-21"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Toys \"R\" Us Regigigas"
                ]
            }
        ],
        "Toys \"R\" Us Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Toys \"R\" Us Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "TRU",
                "ot_gender": "Male",
                "trainer_id": "02089",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Puerto Rico",
                        "date": "February 8 to 14, 2009",
                        "start_date": "2009-02-08",
                        "end_date": "2009-02-14"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Toys \"R\" Us Shaymin"
                ]
            }
        ],
        "Nintendo Zone Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Nintendo Zone Pikachu",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": "PIKACHU",
                "gender": "Female",
                "nature": "Bashful",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "Nzone",
                "ot_gender": "Male",
                "trainer_id": "10278",
                "moves": [
                    "Present",
                    "Quick Attack",
                    "ThunderShock",
                    "Tail Whip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 17 to December 31, 2008",
                        "start_date": "2008-11-17",
                        "end_date": "2008-12-31"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Toys \"R\" Us Dragonite": [
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
                "hidden_ability": null,
                "weight": 210.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Dragonite",
                "event_name": "Toys \"R\" Us Dragonite",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DRAGONITE",
                "gender": "Male",
                "nature": "Mild",
                "ability": "Inner Focus",
                "held_item": "Yache Berry",
                "ball": "Cherish Ball",
                "ot": "TRU",
                "ot_gender": "Male",
                "trainer_id": "11088",
                "moves": [
                    "Draco Meteor",
                    "Thunderbolt",
                    "Outrage",
                    "Dragon Dance"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Puerto Rico",
                        "date": "November 8 to 9, 2008",
                        "start_date": "2008-11-08",
                        "end_date": "2008-11-09"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "Australian Alamos Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Australian Alamos Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "10308",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Australia",
                        "date": "October 30 to November 9, 2008",
                        "start_date": "2008-10-30",
                        "end_date": "2008-11-09"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Target & Toys \"R\" Us Darkrai"
                ]
            }
        ],
        "2008 World Championships Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "2008 World Championships Lucario",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "WORLD08",
                "ot_gender": "Male",
                "trainer_id": "08178",
                "moves": [
                    "Force Palm",
                    "Bone Rush",
                    "Sunny Day",
                    "Blaze Kick"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 17, 2008",
                        "start_date": "2008-08-17",
                        "end_date": "2008-08-17"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "European Alamos Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "European Alamos Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "07038",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "August 6 to 31, 2008",
                        "start_date": "2008-08-06",
                        "end_date": "2008-08-31"
                    },
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "August 30 to 31, 2008",
                        "start_date": "2008-08-30",
                        "end_date": "2008-08-31"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Europe Alamos Darkrai"
                ]
            }
        ],
        "GameStop Deoxys": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "GameStop Deoxys",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": "NeverMeltIce",
                "ball": "Cherish Ball",
                "ot": "Gamestp",
                "ot_gender": "Male",
                "trainer_id": "06218",
                "moves": [
                    "Psycho Boost",
                    "Zap Cannon",
                    "Iron Defense",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 20 to July 13, 2008",
                        "start_date": "2008-06-20",
                        "end_date": "2008-07-13"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — GameStop Deoxys"
                ]
            }
        ],
        "Nintendo World Store Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Nintendo World Store Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "05318",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 1 to 30, 2008",
                        "start_date": "2008-06-01",
                        "end_date": "2008-06-30"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo World Store Darkrai",
                    "Movie events — Toys \"R\" Us Darkrai"
                ]
            }
        ],
        "Toys \"R\" Us Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Toys \"R\" Us Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "05318",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Puerto Rico",
                        "date": "May 31 to June 1, 2008",
                        "start_date": "2008-05-31",
                        "end_date": "2008-06-01"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ],
        "JB Hi-Fi Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "JB Hi-Fi Manaphy",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "MANAPHY",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": "Red Scarf",
                "ball": "Cherish Ball",
                "ot": "JBHF",
                "ot_gender": "Female",
                "trainer_id": "11077",
                "moves": [
                    "Heart Swap",
                    "Water Pulse",
                    "Whirlpool",
                    "Acid Armor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Australia",
                        "date": "November 7 to 13, 2007",
                        "start_date": "2007-11-07",
                        "end_date": "2007-11-13"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — JB Hi-Fi Manaphy"
                ]
            }
        ],
        "E for All Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "E for All Manaphy",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "MANAPHY",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": "Red Scarf",
                "ball": "Cherish Ball",
                "ot": "E4ALL",
                "ot_gender": "Female",
                "trainer_id": "10187",
                "moves": [
                    "Heart Swap",
                    "Water Pulse",
                    "Whirlpool",
                    "Acid Armor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 18 to 21, 2007",
                        "start_date": "2007-10-18",
                        "end_date": "2007-10-21"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — E4All Manaphy"
                ]
            }
        ],
        "Nintendo World Store Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "Nintendo World Store Manaphy",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "MANAPHY",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": "Red Scarf",
                "ball": "Cherish Ball",
                "ot": "NWS",
                "ot_gender": "Female",
                "trainer_id": "10017",
                "moves": [
                    "Heart Swap",
                    "Water Pulse",
                    "Whirlpool",
                    "Acid Armor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 1 to 31, 2007",
                        "start_date": "2007-10-01",
                        "end_date": "2007-10-31"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo World Store Manaphy"
                ]
            }
        ],
        "Toys \"R\" Us Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "Toys \"R\" Us Manaphy",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "MANAPHY",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": "Red Scarf",
                "ball": "Cherish Ball",
                "ot": "TRU",
                "ot_gender": "Female",
                "trainer_id": "09297",
                "moves": [
                    "Heart Swap",
                    "Water Pulse",
                    "Whirlpool",
                    "Acid Armor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "September 29, 2007",
                        "start_date": "2007-09-29",
                        "end_date": "2007-09-29"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Toys \"R\" Us Manaphy"
                ]
            }
        ],
        "2007 TCG World Championships Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "2007 TCG World Championships Pikachu",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "PIKACHU",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "TCGWC",
                "ot_gender": "Male",
                "trainer_id": "08107",
                "moves": [
                    "Surf",
                    "Thunderbolt",
                    "Light Screen",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 10 to 12, 2007",
                        "start_date": "2007-08-10",
                        "end_date": "2007-08-12"
                    }
                ],
                "source_page": "List of local English event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Local German events": {
        "Winter 2011 Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Female",
                "trainer_id": "01211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "February 18 to 27, 2011",
                        "start_date": "2011-02-18",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "2010 World Championships Crobat": [
            {
                "species": "Crobat",
                "form": null,
                "national_dex_number": 169,
                "base_stats": {
                    "hp": 85,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 90,
                "base_experience": 241,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 75.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Crobat",
                "event_name": "2010 World Championships Crobat",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "CROBAT",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "WORLD10",
                "ot_gender": "Male",
                "trainer_id": "08150",
                "moves": [
                    "Heat Wave",
                    "Air Slash",
                    "Sludge Bomb",
                    "Super Fang"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2010",
                        "start_date": "2010-08-15",
                        "end_date": "2010-08-15"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo Zone Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Nintendo Zone Pikachu",
                "level": 20,
                "shiny": false,
                "is_egg": false,
                "nickname": "PIKACHU",
                "gender": "Female",
                "nature": "Bashful",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "NZone",
                "ot_gender": "Male",
                "trainer_id": "07310",
                "moves": [
                    "Present",
                    "Quick Attack",
                    "ThunderShock",
                    "Tail Whip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "July 31 to August 27, 2010",
                        "start_date": "2010-07-31",
                        "end_date": "2010-08-27"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "Video Game Championships 2010 Eevee": [
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
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Eevee",
                "event_name": "Video Game Championships 2010 Eevee",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "EVOLI",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Adaptability",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "VGC10",
                "ot_gender": "Male",
                "trainer_id": "05080",
                "moves": [
                    "Iron Tail",
                    "Trump Card",
                    "Flail",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "June 5, 2010",
                        "start_date": "2010-06-05",
                        "end_date": "2010-06-05"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "Michina Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Michina Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "MICHINA",
                "ot_gender": "Male",
                "trainer_id": "02010",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "February 17 to April 9, 2010",
                        "start_date": "2010-02-17",
                        "end_date": "2010-04-09"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2009 Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Summer 2009 Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "REGIGIGAS",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "EUSMR09",
                "ot_gender": "Male",
                "trainer_id": "07189",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "August 29 to October 4, 2009",
                        "start_date": "2009-08-29",
                        "end_date": "2009-10-04"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "2009 World Championships Weavile": [
            {
                "species": "Weavile",
                "form": null,
                "national_dex_number": 461,
                "base_stats": {
                    "hp": 70,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 85,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 34.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Weavile",
                "event_name": "2009 World Championships Weavile",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "WEAVILE",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pressure",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "WORLD09",
                "ot_gender": "Male",
                "trainer_id": "08159",
                "moves": [
                    "Fake Out",
                    "Ice Shard",
                    "Night Slash",
                    "Brick Break"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2009",
                        "start_date": "2009-08-15",
                        "end_date": "2009-08-15"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "Europe Video Game Championships 2009 Milotic": [
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "Europe Video Game Championships 2009 Milotic",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "MILOTIC",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "VGC09",
                "ot_gender": "Male",
                "trainer_id": "05309",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Icy Wind"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "June 13, 2009",
                        "start_date": "2009-06-13",
                        "end_date": "2009-06-13"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "Movie 11 Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Movie 11 Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "Film11",
                "ot_gender": "Male",
                "trainer_id": "04019",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "April 25 to May 17, 2009; May 22, 2009",
                        "start_date": "2009-04-25",
                        "end_date": "2009-05-22",
                        "periods": [
                            {
                                "start": "2009-04-25",
                                "end": "2009-05-17"
                            },
                            {
                                "start": "2009-05-22",
                                "end": "2009-05-22"
                            }
                        ]
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Europe Film 11 Shaymin"
                ]
            }
        ],
        "Alamos Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Alamos Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "07038",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "September 6 to November 2, 2008",
                        "start_date": "2008-09-06",
                        "end_date": "2008-11-02"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ],
        "2008 World Championships Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "2008 World Championships Lucario",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "WORLD08",
                "ot_gender": "Male",
                "trainer_id": "08178",
                "moves": [
                    "Force Palm",
                    "Bone Rush",
                    "Sunny Day",
                    "Blaze Kick"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 17, 2008",
                        "start_date": "2008-08-17",
                        "end_date": "2008-08-17"
                    }
                ],
                "source_page": "List of local German event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Local Spanish events": {
        "Winter 2011 Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Female",
                "trainer_id": "01211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "February 4 to March 3, 2011",
                        "start_date": "2011-02-04",
                        "end_date": "2011-03-03"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "2010 World Championships Crobat": [
            {
                "species": "Crobat",
                "form": null,
                "national_dex_number": 169,
                "base_stats": {
                    "hp": 85,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 90,
                "base_experience": 241,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 75.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Crobat",
                "event_name": "2010 World Championships Crobat",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "CROBAT",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "WORLD10",
                "ot_gender": "Male",
                "trainer_id": "08150",
                "moves": [
                    "Heat Wave",
                    "Air Slash",
                    "Sludge Bomb",
                    "Super Fang"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2010",
                        "start_date": "2010-08-15",
                        "end_date": "2010-08-15"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Video Game Championships 2010 Eevee": [
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
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Eevee",
                "event_name": "Video Game Championships 2010 Eevee",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "EEVEE",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Adaptability",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "VGC10",
                "ot_gender": "Male",
                "trainer_id": "05080",
                "moves": [
                    "Iron Tail",
                    "Trump Card",
                    "Flail",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "June 19, 2010",
                        "start_date": "2010-06-19",
                        "end_date": "2010-06-19"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Michina Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Michina Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "MICHINA",
                "ot_gender": "Male",
                "trainer_id": "02010",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "February 26 to April 11, 2010",
                        "start_date": "2010-02-26",
                        "end_date": "2010-04-11"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "2009 World Championships Weavile": [
            {
                "species": "Weavile",
                "form": null,
                "national_dex_number": 461,
                "base_stats": {
                    "hp": 70,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 85,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 34.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Weavile",
                "event_name": "2009 World Championships Weavile",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "WEAVILE",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pressure",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "WORLD09",
                "ot_gender": "Male",
                "trainer_id": "08159",
                "moves": [
                    "Fake Out",
                    "Ice Shard",
                    "Night Slash",
                    "Brick Break"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2009",
                        "start_date": "2009-08-15",
                        "end_date": "2009-08-15"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2009 Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Summer 2009 Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "REGIGIGAS",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "EUVER09",
                "ot_gender": "Male",
                "trainer_id": "07189",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "July 11 to August 30, 2009",
                        "start_date": "2009-07-11",
                        "end_date": "2009-08-30"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Spain Summer Regigigas"
                ]
            }
        ],
        "Movie 11 Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Movie 11 Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "Peli11",
                "ot_gender": "Male",
                "trainer_id": "04019",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "April 15 to May 15, 2009",
                        "start_date": "2009-04-15",
                        "end_date": "2009-05-15"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Spain GAME Shaymin"
                ]
            }
        ],
        "2008 World Championships Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "2008 World Championships Lucario",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "WORLD08",
                "ot_gender": "Male",
                "trainer_id": "08178",
                "moves": [
                    "Force Palm",
                    "Bone Rush",
                    "Sunny Day",
                    "Blaze Kick"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 17, 2008",
                        "start_date": "2008-08-17",
                        "end_date": "2008-08-17"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Alamos Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Alamos Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "07038",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "July 22 to August 24, 2008",
                        "start_date": "2008-07-22",
                        "end_date": "2008-08-24"
                    }
                ],
                "source_page": "List of local Spanish event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Local French events": {
        "Winter 2011 Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "HVR2011",
                "ot_gender": "Female",
                "trainer_id": "01211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "February 4 to March 3, 2011",
                        "start_date": "2011-02-04",
                        "end_date": "2011-03-03"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "2010 World Championships Crobat": [
            {
                "species": "Crobat",
                "form": null,
                "national_dex_number": 169,
                "base_stats": {
                    "hp": 85,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 90,
                "base_experience": 241,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 75.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Crobat",
                "event_name": "2010 World Championships Crobat",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "CROBAT",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "WORLD10",
                "ot_gender": "Male",
                "trainer_id": "08150",
                "moves": [
                    "Heat Wave",
                    "Air Slash",
                    "Sludge Bomb",
                    "Super Fang"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2010",
                        "start_date": "2010-08-15",
                        "end_date": "2010-08-15"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "Video Game Championships 2010 Eevee": [
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
                "hidden_ability": null,
                "weight": 6.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Eevee",
                "event_name": "Video Game Championships 2010 Eevee",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "ÉVOLI",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Adaptability",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "VGC10",
                "ot_gender": "Male",
                "trainer_id": "05080",
                "moves": [
                    "Iron Tail",
                    "Trump Card",
                    "Flail",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "June 12, 2010",
                        "start_date": "2010-06-12",
                        "end_date": "2010-06-12"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "Michina Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Michina Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "MICHINA",
                "ot_gender": "Male",
                "trainer_id": "02010",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "February 22 to April 11, 2010",
                        "start_date": "2010-02-22",
                        "end_date": "2010-04-11"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2009 Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Summer 2009 Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "REGIGIGAS",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "EUETE09",
                "ot_gender": "Male",
                "trainer_id": "07189",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "September 18 to 20 and October 30 to November 2, 2009",
                        "start_date": "2009-09-18",
                        "end_date": "2009-11-02",
                        "periods": [
                            {
                                "start": "2009-09-18",
                                "end": "2009-09-20"
                            },
                            {
                                "start": "2009-10-30",
                                "end": "2009-11-02"
                            }
                        ]
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — France Summer Regigigas"
                ]
            }
        ],
        "2009 World Championships Weavile": [
            {
                "species": "Weavile",
                "form": null,
                "national_dex_number": 461,
                "base_stats": {
                    "hp": 70,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 85,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 34.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Weavile",
                "event_name": "2009 World Championships Weavile",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "WEAVILE",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pressure",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "WORLD09",
                "ot_gender": "Male",
                "trainer_id": "08159",
                "moves": [
                    "Fake Out",
                    "Ice Shard",
                    "Night Slash",
                    "Brick Break"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2009",
                        "start_date": "2009-08-15",
                        "end_date": "2009-08-15"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "Europe Video Game Championships 2009 Milotic": [
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "Europe Video Game Championships 2009 Milotic",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "MILOBELLUS",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "VGC09",
                "ot_gender": "Male",
                "trainer_id": "05309",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Icy Wind"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "June 20, 2009",
                        "start_date": "2009-06-20",
                        "end_date": "2009-06-20"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "Movie 11 Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Movie 11 Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "Film11",
                "ot_gender": "Male",
                "trainer_id": "04019",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "May 15 to June 15, 2009",
                        "start_date": "2009-05-15",
                        "end_date": "2009-06-15"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "2008 World Championships Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "2008 World Championships Lucario",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "WORLD08",
                "ot_gender": "Male",
                "trainer_id": "08178",
                "moves": [
                    "Force Palm",
                    "Bone Rush",
                    "Sunny Day",
                    "Blaze Kick"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 17, 2008",
                        "start_date": "2008-08-17",
                        "end_date": "2008-08-17"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ],
        "Alamos Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Alamos Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "07038",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "July 3 to 6, 2008",
                        "start_date": "2008-07-03",
                        "end_date": "2008-07-06"
                    }
                ],
                "source_page": "List of local French event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Local Italian events": {
        "Winter 2011 Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Female",
                "trainer_id": "01211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Italy",
                        "date": "February 1 to March 3, 2011",
                        "start_date": "2011-02-01",
                        "end_date": "2011-03-03"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ],
        "2010 World Championships Crobat": [
            {
                "species": "Crobat",
                "form": null,
                "national_dex_number": 169,
                "base_stats": {
                    "hp": 85,
                    "attack": 90,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 90,
                "base_experience": 241,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 75.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Crobat",
                "event_name": "2010 World Championships Crobat",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "CROBAT",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Inner Focus",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "WORLD10",
                "ot_gender": "Male",
                "trainer_id": "08150",
                "moves": [
                    "Heat Wave",
                    "Air Slash",
                    "Sludge Bomb",
                    "Super Fang"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2010",
                        "start_date": "2010-08-15",
                        "end_date": "2010-08-15"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Michina Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Michina Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "ARCEUS",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "MICHINA",
                "ot_gender": "Male",
                "trainer_id": "02010",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Italy",
                        "date": "February 17 to March 26, 2010",
                        "start_date": "2010-02-17",
                        "end_date": "2010-03-26"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ],
        "2009 World Championships Weavile": [
            {
                "species": "Weavile",
                "form": null,
                "national_dex_number": 461,
                "base_stats": {
                    "hp": 70,
                    "attack": 120,
                    "defense": 65,
                    "special_attack": 45,
                    "special_defense": 85,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 179,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 34.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Weavile",
                "event_name": "2009 World Championships Weavile",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "WEAVILE",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Pressure",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "WORLD09",
                "ot_gender": "Male",
                "trainer_id": "08159",
                "moves": [
                    "Fake Out",
                    "Ice Shard",
                    "Night Slash",
                    "Brick Break"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 15, 2009",
                        "start_date": "2009-08-15",
                        "end_date": "2009-08-15"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2009 Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Summer 2009 Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "REGIGIGAS",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "ESTEU09",
                "ot_gender": "Male",
                "trainer_id": "07189",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Italy",
                        "date": "July 18 to 19, 2009",
                        "start_date": "2009-07-18",
                        "end_date": "2009-07-19"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Italy Summer Regigigas"
                ]
            }
        ],
        "Movie 11 Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Movie 11 Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "Film11",
                "ot_gender": "Male",
                "trainer_id": "04019",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Italy",
                        "date": "May 16 to June 27, 2009",
                        "start_date": "2009-05-16",
                        "end_date": "2009-06-27"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ],
        "2008 World Championships Lucario": [
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
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Lucario",
                "event_name": "2008 World Championships Lucario",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "LUCARIO",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Inner Focus",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "WORLD08",
                "ot_gender": "Male",
                "trainer_id": "08178",
                "moves": [
                    "Force Palm",
                    "Bone Rush",
                    "Sunny Day",
                    "Blaze Kick"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 17, 2008",
                        "start_date": "2008-08-17",
                        "end_date": "2008-08-17"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Alamos Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Alamos Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "ALAMOS",
                "ot_gender": "Female",
                "trainer_id": "07038",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Italy",
                        "date": "July 12 to September 14, 2008",
                        "start_date": "2008-07-12",
                        "end_date": "2008-09-14"
                    }
                ],
                "source_page": "List of local Italian event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Local Korean events": {
        "Pokémon Love Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "Pokémon Love Manaphy",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "마나피",
                "gender": null,
                "nature": "Impish",
                "ability": "Hydration",
                "held_item": "Lansat Berry",
                "ball": "Cherish Ball",
                "ot": "포켓몬사랑",
                "ot_gender": "Male",
                "trainer_id": "03121",
                "moves": [
                    "Aqua Ring",
                    "Water Pulse",
                    "Water Sport",
                    "Heart Swap"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "March 12 to April 17, 2011",
                        "start_date": "2011-03-12",
                        "end_date": "2011-04-17"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Goone's Scizor": [
            {
                "species": "Scizor",
                "form": null,
                "national_dex_number": 212,
                "base_stats": {
                    "hp": 70,
                    "attack": 130,
                    "defense": 100,
                    "special_attack": 55,
                    "special_defense": 80,
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
                "type_1": "Bug",
                "type_2": "Steel",
                "catch_rate": 25,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [
                    "Swarm",
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 118.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Scizor",
                "event_name": "Goone's Scizor",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "핫삼",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Swarm",
                "held_item": "Starf Berry",
                "ball": "Cherish Ball",
                "ot": "달건",
                "ot_gender": "Male",
                "trainer_id": "01071",
                "moves": [
                    "X-Scissor",
                    "Swords Dance",
                    "Iron Defense",
                    "Agility"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea and Wi-Fi",
                        "date": "January 7 to 31, 2011",
                        "start_date": "2011-01-07",
                        "end_date": "2011-01-31"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Cinema Celebi": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Cinema Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "세레비",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": "Cherish Ball",
                "ot": "영화관",
                "ot_gender": "Male",
                "trainer_id": "12230",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "December 23, 2010 to February 28, 2011",
                        "start_date": "2010-12-23",
                        "end_date": "2011-02-28"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Cinema Celebi"
                ]
            }
        ],
        "Crown City Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Crown City Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "스이쿤",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "크라운시티",
                "ot_gender": "Male",
                "trainer_id": "12160",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "December 16, 2010 to January 9, 2011",
                        "start_date": "2010-12-16",
                        "end_date": "2011-01-09"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Crown City Suicune"
                ]
            }
        ],
        "Crown City Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Crown City Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "앤테이",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "크라운시티",
                "ot_gender": "Male",
                "trainer_id": "12160",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "December 16, 2010 to January 9, 2011",
                        "start_date": "2010-12-16",
                        "end_date": "2011-01-09"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Crown City Entei"
                ]
            }
        ],
        "Crown City Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Crown City Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "라이코",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "크라운시티",
                "ot_gender": "Male",
                "trainer_id": "12160",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "December 16, 2010 to January 9, 2011",
                        "start_date": "2010-12-16",
                        "end_date": "2011-01-09"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Crown City Raikou"
                ]
            }
        ],
        "Shinsegae Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Shinsegae Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "앤테이",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "크라운시티",
                "ot_gender": "Male",
                "trainer_id": "10300",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "October 30 to November 28, 2010",
                        "start_date": "2010-10-30",
                        "end_date": "2010-11-28"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Shinsegae Entei"
                ]
            }
        ],
        "Shinsegae Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Shinsegae Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "라이코",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "크라운시티",
                "ot_gender": "Male",
                "trainer_id": "09180",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "September 18 to October 24, 2010",
                        "start_date": "2010-09-18",
                        "end_date": "2010-10-24"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Shinsegae Raikou"
                ]
            }
        ],
        "Summer Festival Milotic": [
            {
                "species": "Milotic",
                "form": null,
                "national_dex_number": 350,
                "base_stats": {
                    "hp": 95,
                    "attack": 60,
                    "defense": 79,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 81
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 60,
                "base_experience": 189,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Marvel Scale"
                ],
                "hidden_ability": null,
                "weight": 162.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Milotic",
                "event_name": "Summer Festival Milotic",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "밀로틱",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Marvel Scale",
                "held_item": "Flame Orb",
                "ball": "Cherish Ball",
                "ot": "캐릭터페어",
                "ot_gender": "Male",
                "trainer_id": "07210",
                "moves": [
                    "Rain Dance",
                    "Recover",
                    "Hydro Pump",
                    "Icy Wind"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "July 21 to 25, 2010",
                        "start_date": "2010-07-21",
                        "end_date": "2010-07-25"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Times Square Shaymin": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Times Square Shaymin",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "쉐이미",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Soothe Bell",
                "ball": "Cherish Ball",
                "ot": "타임스퀘어",
                "ot_gender": "Male",
                "trainer_id": "05010",
                "moves": [
                    "Growth",
                    "Magical Leaf",
                    "Leech Seed",
                    "Return"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "May 1 to 2, 2010",
                        "start_date": "2010-05-01",
                        "end_date": "2010-05-02"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo of Korea Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Nintendo of Korea Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "지라치",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "01300",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "January 30 to 31, 2010",
                        "start_date": "2010-01-30",
                        "end_date": "2010-01-31"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Cinema Arceus": [
            {
                "species": "Arceus",
                "form": null,
                "national_dex_number": 493,
                "base_stats": {
                    "hp": 120,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 120,
                    "special_defense": 120,
                    "speed": 120
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
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 324,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Multitype"
                ],
                "hidden_ability": null,
                "weight": 320.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arceus",
                "event_name": "Cinema Arceus",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "아르세우스",
                "gender": null,
                "nature": "Random",
                "ability": "Multitype",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "영화관",
                "ot_gender": "Male",
                "trainer_id": "12249",
                "moves": [
                    "Judgment",
                    "Roar of Time",
                    "Spacial Rend",
                    "Shadow Force"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "December 24, 2009 to January 31, 2010",
                        "start_date": "2009-12-24",
                        "end_date": "2010-01-31"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Cinema Arceus"
                ]
            }
        ],
        "Mikena Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Mikena Pichu",
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
                "ot_gender": "Male",
                "trainer_id": "12179",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "December 17, 2009 to January 8, 2010",
                        "start_date": "2009-12-17",
                        "end_date": "2010-01-08"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Mikena Pichu"
                ]
            }
        ],
        "Character Fair Pokémon": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Pikachu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "피카츄",
                "gender": "Male",
                "nature": "Brave",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "캐릭터페어",
                "ot_gender": "Male",
                "trainer_id": "07249",
                "moves": [
                    "Volt Tackle",
                    "Quick Attack",
                    "Thunderbolt",
                    "Iron Tail"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "July 24 to 26, 2009",
                        "start_date": "2009-07-24",
                        "end_date": "2009-07-26"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            },
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Shaymin",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "셰이미",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "캐릭터페어",
                "ot_gender": "Male",
                "trainer_id": "07249",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "July 24 to 26, 2009",
                        "start_date": "2009-07-24",
                        "end_date": "2009-07-26"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Character Fair Shaymin"
                ]
            }
        ],
        "Shinsegae Department Store Pokémon": [
            {
                "species": "Feebas",
                "form": null,
                "national_dex_number": 349,
                "base_stats": {
                    "hp": 20,
                    "attack": 15,
                    "defense": 20,
                    "special_attack": 10,
                    "special_defense": 55,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": null,
                "weight": 7.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Feebas",
                "event_name": "Feebas",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "빈티나",
                "gender": "Female",
                "nature": "Calm",
                "ability": "Swift Swim",
                "held_item": "Pamtre Berry",
                "ball": "Cherish Ball",
                "ot": "신세계",
                "ot_gender": "Male",
                "trainer_id": "07049",
                "moves": [
                    "Splash",
                    "Mirror Coat"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "July 4 to 5, 2009",
                        "start_date": "2009-07-04",
                        "end_date": "2009-07-05"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            },
            {
                "species": "Munchlax",
                "form": null,
                "national_dex_number": 446,
                "base_stats": {
                    "hp": 135,
                    "attack": 85,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 85,
                    "speed": 5
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
                "catch_rate": 50,
                "base_experience": 78,
                "gender_ratio": 31,
                "egg_cycles": 40,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pickup",
                    "Thick Fat"
                ],
                "hidden_ability": null,
                "weight": 105.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Munchlax",
                "event_name": "Munchlax",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "먹고자",
                "gender": "Female",
                "nature": "Relaxed",
                "ability": "Thick Fat",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "신세계",
                "ot_gender": "Male",
                "trainer_id": "07049",
                "moves": [
                    "Metronome",
                    "Odor Sleuth",
                    "Tackle",
                    "Curse"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "July 4 to 5, 2009",
                        "start_date": "2009-07-04",
                        "end_date": "2009-07-05"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo of Korea Regigigas": [
            {
                "species": "Regigigas",
                "form": null,
                "national_dex_number": 486,
                "base_stats": {
                    "hp": 110,
                    "attack": 160,
                    "defense": 110,
                    "special_attack": 80,
                    "special_defense": 110,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 3,
                "base_experience": 302,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Slow Start"
                ],
                "hidden_ability": null,
                "weight": 420.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regigigas",
                "event_name": "Nintendo of Korea Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "레지기가스",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "06209",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "June 20 to 21, 2009",
                        "start_date": "2009-06-20",
                        "end_date": "2009-06-21"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo of Korea Regigigas"
                ]
            }
        ],
        "Battle Series 2009 Arcanine": [
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
                "hidden_ability": null,
                "weight": 155.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Arcanine",
                "event_name": "Battle Series 2009 Arcanine",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "윈디",
                "gender": "Random",
                "nature": "Random",
                "ability": "Intimidate",
                "held_item": "Charcoal",
                "ball": "Cherish Ball",
                "ot": "배틀시리즈",
                "ot_gender": "Male",
                "trainer_id": "06069",
                "moves": [
                    "Flare Blitz",
                    "Thunder Fang",
                    "Crunch",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "June 6 to 7, 2009",
                        "start_date": "2009-06-06",
                        "end_date": "2009-06-07"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo of Korea Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Nintendo of Korea Mew",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "뮤",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": "Salac Berry",
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "03219",
                "moves": [
                    "Metronome",
                    "Psychic",
                    "Teleport",
                    "Aura Sphere"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "March 21 to 22, 2009",
                        "start_date": "2009-03-21",
                        "end_date": "2009-03-22"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo of Korea Darkrai": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Nintendo of Korea Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "다크라이",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": "Enigma Berry",
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "11088",
                "moves": [
                    "Roar of Time",
                    "Spacial Rend",
                    "Nightmare",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "November 8 to 9, 2008",
                        "start_date": "2008-11-08",
                        "end_date": "2008-11-09"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo of Korea Darkrai"
                ]
            }
        ],
        "Pikachu Cafe Tangrowth": [
            {
                "species": "Tangrowth",
                "form": null,
                "national_dex_number": 465,
                "base_stats": {
                    "hp": 100,
                    "attack": 100,
                    "defense": 125,
                    "special_attack": 110,
                    "special_defense": 50,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 2,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 30,
                "base_experience": 187,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [
                    "Chlorophyll",
                    "Leaf Guard"
                ],
                "hidden_ability": null,
                "weight": 128.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Tangrowth",
                "event_name": "Pikachu Cafe Tangrowth",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "덩쿠림보",
                "gender": "Male",
                "nature": "Brave",
                "ability": "Leaf Guard",
                "held_item": "Petaya Berry",
                "ball": "Cherish Ball",
                "ot": "피카츄카페",
                "ot_gender": "Male",
                "trainer_id": "10038",
                "moves": [
                    "Sunny Day",
                    "Morning Sun",
                    "AncientPower",
                    "Natural Gift"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "October 3, 2008",
                        "start_date": "2008-10-03",
                        "end_date": "2008-10-03"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo of Korea Deoxys": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Nintendo of Korea Deoxys",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "테오키스",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": [
                    "Petaya Berry",
                    "Ganlon Berry"
                ],
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "08308",
                "moves": [
                    "Psycho Boost",
                    "Zap Cannon",
                    "Iron Defense",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "August 30 to 31, 2008",
                        "start_date": "2008-08-30",
                        "end_date": "2008-08-31"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo of Korea Deoxys"
                ]
            }
        ],
        "Pikachu Cafe Pokémon": [
            {
                "species": "Electivire",
                "form": null,
                "national_dex_number": 466,
                "base_stats": {
                    "hp": 75,
                    "attack": 123,
                    "defense": 67,
                    "special_attack": 95,
                    "special_defense": 85,
                    "speed": 95
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
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Motor Drive"
                ],
                "hidden_ability": null,
                "weight": 138.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Electivire",
                "event_name": "Electivire",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "에레키블",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Motor Drive",
                "held_item": "Magnet",
                "ball": "Cherish Ball",
                "ot": "피카츄 카페",
                "ot_gender": "Male",
                "trainer_id": "06298",
                "moves": [
                    "Light Screen",
                    "ThunderPunch",
                    "Discharge",
                    "Thunderbolt"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "June 29, 2008",
                        "start_date": "2008-06-29",
                        "end_date": "2008-06-29"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magmortar",
                "form": null,
                "national_dex_number": 467,
                "base_stats": {
                    "hp": 75,
                    "attack": 95,
                    "defense": 67,
                    "special_attack": 125,
                    "special_defense": 95,
                    "speed": 83
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
                "type_2": "Fire",
                "catch_rate": 30,
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Flame Body"
                ],
                "hidden_ability": null,
                "weight": 68.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magmortar",
                "event_name": "Magmortar",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "마그마번",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Flame Body",
                "held_item": "Charcoal",
                "ball": "Cherish Ball",
                "ot": "피카츄 카페",
                "ot_gender": "Male",
                "trainer_id": "06298",
                "moves": [
                    "Confuse Ray",
                    "Fire Punch",
                    "Lava Plume",
                    "Flamethrower"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "June 29, 2008",
                        "start_date": "2008-06-29",
                        "end_date": "2008-06-29"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo of Korea Rayquaza": [
            {
                "species": "Rayquaza",
                "form": null,
                "national_dex_number": 384,
                "base_stats": {
                    "hp": 105,
                    "attack": 150,
                    "defense": 90,
                    "special_attack": 150,
                    "special_defense": 90,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 306,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Air Lock"
                ],
                "hidden_ability": null,
                "weight": 206.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Rayquaza",
                "event_name": "Nintendo of Korea Rayquaza",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "레쿠쟈",
                "gender": null,
                "nature": "Random",
                "ability": "Air Lock",
                "held_item": "Dragon Scale",
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "05318",
                "moves": [
                    "Fly",
                    "ExtremeSpeed",
                    "Outrage",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "May 31 to June 1, 2008",
                        "start_date": "2008-05-31",
                        "end_date": "2008-06-01"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo of Korea Rayquaza"
                ]
            }
        ],
        "Nintendo of Korea Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "Nintendo of Korea Manaphy",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": "마나피",
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": "King's Rock",
                "ball": "Cherish Ball",
                "ot": "한국닌텐도",
                "ot_gender": "Male",
                "trainer_id": "03298",
                "moves": [
                    "Tail Glow",
                    "Bubble",
                    "Water Sport"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "March 29 to 30, 2008",
                        "start_date": "2008-03-29",
                        "end_date": "2008-03-30"
                    }
                ],
                "source_page": "List of local Korean event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Movie events — Nintendo of Korea Manaphy"
                ]
            }
        ]
    },
    "Wi-Fi Japanese events": {
        "Nintendo Zone Manaphy": [
            {
                "species": "Manaphy",
                "form": null,
                "national_dex_number": 490,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hydration"
                ],
                "hidden_ability": null,
                "weight": 1.4,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Manaphy",
                "event_name": "Nintendo Zone Manaphy",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "マナフィ",
                "gender": null,
                "nature": "Impish",
                "ability": "Hydration",
                "held_item": "Lansat Berry",
                "ball": "Cherish Ball",
                "ot": "NZ",
                "ot_gender": "Female",
                "trainer_id": "08110",
                "moves": [
                    "Aqua Ring",
                    "Water Pulse",
                    "Water Sport",
                    "Heart Swap"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan and Wi-Fi",
                        "date": "August 14 to September 12, 2010",
                        "start_date": "2010-08-14",
                        "end_date": "2010-09-12"
                    }
                ],
                "source_page": "List of Wi-Fi Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Ash's Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Ash's Pikachu",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "サトシ",
                "ot_gender": "Male",
                "trainer_id": "07150",
                "moves": [
                    "Volt Tackle",
                    "Iron Tail",
                    "Quick Attack",
                    "Thunderbolt"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan and Wi-Fi",
                        "date": "July 15 to August 10, 2010",
                        "start_date": "2010-07-15",
                        "end_date": "2010-08-10"
                    }
                ],
                "source_page": "List of Wi-Fi Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Goone's Scizor": [
            {
                "species": "Scizor",
                "form": null,
                "national_dex_number": 212,
                "base_stats": {
                    "hp": 70,
                    "attack": 130,
                    "defense": 100,
                    "special_attack": 55,
                    "special_defense": 80,
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
                "type_1": "Bug",
                "type_2": "Steel",
                "catch_rate": 25,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [
                    "Swarm",
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 118.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Scizor",
                "event_name": "Goone's Scizor",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ハッサム",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Swarm",
                "held_item": "Starf Berry",
                "ball": "Cherish Ball",
                "ot": "グーン",
                "ot_gender": "Male",
                "trainer_id": "06180",
                "moves": [
                    "X-Scissor",
                    "Swords Dance",
                    "Iron Defense",
                    "Agility"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan and Wi-Fi",
                        "date": "June 18 to July 14, 2010",
                        "start_date": "2010-06-18",
                        "end_date": "2010-07-14"
                    }
                ],
                "source_page": "List of Wi-Fi Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Susumu Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Second distribution",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ススム",
                "ot_gender": "Male",
                "trainer_id": "11219",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan and Wi-Fi",
                        "date": "January 29 to February 14, 2010",
                        "start_date": "2010-01-29",
                        "end_date": "2010-02-14"
                    }
                ],
                "source_page": "List of Wi-Fi Japanese event Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "First distribution",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ススム",
                "ot_gender": "Male",
                "trainer_id": "11219",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan and Wi-Fi",
                        "date": "November 11 to 23, 2009",
                        "start_date": "2009-11-11",
                        "end_date": "2009-11-23"
                    }
                ],
                "source_page": "List of Wi-Fi Japanese event Pokémon distributions in Generation IV"
            }
        ],
        "Nintendo Zone Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Nintendo Zone Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ジラーチ",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "NZ",
                "ot_gender": "Female",
                "trainer_id": "06199",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan and Wi-Fi",
                        "date": "June 19 to July 17, 2009",
                        "start_date": "2009-06-19",
                        "end_date": "2009-07-17"
                    }
                ],
                "source_page": "List of Wi-Fi Japanese event Pokémon distributions in Generation IV",
                "also_listed_in": [
                    "Tanabata events — 2009"
                ]
            }
        ]
    },
    "Wi-Fi English events": {
        "Winter 2011 Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Winter 2011 Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Male",
                "trainer_id": "02211",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 21 to 27, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of Wi-Fi English event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Winter 2011 Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Male",
                "trainer_id": "02141",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 14 to 20, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of Wi-Fi English event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Winter 2011 Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Male",
                "trainer_id": "02071",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 7 to 13, 2011",
                        "start_date": "2011-02-07",
                        "end_date": "2011-02-13"
                    }
                ],
                "source_page": "List of Wi-Fi English event Pokémon distributions in Generation IV"
            }
        ],
        "Fall 2010 Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Fall 2010 Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "FAL2010",
                "ot_gender": "Female",
                "trainer_id": "10160",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "October 15 to 30, 2010",
                        "start_date": "2010-10-15",
                        "end_date": "2010-10-30"
                    }
                ],
                "source_page": "List of Wi-Fi English event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2010 Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Summer 2010 Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "SMR2010",
                "ot_gender": "Female",
                "trainer_id": "06260",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "June 26 to July 16, 2010",
                        "start_date": "2010-06-26",
                        "end_date": "2010-07-16"
                    }
                ],
                "source_page": "List of Wi-Fi English event Pokémon distributions in Generation IV"
            }
        ],
        "Spring 2010 Pikachu-colored Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Spring 2010 Pikachu-colored Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "SPR2010",
                "ot_gender": "Female",
                "trainer_id": "03050",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "March 5 to 25, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-03-25"
                    }
                ],
                "source_page": "List of Wi-Fi English event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Wi-Fi German events": {
        "Winter 2011 Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Winter 2011 Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Male",
                "trainer_id": "02211",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 21 to 27, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of Wi-Fi German event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Winter 2011 Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Male",
                "trainer_id": "02141",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 14 to 20, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of Wi-Fi German event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Winter 2011 Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "WIN2011",
                "ot_gender": "Male",
                "trainer_id": "02071",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 7 to 13, 2011",
                        "start_date": "2011-02-07",
                        "end_date": "2011-02-13"
                    }
                ],
                "source_page": "List of Wi-Fi German event Pokémon distributions in Generation IV"
            }
        ],
        "Fall 2010 Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Fall 2010 Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HRB2010",
                "ot_gender": "Female",
                "trainer_id": "10160",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "October 15 to 30, 2010",
                        "start_date": "2010-10-15",
                        "end_date": "2010-10-30"
                    }
                ],
                "source_page": "List of Wi-Fi German event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2010 Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Summer 2010 Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "SO2010",
                "ot_gender": "Female",
                "trainer_id": "06260",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "June 26 to July 16, 2010",
                        "start_date": "2010-06-26",
                        "end_date": "2010-07-16"
                    }
                ],
                "source_page": "List of Wi-Fi German event Pokémon distributions in Generation IV"
            }
        ],
        "Spring 2010 Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Spring 2010 Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "FRü2010",
                "ot_gender": "Female",
                "trainer_id": "03050",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokemon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "March 5 to 25, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-03-25"
                    }
                ],
                "source_page": "List of Wi-Fi German event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Wi-Fi Spanish events": {
        "Winter 2011 Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Winter 2011 Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Male",
                "trainer_id": "02211",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 21 to 27, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of Wi-Fi Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Winter 2011 Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Male",
                "trainer_id": "02141",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 14 to 20, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of Wi-Fi Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Winter 2011 Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Male",
                "trainer_id": "02071",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 7 to 13, 2011",
                        "start_date": "2011-02-07",
                        "end_date": "2011-02-13"
                    }
                ],
                "source_page": "List of Wi-Fi Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Fall 2010 Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Fall 2010 Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "OTO2010",
                "ot_gender": "Female",
                "trainer_id": "10160",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "October 15 to 30, 2010",
                        "start_date": "2010-10-15",
                        "end_date": "2010-10-30"
                    }
                ],
                "source_page": "List of Wi-Fi Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2010 Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Summer 2010 Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "VER2010",
                "ot_gender": "Female",
                "trainer_id": "06260",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "June 26 to July 16, 2010",
                        "start_date": "2010-06-26",
                        "end_date": "2010-07-16"
                    }
                ],
                "source_page": "List of Wi-Fi Spanish event Pokémon distributions in Generation IV"
            }
        ],
        "Spring 2010 Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Spring 2010 Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "PRI2010",
                "ot_gender": "Female",
                "trainer_id": "03050",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokemon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "March 5 to 25, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-03-25"
                    }
                ],
                "source_page": "List of Wi-Fi Spanish event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Wi-Fi French events": {
        "Winter 2011 Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Winter 2011 Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "HVR2011",
                "ot_gender": "Male",
                "trainer_id": "02211",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 21 to 27, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of Wi-Fi French event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Winter 2011 Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "HVR2011",
                "ot_gender": "Male",
                "trainer_id": "02141",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 14 to 20, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of Wi-Fi French event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Winter 2011 Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "HVR2011",
                "ot_gender": "Male",
                "trainer_id": "02071",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 7 to 13, 2011",
                        "start_date": "2011-02-07",
                        "end_date": "2011-02-13"
                    }
                ],
                "source_page": "List of Wi-Fi French event Pokémon distributions in Generation IV"
            }
        ],
        "Fall 2010 Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Fall 2010 Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "AUT2010",
                "ot_gender": "Female",
                "trainer_id": "10160",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "October 15 to 30, 2010",
                        "start_date": "2010-10-15",
                        "end_date": "2010-10-30"
                    }
                ],
                "source_page": "List of Wi-Fi French event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2010 Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Summer 2010 Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "ETE2010",
                "ot_gender": "Female",
                "trainer_id": "06260",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "June 26 to July 16, 2010",
                        "start_date": "2010-06-26",
                        "end_date": "2010-07-16"
                    }
                ],
                "source_page": "List of Wi-Fi French event Pokémon distributions in Generation IV"
            }
        ],
        "Spring 2010 Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Spring 2010 Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "PRI2010",
                "ot_gender": "Female",
                "trainer_id": "03050",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "March 5 to 25, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-03-25"
                    }
                ],
                "source_page": "List of Wi-Fi French event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Wi-Fi Italian events": {
        "Winter 2011 Suicune": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Winter 2011 Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Male",
                "trainer_id": "02211",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 21 to 27, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of Wi-Fi Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Entei": [
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Winter 2011 Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Male",
                "trainer_id": "02141",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 14 to 20, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of Wi-Fi Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Winter 2011 Raikou": [
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Winter 2011 Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": "Cherish Ball",
                "ot": "INV2011",
                "ot_gender": "Male",
                "trainer_id": "02071",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 7 to 13, 2011",
                        "start_date": "2011-02-07",
                        "end_date": "2011-02-13"
                    }
                ],
                "source_page": "List of Wi-Fi Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Fall 2010 Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Fall 2010 Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "AUT2010",
                "ot_gender": "Female",
                "trainer_id": "10160",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "October 15 to 30, 2010",
                        "start_date": "2010-10-15",
                        "end_date": "2010-10-30"
                    }
                ],
                "source_page": "List of Wi-Fi Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Summer 2010 Jirachi": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Summer 2010 Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": "Liechi Berry",
                "ball": "Cherish Ball",
                "ot": "EST2010",
                "ot_gender": "Female",
                "trainer_id": "06260",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest",
                    "Draco Meteor"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "June 26 to July 16, 2010",
                        "start_date": "2010-06-26",
                        "end_date": "2010-07-16"
                    }
                ],
                "source_page": "List of Wi-Fi Italian event Pokémon distributions in Generation IV"
            }
        ],
        "Spring 2010 Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Spring 2010 Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": "Cherish Ball",
                "ot": "PRI2010",
                "ot_gender": "Female",
                "trainer_id": "03050",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokemon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "March 5 to 25, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-03-25"
                    }
                ],
                "source_page": "List of Wi-Fi Italian event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Wi-Fi Korean events": {
        "Ash's Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Ash's Pikachu",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "피카츄",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "지우",
                "ot_gender": "Male",
                "trainer_id": "02011",
                "moves": [
                    "Volt Tackle",
                    "Iron Tail",
                    "Quick Attack",
                    "Thunderbolt"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea and Wi-Fi",
                        "date": "February 1 to 28, 2011",
                        "start_date": "2011-02-01",
                        "end_date": "2011-02-28"
                    }
                ],
                "source_page": "List of Wi-Fi Korean event Pokémon distributions in Generation IV"
            }
        ],
        "Goone's Scizor": [
            {
                "species": "Scizor",
                "form": null,
                "national_dex_number": 212,
                "base_stats": {
                    "hp": 70,
                    "attack": 130,
                    "defense": 100,
                    "special_attack": 55,
                    "special_defense": 80,
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
                "type_1": "Bug",
                "type_2": "Steel",
                "catch_rate": 25,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [
                    "Swarm",
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 118.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Scizor",
                "event_name": "Goone's Scizor",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "핫삼",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Swarm",
                "held_item": "Starf Berry",
                "ball": "Cherish Ball",
                "ot": "달건",
                "ot_gender": "Male",
                "trainer_id": "01071",
                "moves": [
                    "X-Scissor",
                    "Swords Dance",
                    "Iron Defense",
                    "Agility"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea and Wi-Fi",
                        "date": "January 7 to 31, 2011",
                        "start_date": "2011-01-07",
                        "end_date": "2011-01-31"
                    }
                ],
                "source_page": "List of Wi-Fi Korean event Pokémon distributions in Generation IV"
            }
        ]
    },
    "GTS events": {
        "Ralts": [
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
                "type_2": "Psychic",
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
                "hidden_ability": null,
                "weight": 6.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Ralts",
                "event_name": "Kakereru",
                "level": 6,
                "shiny": false,
                "is_egg": false,
                "nickname": "ラルトス",
                "gender": "Random",
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": "Tunnel Mail",
                "ball": "Poké Ball",
                "ot": "かけれる",
                "ot_gender": "Male",
                "trainer_id": "54193",
                "moves": [
                    "Growl",
                    "Confusion"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "April 4 to 10, 2009",
                        "start_date": "2009-04-04",
                        "end_date": "2009-04-10"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
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
                "type_2": "Psychic",
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
                "hidden_ability": null,
                "weight": 6.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Ralts",
                "event_name": "Nana",
                "level": 7,
                "shiny": false,
                "is_egg": false,
                "nickname": "ラルトス",
                "gender": "Random",
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": "Bloom Mail",
                "ball": "Poké Ball",
                "ot": "ナナ",
                "ot_gender": "Female",
                "trainer_id": "37030",
                "moves": [
                    "Growl",
                    "Confusion"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "April 4 to 10, 2009",
                        "start_date": "2009-04-04",
                        "end_date": "2009-04-10"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
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
                "type_2": "Psychic",
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
                "hidden_ability": null,
                "weight": 6.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Ralts",
                "event_name": "Toshi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ラルトス",
                "gender": "Random",
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": "Air Mail",
                "ball": "Poké Ball",
                "ot": "トシ",
                "ot_gender": "Male",
                "trainer_id": "48040",
                "moves": [
                    "Growl"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "April 4 to 10, 2009",
                        "start_date": "2009-04-04",
                        "end_date": "2009-04-10"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
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
                "type_2": "Psychic",
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
                "hidden_ability": null,
                "weight": 6.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Ralts",
                "event_name": "Yunosuke",
                "level": 8,
                "shiny": false,
                "is_egg": false,
                "nickname": "ラルトス",
                "gender": "Random",
                "nature": "Random",
                "ability": "Synchronize",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "ゆのすけ",
                "ot_gender": "Female",
                "trainer_id": "04652",
                "moves": [
                    "Growl",
                    "Confusion"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "April 4 to 10, 2009",
                        "start_date": "2009-04-04",
                        "end_date": "2009-04-10"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            }
        ],
        "Shinx": [
            {
                "species": "Shinx",
                "form": null,
                "national_dex_number": 403,
                "base_stats": {
                    "hp": 45,
                    "attack": 65,
                    "defense": 34,
                    "special_attack": 40,
                    "special_defense": 34,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 235,
                "base_experience": 53,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Rivalry",
                    "Intimidate"
                ],
                "hidden_ability": null,
                "weight": 9.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shinx",
                "event_name": "Keiichi",
                "level": 6,
                "shiny": false,
                "is_egg": false,
                "nickname": "コリンク",
                "gender": "Random",
                "nature": "Random",
                "ability": "Intimidate",
                "held_item": "Tunnel Mail",
                "ball": "Poké Ball",
                "ot": "ケイイチ",
                "ot_gender": "Male",
                "trainer_id": "58125",
                "moves": [
                    "Tackle",
                    "Leer"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 28 to April 3, 2009",
                        "start_date": "2009-03-28",
                        "end_date": "2009-04-03"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Shinx",
                "form": null,
                "national_dex_number": 403,
                "base_stats": {
                    "hp": 45,
                    "attack": 65,
                    "defense": 34,
                    "special_attack": 40,
                    "special_defense": 34,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 235,
                "base_experience": 53,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Rivalry",
                    "Intimidate"
                ],
                "hidden_ability": null,
                "weight": 9.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shinx",
                "event_name": "Maatan",
                "level": 8,
                "shiny": false,
                "is_egg": false,
                "nickname": "コリンク",
                "gender": "Random",
                "nature": "Random",
                "ability": "Intimidate",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "まーたん",
                "ot_gender": "Female",
                "trainer_id": "61848",
                "moves": [
                    "Tackle",
                    "Leer"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 28 to April 3, 2009",
                        "start_date": "2009-03-28",
                        "end_date": "2009-04-03"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Shinx",
                "form": null,
                "national_dex_number": 403,
                "base_stats": {
                    "hp": 45,
                    "attack": 65,
                    "defense": 34,
                    "special_attack": 40,
                    "special_defense": 34,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 235,
                "base_experience": 53,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Rivalry",
                    "Intimidate"
                ],
                "hidden_ability": null,
                "weight": 9.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shinx",
                "event_name": "Ruirui",
                "level": 7,
                "shiny": false,
                "is_egg": false,
                "nickname": "コリンク",
                "gender": "Random",
                "nature": "Random",
                "ability": "Intimidate",
                "held_item": "Bloom Mail",
                "ball": "Poké Ball",
                "ot": "るいるい",
                "ot_gender": "Female",
                "trainer_id": "30994",
                "moves": [
                    "Tackle",
                    "Leer"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 28 to April 3, 2009",
                        "start_date": "2009-03-28",
                        "end_date": "2009-04-03"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Shinx",
                "form": null,
                "national_dex_number": 403,
                "base_stats": {
                    "hp": 45,
                    "attack": 65,
                    "defense": 34,
                    "special_attack": 40,
                    "special_defense": 34,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 235,
                "base_experience": 53,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Rivalry",
                    "Intimidate"
                ],
                "hidden_ability": null,
                "weight": 9.5,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shinx",
                "event_name": "Shin",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "コリンク",
                "gender": "Random",
                "nature": "Random",
                "ability": "Intimidate",
                "held_item": "Air Mail",
                "ball": "Poké Ball",
                "ot": "シン",
                "ot_gender": "Male",
                "trainer_id": "42356",
                "moves": [
                    "Tackle",
                    "Leer"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 28 to April 3, 2009",
                        "start_date": "2009-03-28",
                        "end_date": "2009-04-03"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            }
        ],
        "Bidoof": [
            {
                "species": "Bidoof",
                "form": null,
                "national_dex_number": 399,
                "base_stats": {
                    "hp": 59,
                    "attack": 45,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 31
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
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Simple",
                    "Unaware"
                ],
                "hidden_ability": null,
                "weight": 20.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Bidoof",
                "event_name": "Ari",
                "level": 6,
                "shiny": false,
                "is_egg": false,
                "nickname": "ビッパ",
                "gender": "Random",
                "nature": "Random",
                "ability": "Simple",
                "held_item": "Tunnel Mail",
                "ball": "Poké Ball",
                "ot": "あり",
                "ot_gender": "Male",
                "trainer_id": "62475",
                "moves": [
                    "Tackle",
                    "Growl"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 19 to 27, 2009",
                        "start_date": "2009-03-19",
                        "end_date": "2009-03-27"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Bidoof",
                "form": null,
                "national_dex_number": 399,
                "base_stats": {
                    "hp": 59,
                    "attack": 45,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 31
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
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Simple",
                    "Unaware"
                ],
                "hidden_ability": null,
                "weight": 20.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Bidoof",
                "event_name": "Norii",
                "level": 8,
                "shiny": false,
                "is_egg": false,
                "nickname": "ビッパ",
                "gender": "Random",
                "nature": "Random",
                "ability": "Simple",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "ノリィ",
                "ot_gender": "Female",
                "trainer_id": "08348",
                "moves": [
                    "Tackle",
                    "Growl"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 19 to 27, 2009",
                        "start_date": "2009-03-19",
                        "end_date": "2009-03-27"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Bidoof",
                "form": null,
                "national_dex_number": 399,
                "base_stats": {
                    "hp": 59,
                    "attack": 45,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 31
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
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Simple",
                    "Unaware"
                ],
                "hidden_ability": null,
                "weight": 20.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Bidoof",
                "event_name": "Ori",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ビッパ",
                "gender": "Random",
                "nature": "Random",
                "ability": "Simple",
                "held_item": "Air Mail",
                "ball": "Poké Ball",
                "ot": "おり",
                "ot_gender": "Male",
                "trainer_id": "02730",
                "moves": [
                    "Tackle",
                    "Growl"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 19 to 27, 2009",
                        "start_date": "2009-03-19",
                        "end_date": "2009-03-27"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Bidoof",
                "form": null,
                "national_dex_number": 399,
                "base_stats": {
                    "hp": 59,
                    "attack": 45,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 31
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
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Simple",
                    "Unaware"
                ],
                "hidden_ability": null,
                "weight": 20.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Bidoof",
                "event_name": "Saori",
                "level": 7,
                "shiny": false,
                "is_egg": false,
                "nickname": "ビッパ",
                "gender": "Random",
                "nature": "Random",
                "ability": "Simple",
                "held_item": "Bloom Mail",
                "ball": "Poké Ball",
                "ot": "さおり",
                "ot_gender": "Female",
                "trainer_id": "27471",
                "moves": [
                    "Tackle",
                    "Growl"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "met_level": 5,
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "March 19 to 27, 2009",
                        "start_date": "2009-03-19",
                        "end_date": "2009-03-27"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            }
        ],
        "Psyduck": [
            {
                "species": "Psyduck",
                "form": null,
                "national_dex_number": 54,
                "base_stats": {
                    "hp": 50,
                    "attack": 52,
                    "defense": 48,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Damp",
                    "Cloud Nine"
                ],
                "hidden_ability": null,
                "weight": 19.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Psyduck",
                "event_name": "Jun",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "コダック",
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Damp",
                    "Cloud Nine"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "ジュン",
                "ot_gender": "Male",
                "trainer_id": "05458",
                "moves": [
                    "Psychic",
                    "Confuse Ray",
                    "Yawn",
                    "Mud Bomb"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "August 19 to 30, 2007",
                        "start_date": "2007-08-19",
                        "end_date": "2007-08-30"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Psyduck",
                "form": null,
                "national_dex_number": 54,
                "base_stats": {
                    "hp": 50,
                    "attack": 52,
                    "defense": 48,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Damp",
                    "Cloud Nine"
                ],
                "hidden_ability": null,
                "weight": 19.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Psyduck",
                "event_name": "Ken",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "コダック",
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Damp",
                    "Cloud Nine"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "けん",
                "ot_gender": "Male",
                "trainer_id": "38793",
                "moves": [
                    "Psychic",
                    "Confuse Ray",
                    "Yawn",
                    "Mud Bomb"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "August 19 to 30, 2007",
                        "start_date": "2007-08-19",
                        "end_date": "2007-08-30"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Psyduck",
                "form": null,
                "national_dex_number": 54,
                "base_stats": {
                    "hp": 50,
                    "attack": 52,
                    "defense": 48,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Damp",
                    "Cloud Nine"
                ],
                "hidden_ability": null,
                "weight": 19.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Psyduck",
                "event_name": "ShigeShige",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "コダック",
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Damp",
                    "Cloud Nine"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "しげしげ",
                "ot_gender": "Male",
                "trainer_id": "53437",
                "moves": [
                    "Psychic",
                    "Confuse Ray",
                    "Yawn",
                    "Mud Bomb"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "August 19 to 30, 2007",
                        "start_date": "2007-08-19",
                        "end_date": "2007-08-30"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            }
        ],
        "Heracross": [
            {
                "species": "Heracross",
                "form": null,
                "national_dex_number": 214,
                "base_stats": {
                    "hp": 80,
                    "attack": 125,
                    "defense": 75,
                    "special_attack": 40,
                    "special_defense": 95,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Bug",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [
                    "Swarm",
                    "Guts"
                ],
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Heracross",
                "event_name": "Christy",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "HERACROSS",
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Guts",
                    "Swarm"
                ],
                "held_item": "Brick Mail",
                "ball": "Poké Ball",
                "ot": "Christy",
                "ot_gender": "Female",
                "trainer_id": "50039",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Horn Attack",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "August 19 to 30, 2007",
                        "start_date": "2007-08-19",
                        "end_date": "2007-08-30"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Heracross",
                "form": null,
                "national_dex_number": 214,
                "base_stats": {
                    "hp": 80,
                    "attack": 125,
                    "defense": 75,
                    "special_attack": 40,
                    "special_defense": 95,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Bug",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [
                    "Swarm",
                    "Guts"
                ],
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Heracross",
                "event_name": "Seth",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "HERACROSS",
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Guts",
                    "Swarm"
                ],
                "held_item": "Brick Mail",
                "ball": "Poké Ball",
                "ot": "Seth",
                "ot_gender": "Male",
                "trainer_id": "08604",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Horn Attack",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "August 19 to 30, 2007",
                        "start_date": "2007-08-19",
                        "end_date": "2007-08-30"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Heracross",
                "form": null,
                "national_dex_number": 214,
                "base_stats": {
                    "hp": 80,
                    "attack": 125,
                    "defense": 75,
                    "special_attack": 40,
                    "special_defense": 95,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Bug",
                "type_2": "Fighting",
                "catch_rate": 45,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [
                    "Swarm",
                    "Guts"
                ],
                "hidden_ability": null,
                "weight": 54.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Heracross",
                "event_name": "Tom",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "HERACROSS",
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Guts",
                    "Swarm"
                ],
                "held_item": "Brick Mail",
                "ball": "Poké Ball",
                "ot": "Tom",
                "ot_gender": "Male",
                "trainer_id": "24974",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Horn Attack",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "English",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "August 19 to 30, 2007",
                        "start_date": "2007-08-19",
                        "end_date": "2007-08-30"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            }
        ],
        "Magikarp": [
            {
                "species": "Magikarp",
                "form": null,
                "national_dex_number": 129,
                "base_stats": {
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": null,
                "weight": 10.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magikarp",
                "event_name": "Nana",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "コイキング",
                "gender": "Female",
                "nature": "Lonely",
                "ability": "Swift Swim",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "ナナ",
                "ot_gender": "Female",
                "trainer_id": "07076",
                "moves": [
                    "Splash"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "February 14 to 15, 2007",
                        "start_date": "2007-02-14",
                        "end_date": "2007-02-15"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magikarp",
                "form": null,
                "national_dex_number": 129,
                "base_stats": {
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": null,
                "weight": 10.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magikarp",
                "event_name": "Norii",
                "level": 7,
                "shiny": false,
                "is_egg": false,
                "nickname": "コイキング",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Swift Swim",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "ノリィ♪",
                "ot_gender": "Female",
                "trainer_id": "03126",
                "moves": [
                    "Splash"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "February 14 to 15, 2007",
                        "start_date": "2007-02-14",
                        "end_date": "2007-02-15"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magikarp",
                "form": null,
                "national_dex_number": 129,
                "base_stats": {
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": null,
                "weight": 10.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magikarp",
                "event_name": "Ruirui",
                "level": 6,
                "shiny": false,
                "is_egg": false,
                "nickname": "コイキング",
                "gender": "Female",
                "nature": "Rash",
                "ability": "Swift Swim",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "ルイルイ♥",
                "ot_gender": "Female",
                "trainer_id": "02226",
                "moves": [
                    "Splash"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "February 14 to 15, 2007",
                        "start_date": "2007-02-14",
                        "end_date": "2007-02-15"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magikarp",
                "form": null,
                "national_dex_number": 129,
                "base_stats": {
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": null,
                "weight": 10.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magikarp",
                "event_name": "Ryuuta",
                "level": 4,
                "shiny": false,
                "is_egg": false,
                "nickname": "コイキング",
                "gender": "Male",
                "nature": "Modest",
                "ability": "Swift Swim",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "りゅうた",
                "ot_gender": "Male",
                "trainer_id": "12226",
                "moves": [
                    "Splash"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "February 14 to 15, 2007",
                        "start_date": "2007-02-14",
                        "end_date": "2007-02-15"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            },
            {
                "species": "Magikarp",
                "form": null,
                "national_dex_number": 129,
                "base_stats": {
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 40,
                "gender_ratio": 127,
                "egg_cycles": 5,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": null,
                "weight": 10.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magikarp",
                "event_name": "Uttsu",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "コイキング",
                "gender": "Male",
                "nature": "Relaxed",
                "ability": "Swift Swim",
                "held_item": "Heart Mail",
                "ball": "Poké Ball",
                "ot": "ウッツ－",
                "ot_gender": "Male",
                "trainer_id": "01256",
                "moves": [
                    "Splash"
                ],
                "ivs": null,
                "met_location": "Pokémon Fan Club",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the GTS",
                        "date": "February 14 to 15, 2007",
                        "start_date": "2007-02-14",
                        "end_date": "2007-02-15"
                    }
                ],
                "source_page": "List of GTS event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Traded events": {
        "Red and Green Anniversary Pichu": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Red and Green Anniversary Pichu",
                "level": 1,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ピチュー",
                "gender": "Random",
                "nature": "Random",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Hatcher's)",
                "ot_gender": "Male",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Volt Tackle",
                    "Thunderbolt",
                    "Grass Knot",
                    "Return"
                ],
                "ivs": null,
                "met_location": "Link trade",
                "egg_met_location": "(Place hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "February 27, 2008",
                        "start_date": "2008-02-27",
                        "end_date": "2008-02-27"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation IV"
            }
        ],
        "Kyocera Dome Pokémon": [
            {
                "species": "Starly",
                "form": null,
                "national_dex_number": 396,
                "base_stats": {
                    "hp": 40,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
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
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 49,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Keen Eye"
                ],
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Starly",
                "event_name": "Starly",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "ムックル",
                "gender": "Male",
                "nature": "Mild",
                "ability": "Keen Eye",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "だいすき",
                "ot_gender": "Female",
                "trainer_id": "08311",
                "moves": [
                    "Tackle",
                    "Growl"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "February 24, 2008",
                        "start_date": "2008-02-24",
                        "end_date": "2008-02-24"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation IV"
            },
            {
                "species": "Bidoof",
                "form": null,
                "national_dex_number": 399,
                "base_stats": {
                    "hp": 59,
                    "attack": 45,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 31
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
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Simple",
                    "Unaware"
                ],
                "hidden_ability": null,
                "weight": 20.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Bidoof",
                "event_name": "Bidoof",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": "ビッパ",
                "gender": "Male",
                "nature": "Lonely",
                "ability": "Simple",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "だいすき",
                "ot_gender": "Female",
                "trainer_id": "17336",
                "moves": [
                    "Tackle"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple",
                "egg_met_location": "Solaceon Town",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Diamond",
                    "Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "February 24, 2008",
                        "start_date": "2008-02-24",
                        "end_date": "2008-02-24"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation IV"
            }
        ]
    },
    "Game-based distributions": {
        "Pokémon Ranger: Guardian Signs": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "International Oblivia Shaymin",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "SHAYMIN",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Oblivia",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Growth",
                    "Magical Leaf",
                    "Leech Seed",
                    "Synthesis"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Heatran",
                "form": null,
                "national_dex_number": 485,
                "base_stats": {
                    "hp": 91,
                    "attack": 90,
                    "defense": 106,
                    "special_attack": 130,
                    "special_defense": 106,
                    "speed": 77
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
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 100,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Flash Fire"
                ],
                "hidden_ability": null,
                "weight": 430.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Heatran",
                "event_name": "International Oblivia Heatran",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "HEATRAN",
                "gender": "Male",
                "nature": "Quiet",
                "ability": "Flash Fire",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Oblivia",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Eruption",
                    "Magma Storm",
                    "Earth Power",
                    "AncientPower"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "International Oblivia Deoxys Normal Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Oblivia",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Leer",
                    "Wrap",
                    "Night Shade"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "International Oblivia Deoxys Attack Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Oblivia",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Meteor Mash",
                    "Superpower",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "International Oblivia Deoxys Defense Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Oblivia",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Detect",
                    "Counter",
                    "Mirror Coat"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "International Oblivia Deoxys Speed Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Oblivia",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Swift",
                    "Double Team",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Heatran",
                "form": null,
                "national_dex_number": 485,
                "base_stats": {
                    "hp": 91,
                    "attack": 90,
                    "defense": 106,
                    "special_attack": 130,
                    "special_defense": 106,
                    "speed": 77
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
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 100,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Flash Fire"
                ],
                "hidden_ability": null,
                "weight": 430.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Heatran",
                "event_name": "Japanese Oblivia Heatran",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヒードラン",
                "gender": "Male",
                "nature": "Quiet",
                "ability": "Flash Fire",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "オブリビア",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Eruption",
                    "Magma Storm",
                    "Earth Power",
                    "AncientPower"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Japanese Oblivia Shaymin",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "シェイミ",
                "gender": null,
                "nature": "Random",
                "ability": "Natural Cure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "オブリビア",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Growth",
                    "Magical Leaf",
                    "Leech Seed",
                    "Synthesis"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Japanese Oblivia Deoxys Normal Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "デオキシス",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "オブリビア",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Leer",
                    "Wrap",
                    "Night Shade"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "many countries",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Japanese Oblivia Deoxys Attack Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "デオキシス",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "オブリビア",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Meteor Mash",
                    "Superpower",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Japanese Oblivia Deoxys Defense Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "デオキシス",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "オブリビア",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Detect",
                    "Counter",
                    "Mirror Coat"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Japanese Oblivia Deoxys Speed Forme",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "デオキシス",
                "gender": null,
                "nature": "Random",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "オブリビア",
                "ot_gender": "Male",
                "trainer_id": "03060",
                "moves": [
                    "Psycho Boost",
                    "Swift",
                    "Double Team",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            }
        ],
        "Pokémon Ranger: Shadows of Almia": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "Japanese Almia Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ダークライ",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "アルミア",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Dark Void",
                    "Dark Pulse",
                    "Shadow Ball",
                    "Double Team"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Darkrai",
                "event_name": "International Almia Darkrai",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "DARKRAI",
                "gender": null,
                "nature": "Random",
                "ability": "Bad Dreams",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Almia",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Dark Void",
                    "Dark Pulse",
                    "Shadow Ball",
                    "Double Team"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Riolu",
                "form": null,
                "national_dex_number": 447,
                "base_stats": {
                    "hp": 40,
                    "attack": 70,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 57,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 20.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Riolu",
                "event_name": "English Riolu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "RIOLU",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Kyle",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Aura Sphere",
                    "Shadow Claw",
                    "Bullet Punch",
                    "Drain Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "America and Europe",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Riolu",
                "form": null,
                "national_dex_number": 447,
                "base_stats": {
                    "hp": 40,
                    "attack": 70,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 57,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 20.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Riolu",
                "event_name": "French Riolu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "RIOLU",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Karel",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Aura Sphere",
                    "Shadow Claw",
                    "Bullet Punch",
                    "Drain Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Riolu",
                "form": null,
                "national_dex_number": 447,
                "base_stats": {
                    "hp": 40,
                    "attack": 70,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 57,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 20.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Riolu",
                "event_name": "German Riolu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "RIOLU",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Kyle",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Aura Sphere",
                    "Shadow Claw",
                    "Bullet Punch",
                    "Drain Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Riolu",
                "form": null,
                "national_dex_number": 447,
                "base_stats": {
                    "hp": 40,
                    "attack": 70,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 57,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 20.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Riolu",
                "event_name": "Italian Riolu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "RIOLU",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Carlo",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Aura Sphere",
                    "Shadow Claw",
                    "Bullet Punch",
                    "Drain Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Italy",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Riolu",
                "form": null,
                "national_dex_number": 447,
                "base_stats": {
                    "hp": 40,
                    "attack": 70,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 57,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 20.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Riolu",
                "event_name": "Spanish Riolu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "RIOLU",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Kiko",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Aura Sphere",
                    "Shadow Claw",
                    "Bullet Punch",
                    "Drain Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Riolu",
                "form": null,
                "national_dex_number": 447,
                "base_stats": {
                    "hp": 40,
                    "attack": 70,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 57,
                "gender_ratio": 31,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Steadfast",
                    "Inner Focus"
                ],
                "hidden_ability": null,
                "weight": 20.2,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Riolu",
                "event_name": "Japanese Riolu",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "リオル",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Steadfast",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "カイト",
                "ot_gender": "Male",
                "trainer_id": "03208",
                "moves": [
                    "Aura Sphere",
                    "Shadow Claw",
                    "Bullet Punch",
                    "Drain Punch"
                ],
                "ivs": null,
                "met_location": "Pokémon Ranger",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            }
        ],
        "PAL region Pokémon Battle Revolution": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Pikachu",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "PIKACHU",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Poké Ball",
                "ot": "PKTOPIA",
                "ot_gender": "Male",
                "trainer_id": "12077",
                "moves": [
                    "Volt Tackle",
                    "Surf",
                    "Tail Whip",
                    "Thunder Wave"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Europe and Australia",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Electivire",
                "form": null,
                "national_dex_number": 466,
                "base_stats": {
                    "hp": 75,
                    "attack": 123,
                    "defense": 67,
                    "special_attack": 95,
                    "special_defense": 85,
                    "speed": 95
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
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Motor Drive"
                ],
                "hidden_ability": null,
                "weight": 138.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Electivire",
                "event_name": "Electivire",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ELECTIVIRE",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Motor Drive",
                "held_item": "Magnet",
                "ball": "Poké Ball",
                "ot": "PKTOPIA",
                "ot_gender": "Male",
                "trainer_id": "12077",
                "moves": [
                    "ThunderPunch",
                    "Ice Punch",
                    "Cross Chop",
                    "Earthquake"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Europe and Australia",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Magmortar",
                "form": null,
                "national_dex_number": 467,
                "base_stats": {
                    "hp": 75,
                    "attack": 95,
                    "defense": 67,
                    "special_attack": 125,
                    "special_defense": 95,
                    "speed": 83
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
                "type_2": "Fire",
                "catch_rate": 30,
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Flame Body"
                ],
                "hidden_ability": null,
                "weight": 68.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magmortar",
                "event_name": "Magmortar",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "MAGMORTAR",
                "gender": "Female",
                "nature": "Modest",
                "ability": "Flame Body",
                "held_item": "Charcoal",
                "ball": "Poké Ball",
                "ot": "PKTOPIA",
                "ot_gender": "Male",
                "trainer_id": "12077",
                "moves": [
                    "Flamethrower",
                    "Psychic",
                    "Hyper Beam",
                    "SolarBeam"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Europe and Australia",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            }
        ],
        "North American Pokémon Battle Revolution": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Pikachu",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "PIKACHU",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Poké Ball",
                "ot": "PKTOPIA",
                "ot_gender": "Male",
                "trainer_id": "06257",
                "moves": [
                    "Volt Tackle",
                    "Surf",
                    "Tail Whip",
                    "Thunder Wave"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "North America",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Electivire",
                "form": null,
                "national_dex_number": 466,
                "base_stats": {
                    "hp": 75,
                    "attack": 123,
                    "defense": 67,
                    "special_attack": 95,
                    "special_defense": 85,
                    "speed": 95
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
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Motor Drive"
                ],
                "hidden_ability": null,
                "weight": 138.6,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Electivire",
                "event_name": "Electivire",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ELECTIVIRE",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Motor Drive",
                "held_item": "Magnet",
                "ball": "Poké Ball",
                "ot": "PKTOPIA",
                "ot_gender": "Male",
                "trainer_id": "06257",
                "moves": [
                    "ThunderPunch",
                    "Ice Punch",
                    "Cross Chop",
                    "Earthquake"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "North America",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            },
            {
                "species": "Magmortar",
                "form": null,
                "national_dex_number": 467,
                "base_stats": {
                    "hp": 75,
                    "attack": 95,
                    "defense": 67,
                    "special_attack": 125,
                    "special_defense": 95,
                    "speed": 83
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
                "type_2": "Fire",
                "catch_rate": 30,
                "base_experience": 243,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Flame Body"
                ],
                "hidden_ability": null,
                "weight": 68.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Magmortar",
                "event_name": "Magmortar",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "MAGMORTAR",
                "gender": "Female",
                "nature": "Modest",
                "ability": "Flame Body",
                "held_item": "Charcoal",
                "ball": "Poké Ball",
                "ot": "PKTOPIA",
                "ot_gender": "Male",
                "trainer_id": "06257",
                "moves": [
                    "Flamethrower",
                    "Psychic",
                    "Hyper Beam",
                    "SolarBeam"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "North America",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            }
        ],
        "Japanese Pokémon Battle Revolution Pikachu": [
            {
                "species": "Pikachu",
                "form": null,
                "national_dex_number": 25,
                "base_stats": {
                    "hp": 35,
                    "attack": 55,
                    "defense": 30,
                    "special_attack": 50,
                    "special_defense": 40,
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
                "hidden_ability": null,
                "weight": 6.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pikachu",
                "event_name": "Japanese Pokémon Battle Revolution Pikachu",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Poké Ball",
                "ot": "ポケトピア",
                "ot_gender": "Male",
                "trainer_id": "12146",
                "moves": [
                    "Volt Tackle",
                    "Surf",
                    "Tail Whip",
                    "Thunder Wave"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation IV"
            }
        ]
    },
    "Movie events": {
        "Kyurem VS The Sword of Justice": [
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
                "pokedex_entry": "pokedex/black2_white2.js#Keldeo",
                "event_name": "Gamestop Keldeo",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": "Keldeo",
                "gender": null,
                "nature": null,
                "ability": "Justified",
                "held_item": "PP Max",
                "ball": "Cherish Ball",
                "ot": "EST2012 / ÉTÉ2012 / SMR2012 / VER2012",
                "ot_gender": "Male",
                "trainer_id": "08272",
                "moves": [
                    "Aqua Jet",
                    "Leer",
                    "Double Kick",
                    "BubbleBeam"
                ],
                "ivs": null,
                "met_location": "Lovely place",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Black",
                    "White"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 27 to October 6, 2012",
                        "start_date": "2012-08-27",
                        "end_date": "2012-10-06"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "White—Victini and Zekrom and Black—Victini and Reshiram": [
            {
                "species": "Victini",
                "form": null,
                "national_dex_number": 494,
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
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Victory Star"
                ],
                "hidden_ability": null,
                "weight": 4.0,
                "pokedex_entry": "pokedex/black2_white2.js#Victini",
                "event_name": "Movie 14 Victini",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "Victini",
                "gender": null,
                "nature": null,
                "ability": "Victory Star",
                "held_item": "Fire Gem",
                "ball": null,
                "ot": "Movie14",
                "trainer_id": "12031",
                "moves": [
                    "V-create",
                    "Fusion Flare",
                    "Fusion Bolt",
                    "Searing Shot"
                ],
                "ivs": null,
                "met_location": "Wi-Fi Gift",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Black",
                    "White"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "December 3 to 31, 2011",
                        "start_date": "2011-12-03",
                        "end_date": "2011-12-31"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Zoroark: Master of Illusions": [
            {
                "species": "Celebi",
                "form": null,
                "national_dex_number": 251,
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
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 5.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Celebi",
                "event_name": "Europe Winter 2011 Celebi",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": "Natural Cure",
                "held_item": "Jaboca Berry",
                "ball": null,
                "ot": "WIN2011, HVR2011, / INV2011",
                "ot_gender": "Female",
                "trainer_id": "02211",
                "moves": [
                    "Leaf Storm",
                    "Recover",
                    "Nasty Plot",
                    "Healing Wish"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Europe",
                        "date": "February 1 to March 3, February 4 to March 3, / February 14 to March 4, February 14 to March 4, / February 18 to 27, February 19 to 27, February 26, 2011",
                        "start_date": "2011-02-01",
                        "end_date": "2011-03-04",
                        "periods": [
                            {
                                "start": "2011-02-01",
                                "end": "2011-03-03"
                            },
                            {
                                "start": "2011-02-04",
                                "end": "2011-03-03"
                            },
                            {
                                "start": "2011-02-14",
                                "end": "2011-03-04"
                            },
                            {
                                "start": "2011-02-14",
                                "end": "2011-03-04"
                            },
                            {
                                "start": "2011-02-18",
                                "end": "2011-02-27"
                            },
                            {
                                "start": "2011-02-19",
                                "end": "2011-02-27"
                            },
                            {
                                "start": "2011-02-26",
                                "end": "2011-02-26"
                            }
                        ]
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Crown City Beasts": [
            {
                "species": "Suicune",
                "form": null,
                "national_dex_number": 245,
                "base_stats": {
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 187.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Suicune",
                "event_name": "Europe and North America Winter 2011 Suicune",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": "Relaxed",
                "ability": "Pressure",
                "held_item": "Rowap Berry",
                "ball": null,
                "ot": "WIN2011, HVR2011, / INV2011",
                "ot_gender": "Male",
                "trainer_id": "02211",
                "moves": [
                    "Sheer Cold",
                    "Aqua Ring",
                    "Air Slash",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 21 to 27, 2011",
                        "start_date": "2011-02-21",
                        "end_date": "2011-02-27"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Entei",
                "form": null,
                "national_dex_number": 244,
                "base_stats": {
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 198.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Entei",
                "event_name": "Europe and North America Winter 2011 Entei",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": "Adamant",
                "ability": "Pressure",
                "held_item": "Custap Berry",
                "ball": null,
                "ot": "WIN2011, HVR2011, / INV2011",
                "ot_gender": "Male",
                "trainer_id": "02141",
                "moves": [
                    "Flare Blitz",
                    "Crush Claw",
                    "Howl",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 14 to 20, 2011",
                        "start_date": "2011-02-14",
                        "end_date": "2011-02-20"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Raikou",
                "form": null,
                "national_dex_number": 243,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": null,
                "weight": 178.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Raikou",
                "event_name": "Europe and North America Winter 2011 Raikou",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": "Rash",
                "ability": "Pressure",
                "held_item": "Micle Berry",
                "ball": null,
                "ot": "WIN2011, HVR2011, / INV2011",
                "ot_gender": "Male",
                "trainer_id": "02071",
                "moves": [
                    "Zap Cannon",
                    "Weather Ball",
                    "Aura Sphere",
                    "ExtremeSpeed"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Diamond",
                    "Pearl",
                    "Platinum",
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Diamond",
                            "Pearl",
                            "Platinum",
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "February 7 to 13, 2011",
                        "start_date": "2011-02-07",
                        "end_date": "2011-02-13"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Arceus and the Jewel of Life": [
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
                "hidden_ability": null,
                "weight": 2.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Pichu",
                "event_name": "Europe and North America Spring 2010 Pichu",
                "level": 30,
                "shiny": true,
                "is_egg": false,
                "nickname": "PICHU",
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Static",
                "held_item": "Everstone",
                "ball": null,
                "ot": "SPR2010, FRü2010, / PRI2010",
                "ot_gender": "Female",
                "trainer_id": "03050",
                "moves": [
                    "Charge",
                    "Volt Tackle",
                    "Endeavor",
                    "Endure"
                ],
                "ivs": null,
                "met_location": "Pokemon Event",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [],
                "distributions": [
                    {
                        "games": [],
                        "method": null,
                        "language": null,
                        "location": "Wi-Fi",
                        "date": "March 5 to 25, 2010",
                        "start_date": "2010-03-05",
                        "end_date": "2010-03-25"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Giratina and the Sky Warrior": [
            {
                "species": "Shaymin",
                "form": null,
                "national_dex_number": 492,
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
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 100,
                "growth_rate": "Medium Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": null,
                "weight": 2.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Shaymin",
                "event_name": "Time Square Shaymin",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": "셰이미",
                "gender": null,
                "nature": null,
                "ability": "Natural Cure",
                "held_item": "Soothe Bell",
                "ball": null,
                "ot": "타임스퀘어",
                "ot_gender": "Male",
                "trainer_id": "05010",
                "moves": [
                    "Seed Flare",
                    "Aromatherapy",
                    "Substitute",
                    "Energy Ball"
                ],
                "ivs": null,
                "met_location": "Pokémon Event",
                "fateful_encounter": false,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "games": [
                    "HeartGold",
                    "SoulSilver"
                ],
                "distributions": [
                    {
                        "games": [
                            "HeartGold",
                            "SoulSilver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "South Korea",
                        "date": "May 1 to 2, 2009",
                        "start_date": "2009-05-01",
                        "end_date": "2009-05-02"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Lucario and the Mystery of Mew": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Aura Mew",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": null,
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Aura",
                "trainer_id": "20078",
                "moves": [
                    "Pound",
                    "Transform"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the UK, Spain / Germany, France, and Italy",
                        "date": "2007",
                        "start_date": "2007",
                        "end_date": "2007"
                    }
                ],
                "source_page": "List of movie event Pokémon"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Mystery Mew",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": null,
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "MYSTRY",
                "trainer_id": "06930",
                "moves": [
                    "Pound",
                    "Transform"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "September 30, 2006",
                        "start_date": "2006-09-30",
                        "end_date": "2006-09-30"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Regirock",
                "form": null,
                "national_dex_number": 377,
                "base_stats": {
                    "hp": 80,
                    "attack": 100,
                    "defense": 200,
                    "special_attack": 50,
                    "special_defense": 100,
                    "speed": 50
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
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Clear Body"
                ],
                "hidden_ability": null,
                "weight": 230.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regirock",
                "event_name": "Hadou Regirock",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "レジロック",
                "gender": null,
                "nature": null,
                "ability": "Clear Body",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "ハドウ",
                "ot_gender": "Female",
                "trainer_id": "50901",
                "moves": [
                    "Curse",
                    "Superpower",
                    "AncientPower",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "September 1 to 25, 2005",
                        "start_date": "2005-09-01",
                        "end_date": "2005-09-25"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Regice",
                "form": null,
                "national_dex_number": 378,
                "base_stats": {
                    "hp": 80,
                    "attack": 50,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 200,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 3,
                    "speed": 0
                },
                "type_1": "Ice",
                "type_2": "Ice",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Clear Body"
                ],
                "hidden_ability": null,
                "weight": 175.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Regice",
                "event_name": "Hadou Regice",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "レジアイス",
                "gender": null,
                "nature": null,
                "ability": "Clear Body",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "ハドウ",
                "ot_gender": "Female",
                "trainer_id": "50901",
                "moves": [
                    "Curse",
                    "Superpower",
                    "AncientPower",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "September 1 to 25, 2005",
                        "start_date": "2005-09-01",
                        "end_date": "2005-09-25"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Registeel",
                "form": null,
                "national_dex_number": 379,
                "base_stats": {
                    "hp": 80,
                    "attack": 75,
                    "defense": 150,
                    "special_attack": 75,
                    "special_defense": 150,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 2,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Clear Body"
                ],
                "hidden_ability": null,
                "weight": 205.0,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Registeel",
                "event_name": "Hadou Registeel",
                "level": 40,
                "shiny": false,
                "is_egg": false,
                "nickname": "レジスチル",
                "gender": null,
                "nature": null,
                "ability": "Clear Body",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "ハドウ",
                "ot_gender": "Female",
                "trainer_id": "50901",
                "moves": [
                    "Curse",
                    "Superpower",
                    "AncientPower",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "September 1 to 25, 2005",
                        "start_date": "2005-09-01",
                        "end_date": "2005-09-25"
                    }
                ],
                "source_page": "List of movie event Pokémon"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Mew",
                "event_name": "Hadou Mew",
                "level": 10,
                "shiny": false,
                "is_egg": false,
                "nickname": "ミュウ",
                "gender": null,
                "nature": null,
                "ability": "Synchronize",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "ハドウ",
                "ot_gender": "Female",
                "trainer_id": "50716",
                "moves": [
                    "Pound",
                    "Transform"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "April 16 to May 8, 2005",
                        "start_date": "2005-04-16",
                        "end_date": "2005-05-08"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Destiny Deoxys": [
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Doel Deoxys",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": null,
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "DOEL",
                "trainer_id": "28606",
                "moves": [
                    "Cosmic Power",
                    "Recover",
                    "Psycho Boost",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "May 25 to 26, 2006",
                        "start_date": "2006-05-25",
                        "end_date": "2006-05-26"
                    }
                ],
                "source_page": "List of movie event Pokémon"
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
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Deoxys",
                "event_name": "Space Center Deoxys",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "DEOXYS",
                "gender": null,
                "nature": null,
                "ability": "Pressure",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "SPACE C",
                "trainer_id": "00010",
                "moves": [
                    "Cosmic Power",
                    "Recover",
                    "Psycho Boost",
                    "Hyper Beam"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 10 to 19, 2006",
                        "start_date": "2006-03-10",
                        "end_date": "2006-03-19"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ],
        "Jirachi: Wish Maker": [
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Channel Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": null,
                "ability": "Serene Grace",
                "held_item": [
                    "Salac Berry",
                    "Ganlon Berry"
                ],
                "ball": "Poké Ball",
                "ot": "CHANNEL",
                "trainer_id": "40122",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Europe and Australia",
                        "date": "Apr. 2, 2004",
                        "start_date": "2004-04-02",
                        "end_date": "2004-04-02"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Wishmaker Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "JIRACHI",
                "gender": null,
                "nature": null,
                "ability": "Serene Grace",
                "held_item": [
                    "Salac Berry",
                    "Ganlon Berry"
                ],
                "ball": "Poké Ball",
                "ot": "WISHMKR",
                "trainer_id": "20043",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest"
                ],
                "ivs": null,
                "met_location": "Hoenn/Kanto",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire",
                    "FireRed",
                    "LeafGreen",
                    "Emerald"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire",
                            "FireRed",
                            "LeafGreen",
                            "Emerald"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "Apr. 2, 2004",
                        "start_date": "2004-04-02",
                        "end_date": "2004-04-02"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            },
            {
                "species": "Jirachi",
                "form": null,
                "national_dex_number": 385,
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
                "type_1": "Steel",
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
                "weight": 1.1,
                "pokedex_entry": "pokedex/heartgold_soulsilver.js#Jirachi",
                "event_name": "Negaiboshi Jirachi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "ジラ－チ",
                "gender": null,
                "nature": null,
                "ability": "Serene Grace",
                "held_item": [
                    "Salac Berry",
                    "Ganlon Berry"
                ],
                "ball": "Poké Ball",
                "ot": "ネガイボシ",
                "trainer_id": "30719",
                "moves": [
                    "Wish",
                    "Confusion",
                    "Rest"
                ],
                "ivs": null,
                "met_location": "Hoenn",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Ruby",
                    "Sapphire"
                ],
                "distributions": [
                    {
                        "games": [
                            "Ruby",
                            "Sapphire"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "June 1 to July 31, 2003",
                        "start_date": "2003-06-01",
                        "end_date": "2003-07-31"
                    }
                ],
                "source_page": "List of movie event Pokémon"
            }
        ]
    }
};
