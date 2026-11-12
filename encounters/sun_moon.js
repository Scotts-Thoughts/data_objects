export const encounters = {
    "Aether Paradise": {
        "Gift": [
            {pokemon: "Type: Null", min_level: 40, max_level: 40, chance: 100},
        ]
    },
    "Akala Outskirts": {
        "Walk": [
            {pokemon: "Wingull", min_level: 20, max_level: 23, chance: 50},
            {pokemon: "Alolan Raticate", min_level: 20, max_level: 23, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 20, max_level: 23, chance: 30, time: ["Day"]},
            {pokemon: "Nosepass", min_level: 20, max_level: 23, chance: 15},
            {pokemon: "Stufful", min_level: 20, max_level: 23, chance: 5},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 23, chance: 60},
            {pokemon: "Chinchou", min_level: 10, max_level: 23, chance: 20},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 23, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 23, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 23, chance: 20},
            {pokemon: "Chinchou", min_level: 10, max_level: 23, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Honedge", min_level: 23, max_level: 23, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 23, chance: 60},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 23, chance: 79},
        ]
    },
    "Altar of the Moone": {
        "Static": [
            {pokemon: "Lunala", min_level: 55, max_level: 55, chance: 100, version: "Moon"},
        ]
    },
    "Altar of the Sunne": {
        "Static": [
            {pokemon: "Solgaleo", min_level: 55, max_level: 55, chance: 100, version: "Sun"},
        ]
    },
    "Ancient Poni Path": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 40, max_level: 43, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 40, max_level: 43, chance: 30, time: ["Day"]},
            {pokemon: "Pelipper", min_level: 40, max_level: 43, chance: 30},
            {pokemon: "Granbull", min_level: 40, max_level: 43, chance: 20},
            {pokemon: "Exeggcute", min_level: 40, max_level: 43, chance: 10},
            {pokemon: "Gastrodon", min_level: 40, max_level: 43, chance: 10},
        ],
        "Island Scan": [
            {pokemon: "Emboar", min_level: 43, max_level: 43, chance: 100},
        ]
    },
    "Berry Fields": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 7, max_level: 10, chance: 100},
        ]
    },
    "Blush Mountain": {
        "Island Scan": [
            {pokemon: "Rhyhorn", min_level: 30, max_level: 30, chance: 100},
        ]
    },
    "Blush Mountain (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Geodude", min_level: 26, max_level: 29, chance: 30, version: "Moon"},
            {pokemon: "Alolan Geodude", min_level: 27, max_level: 30, chance: 30, version: "Sun"},
            {pokemon: "Mudbray", min_level: 26, max_level: 29, chance: 20, version: "Moon"},
            {pokemon: "Mudbray", min_level: 27, max_level: 30, chance: 20, version: "Sun"},
            {pokemon: "Torkoal", min_level: 26, max_level: 29, chance: 20, version: "Moon"},
            {pokemon: "Charjabug", min_level: 26, max_level: 29, chance: 10, version: "Moon"},
            {pokemon: "Charjabug", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
            {pokemon: "Elekid", min_level: 26, max_level: 29, chance: 10, version: "Moon"},
            {pokemon: "Elekid", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
            {pokemon: "Togedemaru", min_level: 26, max_level: 29, chance: 10, version: "Moon"},
            {pokemon: "Togedemaru", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
            {pokemon: "Torkoal", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
            {pokemon: "Turtonator", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
        ],
        "SOS Encounter": [
            {pokemon: "Chansey", min_level: 26, max_level: 29, chance: 10, version: "Moon"},
            {pokemon: "Chansey", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
            {pokemon: "Electabuzz", min_level: 26, max_level: 29, chance: 10, version: "Moon"},
            {pokemon: "Electabuzz", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
        ]
    },
    "Blush Mountain (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Geodude", min_level: 27, max_level: 30, chance: 30},
            {pokemon: "Mudbray", min_level: 27, max_level: 30, chance: 20},
            {pokemon: "Torkoal", min_level: 27, max_level: 30, chance: 20, version: "Moon"},
            {pokemon: "Charjabug", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Elekid", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Togedemaru", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Torkoal", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
            {pokemon: "Turtonator", min_level: 27, max_level: 30, chance: 10, version: "Sun"},
        ],
        "SOS Encounter": [
            {pokemon: "Chansey", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Electabuzz", min_level: 27, max_level: 30, chance: 10},
        ]
    },
    "Brooklet Hill": {
        "Surf": [
            {pokemon: "Dewpider", min_level: 14, max_level: 17, chance: 40, time: ["Day"]},
            {pokemon: "Poliwag", min_level: 14, max_level: 17, chance: 40},
            {pokemon: "Surskit", min_level: 14, max_level: 17, chance: 40, time: ["Night"]},
            {pokemon: "Psyduck", min_level: 14, max_level: 17, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 50},
            {pokemon: "Goldeen", min_level: 10, max_level: 15, chance: 45},
            {pokemon: "Feebas", min_level: 10, max_level: 15, chance: 5},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 70},
            {pokemon: "Goldeen", min_level: 10, max_level: 15, chance: 29},
            {pokemon: "Feebas", min_level: 10, max_level: 15, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Marill", min_level: 17, max_level: 17, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 50},
            {pokemon: "Seaking", min_level: 10, max_level: 15, chance: 45},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 70},
            {pokemon: "Seaking", min_level: 10, max_level: 15, chance: 29},
        ]
    },
    "Brooklet Hill (Area 1)": {
        "Walk": [
            {pokemon: "Psyduck", min_level: 14, max_level: 17, chance: 30},
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Morelull", min_level: 14, max_level: 17, chance: 20, time: ["Night"]},
            {pokemon: "Paras", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Dewpider", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Poliwag", min_level: 14, max_level: 17, chance: 10},
            {pokemon: "Surskit", min_level: 14, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Wingull", min_level: 14, max_level: 17, chance: 10},
        ]
    },
    "Brooklet Hill (Area 2)": {
        "Walk": [
            {pokemon: "Psyduck", min_level: 14, max_level: 17, chance: 30},
            {pokemon: "Wingull", min_level: 14, max_level: 17, chance: 30},
            {pokemon: "Dewpider", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Poliwag", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Surskit", min_level: 14, max_level: 17, chance: 20, time: ["Night"]},
        ]
    },
    "Brooklet Hill (Totem's Den)": {
        "Surf": [
            {pokemon: "Finneon", min_level: 14, max_level: 17, chance: 40},
            {pokemon: "Tentacool", min_level: 14, max_level: 17, chance: 40},
            {pokemon: "Wingull", min_level: 14, max_level: 17, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 15, chance: 30},
            {pokemon: "Alomomola", min_level: 10, max_level: 15, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 15, chance: 20},
            {pokemon: "Alomomola", min_level: 10, max_level: 15, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 79},
        ]
    },
    "Diglett's Tunnel": {
        "Walk": [
            {pokemon: "Zubat", min_level: 19, max_level: 22, chance: 70},
            {pokemon: "Alolan Diglett", min_level: 19, max_level: 22, chance: 30},
        ],
        "Ambush": [
            {pokemon: "Alolan Diglett", min_level: 19, max_level: 22, chance: 100},
        ],
        "Static": [
            {pokemon: "Nihilego", min_level: 55, max_level: 55, chance: 100},
        ]
    },
    "Exeggutor Island": {
        "Walk": [
            {pokemon: "Exeggcute", min_level: 40, max_level: 43, chance: 40},
            {pokemon: "Pelipper", min_level: 40, max_level: 43, chance: 30},
            {pokemon: "Alolan Exeggutor", min_level: 40, max_level: 43, chance: 20},
            {pokemon: "Gastrodon", min_level: 40, max_level: 43, chance: 10},
        ],
        "Island Scan": [
            {pokemon: "Serperior", min_level: 43, max_level: 43, chance: 100},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 40, max_level: 43, chance: 0},
            {pokemon: "Sliggoo", min_level: 40, max_level: 43, chance: 0},
        ]
    },
    "Haina Desert": {
        "Walk": [
            {pokemon: "Sandile", min_level: 28, max_level: 31, chance: 70},
            {pokemon: "Alolan Dugtrio", min_level: 28, max_level: 31, chance: 30},
        ],
        "Ambush": [
            {pokemon: "Sandile", min_level: 28, max_level: 31, chance: 70},
            {pokemon: "Alolan Dugtrio", min_level: 28, max_level: 31, chance: 20},
            {pokemon: "Trapinch", min_level: 28, max_level: 31, chance: 10},
        ],
        "SOS Encounter (Ambush, Weather)": [
            {pokemon: "Castform", min_level: 28, max_level: 31, chance: 0},
            {pokemon: "Gabite", min_level: 28, max_level: 31, chance: 0},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 28, max_level: 31, chance: 0},
            {pokemon: "Gabite", min_level: 28, max_level: 31, chance: 0},
        ],
        "Static": [
            {pokemon: "Celesteela", min_level: 65, max_level: 65, chance: 100, version: "Moon"},
        ]
    },
    "Hano Beach": {
        "Surf": [
            {pokemon: "Finneon", min_level: 21, max_level: 24, chance: 30},
            {pokemon: "Tentacool", min_level: 21, max_level: 24, chance: 30},
            {pokemon: "Pyukumuku", min_level: 21, max_level: 24, chance: 20},
            {pokemon: "Wingull", min_level: 21, max_level: 24, chance: 20},
        ]
    },
    "Hano Beach (Area 1)": {
        "Ambush": [
            {pokemon: "Staryu", min_level: 21, max_level: 24, chance: 80},
            {pokemon: "Sandygast", min_level: 21, max_level: 24, chance: 20},
        ]
    },
    "Hano Beach (Area 2)": {
        "Ambush": [
            {pokemon: "Tentacool", min_level: 21, max_level: 24, chance: 100},
        ]
    },
    "Hau'oli Cemetery": {
        "Walk": [
            {pokemon: "Gastly", min_level: 7, max_level: 10, chance: 50},
            {pokemon: "Drifloon", min_level: 7, max_level: 10, chance: 30, time: ["Day"]},
            {pokemon: "Misdreavus", min_level: 7, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Zubat", min_level: 7, max_level: 10, chance: 20},
        ],
        "Island Scan": [
            {pokemon: "Litwick", min_level: 10, max_level: 10, chance: 100},
        ]
    },
    "Hau'oli City": {
        "Island Scan": [
            {pokemon: "Klink", min_level: 8, max_level: 8, chance: 100},
        ]
    },
    "Hau'oli City (Beachfront)": {
        "Surf": [
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ]
    },
    "Hau'oli City (Shopping District)": {
        "Walk": [
            {pokemon: "Abra", min_level: 5, max_level: 8, chance: 25},
            {pokemon: "Alolan Rattata", min_level: 5, max_level: 8, chance: 20, time: ["Night"]},
            {pokemon: "Wingull", min_level: 5, max_level: 8, chance: 20},
            {pokemon: "Yungoos", min_level: 5, max_level: 8, chance: 20, time: ["Day"]},
            {pokemon: "Alolan Grimer", min_level: 5, max_level: 8, chance: 10},
            {pokemon: "Alolan Meowth", min_level: 5, max_level: 8, chance: 10},
            {pokemon: "Magnemite", min_level: 5, max_level: 8, chance: 10},
            {pokemon: "Pichu", min_level: 5, max_level: 8, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 5, max_level: 8, chance: 5},
            {pokemon: "Pikachu", min_level: 5, max_level: 8, chance: 5},
        ]
    },
    "Iki Town": {
        "Gift": [
            {pokemon: "Litten", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Popplio", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Rowlet", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Kala'e Bay": {
        "Walk": [
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Alolan Rattata", min_level: 15, max_level: 18, chance: 30, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 15, max_level: 18, chance: 30, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Bagon", min_level: 15, max_level: 18, chance: 10},
        ],
        "Surf": [
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 15, chance: 30},
            {pokemon: "Shellder", min_level: 10, max_level: 15, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 15, chance: 20},
            {pokemon: "Shellder", min_level: 10, max_level: 15, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Horsea", min_level: 18, max_level: 18, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Slowbro", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Shelgon", min_level: 15, max_level: 18, chance: 10},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 79},
        ]
    },
    "Konikoni City": {
        "NPC Trade": [
            {pokemon: "Poliwhirl", min_level: 22, max_level: 22, chance: 100},
        ]
    },
    "Lake of the Moone": {
        "Gift": [
            {pokemon: "Cosmog", min_level: 5, max_level: 5, chance: 100, version: "Moon"},
        ]
    },
    "Lake of the Sunne": {
        "Gift": [
            {pokemon: "Cosmog", min_level: 5, max_level: 5, chance: 100, version: "Sun"},
        ]
    },
    "Lush Jungle": {
        "Ambush": [
            {pokemon: "Fomantis", min_level: 18, max_level: 21, chance: 100},
        ],
        "SOS Encounter (Ambush, Weather)": [
            {pokemon: "Castform", min_level: 18, max_level: 21, chance: 0},
            {pokemon: "Goomy", min_level: 18, max_level: 21, chance: 0},
        ],
        "Static": [
            {pokemon: "Xurkitree", min_level: 65, max_level: 65, chance: 100},
        ]
    },
    "Lush Jungle (Area 1)": {
        "Walk": [
            {pokemon: "Fomantis", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Morelull", min_level: 18, max_level: 21, chance: 20, time: ["Night"]},
            {pokemon: "Paras", min_level: 18, max_level: 21, chance: 20, time: ["Day"]},
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Bonsly", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Caterpie", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Metapod", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Comfey", min_level: 18, max_level: 21, chance: 5},
            {pokemon: "Oranguru", min_level: 18, max_level: 21, chance: 5, version: "Moon"},
            {pokemon: "Passimian", min_level: 18, max_level: 21, chance: 5, version: "Sun"},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Caterpie", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Happiny", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Sudowoodo", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 5},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 18, max_level: 21, chance: 0},
            {pokemon: "Goomy", min_level: 18, max_level: 21, chance: 0},
        ]
    },
    "Lush Jungle (Area 2)": {
        "Walk": [
            {pokemon: "Bounsweet", min_level: 18, max_level: 21, chance: 40},
            {pokemon: "Fomantis", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Morelull", min_level: 18, max_level: 21, chance: 10, time: ["Night"]},
            {pokemon: "Paras", min_level: 18, max_level: 21, chance: 10, time: ["Day"]},
            {pokemon: "Comfey", min_level: 18, max_level: 21, chance: 5},
            {pokemon: "Oranguru", min_level: 18, max_level: 21, chance: 5, version: "Moon"},
            {pokemon: "Passimian", min_level: 18, max_level: 21, chance: 5, version: "Sun"},
        ],
        "SOS Encounter": [
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 5},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 18, max_level: 21, chance: 0},
            {pokemon: "Goomy", min_level: 18, max_level: 21, chance: 0},
        ]
    },
    "Lush Jungle (Area 3)": {
        "Walk": [
            {pokemon: "Fomantis", min_level: 18, max_level: 21, chance: 30},
            {pokemon: "Morelull", min_level: 18, max_level: 21, chance: 30, time: ["Night"]},
            {pokemon: "Paras", min_level: 18, max_level: 21, chance: 30, time: ["Day"]},
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Pinsir", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Comfey", min_level: 18, max_level: 21, chance: 5},
            {pokemon: "Oranguru", min_level: 18, max_level: 21, chance: 5, version: "Moon"},
            {pokemon: "Passimian", min_level: 18, max_level: 21, chance: 5, version: "Sun"},
        ],
        "SOS Encounter": [
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 5},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 18, max_level: 21, chance: 0},
            {pokemon: "Goomy", min_level: 18, max_level: 21, chance: 0},
        ]
    },
    "Lush Jungle (Area 4)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 18, max_level: 21, chance: 70},
            {pokemon: "Alolan Diglett", min_level: 18, max_level: 21, chance: 30},
        ]
    },
    "Malie City": {
        "NPC Trade": [
            {pokemon: "Happiny", min_level: 27, max_level: 27, chance: 100},
        ]
    },
    "Malie City (Outer Cape)": {
        "Walk": [
            {pokemon: "Alolan Grimer", min_level: 24, max_level: 27, chance: 30},
            {pokemon: "Trubbish", min_level: 24, max_level: 27, chance: 30},
            {pokemon: "Alolan Raticate", min_level: 24, max_level: 27, chance: 20, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 24, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Magnemite", min_level: 24, max_level: 27, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Garbodor", min_level: 24, max_level: 27, chance: 30},
        ]
    },
    "Malie Garden": {
        "Walk": [
            {pokemon: "Alolan Meowth", min_level: 24, max_level: 27, chance: 20},
            {pokemon: "Araquanid", min_level: 24, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Ariados", min_level: 24, max_level: 27, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 24, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Masquerain", min_level: 24, max_level: 27, chance: 20, time: ["Night"]},
            {pokemon: "Poliwag", min_level: 24, max_level: 27, chance: 20},
            {pokemon: "Cottonee", min_level: 24, max_level: 27, chance: 10, version: "Sun"},
            {pokemon: "Petilil", min_level: 24, max_level: 27, chance: 10, version: "Moon"},
            {pokemon: "Psyduck", min_level: 24, max_level: 27, chance: 10},
        ],
        "Bubbling Spots": [
            {pokemon: "Goldeen", min_level: 10, max_level: 27, chance: 50},
            {pokemon: "Magikarp", min_level: 10, max_level: 27, chance: 50},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 27, chance: 60},
            {pokemon: "Goldeen", min_level: 10, max_level: 27, chance: 40},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 27, chance: 50},
            {pokemon: "Seaking", min_level: 10, max_level: 27, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 27, chance: 60},
            {pokemon: "Seaking", min_level: 10, max_level: 27, chance: 40},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 24, max_level: 27, chance: 0},
            {pokemon: "Politoed", min_level: 24, max_level: 27, chance: 0, time: ["Night"]},
            {pokemon: "Poliwhirl", min_level: 24, max_level: 27, chance: 0},
            {pokemon: "Poliwrath", min_level: 24, max_level: 27, chance: 0, time: ["Day"]},
        ],
        "Static": [
            {pokemon: "Celesteela", min_level: 65, max_level: 65, chance: 100, version: "Moon"},
            {pokemon: "Kartana", min_level: 60, max_level: 60, chance: 100, version: "Sun"},
        ]
    },
    "Melemele Meadow": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 9, max_level: 12, chance: 30, version: "Sun"},
            {pokemon: "Cutiefly", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Petilil", min_level: 9, max_level: 12, chance: 30, version: "Moon"},
            {pokemon: "Oricorio (Pom Pom)", min_level: 9, max_level: 12, chance: 20},
            {pokemon: "Caterpie", min_level: 9, max_level: 12, chance: 10},
            {pokemon: "Metapod", min_level: 9, max_level: 12, chance: 9},
            {pokemon: "Butterfree", min_level: 9, max_level: 12, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 9, max_level: 12, chance: 19},
            {pokemon: "Caterpie", min_level: 9, max_level: 12, chance: 9},
        ],
        "Static": [
            {pokemon: "Buzzwole", min_level: 65, max_level: 65, chance: 100, version: "Sun"},
        ]
    },
    "Melemele Sea": {
        "Surf": [
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Luvdisc", min_level: 10, max_level: 18, chance: 40},
            {pokemon: "Corsola", min_level: 10, max_level: 18, chance: 20},
            {pokemon: "Magikarp", min_level: 10, max_level: 18, chance: 20},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 18, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 18, chance: 78},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 18, chance: 20},
            {pokemon: "Corsola", min_level: 10, max_level: 18, chance: 1},
            {pokemon: "Luvdisc", min_level: 10, max_level: 18, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 18, chance: 20},
            {pokemon: "Mareanie", min_level: 10, max_level: 18, chance: 20},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 18, chance: 78},
            {pokemon: "Mareanie", min_level: 10, max_level: 18, chance: 1},
        ]
    },
    "Memorial Hill": {
        "Walk": [
            {pokemon: "Gastly", min_level: 20, max_level: 23, chance: 50},
            {pokemon: "Phantump", min_level: 20, max_level: 23, chance: 30},
            {pokemon: "Zubat", min_level: 20, max_level: 23, chance: 20},
        ],
        "Static": [
            {pokemon: "Xurkitree", min_level: 65, max_level: 65, chance: 100},
        ]
    },
    "Mount Hokulani": {
        "Walk": [
            {pokemon: "Fearow", min_level: 25, max_level: 28, chance: 40, time: ["Day"]},
            {pokemon: "Fearow", min_level: 25, max_level: 28, chance: 30, time: ["Night"]},
            {pokemon: "Minior", min_level: 25, max_level: 28, chance: 30},
            {pokemon: "Beldum", min_level: 25, max_level: 28, chance: 10},
            {pokemon: "Cleffa", min_level: 25, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Ditto", min_level: 25, max_level: 28, chance: 10},
            {pokemon: "Skarmory", min_level: 25, max_level: 28, chance: 10},
        ],
        "Island Scan": [
            {pokemon: "Axew", min_level: 28, max_level: 28, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Chansey", min_level: 25, max_level: 28, chance: 10, time: ["Night"]},
            {pokemon: "Clefairy", min_level: 25, max_level: 28, chance: 10, time: ["Night"]},
        ]
    },
    "Mount Lanakila (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Sandshrew", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Alolan Vulpix", min_level: 42, max_level: 45, chance: 30, version: "Sun"},
            {pokemon: "Snorunt", min_level: 42, max_level: 45, chance: 30},
            {pokemon: "Absol", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Sneasel", min_level: 42, max_level: 45, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Glalie", min_level: 42, max_level: 45, chance: 30},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 42, max_level: 45, chance: 0},
            {pokemon: "Vanillish", min_level: 42, max_level: 45, chance: 0},
        ]
    },
    "Mount Lanakila (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Sandshrew", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Alolan Vulpix", min_level: 45, max_level: 48, chance: 30, version: "Sun"},
            {pokemon: "Snorunt", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Snorunt", min_level: 45, max_level: 48, chance: 30, version: "Sun"},
            {pokemon: "Absol", min_level: 42, max_level: 45, chance: 20, version: "Moon"},
            {pokemon: "Absol", min_level: 45, max_level: 48, chance: 20, version: "Sun"},
            {pokemon: "Sneasel", min_level: 42, max_level: 45, chance: 20, version: "Moon"},
            {pokemon: "Sneasel", min_level: 45, max_level: 48, chance: 20, version: "Sun"},
        ],
        "SOS Encounter": [
            {pokemon: "Glalie", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Glalie", min_level: 45, max_level: 48, chance: 30, version: "Sun"},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 42, max_level: 45, chance: 0, version: "Moon"},
            {pokemon: "Castform", min_level: 45, max_level: 48, chance: 0, version: "Sun"},
            {pokemon: "Vanillish", min_level: 42, max_level: 45, chance: 0, version: "Moon"},
            {pokemon: "Vanillish", min_level: 45, max_level: 48, chance: 0, version: "Sun"},
        ]
    },
    "Mount Lanakila (Area 3)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Golbat", min_level: 45, max_level: 48, chance: 30, version: "Sun"},
            {pokemon: "Snorunt", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Snorunt", min_level: 45, max_level: 48, chance: 30, version: "Sun"},
            {pokemon: "Absol", min_level: 45, max_level: 48, chance: 20, version: "Sun"},
            {pokemon: "Sneasel", min_level: 42, max_level: 45, chance: 20, version: "Moon"},
            {pokemon: "Sneasel", min_level: 45, max_level: 48, chance: 20, version: "Sun"},
            {pokemon: "Absol", min_level: 42, max_level: 45, chance: 10, version: "Moon"},
            {pokemon: "Drampa", min_level: 42, max_level: 45, chance: 10, version: "Moon"},
        ],
        "SOS Encounter": [
            {pokemon: "Glalie", min_level: 42, max_level: 45, chance: 30, version: "Moon"},
            {pokemon: "Glalie", min_level: 45, max_level: 48, chance: 30, version: "Sun"},
        ]
    },
    "Paniola Ranch": {
        "Walk": [
            {pokemon: "Mudbray", min_level: 12, max_level: 15, chance: 50},
            {pokemon: "Lillipup", min_level: 12, max_level: 15, chance: 40},
            {pokemon: "Miltank", min_level: 12, max_level: 15, chance: 5},
            {pokemon: "Tauros", min_level: 12, max_level: 15, chance: 5},
        ],
        "Gift": [
            {pokemon: "Eevee", min_level: 1, max_level: 1, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 12, max_level: 15, chance: 5},
            {pokemon: "Tauros", min_level: 12, max_level: 15, chance: 5},
        ]
    },
    "Paniola Town": {
        "Bubbling Spots": [
            {pokemon: "Barboach", min_level: 10, max_level: 18, chance: 50},
            {pokemon: "Magikarp", min_level: 10, max_level: 18, chance: 50},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 18, chance: 99},
            {pokemon: "Barboach", min_level: 10, max_level: 18, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 18, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 18, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 18, chance: 99},
            {pokemon: "Whiscash", min_level: 10, max_level: 18, chance: 1},
        ]
    },
    "Poké Pelago": {
        "Gift": [
            {pokemon: "Carbink", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Carbink", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Carbink", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Drifblim", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Drifblim", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Drifblim", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Emolga", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Fletchling", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Fletchling", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Fletchling", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Gastly", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Gastly", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Gastly", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Kadabra", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Kadabra", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Kadabra", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Klefki", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Klefki", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Lapras", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Magnemite", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Magnemite", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Magnemite", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Metang", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Metang", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Mismagius", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Murkrow", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Murkrow", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Murkrow", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Pikipek", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Pikipek", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Pikipek", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Pinsir", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Pinsir", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Pinsir", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Poliwag", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Poliwag", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Poliwag", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Pyukumuku", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Pyukumuku", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Pyukumuku", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Rufflet", min_level: 21, max_level: 27, chance: 100, version: "Sun"},
            {pokemon: "Rufflet", min_level: 37, max_level: 43, chance: 100, version: "Sun"},
            {pokemon: "Rufflet", min_level: 49, max_level: 55, chance: 100, version: "Sun"},
            {pokemon: "Scyther", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Shellder", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Shellder", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Shellder", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Skarmory", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Skarmory", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Spearow", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Spearow", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Spearow", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Staryu", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Staryu", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Staryu", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Trevenant", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Trevenant", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Trevenant", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Vullaby", min_level: 21, max_level: 27, chance: 100, version: "Moon"},
            {pokemon: "Vullaby", min_level: 37, max_level: 43, chance: 100, version: "Moon"},
            {pokemon: "Vullaby", min_level: 49, max_level: 55, chance: 100, version: "Moon"},
            {pokemon: "Wingull", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Wingull", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Wingull", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Zubat", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Zubat", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Zubat", min_level: 49, max_level: 55, chance: 100},
        ]
    },
    "Poni Breaker Coast": {
        "Ambush": [
            {pokemon: "Wimpod", min_level: 40, max_level: 43, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 43, chance: 50},
            {pokemon: "Wailmer", min_level: 10, max_level: 43, chance: 40},
            {pokemon: "Sharpedo", min_level: 10, max_level: 43, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 43, chance: 79},
            {pokemon: "Wailmer", min_level: 10, max_level: 43, chance: 20},
            {pokemon: "Sharpedo", min_level: 10, max_level: 43, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 43, chance: 50},
            {pokemon: "Wailord", min_level: 10, max_level: 43, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 43, chance: 79},
            {pokemon: "Wailord", min_level: 10, max_level: 43, chance: 20},
        ],
        "Static": [
            {pokemon: "Wimpod", min_level: 40, max_level: 43, chance: 100},
        ]
    },
    "Poni Coast": {
        "Ambush": [
            {pokemon: "Alolan Dugtrio", min_level: 56, max_level: 59, chance: 100},
        ]
    },
    "Poni Gauntlet": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 56, max_level: 59, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 56, max_level: 59, chance: 30, time: ["Day"]},
            {pokemon: "Pelipper", min_level: 56, max_level: 59, chance: 30},
            {pokemon: "Granbull", min_level: 56, max_level: 59, chance: 20},
            {pokemon: "Golduck", min_level: 56, max_level: 59, chance: 15},
            {pokemon: "Bewear", min_level: 56, max_level: 59, chance: 5},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 59, chance: 50},
            {pokemon: "Barboach", min_level: 10, max_level: 59, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 59, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 59, chance: 59},
            {pokemon: "Barboach", min_level: 10, max_level: 59, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 59, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Togekiss", min_level: 59, max_level: 59, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Talonflame", min_level: 59, max_level: 59, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 59, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 59, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 59, chance: 10},
            {pokemon: "Dragonite", min_level: 10, max_level: 59, chance: 10},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 59, chance: 59},
            {pokemon: "Whiscash", min_level: 10, max_level: 59, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 59, chance: 1},
            {pokemon: "Dragonite", min_level: 10, max_level: 59, chance: 1},
        ]
    },
    "Poni Grove": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 52, max_level: 55, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 52, max_level: 55, chance: 30, time: ["Day"]},
            {pokemon: "Trumbeak", min_level: 52, max_level: 55, chance: 30},
            {pokemon: "Granbull", min_level: 52, max_level: 55, chance: 20},
            {pokemon: "Pinsir", min_level: 52, max_level: 55, chance: 10},
            {pokemon: "Riolu", min_level: 52, max_level: 55, chance: 10},
        ],
        "Island Scan": [
            {pokemon: "Eelektross", min_level: 55, max_level: 55, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Chansey", min_level: 52, max_level: 55, chance: 10},
            {pokemon: "Lucario", min_level: 52, max_level: 55, chance: 10},
        ]
    },
    "Poni Meadow": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 50, version: "Sun"},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 50, version: "Moon"},
            {pokemon: "Ribombee", min_level: 54, max_level: 57, chance: 30},
            {pokemon: "Oricorio (Sensu)", min_level: 54, max_level: 57, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 57, chance: 50},
            {pokemon: "Barboach", min_level: 10, max_level: 57, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 57, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 57, chance: 59},
            {pokemon: "Barboach", min_level: 10, max_level: 57, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 57, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Leavanny", min_level: 57, max_level: 57, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 57, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 57, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 57, chance: 10},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 57, chance: 59},
            {pokemon: "Whiscash", min_level: 10, max_level: 57, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 57, chance: 1},
        ]
    },
    "Poni Plains": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 54, max_level: 57, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Conkeldurr", min_level: 57, max_level: 57, chance: 100},
        ]
    },
    "Poni Plains (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Sun"},
            {pokemon: "Pelipper", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Moon"},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Plains (Area 2)": {
        "Ambush": [
            {pokemon: "Primeape", min_level: 54, max_level: 57, chance: 80},
            {pokemon: "Emolga", min_level: 54, max_level: 57, chance: 20},
        ]
    },
    "Poni Plains (Area 3)": {
        "Ambush": [
            {pokemon: "Fearow", min_level: 54, max_level: 57, chance: 70},
            {pokemon: "Braviary", min_level: 54, max_level: 57, chance: 30, version: "Sun"},
            {pokemon: "Mandibuzz", min_level: 54, max_level: 57, chance: 30, version: "Moon"},
        ]
    },
    "Poni Plains (Area 4)": {
        "Ambush": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 70, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 70, time: ["Day"]},
            {pokemon: "Hariyama", min_level: 54, max_level: 57, chance: 30},
        ]
    },
    "Poni Plains (Area 5)": {
        "Ambush": [
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 70, version: "Sun"},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 70, version: "Moon"},
            {pokemon: "Scyther", min_level: 54, max_level: 57, chance: 30},
        ]
    },
    "Poni Plains (Area 6)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 30},
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Sun"},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Moon"},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Plains (Area 7)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Sun"},
            {pokemon: "Hypno", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Moon"},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Plains (Area 8)": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Sun"},
            {pokemon: "Fearow", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Mudsdale", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Moon"},
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 10, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 10, time: ["Day"]},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Wilds": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 40, max_level: 43, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 40, max_level: 43, chance: 30, time: ["Day"]},
            {pokemon: "Pelipper", min_level: 40, max_level: 43, chance: 30},
            {pokemon: "Granbull", min_level: 40, max_level: 43, chance: 20},
            {pokemon: "Exeggcute", min_level: 40, max_level: 43, chance: 10},
            {pokemon: "Gastrodon", min_level: 40, max_level: 43, chance: 10},
        ],
        "Surf": [
            {pokemon: "Tentacruel", min_level: 40, max_level: 43, chance: 30},
            {pokemon: "Lumineon", min_level: 40, max_level: 43, chance: 25},
            {pokemon: "Gastrodon", min_level: 40, max_level: 43, chance: 20},
            {pokemon: "Pelipper", min_level: 40, max_level: 43, chance: 20},
            {pokemon: "Lapras", min_level: 40, max_level: 43, chance: 5},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 40, max_level: 43, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 43, chance: 50},
            {pokemon: "Wailmer", min_level: 10, max_level: 43, chance: 40},
            {pokemon: "Relicanth", min_level: 10, max_level: 43, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 43, chance: 79},
            {pokemon: "Wailmer", min_level: 10, max_level: 43, chance: 20},
            {pokemon: "Relicanth", min_level: 10, max_level: 43, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Samurott", min_level: 43, max_level: 43, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 43, chance: 50},
            {pokemon: "Wailord", min_level: 10, max_level: 43, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 43, chance: 79},
            {pokemon: "Wailord", min_level: 10, max_level: 43, chance: 20},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Lumineon", min_level: 40, max_level: 43, chance: 10},
        ],
        "Static": [
            {pokemon: "Wimpod", min_level: 40, max_level: 43, chance: 100},
        ]
    },
    "Poni Wilds (Area 1)": {
        "Ambush": [
            {pokemon: "Wailmer", min_level: 40, max_level: 43, chance: 90},
            {pokemon: "Wailord", min_level: 40, max_level: 43, chance: 10},
        ]
    },
    "Poni Wilds (Area 2)": {
        "Ambush": [
            {pokemon: "Wimpod", min_level: 40, max_level: 43, chance: 100},
        ]
    },
    "Resolution Cave": {
        "Walk": [
            {pokemon: "Golbat", min_level: 54, max_level: 57, chance: 70},
            {pokemon: "Alolan Dugtrio", min_level: 54, max_level: 57, chance: 30},
        ],
        "SOS Encounter": [
            {pokemon: "Crobat", min_level: 54, max_level: 57, chance: 70},
        ],
        "Static": [
            {pokemon: "Guzzlord", min_level: 70, max_level: 70, chance: 100},
        ]
    },
    "Route 1 (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 2, max_level: 3, chance: 30, time: ["Night"]},
            {pokemon: "Pikipek", min_level: 2, max_level: 3, chance: 30},
            {pokemon: "Yungoos", min_level: 2, max_level: 3, chance: 30, time: ["Day"]},
            {pokemon: "Caterpie", min_level: 2, max_level: 3, chance: 20},
            {pokemon: "Ledyba", min_level: 2, max_level: 3, chance: 20, time: ["Day"]},
            {pokemon: "Spinarak", min_level: 2, max_level: 3, chance: 20, time: ["Night"]},
        ]
    },
    "Route 1 (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 3, max_level: 5, chance: 30, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 3, max_level: 5, chance: 30, time: ["Day"]},
            {pokemon: "Pikipek", min_level: 3, max_level: 5, chance: 20},
            {pokemon: "Ledyba", min_level: 3, max_level: 5, chance: 15, time: ["Day"]},
            {pokemon: "Spinarak", min_level: 3, max_level: 5, chance: 15, time: ["Night"]},
            {pokemon: "Caterpie", min_level: 3, max_level: 5, chance: 10},
            {pokemon: "Grubbin", min_level: 3, max_level: 5, chance: 10},
            {pokemon: "Metapod", min_level: 3, max_level: 5, chance: 10},
            {pokemon: "Pichu", min_level: 3, max_level: 5, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Caterpie", min_level: 3, max_level: 5, chance: 10},
            {pokemon: "Happiny", min_level: 3, max_level: 5, chance: 5},
            {pokemon: "Pikachu", min_level: 3, max_level: 5, chance: 5},
        ]
    },
    "Route 1 (Area 3)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 10, max_level: 13, chance: 30, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 10, max_level: 13, chance: 30, time: ["Day"]},
            {pokemon: "Pikipek", min_level: 10, max_level: 13, chance: 20},
            {pokemon: "Bonsly", min_level: 10, max_level: 13, chance: 15},
            {pokemon: "Caterpie", min_level: 10, max_level: 13, chance: 10},
            {pokemon: "Ledyba", min_level: 10, max_level: 13, chance: 10, time: ["Day"]},
            {pokemon: "Metapod", min_level: 10, max_level: 13, chance: 10},
            {pokemon: "Spinarak", min_level: 10, max_level: 13, chance: 10, time: ["Night"]},
            {pokemon: "Munchlax", min_level: 10, max_level: 13, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 10, max_level: 13, chance: 20},
            {pokemon: "Sudowoodo", min_level: 10, max_level: 13, chance: 15},
            {pokemon: "Caterpie", min_level: 10, max_level: 13, chance: 10},
            {pokemon: "Snorlax", min_level: 10, max_level: 13, chance: 5},
        ]
    },
    "Route 1 (Area 4)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 2, max_level: 4, chance: 30, time: ["Night"]},
            {pokemon: "Pikipek", min_level: 2, max_level: 4, chance: 30},
            {pokemon: "Yungoos", min_level: 2, max_level: 4, chance: 30, time: ["Day"]},
            {pokemon: "Caterpie", min_level: 2, max_level: 4, chance: 20},
            {pokemon: "Ledyba", min_level: 2, max_level: 4, chance: 20, time: ["Day"]},
            {pokemon: "Spinarak", min_level: 2, max_level: 4, chance: 20, time: ["Night"]},
        ]
    },
    "Route 1 (Hau'oli Outskirts)": {
        "Surf": [
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ]
    },
    "Route 1 (Hau'oli Outskirts) (Area 1)": {
        "Walk": [
            {pokemon: "Wingull", min_level: 5, max_level: 7, chance: 50},
            {pokemon: "Alolan Rattata", min_level: 5, max_level: 7, chance: 30, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 5, max_level: 7, chance: 30, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 5, max_level: 7, chance: 20},
        ]
    },
    "Route 1 (Hau'oli Outskirts) (Area 2)": {
        "Walk": [
            {pokemon: "Magnemite", min_level: 6, max_level: 8, chance: 50},
            {pokemon: "Alolan Meowth", min_level: 6, max_level: 8, chance: 30},
            {pokemon: "Alolan Grimer", min_level: 6, max_level: 8, chance: 20},
        ]
    },
    "Route 2": {
        "Ambush": [
            {pokemon: "Alolan Rattata", min_level: 9, max_level: 10, chance: 70, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 9, max_level: 10, chance: 70, time: ["Day"]},
            {pokemon: "Makuhita", min_level: 9, max_level: 10, chance: 30},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 7, max_level: 10, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Chikorita", min_level: 10, max_level: 10, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Machop", min_level: 9, max_level: 9, chance: 100},
        ]
    },
    "Route 2 (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Meowth", min_level: 7, max_level: 10, chance: 30},
            {pokemon: "Abra", min_level: 7, max_level: 10, chance: 20},
            {pokemon: "Drowzee", min_level: 7, max_level: 10, chance: 20},
            {pokemon: "Smeargle", min_level: 7, max_level: 10, chance: 20},
            {pokemon: "Alolan Rattata", min_level: 7, max_level: 10, chance: 10, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 7, max_level: 10, chance: 10, time: ["Day"]},
        ]
    },
    "Route 2 (Area 2)": {
        "Walk": [
            {pokemon: "Spearow", min_level: 7, max_level: 10, chance: 40},
            {pokemon: "Cutiefly", min_level: 7, max_level: 10, chance: 20},
            {pokemon: "Growlithe", min_level: 7, max_level: 10, chance: 20},
            {pokemon: "Alolan Rattata", min_level: 7, max_level: 10, chance: 10, time: ["Night"]},
            {pokemon: "Smeargle", min_level: 7, max_level: 10, chance: 10},
            {pokemon: "Yungoos", min_level: 7, max_level: 10, chance: 10, time: ["Day"]},
        ]
    },
    "Route 3": {
        "Ambush": [
            {pokemon: "Spearow", min_level: 11, max_level: 12, chance: 70},
            {pokemon: "Rufflet", min_level: 11, max_level: 12, chance: 30, version: "Sun"},
            {pokemon: "Vullaby", min_level: 11, max_level: 12, chance: 30, version: "Moon"},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 9, max_level: 12, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Cyndaquil", min_level: 12, max_level: 12, chance: 100},
        ]
    },
    "Route 3 (Area 1)": {
        "Walk": [
            {pokemon: "Spearow", min_level: 9, max_level: 12, chance: 40},
            {pokemon: "Cutiefly", min_level: 9, max_level: 12, chance: 20},
            {pokemon: "Mankey", min_level: 9, max_level: 12, chance: 20},
            {pokemon: "Alolan Rattata", min_level: 9, max_level: 12, chance: 10, time: ["Night"]},
            {pokemon: "Delibird", min_level: 9, max_level: 12, chance: 10},
            {pokemon: "Yungoos", min_level: 9, max_level: 12, chance: 10, time: ["Day"]},
        ]
    },
    "Route 3 (Area 2)": {
        "Walk": [
            {pokemon: "Spearow", min_level: 9, max_level: 12, chance: 49},
            {pokemon: "Cutiefly", min_level: 9, max_level: 12, chance: 20},
            {pokemon: "Mankey", min_level: 9, max_level: 12, chance: 20},
            {pokemon: "Alolan Rattata", min_level: 9, max_level: 12, chance: 10, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 9, max_level: 12, chance: 10, time: ["Day"]},
            {pokemon: "Bagon", min_level: 9, max_level: 12, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Salamence", min_level: 9, max_level: 12, chance: 1},
        ]
    },
    "Route 4": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 11, max_level: 14, chance: 30},
            {pokemon: "Pikipek", min_level: 11, max_level: 14, chance: 25, time: ["Night"]},
            {pokemon: "Mudbray", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Pikipek", min_level: 11, max_level: 14, chance: 15, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 11, max_level: 14, chance: 10, time: ["Night"]},
            {pokemon: "Grubbin", min_level: 11, max_level: 14, chance: 10},
            {pokemon: "Igglybuff", min_level: 11, max_level: 14, chance: 10, time: ["Day"]},
            {pokemon: "Yungoos", min_level: 11, max_level: 14, chance: 10, time: ["Day"]},
            {pokemon: "Eevee", min_level: 11, max_level: 14, chance: 5},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 11, max_level: 14, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Venipede", min_level: 14, max_level: 14, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 11, max_level: 14, chance: 10, time: ["Day"]},
            {pokemon: "Jigglypuff", min_level: 11, max_level: 14, chance: 10, time: ["Day"]},
            {pokemon: "Espeon", min_level: 11, max_level: 14, chance: 5, time: ["Day"]},
            {pokemon: "Umbreon", min_level: 11, max_level: 14, chance: 5, time: ["Night"]},
        ]
    },
    "Route 5": {
        "Ambush": [
            {pokemon: "Alolan Diglett", min_level: 18, max_level: 21, chance: 100},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 13, max_level: 16, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Bellsprout", min_level: 16, max_level: 16, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Bounsweet", min_level: 16, max_level: 16, chance: 100},
        ]
    },
    "Route 5 (Area 1)": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 13, max_level: 16, chance: 30},
            {pokemon: "Fomantis", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Pikipek", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 10},
            {pokemon: "Grubbin", min_level: 13, max_level: 16, chance: 10},
            {pokemon: "Metapod", min_level: 13, max_level: 16, chance: 9},
            {pokemon: "Butterfree", min_level: 13, max_level: 16, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 13, max_level: 16, chance: 19},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 9},
        ]
    },
    "Route 5 (Area 2)": {
        "Walk": [
            {pokemon: "Fomantis", min_level: 18, max_level: 21, chance: 30},
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Caterpie", min_level: 18, max_level: 21, chance: 15},
            {pokemon: "Bonsly", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Grubbin", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Metapod", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Butterfree", min_level: 18, max_level: 21, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 18, max_level: 21, chance: 25},
            {pokemon: "Caterpie", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Happiny", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Sudowoodo", min_level: 18, max_level: 21, chance: 10},
        ]
    },
    "Route 6": {
        "Island Scan": [
            {pokemon: "Gothita", min_level: 17, max_level: 17, chance: 100},
        ]
    },
    "Route 6 (Area 1)": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 30},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 25, time: ["Night"]},
            {pokemon: "Mudbray", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 15, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 14, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Grubbin", min_level: 14, max_level: 17, chance: 10},
            {pokemon: "Igglybuff", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Yungoos", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Eevee", min_level: 14, max_level: 17, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Jigglypuff", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Espeon", min_level: 14, max_level: 17, chance: 5, time: ["Day"]},
            {pokemon: "Umbreon", min_level: 14, max_level: 17, chance: 5, time: ["Night"]},
        ]
    },
    "Route 6 (Area 2)": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 30},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 25, time: ["Night"]},
            {pokemon: "Oricorio (Pau)", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 15, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 14, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Grubbin", min_level: 14, max_level: 17, chance: 10},
            {pokemon: "Igglybuff", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Yungoos", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Eevee", min_level: 14, max_level: 17, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Jigglypuff", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Espeon", min_level: 14, max_level: 17, chance: 5, time: ["Day"]},
            {pokemon: "Umbreon", min_level: 14, max_level: 17, chance: 5, time: ["Night"]},
        ]
    },
    "Route 7": {
        "Surf": [
            {pokemon: "Finneon", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Tentacool", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Pyukumuku", min_level: 16, max_level: 19, chance: 20},
            {pokemon: "Wingull", min_level: 16, max_level: 19, chance: 20},
        ],
        "Ambush": [
            {pokemon: "Alolan Diglett", min_level: 16, max_level: 19, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 19, chance: 60},
            {pokemon: "Staryu", min_level: 10, max_level: 19, chance: 20},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 19, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 19, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 19, chance: 20},
            {pokemon: "Staryu", min_level: 10, max_level: 19, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Spheal", min_level: 19, max_level: 19, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 19, chance: 60},
            {pokemon: "Starmie", min_level: 10, max_level: 19, chance: 20},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 19, chance: 79},
            {pokemon: "Starmie", min_level: 10, max_level: 19, chance: 1},
        ]
    },
    "Route 8": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 17, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Trumbeak", min_level: 17, max_level: 20, chance: 30},
            {pokemon: "Yungoos", min_level: 17, max_level: 20, chance: 30, time: ["Day"]},
            {pokemon: "Salandit", min_level: 17, max_level: 20, chance: 20},
            {pokemon: "Fletchinder", min_level: 17, max_level: 20, chance: 15},
            {pokemon: "Stufful", min_level: 17, max_level: 20, chance: 5},
        ],
        "Surf": [
            {pokemon: "Finneon", min_level: 17, max_level: 20, chance: 40},
            {pokemon: "Tentacool", min_level: 17, max_level: 20, chance: 40},
            {pokemon: "Wingull", min_level: 17, max_level: 20, chance: 20},
        ],
        "Ambush": [
            {pokemon: "Wimpod", min_level: 17, max_level: 20, chance: 100},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 17, max_level: 20, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 20, chance: 60},
            {pokemon: "Chinchou", min_level: 10, max_level: 20, chance: 20},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 20, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 20, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 20, chance: 20},
            {pokemon: "Chinchou", min_level: 10, max_level: 20, chance: 1},
        ],
        "Gift": [
            {pokemon: "Archen", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Cranidos", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Shieldon", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Tirtouga", min_level: 15, max_level: 15, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Luxio", min_level: 20, max_level: 20, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Pikipek", min_level: 17, max_level: 20, chance: 30},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 20, chance: 60},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 20, chance: 79},
        ],
        "Static": [
            {pokemon: "Wimpod", min_level: 17, max_level: 20, chance: 100},
        ]
    },
    "Route 9": {
        "Fishing": [
            {pokemon: "Luvdisc", min_level: 10, max_level: 23, chance: 70},
            {pokemon: "Magikarp", min_level: 10, max_level: 23, chance: 15},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 23, chance: 10},
            {pokemon: "Corsola", min_level: 10, max_level: 23, chance: 5},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 23, chance: 15},
            {pokemon: "Mareanie", min_level: 10, max_level: 23, chance: 5},
        ]
    },
    "Route 10": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 24, max_level: 27, chance: 30, time: ["Night"]},
            {pokemon: "Fearow", min_level: 24, max_level: 27, chance: 30},
            {pokemon: "Gumshoos", min_level: 24, max_level: 27, chance: 30, time: ["Day"]},
            {pokemon: "Ariados", min_level: 24, max_level: 27, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 24, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Pancham", min_level: 24, max_level: 27, chance: 10},
            {pokemon: "Skarmory", min_level: 24, max_level: 27, chance: 10},
        ],
        "Ambush": [
            {pokemon: "Fearow", min_level: 24, max_level: 27, chance: 80},
            {pokemon: "Skarmory", min_level: 24, max_level: 27, chance: 20},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 24, max_level: 27, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Staravia", min_level: 27, max_level: 27, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Pangoro", min_level: 24, max_level: 27, chance: 10},
        ]
    },
    "Route 11": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 24, max_level: 27, chance: 20, time: ["Night"]},
            {pokemon: "Ariados", min_level: 24, max_level: 27, chance: 20, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 24, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Ledian", min_level: 24, max_level: 27, chance: 20, time: ["Day"]},
            {pokemon: "Pancham", min_level: 24, max_level: 27, chance: 20},
            {pokemon: "Trumbeak", min_level: 24, max_level: 27, chance: 20},
            {pokemon: "Komala", min_level: 24, max_level: 27, chance: 10},
            {pokemon: "Morelull", min_level: 24, max_level: 27, chance: 10, time: ["Night"]},
            {pokemon: "Paras", min_level: 24, max_level: 27, chance: 10, time: ["Day"]},
        ],
        "Island Scan": [
            {pokemon: "Vigoroth", min_level: 27, max_level: 27, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Pangoro", min_level: 24, max_level: 27, chance: 20},
        ]
    },
    "Route 12 (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Geodude", min_level: 26, max_level: 29, chance: 40},
            {pokemon: "Mudbray", min_level: 26, max_level: 29, chance: 30},
            {pokemon: "Torkoal", min_level: 26, max_level: 29, chance: 20},
            {pokemon: "Elekid", min_level: 26, max_level: 29, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Chansey", min_level: 26, max_level: 29, chance: 10},
            {pokemon: "Electabuzz", min_level: 26, max_level: 29, chance: 10},
        ]
    },
    "Route 12 (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Geodude", min_level: 25, max_level: 28, chance: 40},
            {pokemon: "Mudbray", min_level: 25, max_level: 28, chance: 30},
            {pokemon: "Torkoal", min_level: 25, max_level: 28, chance: 20},
            {pokemon: "Elekid", min_level: 25, max_level: 28, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Chansey", min_level: 25, max_level: 28, chance: 10},
            {pokemon: "Electabuzz", min_level: 25, max_level: 28, chance: 10},
        ]
    },
    "Route 13": {
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 30, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 30, chance: 30},
            {pokemon: "Bruxish", min_level: 10, max_level: 30, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 30, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 30, chance: 20},
            {pokemon: "Bruxish", min_level: 10, max_level: 30, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 30, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 30, chance: 79},
        ]
    },
    "Route 14": {
        "Surf": [
            {pokemon: "Finneon", min_level: 28, max_level: 31, chance: 40},
            {pokemon: "Tentacool", min_level: 28, max_level: 31, chance: 40},
            {pokemon: "Pelipper", min_level: 28, max_level: 31, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 31, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 31, chance: 30},
            {pokemon: "Bruxish", min_level: 10, max_level: 31, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 31, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 31, chance: 20},
            {pokemon: "Bruxish", min_level: 10, max_level: 31, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 31, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 31, chance: 79},
        ]
    },
    "Route 15": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 30, max_level: 33, chance: 50},
            {pokemon: "Alolan Raticate", min_level: 30, max_level: 33, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 30, max_level: 33, chance: 30, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 30, max_level: 33, chance: 20},
        ],
        "Surf": [
            {pokemon: "Finneon", min_level: 30, max_level: 33, chance: 40},
            {pokemon: "Tentacool", min_level: 30, max_level: 33, chance: 40},
            {pokemon: "Pelipper", min_level: 30, max_level: 33, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 33, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 33, chance: 30},
            {pokemon: "Bruxish", min_level: 10, max_level: 33, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 33, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 33, chance: 20},
            {pokemon: "Bruxish", min_level: 10, max_level: 33, chance: 1},
        ],
        "Gift": [
            {pokemon: "Porygon", min_level: 30, max_level: 30, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 33, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 33, chance: 79},
        ]
    },
    "Route 16": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 30, max_level: 33, chance: 50},
            {pokemon: "Alolan Raticate", min_level: 30, max_level: 33, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 30, max_level: 33, chance: 30, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 30, max_level: 33, chance: 20},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 30, max_level: 33, chance: 100},
        ],
        "Gift": [
            {pokemon: "Zygarde", min_level: 30, max_level: 30, chance: 100},
            {pokemon: "Zygarde", min_level: 50, max_level: 50, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Duosion", min_level: 33, max_level: 33, chance: 100},
        ]
    },
    "Route 17": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 31, max_level: 34, chance: 100},
        ],
        "Static": [
            {pokemon: "Kartana", min_level: 60, max_level: 60, chance: 100, version: "Sun"},
        ]
    },
    "Route 17 (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 31, max_level: 34, chance: 30, time: ["Night"]},
            {pokemon: "Fearow", min_level: 31, max_level: 34, chance: 30},
            {pokemon: "Gumshoos", min_level: 31, max_level: 34, chance: 30, time: ["Day"]},
            {pokemon: "Ariados", min_level: 31, max_level: 34, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 31, max_level: 34, chance: 20, time: ["Day"]},
            {pokemon: "Pancham", min_level: 31, max_level: 34, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Pangoro", min_level: 31, max_level: 34, chance: 20},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 31, max_level: 34, chance: 0},
            {pokemon: "Goomy", min_level: 31, max_level: 34, chance: 0},
        ]
    },
    "Route 17 (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 31, max_level: 34, chance: 30, time: ["Night"]},
            {pokemon: "Fearow", min_level: 31, max_level: 34, chance: 30},
            {pokemon: "Gumshoos", min_level: 31, max_level: 34, chance: 30, time: ["Day"]},
            {pokemon: "Alolan Graveler", min_level: 31, max_level: 34, chance: 20},
            {pokemon: "Pancham", min_level: 31, max_level: 34, chance: 10},
            {pokemon: "Skarmory", min_level: 31, max_level: 34, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Pangoro", min_level: 31, max_level: 34, chance: 10},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 31, max_level: 34, chance: 0},
            {pokemon: "Goomy", min_level: 31, max_level: 34, chance: 0},
        ]
    },
    "Ruins of Abundance": {
        "Static": [
            {pokemon: "Tapu Bulu", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ruins of Conflict": {
        "Static": [
            {pokemon: "Tapu Koko", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ruins of Hope": {
        "Static": [
            {pokemon: "Tapu Fini", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ruins of Life": {
        "Static": [
            {pokemon: "Tapu Lele", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Seafolk Village": {
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 43, chance: 50},
            {pokemon: "Wailmer", min_level: 10, max_level: 43, chance: 40},
            {pokemon: "Dhelmise", min_level: 10, max_level: 43, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 43, chance: 79},
            {pokemon: "Wailmer", min_level: 10, max_level: 43, chance: 20},
            {pokemon: "Dhelmise", min_level: 10, max_level: 43, chance: 1},
        ],
        "Gift": [
            {pokemon: "Aerodactyl", min_level: 40, max_level: 40, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Steenee", min_level: 43, max_level: 43, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 43, chance: 50},
            {pokemon: "Wailord", min_level: 10, max_level: 43, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 43, chance: 79},
            {pokemon: "Wailord", min_level: 10, max_level: 43, chance: 20},
        ]
    },
    "Seaward Cave": {
        "Walk": [
            {pokemon: "Zubat", min_level: 9, max_level: 12, chance: 70},
            {pokemon: "Alolan Diglett", min_level: 9, max_level: 12, chance: 30},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 15, max_level: 18, chance: 80},
            {pokemon: "Psyduck", min_level: 15, max_level: 18, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Barboach", min_level: 10, max_level: 15, chance: 50},
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 50},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 15, chance: 99},
            {pokemon: "Barboach", min_level: 10, max_level: 15, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Totodile", min_level: 12, max_level: 12, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 15, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 15, chance: 99},
            {pokemon: "Whiscash", min_level: 10, max_level: 15, chance: 1},
        ]
    },
    "Secluded Shore": {
        "Surf": [
            {pokemon: "Finneon", min_level: 27, max_level: 30, chance: 40},
            {pokemon: "Tentacool", min_level: 27, max_level: 30, chance: 40},
            {pokemon: "Pelipper", min_level: 27, max_level: 30, chance: 20},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 27, max_level: 30, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 30, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 30, chance: 30},
            {pokemon: "Bruxish", min_level: 10, max_level: 30, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 30, chance: 79},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 30, chance: 20},
            {pokemon: "Bruxish", min_level: 10, max_level: 30, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 30, chance: 50},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 30, chance: 79},
        ]
    },
    "Tapu Village": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 28, max_level: 31, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 28, max_level: 31, chance: 30, time: ["Day"]},
            {pokemon: "Pelipper", min_level: 28, max_level: 31, chance: 30},
            {pokemon: "Snorunt", min_level: 28, max_level: 31, chance: 20},
            {pokemon: "Absol", min_level: 28, max_level: 31, chance: 10},
            {pokemon: "Alolan Sandshrew", min_level: 28, max_level: 31, chance: 10, version: "Moon"},
            {pokemon: "Alolan Vulpix", min_level: 28, max_level: 31, chance: 10, version: "Sun"},
        ],
        "Island Scan": [
            {pokemon: "Swinub", min_level: 31, max_level: 31, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Graveler", min_level: 32, max_level: 32, chance: 100},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 28, max_level: 31, chance: 0},
            {pokemon: "Vanillite", min_level: 28, max_level: 31, chance: 0},
        ]
    },
    "Ten Carat Hill": {
        "Walk": [
            {pokemon: "Roggenrola", min_level: 10, max_level: 13, chance: 30},
            {pokemon: "Zubat", min_level: 10, max_level: 13, chance: 30},
            {pokemon: "Alolan Diglett", min_level: 10, max_level: 13, chance: 20},
            {pokemon: "Carbink", min_level: 10, max_level: 13, chance: 20},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 15, max_level: 18, chance: 80},
            {pokemon: "Psyduck", min_level: 15, max_level: 18, chance: 20},
        ],
        "Island Scan": [
            {pokemon: "Deino", min_level: 13, max_level: 13, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Sableye", min_level: 10, max_level: 13, chance: 20},
        ]
    },
    "Ten Carat Hill (Farthest Hollow)": {
        "Walk": [
            {pokemon: "Machop", min_level: 10, max_level: 13, chance: 30},
            {pokemon: "Carbink", min_level: 10, max_level: 13, chance: 20},
            {pokemon: "Rockruff", min_level: 10, max_level: 13, chance: 20},
            {pokemon: "Roggenrola", min_level: 10, max_level: 13, chance: 20},
            {pokemon: "Spinda", min_level: 10, max_level: 13, chance: 10},
        ]
    },
    "Thrifty Megamart (Abandoned Site)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 29, max_level: 32, chance: 40},
            {pokemon: "Haunter", min_level: 29, max_level: 32, chance: 40},
            {pokemon: "Klefki", min_level: 29, max_level: 32, chance: 15},
            {pokemon: "Mimikyu", min_level: 29, max_level: 32, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Gengar", min_level: 29, max_level: 32, chance: 40},
        ]
    },
    "Ula'ula Meadow": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 31, max_level: 34, chance: 30, version: "Sun"},
            {pokemon: "Petilil", min_level: 31, max_level: 34, chance: 30, version: "Moon"},
            {pokemon: "Ribombee", min_level: 31, max_level: 34, chance: 30},
            {pokemon: "Ariados", min_level: 31, max_level: 34, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 31, max_level: 34, chance: 20, time: ["Day"]},
            {pokemon: "Oricorio", min_level: 31, max_level: 34, chance: 20},
        ],
        "Island Scan": [
            {pokemon: "Roselia", min_level: 34, max_level: 34, chance: 100},
        ]
    },
    "Vast Poni Canyon": {
        "Surf": [
            {pokemon: "Golbat", min_level: 41, max_level: 44, chance: 80},
            {pokemon: "Golduck", min_level: 41, max_level: 44, chance: 20},
        ],
        "Ambush": [
            {pokemon: "Alolan Dugtrio", min_level: 41, max_level: 44, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 44, chance: 50},
            {pokemon: "Barboach", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 44, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 44, chance: 59},
            {pokemon: "Barboach", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 44, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 44, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 44, chance: 10},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 44, chance: 59},
            {pokemon: "Whiscash", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 44, chance: 1},
        ]
    },
    "Vast Poni Canyon (Area 1)": {
        "Walk": [
            {pokemon: "Machoke", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Lycanroc", min_level: 41, max_level: 44, chance: 20, time: ["Day"]},
            {pokemon: "Lycanroc (Midnight)", min_level: 41, max_level: 44, chance: 20, time: ["Night"]},
            {pokemon: "Carbink", min_level: 41, max_level: 44, chance: 15},
            {pokemon: "Boldore", min_level: 41, max_level: 44, chance: 10},
            {pokemon: "Murkrow", min_level: 41, max_level: 44, chance: 10},
            {pokemon: "Skarmory", min_level: 41, max_level: 44, chance: 10},
            {pokemon: "Jangmo-o", min_level: 41, max_level: 44, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Hakamo-o", min_level: 41, max_level: 44, chance: 5},
            {pokemon: "Kommo-o", min_level: 41, max_level: 44, chance: 5},
        ]
    },
    "Vast Poni Canyon (Area 2)": {
        "Walk": [
            {pokemon: "Boldore", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Golbat", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Alolan Dugtrio", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Carbink", min_level: 41, max_level: 44, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Sableye", min_level: 41, max_level: 44, chance: 20},
        ]
    },
    "Verdant Cavern": {
        "Static": [
            {pokemon: "Pheromosa", min_level: 60, max_level: 60, chance: 100, version: "Moon"},
        ]
    },
    "Verdant Cavern (Trial Site)": {
        "Walk": [
            {pokemon: "Zubat", min_level: 8, max_level: 11, chance: 70},
            {pokemon: "Alolan Diglett", min_level: 8, max_level: 11, chance: 30},
        ],
        "Ambush": [
            {pokemon: "Alolan Rattata", min_level: 11, max_level: 11, chance: 100, version: "Moon"},
            {pokemon: "Yungoos", min_level: 11, max_level: 11, chance: 100, version: "Sun"},
        ]
    },
    "Wela Volcano Park": {
        "Walk": [
            {pokemon: "Fletchling", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Salandit", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Cubone", min_level: 16, max_level: 19, chance: 24},
            {pokemon: "Magby", min_level: 16, max_level: 19, chance: 15},
            {pokemon: "Kangaskhan", min_level: 16, max_level: 19, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Kangaskhan", min_level: 16, max_level: 19, chance: 24},
            {pokemon: "Magmar", min_level: 16, max_level: 19, chance: 15},
        ],
        "Static": [
            {pokemon: "Nihilego", min_level: 55, max_level: 55, chance: 100},
        ]
    }
};
