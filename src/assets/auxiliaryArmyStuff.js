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
  {
    name: "Thunderbolt",
    pointCost: 7,
    description:
      "Choose target unengaged enemy unit or single model within 20 cm. Roll a d6 – a score of 2 or less means a successful spell. The target unit is dealt 3 Wounds. If the unit has any type of protection, armour, or is on a base larger than 20 mm, it is dealt 4 Wounds. No armour or other protection work against Thunderbolt.",
  },
  {
    name: "Death Blast",
    pointCost: 4,
    description:
      "Choose up to three target enemy units (but not single models) with wounded bases within 40 cm. Roll a d6. On a score of 4 or less, the target units must remove the wounded base.",
  },
  {
    name: "Blackout",
    pointCost: 2,
    description:
      "Choose target unit or single model within 30 cm. Roll a d6 – a score of 2 or less means a successful spell. In the following cycle, the target unit or model may only move or charge a distance of d6 or 2d6 cm without adding its Mobility (M) stat.",
  },
  {
    name: "Vengeance",
    pointCost: 6,
    description:
      "Choose target unit or single model within 30 cm, which is engaged in combat. Roll a d6 – a score of 4 or less means a successful spell. The target unit or single model may immediately make 1 attack for every 1 Wound lost this cycle.",
  },
  {
    name: "Shackles of Pain",
    pointCost: 6,
    description:
      "Choose target single enemy model within 30 cm. Roll a d6 – a score of 3 or less means a successful spell. The model must immediately take a d6 test for each W point it has. Each roll of 5 or 6 means it loses 1 Wound.",
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

export const artefacts = [
  {
    name: "Blade of Contempt",
    pointCost: 2,
    description: "General supports the unit with 7 attacks instead of 6.",
  },
  {
    name: "Mythical Helm of Destiny",
    pointCost: 1,
    description:
      "After contact with an enemy unit, the General dies only on a score of 1 and may attach to the unit in 30 cm.",
  },
  {
    name: "Haburis Horn",
    pointCost: 5,
    description: "The range of the General’s orders is increased by 10 cm.",
  },
  {
    name: "Katakhanes Poison Blade",
    pointCost: 4,
    description:
      "If the General is attached to a unit and a base from an enemy unit (but not a single model) is wounded during combat, it is removed as destroyed. When fighting single models, it allows you to make up to 6 re-rolls during the Wound Test.",
  },
  {
    name: "Saint Gardon’s Bastard Sword",
    pointCost: 3,
    description:
      "General attached to a unit allows it to re-roll all scores of 6 during the Weapon Skill Test if the enemy unit has the Fearless rule or if the enemy unit has a General or Champion attached to it.",
  },
];

export const magicBanners = [
  {
    name: "Banner of Glory",
    pointCost: 10,
    description:
      "Army always wins ties in Initiative Tests. If the opponent also has this rule, ties must be re-rolled.",
  },
  {
    name: "Battle Banner",
    pointCost: 3,
    description: "Command Group ability range is 10 cm.",
  },
  {
    name: "Blessed Banner",
    pointCost: 8,
    description: "The army has one more prayer per cycle.",
  },
  {
    name: "Banner of Courage",
    pointCost: 1,
    description:
      "A unit with this Command Group attached gains the Fearless rule.",
  },
  {
    name: "Banner of Persistence",
    pointCost: 4,
    description:
      "A unit with this Command Group attached can never lose its charge, fight or independent bonuses when it charges a horde or a unit which cancels bonuses.",
  },
  {
    name: "Banner of Prudence",
    pointCost: 2,
    description:
      "After a failed charge, the unit with this Command Group attached does not move towards the enemy and cannot be rotated.",
  },
  {
    name: "Banner of Destruction",
    pointCost: 3,
    description:
      "During combat, a unit with this Command Group attached does not allow the enemy to make armour or any protection tests. The unit also gains 4 additional attacks for attacking any enemy from the flank or rear.",
  },
];
