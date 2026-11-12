export const encounters = {
    "Akala Outskirts": {
        "Walk": [
            {pokemon: "Wingull", min_level: 21, max_level: 24, chance: 50, time: ["Night"]},
            {pokemon: "Wingull", min_level: 21, max_level: 24, chance: 30, time: ["Day"]},
            {pokemon: "Alolan Raticate", min_level: 21, max_level: 24, chance: 20, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 21, max_level: 24, chance: 20, time: ["Day"]},
            {pokemon: "Natu", min_level: 21, max_level: 24, chance: 20, time: ["Day"]},
            {pokemon: "Nosepass", min_level: 21, max_level: 24, chance: 15},
            {pokemon: "Stufful", min_level: 21, max_level: 24, chance: 15},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 29, chance: 40},
            {pokemon: "Chinchou", min_level: 10, max_level: 29, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 29, chance: 25},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 24, chance: 55},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 24, chance: 40},
            {pokemon: "Chinchou", min_level: 10, max_level: 24, chance: 5},
        ],
        "Island Scan": [
            {pokemon: "Honedge", min_level: 24, max_level: 24, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Xatu", min_level: 21, max_level: 24, chance: 20, time: ["Day"]},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 29, chance: 40},
            {pokemon: "Lanturn", min_level: 10, max_level: 29, chance: 35},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 24, chance: 55},
            {pokemon: "Lanturn", min_level: 10, max_level: 24, chance: 5},
        ]
    },
    "Ancient Poni Path": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Furfrou", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Granbull", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Inkay", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Gastrodon", min_level: 41, max_level: 44, chance: 10},
        ],
        "Gift": [
            {pokemon: "Type: Null", min_level: 60, max_level: 60, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Delphox", min_level: 44, max_level: 44, chance: 100},
        ]
    },
    "Berry Fields": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 7, max_level: 10, chance: 100},
        ]
    },
    "Blush Mountain": {
        "Walk": [
            {pokemon: "Alolan Graveler", min_level: 29, max_level: 32, chance: 20},
            {pokemon: "Mudbray", min_level: 29, max_level: 32, chance: 20},
            {pokemon: "Torkoal", min_level: 29, max_level: 32, chance: 20, version: "Ultra Moon"},
            {pokemon: "Charjabug", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Dedenne", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Elekid", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Togedemaru", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Torkoal", min_level: 29, max_level: 32, chance: 10, version: "Ultra Sun"},
            {pokemon: "Turtonator", min_level: 29, max_level: 32, chance: 10, version: "Ultra Sun"},
        ],
        "Island Scan": [
            {pokemon: "Rhyhorn", min_level: 32, max_level: 32, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Mudsdale", min_level: 29, max_level: 32, chance: 20},
            {pokemon: "Dedenne", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Electabuzz", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Grubbin", min_level: 29, max_level: 32, chance: 10, time: ["Day"]},
            {pokemon: "Happiny", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Togedemaru", min_level: 29, max_level: 32, chance: 10},
            {pokemon: "Vikavolt", min_level: 29, max_level: 32, chance: 10, time: ["Day"]},
        ]
    },
    "Brooklet Hill": {
        "Walk": [
            {pokemon: "Dewpider", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Morelull", min_level: 14, max_level: 17, chance: 20, time: ["Night"]},
            {pokemon: "Paras", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Poliwag", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Psyduck", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Surskit", min_level: 14, max_level: 17, chance: 20, time: ["Night"]},
            {pokemon: "Wingull", min_level: 14, max_level: 17, chance: 20},
        ],
        "Surf": [
            {pokemon: "Dewpider", min_level: 14, max_level: 17, chance: 40, time: ["Day"]},
            {pokemon: "Poliwag", min_level: 14, max_level: 17, chance: 40},
            {pokemon: "Surskit", min_level: 14, max_level: 17, chance: 40, time: ["Night"]},
            {pokemon: "Psyduck", min_level: 14, max_level: 17, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 21, chance: 40},
            {pokemon: "Basculin", min_level: 10, max_level: 21, chance: 25, version: "Ultra Sun"},
            {pokemon: "Basculin (Blue Striped)", min_level: 10, max_level: 21, chance: 25, version: "Ultra Moon"},
            {pokemon: "Goldeen", min_level: 10, max_level: 21, chance: 25},
            {pokemon: "Feebas", min_level: 10, max_level: 21, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 16, chance: 44},
            {pokemon: "Goldeen", min_level: 10, max_level: 16, chance: 30},
            {pokemon: "Basculin", min_level: 10, max_level: 16, chance: 25, version: "Ultra Sun"},
            {pokemon: "Basculin (Blue Striped)", min_level: 10, max_level: 16, chance: 25, version: "Ultra Moon"},
            {pokemon: "Feebas", min_level: 10, max_level: 16, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Marshtomp", min_level: 17, max_level: 17, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 21, chance: 40},
            {pokemon: "Seaking", min_level: 10, max_level: 21, chance: 25},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 16, chance: 44},
            {pokemon: "Seaking", min_level: 10, max_level: 16, chance: 30},
        ]
    },
    "Brooklet Hill (Totem's Den)": {
        "Surf": [
            {pokemon: "Finneon", min_level: 14, max_level: 17, chance: 40},
            {pokemon: "Tentacool", min_level: 14, max_level: 17, chance: 40},
            {pokemon: "Wingull", min_level: 14, max_level: 17, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 21, chance: 40},
            {pokemon: "Alomomola", min_level: 10, max_level: 21, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 21, chance: 25},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 16, chance: 55},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 16, chance: 40},
            {pokemon: "Alomomola", min_level: 10, max_level: 16, chance: 5},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 21, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 16, chance: 55},
        ]
    },
    "Diglett's Tunnel": {
        "Walk": [
            {pokemon: "Zubat", min_level: 20, max_level: 23, chance: 60},
            {pokemon: "Alolan Diglett", min_level: 20, max_level: 23, chance: 30},
            {pokemon: "Larvitar", min_level: 20, max_level: 23, chance: 10},
        ],
        "Ambush": [
            {pokemon: "Alolan Diglett", min_level: 20, max_level: 23, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Golbat", min_level: 20, max_level: 23, chance: 60},
        ]
    },
    "Dividing Peak Tunnel": {
        "Static": [
            {pokemon: "Wimpod", min_level: 17, max_level: 20, chance: 100},
        ]
    },
    "Dividing Peak Tunnel (Area 1)": {
        "Ambush": [
            {pokemon: "Kecleon", min_level: 17, max_level: 20, chance: 100},
        ]
    },
    "Dividing Peak Tunnel (Area 2)": {
        "Ambush": [
            {pokemon: "Wimpod", min_level: 17, max_level: 20, chance: 100},
        ]
    },
    "Exeggutor Island": {
        "Walk": [
            {pokemon: "Alolan Exeggutor", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Exeggcute", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Pelipper", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Tropius", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Gastrodon", min_level: 42, max_level: 45, chance: 10},
            {pokemon: "Pinsir", min_level: 42, max_level: 45, chance: 10},
        ],
        "Island Scan": [
            {pokemon: "Chesnaught", min_level: 45, max_level: 45, chance: 100},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 42, max_level: 45, chance: 0},
            {pokemon: "Sliggoo", min_level: 42, max_level: 45, chance: 0},
        ],
        "Static": [
            {pokemon: "Pinsir", min_level: 42, max_level: 42, chance: 100},
            {pokemon: "Pinsir", min_level: 43, max_level: 43, chance: 100},
        ]
    },
    "Haina Desert": {
        "Walk": [
            {pokemon: "Krokorok", min_level: 32, max_level: 35, chance: 70},
            {pokemon: "Alolan Dugtrio", min_level: 32, max_level: 35, chance: 30},
        ],
        "Ambush": [
            {pokemon: "Krokorok", min_level: 32, max_level: 35, chance: 70},
            {pokemon: "Alolan Dugtrio", min_level: 32, max_level: 35, chance: 20},
            {pokemon: "Trapinch", min_level: 32, max_level: 35, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Baltoy", min_level: 32, max_level: 35, chance: 100, version: "Ultra Moon"},
            {pokemon: "Golett", min_level: 32, max_level: 35, chance: 100, version: "Ultra Sun"},
        ],
        "SOS Encounter (Ambush)": [
            {pokemon: "Baltoy", min_level: 32, max_level: 35, chance: 100, version: "Ultra Moon"},
            {pokemon: "Golett", min_level: 32, max_level: 35, chance: 100, version: "Ultra Sun"},
        ],
        "SOS Encounter (Ambush, Weather)": [
            {pokemon: "Castform", min_level: 32, max_level: 35, chance: 0},
            {pokemon: "Gabite", min_level: 32, max_level: 35, chance: 0},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 32, max_level: 35, chance: 0},
            {pokemon: "Gabite", min_level: 32, max_level: 35, chance: 0},
        ]
    },
    "Hano Beach": {
        "Surf": [
            {pokemon: "Finneon", min_level: 22, max_level: 25, chance: 30},
            {pokemon: "Pyukumuku", min_level: 22, max_level: 25, chance: 30},
            {pokemon: "Tentacool", min_level: 22, max_level: 25, chance: 30},
            {pokemon: "Wingull", min_level: 22, max_level: 25, chance: 10},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Wingull", min_level: 22, max_level: 25, chance: 10, time: ["Night"]},
        ]
    },
    "Hano Beach (Area 1)": {
        "Ambush": [
            {pokemon: "Staryu", min_level: 22, max_level: 25, chance: 70},
            {pokemon: "Sandygast", min_level: 22, max_level: 25, chance: 30},
        ],
        "SOS Encounter (Ambush)": [
            {pokemon: "Starmie", min_level: 22, max_level: 25, chance: 70},
        ]
    },
    "Hano Beach (Area 2)": {
        "Ambush": [
            {pokemon: "Tentacool", min_level: 22, max_level: 25, chance: 100},
        ]
    },
    "Hau'oli Cemetery": {
        "Walk": [
            {pokemon: "Drifloon", min_level: 6, max_level: 9, chance: 40, time: ["Day"]},
            {pokemon: "Gastly", min_level: 6, max_level: 9, chance: 40},
            {pokemon: "Murkrow", min_level: 6, max_level: 9, chance: 40, time: ["Night"]},
            {pokemon: "Zubat", min_level: 6, max_level: 9, chance: 20},
        ],
        "Island Scan": [
            {pokemon: "Litwick", min_level: 9, max_level: 9, chance: 100},
        ]
    },
    "Hau'oli City": {
        "Island Scan": [
            {pokemon: "Scatterbug", min_level: 9, max_level: 9, chance: 100},
        ],
        "Static": [
            {pokemon: "Bewear", min_level: 28, max_level: 28, chance: 100},
            {pokemon: "Hypno", min_level: 29, max_level: 29, chance: 100},
            {pokemon: "Magearna", min_level: 50, max_level: 50, chance: 100},
        ]
    },
    "Hau'oli City (Beachfront)": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Mantyke", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Remoraid", min_level: 15, max_level: 18, chance: 20},
        ]
    },
    "Hau'oli City (Shopping District)": {
        "Static": [
            {pokemon: "Bewear", min_level: 28, max_level: 28, chance: 100},
            {pokemon: "Hypno", min_level: 29, max_level: 29, chance: 100},
        ]
    },
    "Hau'oli City (Shopping District) (Area 1)": {
        "Walk": [
            {pokemon: "Furfrou", min_level: 6, max_level: 9, chance: 25},
            {pokemon: "Abra", min_level: 6, max_level: 9, chance: 20},
            {pokemon: "Mime Jr.", min_level: 6, max_level: 9, chance: 20},
            {pokemon: "Alolan Grimer", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Alolan Meowth", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Magnemite", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Wingull", min_level: 6, max_level: 9, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 6, max_level: 9, chance: 20},
            {pokemon: "Mr. Mime", min_level: 6, max_level: 9, chance: 20},
        ]
    },
    "Hau'oli City (Shopping District) (Area 2)": {
        "Walk": [
            {pokemon: "Wingull", min_level: 6, max_level: 9, chance: 40},
            {pokemon: "Furfrou", min_level: 6, max_level: 9, chance: 15},
            {pokemon: "Abra", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Alolan Meowth", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Magnemite", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Mime Jr.", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Alolan Grimer", min_level: 6, max_level: 9, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Mr. Mime", min_level: 6, max_level: 9, chance: 10},
        ]
    },
    "Heahea Beach": {
        "Gift": [
            {pokemon: "Araquanid", min_level: 25, max_level: 25, chance: 100, version: "Ultra Moon"},
            {pokemon: "Gumshoos", min_level: 20, max_level: 20, chance: 100, version: "Ultra Sun"},
            {pokemon: "Kommo-o", min_level: 50, max_level: 50, chance: 100, version: "Ultra Moon"},
            {pokemon: "Lurantis", min_level: 30, max_level: 30, chance: 100, version: "Ultra Sun"},
            {pokemon: "Marowak", min_level: 25, max_level: 25, chance: 100, version: "Ultra Sun"},
            {pokemon: "Mimikyu", min_level: 40, max_level: 40, chance: 100},
            {pokemon: "Raticate", min_level: 20, max_level: 20, chance: 100, version: "Ultra Moon"},
            {pokemon: "Ribombee", min_level: 50, max_level: 50, chance: 100, version: "Ultra Sun"},
            {pokemon: "Salazzle", min_level: 30, max_level: 30, chance: 100, version: "Ultra Moon"},
            {pokemon: "Togedemaru", min_level: 35, max_level: 35, chance: 100, version: "Ultra Moon"},
            {pokemon: "Vikavolt", min_level: 35, max_level: 35, chance: 100, version: "Ultra Sun"},
        ]
    },
    "Heahea City": {
        "Gift": [
            {pokemon: "Pikachu", min_level: 40, max_level: 40, chance: 100},
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
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Mantyke", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Shellder", min_level: 10, max_level: 22, chance: 35},
            {pokemon: "Magikarp", min_level: 10, max_level: 22, chance: 25},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 22, chance: 25},
            {pokemon: "Remoraid", min_level: 10, max_level: 22, chance: 15},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 17, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 17, chance: 35},
            {pokemon: "Remoraid", min_level: 10, max_level: 17, chance: 25},
            {pokemon: "Shellder", min_level: 10, max_level: 17, chance: 5},
        ],
        "Island Scan": [
            {pokemon: "Horsea", min_level: 18, max_level: 18, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Slowbro", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Slowking", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Shelgon", min_level: 15, max_level: 18, chance: 10},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 22, chance: 25},
            {pokemon: "Octillery", min_level: 10, max_level: 22, chance: 15},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 17, chance: 35},
            {pokemon: "Octillery", min_level: 10, max_level: 17, chance: 25},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Remoraid", min_level: 15, max_level: 18, chance: 20},
        ]
    },
    "Konikoni City": {
        "Static": [
            {pokemon: "Ditto", min_level: 29, max_level: 29, chance: 100},
        ]
    },
    "Lake of the Moone": {
        "Gift": [
            {pokemon: "Cosmog", min_level: 5, max_level: 5, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Lake of the Sunne": {
        "Gift": [
            {pokemon: "Cosmog", min_level: 5, max_level: 5, chance: 100, version: "Ultra Sun"},
        ]
    },
    "Lush Jungle": {
        "Ambush": [
            {pokemon: "Steenee", min_level: 19, max_level: 22, chance: 70},
            {pokemon: "Oranguru", min_level: 19, max_level: 22, chance: 30, version: "Ultra Moon"},
            {pokemon: "Passimian", min_level: 19, max_level: 22, chance: 30, version: "Ultra Sun"},
        ],
        "SOS Encounter (Ambush)": [
            {pokemon: "Trumbeak", min_level: 19, max_level: 22, chance: 30},
        ],
        "SOS Encounter (Ambush, Weather)": [
            {pokemon: "Castform", min_level: 19, max_level: 22, chance: 0},
            {pokemon: "Goomy", min_level: 19, max_level: 22, chance: 0},
        ]
    },
    "Lush Jungle (Area 1)": {
        "Walk": [
            {pokemon: "Trumbeak", min_level: 19, max_level: 22, chance: 21, time: ["Day"]},
            {pokemon: "Fomantis", min_level: 19, max_level: 22, chance: 20},
            {pokemon: "Hoothoot", min_level: 19, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Bonsly", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Comfey", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Metapod", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Morelull", min_level: 19, max_level: 22, chance: 10, time: ["Night"]},
            {pokemon: "Paras", min_level: 19, max_level: 22, chance: 10, time: ["Day"]},
            {pokemon: "Steenee", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Oranguru", min_level: 19, max_level: 22, chance: 5, version: "Ultra Moon"},
            {pokemon: "Passimian", min_level: 19, max_level: 22, chance: 5, version: "Ultra Sun"},
            {pokemon: "Pinsir", min_level: 19, max_level: 22, chance: 4},
            {pokemon: "Trumbeak", min_level: 19, max_level: 22, chance: 1, time: ["Night"]},
        ],
        "SOS Encounter": [
            {pokemon: "Noctowl", min_level: 19, max_level: 22, chance: 20, time: ["Night"]},
            {pokemon: "Butterfree", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Caterpie", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Happiny", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Sudowoodo", min_level: 19, max_level: 22, chance: 10},
            {pokemon: "Trumbeak", min_level: 19, max_level: 22, chance: 5},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 19, max_level: 22, chance: 0},
            {pokemon: "Goomy", min_level: 19, max_level: 22, chance: 0},
        ]
    },
    "Lush Jungle (Area 2)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 41, max_level: 44, chance: 39},
            {pokemon: "Alolan Dugtrio", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Salandit", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Larvesta", min_level: 41, max_level: 44, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Crobat", min_level: 41, max_level: 44, chance: 39},
            {pokemon: "Salazzle", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Volcarona", min_level: 41, max_level: 44, chance: 1},
        ]
    },
    "Mahalo Trail": {
        "Gift": [
            {pokemon: "Lunala", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Solgaleo", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
        ],
        "Static": [
            {pokemon: "Lunala", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Solgaleo", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
        ]
    },
    "Malie City (Outer Cape)": {
        "Walk": [
            {pokemon: "Alolan Grimer", min_level: 25, max_level: 28, chance: 30},
            {pokemon: "Trubbish", min_level: 25, max_level: 28, chance: 30},
            {pokemon: "Magnemite", min_level: 25, max_level: 28, chance: 20},
            {pokemon: "Minccino", min_level: 25, max_level: 28, chance: 20},
        ]
    },
    "Malie Garden": {
        "Walk": [
            {pokemon: "Alolan Meowth", min_level: 25, max_level: 28, chance: 20},
            {pokemon: "Araquanid", min_level: 25, max_level: 28, chance: 20, time: ["Day"]},
            {pokemon: "Ariados", min_level: 25, max_level: 28, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 25, max_level: 28, chance: 20, time: ["Day"]},
            {pokemon: "Masquerain", min_level: 25, max_level: 28, chance: 20, time: ["Night"]},
            {pokemon: "Poliwhirl", min_level: 25, max_level: 28, chance: 20},
            {pokemon: "Cottonee", min_level: 25, max_level: 28, chance: 10, version: "Ultra Sun"},
            {pokemon: "Petilil", min_level: 25, max_level: 28, chance: 10, version: "Ultra Moon"},
            {pokemon: "Psyduck", min_level: 25, max_level: 28, chance: 10},
        ],
        "Bubbling Spots": [
            {pokemon: "Gyarados", min_level: 10, max_level: 33, chance: 35},
            {pokemon: "Magikarp", min_level: 10, max_level: 33, chance: 30},
            {pokemon: "Goldeen", min_level: 10, max_level: 33, chance: 20},
            {pokemon: "Basculin", min_level: 10, max_level: 33, chance: 15, version: "Ultra Sun"},
            {pokemon: "Basculin (Blue Striped)", min_level: 10, max_level: 33, chance: 15, version: "Ultra Moon"},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 28, chance: 40},
            {pokemon: "Goldeen", min_level: 10, max_level: 28, chance: 30},
            {pokemon: "Basculin", min_level: 10, max_level: 28, chance: 25, version: "Ultra Sun"},
            {pokemon: "Basculin (Blue Striped)", min_level: 10, max_level: 28, chance: 25, version: "Ultra Moon"},
            {pokemon: "Gyarados", min_level: 10, max_level: 28, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Alolan Persian", min_level: 25, max_level: 28, chance: 20},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 33, chance: 30},
            {pokemon: "Seaking", min_level: 10, max_level: 33, chance: 20},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 28, chance: 40},
            {pokemon: "Seaking", min_level: 10, max_level: 28, chance: 30},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 25, max_level: 28, chance: 0},
            {pokemon: "Politoed", min_level: 25, max_level: 28, chance: 0, time: ["Night"]},
            {pokemon: "Poliwhirl", min_level: 25, max_level: 28, chance: 0},
            {pokemon: "Poliwrath", min_level: 25, max_level: 28, chance: 0, time: ["Day"]},
        ]
    },
    "Melemele Meadow": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 9, max_level: 12, chance: 20, version: "Ultra Sun"},
            {pokemon: "Cutiefly", min_level: 9, max_level: 12, chance: 20, version: "Ultra Sun"},
            {pokemon: "Cutiefly", min_level: 10, max_level: 12, chance: 20, version: "Ultra Moon"},
            {pokemon: "Flabébé", min_level: 9, max_level: 12, chance: 20, version: "Ultra Sun"},
            {pokemon: "Flabébé", min_level: 10, max_level: 12, chance: 20, version: "Ultra Moon"},
            {pokemon: "Oricorio (Pom Pom)", min_level: 9, max_level: 12, chance: 20, version: "Ultra Sun"},
            {pokemon: "Oricorio (Pom Pom)", min_level: 10, max_level: 12, chance: 20, version: "Ultra Moon"},
            {pokemon: "Petilil", min_level: 10, max_level: 12, chance: 20, version: "Ultra Moon"},
            {pokemon: "Caterpie", min_level: 9, max_level: 12, chance: 10, version: "Ultra Sun"},
            {pokemon: "Caterpie", min_level: 10, max_level: 12, chance: 10, version: "Ultra Moon"},
            {pokemon: "Metapod", min_level: 9, max_level: 12, chance: 9, version: "Ultra Sun"},
            {pokemon: "Metapod", min_level: 10, max_level: 12, chance: 9, version: "Ultra Moon"},
            {pokemon: "Butterfree", min_level: 9, max_level: 12, chance: 1, version: "Ultra Sun"},
            {pokemon: "Butterfree", min_level: 10, max_level: 12, chance: 1, version: "Ultra Moon"},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 9, max_level: 12, chance: 24, version: "Ultra Sun", time: ["Night"]},
            {pokemon: "Flabébé", min_level: 9, max_level: 12, chance: 20, version: "Ultra Sun"},
            {pokemon: "Flabébé", min_level: 10, max_level: 12, chance: 20, version: "Ultra Moon"},
            {pokemon: "Butterfree", min_level: 9, max_level: 12, chance: 19, version: "Ultra Sun", time: ["Day"]},
            {pokemon: "Butterfree", min_level: 10, max_level: 12, chance: 19, version: "Ultra Moon"},
            {pokemon: "Caterpie", min_level: 9, max_level: 12, chance: 14, version: "Ultra Sun", time: ["Day"]},
            {pokemon: "Caterpie", min_level: 9, max_level: 12, chance: 9, version: "Ultra Sun", time: ["Night"]},
            {pokemon: "Caterpie", min_level: 10, max_level: 12, chance: 9, version: "Ultra Moon"},
        ]
    },
    "Melemele Sea": {
        "Surf": [
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Mantyke", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Luvdisc", min_level: 10, max_level: 17, chance: 25},
            {pokemon: "Magikarp", min_level: 10, max_level: 17, chance: 25},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 17, chance: 25},
            {pokemon: "Remoraid", min_level: 10, max_level: 17, chance: 15},
            {pokemon: "Clamperl", min_level: 10, max_level: 17, chance: 5},
            {pokemon: "Corsola", min_level: 10, max_level: 17, chance: 5},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 17, chance: 25},
            {pokemon: "Octillery", min_level: 10, max_level: 17, chance: 15},
            {pokemon: "Gorebyss", min_level: 10, max_level: 17, chance: 5, time: ["Day"]},
            {pokemon: "Huntail", min_level: 10, max_level: 17, chance: 5, time: ["Night"]},
            {pokemon: "Mareanie", min_level: 10, max_level: 17, chance: 5},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Remoraid", min_level: 15, max_level: 18, chance: 20},
        ]
    },
    "Melemele Sea (Area 1)": {
        "Bubbling Spots": [
            {pokemon: "Clamperl", min_level: 10, max_level: 22, chance: 35},
            {pokemon: "Luvdisc", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Magikarp", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Corsola", min_level: 10, max_level: 22, chance: 5},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gorebyss", min_level: 10, max_level: 22, chance: 35, time: ["Day"]},
            {pokemon: "Huntail", min_level: 10, max_level: 22, chance: 35, time: ["Night"]},
            {pokemon: "Gyarados", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Octillery", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Mareanie", min_level: 10, max_level: 22, chance: 5},
        ]
    },
    "Melemele Sea (Area 2)": {
        "Bubbling Spots": [
            {pokemon: "Corsola", min_level: 10, max_level: 22, chance: 35},
            {pokemon: "Luvdisc", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Magikarp", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Remoraid", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Clamperl", min_level: 10, max_level: 22, chance: 5},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Mareanie", min_level: 10, max_level: 22, chance: 35},
            {pokemon: "Gyarados", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Octillery", min_level: 10, max_level: 22, chance: 15},
            {pokemon: "Gorebyss", min_level: 10, max_level: 22, chance: 5, time: ["Day"]},
            {pokemon: "Huntail", min_level: 10, max_level: 22, chance: 5, time: ["Night"]},
        ]
    },
    "Memorial Hill": {
        "Walk": [
            {pokemon: "Gastly", min_level: 21, max_level: 24, chance: 50},
            {pokemon: "Phantump", min_level: 21, max_level: 24, chance: 30},
            {pokemon: "Zubat", min_level: 21, max_level: 24, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Golbat", min_level: 21, max_level: 24, chance: 20},
        ]
    },
    "Mount Hokulani": {
        "Island Scan": [
            {pokemon: "Axew", min_level: 30, max_level: 30, chance: 100},
        ]
    },
    "Mount Hokulani (Area 1)": {
        "Walk": [
            {pokemon: "Minior", min_level: 27, max_level: 30, chance: 40, time: ["Day"]},
            {pokemon: "Elgyem", min_level: 27, max_level: 30, chance: 30, time: ["Day"]},
            {pokemon: "Minior", min_level: 27, max_level: 30, chance: 30, time: ["Night"]},
            {pokemon: "Beldum", min_level: 27, max_level: 30, chance: 20},
            {pokemon: "Cleffa", min_level: 27, max_level: 30, chance: 20, time: ["Night"]},
            {pokemon: "Elgyem", min_level: 27, max_level: 30, chance: 20, time: ["Night"]},
            {pokemon: "Ditto", min_level: 27, max_level: 30, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Clefairy", min_level: 27, max_level: 30, chance: 20, time: ["Night"]},
            {pokemon: "Happiny", min_level: 27, max_level: 30, chance: 20, time: ["Night"]},
        ]
    },
    "Mount Hokulani (Area 2)": {
        "Walk": [
            {pokemon: "Fearow", min_level: 27, max_level: 30, chance: 30, time: ["Day"]},
            {pokemon: "Cleffa", min_level: 27, max_level: 30, chance: 20, time: ["Night"]},
            {pokemon: "Elgyem", min_level: 27, max_level: 30, chance: 20},
            {pokemon: "Beldum", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Ditto", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Elekid", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Fearow", min_level: 27, max_level: 30, chance: 10, time: ["Night"]},
            {pokemon: "Minior", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Skarmory", min_level: 27, max_level: 30, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 27, max_level: 30, chance: 30, time: ["Night"]},
            {pokemon: "Clefairy", min_level: 27, max_level: 30, chance: 20, time: ["Night"]},
            {pokemon: "Electabuzz", min_level: 27, max_level: 30, chance: 10},
            {pokemon: "Happiny", min_level: 27, max_level: 30, chance: 10, time: ["Day"]},
        ]
    },
    "Mount Lanakila": {
        "Static": [
            {pokemon: "Necrozma", min_level: 65, max_level: 65, chance: 100},
        ]
    },
    "Mount Lanakila (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Sandshrew", min_level: 30, max_level: 33, chance: 30, version: "Ultra Moon"},
            {pokemon: "Alolan Vulpix", min_level: 30, max_level: 33, chance: 30, version: "Ultra Sun"},
            {pokemon: "Snorunt", min_level: 30, max_level: 33, chance: 30},
            {pokemon: "Absol", min_level: 30, max_level: 33, chance: 20},
            {pokemon: "Alolan Raticate", min_level: 30, max_level: 33, chance: 20, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 30, max_level: 33, chance: 20, time: ["Day"]},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 30, max_level: 33, chance: 0},
            {pokemon: "Vanillite", min_level: 30, max_level: 33, chance: 0},
        ]
    },
    "Mount Lanakila (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Sandshrew", min_level: 47, max_level: 50, chance: 30, version: "Ultra Moon"},
            {pokemon: "Alolan Vulpix", min_level: 47, max_level: 50, chance: 30, version: "Ultra Sun"},
            {pokemon: "Glalie", min_level: 47, max_level: 50, chance: 30},
            {pokemon: "Absol", min_level: 47, max_level: 50, chance: 20},
            {pokemon: "Sneasel", min_level: 47, max_level: 50, chance: 20},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 47, max_level: 50, chance: 0},
            {pokemon: "Vanillish", min_level: 47, max_level: 50, chance: 0},
            {pokemon: "Vanilluxe", min_level: 47, max_level: 50, chance: 0},
        ]
    },
    "Mount Lanakila (Area 3)": {
        "Walk": [
            {pokemon: "Alolan Sandshrew", min_level: 48, max_level: 51, chance: 30, version: "Ultra Moon"},
            {pokemon: "Alolan Vulpix", min_level: 48, max_level: 51, chance: 30, version: "Ultra Sun"},
            {pokemon: "Glalie", min_level: 48, max_level: 51, chance: 30},
            {pokemon: "Absol", min_level: 48, max_level: 51, chance: 20},
            {pokemon: "Sneasel", min_level: 48, max_level: 51, chance: 20},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 48, max_level: 51, chance: 0},
            {pokemon: "Vanillish", min_level: 48, max_level: 51, chance: 0},
            {pokemon: "Vanilluxe", min_level: 48, max_level: 51, chance: 0},
        ]
    },
    "Mount Lanakila (Area 4)": {
        "Walk": [
            {pokemon: "Glalie", min_level: 48, max_level: 51, chance: 30},
            {pokemon: "Golbat", min_level: 48, max_level: 51, chance: 30},
            {pokemon: "Absol", min_level: 48, max_level: 51, chance: 20, version: "Ultra Sun"},
            {pokemon: "Sneasel", min_level: 48, max_level: 51, chance: 20},
            {pokemon: "Absol", min_level: 48, max_level: 51, chance: 10, version: "Ultra Moon"},
            {pokemon: "Drampa", min_level: 48, max_level: 51, chance: 10, version: "Ultra Moon"},
        ]
    },
    "Mount Lanakila (Area 5)": {
        "Walk": [
            {pokemon: "Glalie", min_level: 47, max_level: 50, chance: 30},
            {pokemon: "Golbat", min_level: 47, max_level: 50, chance: 30},
            {pokemon: "Absol", min_level: 47, max_level: 50, chance: 20, version: "Ultra Sun"},
            {pokemon: "Sneasel", min_level: 47, max_level: 50, chance: 20},
            {pokemon: "Absol", min_level: 47, max_level: 50, chance: 10, version: "Ultra Moon"},
            {pokemon: "Drampa", min_level: 47, max_level: 50, chance: 10, version: "Ultra Moon"},
        ]
    },
    "Paniola Ranch": {
        "Walk": [
            {pokemon: "Mudbray", min_level: 12, max_level: 15, chance: 40},
            {pokemon: "Mareep", min_level: 12, max_level: 15, chance: 30},
            {pokemon: "Lillipup", min_level: 12, max_level: 15, chance: 20},
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
            {pokemon: "Barboach", min_level: 10, max_level: 22, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 22, chance: 40},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 17, chance: 90},
            {pokemon: "Barboach", min_level: 10, max_level: 17, chance: 10},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Whiscash", min_level: 10, max_level: 22, chance: 60},
            {pokemon: "Gyarados", min_level: 10, max_level: 22, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 17, chance: 90},
            {pokemon: "Whiscash", min_level: 10, max_level: 17, chance: 10},
        ]
    },
    "Poké Pelago": {
        "Gift": [
            {pokemon: "Banette", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Banette", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Comfey", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Comfey", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Comfey", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Corsola", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Corsola", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Corsola", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Cutiefly", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Cutiefly", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Cutiefly", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Electrike", min_level: 37, max_level: 43, chance: 100, version: "Ultra Moon"},
            {pokemon: "Electrike", min_level: 49, max_level: 55, chance: 100, version: "Ultra Moon"},
            {pokemon: "Flaaffy", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Flaaffy", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Flaaffy", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Hawlucha", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Hawlucha", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Hawlucha", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Honchkrow", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Hoothoot", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Hoothoot", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Hoothoot", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Houndour", min_level: 37, max_level: 43, chance: 100, version: "Ultra Sun"},
            {pokemon: "Houndour", min_level: 49, max_level: 55, chance: 100, version: "Ultra Sun"},
            {pokemon: "Jynx", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Jynx", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Jynx", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Lapras", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Lapras", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Litleo", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Misdreavus", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Misdreavus", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Mr. Mime", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Mr. Mime", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Mr. Mime", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Natu", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Natu", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Natu", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Pikipek", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Pikipek", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Pikipek", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Pinsir", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Pinsir", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Pinsir", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Pyukumuku", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Pyukumuku", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Pyukumuku", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Seel", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Seel", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Seel", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Slowpoke", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Slowpoke", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Slowpoke", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Snubbull", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Staryu", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Staryu", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Staryu", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Tropius", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Wingull", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Wingull", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Wingull", min_level: 49, max_level: 55, chance: 100},
            {pokemon: "Zubat", min_level: 21, max_level: 27, chance: 100},
            {pokemon: "Zubat", min_level: 37, max_level: 43, chance: 100},
            {pokemon: "Zubat", min_level: 49, max_level: 55, chance: 100},
        ]
    },
    "Poni Breaker Coast": {
        "Surf": [
            {pokemon: "Tentacruel", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Lumineon", min_level: 41, max_level: 44, chance: 25},
            {pokemon: "Gastrodon", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Pelipper", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Lapras", min_level: 41, max_level: 44, chance: 5},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 49, chance: 40},
            {pokemon: "Wailmer", min_level: 10, max_level: 49, chance: 30},
            {pokemon: "Carvanha", min_level: 10, max_level: 49, chance: 20},
            {pokemon: "Relicanth", min_level: 10, max_level: 49, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 44, chance: 49},
            {pokemon: "Wailmer", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Carvanha", min_level: 10, max_level: 44, chance: 10},
            {pokemon: "Relicanth", min_level: 10, max_level: 44, chance: 1},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 49, chance: 40},
            {pokemon: "Wailord", min_level: 10, max_level: 49, chance: 30},
            {pokemon: "Sharpedo", min_level: 10, max_level: 49, chance: 20},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 44, chance: 49},
            {pokemon: "Wailord", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Sharpedo", min_level: 10, max_level: 44, chance: 10},
        ],
        "Static": [
            {pokemon: "Wimpod", min_level: 41, max_level: 44, chance: 100},
        ]
    },
    "Poni Breaker Coast (Area 1)": {
        "Ambush": [
            {pokemon: "Wailmer", min_level: 41, max_level: 44, chance: 70},
            {pokemon: "Clawitzer", min_level: 41, max_level: 44, chance: 20, version: "Ultra Sun"},
            {pokemon: "Dragalge", min_level: 41, max_level: 44, chance: 20, version: "Ultra Moon"},
            {pokemon: "Wailord", min_level: 41, max_level: 44, chance: 10},
        ]
    },
    "Poni Breaker Coast (Area 2)": {
        "Ambush": [
            {pokemon: "Wimpod", min_level: 41, max_level: 44, chance: 100},
        ]
    },
    "Poni Coast": {
        "Ambush": [
            {pokemon: "Alolan Dugtrio", min_level: 56, max_level: 59, chance: 100},
        ]
    },
    "Poni Gauntlet": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 58, max_level: 61, chance: 25},
            {pokemon: "Granbull", min_level: 58, max_level: 61, chance: 20},
            {pokemon: "Lickitung", min_level: 58, max_level: 61, chance: 20},
            {pokemon: "Inkay", min_level: 58, max_level: 61, chance: 15},
            {pokemon: "Bewear", min_level: 58, max_level: 61, chance: 10},
            {pokemon: "Golduck", min_level: 58, max_level: 61, chance: 10},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 66, chance: 50},
            {pokemon: "Barboach", min_level: 10, max_level: 66, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 66, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 61, chance: 59},
            {pokemon: "Barboach", min_level: 10, max_level: 61, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 61, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Rotom", min_level: 61, max_level: 61, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Tauros", min_level: 59, max_level: 59, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 66, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 66, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 66, chance: 10},
            {pokemon: "Dragonite", min_level: 10, max_level: 66, chance: 10},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 61, chance: 59},
            {pokemon: "Whiscash", min_level: 10, max_level: 61, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 61, chance: 1},
            {pokemon: "Dragonite", min_level: 10, max_level: 61, chance: 1},
        ]
    },
    "Poni Grove": {
        "Island Scan": [
            {pokemon: "Eelektross", min_level: 55, max_level: 55, chance: 100},
        ],
        "Static": [
            {pokemon: "Blacephalon", min_level: 65, max_level: 65, chance: 100, version: "Ultra Sun"},
            {pokemon: "Stakataka", min_level: 65, max_level: 65, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Poni Grove (Area 1)": {
        "Walk": [
            {pokemon: "Buneary", min_level: 52, max_level: 55, chance: 30, time: ["Night"]},
            {pokemon: "Trumbeak", min_level: 52, max_level: 55, chance: 30},
            {pokemon: "Buneary", min_level: 52, max_level: 55, chance: 20, time: ["Day"]},
            {pokemon: "Zoroark", min_level: 52, max_level: 55, chance: 20},
            {pokemon: "Heracross", min_level: 52, max_level: 55, chance: 10},
            {pokemon: "Pinsir", min_level: 52, max_level: 55, chance: 10},
            {pokemon: "Riolu", min_level: 52, max_level: 55, chance: 10, time: ["Day"]},
        ],
        "SOS Encounter": [
            {pokemon: "Toucannon", min_level: 52, max_level: 55, chance: 30},
            {pokemon: "Lopunny", min_level: 52, max_level: 55, chance: 20},
            {pokemon: "Happiny", min_level: 52, max_level: 55, chance: 10, time: ["Day"]},
            {pokemon: "Lucario", min_level: 52, max_level: 55, chance: 10, time: ["Day"]},
        ]
    },
    "Poni Grove (Area 2)": {
        "Walk": [
            {pokemon: "Buneary", min_level: 52, max_level: 55, chance: 30, time: ["Night"]},
            {pokemon: "Trumbeak", min_level: 52, max_level: 55, chance: 30},
            {pokemon: "Buneary", min_level: 52, max_level: 55, chance: 20, time: ["Day"]},
            {pokemon: "Zoroark", min_level: 52, max_level: 55, chance: 20},
            {pokemon: "Heracross", min_level: 52, max_level: 55, chance: 10},
            {pokemon: "Pinsir", min_level: 52, max_level: 55, chance: 10},
            {pokemon: "Riolu", min_level: 52, max_level: 55, chance: 10, time: ["Day"]},
        ],
        "SOS Encounter": [
            {pokemon: "Toucannon", min_level: 52, max_level: 55, chance: 30},
            {pokemon: "Lopunny", min_level: 52, max_level: 55, chance: 20},
            {pokemon: "Happiny", min_level: 52, max_level: 55, chance: 10, time: ["Day"]},
            {pokemon: "Lucario", min_level: 52, max_level: 55, chance: 10, time: ["Day"]},
            {pokemon: "Riolu", min_level: 52, max_level: 55, chance: 1},
        ]
    },
    "Poni Meadow": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 30, version: "Ultra Sun"},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 30, version: "Ultra Moon"},
            {pokemon: "Ribombee", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Floette", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Oricorio (Sensu)", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Ribombee", min_level: 54, max_level: 57, chance: 20, time: ["Night"]},
            {pokemon: "Misdreavus", min_level: 54, max_level: 57, chance: 10, time: ["Night"]},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 62, chance: 50},
            {pokemon: "Barboach", min_level: 10, max_level: 62, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 62, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 57, chance: 59},
            {pokemon: "Barboach", min_level: 10, max_level: 57, chance: 40},
            {pokemon: "Dratini", min_level: 10, max_level: 57, chance: 1},
        ],
        "Island Scan": [
            {pokemon: "Leavanny", min_level: 57, max_level: 57, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Floette", min_level: 54, max_level: 57, chance: 20},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 62, chance: 50},
            {pokemon: "Whiscash", min_level: 10, max_level: 62, chance: 40},
            {pokemon: "Dragonair", min_level: 10, max_level: 62, chance: 10},
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
            {pokemon: "Aggron", min_level: 57, max_level: 57, chance: 100},
        ]
    },
    "Poni Plains (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Ultra Sun"},
            {pokemon: "Pelipper", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Ultra Moon"},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Toucannon", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Plains (Area 2)": {
        "Ambush": [
            {pokemon: "Primeape", min_level: 54, max_level: 57, chance: 60},
            {pokemon: "Aipom", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Emolga", min_level: 54, max_level: 57, chance: 20},
        ],
        "SOS Encounter (Ambush)": [
            {pokemon: "Ambipom", min_level: 54, max_level: 57, chance: 20},
        ]
    },
    "Poni Plains (Area 3)": {
        "Ambush": [
            {pokemon: "Fearow", min_level: 54, max_level: 57, chance: 70},
            {pokemon: "Braviary", min_level: 54, max_level: 57, chance: 30, version: "Ultra Sun"},
            {pokemon: "Mandibuzz", min_level: 54, max_level: 57, chance: 30, version: "Ultra Moon"},
        ]
    },
    "Poni Plains (Area 4)": {
        "Ambush": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 70, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 70, time: ["Day"]},
            {pokemon: "Pyroar", min_level: 54, max_level: 57, chance: 30},
        ]
    },
    "Poni Plains (Area 5)": {
        "Ambush": [
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 50, version: "Ultra Sun"},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 50, version: "Ultra Moon"},
            {pokemon: "Scyther", min_level: 54, max_level: 57, chance: 30},
            {pokemon: "Chansey", min_level: 54, max_level: 57, chance: 20},
        ],
        "SOS Encounter (Ambush)": [
            {pokemon: "Blissey", min_level: 54, max_level: 57, chance: 20},
        ]
    },
    "Poni Plains (Area 6)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 30},
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Ultra Sun"},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Ultra Moon"},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Toucannon", min_level: 54, max_level: 57, chance: 30},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Plains (Area 7)": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 30, time: ["Day"]},
            {pokemon: "Hariyama", min_level: 54, max_level: 57, chance: 20, time: ["Day"]},
            {pokemon: "Hypno", min_level: 54, max_level: 57, chance: 20, time: ["Night"]},
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 10, version: "Ultra Sun"},
            {pokemon: "Hariyama", min_level: 54, max_level: 57, chance: 10, time: ["Night"]},
            {pokemon: "Hypno", min_level: 54, max_level: 57, chance: 10, time: ["Day"]},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 10, version: "Ultra Moon"},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Toucannon", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Plains (Area 8)": {
        "Walk": [
            {pokemon: "Cottonee", min_level: 54, max_level: 57, chance: 20, version: "Ultra Sun"},
            {pokemon: "Fearow", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Mudsdale", min_level: 54, max_level: 57, chance: 20},
            {pokemon: "Petilil", min_level: 54, max_level: 57, chance: 20, version: "Ultra Moon"},
            {pokemon: "Alolan Raticate", min_level: 54, max_level: 57, chance: 10, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 54, max_level: 57, chance: 10, time: ["Day"]},
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Trumbeak", min_level: 54, max_level: 57, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Miltank", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Tauros", min_level: 54, max_level: 57, chance: 10},
            {pokemon: "Toucannon", min_level: 54, max_level: 57, chance: 10},
        ]
    },
    "Poni Wilds": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 41, max_level: 44, chance: 30},
            {pokemon: "Furfrou", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Granbull", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Inkay", min_level: 41, max_level: 44, chance: 20},
            {pokemon: "Gastrodon", min_level: 41, max_level: 44, chance: 10},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 41, max_level: 44, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Greninja", min_level: 44, max_level: 44, chance: 100},
        ]
    },
    "Resolution Cave": {
        "Static": [
            {pokemon: "Zygarde", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Resolution Cave (Area 1)": {
        "Walk": [
            {pokemon: "Golbat", min_level: 56, max_level: 59, chance: 40},
            {pokemon: "Alolan Dugtrio", min_level: 56, max_level: 59, chance: 30},
            {pokemon: "Druddigon", min_level: 56, max_level: 59, chance: 15},
            {pokemon: "Noivern", min_level: 56, max_level: 59, chance: 15},
        ],
        "SOS Encounter": [
            {pokemon: "Crobat", min_level: 56, max_level: 59, chance: 40},
            {pokemon: "Golbat", min_level: 56, max_level: 59, chance: 1, time: ["Night"]},
        ]
    },
    "Resolution Cave (Area 2)": {
        "Walk": [
            {pokemon: "Noivern", min_level: 56, max_level: 59, chance: 40},
            {pokemon: "Alolan Dugtrio", min_level: 56, max_level: 59, chance: 20},
            {pokemon: "Druddigon", min_level: 56, max_level: 59, chance: 20},
            {pokemon: "Golbat", min_level: 56, max_level: 59, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Crobat", min_level: 56, max_level: 59, chance: 10},
        ]
    },
    "Route 1": {
        "Gift": [
            {pokemon: "Litten", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Popplio", min_level: 5, max_level: 5, chance: 100},
            {pokemon: "Rowlet", min_level: 5, max_level: 5, chance: 100},
        ]
    },
    "Route 1 (Area 1)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 2, max_level: 3, chance: 20, time: ["Night"]},
            {pokemon: "Ledyba", min_level: 2, max_level: 3, chance: 20, time: ["Day"]},
            {pokemon: "Pikipek", min_level: 2, max_level: 3, chance: 20},
            {pokemon: "Spinarak", min_level: 2, max_level: 3, chance: 20, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 2, max_level: 3, chance: 20, time: ["Day"]},
            {pokemon: "Grubbin", min_level: 2, max_level: 3, chance: 15},
            {pokemon: "Buneary", min_level: 2, max_level: 3, chance: 10},
            {pokemon: "Caterpie", min_level: 2, max_level: 3, chance: 10},
            {pokemon: "Pichu", min_level: 2, max_level: 3, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 2, max_level: 3, chance: 5},
            {pokemon: "Pikachu", min_level: 2, max_level: 3, chance: 5},
        ]
    },
    "Route 1 (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 2, max_level: 3, chance: 35, time: ["Night"]},
            {pokemon: "Caterpie", min_level: 2, max_level: 3, chance: 35},
            {pokemon: "Yungoos", min_level: 2, max_level: 3, chance: 35, time: ["Day"]},
            {pokemon: "Buneary", min_level: 2, max_level: 3, chance: 30},
        ]
    },
    "Route 1 (Area 3)": {
        "Walk": [
            {pokemon: "Bonsly", min_level: 11, max_level: 14, chance: 30},
            {pokemon: "Alolan Rattata", min_level: 11, max_level: 14, chance: 20, time: ["Night"]},
            {pokemon: "Pikipek", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Rockruff", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Yungoos", min_level: 11, max_level: 14, chance: 20, time: ["Day"]},
            {pokemon: "Munchlax", min_level: 11, max_level: 14, chance: 10},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 11, max_level: 14, chance: 40},
            {pokemon: "Sudowoodo", min_level: 11, max_level: 14, chance: 30},
            {pokemon: "Snorlax", min_level: 11, max_level: 14, chance: 10},
        ]
    },
    "Route 1 (Area 4)": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 2, max_level: 4, chance: 20, time: ["Night"]},
            {pokemon: "Ledyba", min_level: 2, max_level: 4, chance: 20, time: ["Day"]},
            {pokemon: "Pikipek", min_level: 2, max_level: 4, chance: 20},
            {pokemon: "Spinarak", min_level: 2, max_level: 4, chance: 20, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 2, max_level: 4, chance: 20, time: ["Day"]},
            {pokemon: "Grubbin", min_level: 2, max_level: 4, chance: 15},
            {pokemon: "Buneary", min_level: 2, max_level: 4, chance: 10},
            {pokemon: "Caterpie", min_level: 2, max_level: 4, chance: 10},
            {pokemon: "Pichu", min_level: 2, max_level: 4, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 2, max_level: 4, chance: 5},
            {pokemon: "Pikachu", min_level: 2, max_level: 4, chance: 5},
        ]
    },
    "Route 1 (Hau'oli Outskirts)": {
        "Walk": [
            {pokemon: "Wingull", min_level: 4, max_level: 7, chance: 50},
            {pokemon: "Inkay", min_level: 4, max_level: 7, chance: 30},
            {pokemon: "Slowpoke", min_level: 4, max_level: 7, chance: 20},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 15, max_level: 18, chance: 40},
            {pokemon: "Finneon", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Mantyke", min_level: 15, max_level: 18, chance: 20},
            {pokemon: "Wingull", min_level: 15, max_level: 18, chance: 20},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Remoraid", min_level: 15, max_level: 18, chance: 20},
        ]
    },
    "Route 1 (Trainers' School)": {
        "Walk": [
            {pokemon: "Alolan Meowth", min_level: 5, max_level: 8, chance: 50},
            {pokemon: "Zorua", min_level: 5, max_level: 8, chance: 30},
            {pokemon: "Alolan Grimer", min_level: 5, max_level: 8, chance: 10},
            {pokemon: "Magnemite", min_level: 5, max_level: 8, chance: 10},
        ],
        "Static": [
            {pokemon: "Drifloon", min_level: 19, max_level: 19, chance: 100},
            {pokemon: "Gastly", min_level: 19, max_level: 19, chance: 100},
        ]
    },
    "Route 2": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 8, max_level: 11, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Bulbasaur", min_level: 10, max_level: 10, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Hawlucha", min_level: 8, max_level: 8, chance: 100},
        ]
    },
    "Route 2 (Area 1)": {
        "Walk": [
            {pokemon: "Drowzee", min_level: 6, max_level: 9, chance: 20, time: ["Night"]},
            {pokemon: "Ekans", min_level: 6, max_level: 9, chance: 20},
            {pokemon: "Makuhita", min_level: 6, max_level: 9, chance: 20, time: ["Day"]},
            {pokemon: "Abra", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Alolan Meowth", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Alolan Rattata", min_level: 6, max_level: 9, chance: 10, time: ["Night"]},
            {pokemon: "Drowzee", min_level: 6, max_level: 9, chance: 10, time: ["Day"]},
            {pokemon: "Furfrou", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Makuhita", min_level: 6, max_level: 9, chance: 10, time: ["Night"]},
            {pokemon: "Smeargle", min_level: 6, max_level: 9, chance: 10},
            {pokemon: "Yungoos", min_level: 6, max_level: 9, chance: 10, time: ["Day"]},
        ]
    },
    "Route 2 (Area 2)": {
        "Ambush": [
            {pokemon: "Ekans", min_level: 7, max_level: 10, chance: 50},
            {pokemon: "Drowzee", min_level: 7, max_level: 10, chance: 30, time: ["Night"]},
            {pokemon: "Makuhita", min_level: 7, max_level: 10, chance: 30, time: ["Day"]},
            {pokemon: "Dunsparce", min_level: 7, max_level: 10, chance: 15},
            {pokemon: "Drowzee", min_level: 7, max_level: 10, chance: 5, time: ["Day"]},
            {pokemon: "Makuhita", min_level: 7, max_level: 10, chance: 5, time: ["Night"]},
        ]
    },
    "Route 2 (Area 3)": {
        "Walk": [
            {pokemon: "Drowzee", min_level: 7, max_level: 10, chance: 20, time: ["Night"]},
            {pokemon: "Ekans", min_level: 7, max_level: 10, chance: 20},
            {pokemon: "Makuhita", min_level: 7, max_level: 10, chance: 20, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 7, max_level: 10, chance: 10, time: ["Night"]},
            {pokemon: "Cutiefly", min_level: 7, max_level: 10, chance: 10},
            {pokemon: "Drowzee", min_level: 7, max_level: 10, chance: 10, time: ["Day"]},
            {pokemon: "Growlithe", min_level: 7, max_level: 10, chance: 10},
            {pokemon: "Makuhita", min_level: 7, max_level: 10, chance: 10, time: ["Night"]},
            {pokemon: "Smeargle", min_level: 7, max_level: 10, chance: 10},
            {pokemon: "Spearow", min_level: 7, max_level: 10, chance: 10},
            {pokemon: "Yungoos", min_level: 7, max_level: 10, chance: 10, time: ["Day"]},
        ]
    },
    "Route 2 (Area 4)": {
        "Ambush": [
            {pokemon: "Ekans", min_level: 8, max_level: 11, chance: 50},
            {pokemon: "Drowzee", min_level: 8, max_level: 11, chance: 30, time: ["Night"]},
            {pokemon: "Makuhita", min_level: 8, max_level: 11, chance: 30, time: ["Day"]},
            {pokemon: "Dunsparce", min_level: 8, max_level: 11, chance: 15},
            {pokemon: "Drowzee", min_level: 8, max_level: 11, chance: 5, time: ["Day"]},
            {pokemon: "Makuhita", min_level: 8, max_level: 11, chance: 5, time: ["Night"]},
        ]
    },
    "Route 2 (Area 5)": {
        "Walk": [
            {pokemon: "Cutiefly", min_level: 7, max_level: 10, chance: 30},
            {pokemon: "Spearow", min_level: 7, max_level: 10, chance: 30},
            {pokemon: "Alolan Rattata", min_level: 7, max_level: 10, chance: 20, time: ["Night"]},
            {pokemon: "Yungoos", min_level: 7, max_level: 10, chance: 20, time: ["Day"]},
            {pokemon: "Growlithe", min_level: 7, max_level: 10, chance: 10},
            {pokemon: "Smeargle", min_level: 7, max_level: 10, chance: 10},
        ]
    },
    "Route 3": {
        "Ambush": [
            {pokemon: "Spearow", min_level: 10, max_level: 13, chance: 70},
            {pokemon: "Rufflet", min_level: 10, max_level: 13, chance: 30, version: "Ultra Sun"},
            {pokemon: "Vullaby", min_level: 10, max_level: 13, chance: 30, version: "Ultra Moon"},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 10, max_level: 13, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Charmander", min_level: 12, max_level: 12, chance: 100},
        ]
    },
    "Route 3 (Area 1)": {
        "Walk": [
            {pokemon: "Cutiefly", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Mankey", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Spearow", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Hawlucha", min_level: 9, max_level: 12, chance: 10},
        ]
    },
    "Route 3 (Area 2)": {
        "Walk": [
            {pokemon: "Cutiefly", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Mankey", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Spearow", min_level: 9, max_level: 12, chance: 29},
            {pokemon: "Hawlucha", min_level: 9, max_level: 12, chance: 10},
            {pokemon: "Bagon", min_level: 9, max_level: 12, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Salamence", min_level: 9, max_level: 12, chance: 1},
        ]
    },
    "Route 4": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 11, max_level: 14, chance: 30, time: ["Night"]},
            {pokemon: "Pikipek", min_level: 11, max_level: 14, chance: 25, time: ["Night"]},
            {pokemon: "Igglybuff", min_level: 11, max_level: 14, chance: 20, time: ["Day"]},
            {pokemon: "Lillipup", min_level: 11, max_level: 14, chance: 20, time: ["Day"]},
            {pokemon: "Mudbray", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Pikipek", min_level: 11, max_level: 14, chance: 15, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 11, max_level: 14, chance: 10, time: ["Night"]},
            {pokemon: "Grubbin", min_level: 11, max_level: 14, chance: 10},
            {pokemon: "Yungoos", min_level: 11, max_level: 14, chance: 10, time: ["Day"]},
            {pokemon: "Eevee", min_level: 11, max_level: 14, chance: 5},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 11, max_level: 14, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Beedrill", min_level: 14, max_level: 14, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 11, max_level: 14, chance: 20, time: ["Day"]},
            {pokemon: "Jigglypuff", min_level: 11, max_level: 14, chance: 20, time: ["Day"]},
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
            {pokemon: "Grovyle", min_level: 16, max_level: 16, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Noibat", min_level: 19, max_level: 19, chance: 100},
        ]
    },
    "Route 5 (Area 1)": {
        "Walk": [
            {pokemon: "Fomantis", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Grubbin", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Lillipup", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Pikipek", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 10},
            {pokemon: "Metapod", min_level: 13, max_level: 16, chance: 9},
            {pokemon: "Butterfree", min_level: 13, max_level: 16, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 13, max_level: 16, chance: 19, time: ["Day"]},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 18, time: ["Night"]},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 9, time: ["Day"]},
        ]
    },
    "Route 5 (Area 2)": {
        "Walk": [
            {pokemon: "Fomantis", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Grubbin", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Lillipup", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Pikipek", min_level: 13, max_level: 16, chance: 20},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 10},
            {pokemon: "Metapod", min_level: 13, max_level: 16, chance: 9},
            {pokemon: "Butterfree", min_level: 13, max_level: 16, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 13, max_level: 16, chance: 19},
            {pokemon: "Caterpie", min_level: 13, max_level: 16, chance: 9},
        ]
    },
    "Route 5 (Area 3)": {
        "Walk": [
            {pokemon: "Fomantis", min_level: 18, max_level: 21, chance: 30},
            {pokemon: "Grubbin", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Trumbeak", min_level: 18, max_level: 21, chance: 20},
            {pokemon: "Bonsly", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Caterpie", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Metapod", min_level: 18, max_level: 21, chance: 9},
            {pokemon: "Butterfree", min_level: 18, max_level: 21, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Butterfree", min_level: 18, max_level: 21, chance: 19},
            {pokemon: "Happiny", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Sudowoodo", min_level: 18, max_level: 21, chance: 10},
            {pokemon: "Caterpie", min_level: 18, max_level: 21, chance: 5},
        ]
    },
    "Route 6": {
        "Island Scan": [
            {pokemon: "Ralts", min_level: 17, max_level: 17, chance: 100},
        ]
    },
    "Route 6 (Area 1)": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 30, time: ["Night"]},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 25, time: ["Night"]},
            {pokemon: "Igglybuff", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Mudbray", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 15, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 14, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Grubbin", min_level: 14, max_level: 17, chance: 10},
            {pokemon: "Yungoos", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Eevee", min_level: 14, max_level: 17, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Jigglypuff", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Espeon", min_level: 14, max_level: 17, chance: 5, time: ["Day"]},
            {pokemon: "Umbreon", min_level: 14, max_level: 17, chance: 5, time: ["Night"]},
        ]
    },
    "Route 6 (Area 2)": {
        "Walk": [
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 30, time: ["Night"]},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 25, time: ["Night"]},
            {pokemon: "Igglybuff", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Lillipup", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Oricorio (Pau)", min_level: 14, max_level: 17, chance: 20},
            {pokemon: "Pikipek", min_level: 14, max_level: 17, chance: 15, time: ["Day"]},
            {pokemon: "Alolan Rattata", min_level: 14, max_level: 17, chance: 10, time: ["Night"]},
            {pokemon: "Grubbin", min_level: 14, max_level: 17, chance: 10},
            {pokemon: "Yungoos", min_level: 14, max_level: 17, chance: 10, time: ["Day"]},
            {pokemon: "Eevee", min_level: 14, max_level: 17, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
            {pokemon: "Jigglypuff", min_level: 14, max_level: 17, chance: 20, time: ["Day"]},
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
            {pokemon: "Magikarp", min_level: 10, max_level: 23, chance: 45},
            {pokemon: "Staryu", min_level: 10, max_level: 23, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 23, chance: 20},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 18, chance: 55},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 18, chance: 40},
            {pokemon: "Staryu", min_level: 10, max_level: 18, chance: 5},
        ],
        "Island Scan": [
            {pokemon: "Spheal", min_level: 19, max_level: 19, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 23, chance: 45},
            {pokemon: "Starmie", min_level: 10, max_level: 23, chance: 35},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 18, chance: 55},
            {pokemon: "Starmie", min_level: 10, max_level: 18, chance: 5},
        ]
    },
    "Route 8": {
        "Walk": [
            {pokemon: "Alolan Rattata", min_level: 17, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Trumbeak", min_level: 17, max_level: 20, chance: 30},
            {pokemon: "Yungoos", min_level: 17, max_level: 20, chance: 30, time: ["Day"]},
            {pokemon: "Fletchling", min_level: 17, max_level: 20, chance: 15},
            {pokemon: "Salandit", min_level: 17, max_level: 20, chance: 15},
            {pokemon: "Stufful", min_level: 17, max_level: 20, chance: 10},
        ],
        "Surf": [
            {pokemon: "Tentacool", min_level: 17, max_level: 20, chance: 40},
            {pokemon: "Finneon", min_level: 17, max_level: 20, chance: 20},
            {pokemon: "Mantyke", min_level: 17, max_level: 20, chance: 20},
            {pokemon: "Wingull", min_level: 17, max_level: 20, chance: 20},
        ],
        "Ambush": [
            {pokemon: "Wimpod", min_level: 17, max_level: 20, chance: 100},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 17, max_level: 20, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 25, chance: 40},
            {pokemon: "Chinchou", min_level: 10, max_level: 25, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 25, chance: 20},
            {pokemon: "Remoraid", min_level: 10, max_level: 25, chance: 5},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 20, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 20, chance: 30},
            {pokemon: "Remoraid", min_level: 10, max_level: 20, chance: 15},
            {pokemon: "Chinchou", min_level: 10, max_level: 20, chance: 5},
        ],
        "Gift": [
            {pokemon: "Amaura", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Anorith", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Archen", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Cranidos", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Kabuto", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Lileep", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Omanyte", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Shieldon", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Tirtouga", min_level: 15, max_level: 15, chance: 100},
            {pokemon: "Tyrunt", min_level: 15, max_level: 15, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Combusken", min_level: 20, max_level: 20, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Arbok", min_level: 22, max_level: 22, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Alolan Raticate", min_level: 17, max_level: 20, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 17, max_level: 20, chance: 30, time: ["Day"]},
            {pokemon: "Fletchinder", min_level: 17, max_level: 20, chance: 15},
            {pokemon: "Stufful", min_level: 17, max_level: 20, chance: 1, time: ["Night"]},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 25, chance: 40},
            {pokemon: "Lanturn", min_level: 10, max_level: 25, chance: 35},
            {pokemon: "Octillery", min_level: 10, max_level: 25, chance: 5},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 20, chance: 50},
            {pokemon: "Octillery", min_level: 10, max_level: 20, chance: 15},
            {pokemon: "Lanturn", min_level: 10, max_level: 20, chance: 5},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Remoraid", min_level: 17, max_level: 20, chance: 20},
        ],
        "Static": [
            {pokemon: "Wimpod", min_level: 17, max_level: 20, chance: 100},
        ]
    },
    "Route 9": {
        "Bubbling Spots": [
            {pokemon: "Luvdisc", min_level: 10, max_level: 28, chance: 80},
            {pokemon: "Magikarp", min_level: 10, max_level: 28, chance: 10},
            {pokemon: "Corsola", min_level: 10, max_level: 28, chance: 5},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 28, chance: 5},
        ],
        "Fishing": [
            {pokemon: "Luvdisc", min_level: 10, max_level: 23, chance: 50},
            {pokemon: "Magikarp", min_level: 10, max_level: 23, chance: 20},
            {pokemon: "Corsola", min_level: 10, max_level: 23, chance: 15},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 23, chance: 15},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 28, chance: 10},
            {pokemon: "Mareanie", min_level: 10, max_level: 28, chance: 5},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 23, chance: 20},
            {pokemon: "Mareanie", min_level: 10, max_level: 23, chance: 15},
        ],
        "Static": [
            {pokemon: "Ditto", min_level: 29, max_level: 29, chance: 100},
        ]
    },
    "Route 10": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 26, max_level: 29, chance: 30, time: ["Night"]},
            {pokemon: "Fearow", min_level: 26, max_level: 29, chance: 30},
            {pokemon: "Gumshoos", min_level: 26, max_level: 29, chance: 30, time: ["Day"]},
            {pokemon: "Ariados", min_level: 26, max_level: 29, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 26, max_level: 29, chance: 20, time: ["Day"]},
            {pokemon: "Pancham", min_level: 26, max_level: 29, chance: 10},
            {pokemon: "Skarmory", min_level: 26, max_level: 29, chance: 10},
        ],
        "Ambush": [
            {pokemon: "Fearow", min_level: 26, max_level: 29, chance: 50},
            {pokemon: "Pineco", min_level: 26, max_level: 29, chance: 30},
            {pokemon: "Skarmory", min_level: 26, max_level: 29, chance: 20},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 26, max_level: 29, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Pidgeot", min_level: 29, max_level: 29, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Pangoro", min_level: 26, max_level: 29, chance: 10},
        ]
    },
    "Route 11": {
        "Walk": [
            {pokemon: "Komala", min_level: 26, max_level: 29, chance: 30},
            {pokemon: "Ariados", min_level: 26, max_level: 29, chance: 20, time: ["Night"]},
            {pokemon: "Ledian", min_level: 26, max_level: 29, chance: 20, time: ["Day"]},
            {pokemon: "Pancham", min_level: 26, max_level: 29, chance: 20},
            {pokemon: "Trumbeak", min_level: 26, max_level: 29, chance: 20},
            {pokemon: "Parasect", min_level: 26, max_level: 29, chance: 10, time: ["Day"]},
            {pokemon: "Shiinotic", min_level: 26, max_level: 29, chance: 10, time: ["Night"]},
        ],
        "Island Scan": [
            {pokemon: "Monferno", min_level: 29, max_level: 29, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Pangoro", min_level: 26, max_level: 29, chance: 20},
            {pokemon: "Toucannon", min_level: 26, max_level: 29, chance: 20},
        ]
    },
    "Route 12": {
        "Walk": [
            {pokemon: "Alolan Graveler", min_level: 29, max_level: 32, chance: 30},
            {pokemon: "Mudbray", min_level: 29, max_level: 32, chance: 30},
            {pokemon: "Houndoom", min_level: 29, max_level: 32, chance: 20, version: "Ultra Sun"},
            {pokemon: "Manectric", min_level: 29, max_level: 32, chance: 20, version: "Ultra Moon"},
            {pokemon: "Torkoal", min_level: 29, max_level: 32, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Mudsdale", min_level: 29, max_level: 32, chance: 30},
        ]
    },
    "Route 13": {
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 38, chance: 40},
            {pokemon: "Bruxish", min_level: 10, max_level: 38, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 38, chance: 25},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 33, chance: 55},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 33, chance: 40},
            {pokemon: "Bruxish", min_level: 10, max_level: 33, chance: 5},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 38, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 33, chance: 55},
        ]
    },
    "Route 14": {
        "Surf": [
            {pokemon: "Finneon", min_level: 30, max_level: 33, chance: 30},
            {pokemon: "Tentacruel", min_level: 30, max_level: 33, chance: 30},
            {pokemon: "Frillish", min_level: 30, max_level: 33, chance: 20},
            {pokemon: "Pelipper", min_level: 30, max_level: 33, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 39, chance: 40},
            {pokemon: "Bruxish", min_level: 10, max_level: 39, chance: 35},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 39, chance: 25},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 34, chance: 55},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 34, chance: 40},
            {pokemon: "Bruxish", min_level: 10, max_level: 34, chance: 5},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 39, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 34, chance: 55},
        ],
        "Static": [
            {pokemon: "Frillish", min_level: 34, max_level: 34, chance: 100},
        ]
    },
    "Route 15": {
        "Surf": [
            {pokemon: "Finneon", min_level: 32, max_level: 35, chance: 40},
            {pokemon: "Tentacruel", min_level: 32, max_level: 35, chance: 40},
            {pokemon: "Pelipper", min_level: 32, max_level: 35, chance: 20},
        ],
        "Bubbling Spots": [
            {pokemon: "Bruxish", min_level: 10, max_level: 40, chance: 35},
            {pokemon: "Clamperl", min_level: 10, max_level: 40, chance: 35},
            {pokemon: "Magikarp", min_level: 10, max_level: 40, chance: 20},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 40, chance: 10},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 35, chance: 50},
            {pokemon: "Wishiwashi", min_level: 10, max_level: 35, chance: 40},
            {pokemon: "Bruxish", min_level: 10, max_level: 35, chance: 5},
            {pokemon: "Clamperl", min_level: 10, max_level: 35, chance: 5},
        ],
        "Gift": [
            {pokemon: "Porygon", min_level: 30, max_level: 30, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gorebyss", min_level: 10, max_level: 40, chance: 35, time: ["Day"]},
            {pokemon: "Huntail", min_level: 10, max_level: 40, chance: 35, time: ["Night"]},
            {pokemon: "Gyarados", min_level: 10, max_level: 40, chance: 20},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 35, chance: 50},
            {pokemon: "Gorebyss", min_level: 10, max_level: 35, chance: 5, time: ["Day"]},
            {pokemon: "Huntail", min_level: 10, max_level: 35, chance: 5, time: ["Night"]},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Lumineon", min_level: 32, max_level: 35, chance: 40},
        ],
        "Static": [
            {pokemon: "Sandygast", min_level: 30, max_level: 30, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Route 15 (Area 1)": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 30, max_level: 33, chance: 50},
            {pokemon: "Alolan Raticate", min_level: 30, max_level: 33, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 30, max_level: 33, chance: 30, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 30, max_level: 33, chance: 20},
        ]
    },
    "Route 15 (Area 2)": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 32, max_level: 35, chance: 50},
            {pokemon: "Alolan Raticate", min_level: 32, max_level: 35, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 32, max_level: 35, chance: 30, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 32, max_level: 35, chance: 20},
        ]
    },
    "Route 16": {
        "Walk": [
            {pokemon: "Pelipper", min_level: 32, max_level: 35, chance: 30},
            {pokemon: "Scraggy", min_level: 32, max_level: 35, chance: 30},
            {pokemon: "Alolan Raticate", min_level: 32, max_level: 35, chance: 20, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 32, max_level: 35, chance: 20, time: ["Day"]},
            {pokemon: "Slowpoke", min_level: 32, max_level: 35, chance: 20},
        ],
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 32, max_level: 35, chance: 100},
        ],
        "Island Scan": [
            {pokemon: "Prinplup", min_level: 35, max_level: 35, chance: 100},
        ]
    },
    "Route 17": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 33, max_level: 36, chance: 100},
        ]
    },
    "Route 17 (Area 1)": {
        "Walk": [
            {pokemon: "Scraggy", min_level: 33, max_level: 36, chance: 40},
            {pokemon: "Alolan Raticate", min_level: 33, max_level: 36, chance: 20, time: ["Night"]},
            {pokemon: "Ariados", min_level: 33, max_level: 36, chance: 20, time: ["Night"]},
            {pokemon: "Fearow", min_level: 33, max_level: 36, chance: 20},
            {pokemon: "Gumshoos", min_level: 33, max_level: 36, chance: 20, time: ["Day"]},
            {pokemon: "Ledian", min_level: 33, max_level: 36, chance: 20, time: ["Day"]},
        ],
        "SOS Encounter": [
            {pokemon: "Fearow", min_level: 33, max_level: 36, chance: 10, time: ["Night"]},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 33, max_level: 36, chance: 0},
            {pokemon: "Goomy", min_level: 33, max_level: 36, chance: 0},
        ]
    },
    "Route 17 (Area 2)": {
        "Walk": [
            {pokemon: "Alolan Graveler", min_level: 33, max_level: 36, chance: 20},
            {pokemon: "Alolan Raticate", min_level: 33, max_level: 36, chance: 20, time: ["Night"]},
            {pokemon: "Fearow", min_level: 33, max_level: 36, chance: 20},
            {pokemon: "Gumshoos", min_level: 33, max_level: 36, chance: 20, time: ["Day"]},
            {pokemon: "Scraggy", min_level: 33, max_level: 36, chance: 20},
            {pokemon: "Skarmory", min_level: 33, max_level: 36, chance: 15},
            {pokemon: "Bisharp", min_level: 33, max_level: 36, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Pawniard", min_level: 33, max_level: 36, chance: 5},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 33, max_level: 36, chance: 0},
            {pokemon: "Goomy", min_level: 33, max_level: 36, chance: 0},
        ]
    },
    "Royal Avenue": {
        "NPC Trade": [
            {pokemon: "Barboach", min_level: 21, max_level: 21, chance: 100},
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
    "Sandy Cave": {
        "Walk": [
            {pokemon: "Zubat", min_level: 6, max_level: 9, chance: 70},
            {pokemon: "Psyduck", min_level: 6, max_level: 9, chance: 30},
        ]
    },
    "Seafolk Village": {
        "Bubbling Spots": [
            {pokemon: "Magikarp", min_level: 10, max_level: 49, chance: 40},
            {pokemon: "Dhelmise", min_level: 10, max_level: 49, chance: 35},
            {pokemon: "Wailmer", min_level: 10, max_level: 49, chance: 25},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 44, chance: 55},
            {pokemon: "Wailmer", min_level: 10, max_level: 44, chance: 40},
            {pokemon: "Dhelmise", min_level: 10, max_level: 44, chance: 5},
        ],
        "Gift": [
            {pokemon: "Aerodactyl", min_level: 40, max_level: 40, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Shellos", min_level: 44, max_level: 44, chance: 100},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 49, chance: 40},
            {pokemon: "Wailord", min_level: 10, max_level: 49, chance: 25},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 44, chance: 55},
            {pokemon: "Wailord", min_level: 10, max_level: 44, chance: 40},
        ]
    },
    "Seaward Cave": {
        "Walk": [
            {pokemon: "Psyduck", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Smoochum", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Delibird", min_level: 9, max_level: 12, chance: 20},
            {pokemon: "Zubat", min_level: 9, max_level: 12, chance: 20},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 15, max_level: 18, chance: 55},
            {pokemon: "Seel", min_level: 15, max_level: 18, chance: 30},
            {pokemon: "Delibird", min_level: 15, max_level: 18, chance: 10},
            {pokemon: "Psyduck", min_level: 15, max_level: 18, chance: 5},
        ],
        "Bubbling Spots": [
            {pokemon: "Barboach", min_level: 10, max_level: 22, chance: 60},
            {pokemon: "Magikarp", min_level: 10, max_level: 22, chance: 40},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 17, chance: 90},
            {pokemon: "Barboach", min_level: 10, max_level: 17, chance: 10},
        ],
        "Island Scan": [
            {pokemon: "Squirtle", min_level: 12, max_level: 12, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Happiny", min_level: 9, max_level: 12, chance: 30},
            {pokemon: "Jynx", min_level: 9, max_level: 12, chance: 30},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Whiscash", min_level: 10, max_level: 22, chance: 60},
            {pokemon: "Gyarados", min_level: 10, max_level: 22, chance: 40},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 17, chance: 90},
            {pokemon: "Whiscash", min_level: 10, max_level: 17, chance: 10},
        ],
        "SOS Encounter (Surf)": [
            {pokemon: "Zubat", min_level: 15, max_level: 18, chance: 5},
        ]
    },
    "Tapu Village": {
        "Walk": [
            {pokemon: "Alolan Raticate", min_level: 30, max_level: 33, chance: 30, time: ["Night"]},
            {pokemon: "Gumshoos", min_level: 30, max_level: 33, chance: 30, time: ["Day"]},
            {pokemon: "Pelipper", min_level: 30, max_level: 33, chance: 30},
            {pokemon: "Snorunt", min_level: 30, max_level: 33, chance: 20},
            {pokemon: "Absol", min_level: 30, max_level: 33, chance: 10},
            {pokemon: "Alolan Sandshrew", min_level: 30, max_level: 33, chance: 10, version: "Ultra Moon"},
            {pokemon: "Alolan Vulpix", min_level: 30, max_level: 33, chance: 10, version: "Ultra Sun"},
        ],
        "Island Scan": [
            {pokemon: "Swinub", min_level: 33, max_level: 33, chance: 100},
        ],
        "NPC Trade": [
            {pokemon: "Phantump", min_level: 33, max_level: 33, chance: 100},
        ],
        "SOS Encounter (Weather)": [
            {pokemon: "Castform", min_level: 30, max_level: 33, chance: 0},
            {pokemon: "Vanillite", min_level: 30, max_level: 33, chance: 0},
        ]
    },
    "Team Rocket's Castle": {
        "Static": [
            {pokemon: "Electrode", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ten Carat Hill": {
        "Walk": [
            {pokemon: "Mawile", min_level: 11, max_level: 14, chance: 30},
            {pokemon: "Carbink", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Roggenrola", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Zubat", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Psyduck", min_level: 11, max_level: 14, chance: 10},
        ],
        "Surf": [
            {pokemon: "Zubat", min_level: 15, max_level: 18, chance: 95},
            {pokemon: "Psyduck", min_level: 15, max_level: 18, chance: 5},
        ],
        "Island Scan": [
            {pokemon: "Onix", min_level: 14, max_level: 14, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Sableye", min_level: 11, max_level: 14, chance: 20},
        ]
    },
    "Ten Carat Hill (Farthest Hollow)": {
        "Walk": [
            {pokemon: "Machop", min_level: 11, max_level: 14, chance: 30},
            {pokemon: "Spinda", min_level: 11, max_level: 14, chance: 30},
            {pokemon: "Rockruff", min_level: 11, max_level: 14, chance: 20},
            {pokemon: "Carbink", min_level: 11, max_level: 14, chance: 10},
            {pokemon: "Roggenrola", min_level: 11, max_level: 14, chance: 10},
        ]
    },
    "Thrifty Megamart (Abandoned Site)": {
        "Walk": [
            {pokemon: "Haunter", min_level: 31, max_level: 34, chance: 30},
            {pokemon: "Shuppet", min_level: 31, max_level: 34, chance: 30},
            {pokemon: "Golbat", min_level: 31, max_level: 34, chance: 20},
            {pokemon: "Klefki", min_level: 31, max_level: 34, chance: 15},
            {pokemon: "Mimikyu", min_level: 31, max_level: 34, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Gengar", min_level: 31, max_level: 34, chance: 30},
        ]
    },
    "Ula'ula Beach": {
        "Berry Piles": [
            {pokemon: "Crabrawler", min_level: 29, max_level: 32, chance: 100},
        ]
    },
    "Ula'ula Meadow": {
        "Walk": [
            {pokemon: "Ariados", min_level: 33, max_level: 36, chance: 20, time: ["Night"]},
            {pokemon: "Cottonee", min_level: 33, max_level: 36, chance: 20, version: "Ultra Sun"},
            {pokemon: "Floette", min_level: 33, max_level: 36, chance: 20},
            {pokemon: "Ledian", min_level: 33, max_level: 36, chance: 20, time: ["Day"]},
            {pokemon: "Oricorio", min_level: 33, max_level: 36, chance: 20},
            {pokemon: "Petilil", min_level: 33, max_level: 36, chance: 20, version: "Ultra Moon"},
            {pokemon: "Ribombee", min_level: 33, max_level: 36, chance: 20},
        ],
        "Island Scan": [
            {pokemon: "Grotle", min_level: 36, max_level: 36, chance: 100},
        ],
        "SOS Encounter": [
            {pokemon: "Floette", min_level: 33, max_level: 36, chance: 20},
        ]
    },
    "Ultra Crater": {
        "Static": [
            {pokemon: "Celesteela", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Ultra Deep Sea": {
        "Static": [
            {pokemon: "Nihilego", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Desert": {
        "Static": [
            {pokemon: "Pheromosa", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Ultra Forest": {
        "Static": [
            {pokemon: "Kartana", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
        ]
    },
    "Ultra Jungle": {
        "Static": [
            {pokemon: "Buzzwole", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
        ]
    },
    "Ultra Megalopolis": {
        "Gift": [
            {pokemon: "Poipole", min_level: 40, max_level: 40, chance: 100},
        ]
    },
    "Ultra Plant": {
        "Static": [
            {pokemon: "Xurkitree", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Ruin": {
        "Static": [
            {pokemon: "Guzzlord", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Space Wilds (Cave World)": {
        "Static": [
            {pokemon: "Giratina", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Groudon", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Heatran", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Palkia", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Regice", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Regigigas", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Regirock", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Registeel", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Space Wilds (Cave)": {
        "Static": [
            {pokemon: "Abomasnow", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Crustle", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Giratina", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Groudon", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Heatran", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Hippowdon", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Magcargo", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Medicham", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Palkia", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Regice", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Regigigas", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Regirock", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Registeel", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Space Wilds (Cliff World)": {
        "Static": [
            {pokemon: "Articuno", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Cresselia", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Ho-Oh", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Landorus", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Moltres", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Rayquaza", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Thundurus", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Tornadus", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Yveltal", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Zapdos", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Space Wilds (Cliff)": {
        "Static": [
            {pokemon: "Altaria", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Articuno", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Cresselia", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Ho-Oh", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Landorus", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Moltres", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Rayquaza", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Sigilyph", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Swanna", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Swellow", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Thundurus", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Tornadus", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Yanmega", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Yveltal", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Zapdos", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Space Wilds (Crag)": {
        "Static": [
            {pokemon: "Audino", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Cobalion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Dialga", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Drapion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Entei", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Grumpig", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Heliolisk", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Mewtwo", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Nuzleaf", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Raikou", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Reshiram", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Terrakion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Virizion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Xerneas", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Zekrom", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Ultra Space Wilds (Rocky World)": {
        "Static": [
            {pokemon: "Cobalion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Dialga", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Entei", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Mewtwo", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Raikou", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Reshiram", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Terrakion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Virizion", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Xerneas", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Zekrom", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
        ]
    },
    "Ultra Space Wilds (Water World)": {
        "Static": [
            {pokemon: "Azelf", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Kyogre", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Kyurem", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Latias", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Latios", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Lugia", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Mesprit", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Suicune", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Uxie", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Ultra Space Wilds (Waterfall)": {
        "Static": [
            {pokemon: "Azelf", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Barbaracle", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Floatzel", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Kyogre", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Kyurem", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Latias", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Latios", min_level: 60, max_level: 60, chance: 100, version: "Ultra Sun"},
            {pokemon: "Lombre", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Lugia", min_level: 60, max_level: 60, chance: 100, version: "Ultra Moon"},
            {pokemon: "Mesprit", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Quagsire", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Stunfisk", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Suicune", min_level: 60, max_level: 60, chance: 100},
            {pokemon: "Uxie", min_level: 60, max_level: 60, chance: 100},
        ]
    },
    "Vast Poni Canyon": {
        "Surf": [
            {pokemon: "Golbat", min_level: 42, max_level: 45, chance: 80},
            {pokemon: "Golduck", min_level: 42, max_level: 45, chance: 20},
        ],
        "Ambush": [
            {pokemon: "Alolan Dugtrio", min_level: 42, max_level: 45, chance: 100},
        ],
        "Bubbling Spots": [
            {pokemon: "Corphish", min_level: 10, max_level: 51, chance: 35},
            {pokemon: "Magikarp", min_level: 10, max_level: 51, chance: 25},
            {pokemon: "Barboach", min_level: 10, max_level: 51, chance: 20},
            {pokemon: "Basculin", min_level: 10, max_level: 51, chance: 20, version: "Ultra Sun"},
            {pokemon: "Basculin (Blue Striped)", min_level: 10, max_level: 51, chance: 20, version: "Ultra Moon"},
        ],
        "Fishing": [
            {pokemon: "Magikarp", min_level: 10, max_level: 46, chance: 45},
            {pokemon: "Barboach", min_level: 10, max_level: 46, chance: 25},
            {pokemon: "Basculin", min_level: 10, max_level: 46, chance: 25, version: "Ultra Sun"},
            {pokemon: "Basculin (Blue Striped)", min_level: 10, max_level: 46, chance: 25, version: "Ultra Moon"},
            {pokemon: "Corphish", min_level: 10, max_level: 46, chance: 5},
        ],
        "SOS Encounter (Bubbling Spots)": [
            {pokemon: "Crawdaunt", min_level: 10, max_level: 51, chance: 35},
            {pokemon: "Gyarados", min_level: 10, max_level: 51, chance: 25},
            {pokemon: "Whiscash", min_level: 10, max_level: 51, chance: 20},
        ],
        "SOS Encounter (Fishing)": [
            {pokemon: "Gyarados", min_level: 10, max_level: 46, chance: 45},
            {pokemon: "Whiscash", min_level: 10, max_level: 46, chance: 25},
            {pokemon: "Crawdaunt", min_level: 10, max_level: 46, chance: 5},
        ]
    },
    "Vast Poni Canyon (Area 1)": {
        "Walk": [
            {pokemon: "Lycanroc", min_level: 43, max_level: 46, chance: 20, time: ["Day"]},
            {pokemon: "Lycanroc (Midnight)", min_level: 43, max_level: 46, chance: 20, time: ["Night"]},
            {pokemon: "Machoke", min_level: 43, max_level: 46, chance: 20},
            {pokemon: "Mienfoo", min_level: 43, max_level: 46, chance: 20},
            {pokemon: "Carbink", min_level: 43, max_level: 46, chance: 15},
            {pokemon: "Boldore", min_level: 43, max_level: 46, chance: 10},
            {pokemon: "Skarmory", min_level: 43, max_level: 46, chance: 10},
            {pokemon: "Jangmo-o", min_level: 43, max_level: 46, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Hakamo-o", min_level: 43, max_level: 46, chance: 5},
            {pokemon: "Kommo-o", min_level: 43, max_level: 46, chance: 5},
        ]
    },
    "Vast Poni Canyon (Area 2)": {
        "Walk": [
            {pokemon: "Lycanroc", min_level: 42, max_level: 45, chance: 20, time: ["Day"]},
            {pokemon: "Lycanroc (Midnight)", min_level: 42, max_level: 45, chance: 20, time: ["Night"]},
            {pokemon: "Machoke", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Mienfoo", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Carbink", min_level: 42, max_level: 45, chance: 15},
            {pokemon: "Boldore", min_level: 42, max_level: 45, chance: 10},
            {pokemon: "Skarmory", min_level: 42, max_level: 45, chance: 10},
            {pokemon: "Jangmo-o", min_level: 42, max_level: 45, chance: 5},
        ],
        "SOS Encounter": [
            {pokemon: "Hakamo-o", min_level: 42, max_level: 45, chance: 5},
            {pokemon: "Kommo-o", min_level: 42, max_level: 45, chance: 5},
        ]
    },
    "Vast Poni Canyon (Area 3)": {
        "Walk": [
            {pokemon: "Boldore", min_level: 42, max_level: 45, chance: 30},
            {pokemon: "Golbat", min_level: 42, max_level: 45, chance: 30},
            {pokemon: "Alolan Dugtrio", min_level: 42, max_level: 45, chance: 20},
            {pokemon: "Carbink", min_level: 42, max_level: 45, chance: 20},
        ],
        "SOS Encounter": [
            {pokemon: "Sableye", min_level: 42, max_level: 45, chance: 20},
        ]
    },
    "Verdant Cavern (Trial Site)": {
        "Walk": [
            {pokemon: "Alolan Diglett", min_level: 8, max_level: 11, chance: 35},
            {pokemon: "Zubat", min_level: 8, max_level: 11, chance: 35},
            {pokemon: "Noibat", min_level: 8, max_level: 11, chance: 30},
        ],
        "Ambush": [
            {pokemon: "Alolan Rattata", min_level: 10, max_level: 10, chance: 100, version: "Ultra Moon"},
            {pokemon: "Yungoos", min_level: 10, max_level: 10, chance: 100, version: "Ultra Sun"},
        ]
    },
    "Wela Volcano Park (Area 1)": {
        "Walk": [
            {pokemon: "Fletchling", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Salandit", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Cubone", min_level: 16, max_level: 19, chance: 24},
            {pokemon: "Magby", min_level: 16, max_level: 19, chance: 15},
            {pokemon: "Kangaskhan", min_level: 16, max_level: 19, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Fletchinder", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Salazzle", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Kangaskhan", min_level: 16, max_level: 19, chance: 24},
            {pokemon: "Happiny", min_level: 16, max_level: 19, chance: 15},
            {pokemon: "Magmar", min_level: 16, max_level: 19, chance: 15},
        ]
    },
    "Wela Volcano Park (Area 2)": {
        "Walk": [
            {pokemon: "Fletchling", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Salandit", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Cubone", min_level: 16, max_level: 19, chance: 24},
            {pokemon: "Magby", min_level: 16, max_level: 19, chance: 15},
            {pokemon: "Kangaskhan", min_level: 16, max_level: 19, chance: 1},
        ],
        "SOS Encounter": [
            {pokemon: "Fletchinder", min_level: 16, max_level: 19, chance: 40, time: ["Day"]},
            {pokemon: "Fletchinder", min_level: 16, max_level: 19, chance: 30, time: ["Night"]},
            {pokemon: "Salazzle", min_level: 16, max_level: 19, chance: 30},
            {pokemon: "Kangaskhan", min_level: 16, max_level: 19, chance: 24},
            {pokemon: "Happiny", min_level: 16, max_level: 19, chance: 15},
            {pokemon: "Magmar", min_level: 16, max_level: 19, chance: 15},
        ]
    }
};
