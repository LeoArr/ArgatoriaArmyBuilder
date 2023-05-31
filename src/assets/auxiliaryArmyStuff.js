export const spells = [
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

export const magicItems = [
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
