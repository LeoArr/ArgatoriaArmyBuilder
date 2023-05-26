export const calculateTotalCost = (state) => {
  const unitCost = state.selectedUnits.reduce(
    (prev, cur) => prev + cur.pointCost * cur.count,
    0
  );
  const spellCost = state.selectedSpells.reduce(
    (prev, cur) => prev + cur.pointCost,
    unitCost
  );
  return state.selectedMagicItems.reduce(
    (prev, cur) => prev + cur.pointCost,
    spellCost
  );
};
