export const armyRules = {
  Sorgax: [
    {
      name: "Heralds of the Torment",
      description:
        "The Sorgax General may issue one additional free order per cycle if the opponent has suffered certain losses during the battle. Check how many Blood Points (BP) your opponent has lost so far and compare it with the table below to find out what score you need to get to successfully issue the free order.",
    },
  ],
  Arox: [
    {
      name: "Hot Blood",
      description: "The Arox army may re-roll an Initiative Test.",
    },
  ],
  Vaendral: [
    {
      name: "Born Warriors",
      description:
        "The Vaendral army may re-roll a score of 1 or 6 scored during the Activation Roll.",
    },
  ],
  Dirandis: [
    {
      name: "Devoted to Gods",
      description:
        "Basic and Elite Units in the Dirandis army may re-roll failed Prayer Tests.",
    },
  ],
  "Sheol-morg - Lord of the Abyss": [
    {
      name: "Lord of the Abyss – Darkness is coming...",
      description:
        "The player is allowed to activate one unit more or less than shown in the Activation Roll. At least 1 unit must always be activated.",
    },
  ],
  "Sheol-morg - Lord Necromancer": [
    {
      name: "Lord Necromancer – Your Souls Belong to Us!",
      description: [
        "If the Lord Necromancer’s opponent rolls a 1 or 2 in an Initiative Test, he loses the test regardless of other rules, magic items, modifiers, or re-roll opportunities.",
        "Also, if the enemy has lost 5 or more Blood Points, you may roll a d6 once per cycle when activating the Lord Necromancer. A score of 2 or less means you can place a unit of The Damned* (4 bases) facing any direction without an Action Die within 20 cm of the Lord Necromancer. In a new cycle, the unit receives an Action Die and can be activated normally. It does not count towards lost Blood Points when destroyed.",
        "The Damned: LD 3 – M 10 – WS 2 – S 2 – T 2 – A 2 – W 1 (Fearless, Creature) (use the miniatures of Sozruits or Barbarians, painting them in rotten colours.)",
      ],
    },
  ],
  "Sheol-morg - Lord of Sheol-morg": [
    {
      name: "Lord of Sheol-morg – Ab... huul! Daaqul, salib!!!",
      description: [
        "The Ritual Master (Mage) always joins the army for free. He is not included in the Mages limit and cannot have magic items. Before the battle, the Mage performs a special ritual. Roll a d6 to see what bonus the units will get.",
        "1–2 Ritual of the Beast: Each Basic and Elite Unit in the army has movement and charge increased by 2 cm.",
        "3–4 Ritual of the Pain: Each Basic and Elite Unit in the army, if it has no protection or armour, may always roll a d6 for each Wound it is dealt. On a score of 1, the Wound is cancelled.",
        "5–6 Ritual of the Darkness: Each Basic and Elite Unit in the army has the Fear rule. After a successful charge with this unit, the enemy must take a Panic Test for 1 base. If the unit is a horde, the enemy must take a Panic Test for 2 bases.",
      ],
    },
  ],
  Gaeldor: [
    {
      name: "The Wrath of the Forest",
      description:
        "In the Gaeldor army, units (but not single models) may change any 1 scored when moving or charging to a score of 4.",
    },
  ],
};

const specialRules = {
  ironDiscipline: {
    name: "Iron Discipline",
    description:
      "Orders issued to this unit can be rerolled, and each score of 1 means a free order.",
  },
  responsive: {
    name: "Responsive",
    description: "This unit can be issued an order in 40 cm from the General.",
  },
  spearStorm: {
    name: "Spear Storm",
    description: "This unit always attacks also with the second rank.",
  },
  sneaky: {
    name: "Sneaky",
    description:
      "This unit gets an additional +2 bonus for attacking the enemy’s flank or rear.",
  },
  battleInspiration: {
    name: "Battle Inspiration",
    description:
      "A hero attached to this unit gives +2 additional attacks to the pool.",
  },
  willToFight: {
    name: "Will to Fight",
    description:
      "If this unit destroyed an enemy unit, it can move up to 10 cm instead of 5 cm.",
  },
  poisonousSpit: {
    name: "Poisonous Spit",
    description:
      "After Ropuchons finish their attacks, they can additionally spit on the opponent. Roll a d6 for each Ropuchon that is in full base contact with the enemy. The opponent has to take a Panic Test for each score of 1 or 2.",
  },
  vigilant: {
    name: "Vigilant",
    description:
      "The enemy unit does not receive bonuses for attacking this unit’s flank or rear",
  },
  enslaved: {
    name: "Enslaved",
    description:
      " The opponent gains Blood Points for bases from this unit only after destroying the entire unit.",
  },
  fearless: {
    name: "Fearless",
    description: "This unit always passes a Cold Blood Test and a Panic Test.",
  },
  snakeMove: {
    name: "Snake Move",
    description:
      "This unit can move or charge through enemy or friendly units if its move ends outside the unit that it was moving or charging through.",
  },
  creature: {
    name: "Creature",
    description: "This unit cannot pray.",
  },
  primalRampage: {
    name: "Primal Rampage",
    description:
      "When charging, Desauros must take a d6 test to see if it goes berserk. A score of 2 or less means Desauros gains +3 Attacks.",
  },
  tombAltar: {
    name: "Tomb Altar",
    description:
      "Each Wound the Desauros with Tomb Altar deals to the opponent means the Desauros gains 1 Wound. Desauros may have a maximum of 12 Wounds.",
  },
  hammerStrike: {
    name: "Hammer Strike",
    description:
      "For each score of 1 and 2 in the Wound Test, this unit can roll an additional d6 for wounding. The obtained scores do not generate the new ones.",
  },
  commandGroup: {
    name: "Command Group",
    description: [
      "If a Command Group is attached to a friendly unit, that unit receives 1 additional attack when attacking the enemy. If the Command Group is in 5 cm from a friendly unit, that unit may use special rules:",
      "After declaring a charge, the unit can (even despite the difficulties or obstacles) roll 3d6 for the charge instead of the roll that he could normally make, and choose 2 highest scores.",
      "The unit can make a special sideways or backwards move up to 5 cm + d6 instead of its standard move or charge",
      "The unit can re-roll the failed Panic Test.",
    ],
  },
  faithful: {
    name: "Faithful",
    description: ["When praying, this unit gets +1 to LD."],
  },
  agile: {
    name: "Agile",
    description: [
      "This unit can always re-roll one d6 when moving or charging.",
    ],
  },
  goldArmour: {
    name: "Gold Armour",
    description: [
      "Each Wound dealt to this unit can be cancelled by an exceptional armour. Roll a d6. A score of 2 or less means a cancelled Wound.",
    ],
  },
  immunity: {
    name: "Immunity",
    description:
      "When this unit takes a Panic Test, it is failed only on a score of 6.",
  },
  tearing: {
    name: "Tearing",
    description: "When charging, this unit has WS 4.",
  },
  sunMonolith: {
    name: "Sun Monolith",
    description:
      "Roll a d6 for each Wound Desauros lost in combat. A score of 2 or less means that the chosen unit or single model within 20 cm is dealt 2 Wounds.",
  },
  livingCatapult: {
    name: "Living Catapult",
    description:
      "Once per cycle, Forgon can spit at a target enemy within 20 cm that is not engaged in combat. Roll a d6. A score of 3 or less means the enemy unit must take a Panic Test for its 3 bases.",
  },
  bloodshed: {
    name: "Bloodshed",
    description: "This unit may re-roll all failed scores in the Wound Test.",
  },
  lightShieldDefence: {
    name: "Light Shield Defence",
    description:
      "For each Wound dealt to this unit, roll a d6 for the Light Shield Defence. Each score of 1 means a cancelled Wound.",
  },
  wildCharge: {
    name: "Wild Charge",
    description: "When charging, this unit gets +1 to S.",
  },
  fury: {
    name: "Fury",
    description:
      "When charging, this unit gets +2 additional attacks to the pool.",
  },
  scare: {
    name: "Scare",
    description:
      "The enemy unit that is in base contact with this unit, must take a Panic Test at the end of the cycle for each base lost earlier in the same cycle.",
  },
  cult: {
    name: "Cult",
    description:
      "The enemy gains 1 Blood Point for destroying two bases instead of one in this unit.",
  },
  theGodOfSlaughterBlessing: {
    name: "The God of Slaughter Blessing",
    description: "When praying, Sozruits have LD 10.",
  },
  crushingBlow: {
    name: "Crushing Blow",
    description:
      "When charging, each successful score in the Weapon Skill Test made by this unit is considered a Double Hit.",
  },
  keenSenses: {
    name: "Keen Senses",
    description: "This unit can turn freely before making a move or charge.",
  },
  brutalTrap: {
    name: "Brutal Trap",
    description:
      "This unit doubles the bonus for attacking the enemy’s flank or rear.",
  },
  trample: {
    name: "Trample",
    description:
      "For each successful score in the Weapon Skill Test, roll an additional d6 for hitting. Additional successful scores do not generate the new ones.",
  },
  monster: {
    name: "Monster",
    description:
      "The enemy engaged in combat with this unit fails a Panic Test on a 2+ instead of a 4+.",
  },
  focusedAttack: {
    name: "Focused Attack",
    description: "When charging, this unit gets +1 to WS.",
  },
  preciseHit: {
    name: "Precise Hit",
    description:
      "This unit may re-roll all failed scores in the Weapon Skill Test.",
  },
  fierceAssault: {
    name: "Fierce Assault",
    description:
      "When charging, this unit gets +2 additional attacks for each full rank.",
  },
  magicRunes: {
    name: "Magic Runes",
    description:
      "A total score of 3 or less in the Prayer Test made by this unit is considered a free prayer (the prayers’ pool does not decrease).",
  },
  ambush: {
    name: "Ambush",
    description:
      "This unit can make a free move before the battle. Additionally, the enemy cannot use the charge bonuses and independent bonuses while charging this unit.",
  },
  wildSpeed: {
    name: "Wild Speed",
    description:
      "This unit always rolls an additional d6 when moving and charging, regardless of the situation.",
  },
  general: {
    name: "General",
    description:
      "As long as the General is on the battlefield, the army may use the army special rule. ",
  },
  heavyArmor: {
    name: "Heavy Armour",
    description:
      "Each Wound dealt to this unit can be cancelled by a massive armour. Roll a d6. A score of 2 or less means a cancelled Wound.",
  },
  tooLateForHope: {
    name: "Too Late for Hope",
    description:
      "Horned Warriors in the Lord’s of the Abyss army gain Unstoppable (after a failed charge, this unit cannot be rotated by the opponent).",
  },
  fear: {
    name: "Fear",
    description:
      "After a successful charge with this unit, the enemy must take a Panic Test for 1 base. If the unit is a horde, the enemy must take a Panic Test for 2 bases.",
  },
  fettered: {
    name: "Fettered",
    description:
      "The opponent gains Blood Points for this unit’s bases only after destroying the entire unit.",
  },
  corpseHorde: {
    name: "Corpse Horde",
    description:
      "After each lost combat, this unit must roll a d6. The score is the number of additional Wounds it receives. Truhlaks in the Lord Necromancer’s army can add a rank of Marauders to the horde that allowed them to be deployed (such a horde is 20 bases). Only Lord Necromancer can be attached to the Truhlaks unit.",
  },
};

const spells = [
  {
    name: "Fireball",
    pointCost: 7,
    description:
      "Choose target enemy unit (not a single model) within 20 cm that is not engaged in combat. Roll a d6 – a score of 3 or less means a successful spell. Two bases from that unit must take a Panic Test.",
  },
  {
    name: "Blizzard",
    pointCost: 6,
    description:
      "Choose target enemy unit within 30 cm that is not engaged in combat. Roll a d6 – a score of 4 or less means a successful spell. The enemy unit can be moved 5 cm forwards or backwards.",
  },
  {
    name: "Terror",
    pointCost: 2,
    description:
      "Choose target enemy unit within 30 cm. Roll a d6 – a score of 4 or less means a successful spell. The enemy unit must take a Cold Blood Test at the beginning of the next cycle. If the test it failed, that unit loses an Action Die.",
  },
  {
    name: "Will to Fight",
    pointCost: 8,
    description:
      "Choose target friendly unit within 20 cm that is not engaged in combat. Roll a d6 – a score of 3 or less means a successful spell. The unit can make any turn and move by 15 cm.",
  },
  {
    name: "Whispers of the Gods",
    pointCost: 8,
    description:
      "Choose target General within 30 cm. Roll a d6 – a score of 4 or less means a successful spell. The selected General will receive a +2 or -2 modifier, depending on the player’s decision, in the next Initiative Phase.",
  },
];

const magicItems = [
  {
    name: "Talisman of Ragloq",
    pointCost: 2,
    description:
      "During the Activation Roll, it allows to re-roll one of the dice.",
  },
  {
    name: "Elixir",
    pointCost: 1,
    description:
      "The player can re-roll the Initiative Test with a +2 modifier.",
  },
  {
    name: "Old Parchment",
    pointCost: 2,
    description:
      "The Mage may cast another spell in the cycle, but it cannot be the same as the first spell.",
  },
  {
    name: "Book of the Dead",
    pointCost: 8,
    description:
      "Every enemy unit within 20 cm of the Mage must take a d6 test. A score of 2 or less means the enemy unit is dealt 2 Wounds.",
  },
  {
    name: "Dispel",
    pointCost: 1,
    description:
      "If an enemy Mage used a spell or an item other than Dispel, a d6 test can be made. A score of 5 or less means that spell or item was dispelled. A score of 1 means that the Dispel has not lost its power and can be used again.",
  },
  {
    name: "Ring of Power",
    pointCost: 2,
    description: "The Mage can teleport up to 40 cm during its activation.",
  },
  {
    name: "Staff",
    pointCost: 3,
    description:
      "Target unit within 20 cm of the Mage must re-roll all failed or successful hits in combat.",
  },
  {
    name: "Diadem of Despair",
    pointCost: 4,
    description:
      "The Diadem can be used to support target unit within 20 cm of the Mage. Each score of 1 in the Wound Test made by the chosen unit deals 2 Wounds.",
  },
];

const armies = {
  Sorgax: {
    models: [
      {
        name: "Tormentors (Reptilians)",
        type: "basic",
        pointCost: 13,
        LD: 6,
        M: 10,
        WS: 3,
        S: 4,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [specialRules.ironDiscipline, specialRules.responsive],
      },
      {
        name: "Scourges (Liagulians)",
        type: "elite",
        pointCost: 9,
        LD: 7,
        M: 10,
        WS: 2,
        S: 3,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [specialRules.spearStorm, specialRules.sneaky],
      },
      {
        name: "Repsolians",
        type: "elite",
        pointCost: 15,
        LD: 6,
        M: 10,
        WS: 4,
        S: 4,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.battleInspiration,
          specialRules.willToFight,
        ],
      },
      {
        name: "The Fallen (Ropuchons)",
        type: "rare",
        pointCost: 16,
        LD: 7,
        M: 10,
        WS: 3,
        S: 3,
        T: 4,
        A: 2,
        W: 2,
        specialRules: [specialRules.poisonousSpit],
      },
      {
        name: "Martyrs of Voro-dan",
        type: "rare",
        pointCost: 20,
        LD: 6,
        M: 10,
        WS: 3,
        S: 4,
        T: 5,
        A: 3,
        W: 2,
        specialRules: [specialRules.vigilant, specialRules.enslaved],
      },
      {
        name: "Slagors",
        type: "rare",
        pointCost: 15,
        LD: 6,
        M: 15,
        WS: 3,
        S: 3,
        T: 5,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.fearless,
          specialRules.snakeMove,
          specialRules.creature,
        ],
      },
      {
        name: "Desauros with Tomb Altar",
        model: true,
        type: "unique",
        pointCost: 68,
        LD: 4,
        M: 10,
        WS: 3,
        S: 6,
        T: 7,
        A: 7,
        W: 7,
        specialRules: [specialRules.fearless],
      },
      {
        name: "Crushers on Scalyvars",
        type: "unique",
        pointCost: 23,
        LD: 6,
        M: 15,
        WS: 4,
        S: 4,
        T: 5,
        A: 2,
        W: 3,
        specialRules: [
          specialRules.battleInspiration,
          specialRules.hammerStrike,
        ],
      },
      {
        name: "Command Group",
        type: "hero",
        pointCost: 15,
        commandGroup: true,
        specialRules: [specialRules.commandGroup],
      },
      {
        name: "Champion of Night",
        type: "hero",
        pointCost: 15,
        model: true,
        champion: true,
        specialRules: [
          {
            name: "Champion of Night",
            description:
              "(d6 test – 3 or less) If the enemy unit is engaged in combat with the unit supported by the Champion of Night, make a d6 test before the enemy attacks. A score of 3 or less means the enemy gets a -1 to WS modifier in combat.",
          },
        ],
      },
      {
        name: "Champion of Death",
        type: "hero",
        pointCost: 15,
        model: true,
        champion: true,
        specialRules: [
          {
            name: "Champion of Death",
            description:
              "(d6 test – 2 or less) If the Champion of Death is attached to a friendly unit engaged in combat, roll a d6 for each base that the enemy unit lost. A score of 2 or less means your opponent must remove another base.",
          },
        ],
      },
      {
        name: "Champion of Wrath",
        type: "hero",
        pointCost: 15,
        model: true,
        champion: true,
        specialRules: [
          {
            name: "Champion of Wrath",
            description:
              "(d6 test – 4 or less) Choose a friendly unit within 20 cm of the Champion of Wrath and make a d6 test before that unit makes a charge. A score of 4 or less means that the chosen unit gains +1 to WS when charging.",
          },
        ],
      },
      {
        name: "Tomb Priest (Mage)",
        type: "hero",
        pointCost: 14,
        model: true,
        mage: true,
        specialRules: [
          {
            name: "Tomb Priest",
            description:
              "May use magic spells and items worth up to 6 points each. Each friendly unit within 10 cm of the Tomb Priest may add 3 cm to the charge range.",
          },
        ],
      },
      {
        name: "Guardian of the Underworld (Mage)",
        type: "hero",
        pointCost: 14,
        model: true,
        mage: true,
        specialRules: [
          {
            name: "Guardian of the Underworld",
            description: "May use any magic spells and items.",
          },
        ],
      },
      {
        name: "Abazatragon (General)",
        type: "hero",
        pointCost: 30,
        LD: 2,
        model: true,
        general: true,
        specialRules: [specialRules.general],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  Arox: {
    models: [
      {
        name: "The Chosen (Liagulians)",
        type: "basic",
        pointCost: 9,
        LD: 7,
        M: 10,
        WS: 2,
        S: 3,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [specialRules.spearStorm, specialRules.faithful],
      },
      {
        name: "The Primaeval (Reptilians)",
        type: "elite",
        pointCost: 13,
        LD: 6,
        M: 10,
        WS: 3,
        S: 4,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [specialRules.ironDiscipline, specialRules.agile],
      },
      {
        name: "Repsolians",
        type: "elite",
        pointCost: 15,
        LD: 6,
        M: 10,
        WS: 4,
        S: 4,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.battleInspiration,
          specialRules.willToFight,
        ],
      },
      {
        name: "The Sanctified",
        type: "elite",
        pointCost: 16,
        LD: 7,
        M: 10,
        WS: 3,
        S: 3,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [specialRules.faithful, specialRules.goldArmour],
      },
      {
        name: "Ropuchons",
        type: "rare",
        pointCost: 16,
        LD: 7,
        M: 10,
        WS: 3,
        S: 3,
        T: 4,
        A: 2,
        W: 2,
        specialRules: [specialRules.poisonousSpit],
      },
      {
        name: "Trygodrons",
        type: "rare",
        pointCost: 20,
        LD: 6,
        M: 15,
        WS: 2,
        S: 5,
        T: 4,
        A: 2,
        W: 3,
        specialRules: [
          specialRules.immunity,
          specialRules.creature,
          specialRules.tearing,
        ],
      },
      {
        name: "Desauros with Sun Monolith",
        type: "rare",
        pointCost: 68,
        model: true,
        LD: 4,
        M: 10,
        WS: 3,
        S: 6,
        T: 7,
        A: 7,
        W: 7,
        specialRules: [
          specialRules.fearless,
          specialRules.primalRampage,
          specialRules.sunMonolith,
        ],
      },
      {
        name: "Golden Guards",
        type: "unique",
        pointCost: 19,
        LD: 7,
        M: 10,
        WS: 3,
        S: 5,
        T: 5,
        A: 2,
        W: 2,
        specialRules: [specialRules.goldArmour, specialRules.poisonousSpit],
      },
      {
        name: "Forgon",
        type: "unique",
        pointCost: 35,
        model: true,
        LD: 6,
        M: 10,
        WS: 2,
        S: 5,
        T: 5,
        A: 5,
        W: 5,
        specialRules: [specialRules.livingCatapult],
      },
      {
        name: "Command Group",
        type: "hero",
        pointCost: 15,
        specialRules: [specialRules.commandGroup],
      },
      {
        name: "Champion of Sun",
        type: "hero",
        model: true,
        champion: true,
        pointCost: 11,
        specialRules: [
          {
            name: "Champion of Sun",
            description:
              "(d6 test – 2 or less) If the Champion of Sun is attached to a friendly unit engaged in combat, you can make a d6 test. A score of 2 or less means that the enemy unit must re-roll all scores of 1 both in its Weapon Skill Test and Wound Test in this cycle.",
          },
        ],
      },
      {
        name: "Champion of Nature",
        type: "hero",
        model: true,
        champion: true,
        pointCost: 10,
        specialRules: [
          {
            name: "Champion of Nature",
            description:
              "(d6 test – 4 or less) When activating any unit within 10 cm of the Champion of Nature, you can make a d6 test. A score of 4 or less means that unit may turn freely and may add 3 cm to its move or charge range.",
          },
        ],
      },
      {
        name: "Champion of Gods",
        type: "hero",
        model: true,
        champion: true,
        pointCost: 14,
        specialRules: [
          {
            name: "Champion of Gods",
            description:
              "(d6 test – 3 or less) If the Champion of Gods is attached to a friendly unit engaged in combat, you can make a d6 test before the fight. A score of 3 or less means that the unit can re-roll all failed scores during the Weapon Skill Test and the Wound Test until the end of the cycle.",
          },
        ],
      },
      {
        name: "Mystic of the Reborn (Mage)",
        type: "hero",
        model: true,
        mage: true,
        pointCost: 14,
        specialRules: [
          {
            name: "Mystic of the Reborn",
            description:
              "May use magic spells and items worth up to 6 points each. Each friendly unit within 10 cm of the Mystic of the Reborn has a charge range of M + 6 cm + d6 (instead of M + 2d6).",
          },
        ],
      },
      {
        name: "Sun Seer (Mage)",
        type: "hero",
        model: true,
        mage: true,
        pointCost: 14,
        specialRules: [
          {
            name: "Sun Seer",
            description: "May use any magic spells and items.",
          },
        ],
      },
      {
        name: "Sox’Augatir / Leading in the Battle (General)",
        type: "hero",
        model: true,
        general: true,
        pointCost: 30,
        LD: 3,
        specialRules: [specialRules.general],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  Vaendral: {
    models: [
      {
        name: "Blood Priestesses (Amazons)",
        type: "basic",
        pointCost: 11,
        LD: 7,
        M: 10,
        WS: 3,
        S: 2,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [specialRules.bloodshed, specialRules.lightShieldDefence],
      },
      {
        name: "The Firstborn (Barbarians)",
        type: "elite",
        pointCost: 13,
        LD: 7,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [specialRules.wildCharge, specialRules.fury],
      },
      {
        name: "Ravagers on Sungals",
        type: "elite",
        pointCost: 24,
        LD: 6,
        M: 15,
        WS: 3,
        S: 4,
        T: 5,
        A: 2,
        W: 3,
        specialRules: [
          specialRules.terribleDamage,
          specialRules.fury,
          {
            name: "Limit",
            description:
              "Max. 2 units in the army of 1500 pts or less, max. 5 units in the army above 1500 pts.",
          },
        ],
      },
      {
        name: "Sozruits",
        type: "elite",
        pointCost: 15,
        LD: 5,
        M: 10,
        WS: 3,
        S: 2,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.scare,
          specialRules.cult,
          specialRules.theGodOfSlaughterBlessing,
          { name: "Limit", description: "Max. 2 units in the army." },
        ],
      },
      {
        name: "The Reapers (Half-giants)",
        type: "rare",
        pointCost: 22,
        LD: 7,
        M: 10,
        WS: 2,
        S: 4,
        T: 4,
        A: 2,
        W: 2,
        specialRules: [specialRules.crushingBlow],
      },
      {
        name: "Giant",
        type: "rare",
        model: true,
        pointCost: 43,
        LD: 6,
        M: 10,
        WS: 2,
        S: 6,
        T: 5,
        A: 5,
        W: 6,
        specialRules: [specialRules.fearless],
      },
      {
        name: "Voutars",
        type: "unique",
        pointCost: 19,
        LD: 4,
        M: 10,
        WS: 3,
        S: 4,
        T: 4,
        A: 2,
        W: 2,
        specialRules: [specialRules.keenSenses, specialRules.brutalTrap],
      },
      {
        name: "White Witches (Amazons)",
        type: "unique",
        pointCost: 16,
        LD: 7,
        M: 10,
        WS: 3,
        S: 2,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.fearless,
          specialRules.curseOfTheWitch,
          specialRules.bloodshed,
          specialRules.terribleDamage,
          specialRules.lightShieldDefence,
          {
            name: "Limit",
            description:
              "Max. 1 unit in the army of 1500 pts or less, max. 3 units in the army above 1500 pts.",
          },
        ],
      },
      {
        name: "Elephanton",
        type: "unique",
        pointCost: 88,
        model: true,
        LD: 4,
        M: 10,
        WS: 3,
        S: 8,
        T: 6,
        A: 6,
        W: 7,
        specialRules: [
          specialRules.fearless,
          specialRules.trample,
          specialRules.monster,
        ],
      },
      {
        name: "Command Group",
        type: "hero",
        pointCost: 15,
        commandGroup: true,
        specialRules: [specialRules.commandGroup],
      },
      {
        name: "Champion of Blood",
        type: "hero",
        pointCost: 14,
        model: true,
        champion: true,
        specialRules: [
          {
            name: "Champion of Blood",
            description:
              "(d6 test – 3 or less) If the Champion of Blood is attached to a friendly unit engaged in combat, make a d6 test before the fight. A score of 3 or less means the unit gets additional 4 attacks to the pool in this cycle.",
          },
        ],
      },
      {
        name: "Champion of Earth",
        type: "hero",
        pointCost: 13,
        model: true,
        champion: true,
        specialRules: [
          {
            name: "Champion of Earth",
            description:
              "(d6 test – 4 or less) Choose an enemy unit within 30 cm that is not engaged in combat and make a d6 test. A score of 4 or less means the chosen unit can be moved by 10 cm in any direction but without turning.",
          },
        ],
      },
      {
        name: "Champion of Darkness",
        type: "hero",
        pointCost: 12,
        model: true,
        champion: true,
        specialRules: [
          {
            name: "Champion of Darkness",
            description:
              "(d6 test – 3 or less) If the Champion of Darkness is attached to a friendly unit engaged in combat, he can make a d6 test each time the enemy loses its bases in this cycle. A score of 3 or less means the enemy must immediately take a Panic Test for as many bases as he lost in this cycle.",
          },
        ],
      },
      {
        name: "Priestess of Lust (Mage)",
        type: "hero",
        pointCost: 14,
        model: true,
        mage: true,
        specialRules: [
          {
            name: "Priestess of Lust",
            description:
              "May use magic spells and items worth up to 6 points each. Any friendly unit within 10 cm of the Priestess of Lust may re-roll a move range, or a failed Cold Blood Test.",
          },
        ],
      },
      {
        name: "Old Hag (Mage)",
        type: "hero",
        pointCost: 14,
        model: true,
        mage: true,
        specialRules: [
          {
            name: "Old Hag",
            description: "May use any magic spells and items.",
          },
        ],
      },
      {
        name: "Bloody Chieftain (General)",
        type: "hero",
        pointCost: 30,
        model: true,
        general: true,
        LD: 2,
        specialRules: [specialRules.general],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  Dirandis: {
    models: [
      {
        name: "Brothers of Fire (Barbarians)",
        type: "basic",
        pointCost: 13,
        LD: 7,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [specialRules.focusedAttack],
      },
      {
        name: "Wolf Maidens (Amazons)",
        type: "elite",
        pointCost: 10,
        LD: 7,
        M: 10,
        WS: 3,
        S: 2,
        T: 2,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.preciseHit,
          specialRules.lightShieldDefence,
        ],
      },
      {
        name: "Riders on Gridons",
        type: "elite",
        pointCost: 21,
        LD: 6,
        M: 15,
        WS: 3,
        S: 4,
        T: 4,
        A: 2,
        W: 3,
        specialRules: [specialRules.focusedAttack, specialRules.fierceAssault],
      },
      {
        name: "Wolf Brothers",
        type: "elite",
        pointCost: 15,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.focusedAttack,
          specialRules.magicRunes,
          specialRules.fearless,
        ],
      },
      {
        name: "The Devoted (Half-giants)",
        type: "rare",
        pointCost: 22,
        LD: 7,
        M: 10,
        WS: 2,
        S: 4,
        T: 4,
        A: 2,
        W: 2,
        specialRules: [specialRules.crushingBlow],
      },
      {
        name: "Gigant",
        type: "rare",
        pointCost: 43,
        model: true,
        LD: 6,
        M: 10,
        WS: 2,
        S: 6,
        T: 5,
        A: 5,
        W: 6,
        specialRules: [specialRules.fearless],
      },
      {
        name: "Sasquatches",
        type: "unique",
        pointCost: 19,
        LD: 5,
        M: 10,
        WS: 2,
        S: 5,
        T: 5,
        A: 2,
        W: 2,
        specialRules: [specialRules.ambush],
      },
      {
        name: "Wilhars",
        type: "unique",
        pointCost: 17,
        LD: 6,
        M: 15,
        WS: 2,
        S: 3,
        T: 3,
        A: 2,
        W: 3,
        specialRules: [specialRules.wildSpeed, specialRules.creature],
      },
      {
        name: "Elephanton",
        type: "unique",
        pointCost: 88,
        model: true,
        LD: 4,
        M: 10,
        WS: 3,
        S: 8,
        T: 6,
        A: 6,
        W: 7,
        specialRules: [
          specialRules.fearless,
          specialRules.trample,
          specialRules.monster,
        ],
      },
      {
        name: "Command Group",
        type: "hero",
        pointCost: 15,
        commandGroup: true,
        specialRules: [specialRules.commandGroup],
      },
      {
        name: "Champion of Ice",
        type: "hero",
        pointCost: 15,
        champion: true,
        specialRules: [
          {
            name: "Champion of Ice",
            description:
              "(d6 test – 3 or less) If the Champion of Ice is attached to a friendly unit engaged in combat, make a d6 test before the enemy attacks. A score of 3 or less means that the enemy unit gets a -1 to WS modifier in the Weapon Skill Test until the end of the cycle.",
          },
        ],
      },
      {
        name: "Champion of Fire",
        type: "hero",
        pointCost: 10,
        champion: true,
        specialRules: [
          {
            name: "Champion of Fire",
            description:
              "(d6 test – 3 or less) If the Champion of Fire is attached to a friendly unit engaged in combat, make a d6 test before the fight. A score of 3 or less means the unit gets 3 additional dice in the Wound Test until the end of the cycle.",
          },
        ],
      },
      {
        name: "Champion of Storm",
        type: "hero",
        pointCost: 13,
        champion: true,
        specialRules: [
          {
            name: "Champion of Storm",
            description:
              "(d6 test – 4 or less) Make a d6 test before or after moving the Champion of Storm. Choose an enemy unit within 30 cm. A score of 4 or less means the chosen unit must take a Panic Test for 1 base.",
          },
        ],
      },
      {
        name: "Priest of the Old Gods (Mage)",
        type: "hero",
        pointCost: 14,
        mage: true,
        specialRules: [
          {
            name: "Priest of the Old Gods",
            description:
              "May use any magic spells and items. As long as the Priest of the Old Gods is on the battlefield, an additional friendly unit can make a prayer.",
          },
        ],
      },
      {
        name: "Fortune-teller (Mage)",
        type: "hero",
        pointCost: 14,
        mage: true,
        specialRules: [
          {
            name: "Fortune-teller",
            description:
              "May use magic spells and items worth up to 6 points each. If the Fortune-teller is within 10 cm of the Great Hunter during the Activation Roll, the player can make a d6 test once per cycle. A score of 3 or less means that the score obtained in the Activation Roll may be modified by +1 or -2.",
          },
        ],
      },
      {
        name: "Great Hunter (General)",
        type: "hero",
        pointCost: 30,
        LD: 3,
        mage: true,
        specialRules: [specialRules.general],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  "Sheol-morg - Lord of the Abyss": {
    models: [
      {
        name: "Horned Warriors",
        type: "basic",
        pointCost: 15,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.terribleDamage,
          specialRules.heavyArmor,
          specialRules.tooLateForHope,
        ],
      },
      {
        name: "Truhlaks (Skeletons)",
        type: "elite",
        pointCost: 9,
        LD: 3,
        M: 10,
        WS: 3,
        S: 2,
        T: 1,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.fear,
          specialRules.fearless,
          specialRules.creature,
          specialRules.fettered,
          specialRules.corpseHorde,
        ],
      },
      {
        name: "Ritual Guardians (Kozars)",
        type: "elite",
        pointCost: 13,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          specialRules.ancientSteel,
          specialRules.baaaaaa,
          specialRules.fanaticalLoyalty,
        ],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  "Sheol-morg - Lord Necromancer": {
    models: [
      {
        name: "Horned Warriors",
        type: "basic",
        pointCost: 15,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          {
            name: "Lord of the Abyss",
            description:
              "Only Basic Unit in the army of the Lord of the Abyss.",
          },
          specialRules.terribleDamage,
          specialRules.heavyArmor,
          specialRules.tooLateForHope,
        ],
      },
      {
        name: "Truhlaks (Skeletons)",
        type: "basic",
        pointCost: 9,
        LD: 3,
        M: 10,
        WS: 3,
        S: 2,
        T: 1,
        A: 2,
        W: 2,
        specialRules: [
          {
            name: "Lord Necromancer",
            description: "Only Basic Unit in the army of the Lord Necromancer.",
          },
          specialRules.fear,
          specialRules.fearless,
          specialRules.creature,
          specialRules.fettered,
          specialRules.corpseHorde,
        ],
      },
      {
        name: "Ritual Guardians (Kozars)",
        type: "basic",
        pointCost: 13,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          {
            name: "Lord of Sheol-morg",
            description:
              "Only Basic Unit in the army of the Lord of Sheol-morg.",
          },
          specialRules.ancientSteel,
          specialRules.baaaaaa,
          specialRules.fanaticalLoyalty,
        ],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  "Sheol-morg - Lord of Sheol-morg": {
    models: [
      {
        name: "Horned Warriors",
        type: "basic",
        pointCost: 15,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          {
            name: "Lord of the Abyss",
            description:
              "Only Basic Unit in the army of the Lord of the Abyss.",
          },
          specialRules.terribleDamage,
          specialRules.heavyArmor,
          specialRules.tooLateForHope,
        ],
      },
      {
        name: "Truhlaks (Skeletons)",
        type: "basic",
        pointCost: 9,
        LD: 3,
        M: 10,
        WS: 3,
        S: 2,
        T: 1,
        A: 2,
        W: 2,
        specialRules: [
          {
            name: "Lord Necromancer",
            description: "Only Basic Unit in the army of the Lord Necromancer.",
          },
          specialRules.fear,
          specialRules.fearless,
          specialRules.creature,
          specialRules.fettered,
          specialRules.corpseHorde,
        ],
      },
      {
        name: "Ritual Guardians (Kozars)",
        type: "basic",
        pointCost: 13,
        LD: 6,
        M: 10,
        WS: 3,
        S: 3,
        T: 3,
        A: 2,
        W: 2,
        specialRules: [
          {
            name: "Lord of Sheol-morg",
            description:
              "Only Basic Unit in the army of the Lord of Sheol-morg.",
          },
          specialRules.ancientSteel,
          specialRules.baaaaaa,
          specialRules.fanaticalLoyalty,
        ],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  Gaeldor: {
    models: [],
    spells: spells,
    magicItems: magicItems,
  },
};

export default armies;
