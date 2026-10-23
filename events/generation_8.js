// Event Pokémon distributed in Generation VIII (132 Pokémon), scraped from
// Bulbapedia's event distribution lists by scrape_event_pokemon.py.
// Structure: { channel/list page: { event: [ pokemon, ... ] } }.
// Species fields (national_dex_number .. weight) come from the pokedex/*.js entry
// named in pokedex_entry (types and dex number from the event itself); every field
// from event_name on describes the distributed Pokémon.

export const eventPokemon = {
    "Sword and Shield": {
        "Galar's Shiny Eternatus": [
            {
                "species": "Eternatus",
                "form": null,
                "national_dex_number": 890,
                "base_stats": {
                    "hp": 140,
                    "attack": 85,
                    "defense": 95,
                    "special_attack": 145,
                    "special_defense": 95,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 3,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Poison",
                "type_2": "Dragon",
                "catch_rate": 255,
                "base_experience": 345,
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
                "weight": 950.0,
                "pokedex_entry": "pokedex/sword_shield.js#Eternatus",
                "event_name": "Galar's Shiny Eternatus",
                "level": 100,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Timid",
                "ability": "Pressure",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Galar / ガラル / 가라르 / 伽勒尔 / 伽勒爾",
                "trainer_id": "221118",
                "moves": [
                    "Eternabeam",
                    "Dynamax Cannon",
                    "Sludge Bomb",
                    "Flamethrower"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
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
                "origin_language": null,
                "wonder_card": {
                    "id": 1643,
                    "title": "Shiny Eternatus Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (A codes)",
                        "language": null,
                        "location": null,
                        "date": "September 16 to November 17, 2022",
                        "start_date": "2022-09-16",
                        "end_date": "2022-11-17"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (E & U codes)",
                        "language": null,
                        "location": null,
                        "date": "September 18, 2022 to January 1, 2023",
                        "start_date": "2022-09-18",
                        "end_date": "2023-01-01"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (K codes)",
                        "language": null,
                        "location": null,
                        "date": "September 30 to December 31, 2022",
                        "start_date": "2022-09-30",
                        "end_date": "2022-12-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (J codes)",
                        "language": null,
                        "location": null,
                        "date": "October 21 to November 24, 2022",
                        "start_date": "2022-10-21",
                        "end_date": "2022-11-24"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Mythical 2022 Pokémon": [
            {
                "species": "Genesect",
                "form": null,
                "national_dex_number": 649,
                "base_stats": {
                    "hp": 71,
                    "attack": 120,
                    "defense": 95,
                    "special_attack": 120,
                    "special_defense": 95,
                    "speed": 99
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Bug",
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Download"
                ],
                "hidden_ability": null,
                "weight": 82.5,
                "pokedex_entry": "pokedex/sword_shield.js#Genesect",
                "event_name": "Genesect",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "Genesect",
                "gender": null,
                "nature": "Random",
                "ability": "Download",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Mythical22",
                "trainer_id": "220909",
                "moves": [
                    "Techno Blast",
                    "X-Scissor",
                    "Metal Claw",
                    "Fell Stinger"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 526,
                    "title": "Mythical Pokémon Genesect Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (E Codes)",
                        "language": null,
                        "location": null,
                        "date": "September 9 to December 31, 2022",
                        "start_date": "2022-09-09",
                        "end_date": "2022-12-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (U Codes)",
                        "language": null,
                        "location": null,
                        "date": "October 16, 2022 to January 1, 2023",
                        "start_date": "2022-10-16",
                        "end_date": "2023-01-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Volcanion",
                "event_name": "Volcanion",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "Volcanion",
                "gender": null,
                "nature": "Random",
                "ability": "Water Absorb",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Mythical22",
                "trainer_id": "220909",
                "moves": [
                    "Steam Eruption",
                    "Flare Blitz",
                    "Incinerate",
                    "Haze"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 527,
                    "title": "Mythical Pokémon Volcanion Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (E Codes)",
                        "language": null,
                        "location": null,
                        "date": "September 9 to December 31, 2022",
                        "start_date": "2022-09-09",
                        "end_date": "2022-12-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (U Codes)",
                        "language": null,
                        "location": null,
                        "date": "October 16, 2022 to January 1, 2023",
                        "start_date": "2022-10-16",
                        "end_date": "2023-01-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Marshadow",
                "form": null,
                "national_dex_number": 802,
                "base_stats": {
                    "hp": 90,
                    "attack": 125,
                    "defense": 80,
                    "special_attack": 90,
                    "special_defense": 90,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Fighting",
                "type_2": "Ghost",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 22.2,
                "pokedex_entry": "pokedex/sword_shield.js#Marshadow",
                "event_name": "Marshadow",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "Marshadow",
                "gender": null,
                "nature": "Random",
                "ability": "Technician",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Mythical22",
                "trainer_id": "220909",
                "moves": [
                    "Spectral Thief",
                    "Drain Punch",
                    "Force Palm",
                    "Shadow Sneak"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 528,
                    "title": "Mythical Pokémon Marshadow Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (E Codes)",
                        "language": null,
                        "location": null,
                        "date": "September 9 to December 31, 2022",
                        "start_date": "2022-09-09",
                        "end_date": "2022-12-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (U Codes)",
                        "language": null,
                        "location": null,
                        "date": "October 21, 2022 to January 1, 2023",
                        "start_date": "2022-10-21",
                        "end_date": "2023-01-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Otsukimi Clefairy": [
            {
                "species": "Clefairy",
                "form": null,
                "national_dex_number": 35,
                "base_stats": {
                    "hp": 70,
                    "attack": 45,
                    "defense": 48,
                    "special_attack": 60,
                    "special_defense": 65,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 150,
                "base_experience": 113,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cute Charm",
                    "Magic Guard"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 7.5,
                "pokedex_entry": "pokedex/sword_shield.js#Clefairy",
                "event_name": "Otsukimi Clefairy",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Cute Charm",
                "held_item": "Moon Stone",
                "ball": "Moon Ball",
                "ot": "おつきみ２２",
                "trainer_id": "220910",
                "moves": [
                    "Metronome",
                    "Moonblast",
                    "Zen Headbutt",
                    "Moonlight"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 151,
                    "title": "おつきみ２２'s Clefairy Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 3 to 30, 2022",
                        "start_date": "2022-09-03",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Victory Victini": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Victini",
                "event_name": "Victory Victini",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Brave",
                "ability": "Victory Star",
                "held_item": "Starf Berry",
                "ball": "Cherish Ball",
                "ot": "Victory / ビクトリー / 빅토리 / 胜利 / 勝利",
                "trainer_id": "220818",
                "moves": [
                    "V-create",
                    "Zen Headbutt",
                    "Work Up",
                    "Flame Charge"
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
                    "hp": 80,
                    "attack": 80,
                    "defense": 80,
                    "special_attack": 80,
                    "special_defense": 80,
                    "speed": 80
                },
                "met_location": "WCS 2022",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "dynamax_level": 10,
                "origin_language": null,
                "wonder_card": {
                    "id": 1644,
                    "title": "Victory Pokémon Victini Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: W0RL D22V 1CT0 RY",
                        "language": null,
                        "location": null,
                        "date": "August 18 to 22, 2022",
                        "start_date": "2022-08-18",
                        "end_date": "2022-08-22"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "2022 Pokémon World Championships Sinistea": [
            {
                "species": "Sinistea",
                "form": "Antique Form",
                "national_dex_number": 854,
                "base_stats": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 74,
                    "special_defense": 54,
                    "speed": 50
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
                "catch_rate": 120,
                "base_experience": 62,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Weak Armor"
                ],
                "hidden_ability": "Cursed Body",
                "weight": 0.2,
                "pokedex_entry": "pokedex/sword_shield.js#Sinistea",
                "event_name": "2022 Pokémon World Championships Sinistea",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Cursed Body",
                "held_item": "Moomoo Milk",
                "ball": "Cherish Ball",
                "ot": "WCS22 / ＷＣＳ２２",
                "trainer_id": "220818",
                "moves": [
                    "Memento",
                    "Metronome",
                    "Aromatherapy",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "WCS 2022",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 525,
                    "title": "Sinistea with Celebrate Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Local Communication",
                        "language": null,
                        "location": "ExCeL London, London, United Kingdom",
                        "date": "August 18 to 21, 2022",
                        "start_date": "2022-08-18",
                        "end_date": "2022-08-21"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Ash's Pokémon": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Lucario",
                "event_name": "Lucario",
                "level": 80,
                "shiny": false,
                "is_egg": false,
                "nickname": "ルカリオ",
                "gender": "Male",
                "nature": "Serious",
                "ability": "Inner Focus",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "サトシ",
                "trainer_id": "200412",
                "moves": [
                    "Aura Sphere",
                    "Bullet Punch",
                    "Reversal",
                    "Steel Beam"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 30,
                    "speed": 31
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 150,
                    "title": "サトシ's Lucario Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: HAD0 UW0C ATCH",
                        "language": null,
                        "location": null,
                        "date": "September 16 to 29, 2022",
                        "start_date": "2022-09-16",
                        "end_date": "2022-09-29"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Sirfetch'd",
                "event_name": "Sirfetch'd",
                "level": 80,
                "shiny": false,
                "is_egg": false,
                "nickname": "ネギガナイト",
                "gender": "Male",
                "nature": "Brave",
                "ability": "Steadfast",
                "held_item": "Leek",
                "ball": "Poké Ball",
                "ot": "サトシ",
                "trainer_id": "200705",
                "moves": [
                    "Meteor Assault",
                    "Brutal Swing",
                    "Fury Cutter",
                    "Detect"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 31
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 149,
                    "title": "サトシ's Sirfetch'd Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: H1SS ATSU NEG1",
                        "language": null,
                        "location": null,
                        "date": "September 9 to 22, 2022",
                        "start_date": "2022-09-09",
                        "end_date": "2022-09-22"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
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
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Gengar (Gmax)",
                "event_name": "Gigantamax Gengar",
                "level": 80,
                "shiny": false,
                "is_egg": false,
                "nickname": "ゲンガー",
                "gender": "Male",
                "nature": "Naughty",
                "ability": "Cursed Body",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "サトシ",
                "trainer_id": "200308",
                "moves": [
                    "Shadow Ball",
                    "Sludge Bomb",
                    "Dazzling Gleam",
                    "Will-O-Wisp"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "gigantamax": true,
                "dynamax_level": 3,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 148,
                    "title": "サトシ's Gengar Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: GENN GER0 GE94",
                        "language": null,
                        "location": null,
                        "date": "September 2 to 15, 2022",
                        "start_date": "2022-09-02",
                        "end_date": "2022-09-15"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
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
                "hidden_ability": "Multiscale",
                "weight": 210.0,
                "pokedex_entry": "pokedex/sword_shield.js#Dragonite",
                "event_name": "Dragonite",
                "level": 80,
                "shiny": false,
                "is_egg": false,
                "nickname": "カイリュー",
                "gender": "Female",
                "nature": "Jolly",
                "ability": "Inner Focus",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "サトシ",
                "trainer_id": "200126",
                "moves": [
                    "Dragon Claw",
                    "Draco Meteor",
                    "Hurricane",
                    "Dragon Dance"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 31,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 147,
                    "title": "サトシ's Dragonite Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: UM1N 0KES H1N",
                        "language": null,
                        "location": null,
                        "date": "August 26 to September 8, 2022",
                        "start_date": "2022-08-26",
                        "end_date": "2022-09-08"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Dracovish",
                "form": null,
                "national_dex_number": 882,
                "base_stats": {
                    "hp": 90,
                    "attack": 90,
                    "defense": 100,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 75
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
                "type_2": "Dragon",
                "catch_rate": 45,
                "base_experience": 177,
                "gender_ratio": 255,
                "egg_cycles": 35,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Water Absorb",
                    "Strong Jaw"
                ],
                "hidden_ability": "Sand Rush",
                "weight": 215.0,
                "pokedex_entry": "pokedex/sword_shield.js#Dracovish",
                "event_name": "Dracovish",
                "level": 80,
                "shiny": false,
                "is_egg": false,
                "nickname": "ウオノラゴン",
                "gender": null,
                "nature": "Naive",
                "ability": "Strong Jaw",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "サトシ",
                "trainer_id": "210108",
                "moves": [
                    "Fishious Rend",
                    "Dragon Rush",
                    "Ice Fang",
                    "Water Gun"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 31
                },
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 146,
                    "title": "サトシ's Dracovish Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: GANJ 0UAG 0882",
                        "language": null,
                        "location": null,
                        "date": "August 12 to 25, 2022",
                        "start_date": "2022-08-12",
                        "end_date": "2022-08-25"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "25th Anniversary Film Fest Pokémon": [
            {
                "species": "Palkia",
                "form": null,
                "national_dex_number": 484,
                "base_stats": {
                    "hp": 90,
                    "attack": 120,
                    "defense": 100,
                    "special_attack": 150,
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
                "type_1": "Water",
                "type_2": "Dragon",
                "catch_rate": 3,
                "base_experience": 306,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": "Telepathy",
                "weight": 336.0,
                "pokedex_entry": "pokedex/sword_shield.js#Palkia",
                "event_name": "Alamos Palkia",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "パルキア",
                "gender": null,
                "nature": "Hasty",
                "ability": "Telepathy",
                "held_item": "Lustrous Orb",
                "ball": "Cherish Ball",
                "ot": "アラモス",
                "trainer_id": "070714",
                "moves": [
                    "Spacial Rend",
                    "Hydro Pump",
                    "Aura Sphere",
                    "Earth Power"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2022 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 144,
                    "title": "アラモス's Palkia Gift"
                },
                "games": [
                    "Sword"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 26 to September 30, 2022",
                        "start_date": "2022-08-26",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Dialga",
                "form": null,
                "national_dex_number": 483,
                "base_stats": {
                    "hp": 100,
                    "attack": 120,
                    "defense": 120,
                    "special_attack": 150,
                    "special_defense": 100,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Dragon",
                "catch_rate": 3,
                "base_experience": 306,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Pressure"
                ],
                "hidden_ability": "Telepathy",
                "weight": 683.0,
                "pokedex_entry": "pokedex/sword_shield.js#Dialga",
                "event_name": "Alamos Dialga",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "ディアルガ",
                "gender": null,
                "nature": "Bold",
                "ability": "Telepathy",
                "held_item": "Adamant Orb",
                "ball": "Cherish Ball",
                "ot": "アラモス",
                "trainer_id": "070714",
                "moves": [
                    "Roar of Time",
                    "Flash Cannon",
                    "Metal Burst",
                    "Overheat"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2022 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 144,
                    "title": "アラモス's Dialia Gift"
                },
                "games": [
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 26 to September 30, 2022",
                        "start_date": "2022-08-26",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
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
                "pokedex_entry": "pokedex/sword_shield.js#Jirachi",
                "event_name": "Wishing Star Jirachi",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "ジラーチ",
                "gender": null,
                "nature": "Timid",
                "ability": "Serene Grace",
                "held_item": "Comet Shard",
                "ball": "Cherish Ball",
                "ot": "ネガイボシ",
                "trainer_id": "030719",
                "moves": [
                    "Meteor Mash",
                    "Psychic",
                    "Rest",
                    "Wish"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2022 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 143,
                    "title": "ネガイボシ's Jirachi Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 19 to September 30, 2022",
                        "start_date": "2022-08-19",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Latias",
                "form": null,
                "national_dex_number": 380,
                "base_stats": {
                    "hp": 80,
                    "attack": 80,
                    "defense": 90,
                    "special_attack": 110,
                    "special_defense": 130,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 3,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Psychic",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 254,
                "egg_cycles": 120,
                "base_friendship": 90,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Levitate"
                ],
                "hidden_ability": null,
                "weight": 40.0,
                "pokedex_entry": "pokedex/sword_shield.js#Latias",
                "event_name": "Alto Mare Latias",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": "ラティアス",
                "gender": "Female",
                "nature": "Bashful",
                "ability": "Levitate",
                "held_item": "Soul Dew",
                "ball": "Cherish Ball",
                "ot": "アルトマーレ",
                "trainer_id": "020713",
                "moves": [
                    "Mist Ball",
                    "Dragon Pulse",
                    "Dive",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2022 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 142,
                    "title": "アルトマーレ's Latias Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 11 to September 30, 2022",
                        "start_date": "2022-08-11",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "World Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Ash's World Cap Pikachu",
                "level": 80,
                "shiny": false,
                "is_egg": false,
                "nickname": "ピカチュウ",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Poké Ball",
                "ot": "サトシ",
                "trainer_id": "970401",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 30,
                    "speed": 31
                },
                "met_location": "a 2022 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Alola Champion"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 145,
                    "title": "サトシ's Pikachu Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 11 to September 30, 2022",
                        "start_date": "2022-08-11",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Eric Rios's East Sea Gastrodon": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Gastrodon",
                "event_name": "Eric Rios's East Sea Gastrodon",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "Gastrodon",
                "gender": "Female",
                "nature": "Sassy",
                "ability": "Storm Drain",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "Eric",
                "trainer_id": "220624",
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
                    "speed": null
                },
                "evs": {
                    "hp": 180,
                    "attack": null,
                    "defense": 140,
                    "special_attack": null,
                    "special_defense": 188,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "dynamax_level": 10,
                "origin_language": "Spanish",
                "wonder_card": {
                    "id": 524,
                    "title": "Eric's Gastrodon Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: ER1C SGAS TR0D 0N",
                        "language": null,
                        "location": null,
                        "date": "June 24 to 27, 2022",
                        "start_date": "2022-06-24",
                        "end_date": "2022-06-27"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Jirawiwat Thitasiri's Clefairy": [
            {
                "species": "Clefairy",
                "form": null,
                "national_dex_number": 35,
                "base_stats": {
                    "hp": 70,
                    "attack": 45,
                    "defense": 48,
                    "special_attack": 60,
                    "special_defense": 65,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 150,
                "base_experience": 113,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cute Charm",
                    "Magic Guard"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 7.5,
                "pokedex_entry": "pokedex/sword_shield.js#Clefairy",
                "event_name": "Jirawiwat Thitasiri's Clefairy",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Bold",
                "ability": "Friend Guard",
                "held_item": "Eviolite",
                "ball": "Cherish Ball",
                "ot": "Jirawiwat",
                "trainer_id": "220618",
                "moves": [
                    "Follow Me",
                    "Icy Wind",
                    "Helping Hand",
                    "Protect"
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
                "dynamax_level": 10,
                "origin_language": "English",
                "wonder_card": {
                    "id": 141,
                    "title": "Jirawiwat's Clefairy Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: APC2 021C HAMP",
                        "language": null,
                        "location": null,
                        "date": "June 18 to 19, 2022",
                        "start_date": "2022-06-18",
                        "end_date": "2022-06-19"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Kohei Fujida's Sableye": [
            {
                "species": "Sableye",
                "form": null,
                "national_dex_number": 302,
                "base_stats": {
                    "hp": 50,
                    "attack": 75,
                    "defense": 75,
                    "special_attack": 65,
                    "special_defense": 65,
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
                "type_1": "Dark",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 133,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Keen Eye",
                    "Stall"
                ],
                "hidden_ability": "Prankster",
                "weight": 11.0,
                "pokedex_entry": "pokedex/sword_shield.js#Sableye",
                "event_name": "Kohei Fujida's Sableye",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "ヤミラミ",
                "gender": "Female",
                "nature": "Careful",
                "ability": "Prankster",
                "held_item": "Eject Button",
                "ball": "Cherish Ball",
                "ot": "コウ",
                "trainer_id": "220611",
                "moves": [
                    "Fake Out",
                    "Quash",
                    "Foul Play",
                    "Trick"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 2,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 252,
                    "attack": null,
                    "defense": 6,
                    "special_attack": null,
                    "special_defense": 252,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "dynamax_level": 10,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 140,
                    "title": "コウ's Sableye Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: 21JA PANC HAMP 10N",
                        "language": null,
                        "location": null,
                        "date": "June 11 to 12, 2022",
                        "start_date": "2022-06-11",
                        "end_date": "2022-06-12"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Wonseok Jung's Grimmsnarl": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Grimmsnarl",
                "event_name": "Wonseok Jung's Grimmsnarl",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "오롱털",
                "gender": "Male",
                "nature": "Careful",
                "ability": "Prankster",
                "held_item": "Eject Button",
                "ball": "Cherish Ball",
                "ot": "정원석",
                "trainer_id": "220611",
                "moves": [
                    "Spirit Break",
                    "Scary Face",
                    "Trick",
                    "Taunt"
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
                    "hp": 228,
                    "attack": 4,
                    "defense": 140,
                    "special_attack": null,
                    "special_defense": 116,
                    "speed": 20
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "dynamax_level": 10,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1027,
                    "title": "정원석's Grimmsnarl Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: K0RE ACHAM P10N 21",
                        "language": null,
                        "location": null,
                        "date": "June 11 to 12, 2022",
                        "start_date": "2022-06-11",
                        "end_date": "2022-06-12"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Marco Hemantha Kaludura Silva's Dracovish": [
            {
                "species": "Dracovish",
                "form": null,
                "national_dex_number": 882,
                "base_stats": {
                    "hp": 90,
                    "attack": 90,
                    "defense": 100,
                    "special_attack": 70,
                    "special_defense": 80,
                    "speed": 75
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
                "type_2": "Dragon",
                "catch_rate": 45,
                "base_experience": 177,
                "gender_ratio": 255,
                "egg_cycles": 35,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Water Absorb",
                    "Strong Jaw"
                ],
                "hidden_ability": "Sand Rush",
                "weight": 215.0,
                "pokedex_entry": "pokedex/sword_shield.js#Dracovish",
                "event_name": "Marco Hemantha Kaludura Silva's Dracovish",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "Dracovish",
                "gender": null,
                "nature": "Adamant",
                "ability": "Strong Jaw",
                "held_item": "Choice Scarf",
                "ball": "Cherish Ball",
                "ot": "Marco",
                "trainer_id": "220422",
                "moves": [
                    "Fishious Rend",
                    "Rock Slide",
                    "Crunch",
                    "Dragon Rush"
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
                    "hp": 4,
                    "attack": 252,
                    "defense": null,
                    "special_attack": null,
                    "special_defense": 252,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "dynamax_level": 10,
                "origin_language": "Italian",
                "wonder_card": {
                    "id": 523,
                    "title": "Marco's Dracovish Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: EU1C 2022 G1FT",
                        "language": null,
                        "location": null,
                        "date": "April 22 to 25, 2022",
                        "start_date": "2022-04-22",
                        "end_date": "2022-04-25"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "2022 International Challenge Shiny Galarian legendary birds": [
            {
                "species": "Moltres",
                "form": "Galarian Form",
                "national_dex_number": 146,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 90,
                    "special_attack": 100,
                    "special_defense": 125,
                    "speed": 90
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
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 290,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Berserk"
                ],
                "hidden_ability": null,
                "weight": 66.0,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Moltres",
                "event_name": "Isle of Armor's Shiny Galarian Moltres",
                "level": 70,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Berserk",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Armor / Rüstung / Isolarmure / Armadura / I. Armatura / ヨロイ / 갑옷섬 / 铠甲 / 鎧甲",
                "trainer_id": "220415",
                "moves": [
                    "Fiery Wrath",
                    "Hurricane",
                    "Sucker Punch",
                    "Nasty Plot"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Shiny Moltres Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Battle Stadium Rewards",
                        "language": null,
                        "location": null,
                        "date": "April 18, 2022 onwards",
                        "start_date": "2022-04-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Zapdos",
                "form": "Galarian Form",
                "national_dex_number": 145,
                "base_stats": {
                    "hp": 90,
                    "attack": 125,
                    "defense": 90,
                    "special_attack": 85,
                    "special_defense": 90,
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
                "type_1": "Fighting",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 290,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Defiant"
                ],
                "hidden_ability": null,
                "weight": 58.2,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Zapdos",
                "event_name": "Wild Area's Shiny Galarian Zapdos",
                "level": 70,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Defiant",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Wild / Natur / Sauvage / Silvestre / T. Selvagg / ワイルド / 와일드에리어 / 旷野 / 曠野",
                "trainer_id": "220311",
                "moves": [
                    "Thunderous Kick",
                    "Drill Peck",
                    "Reversal",
                    "Focus Energy"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Shiny Zapdos Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Battle Stadium Rewards",
                        "language": null,
                        "location": null,
                        "date": "March 14, 2022 onwards",
                        "start_date": "2022-03-14",
                        "end_date": null
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Articuno",
                "form": "Galarian Form",
                "national_dex_number": 144,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 85,
                    "special_attack": 125,
                    "special_defense": 100,
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
                "type_1": "Psychic",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 290,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Competitive"
                ],
                "hidden_ability": null,
                "weight": 50.9,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Articuno",
                "event_name": "Crown Tundra's Shiny Galarian Articuno",
                "level": 70,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Competitive",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Crown / Krone / Couronneige / Corona / L. Corona / カンムリ / 왕관설원 / 王冠",
                "trainer_id": "220218",
                "moves": [
                    "Freezing Glare",
                    "Hurricane",
                    "Psycho Cut",
                    "Psycho Shift"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1,
                    "title": "Shiny Articuno Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Battle Stadium Rewards",
                        "language": null,
                        "location": null,
                        "date": "February 21, 2022 onwards",
                        "start_date": "2022-02-21",
                        "end_date": null
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Pokémon Center Birthday Happiny": [
            {
                "species": "Happiny",
                "form": null,
                "national_dex_number": 440,
                "base_stats": {
                    "hp": 100,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 15,
                    "special_defense": 65,
                    "speed": 30
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
                "catch_rate": 130,
                "base_experience": 110,
                "gender_ratio": 254,
                "egg_cycles": 40,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure",
                    "Serene Grace"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 24.4,
                "pokedex_entry": "pokedex/sword_shield.js#Happiny",
                "event_name": "Pokémon Center Birthday Happiny",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Happiny / ピンプク",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Friend Guard",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Poké Center / ポケセン",
                "trainer_id": "211101",
                "moves": [
                    "Present",
                    "Sweet Kiss",
                    "Disarming Voice",
                    "Charm"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 138,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2021 to January 31, 2023",
                        "start_date": "2021-11-01",
                        "end_date": "2023-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Leonardo Bonanomi's Gigantamax Charizard": [
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
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Charizard (Gmax)",
                "event_name": "Leonardo Bonanomi's Gigantamax Charizard",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "Charizard",
                "gender": "Male",
                "nature": "Timid",
                "ability": "Solar Power",
                "held_item": "Life Orb",
                "ball": "Cherish Ball",
                "ot": "Leonardo",
                "trainer_id": "211031",
                "moves": [
                    "Heat Wave",
                    "Blast Burn",
                    "Hurricane",
                    "Protect"
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
                    "hp": null,
                    "attack": null,
                    "defense": 6,
                    "special_attack": 252,
                    "special_defense": null,
                    "speed": 252
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "gigantamax": true,
                "dynamax_level": 10,
                "origin_language": "Italian",
                "wonder_card": {
                    "id": 522,
                    "title": "Leonardo's Charizard Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: GL0B ALCH AMP2 021",
                        "language": null,
                        "location": null,
                        "date": "October 31 to November 3, 2021",
                        "start_date": "2021-10-31",
                        "end_date": "2021-11-03"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Shiny legendary heroes": [
            {
                "species": "Zamazenta",
                "form": "Hero of Many Battles",
                "national_dex_number": 889,
                "base_stats": {
                    "hp": 92,
                    "attack": 130,
                    "defense": 115,
                    "special_attack": 80,
                    "special_defense": 115,
                    "speed": 138
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 10,
                "base_experience": 335,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Dauntless Shield"
                ],
                "hidden_ability": null,
                "weight": 210.0,
                "pokedex_entry": "pokedex/sword_shield.js#Zamazenta",
                "event_name": "Arthur's Shiny Zamazenta",
                "level": 100,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Dauntless Shield",
                "held_item": "Rusted Shield",
                "ball": "Cherish Ball",
                "ot": "Arthur / ガラル / 가라르 / 伽勒尔 / 伽勒爾",
                "trainer_id": "211022",
                "moves": [
                    "Iron Head",
                    "Close Combat",
                    "Iron Defense",
                    "Wide Guard"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 30,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1640,
                    "title": "Shiny Zamazenta Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword"
                        ],
                        "method": "Serial code (A & J codes)",
                        "language": null,
                        "location": null,
                        "date": "October 22 to November 25, 2021",
                        "start_date": "2021-10-22",
                        "end_date": "2021-11-25"
                    },
                    {
                        "games": [
                            "Sword"
                        ],
                        "method": "Serial code (E codes)",
                        "language": null,
                        "location": null,
                        "date": "October 22, 2021 to February 3, 2022 / February 7 to 22, 2022",
                        "start_date": "2021-10-22",
                        "end_date": "2022-02-22",
                        "periods": [
                            {
                                "start": "2021-10-22",
                                "end": "2022-02-03"
                            },
                            {
                                "start": "2022-02-07",
                                "end": "2022-02-22"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Sword"
                        ],
                        "method": "Serial code (U codes)",
                        "language": null,
                        "location": null,
                        "date": "November 5, 2021 to January 31, 2022",
                        "start_date": "2021-11-05",
                        "end_date": "2022-01-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (K codes)",
                        "language": null,
                        "location": null,
                        "date": "November 19 to December 31, 2021",
                        "start_date": "2021-11-19",
                        "end_date": "2021-12-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Zacian",
                "form": "Hero of Many Battles",
                "national_dex_number": 888,
                "base_stats": {
                    "hp": 92,
                    "attack": 130,
                    "defense": 115,
                    "special_attack": 80,
                    "special_defense": 115,
                    "speed": 138
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 3
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 10,
                "base_experience": 335,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Intrepid Sword"
                ],
                "hidden_ability": null,
                "weight": 110.0,
                "pokedex_entry": "pokedex/sword_shield.js#Zacian",
                "event_name": "Lancer's Shiny Zacian",
                "level": 100,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Intrepid Sword",
                "held_item": "Rusted Sword",
                "ball": "Cherish Ball",
                "ot": "Lancer / ガラル / 가라르 / 伽勒尔 / 伽勒爾",
                "trainer_id": "211022",
                "moves": [
                    "Iron Head",
                    "Play Rough",
                    "Swords Dance",
                    "Sacred Sword"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 30,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1639,
                    "title": "Shiny Zacian Gift"
                },
                "games": [
                    "Shield",
                    "Sword"
                ],
                "distributions": [
                    {
                        "games": [
                            "Shield"
                        ],
                        "method": "Serial code (A & J codes)",
                        "language": null,
                        "location": null,
                        "date": "October 22 to November 25, 2021",
                        "start_date": "2021-10-22",
                        "end_date": "2021-11-25"
                    },
                    {
                        "games": [
                            "Shield"
                        ],
                        "method": "Serial code (E codes)",
                        "language": null,
                        "location": null,
                        "date": "October 22, 2021 to February 3, 2022 / February 7 to 22, 2022",
                        "start_date": "2021-10-22",
                        "end_date": "2022-02-22",
                        "periods": [
                            {
                                "start": "2021-10-22",
                                "end": "2022-02-03"
                            },
                            {
                                "start": "2022-02-07",
                                "end": "2022-02-22"
                            }
                        ]
                    },
                    {
                        "games": [
                            "Shield"
                        ],
                        "method": "Serial code (U codes)",
                        "language": null,
                        "location": null,
                        "date": "October 22, 2021 to January 31, 2022",
                        "start_date": "2021-10-22",
                        "end_date": "2022-01-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (K codes)",
                        "language": null,
                        "location": null,
                        "date": "November 19 to December 31, 2021",
                        "start_date": "2021-11-19",
                        "end_date": "2021-12-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "International Jungle Pokémon": [
            {
                "species": "Zarude",
                "form": "Dada",
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
                "pokedex_entry": "pokedex/sword_shield.js#Zarude",
                "event_name": "Dada Zarude",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Leaf Guard",
                "held_item": "Choice Scarf",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "211006",
                "moves": [
                    "Jungle Healing",
                    "Hammer Arm",
                    "Power Whip",
                    "Energy Ball"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 521,
                    "title": "Mythical Pokémon Zarude Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "October 7 to December 31, 2021",
                        "start_date": "2021-10-07",
                        "end_date": "2021-12-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Celebi",
                "event_name": "Celebi",
                "level": 60,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quirky",
                "ability": "Natural Cure",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "211006",
                "moves": [
                    "Magical Leaf",
                    "Future Sight",
                    "Life Dew",
                    "Heal Bell"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 520,
                    "title": "Mythical Pokémon Celebi Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "October 7 to December 31, 2021",
                        "start_date": "2021-10-07",
                        "end_date": "2021-12-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Korean Jungle Pokémon": [
            {
                "species": "Zarude",
                "form": "Dada",
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
                "pokedex_entry": "pokedex/sword_shield.js#Zarude",
                "event_name": "Dada Zarude",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Leaf Guard",
                "held_item": "Choice Scarf",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "210915",
                "moves": [
                    "Jungle Healing",
                    "Hammer Arm",
                    "Power Whip",
                    "Energy Ball"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1026,
                    "title": "Mythical Pokémon Zarude Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 15 to November 30, 2021",
                        "start_date": "2021-09-15",
                        "end_date": "2021-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
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
                "pokedex_entry": "pokedex/sword_shield.js#Zarude",
                "event_name": "Zarude",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Sassy",
                "ability": "Leaf Guard",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "210915",
                "moves": [
                    "Close Combat",
                    "Power Whip",
                    "Swagger",
                    "Snarl"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1025,
                    "title": "Mythical Pokémon Zarude Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 15 to November 30, 2021",
                        "start_date": "2021-09-15",
                        "end_date": "2021-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Celebi",
                "event_name": "Celebi",
                "level": 60,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quirky",
                "ability": "Natural Cure",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "210915",
                "moves": [
                    "Magical Leaf",
                    "Future Sight",
                    "Life Dew",
                    "Heal Bell"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1024,
                    "title": "Mythical Pokémon Celebi Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 15 to November 30, 2021",
                        "start_date": "2021-09-15",
                        "end_date": "2021-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Jeong Sang-yoon's Porygon-Z": [
            {
                "species": "Porygon-Z",
                "form": null,
                "national_dex_number": 474,
                "base_stats": {
                    "hp": 85,
                    "attack": 80,
                    "defense": 70,
                    "special_attack": 135,
                    "special_defense": 75,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 30,
                "base_experience": 241,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Adaptability",
                    "Download"
                ],
                "hidden_ability": "Analytic",
                "weight": 34.0,
                "pokedex_entry": "pokedex/sword_shield.js#Porygon-Z",
                "event_name": "Jeong Sang-yoon's Porygon-Z",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "폴리곤Ｚ",
                "gender": null,
                "nature": "Timid",
                "ability": "Adaptability",
                "held_item": "Silk Scarf",
                "ball": "Cherish Ball",
                "ot": "정상윤",
                "trainer_id": "210807",
                "moves": [
                    "Hyper Beam",
                    "Thunderbolt",
                    "Dark Pulse",
                    "Nasty Plot"
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
                    "hp": 6,
                    "attack": null,
                    "defense": null,
                    "special_attack": 252,
                    "special_defense": null,
                    "speed": 252
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "dynamax_level": 10,
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1023,
                    "title": "정상윤's Porygon-Z Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: 1STP TCCH AMP",
                        "language": null,
                        "location": null,
                        "date": "August 21 to 22, 2021",
                        "start_date": "2021-08-21",
                        "end_date": "2021-08-22"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Wolfe Glick's Gigantamax Coalossal": [
            {
                "species": "Coalossal",
                "form": null,
                "national_dex_number": 839,
                "base_stats": {
                    "hp": 110,
                    "attack": 80,
                    "defense": 120,
                    "special_attack": 80,
                    "special_defense": 90,
                    "speed": 30
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
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 255,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Steam Engine",
                    "Flame Body"
                ],
                "hidden_ability": "Flash Fire",
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Coalossal (Gmax)",
                "event_name": "Wolfe Glick's Gigantamax Coalossal",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "Coalossal",
                "gender": "Female",
                "nature": "Modest",
                "ability": "Steam Engine",
                "held_item": "Weakness Policy",
                "ball": "Cherish Ball",
                "ot": "Wolfe",
                "trainer_id": "210813",
                "moves": [
                    "Protect",
                    "Meteor Beam",
                    "Heat Wave",
                    "Solar Beam"
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
                    "hp": 68,
                    "attack": null,
                    "defense": 4,
                    "special_attack": 252,
                    "special_defense": 4,
                    "speed": 180
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "gigantamax": true,
                "dynamax_level": 10,
                "origin_language": "English",
                "wonder_card": {
                    "id": 514,
                    "title": "Coalossal Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: V1CT 0RYE NG1N E25",
                        "language": null,
                        "location": null,
                        "date": "August 14 to 16, 2021",
                        "start_date": "2021-08-14",
                        "end_date": "2021-08-16"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Kohei Sakurai's Torkoal": [
            {
                "species": "Torkoal",
                "form": null,
                "national_dex_number": 324,
                "base_stats": {
                    "hp": 70,
                    "attack": 85,
                    "defense": 140,
                    "special_attack": 85,
                    "special_defense": 70,
                    "speed": 20
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 2,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 90,
                "base_experience": 165,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "White Smoke",
                    "Drought"
                ],
                "hidden_ability": "Shell Armor",
                "weight": 80.4,
                "pokedex_entry": "pokedex/sword_shield.js#Torkoal",
                "event_name": "Kohei Sakurai's Torkoal",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "コータス",
                "gender": "Male",
                "nature": "Bold",
                "ability": "Drought",
                "held_item": "Sitrus Berry",
                "ball": "Cherish Ball",
                "ot": "クララ",
                "trainer_id": "210718",
                "moves": [
                    "Burning Jealousy",
                    "Body Press",
                    "Yawn",
                    "Protect"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 12,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 236,
                    "attack": null,
                    "defense": 20,
                    "special_attack": null,
                    "special_defense": 252,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "dynamax_level": 10,
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 137,
                    "title": "クララ's Torkoal Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: PJCS 2020 CHAM P",
                        "language": null,
                        "location": null,
                        "date": "July 18 to 19, 2021",
                        "start_date": "2021-07-18",
                        "end_date": "2021-07-19"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Pokémon HOME Gigantamax Factor Kanto Starters": [
            {
                "species": "Bulbasaur",
                "form": null,
                "national_dex_number": 1,
                "base_stats": {
                    "hp": 45,
                    "attack": 49,
                    "defense": 49,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Poison",
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
                "hidden_ability": "Chlorophyll",
                "weight": 6.9,
                "pokedex_entry": "pokedex/sword_shield.js#Bulbasaur",
                "event_name": "Bulbasaur",
                "level": 14,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Bold",
                "ability": "Overgrow",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "210601",
                "moves": [
                    "Vine Whip",
                    "Growth",
                    "Leech Seed",
                    "Razor Leaf"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 30
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "gigantamax": true,
                "origin_language": null,
                "wonder_card": {
                    "id": 1641,
                    "title": "Bulbasaur Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "June 17 to 30, 2021",
                        "start_date": "2021-06-17",
                        "end_date": "2021-06-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Squirtle",
                "form": null,
                "national_dex_number": 7,
                "base_stats": {
                    "hp": 44,
                    "attack": 48,
                    "defense": 65,
                    "special_attack": 50,
                    "special_defense": 64,
                    "speed": 43
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
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
                "hidden_ability": "Rain Dish",
                "weight": 9.0,
                "pokedex_entry": "pokedex/sword_shield.js#Squirtle",
                "event_name": "Squirtle",
                "level": 14,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Torrent",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "210601",
                "moves": [
                    "Water Gun",
                    "Withdraw",
                    "Rapid Spin",
                    "Bite"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 30
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "gigantamax": true,
                "origin_language": null,
                "wonder_card": {
                    "id": 1642,
                    "title": "Squirtle Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "June 17 to 30, 2021",
                        "start_date": "2021-06-17",
                        "end_date": "2021-06-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Pokémon Adventure 25 Pokémon": [
            {
                "species": "Genesect",
                "form": null,
                "national_dex_number": 649,
                "base_stats": {
                    "hp": 71,
                    "attack": 120,
                    "defense": 95,
                    "special_attack": 120,
                    "special_defense": 95,
                    "speed": 99
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Bug",
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Download"
                ],
                "hidden_ability": null,
                "weight": 82.5,
                "pokedex_entry": "pokedex/sword_shield.js#Genesect",
                "event_name": "Genesect",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "게노세크트",
                "gender": null,
                "nature": "Random",
                "ability": "Download",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "어드벤처",
                "trainer_id": "210426",
                "moves": [
                    "Techno Blast",
                    "X-Scissor",
                    "Metal Claw",
                    "Fell Stinger"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1012,
                    "title": "Mythical Pokémon Genesect Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "April 26 to October 31, 2021",
                        "start_date": "2021-04-26",
                        "end_date": "2021-10-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Volcanion",
                "event_name": "Volcanion",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "볼케니온",
                "gender": null,
                "nature": "Random",
                "ability": "Water Absorb",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "어드벤처",
                "trainer_id": "210426",
                "moves": [
                    "Steam Eruption",
                    "Flare Blitz",
                    "Incinerate",
                    "Haze"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1013,
                    "title": "Mythical Pokémon Volcanion Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "April 26 to October 31, 2021",
                        "start_date": "2021-04-26",
                        "end_date": "2021-10-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Marshadow",
                "form": null,
                "national_dex_number": 802,
                "base_stats": {
                    "hp": 90,
                    "attack": 125,
                    "defense": 80,
                    "special_attack": 90,
                    "special_defense": 90,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Ghost",
                "type_2": "Fighting",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 22.2,
                "pokedex_entry": "pokedex/sword_shield.js#Marshadow",
                "event_name": "Marshadow",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "마샤도",
                "gender": null,
                "nature": "Random",
                "ability": "Technician",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "어드벤처",
                "trainer_id": "210426",
                "moves": [
                    "Spectral Thief",
                    "Drain Punch",
                    "Force Palm",
                    "Shadow Sneak"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1014,
                    "title": "Mythical Pokémon Marshadow Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "April 26 to October 31, 2021",
                        "start_date": "2021-04-26",
                        "end_date": "2021-10-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Game Freak's Singing Pikachu": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Game Freak's Singing Pikachu",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Lightning Rod",
                "held_item": "Light Ball",
                "ball": "Cherish Ball",
                "ot": "GF",
                "trainer_id": "210227",
                "moves": [
                    "Sing",
                    "Encore",
                    "Celebrate",
                    "Electro Ball"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1636,
                    "title": "Pikachu with Sing Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: P25M US1C",
                        "language": null,
                        "location": null,
                        "date": "February 25 to March 25, 2021",
                        "start_date": "2021-02-25",
                        "end_date": "2021-03-25"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Rock Star Shiny Toxtricity": [
            {
                "species": "Toxtricity",
                "form": "Amped Form",
                "national_dex_number": 849,
                "base_stats": {
                    "hp": 75,
                    "attack": 98,
                    "defense": 70,
                    "special_attack": 114,
                    "special_defense": 70,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Electric",
                "type_2": "Poison",
                "catch_rate": 45,
                "base_experience": 176,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Punk Rock",
                    "Plus"
                ],
                "hidden_ability": "Technician",
                "weight": 40.0,
                "pokedex_entry": "pokedex/sword_shield.js#Toxtricity",
                "event_name": "Rock Star Shiny Toxtricity",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Rash",
                "ability": "Punk Rock",
                "held_item": "Throat Spray",
                "ball": "Cherish Ball",
                "ot": "Rock Star",
                "trainer_id": "210219",
                "moves": [
                    "Overdrive",
                    "Sludge Wave",
                    "Boomburst",
                    "Rising Voltage"
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
                    "id": 509,
                    "title": "Shiny Toxtricity Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 19 to June 30, 2021",
                        "start_date": "2021-02-19",
                        "end_date": "2021-06-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "KIBO's Pikachu": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "KIBO's Pikachu",
                "level": 21,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Brave",
                "ability": "Static",
                "held_item": "Comet Shard",
                "ball": "Cherish Ball",
                "ot": "KIBO",
                "trainer_id": "210101",
                "moves": [
                    "Thunderbolt",
                    "Swift",
                    "Wish",
                    "Celebrate"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Special"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1635,
                    "title": "KIBO's Pikachu Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "December 31, 2020 to January 15, 2021",
                        "start_date": "2020-12-31",
                        "end_date": "2021-01-15"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Mister Donut's Chansey": [
            {
                "species": "Chansey",
                "form": null,
                "national_dex_number": 113,
                "base_stats": {
                    "hp": 250,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 35,
                    "special_defense": 105,
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
                "catch_rate": 30,
                "base_experience": 395,
                "gender_ratio": 254,
                "egg_cycles": 40,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Natural Cure",
                    "Serene Grace"
                ],
                "hidden_ability": "Healer",
                "weight": 34.6,
                "pokedex_entry": "pokedex/sword_shield.js#Chansey",
                "event_name": "Mister Donut's Chansey",
                "level": 7,
                "shiny": false,
                "is_egg": false,
                "nickname": "ラッキー",
                "gender": "Female",
                "nature": "Random",
                "ability": [
                    "Natural Cure",
                    "Serene Grace"
                ],
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "ミスド",
                "trainer_id": "201204",
                "moves": [
                    "Present",
                    "Sweet Kiss",
                    "Charm",
                    "Soft-Boiled"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 124,
                    "title": "ミスド's Chansey Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "December 4, 2020 to February 5, 2021",
                        "start_date": "2020-12-04",
                        "end_date": "2021-02-05"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Pokémon Get Challenge 2020 Pokémon": [
            {
                "species": "Genesect",
                "form": null,
                "national_dex_number": 649,
                "base_stats": {
                    "hp": 71,
                    "attack": 120,
                    "defense": 95,
                    "special_attack": 120,
                    "special_defense": 95,
                    "speed": 99
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Bug",
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Download"
                ],
                "hidden_ability": null,
                "weight": 82.5,
                "pokedex_entry": "pokedex/sword_shield.js#Genesect",
                "event_name": "Genesect",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "ゲノセクト",
                "gender": null,
                "nature": "Random",
                "ability": "Download",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ゲッチャレ",
                "trainer_id": "201120",
                "moves": [
                    "Techno Blast",
                    "X-Scissor",
                    "Metal Claw",
                    "Fell Stinger"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 127,
                    "title": "Mythical Pokémon Genesect Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 20, 2020 to May 31, 2021",
                        "start_date": "2020-11-20",
                        "end_date": "2021-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Volcanion",
                "event_name": "Volcanion",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "ボルケニオン",
                "gender": null,
                "nature": "Random",
                "ability": "Water Absorb",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ゲッチャレ",
                "trainer_id": "201120",
                "moves": [
                    "Steam Eruption",
                    "Flare Blitz",
                    "Incinerate",
                    "Haze"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 128,
                    "title": "Mythical Pokémon Volcanion Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 20, 2020 to May 31, 2021",
                        "start_date": "2020-11-20",
                        "end_date": "2021-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Marshadow",
                "form": null,
                "national_dex_number": 802,
                "base_stats": {
                    "hp": 90,
                    "attack": 125,
                    "defense": 80,
                    "special_attack": 90,
                    "special_defense": 90,
                    "speed": 125
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 2,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Ghost",
                "type_2": "Fighting",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Technician"
                ],
                "hidden_ability": null,
                "weight": 22.2,
                "pokedex_entry": "pokedex/sword_shield.js#Marshadow",
                "event_name": "Marshadow",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": "マーシャドー",
                "gender": null,
                "nature": "Random",
                "ability": "Technician",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ゲッチャレ",
                "trainer_id": "201120",
                "moves": [
                    "Spectral Thief",
                    "Drain Punch",
                    "Force Palm",
                    "Shadow Sneak"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 129,
                    "title": "Mythical Pokémon Marshadow Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 20, 2020 to May 31, 2021",
                        "start_date": "2020-11-20",
                        "end_date": "2021-05-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "International Jungle Zarude": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Zarude",
                "event_name": "International Jungle Zarude",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Sassy",
                "ability": "Leaf Guard",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "201113",
                "moves": [
                    "Close Combat",
                    "Power Whip",
                    "Swagger",
                    "Snarl"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 507,
                    "title": "Mythical Pokémon Zarude Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 13, 2020 to March 31, 2021",
                        "start_date": "2020-11-13",
                        "end_date": "2021-03-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Singapore Pokémon Center Birthday Milcery": [
            {
                "species": "Milcery",
                "form": null,
                "national_dex_number": 868,
                "base_stats": {
                    "hp": 45,
                    "attack": 40,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 61,
                    "speed": 34
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
                "catch_rate": 200,
                "base_experience": 54,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Sweet Veil"
                ],
                "hidden_ability": "Aroma Veil",
                "weight": 0.3,
                "pokedex_entry": "pokedex/sword_shield.js#Milcery",
                "event_name": "Singapore Pokémon Center Birthday Milcery",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Milcery",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Sweet Veil",
                "held_item": "Ribbon Sweet",
                "ball": "Cherish Ball",
                "ot": "PCSG",
                "trainer_id": "201101",
                "moves": [
                    "Celebrate",
                    "Last Resort",
                    "Entrainment",
                    "Attract"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "English",
                "wonder_card": {
                    "id": 125,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 6, 2020 to January 31, 2022",
                        "start_date": "2020-11-06",
                        "end_date": "2022-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Milcery",
                "form": null,
                "national_dex_number": 868,
                "base_stats": {
                    "hp": 45,
                    "attack": 40,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 61,
                    "speed": 34
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
                "catch_rate": 200,
                "base_experience": 54,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Sweet Veil"
                ],
                "hidden_ability": "Aroma Veil",
                "weight": 0.3,
                "pokedex_entry": "pokedex/sword_shield.js#Milcery",
                "event_name": "Singapore Pokémon Center Birthday Milcery",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Milcery",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Sweet Veil",
                "held_item": "Star Sweet",
                "ball": "Cherish Ball",
                "ot": "PCSG",
                "trainer_id": "201101",
                "moves": [
                    "Celebrate",
                    "Last Resort",
                    "Entrainment",
                    "Attract"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "English",
                "wonder_card": {
                    "id": 125,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 6, 2020 to January 31, 2022",
                        "start_date": "2020-11-06",
                        "end_date": "2022-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Japan Pokémon Center Birthday Milcery": [
            {
                "species": "Milcery",
                "form": null,
                "national_dex_number": 868,
                "base_stats": {
                    "hp": 45,
                    "attack": 40,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 61,
                    "speed": 34
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
                "catch_rate": 200,
                "base_experience": 54,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Sweet Veil"
                ],
                "hidden_ability": "Aroma Veil",
                "weight": 0.3,
                "pokedex_entry": "pokedex/sword_shield.js#Milcery",
                "event_name": "Japan Pokémon Center Birthday Milcery",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "マホミル",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Sweet Veil",
                "held_item": "Ribbon Sweet",
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "201101",
                "moves": [
                    "Celebrate",
                    "Last Resort",
                    "Entrainment",
                    "Attract"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 122,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2020 to January 31, 2022",
                        "start_date": "2020-11-01",
                        "end_date": "2022-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Milcery",
                "form": null,
                "national_dex_number": 868,
                "base_stats": {
                    "hp": 45,
                    "attack": 40,
                    "defense": 40,
                    "special_attack": 50,
                    "special_defense": 61,
                    "speed": 34
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
                "catch_rate": 200,
                "base_experience": 54,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Sweet Veil"
                ],
                "hidden_ability": "Aroma Veil",
                "weight": 0.3,
                "pokedex_entry": "pokedex/sword_shield.js#Milcery",
                "event_name": "Japan Pokémon Center Birthday Milcery",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "マホミル",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Sweet Veil",
                "held_item": "Star Sweet",
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "201101",
                "moves": [
                    "Celebrate",
                    "Last Resort",
                    "Entrainment",
                    "Attract"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 122,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 1, 2020 to January 31, 2022",
                        "start_date": "2020-11-01",
                        "end_date": "2022-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Ash's Pikachu in a cap": [
            {
                "species": "Pikachu",
                "form": "World Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "World Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": "Light Ball",
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1634,
                    "title": "Pikachu (World Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: K1NP 1KA1 855",
                        "language": null,
                        "location": null,
                        "date": "October 30 to November 30, 2020",
                        "start_date": "2020-10-30",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Alola Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Alola Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1632,
                    "title": "Pikachu (Alola Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: ULTR AP1K A",
                        "language": null,
                        "location": null,
                        "date": "October 23 to November 30, 2020",
                        "start_date": "2020-10-23",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Kalos Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Kalos Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1631,
                    "title": "Pikachu (Kalos Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: KAL0 SP1K A",
                        "language": null,
                        "location": null,
                        "date": "October 18 to November 30, 2020",
                        "start_date": "2020-10-18",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Unova Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Unova Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1630,
                    "title": "Pikachu (Unova Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: P1KA BEST W1SH",
                        "language": null,
                        "location": null,
                        "date": "October 16 to November 30, 2020",
                        "start_date": "2020-10-16",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Sinnoh Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Sinnoh Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1629,
                    "title": "Pikachu (Sinnoh Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: V0LT TACK LEP1 KA",
                        "language": null,
                        "location": null,
                        "date": "October 9 to November 30, 2020",
                        "start_date": "2020-10-09",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Hoenn Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Hoenn Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1628,
                    "title": "Pikachu (Hoenn Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: P1KA ADVA NCE",
                        "language": null,
                        "location": null,
                        "date": "October 2, 2020 to November 30, 2020",
                        "start_date": "2020-10-02",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Partner Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Partner Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1633,
                    "title": "Pikachu (Partner Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: 1CH0 0SEY 0U",
                        "language": null,
                        "location": null,
                        "date": "September 29 to November 30, 2020",
                        "start_date": "2020-09-29",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Pikachu",
                "form": "Original Cap",
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Original Cap",
                "level": 25,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "Ash / Sacha / サトシ / 지우 / 小智",
                "trainer_id": "201023",
                "moves": [
                    "Thunderbolt",
                    "Quick Attack",
                    "Iron Tail",
                    "Electroweb"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon TV program",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1627,
                    "title": "Pikachu (Original Cap) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: P1KA CHUG ET",
                        "language": null,
                        "location": null,
                        "date": "September 29 to November 30, 2020",
                        "start_date": "2020-09-29",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Ash's Charizard": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Charizard",
                "event_name": "Ash's Charizard",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "리자몽",
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Blaze",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "지우",
                "trainer_id": "200930",
                "moves": [
                    "Flamethrower",
                    "Dragon Tail",
                    "Slash",
                    "Seismic Toss"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1007,
                    "title": "지우's Charizard Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 30 to November 30, 2020",
                        "start_date": "2020-09-30",
                        "end_date": "2020-11-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Pokémon Players Cup Porygon2": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Porygon2",
                "event_name": "Pokémon Players Cup Porygon2",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Sassy",
                "ability": "Download",
                "held_item": "Eviolite",
                "ball": "Cherish Ball",
                "ot": "VGC20",
                "trainer_id": "200822",
                "moves": [
                    "Recover",
                    "Trick Room",
                    "Ice Beam",
                    "Thunderbolt"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": null,
                    "defense": "Random",
                    "special_attack": "Random",
                    "special_defense": "Random",
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
                "met_location": "a Pokémon event",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 505,
                    "title": "Porygon2 Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: PKMN PLAY ERSC UP",
                        "language": null,
                        "location": null,
                        "date": "August 22 to 31, 2020",
                        "start_date": "2020-08-22",
                        "end_date": "2020-08-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Hirofumi Kimura's East Sea Gastrodon": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Gastrodon",
                "event_name": "Hirofumi Kimura's East Sea Gastrodon",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "トリトドン",
                "gender": "Female",
                "nature": "Quiet",
                "ability": "Storm Drain",
                "held_item": "Expert Belt",
                "ball": "Cherish Ball",
                "ot": "カ・エール",
                "trainer_id": "200822",
                "moves": [
                    "Protect",
                    "Surf",
                    "Ice Beam",
                    "Earth Power"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 2,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "evs": {
                    "hp": 152,
                    "attack": null,
                    "defense": 94,
                    "special_attack": 252,
                    "special_defense": 12,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Battle Champion"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 121,
                    "title": "カ・エール's Gastrodon Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: PJCS 2019 CHAM P",
                        "language": null,
                        "location": null,
                        "date": "August 22 to 23, 2020",
                        "start_date": "2020-08-22",
                        "end_date": "2020-08-23"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Baik Jongyoon's Amoonguss": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Amoonguss",
                "event_name": "Baik Jongyoon's Amoonguss",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "뽀록나",
                "gender": "Female",
                "nature": "Sassy",
                "ability": "Regenerator",
                "held_item": "Focus Sash",
                "ball": "Cherish Ball",
                "ot": "백종윤",
                "trainer_id": "200809",
                "moves": [
                    "Clear Smog",
                    "Spore",
                    "Protect",
                    "Rage Powder"
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
                    "defense": 116,
                    "special_attack": null,
                    "special_defense": 156,
                    "speed": null
                },
                "met_location": "a Battle Competition",
                "fateful_encounter": true,
                "ribbons": [
                    "Event"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1008,
                    "title": "백종윤's Amoonguss Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Password: TRA1 NERS CUP",
                        "language": null,
                        "location": null,
                        "date": "August 9 to 10, 2020",
                        "start_date": "2020-08-09",
                        "end_date": "2020-08-10"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Jungle Pokémon": [
            {
                "species": "Zarude",
                "form": "Dada",
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
                "pokedex_entry": "pokedex/sword_shield.js#Zarude",
                "event_name": "Dada Zarude",
                "level": 70,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Adamant",
                "ability": "Leaf Guard",
                "held_item": "Choice Scarf",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "201225",
                "moves": [
                    "Jungle Healing",
                    "Hammer Arm",
                    "Power Whip",
                    "Energy Ball"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2020 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 110,
                    "title": "Zarude (Dada) Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (M codes)",
                        "language": null,
                        "location": null,
                        "date": "December 25, 2020 to March 31, 2021",
                        "start_date": "2020-12-25",
                        "end_date": "2021-03-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (A codes)",
                        "language": null,
                        "location": null,
                        "date": "December 10, 2021 to March 31, 2022",
                        "start_date": "2021-12-10",
                        "end_date": "2022-03-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
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
                "pokedex_entry": "pokedex/sword_shield.js#Zarude",
                "event_name": "Zarude",
                "level": 60,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Sassy",
                "ability": "Leaf Guard",
                "held_item": "Leftovers",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "200807",
                "moves": [
                    "Close Combat",
                    "Power Whip",
                    "Swagger",
                    "Snarl"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2020 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 109,
                    "title": "Jungle's Zarude Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 7, 2020 to March 31, 2021",
                        "start_date": "2020-08-07",
                        "end_date": "2021-03-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Celebi",
                "event_name": "Celebi",
                "level": 60,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Quirky",
                "ability": "Natural Cure",
                "held_item": "Lucky Egg",
                "ball": "Cherish Ball",
                "ot": "Jungle / Dschungel / Selva / Giungla / オコヤのもり / 정글 / 丛林 / 叢林",
                "trainer_id": "200807",
                "moves": [
                    "Magical Leaf",
                    "Future Sight",
                    "Life Dew",
                    "Heal Bell"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a 2020 Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 108,
                    "title": "Jungle's Celebi Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (M codes)",
                        "language": null,
                        "location": null,
                        "date": "August 7, 2020 to March 31, 2021",
                        "start_date": "2020-08-07",
                        "end_date": "2021-03-31"
                    },
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code (A codes)",
                        "language": null,
                        "location": null,
                        "date": "December 10, 2021 to March 31, 2022",
                        "start_date": "2021-12-10",
                        "end_date": "2022-03-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Hidden Ability Galarian Pokémon": [
            {
                "species": "Meowth",
                "form": "Galarian Form",
                "national_dex_number": 52,
                "base_stats": {
                    "hp": 50,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Steel",
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
                    "Tough Claws"
                ],
                "hidden_ability": "Unnerve",
                "weight": 7.5,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Meowth",
                "event_name": "Galarian Meowth",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Unnerve",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Fake Out",
                    "Growl",
                    "Hone Claws",
                    "Pay Day"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "an online present",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1622,
                    "title": "Hidden Ability Meowth Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "June 12 to 16, 2020",
                        "start_date": "2020-06-12",
                        "end_date": "2020-06-16"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Corsola",
                "form": "Galarian Form",
                "national_dex_number": 222,
                "base_stats": {
                    "hp": 60,
                    "attack": 55,
                    "defense": 100,
                    "special_attack": 65,
                    "special_defense": 100,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 0
                },
                "type_1": "Ghost",
                "type_2": "Ghost",
                "catch_rate": 60,
                "base_experience": 144,
                "gender_ratio": 191,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Water3",
                "abilities": [
                    "Weak Armor"
                ],
                "hidden_ability": "Cursed Body",
                "weight": 0.5,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Corsola",
                "event_name": "Galarian Corsola",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Cursed Body",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Astonish",
                    "Disable",
                    "Spite"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "an online present",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1620,
                    "title": "Hidden Ability Corsola Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "June 5 to 11, 2020",
                        "start_date": "2020-06-05",
                        "end_date": "2020-06-11"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Ponyta",
                "form": "Galarian Form",
                "national_dex_number": 77,
                "base_stats": {
                    "hp": 50,
                    "attack": 85,
                    "defense": 55,
                    "special_attack": 65,
                    "special_defense": 65,
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
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 190,
                "base_experience": 82,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Run Away",
                    "Pastel Veil"
                ],
                "hidden_ability": "Anticipation",
                "weight": 24.0,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Ponyta",
                "event_name": "Galarian Ponyta",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Anticipation",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Confusion",
                    "Fairy Wind"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "an online present",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1618,
                    "title": "Hidden Ability Ponyta Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "May 29 to June 4, 2020",
                        "start_date": "2020-05-29",
                        "end_date": "2020-06-04"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Mr. Mime",
                "form": "Galarian Form",
                "national_dex_number": 122,
                "base_stats": {
                    "hp": 50,
                    "attack": 65,
                    "defense": 65,
                    "special_attack": 90,
                    "special_defense": 90,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 2
                },
                "type_1": "Ice",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 161,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Vital Spirit",
                    "Screen Cleaner"
                ],
                "hidden_ability": "Ice Body",
                "weight": 56.8,
                "pokedex_entry": "pokedex/sword_shield.js#Galarian Mr. Mime",
                "event_name": "Galarian Mr. Mime",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Ice Body",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Copycat",
                    "Encore",
                    "Ice Shard",
                    "Confusion"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "an online present",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1616,
                    "title": "Hidden Ability Mr. Mime Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "May 22 to 28, 2020",
                        "start_date": "2020-05-22",
                        "end_date": "2020-05-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Singapore Pokémon Center Birthday Pikachu & Eevee": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Singapore Pokémon Center Birthday Pikachu & Eevee",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Serious",
                "ability": "Static",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PCSG",
                "trainer_id": "200301",
                "moves": [
                    "Celebrate",
                    "Play Nice",
                    "Thunder Shock",
                    "Quick Attack"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "English",
                "wonder_card": {
                    "id": 118,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "March 7, 2020 to January 31, 2021",
                        "start_date": "2020-03-07",
                        "end_date": "2021-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Eevee",
                "event_name": "Singapore Pokémon Center Birthday Pikachu & Eevee",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Docile",
                "ability": "Run Away",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "PCSG",
                "trainer_id": "200301",
                "moves": [
                    "Celebrate",
                    "Covet",
                    "Helping Hand",
                    "Tackle"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "English",
                "wonder_card": {
                    "id": 118,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "March 7, 2020 to January 31, 2021",
                        "start_date": "2020-03-07",
                        "end_date": "2021-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Winter 2020 World Hobby Fair Gigantamax Pokémon": [
            {
                "species": "Lapras",
                "form": null,
                "national_dex_number": 131,
                "base_stats": {
                    "hp": 130,
                    "attack": 85,
                    "defense": 80,
                    "special_attack": 85,
                    "special_defense": 95,
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
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 187,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Water1",
                "abilities": [
                    "Water Absorb",
                    "Shell Armor"
                ],
                "hidden_ability": "Hydration",
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Lapras (Gmax)",
                "event_name": "Lapras",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Water Absorb",
                    "Shell Armor",
                    "Hydration"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Surf",
                    "Ice Beam",
                    "Ancient Power",
                    "Bulldoze"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": "Random",
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": "Random"
                },
                "met_location": "a Pokémon event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "gigantamax": true,
                "dynamax_level": 5,
                "origin_language": null,
                "wonder_card": {
                    "id": 116,
                    "title": "Gigantamax Lapras Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 19, 2020 to February 29, 2020",
                        "start_date": "2020-01-19",
                        "end_date": "2020-02-29"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
            {
                "species": "Coalossal",
                "form": null,
                "national_dex_number": 839,
                "base_stats": {
                    "hp": 110,
                    "attack": 80,
                    "defense": 120,
                    "special_attack": 80,
                    "special_defense": 90,
                    "speed": 30
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
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 255,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [
                    "Steam Engine",
                    "Flame Body"
                ],
                "hidden_ability": "Flash Fire",
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Coalossal (Gmax)",
                "event_name": "Coalossal",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Steam Engine",
                    "Flame Body",
                    "Flash Fire"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Ancient Power",
                    "Flamethrower",
                    "Rock Slide",
                    "Will-O-Wisp"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": "Random",
                    "speed": "Random"
                },
                "met_location": "a Pokémon event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "gigantamax": true,
                "dynamax_level": 5,
                "origin_language": null,
                "wonder_card": {
                    "id": 115,
                    "title": "Gigantamax Colossal Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 19, 2020 to February 29, 2020",
                        "start_date": "2020-01-19",
                        "end_date": "2020-02-29"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Jump Festa '20 Gigantamax Snorlax": [
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
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Snorlax (Gmax)",
                "event_name": "Jump Festa '20 Gigantamax Snorlax",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Sassy",
                "ability": [
                    "Immunity",
                    "Thick Fat",
                    "Gluttony"
                ],
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Body Slam",
                    "High Horsepower",
                    "Brick Break",
                    "Bulldoze"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": "Random",
                    "special_defense": 31,
                    "speed": "Random"
                },
                "met_location": "a Pokémon event",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "gigantamax": true,
                "dynamax_level": 5,
                "origin_language": null,
                "wonder_card": {
                    "id": 107,
                    "title": "Gigantamax Snorlax Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "December 21, 2019 to January 31, 2020",
                        "start_date": "2019-12-21",
                        "end_date": "2020-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Japan Pokémon Center Birthday Pikachu & Eevee": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "Japan Pokémon Center Birthday Pikachu & Eevee",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Serious",
                "ability": "Static",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "191115",
                "moves": [
                    "Celebrate",
                    "Play Nice",
                    "Thunder Shock",
                    "Quick Attack"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 101,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 15, 2019 to January 31, 2021",
                        "start_date": "2019-11-15",
                        "end_date": "2021-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Eevee",
                "event_name": "Japan Pokémon Center Birthday Pikachu & Eevee",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Docile",
                "ability": "Run Away",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "ポケセン",
                "trainer_id": "191115",
                "moves": [
                    "Celebrate",
                    "Covet",
                    "Helping Hand",
                    "Tackle"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 101,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 15, 2019 to January 31, 2021",
                        "start_date": "2019-11-15",
                        "end_date": "2021-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Poké Ball Plus Mew": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Mew",
                "event_name": "Poké Ball Plus Mew",
                "level": 1,
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
                    "Pound"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "the Poké Ball Plus",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": 2001,
                    "title": "Mythical Pokémon Mew Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Poké Ball Plus",
                        "language": null,
                        "location": null,
                        "date": "November 15, 2019 onwards",
                        "start_date": "2019-11-15",
                        "end_date": null
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ],
        "Gigantamax Meowth": [
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
                "hidden_ability": "Unnerve",
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Meowth (Gmax)",
                "event_name": "Gigantamax Meowth",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Pickup",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Fake Out",
                    "Growl",
                    "Slash",
                    "Pay Day"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "an online present",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "gigantamax": true,
                "origin_language": null,
                "wonder_card": {
                    "id": 1601,
                    "title": "Gigantamax Meowth Gift"
                },
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "November 15, 2019 to January 15, 2020",
                        "start_date": "2019-11-15",
                        "end_date": "2020-01-15"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Sword and Shield"
            }
        ]
    },
    "Brilliant Diamond and Shining Pearl": {
        "Otsukimi Clefairy": [
            {
                "species": "Clefairy",
                "form": null,
                "national_dex_number": 35,
                "base_stats": {
                    "hp": 70,
                    "attack": 45,
                    "defense": 48,
                    "special_attack": 60,
                    "special_defense": 65,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 150,
                "base_experience": 113,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cute Charm",
                    "Magic Guard"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 7.5,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Clefairy",
                "event_name": "Otsukimi Clefairy",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Cute Charm",
                "held_item": "Moon Stone",
                "ball": "Moon Ball",
                "ot": "おつきみ２２",
                "trainer_id": "220910",
                "moves": [
                    "Metronome",
                    "Moonblast",
                    "Zen Headbutt",
                    "Moonlight"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 151,
                    "title": "おつきみ２２'s Clefairy Gift"
                },
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 3 to 30, 2022",
                        "start_date": "2022-09-03",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl"
            }
        ],
        "Dawn's Piplup": [
            {
                "species": "Piplup",
                "form": null,
                "national_dex_number": 393,
                "base_stats": {
                    "hp": 53,
                    "attack": 51,
                    "defense": 53,
                    "special_attack": 61,
                    "special_defense": 56,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Defiant",
                "weight": 5.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Piplup",
                "event_name": "Dawn's Piplup",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "팽도리",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Torrent",
                "held_item": "Everstone",
                "ball": "Poké Ball",
                "ot": "빛나",
                "trainer_id": "220601",
                "moves": [
                    "Hydro Pump",
                    "Bubble Beam",
                    "Whirlpool",
                    "Peck"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1202,
                    "title": "'s Piplup Gift"
                },
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "June 1 to July 31, 2022",
                        "start_date": "2022-06-01",
                        "end_date": "2022-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl"
            }
        ],
        "Ten'i Village Regigigas": [
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
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Regigigas",
                "event_name": "Ten'i Village Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "레지기가스",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": "Custap Berry",
                "ball": "Cherish Ball",
                "ot": "전이마을",
                "trainer_id": "220601",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1201,
                    "title": "'s Regigigas Gift"
                },
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "June 1 to July 31, 2022",
                        "start_date": "2022-06-01",
                        "end_date": "2022-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl"
            }
        ],
        "Project Pochama Pocha Marche Piplup": [
            {
                "species": "Piplup",
                "form": null,
                "national_dex_number": 393,
                "base_stats": {
                    "hp": 53,
                    "attack": 51,
                    "defense": 53,
                    "special_attack": 61,
                    "special_defense": 56,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Defiant",
                "weight": 5.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Piplup",
                "event_name": "Project Pochama Pocha Marche Piplup",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Defiant",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "プロポチャ",
                "trainer_id": "220205",
                "moves": [
                    "Hydro Pump",
                    "Pluck",
                    "Work Up",
                    "Attract"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 28,
                    "speed": 20
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 203,
                    "title": "プロポチャ's Piplup Gift"
                },
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 5, 2022 to February 28, 2023",
                        "start_date": "2022-02-05",
                        "end_date": "2023-02-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl"
            }
        ],
        "Pokémon Center Birthday Happiny": [
            {
                "species": "Happiny",
                "form": null,
                "national_dex_number": 440,
                "base_stats": {
                    "hp": 100,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 15,
                    "special_defense": 65,
                    "speed": 30
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
                "catch_rate": 130,
                "base_experience": 110,
                "gender_ratio": 254,
                "egg_cycles": 40,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure",
                    "Serene Grace"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 24.4,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Happiny",
                "event_name": "Pokémon Center Birthday Happiny",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Happiny / ピンプク",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Friend Guard",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "Poké Center / ポケセン",
                "trainer_id": "211101",
                "moves": [
                    "Present",
                    "Sweet Kiss",
                    "Disarming Voice",
                    "Charm"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 138,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "November 19, 2021 to January 31, 2023",
                        "start_date": "2021-11-19",
                        "end_date": "2023-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl"
            }
        ],
        "Manaphy Egg": [
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
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Manaphy",
                "event_name": "Manaphy Egg",
                "level": 1,
                "shiny": false,
                "is_egg": true,
                "nickname": null,
                "gender": null,
                "nature": "Random",
                "ability": "Hydration",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tail Glow",
                    "Water Gun"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": 1701,
                    "title": "Manaphy Egg Gift"
                },
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Internet",
                        "language": null,
                        "location": null,
                        "date": "November 19, 2021 to February 21, 2022",
                        "start_date": "2021-11-19",
                        "end_date": "2022-02-21"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Brilliant Diamond and Shining Pearl"
            }
        ]
    },
    "Legends: Arceus": {
        "Otsukimi Clefairy": [
            {
                "species": "Clefairy",
                "form": null,
                "national_dex_number": 35,
                "base_stats": {
                    "hp": 70,
                    "attack": 45,
                    "defense": 48,
                    "special_attack": 60,
                    "special_defense": 65,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 150,
                "base_experience": 113,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cute Charm",
                    "Magic Guard"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 7.5,
                "pokedex_entry": "pokedex/legends_arceus.js#Clefairy",
                "event_name": "Otsukimi Clefairy",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Cute Charm",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "おつきみ２２",
                "trainer_id": "220910",
                "moves": [
                    "Swift",
                    "Moonblast",
                    "Zen Headbutt",
                    "Shadow Ball"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": "Japanese",
                "wonder_card": {
                    "id": 151,
                    "title": "おつきみ２２'s Clefairy Gift"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "September 3 to 30, 2022",
                        "start_date": "2022-09-03",
                        "end_date": "2022-09-30"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ],
        "Hisui's Hisuian Growlithe": [
            {
                "species": "Growlithe",
                "form": "Hisuian Form",
                "national_dex_number": 58,
                "base_stats": {
                    "hp": 60,
                    "attack": 75,
                    "defense": 45,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Rock",
                "catch_rate": 190,
                "base_experience": 70,
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
                "weight": 22.7,
                "pokedex_entry": "pokedex/legends_arceus.js#Hisuian Growlithe",
                "event_name": "Hisui's Hisuian Growlithe",
                "level": 30,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "Hisui / ヒスイ / 히스이 / 翠洗",
                "trainer_id": "220721",
                "moves": [
                    "Fire Fang",
                    "Rock Slide",
                    "Rock Smash",
                    "Crunch"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "the Pokémon animated show",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 1203,
                    "title": "Growlithe (Hisuian Form) Gift"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "August 18 to October 31, 2022",
                        "start_date": "2022-08-18",
                        "end_date": "2022-10-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ],
        "Dawn's Piplup": [
            {
                "species": "Piplup",
                "form": null,
                "national_dex_number": 393,
                "base_stats": {
                    "hp": 53,
                    "attack": 51,
                    "defense": 53,
                    "special_attack": 61,
                    "special_defense": 56,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Defiant",
                "weight": 5.2,
                "pokedex_entry": "pokedex/legends_arceus.js#Piplup",
                "event_name": "Dawn's Piplup",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "팽도리",
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Torrent",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "빛나",
                "trainer_id": "220601",
                "moves": [
                    "Liquidation",
                    "Bubble",
                    "Water Pulse",
                    "Aerial Ace"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "effort_levels": {
                    "hp": 5,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 5,
                    "special_defense": 5,
                    "speed": 5
                },
                "met_location": "a Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1202,
                    "title": "빛나's Piplup Gift"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "June 1 to July 31, 2022",
                        "start_date": "2022-06-01",
                        "end_date": "2022-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ],
        "Ten'i Village Regigigas": [
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
                "pokedex_entry": "pokedex/legends_arceus.js#Regigigas",
                "event_name": "Ten'i Village Regigigas",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "레지기가스",
                "gender": null,
                "nature": "Random",
                "ability": "Slow Start",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "전이마을",
                "trainer_id": "220601",
                "moves": [
                    "Iron Head",
                    "Rock Slide",
                    "Icy Wind",
                    "Crush Grip"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 3,
                "effort_levels": {
                    "hp": 7,
                    "attack": 7,
                    "defense": 7,
                    "special_attack": 7,
                    "special_defense": 7,
                    "speed": 7
                },
                "met_location": "a Pokémon Movie",
                "fateful_encounter": true,
                "ribbons": [
                    "Wishing"
                ],
                "origin_language": "Korean",
                "wonder_card": {
                    "id": 1201,
                    "title": "전이마을's Regigigas Gift"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "June 1 to July 31, 2022",
                        "start_date": "2022-06-01",
                        "end_date": "2022-07-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ],
        "Teresa Roca's Hisuian Growlithe": [
            {
                "species": "Growlithe",
                "form": "Hisuian Form",
                "national_dex_number": 58,
                "base_stats": {
                    "hp": 60,
                    "attack": 75,
                    "defense": 45,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fire",
                "type_2": "Rock",
                "catch_rate": 190,
                "base_experience": 70,
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
                "weight": 22.7,
                "pokedex_entry": "pokedex/legends_arceus.js#Hisuian Growlithe",
                "event_name": "Teresa Roca's Hisuian Growlithe",
                "level": 26,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": "Justified",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "Teresa Roca",
                "trainer_id": "270222",
                "moves": [
                    "Play Rough",
                    "Bite",
                    "Fire Fang",
                    "Rock Slide"
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
                    "id": 801,
                    "title": "Scout Pokémon Growlithe Gift"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 25 to June 1, 2022",
                        "start_date": "2022-02-25",
                        "end_date": "2022-06-01"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ],
        "Project Pochama Pocha Marche Piplup": [
            {
                "species": "Piplup",
                "form": null,
                "national_dex_number": 393,
                "base_stats": {
                    "hp": 53,
                    "attack": 51,
                    "defense": 53,
                    "special_attack": 61,
                    "special_defense": 56,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Defiant",
                "weight": 5.2,
                "pokedex_entry": "pokedex/legends_arceus.js#Piplup",
                "event_name": "Project Pochama Pocha Marche Piplup",
                "level": 15,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Defiant",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "プロポチャ",
                "trainer_id": "220205",
                "moves": [
                    "Bubble",
                    "Baby-Doll Eyes",
                    "Roost",
                    "Double-Edge"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 28,
                    "speed": 20
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 301,
                    "title": "プロポチャ's Piplup Gift"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "February 5, 2022 to February 28, 2023",
                        "start_date": "2022-02-05",
                        "end_date": "2023-02-28"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ],
        "Pokémon Center Birthday Happiny": [
            {
                "species": "Happiny",
                "form": null,
                "national_dex_number": 440,
                "base_stats": {
                    "hp": 100,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 15,
                    "special_defense": 65,
                    "speed": 30
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
                "catch_rate": 130,
                "base_experience": 110,
                "gender_ratio": 254,
                "egg_cycles": 40,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Natural Cure",
                    "Serene Grace"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 24.4,
                "pokedex_entry": "pokedex/legends_arceus.js#Happiny",
                "event_name": "Pokémon Center Birthday Happiny",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "Happiny / ピンプク",
                "gender": "Female",
                "nature": "Hardy",
                "ability": "Friend Guard",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "Poké Center / ポケセン",
                "trainer_id": "211101",
                "moves": [
                    "Baby-Doll Eyes",
                    "Draining Kiss",
                    "Soft-Boiled",
                    "Rest"
                ],
                "ivs": null,
                "guaranteed_perfect_ivs": 0,
                "met_location": "a Pokémon Center",
                "fateful_encounter": true,
                "ribbons": [
                    "Birthday"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": 138,
                    "title": "Happy Birthday!"
                },
                "games": [
                    "Legends: Arceus"
                ],
                "distributions": [
                    {
                        "games": [
                            "Legends: Arceus"
                        ],
                        "method": "Serial code",
                        "language": null,
                        "location": null,
                        "date": "January 28, 2022 to January 31, 2023",
                        "start_date": "2022-01-28",
                        "end_date": "2023-01-31"
                    }
                ],
                "source_page": "List of event Pokémon distributions in Pokémon Legends: Arceus"
            }
        ]
    },
    "Traded events": {
        "Poké Times Trade Meeting Campaign #4": [
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
                "hidden_ability": "Moody",
                "weight": 20.0,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Bidoof",
                "event_name": "Pokémon Legends: Arceus Bidoof",
                "level": "2 to 14",
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Simple",
                    "Unaware"
                ],
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "ポケタイムス",
                "trainer_id": "607213",
                "moves": [
                    "Rollout",
                    "Tackle"
                ],
                "ivs": null,
                "met_location": "Obsidian Fieldlands",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "May 27, 2022",
                        "start_date": "2022-05-27",
                        "end_date": "2022-05-27"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
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
                "hidden_ability": "Moody",
                "weight": 20.0,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Bidoof",
                "event_name": "Pokémon Brilliant Diamond and Shining Pearl Bidoof",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Random",
                "ability": [
                    "Simple",
                    "Unaware"
                ],
                "held_item": null,
                "ball": "Heal Ball",
                "ot": "ポケタイムス",
                "trainer_id": "500031",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Defense Curl",
                    "Rollout"
                ],
                "ivs": null,
                "met_location": "Day-Care Couple (egg received) / Sinnoh (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": null,
                        "language": null,
                        "location": null,
                        "date": "May 27, 2022",
                        "start_date": "2022-05-27",
                        "end_date": "2022-05-27"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            }
        ],
        "V Jump Christmas Trade Party Pokémon": [
            {
                "species": "Dedenne",
                "form": null,
                "national_dex_number": 702,
                "base_stats": {
                    "hp": 67,
                    "attack": 58,
                    "defense": 57,
                    "special_attack": 81,
                    "special_defense": 67,
                    "speed": 101
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
                "type_2": "Fairy",
                "catch_rate": 180,
                "base_experience": 151,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cheek Pouch",
                    "Pickup"
                ],
                "hidden_ability": "Plus",
                "weight": 2.2,
                "pokedex_entry": "pokedex/sword_shield.js#Dedenne",
                "event_name": "Dedenne",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": "デデンネV",
                "gender": "Random",
                "nature": "Timid",
                "ability": "Cheek Pouch",
                "held_item": "Big Nugget",
                "ball": "Level Ball",
                "ot": "デデンクス",
                "trainer_id": "776706",
                "moves": [],
                "ivs": null,
                "met_location": "a Nursery worker (egg received) / Various locations (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "December 18 and 26, 2021",
                        "start_date": "2021-12-18",
                        "end_date": "2021-12-26"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Dedenne",
                "form": null,
                "national_dex_number": 702,
                "base_stats": {
                    "hp": 67,
                    "attack": 58,
                    "defense": 57,
                    "special_attack": 81,
                    "special_defense": 67,
                    "speed": 101
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
                "type_2": "Fairy",
                "catch_rate": 180,
                "base_experience": 151,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cheek Pouch",
                    "Pickup"
                ],
                "hidden_ability": "Plus",
                "weight": 2.2,
                "pokedex_entry": "pokedex/sword_shield.js#Dedenne",
                "event_name": "Level 50 Dedenne",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": "デデンネV",
                "gender": "Random",
                "nature": "Timid",
                "ability": "Cheek Pouch",
                "held_item": "Big Nugget",
                "ball": "Level Ball",
                "ot": "デデンクス",
                "trainer_id": "776706",
                "moves": [],
                "ivs": null,
                "met_location": "a Nursery worker (egg received) / Various locations (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "December 26, 2021",
                        "start_date": "2021-12-26",
                        "end_date": "2021-12-26"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Dedenne",
                "form": null,
                "national_dex_number": 702,
                "base_stats": {
                    "hp": 67,
                    "attack": 58,
                    "defense": 57,
                    "special_attack": 81,
                    "special_defense": 67,
                    "speed": 101
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
                "type_2": "Fairy",
                "catch_rate": 180,
                "base_experience": 151,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cheek Pouch",
                    "Pickup"
                ],
                "hidden_ability": "Plus",
                "weight": 2.2,
                "pokedex_entry": "pokedex/sword_shield.js#Dedenne",
                "event_name": "Level 100 Dedenne",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": "デデンネV",
                "gender": "Random",
                "nature": "Timid",
                "ability": "Cheek Pouch",
                "held_item": "Big Nugget",
                "ball": "Level Ball",
                "ot": "デデンクス",
                "trainer_id": "776706",
                "moves": [],
                "ivs": null,
                "met_location": "a Nursery worker (egg received) / Various locations (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "December 18 and 26, 2021",
                        "start_date": "2021-12-18",
                        "end_date": "2021-12-26"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Buizel",
                "form": null,
                "national_dex_number": 418,
                "base_stats": {
                    "hp": 55,
                    "attack": 65,
                    "defense": 35,
                    "special_attack": 60,
                    "special_defense": 30,
                    "speed": 85
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
                "catch_rate": 190,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": "Water Veil",
                "weight": 29.5,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Buizel",
                "event_name": "Dive Ball Buizel",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": "Vゼル",
                "gender": "Random",
                "nature": "Naughty",
                "ability": "Swift Swim",
                "held_item": null,
                "ball": "Dive Ball",
                "ot": "ポケタイムス",
                "trainer_id": "442255",
                "moves": [],
                "ivs": null,
                "met_location": "Day-Care Couple (egg received) / Team Galactic HQ (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "December 18 and 26, 2021",
                        "start_date": "2021-12-18",
                        "end_date": "2021-12-26"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Buizel",
                "form": null,
                "national_dex_number": 418,
                "base_stats": {
                    "hp": 55,
                    "attack": 65,
                    "defense": 35,
                    "special_attack": 60,
                    "special_defense": 30,
                    "speed": 85
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
                "catch_rate": 190,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Swift Swim"
                ],
                "hidden_ability": "Water Veil",
                "weight": 29.5,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Buizel",
                "event_name": "Net Ball Buizel",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": "Vゼル",
                "gender": "Random",
                "nature": "Naughty",
                "ability": "Swift Swim",
                "held_item": null,
                "ball": "Net Ball",
                "ot": "ポケタイムス",
                "trainer_id": "442255",
                "moves": [],
                "ivs": null,
                "met_location": "Day-Care Couple (egg received) / Team Galactic HQ (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Global room trade",
                        "language": null,
                        "location": null,
                        "date": "December 18 and 26, 2021",
                        "start_date": "2021-12-18",
                        "end_date": "2021-12-26"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            }
        ],
        "Poké Times Trade Meeting Campaign #3": [
            {
                "species": "Stantler",
                "form": null,
                "national_dex_number": 234,
                "base_stats": {
                    "hp": 73,
                    "attack": 95,
                    "defense": 62,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 85
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
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 163,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Intimidate",
                    "Frisk"
                ],
                "hidden_ability": "Sap Sipper",
                "weight": 71.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Stantler",
                "event_name": "Stantler",
                "event_section": "First distribution",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Jolly",
                "ability": "Intimidate",
                "held_item": "Lucky Egg",
                "ball": "Repeat Ball",
                "ot": "ポケタイムス",
                "trainer_id": "500031",
                "moves": [],
                "ivs": null,
                "met_location": "Day-Care Couple (egg received) / Solaceon Town (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Global Room trade",
                        "language": null,
                        "location": null,
                        "date": "December 18, 2021",
                        "start_date": "2021-12-18",
                        "end_date": "2021-12-18"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Gible",
                "form": null,
                "national_dex_number": 443,
                "base_stats": {
                    "hp": 58,
                    "attack": 70,
                    "defense": 45,
                    "special_attack": 40,
                    "special_defense": 45,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Ground",
                "catch_rate": 45,
                "base_experience": 60,
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
                "weight": 20.5,
                "pokedex_entry": "pokedex/sword_shield.js#Gible",
                "event_name": "Gible",
                "event_section": "First distribution",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Jolly",
                "ability": "Rough Skin",
                "held_item": "Moon Ball",
                "ball": "Timer Ball",
                "ot": "ポケタイムス",
                "trainer_id": "676088",
                "moves": [],
                "ivs": null,
                "met_location": "a Nursery worker (egg received) / Bridge Field (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "December 18, 2021",
                        "start_date": "2021-12-18",
                        "end_date": "2021-12-18"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Stantler",
                "form": null,
                "national_dex_number": 234,
                "base_stats": {
                    "hp": 73,
                    "attack": 95,
                    "defense": 62,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 85
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
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 163,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Intimidate",
                    "Frisk"
                ],
                "hidden_ability": "Sap Sipper",
                "weight": 71.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Stantler",
                "event_name": "Stantler",
                "event_section": "Second distribution",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Jolly",
                "ability": "Intimidate",
                "held_item": null,
                "ball": "Repeat Ball",
                "ot": "ポケタイムス",
                "trainer_id": "500031",
                "moves": [],
                "ivs": null,
                "met_location": "Unknown",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Brilliant Diamond",
                    "Shining Pearl"
                ],
                "distributions": [
                    {
                        "games": [
                            "Brilliant Diamond",
                            "Shining Pearl"
                        ],
                        "method": "Global Room Trade",
                        "language": null,
                        "location": null,
                        "date": "December 24, 2021",
                        "start_date": "2021-12-24",
                        "end_date": "2021-12-24"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            },
            {
                "species": "Gible",
                "form": null,
                "national_dex_number": 443,
                "base_stats": {
                    "hp": 58,
                    "attack": 70,
                    "defense": 45,
                    "special_attack": 40,
                    "special_defense": 45,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Ground",
                "catch_rate": 45,
                "base_experience": 60,
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
                "weight": 20.5,
                "pokedex_entry": "pokedex/sword_shield.js#Gible",
                "event_name": "Gible",
                "event_section": "Second distribution",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Jolly",
                "ability": "Rough Skin",
                "held_item": null,
                "ball": "Timer Ball",
                "ot": "ポケタイムス",
                "trainer_id": "676088",
                "moves": [
                    "Sand Tomb",
                    "Tackle"
                ],
                "ivs": null,
                "met_location": "a Nursery worker (egg received) / Bridge Field (egg hatched)",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm Trade",
                        "language": null,
                        "location": null,
                        "date": "December 24, 2021",
                        "start_date": "2021-12-24",
                        "end_date": "2021-12-24"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            }
        ],
        "Poké Times Trade Meeting Campaign #2": [
            {
                "species": "Chansey",
                "form": null,
                "national_dex_number": 113,
                "base_stats": {
                    "hp": 250,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 35,
                    "special_defense": 105,
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
                "catch_rate": 30,
                "base_experience": 395,
                "gender_ratio": 254,
                "egg_cycles": 40,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Natural Cure",
                    "Serene Grace"
                ],
                "hidden_ability": "Healer",
                "weight": 34.6,
                "pokedex_entry": "pokedex/sword_shield.js#Chansey",
                "event_name": "Chansey",
                "level": 1,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Random",
                "ability": "Serene Grace",
                "held_item": null,
                "ball": "Heal Ball",
                "ot": "ポケタイムス",
                "trainer_id": "714674",
                "moves": [
                    "Copycat",
                    "Defense Curl",
                    "Seismic Toss",
                    "Present"
                ],
                "relearn_moves": [
                    "Copycat"
                ],
                "ivs": null,
                "met_location": "Unknown",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "July 17, 2020",
                        "start_date": "2020-07-17",
                        "end_date": "2020-07-17"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            }
        ],
        "Poké Times Trade Meeting Campaign #1": [
            {
                "species": "Clefairy",
                "form": null,
                "national_dex_number": 35,
                "base_stats": {
                    "hp": 70,
                    "attack": 45,
                    "defense": 48,
                    "special_attack": 60,
                    "special_defense": 65,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 2,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Fairy",
                "catch_rate": 150,
                "base_experience": 113,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "Fairy",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Cute Charm",
                    "Magic Guard"
                ],
                "hidden_ability": "Friend Guard",
                "weight": 7.5,
                "pokedex_entry": "pokedex/sword_shield.js#Clefairy",
                "event_name": "Clefairy",
                "level": 34,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Random",
                "nature": "Naughty",
                "ability": "Magic Guard",
                "held_item": null,
                "ball": "Moon Ball",
                "ot": "ポケタイムス",
                "trainer_id": "714674",
                "moves": [
                    "Present",
                    "Heal Pulse",
                    "Wish",
                    "Aromatherapy"
                ],
                "ivs": null,
                "met_location": "Unknown",
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": "Japanese",
                "games": [
                    "Sword",
                    "Shield"
                ],
                "distributions": [
                    {
                        "games": [
                            "Sword",
                            "Shield"
                        ],
                        "method": "Y-Comm trade",
                        "language": null,
                        "location": null,
                        "date": "May 1, 2020",
                        "start_date": "2020-05-01",
                        "end_date": "2020-05-01"
                    }
                ],
                "source_page": "List of traded event Pokémon distributions in Generation VIII"
            }
        ]
    },
    "Game-based distributions": {
        "Shiny Keldeo": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Keldeo",
                "event_name": "Shiny Keldeo",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Modest",
                "ability": "Justified",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "250212",
                "moves": [
                    "Quick Guard",
                    "Double Kick",
                    "Aqua Tail",
                    "Sacred Sword"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "the Galar region",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Game Pokédex Completion Commemoration No. 5!"
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
                        "date": "February 12, 2025 onwards",
                        "start_date": "2025-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Shiny Enamorus": [
            {
                "species": "Enamorus",
                "form": null,
                "national_dex_number": 905,
                "base_stats": {
                    "hp": 74,
                    "attack": 115,
                    "defense": 70,
                    "special_attack": 135,
                    "special_defense": 80,
                    "speed": 106
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Fairy",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 116,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Healer"
                ],
                "hidden_ability": "Contrary",
                "weight": 48.0,
                "pokedex_entry": "pokedex/legends_arceus.js#Enamorus",
                "event_name": "Shiny Enamorus",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Naive",
                "ability": "Cute Charm",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "250128",
                "moves": [
                    "Draining Kiss",
                    "Extrasensory",
                    "Crunch",
                    "Moonblast"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "the Hisui region",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "scale": 127,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Game Pokédex Completion Commemoration No. 3!"
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
                        "date": "January 28, 2025 onwards",
                        "start_date": "2025-01-28",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Shiny Manaphy": [
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
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Manaphy",
                "event_name": "Shiny Manaphy",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Calm",
                "ability": "Hydration",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "250128",
                "moves": [
                    "Bubble Beam",
                    "Acid Armor",
                    "Whirlpool",
                    "Water Pulse"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 31,
                    "special_attack": 20,
                    "special_defense": 31,
                    "speed": 20
                },
                "met_location": "the Sinnoh region",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "scale": 128,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Game Pokédex Completion Commemoration No. 2!"
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
                        "date": "January 28, 2025 onwards",
                        "start_date": "2025-01-28",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Max effort level Hisui first partner Pokémon": [
            {
                "species": "Rowlet",
                "form": null,
                "national_dex_number": 722,
                "base_stats": {
                    "hp": 68,
                    "attack": 55,
                    "defense": 55,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 1,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 64,
                "gender_ratio": 31,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Long Reach",
                "weight": 1.5,
                "pokedex_entry": "pokedex/sword_shield.js#Rowlet",
                "event_name": "Rowlet",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Long Reach",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Gust"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 31
                },
                "effort_levels": {
                    "hp": 10,
                    "attack": 10,
                    "defense": 10,
                    "special_attack": 10,
                    "special_defense": 10,
                    "speed": 10
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Legends: Arceus Link Gift No. 1!"
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
                        "date": "May 18, 2022 onwards",
                        "start_date": "2022-05-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Cyndaquil",
                "form": null,
                "national_dex_number": 155,
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
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Flash Fire",
                "weight": 7.9,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Cyndaquil",
                "event_name": "Cyndaquil",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Flash Fire",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Quick Attack"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "effort_levels": {
                    "hp": 10,
                    "attack": 10,
                    "defense": 10,
                    "special_attack": 10,
                    "special_defense": 10,
                    "speed": 10
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Legends: Arceus Link Gift No. 2!"
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
                        "date": "May 18, 2022 onwards",
                        "start_date": "2022-05-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Oshawott",
                "form": null,
                "national_dex_number": 501,
                "base_stats": {
                    "hp": 55,
                    "attack": 55,
                    "defense": 45,
                    "special_attack": 63,
                    "special_defense": 45,
                    "speed": 45
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
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Shell Armor",
                "weight": 5.9,
                "pokedex_entry": "pokedex/legends_arceus.js#Oshawott",
                "event_name": "Oshawott",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Rash",
                "ability": "Shell Armor",
                "held_item": null,
                "ball": "Hisuian Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 20
                },
                "effort_levels": {
                    "hp": 10,
                    "attack": 10,
                    "defense": 10,
                    "special_attack": 10,
                    "special_defense": 10,
                    "speed": 10
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Pokémon Legends: Arceus Link Gift No. 3!"
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
                        "date": "May 18, 2022 onwards",
                        "start_date": "2022-05-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Hidden Ability Sinnoh first partner Pokémon": [
            {
                "species": "Turtwig",
                "form": null,
                "national_dex_number": 387,
                "base_stats": {
                    "hp": 55,
                    "attack": 68,
                    "defense": 64,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 31
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
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
                "hidden_ability": "Shell Armor",
                "weight": 10.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Turtwig",
                "event_name": "Turtwig",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Shell Armor",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Withdraw"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Link Gift No. 4!"
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
                        "date": "May 18, 2022 onwards",
                        "start_date": "2022-05-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
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
                "hidden_ability": "Iron Fist",
                "weight": 6.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Chimchar",
                "event_name": "Chimchar",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hasty",
                "ability": "Iron Fist",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Leer"
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
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Link Gift No. 5!"
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
                        "date": "May 18, 2022 onwards",
                        "start_date": "2022-05-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Piplup",
                "form": null,
                "national_dex_number": 393,
                "base_stats": {
                    "hp": 53,
                    "attack": 51,
                    "defense": 53,
                    "special_attack": 61,
                    "special_defense": 56,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Defiant",
                "weight": 5.2,
                "pokedex_entry": "pokedex/brilliant_diamond_shining_pearl.js#Piplup",
                "event_name": "Piplup",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Defiant",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Growl"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Special Link Gift No. 6!"
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
                        "date": "May 18, 2022 onwards",
                        "start_date": "2022-05-18",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Gigantamax Factor Pokémon": [
            {
                "species": "Bulbasaur",
                "form": null,
                "national_dex_number": 1,
                "base_stats": {
                    "hp": 45,
                    "attack": 49,
                    "defense": 49,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Poison",
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
                "hidden_ability": "Chlorophyll",
                "weight": 6.9,
                "pokedex_entry": "pokedex/sword_shield.js#Bulbasaur",
                "event_name": "Bulbasaur",
                "level": 14,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Bold",
                "ability": "Overgrow",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "210601",
                "moves": [
                    "Vine Whip",
                    "Growth",
                    "Leech Seed",
                    "Razor Leaf"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 30
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "gigantamax": true,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Mobile Ver. 1.4.0 Gift ①"
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
                        "date": "June 17 to 30, 2021",
                        "start_date": "2021-06-17",
                        "end_date": "2021-06-30"
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Squirtle",
                "form": null,
                "national_dex_number": 7,
                "base_stats": {
                    "hp": 44,
                    "attack": 48,
                    "defense": 65,
                    "special_attack": 50,
                    "special_defense": 64,
                    "speed": 43
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
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
                "hidden_ability": "Rain Dish",
                "weight": 9.0,
                "pokedex_entry": "pokedex/sword_shield.js#Squirtle",
                "event_name": "Squirtle",
                "level": 14,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Torrent",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "210601",
                "moves": [
                    "Water Gun",
                    "Withdraw",
                    "Rapid Spin",
                    "Bite"
                ],
                "ivs": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 30
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "gigantamax": true,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Mobile Ver. 1.4.0 Gift ②"
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
                        "date": "June 17 to 30, 2021",
                        "start_date": "2021-06-17",
                        "end_date": "2021-06-30"
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Pokémon GO Melmetal": [
            {
                "species": "Melmetal",
                "form": null,
                "national_dex_number": 809,
                "base_stats": {
                    "hp": 135,
                    "attack": 143,
                    "defense": 143,
                    "special_attack": 80,
                    "special_defense": 65,
                    "speed": 34
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 3,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Steel",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Iron Fist"
                ],
                "hidden_ability": null,
                "weight": 1000.0,
                "pokedex_entry": "pokedex/sword_shield.js#Melmetal (Gmax)",
                "event_name": "Pokémon GO Melmetal",
                "level": 100,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Brave",
                "ability": "Iron Fist",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "808809",
                "moves": [
                    "Double Iron Bash",
                    "Hyper Beam",
                    "Dynamic Punch",
                    "Thunder Punch"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 31,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Premier"
                ],
                "gigantamax": true,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for linking Pokémon GO"
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
                        "date": "November 10, 2020 onwards",
                        "start_date": "2020-11-10",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "One million victories Shiny Zeraora": [
            {
                "species": "Zeraora",
                "form": null,
                "national_dex_number": 807,
                "base_stats": {
                    "hp": 88,
                    "attack": 112,
                    "defense": 75,
                    "special_attack": 102,
                    "special_defense": 80,
                    "speed": 143
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
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Volt Absorb"
                ],
                "hidden_ability": null,
                "weight": 44.5,
                "pokedex_entry": "pokedex/sword_shield.js#Zeraora",
                "event_name": "One million victories Shiny Zeraora",
                "level": 100,
                "shiny": true,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Hasty",
                "ability": "Volt Absorb",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "HOME",
                "trainer_id": "200630",
                "moves": [
                    "Plasma Fists",
                    "Close Combat",
                    "Blaze Kick",
                    "Outrage"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 31
                },
                "met_location": "a lovely place",
                "fateful_encounter": true,
                "ribbons": [
                    "Classic"
                ],
                "dynamax_level": 10,
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Victory over Zeraora ①"
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
                        "date": "June 29, 2020 onwards",
                        "start_date": "2020-06-29",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Hidden Ability Galar first partner Pokémon": [
            {
                "species": "Grookey",
                "form": null,
                "national_dex_number": 810,
                "base_stats": {
                    "hp": 50,
                    "attack": 65,
                    "defense": 50,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 1,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 0,
                    "speed": 0
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
                "hidden_ability": "Grassy Surge",
                "weight": 5.0,
                "pokedex_entry": "pokedex/sword_shield.js#Grookey",
                "event_name": "Grookey",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Adamant",
                "ability": "Grassy Surge",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Growl"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 31,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for connecting to Galar 1!"
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
                        "date": "June 2, 2020 onwards",
                        "start_date": "2020-06-02",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Scorbunny",
                "form": null,
                "national_dex_number": 813,
                "base_stats": {
                    "hp": 50,
                    "attack": 71,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 69
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
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Blaze"
                ],
                "hidden_ability": "Libero",
                "weight": 4.5,
                "pokedex_entry": "pokedex/sword_shield.js#Scorbunny",
                "event_name": "Scorbunny",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Jolly",
                "ability": "Libero",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Growl"
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
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for connecting to Galar 2!"
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
                        "date": "June 2, 2020 onwards",
                        "start_date": "2020-06-02",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Sobble",
                "form": null,
                "national_dex_number": 816,
                "base_stats": {
                    "hp": 50,
                    "attack": 40,
                    "defense": 40,
                    "special_attack": 70,
                    "special_defense": 40,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 1,
                    "speed": 1
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 62,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 50,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [
                    "Torrent"
                ],
                "hidden_ability": "Sniper",
                "weight": 4.0,
                "pokedex_entry": "pokedex/sword_shield.js#Sobble",
                "event_name": "Sobble",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Sniper",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Growl"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 31,
                    "special_defense": 20,
                    "speed": 31
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for connecting to Galar 3!"
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
                        "date": "June 2, 2020 onwards",
                        "start_date": "2020-06-02",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Original Color Magearna": [
            {
                "species": "Magearna",
                "form": "Original Color",
                "national_dex_number": 801,
                "base_stats": {
                    "hp": 80,
                    "attack": 95,
                    "defense": 115,
                    "special_attack": 130,
                    "special_defense": 115,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 3,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Steel",
                "type_2": "Fairy",
                "catch_rate": 3,
                "base_experience": 270,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [
                    "Soul Heart"
                ],
                "hidden_ability": null,
                "weight": 80.5,
                "pokedex_entry": "pokedex/sword_shield.js#Magearna",
                "event_name": "Original Color Magearna",
                "level": 50,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Mild",
                "ability": "Soul-Heart",
                "held_item": null,
                "ball": "Cherish Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Fleur Cannon",
                    "Flash Cannon",
                    "Defense Curl",
                    "Rest"
                ],
                "ivs": {
                    "hp": 31,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": null
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [
                    "Souvenir"
                ],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for completing the National Pokédex!"
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
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Pokémon HOME Gift Box Pokémon": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Eevee",
                "event_name": "Eevee",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Female",
                "nature": "Serious",
                "ability": "Adaptability",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Helping Hand",
                    "Tackle",
                    "Growl",
                    "Tail Whip"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for using the Wonder Box!"
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
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Rotom",
                "form": null,
                "national_dex_number": 479,
                "base_stats": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 77,
                    "special_attack": 95,
                    "special_defense": 77,
                    "speed": 91
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 1
                },
                "type_1": "Electric",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 154,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Levitate"
                ],
                "hidden_ability": null,
                "weight": 0.3,
                "pokedex_entry": "pokedex/sword_shield.js#Rotom",
                "event_name": "Rotom",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": null,
                "nature": "Timid",
                "ability": "Levitate",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Thunder Shock",
                    "Astonish",
                    "Double Team"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for using the GTS!"
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
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
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
                "pokedex_entry": "pokedex/sword_shield.js#Pichu",
                "event_name": "Pichu",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Thunder Shock",
                    "Tail Whip"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "wonder_card": {
                    "id": null,
                    "title": "Gift for creating a Binder!"
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
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ],
        "Pokémon HOME starting Pokémon": [
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
                "pokedex_entry": "pokedex/sword_shield.js#Pikachu",
                "event_name": "HOME Pikachu",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Hardy",
                "ability": "Static",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "HOME",
                "trainer_id": "200212",
                "moves": [
                    "Thunder Shock",
                    "Tail Whip",
                    "Growl",
                    "Quick Attack"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Pokémon HOME",
                        "language": null,
                        "location": null,
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Bulbasaur",
                "form": null,
                "national_dex_number": 1,
                "base_stats": {
                    "hp": 45,
                    "attack": 49,
                    "defense": 49,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Grass",
                "type_2": "Poison",
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
                "hidden_ability": "Chlorophyll",
                "weight": 6.9,
                "pokedex_entry": "pokedex/sword_shield.js#Bulbasaur",
                "event_name": "Bulbasaur",
                "event_section": "Mobile version Kanto first partner Pokémon",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Modest",
                "ability": "Chlorophyll",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Vine Whip"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Pokémon HOME",
                        "language": null,
                        "location": null,
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
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
                "hidden_ability": "Solar Power",
                "weight": 8.5,
                "pokedex_entry": "pokedex/sword_shield.js#Charmander",
                "event_name": "Charmander",
                "event_section": "Mobile version Kanto first partner Pokémon",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Timid",
                "ability": "Solar Power",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Growl",
                    "Ember"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Pokémon HOME",
                        "language": null,
                        "location": null,
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            },
            {
                "species": "Squirtle",
                "form": null,
                "national_dex_number": 7,
                "base_stats": {
                    "hp": 44,
                    "attack": 48,
                    "defense": 65,
                    "special_attack": 50,
                    "special_defense": 64,
                    "speed": 43
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 1,
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
                "hidden_ability": "Rain Dish",
                "weight": 9.0,
                "pokedex_entry": "pokedex/sword_shield.js#Squirtle",
                "event_name": "Squirtle",
                "event_section": "Mobile version Kanto first partner Pokémon",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": null,
                "gender": "Male",
                "nature": "Quiet",
                "ability": "Rain Dish",
                "held_item": null,
                "ball": "Poké Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Water Gun"
                ],
                "ivs": {
                    "hp": 20,
                    "attack": 20,
                    "defense": 20,
                    "special_attack": 20,
                    "special_defense": 20,
                    "speed": 20
                },
                "met_location": "Pokémon HOME",
                "fateful_encounter": true,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Pokémon HOME"
                ],
                "distributions": [
                    {
                        "games": [
                            "Pokémon HOME"
                        ],
                        "method": "Pokémon HOME",
                        "language": null,
                        "location": null,
                        "date": "February 12, 2020 onwards",
                        "start_date": "2020-02-12",
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation VIII"
            }
        ]
    }
};
