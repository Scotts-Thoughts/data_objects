// Event Pokémon distributed in Generation II (168 Pokémon), scraped from
// Bulbapedia's event distribution lists by scrape_event_pokemon.py.
// Structure: { channel/list page: { event: [ pokemon, ... ] } }.
// Species fields (national_dex_number .. weight) come from the pokedex/*.js entry
// named in pokedex_entry (types and dex number from the event itself); every field
// from event_name on describes the distributed Pokémon.

export const eventPokemon = {
    "Japanese events": {
        "Pokémon Center Mystery Egg Campaigns": [
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
                    "hp": 45,
                    "attack": 49,
                    "defense": 49,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Bulbasaur",
                "event_name": "Bulbasaur",
                "event_section": "Pokémon Center Mystery Egg #3",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "フシギダネ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "AncientPower"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "April 27 to May 12, 2002",
                        "start_date": "2002-04-27",
                        "end_date": "2002-05-12"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
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
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
                    "speed": 65
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Charmander",
                "event_name": "Charmander",
                "event_section": "Pokémon Center Mystery Egg #3",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ヒトカゲ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Growl",
                    "Crunch"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "April 27 to May 12, 2002",
                        "start_date": "2002-04-27",
                        "end_date": "2002-05-12"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
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
                    "hp": 50,
                    "attack": 65,
                    "defense": 64,
                    "special_attack": 44,
                    "special_defense": 48,
                    "speed": 43
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Totodile",
                "event_name": "Totodile",
                "event_section": "Pokémon Center Mystery Egg #3",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ワニノコ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Leer",
                    "Submission"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "April 27 to May 12, 2002",
                        "start_date": "2002-04-27",
                        "end_date": "2002-05-12"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Hoothoot",
                "form": null,
                "national_dex_number": 163,
                "base_stats": {
                    "hp": 60,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 36,
                    "special_defense": 56,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 36,
                    "special_defense": 56,
                    "speed": 50
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 52,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Hoothoot",
                "event_name": "Hoothoot",
                "event_section": "Pokémon Center Mystery Egg #3",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ホーホー",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Night Shade"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "April 27 to May 12, 2002",
                        "start_date": "2002-04-27",
                        "end_date": "2002-05-12"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Pichu",
                "event_section": "Pokémon Center Mystery Egg #3",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ピチュー",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Sing"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "April 27 to May 12, 2002",
                        "start_date": "2002-04-27",
                        "end_date": "2002-05-12"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
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
                    "hp": 50,
                    "attack": 52,
                    "defense": 48,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Psyduck",
                "event_name": "Psyduck",
                "event_section": "Pokémon Center Mystery Egg #2",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "コダック",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Tail Whip",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "March 16 to April 7, 2002",
                        "start_date": "2002-03-16",
                        "end_date": "2002-04-07"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
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
                    "hp": 45,
                    "attack": 49,
                    "defense": 65,
                    "special_attack": 49,
                    "special_defense": 65,
                    "speed": 45
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Chikorita",
                "event_name": "Chikorita",
                "event_section": "Pokémon Center Mystery Egg #2",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "チコリータ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "March 16 to April 7, 2002",
                        "start_date": "2002-03-16",
                        "end_date": "2002-04-07"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Pichu",
                "event_section": "Pokémon Center Mystery Egg #2",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ピチュー",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "March 16 to April 7, 2002",
                        "start_date": "2002-03-16",
                        "end_date": "2002-04-07"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Cleffa",
                "form": null,
                "national_dex_number": 173,
                "base_stats": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 44,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cleffa",
                "event_name": "Cleffa",
                "event_section": "Pokémon Center Mystery Egg #2",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ピィ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Charm",
                    "Encore",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "March 16 to April 7, 2002",
                        "start_date": "2002-03-16",
                        "end_date": "2002-04-07"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Igglybuff",
                "form": null,
                "national_dex_number": 174,
                "base_stats": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 170,
                "base_experience": 42,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Igglybuff",
                "event_name": "Igglybuff",
                "event_section": "Pokémon Center Mystery Egg #2",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ププリン",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Sing",
                    "Charm",
                    "Defense Curl",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "March 16 to April 7, 2002",
                        "start_date": "2002-03-16",
                        "end_date": "2002-04-07"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Smoochum",
                "form": null,
                "national_dex_number": 238,
                "base_stats": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "type_1": "Ice",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Smoochum",
                "event_name": "Smoochum",
                "event_section": "Pokémon Center Mystery Egg #2",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ムチュール",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Lick",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "March 16 to April 7, 2002",
                        "start_date": "2002-03-16",
                        "end_date": "2002-04-07"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
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
                    "hp": 45,
                    "attack": 49,
                    "defense": 65,
                    "special_attack": 49,
                    "special_defense": 65,
                    "speed": 45
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Chikorita",
                "event_name": "Chikorita",
                "event_section": "Pokémon Center Mystery Egg #1",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "チコリータ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2001 to January 14, 2002",
                        "start_date": "2001-12-15",
                        "end_date": "2002-01-14"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Pichu",
                "event_section": "Pokémon Center Mystery Egg #1",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ピチュー",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Sing"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2001 to January 14, 2002",
                        "start_date": "2001-12-15",
                        "end_date": "2002-01-14"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Cleffa",
                "form": null,
                "national_dex_number": 173,
                "base_stats": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 44,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cleffa",
                "event_name": "Cleffa",
                "event_section": "Pokémon Center Mystery Egg #1",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ピィ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Charm",
                    "Encore",
                    "Swift"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2001 to January 14, 2002",
                        "start_date": "2001-12-15",
                        "end_date": "2002-01-14"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Wooper",
                "form": null,
                "national_dex_number": 194,
                "base_stats": {
                    "hp": 55,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 15
                },
                "type_1": "Water",
                "type_2": "Ground",
                "catch_rate": 255,
                "base_experience": 42,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Wooper",
                "event_name": "Wooper",
                "event_section": "Pokémon Center Mystery Egg #1",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ウパー",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Tail Whip",
                    "Belly Drum"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2001 to January 14, 2002",
                        "start_date": "2001-12-15",
                        "end_date": "2002-01-14"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Phanpy",
                "form": null,
                "national_dex_number": 231,
                "base_stats": {
                    "hp": 90,
                    "attack": 60,
                    "defense": 60,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 60,
                    "defense": 60,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 40
                },
                "type_1": "Ground",
                "type_2": "Ground",
                "catch_rate": 120,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Phanpy",
                "event_name": "Phanpy",
                "event_section": "Pokémon Center Mystery Egg #1",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ゴマゾウ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Encore"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2001 to January 14, 2002",
                        "start_date": "2001-12-15",
                        "end_date": "2002-01-14"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            },
            {
                "species": "Smoochum",
                "form": null,
                "national_dex_number": 238,
                "base_stats": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "type_1": "Ice",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Smoochum",
                "event_name": "Smoochum",
                "event_section": "Pokémon Center Mystery Egg #1",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ムチュール",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Lick",
                    "Metronome"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "December 15, 2001 to January 14, 2002",
                        "start_date": "2001-12-15",
                        "end_date": "2002-01-14"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            }
        ],
        "World Hobby Fair Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "World Hobby Fair Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "セレビィ",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "トウキョー",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "January 13 to February 4, 2001",
                        "start_date": "2001-01-13",
                        "end_date": "2001-02-04"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            }
        ],
        "Shogakukan Annual Event Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Shogakukan Annual Event Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "セレビィ",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "???",
                "trainer_id": "00000-65535",
                "moves": [],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "October ??, 2000",
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            }
        ],
        "Nintendo Space World 2000 Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Nintendo Space World 2000 Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "セレビィ",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "スペース / ワールド",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": "August 25 to 27, 2000",
                        "start_date": "2000-08-25",
                        "end_date": "2000-08-27"
                    }
                ],
                "source_page": "List of Japanese event Pokémon distributions in Generation II"
            }
        ]
    },
    "European language events": {
        "Club Nintendo Latin America Giveaways": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Mew",
                "event_name": "Mew",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": "Bitter Berry",
                "ball": null,
                "ot": "ASH",
                "trainer_id": "45515",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Mexico",
                        "date": "August 1 to October 31 and then from December 2 to 31, 2002",
                        "start_date": "2002-08-01",
                        "end_date": "2002-12-31",
                        "periods": [
                            {
                                "start": "2002-08-01",
                                "end": "2002-10-31"
                            },
                            {
                                "start": "2002-12-02",
                                "end": "2002-12-31"
                            }
                        ]
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Celebi",
                "level": 2,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": "???",
                "ball": null,
                "ot": "HIRO",
                "trainer_id": "42534",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Mexico",
                        "date": "August 1 to October 31 and then from December 2 to 31, 2002",
                        "start_date": "2002-08-01",
                        "end_date": "2002-12-31",
                        "periods": [
                            {
                                "start": "2002-08-01",
                                "end": "2002-10-31"
                            },
                            {
                                "start": "2002-12-02",
                                "end": "2002-12-31"
                            }
                        ]
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ],
        "Sweden Celebi Tour Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Sweden Celebi Tour Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "???",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Sweden",
                        "date": "February 11 to March 18, 2002",
                        "start_date": "2002-02-11",
                        "end_date": "2002-03-18"
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ],
        "Westfield Shopping Centre Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Westfield Shopping Centre Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "???",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Australia",
                        "date": "September 24 to October 20, 2001",
                        "start_date": "2001-09-24",
                        "end_date": "2001-10-20"
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ],
        "Celebi Tour Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Celebi Tour Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "CTOUR / FRANCO / JENS / NICO",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United Kingdom",
                        "date": "August 23 to 29, 2001",
                        "start_date": "2001-08-23",
                        "end_date": "2001-08-29"
                    },
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Germany",
                        "date": "September 6 to 17, 2001",
                        "start_date": "2001-09-06",
                        "end_date": "2001-09-17"
                    },
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Spain",
                        "date": "October 6 to 13, 2001",
                        "start_date": "2001-10-06",
                        "end_date": "2001-10-13"
                    },
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Belgium",
                        "date": "October 20 to 21, 2001",
                        "start_date": "2001-10-20",
                        "end_date": "2001-10-21"
                    },
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the Netherlands",
                        "date": "October 27 to 29, 2001",
                        "start_date": "2001-10-27",
                        "end_date": "2001-10-29"
                    },
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "France",
                        "date": "October 31 to November 4, 2001",
                        "start_date": "2001-10-31",
                        "end_date": "2001-11-04"
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ],
        "Pokémon Fun Fest Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Pokémon Fun Fest Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "Various",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Canada",
                        "date": "August 4 to September 9, 2001",
                        "start_date": "2001-08-04",
                        "end_date": "2001-09-09"
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ],
        "Nintendo Power Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Nintendo Power Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "???",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Canada",
                        "date": "July to August 1, 2001",
                        "start_date": "2001-07",
                        "end_date": "2001-08-01"
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ],
        "Celebi Sweepstakes Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Celebi Sweepstakes Celebi",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "???",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States and Canada",
                        "date": "August 2001",
                        "start_date": "2001-08",
                        "end_date": "2001-08"
                    }
                ],
                "source_page": "List of European language event Pokémon distributions in Generation II"
            }
        ]
    },
    "Pokémon Center New York": {
        "AncientPower Bulbasaur": [
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
                    "hp": 45,
                    "attack": 49,
                    "defense": 49,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Bulbasaur",
                "event_name": "AncientPower Bulbasaur",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "BULBASAUR",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "AncientPower"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 28, 2001 to January 31, 2002; January 17 to 23, 2003",
                        "start_date": "2001-12-28",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2001-12-28",
                                "end": "2002-01-31"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Venusaur": [
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
                    "hp": 80,
                    "attack": 82,
                    "defense": 83,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 80
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Venusaur",
                "event_name": "Shiny Venusaur",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "VENUSAUR",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "PoisonPowder",
                    "Sleep Powder",
                    "Razor Leaf",
                    "Sweet Scent"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 15 to 21, 2002; September 27 to October 3, 2002; February 14 to 20, 2003",
                        "start_date": "2002-03-15",
                        "end_date": "2003-02-20",
                        "periods": [
                            {
                                "start": "2002-03-15",
                                "end": "2002-03-21"
                            },
                            {
                                "start": "2002-09-27",
                                "end": "2002-10-03"
                            },
                            {
                                "start": "2003-02-14",
                                "end": "2003-02-20"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Crunch Charmander": [
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
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
                    "speed": 65
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Charmander",
                "event_name": "Crunch Charmander",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CHARMANDER",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Growl",
                    "Crunch"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 28, 2001 to January 31, 2002; January 17 to 23, 2003",
                        "start_date": "2001-12-28",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2001-12-28",
                                "end": "2002-01-31"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Charizard": [
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
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Charizard",
                "event_name": "Shiny Charizard",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "CHARIZARD",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Rage",
                    "Scary Face",
                    "Flamethrower",
                    "Wing Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 15 to 21, 2002; September 27 to October 3, 2002; February 14 to 20, 2003",
                        "start_date": "2002-03-15",
                        "end_date": "2003-02-20",
                        "periods": [
                            {
                                "start": "2002-03-15",
                                "end": "2002-03-21"
                            },
                            {
                                "start": "2002-09-27",
                                "end": "2002-10-03"
                            },
                            {
                                "start": "2003-02-14",
                                "end": "2003-02-20"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Zap Cannon Squirtle": [
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
                    "hp": 44,
                    "attack": 48,
                    "defense": 65,
                    "special_attack": 50,
                    "special_defense": 64,
                    "speed": 43
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Squirtle",
                "event_name": "Zap Cannon Squirtle",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SQUIRTLE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Zap Cannon"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 28, 2001 to January 31, 2002; January 17 to 23, 2003",
                        "start_date": "2001-12-28",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2001-12-28",
                                "end": "2002-01-31"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Blastoise": [
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
                    "hp": 79,
                    "attack": 83,
                    "defense": 100,
                    "special_attack": 85,
                    "special_defense": 105,
                    "speed": 78
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Blastoise",
                "event_name": "Shiny Blastoise",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "BLASTOISE",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Water Gun",
                    "Bite",
                    "Rapid Spin",
                    "Protect"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 15 to 21, 2002; September 27 to October 3, 2002; February 14 to 20, 2003",
                        "start_date": "2002-03-15",
                        "end_date": "2003-02-20",
                        "periods": [
                            {
                                "start": "2002-03-15",
                                "end": "2002-03-21"
                            },
                            {
                                "start": "2002-09-27",
                                "end": "2002-10-03"
                            },
                            {
                                "start": "2003-02-14",
                                "end": "2003-02-20"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "SonicBoom Spearow": [
            {
                "species": "Spearow",
                "form": null,
                "national_dex_number": 21,
                "base_stats": {
                    "hp": 40,
                    "attack": 60,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 60,
                    "defense": 30,
                    "special_attack": 31,
                    "special_defense": 31,
                    "speed": 70
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 52,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Spearow",
                "event_name": "SonicBoom Spearow",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SPEAROW",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Peck",
                    "Growl",
                    "SonicBoom"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 30 to September 26, 2002",
                        "start_date": "2002-08-30",
                        "end_date": "2002-09-26"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Lovely Kiss Nidoran♀": [
            {
                "species": "Nidoran♀",
                "form": null,
                "national_dex_number": 29,
                "base_stats": {
                    "hp": 55,
                    "attack": 47,
                    "defense": 52,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 41
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 47,
                    "defense": 52,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 41
                },
                "type_1": "Poison",
                "type_2": "Poison",
                "catch_rate": 235,
                "base_experience": 55,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Nidoran♀",
                "event_name": "Lovely Kiss Nidoran♀",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NIDORAN♀",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Growl",
                    "Tackle",
                    "Lovely Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 1 to 14, 2002",
                        "start_date": "2002-02-01",
                        "end_date": "2002-02-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Moonlight Nidoran♀": [
            {
                "species": "Nidoran♀",
                "form": null,
                "national_dex_number": 29,
                "base_stats": {
                    "hp": 55,
                    "attack": 47,
                    "defense": 52,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 41
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 47,
                    "defense": 52,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 41
                },
                "type_1": "Poison",
                "type_2": "Poison",
                "catch_rate": 235,
                "base_experience": 55,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Nidoran♀",
                "event_name": "Moonlight Nidoran♀",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NIDORAN♀",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Growl",
                    "Tackle",
                    "Moonlight"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 9 to 29, 2002",
                        "start_date": "2002-08-09",
                        "end_date": "2002-08-29"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Kiss Nidoran♀": [
            {
                "species": "Nidoran♀",
                "form": null,
                "national_dex_number": 29,
                "base_stats": {
                    "hp": 55,
                    "attack": 47,
                    "defense": 52,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 41
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 47,
                    "defense": 52,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 41
                },
                "type_1": "Poison",
                "type_2": "Poison",
                "catch_rate": 235,
                "base_experience": 55,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Nidoran♀",
                "event_name": "Sweet Kiss Nidoran♀",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NIDORAN♀",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Growl",
                    "Tackle",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 1 to 14, 2002",
                        "start_date": "2002-02-01",
                        "end_date": "2002-02-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Lovely Kiss Nidoran♂": [
            {
                "species": "Nidoran♂",
                "form": null,
                "national_dex_number": 32,
                "base_stats": {
                    "hp": 46,
                    "attack": 57,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 46,
                    "attack": 57,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 50
                },
                "type_1": "Poison",
                "type_2": "Poison",
                "catch_rate": 235,
                "base_experience": 55,
                "gender_ratio": 0,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Nidoran♂",
                "event_name": "Lovely Kiss Nidoran♂",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NIDORAN♂",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Leer",
                    "Tackle",
                    "Lovely Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 1 to 14, 2002",
                        "start_date": "2002-02-01",
                        "end_date": "2002-02-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Morning Sun Nidoran♂": [
            {
                "species": "Nidoran♂",
                "form": null,
                "national_dex_number": 32,
                "base_stats": {
                    "hp": 46,
                    "attack": 57,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 46,
                    "attack": 57,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 50
                },
                "type_1": "Poison",
                "type_2": "Poison",
                "catch_rate": 235,
                "base_experience": 55,
                "gender_ratio": 0,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Nidoran♂",
                "event_name": "Morning Sun Nidoran♂",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NIDORAN♂",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Leer",
                    "Tackle",
                    "Morning Sun"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 9 to 29, 2002",
                        "start_date": "2002-08-09",
                        "end_date": "2002-08-29"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Kiss Nidoran♂": [
            {
                "species": "Nidoran♂",
                "form": null,
                "national_dex_number": 32,
                "base_stats": {
                    "hp": 46,
                    "attack": 57,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 46,
                    "attack": 57,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 50
                },
                "type_1": "Poison",
                "type_2": "Poison",
                "catch_rate": 235,
                "base_experience": 55,
                "gender_ratio": 0,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Nidoran♂",
                "event_name": "Sweet Kiss Nidoran♂",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NIDORAN♂",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Leer",
                    "Tackle",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 1 to 14, 2002",
                        "start_date": "2002-02-01",
                        "end_date": "2002-02-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Flail Zubat": [
            {
                "species": "Zubat",
                "form": null,
                "national_dex_number": 41,
                "base_stats": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 35,
                    "special_attack": 30,
                    "special_defense": 40,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 35,
                    "special_attack": 30,
                    "special_defense": 40,
                    "speed": 55
                },
                "type_1": "Poison",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 49,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Zubat",
                "event_name": "Flail Zubat",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ZUBAT",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Leech Life",
                    "Flail"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 13 to 19, 2002",
                        "start_date": "2002-12-13",
                        "end_date": "2002-12-19"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Leech Seed Oddish": [
            {
                "species": "Oddish",
                "form": null,
                "national_dex_number": 43,
                "base_stats": {
                    "hp": 45,
                    "attack": 50,
                    "defense": 55,
                    "special_attack": 75,
                    "special_defense": 65,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 50,
                    "defense": 55,
                    "special_attack": 75,
                    "special_defense": 65,
                    "speed": 30
                },
                "type_1": "Grass",
                "type_2": "Poison",
                "catch_rate": 255,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Oddish",
                "event_name": "Leech Seed Oddish",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ODDISH",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Absorb",
                    "Leech Seed"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 3 to 9, 2003",
                        "start_date": "2003-01-03",
                        "end_date": "2003-01-09"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Synthesis Paras": [
            {
                "species": "Paras",
                "form": null,
                "national_dex_number": 46,
                "base_stats": {
                    "hp": 35,
                    "attack": 70,
                    "defense": 55,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 25
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 70,
                    "defense": 55,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 25
                },
                "type_1": "Bug",
                "type_2": "Grass",
                "catch_rate": 190,
                "base_experience": 57,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Paras",
                "event_name": "Synthesis Paras",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PARAS",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Synthesis"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 3 to 9, 2003",
                        "start_date": "2003-01-03",
                        "end_date": "2003-01-09"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Petal Dance Psyduck": [
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
                    "hp": 50,
                    "attack": 52,
                    "defense": 48,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Psyduck",
                "event_name": "Petal Dance Psyduck",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PSYDUCK",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Tail Whip",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "April 12 to May 4, 2002",
                        "start_date": "2002-04-12",
                        "end_date": "2002-05-04"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Tri Attack Psyduck": [
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
                    "hp": 50,
                    "attack": 52,
                    "defense": 48,
                    "special_attack": 65,
                    "special_defense": 50,
                    "speed": 55
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Psyduck",
                "event_name": "Tri Attack Psyduck",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PSYDUCK",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Tail Whip",
                    "Tri Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "July 12 to August 8, 2002",
                        "start_date": "2002-07-12",
                        "end_date": "2002-08-08"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Growth Poliwag": [
            {
                "species": "Poliwag",
                "form": null,
                "national_dex_number": 60,
                "base_stats": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Water1",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Poliwag",
                "event_name": "Growth Poliwag",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "POLIWAG",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bubble",
                    "Growth"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 8 to 21, 2002",
                        "start_date": "2002-06-08",
                        "end_date": "2002-06-21"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Lovely Kiss Poliwag": [
            {
                "species": "Poliwag",
                "form": null,
                "national_dex_number": 60,
                "base_stats": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Water1",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Poliwag",
                "event_name": "Lovely Kiss Poliwag",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "POLIWAG",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bubble",
                    "Lovely Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 7 to 13, 2003",
                        "start_date": "2003-02-07",
                        "end_date": "2003-02-13"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Kiss Poliwag": [
            {
                "species": "Poliwag",
                "form": null,
                "national_dex_number": 60,
                "base_stats": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 90
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 255,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Water1",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Poliwag",
                "event_name": "Sweet Kiss Poliwag",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "POLIWAG",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bubble",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 7 to 13, 2003",
                        "start_date": "2003-02-07",
                        "end_date": "2003-02-13"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Foresight Abra": [
            {
                "species": "Abra",
                "form": null,
                "national_dex_number": 63,
                "base_stats": {
                    "hp": 25,
                    "attack": 20,
                    "defense": 15,
                    "special_attack": 105,
                    "special_defense": 55,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 25,
                    "attack": 20,
                    "defense": 15,
                    "special_attack": 105,
                    "special_defense": 55,
                    "speed": 90
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 200,
                "base_experience": 62,
                "gender_ratio": 63,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Abra",
                "event_name": "Foresight Abra",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ABRA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Teleport",
                    "Foresight"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 29 to December 5, 2002",
                        "start_date": "2002-11-29",
                        "end_date": "2002-12-05"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "False Swipe Machop": [
            {
                "species": "Machop",
                "form": null,
                "national_dex_number": 66,
                "base_stats": {
                    "hp": 70,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 35
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 180,
                "base_experience": 61,
                "gender_ratio": 63,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Machop",
                "event_name": "False Swipe Machop",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MACHOP",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Low Kick",
                    "Leer",
                    "False Swipe"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 24 to 30, 2003",
                        "start_date": "2003-01-24",
                        "end_date": "2003-01-30"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Thrash Machop": [
            {
                "species": "Machop",
                "form": null,
                "national_dex_number": 66,
                "base_stats": {
                    "hp": 70,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 35
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 180,
                "base_experience": 61,
                "gender_ratio": 63,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Machop",
                "event_name": "Thrash Machop",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MACHOP",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Low Kick",
                    "Leer",
                    "Thrash"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 13 to 19, 2002",
                        "start_date": "2002-12-13",
                        "end_date": "2002-12-19"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Lovely Kiss Bellsprout": [
            {
                "species": "Bellsprout",
                "form": null,
                "national_dex_number": 69,
                "base_stats": {
                    "hp": 50,
                    "attack": 75,
                    "defense": 35,
                    "special_attack": 70,
                    "special_defense": 30,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 75,
                    "defense": 35,
                    "special_attack": 70,
                    "special_defense": 30,
                    "speed": 40
                },
                "type_1": "Grass",
                "type_2": "Poison",
                "catch_rate": 255,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Bellsprout",
                "event_name": "Lovely Kiss Bellsprout",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "BELLSPROUT",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Vine Whip",
                    "Lovely Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 1 to 14, 2002; February 7 to 13, 2003",
                        "start_date": "2002-02-01",
                        "end_date": "2003-02-13",
                        "periods": [
                            {
                                "start": "2002-02-01",
                                "end": "2002-02-14"
                            },
                            {
                                "start": "2003-02-07",
                                "end": "2003-02-13"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Kiss Bellsprout": [
            {
                "species": "Bellsprout",
                "form": null,
                "national_dex_number": 69,
                "base_stats": {
                    "hp": 50,
                    "attack": 75,
                    "defense": 35,
                    "special_attack": 70,
                    "special_defense": 30,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 75,
                    "defense": 35,
                    "special_attack": 70,
                    "special_defense": 30,
                    "speed": 40
                },
                "type_1": "Grass",
                "type_2": "Poison",
                "catch_rate": 255,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Bellsprout",
                "event_name": "Sweet Kiss Bellsprout",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "BELLSPROUT",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Vine Whip",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 1 to 14, 2002; February 7 to 13, 2003",
                        "start_date": "2002-02-01",
                        "end_date": "2003-02-13",
                        "periods": [
                            {
                                "start": "2002-02-01",
                                "end": "2002-02-14"
                            },
                            {
                                "start": "2003-02-07",
                                "end": "2003-02-13"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Confuse Ray Tentacool": [
            {
                "species": "Tentacool",
                "form": null,
                "national_dex_number": 72,
                "base_stats": {
                    "hp": 40,
                    "attack": 40,
                    "defense": 35,
                    "special_attack": 50,
                    "special_defense": 100,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 40,
                    "defense": 35,
                    "special_attack": 50,
                    "special_defense": 100,
                    "speed": 70
                },
                "type_1": "Water",
                "type_2": "Poison",
                "catch_rate": 190,
                "base_experience": 67,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water3",
                "egg_group_2": "Water3",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Tentacool",
                "event_name": "Confuse Ray Tentacool",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "TENTACOOL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Poison Sting",
                    "Confuse Ray"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "July 12 to August 8, 2002",
                        "start_date": "2002-07-12",
                        "end_date": "2002-08-08"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rapid Spin Geodude": [
            {
                "species": "Geodude",
                "form": null,
                "national_dex_number": 74,
                "base_stats": {
                    "hp": 40,
                    "attack": 80,
                    "defense": 100,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 20
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 80,
                    "defense": 100,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 20
                },
                "type_1": "Rock",
                "type_2": "Ground",
                "catch_rate": 255,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Geodude",
                "event_name": "Rapid Spin Geodude",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "GEODUDE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Rapid Spin"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 13 to 19, 2002; January 31 to February 5, 2003",
                        "start_date": "2002-12-13",
                        "end_date": "2003-02-05",
                        "periods": [
                            {
                                "start": "2002-12-13",
                                "end": "2002-12-19"
                            },
                            {
                                "start": "2003-01-31",
                                "end": "2003-02-05"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Low Kick Ponyta": [
            {
                "species": "Ponyta",
                "form": null,
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
                    "hp": 50,
                    "attack": 85,
                    "defense": 55,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 90
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 190,
                "base_experience": 82,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Ponyta",
                "event_name": "Low Kick Ponyta",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PONYTA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Low Kick"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 1 to 7, 2002",
                        "start_date": "2002-11-01",
                        "end_date": "2002-11-07"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Agility Magnemite": [
            {
                "species": "Magnemite",
                "form": null,
                "national_dex_number": 81,
                "base_stats": {
                    "hp": 25,
                    "attack": 35,
                    "defense": 70,
                    "special_attack": 95,
                    "special_defense": 55,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 25,
                    "attack": 35,
                    "defense": 70,
                    "special_attack": 95,
                    "special_defense": 55,
                    "speed": 45
                },
                "type_1": "Electric",
                "type_2": "Steel",
                "catch_rate": 190,
                "base_experience": 65,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Magnemite",
                "event_name": "Agility Magnemite",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MAGNEMITE",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Agility"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 4 to 10, 2002",
                        "start_date": "2002-10-04",
                        "end_date": "2002-10-10"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Fury Cutter Farfetch'd": [
            {
                "species": "Farfetch'd",
                "form": null,
                "national_dex_number": 83,
                "base_stats": {
                    "hp": 52,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 58,
                    "special_defense": 62,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 52,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 58,
                    "special_defense": 62,
                    "speed": 60
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 132,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Farfetch'd",
                "event_name": "Fury Cutter Farfetch'd",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "FARFETCH'D",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Peck",
                    "Fury Cutter"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 30 to September 26, 2002",
                        "start_date": "2002-08-30",
                        "end_date": "2002-09-26"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Low Kick Doduo": [
            {
                "species": "Doduo",
                "form": null,
                "national_dex_number": 84,
                "base_stats": {
                    "hp": 35,
                    "attack": 85,
                    "defense": 45,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 85,
                    "defense": 45,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 75
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 190,
                "base_experience": 62,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Doduo",
                "event_name": "Low Kick Doduo",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DODUO",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Peck",
                    "Growl",
                    "Low Kick"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 30 to September 26, 2002; November 1 to 7, 2002",
                        "start_date": "2002-08-30",
                        "end_date": "2002-11-07",
                        "periods": [
                            {
                                "start": "2002-08-30",
                                "end": "2002-09-26"
                            },
                            {
                                "start": "2002-11-01",
                                "end": "2002-11-07"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Flail Seel": [
            {
                "species": "Seel",
                "form": null,
                "national_dex_number": 86,
                "base_stats": {
                    "hp": 65,
                    "attack": 45,
                    "defense": 55,
                    "special_attack": 45,
                    "special_defense": 70,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 45,
                    "defense": 55,
                    "special_attack": 45,
                    "special_defense": 70,
                    "speed": 45
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 65,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Seel",
                "event_name": "Flail Seel",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SEEL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Headbutt",
                    "Growl",
                    "Flail"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 20 to 26, 2002",
                        "start_date": "2002-12-20",
                        "end_date": "2002-12-26"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sharpen Onix": [
            {
                "species": "Onix",
                "form": null,
                "national_dex_number": 95,
                "base_stats": {
                    "hp": 35,
                    "attack": 45,
                    "defense": 160,
                    "special_attack": 30,
                    "special_defense": 45,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 45,
                    "defense": 160,
                    "special_attack": 30,
                    "special_defense": 45,
                    "speed": 70
                },
                "type_1": "Rock",
                "type_2": "Ground",
                "catch_rate": 45,
                "base_experience": 77,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Onix",
                "event_name": "Sharpen Onix",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ONIX",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Screech",
                    "Sharpen"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 8 to 14, 2002; December 13 to 19, 2002",
                        "start_date": "2002-11-08",
                        "end_date": "2002-12-19",
                        "periods": [
                            {
                                "start": "2002-11-08",
                                "end": "2002-11-14"
                            },
                            {
                                "start": "2002-12-13",
                                "end": "2002-12-19"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Amnesia Drowzee": [
            {
                "species": "Drowzee",
                "form": null,
                "national_dex_number": 96,
                "base_stats": {
                    "hp": 60,
                    "attack": 48,
                    "defense": 45,
                    "special_attack": 43,
                    "special_defense": 90,
                    "speed": 42
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 48,
                    "defense": 45,
                    "special_attack": 43,
                    "special_defense": 90,
                    "speed": 42
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 190,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Drowzee",
                "event_name": "Amnesia Drowzee",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DROWZEE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Hypnosis",
                    "Amnesia"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 29 to December 5, 2002",
                        "start_date": "2002-11-29",
                        "end_date": "2002-12-05"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Metal Claw Krabby": [
            {
                "species": "Krabby",
                "form": null,
                "national_dex_number": 98,
                "base_stats": {
                    "hp": 30,
                    "attack": 105,
                    "defense": 90,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 30,
                    "attack": 105,
                    "defense": 90,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 50
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 225,
                "base_experience": 65,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water3",
                "egg_group_2": "Water3",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Krabby",
                "event_name": "Metal Claw Krabby",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "KRABBY",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bubble",
                    "Leer",
                    "Metal Claw"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 8 to 14, 2002",
                        "start_date": "2002-11-08",
                        "end_date": "2002-11-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Agility Voltorb": [
            {
                "species": "Voltorb",
                "form": null,
                "national_dex_number": 100,
                "base_stats": {
                    "hp": 40,
                    "attack": 30,
                    "defense": 50,
                    "special_attack": 55,
                    "special_defense": 55,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 30,
                    "defense": 50,
                    "special_attack": 55,
                    "special_defense": 55,
                    "speed": 100
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 66,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Voltorb",
                "event_name": "Agility Voltorb",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "VOLTORB",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Agility"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 4 to 10, 2002",
                        "start_date": "2002-10-04",
                        "end_date": "2002-10-10"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Scent Exeggcute": [
            {
                "species": "Exeggcute",
                "form": null,
                "national_dex_number": 102,
                "base_stats": {
                    "hp": 60,
                    "attack": 40,
                    "defense": 80,
                    "special_attack": 60,
                    "special_defense": 45,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 40,
                    "defense": 80,
                    "special_attack": 60,
                    "special_defense": 45,
                    "speed": 40
                },
                "type_1": "Grass",
                "type_2": "Psychic",
                "catch_rate": 90,
                "base_experience": 65,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Exeggcute",
                "event_name": "Sweet Scent Exeggcute",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "EXEGGCUTE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Barrage",
                    "Hypnosis",
                    "Sweet Scent"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 29 to December 5, 2002",
                        "start_date": "2002-11-29",
                        "end_date": "2002-12-05"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Fury Attack Cubone": [
            {
                "species": "Cubone",
                "form": null,
                "national_dex_number": 104,
                "base_stats": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 95,
                    "special_attack": 40,
                    "special_defense": 50,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 95,
                    "special_attack": 40,
                    "special_defense": 50,
                    "speed": 35
                },
                "type_1": "Ground",
                "type_2": "Ground",
                "catch_rate": 190,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Monster",
                "egg_group_2": "Monster",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cubone",
                "event_name": "Fury Attack Cubone",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CUBONE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Growl",
                    "Tail Whip",
                    "Fury Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 13 to 19, 2002",
                        "start_date": "2002-12-13",
                        "end_date": "2002-12-19"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "DoubleSlap Lickitung": [
            {
                "species": "Lickitung",
                "form": null,
                "national_dex_number": 108,
                "base_stats": {
                    "hp": 90,
                    "attack": 55,
                    "defense": 75,
                    "special_attack": 60,
                    "special_defense": 75,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 55,
                    "defense": 75,
                    "special_attack": 60,
                    "special_defense": 75,
                    "speed": 30
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 77,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Monster",
                "egg_group_2": "Monster",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Lickitung",
                "event_name": "DoubleSlap Lickitung",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "LICKITUNG",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Lick",
                    "DoubleSlap"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 10 to 16, 2003",
                        "start_date": "2003-01-10",
                        "end_date": "2003-01-16"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Scent Chansey": [
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
                    "hp": 250,
                    "attack": 5,
                    "defense": 5,
                    "special_attack": 35,
                    "special_defense": 105,
                    "speed": 50
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Chansey",
                "event_name": "Sweet Scent Chansey",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CHANSEY",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Sweet Scent"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 9 to 29, 2002",
                        "start_date": "2002-08-09",
                        "end_date": "2002-08-29"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Synthesis Tangela": [
            {
                "species": "Tangela",
                "form": null,
                "national_dex_number": 114,
                "base_stats": {
                    "hp": 65,
                    "attack": 55,
                    "defense": 115,
                    "special_attack": 100,
                    "special_defense": 40,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 55,
                    "defense": 115,
                    "special_attack": 100,
                    "special_defense": 40,
                    "speed": 60
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 45,
                "base_experience": 87,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Tangela",
                "event_name": "Synthesis Tangela",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "TANGELA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Constrict",
                    "Sleep Powder",
                    "Synthesis"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 1 to 7, 2002; January 3 to 9, 2003",
                        "start_date": "2002-11-01",
                        "end_date": "2003-01-09",
                        "periods": [
                            {
                                "start": "2002-11-01",
                                "end": "2002-11-07"
                            },
                            {
                                "start": "2003-01-03",
                                "end": "2003-01-09"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Faint Attack Kangaskhan": [
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
                    "hp": 105,
                    "attack": 95,
                    "defense": 80,
                    "special_attack": 40,
                    "special_defense": 80,
                    "speed": 90
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Kangaskhan",
                "event_name": "Faint Attack Kangaskhan",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "KANGASKHAN",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Comet Punch",
                    "Faint Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 9 to 29, 2002; December 13 to 19, 2002",
                        "start_date": "2002-08-09",
                        "end_date": "2002-12-19",
                        "periods": [
                            {
                                "start": "2002-08-09",
                                "end": "2002-08-29"
                            },
                            {
                                "start": "2002-12-13",
                                "end": "2002-12-19"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Haze Horsea": [
            {
                "species": "Horsea",
                "form": null,
                "national_dex_number": 116,
                "base_stats": {
                    "hp": 30,
                    "attack": 40,
                    "defense": 70,
                    "special_attack": 70,
                    "special_defense": 25,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 30,
                    "attack": 40,
                    "defense": 70,
                    "special_attack": 70,
                    "special_defense": 25,
                    "speed": 60
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 225,
                "base_experience": 59,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Horsea",
                "event_name": "Haze Horsea",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "HORSEA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bubble",
                    "Haze"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 8 to 21, 2002",
                        "start_date": "2002-06-08",
                        "end_date": "2002-06-21"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Swords Dance Goldeen": [
            {
                "species": "Goldeen",
                "form": null,
                "national_dex_number": 118,
                "base_stats": {
                    "hp": 45,
                    "attack": 67,
                    "defense": 60,
                    "special_attack": 35,
                    "special_defense": 50,
                    "speed": 63
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 67,
                    "defense": 60,
                    "special_attack": 35,
                    "special_defense": 50,
                    "speed": 63
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 225,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water2",
                "egg_group_2": "Water2",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Goldeen",
                "event_name": "Swords Dance Goldeen",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "GOLDEEN",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Peck",
                    "Tail Whip",
                    "Swords Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 8 to 21, 2002; November 8 to 14, 2002; January 17 to 23, 2003",
                        "start_date": "2002-06-08",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2002-06-08",
                                "end": "2002-06-21"
                            },
                            {
                                "start": "2002-11-08",
                                "end": "2002-11-14"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Twister Staryu": [
            {
                "species": "Staryu",
                "form": null,
                "national_dex_number": 120,
                "base_stats": {
                    "hp": 30,
                    "attack": 45,
                    "defense": 55,
                    "special_attack": 70,
                    "special_defense": 55,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 30,
                    "attack": 45,
                    "defense": 55,
                    "special_attack": 70,
                    "special_defense": 55,
                    "speed": 85
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 225,
                "base_experience": 68,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water3",
                "egg_group_2": "Water3",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Staryu",
                "event_name": "Twister Staryu",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "STARYU",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Harden",
                    "Twister"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 8 to 14, 2002; December 27, 2002 to January 2, 2003",
                        "start_date": "2002-11-08",
                        "end_date": "2003-01-02",
                        "periods": [
                            {
                                "start": "2002-11-08",
                                "end": "2002-11-14"
                            },
                            {
                                "start": "2002-12-27",
                                "end": "2003-01-02"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Mind Reader Mr. Mime": [
            {
                "species": "Mr. Mime",
                "form": null,
                "national_dex_number": 122,
                "base_stats": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 65,
                    "special_attack": 100,
                    "special_defense": 120,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 65,
                    "special_attack": 100,
                    "special_defense": 120,
                    "speed": 90
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 161,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Mr. Mime",
                "event_name": "Mind Reader Mr. Mime",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MR. MIME",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Barrier",
                    "Mind Reader"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 29 to December 5, 2002",
                        "start_date": "2002-11-29",
                        "end_date": "2002-12-05"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "SonicBoom Scyther": [
            {
                "species": "Scyther",
                "form": null,
                "national_dex_number": 123,
                "base_stats": {
                    "hp": 70,
                    "attack": 110,
                    "defense": 80,
                    "special_attack": 55,
                    "special_defense": 80,
                    "speed": 105
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 110,
                    "defense": 80,
                    "special_attack": 55,
                    "special_defense": 80,
                    "speed": 105
                },
                "type_1": "Bug",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 100,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Scyther",
                "event_name": "SonicBoom Scyther",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SCYTHER",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Quick Attack",
                    "Leer",
                    "SonicBoom"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rock Throw Pinsir": [
            {
                "species": "Pinsir",
                "form": null,
                "national_dex_number": 127,
                "base_stats": {
                    "hp": 65,
                    "attack": 125,
                    "defense": 100,
                    "special_attack": 55,
                    "special_defense": 70,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 125,
                    "defense": 100,
                    "special_attack": 55,
                    "special_defense": 70,
                    "speed": 85
                },
                "type_1": "Bug",
                "type_2": "Bug",
                "catch_rate": 45,
                "base_experience": 175,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pinsir",
                "event_name": "Rock Throw Pinsir",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PINSIR",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ViceGrip",
                    "Rock Throw"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Quick Attack Tauros": [
            {
                "species": "Tauros",
                "form": null,
                "national_dex_number": 128,
                "base_stats": {
                    "hp": 75,
                    "attack": 100,
                    "defense": 95,
                    "special_attack": 40,
                    "special_defense": 70,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 75,
                    "attack": 100,
                    "defense": 95,
                    "special_attack": 40,
                    "special_defense": 70,
                    "speed": 110
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 172,
                "gender_ratio": 0,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Tauros",
                "event_name": "Quick Attack Tauros",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "TAUROS",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 9 to 29, 2002",
                        "start_date": "2002-08-09",
                        "end_date": "2002-08-29"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Bubble Magikarp": [
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
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Magikarp",
                "event_name": "Bubble Magikarp",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MAGIKARP",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Splash",
                    "Bubble"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 24 to 30, 2003",
                        "start_date": "2003-01-24",
                        "end_date": "2003-01-30"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Reversal Magikarp": [
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
                    "hp": 20,
                    "attack": 10,
                    "defense": 55,
                    "special_attack": 15,
                    "special_defense": 20,
                    "speed": 80
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Magikarp",
                "event_name": "Reversal Magikarp",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MAGIKARP",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Splash",
                    "Reversal"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 8 to 21, 2002",
                        "start_date": "2002-06-08",
                        "end_date": "2002-06-21"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Bite Lapras": [
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
                    "hp": 130,
                    "attack": 85,
                    "defense": 80,
                    "special_attack": 85,
                    "special_defense": 95,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Lapras",
                "event_name": "Bite Lapras",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "LAPRAS",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Growl",
                    "Sing",
                    "Bite"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "July 12 to August 8, 2002",
                        "start_date": "2002-07-12",
                        "end_date": "2002-08-08"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Future Sight Lapras": [
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
                    "hp": 130,
                    "attack": 85,
                    "defense": 80,
                    "special_attack": 85,
                    "special_defense": 95,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Lapras",
                "event_name": "Future Sight Lapras",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "LAPRAS",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Growl",
                    "Sing",
                    "Future Sight"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 8 to 14, 2002; December 20 to 26, 2002",
                        "start_date": "2002-11-08",
                        "end_date": "2002-12-26",
                        "periods": [
                            {
                                "start": "2002-11-08",
                                "end": "2002-11-14"
                            },
                            {
                                "start": "2002-12-20",
                                "end": "2002-12-26"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Growth Eevee": [
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
                    "hp": 55,
                    "attack": 55,
                    "defense": 50,
                    "special_attack": 45,
                    "special_defense": 65,
                    "speed": 55
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Eevee",
                "event_name": "Growth Eevee",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "EEVEE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Growth"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 21 to 27, 2003",
                        "start_date": "2003-02-21",
                        "end_date": "2003-02-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Barrier Porygon": [
            {
                "species": "Porygon",
                "form": null,
                "national_dex_number": 137,
                "base_stats": {
                    "hp": 65,
                    "attack": 60,
                    "defense": 70,
                    "special_attack": 85,
                    "special_defense": 75,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 60,
                    "defense": 70,
                    "special_attack": 85,
                    "special_defense": 75,
                    "speed": 40
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 79,
                "gender_ratio": 255,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Porygon",
                "event_name": "Barrier Porygon",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PORYGON",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Conversion",
                    "Conversion 2",
                    "Barrier"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 21 to 27, 2003",
                        "start_date": "2003-02-21",
                        "end_date": "2003-02-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rock Throw Omanyte": [
            {
                "species": "Omanyte",
                "form": null,
                "national_dex_number": 138,
                "base_stats": {
                    "hp": 35,
                    "attack": 40,
                    "defense": 100,
                    "special_attack": 90,
                    "special_defense": 55,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 40,
                    "defense": 100,
                    "special_attack": 90,
                    "special_defense": 55,
                    "speed": 35
                },
                "type_1": "Rock",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 71,
                "gender_ratio": 31,
                "egg_cycles": 30,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Water3",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Omanyte",
                "event_name": "Rock Throw Omanyte",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "OMANYTE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Constrict",
                    "Withdraw",
                    "Rock Throw"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 21 to 27, 2003",
                        "start_date": "2003-02-21",
                        "end_date": "2003-02-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rock Throw Kabuto": [
            {
                "species": "Kabuto",
                "form": null,
                "national_dex_number": 140,
                "base_stats": {
                    "hp": 30,
                    "attack": 80,
                    "defense": 90,
                    "special_attack": 55,
                    "special_defense": 45,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 30,
                    "attack": 80,
                    "defense": 90,
                    "special_attack": 55,
                    "special_defense": 45,
                    "speed": 55
                },
                "type_1": "Rock",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 71,
                "gender_ratio": 31,
                "egg_cycles": 30,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Water3",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Kabuto",
                "event_name": "Rock Throw Kabuto",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "KABUTO",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Harden",
                    "Rock Throw"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 21 to 27, 2003",
                        "start_date": "2003-02-21",
                        "end_date": "2003-02-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rock Throw Aerodactyl": [
            {
                "species": "Aerodactyl",
                "form": null,
                "national_dex_number": 142,
                "base_stats": {
                    "hp": 80,
                    "attack": 105,
                    "defense": 65,
                    "special_attack": 60,
                    "special_defense": 75,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 80,
                    "attack": 105,
                    "defense": 65,
                    "special_attack": 60,
                    "special_defense": 75,
                    "speed": 130
                },
                "type_1": "Rock",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 180,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Aerodactyl",
                "event_name": "Rock Throw Aerodactyl",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "AERODACTYL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Wing Attack",
                    "Rock Throw"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 21 to 27, 2003",
                        "start_date": "2003-02-21",
                        "end_date": "2003-02-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Lovely Kiss Snorlax": [
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
                    "hp": 160,
                    "attack": 110,
                    "defense": 65,
                    "special_attack": 65,
                    "special_defense": 110,
                    "speed": 30
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Snorlax",
                "event_name": "Lovely Kiss Snorlax",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SNORLAX",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Lovely Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 7 to 13, 2003",
                        "start_date": "2003-02-07",
                        "end_date": "2003-02-13"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Splash Snorlax": [
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
                    "hp": 160,
                    "attack": 110,
                    "defense": 65,
                    "special_attack": 65,
                    "special_defense": 110,
                    "speed": 30
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Snorlax",
                "event_name": "Splash Snorlax",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SNORLAX",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Splash"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 10 to 16, 2003",
                        "start_date": "2003-01-10",
                        "end_date": "2003-01-16"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Kiss Snorlax": [
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
                    "hp": 160,
                    "attack": 110,
                    "defense": 65,
                    "special_attack": 65,
                    "special_defense": 110,
                    "speed": 30
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Snorlax",
                "event_name": "Sweet Kiss Snorlax",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SNORLAX",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 7 to 13, 2003; February 21 to 27, 2003",
                        "start_date": "2003-02-07",
                        "end_date": "2003-02-27",
                        "periods": [
                            {
                                "start": "2003-02-07",
                                "end": "2003-02-13"
                            },
                            {
                                "start": "2003-02-21",
                                "end": "2003-02-27"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Articuno": [
            {
                "species": "Articuno",
                "form": null,
                "national_dex_number": 144,
                "base_stats": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 100,
                    "special_attack": 95,
                    "special_defense": 125,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 85,
                    "defense": 100,
                    "special_attack": 95,
                    "special_defense": 125,
                    "speed": 85
                },
                "type_1": "Ice",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Articuno",
                "event_name": "Shiny Articuno",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "ARTICUNO",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Mist",
                    "Agility",
                    "Mind Reader",
                    "Ice Beam"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 30 to December 20, 2001; February 15 to 21, 2002",
                        "start_date": "2001-11-30",
                        "end_date": "2002-02-21",
                        "periods": [
                            {
                                "start": "2001-11-30",
                                "end": "2001-12-20"
                            },
                            {
                                "start": "2002-02-15",
                                "end": "2002-02-21"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Zapdos": [
            {
                "species": "Zapdos",
                "form": null,
                "national_dex_number": 145,
                "base_stats": {
                    "hp": 90,
                    "attack": 90,
                    "defense": 85,
                    "special_attack": 125,
                    "special_defense": 90,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 90,
                    "defense": 85,
                    "special_attack": 125,
                    "special_defense": 90,
                    "speed": 100
                },
                "type_1": "Electric",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Zapdos",
                "event_name": "Shiny Zapdos",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "ZAPDOS",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Thunder Wave",
                    "Agility",
                    "Detect",
                    "Drill Peck"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 30 to December 20, 2001; February 15 to 21, 2002",
                        "start_date": "2001-11-30",
                        "end_date": "2002-02-21",
                        "periods": [
                            {
                                "start": "2001-11-30",
                                "end": "2001-12-20"
                            },
                            {
                                "start": "2002-02-15",
                                "end": "2002-02-21"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Moltres": [
            {
                "species": "Moltres",
                "form": null,
                "national_dex_number": 146,
                "base_stats": {
                    "hp": 90,
                    "attack": 100,
                    "defense": 90,
                    "special_attack": 125,
                    "special_defense": 85,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 100,
                    "defense": 90,
                    "special_attack": 125,
                    "special_defense": 85,
                    "speed": 90
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 261,
                "gender_ratio": 255,
                "egg_cycles": 80,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Moltres",
                "event_name": "Shiny Moltres",
                "level": 50,
                "shiny": true,
                "is_egg": false,
                "nickname": "MOLTRES",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Fire Spin",
                    "Agility",
                    "Endure",
                    "Flamethrower"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 30 to December 20, 2001; February 15 to 21, 2002",
                        "start_date": "2001-11-30",
                        "end_date": "2002-02-21",
                        "periods": [
                            {
                                "start": "2001-11-30",
                                "end": "2001-12-20"
                            },
                            {
                                "start": "2002-02-15",
                                "end": "2002-02-21"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Hydro Pump Dratini": [
            {
                "species": "Dratini",
                "form": null,
                "national_dex_number": 147,
                "base_stats": {
                    "hp": 41,
                    "attack": 64,
                    "defense": 45,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 41,
                    "attack": 64,
                    "defense": 45,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 50
                },
                "type_1": "Dragon",
                "type_2": "Dragon",
                "catch_rate": 45,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Dragon",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Dratini",
                "event_name": "Hydro Pump Dratini",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DRATINI",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Wrap",
                    "Leer",
                    "Hydro Pump"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 9 to 29, 2002",
                        "start_date": "2002-08-09",
                        "end_date": "2002-08-29"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Mewtwo": [
            {
                "species": "Mewtwo",
                "form": null,
                "national_dex_number": 150,
                "base_stats": {
                    "hp": 106,
                    "attack": 110,
                    "defense": 90,
                    "special_attack": 154,
                    "special_defense": 90,
                    "speed": 130
                },
                "ev_yield": {
                    "hp": 106,
                    "attack": 110,
                    "defense": 90,
                    "special_attack": 154,
                    "special_defense": 90,
                    "speed": 130
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 3,
                "base_experience": 306,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Mewtwo",
                "event_name": "Shiny Mewtwo",
                "level": 70,
                "shiny": true,
                "is_egg": false,
                "nickname": "MEWTWO",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Psych Up",
                    "Future Sight",
                    "Mist",
                    "Psychic"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "September 27 to October 3, 2002; February 14 to 20, 2003",
                        "start_date": "2002-09-27",
                        "end_date": "2003-02-20",
                        "periods": [
                            {
                                "start": "2002-09-27",
                                "end": "2002-10-03"
                            },
                            {
                                "start": "2003-02-14",
                                "end": "2003-02-20"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Mew": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Mew",
                "event_name": "Shiny Mew",
                "level": 5,
                "shiny": true,
                "is_egg": false,
                "nickname": "MEW",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Pound"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 22 to 28, 2002",
                        "start_date": "2002-11-22",
                        "end_date": "2002-11-28"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Petal Dance Chikorita": [
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
                    "hp": 45,
                    "attack": 49,
                    "defense": 65,
                    "special_attack": 49,
                    "special_defense": 65,
                    "speed": 45
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Chikorita",
                "event_name": "Petal Dance Chikorita",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CHIKORITA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 28, 2001 to January 31, 2002; April 12 to June 7, 2002; January 17 to 23, 2003",
                        "start_date": "2001-12-28",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2001-12-28",
                                "end": "2002-01-31"
                            },
                            {
                                "start": "2002-04-12",
                                "end": "2002-06-07"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Meganium": [
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
                    "hp": 80,
                    "attack": 82,
                    "defense": 100,
                    "special_attack": 83,
                    "special_defense": 100,
                    "speed": 80
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Meganium",
                "event_name": "Shiny Meganium",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "MEGANIUM",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Reflect",
                    "PoisonPowder",
                    "Synthesis",
                    "Body Slam"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 6 to 12, 2002",
                        "start_date": "2002-12-06",
                        "end_date": "2002-12-12"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Double-Edge Cyndaquil": [
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
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special_attack": 60,
                    "special_defense": 50,
                    "speed": 65
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cyndaquil",
                "event_name": "Double-Edge Cyndaquil",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CYNDAQUIL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Double-Edge"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 28, 2001 to January 31, 2002; January 17 to 23, 2003",
                        "start_date": "2001-12-28",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2001-12-28",
                                "end": "2002-01-31"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Typhlosion": [
            {
                "species": "Typhlosion",
                "form": null,
                "national_dex_number": 157,
                "base_stats": {
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 78,
                    "attack": 84,
                    "defense": 78,
                    "special_attack": 109,
                    "special_defense": 85,
                    "speed": 100
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 240,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Typhlosion",
                "event_name": "Shiny Typhlosion",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "TYPHLOSION",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "SmokeScreen",
                    "Ember",
                    "Quick Attack",
                    "Flame Wheel"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 6 to 12, 2002",
                        "start_date": "2002-12-06",
                        "end_date": "2002-12-12"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Submission Totodile": [
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
                    "hp": 50,
                    "attack": 65,
                    "defense": 64,
                    "special_attack": 44,
                    "special_defense": 48,
                    "speed": 43
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Totodile",
                "event_name": "Submission Totodile",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "TOTODILE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Leer",
                    "Submission"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 28, 2001 to January 31, 2002; January 17 to 23, 2003",
                        "start_date": "2001-12-28",
                        "end_date": "2003-01-23",
                        "periods": [
                            {
                                "start": "2001-12-28",
                                "end": "2002-01-31"
                            },
                            {
                                "start": "2003-01-17",
                                "end": "2003-01-23"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Feraligatr": [
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
                    "hp": 85,
                    "attack": 105,
                    "defense": 100,
                    "special_attack": 79,
                    "special_defense": 83,
                    "speed": 78
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Feraligatr",
                "event_name": "Shiny Feraligatr",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "FERALIGATR",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Water Gun",
                    "Bite",
                    "Scary Face",
                    "Slash"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 6 to 12, 2002",
                        "start_date": "2002-12-06",
                        "end_date": "2002-12-12"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Dizzy Punch Sentret": [
            {
                "species": "Sentret",
                "form": null,
                "national_dex_number": 161,
                "base_stats": {
                    "hp": 35,
                    "attack": 46,
                    "defense": 34,
                    "special_attack": 35,
                    "special_defense": 45,
                    "speed": 20
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 46,
                    "defense": 34,
                    "special_attack": 35,
                    "special_defense": 45,
                    "speed": 20
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 255,
                "base_experience": 43,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Sentret",
                "event_name": "Dizzy Punch Sentret",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SENTRET",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Defense Curl",
                    "Dizzy Punch"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 10 to 16, 2003",
                        "start_date": "2003-01-10",
                        "end_date": "2003-01-16"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Night Shade Hoothoot": [
            {
                "species": "Hoothoot",
                "form": null,
                "national_dex_number": 163,
                "base_stats": {
                    "hp": 60,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 36,
                    "special_defense": 56,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 36,
                    "special_defense": 56,
                    "speed": 50
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 52,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Hoothoot",
                "event_name": "Night Shade Hoothoot",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "HOOTHOOT",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Night Shade"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 27, 2002 to January 2, 2003",
                        "start_date": "2002-12-27",
                        "end_date": "2003-01-02"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Barrier Ledyba": [
            {
                "species": "Ledyba",
                "form": null,
                "national_dex_number": 165,
                "base_stats": {
                    "hp": 40,
                    "attack": 20,
                    "defense": 30,
                    "special_attack": 40,
                    "special_defense": 80,
                    "speed": 55
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 20,
                    "defense": 30,
                    "special_attack": 40,
                    "special_defense": 80,
                    "speed": 55
                },
                "type_1": "Bug",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 53,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Ledyba",
                "event_name": "Barrier Ledyba",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "LEDYBA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Barrier"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Growth Spinarak": [
            {
                "species": "Spinarak",
                "form": null,
                "national_dex_number": 167,
                "base_stats": {
                    "hp": 40,
                    "attack": 60,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 60,
                    "defense": 40,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 30
                },
                "type_1": "Bug",
                "type_2": "Poison",
                "catch_rate": 255,
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 15,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Spinarak",
                "event_name": "Growth Spinarak",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SPINARAK",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Poison Sting",
                    "String Shot",
                    "Growth"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Light Screen Chinchou": [
            {
                "species": "Chinchou",
                "form": null,
                "national_dex_number": 170,
                "base_stats": {
                    "hp": 75,
                    "attack": 38,
                    "defense": 38,
                    "special_attack": 56,
                    "special_defense": 56,
                    "speed": 67
                },
                "ev_yield": {
                    "hp": 75,
                    "attack": 38,
                    "defense": 38,
                    "special_attack": 56,
                    "special_defense": 56,
                    "speed": 67
                },
                "type_1": "Water",
                "type_2": "Electric",
                "catch_rate": 190,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water2",
                "egg_group_2": "Water2",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Chinchou",
                "event_name": "Light Screen Chinchou",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CHINCHOU",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bubble",
                    "Thunder Wave",
                    "Supersonic",
                    "Light Screen"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "July 12 to August 8, 2002",
                        "start_date": "2002-07-12",
                        "end_date": "2002-08-08"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Dizzy Punch Pichu": [
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Dizzy Punch Pichu",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PICHU",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Dizzy Punch"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 4 to 10, 2002",
                        "start_date": "2002-10-04",
                        "end_date": "2002-10-10"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Petal Dance Pichu": [
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Petal Dance Pichu",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PICHU",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "April 12 to May 4, 2002",
                        "start_date": "2002-04-12",
                        "end_date": "2002-05-04"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Scary Face Pichu": [
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Scary Face Pichu",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PICHU",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Scary Face"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 25 to 31, 2002",
                        "start_date": "2002-10-25",
                        "end_date": "2002-10-31"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sing Pichu": [
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
                    "hp": 20,
                    "attack": 40,
                    "defense": 15,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 60
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pichu",
                "event_name": "Sing Pichu",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PICHU",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "ThunderShock",
                    "Charm",
                    "Sing"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 22 to April 11, 2002",
                        "start_date": "2002-03-22",
                        "end_date": "2002-04-11"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Petal Dance Cleffa": [
            {
                "species": "Cleffa",
                "form": null,
                "national_dex_number": 173,
                "base_stats": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 44,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cleffa",
                "event_name": "Petal Dance Cleffa",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CLEFFA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Charm",
                    "Encore",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "April 12 to May 4, 2002",
                        "start_date": "2002-04-12",
                        "end_date": "2002-05-04"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Scary Face Cleffa": [
            {
                "species": "Cleffa",
                "form": null,
                "national_dex_number": 173,
                "base_stats": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 44,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cleffa",
                "event_name": "Scary Face Cleffa",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CLEFFA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Charm",
                    "Encore",
                    "Scary Face"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 25 to 31, 2002",
                        "start_date": "2002-10-25",
                        "end_date": "2002-10-31"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Swift Cleffa": [
            {
                "species": "Cleffa",
                "form": null,
                "national_dex_number": 173,
                "base_stats": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 25,
                    "defense": 28,
                    "special_attack": 45,
                    "special_defense": 55,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 150,
                "base_experience": 44,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 140,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Cleffa",
                "event_name": "Swift Cleffa",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "CLEFFA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Charm",
                    "Encore",
                    "Swift"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 22 to April 11, 2002",
                        "start_date": "2002-03-22",
                        "end_date": "2002-04-11"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Mimic Igglybuff": [
            {
                "species": "Igglybuff",
                "form": null,
                "national_dex_number": 174,
                "base_stats": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 170,
                "base_experience": 42,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Igglybuff",
                "event_name": "Mimic Igglybuff",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "IGGLYBUFF",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Sing",
                    "Charm",
                    "Defense Curl",
                    "Mimic"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 22 to April 11, 2002",
                        "start_date": "2002-03-22",
                        "end_date": "2002-04-11"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Petal Dance Igglybuff": [
            {
                "species": "Igglybuff",
                "form": null,
                "national_dex_number": 174,
                "base_stats": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 170,
                "base_experience": 42,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Igglybuff",
                "event_name": "Petal Dance Igglybuff",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "IGGLYBUFF",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Sing",
                    "Charm",
                    "Defense Curl",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "April 12 to May 4, 2002",
                        "start_date": "2002-04-12",
                        "end_date": "2002-05-04"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Scary Face Igglybuff": [
            {
                "species": "Igglybuff",
                "form": null,
                "national_dex_number": 174,
                "base_stats": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 40,
                    "special_defense": 20,
                    "speed": 15
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 170,
                "base_experience": 42,
                "gender_ratio": 191,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Igglybuff",
                "event_name": "Scary Face Igglybuff",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "IGGLYBUFF",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Sing",
                    "Charm",
                    "Defense Curl",
                    "Scary Face"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 25 to 31, 2002",
                        "start_date": "2002-10-25",
                        "end_date": "2002-10-31"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Safeguard Natu": [
            {
                "species": "Natu",
                "form": null,
                "national_dex_number": 177,
                "base_stats": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 45,
                    "special_attack": 70,
                    "special_defense": 45,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 40,
                    "attack": 50,
                    "defense": 45,
                    "special_attack": 70,
                    "special_defense": 45,
                    "speed": 70
                },
                "type_1": "Psychic",
                "type_2": "Flying",
                "catch_rate": 190,
                "base_experience": 64,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Natu",
                "event_name": "Safeguard Natu",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "NATU",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Peck",
                    "Leer",
                    "Safeguard"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 30 to September 26, 2002; November 29 to December 5, 2002",
                        "start_date": "2002-08-30",
                        "end_date": "2002-12-05",
                        "periods": [
                            {
                                "start": "2002-08-30",
                                "end": "2002-09-26"
                            },
                            {
                                "start": "2002-11-29",
                                "end": "2002-12-05"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Dizzy Punch Marill": [
            {
                "species": "Marill",
                "form": null,
                "national_dex_number": 183,
                "base_stats": {
                    "hp": 70,
                    "attack": 20,
                    "defense": 50,
                    "special_attack": 20,
                    "special_defense": 50,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 20,
                    "defense": 50,
                    "special_attack": 20,
                    "special_defense": 50,
                    "speed": 40
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 88,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Marill",
                "event_name": "Dizzy Punch Marill",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MARILL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Defense Curl",
                    "Dizzy Punch"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "June 8 to 21, 2002",
                        "start_date": "2002-06-08",
                        "end_date": "2002-06-21"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Hydro Pump Marill": [
            {
                "species": "Marill",
                "form": null,
                "national_dex_number": 183,
                "base_stats": {
                    "hp": 70,
                    "attack": 20,
                    "defense": 50,
                    "special_attack": 20,
                    "special_defense": 50,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 20,
                    "defense": 50,
                    "special_attack": 20,
                    "special_defense": 50,
                    "speed": 40
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 88,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Marill",
                "event_name": "Hydro Pump Marill",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MARILL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Defense Curl",
                    "Hydro Pump"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 22 to March 14, 2002",
                        "start_date": "2002-02-22",
                        "end_date": "2002-03-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Scary Face Marill": [
            {
                "species": "Marill",
                "form": null,
                "national_dex_number": 183,
                "base_stats": {
                    "hp": 70,
                    "attack": 20,
                    "defense": 50,
                    "special_attack": 20,
                    "special_defense": 50,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 20,
                    "defense": 50,
                    "special_attack": 20,
                    "special_defense": 50,
                    "speed": 40
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 88,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Fairy",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Marill",
                "event_name": "Scary Face Marill",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MARILL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Defense Curl",
                    "Scary Face"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 25 to 31, 2002",
                        "start_date": "2002-10-25",
                        "end_date": "2002-10-31"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Substitute Sudowoodo": [
            {
                "species": "Sudowoodo",
                "form": null,
                "national_dex_number": 185,
                "base_stats": {
                    "hp": 70,
                    "attack": 100,
                    "defense": 115,
                    "special_attack": 30,
                    "special_defense": 65,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 70,
                    "attack": 100,
                    "defense": 115,
                    "special_attack": 30,
                    "special_defense": 65,
                    "speed": 30
                },
                "type_1": "Rock",
                "type_2": "Rock",
                "catch_rate": 65,
                "base_experience": 144,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Mineral",
                "egg_group_2": "Mineral",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Sudowoodo",
                "event_name": "Substitute Sudowoodo",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SUDOWOODO",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Rock Throw",
                    "Mimic",
                    "Substitute"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 21 to 27, 2003",
                        "start_date": "2003-02-21",
                        "end_date": "2003-02-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Agility Hoppip": [
            {
                "species": "Hoppip",
                "form": null,
                "national_dex_number": 187,
                "base_stats": {
                    "hp": 35,
                    "attack": 35,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 55,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 35,
                    "defense": 40,
                    "special_attack": 35,
                    "special_defense": 55,
                    "speed": 50
                },
                "type_1": "Grass",
                "type_2": "Flying",
                "catch_rate": 255,
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Fairy",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Hoppip",
                "event_name": "Agility Hoppip",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "HOPPIP",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Splash",
                    "Synthesis",
                    "Tail Whip",
                    "Agility"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 3 to 9, 2003",
                        "start_date": "2003-01-03",
                        "end_date": "2003-01-09"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Mimic Aipom": [
            {
                "species": "Aipom",
                "form": null,
                "national_dex_number": 190,
                "base_stats": {
                    "hp": 55,
                    "attack": 70,
                    "defense": 55,
                    "special_attack": 40,
                    "special_defense": 55,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 70,
                    "defense": 55,
                    "special_attack": 40,
                    "special_defense": 55,
                    "speed": 85
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 72,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Aipom",
                "event_name": "Mimic Aipom",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "AIPOM",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Tail Whip",
                    "Mimic"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 10 to 16, 2003",
                        "start_date": "2003-01-10",
                        "end_date": "2003-01-16"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Splash Sunkern": [
            {
                "species": "Sunkern",
                "form": null,
                "national_dex_number": 191,
                "base_stats": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 30,
                    "attack": 30,
                    "defense": 30,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 30
                },
                "type_1": "Grass",
                "type_2": "Grass",
                "catch_rate": 235,
                "base_experience": 36,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Grass",
                "egg_group_2": "Grass",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Sunkern",
                "event_name": "Splash Sunkern",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SUNKERN",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Absorb",
                    "Growth",
                    "Splash"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 3 to 9, 2003",
                        "start_date": "2003-01-03",
                        "end_date": "2003-01-09"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Steel Wing Yanma": [
            {
                "species": "Yanma",
                "form": null,
                "national_dex_number": 193,
                "base_stats": {
                    "hp": 65,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 75,
                    "special_defense": 45,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 75,
                    "special_defense": 45,
                    "speed": 95
                },
                "type_1": "Bug",
                "type_2": "Flying",
                "catch_rate": 75,
                "base_experience": 78,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Yanma",
                "event_name": "Steel Wing Yanma",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "YANMA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Foresight",
                    "Steel Wing"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 22 to March 14, 2002",
                        "start_date": "2002-02-22",
                        "end_date": "2002-03-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Kiss Yanma": [
            {
                "species": "Yanma",
                "form": null,
                "national_dex_number": 193,
                "base_stats": {
                    "hp": 65,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 75,
                    "special_defense": 45,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 65,
                    "defense": 45,
                    "special_attack": 75,
                    "special_defense": 45,
                    "speed": 95
                },
                "type_1": "Bug",
                "type_2": "Flying",
                "catch_rate": 75,
                "base_experience": 78,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Yanma",
                "event_name": "Sweet Kiss Yanma",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "YANMA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Foresight",
                    "Sweet Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Belly Drum Wooper": [
            {
                "species": "Wooper",
                "form": null,
                "national_dex_number": 194,
                "base_stats": {
                    "hp": 55,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 15
                },
                "type_1": "Water",
                "type_2": "Ground",
                "catch_rate": 255,
                "base_experience": 42,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Wooper",
                "event_name": "Belly Drum Wooper",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "WOOPER",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Tail Whip",
                    "Belly Drum"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "May 5 to June 21, 2002",
                        "start_date": "2002-05-05",
                        "end_date": "2002-06-21"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Scary Face Wooper": [
            {
                "species": "Wooper",
                "form": null,
                "national_dex_number": 194,
                "base_stats": {
                    "hp": 55,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 45,
                    "defense": 45,
                    "special_attack": 25,
                    "special_defense": 25,
                    "speed": 15
                },
                "type_1": "Water",
                "type_2": "Ground",
                "catch_rate": 255,
                "base_experience": 42,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Wooper",
                "event_name": "Scary Face Wooper",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "WOOPER",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Tail Whip",
                    "Scary Face"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 25 to 31, 2002",
                        "start_date": "2002-10-25",
                        "end_date": "2002-10-31"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Beat Up Murkrow": [
            {
                "species": "Murkrow",
                "form": null,
                "national_dex_number": 198,
                "base_stats": {
                    "hp": 60,
                    "attack": 85,
                    "defense": 42,
                    "special_attack": 85,
                    "special_defense": 42,
                    "speed": 91
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 85,
                    "defense": 42,
                    "special_attack": 85,
                    "special_defense": 42,
                    "speed": 91
                },
                "type_1": "Dark",
                "type_2": "Flying",
                "catch_rate": 30,
                "base_experience": 81,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Flying",
                "egg_group_2": "Flying",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Murkrow",
                "event_name": "Beat Up Murkrow",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MURKROW",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Peck",
                    "Beat Up"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 30 to September 26, 2002; December 27, 2002 to January 2, 2003",
                        "start_date": "2002-08-30",
                        "end_date": "2003-01-02",
                        "periods": [
                            {
                                "start": "2002-08-30",
                                "end": "2002-09-26"
                            },
                            {
                                "start": "2002-12-27",
                                "end": "2003-01-02"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Hypnosis Misdreavus": [
            {
                "species": "Misdreavus",
                "form": null,
                "national_dex_number": 200,
                "base_stats": {
                    "hp": 60,
                    "attack": 60,
                    "defense": 60,
                    "special_attack": 85,
                    "special_defense": 85,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 60,
                    "defense": 60,
                    "special_attack": 85,
                    "special_defense": 85,
                    "speed": 85
                },
                "type_1": "Ghost",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 87,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 35,
                "growth_rate": "Fast",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Misdreavus",
                "event_name": "Hypnosis Misdreavus",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MISDREAVUS",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Growl",
                    "Psywave",
                    "Hypnosis"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 1 to 7, 2002; December 27, 2002 to January 2, 2003",
                        "start_date": "2002-11-01",
                        "end_date": "2003-01-02",
                        "periods": [
                            {
                                "start": "2002-11-01",
                                "end": "2002-11-07"
                            },
                            {
                                "start": "2002-12-27",
                                "end": "2003-01-02"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Mimic Wobbuffet": [
            {
                "species": "Wobbuffet",
                "form": null,
                "national_dex_number": 202,
                "base_stats": {
                    "hp": 190,
                    "attack": 33,
                    "defense": 58,
                    "special_attack": 33,
                    "special_defense": 58,
                    "speed": 33
                },
                "ev_yield": {
                    "hp": 190,
                    "attack": 33,
                    "defense": 58,
                    "special_attack": 33,
                    "special_defense": 58,
                    "speed": 33
                },
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 142,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Wobbuffet",
                "event_name": "Mimic Wobbuffet",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "WOBBUFFET",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Mirror Coat",
                    "Safeguard",
                    "Destiny Bond",
                    "Mimic"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 31 to February 6, 2003",
                        "start_date": "2003-01-31",
                        "end_date": "2003-02-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Substitute Pineco": [
            {
                "species": "Pineco",
                "form": null,
                "national_dex_number": 204,
                "base_stats": {
                    "hp": 50,
                    "attack": 65,
                    "defense": 90,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 15
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 65,
                    "defense": 90,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 15
                },
                "type_1": "Bug",
                "type_2": "Bug",
                "catch_rate": 190,
                "base_experience": 58,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Pineco",
                "event_name": "Substitute Pineco",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PINECO",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Protect",
                    "Substitute"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Fury Attack Dunsparce": [
            {
                "species": "Dunsparce",
                "form": null,
                "national_dex_number": 206,
                "base_stats": {
                    "hp": 100,
                    "attack": 70,
                    "defense": 70,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 100,
                    "attack": 70,
                    "defense": 70,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 190,
                "base_experience": 145,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Dunsparce",
                "event_name": "Fury Attack Dunsparce",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DUNSPARCE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Rage",
                    "Defense Curl",
                    "Fury Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 31 to February 6, 2003",
                        "start_date": "2003-01-31",
                        "end_date": "2003-02-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Horn Drill Dunsparce": [
            {
                "species": "Dunsparce",
                "form": null,
                "national_dex_number": 206,
                "base_stats": {
                    "hp": 100,
                    "attack": 70,
                    "defense": 70,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "ev_yield": {
                    "hp": 100,
                    "attack": 70,
                    "defense": 70,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 190,
                "base_experience": 145,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Dunsparce",
                "event_name": "Horn Drill Dunsparce",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DUNSPARCE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Rage",
                    "Defense Curl",
                    "Horn Drill"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 22 to March 14, 2002",
                        "start_date": "2002-02-22",
                        "end_date": "2002-03-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Lovely Kiss Snubbull": [
            {
                "species": "Snubbull",
                "form": null,
                "national_dex_number": 209,
                "base_stats": {
                    "hp": 60,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 30
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 30
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 190,
                "base_experience": 60,
                "gender_ratio": 191,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Fairy",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Snubbull",
                "event_name": "Lovely Kiss Snubbull",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SNUBBULL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Scary Face",
                    "Tail Whip",
                    "Lovely Kiss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 22 to March 14, 2002",
                        "start_date": "2002-02-22",
                        "end_date": "2002-03-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Double-Edge Qwilfish": [
            {
                "species": "Qwilfish",
                "form": null,
                "national_dex_number": 211,
                "base_stats": {
                    "hp": 65,
                    "attack": 95,
                    "defense": 75,
                    "special_attack": 55,
                    "special_defense": 55,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 95,
                    "defense": 75,
                    "special_attack": 55,
                    "special_defense": 55,
                    "speed": 85
                },
                "type_1": "Water",
                "type_2": "Poison",
                "catch_rate": 45,
                "base_experience": 88,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water2",
                "egg_group_2": "Water2",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Qwilfish",
                "event_name": "Double-Edge Qwilfish",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "QWILFISH",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Poison Sting",
                    "Double-Edge"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 22 to March 14, 2002",
                        "start_date": "2002-02-22",
                        "end_date": "2002-03-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Seismic Toss Heracross": [
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
                    "hp": 80,
                    "attack": 125,
                    "defense": 75,
                    "special_attack": 40,
                    "special_defense": 95,
                    "speed": 85
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Heracross",
                "event_name": "Seismic Toss Heracross",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "HERACROSS",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Leer",
                    "Seismic Toss"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 28 to March 6, 2003",
                        "start_date": "2003-02-28",
                        "end_date": "2003-03-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Moonlight Sneasel": [
            {
                "species": "Sneasel",
                "form": null,
                "national_dex_number": 215,
                "base_stats": {
                    "hp": 55,
                    "attack": 95,
                    "defense": 55,
                    "special_attack": 35,
                    "special_defense": 75,
                    "speed": 115
                },
                "ev_yield": {
                    "hp": 55,
                    "attack": 95,
                    "defense": 55,
                    "special_attack": 35,
                    "special_defense": 75,
                    "speed": 115
                },
                "type_1": "Dark",
                "type_2": "Ice",
                "catch_rate": 60,
                "base_experience": 86,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 35,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Sneasel",
                "event_name": "Moonlight Sneasel",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SNEASEL",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Leer",
                    "Moonlight"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 27, 2002 to January 2, 2003",
                        "start_date": "2002-12-27",
                        "end_date": "2003-01-02"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Sweet Scent Teddiursa": [
            {
                "species": "Teddiursa",
                "form": null,
                "national_dex_number": 216,
                "base_stats": {
                    "hp": 60,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 60,
                    "attack": 80,
                    "defense": 50,
                    "special_attack": 50,
                    "special_defense": 50,
                    "speed": 40
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 120,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Teddiursa",
                "event_name": "Sweet Scent Teddiursa",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "TEDDIURSA",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Scratch",
                    "Leer",
                    "Sweet Scent"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 31 to February 6, 2003",
                        "start_date": "2003-01-31",
                        "end_date": "2003-02-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Whirlwind Swinub": [
            {
                "species": "Swinub",
                "form": null,
                "national_dex_number": 220,
                "base_stats": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 50
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 50,
                    "defense": 40,
                    "special_attack": 30,
                    "special_defense": 30,
                    "speed": 50
                },
                "type_1": "Ice",
                "type_2": "Ground",
                "catch_rate": 225,
                "base_experience": 50,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Swinub",
                "event_name": "Whirlwind Swinub",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SWINUB",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Whirlwind"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 20 to 26, 2002",
                        "start_date": "2002-12-20",
                        "end_date": "2002-12-26"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Amnesia Remoraid": [
            {
                "species": "Remoraid",
                "form": null,
                "national_dex_number": 223,
                "base_stats": {
                    "hp": 35,
                    "attack": 65,
                    "defense": 35,
                    "special_attack": 65,
                    "special_defense": 35,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 65,
                    "defense": 35,
                    "special_attack": 65,
                    "special_defense": 35,
                    "speed": 65
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Water2",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Remoraid",
                "event_name": "Amnesia Remoraid",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "REMORAID",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Amnesia"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "February 22 to March 14, 2002",
                        "start_date": "2002-02-22",
                        "end_date": "2002-03-14"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Mist Remoraid": [
            {
                "species": "Remoraid",
                "form": null,
                "national_dex_number": 223,
                "base_stats": {
                    "hp": 35,
                    "attack": 65,
                    "defense": 35,
                    "special_attack": 65,
                    "special_defense": 35,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 65,
                    "defense": 35,
                    "special_attack": 65,
                    "special_defense": 35,
                    "speed": 65
                },
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 190,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Water2",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Remoraid",
                "event_name": "Mist Remoraid",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "REMORAID",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Water Gun",
                    "Mist"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "July 12 to August 8, 2002",
                        "start_date": "2002-07-12",
                        "end_date": "2002-08-08"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Pay Day Delibird": [
            {
                "species": "Delibird",
                "form": null,
                "national_dex_number": 225,
                "base_stats": {
                    "hp": 45,
                    "attack": 55,
                    "defense": 45,
                    "special_attack": 65,
                    "special_defense": 45,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 55,
                    "defense": 45,
                    "special_attack": 65,
                    "special_defense": 45,
                    "speed": 75
                },
                "type_1": "Ice",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 116,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Delibird",
                "event_name": "Pay Day Delibird",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DELIBIRD",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Present",
                    "Pay Day"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 21 to 27, 2001",
                        "start_date": "2001-12-21",
                        "end_date": "2001-12-27"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Spikes Delibird": [
            {
                "species": "Delibird",
                "form": null,
                "national_dex_number": 225,
                "base_stats": {
                    "hp": 45,
                    "attack": 55,
                    "defense": 45,
                    "special_attack": 65,
                    "special_defense": 45,
                    "speed": 75
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 55,
                    "defense": 45,
                    "special_attack": 65,
                    "special_defense": 45,
                    "speed": 75
                },
                "type_1": "Ice",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 116,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Water1",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Delibird",
                "event_name": "Spikes Delibird",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "DELIBIRD",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Present",
                    "Spikes"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 20 to 26, 2002",
                        "start_date": "2002-12-20",
                        "end_date": "2002-12-26"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Gust Mantine": [
            {
                "species": "Mantine",
                "form": null,
                "national_dex_number": 226,
                "base_stats": {
                    "hp": 65,
                    "attack": 40,
                    "defense": 70,
                    "special_attack": 80,
                    "special_defense": 140,
                    "speed": 70
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 40,
                    "defense": 70,
                    "special_attack": 80,
                    "special_defense": 140,
                    "speed": 70
                },
                "type_1": "Water",
                "type_2": "Flying",
                "catch_rate": 25,
                "base_experience": 170,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Water1",
                "egg_group_2": "Water1",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Mantine",
                "event_name": "Gust Mantine",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MANTINE",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Bubble",
                    "Gust"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "July 12 to August 8, 2002",
                        "start_date": "2002-07-12",
                        "end_date": "2002-08-08"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Fury Cutter Skarmory": [
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
                    "hp": 65,
                    "attack": 80,
                    "defense": 140,
                    "special_attack": 40,
                    "special_defense": 70,
                    "speed": 70
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Skarmory",
                "event_name": "Fury Cutter Skarmory",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SKARMORY",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Leer",
                    "Peck",
                    "Fury Cutter"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "August 30 to September 26, 2002",
                        "start_date": "2002-08-30",
                        "end_date": "2002-09-26"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Absorb Phanpy": [
            {
                "species": "Phanpy",
                "form": null,
                "national_dex_number": 231,
                "base_stats": {
                    "hp": 90,
                    "attack": 60,
                    "defense": 60,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 40
                },
                "ev_yield": {
                    "hp": 90,
                    "attack": 60,
                    "defense": 60,
                    "special_attack": 40,
                    "special_defense": 40,
                    "speed": 40
                },
                "type_1": "Ground",
                "type_2": "Ground",
                "catch_rate": 120,
                "base_experience": 66,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Phanpy",
                "event_name": "Absorb Phanpy",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "PHANPY",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Absorb"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 31 to February 6, 2003",
                        "start_date": "2003-01-31",
                        "end_date": "2003-02-06"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Safeguard Stantler": [
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
                    "hp": 73,
                    "attack": 95,
                    "defense": 62,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 85
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Stantler",
                "event_name": "Safeguard Stantler",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "STANTLER",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Safeguard"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 10 to 16, 2003",
                        "start_date": "2003-01-10",
                        "end_date": "2003-01-16"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rage Tyrogue": [
            {
                "species": "Tyrogue",
                "form": null,
                "national_dex_number": 236,
                "base_stats": {
                    "hp": 35,
                    "attack": 35,
                    "defense": 35,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 35
                },
                "ev_yield": {
                    "hp": 35,
                    "attack": 35,
                    "defense": 35,
                    "special_attack": 35,
                    "special_defense": 35,
                    "speed": 35
                },
                "type_1": "Fighting",
                "type_2": "Fighting",
                "catch_rate": 75,
                "base_experience": 42,
                "gender_ratio": 0,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Tyrogue",
                "event_name": "Rage Tyrogue",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "TYROGUE",
                "gender": "Male",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Rage"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 24 to 30, 2003",
                        "start_date": "2003-01-24",
                        "end_date": "2003-01-30"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Metronome Smoochum": [
            {
                "species": "Smoochum",
                "form": null,
                "national_dex_number": 238,
                "base_stats": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "type_1": "Ice",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Smoochum",
                "event_name": "Metronome Smoochum",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SMOOCHUM",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Lick",
                    "Metronome"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 22 to April 11, 2002; May 5 to June 7, 2002",
                        "start_date": "2002-03-22",
                        "end_date": "2002-06-07",
                        "periods": [
                            {
                                "start": "2002-03-22",
                                "end": "2002-04-11"
                            },
                            {
                                "start": "2002-05-05",
                                "end": "2002-06-07"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Petal Dance Smoochum": [
            {
                "species": "Smoochum",
                "form": null,
                "national_dex_number": 238,
                "base_stats": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 30,
                    "defense": 15,
                    "special_attack": 85,
                    "special_defense": 65,
                    "speed": 65
                },
                "type_1": "Ice",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 61,
                "gender_ratio": 254,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Smoochum",
                "event_name": "Petal Dance Smoochum",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "SMOOCHUM",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Pound",
                    "Lick",
                    "Petal Dance"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "April 12 to May 4, 2002",
                        "start_date": "2002-04-12",
                        "end_date": "2002-05-04"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Dizzy Punch Elekid": [
            {
                "species": "Elekid",
                "form": null,
                "national_dex_number": 239,
                "base_stats": {
                    "hp": 45,
                    "attack": 63,
                    "defense": 37,
                    "special_attack": 65,
                    "special_defense": 55,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 63,
                    "defense": 37,
                    "special_attack": 65,
                    "special_defense": 55,
                    "speed": 95
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 45,
                "base_experience": 72,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Elekid",
                "event_name": "Dizzy Punch Elekid",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ELEKID",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Quick Attack",
                    "Leer",
                    "Dizzy Punch"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 4 to 10, 2002",
                        "start_date": "2002-10-04",
                        "end_date": "2002-10-10"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Pursuit Elekid": [
            {
                "species": "Elekid",
                "form": null,
                "national_dex_number": 239,
                "base_stats": {
                    "hp": 45,
                    "attack": 63,
                    "defense": 37,
                    "special_attack": 65,
                    "special_defense": 55,
                    "speed": 95
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 63,
                    "defense": 37,
                    "special_attack": 65,
                    "special_defense": 55,
                    "speed": 95
                },
                "type_1": "Electric",
                "type_2": "Electric",
                "catch_rate": 45,
                "base_experience": 72,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Elekid",
                "event_name": "Pursuit Elekid",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "ELEKID",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Quick Attack",
                    "Leer",
                    "Pursuit"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 22 to April 11, 2002",
                        "start_date": "2002-03-22",
                        "end_date": "2002-04-11"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Faint Attack Magby": [
            {
                "species": "Magby",
                "form": null,
                "national_dex_number": 240,
                "base_stats": {
                    "hp": 45,
                    "attack": 75,
                    "defense": 37,
                    "special_attack": 70,
                    "special_defense": 55,
                    "speed": 83
                },
                "ev_yield": {
                    "hp": 45,
                    "attack": 75,
                    "defense": 37,
                    "special_attack": 70,
                    "special_defense": 55,
                    "speed": 83
                },
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 73,
                "gender_ratio": 63,
                "egg_cycles": 25,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Magby",
                "event_name": "Faint Attack Magby",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MAGBY",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Ember",
                    "Faint Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "March 22 to April 11, 2002",
                        "start_date": "2002-03-22",
                        "end_date": "2002-04-11"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Mega Kick Miltank": [
            {
                "species": "Miltank",
                "form": null,
                "national_dex_number": 241,
                "base_stats": {
                    "hp": 95,
                    "attack": 80,
                    "defense": 105,
                    "special_attack": 40,
                    "special_defense": 70,
                    "speed": 100
                },
                "ev_yield": {
                    "hp": 95,
                    "attack": 80,
                    "defense": 105,
                    "special_attack": 40,
                    "special_defense": 70,
                    "speed": 100
                },
                "type_1": "Normal",
                "type_2": "Normal",
                "catch_rate": 45,
                "base_experience": 172,
                "gender_ratio": 254,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Miltank",
                "event_name": "Mega Kick Miltank",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "MILTANK",
                "gender": "Female",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Mega Kick"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "January 10 to 16, 2003",
                        "start_date": "2003-01-10",
                        "end_date": "2003-01-16"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Raikou": [
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
                    "hp": 90,
                    "attack": 85,
                    "defense": 75,
                    "special_attack": 115,
                    "special_defense": 100,
                    "speed": 115
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Raikou",
                "event_name": "Shiny Raikou",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "RAIKOU",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leer",
                    "ThunderShock",
                    "Roar",
                    "Quick Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 22 to 29, 2001; December 7 to 20, 2001; June 22 to 28, 2002; July 5 to 11, 2002; November 15 to 21, 2002",
                        "start_date": "2001-11-22",
                        "end_date": "2002-11-21",
                        "periods": [
                            {
                                "start": "2001-11-22",
                                "end": "2001-11-29"
                            },
                            {
                                "start": "2001-12-07",
                                "end": "2001-12-20"
                            },
                            {
                                "start": "2002-06-22",
                                "end": "2002-06-28"
                            },
                            {
                                "start": "2002-07-05",
                                "end": "2002-07-11"
                            },
                            {
                                "start": "2002-11-15",
                                "end": "2002-11-21"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Entei": [
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
                    "hp": 115,
                    "attack": 115,
                    "defense": 85,
                    "special_attack": 90,
                    "special_defense": 75,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Entei",
                "event_name": "Shiny Entei",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "ENTEI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leer",
                    "Ember",
                    "Roar",
                    "Fire Spin"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 22 to 29, 2001; December 7 to 20, 2001; June 22 to 28, 2002; July 5 to 11, 2002; November 15 to 21, 2002",
                        "start_date": "2001-11-22",
                        "end_date": "2002-11-21",
                        "periods": [
                            {
                                "start": "2001-11-22",
                                "end": "2001-11-29"
                            },
                            {
                                "start": "2001-12-07",
                                "end": "2001-12-20"
                            },
                            {
                                "start": "2002-06-22",
                                "end": "2002-06-28"
                            },
                            {
                                "start": "2002-07-05",
                                "end": "2002-07-11"
                            },
                            {
                                "start": "2002-11-15",
                                "end": "2002-11-21"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Suicune": [
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
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Suicune",
                "event_name": "Shiny Suicune",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leer",
                    "Water Gun",
                    "Roar",
                    "Gust"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 22 to 29, 2001; December 7 to 20, 2001; June 22 to 28, 2002; July 5 to 11, 2002; November 15 to 21, 2002",
                        "start_date": "2001-11-22",
                        "end_date": "2002-11-21",
                        "periods": [
                            {
                                "start": "2001-11-22",
                                "end": "2001-11-29"
                            },
                            {
                                "start": "2001-12-07",
                                "end": "2001-12-20"
                            },
                            {
                                "start": "2002-06-22",
                                "end": "2002-06-28"
                            },
                            {
                                "start": "2002-07-05",
                                "end": "2002-07-11"
                            },
                            {
                                "start": "2002-11-15",
                                "end": "2002-11-21"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Suicune": [
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
                    "hp": 100,
                    "attack": 75,
                    "defense": 115,
                    "special_attack": 90,
                    "special_defense": 115,
                    "speed": 85
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Suicune",
                "event_name": "Suicune",
                "level": "?",
                "shiny": false,
                "is_egg": false,
                "nickname": "SUICUNE",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "October 18 to 24, 2002",
                        "start_date": "2002-10-18",
                        "end_date": "2002-10-24"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Rage Larvitar": [
            {
                "species": "Larvitar",
                "form": null,
                "national_dex_number": 246,
                "base_stats": {
                    "hp": 50,
                    "attack": 64,
                    "defense": 50,
                    "special_attack": 45,
                    "special_defense": 50,
                    "speed": 41
                },
                "ev_yield": {
                    "hp": 50,
                    "attack": 64,
                    "defense": 50,
                    "special_attack": 45,
                    "special_defense": 50,
                    "speed": 41
                },
                "type_1": "Rock",
                "type_2": "Ground",
                "catch_rate": 45,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 40,
                "base_friendship": 35,
                "growth_rate": "Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Monster",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Larvitar",
                "event_name": "Rage Larvitar",
                "level": 5,
                "shiny": "possible",
                "is_egg": true,
                "nickname": "LARVITAR",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "(Hatcher's)",
                "trainer_id": "(Hatcher's)",
                "moves": [
                    "Bite",
                    "Leer",
                    "Rage"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 1 to 7, 2002",
                        "start_date": "2002-11-01",
                        "end_date": "2002-11-07"
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Lugia": [
            {
                "species": "Lugia",
                "form": null,
                "national_dex_number": 249,
                "base_stats": {
                    "hp": 106,
                    "attack": 90,
                    "defense": 130,
                    "special_attack": 90,
                    "special_defense": 154,
                    "speed": 110
                },
                "ev_yield": {
                    "hp": 106,
                    "attack": 90,
                    "defense": 130,
                    "special_attack": 90,
                    "special_defense": 154,
                    "speed": 110
                },
                "type_1": "Psychic",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 306,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Lugia",
                "event_name": "Shiny Lugia",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "LUGIA",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Aeroblast",
                    "Safeguard",
                    "Gust",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 15 to 21, 2002; December 6 to 12, 2002",
                        "start_date": "2002-11-15",
                        "end_date": "2002-12-12",
                        "periods": [
                            {
                                "start": "2002-11-15",
                                "end": "2002-11-21"
                            },
                            {
                                "start": "2002-12-06",
                                "end": "2002-12-12"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Shiny Ho-Oh": [
            {
                "species": "Ho-Oh",
                "form": null,
                "national_dex_number": 250,
                "base_stats": {
                    "hp": 106,
                    "attack": 130,
                    "defense": 90,
                    "special_attack": 110,
                    "special_defense": 154,
                    "speed": 90
                },
                "ev_yield": {
                    "hp": 106,
                    "attack": 130,
                    "defense": 90,
                    "special_attack": 110,
                    "special_defense": 154,
                    "speed": 90
                },
                "type_1": "Fire",
                "type_2": "Flying",
                "catch_rate": 3,
                "base_experience": 306,
                "gender_ratio": 255,
                "egg_cycles": 120,
                "base_friendship": 0,
                "growth_rate": "Slow",
                "egg_group_1": "NoEggsDiscovered",
                "egg_group_2": "NoEggsDiscovered",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Ho-Oh",
                "event_name": "Shiny Ho-Oh",
                "level": 40,
                "shiny": true,
                "is_egg": false,
                "nickname": "HO-OH",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Sacred Fire",
                    "Safeguard",
                    "Gust",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "November 15 to 21, 2002; December 6 to 12, 2002",
                        "start_date": "2002-11-15",
                        "end_date": "2002-12-12",
                        "periods": [
                            {
                                "start": "2002-11-15",
                                "end": "2002-11-21"
                            },
                            {
                                "start": "2002-12-06",
                                "end": "2002-12-12"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ],
        "Celebi": [
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
                    "hp": 100,
                    "attack": 100,
                    "defense": 100,
                    "special_attack": 100,
                    "special_defense": 100,
                    "speed": 100
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
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Celebi",
                "event_name": "Celebi",
                "level": 5,
                "shiny": "possible",
                "is_egg": false,
                "nickname": "CELEBI",
                "gender": null,
                "nature": null,
                "ability": null,
                "held_item": null,
                "ball": null,
                "ot": "PCNYa/b/c/d",
                "trainer_id": "00000-65535",
                "moves": [
                    "Leech Seed",
                    "Confusion",
                    "Heal Bell",
                    "Recover"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "the United States",
                        "date": "December 21 to 27, 2001; June 29 to July 4, 2002; October 11 to 17, 2002; November 22 to 28, 2002; March 7 to 13, 2003",
                        "start_date": "2001-12-21",
                        "end_date": "2003-03-13",
                        "periods": [
                            {
                                "start": "2001-12-21",
                                "end": "2001-12-27"
                            },
                            {
                                "start": "2002-06-29",
                                "end": "2002-07-04"
                            },
                            {
                                "start": "2002-10-11",
                                "end": "2002-10-17"
                            },
                            {
                                "start": "2002-11-22",
                                "end": "2002-11-28"
                            },
                            {
                                "start": "2003-03-07",
                                "end": "2003-03-13"
                            }
                        ]
                    }
                ],
                "source_page": "List of PCNY event Pokémon distributions in Generation II"
            }
        ]
    },
    "Game-based distributions": {
        "International Pokémon Stadium 2": [
            {
                "species": "Farfetch'd",
                "form": null,
                "national_dex_number": 83,
                "base_stats": {
                    "hp": 52,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 58,
                    "special_defense": 62,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 52,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 58,
                    "special_defense": 62,
                    "speed": 60
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 132,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Farfetch'd",
                "event_name": "Baton Pass Farfetch'd",
                "event_section": "Special Gifts",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "FARFETCH'D",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": "Gold Berry",
                "ball": null,
                "ot": "Stadium",
                "trainer_id": "02000",
                "moves": [
                    "Baton Pass",
                    "Swords Dance",
                    "Agility",
                    "Slash"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "North America, Europe, and Australia",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation II"
            },
            {
                "species": "Gligar",
                "form": null,
                "national_dex_number": 207,
                "base_stats": {
                    "hp": 65,
                    "attack": 75,
                    "defense": 105,
                    "special_attack": 35,
                    "special_defense": 65,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 75,
                    "defense": 105,
                    "special_attack": 35,
                    "special_defense": 65,
                    "speed": 85
                },
                "type_1": "Ground",
                "type_2": "Flying",
                "catch_rate": 60,
                "base_experience": 86,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Gligar",
                "event_name": "Earthquake Gligar",
                "event_section": "Special Gifts",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "GLIGAR",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": "MysteryBerry",
                "ball": null,
                "ot": "Stadium",
                "trainer_id": "02000",
                "moves": [
                    "Earthquake",
                    "Poison Sting",
                    "Counter",
                    "Wing Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "North America, Europe, and Australia",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation II"
            }
        ],
        "Pokémon Stadium G&S": [
            {
                "species": "Farfetch'd",
                "form": null,
                "national_dex_number": 83,
                "base_stats": {
                    "hp": 52,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 58,
                    "special_defense": 62,
                    "speed": 60
                },
                "ev_yield": {
                    "hp": 52,
                    "attack": 65,
                    "defense": 55,
                    "special_attack": 58,
                    "special_defense": 62,
                    "speed": 60
                },
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 132,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Ground",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Farfetch'd",
                "event_name": "Baton Pass Farfetch'd",
                "event_section": "Special Gifts",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "カモネギ",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": "Gold Berry",
                "ball": null,
                "ot": "スタジアム",
                "trainer_id": "02000",
                "moves": [
                    "Baton Pass",
                    "Swords Dance",
                    "Agility",
                    "Slash"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation II"
            },
            {
                "species": "Gligar",
                "form": null,
                "national_dex_number": 207,
                "base_stats": {
                    "hp": 65,
                    "attack": 75,
                    "defense": 105,
                    "special_attack": 35,
                    "special_defense": 65,
                    "speed": 85
                },
                "ev_yield": {
                    "hp": 65,
                    "attack": 75,
                    "defense": 105,
                    "special_attack": 35,
                    "special_defense": 65,
                    "speed": 85
                },
                "type_1": "Ground",
                "type_2": "Flying",
                "catch_rate": 60,
                "base_experience": 86,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Bug",
                "egg_group_2": "Bug",
                "abilities": [],
                "hidden_ability": null,
                "weight": null,
                "pokedex_entry": "pokedex/crystal.js#Gligar",
                "event_name": "Earthquake Gligar",
                "event_section": "Special Gifts",
                "level": 5,
                "shiny": false,
                "is_egg": false,
                "nickname": "グライガー",
                "gender": "Random",
                "nature": null,
                "ability": null,
                "held_item": "MysteryBerry",
                "ball": null,
                "ot": "スタジアム",
                "trainer_id": "02000",
                "moves": [
                    "Earthquake",
                    "Poison Sting",
                    "Counter",
                    "Wing Attack"
                ],
                "ivs": null,
                "met_location": null,
                "fateful_encounter": false,
                "ribbons": [],
                "origin_language": null,
                "games": [
                    "Gold",
                    "Silver",
                    "Crystal"
                ],
                "distributions": [
                    {
                        "games": [
                            "Gold",
                            "Silver",
                            "Crystal"
                        ],
                        "method": null,
                        "language": null,
                        "location": "Japan",
                        "date": null,
                        "start_date": null,
                        "end_date": null
                    }
                ],
                "source_page": "List of game-based Pokémon distributions in Generation II"
            }
        ]
    }
};
