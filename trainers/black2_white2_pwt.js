// Pokemon World Tournament trainers, extracted from the Black 2 / White 2 ROM.
// Source files: a/2/5/5 (pwttr6 roster), a/2/5/4 (pwttr1 1v1), a/2/5/6 (pwtpoke sets).
// All PWT Pokemon are level 50. Ability/IVs are game-derived and not stored per-Pokemon.
// ev_spread_index selects an in-game EV preset (the preset table is in the game binary).

export const pwtTrainers = {
    "1": {
        "pwt_index": 1,
        "roster": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            },
            {
                "species": "Porygon-Z",
                "species_dex": 474,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Signal Beam",
                    "Thunder"
                ]
            },
            {
                "species": "Cinccino",
                "species_dex": 573,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Tail Slap",
                    "Rock Blast",
                    "Bullet Seed",
                    "Aqua Tail"
                ]
            },
            {
                "species": "Lickilicky",
                "species_dex": 463,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Expert Belt",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Power Whip",
                    "Thunder",
                    "Ice Punch"
                ]
            },
            {
                "species": "Castform",
                "species_dex": 351,
                "level": 50,
                "nature": "Modest",
                "held_item": "Lum Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Weather Ball",
                    "Ice Beam",
                    "Rain Dance",
                    "Thunder"
                ]
            },
            {
                "species": "Bouffalant",
                "species_dex": 626,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Head Charge",
                    "Megahorn",
                    "Wild Charge",
                    "Revenge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            }
        ]
    },
    "2": {
        "pwt_index": 2,
        "roster": [
            {
                "species": "Scolipede",
                "species_dex": 545,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Poison Jab",
                    "Megahorn",
                    "Earthquake",
                    "Rock Slide"
                ]
            },
            {
                "species": "Toxicroak",
                "species_dex": 454,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Poison Jab",
                    "Swords Dance",
                    "Drain Punch",
                    "Protect"
                ]
            },
            {
                "species": "Garbodor",
                "species_dex": 569,
                "level": 50,
                "nature": "Modest",
                "held_item": "Expert Belt",
                "ev_spread_index": 20,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Thunderbolt",
                    "Focus Blast",
                    "Protect"
                ]
            },
            {
                "species": "Crobat",
                "species_dex": 169,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Psychic Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Cross Poison",
                    "Zen Headbutt",
                    "Tailwind",
                    "Brave Bird"
                ]
            },
            {
                "species": "Drapion",
                "species_dex": 452,
                "level": 50,
                "nature": "Impish",
                "held_item": "Scope Lens",
                "ev_spread_index": 48,
                "form": 0,
                "moves": [
                    "Cross Poison",
                    "Night Slash",
                    "Ice Fang",
                    "Protect"
                ]
            },
            {
                "species": "Amoonguss",
                "species_dex": 591,
                "level": 50,
                "nature": "Bold",
                "held_item": "Black Sludge",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Foul Play",
                    "Spore",
                    "Giga Drain",
                    "Protect"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Scolipede",
                "species_dex": 545,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Poison Jab",
                    "Megahorn",
                    "Earthquake",
                    "Rock Slide"
                ]
            }
        ]
    },
    "3": {
        "pwt_index": 3,
        "roster": [
            {
                "species": "Leavanny",
                "species_dex": 542,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Leaf Blade",
                    "Aerial Ace",
                    "Swords Dance"
                ]
            },
            {
                "species": "Vespiquen",
                "species_dex": 416,
                "level": 50,
                "nature": "Impish",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Attack Order",
                    "Defend Order",
                    "Roost",
                    "Toxic"
                ]
            },
            {
                "species": "Crustle",
                "species_dex": 558,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Salac Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Rock Blast",
                    "Earthquake",
                    "Shell Smash"
                ]
            },
            {
                "species": "Heracross",
                "species_dex": 214,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Megahorn",
                    "Close Combat",
                    "Shadow Claw",
                    "Stone Edge"
                ]
            },
            {
                "species": "Accelgor",
                "species_dex": 617,
                "level": 50,
                "nature": "Timid",
                "held_item": "BrightPowder",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Bug Buzz",
                    "Focus Blast",
                    "Giga Drain",
                    "Double Team"
                ]
            },
            {
                "species": "Durant",
                "species_dex": 632,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Wide Lens",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Iron Head",
                    "Stone Edge",
                    "Guillotine"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Leavanny",
                "species_dex": 542,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Leaf Blade",
                    "Aerial Ace",
                    "Swords Dance"
                ]
            }
        ]
    },
    "4": {
        "pwt_index": 4,
        "roster": [
            {
                "species": "Zebstrika",
                "species_dex": 523,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Overheat",
                    "Return",
                    "Quick Attack"
                ]
            },
            {
                "species": "Ampharos",
                "species_dex": 181,
                "level": 50,
                "nature": "Modest",
                "held_item": "Shuca Berry",
                "ev_spread_index": 20,
                "form": 0,
                "moves": [
                    "Discharge",
                    "Signal Beam",
                    "Power Gem",
                    "Focus Blast"
                ]
            },
            {
                "species": "Luxray",
                "species_dex": 405,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Fire Fang",
                    "Ice Fang",
                    "Quick Attack"
                ]
            },
            {
                "species": "Emolga",
                "species_dex": 587,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Flying Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "U-turn",
                    "Wild Charge",
                    "Acrobatics",
                    "Charm"
                ]
            },
            {
                "species": "Eelektross",
                "species_dex": 604,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "ThunderPunch",
                    "Fire Punch",
                    "Dragon Claw",
                    "Brick Break"
                ]
            },
            {
                "species": "Stunfisk",
                "species_dex": 618,
                "level": 50,
                "nature": "Modest",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Discharge",
                    "Earth Power",
                    "Scald",
                    "Foul Play"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Zebstrika",
                "species_dex": 523,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Overheat",
                    "Return",
                    "Quick Attack"
                ]
            }
        ]
    },
    "5": {
        "pwt_index": 5,
        "roster": [
            {
                "species": "Excadrill",
                "species_dex": 530,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Drill Run",
                    "Rock Slide",
                    "Submission",
                    "Swords Dance"
                ]
            },
            {
                "species": "Flygon",
                "species_dex": 330,
                "level": 50,
                "nature": "Naive",
                "held_item": "Liechi Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earth Power",
                    "Fire Blast",
                    "Stone Edge"
                ]
            },
            {
                "species": "Krookodile",
                "species_dex": 553,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Fire Fang",
                    "Stone Edge",
                    "Aqua Tail"
                ]
            },
            {
                "species": "Seismitoad",
                "species_dex": 537,
                "level": 50,
                "nature": "Modest",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Hydro Pump",
                    "Focus Blast",
                    "Grass Knot"
                ]
            },
            {
                "species": "Mamoswine",
                "species_dex": 473,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Ice Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Ice Shard",
                    "Stone Edge",
                    "Fissure"
                ]
            },
            {
                "species": "Golurk",
                "species_dex": 623,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Substitute",
                    "Shadow Punch",
                    "Earthquake",
                    "Focus Punch"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Excadrill",
                "species_dex": 530,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Drill Run",
                    "Rock Slide",
                    "Submission",
                    "Swords Dance"
                ]
            }
        ]
    },
    "6": {
        "pwt_index": 6,
        "roster": [
            {
                "species": "Swanna",
                "species_dex": 581,
                "level": 50,
                "nature": "Modest",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hurricane",
                    "Scald",
                    "Ice Beam",
                    "Tailwind"
                ]
            },
            {
                "species": "Jumpluff",
                "species_dex": 189,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Flying Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Sleep Powder",
                    "Acrobatics",
                    "Bullet Seed",
                    "U-turn"
                ]
            },
            {
                "species": "Drifblim",
                "species_dex": 426,
                "level": 50,
                "nature": "Timid",
                "held_item": "Expert Belt",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Thunderbolt",
                    "Psychic",
                    "Icy Wind"
                ]
            },
            {
                "species": "Mandibuzz",
                "species_dex": 630,
                "level": 50,
                "nature": "Modest",
                "held_item": "Salac Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Dark Pulse",
                    "Air Slash",
                    "Nasty Plot",
                    "Roost"
                ]
            },
            {
                "species": "Archeops",
                "species_dex": 567,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Acrobatics",
                    "Stone Edge",
                    "Earthquake",
                    "Dragon Claw"
                ]
            },
            {
                "species": "Braviary",
                "species_dex": 628,
                "level": 50,
                "nature": "Jolly",
                "held_item": "White Herb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Brave Bird",
                    "Superpower",
                    "Rock Slide",
                    "U-turn"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Swanna",
                "species_dex": 581,
                "level": 50,
                "nature": "Modest",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hurricane",
                    "Scald",
                    "Ice Beam",
                    "Tailwind"
                ]
            }
        ]
    },
    "7": {
        "pwt_index": 7,
        "roster": [
            {
                "species": "Haxorus",
                "species_dex": 612,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earthquake",
                    "Brick Break",
                    "Dragon Dance"
                ]
            },
            {
                "species": "Druddigon",
                "species_dex": 621,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Dragon Tail",
                    "Fire Fang",
                    "Glare",
                    "Rest"
                ]
            },
            {
                "species": "Hydreigon",
                "species_dex": 635,
                "level": 50,
                "nature": "Timid",
                "held_item": "Choice Specs",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Dragon Pulse",
                    "Dark Pulse",
                    "Fire Blast",
                    "Focus Blast"
                ]
            },
            {
                "species": "Flygon",
                "species_dex": 330,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Draco Meteor",
                    "Fire Blast",
                    "U-turn"
                ]
            },
            {
                "species": "Altaria",
                "species_dex": 334,
                "level": 50,
                "nature": "Calm",
                "held_item": "Yache Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Draco Meteor",
                    "Roost",
                    "Perish Song",
                    "Cotton Guard"
                ]
            },
            {
                "species": "Salamence",
                "species_dex": 373,
                "level": 50,
                "nature": "Naive",
                "held_item": "White Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Draco Meteor",
                    "Hydro Pump",
                    "Fire Blast",
                    "Tailwind"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Haxorus",
                "species_dex": 612,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earthquake",
                    "Brick Break",
                    "Dragon Dance"
                ]
            }
        ]
    },
    "8": {
        "pwt_index": 8,
        "roster": [
            {
                "species": "Jellicent",
                "species_dex": 593,
                "level": 50,
                "nature": "Modest",
                "held_item": "Expert Belt",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Energy Ball",
                    "Shadow Ball",
                    "Psychic"
                ]
            },
            {
                "species": "Carracosta",
                "species_dex": 565,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Lum Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Rock Slide",
                    "Aqua Jet",
                    "Shell Smash"
                ]
            },
            {
                "species": "Starmie",
                "species_dex": 121,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Scald",
                    "Light Screen",
                    "Reflect",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Quagsire",
                "species_dex": 195,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Rindo Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Waterfall",
                    "Counter"
                ]
            },
            {
                "species": "Cloyster",
                "species_dex": 91,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Ice Shard",
                    "Rock Blast",
                    "Icicle Spear",
                    "Shell Smash"
                ]
            },
            {
                "species": "Wailord",
                "species_dex": 321,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Water Spout",
                    "Fissure",
                    "Blizzard",
                    "Bounce"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Jellicent",
                "species_dex": 593,
                "level": 50,
                "nature": "Modest",
                "held_item": "Expert Belt",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Energy Ball",
                    "Shadow Ball",
                    "Psychic"
                ]
            }
        ]
    },
    "9": {
        "pwt_index": 9,
        "roster": [
            {
                "species": "Musharna",
                "species_dex": 518,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Calm Mind",
                    "Stored Power",
                    "Moonlight",
                    "Shadow Ball"
                ]
            },
            {
                "species": "Samurott",
                "species_dex": 503,
                "level": 50,
                "nature": "Quiet",
                "held_item": "Zoom Lens",
                "ev_spread_index": 18,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Aqua Jet",
                    "Hydro Pump",
                    "Megahorn"
                ]
            },
            {
                "species": "Emboar",
                "species_dex": 500,
                "level": 50,
                "nature": "Mild",
                "held_item": "Life Orb",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Scald",
                    "Superpower",
                    "Overheat",
                    "Grass Knot"
                ]
            },
            {
                "species": "Serperior",
                "species_dex": 497,
                "level": 50,
                "nature": "Timid",
                "held_item": "Light Clay",
                "ev_spread_index": 12,
                "form": 0,
                "moves": [
                    "Light Screen",
                    "Glare",
                    "Leaf Storm",
                    "Reflect"
                ]
            },
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Chople Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Wild Charge",
                    "Crunch",
                    "Ice Fang"
                ]
            },
            {
                "species": "Haxorus",
                "species_dex": 612,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earthquake",
                    "Aqua Tail",
                    "Guillotine"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Musharna",
                "species_dex": 518,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Calm Mind",
                    "Stored Power",
                    "Moonlight",
                    "Shadow Ball"
                ]
            }
        ]
    },
    "10": {
        "pwt_index": 10,
        "roster": [
            {
                "species": "Simisear",
                "species_dex": 514,
                "level": 50,
                "nature": "Naive",
                "held_item": "Fire Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Low Kick",
                    "Acrobatics",
                    "Crunch"
                ]
            },
            {
                "species": "Camerupt",
                "species_dex": 323,
                "level": 50,
                "nature": "Brave",
                "held_item": "Shuca Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Stone Edge",
                    "Earthquake",
                    "Explosion"
                ]
            },
            {
                "species": "Heatmor",
                "species_dex": 631,
                "level": 50,
                "nature": "Modest",
                "held_item": "Focus Sash",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Sucker Punch",
                    "Focus Blast",
                    "Sunny Day"
                ]
            },
            {
                "species": "Darmanitan",
                "species_dex": 555,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Flare Blitz",
                    "Hammer Arm",
                    "Stone Edge",
                    "U-turn"
                ]
            },
            {
                "species": "Arcanine",
                "species_dex": 59,
                "level": 50,
                "nature": "Timid",
                "held_item": "Power Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Dragon Pulse",
                    "SolarBeam",
                    "ExtremeSpeed"
                ]
            },
            {
                "species": "Emboar",
                "species_dex": 500,
                "level": 50,
                "nature": "Lonely",
                "held_item": "Expert Belt",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Flare Blitz",
                    "Head Smash",
                    "Hammer Arm",
                    "Wild Charge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Simisear",
                "species_dex": 514,
                "level": 50,
                "nature": "Naive",
                "held_item": "Fire Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Low Kick",
                    "Acrobatics",
                    "Crunch"
                ]
            }
        ]
    },
    "11": {
        "pwt_index": 11,
        "roster": [
            {
                "species": "Simipour",
                "species_dex": 516,
                "level": 50,
                "nature": "Naive",
                "held_item": "Water Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Low Kick",
                    "Acrobatics",
                    "Crunch"
                ]
            },
            {
                "species": "Crawdaunt",
                "species_dex": 342,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Crunch",
                    "Waterfall",
                    "Brick Break",
                    "Guillotine"
                ]
            },
            {
                "species": "Samurott",
                "species_dex": 503,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Razor Shell",
                    "Megahorn",
                    "Aqua Jet",
                    "Revenge"
                ]
            },
            {
                "species": "Azumarill",
                "species_dex": 184,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Aqua Jet",
                    "Aqua Tail",
                    "Superpower",
                    "Giga Impact"
                ]
            },
            {
                "species": "Slowking",
                "species_dex": 199,
                "level": 50,
                "nature": "Bold",
                "held_item": "Expert Belt",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Blizzard",
                    "Fire Blast",
                    "Nasty Plot"
                ]
            },
            {
                "species": "Seismitoad",
                "species_dex": 537,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Rindo Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Poison Jab",
                    "Earth Power",
                    "Rain Dance"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Simipour",
                "species_dex": 516,
                "level": 50,
                "nature": "Naive",
                "held_item": "Water Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Low Kick",
                    "Acrobatics",
                    "Crunch"
                ]
            }
        ]
    },
    "12": {
        "pwt_index": 12,
        "roster": [
            {
                "species": "Simisage",
                "species_dex": 512,
                "level": 50,
                "nature": "Naive",
                "held_item": "Grass Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Seed Bomb",
                    "Low Kick",
                    "Acrobatics",
                    "Crunch"
                ]
            },
            {
                "species": "Ferrothorn",
                "species_dex": 598,
                "level": 50,
                "nature": "Brave",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Power Whip",
                    "Gyro Ball",
                    "Bulldoze",
                    "Explosion"
                ]
            },
            {
                "species": "Serperior",
                "species_dex": 497,
                "level": 50,
                "nature": "Impish",
                "held_item": "Leftovers",
                "ev_spread_index": 12,
                "form": 0,
                "moves": [
                    "Leech Seed",
                    "Protect",
                    "Aerial Ace",
                    "Leaf Blade"
                ]
            },
            {
                "species": "Jumpluff",
                "species_dex": 189,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Leech Seed",
                    "Cotton Guard",
                    "Giga Drain",
                    "Sleep Powder"
                ]
            },
            {
                "species": "Whimsicott",
                "species_dex": 547,
                "level": 50,
                "nature": "Calm",
                "held_item": "Mental Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Giga Drain",
                    "Substitute",
                    "Hurricane",
                    "Leech Seed"
                ]
            },
            {
                "species": "Lilligant",
                "species_dex": 549,
                "level": 50,
                "nature": "Timid",
                "held_item": "Miracle Seed",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Petal Dance",
                    "Quiver Dance",
                    "Sleep Powder",
                    "Dream Eater"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Simisage",
                "species_dex": 512,
                "level": 50,
                "nature": "Naive",
                "held_item": "Grass Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Seed Bomb",
                    "Low Kick",
                    "Acrobatics",
                    "Crunch"
                ]
            }
        ]
    },
    "13": {
        "pwt_index": 13,
        "roster": [
            {
                "species": "Watchog",
                "species_dex": 505,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Super Fang",
                    "Flail",
                    "Confuse Ray",
                    "Hypnosis"
                ]
            },
            {
                "species": "Cinccino",
                "species_dex": 573,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Swift",
                    "Focus Blast",
                    "Grass Knot",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Braviary",
                "species_dex": 628,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Power Herb",
                "ev_spread_index": 42,
                "form": 0,
                "moves": [
                    "Sky Attack",
                    "Superpower",
                    "U-turn",
                    "Tailwind"
                ]
            },
            {
                "species": "Sawsbuck",
                "species_dex": 586,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Horn Leech",
                    "Megahorn",
                    "Wild Charge"
                ]
            },
            {
                "species": "Kangaskhan",
                "species_dex": 115,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Chople Berry",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Fake Out",
                    "Ice Punch",
                    "Hammer Arm",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Lickilicky",
                "species_dex": 463,
                "level": 50,
                "nature": "Modest",
                "held_item": "Expert Belt",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Flamethrower",
                    "Ice Beam",
                    "Surf",
                    "Thunderbolt"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Watchog",
                "species_dex": 505,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Super Fang",
                    "Flail",
                    "Confuse Ray",
                    "Hypnosis"
                ]
            }
        ]
    },
    "14": {
        "pwt_index": 14,
        "roster": [
            {
                "species": "Cryogonal",
                "species_dex": 615,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Flash Cannon",
                    "Sheer Cold",
                    "Ice Shard"
                ]
            },
            {
                "species": "Beartic",
                "species_dex": 614,
                "level": 50,
                "nature": "Adamant",
                "held_item": "BrightPowder",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Icicle Crash",
                    "Focus Punch",
                    "Substitute",
                    "Swords Dance"
                ]
            },
            {
                "species": "Vanilluxe",
                "species_dex": 584,
                "level": 50,
                "nature": "Timid",
                "held_item": "Leftovers",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Protect",
                    "Weather Ball",
                    "Hail"
                ]
            },
            {
                "species": "Weavile",
                "species_dex": 461,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Night Slash",
                    "Ice Shard",
                    "Fake Out",
                    "Brick Break"
                ]
            },
            {
                "species": "Dewgong",
                "species_dex": 87,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Jet",
                    "Frost Breath",
                    "Drill Run",
                    "Fake Out"
                ]
            },
            {
                "species": "Walrein",
                "species_dex": 365,
                "level": 50,
                "nature": "Brave",
                "held_item": "Expert Belt",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Aqua Tail",
                    "Super Fang",
                    "Avalanche"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Cryogonal",
                "species_dex": 615,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Flash Cannon",
                    "Sheer Cold",
                    "Ice Shard"
                ]
            }
        ]
    },
    "15": {
        "pwt_index": 15,
        "roster": [
            {
                "species": "Aerodactyl",
                "species_dex": 142,
                "level": 50,
                "nature": "Naive",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Ice Fang",
                    "Fire Blast"
                ]
            },
            {
                "species": "Exeggutor",
                "species_dex": 103,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Life Orb",
                "ev_spread_index": 18,
                "form": 0,
                "moves": [
                    "Leaf Storm",
                    "Wood Hammer",
                    "Zen Headbutt",
                    "Leech Seed"
                ]
            },
            {
                "species": "Gyarados",
                "species_dex": 130,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Earthquake",
                    "Ice Fang",
                    "Outrage"
                ]
            },
            {
                "species": "Alakazam",
                "species_dex": 65,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Focus Blast",
                    "Shadow Ball",
                    "Reflect"
                ]
            },
            {
                "species": "Arcanine",
                "species_dex": 59,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Flare Blitz",
                    "Close Combat",
                    "Wild Charge",
                    "ExtremeSpeed"
                ]
            },
            {
                "species": "Machamp",
                "species_dex": 68,
                "level": 50,
                "nature": "Adamant",
                "held_item": "White Herb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Superpower",
                    "Stone Edge",
                    "Fire Punch",
                    "Bullet Punch"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Alakazam",
                "species_dex": 65,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Focus Blast",
                    "Shadow Ball",
                    "Reflect"
                ]
            }
        ]
    },
    "16": {
        "pwt_index": 16,
        "roster": [
            {
                "species": "Dragonite",
                "species_dex": 149,
                "level": 50,
                "nature": "Lonely",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "ExtremeSpeed",
                    "Ice Punch",
                    "Fire Punch",
                    "Draco Meteor"
                ]
            },
            {
                "species": "Salamence",
                "species_dex": 373,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Dragon Claw",
                    "Crunch",
                    "Earthquake",
                    "Stone Edge"
                ]
            },
            {
                "species": "Kingdra",
                "species_dex": 230,
                "level": 50,
                "nature": "Modest",
                "held_item": "Scope Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Surf",
                    "Ice Beam",
                    "Dragon Pulse",
                    "Flash Cannon"
                ]
            },
            {
                "species": "Hydreigon",
                "species_dex": 635,
                "level": 50,
                "nature": "Modest",
                "held_item": "White Herb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Draco Meteor",
                    "Fire Blast",
                    "Earth Power",
                    "Dark Pulse"
                ]
            },
            {
                "species": "Haxorus",
                "species_dex": 612,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 2,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Superpower",
                    "Earthquake",
                    "Rock Slide"
                ]
            },
            {
                "species": "Flygon",
                "species_dex": 330,
                "level": 50,
                "nature": "Modest",
                "held_item": "Power Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "SolarBeam",
                    "Draco Meteor",
                    "Earth Power",
                    "U-turn"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Dragonite",
                "species_dex": 149,
                "level": 50,
                "nature": "Lonely",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "ExtremeSpeed",
                    "Ice Punch",
                    "Fire Punch",
                    "Draco Meteor"
                ]
            }
        ]
    },
    "17": {
        "pwt_index": 17,
        "roster": [
            {
                "species": "Metagross",
                "species_dex": 376,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Occa Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Bullet Punch",
                    "Zen Headbutt",
                    "Earthquake"
                ]
            },
            {
                "species": "Aggron",
                "species_dex": 306,
                "level": 50,
                "nature": "Brave",
                "held_item": "Air Balloon",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Head Smash",
                    "Metal Burst",
                    "Earthquake",
                    "Avalanche"
                ]
            },
            {
                "species": "Excadrill",
                "species_dex": 530,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Rock Slide",
                    "X-Scissor",
                    "Sandstorm"
                ]
            },
            {
                "species": "Archeops",
                "species_dex": 567,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Quick Attack",
                    "Acrobatics",
                    "Head Smash",
                    "Earthquake"
                ]
            },
            {
                "species": "Cradily",
                "species_dex": 346,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Seed Bomb",
                    "Earthquake",
                    "Sandstorm"
                ]
            },
            {
                "species": "Armaldo",
                "species_dex": 348,
                "level": 50,
                "nature": "Adamant",
                "held_item": "White Herb",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Rock Blast",
                    "Earthquake",
                    "Superpower"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Metagross",
                "species_dex": 376,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Occa Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Bullet Punch",
                    "Zen Headbutt",
                    "Earthquake"
                ]
            }
        ]
    },
    "18": {
        "pwt_index": 18,
        "roster": [
            {
                "species": "Milotic",
                "species_dex": 350,
                "level": 50,
                "nature": "Calm",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Scald",
                    "Icy Wind",
                    "Rest",
                    "Sleep Talk"
                ]
            },
            {
                "species": "Sharpedo",
                "species_dex": 319,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Jet",
                    "Zen Headbutt",
                    "Hydro Pump",
                    "Crunch"
                ]
            },
            {
                "species": "Walrein",
                "species_dex": 365,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Yawn",
                    "Blizzard",
                    "Surf",
                    "Sheer Cold"
                ]
            },
            {
                "species": "Ludicolo",
                "species_dex": 272,
                "level": 50,
                "nature": "Modest",
                "held_item": "Life Orb",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Giga Drain",
                    "Surf",
                    "Focus Blast",
                    "Rain Dance"
                ]
            },
            {
                "species": "Swampert",
                "species_dex": 260,
                "level": 50,
                "nature": "Quiet",
                "held_item": "Rindo Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Ice Beam",
                    "Muddy Water",
                    "Earth Power",
                    "Focus Blast"
                ]
            },
            {
                "species": "Starmie",
                "species_dex": 121,
                "level": 50,
                "nature": "Timid",
                "held_item": "Expert Belt",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Psychic",
                    "Surf",
                    "Signal Beam"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Milotic",
                "species_dex": 350,
                "level": 50,
                "nature": "Calm",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Scald",
                    "Icy Wind",
                    "Rest",
                    "Sleep Talk"
                ]
            }
        ]
    },
    "19": {
        "pwt_index": 19,
        "roster": [
            {
                "species": "Garchomp",
                "species_dex": 445,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earthquake",
                    "Stone Edge",
                    "Swords Dance"
                ]
            },
            {
                "species": "Spiritomb",
                "species_dex": 442,
                "level": 50,
                "nature": "Calm",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Pain Split",
                    "Will-O-Wisp",
                    "Protect",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Togekiss",
                "species_dex": 468,
                "level": 50,
                "nature": "Timid",
                "held_item": "Leftovers",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Air Slash",
                    "Aura Sphere",
                    "Grass Knot",
                    "Shadow Ball"
                ]
            },
            {
                "species": "Lucario",
                "species_dex": 448,
                "level": 50,
                "nature": "Naive",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Close Combat",
                    "Stone Edge",
                    "ExtremeSpeed",
                    "Dark Pulse"
                ]
            },
            {
                "species": "Roserade",
                "species_dex": 407,
                "level": 50,
                "nature": "Timid",
                "held_item": "White Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Leaf Storm",
                    "Shadow Ball",
                    "Sludge Bomb",
                    "Sleep Powder"
                ]
            },
            {
                "species": "Glaceon",
                "species_dex": 471,
                "level": 50,
                "nature": "Timid",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Ice Beam",
                    "Signal Beam",
                    "Shadow Ball",
                    "Water Pulse"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Garchomp",
                "species_dex": 445,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earthquake",
                    "Stone Edge",
                    "Swords Dance"
                ]
            }
        ]
    },
    "20": {
        "pwt_index": 20,
        "roster": [
            {
                "species": "Volcarona",
                "species_dex": 637,
                "level": 50,
                "nature": "Modest",
                "held_item": "Charti Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Quiver Dance",
                    "Heat Wave",
                    "Bug Buzz",
                    "Psychic"
                ]
            },
            {
                "species": "Conkeldurr",
                "species_dex": 534,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Mach Punch",
                    "Payback",
                    "Stone Edge"
                ]
            },
            {
                "species": "Reuniclus",
                "species_dex": 579,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Light Screen",
                    "Reflect",
                    "Toxic",
                    "Psychic"
                ]
            },
            {
                "species": "Krookodile",
                "species_dex": 553,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Crunch",
                    "Stone Edge",
                    "Outrage"
                ]
            },
            {
                "species": "Chandelure",
                "species_dex": 609,
                "level": 50,
                "nature": "Modest",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Flamethrower",
                    "Shadow Ball",
                    "Energy Ball",
                    "Psychic"
                ]
            },
            {
                "species": "Braviary",
                "species_dex": 628,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Brave Bird",
                    "Superpower",
                    "Rock Slide",
                    "U-turn"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Volcarona",
                "species_dex": 637,
                "level": 50,
                "nature": "Modest",
                "held_item": "Charti Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Quiver Dance",
                    "Heat Wave",
                    "Bug Buzz",
                    "Psychic"
                ]
            }
        ]
    },
    "21": {
        "pwt_index": 21,
        "roster": [
            {
                "species": "Onix",
                "species_dex": 95,
                "level": 50,
                "nature": "Impish",
                "held_item": "Eviolite",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Iron Head",
                    "Sandstorm"
                ]
            },
            {
                "species": "Golem",
                "species_dex": 76,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Lum Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Rock Polish",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Kabutops",
                "species_dex": 141,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Rock Slide",
                    "X-Scissor",
                    "Swords Dance"
                ]
            },
            {
                "species": "Tyranitar",
                "species_dex": 248,
                "level": 50,
                "nature": "Brave",
                "held_item": "Chople Berry",
                "ev_spread_index": 51,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Payback",
                    "ThunderPunch",
                    "Ice Punch"
                ]
            },
            {
                "species": "Aerodactyl",
                "species_dex": 142,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Rock Slide",
                    "Earthquake",
                    "Fire Fang",
                    "Ice Fang"
                ]
            },
            {
                "species": "Rhyperior",
                "species_dex": 464,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Stone Edge",
                    "Megahorn",
                    "Avalanche"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Onix",
                "species_dex": 95,
                "level": 50,
                "nature": "Impish",
                "held_item": "Eviolite",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Iron Head",
                    "Sandstorm"
                ]
            }
        ]
    },
    "22": {
        "pwt_index": 22,
        "roster": [
            {
                "species": "Starmie",
                "species_dex": 121,
                "level": 50,
                "nature": "Modest",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Grass Knot",
                    "Psychic",
                    "Thunderbolt",
                    "Ice Beam"
                ]
            },
            {
                "species": "Lanturn",
                "species_dex": 171,
                "level": 50,
                "nature": "Calm",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 48,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Scald",
                    "Ice Beam",
                    "Toxic"
                ]
            },
            {
                "species": "Jellicent",
                "species_dex": 593,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Recover",
                    "Surf",
                    "Shadow Ball",
                    "Will-O-Wisp"
                ]
            },
            {
                "species": "Lapras",
                "species_dex": 131,
                "level": 50,
                "nature": "Sassy",
                "held_item": "Zoom Lens",
                "ev_spread_index": 53,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Blizzard",
                    "Ice Shard",
                    "Sheer Cold"
                ]
            },
            {
                "species": "Quagsire",
                "species_dex": 195,
                "level": 50,
                "nature": "Impish",
                "held_item": "Focus Sash",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Yawn",
                    "Waterfall",
                    "Earthquake",
                    "Rain Dance"
                ]
            },
            {
                "species": "Blastoise",
                "species_dex": 9,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Salac Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Outrage",
                    "Avalanche",
                    "Iron Defense"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Starmie",
                "species_dex": 121,
                "level": 50,
                "nature": "Modest",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Grass Knot",
                    "Psychic",
                    "Thunderbolt",
                    "Ice Beam"
                ]
            }
        ]
    },
    "23": {
        "pwt_index": 23,
        "roster": [
            {
                "species": "Raichu",
                "species_dex": 26,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Volt Tackle",
                    "Fake Out",
                    "Focus Punch",
                    "Thunder Wave"
                ]
            },
            {
                "species": "Electrode",
                "species_dex": 101,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Electro Ball",
                    "Signal Beam",
                    "Thunder Wave",
                    "Double Team"
                ]
            },
            {
                "species": "Magnezone",
                "species_dex": 462,
                "level": 50,
                "nature": "Modest",
                "held_item": "Air Balloon",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Discharge",
                    "Flash Cannon",
                    "Signal Beam",
                    "Magnet Rise"
                ]
            },
            {
                "species": "Electivire",
                "species_dex": 466,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Expert Belt",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Earthquake",
                    "Cross Chop",
                    "Ice Punch"
                ]
            },
            {
                "species": "Jolteon",
                "species_dex": 135,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Shuca Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Quick Attack",
                    "Iron Tail",
                    "Double Team",
                    "Volt Switch"
                ]
            },
            {
                "species": "Lanturn",
                "species_dex": 171,
                "level": 50,
                "nature": "Modest",
                "held_item": "Wide Lens",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Thunder",
                    "Hydro Pump",
                    "Blizzard",
                    "Signal Beam"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Raichu",
                "species_dex": 26,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Volt Tackle",
                    "Fake Out",
                    "Focus Punch",
                    "Thunder Wave"
                ]
            }
        ]
    },
    "24": {
        "pwt_index": 24,
        "roster": [
            {
                "species": "Vileplume",
                "species_dex": 45,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Black Sludge",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Drain Punch",
                    "Swords Dance",
                    "Synthesis",
                    "Sleep Powder"
                ]
            },
            {
                "species": "Venusaur",
                "species_dex": 3,
                "level": 50,
                "nature": "Brave",
                "held_item": "Expert Belt",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Leaf Storm",
                    "Power Whip",
                    "Earthquake",
                    "Outrage"
                ]
            },
            {
                "species": "Cradily",
                "species_dex": 346,
                "level": 50,
                "nature": "Sassy",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Recover",
                    "Seed Bomb",
                    "Curse"
                ]
            },
            {
                "species": "Exeggutor",
                "species_dex": 103,
                "level": 50,
                "nature": "Quiet",
                "held_item": "Tanga Berry",
                "ev_spread_index": 48,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Psyshock",
                    "Leaf Storm",
                    "AncientPower"
                ]
            },
            {
                "species": "Tangrowth",
                "species_dex": 465,
                "level": 50,
                "nature": "Modest",
                "held_item": "Power Herb",
                "ev_spread_index": 20,
                "form": 0,
                "moves": [
                    "SolarBeam",
                    "AncientPower",
                    "Focus Blast",
                    "Synthesis"
                ]
            },
            {
                "species": "Abomasnow",
                "species_dex": 460,
                "level": 50,
                "nature": "Calm",
                "held_item": "Focus Sash",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Leech Seed",
                    "Protect",
                    "Sheer Cold"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Vileplume",
                "species_dex": 45,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Black Sludge",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Drain Punch",
                    "Swords Dance",
                    "Synthesis",
                    "Sleep Powder"
                ]
            }
        ]
    },
    "25": {
        "pwt_index": 25,
        "roster": [
            {
                "species": "Alakazam",
                "species_dex": 65,
                "level": 50,
                "nature": "Timid",
                "held_item": "Kasib Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Shadow Ball",
                    "Focus Blast",
                    "Charge Beam"
                ]
            },
            {
                "species": "Metagross",
                "species_dex": 376,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Shadow Ball",
                    "Signal Beam",
                    "Grass Knot"
                ]
            },
            {
                "species": "Exeggutor",
                "species_dex": 103,
                "level": 50,
                "nature": "Modest",
                "held_item": "Tanga Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Energy Ball",
                    "Sleep Powder",
                    "Dream Eater"
                ]
            },
            {
                "species": "Slowking",
                "species_dex": 199,
                "level": 50,
                "nature": "Calm",
                "held_item": "Choice Specs",
                "ev_spread_index": 48,
                "form": 0,
                "moves": [
                    "Scald",
                    "Psychic",
                    "Shadow Ball",
                    "Focus Blast"
                ]
            },
            {
                "species": "Espeon",
                "species_dex": 196,
                "level": 50,
                "nature": "Timid",
                "held_item": "Leftovers",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psyshock",
                    "Signal Beam",
                    "Psychic",
                    "Calm Mind"
                ]
            },
            {
                "species": "Sigilyph",
                "species_dex": 561,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Air Slash",
                    "Ice Beam",
                    "Light Screen"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Alakazam",
                "species_dex": 65,
                "level": 50,
                "nature": "Timid",
                "held_item": "Kasib Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Shadow Ball",
                    "Focus Blast",
                    "Charge Beam"
                ]
            }
        ]
    },
    "26": {
        "pwt_index": 26,
        "roster": [
            {
                "species": "Arcanine",
                "species_dex": 59,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Close Combat",
                    "ExtremeSpeed",
                    "Bulldoze"
                ]
            },
            {
                "species": "Ninetales",
                "species_dex": 38,
                "level": 50,
                "nature": "Timid",
                "held_item": "Charti Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Energy Ball",
                    "Psyshock",
                    "Will-O-Wisp"
                ]
            },
            {
                "species": "Charizard",
                "species_dex": 6,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Flamethrower",
                    "Air Slash",
                    "Focus Blast",
                    "Dragon Pulse"
                ]
            },
            {
                "species": "Magmortar",
                "species_dex": 467,
                "level": 50,
                "nature": "Timid",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Psychic",
                    "Thunderbolt",
                    "Rock Slide"
                ]
            },
            {
                "species": "Flareon",
                "species_dex": 136,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Passho Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Superpower",
                    "Quick Attack",
                    "Overheat",
                    "Toxic"
                ]
            },
            {
                "species": "Rotom",
                "species_dex": 479,
                "level": 50,
                "nature": "Bold",
                "held_item": "Flame Orb",
                "ev_spread_index": 5,
                "form": 1,
                "moves": [
                    "Trick",
                    "Overheat",
                    "Thunderbolt",
                    "Pain Split"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Arcanine",
                "species_dex": 59,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Close Combat",
                    "ExtremeSpeed",
                    "Bulldoze"
                ]
            }
        ]
    },
    "27": {
        "pwt_index": 27,
        "roster": [
            {
                "species": "Rhyperior",
                "species_dex": 464,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Rock Blast",
                    "Ice Punch",
                    "Hammer Arm"
                ]
            },
            {
                "species": "Hippowdon",
                "species_dex": 450,
                "level": 50,
                "nature": "Brave",
                "held_item": "Quick Claw",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Crunch",
                    "Ice Fang",
                    "Stone Edge"
                ]
            },
            {
                "species": "Garchomp",
                "species_dex": 445,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Earthquake",
                    "Rock Slide",
                    "Brick Break"
                ]
            },
            {
                "species": "Krookodile",
                "species_dex": 553,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Expert Belt",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Superpower",
                    "Fire Fang",
                    "Grass Knot"
                ]
            },
            {
                "species": "Nidoking",
                "species_dex": 34,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Specs",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Ice Beam",
                    "Flamethrower",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Gliscor",
                "species_dex": 472,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Flying Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Acrobatics",
                    "Earthquake",
                    "Fire Fang",
                    "Tailwind"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Rhyperior",
                "species_dex": 464,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Rock Blast",
                    "Ice Punch",
                    "Hammer Arm"
                ]
            }
        ]
    },
    "28": {
        "pwt_index": 28,
        "roster": [
            {
                "species": "Pidgeot",
                "species_dex": 18,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Return",
                    "Swagger",
                    "Double Team",
                    "Air Slash"
                ]
            },
            {
                "species": "Crobat",
                "species_dex": 169,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Red Card",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Super Fang",
                    "Taunt",
                    "Acrobatics",
                    "Confuse Ray"
                ]
            },
            {
                "species": "Aerodactyl",
                "species_dex": 142,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Ice Fang",
                    "Rock Slide",
                    "Protect"
                ]
            },
            {
                "species": "Honchkrow",
                "species_dex": 430,
                "level": 50,
                "nature": "Naive",
                "held_item": "Choice Scarf",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Night Slash",
                    "Brave Bird",
                    "Heat Wave",
                    "Icy Wind"
                ]
            },
            {
                "species": "Xatu",
                "species_dex": 178,
                "level": 50,
                "nature": "Timid",
                "held_item": "Leftovers",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Calm Mind",
                    "Psyshock",
                    "Stored Power",
                    "Roost"
                ]
            },
            {
                "species": "Swellow",
                "species_dex": 277,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Flame Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Facade",
                    "Protect",
                    "Endeavor",
                    "Aerial Ace"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Pidgeot",
                "species_dex": 18,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Return",
                    "Swagger",
                    "Double Team",
                    "Air Slash"
                ]
            }
        ]
    },
    "29": {
        "pwt_index": 29,
        "roster": [
            {
                "species": "Scizor",
                "species_dex": 212,
                "level": 50,
                "nature": "Careful",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Bullet Punch",
                    "U-turn",
                    "Swords Dance",
                    "Acrobatics"
                ]
            },
            {
                "species": "Shuckle",
                "species_dex": 213,
                "level": 50,
                "nature": "Careful",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Power Split",
                    "Stone Edge",
                    "Earthquake",
                    "Toxic"
                ]
            },
            {
                "species": "Heracross",
                "species_dex": 214,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Megahorn",
                    "Stone Edge",
                    "Close Combat",
                    "Shadow Claw"
                ]
            },
            {
                "species": "Pinsir",
                "species_dex": 127,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Bulldoze",
                    "Guillotine",
                    "Protect"
                ]
            },
            {
                "species": "Armaldo",
                "species_dex": 348,
                "level": 50,
                "nature": "Careful",
                "held_item": "Quick Claw",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Stone Edge",
                    "X-Scissor",
                    "Swords Dance"
                ]
            },
            {
                "species": "Yanmega",
                "species_dex": 469,
                "level": 50,
                "nature": "Modest",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Protect",
                    "Bug Buzz",
                    "Air Slash",
                    "Giga Drain"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Scizor",
                "species_dex": 212,
                "level": 50,
                "nature": "Careful",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Bullet Punch",
                    "U-turn",
                    "Swords Dance",
                    "Acrobatics"
                ]
            }
        ]
    },
    "30": {
        "pwt_index": 30,
        "roster": [
            {
                "species": "Miltank",
                "species_dex": 241,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Lum Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Return",
                    "Zen Headbutt",
                    "Brick Break",
                    "Milk Drink"
                ]
            },
            {
                "species": "Blissey",
                "species_dex": 242,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Softboiled",
                    "Flamethrower",
                    "Grass Knot",
                    "Toxic"
                ]
            },
            {
                "species": "Tauros",
                "species_dex": 128,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Earthquake",
                    "Rock Slide",
                    "Protect"
                ]
            },
            {
                "species": "Ambipom",
                "species_dex": 424,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Fake Out",
                    "Double Hit",
                    "Low Sweep",
                    "Ice Punch"
                ]
            },
            {
                "species": "Ursaring",
                "species_dex": 217,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Toxic Orb",
                "ev_spread_index": 35,
                "form": 0,
                "moves": [
                    "Facade",
                    "Swords Dance",
                    "Crunch",
                    "Rock Slide"
                ]
            },
            {
                "species": "Lopunny",
                "species_dex": 428,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Chople Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Entrainment",
                    "Return",
                    "Low Kick",
                    "Encore"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Miltank",
                "species_dex": 241,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Lum Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Return",
                    "Zen Headbutt",
                    "Brick Break",
                    "Milk Drink"
                ]
            }
        ]
    },
    "31": {
        "pwt_index": 31,
        "roster": [
            {
                "species": "Gengar",
                "species_dex": 94,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Focus Blast",
                    "Giga Drain",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Mismagius",
                "species_dex": 429,
                "level": 50,
                "nature": "Bold",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 21,
                "form": 0,
                "moves": [
                    "Perish Song",
                    "Mean Look",
                    "Will-O-Wisp",
                    "Confuse Ray"
                ]
            },
            {
                "species": "Banette",
                "species_dex": 354,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Ghost Gem",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Shadow Claw",
                    "Sucker Punch",
                    "Destiny Bond",
                    "Gunk Shot"
                ]
            },
            {
                "species": "Dusknoir",
                "species_dex": 477,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Shadow Sneak",
                    "Will-O-Wisp",
                    "Protect",
                    "Fire Punch"
                ]
            },
            {
                "species": "Chandelure",
                "species_dex": 609,
                "level": 50,
                "nature": "Modest",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Shadow Ball",
                    "Energy Ball",
                    "Psychic"
                ]
            },
            {
                "species": "Froslass",
                "species_dex": 478,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Ice Beam",
                    "Shadow Ball",
                    "Thunder Wave",
                    "Destiny Bond"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Gengar",
                "species_dex": 94,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Focus Blast",
                    "Giga Drain",
                    "Thunderbolt"
                ]
            }
        ]
    },
    "32": {
        "pwt_index": 32,
        "roster": [
            {
                "species": "Poliwrath",
                "species_dex": 62,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 42,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Belly Drum",
                    "Rock Slide",
                    "Hypnosis"
                ]
            },
            {
                "species": "Machamp",
                "species_dex": 68,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "DynamicPunch",
                    "Stone Edge",
                    "Ice Punch",
                    "Earthquake"
                ]
            },
            {
                "species": "Hitmontop",
                "species_dex": 237,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Wide Lens",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Mach Punch",
                    "Feint",
                    "Triple Kick",
                    "Bullet Punch"
                ]
            },
            {
                "species": "Hitmonchan",
                "species_dex": 107,
                "level": 50,
                "nature": "Impish",
                "held_item": "Leftovers",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Drain Punch",
                    "ThunderPunch",
                    "Ice Punch",
                    "Double Team"
                ]
            },
            {
                "species": "Hitmonlee",
                "species_dex": 106,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Hi Jump Kick",
                    "Fake Out",
                    "Bulldoze",
                    "Stone Edge"
                ]
            },
            {
                "species": "Conkeldurr",
                "species_dex": 534,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Fighting Gem",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Drain Punch",
                    "Mach Punch",
                    "Rock Slide",
                    "Earthquake"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Poliwrath",
                "species_dex": 62,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 42,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Belly Drum",
                    "Rock Slide",
                    "Hypnosis"
                ]
            }
        ]
    },
    "33": {
        "pwt_index": 33,
        "roster": [
            {
                "species": "Steelix",
                "species_dex": 208,
                "level": 50,
                "nature": "Brave",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Earthquake",
                    "Stealth Rock",
                    "Curse"
                ]
            },
            {
                "species": "Magnezone",
                "species_dex": 462,
                "level": 50,
                "nature": "Calm",
                "held_item": "Quick Claw",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Flash Cannon",
                    "Mirror Coat",
                    "Magnet Rise"
                ]
            },
            {
                "species": "Forretress",
                "species_dex": 205,
                "level": 50,
                "nature": "Careful",
                "held_item": "Iron Ball",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Gyro Ball",
                    "Toxic",
                    "Explosion"
                ]
            },
            {
                "species": "Skarmory",
                "species_dex": 227,
                "level": 50,
                "nature": "Careful",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Curse",
                    "Roost",
                    "Aerial Ace",
                    "Stealth Rock"
                ]
            },
            {
                "species": "Metagross",
                "species_dex": 376,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Air Balloon",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Meteor Mash",
                    "Bullet Punch",
                    "Earthquake",
                    "Explosion"
                ]
            },
            {
                "species": "Lucario",
                "species_dex": 448,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "ExtremeSpeed",
                    "Crunch",
                    "Aura Sphere",
                    "Stone Edge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Steelix",
                "species_dex": 208,
                "level": 50,
                "nature": "Brave",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Earthquake",
                    "Stealth Rock",
                    "Curse"
                ]
            }
        ]
    },
    "34": {
        "pwt_index": 34,
        "roster": [
            {
                "species": "Mamoswine",
                "species_dex": 473,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Ice Shard",
                    "Icicle Spear",
                    "Endeavor"
                ]
            },
            {
                "species": "Jynx",
                "species_dex": 124,
                "level": 50,
                "nature": "Timid",
                "held_item": "Psychic Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Psyshock",
                    "Focus Blast",
                    "Lovely Kiss"
                ]
            },
            {
                "species": "Dewgong",
                "species_dex": 87,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Lum Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Dive",
                    "Sheer Cold",
                    "Sleep Talk",
                    "Rest"
                ]
            },
            {
                "species": "Cloyster",
                "species_dex": 91,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Icicle Spear",
                    "Shell Smash",
                    "Explosion",
                    "Rock Blast"
                ]
            },
            {
                "species": "Lapras",
                "species_dex": 131,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chesto Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Ice Beam",
                    "Surf",
                    "Thunderbolt",
                    "Rest"
                ]
            },
            {
                "species": "Weavile",
                "species_dex": 461,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Ice Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Ice Punch",
                    "Night Slash",
                    "Low Kick",
                    "Fake Out"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Mamoswine",
                "species_dex": 473,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Ice Shard",
                    "Icicle Spear",
                    "Endeavor"
                ]
            }
        ]
    },
    "35": {
        "pwt_index": 35,
        "roster": [
            {
                "species": "Dragonite",
                "species_dex": 149,
                "level": 50,
                "nature": "Lonely",
                "held_item": "Yache Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Draco Meteor",
                    "Earthquake",
                    "ExtremeSpeed",
                    "Outrage"
                ]
            },
            {
                "species": "Kingdra",
                "species_dex": 230,
                "level": 50,
                "nature": "Impish",
                "held_item": "Chesto Berry",
                "ev_spread_index": 25,
                "form": 0,
                "moves": [
                    "Dragon Dance",
                    "Outrage",
                    "Waterfall",
                    "Rest"
                ]
            },
            {
                "species": "Altaria",
                "species_dex": 334,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Cotton Guard",
                    "Toxic",
                    "Double Team",
                    "Fire Blast"
                ]
            },
            {
                "species": "Salamence",
                "species_dex": 373,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Dragon Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Draco Meteor",
                    "Outrage",
                    "Rock Slide",
                    "Earthquake"
                ]
            },
            {
                "species": "Druddigon",
                "species_dex": 621,
                "level": 50,
                "nature": "Careful",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Revenge",
                    "Sucker Punch",
                    "Glare",
                    "Dragon Claw"
                ]
            },
            {
                "species": "Garchomp",
                "species_dex": 445,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Dual Chop",
                    "Fire Fang",
                    "Swords Dance"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Kingdra",
                "species_dex": 230,
                "level": 50,
                "nature": "Impish",
                "held_item": "Chesto Berry",
                "ev_spread_index": 25,
                "form": 0,
                "moves": [
                    "Dragon Dance",
                    "Outrage",
                    "Waterfall",
                    "Rest"
                ]
            }
        ]
    },
    "36": {
        "pwt_index": 36,
        "roster": [
            {
                "species": "Venomoth",
                "species_dex": 49,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Quiver Dance",
                    "Sleep Powder",
                    "Bug Buzz",
                    "Psychic"
                ]
            },
            {
                "species": "Weezing",
                "species_dex": 110,
                "level": 50,
                "nature": "Calm",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 37,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Will-O-Wisp",
                    "Sludge Bomb",
                    "Flamethrower"
                ]
            },
            {
                "species": "Nidoqueen",
                "species_dex": 31,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 56,
                "form": 0,
                "moves": [
                    "Sludge Wave",
                    "Ice Beam",
                    "Earth Power",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Crobat",
                "species_dex": 169,
                "level": 50,
                "nature": "Careful",
                "held_item": "Black Sludge",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Brave Bird",
                    "Hypnosis",
                    "Toxic",
                    "Protect"
                ]
            },
            {
                "species": "Roserade",
                "species_dex": 407,
                "level": 50,
                "nature": "Timid",
                "held_item": "Leftovers",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Leaf Storm",
                    "Sleep Powder",
                    "Substitute",
                    "Leech Seed"
                ]
            },
            {
                "species": "Tentacruel",
                "species_dex": 73,
                "level": 50,
                "nature": "Calm",
                "held_item": "Chesto Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Sludge Bomb",
                    "Scald",
                    "Ice Beam",
                    "Rest"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Venomoth",
                "species_dex": 49,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Quiver Dance",
                    "Sleep Powder",
                    "Bug Buzz",
                    "Psychic"
                ]
            }
        ]
    },
    "37": {
        "pwt_index": 37,
        "roster": [
            {
                "species": "Probopass",
                "species_dex": 476,
                "level": 50,
                "nature": "Bold",
                "held_item": "Air Balloon",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Power Gem",
                    "Earth Power",
                    "Pain Split",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Armaldo",
                "species_dex": 348,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Lum Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Rock Slide",
                    "Rock Polish",
                    "Earthquake",
                    "X-Scissor"
                ]
            },
            {
                "species": "Cradily",
                "species_dex": 346,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Toxic",
                    "Giga Drain",
                    "Amnesia",
                    "Rock Slide"
                ]
            },
            {
                "species": "Aggron",
                "species_dex": 306,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Head Smash",
                    "Iron Head",
                    "Metal Burst",
                    "Avalanche"
                ]
            },
            {
                "species": "Carracosta",
                "species_dex": 565,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Water Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Shell Smash",
                    "Rock Slide",
                    "Aqua Jet"
                ]
            },
            {
                "species": "Golem",
                "species_dex": 76,
                "level": 50,
                "nature": "Impish",
                "held_item": "Ground Gem",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Focus Punch",
                    "Protect",
                    "Earthquake",
                    "Fire Punch"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Probopass",
                "species_dex": 476,
                "level": 50,
                "nature": "Bold",
                "held_item": "Air Balloon",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Power Gem",
                    "Earth Power",
                    "Pain Split",
                    "Thunderbolt"
                ]
            }
        ]
    },
    "38": {
        "pwt_index": 38,
        "roster": [
            {
                "species": "Hariyama",
                "species_dex": 297,
                "level": 50,
                "nature": "Careful",
                "held_item": "Chesto Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Bulk Up",
                    "Rest",
                    "Revenge",
                    "Stone Edge"
                ]
            },
            {
                "species": "Scrafty",
                "species_dex": 560,
                "level": 50,
                "nature": "Impish",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Bulk Up",
                    "Drain Punch",
                    "Dragon Tail",
                    "Amnesia"
                ]
            },
            {
                "species": "Breloom",
                "species_dex": 286,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Spore",
                    "Focus Punch",
                    "Seed Bomb",
                    "Stone Edge"
                ]
            },
            {
                "species": "Machamp",
                "species_dex": 68,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "DynamicPunch",
                    "Stone Edge",
                    "Fire Punch",
                    "Earthquake"
                ]
            },
            {
                "species": "Mienshao",
                "species_dex": 620,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Hi Jump Kick",
                    "Fake Out",
                    "Aerial Ace",
                    "Drain Punch"
                ]
            },
            {
                "species": "Heracross",
                "species_dex": 214,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Megahorn",
                    "Close Combat",
                    "Stone Edge",
                    "Aerial Ace"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Hariyama",
                "species_dex": 297,
                "level": 50,
                "nature": "Careful",
                "held_item": "Chesto Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Bulk Up",
                    "Rest",
                    "Revenge",
                    "Stone Edge"
                ]
            }
        ]
    },
    "39": {
        "pwt_index": 39,
        "roster": [
            {
                "species": "Manectric",
                "species_dex": 310,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Flamethrower",
                    "Thunder Wave",
                    "Double Team"
                ]
            },
            {
                "species": "Magnezone",
                "species_dex": 462,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Toxic",
                    "Protect",
                    "Flash Cannon"
                ]
            },
            {
                "species": "Electrode",
                "species_dex": 101,
                "level": 50,
                "nature": "Timid",
                "held_item": "Air Balloon",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunder",
                    "Signal Beam",
                    "Swagger",
                    "Thunder Wave"
                ]
            },
            {
                "species": "Rotom",
                "species_dex": 479,
                "level": 50,
                "nature": "Timid",
                "held_item": "Wide Lens",
                "ev_spread_index": 24,
                "form": 2,
                "moves": [
                    "Thunder",
                    "Hydro Pump",
                    "Hex",
                    "Will-O-Wisp"
                ]
            },
            {
                "species": "Ampharos",
                "species_dex": 181,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 10,
                "form": 5,
                "moves": [
                    "Fire Punch",
                    "ThunderPunch",
                    "Bulldoze",
                    "Brick Break"
                ]
            },
            {
                "species": "Raichu",
                "species_dex": 26,
                "level": 50,
                "nature": "Modest",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunder",
                    "Focus Blast",
                    "Grass Knot",
                    "Swagger"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Manectric",
                "species_dex": 310,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Flamethrower",
                    "Thunder Wave",
                    "Double Team"
                ]
            }
        ]
    },
    "40": {
        "pwt_index": 40,
        "roster": [
            {
                "species": "Torkoal",
                "species_dex": 324,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Earthquake",
                    "Stone Edge",
                    "Yawn"
                ]
            },
            {
                "species": "Camerupt",
                "species_dex": 323,
                "level": 50,
                "nature": "Calm",
                "held_item": "Passho Berry",
                "ev_spread_index": 27,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Fissure",
                    "Will-O-Wisp",
                    "Flamethrower"
                ]
            },
            {
                "species": "Chandelure",
                "species_dex": 609,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Flamethrower",
                    "Flame Charge",
                    "Shadow Ball",
                    "Calm Mind"
                ]
            },
            {
                "species": "Blaziken",
                "species_dex": 257,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Air Balloon",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Hi Jump Kick",
                    "Earthquake",
                    "Flame Charge",
                    "Stone Edge"
                ]
            },
            {
                "species": "Houndoom",
                "species_dex": 229,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Sucker Punch",
                    "Flame Charge",
                    "Will-O-Wisp"
                ]
            },
            {
                "species": "Magmortar",
                "species_dex": 467,
                "level": 50,
                "nature": "Timid",
                "held_item": "Shuca Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Thunderbolt",
                    "Flame Charge",
                    "Psychic"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Torkoal",
                "species_dex": 324,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Overheat",
                    "Earthquake",
                    "Stone Edge",
                    "Yawn"
                ]
            }
        ]
    },
    "41": {
        "pwt_index": 41,
        "roster": [
            {
                "species": "Slaking",
                "species_dex": 289,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Eject Button",
                "ev_spread_index": 42,
                "form": 0,
                "moves": [
                    "Giga Impact",
                    "Night Slash",
                    "Earthquake",
                    "Hammer Arm"
                ]
            },
            {
                "species": "Ambipom",
                "species_dex": 424,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Normal Gem",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Return",
                    "Acrobatics",
                    "Fake Out",
                    "Fire Punch"
                ]
            },
            {
                "species": "Bouffalant",
                "species_dex": 626,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Head Charge",
                    "Stone Edge",
                    "Megahorn",
                    "Revenge"
                ]
            },
            {
                "species": "Staraptor",
                "species_dex": 398,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Brave Bird",
                    "Close Combat",
                    "Quick Attack",
                    "Final Gambit"
                ]
            },
            {
                "species": "Exploud",
                "species_dex": 295,
                "level": 50,
                "nature": "Timid",
                "held_item": "Expert Belt",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hyper Voice",
                    "Fire Blast",
                    "Blizzard",
                    "Focus Blast"
                ]
            },
            {
                "species": "Sawsbuck",
                "species_dex": 586,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Chesto Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Horn Leech",
                    "Return",
                    "Swords Dance",
                    "Rest"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Slaking",
                "species_dex": 289,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Eject Button",
                "ev_spread_index": 42,
                "form": 0,
                "moves": [
                    "Giga Impact",
                    "Night Slash",
                    "Earthquake",
                    "Hammer Arm"
                ]
            }
        ]
    },
    "42": {
        "pwt_index": 42,
        "roster": [
            {
                "species": "Altaria",
                "species_dex": 334,
                "level": 50,
                "nature": "Impish",
                "held_item": "Power Herb",
                "ev_spread_index": 37,
                "form": 0,
                "moves": [
                    "Sky Attack",
                    "Cotton Guard",
                    "Dragon Dance",
                    "Earthquake"
                ]
            },
            {
                "species": "Sigilyph",
                "species_dex": 561,
                "level": 50,
                "nature": "Modest",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Air Slash",
                    "AncientPower",
                    "Thunder Wave"
                ]
            },
            {
                "species": "Gyarados",
                "species_dex": 130,
                "level": 50,
                "nature": "Careful",
                "held_item": "Leftovers",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Dragon Dance",
                    "Substitute",
                    "Waterfall",
                    "Ice Fang"
                ]
            },
            {
                "species": "Skarmory",
                "species_dex": 227,
                "level": 50,
                "nature": "Sassy",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Whirlwind",
                    "Spikes",
                    "Steel Wing",
                    "Aerial Ace"
                ]
            },
            {
                "species": "Tropius",
                "species_dex": 357,
                "level": 50,
                "nature": "Timid",
                "held_item": "Yache Berry",
                "ev_spread_index": 41,
                "form": 0,
                "moves": [
                    "Sunny Day",
                    "Air Slash",
                    "SolarBeam",
                    "Attract"
                ]
            },
            {
                "species": "Honchkrow",
                "species_dex": 430,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Dark Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Drill Peck",
                    "Tailwind",
                    "Sucker Punch",
                    "Icy Wind"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Altaria",
                "species_dex": 334,
                "level": 50,
                "nature": "Impish",
                "held_item": "Power Herb",
                "ev_spread_index": 37,
                "form": 0,
                "moves": [
                    "Sky Attack",
                    "Cotton Guard",
                    "Dragon Dance",
                    "Earthquake"
                ]
            }
        ]
    },
    "43": {
        "pwt_index": 43,
        "roster": [
            {
                "species": "Solrock",
                "species_dex": 338,
                "level": 50,
                "nature": "Careful",
                "held_item": "Passho Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Rock Slide",
                    "Zen Headbutt",
                    "Trick Room",
                    "Earthquake"
                ]
            },
            {
                "species": "Xatu",
                "species_dex": 178,
                "level": 50,
                "nature": "Calm",
                "held_item": "Focus Sash",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Light Screen",
                    "Shadow Ball",
                    "Trick Room"
                ]
            },
            {
                "species": "Bronzong",
                "species_dex": 437,
                "level": 50,
                "nature": "Sassy",
                "held_item": "Lum Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Earthquake",
                    "Zen Headbutt",
                    "Trick Room"
                ]
            },
            {
                "species": "Reuniclus",
                "species_dex": 579,
                "level": 50,
                "nature": "Quiet",
                "held_item": "Life Orb",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Shadow Ball",
                    "Focus Blast",
                    "Trick Room"
                ]
            },
            {
                "species": "Gallade",
                "species_dex": 475,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Scope Lens",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Psycho Cut",
                    "Night Slash",
                    "Close Combat",
                    "Ice Punch"
                ]
            },
            {
                "species": "Claydol",
                "species_dex": 344,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Kasib Berry",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Trick Room",
                    "Explosion",
                    "Psychic",
                    "Light Screen"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Solrock",
                "species_dex": 338,
                "level": 50,
                "nature": "Careful",
                "held_item": "Passho Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Rock Slide",
                    "Zen Headbutt",
                    "Trick Room",
                    "Earthquake"
                ]
            }
        ]
    },
    "44": {
        "pwt_index": 44,
        "roster": [
            {
                "species": "Lunatone",
                "species_dex": 337,
                "level": 50,
                "nature": "Calm",
                "held_item": "Expert Belt",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Grass Knot",
                    "Cosmic Power",
                    "Trick Room",
                    "Signal Beam"
                ]
            },
            {
                "species": "Xatu",
                "species_dex": 178,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 19,
                "form": 0,
                "moves": [
                    "Pain Split",
                    "Zen Headbutt",
                    "U-turn",
                    "Trick Room"
                ]
            },
            {
                "species": "Bronzong",
                "species_dex": 437,
                "level": 50,
                "nature": "Impish",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Iron Head",
                    "Hypnosis",
                    "Earthquake",
                    "Trick Room"
                ]
            },
            {
                "species": "Gothitelle",
                "species_dex": 576,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Shadow Ball",
                    "Calm Mind",
                    "Trick Room"
                ]
            },
            {
                "species": "Gardevoir",
                "species_dex": 282,
                "level": 50,
                "nature": "Calm",
                "held_item": "Lum Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Disable",
                    "Psychic",
                    "Will-O-Wisp",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Claydol",
                "species_dex": 344,
                "level": 50,
                "nature": "Calm",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Trick Room",
                    "Earth Power",
                    "Ice Beam",
                    "Psyshock"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Lunatone",
                "species_dex": 337,
                "level": 50,
                "nature": "Calm",
                "held_item": "Expert Belt",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Grass Knot",
                    "Cosmic Power",
                    "Trick Room",
                    "Signal Beam"
                ]
            }
        ]
    },
    "45": {
        "pwt_index": 45,
        "roster": [
            {
                "species": "Kingdra",
                "species_dex": 230,
                "level": 50,
                "nature": "Bold",
                "held_item": "Haban Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Dragon Pulse",
                    "Ice Beam",
                    "Rain Dance"
                ]
            },
            {
                "species": "Walrein",
                "species_dex": 365,
                "level": 50,
                "nature": "Impish",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Surf",
                    "Toxic",
                    "Super Fang",
                    "Sheer Cold"
                ]
            },
            {
                "species": "Crawdaunt",
                "species_dex": 342,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Crabhammer",
                    "Night Slash",
                    "Rain Dance",
                    "Guillotine"
                ]
            },
            {
                "species": "Whiscash",
                "species_dex": 340,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Chesto Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Waterfall",
                    "Spark",
                    "Rest"
                ]
            },
            {
                "species": "Relicanth",
                "species_dex": 369,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Damp Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Rain Dance",
                    "Rock Slide",
                    "Waterfall",
                    "Earthquake"
                ]
            },
            {
                "species": "Politoed",
                "species_dex": 186,
                "level": 50,
                "nature": "Modest",
                "held_item": "Wide Lens",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Hypnosis",
                    "Scald",
                    "Focus Blast",
                    "Ice Beam"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Kingdra",
                "species_dex": 230,
                "level": 50,
                "nature": "Bold",
                "held_item": "Haban Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Dragon Pulse",
                    "Ice Beam",
                    "Rain Dance"
                ]
            }
        ]
    },
    "46": {
        "pwt_index": 46,
        "roster": [
            {
                "species": "Rampardos",
                "species_dex": 409,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Superpower",
                    "Earthquake",
                    "Avalanche"
                ]
            },
            {
                "species": "Probopass",
                "species_dex": 476,
                "level": 50,
                "nature": "Bold",
                "held_item": "Air Balloon",
                "ev_spread_index": 36,
                "form": 0,
                "moves": [
                    "Stealth Rock",
                    "Earth Power",
                    "Discharge",
                    "Pain Split"
                ]
            },
            {
                "species": "Archeops",
                "species_dex": 567,
                "level": 50,
                "nature": "Hasty",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Focus Blast",
                    "Quick Attack"
                ]
            },
            {
                "species": "Crustle",
                "species_dex": 558,
                "level": 50,
                "nature": "Naive",
                "held_item": "Power Herb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Rock Slide",
                    "X-Scissor",
                    "SolarBeam",
                    "Shell Smash"
                ]
            },
            {
                "species": "Golem",
                "species_dex": 76,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Earthquake",
                    "Sucker Punch",
                    "Explosion"
                ]
            },
            {
                "species": "Relicanth",
                "species_dex": 369,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Liechi Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Head Smash",
                    "Waterfall",
                    "Rock Polish",
                    "Yawn"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Rampardos",
                "species_dex": 409,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Stone Edge",
                    "Superpower",
                    "Earthquake",
                    "Avalanche"
                ]
            }
        ]
    },
    "47": {
        "pwt_index": 47,
        "roster": [
            {
                "species": "Roserade",
                "species_dex": 407,
                "level": 50,
                "nature": "Modest",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Petal Dance",
                    "Shadow Ball",
                    "Weather Ball",
                    "Sludge Bomb"
                ]
            },
            {
                "species": "Tropius",
                "species_dex": 357,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Heat Rock",
                "ev_spread_index": 36,
                "form": 0,
                "moves": [
                    "SolarBeam",
                    "Air Slash",
                    "Synthesis",
                    "Sunny Day"
                ]
            },
            {
                "species": "Breloom",
                "species_dex": 286,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Spore",
                    "Drain Punch",
                    "Mach Punch",
                    "Stone Edge"
                ]
            },
            {
                "species": "Tangrowth",
                "species_dex": 465,
                "level": 50,
                "nature": "Naive",
                "held_item": "Salac Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Power Whip",
                    "Focus Blast",
                    "Sludge Bomb",
                    "Earthquake"
                ]
            },
            {
                "species": "Leafeon",
                "species_dex": 470,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Yache Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Leaf Blade",
                    "X-Scissor",
                    "Quick Attack",
                    "Swords Dance"
                ]
            },
            {
                "species": "Torterra",
                "species_dex": 389,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Wood Hammer",
                    "Earthquake",
                    "Outrage",
                    "Stone Edge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Roserade",
                "species_dex": 407,
                "level": 50,
                "nature": "Modest",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Petal Dance",
                    "Shadow Ball",
                    "Weather Ball",
                    "Sludge Bomb"
                ]
            }
        ]
    },
    "48": {
        "pwt_index": 48,
        "roster": [
            {
                "species": "Mismagius",
                "species_dex": 429,
                "level": 50,
                "nature": "Timid",
                "held_item": "Salac Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Calm Mind",
                    "Pain Split"
                ]
            },
            {
                "species": "Drifblim",
                "species_dex": 426,
                "level": 50,
                "nature": "Careful",
                "held_item": "Flying Gem",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Acrobatics",
                    "Will-O-Wisp",
                    "Explosion",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Spiritomb",
                "species_dex": 442,
                "level": 50,
                "nature": "Quiet",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Sucker Punch",
                    "Nasty Plot"
                ]
            },
            {
                "species": "Dusknoir",
                "species_dex": 477,
                "level": 50,
                "nature": "Careful",
                "held_item": "Apicot Berry",
                "ev_spread_index": 36,
                "form": 0,
                "moves": [
                    "Shadow Sneak",
                    "Curse",
                    "Pain Split",
                    "Will-O-Wisp"
                ]
            },
            {
                "species": "Jellicent",
                "species_dex": 593,
                "level": 50,
                "nature": "Timid",
                "held_item": "Ghost Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Brine",
                    "Recover",
                    "Water Spout"
                ]
            },
            {
                "species": "Gengar",
                "species_dex": 94,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Thunderbolt",
                    "Nightmare",
                    "Hypnosis"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Mismagius",
                "species_dex": 429,
                "level": 50,
                "nature": "Timid",
                "held_item": "Salac Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Calm Mind",
                    "Pain Split"
                ]
            }
        ]
    },
    "49": {
        "pwt_index": 49,
        "roster": [
            {
                "species": "Lucario",
                "species_dex": 448,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Ice Punch",
                    "Close Combat",
                    "ExtremeSpeed",
                    "Swords Dance"
                ]
            },
            {
                "species": "Infernape",
                "species_dex": 392,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Fire Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Close Combat",
                    "Flare Blitz",
                    "Mach Punch",
                    "Bulk Up"
                ]
            },
            {
                "species": "Toxicroak",
                "species_dex": 454,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Payapa Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Drain Punch",
                    "Sucker Punch",
                    "Substitute",
                    "Bulk Up"
                ]
            },
            {
                "species": "Gallade",
                "species_dex": 475,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Coba Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Close Combat",
                    "Psycho Cut",
                    "Leaf Blade",
                    "Bulk Up"
                ]
            },
            {
                "species": "Medicham",
                "species_dex": 308,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Hi Jump Kick",
                    "Zen Headbutt",
                    "ThunderPunch",
                    "Ice Punch"
                ]
            },
            {
                "species": "Machamp",
                "species_dex": 68,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Scope Lens",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Cross Chop",
                    "Stone Edge",
                    "Ice Punch",
                    "Bullet Punch"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Lucario",
                "species_dex": 448,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Ice Punch",
                    "Close Combat",
                    "ExtremeSpeed",
                    "Swords Dance"
                ]
            }
        ]
    },
    "50": {
        "pwt_index": 50,
        "roster": [
            {
                "species": "Floatzel",
                "species_dex": 419,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Jet",
                    "Ice Punch",
                    "Focus Blast",
                    "Bulk Up"
                ]
            },
            {
                "species": "Empoleon",
                "species_dex": 395,
                "level": 50,
                "nature": "Calm",
                "held_item": "Petaya Berry",
                "ev_spread_index": 36,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Blizzard",
                    "Grass Knot",
                    "FeatherDance"
                ]
            },
            {
                "species": "Ludicolo",
                "species_dex": 272,
                "level": 50,
                "nature": "Modest",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Hydro Pump",
                    "Giga Drain",
                    "Focus Blast",
                    "Rain Dance"
                ]
            },
            {
                "species": "Gastrodon",
                "species_dex": 423,
                "level": 50,
                "nature": "Bold",
                "held_item": "Rindo Berry",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Surf",
                    "Earth Power",
                    "Blizzard",
                    "Counter"
                ]
            },
            {
                "species": "Poliwrath",
                "species_dex": 62,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Salac Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Focus Punch",
                    "Ice Punch",
                    "Hypnosis"
                ]
            },
            {
                "species": "Gyarados",
                "species_dex": 130,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Wacan Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Tail",
                    "Earthquake",
                    "Outrage",
                    "Dragon Dance"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Floatzel",
                "species_dex": 419,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Jet",
                    "Ice Punch",
                    "Focus Blast",
                    "Bulk Up"
                ]
            }
        ]
    },
    "51": {
        "pwt_index": 51,
        "roster": [
            {
                "species": "Bastiodon",
                "species_dex": 411,
                "level": 50,
                "nature": "Calm",
                "held_item": "Air Balloon",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Metal Burst",
                    "Fire Blast",
                    "Stealth Rock",
                    "Iron Defense"
                ]
            },
            {
                "species": "Excadrill",
                "species_dex": 530,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "X-Scissor",
                    "Earthquake",
                    "Rock Slide",
                    "Submission"
                ]
            },
            {
                "species": "Bronzong",
                "species_dex": 437,
                "level": 50,
                "nature": "Brave",
                "held_item": "Iron Ball",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Zen Headbutt",
                    "Earthquake",
                    "Trick Room"
                ]
            },
            {
                "species": "Magnezone",
                "species_dex": 462,
                "level": 50,
                "nature": "Impish",
                "held_item": "Shuca Berry",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Explosion",
                    "Mirror Coat",
                    "Protect",
                    "Reflect"
                ]
            },
            {
                "species": "Aggron",
                "species_dex": 306,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Head Smash",
                    "Iron Head",
                    "Fire Punch",
                    "Dragon Rush"
                ]
            },
            {
                "species": "Forretress",
                "species_dex": 205,
                "level": 50,
                "nature": "Sassy",
                "held_item": "Light Clay",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Stealth Rock",
                    "Earthquake",
                    "Reflect"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Bastiodon",
                "species_dex": 411,
                "level": 50,
                "nature": "Calm",
                "held_item": "Air Balloon",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Metal Burst",
                    "Fire Blast",
                    "Stealth Rock",
                    "Iron Defense"
                ]
            }
        ]
    },
    "52": {
        "pwt_index": 52,
        "roster": [
            {
                "species": "Froslass",
                "species_dex": 478,
                "level": 50,
                "nature": "Timid",
                "held_item": "Petaya Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Shadow Ball",
                    "Psychic",
                    "Hail"
                ]
            },
            {
                "species": "Abomasnow",
                "species_dex": 460,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Occa Berry",
                "ev_spread_index": 18,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Wood Hammer",
                    "Earthquake",
                    "Ingrain"
                ]
            },
            {
                "species": "Weavile",
                "species_dex": 461,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Chople Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Ice Punch",
                    "Night Slash",
                    "Brick Break",
                    "Torment"
                ]
            },
            {
                "species": "Glaceon",
                "species_dex": 471,
                "level": 50,
                "nature": "Modest",
                "held_item": "Life Orb",
                "ev_spread_index": 20,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Shadow Ball",
                    "Signal Beam",
                    "Ice Shard"
                ]
            },
            {
                "species": "Mamoswine",
                "species_dex": 473,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Salac Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Icicle Crash",
                    "Bulldoze",
                    "Superpower",
                    "Rock Tomb"
                ]
            },
            {
                "species": "Glalie",
                "species_dex": 362,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Rock Gem",
                "ev_spread_index": 36,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Crunch",
                    "Rollout",
                    "Hail"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Froslass",
                "species_dex": 478,
                "level": 50,
                "nature": "Timid",
                "held_item": "Petaya Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Shadow Ball",
                    "Psychic",
                    "Hail"
                ]
            }
        ]
    },
    "53": {
        "pwt_index": 53,
        "roster": [
            {
                "species": "Electivire",
                "species_dex": 466,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Salac Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Cross Chop",
                    "Ice Punch",
                    "Bulldoze"
                ]
            },
            {
                "species": "Luxray",
                "species_dex": 405,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Liechi Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Crunch",
                    "Superpower",
                    "Thunder Wave"
                ]
            },
            {
                "species": "Raichu",
                "species_dex": 26,
                "level": 50,
                "nature": "Timid",
                "held_item": "Grass Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Focus Blast",
                    "Grass Knot",
                    "Charge"
                ]
            },
            {
                "species": "Rotom",
                "species_dex": 479,
                "level": 50,
                "nature": "Bold",
                "held_item": "King's Rock",
                "ev_spread_index": 36,
                "form": 4,
                "moves": [
                    "Discharge",
                    "Air Slash",
                    "Pain Split",
                    "Substitute"
                ]
            },
            {
                "species": "Jolteon",
                "species_dex": 135,
                "level": 50,
                "nature": "Timid",
                "held_item": "Air Balloon",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Shadow Ball",
                    "Charm",
                    "Wish"
                ]
            },
            {
                "species": "Electrode",
                "species_dex": 101,
                "level": 50,
                "nature": "Timid",
                "held_item": "Electric Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunder",
                    "Signal Beam",
                    "Taunt",
                    "Torment"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Electivire",
                "species_dex": 466,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Salac Berry",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Wild Charge",
                    "Cross Chop",
                    "Ice Punch",
                    "Bulldoze"
                ]
            }
        ]
    },
    "54": {
        "pwt_index": 54,
        "roster": [
            {
                "species": "Venusaur",
                "species_dex": 3,
                "level": 50,
                "nature": "Modest",
                "held_item": "White Herb",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Leaf Storm",
                    "Sludge Bomb",
                    "Earthquake",
                    "Sleep Powder"
                ]
            },
            {
                "species": "Charizard",
                "species_dex": 6,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Focus Blast",
                    "Air Slash",
                    "Dragon Pulse"
                ]
            },
            {
                "species": "Blastoise",
                "species_dex": 9,
                "level": 50,
                "nature": "Modest",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Water Spout",
                    "Hydro Pump",
                    "Blizzard",
                    "Focus Blast"
                ]
            },
            {
                "species": "Pikachu",
                "species_dex": 25,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Light Ball",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Volt Tackle",
                    "Iron Tail",
                    "Brick Break",
                    "Fake Out"
                ]
            },
            {
                "species": "Snorlax",
                "species_dex": 143,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Quick Claw",
                "ev_spread_index": 34,
                "form": 0,
                "moves": [
                    "Body Slam",
                    "Earthquake",
                    "Crunch",
                    "Seed Bomb"
                ]
            },
            {
                "species": "Lapras",
                "species_dex": 131,
                "level": 50,
                "nature": "Modest",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 34,
                "form": 0,
                "moves": [
                    "Ice Beam",
                    "Hydro Pump",
                    "Ice Shard",
                    "Thunderbolt"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Pikachu",
                "species_dex": 25,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Light Ball",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Volt Tackle",
                    "Iron Tail",
                    "Brick Break",
                    "Fake Out"
                ]
            }
        ]
    },
    "55": {
        "pwt_index": 55,
        "roster": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            },
            {
                "species": "Porygon-Z",
                "species_dex": 474,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Signal Beam",
                    "Thunder"
                ]
            },
            {
                "species": "Cinccino",
                "species_dex": 573,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Tail Slap",
                    "Rock Blast",
                    "Bullet Seed",
                    "Aqua Tail"
                ]
            },
            {
                "species": "Lickilicky",
                "species_dex": 463,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Expert Belt",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Power Whip",
                    "Thunder",
                    "Ice Punch"
                ]
            },
            {
                "species": "Castform",
                "species_dex": 351,
                "level": 50,
                "nature": "Modest",
                "held_item": "Lum Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Weather Ball",
                    "Ice Beam",
                    "Rain Dance",
                    "Thunder"
                ]
            },
            {
                "species": "Bouffalant",
                "species_dex": 626,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Head Charge",
                    "Megahorn",
                    "Wild Charge",
                    "Revenge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            }
        ]
    },
    "56": {
        "pwt_index": 56,
        "roster": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            },
            {
                "species": "Porygon-Z",
                "species_dex": 474,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Signal Beam",
                    "Thunder"
                ]
            },
            {
                "species": "Cinccino",
                "species_dex": 573,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Tail Slap",
                    "Rock Blast",
                    "Bullet Seed",
                    "Aqua Tail"
                ]
            },
            {
                "species": "Lickilicky",
                "species_dex": 463,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Expert Belt",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Power Whip",
                    "Thunder",
                    "Ice Punch"
                ]
            },
            {
                "species": "Castform",
                "species_dex": 351,
                "level": 50,
                "nature": "Modest",
                "held_item": "Lum Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Weather Ball",
                    "Ice Beam",
                    "Rain Dance",
                    "Thunder"
                ]
            },
            {
                "species": "Bouffalant",
                "species_dex": 626,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Head Charge",
                    "Megahorn",
                    "Wild Charge",
                    "Revenge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            }
        ]
    },
    "57": {
        "pwt_index": 57,
        "roster": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            },
            {
                "species": "Porygon-Z",
                "species_dex": 474,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Signal Beam",
                    "Thunder"
                ]
            },
            {
                "species": "Cinccino",
                "species_dex": 573,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Tail Slap",
                    "Rock Blast",
                    "Bullet Seed",
                    "Aqua Tail"
                ]
            },
            {
                "species": "Lickilicky",
                "species_dex": 463,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Expert Belt",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Power Whip",
                    "Thunder",
                    "Ice Punch"
                ]
            },
            {
                "species": "Castform",
                "species_dex": 351,
                "level": 50,
                "nature": "Modest",
                "held_item": "Lum Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Weather Ball",
                    "Ice Beam",
                    "Rain Dance",
                    "Thunder"
                ]
            },
            {
                "species": "Bouffalant",
                "species_dex": 626,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Head Charge",
                    "Megahorn",
                    "Wild Charge",
                    "Revenge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            }
        ]
    },
    "58": {
        "pwt_index": 58,
        "roster": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            },
            {
                "species": "Porygon-Z",
                "species_dex": 474,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Psychic",
                    "Signal Beam",
                    "Thunder"
                ]
            },
            {
                "species": "Cinccino",
                "species_dex": 573,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Tail Slap",
                    "Rock Blast",
                    "Bullet Seed",
                    "Aqua Tail"
                ]
            },
            {
                "species": "Lickilicky",
                "species_dex": 463,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Expert Belt",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Power Whip",
                    "Thunder",
                    "Ice Punch"
                ]
            },
            {
                "species": "Castform",
                "species_dex": 351,
                "level": 50,
                "nature": "Modest",
                "held_item": "Lum Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Weather Ball",
                    "Ice Beam",
                    "Rain Dance",
                    "Thunder"
                ]
            },
            {
                "species": "Bouffalant",
                "species_dex": 626,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Leftovers",
                "ev_spread_index": 6,
                "form": 0,
                "moves": [
                    "Head Charge",
                    "Megahorn",
                    "Wild Charge",
                    "Revenge"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Stoutland",
                "species_dex": 508,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Return",
                    "Crunch",
                    "Ice Fang",
                    "Reversal"
                ]
            }
        ]
    },
    "59": {
        "pwt_index": 59,
        "roster": [
            {
                "species": "Muk",
                "species_dex": 89,
                "level": 50,
                "nature": "Brave",
                "held_item": "Air Balloon",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Shadow Sneak",
                    "Gunk Shot",
                    "Ice Punch",
                    "ThunderPunch"
                ]
            },
            {
                "species": "Swalot",
                "species_dex": 317,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Shuca Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Yawn",
                    "Gunk Shot",
                    "Ice Punch"
                ]
            },
            {
                "species": "Dustox",
                "species_dex": 269,
                "level": 50,
                "nature": "Calm",
                "held_item": "Occa Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Light Screen",
                    "Toxic",
                    "Bug Buzz",
                    "Protect"
                ]
            },
            {
                "species": "Skuntank",
                "species_dex": 435,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Crunch",
                    "Poison Jab",
                    "Fire Blast",
                    "Explosion"
                ]
            },
            {
                "species": "Victreebel",
                "species_dex": 71,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Life Orb",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Swords Dance",
                    "Leaf Blade",
                    "Encore",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Gengar",
                "species_dex": 94,
                "level": 50,
                "nature": "Timid",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Thunderbolt",
                    "Focus Blast",
                    "Psychic"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Muk",
                "species_dex": 89,
                "level": 50,
                "nature": "Brave",
                "held_item": "Air Balloon",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Shadow Sneak",
                    "Gunk Shot",
                    "Ice Punch",
                    "ThunderPunch"
                ]
            }
        ]
    },
    "60": {
        "pwt_index": 60,
        "roster": [
            {
                "species": "Krookodile",
                "species_dex": 553,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Tail",
                    "Earthquake",
                    "Rock Slide",
                    "Dragon Claw"
                ]
            },
            {
                "species": "Camerupt",
                "species_dex": 323,
                "level": 50,
                "nature": "Modest",
                "held_item": "Power Herb",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Protect",
                    "Will-O-Wisp",
                    "Overheat"
                ]
            },
            {
                "species": "Gastrodon",
                "species_dex": 423,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Recover",
                    "Muddy Water",
                    "Ice Beam"
                ]
            },
            {
                "species": "Claydol",
                "species_dex": 344,
                "level": 50,
                "nature": "Modest",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Calm Mind",
                    "Charge Beam",
                    "Psychic",
                    "Earth Power"
                ]
            },
            {
                "species": "Hippowdon",
                "species_dex": 450,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Yache Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Earthquake",
                    "Stone Edge",
                    "Fire Fang",
                    "Thunder Fang"
                ]
            },
            {
                "species": "Steelix",
                "species_dex": 208,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Chople Berry",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Explosion",
                    "Ice Fang",
                    "Stone Edge",
                    "Earthquake"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Krookodile",
                "species_dex": 553,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Choice Scarf",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Aqua Tail",
                    "Earthquake",
                    "Rock Slide",
                    "Dragon Claw"
                ]
            }
        ]
    },
    "61": {
        "pwt_index": 61,
        "roster": [
            {
                "species": "Starmie",
                "species_dex": 121,
                "level": 50,
                "nature": "Timid",
                "held_item": "BrightPowder",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Psychic",
                    "Hydro Pump",
                    "Minimize"
                ]
            },
            {
                "species": "Beheeyem",
                "species_dex": 606,
                "level": 50,
                "nature": "Modest",
                "held_item": "Payapa Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Thunderbolt",
                    "Energy Ball",
                    "Thunder Wave"
                ]
            },
            {
                "species": "Sigilyph",
                "species_dex": 561,
                "level": 50,
                "nature": "Timid",
                "held_item": "Choice Scarf",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Psyshock",
                    "Air Slash",
                    "Ice Beam"
                ]
            },
            {
                "species": "Exeggutor",
                "species_dex": 103,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Toxic",
                    "Giga Drain",
                    "Light Screen",
                    "Leech Seed"
                ]
            },
            {
                "species": "Jynx",
                "species_dex": 124,
                "level": 50,
                "nature": "Modest",
                "held_item": "Focus Sash",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Ice Beam",
                    "Psychic",
                    "Lovely Kiss",
                    "Fake Out"
                ]
            },
            {
                "species": "Medicham",
                "species_dex": 308,
                "level": 50,
                "nature": "Careful",
                "held_item": "Lum Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Bulk Up",
                    "Drain Punch",
                    "Recover",
                    "Zen Headbutt"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Starmie",
                "species_dex": 121,
                "level": 50,
                "nature": "Timid",
                "held_item": "BrightPowder",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Psychic",
                    "Hydro Pump",
                    "Minimize"
                ]
            }
        ]
    },
    "62": {
        "pwt_index": 62,
        "roster": [
            {
                "species": "Heracross",
                "species_dex": 214,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Megahorn",
                    "Close Combat",
                    "Stone Edge",
                    "Earthquake"
                ]
            },
            {
                "species": "Galvantula",
                "species_dex": 596,
                "level": 50,
                "nature": "Timid",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Thunder",
                    "Bug Buzz",
                    "Sucker Punch",
                    "Thunder Wave"
                ]
            },
            {
                "species": "Scolipede",
                "species_dex": 545,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Salac Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Megahorn",
                    "Rock Slide",
                    "Spikes",
                    "Toxic Spikes"
                ]
            },
            {
                "species": "Parasect",
                "species_dex": 47,
                "level": 50,
                "nature": "Careful",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Spore",
                    "Bullet Seed",
                    "Leech Seed",
                    "X-Scissor"
                ]
            },
            {
                "species": "Ninjask",
                "species_dex": 291,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Swords Dance",
                    "Protect",
                    "X-Scissor",
                    "Baton Pass"
                ]
            },
            {
                "species": "Forretress",
                "species_dex": 205,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Iron Ball",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Stealth Rock",
                    "Explosion",
                    "Payback"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Heracross",
                "species_dex": 214,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Megahorn",
                    "Close Combat",
                    "Stone Edge",
                    "Earthquake"
                ]
            }
        ]
    },
    "63": {
        "pwt_index": 63,
        "roster": [
            {
                "species": "Cofagrigus",
                "species_dex": 563,
                "level": 50,
                "nature": "Calm",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Will-O-Wisp",
                    "Grass Knot",
                    "Rest"
                ]
            },
            {
                "species": "Drifblim",
                "species_dex": 426,
                "level": 50,
                "nature": "Timid",
                "held_item": "Sitrus Berry",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Calm Mind",
                    "Minimize",
                    "Shadow Ball",
                    "Baton Pass"
                ]
            },
            {
                "species": "Sableye",
                "species_dex": 302,
                "level": 50,
                "nature": "Impish",
                "held_item": "Lum Berry",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Foul Play",
                    "Sucker Punch",
                    "Recover",
                    "Will-O-Wisp"
                ]
            },
            {
                "species": "Golurk",
                "species_dex": 623,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Hammer Arm",
                    "Stone Edge",
                    "Shadow Punch",
                    "Earthquake"
                ]
            },
            {
                "species": "Gengar",
                "species_dex": 94,
                "level": 50,
                "nature": "Timid",
                "held_item": "Expert Belt",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Energy Ball",
                    "Sludge Bomb",
                    "Thunderbolt"
                ]
            },
            {
                "species": "Banette",
                "species_dex": 354,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Focus Sash",
                "ev_spread_index": 9,
                "form": 0,
                "moves": [
                    "Curse",
                    "Shadow Claw",
                    "Will-O-Wisp",
                    "Sucker Punch"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Cofagrigus",
                "species_dex": 563,
                "level": 50,
                "nature": "Calm",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Shadow Ball",
                    "Will-O-Wisp",
                    "Grass Knot",
                    "Rest"
                ]
            }
        ]
    },
    "64": {
        "pwt_index": 64,
        "roster": [
            {
                "species": "Salamence",
                "species_dex": 373,
                "level": 50,
                "nature": "Naive",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Dragon Rush",
                    "Fire Blast",
                    "Earthquake",
                    "Draco Meteor"
                ]
            },
            {
                "species": "Druddigon",
                "species_dex": 621,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Expert Belt",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Outrage",
                    "Superpower",
                    "Revenge",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Altaria",
                "species_dex": 334,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Cotton Guard",
                    "Toxic",
                    "Roost",
                    "Dragon Pulse"
                ]
            },
            {
                "species": "Dragonite",
                "species_dex": 149,
                "level": 50,
                "nature": "Modest",
                "held_item": "Wide Lens",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Blizzard",
                    "Hurricane",
                    "Thunder",
                    "Fire Blast"
                ]
            },
            {
                "species": "Kingdra",
                "species_dex": 230,
                "level": 50,
                "nature": "Modest",
                "held_item": "White Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Rain Dance",
                    "Hydro Pump",
                    "Blizzard",
                    "Dragon Pulse"
                ]
            },
            {
                "species": "Garchomp",
                "species_dex": 445,
                "level": 50,
                "nature": "Timid",
                "held_item": "Haban Berry",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Flamethrower",
                    "Earth Power",
                    "Dragon Pulse",
                    "Surf"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Salamence",
                "species_dex": 373,
                "level": 50,
                "nature": "Naive",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Dragon Rush",
                    "Fire Blast",
                    "Earthquake",
                    "Draco Meteor"
                ]
            }
        ]
    },
    "65": {
        "pwt_index": 65,
        "roster": [
            {
                "species": "Aggron",
                "species_dex": 306,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Ice Beam",
                    "Metal Burst",
                    "Magnet Rise"
                ]
            },
            {
                "species": "Bronzong",
                "species_dex": 437,
                "level": 50,
                "nature": "Modest",
                "held_item": "Expert Belt",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Psychic",
                    "Flash Cannon",
                    "Charge Beam",
                    "Signal Beam"
                ]
            },
            {
                "species": "Magnezone",
                "species_dex": 462,
                "level": 50,
                "nature": "Bold",
                "held_item": "Leftovers",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Thunderbolt",
                    "Toxic",
                    "Substitute",
                    "Rest"
                ]
            },
            {
                "species": "Skarmory",
                "species_dex": 227,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Flying Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Brave Bird",
                    "Rock Slide",
                    "Icy Wind",
                    "X-Scissor"
                ]
            },
            {
                "species": "Steelix",
                "species_dex": 208,
                "level": 50,
                "nature": "Relaxed",
                "held_item": "Iron Ball",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Gyro Ball",
                    "Earthquake",
                    "Payback",
                    "Fire Fang"
                ]
            },
            {
                "species": "Bisharp",
                "species_dex": 625,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Sucker Punch",
                    "Iron Head",
                    "Brick Break",
                    "Guillotine"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Aggron",
                "species_dex": 306,
                "level": 50,
                "nature": "Modest",
                "held_item": "Chople Berry",
                "ev_spread_index": 17,
                "form": 0,
                "moves": [
                    "Fire Blast",
                    "Ice Beam",
                    "Metal Burst",
                    "Magnet Rise"
                ]
            }
        ]
    },
    "66": {
        "pwt_index": 66,
        "roster": [
            {
                "species": "Shiftry",
                "species_dex": 275,
                "level": 50,
                "nature": "Naive",
                "held_item": "Grass Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Fake Out",
                    "Bullet Seed",
                    "X-Scissor",
                    "Leaf Storm"
                ]
            },
            {
                "species": "Honchkrow",
                "species_dex": 430,
                "level": 50,
                "nature": "Naughty",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Sucker Punch",
                    "Drill Peck",
                    "Heat Wave",
                    "Superpower"
                ]
            },
            {
                "species": "Absol",
                "species_dex": 359,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Scope Lens",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Sucker Punch",
                    "Psycho Cut",
                    "Stone Edge",
                    "Superpower"
                ]
            },
            {
                "species": "Skuntank",
                "species_dex": 435,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Black Sludge",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Swagger",
                    "Punishment",
                    "Substitute",
                    "Protect"
                ]
            },
            {
                "species": "Crawdaunt",
                "species_dex": 342,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Choice Band",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Crabhammer",
                    "Night Slash",
                    "Superpower",
                    "X-Scissor"
                ]
            },
            {
                "species": "Sableye",
                "species_dex": 302,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Focus Sash",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Metal Burst",
                    "Sucker Punch",
                    "Taunt",
                    "Fake Out"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Shiftry",
                "species_dex": 275,
                "level": 50,
                "nature": "Naive",
                "held_item": "Grass Gem",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Fake Out",
                    "Bullet Seed",
                    "X-Scissor",
                    "Leaf Storm"
                ]
            }
        ]
    },
    "67": {
        "pwt_index": 67,
        "roster": [
            {
                "species": "Umbreon",
                "species_dex": 197,
                "level": 50,
                "nature": "Careful",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Rest",
                    "Toxic",
                    "Curse",
                    "Sucker Punch"
                ]
            },
            {
                "species": "Scrafty",
                "species_dex": 560,
                "level": 50,
                "nature": "Adamant",
                "held_item": "Big Root",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Bulk Up",
                    "Drain Punch",
                    "Dragon Tail",
                    "Amnesia"
                ]
            },
            {
                "species": "Sharpedo",
                "species_dex": 319,
                "level": 50,
                "nature": "Jolly",
                "held_item": "King's Rock",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Waterfall",
                    "Crunch",
                    "Super Fang",
                    "Aqua Jet"
                ]
            },
            {
                "species": "Spiritomb",
                "species_dex": 442,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 36,
                "form": 0,
                "moves": [
                    "Curse",
                    "Rest",
                    "Protect",
                    "Dark Pulse"
                ]
            },
            {
                "species": "Cacturne",
                "species_dex": 332,
                "level": 50,
                "nature": "Lonely",
                "held_item": "Focus Sash",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Sucker Punch",
                    "Retaliate",
                    "Low Kick",
                    "Bullet Seed"
                ]
            },
            {
                "species": "Krookodile",
                "species_dex": 553,
                "level": 50,
                "nature": "Modest",
                "held_item": "Life Orb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Earth Power",
                    "Focus Blast",
                    "Dark Pulse",
                    "Foul Play"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Umbreon",
                "species_dex": 197,
                "level": 50,
                "nature": "Careful",
                "held_item": "Rocky Helmet",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Rest",
                    "Toxic",
                    "Curse",
                    "Sucker Punch"
                ]
            }
        ]
    },
    "68": {
        "pwt_index": 68,
        "roster": [
            {
                "species": "Drapion",
                "species_dex": 452,
                "level": 50,
                "nature": "Impish",
                "held_item": "Black Sludge",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Acupressure",
                    "Crunch",
                    "Toxic",
                    "Ice Fang"
                ]
            },
            {
                "species": "Liepard",
                "species_dex": 510,
                "level": 50,
                "nature": "Modest",
                "held_item": "Normal Gem",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Foul Play",
                    "Fake Out",
                    "Thunder Wave",
                    "Grass Knot"
                ]
            },
            {
                "species": "Mandibuzz",
                "species_dex": 630,
                "level": 50,
                "nature": "Calm",
                "held_item": "Leftovers",
                "ev_spread_index": 33,
                "form": 0,
                "moves": [
                    "Substitute",
                    "Foul Play",
                    "Heat Wave",
                    "Tailwind"
                ]
            },
            {
                "species": "Bisharp",
                "species_dex": 625,
                "level": 50,
                "nature": "Brave",
                "held_item": "Focus Sash",
                "ev_spread_index": 3,
                "form": 0,
                "moves": [
                    "Taunt",
                    "Metal Burst",
                    "Sucker Punch",
                    "Payback"
                ]
            },
            {
                "species": "Weavile",
                "species_dex": 461,
                "level": 50,
                "nature": "Jolly",
                "held_item": "Life Orb",
                "ev_spread_index": 10,
                "form": 0,
                "moves": [
                    "Fake Out",
                    "Night Slash",
                    "Brick Break",
                    "Ice Punch"
                ]
            },
            {
                "species": "Houndoom",
                "species_dex": 229,
                "level": 50,
                "nature": "Timid",
                "held_item": "Power Herb",
                "ev_spread_index": 24,
                "form": 0,
                "moves": [
                    "Dark Pulse",
                    "Foul Play",
                    "Fire Blast",
                    "SolarBeam"
                ]
            }
        ],
        "single_battle_picks": [
            {
                "species": "Drapion",
                "species_dex": 452,
                "level": 50,
                "nature": "Impish",
                "held_item": "Black Sludge",
                "ev_spread_index": 5,
                "form": 0,
                "moves": [
                    "Acupressure",
                    "Crunch",
                    "Toxic",
                    "Ice Fang"
                ]
            }
        ]
    }
};
