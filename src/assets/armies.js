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
        model: true,
        commandGroup: true,
        specialRules: [specialRules.commandGroup],
      },
      {
        name: "Champion of Night (Champion)",
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
        name: "Champion of Death (Champion)",
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
        name: "Champion of Wrath (Champion)",
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
        specialRules: [
          {
            name: "Abazatragon",
            description:
              "As long as the General is on the battlefield, the army may use the army special rule. ",
          },
        ],
      },
    ],
    spells: spells,
    magicItems: magicItems,
  },
  Arox: {
    models: [],
    spells: [],
    magicItems: [],
  },
  Vaendral: {
    models: [],
    spells: [],
    magicItems: [],
  },
  Dirandis: {
    models: [],
    spells: [],
    magicItems: [],
  },
  "Sheol-morg": {
    models: [],
    spells: [],
    magicItems: [],
  },
  Gaeldor: {
    models: [],
    spells: [],
    magicItems: [],
  },
};

export default armies;
