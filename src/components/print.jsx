import specialRules from "../assets/specialRules";
import "../print.css";

const Print = ({ armyState, setPage }) => {
  const data = {
    basic: {},
    elite: {},
    rare: {},
    unique: {},
    hero: {},
    spells: {},
    items: [],
  };
  if (armyState) {
    for (const unit of [...armyState.selectedUnits]) {
      if (data[unit.type][unit.name]) {
        data[unit.type][unit.name].printCount += ` + ${unit.count}`;
      } else {
        unit.printCount = String(unit.count);
        data[unit.type][unit.name] = JSON.parse(JSON.stringify(unit));
      }
      if (unit.count >= 12) {
        data[unit.type][unit.name].specialRules.push(specialRules.horde);
      }
    }
    for (const spell of armyState.selectedSpells) {
      if (data.spells[spell.name]) {
        data.spells[spell.name].printCount++;
      } else {
        spell.printCount = 1;
        data.spells[spell.name] = spell;
      }
    }
    for (const item of armyState.selectedMagicItems) {
      if (data.items[item.name]) {
        data.items[item.name].printCount++;
      } else {
        item.printCount = 1;
        data.items[item.name] = item;
      }
    }
  }

  var index = 0;

  return (
    <div className="print">
      <div
        className="material-symbols-rounded close-btn"
        onClick={() => setPage("army-builder")}
      >
        close
      </div>
      {Object.keys(data.basic).map((unitName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Unit unit={data.basic[unitName]} />
          </div>
        );
        index++;
        return res;
      })}
      {Object.keys(data.elite).map((unitName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Unit unit={data.elite[unitName]} />
          </div>
        );
        index++;
        return res;
      })}
      {Object.keys(data.rare).map((unitName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Unit unit={data.rare[unitName]} />
          </div>
        );
        index++;
        return res;
      })}
      {Object.keys(data.unique).map((unitName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Unit unit={data.unique[unitName]} />
          </div>
        );
        index++;
        return res;
      })}
      {Object.keys(data.hero).map((unitName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Unit unit={data.hero[unitName]} />
          </div>
        );
        index++;
        return res;
      })}
      {Object.keys(data.spells).map((spellName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Magic data={data.spells[spellName]} />
          </div>
        );
        index++;
        return res;
      })}
      {Object.keys(data.items).map((itemName) => {
        const res = (
          <div style={{ display: "flex" }}>
            {index > 0 && index % 6 === 0 && <div className="page-break" />}
            <Magic data={data.items[itemName]} />
          </div>
        );
        index++;
        return res;
      })}
    </div>
  );
};

const Magic = ({ data }) => {
  return (
    <div style={{ display: "flex", gap: "0.1in" }}>
      <div className="card">
        <div className="card-content">
          <div className="card-title">{data.name}</div>
          <div className="card-desc">
            <div style={{ marginBottom: "0.05in" }}>{data.description}</div>
          </div>
        </div>
      </div>
      <div className="print-count">{data.printCount} pcs</div>
    </div>
  );
};

const Unit = ({ unit }) => {
  return (
    <div style={{ display: "flex", gap: "0.1in" }}>
      <div className="card">
        <div className="card-content">
          <div className="card-title">{unit.name}</div>
          <div className="card-stats">
            LD {unit.LD} - M {unit.M} - WS {unit.WS} - S {unit.S} - T {unit.T} -
            A {unit.A} - W {unit.W}
          </div>
          <div className="card-desc">
            {unit.specialRules.map((sr) => {
              return (
                <div className="spec-rule">
                  <span style={{ fontWeight: "bold" }}>{sr.name}</span>.{" "}
                  {typeof sr.description === "string"
                    ? sr.description
                    : sr.description.map((d) => <div> - {d}</div>)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="print-count">{unit.printCount} pcs</div>
    </div>
  );
};

export default Print;
