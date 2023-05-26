import { calculateTotalCost } from "../utils";

const rules = [
  {
    title: "Basic Units",
    fn: function (state) {
      if (!["Sorgax", "Arox", "Vaendral", "Dirandis"].includes(state.army)) {
        return;
      }
      const basicCount = state.selectedUnits.filter(
        (u) => u.type === "basic"
      ).length;
      const error = state.pointTarget <= 1000 ? basicCount < 2 : basicCount < 4;
      if (error) {
        return "Basic Units: min. 2 units in the army of 1000 pts or less, min 4 units in the army above 1000 pts. (Army list)";
      }
    },
  },
  {
    title: "General",
    fn: function (state) {
      const generalCount = state.selectedUnits.filter((u) => u.general).length;
      if (generalCount !== 1) {
        return "Your army must have 1 General. (p32)";
      }
    },
  },
  {
    title: "Champions",
    fn: function (state) {
      const championCount = state.selectedUnits.filter(
        (u) => u.champion
      ).length;
      var error = false;
      if (
        state.pointTarget <= 1500 &&
        (championCount < 1 || championCount > 3)
      ) {
        error = true;
      } else if (
        state.pointTarget > 1500 &&
        (championCount < 1 || championCount > 6)
      ) {
        error = true;
      }
      if (error) {
        return "You can have from 1 to 3 Champions in an army up to 1500 pts, and from 1 to 6 in an army above 1500 pts. (p32)";
      }
    },
  },
  {
    title: "Command Groups",
    fn: function (state) {
      const championCount = state.selectedUnits.filter(
        (u) => u.commandGroup
      ).length;
      var error = false;
      if (
        state.pointTarget <= 1500 &&
        (championCount < 1 || championCount > 3)
      ) {
        error = true;
      } else if (
        state.pointTarget > 1500 &&
        (championCount < 2 || championCount > 6)
      ) {
        error = true;
      }
      if (error) {
        return "You must have from 1 to 3 Command Groups in an army up to 1500 pts, and from 2 to 6 in an army above 1500 pts. (p32)";
      }
    },
  },
  {
    title: "Mages",
    fn: function (state) {
      const mageCount = state.selectedUnits.filter((u) => u.mage).length;
      const totalCost = calculateTotalCost(state);
      if (mageCount > 0 && totalCost < mageCount * 500) {
        return "You can have 1 Mage for every full 500 army points.";
      }
    },
  },
  {
    title: "Elite Units and Basic Units",
    fn: function (state) {
      const basicCount = state.selectedUnits.filter(
        (u) => u.type === "basic"
      ).length;
      const eliteCount = state.selectedUnits.filter(
        (u) => u.type === "elite"
      ).length;

      if (eliteCount > basicCount) {
        return "The number of Elite Units in your army is limited by the number of Basic Units. (p50, Army list)";
      }
    },
  },
  {
    title: "Elite Units",
    fn: function (state) {
      const eliteCount = state.selectedUnits.filter(
        (u) => u.type === "elite"
      ).length;

      if (eliteCount < 2) {
        return "Elite Units: min. 2 units in the army. (Army list)";
      }
    },
  },
  {
    title: "Rare Units",
    fn: function (state) {
      const rareCount = state.selectedUnits.filter(
        (u) => u.type === "rare"
      ).length;
      const totalCost = calculateTotalCost(state);

      if (
        (rareCount > 4 && totalCost <= 1500) ||
        (rareCount > 8 && totalCost > 1500)
      ) {
        return "max. 4 units in the army of 1500 pts or less, max. 8 units in the army above 1500 pts. (Army list)";
      }
    },
  },
  {
    title: "Unique Units",
    fn: function (state) {
      const uniqueCount = state.selectedUnits.filter(
        (u) => u.type === "unique"
      ).length;
      const totalCost = calculateTotalCost(state);

      if (
        (uniqueCount > 3 && totalCost <= 1500) ||
        (uniqueCount > 6 && totalCost > 1500)
      ) {
        return "max. 3 units in the army of 1500 pts or less, max. 6 units in the army above 1500 pts. (Army list)";
      }
    },
  },
  {
    title: "Mages",
    fn: function (state) {
      const mageCount = state.selectedUnits.filter((u) => u.mage).length;

      if (
        state.selectedMagicItems.length > mageCount * 2 ||
        state.selectedSpells.length > mageCount * 2
      ) {
        return "A mage can max have 2 spells and 2 magic items. (p33)";
      }
    },
  },
];

export default rules;
