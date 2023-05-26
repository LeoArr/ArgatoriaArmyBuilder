import armies from "../assets/armies";

const LeftMenu = ({ state, setState }) => {
  return (
    <>
      <LeftMenuHeader state={state} setState={setState} />
      <ModelList state={state} setState={setState} />
    </>
  );
};

const LeftMenuHeader = ({ state, setState }) => {
  return (
    <div className="left-menu-header">
      <div className="left-menu-header-item">
        <label for="point-target">Point target</label>
        <input
          value={state.pointTarget}
          onChange={(e) =>
            setState({ ...state, pointTarget: Number(e.target.value) })
          }
          id="point-target"
          style={{ width: "100%" }}
          type="number"
        />
      </div>
      <div className="left-menu-header-item">
        <label for="army-select">Army select</label>
        <select
          disabled={state.selectedUnits.length > 0}
          value={state.army}
          onChange={(e) => setState({ ...state, army: e.target.value })}
          style={{ width: "100%" }}
          id="army-select"
        >
          <option>Sorgax</option>
          <option>Arox</option>
          <option>Vaendral</option>
          <option>Dirandis</option>
          <option>Gaeldor</option>
          <option>Sheol-morg</option>
        </select>
      </div>
    </div>
  );
};

const ModelList = ({ state, setState }) => {
  const armyList = armies[state.army].models.sort((a, b) => {
    const aL =
      a.type === "basic"
        ? 1
        : a.type === "elite"
        ? 2
        : a.type === "rare"
        ? 3
        : 4;
    const bL =
      b.type === "basic"
        ? 1
        : b.type === "elite"
        ? 2
        : b.type === "rare"
        ? 3
        : 4;
    return aL - bL;
  });

  const basic = armies[state.army].models.filter(
    (unit) => unit.type === "basic"
  );
  const elite = armies[state.army].models.filter(
    (unit) => unit.type === "elite"
  );
  const rare = armies[state.army].models.filter((unit) => unit.type === "rare");
  const unique = armies[state.army].models.filter(
    (unit) => unit.type === "unique"
  );
  const hero = armies[state.army].models.filter((unit) => unit.type === "hero");
  return (
    <div className="model-list">
      <div className="unit-delimiter">Basic Units</div>
      {basic.map((model, i) => (
        <SingleModel key={i} model={model} state={state} setState={setState} />
      ))}
      <div className="unit-delimiter">Elite Units</div>
      {elite.map((model, i) => (
        <SingleModel key={i} model={model} state={state} setState={setState} />
      ))}
      <div className="unit-delimiter">Rare Units</div>
      {rare.map((model, i) => (
        <SingleModel key={i} model={model} state={state} setState={setState} />
      ))}
      <div className="unit-delimiter">Unique Units</div>
      {unique.map((model, i) => (
        <SingleModel key={i} model={model} state={state} setState={setState} />
      ))}
      <div className="unit-delimiter">Hero Units</div>
      {hero.map((model, i) => (
        <SingleModel key={i} model={model} state={state} setState={setState} />
      ))}
      <div className="unit-delimiter">Spells</div>
      {armies[state.army].spells.map((spell, i) => {
        return (
          <Magic
            key={i}
            data={spell}
            type="spell"
            state={state}
            setState={setState}
          />
        );
      })}
      <div className="unit-delimiter">Magic Items</div>
      {armies[state.army].magicItems.map((item, i) => {
        return (
          <Magic
            key={i}
            data={item}
            type="item"
            state={state}
            setState={setState}
          />
        );
      })}
    </div>
  );
};

const Magic = ({ data, type, state, setState }) => {
  const addMagic = () => {
    if (type === "spell") {
      setState({
        ...state,
        selectedSpells: [...state.selectedSpells, data],
      });
    } else if (type === "item") {
      setState({
        ...state,
        selectedMagicItems: [...state.selectedMagicItems, data],
      });
    }
  };
  return (
    <div className={`single-model magic-type-${type}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: "1.2rem" }}>{data.name}</div>
        <div>{data.pointCost}pts</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {typeof data.description === "string"
          ? data.description
          : data.description.map((d) => <div> - {d}</div>)}
        <div title="Add new unit" className="add-model-btn" onClick={addMagic}>
          +
        </div>
      </div>
    </div>
  );
};

const SingleModel = ({ model, state, setState }) => {
  const addNewUnit = () => {
    setState({
      ...state,
      selectedUnits: [
        ...state.selectedUnits,
        {
          ...model,
          count: 1 * model.model ? 1 : 4,
        },
      ],
    });
  };
  return (
    <div className={`single-model model-type-${model.type}`}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "1.2rem" }}>{model.name}</div>
        <div>{model.pointCost}pts</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <div style={{ marginBottom: "0.5rem" }}>
            LD {model.LD || "-"} | M {model.M || "-"} | WS {model.WS || "-"} | S{" "}
            {model.S || "-"} | T {model.T || "-"} | A {model.A || "-"} | W{" "}
            {model.W || "-"}
          </div>
          <div>
            {model.specialRules.map((sr) => {
              return (
                <div>
                  <span style={{ fontWeight: "bold" }}>{sr.name}</span>.{" "}
                  {typeof sr.description === "string"
                    ? sr.description
                    : sr.description.map((d) => <div> - {d}</div>)}
                </div>
              );
            })}
          </div>
        </div>
        <div
          title="Add new unit"
          className="add-model-btn"
          onClick={addNewUnit}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
