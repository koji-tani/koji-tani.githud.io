'use strict'
// Please don't delete the 'use strict' line above

const allPokemon = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Tackle",
        Type: "Normal",
        Damage: 12
      },
      {
        Name: "Vine Whip",
        Type: "Grass",
        Damage: 7
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Power Whip",
        Type: "Grass",
        Damage: 70
      },
      {
        Name: "Seed Bomb",
        Type: "Grass",
        Damage: 40
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "6.04kg",
      Maximum: "7.76kg"
    },
    Height: {
      Minimum: "0.61m",
      Maximum: "0.79m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "90 stamina points.",
    "Base Attack": "118 attack points.",
    "Base Defense": "118 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Bulbasaur candies"
    },
    "Next evolution(s)": [
      {
        Number: 2,
        Name: "Ivysaur"
      },
      {
        Number: 3,
        Name: "Venusaur"
      }
    ],
    MaxCP: 951,
    MaxHP: 1071
  },
  {
    Number: "002",
    Name: "Ivysaur",
    Generation: "Generation I",
    About:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    Types: ["Grass", "Poison"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Razor Leaf",
        Type: "Grass",
        Damage: 15
      },
      {
        Name: "Vine Whip",
        Type: "Grass",
        Damage: 7
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Power Whip",
        Type: "Grass",
        Damage: 70
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      },
      {
        Name: "Solar Beam",
        Type: "Grass",
        Damage: 120
      }
    ],
    Weight: {
      Minimum: "11.38kg",
      Maximum: "14.63kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "151 attack points.",
    "Base Defense": "151 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 1,
        Name: "Bulbasaur"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 100,
      Name: "Bulbasaur candies"
    },
    "Next evolution(s)": [
      {
        Number: 3,
        Name: "Venusaur"
      }
    ],
    MaxCP: 1483,
    MaxHP: 1632
  },
  {
    Number: "003",
    Name: "Venusaur",
    Generation: "Generation I",
    About:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    Types: ["Grass", "Poison"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Razor Leaf",
        Type: "Grass",
        Damage: 15
      },
      {
        Name: "Vine Whip",
        Type: "Grass",
        Damage: 7
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Petal Blizzard",
        Type: "Grass",
        Damage: 65
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      },
      {
        Name: "Solar Beam",
        Type: "Grass",
        Damage: 120
      }
    ],
    Weight: {
      Minimum: "87.5kg",
      Maximum: "112.5kg"
    },
    Height: {
      Minimum: "1.75m",
      Maximum: "2.25m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "160 stamina points.",
    "Base Attack": "198 attack points.",
    "Base Defense": "198 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 1,
        Name: "Bulbasaur"
      },
      {
        Number: 2,
        Name: "Ivysaur"
      }
    ],
    MaxCP: 2392,
    MaxHP: 2580
  },
  {
    Number: "004",
    Name: "Charmander",
    Generation: "Generation I",
    About:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Ember",
        Type: "Fire",
        Damage: 10
      },
      {
        Name: "Scratch",
        Type: "Normal",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Flame Burst",
        Type: "Fire",
        Damage: 30
      },
      {
        Name: "Flame Charge",
        Type: "Fire",
        Damage: 25
      },
      {
        Name: "Flamethrower",
        Type: "Fire",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "7.44kg",
      Maximum: "9.56kg"
    },
    Height: {
      Minimum: "0.53m",
      Maximum: "0.68m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "78 stamina points.",
    "Base Attack": "116 attack points.",
    "Base Defense": "96 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Charmander candies"
    },
    "Next evolution(s)": [
      {
        Number: 5,
        Name: "Charmeleon"
      },
      {
        Number: 6,
        Name: "Charizard"
      }
    ],
    MaxCP: 841,
    MaxHP: 955
  },
  {
    Number: "005",
    Name: "Charmeleon",
    Generation: "Generation I",
    About:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Ember",
        Type: "Fire",
        Damage: 10
      },
      {
        Name: "Scratch",
        Type: "Normal",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Fire Punch",
        Type: "Fire",
        Damage: 40
      },
      {
        Name: "Flame Burst",
        Type: "Fire",
        Damage: 30
      },
      {
        Name: "Flamethrower",
        Type: "Fire",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "16.63kg",
      Maximum: "21.38kg"
    },
    Height: {
      Minimum: "0.96m",
      Maximum: "1.24m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "116 stamina points.",
    "Base Attack": "158 attack points.",
    "Base Defense": "129 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 4,
        Name: "Charmander"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 100,
      Name: "Charmander candies"
    },
    "Next evolution(s)": [
      {
        Number: 6,
        Name: "Charizard"
      }
    ],
    MaxCP: 1411,
    MaxHP: 1557
  },
  {
    Number: "006",
    Name: "Charizard",
    Generation: "Generation I",
    About:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    Types: ["Fire", "Flying"],
    Resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Electric", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Ember",
        Type: "Fire",
        Damage: 10
      },
      {
        Name: "Wing Attack",
        Type: "Flying",
        Damage: 9
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dragon Claw",
        Type: "Dragon",
        Damage: 35
      },
      {
        Name: "Fire Blast",
        Type: "Fire",
        Damage: 100
      },
      {
        Name: "Flamethrower",
        Type: "Fire",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "79.19kg",
      Maximum: "101.81kg"
    },
    Height: {
      Minimum: "1.49m",
      Maximum: "1.91m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "156 stamina points.",
    "Base Attack": "223 attack points.",
    "Base Defense": "176 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 4,
        Name: "Charmander"
      },
      {
        Number: 5,
        Name: "Charmeleon"
      }
    ],
    MaxCP: 2413,
    MaxHP: 2602
  },
  {
    Number: "007",
    Name: "Squirtle",
    Generation: "Generation I",
    About:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    Types: ["Water"],
    Resistant: ["Fire", "Water", "Ice", "Steel"],
    Weaknesses: ["Electric", "Grass"],
    "Fast Attack(s)": [
      {
        Name: "Bubble",
        Type: "Water",
        Damage: 25
      },
      {
        Name: "Tackle",
        Type: "Normal",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aqua Jet",
        Type: "Water",
        Damage: 25
      },
      {
        Name: "Aqua Tail",
        Type: "Water",
        Damage: 45
      },
      {
        Name: "Water Pulse",
        Type: "Water",
        Damage: 35
      }
    ],
    Weight: {
      Minimum: "7.88kg",
      Maximum: "10.13kg"
    },
    Height: {
      Minimum: "0.44m",
      Maximum: "0.56m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "88 stamina points.",
    "Base Attack": "94 attack points.",
    "Base Defense": "122 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Squirtle candies"
    },
    "Next evolution(s)": [
      {
        Number: 8,
        Name: "Wartortle"
      },
      {
        Number: 9,
        Name: "Blastoise"
      }
    ],
    MaxCP: 891,
    MaxHP: 1008
  },
  {
    Number: "008",
    Name: "Wartortle",
    Generation: "Generation I",
    About:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    Types: ["Water"],
    Resistant: ["Fire", "Water", "Ice", "Steel"],
    Weaknesses: ["Electric", "Grass"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Water Gun",
        Type: "Water",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aqua Jet",
        Type: "Water",
        Damage: 25
      },
      {
        Name: "Hydro Pump",
        Type: "Water",
        Damage: 90
      },
      {
        Name: "Ice Beam",
        Type: "Ice",
        Damage: 65
      }
    ],
    Weight: {
      Minimum: "19.69kg",
      Maximum: "25.31kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "118 stamina points.",
    "Base Attack": "126 attack points.",
    "Base Defense": "155 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 7,
        Name: "Squirtle"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 100,
      Name: "Squirtle candies"
    },
    "Next evolution(s)": [
      {
        Number: 9,
        Name: "Blastoise"
      }
    ],
    MaxCP: 1435,
    MaxHP: 1582
  },
  {
    Number: "009",
    Name: "Blastoise",
    Generation: "Generation I",
    About:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    Types: ["Water"],
    Resistant: ["Fire", "Water", "Ice", "Steel"],
    Weaknesses: ["Electric", "Grass"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Water Gun",
        Type: "Water",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Flash Cannon",
        Type: "Steel",
        Damage: 60
      },
      {
        Name: "Hydro Pump",
        Type: "Water",
        Damage: 90
      },
      {
        Name: "Ice Beam",
        Type: "Ice",
        Damage: 65
      }
    ],
    Weight: {
      Minimum: "74.81kg",
      Maximum: "96.19kg"
    },
    Height: {
      Minimum: "1.4m",
      Maximum: "1.8m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "158 stamina points.",
    "Base Attack": "171 attack points.",
    "Base Defense": "210 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 7,
        Name: "Squirtle"
      },
      {
        Number: 8,
        Name: "Wartortle"
      }
    ],
    MaxCP: 2355,
    MaxHP: 2542
  },
  {
    Number: "010",
    Name: "Caterpie",
    Generation: "Generation I",
    About:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    Types: ["Bug"],
    Resistant: ["Grass", "Fighting", "Ground"],
    Weaknesses: ["Fire", "Flying", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Tackle",
        Type: "Normal",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Struggle",
        Type: "Normal",
        Damage: 15
      }
    ],
    Weight: {
      Minimum: "2.54kg",
      Maximum: "3.26kg"
    },
    Height: {
      Minimum: "0.26m",
      Maximum: "0.34m"
    },
    "Buddy Distance": "1km (Shoulder)",
    "Base Stamina": "90 stamina points.",
    "Base Attack": "55 attack points.",
    "Base Defense": "62 defense points.",
    "Base Flee Rate": "20% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 12,
      Name: "Caterpie candies"
    },
    "Next evolution(s)": [
      {
        Number: 11,
        Name: "Metapod"
      },
      {
        Number: 12,
        Name: "Butterfree"
      }
    ],
    MaxCP: 367,
    MaxHP: 443
  },
  {
    Number: "011",
    Name: "Metapod",
    Generation: "Generation I",
    About:
      "The shell covering this Pokémon’s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    Types: ["Bug"],
    Resistant: ["Grass", "Fighting", "Ground"],
    Weaknesses: ["Fire", "Flying", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Tackle",
        Type: "Normal",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Struggle",
        Type: "Normal",
        Damage: 15
      }
    ],
    Weight: {
      Minimum: "8.66kg",
      Maximum: "11.14kg"
    },
    Height: {
      Minimum: "0.61m",
      Maximum: "0.79m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "100 stamina points.",
    "Base Attack": "45 attack points.",
    "Base Defense": "94 defense points.",
    "Base Flee Rate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 10,
        Name: "Caterpie"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Caterpie candies"
    },
    "Next evolution(s)": [
      {
        Number: 12,
        Name: "Butterfree"
      }
    ],
    MaxCP: 397,
    MaxHP: 477
  },
  {
    Number: "012",
    Name: "Butterfree",
    Generation: "Generation I",
    About:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    Types: ["Bug", "Flying"],
    Resistant: ["Grass", "Fighting", "Ground", "Bug"],
    Weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Confusion",
        Type: "Psychic",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Bug Buzz",
        Type: "Bug",
        Damage: 75
      },
      {
        Name: "Psychic",
        Type: "Psychic",
        Damage: 55
      },
      {
        Name: "Signal Beam",
        Type: "Bug",
        Damage: 45
      }
    ],
    Weight: {
      Minimum: "28kg",
      Maximum: "36kg"
    },
    Height: {
      Minimum: "0.96m",
      Maximum: "1.24m"
    },
    "Buddy Distance": "1km (Flying)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "167 attack points.",
    "Base Defense": "151 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 10,
        Name: "Caterpie"
      },
      {
        Number: 11,
        Name: "Metapod"
      }
    ],
    MaxCP: 1315,
    MaxHP: 1454
  },
  {
    Number: "013",
    Name: "Weedle",
    Generation: "Generation I",
    About:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    Types: ["Bug", "Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Struggle",
        Type: "Normal",
        Damage: 15
      }
    ],
    Weight: {
      Minimum: "2.8kg",
      Maximum: "3.6kg"
    },
    Height: {
      Minimum: "0.26m",
      Maximum: "0.34m"
    },
    "Buddy Distance": "1km (Shoulder)",
    "Base Stamina": "80 stamina points.",
    "Base Attack": "63 attack points.",
    "Base Defense": "55 defense points.",
    "Base Flee Rate": "20% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 12,
      Name: "Weedle candies"
    },
    "Next evolution(s)": [
      {
        Number: 14,
        Name: "Kakuna"
      },
      {
        Number: 15,
        Name: "Beedrill"
      }
    ],
    MaxCP: 372,
    MaxHP: 449
  },
  {
    Number: "014",
    Name: "Kakuna",
    Generation: "Generation I",
    About:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    Types: ["Bug", "Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Struggle",
        Type: "Normal",
        Damage: 15
      }
    ],
    Weight: {
      Minimum: "8.75kg",
      Maximum: "11.25kg"
    },
    Height: {
      Minimum: "0.53m",
      Maximum: "0.68m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "90 stamina points.",
    "Base Attack": "46 attack points.",
    "Base Defense": "86 defense points.",
    "Base Flee Rate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 13,
        Name: "Weedle"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Weedle candies"
    },
    "Next evolution(s)": [
      {
        Number: 15,
        Name: "Beedrill"
      }
    ],
    MaxCP: 405,
    MaxHP: 485
  },
  {
    Number: "015",
    Name: "Beedrill",
    Generation: "Generation I",
    About:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    Types: ["Bug", "Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Poison Jab",
        Type: "Poison",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aerial Ace",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      },
      {
        Name: "X Scissor",
        Type: "Bug",
        Damage: 35
      }
    ],
    Weight: {
      Minimum: "25.81kg",
      Maximum: "33.19kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "1km (Flying)",
    "Base Stamina": "130 stamina points.",
    "Base Attack": "169 attack points.",
    "Base Defense": "150 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 13,
        Name: "Weedle"
      },
      {
        Number: 14,
        Name: "Kakuna"
      }
    ],
    MaxCP: 1301,
    MaxHP: 1439
  },
  {
    Number: "016",
    Name: "Pidgey",
    Generation: "Generation I",
    About:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    Types: ["Normal", "Flying"],
    Resistant: ["Grass", "Ground", "Bug", "Ghost"],
    Weaknesses: ["Electric", "Ice", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      },
      {
        Name: "Tackle",
        Type: "Normal",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aerial Ace",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Air Cutter",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Twister",
        Type: "Dragon",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "1.57kg",
      Maximum: "2.02kg"
    },
    Height: {
      Minimum: "0.26m",
      Maximum: "0.34m"
    },
    "Buddy Distance": "1km (Shoulder)",
    "Base Stamina": "80 stamina points.",
    "Base Attack": "85 attack points.",
    "Base Defense": "76 defense points.",
    "Base Flee Rate": "20% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 12,
      Name: "Pidgey candies"
    },
    "Next evolution(s)": [
      {
        Number: 17,
        Name: "Pidgeotto"
      },
      {
        Number: 18,
        Name: "Pidgeot"
      }
    ],
    MaxCP: 585,
    MaxHP: 679
  },
  {
    Number: "017",
    Name: "Pidgeotto",
    Generation: "Generation I",
    About:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    Types: ["Normal", "Flying"],
    Resistant: ["Grass", "Ground", "Bug", "Ghost"],
    Weaknesses: ["Electric", "Ice", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Steel Wing",
        Type: "Steel",
        Damage: 15
      },
      {
        Name: "Wing Attack",
        Type: "Flying",
        Damage: 9
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aerial Ace",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Air Cutter",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Twister",
        Type: "Dragon",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "26.25kg",
      Maximum: "33.75kg"
    },
    Height: {
      Minimum: "0.96m",
      Maximum: "1.24m"
    },
    "Buddy Distance": "1km (Flying)",
    "Base Stamina": "126 stamina points.",
    "Base Attack": "117 attack points.",
    "Base Defense": "108 defense points.",
    "Base Flee Rate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 16,
        Name: "Pidgey"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Pidgey candies"
    },
    "Next evolution(s)": [
      {
        Number: 18,
        Name: "Pidgeot"
      }
    ],
    MaxCP: 1096,
    MaxHP: 1223
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
    Resistant: ["Ghost"],
    Weaknesses: ["Fighting"],
    "Fast Attack(s)": [
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      },
      {
        Name: "Tackle",
        Type: "Normal",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Body Slam",
        Type: "Normal",
        Damage: 40
      },
      {
        Name: "Dig",
        Type: "Ground",
        Damage: 70
      },
      {
        Name: "Hyper Fang",
        Type: "Normal",
        Damage: 35
      }
    ],
    Weight: {
      Minimum: "3.06kg",
      Maximum: "3.94kg"
    },
    Height: {
      Minimum: "0.26m",
      Maximum: "0.34m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "60 stamina points.",
    "Base Attack": "103 attack points.",
    "Base Defense": "70 defense points.",
    "Base Flee Rate": "20% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Rattata candies"
    },
    "Next evolution(s)": [
      {
        Number: 20,
        Name: "Raticate"
      }
    ],
    MaxCP: 493,
    MaxHP: 581
  },
  {
    Number: "020",
    Name: "Raticate",
    Generation: "Generation I",
    About:
      "Raticate’s sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    Types: ["Normal"],
    Resistant: ["Ghost"],
    Weaknesses: ["Fighting"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dig",
        Type: "Ground",
        Damage: 70
      },
      {
        Name: "Hyper Beam",
        Type: "Normal",
        Damage: 120
      },
      {
        Name: "Hyper Fang",
        Type: "Normal",
        Damage: 35
      }
    ],
    Weight: {
      Minimum: "16.19kg",
      Maximum: "20.81kg"
    },
    Height: {
      Minimum: "0.61m",
      Maximum: "0.79m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "110 stamina points.",
    "Base Attack": "161 attack points.",
    "Base Defense": "144 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 19,
        Name: "Rattata"
      }
    ],
    MaxCP: 1304,
    MaxHP: 1444
  },
  {
    Number: "021",
    Name: "Spearow",
    Generation: "Generation I",
    About:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    Types: ["Normal", "Flying"],
    Resistant: ["Grass", "Ground", "Bug", "Ghost"],
    Weaknesses: ["Electric", "Ice", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Peck",
        Type: "Flying",
        Damage: 10
      },
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aerial Ace",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Drill Peck",
        Type: "Flying",
        Damage: 40
      },
      {
        Name: "Twister",
        Type: "Dragon",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "1.75kg",
      Maximum: "2.25kg"
    },
    Height: {
      Minimum: "0.26m",
      Maximum: "0.34m"
    },
    "Buddy Distance": "1km (Shoulder)",
    "Base Stamina": "80 stamina points.",
    "Base Attack": "112 attack points.",
    "Base Defense": "61 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Spearow candies"
    },
    "Next evolution(s)": [
      {
        Number: 22,
        Name: "Fearow"
      }
    ],
    MaxCP: 591,
    MaxHP: 686
  },
  {
    Number: "022",
    Name: "Fearow",
    Generation: "Generation I",
    About:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    Types: ["Normal", "Flying"],
    Resistant: ["Grass", "Ground", "Bug", "Ghost"],
    Weaknesses: ["Electric", "Ice", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Peck",
        Type: "Flying",
        Damage: 10
      },
      {
        Name: "Steel Wing",
        Type: "Steel",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Aerial Ace",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Drill Run",
        Type: "Ground",
        Damage: 50
      },
      {
        Name: "Twister",
        Type: "Dragon",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "33.25kg",
      Maximum: "42.75kg"
    },
    Height: {
      Minimum: "1.05m",
      Maximum: "1.35m"
    },
    "Buddy Distance": "1km (Flying)",
    "Base Stamina": "130 stamina points.",
    "Base Attack": "182 attack points.",
    "Base Defense": "135 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 21,
        Name: "Spearow"
      }
    ],
    MaxCP: 1592,
    MaxHP: 1746
  },
  {
    Number: "023",
    Name: "Ekans",
    Generation: "Generation I",
    About:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    Types: ["Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Acid",
        Type: "Poison",
        Damage: 10
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Gunk Shot",
        Type: "Poison",
        Damage: 65
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      },
      {
        Name: "Wrap",
        Type: "Normal",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "6.04kg",
      Maximum: "7.76kg"
    },
    Height: {
      Minimum: "1.75m",
      Maximum: "2.25m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "70 stamina points.",
    "Base Attack": "110 attack points.",
    "Base Defense": "102 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Ekans candies"
    },
    "Next evolution(s)": [
      {
        Number: 24,
        Name: "Arbok"
      }
    ],
    MaxCP: 718,
    MaxHP: 824
  },
  {
    Number: "024",
    Name: "Arbok",
    Generation: "Generation I",
    About:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    Types: ["Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Acid",
        Type: "Poison",
        Damage: 10
      },
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dark Pulse",
        Type: "Dark",
        Damage: 45
      },
      {
        Name: "Gunk Shot",
        Type: "Poison",
        Damage: 65
      },
      {
        Name: "Sludge Wave",
        Type: "Poison",
        Damage: 70
      }
    ],
    Weight: {
      Minimum: "56.88kg",
      Maximum: "73.13kg"
    },
    Height: {
      Minimum: "3.06m",
      Maximum: "3.94m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "167 attack points.",
    "Base Defense": "158 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 23,
        Name: "Ekans"
      }
    ],
    MaxCP: 1611,
    MaxHP: 1767
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
    Resistant: ["Electric", "Flying", "Steel"],
    Weaknesses: ["Ground"],
    "Fast Attack(s)": [
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      },
      {
        Name: "Thunder Shock",
        Type: "Electric",
        Damage: 5
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Discharge",
        Type: "Electric",
        Damage: 35
      },
      {
        Name: "Thunder",
        Type: "Electric",
        Damage: 100
      },
      {
        Name: "Thunderbolt",
        Type: "Electric",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "5.25kg",
      Maximum: "6.75kg"
    },
    Height: {
      Minimum: "0.35m",
      Maximum: "0.45m"
    },
    "Buddy Distance": "1km (Shoulder)",
    "Base Stamina": "70 stamina points.",
    "Base Attack": "112 attack points.",
    "Base Defense": "101 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 172,
        Name: "Pichu"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Pikachu candies"
    },
    "Next evolution(s)": [
      {
        Number: 26,
        Name: "Raichu"
      }
    ],
    MaxCP: 777,
    MaxHP: 887
  },
  {
    Number: "026",
    Name: "Raichu",
    Generation: "Generation I",
    About:
      "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    Types: ["Electric"],
    Resistant: ["Electric", "Flying", "Steel"],
    Weaknesses: ["Ground"],
    "Fast Attack(s)": [
      {
        Name: "Spark",
        Type: "Electric",
        Damage: 7
      },
      {
        Name: "Thunder Shock",
        Type: "Electric",
        Damage: 5
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Brick Break",
        Type: "Fighting",
        Damage: 30
      },
      {
        Name: "Thunder",
        Type: "Electric",
        Damage: 100
      },
      {
        Name: "Thunder Punch",
        Type: "Electric",
        Damage: 40
      }
    ],
    Weight: {
      Minimum: "26.25kg",
      Maximum: "33.75kg"
    },
    Height: {
      Minimum: "0.7m",
      Maximum: "0.9m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "193 attack points.",
    "Base Defense": "165 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 172,
        Name: "Pichu"
      },
      {
        Number: 25,
        Name: "Pikachu"
      }
    ],
    MaxCP: 1859,
    MaxHP: 2028
  },
  {
    Number: "027",
    Name: "Sandshrew",
    Generation: "Generation I",
    About:
      "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    Types: ["Ground"],
    Resistant: ["Electric", "Poison", "Rock"],
    Weaknesses: ["Water", "Grass", "Ice"],
    "Fast Attack(s)": [
      {
        Name: "Mud Shot",
        Type: "Ground",
        Damage: 6
      },
      {
        Name: "Scratch",
        Type: "Normal",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dig",
        Type: "Ground",
        Damage: 70
      },
      {
        Name: "Rock Slide",
        Type: "Rock",
        Damage: 50
      },
      {
        Name: "Rock Tomb",
        Type: "Rock",
        Damage: 30
      }
    ],
    Weight: {
      Minimum: "10.5kg",
      Maximum: "13.5kg"
    },
    Height: {
      Minimum: "0.53m",
      Maximum: "0.68m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "100 stamina points.",
    "Base Attack": "126 attack points.",
    "Base Defense": "145 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Sandshrew candies"
    },
    "Next evolution(s)": [
      {
        Number: 28,
        Name: "Sandslash"
      }
    ],
    MaxCP: 695,
    MaxHP: 798
  },
  {
    Number: "028",
    Name: "Sandslash",
    Generation: "Generation I",
    About:
      "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    Types: ["Ground"],
    Resistant: ["Electric", "Poison", "Rock"],
    Weaknesses: ["Water", "Grass", "Ice"],
    "Fast Attack(s)": [
      {
        Name: "Metal Claw",
        Type: "Steel",
        Damage: 8
      },
      {
        Name: "Mud Shot",
        Type: "Ground",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Bulldoze",
        Type: "Ground",
        Damage: 35
      },
      {
        Name: "Earthquake",
        Type: "Ground",
        Damage: 100
      },
      {
        Name: "Rock Tomb",
        Type: "Rock",
        Damage: 30
      }
    ],
    Weight: {
      Minimum: "25.81kg",
      Maximum: "33.19kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "150 stamina points.",
    "Base Attack": "182 attack points.",
    "Base Defense": "202 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 27,
        Name: "Sandshrew"
      }
    ],
    MaxCP: 1654,
    MaxHP: 1810
  },
  {
    Number: "029",
    Name: "Nidoran ♀",
    Generation: "Generation I",
    About:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    Types: ["Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Body Slam",
        Type: "Normal",
        Damage: 40
      },
      {
        Name: "Poison Fang",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "6.13kg",
      Maximum: "7.88kg"
    },
    Height: {
      Minimum: "0.35m",
      Maximum: "0.45m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "110 stamina points.",
    "Base Attack": "86 attack points.",
    "Base Defense": "94 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Nidoran Female candies"
    },
    "Next evolution(s)": [
      {
        Number: 30,
        Name: "Nidorina"
      },
      {
        Number: 31,
        Name: "Nidoqueen"
      }
    ],
    MaxCP: 768,
    MaxHP: 876
  },
  {
    Number: "030",
    Name: "Nidorina",
    Generation: "Generation I",
    About:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    Types: ["Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dig",
        Type: "Ground",
        Damage: 70
      },
      {
        Name: "Poison Fang",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "17.5kg",
      Maximum: "22.5kg"
    },
    Height: {
      Minimum: "0.7m",
      Maximum: "0.9m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "140 stamina points.",
    "Base Attack": "117 attack points.",
    "Base Defense": "126 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 29,
        Name: "Nidoran"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 100,
      Name: "Nidoran Female candies"
    },
    "Next evolution(s)": [
      {
        Number: 31,
        Name: "Nidoqueen"
      }
    ],
    MaxCP: 1267,
    MaxHP: 1404
  },
  {
    Number: "031",
    Name: "Nidoqueen",
    Generation: "Generation I",
    About:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    Types: ["Poison", "Ground"],
    Resistant: ["Electric", "Fighting", "Poison", "Bug", "Rock", "Fairy"],
    Weaknesses: ["Water", "Ice", "Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Poison Jab",
        Type: "Poison",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Earthquake",
        Type: "Ground",
        Damage: 100
      },
      {
        Name: "Sludge Wave",
        Type: "Poison",
        Damage: 70
      },
      {
        Name: "Stone Edge",
        Type: "Rock",
        Damage: 80
      }
    ],
    Weight: {
      Minimum: "52.5kg",
      Maximum: "67.5kg"
    },
    Height: {
      Minimum: "1.14m",
      Maximum: "1.46m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "180 stamina points.",
    "Base Attack": "180 attack points.",
    "Base Defense": "174 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 29,
        Name: "Nidoran"
      },
      {
        Number: 30,
        Name: "Nidorina"
      }
    ],
    MaxCP: 2301,
    MaxHP: 2485
  },
  {
    Number: "032",
    Name: "Nidoran ♂",
    Generation: "Generation I",
    About:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    Types: ["Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Peck",
        Type: "Flying",
        Damage: 10
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Body Slam",
        Type: "Normal",
        Damage: 40
      },
      {
        Name: "Horn Attack",
        Type: "Normal",
        Damage: 25
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "7.88kg",
      Maximum: "10.13kg"
    },
    Height: {
      Minimum: "0.44m",
      Maximum: "0.56m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "92 stamina points.",
    "Base Attack": "105 attack points.",
    "Base Defense": "76 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Nidoran Male candies"
    },
    "Next evolution(s)": [
      {
        Number: 33,
        Name: "Nidorino"
      },
      {
        Number: 34,
        Name: "Nidoking"
      }
    ],
    MaxCP: 737,
    MaxHP: 843
  },
  {
    Number: "033",
    Name: "Nidorino",
    Generation: "Generation I",
    About:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    Types: ["Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Poison Jab",
        Type: "Poison",
        Damage: 12
      },
      {
        Name: "Poison Sting",
        Type: "Poison",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dig",
        Type: "Ground",
        Damage: 70
      },
      {
        Name: "Horn Attack",
        Type: "Normal",
        Damage: 25
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "17.06kg",
      Maximum: "21.94kg"
    },
    Height: {
      Minimum: "0.79m",
      Maximum: "1.01m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "122 stamina points.",
    "Base Attack": "137 attack points.",
    "Base Defense": "112 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 32,
        Name: "Nidoran"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 100,
      Name: "Nidoran Male candies"
    },
    "Next evolution(s)": [
      {
        Number: 34,
        Name: "Nidoking"
      }
    ],
    MaxCP: 1236,
    MaxHP: 1372
  },
  {
    Number: "034",
    Name: "Nidoking",
    Generation: "Generation I",
    About:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    Types: ["Poison", "Ground"],
    Resistant: ["Electric", "Fighting", "Poison", "Bug", "Rock", "Fairy"],
    Weaknesses: ["Water", "Ice", "Ground", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Fury Cutter",
        Type: "Bug",
        Damage: 3
      },
      {
        Name: "Poison Jab",
        Type: "Poison",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Earthquake",
        Type: "Ground",
        Damage: 100
      },
      {
        Name: "Megahorn",
        Type: "Bug",
        Damage: 80
      },
      {
        Name: "Sludge Wave",
        Type: "Poison",
        Damage: 70
      }
    ],
    Weight: {
      Minimum: "54.25kg",
      Maximum: "69.75kg"
    },
    Height: {
      Minimum: "1.22m",
      Maximum: "1.57m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "162 stamina points.",
    "Base Attack": "204 attack points.",
    "Base Defense": "157 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 32,
        Name: "Nidoran"
      },
      {
        Number: 33,
        Name: "Nidorino"
      }
    ],
    MaxCP: 2291,
    MaxHP: 2475
  },
  {
    Number: "035",
    Name: "Clefairy",
    Generation: "Generation I",
    About:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    Types: ["Fairy"],
    Resistant: ["Fighting", "Bug", "Dragon", "Dark"],
    Weaknesses: ["Poison", "Steel"],
    "Fast Attack(s)": [
      {
        Name: "Pound",
        Type: "Normal",
        Damage: 7
      },
      {
        Name: "Zen Headbutt",
        Type: "Psychic",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Body Slam",
        Type: "Normal",
        Damage: 40
      },
      {
        Name: "Disarming Voice",
        Type: "Fairy",
        Damage: 25
      },
      {
        Name: "Moonblast",
        Type: "Fairy",
        Damage: 85
      }
    ],
    Weight: {
      Minimum: "6.56kg",
      Maximum: "8.44kg"
    },
    Height: {
      Minimum: "0.53m",
      Maximum: "0.68m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "140 stamina points.",
    "Base Attack": "107 attack points.",
    "Base Defense": "116 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 173,
        Name: "Cleffa"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Clefairy candies"
    },
    "Next evolution(s)": [
      {
        Number: 36,
        Name: "Clefable"
      }
    ],
    MaxCP: 1074,
    MaxHP: 1200
  },
  {
    Number: "036",
    Name: "Clefable",
    Generation: "Generation I",
    About:
      "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step even lets it walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    Types: ["Fairy"],
    Resistant: ["Fighting", "Bug", "Dragon", "Dark"],
    Weaknesses: ["Poison", "Steel"],
    "Fast Attack(s)": [
      {
        Name: "Pound",
        Type: "Normal",
        Damage: 7
      },
      {
        Name: "Zen Headbutt",
        Type: "Psychic",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dazzling Gleam",
        Type: "Fairy",
        Damage: 55
      },
      {
        Name: "Moonblast",
        Type: "Fairy",
        Damage: 85
      },
      {
        Name: "Psychic",
        Type: "Psychic",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "35kg",
      Maximum: "45kg"
    },
    Height: {
      Minimum: "1.14m",
      Maximum: "1.46m"
    },
    "Buddy Distance": "1km (Big)",
    "Base Stamina": "190 stamina points.",
    "Base Attack": "178 attack points.",
    "Base Defense": "171 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 173,
        Name: "Cleffa"
      },
      {
        Number: 35,
        Name: "Clefairy"
      }
    ],
    MaxCP: 2217,
    MaxHP: 2397
  },
  {
    Number: "037",
    Name: "Vulpix",
    Generation: "Generation I",
    About:
      "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its trainer. The six tails become magnificently curled.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Ember",
        Type: "Fire",
        Damage: 10
      },
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Body Slam",
        Type: "Normal",
        Damage: 40
      },
      {
        Name: "Flame Charge",
        Type: "Fire",
        Damage: 25
      },
      {
        Name: "Flamethrower",
        Type: "Fire",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "8.66kg",
      Maximum: "11.14kg"
    },
    Height: {
      Minimum: "0.53m",
      Maximum: "0.68m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "76 stamina points.",
    "Base Attack": "96 attack points.",
    "Base Defense": "122 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Vulpi"
    },
    "Next evolution(s)": [
      {
        Number: 38,
        Name: "Ninetales"
      }
    ],
    MaxCP: 725,
    MaxHP: 831
  },
  {
    Number: "038",
    Name: "Ninetales",
    Generation: "Generation I",
    About:
      "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for one thousand years.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Ember",
        Type: "Fire",
        Damage: 10
      },
      {
        Name: "Feint Attack",
        Type: "Dark",
        Damage: 12
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Fire Blast",
        Type: "Fire",
        Damage: 100
      },
      {
        Name: "Flamethrower",
        Type: "Fire",
        Damage: 55
      },
      {
        Name: "Heat Wave",
        Type: "Fire",
        Damage: 80
      }
    ],
    Weight: {
      Minimum: "17.41kg",
      Maximum: "22.39kg"
    },
    Height: {
      Minimum: "0.96m",
      Maximum: "1.24m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "146 stamina points.",
    "Base Attack": "169 attack points.",
    "Base Defense": "204 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 37,
        Name: "Vulpix"
      }
    ],
    MaxCP: 2015,
    MaxHP: 2188
  },
  {
    Number: "039",
    Name: "Jigglypuff",
    Generation: "Generation I",
    About:
      "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    Types: ["Normal", "Fairy"],
    Resistant: ["Bug", "Ghost", "Dragon", "Dark"],
    Weaknesses: ["Poison", "Steel"],
    "Fast Attack(s)": [
      {
        Name: "Feint Attack",
        Type: "Dark",
        Damage: 12
      },
      {
        Name: "Pound",
        Type: "Normal",
        Damage: 7
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Body Slam",
        Type: "Normal",
        Damage: 40
      },
      {
        Name: "Dazzling Gleam",
        Type: "Fairy",
        Damage: 55
      },
      {
        Name: "Disarming Voice",
        Type: "Fairy",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "4.81kg",
      Maximum: "6.19kg"
    },
    Height: {
      Minimum: "0.44m",
      Maximum: "0.56m"
    },
    "Buddy Distance": "1km (Medium)",
    "Base Stamina": "230 stamina points.",
    "Base Attack": "80 attack points.",
    "Base Defense": "44 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 174,
        Name: "Igglybuff"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Jigglypuff candies"
    },
    "Next evolution(s)": [
      {
        Number: 40,
        Name: "Wigglytuff"
      }
    ],
    MaxCP: 796,
    MaxHP: 917
  },
  {
    Number: "040",
    Name: "Wigglytuff",
    Generation: "Generation I",
    About:
      "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    Types: ["Normal", "Fairy"],
    Resistant: ["Bug", "Ghost", "Dragon", "Dark"],
    Weaknesses: ["Poison", "Steel"],
    "Fast Attack(s)": [
      {
        Name: "Feint Attack",
        Type: "Dark",
        Damage: 12
      },
      {
        Name: "Pound",
        Type: "Normal",
        Damage: 7
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dazzling Gleam",
        Type: "Fairy",
        Damage: 55
      },
      {
        Name: "Hyper Beam",
        Type: "Normal",
        Damage: 120
      },
      {
        Name: "Play Rough",
        Type: "Fairy",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "10.5kg",
      Maximum: "13.5kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "1km (Big)",
    "Base Stamina": "280 stamina points.",
    "Base Attack": "156 attack points.",
    "Base Defense": "93 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 174,
        Name: "Igglybuff"
      },
      {
        Number: 39,
        Name: "Jigglypuff"
      }
    ],
    MaxCP: 1997,
    MaxHP: 2177
  },
  {
    Number: "041",
    Name: "Zubat",
    Generation: "Generation I",
    About:
      "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
    Types: ["Poison", "Flying"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Quick Attack",
        Type: "Normal",
        Damage: 10
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Air Cutter",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Poison Fang",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "6.56kg",
      Maximum: "8.44kg"
    },
    Height: {
      Minimum: "0.7m",
      Maximum: "0.9m"
    },
    "Buddy Distance": "1km (Flying)",
    "Base Stamina": "80 stamina points.",
    "Base Attack": "83 attack points.",
    "Base Defense": "76 defense points.",
    "Base Flee Rate": "20% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Zubat candies"
    },
    "Next evolution(s)": [
      {
        Number: 42,
        Name: "Golbat"
      },
      {
        Number: 169,
        Name: "Crobat"
      }
    ],
    MaxCP: 550,
    MaxHP: 642
  },
  {
    Number: "042",
    Name: "Golbat",
    Generation: "Generation I",
    About:
      "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
    Types: ["Poison", "Flying"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bite",
        Type: "Dark",
        Damage: 6
      },
      {
        Name: "Wing Attack",
        Type: "Flying",
        Damage: 9
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Air Cutter",
        Type: "Flying",
        Damage: 30
      },
      {
        Name: "Ominous Wind",
        Type: "Ghost",
        Damage: 30
      },
      {
        Name: "Poison Fang",
        Type: "Poison",
        Damage: 25
      }
    ],
    Weight: {
      Minimum: "48.13kg",
      Maximum: "61.88kg"
    },
    Height: {
      Minimum: "1.4m",
      Maximum: "1.8m"
    },
    "Buddy Distance": "1km (Flying)",
    "Base Stamina": "150 stamina points.",
    "Base Attack": "161 attack points.",
    "Base Defense": "153 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 41,
        Name: "Zubat"
      }
    ],
    "Next evolution(s)": [
      {
        Number: 169,
        Name: "Crobat"
      }
    ],
    MaxCP: 1760,
    MaxHP: 1921
  },
  {
    Number: "043",
    Name: "Oddish",
    Generation: "Generation I",
    About:
      "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    Types: ["Grass", "Poison"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Acid",
        Type: "Poison",
        Damage: 10
      },
      {
        Name: "Razor Leaf",
        Type: "Grass",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Moonblast",
        Type: "Fairy",
        Damage: 85
      },
      {
        Name: "Seed Bomb",
        Type: "Grass",
        Damage: 40
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "4.73kg",
      Maximum: "6.08kg"
    },
    Height: {
      Minimum: "0.44m",
      Maximum: "0.56m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "90 stamina points.",
    "Base Attack": "131 attack points.",
    "Base Defense": "116 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 25,
      Name: "Oddish candies"
    },
    "Next evolution(s)": [
      {
        Number: 44,
        Name: "Gloom"
      },
      {
        Number: 45,
        Name: "Vileplume"
      },
      {
        Number: 182,
        Name: "Bellossom"
      }
    ],
    MaxCP: 1023,
    MaxHP: 1148
  },
  {
    Number: "044",
    Name: "Gloom",
    Generation: "Generation I",
    About:
      "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    Types: ["Grass", "Poison"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Acid",
        Type: "Poison",
        Damage: 10
      },
      {
        Name: "Razor Leaf",
        Type: "Grass",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Moonblast",
        Type: "Fairy",
        Damage: 85
      },
      {
        Name: "Petal Blizzard",
        Type: "Grass",
        Damage: 65
      },
      {
        Name: "Sludge Bomb",
        Type: "Poison",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "7.53kg",
      Maximum: "9.68kg"
    },
    Height: {
      Minimum: "0.7m",
      Maximum: "0.9m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "153 attack points.",
    "Base Defense": "139 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 43,
        Name: "Oddish"
      }
    ],
    "Next Evolution Requirements": {
      Amount: 100,
      Name: "Oddish candies"
    },
    "Next evolution(s)": [
      {
        Number: 45,
        Name: "Vileplume"
      },
      {
        Number: 182,
        Name: "Bellossom"
      }
    ],
    MaxCP: 1537,
    MaxHP: 1689
  },
  {
    Number: "045",
    Name: "Vileplume",
    Generation: "Generation I",
    About:
      "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    Types: ["Grass", "Poison"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    "Fast Attack(s)": [
      {
        Name: "Acid",
        Type: "Poison",
        Damage: 10
      },
      {
        Name: "Razor Leaf",
        Type: "Grass",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Moonblast",
        Type: "Fairy",
        Damage: 85
      },
      {
        Name: "Petal Blizzard",
        Type: "Grass",
        Damage: 65
      },
      {
        Name: "Solar Beam",
        Type: "Grass",
        Damage: 120
      }
    ],
    Weight: {
      Minimum: "16.28kg",
      Maximum: "20.93kg"
    },
    Height: {
      Minimum: "1.05m",
      Maximum: "1.35m"
    },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "150 stamina points.",
    "Base Attack": "202 attack points.",
    "Base Defense": "170 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 43,
        Name: "Oddish"
      },
      {
        Number: 44,
        Name: "Gloom"
      }
    ],
    MaxCP: 2307,
    MaxHP: 2492
  },
  {
    Number: "046",
    Name: "Paras",
    Generation: "Generation I",
    About:
      "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
    Types: ["Bug", "Grass"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Ground"],
    Weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Scratch",
        Type: "Normal",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Cross Poison",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Seed Bomb",
        Type: "Grass",
        Damage: 40
      },
      {
        Name: "X Scissor",
        Type: "Bug",
        Damage: 35
      }
    ],
    Weight: {
      Minimum: "4.73kg",
      Maximum: "6.08kg"
    },
    Height: {
      Minimum: "0.26m",
      Maximum: "0.34m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "70 stamina points.",
    "Base Attack": "121 attack points.",
    "Base Defense": "99 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Paras candies"
    },
    "Next evolution(s)": [
      {
        Number: 47,
        Name: "Parasect"
      }
    ],
    MaxCP: 804,
    MaxHP: 916
  },
  {
    Number: "047",
    Name: "Parasect",
    Generation: "Generation I",
    About:
      "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
    Types: ["Bug", "Grass"],
    Resistant: ["Water", "Electric", "Grass", "Fighting", "Ground"],
    Weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Fury Cutter",
        Type: "Bug",
        Damage: 3
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Cross Poison",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Solar Beam",
        Type: "Grass",
        Damage: 120
      },
      {
        Name: "X Scissor",
        Type: "Bug",
        Damage: 35
      }
    ],
    Weight: {
      Minimum: "25.81kg",
      Maximum: "33.19kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "165 attack points.",
    "Base Defense": "146 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 46,
        Name: "Paras"
      }
    ],
    MaxCP: 1592,
    MaxHP: 1747
  },
  {
    Number: "048",
    Name: "Venonat",
    Generation: "Generation I",
    About:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even miniscule prey.",
    Types: ["Bug", "Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Confusion",
        Type: "Psychic",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Poison Fang",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Psybeam",
        Type: "Psychic",
        Damage: 40
      },
      {
        Name: "Signal Beam",
        Type: "Bug",
        Damage: 45
      }
    ],
    Weight: {
      Minimum: "26.25kg",
      Maximum: "33.75kg"
    },
    Height: {
      Minimum: "0.88m",
      Maximum: "1.13m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "120 stamina points.",
    "Base Attack": "100 attack points.",
    "Base Defense": "102 defense points.",
    "Base Flee Rate": "15% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Venonat candies"
    },
    "Next evolution(s)": [
      {
        Number: 49,
        Name: "Venomoth"
      }
    ],
    MaxCP: 912,
    MaxHP: 1029
  },
  {
    Number: "049",
    Name: "Venomoth",
    Generation: "Generation I",
    About:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    Types: ["Bug", "Poison"],
    Resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    Weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
    "Fast Attack(s)": [
      {
        Name: "Bug Bite",
        Type: "Bug",
        Damage: 5
      },
      {
        Name: "Confusion",
        Type: "Psychic",
        Damage: 15
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Bug Buzz",
        Type: "Bug",
        Damage: 75
      },
      {
        Name: "Poison Fang",
        Type: "Poison",
        Damage: 25
      },
      {
        Name: "Psychic",
        Type: "Psychic",
        Damage: 55
      }
    ],
    Weight: {
      Minimum: "10.94kg",
      Maximum: "14.06kg"
    },
    Height: {
      Minimum: "1.31m",
      Maximum: "1.69m"
    },
    "Buddy Distance": "3km (Flying)",
    "Base Stamina": "140 stamina points.",
    "Base Attack": "179 attack points.",
    "Base Defense": "150 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        Number: 48,
        Name: "Venonat"
      }
    ],
    MaxCP: 1730,
    MaxHP: 1890
  },
  {
    Number: "050",
    Name: "Diglett",
    Generation: "Generation I",
    About:
      "Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
    Types: ["Ground"],
    Resistant: ["Electric", "Poison", "Rock"],
    Weaknesses: ["Water", "Grass", "Ice"],
    "Fast Attack(s)": [
      {
        Name: "Mud Slap",
        Type: "Ground",
        Damage: 15
      },
      {
        Name: "Scratch",
        Type: "Normal",
        Damage: 6
      }
    ],
    "Special Attack(s)": [
      {
        Name: "Dig",
        Type: "Ground",
        Damage: 70
      },
      {
        Name: "Mud Bomb",
        Type: "Ground",
        Damage: 30
      },
      {
        Name: "Rock Tomb",
        Type: "Rock",
        Damage: 30
      }
    ],
    Weight: {
      Minimum: "0.7kg",
      Maximum: "0.9kg"
    },
    Height: {
      Minimum: "0.18m",
      Maximum: "0.23m"
    },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "20 stamina points.",
    "Base Attack": "109 attack points.",
    "Base Defense": "88 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": {
      Amount: 50,
      Name: "Diglett candies"
    },
    "Next evolution(s)": [
      {
        Number: 51,
        Name: "Dugtrio"
      }
    ],
    MaxCP: 365,
    MaxHP: 456
  }
];

const getNamesExpected = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran ♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran ♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett"
];

const getPokemonByNameExpected = {
  Number: "025",
  Name: "Pikachu",
  Generation: "Generation I",
  About:
    "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  Types: ["Electric"],
  Resistant: ["Electric", "Flying", "Steel"],
  Weaknesses: ["Ground"],
  "Fast Attack(s)": [
    { Name: "Quick Attack", Type: "Normal", Damage: 10 },
    { Name: "Thunder Shock", Type: "Electric", Damage: 5 }
  ],
  "Special Attack(s)": [
    { Name: "Discharge", Type: "Electric", Damage: 35 },
    { Name: "Thunder", Type: "Electric", Damage: 100 },
    { Name: "Thunderbolt", Type: "Electric", Damage: 55 }
  ],
  Weight: { Minimum: "5.25kg", Maximum: "6.75kg" },
  Height: { Minimum: "0.35m", Maximum: "0.45m" },
  "Buddy Distance": "1km (Shoulder)",
  "Base Stamina": "70 stamina points.",
  "Base Attack": "112 attack points.",
  "Base Defense": "101 defense points.",
  "Base Flee Rate": "10% chance to flee.",
  "Previous evolution(s)": [{ Number: 172, Name: "Pichu" }],
  "Next Evolution Requirements": { Amount: 50, Name: "Pikachu candies" },
  "Next evolution(s)": [{ Number: 26, Name: "Raichu" }],
  MaxCP: 777,
  MaxHP: 887
};

const getAvgMaxCPExpected = 1251.1836734693877;

const getResistantPokemonExpected = [
  {
    Number: "004",
    Name: "Charmander",
    Generation: "Generation I",
    About:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      { Name: "Ember", Type: "Fire", Damage: 10 },
      { Name: "Scratch", Type: "Normal", Damage: 6 }
    ],
    "Special Attack(s)": [
      { Name: "Flame Burst", Type: "Fire", Damage: 30 },
      { Name: "Flame Charge", Type: "Fire", Damage: 25 },
      { Name: "Flamethrower", Type: "Fire", Damage: 55 }
    ],
    Weight: { Minimum: "7.44kg", Maximum: "9.56kg" },
    Height: { Minimum: "0.53m", Maximum: "0.68m" },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "78 stamina points.",
    "Base Attack": "116 attack points.",
    "Base Defense": "96 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": { Amount: 25, Name: "Charmander candies" },
    "Next evolution(s)": [
      { Number: 5, Name: "Charmeleon" },
      { Number: 6, Name: "Charizard" }
    ],
    MaxCP: 841,
    MaxHP: 955
  },
  {
    Number: "005",
    Name: "Charmeleon",
    Generation: "Generation I",
    About:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      { Name: "Ember", Type: "Fire", Damage: 10 },
      { Name: "Scratch", Type: "Normal", Damage: 6 }
    ],
    "Special Attack(s)": [
      { Name: "Fire Punch", Type: "Fire", Damage: 40 },
      { Name: "Flame Burst", Type: "Fire", Damage: 30 },
      { Name: "Flamethrower", Type: "Fire", Damage: 55 }
    ],
    Weight: { Minimum: "16.63kg", Maximum: "21.38kg" },
    Height: { Minimum: "0.96m", Maximum: "1.24m" },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "116 stamina points.",
    "Base Attack": "158 attack points.",
    "Base Defense": "129 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [{ Number: 4, Name: "Charmander" }],
    "Next Evolution Requirements": { Amount: 100, Name: "Charmander candies" },
    "Next evolution(s)": [{ Number: 6, Name: "Charizard" }],
    MaxCP: 1411,
    MaxHP: 1557
  },
  {
    Number: "006",
    Name: "Charizard",
    Generation: "Generation I",
    About:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    Types: ["Fire", "Flying"],
    Resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Electric", "Rock"],
    "Fast Attack(s)": [
      { Name: "Ember", Type: "Fire", Damage: 10 },
      { Name: "Wing Attack", Type: "Flying", Damage: 9 }
    ],
    "Special Attack(s)": [
      { Name: "Dragon Claw", Type: "Dragon", Damage: 35 },
      { Name: "Fire Blast", Type: "Fire", Damage: 100 },
      { Name: "Flamethrower", Type: "Fire", Damage: 55 }
    ],
    Weight: { Minimum: "79.19kg", Maximum: "101.81kg" },
    Height: { Minimum: "1.49m", Maximum: "1.91m" },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "156 stamina points.",
    "Base Attack": "223 attack points.",
    "Base Defense": "176 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      { Number: 4, Name: "Charmander" },
      { Number: 5, Name: "Charmeleon" }
    ],
    MaxCP: 2413,
    MaxHP: 2602
  },
  {
    Number: "007",
    Name: "Squirtle",
    Generation: "Generation I",
    About:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    Types: ["Water"],
    Resistant: ["Fire", "Water", "Ice", "Steel"],
    Weaknesses: ["Electric", "Grass"],
    "Fast Attack(s)": [
      { Name: "Bubble", Type: "Water", Damage: 25 },
      { Name: "Tackle", Type: "Normal", Damage: 12 }
    ],
    "Special Attack(s)": [
      { Name: "Aqua Jet", Type: "Water", Damage: 25 },
      { Name: "Aqua Tail", Type: "Water", Damage: 45 },
      { Name: "Water Pulse", Type: "Water", Damage: 35 }
    ],
    Weight: { Minimum: "7.88kg", Maximum: "10.13kg" },
    Height: { Minimum: "0.44m", Maximum: "0.56m" },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "88 stamina points.",
    "Base Attack": "94 attack points.",
    "Base Defense": "122 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": { Amount: 25, Name: "Squirtle candies" },
    "Next evolution(s)": [
      { Number: 8, Name: "Wartortle" },
      { Number: 9, Name: "Blastoise" }
    ],
    MaxCP: 891,
    MaxHP: 1008
  },
  {
    Number: "008",
    Name: "Wartortle",
    Generation: "Generation I",
    About:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    Types: ["Water"],
    Resistant: ["Fire", "Water", "Ice", "Steel"],
    Weaknesses: ["Electric", "Grass"],
    "Fast Attack(s)": [
      { Name: "Bite", Type: "Dark", Damage: 6 },
      { Name: "Water Gun", Type: "Water", Damage: 6 }
    ],
    "Special Attack(s)": [
      { Name: "Aqua Jet", Type: "Water", Damage: 25 },
      { Name: "Hydro Pump", Type: "Water", Damage: 90 },
      { Name: "Ice Beam", Type: "Ice", Damage: 65 }
    ],
    Weight: { Minimum: "19.69kg", Maximum: "25.31kg" },
    Height: { Minimum: "0.88m", Maximum: "1.13m" },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "118 stamina points.",
    "Base Attack": "126 attack points.",
    "Base Defense": "155 defense points.",
    "Base Flee Rate": "7% chance to flee.",
    "Previous evolution(s)": [{ Number: 7, Name: "Squirtle" }],
    "Next Evolution Requirements": { Amount: 100, Name: "Squirtle candies" },
    "Next evolution(s)": [{ Number: 9, Name: "Blastoise" }],
    MaxCP: 1435,
    MaxHP: 1582
  },
  {
    Number: "009",
    Name: "Blastoise",
    Generation: "Generation I",
    About:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    Types: ["Water"],
    Resistant: ["Fire", "Water", "Ice", "Steel"],
    Weaknesses: ["Electric", "Grass"],
    "Fast Attack(s)": [
      { Name: "Bite", Type: "Dark", Damage: 6 },
      { Name: "Water Gun", Type: "Water", Damage: 6 }
    ],
    "Special Attack(s)": [
      { Name: "Flash Cannon", Type: "Steel", Damage: 60 },
      { Name: "Hydro Pump", Type: "Water", Damage: 90 },
      { Name: "Ice Beam", Type: "Ice", Damage: 65 }
    ],
    Weight: { Minimum: "74.81kg", Maximum: "96.19kg" },
    Height: { Minimum: "1.4m", Maximum: "1.8m" },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "158 stamina points.",
    "Base Attack": "171 attack points.",
    "Base Defense": "210 defense points.",
    "Base Flee Rate": "5% chance to flee.",
    "Previous evolution(s)": [
      { Number: 7, Name: "Squirtle" },
      { Number: 8, Name: "Wartortle" }
    ],
    MaxCP: 2355,
    MaxHP: 2542
  },
  {
    Number: "037",
    Name: "Vulpix",
    Generation: "Generation I",
    About:
      "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its trainer. The six tails become magnificently curled.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      { Name: "Ember", Type: "Fire", Damage: 10 },
      { Name: "Quick Attack", Type: "Normal", Damage: 10 }
    ],
    "Special Attack(s)": [
      { Name: "Body Slam", Type: "Normal", Damage: 40 },
      { Name: "Flame Charge", Type: "Fire", Damage: 25 },
      { Name: "Flamethrower", Type: "Fire", Damage: 55 }
    ],
    Weight: { Minimum: "8.66kg", Maximum: "11.14kg" },
    Height: { Minimum: "0.53m", Maximum: "0.68m" },
    "Buddy Distance": "3km (Medium)",
    "Base Stamina": "76 stamina points.",
    "Base Attack": "96 attack points.",
    "Base Defense": "122 defense points.",
    "Base Flee Rate": "10% chance to flee.",
    "Next Evolution Requirements": { Amount: 50, Name: "Vulpi" },
    "Next evolution(s)": [{ Number: 38, Name: "Ninetales" }],
    MaxCP: 725,
    MaxHP: 831
  },
  {
    Number: "038",
    Name: "Ninetales",
    Generation: "Generation I",
    About:
      "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for one thousand years.",
    Types: ["Fire"],
    Resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    Weaknesses: ["Water", "Ground", "Rock"],
    "Fast Attack(s)": [
      { Name: "Ember", Type: "Fire", Damage: 10 },
      { Name: "Feint Attack", Type: "Dark", Damage: 12 }
    ],
    "Special Attack(s)": [
      { Name: "Fire Blast", Type: "Fire", Damage: 100 },
      { Name: "Flamethrower", Type: "Fire", Damage: 55 },
      { Name: "Heat Wave", Type: "Fire", Damage: 80 }
    ],
    Weight: { Minimum: "17.41kg", Maximum: "22.39kg" },
    Height: { Minimum: "0.96m", Maximum: "1.24m" },
    "Buddy Distance": "3km (Big)",
    "Base Stamina": "146 stamina points.",
    "Base Attack": "169 attack points.",
    "Base Defense": "204 defense points.",
    "Base Flee Rate": "6% chance to flee.",
    "Previous evolution(s)": [{ Number: 37, Name: "Vulpix" }],
    MaxCP: 2015,
    MaxHP: 2188
  }
];

const getResistantPokemonNamesExpected = [
  "Charmander",
  "Charmeleon",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Vulpix",
  "Ninetales"
];

const getWeaknessCountsExpected = {
  Fire: 16,
  Ice: 20,
  Flying: 16,
  Psychic: 21,
  Water: 10,
  Ground: 14,
  Rock: 21,
  Electric: 11,
  Grass: 6,
  Fighting: 2,
  Poison: 6,
  Steel: 4,
  Bug: 2
};
