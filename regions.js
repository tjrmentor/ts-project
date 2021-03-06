const regions = [
	{
		"regionName": "central america",
		"regionPointValues": {
			"presence": 1,
			"domination": 3,
			"control": 5
		},
		"countries": [
			{
				"countryName": "mexico",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": true,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "guatemala",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "el salvador",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "honduras",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "costa rica",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "cuba",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": true,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "nicaragua",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "panama",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "haiti",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "dominican rep",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			}
		]
	},
	{
		"regionName": "south america",
		"regionPointValues": {
			"presence": 2,
			"domination": 5,
			"control": 6
		},
		"countries": [
			{
				"countryName": "venezuela",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "colombia",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "ecuador",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "peru",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "brazil",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "bolivia",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "chile",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "paraguay",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "uruguay",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "argentina",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			}
		]
	},
	{
		"regionName": "europe",
		"regionPointValues": {
			"presence": 3,
			"domination": 7,
			"control": "win"
		},
		"countries": [
			{
				"countryName": "canada",
				"stability": 4,
				"isBattleground": false,
				"isUSAdjacent": true,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "u.k.",
				"stability": 5,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "norway",
				"stability": 4,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "france",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "spain/portugal",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "denmark",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "benelux",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "sweden",
				"stability": 4,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "e. germany",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "w. germany",
				"stability": 4,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "austria",
				"stability": 4,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "italy",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "finland",
				"stability": 4,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": true
			},
			{
				"countryName": "poland",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": true
			},
			{
				"countryName": "czechoslovakia",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "hungary",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "yugoslavia",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "greece",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "romania",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": true
			},
			{
				"countryName": "bulgaria",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "turkey",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
		]
	},
	{
		"regionName": "middle east",
		"regionPointValues": {
			"presence": 3,
			"domination": 5,
			"control": 7
		},
		"countries": [
			{
				"countryName": "lebanon",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "syria",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "israel",
				"stability": 4,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "iraq",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "iran",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "libya",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "egypt",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "jordan",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "gulf states",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "saudi arabia",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			}
		]
	},
	{
		"regionName": "africa",
		"regionPointValues": {
			"presence": 1,
			"domination": 4,
			"control": 6
		},
		"countries": [
			{
				"countryName": "tunisia",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "algeria",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "morocco",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "west african states",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "saharan states",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "ivory coast",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "nigeria",
				"stability": 1,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "sudan",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "ethiopia",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "somalia",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "cameroon",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "zaire",
				"stability": 1,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "kenya",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "angola",
				"stability": 1,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "se african states",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "zimbabwe",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "botswana",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "south africa",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			}
		]
	},
	{
		"regionName": "asia",
		"regionPointValues": {
			"presence": 3,
			"domination": 7,
			"control": 9
		},
		"countries": [
			{
				"countryName": "afghanistan",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": true
			},
			{
				"countryName": "pakistan",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "india",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "burma",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "laos/cambodia",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "n. korea",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": true
			},
			{
				"countryName": "s. korea",
				"stability": 3,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "japan",
				"stability": 4,
				"isBattleground": true,
				"isUSAdjacent": true,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "taiwan",
				"stability": 3,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "thailand",
				"stability": 2,
				"isBattleground": true,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "vietnam",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "philippines",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "malaysia",
				"stability": 2,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "indonesia",
				"stability": 1,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			},
			{
				"countryName": "australia",
				"stability": 4,
				"isBattleground": false,
				"isUSAdjacent": false,
				"isUSSRAdjacent": false
			}
		]
	}
];