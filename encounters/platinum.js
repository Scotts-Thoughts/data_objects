export const encounters = {
    "Acuity Lakefront": {
        "Walk": [
            {pokemon: "Swinub", min_level: 32, max_level: 32, chance: 25},
            {pokemon: "Snover", min_level: 33, max_level: 33, chance: 20},
            {pokemon: "Sneasel", min_level: 35, max_level: 35, chance: 15},
            {pokemon: "Sneasel", min_level: 33, max_level: 33, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Snorunt", min_level: 32, max_level: 32, chance: 10, time: ["Night"]},
            {pokemon: "Snorunt", min_level: 33, max_level: 33, chance: 10, time: ["Night"]},
            {pokemon: "Snover", min_level: 32, max_level: 32, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Swinub", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Snover", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Snover", min_level: 35, max_level: 35, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Ursaring", min_level: 35, max_level: 35, chance: 8},
        ]
    },
    "Canalave City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Finneon", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Staryu", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Celestic Town": {
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Corphish", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Crawdaunt", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Eterna City": {
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Eterna City (west gate)": {
        "Gift Egg": [
            {pokemon: "Togepi", min_level: 1, max_level: 1, chance: 100},
        ]
    },
    "Eterna Forest": {
        "Walk": [
            {pokemon: "Budew", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Buneary", min_level: 11, max_level: 11, chance: 20},
            {pokemon: "Bidoof", min_level: 12, max_level: 12, chance: 10},
            {pokemon: "Budew", min_level: 11, max_level: 11, chance: 10},
            {pokemon: "Budew", min_level: 12, max_level: 12, chance: 10, time: ["Day"]},
            {pokemon: "Hoothoot", min_level: 12, max_level: 12, chance: 10, time: ["Night"]},
            {pokemon: "Kricketot", min_level: 10, max_level: 10, chance: 10, time: ["Night"]},
            {pokemon: "Kricketot", min_level: 12, max_level: 12, chance: 10, time: ["Morning"]},
            {pokemon: "Wurmple", min_level: 10, max_level: 10, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Cascoon", min_level: 12, max_level: 12, chance: 5},
            {pokemon: "Silcoon", min_level: 12, max_level: 12, chance: 5},
            {pokemon: "Buneary", min_level: 13, max_level: 13, chance: 4},
            {pokemon: "Gastly", min_level: 13, max_level: 13, chance: 4},
            {pokemon: "Beautifly", min_level: 14, max_level: 14, chance: 1},
            {pokemon: "Dustox", min_level: 14, max_level: 14, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pineco", min_level: 13, max_level: 13, chance: 8},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Caterpie", min_level: 13, max_level: 13, chance: 4},
            {pokemon: "Metapod", min_level: 13, max_level: 13, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Kakuna", min_level: 13, max_level: 13, chance: 4},
            {pokemon: "Weedle", min_level: 13, max_level: 13, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Seedot", min_level: 13, max_level: 13, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Nincada", min_level: 11, max_level: 11, chance: 10},
            {pokemon: "Nincada", min_level: 12, max_level: 12, chance: 10},
            {pokemon: "Nincada", min_level: 14, max_level: 14, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Slakoth", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Slakoth", min_level: 11, max_level: 11, chance: 20},
        ]
    },
    "Flower Paradise": {
        "Static": [
            {pokemon: "Shaymin", min_level: 30, max_level: 30, chance: 100},
        ]
    },
    "Fuego Ironworks": {
        "Walk": [
            {pokemon: "Magmar", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Magnemite", min_level: 29, max_level: 29, chance: 20},
            {pokemon: "Floatzel", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Floatzel", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Gastrodon", min_level: 29, max_level: 29, chance: 10, time: ["Night"]},
            {pokemon: "Gastrodon", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Magmar", min_level: 29, max_level: 29, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Floatzel", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Gastrodon", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Magnemite", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Magnemite", min_level: 30, max_level: 30, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Aron", min_level: 30, max_level: 30, chance: 20},
            {pokemon: "Aron", min_level: 31, max_level: 31, chance: 2},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Finneon", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Great Marsh (Area 1)": {
        "Walk": [
            {pokemon: "Wooper", min_level: 28, max_level: 28, chance: 25},
            {pokemon: "Bibarel", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 30, max_level: 30, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Tropius", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Tropius", min_level: 30, max_level: 30, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Wooper", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Wooper", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Tangela", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Yanma", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Tangela", min_level: 31, max_level: 31, chance: 1},
            {pokemon: "Yanma", min_level: 31, max_level: 31, chance: 1},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Arbok", min_level: 30, max_level: 30, chance: 8},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Quagsire", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Carvanha", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Carvanha", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Great Marsh (Area 2)": {
        "Walk": [
            {pokemon: "Wooper", min_level: 28, max_level: 28, chance: 25},
            {pokemon: "Bibarel", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 30, max_level: 30, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Tropius", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Tropius", min_level: 30, max_level: 30, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Wooper", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Wooper", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Tangela", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Yanma", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Tangela", min_level: 31, max_level: 31, chance: 1},
            {pokemon: "Yanma", min_level: 31, max_level: 31, chance: 1},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Arbok", min_level: 30, max_level: 30, chance: 8},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Quagsire", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Carvanha", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Carvanha", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Great Marsh (Area 3)": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Wooper", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Bibarel", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Tangela", min_level: 27, max_level: 27, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Tangela", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Wooper", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Wooper", min_level: 29, max_level: 29, chance: 5},
            {pokemon: "Tangela", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Yanma", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Tangela", min_level: 30, max_level: 30, chance: 1},
            {pokemon: "Yanma", min_level: 30, max_level: 30, chance: 1},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Arbok", min_level: 29, max_level: 29, chance: 8},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Quagsire", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Carvanha", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Carvanha", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Great Marsh (Area 4)": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Wooper", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Bibarel", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Tangela", min_level: 27, max_level: 27, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Tangela", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Wooper", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Wooper", min_level: 29, max_level: 29, chance: 5},
            {pokemon: "Tangela", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Yanma", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Tangela", min_level: 30, max_level: 30, chance: 1},
            {pokemon: "Yanma", min_level: 30, max_level: 30, chance: 1},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Arbok", min_level: 29, max_level: 29, chance: 8},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Quagsire", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Carvanha", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Carvanha", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Great Marsh (Area 5)": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 26, max_level: 26, chance: 20},
            {pokemon: "Wooper", min_level: 26, max_level: 26, chance: 20},
            {pokemon: "Bibarel", min_level: 27, max_level: 27, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Yanma", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Yanma", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Wooper", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Wooper", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Tangela", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Yanma", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Tangela", min_level: 29, max_level: 29, chance: 1},
            {pokemon: "Yanma", min_level: 29, max_level: 29, chance: 1},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Arbok", min_level: 28, max_level: 28, chance: 8},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Quagsire", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Carvanha", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Carvanha", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Great Marsh (Area 6)": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 26, max_level: 26, chance: 20},
            {pokemon: "Wooper", min_level: 26, max_level: 26, chance: 20},
            {pokemon: "Bibarel", min_level: 27, max_level: 27, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Yanma", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Yanma", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Wooper", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Wooper", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Tangela", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Yanma", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Tangela", min_level: 29, max_level: 29, chance: 1},
            {pokemon: "Yanma", min_level: 29, max_level: 29, chance: 1},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Arbok", min_level: 28, max_level: 28, chance: 8},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Quagsire", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Carvanha", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Carvanha", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Hall of Origin": {
        "Static": [
            {pokemon: "Arceus", min_level: 80, max_level: 80, chance: 100},
        ]
    },
    "Hearthome City": {
        "Gift": [
            {pokemon: "Eevee", min_level: 20, max_level: 20, chance: 100},
        ]
    },
    "Iron Island": {
        "Surf": [
            {pokemon: "Wingull", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Pelipper", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Finneon", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Qwilfish", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Iron Island (1F)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 31, max_level: 31, chance: 20},
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Geodude", min_level: 32, max_level: 32, chance: 10},
            {pokemon: "Golbat", min_level: 32, max_level: 32, chance: 10},
            {pokemon: "Graveler", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Zubat", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Geodude", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Onix", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Onix", min_level: 33, max_level: 33, chance: 5},
        ]
    },
    "Iron Island (B1F Left Room)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 30},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 25},
            {pokemon: "Golbat", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Golbat", min_level: 32, max_level: 32, chance: 10},
            {pokemon: "Graveler", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Graveler", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Onix", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Onix", min_level: 33, max_level: 33, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Mawile", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Mawile", min_level: 31, max_level: 31, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Sableye", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Sableye", min_level: 31, max_level: 31, chance: 4},
        ]
    },
    "Iron Island (B1F Right Room)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 30},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 25},
            {pokemon: "Golbat", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Golbat", min_level: 32, max_level: 32, chance: 10},
            {pokemon: "Graveler", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Graveler", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Onix", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Onix", min_level: 33, max_level: 33, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Mawile", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Mawile", min_level: 31, max_level: 31, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Sableye", min_level: 30, max_level: 30, chance: 4},
            {pokemon: "Sableye", min_level: 31, max_level: 31, chance: 4},
        ]
    },
    "Iron Island (B2F Left Room)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 33, max_level: 33, chance: 30},
            {pokemon: "Onix", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Golbat", min_level: 31, max_level: 31, chance: 10},
            {pokemon: "Golbat", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Graveler", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 5},
            {pokemon: "Steelix", min_level: 33, max_level: 33, chance: 5},
            {pokemon: "Steelix", min_level: 35, max_level: 35, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Mawile", min_level: 31, max_level: 31, chance: 4},
            {pokemon: "Mawile", min_level: 32, max_level: 32, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Sableye", min_level: 31, max_level: 31, chance: 4},
            {pokemon: "Sableye", min_level: 32, max_level: 32, chance: 4},
        ],
        "Gift Egg": [
            {pokemon: "Riolu", min_level: 1, max_level: 1, chance: 100},
        ]
    },
    "Iron Island (B2F Right Room)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 33, max_level: 33, chance: 30},
            {pokemon: "Onix", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Golbat", min_level: 31, max_level: 31, chance: 10},
            {pokemon: "Golbat", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Graveler", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 5},
            {pokemon: "Steelix", min_level: 33, max_level: 33, chance: 5},
            {pokemon: "Steelix", min_level: 35, max_level: 35, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Mawile", min_level: 31, max_level: 31, chance: 4},
            {pokemon: "Mawile", min_level: 32, max_level: 32, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Sableye", min_level: 31, max_level: 31, chance: 4},
            {pokemon: "Sableye", min_level: 32, max_level: 32, chance: 4},
        ]
    },
    "Iron Island (B3F)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 33, max_level: 33, chance: 30},
            {pokemon: "Steelix", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Golbat", min_level: 31, max_level: 31, chance: 10},
            {pokemon: "Golbat", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Graveler", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 5},
            {pokemon: "Steelix", min_level: 33, max_level: 33, chance: 5},
            {pokemon: "Steelix", min_level: 35, max_level: 35, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Mawile", min_level: 31, max_level: 31, chance: 4},
            {pokemon: "Mawile", min_level: 32, max_level: 32, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Sableye", min_level: 31, max_level: 31, chance: 4},
            {pokemon: "Sableye", min_level: 32, max_level: 32, chance: 4},
        ],
        "Walk (Swarm)": [
            {pokemon: "Onix", min_level: 32, max_level: 32, chance: 20},
        ]
    },
    "Lake Acuity": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 39, max_level: 39, chance: 20},
            {pokemon: "Snover", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Golduck", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Sneasel", min_level: 41, max_level: 41, chance: 10},
            {pokemon: "Snorunt", min_level: 39, max_level: 39, chance: 10, time: ["Night"]},
            {pokemon: "Snorunt", min_level: 40, max_level: 40, chance: 10, time: ["Night"]},
            {pokemon: "Snover", min_level: 39, max_level: 39, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Snover", min_level: 40, max_level: 40, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Bibarel", min_level: 40, max_level: 40, chance: 5},
            {pokemon: "Golduck", min_level: 39, max_level: 39, chance: 5},
            {pokemon: "Psyduck", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Snover", min_level: 41, max_level: 41, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Teddiursa", min_level: 40, max_level: 40, chance: 4},
            {pokemon: "Teddiursa", min_level: 41, max_level: 41, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 40, max_level: 40, chance: 4},
            {pokemon: "Solrock", min_level: 41, max_level: 41, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 40, max_level: 40, chance: 4},
            {pokemon: "Lunatone", min_level: 41, max_level: 41, chance: 4},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Seaking", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Lake Acuity Cavern": {
        "Static": [
            {pokemon: "Uxie", min_level: 50, max_level: 50, chance: 100},
        ]
    },
    "Lake Valor": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 39, max_level: 39, chance: 20},
            {pokemon: "Staravia", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Bibarel", min_level: 41, max_level: 41, chance: 15},
            {pokemon: "Staravia", min_level: 40, max_level: 40, chance: 15},
            {pokemon: "Golduck", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Psyduck", min_level: 38, max_level: 38, chance: 10},
            {pokemon: "Golduck", min_level: 41, max_level: 41, chance: 5},
            {pokemon: "Psyduck", min_level: 39, max_level: 39, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 40, max_level: 40, chance: 4},
            {pokemon: "Solrock", min_level: 41, max_level: 41, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 40, max_level: 40, chance: 4},
            {pokemon: "Lunatone", min_level: 41, max_level: 41, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Wobbuffet", min_level: 40, max_level: 40, chance: 11},
            {pokemon: "Wobbuffet", min_level: 38, max_level: 38, chance: 10},
            {pokemon: "Wobbuffet", min_level: 41, max_level: 41, chance: 1},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Seaking", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Lake Valor Cavern": {
        "Static": [
            {pokemon: "Azelf", min_level: 50, max_level: 50, chance: 100},
        ]
    },
    "Lake Verity": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 2, max_level: 2, chance: 20},
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Starly", min_level: 2, max_level: 2, chance: 20},
            {pokemon: "Starly", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Bidoof", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Starly", min_level: 4, max_level: 4, chance: 10},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 4, max_level: 4, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 4, max_level: 4, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Wobbuffet", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Wobbuffet", min_level: 4, max_level: 4, chance: 2},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Seaking", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Lake Verity (Low Water)": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Bidoof", min_level: 2, max_level: 2, chance: 20},
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Starly", min_level: 2, max_level: 2, chance: 20},
            {pokemon: "Starly", min_level: 3, max_level: 3, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Bidoof", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Starly", min_level: 3, max_level: 3, chance: 10, time: ["Night"]},
            {pokemon: "Starly", min_level: 4, max_level: 4, chance: 10},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 4, max_level: 4, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 4, max_level: 4, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Wobbuffet", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Wobbuffet", min_level: 4, max_level: 4, chance: 2},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Seaking", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Lost Tower (1F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Zubat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 15},
            {pokemon: "Duskull", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Duskull", min_level: 19, max_level: 19, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 18, max_level: 18, chance: 10},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 5},
        ]
    },
    "Lost Tower (2F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Zubat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 15},
            {pokemon: "Duskull", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Duskull", min_level: 19, max_level: 19, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 18, max_level: 18, chance: 10},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 5},
        ]
    },
    "Lost Tower (3F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 18, max_level: 18, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Zubat", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 14},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Duskull", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Zubat", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Golbat", min_level: 21, max_level: 21, chance: 1},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 1},
        ]
    },
    "Lost Tower (4F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 18, max_level: 18, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Zubat", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Duskull", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Golbat", min_level: 21, max_level: 21, chance: 5},
            {pokemon: "Zubat", min_level: 20, max_level: 20, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 1},
        ]
    },
    "Lost Tower (5F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Duskull", min_level: 19, max_level: 19, chance: 10, time: ["Night"]},
            {pokemon: "Duskull", min_level: 21, max_level: 21, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Zubat", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 5},
            {pokemon: "Zubat", min_level: 21, max_level: 21, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 1},
        ]
    },
    "Maniac Tunnel": {
        "Walk": [
            {pokemon: "Geodude", min_level: 25, max_level: 25, chance: 50},
            {pokemon: "Geodude", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Hippopotas", min_level: 25, max_level: 25, chance: 15},
            {pokemon: "Geodude", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Hippopotas", min_level: 24, max_level: 24, chance: 4},
            {pokemon: "Hippopotas", min_level: 26, max_level: 26, chance: 1},
        ]
    },
    "Mt. Coronet (1F North Room 1)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 14, max_level: 14, chance: 20},
            {pokemon: "Geodude", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Cleffa", min_level: 13, max_level: 13, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Geodude", min_level: 13, max_level: 13, chance: 10, time: ["Day"]},
            {pokemon: "Machop", min_level: 16, max_level: 16, chance: 10},
            {pokemon: "Meditite", min_level: 14, max_level: 14, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 16, max_level: 16, chance: 10},
            {pokemon: "Zubat", min_level: 14, max_level: 14, chance: 10, time: ["Night"]},
            {pokemon: "Chingling", min_level: 13, max_level: 13, chance: 5},
            {pokemon: "Chingling", min_level: 15, max_level: 15, chance: 5},
            {pokemon: "Nosepass", min_level: 14, max_level: 14, chance: 5},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 5},
        ]
    },
    "Mt. Coronet (1F North Room 2)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 33, max_level: 33, chance: 20},
            {pokemon: "Graveler", min_level: 34, max_level: 34, chance: 20},
            {pokemon: "Clefairy", min_level: 32, max_level: 32, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 33, max_level: 33, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 35, max_level: 35, chance: 10},
            {pokemon: "Meditite", min_level: 33, max_level: 33, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 35, max_level: 35, chance: 10},
            {pokemon: "Chingling", min_level: 32, max_level: 32, chance: 5},
            {pokemon: "Chingling", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Golbat", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Nosepass", min_level: 33, max_level: 33, chance: 5},
        ]
    },
    "Mt. Coronet (1F South)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Geodude", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Clefairy", min_level: 17, max_level: 17, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Machop", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Meditite", min_level: 18, max_level: 18, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Zubat", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Chingling", min_level: 17, max_level: 17, chance: 5},
            {pokemon: "Chingling", min_level: 19, max_level: 19, chance: 5},
            {pokemon: "Nosepass", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 5},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golbat", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 20, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Mt. Coronet (1F Tunnel Room)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chingling", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chingling", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Mt. Coronet (2F)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chingling", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chingling", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Mt. Coronet (3F)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chingling", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chingling", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Medicham", min_level: 38, max_level: 38, chance: 1},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Mt. Coronet (4F Room 3)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chingling", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Chingling", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Chimecho", min_level: 39, max_level: 39, chance: 1},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Mt. Coronet (4F Rooms 1 and 2)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chingling", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chingling", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golbat", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Dratini", min_level: 15, max_level: 25, chance: 40},
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Dragonair", min_level: 20, max_level: 40, chance: 4},
            {pokemon: "Dragonair", min_level: 35, max_level: 55, chance: 1},
        ]
    },
    "Mt. Coronet (5F)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chingling", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Chimecho", min_level: 39, max_level: 39, chance: 4},
            {pokemon: "Chimecho", min_level: 40, max_level: 40, chance: 1},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Solrock", min_level: 39, max_level: 39, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Lunatone", min_level: 39, max_level: 39, chance: 4},
        ]
    },
    "Mt. Coronet (6F)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Clefairy", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Medicham", min_level: 37, max_level: 37, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Chimecho", min_level: 39, max_level: 39, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Nosepass", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Chimecho", min_level: 40, max_level: 40, chance: 4},
            {pokemon: "Chimecho", min_level: 41, max_level: 41, chance: 1},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Solrock", min_level: 40, max_level: 40, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Lunatone", min_level: 40, max_level: 40, chance: 4},
        ]
    },
    "Mt. Coronet (B1F)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 33, max_level: 33, chance: 20},
            {pokemon: "Graveler", min_level: 34, max_level: 34, chance: 20},
            {pokemon: "Clefairy", min_level: 32, max_level: 32, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Golbat", min_level: 33, max_level: 33, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 10, time: ["Day"]},
            {pokemon: "Machoke", min_level: 35, max_level: 35, chance: 10},
            {pokemon: "Meditite", min_level: 33, max_level: 33, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 35, max_level: 35, chance: 10},
            {pokemon: "Chingling", min_level: 32, max_level: 32, chance: 5},
            {pokemon: "Chingling", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Golbat", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Nosepass", min_level: 33, max_level: 33, chance: 5},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golbat", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 3, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Mt. Coronet (Outside North)": {
        "Walk": [
            {pokemon: "Abomasnow", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Snover", min_level: 36, max_level: 36, chance: 20},
            {pokemon: "Abomasnow", min_level: 39, max_level: 39, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 10, time: ["Night"]},
            {pokemon: "Machoke", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Medicham", min_level: 38, max_level: 38, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Noctowl", min_level: 39, max_level: 39, chance: 10, time: ["Night"]},
            {pokemon: "Chingling", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Chingling", min_level: 39, max_level: 39, chance: 5},
            {pokemon: "Nosepass", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Absol", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Absol", min_level: 40, max_level: 40, chance: 1},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Solrock", min_level: 39, max_level: 39, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Lunatone", min_level: 39, max_level: 39, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Loudred", min_level: 40, max_level: 40, chance: 21},
            {pokemon: "Loudred", min_level: 39, max_level: 39, chance: 1},
        ]
    },
    "Mt. Coronet (Outside South)": {
        "Walk": [
            {pokemon: "Abomasnow", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Snover", min_level: 36, max_level: 36, chance: 20},
            {pokemon: "Abomasnow", min_level: 39, max_level: 39, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 10, time: ["Night"]},
            {pokemon: "Machoke", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Medicham", min_level: 38, max_level: 38, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Medicham", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Noctowl", min_level: 39, max_level: 39, chance: 10, time: ["Night"]},
            {pokemon: "Chingling", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Chingling", min_level: 39, max_level: 39, chance: 5},
            {pokemon: "Nosepass", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Absol", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Absol", min_level: 40, max_level: 40, chance: 1},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Solrock", min_level: 39, max_level: 39, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 4},
            {pokemon: "Lunatone", min_level: 39, max_level: 39, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Loudred", min_level: 40, max_level: 40, chance: 21},
            {pokemon: "Loudred", min_level: 39, max_level: 39, chance: 1},
        ]
    },
    "Newmoon Island": {
        "Static": [
            {pokemon: "Darkrai", min_level: 50, max_level: 50, chance: 100},
        ]
    },
    "Old Chateau": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (2F left room)": {
        "Static": [
            {pokemon: "Rotom", min_level: 20, max_level: 20, chance: 100},
        ]
    },
    "Old Chateau (Back East Room)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (Back Middle East Room)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Gengar", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Gengar", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Gengar", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Gengar", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Gengar", min_level: 17, max_level: 17, chance: 4},
        ]
    },
    "Old Chateau (Back Middle Room)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (Back Middle West Room)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (Back West Room)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (Corridor)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (Dining Area)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Old Chateau (Side Rooms)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 25},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 15},
        ]
    },
    "Oreburgh Gate (1F)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Psyduck", min_level: 5, max_level: 5, chance: 20},
            {pokemon: "Geodude", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Psyduck", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 5},
            {pokemon: "Psyduck", min_level: 7, max_level: 7, chance: 5},
            {pokemon: "Zubat", min_level: 7, max_level: 7, chance: 5},
            {pokemon: "Zubat", min_level: 8, max_level: 8, chance: 5},
        ]
    },
    "Oreburgh Gate (B1F)": {
        "Walk": [
            {pokemon: "Psyduck", min_level: 8, max_level: 8, chance: 20},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 20},
            {pokemon: "Geodude", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Psyduck", min_level: 9, max_level: 9, chance: 10},
            {pokemon: "Zubat", min_level: 7, max_level: 7, chance: 10},
            {pokemon: "Zubat", min_level: 8, max_level: 8, chance: 10},
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 5},
            {pokemon: "Golbat", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Psyduck", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Zubat", min_level: 9, max_level: 9, chance: 5},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Zubat", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Golbat", min_level: 20, max_level: 40, chance: 5},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 5},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Oreburgh Mine (B1F)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 5, max_level: 5, chance: 20},
            {pokemon: "Geodude", min_level: 6, max_level: 6, chance: 20},
            {pokemon: "Geodude", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 10},
            {pokemon: "Zubat", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 5},
            {pokemon: "Onix", min_level: 6, max_level: 6, chance: 5},
            {pokemon: "Onix", min_level: 8, max_level: 8, chance: 5},
            {pokemon: "Zubat", min_level: 7, max_level: 7, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 1},
        ]
    },
    "Oreburgh Mine (B2F)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 6, max_level: 6, chance: 20},
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 20},
            {pokemon: "Geodude", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 10},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Zubat", min_level: 7, max_level: 7, chance: 10},
            {pokemon: "Geodude", min_level: 9, max_level: 9, chance: 5},
            {pokemon: "Onix", min_level: 7, max_level: 7, chance: 5},
            {pokemon: "Onix", min_level: 9, max_level: 9, chance: 5},
            {pokemon: "Zubat", min_level: 8, max_level: 8, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 1},
        ]
    },
    "Pastoria City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 5},
            {pokemon: "Wingull", min_level: 20, max_level: 30, chance: 4},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Pokémon League": {
        "Surf": [
            {pokemon: "Wingull", min_level: 30, max_level: 40, chance: 60},
            {pokemon: "Pelipper", min_level: 30, max_level: 50, chance: 35},
            {pokemon: "Tentacruel", min_level: 30, max_level: 50, chance: 5},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Luvdisc", min_level: 20, max_level: 30, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Ravaged Path": {
        "Walk": [
            {pokemon: "Psyduck", min_level: 4, max_level: 4, chance: 20},
            {pokemon: "Zubat", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Zubat", min_level: 4, max_level: 4, chance: 20},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 15},
            {pokemon: "Psyduck", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Zubat", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Psyduck", min_level: 6, max_level: 6, chance: 5},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Zubat", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Golbat", min_level: 20, max_level: 40, chance: 5},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 5},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Resort Area": {
        "Surf": [
            {pokemon: "Golduck", min_level: 35, max_level: 55, chance: 90},
            {pokemon: "Psyduck", min_level: 35, max_level: 45, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 80},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Magikarp", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Magikarp", min_level: 30, max_level: 70, chance: 40},
            {pokemon: "Magikarp", min_level: 40, max_level: 60, chance: 40},
            {pokemon: "Magikarp", min_level: 20, max_level: 80, chance: 15},
            {pokemon: "Magikarp", min_level: 10, max_level: 90, chance: 4},
            {pokemon: "Magikarp", min_level: 1, max_level: 100, chance: 1},
        ]
    },
    "Route 201": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 2, max_level: 2, chance: 25},
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 25, time: ["Day", "Night"]},
            {pokemon: "Starly", min_level: 2, max_level: 2, chance: 25},
            {pokemon: "Starly", min_level: 3, max_level: 3, chance: 25, time: ["Morning", "Day"]},
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 15, time: ["Morning"]},
            {pokemon: "Starly", min_level: 3, max_level: 3, chance: 15, time: ["Night"]},
            {pokemon: "Kricketot", min_level: 3, max_level: 3, chance: 10, time: ["Morning", "Night"]},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Growlithe", min_level: 2, max_level: 2, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Nidoran♀", min_level: 3, max_level: 3, chance: 10},
            {pokemon: "Nidoran♂", min_level: 3, max_level: 3, chance: 10},
            {pokemon: "Nidoran♀", min_level: 2, max_level: 2, chance: 1},
            {pokemon: "Nidoran♂", min_level: 2, max_level: 2, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Doduo", min_level: 2, max_level: 2, chance: 40},
        ],
        "Gift": [
            {pokemon: "Chimchar", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Piplup", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Turtwig", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Route 202": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 40, time: ["Day", "Night"]},
            {pokemon: "Bidoof", min_level: 3, max_level: 3, chance: 30, time: ["Morning"]},
            {pokemon: "Shinx", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Starly", min_level: 4, max_level: 4, chance: 15, time: ["Morning", "Day"]},
            {pokemon: "Kricketot", min_level: 3, max_level: 3, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketot", min_level: 4, max_level: 4, chance: 10, time: ["Night"]},
            {pokemon: "Shinx", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Bidoof", min_level: 2, max_level: 2, chance: 5},
            {pokemon: "Bidoof", min_level: 4, max_level: 4, chance: 5},
            {pokemon: "Starly", min_level: 2, max_level: 2, chance: 5},
            {pokemon: "Starly", min_level: 4, max_level: 4, chance: 5, time: ["Night"]},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Growlithe", min_level: 2, max_level: 2, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Sentret", min_level: 3, max_level: 3, chance: 10},
            {pokemon: "Sentret", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Sentret", min_level: 2, max_level: 2, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Zigzagoon", min_level: 3, max_level: 3, chance: 40},
        ]
    },
    "Route 203": {
        "Walk": [
            {pokemon: "Shinx", min_level: 4, max_level: 4, chance: 20},
            {pokemon: "Starly", min_level: 4, max_level: 4, chance: 20},
            {pokemon: "Abra", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Bidoof", min_level: 4, max_level: 4, chance: 10, time: ["Day"]},
            {pokemon: "Bidoof", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Kricketot", min_level: 4, max_level: 4, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketot", min_level: 5, max_level: 5, chance: 10, time: ["Night"]},
            {pokemon: "Starly", min_level: 5, max_level: 5, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 4, max_level: 4, chance: 10, time: ["Night"]},
            {pokemon: "Abra", min_level: 5, max_level: 5, chance: 5},
            {pokemon: "Shinx", min_level: 5, max_level: 5, chance: 5},
            {pokemon: "Bidoof", min_level: 6, max_level: 6, chance: 4},
            {pokemon: "Starly", min_level: 6, max_level: 6, chance: 4},
            {pokemon: "Bidoof", min_level: 7, max_level: 7, chance: 1},
            {pokemon: "Starly", min_level: 7, max_level: 7, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pineco", min_level: 6, max_level: 6, chance: 8},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Seedot", min_level: 6, max_level: 6, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lotad", min_level: 6, max_level: 6, chance: 8},
        ],
        "Walk (Swarm)": [
            {pokemon: "Cubone", min_level: 4, max_level: 4, chance: 40},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 204 (North)": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 9, max_level: 9, chance: 20},
            {pokemon: "Starly", min_level: 9, max_level: 9, chance: 20},
            {pokemon: "Budew", min_level: 8, max_level: 8, chance: 10, time: ["Day"]},
            {pokemon: "Budew", min_level: 9, max_level: 9, chance: 10},
            {pokemon: "Kricketot", min_level: 8, max_level: 8, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketot", min_level: 9, max_level: 9, chance: 10, time: ["Night"]},
            {pokemon: "Shinx", min_level: 9, max_level: 9, chance: 10},
            {pokemon: "Wurmple", min_level: 9, max_level: 9, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 8, max_level: 8, chance: 10, time: ["Night"]},
            {pokemon: "Budew", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Shinx", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Bidoof", min_level: 10, max_level: 10, chance: 4},
            {pokemon: "Starly", min_level: 10, max_level: 10, chance: 4},
            {pokemon: "Bidoof", min_level: 11, max_level: 11, chance: 1},
            {pokemon: "Starly", min_level: 11, max_level: 11, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 8},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Caterpie", min_level: 10, max_level: 10, chance: 8},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Weedle", min_level: 10, max_level: 10, chance: 8},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Seedot", min_level: 10, max_level: 10, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lotad", min_level: 10, max_level: 10, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Sunkern", min_level: 9, max_level: 9, chance: 20},
            {pokemon: "Sunkern", min_level: 11, max_level: 11, chance: 2},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 204 (South)": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 4, max_level: 4, chance: 20},
            {pokemon: "Starly", min_level: 4, max_level: 4, chance: 20},
            {pokemon: "Budew", min_level: 3, max_level: 3, chance: 10, time: ["Day"]},
            {pokemon: "Budew", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Kricketot", min_level: 3, max_level: 3, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketot", min_level: 4, max_level: 4, chance: 10, time: ["Night"]},
            {pokemon: "Shinx", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Wurmple", min_level: 4, max_level: 4, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 3, max_level: 3, chance: 10, time: ["Night"]},
            {pokemon: "Budew", min_level: 5, max_level: 5, chance: 5},
            {pokemon: "Shinx", min_level: 5, max_level: 5, chance: 5},
            {pokemon: "Bidoof", min_level: 5, max_level: 5, chance: 4},
            {pokemon: "Starly", min_level: 5, max_level: 5, chance: 4},
            {pokemon: "Bidoof", min_level: 6, max_level: 6, chance: 1},
            {pokemon: "Starly", min_level: 6, max_level: 6, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pineco", min_level: 5, max_level: 5, chance: 8},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Caterpie", min_level: 5, max_level: 5, chance: 8},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Weedle", min_level: 5, max_level: 5, chance: 8},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Seedot", min_level: 5, max_level: 5, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lotad", min_level: 5, max_level: 5, chance: 8},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 205 (North)": {
        "Walk": [
            {pokemon: "Budew", min_level: 12, max_level: 12, chance: 30, time: ["Day"]},
            {pokemon: "Bidoof", min_level: 12, max_level: 12, chance: 20},
            {pokemon: "Budew", min_level: 12, max_level: 12, chance: 20, time: ["Morning", "Night"]},
            {pokemon: "Cascoon", min_level: 14, max_level: 14, chance: 10},
            {pokemon: "Hoothoot", min_level: 12, max_level: 12, chance: 10, time: ["Night"]},
            {pokemon: "Kricketot", min_level: 12, max_level: 12, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketot", min_level: 13, max_level: 13, chance: 10, time: ["Night"]},
            {pokemon: "Silcoon", min_level: 14, max_level: 14, chance: 10},
            {pokemon: "Wurmple", min_level: 13, max_level: 13, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Bidoof", min_level: 13, max_level: 13, chance: 5},
            {pokemon: "Bidoof", min_level: 14, max_level: 14, chance: 5},
            {pokemon: "Budew", min_level: 13, max_level: 13, chance: 4},
            {pokemon: "Budew", min_level: 14, max_level: 14, chance: 4},
            {pokemon: "Beautifly", min_level: 15, max_level: 15, chance: 1},
            {pokemon: "Dustox", min_level: 15, max_level: 15, chance: 1},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lotad", min_level: 13, max_level: 13, chance: 4},
            {pokemon: "Lotad", min_level: 14, max_level: 14, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Slowpoke", min_level: 14, max_level: 14, chance: 20},
            {pokemon: "Slowpoke", min_level: 15, max_level: 15, chance: 2},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 205 (South)": {
        "Walk": [
            {pokemon: "Shellos", min_level: 11, max_level: 11, chance: 30},
            {pokemon: "Shellos", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Bidoof", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Buizel", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Shellos", min_level: 9, max_level: 9, chance: 10},
            {pokemon: "Buizel", min_level: 11, max_level: 11, chance: 5},
            {pokemon: "Pachirisu", min_level: 9, max_level: 9, chance: 5},
            {pokemon: "Pachirisu", min_level: 11, max_level: 11, chance: 5},
            {pokemon: "Shellos", min_level: 12, max_level: 12, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Hoppip", min_level: 11, max_level: 11, chance: 11},
            {pokemon: "Hoppip", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Hoppip", min_level: 12, max_level: 12, chance: 1},
        ],
        "Surf": [
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Finneon", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 206": {
        "Walk": [
            {pokemon: "Geodude", min_level: 16, max_level: 16, chance: 20},
            {pokemon: "Ponyta", min_level: 16, max_level: 16, chance: 20},
            {pokemon: "Geodude", min_level: 18, max_level: 18, chance: 10},
            {pokemon: "Gligar", min_level: 16, max_level: 16, chance: 10},
            {pokemon: "Gligar", min_level: 18, max_level: 18, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Kricketune", min_level: 17, max_level: 17, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketune", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Machop", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Ponyta", min_level: 17, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Zubat", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Machop", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Machop", min_level: 19, max_level: 19, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Baltoy", min_level: 16, max_level: 16, chance: 10},
            {pokemon: "Baltoy", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Baltoy", min_level: 18, max_level: 18, chance: 1},
            {pokemon: "Baltoy", min_level: 19, max_level: 19, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Larvitar", min_level: 16, max_level: 16, chance: 40},
        ]
    },
    "Route 207": {
        "Walk": [
            {pokemon: "Geodude", min_level: 5, max_level: 5, chance: 20},
            {pokemon: "Machop", min_level: 7, max_level: 7, chance: 20},
            {pokemon: "Kricketot", min_level: 5, max_level: 5, chance: 10, time: ["Morning"]},
            {pokemon: "Kricketot", min_level: 6, max_level: 6, chance: 10, time: ["Night"]},
            {pokemon: "Machop", min_level: 5, max_level: 5, chance: 10, time: ["Day"]},
            {pokemon: "Machop", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Ponyta", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Ponyta", min_level: 6, max_level: 6, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 5, max_level: 5, chance: 10, time: ["Night"]},
            {pokemon: "Geodude", min_level: 6, max_level: 6, chance: 5},
            {pokemon: "Geodude", min_level: 7, max_level: 7, chance: 5},
            {pokemon: "Machop", min_level: 8, max_level: 8, chance: 5},
            {pokemon: "Ponyta", min_level: 7, max_level: 7, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Stantler", min_level: 5, max_level: 5, chance: 10},
            {pokemon: "Stantler", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Stantler", min_level: 7, max_level: 7, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Phanpy", min_level: 5, max_level: 5, chance: 20},
            {pokemon: "Phanpy", min_level: 7, max_level: 7, chance: 20},
        ]
    },
    "Route 208": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Budew", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Bibarel", min_level: 18, max_level: 18, chance: 10},
            {pokemon: "Budew", min_level: 19, max_level: 19, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Ralts", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Roselia", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 10, time: ["Night"]},
            {pokemon: "Bibarel", min_level: 19, max_level: 19, chance: 5},
            {pokemon: "Bibarel", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Ralts", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Roselia", min_level: 20, max_level: 20, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Zangoose", min_level: 20, max_level: 20, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Seviper", min_level: 20, max_level: 20, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Smeargle", min_level: 18, max_level: 18, chance: 10},
            {pokemon: "Smeargle", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Smeargle", min_level: 20, max_level: 20, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Dunsparce", min_level: 18, max_level: 18, chance: 40},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 20, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 209": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Roselia", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Bibarel", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Duskull", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Ralts", min_level: 17, max_level: 17, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staravia", min_level: 18, max_level: 18, chance: 10},
            {pokemon: "Staravia", min_level: 19, max_level: 19, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 10, time: ["Night"]},
            {pokemon: "Ralts", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Ralts", min_level: 19, max_level: 19, chance: 5},
            {pokemon: "Roselia", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Chansey", min_level: 17, max_level: 17, chance: 4},
            {pokemon: "Chansey", min_level: 19, max_level: 19, chance: 1},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Vulpix", min_level: 17, max_level: 17, chance: 4},
            {pokemon: "Vulpix", min_level: 19, max_level: 19, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Kirlia", min_level: 19, max_level: 19, chance: 12},
            {pokemon: "Kirlia", min_level: 18, max_level: 18, chance: 10},
        ],
        "Walk (Swarm)": [
            {pokemon: "Snubbull", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Snubbull", min_level: 19, max_level: 19, chance: 20},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ],
        "Static": [
            {pokemon: "Spiritomb", min_level: 25, max_level: 25, chance: 100},
        ]
    },
    "Route 210 (North)": {
        "Walk": [
            {pokemon: "Swablu", min_level: 27, max_level: 27, chance: 30, time: ["Day"]},
            {pokemon: "Bibarel", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Swablu", min_level: 27, max_level: 27, chance: 20, time: ["Morning", "Night"]},
            {pokemon: "Hoothoot", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Machop", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Meditite", min_level: 27, max_level: 27, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Noctowl", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Scyther", min_level: 27, max_level: 27, chance: 10, time: ["Morning"]},
            {pokemon: "Machoke", min_level: 29, max_level: 29, chance: 5},
            {pokemon: "Machoke", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Machop", min_level: 29, max_level: 29, chance: 5},
            {pokemon: "Scyther", min_level: 29, max_level: 29, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Zangoose", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Zangoose", min_level: 30, max_level: 30, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Seviper", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Seviper", min_level: 30, max_level: 30, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Bagon", min_level: 29, max_level: 29, chance: 11},
            {pokemon: "Bagon", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Bagon", min_level: 30, max_level: 30, chance: 1},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Whiscash", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 210 (South)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Staravia", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Ponyta", min_level: 21, max_level: 21, chance: 15, time: ["Day"]},
            {pokemon: "Hoothoot", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 21, max_level: 21, chance: 10, time: ["Night"]},
            {pokemon: "Ponyta", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Ponyta", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Roselia", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Scyther", min_level: 21, max_level: 21, chance: 10, time: ["Morning"]},
            {pokemon: "Ponyta", min_level: 21, max_level: 21, chance: 5, time: ["Morning", "Night"]},
            {pokemon: "Roselia", min_level: 21, max_level: 21, chance: 5},
            {pokemon: "Scyther", min_level: 19, max_level: 19, chance: 5},
            {pokemon: "Chansey", min_level: 19, max_level: 19, chance: 4},
            {pokemon: "Chansey", min_level: 21, max_level: 21, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pineco", min_level: 19, max_level: 19, chance: 4},
            {pokemon: "Pineco", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Nuzleaf", min_level: 19, max_level: 19, chance: 4},
            {pokemon: "Seedot", min_level: 21, max_level: 21, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Miltank", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Tauros", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Miltank", min_level: 21, max_level: 21, chance: 1},
            {pokemon: "Tauros", min_level: 21, max_level: 21, chance: 1},
        ]
    },
    "Route 211 (East)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Meditite", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Bronzor", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Machoke", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Meditite", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 29, max_level: 29, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 29, max_level: 29, chance: 10, time: ["Night"]},
            {pokemon: "Zubat", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Chingling", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Machoke", min_level: 30, max_level: 30, chance: 5},
        ]
    },
    "Route 211 (West)": {
        "Walk": [
            {pokemon: "Bidoof", min_level: 14, max_level: 14, chance: 20},
            {pokemon: "Meditite", min_level: 13, max_level: 13, chance: 20},
            {pokemon: "Chingling", min_level: 14, max_level: 14, chance: 10},
            {pokemon: "Hoothoot", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Machop", min_level: 14, max_level: 14, chance: 10},
            {pokemon: "Meditite", min_level: 14, max_level: 14, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 15, max_level: 15, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 14, max_level: 14, chance: 10, time: ["Night"]},
            {pokemon: "Bronzor", min_level: 14, max_level: 14, chance: 5},
            {pokemon: "Bronzor", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Machop", min_level: 15, max_level: 15, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Teddiursa", min_level: 15, max_level: 15, chance: 4},
            {pokemon: "Teddiursa", min_level: 16, max_level: 16, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Tyrogue", min_level: 14, max_level: 14, chance: 20},
            {pokemon: "Tyrogue", min_level: 15, max_level: 15, chance: 1},
            {pokemon: "Tyrogue", min_level: 16, max_level: 16, chance: 1},
        ]
    },
    "Route 212 (North)": {
        "Walk": [
            {pokemon: "Marill", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Roselia", min_level: 23, max_level: 23, chance: 20},
            {pokemon: "Marill", min_level: 23, max_level: 23, chance: 15, time: ["Night"]},
            {pokemon: "Kirlia", min_level: 22, max_level: 22, chance: 10, time: ["Morning"]},
            {pokemon: "Kirlia", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Marill", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Ralts", min_level: 22, max_level: 22, chance: 10, time: ["Day"]},
            {pokemon: "Roselia", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Staravia", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Staravia", min_level: 23, max_level: 23, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Marill", min_level: 23, max_level: 23, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Roselia", min_level: 24, max_level: 24, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Smeargle", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Smeargle", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Smeargle", min_level: 23, max_level: 23, chance: 1},
            {pokemon: "Smeargle", min_level: 24, max_level: 24, chance: 1},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 212 (South)": {
        "Walk": [
            {pokemon: "Quagsire", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Shellos", min_level: 23, max_level: 23, chance: 20},
            {pokemon: "Buizel", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Quagsire", min_level: 26, max_level: 26, chance: 10},
            {pokemon: "Shellos", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Shellos", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Buizel", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Croagunk", min_level: 24, max_level: 24, chance: 5},
            {pokemon: "Croagunk", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Shellos", min_level: 26, max_level: 26, chance: 5},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Ekans", min_level: 23, max_level: 23, chance: 4},
            {pokemon: "Ekans", min_level: 26, max_level: 26, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lombre", min_level: 23, max_level: 23, chance: 4},
            {pokemon: "Lotad", min_level: 26, max_level: 26, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Grimer", min_level: 26, max_level: 26, chance: 11},
            {pokemon: "Grimer", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Grimer", min_level: 23, max_level: 23, chance: 1},
        ],
        "Surf": [
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 213": {
        "Walk": [
            {pokemon: "Buizel", min_level: 23, max_level: 23, chance: 20},
            {pokemon: "Shellos", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Buizel", min_level: 25, max_level: 25, chance: 15, time: ["Night"]},
            {pokemon: "Chatot", min_level: 23, max_level: 23, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Chatot", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Shellos", min_level: 23, max_level: 23, chance: 10, time: ["Night"]},
            {pokemon: "Shellos", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Wingull", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Buizel", min_level: 25, max_level: 25, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Shellos", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Wingull", min_level: 24, max_level: 24, chance: 5},
            {pokemon: "Wingull", min_level: 26, max_level: 26, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Swellow", min_level: 25, max_level: 25, chance: 21},
            {pokemon: "Swellow", min_level: 26, max_level: 26, chance: 1},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Wingull", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 5},
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 4},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 214": {
        "Walk": [
            {pokemon: "Geodude", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Graveler", min_level: 23, max_level: 23, chance: 20},
            {pokemon: "Graveler", min_level: 22, max_level: 22, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Houndour", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Houndour", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Rhyhorn", min_level: 22, max_level: 22, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Rhyhorn", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Zubat", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 24, max_level: 24, chance: 5},
            {pokemon: "Houndour", min_level: 24, max_level: 24, chance: 5},
            {pokemon: "Rhyhorn", min_level: 21, max_level: 21, chance: 5},
            {pokemon: "Rhyhorn", min_level: 24, max_level: 24, chance: 5},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Vulpix", min_level: 24, max_level: 24, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Poochyena", min_level: 23, max_level: 23, chance: 20},
            {pokemon: "Poochyena", min_level: 24, max_level: 24, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Spoink", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Spoink", min_level: 23, max_level: 23, chance: 20},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 215": {
        "Walk": [
            {pokemon: "Marill", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Staravia", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Marill", min_level: 22, max_level: 22, chance: 15, time: ["Night"]},
            {pokemon: "Abra", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Lickitung", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Marill", min_level: 21, max_level: 21, chance: 10, time: ["Night"]},
            {pokemon: "Scyther", min_level: 22, max_level: 22, chance: 10, time: ["Morning"]},
            {pokemon: "Staravia", min_level: 21, max_level: 21, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staravia", min_level: 22, max_level: 22, chance: 10, time: ["Day"]},
            {pokemon: "Kadabra", min_level: 21, max_level: 21, chance: 5},
            {pokemon: "Kadabra", min_level: 22, max_level: 22, chance: 5},
            {pokemon: "Marill", min_level: 22, max_level: 22, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Scyther", min_level: 20, max_level: 20, chance: 5},
        ],
        "Walk (Swarm)": [
            {pokemon: "Drowzee", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Drowzee", min_level: 20, max_level: 20, chance: 20},
        ]
    },
    "Route 216": {
        "Walk": [
            {pokemon: "Sneasel", min_level: 33, max_level: 33, chance: 20},
            {pokemon: "Snover", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Meditite", min_level: 32, max_level: 32, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Meditite", min_level: 33, max_level: 33, chance: 10},
            {pokemon: "Sneasel", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Snorunt", min_level: 33, max_level: 33, chance: 10, time: ["Night"]},
            {pokemon: "Snover", min_level: 33, max_level: 33, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 32, max_level: 32, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 35, max_level: 35, chance: 5},
            {pokemon: "Sneasel", min_level: 35, max_level: 35, chance: 5},
            {pokemon: "Snover", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Snover", min_level: 35, max_level: 35, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Ursaring", min_level: 35, max_level: 35, chance: 8},
        ]
    },
    "Route 217": {
        "Walk": [
            {pokemon: "Snorunt", min_level: 33, max_level: 33, chance: 20, time: ["Night"]},
            {pokemon: "Snover", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Swinub", min_level: 33, max_level: 33, chance: 20},
            {pokemon: "Sneasel", min_level: 33, max_level: 33, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Snover", min_level: 33, max_level: 33, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Swinub", min_level: 34, max_level: 34, chance: 10},
            {pokemon: "Sneasel", min_level: 35, max_level: 35, chance: 5},
            {pokemon: "Snover", min_level: 34, max_level: 34, chance: 5},
            {pokemon: "Snover", min_level: 35, max_level: 35, chance: 5},
            {pokemon: "Swinub", min_level: 32, max_level: 32, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Ursaring", min_level: 35, max_level: 35, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Piloswine", min_level: 34, max_level: 34, chance: 20},
            {pokemon: "Piloswine", min_level: 35, max_level: 35, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Delibird", min_level: 32, max_level: 32, chance: 20},
            {pokemon: "Delibird", min_level: 33, max_level: 33, chance: 20},
        ]
    },
    "Route 218": {
        "Walk": [
            {pokemon: "Gastrodon", min_level: 28, max_level: 28, chance: 30, time: ["Night"]},
            {pokemon: "Floatzel", min_level: 29, max_level: 29, chance: 20},
            {pokemon: "Gastrodon", min_level: 28, max_level: 28, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Floatzel", min_level: 30, max_level: 30, chance: 15, time: ["Night"]},
            {pokemon: "Chatot", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Chatot", min_level: 30, max_level: 30, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Mr. Mime", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Mr. Mime", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Floatzel", min_level: 30, max_level: 30, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Floatzel", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Gastrodon", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Mr. Mime", min_level: 31, max_level: 31, chance: 5},
        ],
        "Walk (Swarm)": [
            {pokemon: "Voltorb", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Voltorb", min_level: 29, max_level: 29, chance: 20},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Finneon", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 219": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Wingull", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Pelipper", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Lumineon", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 220": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Wingull", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Pelipper", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Lumineon", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Chinchou", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 221": {
        "Walk": [
            {pokemon: "Floatzel", min_level: 29, max_level: 29, chance: 20},
            {pokemon: "Girafarig", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Floatzel", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Roselia", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Roselia", min_level: 29, max_level: 29, chance: 10},
            {pokemon: "Sudowoodo", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Sudowoodo", min_level: 31, max_level: 31, chance: 10},
            {pokemon: "Floatzel", min_level: 31, max_level: 31, chance: 5},
            {pokemon: "Girafarig", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Roselia", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Sudowoodo", min_level: 29, max_level: 29, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Nidorina", min_level: 30, max_level: 30, chance: 11},
            {pokemon: "Nidorino", min_level: 31, max_level: 31, chance: 11},
        ],
        "Walk (Swarm)": [
            {pokemon: "Farfetch’d", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Farfetch’d", min_level: 29, max_level: 29, chance: 20},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Wingull", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Pelipper", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Lumineon", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 222": {
        "Walk": [
            {pokemon: "Electabuzz", min_level: 39, max_level: 39, chance: 20},
            {pokemon: "Floatzel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Chatot", min_level: 38, max_level: 38, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Electabuzz", min_level: 41, max_level: 41, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Floatzel", min_level: 38, max_level: 38, chance: 10, time: ["Night"]},
            {pokemon: "Floatzel", min_level: 41, max_level: 41, chance: 10, time: ["Night"]},
            {pokemon: "Magnemite", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Wingull", min_level: 38, max_level: 38, chance: 10},
            {pokemon: "Luxio", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Luxio", min_level: 40, max_level: 40, chance: 5},
            {pokemon: "Magneton", min_level: 41, max_level: 41, chance: 5},
            {pokemon: "Pelipper", min_level: 40, max_level: 40, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Flaaffy", min_level: 38, max_level: 38, chance: 10},
            {pokemon: "Flaaffy", min_level: 39, max_level: 39, chance: 10},
            {pokemon: "Flaaffy", min_level: 40, max_level: 40, chance: 1},
            {pokemon: "Flaaffy", min_level: 41, max_level: 41, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Skitty", min_level: 39, max_level: 39, chance: 20},
            {pokemon: "Skitty", min_level: 40, max_level: 40, chance: 20},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 30, max_level: 40, chance: 60},
            {pokemon: "Wingull", min_level: 30, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 30, max_level: 50, chance: 9},
            {pokemon: "Pelipper", min_level: 30, max_level: 50, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 223": {
        "Surf": [
            {pokemon: "Tentacruel", min_level: 30, max_level: 50, chance: 60},
            {pokemon: "Pelipper", min_level: 30, max_level: 50, chance: 30},
            {pokemon: "Mantyke", min_level: 30, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 25, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Octillery", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Wailmer", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Octillery", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Wailord", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 224": {
        "Walk": [
            {pokemon: "Bellsprout", min_level: 49, max_level: 49, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Floatzel", min_level: 50, max_level: 50, chance: 20},
            {pokemon: "Oddish", min_level: 49, max_level: 49, chance: 20, time: ["Night"]},
            {pokemon: "Roselia", min_level: 50, max_level: 50, chance: 20},
            {pokemon: "Gastrodon", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Pelipper", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Beautifly", min_level: 52, max_level: 52, chance: 5},
            {pokemon: "Dustox", min_level: 52, max_level: 52, chance: 5},
            {pokemon: "Gloom", min_level: 51, max_level: 51, chance: 5},
            {pokemon: "Weepinbell", min_level: 51, max_level: 51, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Shuckle", min_level: 52, max_level: 52, chance: 8},
        ],
        "Walk (Swarm)": [
            {pokemon: "Natu", min_level: 50, max_level: 50, chance: 40},
        ],
        "Surf": [
            {pokemon: "Pelipper", min_level: 35, max_level: 55, chance: 60},
            {pokemon: "Tentacruel", min_level: 35, max_level: 55, chance: 30},
            {pokemon: "Gastrodon", min_level: 35, max_level: 55, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 25, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Luvdisc", min_level: 20, max_level: 30, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 225": {
        "Walk": [
            {pokemon: "Graveler", min_level: 49, max_level: 49, chance: 20},
            {pokemon: "Machoke", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Banette", min_level: 48, max_level: 48, chance: 10, time: ["Night"]},
            {pokemon: "Banette", min_level: 50, max_level: 50, chance: 10, time: ["Night"]},
            {pokemon: "Fearow", min_level: 48, max_level: 48, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Fearow", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Fearow", min_level: 50, max_level: 50, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Machoke", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Raticate", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Rattata", min_level: 47, max_level: 47, chance: 5},
            {pokemon: "Spearow", min_level: 47, max_level: 47, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Primeape", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Primeape", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Mankey", min_level: 47, max_level: 47, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Makuhita", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Makuhita", min_level: 49, max_level: 49, chance: 20},
        ],
        "Surf": [
            {pokemon: "Golduck", min_level: 35, max_level: 55, chance: 90},
            {pokemon: "Psyduck", min_level: 35, max_level: 45, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 226": {
        "Walk": [
            {pokemon: "Graveler", min_level: 49, max_level: 49, chance: 20},
            {pokemon: "Machoke", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Banette", min_level: 48, max_level: 48, chance: 10, time: ["Night"]},
            {pokemon: "Banette", min_level: 50, max_level: 50, chance: 10, time: ["Night"]},
            {pokemon: "Fearow", min_level: 48, max_level: 48, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Fearow", min_level: 50, max_level: 50, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Wingull", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Machoke", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Raticate", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Rattata", min_level: 47, max_level: 47, chance: 5},
            {pokemon: "Wingull", min_level: 47, max_level: 47, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Primeape", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Primeape", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Mankey", min_level: 47, max_level: 47, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Krabby", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Krabby", min_level: 49, max_level: 49, chance: 20},
        ],
        "Surf": [
            {pokemon: "Wingull", min_level: 35, max_level: 45, chance: 60},
            {pokemon: "Pelipper", min_level: 35, max_level: 55, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 55, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Horsea", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Horsea", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Seadra", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Relicanth", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Seadra", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 227": {
        "Walk": [
            {pokemon: "Camerupt", min_level: 53, max_level: 53, chance: 20},
            {pokemon: "Rhydon", min_level: 54, max_level: 54, chance: 20},
            {pokemon: "Fearow", min_level: 51, max_level: 51, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Fearow", min_level: 53, max_level: 53, chance: 10},
            {pokemon: "Golbat", min_level: 51, max_level: 51, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Weezing", min_level: 52, max_level: 52, chance: 10},
            {pokemon: "Graveler", min_level: 53, max_level: 53, chance: 5},
            {pokemon: "Numel", min_level: 51, max_level: 51, chance: 5},
            {pokemon: "Rhyhorn", min_level: 52, max_level: 52, chance: 5},
            {pokemon: "Skarmory", min_level: 53, max_level: 53, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Torkoal", min_level: 52, max_level: 52, chance: 11},
            {pokemon: "Torkoal", min_level: 53, max_level: 53, chance: 10},
            {pokemon: "Torkoal", min_level: 51, max_level: 51, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Spinda", min_level: 53, max_level: 53, chance: 20},
            {pokemon: "Spinda", min_level: 54, max_level: 54, chance: 20},
        ],
        "Surf": [
            {pokemon: "Poliwhirl", min_level: 35, max_level: 55, chance: 70},
            {pokemon: "Poliwag", min_level: 35, max_level: 45, chance: 30},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Barboach", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 228": {
        "Walk": [
            {pokemon: "Cacturne", min_level: 50, max_level: 50, chance: 20, time: ["Night"]},
            {pokemon: "Cacturne", min_level: 52, max_level: 52, chance: 20},
            {pokemon: "Dugtrio", min_level: 51, max_level: 51, chance: 20},
            {pokemon: "Hippowdon", min_level: 50, max_level: 50, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hippowdon", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Rhydon", min_level: 50, max_level: 50, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Rhydon", min_level: 52, max_level: 52, chance: 10},
            {pokemon: "Cacnea", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Diglett", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Dugtrio", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Dugtrio", min_level: 52, max_level: 52, chance: 5},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Sandslash", min_level: 49, max_level: 49, chance: 4},
            {pokemon: "Sandslash", min_level: 50, max_level: 50, chance: 4},
        ],
        "Walk (Swarm)": [
            {pokemon: "Beldum", min_level: 51, max_level: 51, chance: 20},
            {pokemon: "Beldum", min_level: 52, max_level: 52, chance: 20},
        ],
        "Surf": [
            {pokemon: "Poliwhirl", min_level: 35, max_level: 55, chance: 70},
            {pokemon: "Poliwag", min_level: 35, max_level: 45, chance: 30},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Barboach", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Whiscash", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Whiscash", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Whiscash", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 229": {
        "Walk": [
            {pokemon: "Ariados", min_level: 50, max_level: 50, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 50, max_level: 50, chance: 20, time: ["Morning"]},
            {pokemon: "Pidgey", min_level: 50, max_level: 50, chance: 20, time: ["Day"]},
            {pokemon: "Roselia", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Roselia", min_level: 49, max_level: 49, chance: 20},
            {pokemon: "Illumise", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Volbeat", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Beautifly", min_level: 48, max_level: 48, chance: 5},
            {pokemon: "Dustox", min_level: 48, max_level: 48, chance: 5},
            {pokemon: "Pidgey", min_level: 47, max_level: 47, chance: 5},
            {pokemon: "Roselia", min_level: 50, max_level: 50, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pineco", min_level: 48, max_level: 48, chance: 8},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Nuzleaf", min_level: 48, max_level: 48, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lombre", min_level: 48, max_level: 48, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Venomoth", min_level: 49, max_level: 49, chance: 20},
            {pokemon: "Venonat", min_level: 48, max_level: 48, chance: 2},
        ],
        "Walk (Swarm)": [
            {pokemon: "Pinsir", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Pinsir", min_level: 49, max_level: 49, chance: 20},
        ],
        "Surf": [
            {pokemon: "Surskit", min_level: 35, max_level: 45, chance: 95},
            {pokemon: "Masquerain", min_level: 35, max_level: 55, chance: 5},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Route 230": {
        "Walk": [
            {pokemon: "Bellsprout", min_level: 47, max_level: 47, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Floatzel", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Oddish", min_level: 47, max_level: 47, chance: 20, time: ["Night"]},
            {pokemon: "Pelipper", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Pelipper", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Roselia", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Floatzel", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Gloom", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Weepinbell", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Wingull", min_level: 48, max_level: 48, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Pelipper", min_level: 48, max_level: 48, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Pelipper", min_level: 48, max_level: 48, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Pelipper", min_level: 48, max_level: 48, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Pelipper", min_level: 48, max_level: 48, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Pelipper", min_level: 48, max_level: 48, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Togepi", min_level: 50, max_level: 50, chance: 11},
            {pokemon: "Togepi", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Togepi", min_level: 48, max_level: 48, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Corsola", min_level: 48, max_level: 48, chance: 40},
        ],
        "Surf": [
            {pokemon: "Sealeo", min_level: 35, max_level: 55, chance: 60},
            {pokemon: "Pelipper", min_level: 35, max_level: 55, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 55, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Wailmer", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Octillery", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Wailord", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Ruin Maniac Cave (Long)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 24, max_level: 24, chance: 60},
            {pokemon: "Geodude", min_level: 23, max_level: 23, chance: 20},
            {pokemon: "Geodude", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Hippopotas", min_level: 24, max_level: 24, chance: 5},
            {pokemon: "Hippopotas", min_level: 23, max_level: 23, chance: 4},
            {pokemon: "Hippopotas", min_level: 25, max_level: 25, chance: 1},
        ]
    },
    "Ruin Maniac Cave (Short)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 23, max_level: 23, chance: 65},
            {pokemon: "Geodude", min_level: 22, max_level: 22, chance: 20},
            {pokemon: "Geodude", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Hippopotas", min_level: 22, max_level: 22, chance: 4},
            {pokemon: "Hippopotas", min_level: 24, max_level: 24, chance: 1},
        ]
    },
    "Sendoff Spring": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 20},
            {pokemon: "Bibarel", min_level: 38, max_level: 38, chance: 10},
            {pokemon: "Dusclops", min_level: 39, max_level: 39, chance: 10, time: ["Night"]},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 39, max_level: 39, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staravia", min_level: 38, max_level: 38, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staravia", min_level: 40, max_level: 40, chance: 10},
            {pokemon: "Chingling", min_level: 37, max_level: 37, chance: 5},
            {pokemon: "Chingling", min_level: 39, max_level: 39, chance: 5},
            {pokemon: "Dusclops", min_level: 40, max_level: 40, chance: 5},
            {pokemon: "Graveler", min_level: 37, max_level: 37, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 39, max_level: 39, chance: 4},
            {pokemon: "Solrock", min_level: 40, max_level: 40, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 39, max_level: 39, chance: 4},
            {pokemon: "Lunatone", min_level: 40, max_level: 40, chance: 4},
        ],
        "Surf": [
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 100},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Sinnoh (Roaming)": {
        "Roaming (Grass)": [
            {pokemon: "Articuno", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Cresselia", min_level: 50, max_level: 50, chance: 100},
            {pokemon: "Mesprit", min_level: 50, max_level: 50, chance: 100},
            {pokemon: "Moltres", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Zapdos", min_level: 60, max_level: 60, chance: 100},
        ],
        "Roaming (Water)": [
            {pokemon: "Articuno", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Cresselia", min_level: 50, max_level: 50, chance: 100},
            {pokemon: "Mesprit", min_level: 50, max_level: 50, chance: 100},
            {pokemon: "Moltres", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Zapdos", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Snowpoint Temple (1F)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 25},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Sneasel", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Smoochum", min_level: 47, max_level: 47, chance: 5},
            {pokemon: "Smoochum", min_level: 49, max_level: 49, chance: 5},
        ]
    },
    "Snowpoint Temple (B1F)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 25},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Sneasel", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Jynx", min_level: 47, max_level: 47, chance: 5},
            {pokemon: "Jynx", min_level: 49, max_level: 49, chance: 5},
        ]
    },
    "Snowpoint Temple (B2F)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 25},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Sneasel", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Jynx", min_level: 48, max_level: 48, chance: 5},
            {pokemon: "Jynx", min_level: 50, max_level: 50, chance: 5},
        ]
    },
    "Snowpoint Temple (B3F)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 25},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Sneasel", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Jynx", min_level: 48, max_level: 48, chance: 5},
            {pokemon: "Jynx", min_level: 50, max_level: 50, chance: 5},
        ]
    },
    "Snowpoint Temple (B4F)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 25},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Sneasel", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Jynx", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Jynx", min_level: 51, max_level: 51, chance: 5},
        ]
    },
    "Snowpoint Temple (B5F)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 25},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Sneasel", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Jynx", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Jynx", min_level: 51, max_level: 51, chance: 5},
        ],
        "Static": [
            {pokemon: "Regigigas", min_level: 1, max_level: 1, chance: 100},
        ]
    },
    "Solaceon Ruins (Maniac Tunnel Room)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 1 Northwest Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 1 Southeast Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 2 Northeast Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 2 Southeast Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 2)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 3 Northwest Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 3 Southwest Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 3)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 4 Southeast Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 4)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 5 Southeast Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 5 Southwest Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 5)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 6 Northwest Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 6 Southeast Dead End)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 6)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Solaceon Ruins (Room 7)": {
        "Walk": [
            {pokemon: "Unown", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Unown", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Unown", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Unown", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Unown", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Unown", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Unown", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Unown", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Unown", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Unown", min_level: 29, max_level: 29, chance: 4},
            {pokemon: "Unown", min_level: 30, max_level: 30, chance: 2},
        ]
    },
    "Spear Pillar": {
        "Static": [
            {pokemon: "Dialga", min_level: 70, max_level: 70, chance: 100},
            {pokemon: "Palkia", min_level: 70, max_level: 70, chance: 100},
        ]
    },
    "Stark Mountain (Heatran Chamber)": {
        "Static": [
            {pokemon: "Heatran", min_level: 50, max_level: 50, chance: 100},
        ]
    },
    "Stark Mountain (Outside)": {
        "Walk": [
            {pokemon: "Camerupt", min_level: 53, max_level: 53, chance: 20},
            {pokemon: "Rhydon", min_level: 54, max_level: 54, chance: 20},
            {pokemon: "Fearow", min_level: 51, max_level: 51, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Fearow", min_level: 53, max_level: 53, chance: 10},
            {pokemon: "Golbat", min_level: 51, max_level: 51, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Weezing", min_level: 52, max_level: 52, chance: 10},
            {pokemon: "Graveler", min_level: 53, max_level: 53, chance: 5},
            {pokemon: "Numel", min_level: 51, max_level: 51, chance: 5},
            {pokemon: "Rhyhorn", min_level: 52, max_level: 52, chance: 5},
            {pokemon: "Skarmory", min_level: 53, max_level: 53, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Torkoal", min_level: 52, max_level: 52, chance: 11},
            {pokemon: "Torkoal", min_level: 53, max_level: 53, chance: 10},
            {pokemon: "Torkoal", min_level: 51, max_level: 51, chance: 1},
        ]
    },
    "Stark Mountain (Room 1)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 52, max_level: 52, chance: 20},
            {pokemon: "Magcargo", min_level: 54, max_level: 54, chance: 20},
            {pokemon: "Rhydon", min_level: 54, max_level: 54, chance: 20},
            {pokemon: "Graveler", min_level: 51, max_level: 51, chance: 10},
            {pokemon: "Weezing", min_level: 53, max_level: 53, chance: 10},
            {pokemon: "Graveler", min_level: 53, max_level: 53, chance: 5},
            {pokemon: "Rhyhorn", min_level: 52, max_level: 52, chance: 5},
            {pokemon: "Slugma", min_level: 52, max_level: 52, chance: 5},
            {pokemon: "Weezing", min_level: 51, max_level: 51, chance: 5},
        ]
    },
    "Stark Mountain (Room 2)": {
        "Walk": [
            {pokemon: "Magcargo", min_level: 53, max_level: 53, chance: 20},
            {pokemon: "Magcargo", min_level: 55, max_level: 55, chance: 20},
            {pokemon: "Golbat", min_level: 53, max_level: 53, chance: 10},
            {pokemon: "Graveler", min_level: 52, max_level: 52, chance: 10},
            {pokemon: "Rhydon", min_level: 55, max_level: 55, chance: 10},
            {pokemon: "Weezing", min_level: 54, max_level: 54, chance: 10},
            {pokemon: "Graveler", min_level: 54, max_level: 54, chance: 5},
            {pokemon: "Koffing", min_level: 53, max_level: 53, chance: 5},
            {pokemon: "Slugma", min_level: 53, max_level: 53, chance: 5},
            {pokemon: "Weezing", min_level: 52, max_level: 52, chance: 5},
        ]
    },
    "Sunyshore City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 30, max_level: 40, chance: 60},
            {pokemon: "Wingull", min_level: 30, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 30, max_level: 50, chance: 9},
            {pokemon: "Pelipper", min_level: 30, max_level: 50, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Remoraid", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Octillery", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Staryu", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Octillery", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Trophy Garden": {
        "Walk": [
            {pokemon: "Pichu", min_level: 21, max_level: 21, chance: 20},
            {pokemon: "Roselia", min_level: 22, max_level: 22, chance: 20},
            {pokemon: "Kricketune", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Kricketune", min_level: 23, max_level: 23, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Pichu", min_level: 22, max_level: 22, chance: 10},
            {pokemon: "Roselia", min_level: 23, max_level: 23, chance: 10},
            {pokemon: "Staravia", min_level: 22, max_level: 22, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staravia", min_level: 23, max_level: 23, chance: 10, time: ["Day"]},
            {pokemon: "Staravia", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Pikachu", min_level: 22, max_level: 22, chance: 5},
            {pokemon: "Pikachu", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Turnback Cave (Pillar 1 Room 1)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Dusclops", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Golbat", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 1 Room 2)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Dusclops", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Golbat", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 1 Room 3)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Dusclops", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Golbat", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 1 Room 4)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Dusclops", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Golbat", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 1 Room 5)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Dusclops", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Golbat", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 1 Room 6)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Gastly", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Dusclops", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Chingling", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Chingling", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Duskull", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Golbat", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 18, max_level: 18, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Dusclops", min_level: 18, max_level: 18, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 2 Room 1)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Haunter", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Dusclops", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Chingling", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Duskull", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Chimecho", min_level: 28, max_level: 28, chance: 1},
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 2 Room 2)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Haunter", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Dusclops", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Chingling", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Golbat", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Duskull", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Chimecho", min_level: 28, max_level: 28, chance: 1},
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 2 Room 3)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Haunter", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Dusclops", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Chingling", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Golbat", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Duskull", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Chimecho", min_level: 28, max_level: 28, chance: 1},
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 2 Room 4)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Haunter", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Dusclops", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Chingling", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Golbat", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Duskull", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Chimecho", min_level: 28, max_level: 28, chance: 1},
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 2 Room 5)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Haunter", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Dusclops", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Chingling", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Golbat", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Duskull", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Chimecho", min_level: 28, max_level: 28, chance: 1},
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 2 Room 6)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 20},
            {pokemon: "Haunter", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Dusclops", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Chingling", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Golbat", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Duskull", min_level: 28, max_level: 28, chance: 4},
            {pokemon: "Chimecho", min_level: 28, max_level: 28, chance: 1},
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 1},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Dusclops", min_level: 28, max_level: 28, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 28, max_level: 28, chance: 8},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Chingling", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Turnback Cave (Pillar 3 Room 1)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Haunter", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Dusclops", min_level: 36, max_level: 36, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 37, max_level: 37, chance: 10},
            {pokemon: "Chimecho", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chimecho", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Dusclops", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Turnback Cave (Pillar 3 Room 2)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Haunter", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Dusclops", min_level: 36, max_level: 36, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 37, max_level: 37, chance: 10},
            {pokemon: "Chimecho", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chimecho", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Dusclops", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Turnback Cave (Pillar 3 Room 3)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Haunter", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Dusclops", min_level: 36, max_level: 36, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 37, max_level: 37, chance: 10},
            {pokemon: "Chimecho", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chimecho", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Dusclops", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Turnback Cave (Pillar 3 Room 4)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Haunter", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Dusclops", min_level: 36, max_level: 36, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 37, max_level: 37, chance: 10},
            {pokemon: "Chimecho", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chimecho", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Dusclops", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Turnback Cave (Pillar 3 Room 5)": {
        "Walk": [
            {pokemon: "Bronzong", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Golbat", min_level: 37, max_level: 37, chance: 20},
            {pokemon: "Haunter", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Dusclops", min_level: 36, max_level: 36, chance: 10, time: ["Night"]},
            {pokemon: "Haunter", min_level: 36, max_level: 36, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 37, max_level: 37, chance: 10},
            {pokemon: "Chimecho", min_level: 36, max_level: 36, chance: 5},
            {pokemon: "Chimecho", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Dusclops", min_level: 38, max_level: 38, chance: 5},
            {pokemon: "Golbat", min_level: 38, max_level: 38, chance: 5},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Solrock", min_level: 38, max_level: 38, chance: 8},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Lunatone", min_level: 38, max_level: 38, chance: 8},
        ]
    },
    "Twinleaf Town": {
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 30, chance: 90},
            {pokemon: "Golduck", min_level: 20, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Goldeen", min_level: 25, max_level: 35, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Seaking", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 15},
            {pokemon: "Seaking", min_level: 40, max_level: 55, chance: 5},
        ]
    },
    "Valley Windworks": {
        "Walk": [
            {pokemon: "Shellos", min_level: 9, max_level: 9, chance: 20},
            {pokemon: "Shinx", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Buizel", min_level: 9, max_level: 9, chance: 10},
            {pokemon: "Buizel", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Shellos", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Shellos", min_level: 11, max_level: 11, chance: 10},
            {pokemon: "Buizel", min_level: 11, max_level: 11, chance: 5},
            {pokemon: "Pachirisu", min_level: 9, max_level: 9, chance: 5},
            {pokemon: "Pachirisu", min_level: 11, max_level: 11, chance: 5},
            {pokemon: "Shellos", min_level: 12, max_level: 12, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Mareep", min_level: 11, max_level: 11, chance: 11},
            {pokemon: "Mareep", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Mareep", min_level: 12, max_level: 12, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Electrike", min_level: 9, max_level: 9, chance: 20},
            {pokemon: "Electrike", min_level: 10, max_level: 10, chance: 20},
        ],
        "Surf": [
            {pokemon: "Shellos", min_level: 20, max_level: 30, chance: 60},
            {pokemon: "Tentacool", min_level: 20, max_level: 30, chance: 30},
            {pokemon: "Gastrodon", min_level: 20, max_level: 40, chance: 9},
            {pokemon: "Tentacruel", min_level: 20, max_level: 40, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Finneon", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 40},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 15},
            {pokemon: "Finneon", min_level: 10, max_level: 25, chance: 5},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 55, chance: 40},
            {pokemon: "Lumineon", min_level: 30, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 20, max_level: 50, chance: 15},
            {pokemon: "Lumineon", min_level: 40, max_level: 55, chance: 5},
        ],
        "Static": [
            {pokemon: "Drifloon", min_level: 15, max_level: 15, chance: 100},
        ]
    },
    "Valor Lakefront": {
        "Walk": [
            {pokemon: "Bibarel", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Girafarig", min_level: 26, max_level: 26, chance: 20},
            {pokemon: "Staravia", min_level: 27, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Houndour", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Houndour", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Kricketune", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Kricketune", min_level: 27, max_level: 27, chance: 10, time: ["Morning"]},
            {pokemon: "Staravia", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staravia", min_level: 27, max_level: 27, chance: 10, time: ["Morning", "Night"]},
            {pokemon: "Bibarel", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Bibarel", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Girafarig", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Staravia", min_level: 28, max_level: 28, chance: 5},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Nidorina", min_level: 28, max_level: 28, chance: 10},
            {pokemon: "Nidorino", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Nidorina", min_level: 27, max_level: 27, chance: 1},
            {pokemon: "Nidorino", min_level: 28, max_level: 28, chance: 1},
        ]
    },
    "Veilstone City": {
        "Gift": [
            {pokemon: "Porygon", min_level: 25, max_level: 25, chance: 100},
        ]
    },
    "Victory Road (1F Room 1)": {
        "Walk": [
            {pokemon: "Floatzel", min_level: 47, max_level: 47, chance: 20},
            {pokemon: "Graveler", min_level: 47, max_level: 47, chance: 20},
            {pokemon: "Floatzel", min_level: 48, max_level: 48, chance: 10},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 49, max_level: 49, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 48, max_level: 48, chance: 10},
            {pokemon: "Onix", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Floatzel", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Gabite", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Steelix", min_level: 50, max_level: 50, chance: 5},
        ]
    },
    "Victory Road (1F Room 2)": {
        "Walk": [
            {pokemon: "Azumarill", min_level: 47, max_level: 47, chance: 20},
            {pokemon: "Floatzel", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Azumarill", min_level: 49, max_level: 49, chance: 10},
            {pokemon: "Dewgong", min_level: 48, max_level: 48, chance: 10},
            {pokemon: "Floatzel", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Golbat", min_level: 47, max_level: 47, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 47, max_level: 47, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Dewgong", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Gabite", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Graveler", min_level: 49, max_level: 49, chance: 5},
        ],
        "Surf": [
            {pokemon: "Floatzel", min_level: 35, max_level: 55, chance: 60},
            {pokemon: "Dewgong", min_level: 35, max_level: 55, chance: 30},
            {pokemon: "Lapras", min_level: 35, max_level: 55, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 80},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 20},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 80},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 20},
        ]
    },
    "Victory Road (1F Room 3)": {
        "Walk": [
            {pokemon: "Floatzel", min_level: 47, max_level: 47, chance: 20},
            {pokemon: "Graveler", min_level: 47, max_level: 47, chance: 20},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 15, time: ["Night"]},
            {pokemon: "Floatzel", min_level: 48, max_level: 48, chance: 10},
            {pokemon: "Graveler", min_level: 49, max_level: 49, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 48, max_level: 48, chance: 10},
            {pokemon: "Onix", min_level: 50, max_level: 50, chance: 10},
            {pokemon: "Floatzel", min_level: 49, max_level: 49, chance: 5},
            {pokemon: "Gabite", min_level: 50, max_level: 50, chance: 5},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Steelix", min_level: 50, max_level: 50, chance: 5},
        ]
    },
    "Victory Road (1F)": {
        "Walk": [
            {pokemon: "Graveler", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Rhyhorn", min_level: 41, max_level: 41, chance: 20},
            {pokemon: "Golbat", min_level: 42, max_level: 42, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 42, max_level: 42, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 41, max_level: 41, chance: 10},
            {pokemon: "Onix", min_level: 42, max_level: 42, chance: 10},
            {pokemon: "Rhydon", min_level: 41, max_level: 41, chance: 10},
            {pokemon: "Gabite", min_level: 41, max_level: 41, chance: 5},
            {pokemon: "Golbat", min_level: 43, max_level: 43, chance: 5},
            {pokemon: "Rhydon", min_level: 43, max_level: 43, chance: 5},
            {pokemon: "Steelix", min_level: 42, max_level: 42, chance: 5},
        ]
    },
    "Victory Road (2F)": {
        "Walk": [
            {pokemon: "Steelix", min_level: 42, max_level: 42, chance: 30},
            {pokemon: "Magneton", min_level: 41, max_level: 41, chance: 20},
            {pokemon: "Golbat", min_level: 41, max_level: 41, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 41, max_level: 41, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Magneton", min_level: 43, max_level: 43, chance: 10},
            {pokemon: "Steelix", min_level: 44, max_level: 44, chance: 10},
            {pokemon: "Gabite", min_level: 43, max_level: 43, chance: 5},
            {pokemon: "Golbat", min_level: 44, max_level: 44, chance: 5},
            {pokemon: "Graveler", min_level: 43, max_level: 43, chance: 5},
            {pokemon: "Onix", min_level: 42, max_level: 42, chance: 5},
        ]
    },
    "Victory Road (B1F)": {
        "Walk": [
            {pokemon: "Azumarill", min_level: 41, max_level: 41, chance: 20},
            {pokemon: "Floatzel", min_level: 42, max_level: 42, chance: 20},
            {pokemon: "Azumarill", min_level: 43, max_level: 43, chance: 10},
            {pokemon: "Floatzel", min_level: 44, max_level: 44, chance: 10},
            {pokemon: "Golbat", min_level: 41, max_level: 41, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 41, max_level: 41, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 42, max_level: 42, chance: 10},
            {pokemon: "Gabite", min_level: 43, max_level: 43, chance: 5},
            {pokemon: "Golbat", min_level: 44, max_level: 44, chance: 5},
            {pokemon: "Graveler", min_level: 43, max_level: 43, chance: 5},
            {pokemon: "Steelix", min_level: 44, max_level: 44, chance: 5},
        ],
        "Surf": [
            {pokemon: "Floatzel", min_level: 30, max_level: 50, chance: 90},
            {pokemon: "Golbat", min_level: 30, max_level: 50, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 4, max_level: 6, chance: 60},
            {pokemon: "Magikarp", min_level: 3, max_level: 7, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 10, chance: 9},
            {pokemon: "Magikarp", min_level: 5, max_level: 15, chance: 1},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 15, max_level: 20, chance: 80},
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 20},
        ],
        "Super Rod": [
            {pokemon: "Gyarados", min_level: 30, max_level: 40, chance: 80},
            {pokemon: "Gyarados", min_level: 40, max_level: 55, chance: 20},
        ]
    },
    "Wayward Cave (1F)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Geodude", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Bronzor", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Onix", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Geodude", min_level: 19, max_level: 19, chance: 5},
            {pokemon: "Geodude", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Onix", min_level: 18, max_level: 18, chance: 5},
            {pokemon: "Zubat", min_level: 17, max_level: 17, chance: 5},
        ],
        "Walk (Dual-Slot Emerald)": [
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot FireRed)": [
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Sandshrew", min_level: 17, max_level: 17, chance: 4},
            {pokemon: "Sandshrew", min_level: 18, max_level: 18, chance: 4},
        ],
        "Walk (Dual-Slot Ruby)": [
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Dual-Slot Sapphire)": [
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 4},
        ],
        "Walk (Poké Radar)": [
            {pokemon: "Geodude", min_level: 17, max_level: 17, chance: 1},
        ]
    },
    "Wayward Cave (B1F)": {
        "Walk": [
            {pokemon: "Bronzor", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Geodude", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Bronzor", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Gible", min_level: 17, max_level: 17, chance: 10},
            {pokemon: "Onix", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 10},
            {pokemon: "Geodude", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Gible", min_level: 19, max_level: 19, chance: 5},
            {pokemon: "Gible", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Onix", min_level: 18, max_level: 18, chance: 5},
        ],
        "Walk (Dual-Slot LeafGreen)": [
            {pokemon: "Sandshrew", min_level: 18, max_level: 18, chance: 4},
            {pokemon: "Sandshrew", min_level: 20, max_level: 20, chance: 4},
        ]
    }
};
