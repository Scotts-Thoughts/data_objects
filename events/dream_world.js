// Pokémon Dream World event Pokémon (44 Pokémon): the Global Link promotions,
// scraped from Bulbapedia's "List of Pokémon Global Link promotions/Pokémon" by scrape_event_pokemon.py.
// Each was sent to the Dream World Friend Board, then caught in the Entree Forest
// (Black/White, Black 2/White 2) after the next Game Sync, so OT/ID are the player's.
// Structure: { "Global Link promotions": { event: [ pokemon, ... ] } }; one distribution
// per Global Link language group, with its password and availability dates.

export const eventPokemon = {
    "Global Link promotions": {
        "Vaporeon": [
            {
                "species": "Vaporeon",
                "national_dex_number": 134,
                "base_stats": {
                    "hp": 130,
                    "attack": 65,
                    "defense": 60,
                    "special_attack": 110,
                    "special_defense": 95,
                    "speed": 65
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
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Water Absorb"
                ],
                "hidden_ability": "Hydration",
                "weight": 29.0,
                "pokedex_entry": "pokedex/black2_white2.js#Vaporeon",
                "event_name": "Vaporeon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Hydration",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Jolteon": [
            {
                "species": "Jolteon",
                "national_dex_number": 135,
                "base_stats": {
                    "hp": 65,
                    "attack": 65,
                    "defense": 60,
                    "special_attack": 110,
                    "special_defense": 95,
                    "speed": 130
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
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Volt Absorb"
                ],
                "hidden_ability": "Quick Feet",
                "weight": 24.5,
                "pokedex_entry": "pokedex/black2_white2.js#Jolteon",
                "event_name": "Jolteon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Quick Feet",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Flareon": [
            {
                "species": "Flareon",
                "national_dex_number": 136,
                "base_stats": {
                    "hp": 65,
                    "attack": 130,
                    "defense": 60,
                    "special_attack": 95,
                    "special_defense": 110,
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
                "type_1": "Fire",
                "type_2": "Fire",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Flash Fire"
                ],
                "hidden_ability": "Guts",
                "weight": 25.0,
                "pokedex_entry": "pokedex/black2_white2.js#Flareon",
                "event_name": "Flareon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Guts",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Espeon": [
            {
                "species": "Espeon",
                "national_dex_number": 196,
                "base_stats": {
                    "hp": 65,
                    "attack": 65,
                    "defense": 60,
                    "special_attack": 130,
                    "special_defense": 95,
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
                "type_1": "Psychic",
                "type_2": "Psychic",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": "Magic Bounce",
                "weight": 26.5,
                "pokedex_entry": "pokedex/black2_white2.js#Espeon",
                "event_name": "Espeon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Magic Bounce",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Umbreon": [
            {
                "species": "Umbreon",
                "national_dex_number": 197,
                "base_stats": {
                    "hp": 95,
                    "attack": 65,
                    "defense": 110,
                    "special_attack": 60,
                    "special_defense": 130,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Dark",
                "type_2": "Dark",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 35,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Synchronize"
                ],
                "hidden_ability": "Inner Focus",
                "weight": 27.0,
                "pokedex_entry": "pokedex/black2_white2.js#Umbreon",
                "event_name": "Umbreon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Inner Focus",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Leafeon": [
            {
                "species": "Leafeon",
                "national_dex_number": 470,
                "base_stats": {
                    "hp": 65,
                    "attack": 110,
                    "defense": 130,
                    "special_attack": 60,
                    "special_defense": 65,
                    "speed": 95
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
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 35,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Leaf Guard"
                ],
                "hidden_ability": "Chlorophyll",
                "weight": 25.5,
                "pokedex_entry": "pokedex/black2_white2.js#Leafeon",
                "event_name": "Leafeon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Chlorophyll",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Glaceon": [
            {
                "species": "Glaceon",
                "national_dex_number": 471,
                "base_stats": {
                    "hp": 65,
                    "attack": 60,
                    "defense": 110,
                    "special_attack": 130,
                    "special_defense": 95,
                    "speed": 65
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 2,
                    "special_defense": 0,
                    "speed": 0
                },
                "type_1": "Ice",
                "type_2": "Ice",
                "catch_rate": 45,
                "base_experience": 184,
                "gender_ratio": 31,
                "egg_cycles": 35,
                "base_friendship": 35,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Snow Cloak"
                ],
                "hidden_ability": "Ice Body",
                "weight": 25.9,
                "pokedex_entry": "pokedex/black2_white2.js#Glaceon",
                "event_name": "Glaceon",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Ice Body",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tail Whip",
                    "Tackle",
                    "Helping Hand",
                    "Sand-Attack"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20, 2010 to January 31, 2011",
                        "start_date": "2010-10-20",
                        "end_date": "2011-01-31",
                        "date_note": "Originally October 1 to November 1, 2010",
                        "details": "Fans with a Pokémon Daisuki Club account, from July 8 to August 31, 2010, could play 「ポケモンラビリンス 真夏の大調査団」 Pokémon Labyrinth: The Summer's Large Research Group to obtain one of Eevee's Evolutions."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 19 to July 19, 2011",
                        "start_date": "2011-05-19",
                        "end_date": "2011-07-19",
                        "details": "From March 28 to May 5, 2011, fans with a Pokémon Trainer Club account could play Play to Befriend a Pokémon!. After completing all four levels of the game, fans were given a chance to choose to obtain one of Eevee's Evolutions; the one which is chosen depends on the fans' actions when they played the game."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 18 to August 31, 2011",
                        "start_date": "2011-05-18",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "By buying 샤니 포켓몬빵 Shany's Pokémon Bread during April 2011, fans could obtain one of Eevee's Evolutions at random."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Bulbasaur": [
            {
                "species": "Bulbasaur",
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
                "pokedex_entry": "pokedex/black2_white2.js#Bulbasaur",
                "event_name": "Bulbasaur",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Chlorophyll",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Leech Seed",
                    "Vine Whip"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 14, 2010 to May 31, 2011",
                        "start_date": "2010-10-14",
                        "end_date": "2011-05-31",
                        "password": "One-time use",
                        "date_note": "Originally until March 31, 2011",
                        "details": "Fans could buy the book ポケモンぴあ Pokémon Peer, which will contain a password players could use on Global Link - a password that allows them to obtain one of the three Kanto first partner Pokémon. The date this Pokémon was available was extended to May 31, 2011 due to the unforeseen extended closing down of Global Link."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 11, 2011 to September 3, 2013",
                        "start_date": "2011-05-11",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "date_note": "Originally May 11, 2011 to May 11, 2012",
                        "details": "By buying the Korean language versions of Pokémon Black or White, players could obtain one of the three Kanto first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Charmander": [
            {
                "species": "Charmander",
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
                "pokedex_entry": "pokedex/black2_white2.js#Charmander",
                "event_name": "Charmander",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Solar Power",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Growl",
                    "Ember",
                    "SmokeScreen"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 14, 2010 to May 31, 2011",
                        "start_date": "2010-10-14",
                        "end_date": "2011-05-31",
                        "password": "One-time use",
                        "date_note": "Originally until March 31, 2011",
                        "details": "Fans could buy the book ポケモンぴあ Pokémon Peer, which will contain a password players could use on Global Link - a password that allows them to obtain one of the three Kanto first partner Pokémon. The date this Pokémon was available was extended to May 31, 2011 due to the unforeseen extended closing down of Global Link."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 11, 2011 to September 3, 2013",
                        "start_date": "2011-05-11",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "date_note": "Originally May 11, 2011 to May 11, 2012",
                        "details": "By buying the Korean language versions of Pokémon Black or White, players could obtain one of the three Kanto first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Squirtle": [
            {
                "species": "Squirtle",
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
                "pokedex_entry": "pokedex/black2_white2.js#Squirtle",
                "event_name": "Squirtle",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Rain Dish",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Tail Whip",
                    "Bubble",
                    "Withdraw"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 14, 2010 to May 31, 2011",
                        "start_date": "2010-10-14",
                        "end_date": "2011-05-31",
                        "password": "One-time use",
                        "date_note": "Originally until March 31, 2011",
                        "details": "Fans could buy the book ポケモンぴあ Pokémon Peer, which will contain a password players could use on Global Link - a password that allows them to obtain one of the three Kanto first partner Pokémon. The date this Pokémon was available was extended to May 31, 2011 due to the unforeseen extended closing down of Global Link."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "May 11, 2011 to September 3, 2013",
                        "start_date": "2011-05-11",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "date_note": "Originally May 11, 2011 to May 11, 2012",
                        "details": "By buying the Korean language versions of Pokémon Black or White, players could obtain one of the three Kanto first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Croagunk": [
            {
                "species": "Croagunk",
                "national_dex_number": 453,
                "base_stats": {
                    "hp": 48,
                    "attack": 61,
                    "defense": 40,
                    "special_attack": 61,
                    "special_defense": 40,
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
                "type_1": "Poison",
                "type_2": "Fighting",
                "catch_rate": 140,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 100,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Anticipation",
                    "Dry Skin"
                ],
                "hidden_ability": "Poison Touch",
                "weight": 23.0,
                "pokedex_entry": "pokedex/black2_white2.js#Croagunk",
                "event_name": "Croagunk",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Poison Touch",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Astonish",
                    "Mud-Slap",
                    "Poison Sting",
                    "Taunt"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 20 to November 19, 2010",
                        "start_date": "2010-10-20",
                        "end_date": "2010-11-19",
                        "password": "コロコロであおう",
                        "password_translation": "Meet with CoroCoro",
                        "details": "A password could be found in the November 2010 issue of CoroCoro magazine that will allow fans to obtain this Pokémon. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "June 25 to July 30, 2011",
                        "start_date": "2011-06-25",
                        "end_date": "2011-07-30",
                        "password": "쥬니어네이버 포켓몬스터",
                        "password_translation": "Jr. Naver Pocket Monsters",
                        "details": "This was first promotion given out by JR.NAVER, and was distributed to commemorate the opening of their new Pokémon page."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Turtwig": [
            {
                "species": "Turtwig",
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
                "pokedex_entry": "pokedex/black2_white2.js#Turtwig",
                "event_name": "Turtwig",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Shell Armor",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Withdraw",
                    "Absorb"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 29, 2010 to November 30, 2011",
                        "start_date": "2010-10-29",
                        "end_date": "2011-11-30",
                        "password": "One-time use",
                        "details": "A password could be found in the 「ポケモンカードゲームBW（ビーダブリュー）「はじめてセット」 Pokémon Card Game BW Starter Set that allows players of Pokémon Black and White to obtain one of the Sinnoh first partner Pokémon. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "June 1, 2011 to September 3, 2013",
                        "start_date": "2011-06-01",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "date_note": "Originally June 1, 2011 to June 1, 2012",
                        "details": "By buying a certain Korean TCG deck 퍼스트 세트 First set or the book 속성공략가이드 Player's Guidebook, players of Pokémon Black and White could obtain one of the Sinnoh first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Chimchar": [
            {
                "species": "Chimchar",
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
                "pokedex_entry": "pokedex/black2_white2.js#Chimchar",
                "event_name": "Chimchar",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Iron Fist",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Leer",
                    "Ember",
                    "Taunt"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 29, 2010 to November 30, 2011",
                        "start_date": "2010-10-29",
                        "end_date": "2011-11-30",
                        "password": "One-time use",
                        "details": "A password could be found in the 「ポケモンカードゲームBW（ビーダブリュー）「はじめてセット」 Pokémon Card Game BW Starter Set that allows players of Pokémon Black and White to obtain one of the Sinnoh first partner Pokémon. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "June 1, 2011 to September 3, 2013",
                        "start_date": "2011-06-01",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "date_note": "Originally June 1, 2011 to June 1, 2012",
                        "details": "By buying a certain Korean TCG deck 퍼스트 세트 First set or the book 속성공략가이드 Player's Guidebook, players of Pokémon Black and White could obtain one of the Sinnoh first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Piplup": [
            {
                "species": "Piplup",
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
                "pokedex_entry": "pokedex/black2_white2.js#Piplup",
                "event_name": "Piplup",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Defiant",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Growl",
                    "Bubble"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "October 29, 2010 to November 30, 2011",
                        "start_date": "2010-10-29",
                        "end_date": "2011-11-30",
                        "password": "One-time use",
                        "details": "A password could be found in the 「ポケモンカードゲームBW（ビーダブリュー）「はじめてセット」 Pokémon Card Game BW Starter Set that allows players of Pokémon Black and White to obtain one of the Sinnoh first partner Pokémon. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "June 1, 2011 to September 3, 2013",
                        "start_date": "2011-06-01",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "date_note": "Originally June 1, 2011 to June 1, 2012",
                        "details": "By buying a certain Korean TCG deck 퍼스트 세트 First set or the book 속성공략가이드 Player's Guidebook, players of Pokémon Black and White could obtain one of the Sinnoh first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Arceus": [
            {
                "species": "Arceus",
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
                "weight": 320.0,
                "pokedex_entry": "pokedex/black2_white2.js#Arceus",
                "event_name": "Arceus",
                "level": 100,
                "shiny": false,
                "ability": "Multitype",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Recover",
                    "Hyper Beam",
                    "Perish Song",
                    "Judgment"
                ],
                "met_location": "Entree Forest",
                "met_level": 100,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 5, 2010 to January 31, 2011",
                        "start_date": "2010-11-05",
                        "end_date": "2011-01-31",
                        "password": "さばきのつぶて",
                        "password_translation": "Judgment Strike",
                        "details": "From September 1 to November 1, 2010, fans could choose a Pokémon from among the first 493 to be obtainable via a Global Link promotion. The Pokémon Arceus won the poll and was made available. Additional information can be found New distributions for Black and White announced and here. This Pokémon was the first Pokémon promotion to be a mythical Pokémon, have no gender, be a level higher than ten, and have no Hidden Ability, due to the lack of one. All Pokémon distributed by promotion that do not have a Hidden Ability have been the result of a poll."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "February 1 to May 1, 2012",
                        "start_date": "2012-02-01",
                        "end_date": "2012-05-01",
                        "password": "ARCEUSVOTE",
                        "details": "From November 1 to November 30, 2011, fans could choose a Pokémon from among the first 493 to be obtainable via a Global Link promotion. The Pokémon Arceus won the poll and will be made available. Additional information can be found Pokémon popularity poll launched and here. This Pokémon was the second Pokémon promotion to be a mythical Pokémon and the third to have no gender nor a Hidden Ability, due to the lack of one. All Pokémon distributed by promotion that do not have a Hidden Ability have been the result of a poll."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Treecko": [
            {
                "species": "Treecko",
                "national_dex_number": 252,
                "base_stats": {
                    "hp": 40,
                    "attack": 45,
                    "defense": 35,
                    "special_attack": 65,
                    "special_defense": 55,
                    "speed": 70
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
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "Monster",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Overgrow"
                ],
                "hidden_ability": "Unburden",
                "weight": 5.0,
                "pokedex_entry": "pokedex/black2_white2.js#Treecko",
                "event_name": "Treecko",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Unburden",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Leer",
                    "Absorb"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 24, 2010 to August 31, 2011",
                        "start_date": "2010-11-24",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "In the guidebook Pokémon Black and White Official Complete Adventure Clear Guide, fans can find a password that allows them to obtain one of the Hoenn first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Torchic": [
            {
                "species": "Torchic",
                "national_dex_number": 255,
                "base_stats": {
                    "hp": 45,
                    "attack": 60,
                    "defense": 40,
                    "special_attack": 70,
                    "special_defense": 50,
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
                "hidden_ability": "Speed Boost",
                "weight": 2.5,
                "pokedex_entry": "pokedex/black2_white2.js#Torchic",
                "event_name": "Torchic",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Speed Boost",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Scratch",
                    "Growl",
                    "Focus Energy",
                    "Ember"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 24, 2010 to August 31, 2011",
                        "start_date": "2010-11-24",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "In the guidebook Pokémon Black and White Official Complete Adventure Clear Guide, fans can find a password that allows them to obtain one of the Hoenn first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Mudkip": [
            {
                "species": "Mudkip",
                "national_dex_number": 258,
                "base_stats": {
                    "hp": 50,
                    "attack": 70,
                    "defense": 50,
                    "special_attack": 50,
                    "special_defense": 50,
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
                "type_1": "Water",
                "type_2": "Water",
                "catch_rate": 45,
                "base_experience": 62,
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
                "weight": 7.6,
                "pokedex_entry": "pokedex/black2_white2.js#Mudkip",
                "event_name": "Mudkip",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Damp",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Growl",
                    "Mud-Slap",
                    "Water Gun"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 24, 2010 to August 31, 2011",
                        "start_date": "2010-11-24",
                        "end_date": "2011-08-31",
                        "password": "One-time use",
                        "details": "In the guidebook Pokémon Black and White Official Complete Adventure Clear Guide, fans can find a password that allows them to obtain one of the Hoenn first partner Pokémon. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Togekiss": [
            {
                "species": "Togekiss",
                "national_dex_number": 468,
                "base_stats": {
                    "hp": 85,
                    "attack": 50,
                    "defense": 95,
                    "special_attack": 120,
                    "special_defense": 115,
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
                "type_1": "Normal",
                "type_2": "Flying",
                "catch_rate": 30,
                "base_experience": 245,
                "gender_ratio": 31,
                "egg_cycles": 10,
                "base_friendship": 70,
                "growth_rate": "Fast",
                "egg_group_1": "Flying",
                "egg_group_2": "Fairy",
                "abilities": [
                    "Hustle",
                    "Serene Grace"
                ],
                "hidden_ability": "Super Luck",
                "weight": 38.0,
                "pokedex_entry": "pokedex/black2_white2.js#Togekiss",
                "event_name": "Togekiss",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Super Luck",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "ExtremeSpeed",
                    "Aura Sphere",
                    "Air Slash",
                    "Present"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "December 1, 2010 to ???",
                        "start_date": "2010-12-01",
                        "end_date": null,
                        "details": "Players could obtain Togekiss on the month of, or the month after, the date they set their birthday to in their Pokémon Daisuki Club accounts."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "September 1, 2011 to August 2012",
                        "start_date": "2011-09-01",
                        "end_date": "2012-08",
                        "details": "Players could obtain Togekiss on the month of, or the month after, the date they set their birthday to in their Pokémon Trainer Club accounts."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "August 25 to September 30, 2011",
                        "start_date": "2011-08-25",
                        "end_date": "2011-09-30",
                        "password": "쥬니버의 프레젠트",
                        "password_translation": "JR.NAVER's Present",
                        "details": "This third distribution by JR. NAVER was held to coincide with back-to-school times. More information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Mamoswine": [
            {
                "species": "Mamoswine",
                "national_dex_number": 473,
                "base_stats": {
                    "hp": 110,
                    "attack": 130,
                    "defense": 80,
                    "special_attack": 70,
                    "special_defense": 60,
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
                "type_1": "Ice",
                "type_2": "Ground",
                "catch_rate": 50,
                "base_experience": 239,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Slow",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Oblivious",
                    "Snow Cloak"
                ],
                "hidden_ability": "Thick Fat",
                "weight": 291.0,
                "pokedex_entry": "pokedex/black2_white2.js#Mamoswine",
                "event_name": "Mamoswine",
                "level": 34,
                "shiny": false,
                "gender": "Male",
                "ability": "Thick Fat",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Hail",
                    "Ice Fang",
                    "Take Down",
                    "Double Hit"
                ],
                "met_location": "Entree Forest",
                "met_level": 34,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "December 20, 2010 to May 31, 2011",
                        "start_date": "2010-12-20",
                        "end_date": "2011-05-31",
                        "password": "One-time use",
                        "date_note": "Originally until April 20",
                        "details": "Fans can find a password in issue 15 of Pokémon Fan magazine that will allow them to obtain this Pokémon. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "France, Germany, Italy",
                        "date": "October 19, 2011 to January 19, 2012",
                        "start_date": "2011-10-19",
                        "end_date": "2012-01-19",
                        "password": [
                            "MAMNintendoOfficiel (France)",
                            "COMPUTERBILDSPIELE (Germany)",
                            "MAMNintendoUfficiale (Italy)"
                        ],
                        "details": "Fans can find a password in the official Nintendo magazines in Europe that will allow them to obtain this Pokémon. Mamoswine was later released in North America, Australia, and New Zealand, the password being revealed on Pokémon.com. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "Spain",
                        "date": "October 13, 2011 to January 19, 2012",
                        "start_date": "2011-10-13",
                        "end_date": "2012-01-19",
                        "password": "MAMNintendoAccion (Spain)",
                        "details": "Fans can find a password in the official Nintendo magazines in Europe that will allow them to obtain this Pokémon. Mamoswine was later released in North America, Australia, and New Zealand, the password being revealed on Pokémon.com. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "rest of Europe",
                        "date": "October 20, 2011 to January 19, 2012",
                        "start_date": "2011-10-20",
                        "end_date": "2012-01-19",
                        "password": "MAMNintendoOfficial (rest of Europe)",
                        "details": "Fans can find a password in the official Nintendo magazines in Europe that will allow them to obtain this Pokémon. Mamoswine was later released in North America, Australia, and New Zealand, the password being revealed on Pokémon.com. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "North America, Australia, and New Zealand",
                        "date": "December 15, 2011 to February 16, 2012",
                        "start_date": "2011-12-15",
                        "end_date": "2012-02-16",
                        "password": "POKEMONDOTCOM (North America, Australia and New Zealand)",
                        "details": "Fans can find a password in the official Nintendo magazines in Europe that will allow them to obtain this Pokémon. Mamoswine was later released in North America, Australia, and New Zealand, the password being revealed on Pokémon.com. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "July 1 to August 24, 2011",
                        "start_date": "2011-07-01",
                        "end_date": "2011-08-24",
                        "password": "쥬니버에서 여름방학을",
                        "password_translation": "Summer Vacation at JR.NAVER",
                        "details": "This was the second distribution by JR.NAVER celebrated the start of the summer holidays."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Porygon": [
            {
                "species": "Porygon",
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
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 1,
                    "special_defense": 0,
                    "speed": 0
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
                "abilities": [
                    "Trace",
                    "Download"
                ],
                "hidden_ability": "Analytic",
                "weight": 36.5,
                "pokedex_entry": "pokedex/black2_white2.js#Porygon",
                "event_name": "Porygon",
                "level": 10,
                "shiny": false,
                "ability": "Analytic",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Conversion",
                    "Sharpen",
                    "Psybeam"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "May 18, 2011 to April 26, 2012",
                        "start_date": "2011-05-18",
                        "end_date": "2012-04-26",
                        "password": "One-time use",
                        "details": "A password that allows players to obtain this Pokémon, as well as Porygon2 Décor and a Porygon-Z C-Gear skin can be found in the book Pokémon Black and White Official Guide Communication Play Special Offer Book. Additional information can be found here."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "North America, Australia, and New Zealand",
                        "date": "July 12 to September 27, 2012",
                        "start_date": "2012-07-12",
                        "end_date": "2012-09-27",
                        "password": "IGNPORYGON (North America, Australia and New Zealand)",
                        "details": "Porygon was released in North America, Australia, and New Zealand for the Global Link reopening, with the password being revealed on Pokémon.com. The password for Europe was revealed in EUROGAMER."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "European Countries",
                        "date": "July 19 to September 27, 2012",
                        "start_date": "2012-07-19",
                        "end_date": "2012-09-27",
                        "password": [
                            "PORYEUROGAMERNET (the United Kingdom)",
                            "PORYEUROGAMERFR (France)",
                            "PORYEUROGAMERDE (Germany)",
                            "PORYEUROGAMERIT (Italy)",
                            "PORYEUROGAMERES (Spain)"
                        ],
                        "details": "Porygon was released in North America, Australia, and New Zealand for the Global Link reopening, with the password being revealed on Pokémon.com. The password for Europe was revealed in EUROGAMER."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "October 20, 2011 to April 27, 2012",
                        "start_date": "2011-10-20",
                        "end_date": "2012-04-27",
                        "password": "One-time use",
                        "details": "By buying the book 「포켓몬스터 블렉•화이트 하나도감미니」 Pocket Monsters Black and White Mini Unova Pokédex, players can obtain a Porygon with its Hidden Ability, as well as a Porygon-Z C-gear skin. Due to the prolonged release of the book, the event was postponed."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Rayquaza": [
            {
                "species": "Rayquaza",
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
                "weight": 206.5,
                "pokedex_entry": "pokedex/black2_white2.js#Rayquaza",
                "event_name": "Rayquaza",
                "level": 50,
                "shiny": false,
                "ability": "Air Lock",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Rest",
                    "Air Slash",
                    "AncientPower",
                    "Outrage"
                ],
                "met_location": "Entree Forest",
                "met_level": 50,
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
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "August 25 to September 30, 2011",
                        "start_date": "2011-08-25",
                        "end_date": "2011-09-30",
                        "password": "에어록",
                        "password_translation": "Eeo Log",
                        "details": "From June 1 to August 1, 2011, fans could choose a Pokémon from among the first 493 to be obtainable via a Global Link promotion. The Pokémon Rayquaza won the poll and was made available. Additional information can be found here. This Pokémon was the first Pokémon promotion to be a legendary Pokémon and the second have no gender nor a no Hidden Ability, due to the lack of one. All Pokémon distributed by promotion that do not have a Hidden Ability have been the result of a poll."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Banette": [
            {
                "species": "Banette",
                "national_dex_number": 354,
                "base_stats": {
                    "hp": 64,
                    "attack": 115,
                    "defense": 65,
                    "special_attack": 83,
                    "special_defense": 63,
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
                "type_1": "Ghost",
                "type_2": "Ghost",
                "catch_rate": 45,
                "base_experience": 159,
                "gender_ratio": 127,
                "egg_cycles": 25,
                "base_friendship": 35,
                "growth_rate": "Fast",
                "egg_group_1": "Amorphous",
                "egg_group_2": "Amorphous",
                "abilities": [
                    "Insomnia",
                    "Frisk"
                ],
                "hidden_ability": "Cursed Body",
                "weight": 12.5,
                "pokedex_entry": "pokedex/black2_white2.js#Banette",
                "event_name": "Banette",
                "level": 37,
                "shiny": false,
                "gender": "Female",
                "ability": "Cursed Body",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Faint Attack",
                    "Hex",
                    "Shadow Ball",
                    "Cotton Guard"
                ],
                "met_location": "Entree Forest",
                "met_level": 37,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "September 28 to October 31, 2011",
                        "start_date": "2011-09-28",
                        "end_date": "2011-10-31",
                        "password": "One-time use",
                        "details": "Banette was made available alongside the Spooky Manor, as well as a Décor obtainable via password. The password for Banette was made available in the September 29th 2011 issue of Weekly Famitsu."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "US",
                        "date": "September 15, 2011 to March 1, 2012",
                        "start_date": "2011-09-15",
                        "end_date": "2012-03-01",
                        "password": "NPCHARACTER (US)",
                        "details": "To celebrate Halloween, the password for befriending Banette was made available within the October 2011 issue of the Nintendo Power magazine. Banette was later made available in European regions with a shorter period of availability. More information can be found here. Due to the failure of the German Yahoo website to report the password, the promotion was cancelled and rescheduled."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "France, Germany [initially], Italy, Spain",
                        "date": "October 13 to December 7, 2011",
                        "start_date": "2011-10-13",
                        "end_date": "2011-12-07",
                        "password": [
                            "BRANETJeuxVideo (France)",
                            "BANETSpieletipps (Germany)",
                            "BANETSpazioGames (Italy)",
                            "BANET3DJuegos (Spain)"
                        ],
                        "details": "To celebrate Halloween, the password for befriending Banette was made available within the October 2011 issue of the Nintendo Power magazine. Banette was later made available in European regions with a shorter period of availability. More information can be found here. Due to the failure of the German Yahoo website to report the password, the promotion was cancelled and rescheduled."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "Germany [rescheduled]",
                        "date": "October 28 to December 7, 2011",
                        "start_date": "2011-10-28",
                        "end_date": "2011-12-07",
                        "password": "BANETSpieletipps (Germany)",
                        "details": "To celebrate Halloween, the password for befriending Banette was made available within the October 2011 issue of the Nintendo Power magazine. Banette was later made available in European regions with a shorter period of availability. More information can be found here. Due to the failure of the German Yahoo website to report the password, the promotion was cancelled and rescheduled."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "rest of Europe",
                        "date": "October 12 to December 7, 2011",
                        "start_date": "2011-10-12",
                        "end_date": "2011-12-07",
                        "password": "BANETYahooGames (rest of Europe)",
                        "details": "To celebrate Halloween, the password for befriending Banette was made available within the October 2011 issue of the Nintendo Power magazine. Banette was later made available in European regions with a shorter period of availability. More information can be found here. Due to the failure of the German Yahoo website to report the password, the promotion was cancelled and rescheduled."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "October 6 to 31, 2011",
                        "start_date": "2011-10-06",
                        "end_date": "2011-10-31",
                        "password": "오래된 양옥",
                        "password_translation": "Old Manor",
                        "details": "This was distributed to commemorate the release of the Spooky Manor. More information available here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Poison Jab Croagunk": [
            {
                "species": "Croagunk",
                "national_dex_number": 453,
                "base_stats": {
                    "hp": 48,
                    "attack": 61,
                    "defense": 40,
                    "special_attack": 61,
                    "special_defense": 40,
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
                "type_1": "Poison",
                "type_2": "Fighting",
                "catch_rate": 140,
                "base_experience": 60,
                "gender_ratio": 127,
                "egg_cycles": 10,
                "base_friendship": 100,
                "growth_rate": "Medium Fast",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Anticipation",
                    "Dry Skin"
                ],
                "hidden_ability": "Poison Touch",
                "weight": 23.0,
                "pokedex_entry": "pokedex/black2_white2.js#Croagunk",
                "event_name": "Poison Jab Croagunk",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Poison Touch",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Mud-Slap",
                    "Poison Sting",
                    "Taunt",
                    "Poison Jab"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "North America, Asia, Australia, and New Zealand",
                        "date": "November 10, 2011 to January 9, 2012",
                        "start_date": "2011-11-10",
                        "end_date": "2012-01-09",
                        "password": "IGNRuggedMountain (North America, Asia, Australia, and New Zealand)",
                        "details": "This Croagunk was made available to celebrate the upcoming release of the Rugged Mountain Dream World area, and its password was made available on IGN and in issue 76 of Official Nintendo Magazine in the UK. This Pokémon was promoted to have its move Poison Jab, a move that Croagunk can learn by leveling up or TM. The said move, however, is not known by Croagunk from the Rugged Mountain area. This is the first time wherein the same Pokémon species is given away with a different moveset than that of the first release. This promotion coincided with the Poison Jab Croagunk C-Gear skin promotion in Europe."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "Europe",
                        "date": "November 16, 2011 to January 9, 2012",
                        "start_date": "2011-11-16",
                        "end_date": "2012-01-09",
                        "password": [
                            "CROACNintendoOfficial (UK)",
                            "CROACNintendoOfficiel (France)",
                            "CROACNZONE (Germany)",
                            "CROACNintendoUfficiale (Italy)",
                            "CROACNintendoAccion (Spain)"
                        ],
                        "details": "This Croagunk was made available to celebrate the upcoming release of the Rugged Mountain Dream World area, and its password was made available on IGN and in issue 76 of Official Nintendo Magazine in the UK. This Pokémon was promoted to have its move Poison Jab, a move that Croagunk can learn by leveling up or TM. The said move, however, is not known by Croagunk from the Rugged Mountain area. This is the first time wherein the same Pokémon species is given away with a different moveset than that of the first release. This promotion coincided with the Poison Jab Croagunk C-Gear skin promotion in Europe."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Altaria": [
            {
                "species": "Altaria",
                "national_dex_number": 334,
                "base_stats": {
                    "hp": 75,
                    "attack": 70,
                    "defense": 90,
                    "special_attack": 70,
                    "special_defense": 105,
                    "speed": 80
                },
                "ev_yield": {
                    "hp": 0,
                    "attack": 0,
                    "defense": 0,
                    "special_attack": 0,
                    "special_defense": 2,
                    "speed": 0
                },
                "type_1": "Dragon",
                "type_2": "Flying",
                "catch_rate": 45,
                "base_experience": 172,
                "gender_ratio": 127,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Erratic",
                "egg_group_1": "Flying",
                "egg_group_2": "Dragon",
                "abilities": [
                    "Natural Cure"
                ],
                "hidden_ability": "Cloud Nine",
                "weight": 20.6,
                "pokedex_entry": "pokedex/black2_white2.js#Altaria",
                "event_name": "Altaria",
                "level": 35,
                "shiny": false,
                "gender": "Male",
                "ability": "Cloud Nine",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Take Down",
                    "Natural Gift",
                    "DragonBreath",
                    "False Swipe"
                ],
                "met_location": "Entree Forest",
                "met_level": 35,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 18, 2011 to November 30, 2012",
                        "start_date": "2011-11-18",
                        "end_date": "2012-11-30",
                        "password": "みねうちチルタリス",
                        "password_translation": "Blunt Strike Tyltalis",
                        "details": "The password for this Pokémon was available in the Japanese guidebook Pokémon Black and White Official Comprehensive Guide to the National Pokédex."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Blissey": [
            {
                "species": "Blissey",
                "national_dex_number": 242,
                "base_stats": {
                    "hp": 255,
                    "attack": 10,
                    "defense": 10,
                    "special_attack": 75,
                    "special_defense": 135,
                    "speed": 55
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
                "catch_rate": 30,
                "base_experience": 608,
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
                "weight": 46.8,
                "pokedex_entry": "pokedex/black2_white2.js#Blissey",
                "event_name": "Blissey",
                "level": 10,
                "shiny": false,
                "gender": "Female",
                "ability": "Healer",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Growl",
                    "Tail Whip",
                    "Refresh"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 19 to December 25, 2011",
                        "start_date": "2011-11-19",
                        "end_date": "2011-12-25",
                        "password": "One-time use",
                        "details": "Blissey was made available to celebrate Christmas. By greeting staff members in a certain area of Japanese Pokémon Center stores, fans are given a small calendar card with the password included on the back."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "January 19 to February 29, 2012",
                        "start_date": "2012-01-19",
                        "end_date": "2012-02-29",
                        "password": "행복한 새해",
                        "password_translation": "A happy New Year",
                        "details": "This Blissey was released to celebrate Korean New Year. This is the seventh promotion distributed by JR.NAVER. More information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Lucario": [
            {
                "species": "Lucario",
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
                "pokedex_entry": "pokedex/black2_white2.js#Lucario",
                "event_name": "Lucario",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Justified",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Detect",
                    "Metal Claw",
                    "Counter",
                    "Bullet Punch"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
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
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "December 22, 2011 to January 31, 2012",
                        "start_date": "2011-12-22",
                        "end_date": "2012-01-31",
                        "password": "One-time use",
                        "details": "The password for Lucario was made available in the Weekly Famitsu issue released December 22, 2011."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "US",
                        "date": "January 15, 2012 to April 30, 2012",
                        "start_date": "2012-01-15",
                        "end_date": "2012-04-30",
                        "password": "One-time use (US)",
                        "details": "The password for this promotion came with specially marked copies of Pokémon Black and White available in participating American Target stores starting January 15. Copies with the password were limited. The Pokémon was eventually released in EUROGAMER throughout Europe, Australia and New Zealand, instead using a single password."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "Europe, Australia and New Zealand",
                        "date": "March 1 to May 23, 2012",
                        "start_date": "2012-03-01",
                        "end_date": "2012-05-23",
                        "password": "LUCAEUROGAMERNET (Europe, Canada, Australia and New Zealand)",
                        "details": "The password for this promotion came with specially marked copies of Pokémon Black and White available in participating American Target stores starting January 15. Copies with the password were limited. The Pokémon was eventually released in EUROGAMER throughout Europe, Australia and New Zealand, instead using a single password."
                    },
                    {
                        "games": [
                            "Black",
                            "White"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "April 16 to May 31, 2012",
                        "start_date": "2012-04-16",
                        "end_date": "2012-05-31",
                        "password": "선제공격 불릿펀치",
                        "password_translation": "Preemptive Attack Bullet Punch",
                        "details": "This was distributed to commemorate the Korean Division of the Pokémon World Championships 2012. More information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Gothorita": [
            {
                "species": "Gothorita",
                "national_dex_number": 575,
                "base_stats": {
                    "hp": 60,
                    "attack": 45,
                    "defense": 70,
                    "special_attack": 75,
                    "special_defense": 85,
                    "speed": 55
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
                "type_2": "Psychic",
                "catch_rate": 100,
                "base_experience": 137,
                "gender_ratio": 191,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Frisk"
                ],
                "hidden_ability": "Shadow Tag",
                "weight": 18.0,
                "pokedex_entry": "pokedex/black2_white2.js#Gothorita",
                "event_name": "Gothorita",
                "level": 32,
                "shiny": false,
                "gender": "Male",
                "ability": "Shadow Tag",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Psyshock",
                    "Flatter",
                    "Future Sight",
                    "Mirror Coat"
                ],
                "met_location": "Entree Forest",
                "met_level": 32,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "August 9, 2012 to July 31, 2013",
                        "start_date": "2012-08-09",
                        "end_date": "2013-07-31",
                        "password": "One-time use",
                        "details": "The password for this Pokémon was available in game guide Pokémon Black 2 and White 2 Official National Pokédex Complete Guide."
                    },
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "November 22, 2012 to July 25, 2013",
                        "start_date": "2012-11-22",
                        "end_date": "2013-07-25",
                        "password": "PGLPK15G",
                        "details": "By buying the Pokémon Black Version 2 & Pokémon White Version 2: The Official National Pokédex which released on November 19, 2012, players could find the password to obtain Gothorita."
                    },
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "November 11, 2012 to September 3, 2013",
                        "start_date": "2012-11-11",
                        "end_date": "2013-09-03",
                        "password": "One-time use",
                        "details": "By buying the official guidebook for Pokémon Black 2 and White 2, players could find a serial number to obtain Gothorita. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Pikachu": [
            {
                "species": "Pikachu",
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
                "hidden_ability": "Lightning Rod",
                "weight": 6.0,
                "pokedex_entry": "pokedex/black2_white2.js#Pikachu",
                "event_name": "Pikachu",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Lightningrod",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "ThunderShock",
                    "Tail Whip",
                    "Thunder Wave",
                    "Headbutt"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "September 19, 2012 to January 31, 2013",
                        "start_date": "2012-09-19",
                        "end_date": "2013-01-31",
                        "details": "Fans with a Pokémon Daisuki Club account could play the game 「夏休み大作戦！2012 ポケモンスポーツリーグ」 Big Summer Vacation Plan! 2012: Pokémon Sports League."
                    },
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "November 9, 2012 to May 30, 2013",
                        "start_date": "2012-11-09",
                        "end_date": "2013-05-30",
                        "password": "One-time use (Germany, Italy, UK)",
                        "details": "The password was obtainable in Black 2 or White 2 copies purchased at Toys \"R\" Us stores in Germany, GameStop stores in Italy, and from Amazon.co.uk from November 12 to December 31, 2012."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Jumpluff": [
            {
                "species": "Jumpluff",
                "national_dex_number": 189,
                "base_stats": {
                    "hp": 75,
                    "attack": 55,
                    "defense": 70,
                    "special_attack": 55,
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
                "pokedex_entry": "pokedex/black2_white2.js#Jumpluff",
                "event_name": "Jumpluff",
                "level": 27,
                "shiny": false,
                "gender": "Male",
                "ability": "Infiltrator",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "False Swipe",
                    "Sleep Powder",
                    "Bullet Seed",
                    "Leech Seed"
                ],
                "met_location": "Entree Forest",
                "met_level": 27,
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
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "October 11, 2012 to September 3, 2013",
                        "start_date": "2012-10-11",
                        "end_date": "2013-09-03",
                        "password": "목표전국도감완성",
                        "password_translation": "Goal: National Pokédex Complete",
                        "details": "By buying the 「포켓몬스터 블랙·화이트 공식 알기 쉬운 포켓몬 전국도감」 Pocket Monsters Black and White: Official Easy-to-Read National Pokédex Guide Book, a Korean language versions of the National Pokédex guide book, players could find a serial number to obtain Jumpluff. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Pansage": [
            {
                "species": "Pansage",
                "national_dex_number": 511,
                "base_stats": {
                    "hp": 50,
                    "attack": 53,
                    "defense": 48,
                    "special_attack": 53,
                    "special_defense": 48,
                    "speed": 64
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
                "catch_rate": 190,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Gluttony"
                ],
                "hidden_ability": "Overgrow",
                "weight": 10.5,
                "pokedex_entry": "pokedex/black2_white2.js#Pansage",
                "event_name": "Pansage",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Overgrow",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Leer",
                    "Lick",
                    "Vine Whip",
                    "Leaf Storm"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 15, 2012 to January 10, 2013",
                        "start_date": "2012-11-15",
                        "end_date": "2013-01-10",
                        "password": "しんりょくリーフストーム",
                        "password_translation": "Fresh Greenery Leaf Storm",
                        "details": "The password was revealed on Pokémon Daisuki Club. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Pansear": [
            {
                "species": "Pansear",
                "national_dex_number": 513,
                "base_stats": {
                    "hp": 50,
                    "attack": 53,
                    "defense": 48,
                    "special_attack": 53,
                    "special_defense": 48,
                    "speed": 64
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
                "catch_rate": 190,
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Gluttony"
                ],
                "hidden_ability": "Blaze",
                "weight": 11.0,
                "pokedex_entry": "pokedex/black2_white2.js#Pansear",
                "event_name": "Pansear",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Blaze",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Leer",
                    "Lick",
                    "Incinerate",
                    "Heat Wave"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 15, 2012 to January 10, 2013",
                        "start_date": "2012-11-15",
                        "end_date": "2013-01-10",
                        "password": "もうかねっぷう",
                        "password_translation": "Raging Flames Hot Wind",
                        "details": "Players who purchased the Famitsu magazine would receive a password. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Panpour": [
            {
                "species": "Panpour",
                "national_dex_number": 515,
                "base_stats": {
                    "hp": 50,
                    "attack": 53,
                    "defense": 48,
                    "special_attack": 53,
                    "special_defense": 48,
                    "speed": 64
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
                "base_experience": 63,
                "gender_ratio": 31,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Fast",
                "egg_group_1": "Ground",
                "egg_group_2": "Ground",
                "abilities": [
                    "Gluttony"
                ],
                "hidden_ability": "Torrent",
                "weight": 13.5,
                "pokedex_entry": "pokedex/black2_white2.js#Panpour",
                "event_name": "Panpour",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Torrent",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Leer",
                    "Lick",
                    "Water Gun",
                    "Hydro Pump"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "November 15, 2012 to January 10, 2013",
                        "start_date": "2012-11-15",
                        "end_date": "2013-01-10",
                        "password": "げきりゅうハイドロポンプ",
                        "password_translation": "Raging Rapids Hydro Pump",
                        "details": "Players who purchased a Pokémon Fan magazine would receive a password. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Walmart Turtwig": [
            {
                "species": "Turtwig",
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
                "pokedex_entry": "pokedex/black2_white2.js#Turtwig",
                "event_name": "Walmart Turtwig",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Shell Armor",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Tackle",
                    "Withdraw",
                    "Absorb",
                    "Stockpile"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "US",
                        "date": "December 6, 2012 to July 31, 2013",
                        "start_date": "2012-12-06",
                        "end_date": "2013-07-31",
                        "password": "One-time use (US)",
                        "details": "The password for this promotion came with specially marked copies of Pokémon Black 2 and White 2 available in participating American Walmart stores starting December 6. Copies with the password were limited."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Walmart Chimchar": [
            {
                "species": "Chimchar",
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
                "pokedex_entry": "pokedex/black2_white2.js#Chimchar",
                "event_name": "Walmart Chimchar",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Iron Fist",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Leer",
                    "Ember",
                    "Taunt",
                    "Fake Out"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "US",
                        "date": "December 6, 2012 to July 31, 2013",
                        "start_date": "2012-12-06",
                        "end_date": "2013-07-31",
                        "password": "One-time use (US)",
                        "details": "The password for this promotion came with specially marked copies of Pokémon Black 2 and White 2 available in participating American Walmart stores starting December 6. Copies with the password were limited."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Walmart Piplup": [
            {
                "species": "Piplup",
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
                "pokedex_entry": "pokedex/black2_white2.js#Piplup",
                "event_name": "Walmart Piplup",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Defiant",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Pound",
                    "Growl",
                    "Bubble",
                    "FeatherDance"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "location": "US",
                        "date": "December 6, 2012 to July 31, 2013",
                        "start_date": "2012-12-06",
                        "end_date": "2013-07-31",
                        "password": "One-time use (US)",
                        "details": "The password for this promotion came with specially marked copies of Pokémon Black 2 and White 2 available in participating American Walmart stores starting December 6. Copies with the password were limited."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Imprison Gothorita": [
            {
                "species": "Gothorita",
                "national_dex_number": 575,
                "base_stats": {
                    "hp": 60,
                    "attack": 45,
                    "defense": 70,
                    "special_attack": 75,
                    "special_defense": 85,
                    "speed": 55
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
                "type_2": "Psychic",
                "catch_rate": 100,
                "base_experience": 137,
                "gender_ratio": 191,
                "egg_cycles": 20,
                "base_friendship": 70,
                "growth_rate": "Medium Slow",
                "egg_group_1": "HumanLike",
                "egg_group_2": "HumanLike",
                "abilities": [
                    "Frisk"
                ],
                "hidden_ability": "Shadow Tag",
                "weight": 18.0,
                "pokedex_entry": "pokedex/black2_white2.js#Gothorita",
                "event_name": "Imprison Gothorita",
                "level": 32,
                "shiny": false,
                "gender": "Male",
                "ability": "Shadow Tag",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Psyshock",
                    "Flatter",
                    "Future Sight",
                    "Imprison"
                ],
                "met_location": "Entree Forest",
                "met_level": 32,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "December 14, 2012 to August 27, 2013",
                        "start_date": "2012-12-14",
                        "end_date": "2013-08-27",
                        "details": "This Pokémon was available by downloading 「ポケットモンスターブラック２・ホワイト２ 公式ガイドブック」 Pokémon Black and White 2 Official Strategy Guide Book app in the Japanese iTunes Store and Google Play for iOS and Android devices, respectively."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Scizor": [
            {
                "species": "Scizor",
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
                "hidden_ability": "Light Metal",
                "weight": 118.0,
                "pokedex_entry": "pokedex/black2_white2.js#Scizor",
                "event_name": "Scizor",
                "level": 10,
                "shiny": false,
                "gender": "Male",
                "ability": "Light Metal",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Leer",
                    "Focus Energy",
                    "Pursuit",
                    "Steel Wing"
                ],
                "met_location": "Entree Forest",
                "met_level": 10,
                "games": [
                    "Black",
                    "White",
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White",
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "December 20, 2012 to February 21, 2013",
                        "start_date": "2012-12-20",
                        "end_date": "2013-02-21",
                        "details": "This Pokémon was available to players who attended Pokémon League events during the Aspertia Gym season. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Garchomp": [
            {
                "species": "Garchomp",
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
                "pokedex_entry": "pokedex/black2_white2.js#Garchomp",
                "event_name": "Garchomp",
                "level": 48,
                "shiny": false,
                "gender": "Male",
                "ability": "Rough Skin",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Slash",
                    "Dragon Claw",
                    "Dig",
                    "Crunch"
                ],
                "met_location": "Entree Forest",
                "met_level": 48,
                "games": [
                    "Black",
                    "White",
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White",
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "January 30 to February 28, 2013",
                        "start_date": "2013-01-30",
                        "end_date": "2013-02-28",
                        "details": "This Pokémon was available to players who attended Pokémon League events during the Virbank Gym season. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Dragonite": [
            {
                "species": "Dragonite",
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
                "pokedex_entry": "pokedex/black2_white2.js#Dragonite",
                "event_name": "Dragonite",
                "level": 55,
                "shiny": false,
                "gender": "Male",
                "ability": "Multiscale",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Dragon Rush",
                    "Safeguard",
                    "Wing Attack",
                    "ThunderPunch"
                ],
                "met_location": "Entree Forest",
                "met_level": 55,
                "games": [
                    "Black",
                    "White",
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White",
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Japanese",
                        "date": "March 14 to 25, 2013",
                        "start_date": "2013-03-14",
                        "end_date": "2013-03-25",
                        "password": "130314pokemonbw2",
                        "details": "The password was obtained from the Pokémon Data Broadcast from the animated series episode that aired on March 14, 2013. This Dragonite is based on Iris's Dragonite."
                    },
                    {
                        "games": [
                            "Black",
                            "White",
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "Korean",
                        "date": "April 5 to May 14, 2013",
                        "start_date": "2013-04-05",
                        "end_date": "2013-05-14",
                        "password": "아이리스",
                        "password_translation": "Iris",
                        "details": "This is the sixth promotion distributed by JR.NAVER. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Tyranitar": [
            {
                "species": "Tyranitar",
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
                "pokedex_entry": "pokedex/black2_white2.js#Tyranitar",
                "event_name": "Tyranitar",
                "level": 55,
                "shiny": false,
                "gender": "Male",
                "ability": "Unnerve",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Payback",
                    "Crunch",
                    "Earthquake",
                    "Seismic Toss"
                ],
                "met_location": "Entree Forest",
                "met_level": 55,
                "games": [
                    "Black",
                    "White",
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White",
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "March 14 to May 23, 2013",
                        "start_date": "2013-03-14",
                        "end_date": "2013-05-23",
                        "details": "This Pokémon was available to players who attended Pokémon League events during the Castelia Gym season. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "ExtremeSpeed Dragonite": [
            {
                "species": "Dragonite",
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
                "pokedex_entry": "pokedex/black2_white2.js#Dragonite",
                "event_name": "ExtremeSpeed Dragonite",
                "level": 55,
                "shiny": false,
                "gender": "Male",
                "ability": "Multiscale",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Dragon Rush",
                    "Safeguard",
                    "Wing Attack",
                    "ExtremeSpeed"
                ],
                "met_location": "Entree Forest",
                "met_level": 55,
                "games": [
                    "Black",
                    "White",
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black",
                            "White",
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "April 2 to June 27, 2013",
                        "start_date": "2013-04-02",
                        "end_date": "2013-06-27",
                        "details": "This Pokémon was available to players who attended Pokémon League events during the Nimbasa Gym season. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Metagross": [
            {
                "species": "Metagross",
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
                "pokedex_entry": "pokedex/black2_white2.js#Metagross",
                "event_name": "Metagross",
                "level": 45,
                "shiny": false,
                "ability": "Light Metal",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Iron Defense",
                    "Agility",
                    "Hammer Arm",
                    "Double-Edge"
                ],
                "met_location": "Entree Forest",
                "met_level": 45,
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
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 30 to July 25, 2013",
                        "start_date": "2013-05-30",
                        "end_date": "2013-07-25",
                        "details": "This Pokémon was available to players who attended Pokémon League events during the Driftveil Gym season. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ],
        "Driftveil Gym Season Metagross": [
            {
                "species": "Metagross",
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
                "pokedex_entry": "pokedex/black2_white2.js#Metagross",
                "event_name": "Driftveil Gym Season Metagross",
                "level": 45,
                "shiny": false,
                "ability": "Light Metal",
                "ball": "Dream Ball",
                "ot": "(Player's)",
                "trainer_id": "(Player's)",
                "moves": [
                    "Psychic",
                    "Meteor Mash",
                    "Hammer Arm",
                    "Double-Edge"
                ],
                "met_location": "Entree Forest",
                "met_level": 45,
                "games": [
                    "Black 2",
                    "White 2"
                ],
                "distributions": [
                    {
                        "games": [
                            "Black 2",
                            "White 2"
                        ],
                        "method": "Global Link",
                        "language": "English, French, German, Italian, Spanish",
                        "date": "May 30 to July 25, 2013",
                        "start_date": "2013-05-30",
                        "end_date": "2013-07-25",
                        "details": "This Pokémon was available to players who attended Pokémon League events during the Driftveil Gym season. Additional information can be found here."
                    }
                ],
                "source_page": "List of Pokémon Global Link promotions/Pokémon"
            }
        ]
    }
};
