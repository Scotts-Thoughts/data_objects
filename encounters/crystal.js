export const encounters = {
    "Azalea Town": {
        "Headbutt": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ekans", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Heracross", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Blackthorn City": {
        "Surf": [
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 5, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Burned Tower (1F)": {
        "Walk": [
            {pokemon: "Koffing", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Rattata", min_level: 13, max_level: 13, chance: 30},
            {pokemon: "Rattata", min_level: 15, max_level: 15, chance: 25},
            {pokemon: "Zubat", min_level: 14, max_level: 14, chance: 10},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 5},
        ]
    },
    "Burned Tower (B1F)": {
        "Walk": [
            {pokemon: "Koffing", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Rattata", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Koffing", min_level: 16, max_level: 16, chance: 24},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 10},
            {pokemon: "Koffing", min_level: 12, max_level: 12, chance: 5},
            {pokemon: "Weezing", min_level: 16, max_level: 16, chance: 1},
        ]
    },
    "Celadon City": {
        "Surf": [
            {pokemon: "Grimer", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Grimer", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Muk", min_level: 15, max_level: 15, chance: 10},
        ]
    },
    "Cerulean City": {
        "Surf": [
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Goldeen", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Seaking", min_level: 10, max_level: 10, chance: 10},
        ]
    },
    "Cherrygrove City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Cianwood City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ],
        "Rock Smash": [
            {pokemon: "Krabby", min_level: 15, max_level: 15, chance: 90},
            {pokemon: "Shuckle", min_level: 15, max_level: 15, chance: 10},
        ]
    },
    "Cianwood City (Mania's House)": {
        "Gift": [
            {pokemon: "Shuckle", min_level: 15, max_level: 15, chance: 100},
        ]
    },
    "Cinnabar Island": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Dark Cave (Blackthorn Entrance)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Graveler", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Ursaring", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Wobbuffet", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
            {pokemon: "Golbat", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Teddiursa", min_level: 20, max_level: 20, chance: 5, time: ["Morning"]},
            {pokemon: "Ursaring", min_level: 30, max_level: 30, chance: 5, time: ["Day"]},
            {pokemon: "Wobbuffet", min_level: 25, max_level: 25, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 5, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Dark Cave (Violet Entrance)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 2, max_level: 2, chance: 35, time: ["Day", "Night"]},
            {pokemon: "Geodude", min_level: 3, max_level: 3, chance: 30},
            {pokemon: "Zubat", min_level: 2, max_level: 2, chance: 30, time: ["Morning"]},
            {pokemon: "Geodude", min_level: 2, max_level: 2, chance: 20},
            {pokemon: "Geodude", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Teddiursa", min_level: 2, max_level: 2, chance: 5, time: ["Morning"]},
            {pokemon: "Zubat", min_level: 4, max_level: 4, chance: 4},
            {pokemon: "Dunsparce", min_level: 4, max_level: 4, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Dunsparce", min_level: 3, max_level: 3, chance: 30},
            {pokemon: "Zubat", min_level: 2, max_level: 2, chance: 20},
            {pokemon: "Geodude", min_level: 2, max_level: 2, chance: 10},
            {pokemon: "Dunsparce", min_level: 2, max_level: 2, chance: 5},
            {pokemon: "Dunsparce", min_level: 4, max_level: 4, chance: 4},
        ],
        "Surf": [
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 5, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ],
        "Rock Smash": [
            {pokemon: "Krabby", min_level: 15, max_level: 15, chance: 90},
            {pokemon: "Shuckle", min_level: 15, max_level: 15, chance: 10},
        ]
    },
    "Diglett's Cave": {
        "Walk": [
            {pokemon: "Diglett", min_level: 2, max_level: 2, chance: 30, time: ["Day"]},
            {pokemon: "Diglett", min_level: 3, max_level: 3, chance: 30, time: ["Morning"]},
            {pokemon: "Diglett", min_level: 4, max_level: 4, chance: 30, time: ["Day", "Night"]},
            {pokemon: "Diglett", min_level: 6, max_level: 6, chance: 30, time: ["Morning"]},
            {pokemon: "Diglett", min_level: 8, max_level: 8, chance: 30, time: ["Night"]},
            {pokemon: "Diglett", min_level: 8, max_level: 8, chance: 20, time: ["Day"]},
            {pokemon: "Diglett", min_level: 12, max_level: 12, chance: 20, time: ["Morning"]},
            {pokemon: "Diglett", min_level: 16, max_level: 16, chance: 20, time: ["Night"]},
            {pokemon: "Diglett", min_level: 16, max_level: 16, chance: 10, time: ["Day"]},
            {pokemon: "Diglett", min_level: 24, max_level: 24, chance: 10, time: ["Morning"]},
            {pokemon: "Diglett", min_level: 32, max_level: 32, chance: 10, time: ["Night"]},
            {pokemon: "Dugtrio", min_level: 16, max_level: 16, chance: 10, time: ["Day"]},
            {pokemon: "Dugtrio", min_level: 24, max_level: 24, chance: 10, time: ["Morning"]},
            {pokemon: "Dugtrio", min_level: 32, max_level: 32, chance: 10, time: ["Night"]},
        ]
    },
    "Dragon's Den": {
        "Gift": [
            {pokemon: "Dratini", min_level: 15, max_level: 15, chance: 100},
        ]
    },
    "Dragon's Den (B1F)": {
        "Surf": [
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Dratini", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 100},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 90},
            {pokemon: "Dratini", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Dratini", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Dragonair", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Ecruteak City": {
        "Surf": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Poliwag", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Poliwhirl", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Fuchsia City": {
        "Surf": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 100},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 90},
            {pokemon: "Gyarados", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Gyarados", min_level: 40, max_level: 40, chance: 30},
        ]
    },
    "Goldenrod City": {
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Goldenrod City (Bill's House)": {
        "Gift": [
            {pokemon: "Eevee", min_level: 20, max_level: 20, chance: 100},
        ]
    },
    "Goldenrod City (North Gate)": {
        "Gift": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 100},
        ]
    },
    "Ice Path (1F)": {
        "Walk": [
            {pokemon: "Delibird", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Swinub", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 22, max_level: 22, chance: 30},
            {pokemon: "Golbat", min_level: 22, max_level: 22, chance: 25},
            {pokemon: "Delibird", min_level: 23, max_level: 23, chance: 10, time: ["Night"]},
            {pokemon: "Swinub", min_level: 23, max_level: 23, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Ice Path (B1F)": {
        "Walk": [
            {pokemon: "Delibird", min_level: 22, max_level: 22, chance: 30, time: ["Night"]},
            {pokemon: "Swinub", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Golbat", min_level: 23, max_level: 23, chance: 24},
            {pokemon: "Delibird", min_level: 24, max_level: 24, chance: 10, time: ["Night"]},
            {pokemon: "Swinub", min_level: 24, max_level: 24, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Jynx", min_level: 22, max_level: 22, chance: 1, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 22, max_level: 22, chance: 1, time: ["Night"]},
        ]
    },
    "Ice Path (B2F Blackthorn Side)": {
        "Walk": [
            {pokemon: "Delibird", min_level: 23, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Swinub", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 24, max_level: 24, chance: 30},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Delibird", min_level: 25, max_level: 25, chance: 10, time: ["Night"]},
            {pokemon: "Swinub", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Jynx", min_level: 22, max_level: 22, chance: 4, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 22, max_level: 22, chance: 4, time: ["Night"]},
            {pokemon: "Jynx", min_level: 24, max_level: 24, chance: 1, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 24, max_level: 24, chance: 1, time: ["Night"]},
        ]
    },
    "Ice Path (B2F Mahogany Side)": {
        "Walk": [
            {pokemon: "Delibird", min_level: 23, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Swinub", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 24, max_level: 24, chance: 30},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Delibird", min_level: 25, max_level: 25, chance: 10, time: ["Night"]},
            {pokemon: "Swinub", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Jynx", min_level: 22, max_level: 22, chance: 4, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 22, max_level: 22, chance: 4, time: ["Night"]},
            {pokemon: "Jynx", min_level: 24, max_level: 24, chance: 1, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 24, max_level: 24, chance: 1, time: ["Night"]},
        ]
    },
    "Ice Path (B3F)": {
        "Walk": [
            {pokemon: "Delibird", min_level: 24, max_level: 24, chance: 30, time: ["Night"]},
            {pokemon: "Swinub", min_level: 24, max_level: 24, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 20},
            {pokemon: "Delibird", min_level: 26, max_level: 26, chance: 10, time: ["Night"]},
            {pokemon: "Swinub", min_level: 26, max_level: 26, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Jynx", min_level: 22, max_level: 22, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 22, max_level: 22, chance: 5, time: ["Night"]},
            {pokemon: "Jynx", min_level: 24, max_level: 24, chance: 4, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 24, max_level: 24, chance: 4, time: ["Night"]},
            {pokemon: "Jynx", min_level: 26, max_level: 26, chance: 1, time: ["Morning", "Day"]},
            {pokemon: "Sneasel", min_level: 26, max_level: 26, chance: 1, time: ["Night"]},
        ]
    },
    "Ilex Forest": {
        "Walk": [
            {pokemon: "Caterpie", min_level: 5, max_level: 5, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Oddish", min_level: 5, max_level: 5, chance: 30, time: ["Night"]},
            {pokemon: "Venonat", min_level: 5, max_level: 5, chance: 30, time: ["Night"]},
            {pokemon: "Weedle", min_level: 5, max_level: 5, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Metapod", min_level: 7, max_level: 7, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Oddish", min_level: 7, max_level: 7, chance: 20, time: ["Night"]},
            {pokemon: "Kakuna", min_level: 7, max_level: 7, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Psyduck", min_level: 7, max_level: 7, chance: 10, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 7, max_level: 7, chance: 5, time: ["Night"]},
            {pokemon: "Paras", min_level: 6, max_level: 6, chance: 5},
            {pokemon: "Pidgey", min_level: 7, max_level: 7, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Psyduck", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Golduck", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Noctowl", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Beedrill", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Butterfree", min_level: 10, max_level: 10, chance: 5},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Caterpie", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Weedle", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Kakuna", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Metapod", min_level: 10, max_level: 10, chance: 5},
        ],
        "Static": [
            {pokemon: "Celebi", min_level: 30, max_level: 30, chance: 100},
        ]
    },
    "Johto (Roaming)": {
        "Roaming (Grass)": [
            {pokemon: "Entei", min_level: 40, max_level: 40, chance: 100},
            {pokemon: "Raikou", min_level: 40, max_level: 40, chance: 100},
        ]
    },
    "Lake of Rage": {
        "Surf": [
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Gyarados", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 100},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 90},
            {pokemon: "Gyarados", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Gyarados", min_level: 40, max_level: 40, chance: 30},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Venonat", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ],
        "Static": [
            {pokemon: "Gyarados", min_level: 30, max_level: 30, chance: 100},
        ]
    },
    "Mt. Moon": {
        "Walk": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 30},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 30},
            {pokemon: "Clefairy", min_level: 8, max_level: 8, chance: 20, time: ["Night"]},
            {pokemon: "Sandshrew", min_level: 8, max_level: 8, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Paras", min_level: 12, max_level: 12, chance: 10},
            {pokemon: "Clefairy", min_level: 8, max_level: 8, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Clefairy", min_level: 12, max_level: 12, chance: 5, time: ["Night"]},
            {pokemon: "Geodude", min_level: 10, max_level: 10, chance: 5},
        ]
    },
    "Mt. Mortar (1F Inside)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 13, max_level: 13, chance: 30},
            {pokemon: "Rattata", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Machop", min_level: 15, max_level: 15, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 20, time: ["Night"]},
            {pokemon: "Raticate", min_level: 14, max_level: 14, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 14, max_level: 14, chance: 10, time: ["Night"]},
            {pokemon: "Golbat", min_level: 15, max_level: 15, chance: 5},
            {pokemon: "Marill", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Mt. Mortar (1F Outside)": {
        "Walk": [
            {pokemon: "Rattata", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Zubat", min_level: 13, max_level: 13, chance: 30},
            {pokemon: "Machop", min_level: 14, max_level: 14, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Marill", min_level: 14, max_level: 14, chance: 20, time: ["Night"]},
            {pokemon: "Golbat", min_level: 13, max_level: 13, chance: 10},
            {pokemon: "Geodude", min_level: 14, max_level: 14, chance: 5},
            {pokemon: "Raticate", min_level: 16, max_level: 16, chance: 5},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Marill", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Seaking", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Mt. Mortar (2F Inside)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 31, max_level: 31, chance: 30, time: ["Night"]},
            {pokemon: "Graveler", min_level: 31, max_level: 31, chance: 30},
            {pokemon: "Machoke", min_level: 32, max_level: 32, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Geodude", min_level: 31, max_level: 31, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 30, max_level: 30, chance: 20, time: ["Night"]},
            {pokemon: "Golbat", min_level: 30, max_level: 30, chance: 10, time: ["Night"]},
            {pokemon: "Raticate", min_level: 30, max_level: 30, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 30, max_level: 30, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 32, max_level: 32, chance: 5, time: ["Night"]},
            {pokemon: "Machop", min_level: 28, max_level: 28, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Marill", min_level: 28, max_level: 28, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Marill", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Seaking", min_level: 25, max_level: 25, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Mt. Mortar (B1F)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Zubat", min_level: 17, max_level: 17, chance: 30},
            {pokemon: "Golbat", min_level: 17, max_level: 17, chance: 20},
            {pokemon: "Machop", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Marill", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Geodude", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Raticate", min_level: 18, max_level: 18, chance: 5},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Marill", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Seaking", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ],
        "Gift": [
            {pokemon: "Tyrogue", min_level: 10, max_level: 10, chance: 100},
        ]
    },
    "National Park": {
        "Walk": [
            {pokemon: "Hoothoot", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Nidoran♀", min_level: 12, max_level: 12, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Nidoran♂", min_level: 12, max_level: 12, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Psyduck", min_level: 12, max_level: 12, chance: 30, time: ["Night"]},
            {pokemon: "Ledyba", min_level: 14, max_level: 14, chance: 20, time: ["Morning"]},
            {pokemon: "Spinarak", min_level: 14, max_level: 14, chance: 20, time: ["Night"]},
            {pokemon: "Sunkern", min_level: 14, max_level: 14, chance: 20, time: ["Day"]},
            {pokemon: "Hoothoot", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 13, max_level: 13, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Caterpie", min_level: 10, max_level: 10, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Venonat", min_level: 10, max_level: 10, chance: 5, time: ["Night"]},
            {pokemon: "Venonat", min_level: 12, max_level: 12, chance: 5, time: ["Night"]},
            {pokemon: "Weedle", min_level: 10, max_level: 10, chance: 5, time: ["Morning", "Day"]},
        ],
        "Bug-Catching Contest": [
            {pokemon: "Caterpie", min_level: 7, max_level: 18, chance: 20},
            {pokemon: "Weedle", min_level: 7, max_level: 18, chance: 20},
            {pokemon: "Kakuna", min_level: 9, max_level: 18, chance: 10},
            {pokemon: "Metapod", min_level: 9, max_level: 18, chance: 10},
            {pokemon: "Paras", min_level: 10, max_level: 17, chance: 10},
            {pokemon: "Venonat", min_level: 10, max_level: 16, chance: 10},
            {pokemon: "Beedrill", min_level: 12, max_level: 15, chance: 5},
            {pokemon: "Butterfree", min_level: 12, max_level: 15, chance: 5},
            {pokemon: "Pinsir", min_level: 13, max_level: 14, chance: 5},
            {pokemon: "Scyther", min_level: 13, max_level: 14, chance: 5},
        ]
    },
    "New Bark Town": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ],
        "Gift": [
            {pokemon: "Chikorita", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Cyndaquil", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Totodile", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Olivine City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Olivine Port": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Pallet Town": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Rock Tunnel (1F)": {
        "Walk": [
            {pokemon: "Cubone", min_level: 10, max_level: 10, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Geodude", min_level: 11, max_level: 11, chance: 30},
            {pokemon: "Zubat", min_level: 12, max_level: 12, chance: 30, time: ["Night"]},
            {pokemon: "Geodude", min_level: 12, max_level: 12, chance: 20, time: ["Night"]},
            {pokemon: "Machop", min_level: 12, max_level: 12, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Zubat", min_level: 12, max_level: 12, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Machoke", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Marowak", min_level: 12, max_level: 12, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Rock Tunnel (B1F)": {
        "Walk": [
            {pokemon: "Cubone", min_level: 12, max_level: 12, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Geodude", min_level: 14, max_level: 14, chance: 30},
            {pokemon: "Zubat", min_level: 12, max_level: 12, chance: 30, time: ["Night"]},
            {pokemon: "Onix", min_level: 16, max_level: 16, chance: 20},
            {pokemon: "Zubat", min_level: 12, max_level: 12, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Golbat", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
            {pokemon: "Haunter", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
            {pokemon: "Kangaskhan", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Marowak", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Route 1": {
        "Walk": [
            {pokemon: "Hoothoot", min_level: 2, max_level: 2, chance: 30, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 2, max_level: 2, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 2, max_level: 2, chance: 30},
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 20, time: ["Night"]},
            {pokemon: "Sentret", min_level: 3, max_level: 3, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 3, max_level: 3, chance: 10, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 3, max_level: 3, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Furret", min_level: 6, max_level: 6, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 4, max_level: 4, chance: 5, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 4, max_level: 4, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 6, max_level: 6, chance: 5, time: ["Night"]},
        ]
    },
    "Route 2": {
        "Walk": [
            {pokemon: "Caterpie", min_level: 3, max_level: 3, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Ledyba", min_level: 3, max_level: 3, chance: 30, time: ["Morning"]},
            {pokemon: "Pidgey", min_level: 3, max_level: 3, chance: 30, time: ["Day"]},
            {pokemon: "Spinarak", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 5, max_level: 5, chance: 20, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 5, max_level: 5, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Butterfree", min_level: 7, max_level: 7, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 7, max_level: 7, chance: 10, time: ["Night"]},
            {pokemon: "Ariados", min_level: 7, max_level: 7, chance: 5, time: ["Night"]},
            {pokemon: "Ledian", min_level: 7, max_level: 7, chance: 5, time: ["Morning"]},
            {pokemon: "Noctowl", min_level: 4, max_level: 4, chance: 5, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 7, max_level: 7, chance: 5, time: ["Day"]},
            {pokemon: "Pikachu", min_level: 4, max_level: 4, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Route 3": {
        "Walk": [
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 35, time: ["Night"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 10, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Spearow", min_level: 5, max_level: 5, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Ekans", min_level: 8, max_level: 8, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 10, max_level: 10, chance: 20, time: ["Night"]},
            {pokemon: "Raticate", min_level: 10, max_level: 10, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 10, time: ["Night"]},
            {pokemon: "Arbok", min_level: 10, max_level: 10, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Clefairy", min_level: 6, max_level: 6, chance: 5, time: ["Night"]},
            {pokemon: "Sandshrew", min_level: 10, max_level: 10, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Route 4": {
        "Walk": [
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 35, time: ["Night"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 10, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Spearow", min_level: 5, max_level: 5, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Ekans", min_level: 8, max_level: 8, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 10, max_level: 10, chance: 20, time: ["Night"]},
            {pokemon: "Raticate", min_level: 10, max_level: 10, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 10, time: ["Night"]},
            {pokemon: "Arbok", min_level: 10, max_level: 10, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Clefairy", min_level: 6, max_level: 6, chance: 5, time: ["Night"]},
            {pokemon: "Sandshrew", min_level: 10, max_level: 10, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Goldeen", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Seaking", min_level: 10, max_level: 10, chance: 10},
        ]
    },
    "Route 5": {
        "Walk": [
            {pokemon: "Hoothoot", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Meowth", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 13, max_level: 13, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Snubbull", min_level: 13, max_level: 13, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 15, max_level: 15, chance: 20, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 15, max_level: 15, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Abra", min_level: 12, max_level: 12, chance: 10},
            {pokemon: "Abra", min_level: 14, max_level: 14, chance: 5},
            {pokemon: "Jigglypuff", min_level: 14, max_level: 14, chance: 5},
        ]
    },
    "Route 6": {
        "Walk": [
            {pokemon: "Drowzee", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Meowth", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 13, max_level: 13, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Snubbull", min_level: 13, max_level: 13, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Magnemite", min_level: 14, max_level: 14, chance: 20},
            {pokemon: "Psyduck", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Granbull", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Jigglypuff", min_level: 12, max_level: 12, chance: 5},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Psyduck", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Golduck", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Route 7": {
        "Walk": [
            {pokemon: "Meowth", min_level: 17, max_level: 17, chance: 30, time: ["Night"]},
            {pokemon: "Murkrow", min_level: 17, max_level: 17, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 17, max_level: 17, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Spearow", min_level: 17, max_level: 17, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Houndour", min_level: 18, max_level: 18, chance: 20, time: ["Night"]},
            {pokemon: "Snubbull", min_level: 18, max_level: 18, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Persian", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Raticate", min_level: 18, max_level: 18, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Abra", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Jigglypuff", min_level: 18, max_level: 18, chance: 5},
        ]
    },
    "Route 8": {
        "Walk": [
            {pokemon: "Meowth", min_level: 17, max_level: 17, chance: 30, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 19, max_level: 19, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Snubbull", min_level: 17, max_level: 17, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Abra", min_level: 16, max_level: 16, chance: 20},
            {pokemon: "Growlithe", min_level: 17, max_level: 17, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Haunter", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Jigglypuff", min_level: 16, max_level: 16, chance: 5},
            {pokemon: "Kadabra", min_level: 18, max_level: 18, chance: 5},
        ]
    },
    "Route 9": {
        "Walk": [
            {pokemon: "Rattata", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Spearow", min_level: 15, max_level: 15, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Venonat", min_level: 15, max_level: 15, chance: 30, time: ["Night"]},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Fearow", min_level: 15, max_level: 15, chance: 15, time: ["Morning", "Day"]},
            {pokemon: "Venomoth", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Marowak", min_level: 18, max_level: 18, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 18, max_level: 18, chance: 5, time: ["Night"]},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Seaking", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 10 (North)": {
        "Walk": [
            {pokemon: "Spearow", min_level: 15, max_level: 15, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Venonat", min_level: 15, max_level: 15, chance: 30, time: ["Night"]},
            {pokemon: "Voltorb", min_level: 17, max_level: 17, chance: 30},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Fearow", min_level: 15, max_level: 15, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Venomoth", min_level: 15, max_level: 15, chance: 10, time: ["Night"]},
            {pokemon: "Electabuzz", min_level: 16, max_level: 16, chance: 5, time: ["Morning", "Night"]},
            {pokemon: "Electabuzz", min_level: 18, max_level: 18, chance: 5, time: ["Day"]},
            {pokemon: "Marowak", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Seaking", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 11": {
        "Walk": [
            {pokemon: "Drowzee", min_level: 14, max_level: 14, chance: 30, time: ["Night"]},
            {pokemon: "Hoppip", min_level: 14, max_level: 14, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Meowth", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Raticate", min_level: 13, max_level: 13, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Magnemite", min_level: 15, max_level: 15, chance: 20},
            {pokemon: "Noctowl", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 16, max_level: 16, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Hypno", min_level: 16, max_level: 16, chance: 5, time: ["Night"]},
            {pokemon: "Raticate", min_level: 16, max_level: 16, chance: 5, time: ["Night"]},
            {pokemon: "Rattata", min_level: 16, max_level: 16, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Route 12": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 25, max_level: 25, chance: 60},
            {pokemon: "Quagsire", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Tentacruel", min_level: 25, max_level: 25, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Tentacool", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Qwilfish", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 13": {
        "Walk": [
            {pokemon: "Nidorina", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Nidorino", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Quagsire", min_level: 23, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Venonat", min_level: 23, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 25, max_level: 25, chance: 20, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 25, max_level: 25, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Venomoth", min_level: 25, max_level: 25, chance: 10, time: ["Night"]},
            {pokemon: "Hoppip", min_level: 27, max_level: 27, chance: 9, time: ["Morning", "Day"]},
            {pokemon: "Quagsire", min_level: 25, max_level: 25, chance: 9, time: ["Night"]},
            {pokemon: "Chansey", min_level: 25, max_level: 25, chance: 1},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 25, max_level: 25, chance: 60},
            {pokemon: "Quagsire", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Tentacruel", min_level: 25, max_level: 25, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Tentacool", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Qwilfish", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 14": {
        "Walk": [
            {pokemon: "Nidorina", min_level: 26, max_level: 26, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Nidorino", min_level: 26, max_level: 26, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Quagsire", min_level: 26, max_level: 26, chance: 30, time: ["Night"]},
            {pokemon: "Venonat", min_level: 26, max_level: 26, chance: 30, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 20, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 28, max_level: 28, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 28, max_level: 28, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Venomoth", min_level: 28, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 28, max_level: 28, chance: 9, time: ["Night"]},
            {pokemon: "Skiploom", min_level: 30, max_level: 30, chance: 9, time: ["Morning", "Day"]},
            {pokemon: "Chansey", min_level: 28, max_level: 28, chance: 1},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 15": {
        "Walk": [
            {pokemon: "Nidorina", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Nidorino", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Quagsire", min_level: 23, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Venonat", min_level: 23, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 25, max_level: 25, chance: 20, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 25, max_level: 25, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Venomoth", min_level: 25, max_level: 25, chance: 10, time: ["Night"]},
            {pokemon: "Hoppip", min_level: 27, max_level: 27, chance: 9, time: ["Morning", "Day"]},
            {pokemon: "Quagsire", min_level: 25, max_level: 25, chance: 9, time: ["Night"]},
            {pokemon: "Chansey", min_level: 25, max_level: 25, chance: 1},
        ]
    },
    "Route 16": {
        "Walk": [
            {pokemon: "Fearow", min_level: 27, max_level: 27, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Grimer", min_level: 26, max_level: 26, chance: 30},
            {pokemon: "Grimer", min_level: 27, max_level: 27, chance: 30, time: ["Night"]},
            {pokemon: "Grimer", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Fearow", min_level: 29, max_level: 29, chance: 15, time: ["Morning"]},
            {pokemon: "Murkrow", min_level: 29, max_level: 29, chance: 15, time: ["Night"]},
            {pokemon: "Fearow", min_level: 29, max_level: 29, chance: 10, time: ["Day"]},
            {pokemon: "Muk", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Slugma", min_level: 29, max_level: 29, chance: 5, time: ["Day"]},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 17": {
        "Walk": [
            {pokemon: "Fearow", min_level: 30, max_level: 30, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Grimer", min_level: 29, max_level: 29, chance: 30, time: ["Morning", "Night"]},
            {pokemon: "Grimer", min_level: 30, max_level: 30, chance: 30, time: ["Night"]},
            {pokemon: "Slugma", min_level: 29, max_level: 29, chance: 30, time: ["Day"]},
            {pokemon: "Grimer", min_level: 29, max_level: 29, chance: 20, time: ["Day"]},
            {pokemon: "Grimer", min_level: 31, max_level: 31, chance: 20, time: ["Morning", "Night"]},
            {pokemon: "Fearow", min_level: 32, max_level: 32, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Grimer", min_level: 32, max_level: 32, chance: 10, time: ["Night"]},
            {pokemon: "Grimer", min_level: 33, max_level: 33, chance: 5, time: ["Morning", "Night"]},
            {pokemon: "Muk", min_level: 33, max_level: 33, chance: 5},
            {pokemon: "Slugma", min_level: 32, max_level: 32, chance: 5, time: ["Day"]},
        ]
    },
    "Route 18": {
        "Walk": [
            {pokemon: "Fearow", min_level: 27, max_level: 27, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Grimer", min_level: 26, max_level: 26, chance: 30},
            {pokemon: "Grimer", min_level: 27, max_level: 27, chance: 30, time: ["Night"]},
            {pokemon: "Grimer", min_level: 28, max_level: 28, chance: 20},
            {pokemon: "Fearow", min_level: 29, max_level: 29, chance: 15, time: ["Morning"]},
            {pokemon: "Grimer", min_level: 29, max_level: 29, chance: 15, time: ["Night"]},
            {pokemon: "Fearow", min_level: 29, max_level: 29, chance: 10, time: ["Day"]},
            {pokemon: "Muk", min_level: 30, max_level: 30, chance: 5},
            {pokemon: "Slugma", min_level: 29, max_level: 29, chance: 5, time: ["Day"]},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 19": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 20": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 21": {
        "Walk": [
            {pokemon: "Tangela", min_level: 30, max_level: 30, chance: 35, time: ["Night"]},
            {pokemon: "Rattata", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Tangela", min_level: 30, max_level: 30, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Tangela", min_level: 35, max_level: 35, chance: 20},
            {pokemon: "Raticate", min_level: 20, max_level: 20, chance: 10},
            {pokemon: "Mr. Mime", min_level: 28, max_level: 28, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Mr. Mime", min_level: 30, max_level: 30, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Tangela", min_level: 28, max_level: 28, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 22": {
        "Walk": [
            {pokemon: "Poliwag", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 30},
            {pokemon: "Spearow", min_level: 3, max_level: 3, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 20, time: ["Night"]},
            {pokemon: "Spearow", min_level: 5, max_level: 5, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Doduo", min_level: 4, max_level: 4, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Poliwag", min_level: 4, max_level: 4, chance: 10, time: ["Night"]},
            {pokemon: "Fearow", min_level: 7, max_level: 7, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Ponyta", min_level: 6, max_level: 6, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 6, max_level: 6, chance: 5, time: ["Night"]},
            {pokemon: "Rattata", min_level: 7, max_level: 7, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Poliwag", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Poliwhirl", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Route 24": {
        "Walk": [
            {pokemon: "Caterpie", min_level: 8, max_level: 8, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Caterpie", min_level: 10, max_level: 10, chance: 30, time: ["Morning"]},
            {pokemon: "Oddish", min_level: 10, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Sunkern", min_level: 12, max_level: 12, chance: 30, time: ["Day"]},
            {pokemon: "Venonat", min_level: 10, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Caterpie", min_level: 10, max_level: 10, chance: 20, time: ["Day"]},
            {pokemon: "Metapod", min_level: 12, max_level: 12, chance: 20, time: ["Morning"]},
            {pokemon: "Oddish", min_level: 12, max_level: 12, chance: 20, time: ["Night"]},
            {pokemon: "Abra", min_level: 12, max_level: 12, chance: 10},
            {pokemon: "Bellsprout", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Butterfree", min_level: 14, max_level: 14, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Gloom", min_level: 14, max_level: 14, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Goldeen", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Seaking", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 25": {
        "Walk": [
            {pokemon: "Caterpie", min_level: 10, max_level: 10, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Oddish", min_level: 10, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 10, max_level: 10, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Pidgeotto", min_level: 12, max_level: 12, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Venonat", min_level: 10, max_level: 10, chance: 20, time: ["Night"]},
            {pokemon: "Metapod", min_level: 12, max_level: 12, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 12, max_level: 12, chance: 10, time: ["Night"]},
            {pokemon: "Bellsprout", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Butterfree", min_level: 14, max_level: 14, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 14, max_level: 14, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Goldeen", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Seaking", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 26": {
        "Walk": [
            {pokemon: "Doduo", min_level: 28, max_level: 28, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 30, time: ["Night"]},
            {pokemon: "Raticate", min_level: 28, max_level: 28, chance: 30, time: ["Night"]},
            {pokemon: "Sandslash", min_level: 28, max_level: 28, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 32, max_level: 32, chance: 20, time: ["Night"]},
            {pokemon: "Ponyta", min_level: 32, max_level: 32, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Quagsire", min_level: 30, max_level: 30, chance: 10, time: ["Night"]},
            {pokemon: "Raticate", min_level: 30, max_level: 30, chance: 10},
            {pokemon: "Arbok", min_level: 30, max_level: 30, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Doduo", min_level: 30, max_level: 30, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 60},
            {pokemon: "Tentacool", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Tentacruel", min_level: 30, max_level: 30, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ekans", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 27": {
        "Walk": [
            {pokemon: "Arbok", min_level: 28, max_level: 28, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Doduo", min_level: 28, max_level: 28, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 28, max_level: 28, chance: 30, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 28, max_level: 28, chance: 30, time: ["Night"]},
            {pokemon: "Raticate", min_level: 30, max_level: 30, chance: 20},
            {pokemon: "Doduo", min_level: 30, max_level: 30, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Noctowl", min_level: 32, max_level: 32, chance: 10, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 30, max_level: 30, chance: 10, time: ["Night"]},
            {pokemon: "Dodrio", min_level: 30, max_level: 30, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Ponyta", min_level: 32, max_level: 32, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ekans", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 28": {
        "Walk": [
            {pokemon: "Poliwhirl", min_level: 40, max_level: 40, chance: 40, time: ["Night"]},
            {pokemon: "Ponyta", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Tangela", min_level: 39, max_level: 39, chance: 30},
            {pokemon: "Golbat", min_level: 40, max_level: 40, chance: 20, time: ["Night"]},
            {pokemon: "Rapidash", min_level: 40, max_level: 40, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Arbok", min_level: 42, max_level: 42, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 42, max_level: 42, chance: 10, time: ["Night"]},
            {pokemon: "Dodrio", min_level: 43, max_level: 43, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Doduo", min_level: 41, max_level: 41, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Poliwag", min_level: 35, max_level: 35, chance: 30},
            {pokemon: "Poliwhirl", min_level: 40, max_level: 40, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Route 29": {
        "Walk": [
            {pokemon: "Rattata", min_level: 2, max_level: 2, chance: 35, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 2, max_level: 2, chance: 30, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 2, max_level: 2, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Sentret", min_level: 2, max_level: 2, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 3, max_level: 3, chance: 25, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 3, max_level: 3, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 10, time: ["Night"]},
            {pokemon: "Sentret", min_level: 3, max_level: 3, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 3, max_level: 3, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 2, max_level: 2, chance: 5, time: ["Morning", "Day"]},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 30": {
        "Walk": [
            {pokemon: "Caterpie", min_level: 3, max_level: 3, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Ledyba", min_level: 3, max_level: 3, chance: 30, time: ["Morning"]},
            {pokemon: "Pidgey", min_level: 3, max_level: 3, chance: 30, time: ["Day"]},
            {pokemon: "Spinarak", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Caterpie", min_level: 4, max_level: 4, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Poliwag", min_level: 4, max_level: 4, chance: 20, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 4, max_level: 4, chance: 15, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 4, max_level: 4, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 4, max_level: 4, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Weedle", min_level: 3, max_level: 3, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 3, max_level: 3, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Poliwag", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Poliwhirl", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 31": {
        "Walk": [
            {pokemon: "Caterpie", min_level: 4, max_level: 4, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Ledyba", min_level: 4, max_level: 4, chance: 30, time: ["Morning"]},
            {pokemon: "Pidgey", min_level: 4, max_level: 4, chance: 30, time: ["Day"]},
            {pokemon: "Poliwag", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Spinarak", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Bellsprout", min_level: 5, max_level: 5, chance: 20},
            {pokemon: "Hoothoot", min_level: 5, max_level: 5, chance: 10, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 5, max_level: 5, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 5, max_level: 5, chance: 5, time: ["Night"]},
            {pokemon: "Hoppip", min_level: 5, max_level: 5, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Weedle", min_level: 4, max_level: 4, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 4, max_level: 4, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Poliwag", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Poliwhirl", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 32": {
        "Walk": [
            {pokemon: "Ekans", min_level: 4, max_level: 4, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Wooper", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Bellsprout", min_level: 7, max_level: 7, chance: 20},
            {pokemon: "Hoppip", min_level: 6, max_level: 6, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 7, max_level: 7, chance: 5, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 7, max_level: 7, chance: 5, time: ["Night"]},
            {pokemon: "Hoppip", min_level: 7, max_level: 7, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Pidgey", min_level: 7, max_level: 7, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Quagsire", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Old Rod (Swarm)": [
            {pokemon: "Magikarp", min_level: 5, max_level: 5, chance: 85},
            {pokemon: "Qwilfish", min_level: 5, max_level: 5, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Good Rod (Swarm)": [
            {pokemon: "Qwilfish", min_level: 20, max_level: 20, chance: 65},
        ],
        "Super Rod": [
            {pokemon: "Tentacool", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Qwilfish", min_level: 40, max_level: 40, chance: 10},
        ],
        "Super Rod (Swarm)": [
            {pokemon: "Qwilfish", min_level: 40, max_level: 40, chance: 90},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ekans", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 33": {
        "Walk": [
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 40, time: ["Night"]},
            {pokemon: "Rattata", min_level: 6, max_level: 6, chance: 30},
            {pokemon: "Spearow", min_level: 6, max_level: 6, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Geodude", min_level: 6, max_level: 6, chance: 20},
            {pokemon: "Hoppip", min_level: 6, max_level: 6, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 7, max_level: 7, chance: 10, time: ["Night"]},
            {pokemon: "Ekans", min_level: 7, max_level: 7, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Hoppip", min_level: 7, max_level: 7, chance: 5, time: ["Morning", "Day"]},
        ],
        "Headbutt": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ekans", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Heracross", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 34": {
        "Walk": [
            {pokemon: "Drowzee", min_level: 12, max_level: 12, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 11, max_level: 11, chance: 30},
            {pokemon: "Snubbull", min_level: 10, max_level: 10, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Hoothoot", min_level: 12, max_level: 12, chance: 20, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 12, max_level: 12, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Abra", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Ditto", min_level: 10, max_level: 10, chance: 5},
            {pokemon: "Jigglypuff", min_level: 12, max_level: 12, chance: 5},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ],
        "Gift Egg": [
            {pokemon: "Cleffa", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Elekid", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Igglybuff", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Magby", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Pichu", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Smoochum", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Tyrogue", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Route 35": {
        "Walk": [
            {pokemon: "Drowzee", min_level: 12, max_level: 12, chance: 30, time: ["Night"]},
            {pokemon: "Hoothoot", min_level: 14, max_level: 14, chance: 30, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 14, max_level: 14, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Snubbull", min_level: 12, max_level: 12, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Growlithe", min_level: 13, max_level: 13, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Psyduck", min_level: 13, max_level: 13, chance: 20, time: ["Night"]},
            {pokemon: "Abra", min_level: 10, max_level: 10, chance: 10},
            {pokemon: "Jigglypuff", min_level: 12, max_level: 12, chance: 5},
            {pokemon: "Ditto", min_level: 10, max_level: 10, chance: 4},
            {pokemon: "Yanma", min_level: 12, max_level: 12, chance: 1},
        ],
        "Walk (Swarm)": [
            {pokemon: "Nidoran♀", min_level: 12, max_level: 12, chance: 30},
            {pokemon: "Nidoran♂", min_level: 12, max_level: 12, chance: 30},
            {pokemon: "Yanma", min_level: 12, max_level: 12, chance: 20},
            {pokemon: "Yanma", min_level: 14, max_level: 14, chance: 10},
            {pokemon: "Hoothoot", min_level: 14, max_level: 14, chance: 5, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 14, max_level: 14, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Ditto", min_level: 10, max_level: 10, chance: 1},
        ],
        "Surf": [
            {pokemon: "Psyduck", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Psyduck", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Golduck", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 36": {
        "Walk": [
            {pokemon: "Pidgey", min_level: 4, max_level: 4, chance: 60, time: ["Day"]},
            {pokemon: "Hoothoot", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Ledyba", min_level: 4, max_level: 4, chance: 30, time: ["Morning"]},
            {pokemon: "Pidgey", min_level: 4, max_level: 4, chance: 30, time: ["Morning"]},
            {pokemon: "Spinarak", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Bellsprout", min_level: 5, max_level: 5, chance: 20},
            {pokemon: "Hoothoot", min_level: 5, max_level: 5, chance: 15, time: ["Night"]},
            {pokemon: "Growlithe", min_level: 5, max_level: 5, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 5, max_level: 5, chance: 5, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 5, max_level: 5, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Pidgey", min_level: 6, max_level: 6, chance: 5, time: ["Morning", "Day"]},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ],
        "Squirt Bottle": [
            {pokemon: "Sudowoodo", min_level: 20, max_level: 20, chance: 100},
        ]
    },
    "Route 37": {
        "Walk": [
            {pokemon: "Growlithe", min_level: 14, max_level: 14, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Ledyba", min_level: 13, max_level: 13, chance: 30, time: ["Morning"]},
            {pokemon: "Pidgey", min_level: 13, max_level: 13, chance: 30, time: ["Day"]},
            {pokemon: "Spinarak", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Stantler", min_level: 14, max_level: 14, chance: 30, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 15, max_level: 15, chance: 25, time: ["Day"]},
            {pokemon: "Hoothoot", min_level: 15, max_level: 15, chance: 20, time: ["Night"]},
            {pokemon: "Pidgey", min_level: 15, max_level: 15, chance: 20, time: ["Morning"]},
            {pokemon: "Growlithe", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Stantler", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Ariados", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
            {pokemon: "Ledian", min_level: 15, max_level: 15, chance: 5, time: ["Morning"]},
            {pokemon: "Noctowl", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 38": {
        "Walk": [
            {pokemon: "Meowth", min_level: 16, max_level: 16, chance: 40, time: ["Night"]},
            {pokemon: "Raticate", min_level: 16, max_level: 16, chance: 30},
            {pokemon: "Rattata", min_level: 16, max_level: 16, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Magnemite", min_level: 16, max_level: 16, chance: 20},
            {pokemon: "Noctowl", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Miltank", min_level: 13, max_level: 13, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Tauros", min_level: 13, max_level: 13, chance: 5, time: ["Morning", "Day"]},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 39": {
        "Walk": [
            {pokemon: "Meowth", min_level: 16, max_level: 16, chance: 30, time: ["Night"]},
            {pokemon: "Raticate", min_level: 16, max_level: 16, chance: 30},
            {pokemon: "Rattata", min_level: 16, max_level: 16, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Magnemite", min_level: 16, max_level: 16, chance: 20},
            {pokemon: "Meowth", min_level: 18, max_level: 18, chance: 10, time: ["Night"]},
            {pokemon: "Noctowl", min_level: 16, max_level: 16, chance: 10, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Miltank", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Tauros", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ledyba", min_level: 10, max_level: 10, chance: 15},
            {pokemon: "Spinarak", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 40": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ],
        "Rock Smash": [
            {pokemon: "Krabby", min_level: 15, max_level: 15, chance: 90},
            {pokemon: "Shuckle", min_level: 15, max_level: 15, chance: 10},
        ]
    },
    "Route 41": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Mantine", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Route 42": {
        "Walk": [
            {pokemon: "Ekans", min_level: 13, max_level: 13, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 13, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Spearow", min_level: 14, max_level: 14, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 14, max_level: 14, chance: 30, time: ["Night"]},
            {pokemon: "Raticate", min_level: 15, max_level: 15, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 15, max_level: 15, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 16, max_level: 16, chance: 15, time: ["Night"]},
            {pokemon: "Raticate", min_level: 16, max_level: 16, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Arbok", min_level: 15, max_level: 15, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Fearow", min_level: 16, max_level: 16, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Marill", min_level: 15, max_level: 15, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Goldeen", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Seaking", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ],
        "Headbutt": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Ekans", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Heracross", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 43": {
        "Walk": [
            {pokemon: "Noctowl", min_level: 16, max_level: 16, chance: 30, time: ["Night"]},
            {pokemon: "Pidgeotto", min_level: 16, max_level: 16, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Sentret", min_level: 15, max_level: 15, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Venonat", min_level: 15, max_level: 15, chance: 30, time: ["Night"]},
            {pokemon: "Farfetch’d", min_level: 16, max_level: 16, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 16, max_level: 16, chance: 20, time: ["Night"]},
            {pokemon: "Furret", min_level: 15, max_level: 15, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Venonat", min_level: 17, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Furret", min_level: 17, max_level: 17, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Raticate", min_level: 17, max_level: 17, chance: 5},
            {pokemon: "Venomoth", min_level: 17, max_level: 17, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Headbutt": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 65},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
            {pokemon: "Venonat", min_level: 10, max_level: 10, chance: 15},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Hoothoot", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Pineco", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Exeggcute", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 44": {
        "Walk": [
            {pokemon: "Lickitung", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Poliwag", min_level: 22, max_level: 22, chance: 30, time: ["Night"]},
            {pokemon: "Tangela", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Bellsprout", min_level: 22, max_level: 22, chance: 20},
            {pokemon: "Weepinbell", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Lickitung", min_level: 24, max_level: 24, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Lickitung", min_level: 26, max_level: 26, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Poliwhirl", min_level: 24, max_level: 24, chance: 5, time: ["Night"]},
            {pokemon: "Poliwhirl", min_level: 26, max_level: 26, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Poliwag", min_level: 25, max_level: 25, chance: 60},
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Poliwhirl", min_level: 25, max_level: 25, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Headbutt": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 80},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Heracross", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 45": {
        "Walk": [
            {pokemon: "Geodude", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Graveler", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Gligar", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Donphan", min_level: 25, max_level: 25, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Graveler", min_level: 25, max_level: 25, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 27, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Donphan", min_level: 30, max_level: 30, chance: 5, time: ["Day"]},
            {pokemon: "Phanpy", min_level: 20, max_level: 20, chance: 5, time: ["Morning"]},
            {pokemon: "Skarmory", min_level: 27, max_level: 27, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Magikarp", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Magikarp", min_level: 5, max_level: 5, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 100},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 90},
            {pokemon: "Dratini", min_level: 10, max_level: 10, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Dratini", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Dragonair", min_level: 10, max_level: 10, chance: 10},
        ],
        "Headbutt": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 80},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Heracross", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Route 46": {
        "Walk": [
            {pokemon: "Rattata", min_level: 2, max_level: 2, chance: 40, time: ["Night"]},
            {pokemon: "Geodude", min_level: 2, max_level: 2, chance: 30},
            {pokemon: "Spearow", min_level: 2, max_level: 2, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Geodude", min_level: 3, max_level: 3, chance: 20},
            {pokemon: "Rattata", min_level: 2, max_level: 2, chance: 10, time: ["Day"]},
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 10},
            {pokemon: "Phanpy", min_level: 2, max_level: 2, chance: 5, time: ["Morning"]},
            {pokemon: "Rattata", min_level: 2, max_level: 2, chance: 5, time: ["Morning"]},
        ],
        "Headbutt": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 80},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ],
        "Headbutt (Rare Tree)": [
            {pokemon: "Spearow", min_level: 10, max_level: 10, chance: 50},
            {pokemon: "Heracross", min_level: 10, max_level: 10, chance: 30},
            {pokemon: "Aipom", min_level: 10, max_level: 10, chance: 20},
        ]
    },
    "Ruins of Alph (Inner Chamber)": {
        "Walk": [
            {pokemon: "Unown", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Ruins of Alph (Outside)": {
        "Walk": [
            {pokemon: "Natu", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Natu", min_level: 22, max_level: 22, chance: 30},
            {pokemon: "Natu", min_level: 18, max_level: 18, chance: 20},
            {pokemon: "Natu", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Quagsire", min_level: 22, max_level: 22, chance: 5, time: ["Night"]},
            {pokemon: "Smeargle", min_level: 20, max_level: 20, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Smeargle", min_level: 22, max_level: 22, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Wooper", min_level: 22, max_level: 22, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Quagsire", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Quagsire", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Silver Cave (Item Rooms)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 46, max_level: 46, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Misdreavus", min_level: 45, max_level: 45, chance: 30, time: ["Night"]},
            {pokemon: "Golbat", min_level: 50, max_level: 50, chance: 20},
            {pokemon: "Parasect", min_level: 46, max_level: 46, chance: 10},
            {pokemon: "Parasect", min_level: 48, max_level: 48, chance: 5},
            {pokemon: "Parasect", min_level: 50, max_level: 50, chance: 4},
            {pokemon: "Parasect", min_level: 52, max_level: 52, chance: 1},
        ]
    },
    "Silver Cave (Outside)": {
        "Walk": [
            {pokemon: "Poliwhirl", min_level: 42, max_level: 42, chance: 30, time: ["Night"]},
            {pokemon: "Ponyta", min_level: 42, max_level: 42, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Tangela", min_level: 41, max_level: 41, chance: 30},
            {pokemon: "Arbok", min_level: 42, max_level: 42, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 42, max_level: 42, chance: 20, time: ["Night"]},
            {pokemon: "Poliwhirl", min_level: 44, max_level: 44, chance: 10, time: ["Night"]},
            {pokemon: "Rapidash", min_level: 44, max_level: 44, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Dodrio", min_level: 43, max_level: 43, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Doduo", min_level: 41, max_level: 41, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 40, max_level: 40, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 44, max_level: 44, chance: 5, time: ["Night"]},
        ],
        "Surf": [
            {pokemon: "Poliwhirl", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Poliwhirl", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Poliwag", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Silver Cave (Room 1)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 44, max_level: 44, chance: 30, time: ["Night"]},
            {pokemon: "Graveler", min_level: 43, max_level: 43, chance: 30},
            {pokemon: "Ursaring", min_level: 44, max_level: 44, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 42, max_level: 42, chance: 20},
            {pokemon: "Golbat", min_level: 42, max_level: 42, chance: 10, time: ["Night"]},
            {pokemon: "Magmar", min_level: 45, max_level: 45, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 45, max_level: 45, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 46, max_level: 46, chance: 5, time: ["Night"]},
            {pokemon: "Golduck", min_level: 45, max_level: 45, chance: 5, time: ["Night"]},
            {pokemon: "Larvitar", min_level: 20, max_level: 20, chance: 4, time: ["Morning", "Day"]},
            {pokemon: "Larvitar", min_level: 15, max_level: 15, chance: 1, time: ["Morning", "Day"]},
        ]
    },
    "Silver Cave (Room 2)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Golduck", min_level: 48, max_level: 48, chance: 30, time: ["Night"]},
            {pokemon: "Machoke", min_level: 48, max_level: 48, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 46, max_level: 46, chance: 20, time: ["Night"]},
            {pokemon: "Ursaring", min_level: 47, max_level: 47, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Parasect", min_level: 46, max_level: 46, chance: 10},
            {pokemon: "Misdreavus", min_level: 45, max_level: 45, chance: 5, time: ["Night"]},
            {pokemon: "Parasect", min_level: 48, max_level: 48, chance: 5},
            {pokemon: "Larvitar", min_level: 15, max_level: 15, chance: 4, time: ["Morning", "Day"]},
            {pokemon: "Larvitar", min_level: 20, max_level: 20, chance: 1, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Seaking", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Golduck", min_level: 35, max_level: 35, chance: 30},
            {pokemon: "Goldeen", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Silver Cave (Room 3)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 51, max_level: 51, chance: 30},
            {pokemon: "Onix", min_level: 48, max_level: 48, chance: 30},
            {pokemon: "Graveler", min_level: 48, max_level: 48, chance: 20},
            {pokemon: "Golbat", min_level: 49, max_level: 49, chance: 10, time: ["Night"]},
            {pokemon: "Ursaring", min_level: 50, max_level: 50, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 53, max_level: 53, chance: 5, time: ["Night"]},
            {pokemon: "Golduck", min_level: 45, max_level: 45, chance: 5, time: ["Night"]},
            {pokemon: "Larvitar", min_level: 20, max_level: 20, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Larvitar", min_level: 15, max_level: 15, chance: 4, time: ["Morning", "Day"]},
            {pokemon: "Pupitar", min_level: 20, max_level: 20, chance: 1, time: ["Morning", "Day"]},
        ]
    },
    "Slowpoke Well (B1F)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 30},
            {pokemon: "Zubat", min_level: 7, max_level: 7, chance: 20},
            {pokemon: "Slowpoke", min_level: 6, max_level: 6, chance: 10},
            {pokemon: "Slowpoke", min_level: 8, max_level: 8, chance: 5},
            {pokemon: "Zubat", min_level: 8, max_level: 8, chance: 5},
        ],
        "Surf": [
            {pokemon: "Slowpoke", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Slowpoke", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Slowpoke", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ],
        "Rock Smash": [
            {pokemon: "Krabby", min_level: 15, max_level: 15, chance: 90},
            {pokemon: "Shuckle", min_level: 15, max_level: 15, chance: 10},
        ]
    },
    "Slowpoke Well (B2F)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 21, max_level: 21, chance: 30},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Zubat", min_level: 19, max_level: 19, chance: 20},
            {pokemon: "Slowpoke", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Golbat", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Slowpoke", min_level: 23, max_level: 23, chance: 5},
        ],
        "Surf": [
            {pokemon: "Slowpoke", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Slowpoke", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Slowbro", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Sprout Tower (2F)": {
        "Walk": [
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 40, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 4, max_level: 4, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 25, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 5, max_level: 5, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 6, max_level: 6, chance: 5, time: ["Night"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 5, time: ["Night"]},
            {pokemon: "Rattata", min_level: 6, max_level: 6, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Sprout Tower (3F)": {
        "Walk": [
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 40, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 3, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 4, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 4, max_level: 4, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 25, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 5, max_level: 5, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 3, max_level: 3, chance: 10, time: ["Night"]},
            {pokemon: "Gastly", min_level: 6, max_level: 6, chance: 5, time: ["Night"]},
            {pokemon: "Rattata", min_level: 5, max_level: 5, chance: 5, time: ["Night"]},
            {pokemon: "Rattata", min_level: 6, max_level: 6, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Team Rocket HQ": {
        "Static": [
            {pokemon: "Electrode", min_level: 23, max_level: 23, chance: 100},
            {pokemon: "Geodude", min_level: 21, max_level: 21, chance: 100},
            {pokemon: "Koffing", min_level: 21, max_level: 21, chance: 100},
            {pokemon: "Voltorb", min_level: 23, max_level: 23, chance: 100},
        ]
    },
    "Tin Tower (1F)": {
        "Static": [
            {pokemon: "Suicune", min_level: 40, max_level: 40, chance: 100},
        ]
    },
    "Tin Tower (2F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (3F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (4F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (5F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (6F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (7F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (8F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (9F)": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gastly", min_level: 21, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 21, max_level: 21, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Gastly", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Rattata", min_level: 22, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Rattata", min_level: 23, max_level: 23, chance: 5},
            {pokemon: "Rattata", min_level: 24, max_level: 24, chance: 5},
        ]
    },
    "Tin Tower (Roof)": {
        "Static": [
            {pokemon: "Ho-Oh", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Tohjo Falls": {
        "Walk": [
            {pokemon: "Raticate", min_level: 22, max_level: 22, chance: 30},
            {pokemon: "Zubat", min_level: 22, max_level: 22, chance: 30},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 20},
            {pokemon: "Slowpoke", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Rattata", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Slowpoke", min_level: 23, max_level: 23, chance: 5},
        ],
        "Surf": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Slowpoke", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Seaking", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Union Cave (1F)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 6, max_level: 6, chance: 30},
            {pokemon: "Rattata", min_level: 6, max_level: 6, chance: 30, time: ["Night"]},
            {pokemon: "Sandshrew", min_level: 6, max_level: 6, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Wooper", min_level: 5, max_level: 5, chance: 20, time: ["Night"]},
            {pokemon: "Zubat", min_level: 5, max_level: 5, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Rattata", min_level: 4, max_level: 4, chance: 10},
            {pokemon: "Onix", min_level: 6, max_level: 6, chance: 5},
            {pokemon: "Zubat", min_level: 7, max_level: 7, chance: 5},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Quagsire", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Quagsire", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Union Cave (B1F)": {
        "Walk": [
            {pokemon: "Geodude", min_level: 8, max_level: 8, chance: 30},
            {pokemon: "Zubat", min_level: 6, max_level: 6, chance: 30},
            {pokemon: "Wooper", min_level: 8, max_level: 8, chance: 20, time: ["Night"]},
            {pokemon: "Zubat", min_level: 8, max_level: 8, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 8, max_level: 8, chance: 10},
            {pokemon: "Rattata", min_level: 6, max_level: 6, chance: 5},
            {pokemon: "Rattata", min_level: 8, max_level: 8, chance: 5},
        ],
        "Surf": [
            {pokemon: "Wooper", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Quagsire", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Quagsire", min_level: 15, max_level: 15, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Goldeen", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Goldeen", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Goldeen", min_level: 40, max_level: 40, chance: 70},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seaking", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Union Cave (B2F)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 22, max_level: 22, chance: 50, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 22, max_level: 22, chance: 30},
            {pokemon: "Zubat", min_level: 22, max_level: 22, chance: 30, time: ["Night"]},
            {pokemon: "Quagsire", min_level: 22, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Raticate", min_level: 21, max_level: 21, chance: 10},
            {pokemon: "Geodude", min_level: 20, max_level: 20, chance: 5},
            {pokemon: "Onix", min_level: 23, max_level: 23, chance: 5},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Quagsire", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Corsola", min_level: 20, max_level: 20, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 20, max_level: 20, chance: 10, time: ["Night"]},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 60},
            {pokemon: "Corsola", min_level: 40, max_level: 40, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Staryu", min_level: 40, max_level: 40, chance: 30, time: ["Night"]},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 10},
        ],
        "Static": [
            {pokemon: "Lapras", min_level: 20, max_level: 20, chance: 100},
        ]
    },
    "Vermilion City": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ],
        "Poké Flute": [
            {pokemon: "Snorlax", min_level: 50, max_level: 50, chance: 100},
        ]
    },
    "Vermilion Port": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 35, max_level: 35, chance: 60},
            {pokemon: "Tentacool", min_level: 30, max_level: 30, chance: 30},
            {pokemon: "Tentacruel", min_level: 35, max_level: 35, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Tentacool", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Chinchou", min_level: 20, max_level: 20, chance: 20},
            {pokemon: "Shellder", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Chinchou", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Shellder", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Tentacruel", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Lanturn", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Victory Road": {
        "Walk": [
            {pokemon: "Golbat", min_level: 34, max_level: 34, chance: 30, time: ["Night"]},
            {pokemon: "Graveler", min_level: 34, max_level: 34, chance: 30},
            {pokemon: "Rhyhorn", min_level: 32, max_level: 32, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Onix", min_level: 32, max_level: 32, chance: 20, time: ["Night"]},
            {pokemon: "Onix", min_level: 33, max_level: 33, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Golbat", min_level: 34, max_level: 34, chance: 10, time: ["Morning", "Day"]},
            {pokemon: "Graveler", min_level: 36, max_level: 36, chance: 10, time: ["Night"]},
            {pokemon: "Graveler", min_level: 38, max_level: 38, chance: 5, time: ["Night"]},
            {pokemon: "Graveler", min_level: 40, max_level: 40, chance: 5, time: ["Night"]},
            {pokemon: "Rhydon", min_level: 35, max_level: 35, chance: 5, time: ["Morning", "Day"]},
            {pokemon: "Sandslash", min_level: 35, max_level: 35, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Violet City": {
        "Surf": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Poliwag", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Poliwhirl", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ],
        "Gift Egg": [
            {pokemon: "Togepi", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Viridian City": {
        "Surf": [
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 60},
            {pokemon: "Poliwag", min_level: 5, max_level: 5, chance: 30},
            {pokemon: "Poliwhirl", min_level: 10, max_level: 10, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Poliwag", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Poliwag", min_level: 20, max_level: 20, chance: 65},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
        ],
        "Super Rod": [
            {pokemon: "Poliwag", min_level: 40, max_level: 40, chance: 80},
            {pokemon: "Magikarp", min_level: 40, max_level: 40, chance: 20},
        ]
    },
    "Whirl Islands (B1F)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 23, max_level: 23, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 23, max_level: 23, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 24, max_level: 24, chance: 30},
            {pokemon: "Seel", min_level: 23, max_level: 23, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 25, max_level: 25, chance: 10},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 26, max_level: 26, chance: 5},
            {pokemon: "Seel", min_level: 25, max_level: 25, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Whirl Islands (B2F)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 25, max_level: 25, chance: 30},
            {pokemon: "Seel", min_level: 24, max_level: 24, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 26, max_level: 26, chance: 10},
            {pokemon: "Golbat", min_level: 26, max_level: 26, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 5},
            {pokemon: "Seel", min_level: 26, max_level: 26, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Horsea", min_level: 15, max_level: 15, chance: 60},
            {pokemon: "Horsea", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Horsea", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Horsea", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seadra", min_level: 40, max_level: 40, chance: 10},
        ],
        "Static": [
            {pokemon: "Lugia", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Whirl Islands (Cave)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Seel", min_level: 22, max_level: 22, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Seel", min_level: 24, max_level: 24, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Whirl Islands (Lugia Chamber)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 25, max_level: 25, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 25, max_level: 25, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 26, max_level: 26, chance: 30},
            {pokemon: "Seel", min_level: 25, max_level: 25, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 27, max_level: 27, chance: 10},
            {pokemon: "Golbat", min_level: 27, max_level: 27, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 28, max_level: 28, chance: 5},
            {pokemon: "Seel", min_level: 27, max_level: 27, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Horsea", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 30},
            {pokemon: "Seadra", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Horsea", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Horsea", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seadra", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Whirl Islands (NE)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Seel", min_level: 22, max_level: 22, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Seel", min_level: 24, max_level: 24, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Whirl Islands (NW)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Seel", min_level: 22, max_level: 22, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Seel", min_level: 24, max_level: 24, chance: 5, time: ["Morning", "Day"]},
        ]
    },
    "Whirl Islands (SE)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Seel", min_level: 22, max_level: 22, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Seel", min_level: 24, max_level: 24, chance: 5, time: ["Morning", "Day"]},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Horsea", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Horsea", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seadra", min_level: 40, max_level: 40, chance: 10},
        ]
    },
    "Whirl Islands (SW)": {
        "Walk": [
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 50, time: ["Night"]},
            {pokemon: "Krabby", min_level: 22, max_level: 22, chance: 30, time: ["Morning", "Day"]},
            {pokemon: "Zubat", min_level: 23, max_level: 23, chance: 30},
            {pokemon: "Seel", min_level: 22, max_level: 22, chance: 20, time: ["Morning", "Day"]},
            {pokemon: "Krabby", min_level: 24, max_level: 24, chance: 10},
            {pokemon: "Golbat", min_level: 24, max_level: 24, chance: 5, time: ["Night"]},
            {pokemon: "Golbat", min_level: 25, max_level: 25, chance: 5},
            {pokemon: "Seel", min_level: 24, max_level: 24, chance: 5, time: ["Morning", "Day"]},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 20, max_level: 20, chance: 60},
            {pokemon: "Horsea", min_level: 15, max_level: 15, chance: 30},
            {pokemon: "Tentacruel", min_level: 20, max_level: 20, chance: 10},
        ],
        "Old Rod": [
            {pokemon: "Magikarp", min_level: 10, max_level: 10, chance: 85},
            {pokemon: "Krabby", min_level: 10, max_level: 10, chance: 15},
        ],
        "Good Rod": [
            {pokemon: "Krabby", min_level: 20, max_level: 20, chance: 55},
            {pokemon: "Magikarp", min_level: 20, max_level: 20, chance: 35},
            {pokemon: "Horsea", min_level: 20, max_level: 20, chance: 10},
        ],
        "Super Rod": [
            {pokemon: "Krabby", min_level: 40, max_level: 40, chance: 40},
            {pokemon: "Horsea", min_level: 40, max_level: 40, chance: 30},
            {pokemon: "Kingler", min_level: 40, max_level: 40, chance: 20},
            {pokemon: "Seadra", min_level: 40, max_level: 40, chance: 10},
        ]
    }
};
