const MainContent = ({ state, setState }) => {
  return (
    <div className="unit-list">
      {state.selectedUnits.map((unit, i) => {
        return (
          <Unit
            key={i}
            index={i}
            unit={unit}
            state={state}
            setState={setState}
          />
        );
      })}
      {state.marauders.map((unit, i) => {
        return (
          <Unit
            key={i}
            index={i}
            unit={unit}
            state={state}
            setState={setState}
            marauder
          />
        );
      })}
      {state.selectedSpells.map((spell, i) => {
        return (
          <Magic
            data={spell}
            state={state}
            setState={setState}
            index={i}
            type="Spell"
          />
        );
      })}
      {state.selectedMagicItems.map((item, i) => {
        return (
          <Magic
            data={item}
            state={state}
            setState={setState}
            index={i}
            type="Magic Item"
          />
        );
      })}
    </div>
  );
};

const Magic = ({ data, state, setState, index, type }) => {
  return (
    <div className="unit">
      <div
        className="unit-count"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.2rem",
        }}
      >
        <div>{type}</div>
        <div
          style={{ cursor: "pointer" }}
          className="material-symbols-rounded notranslate"
          onClick={() => {
            const key =
              type === "Spell" ? "selectedSpells" : "selectedMagicItems";
            setState({
              ...state,
              [key]: state[key].filter((m, i) => i !== index),
            });
          }}
        >
          close
        </div>
      </div>
      <div className="unit-name">{data.name}</div>
      <div className="magic-desc">{data.description}</div>
      <div className="unit-pts">{data.pointCost}pts</div>
    </div>
  );
};

const Unit = ({ unit, state, setState, index, marauder }) => {
  const updateCount = (val) => {
    var selectedUnitsBuf = [...state.selectedUnits];
    if (unit.model) {
      selectedUnitsBuf[index].count += val;
    } else if (selectedUnitsBuf[index].count > 4) {
      selectedUnitsBuf[index].count += val;
    } else if (val < 0) {
      selectedUnitsBuf[index].count = 0;
    } else {
      selectedUnitsBuf[index].count += 1;
    }
    if (selectedUnitsBuf[index].count > 16) {
      selectedUnitsBuf[index].count = 16;
    }
    selectedUnitsBuf = selectedUnitsBuf.filter((unit) => unit.count > 0);
    setState({
      ...state,
      selectedUnits: selectedUnitsBuf,
    });
  };

  return (
    <div className="unit">
      <div className="unit-count">
        <div style={{ fontSize: "1.8rem", textAlign: "center" }}>
          {unit.count}
        </div>
        {marauder ? (
          <div style={{ textAlign: "center" }}>Marauder</div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.8rem",
            }}
          >
            <div className="inc-dec-btn" onClick={() => updateCount(-1)}>
              -
            </div>
            <div>/</div>
            <div className="inc-dec-btn" onClick={() => updateCount(1)}>
              +
            </div>
          </div>
        )}
      </div>
      <div className="unit-name">{unit.name}</div>
      <div className="unit-stats">
        LD {unit.LD} - M {unit.M} - WS {unit.WS} - S {unit.S} - T {unit.T} - A{" "}
        {unit.A} - W {unit.W}
      </div>
      <div className="unit-sr">
        {unit.specialRules.map((sr) => (
          <div title={sr.description}>{sr.name}</div>
        ))}
      </div>
      <div className="unit-pts">{unit.count * unit.pointCost}pts</div>
    </div>
  );
};

export default MainContent;
