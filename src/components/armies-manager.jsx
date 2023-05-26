import { useState } from "react";
import { calculateTotalCost } from "../utils";

const initialArmyState = {
  pointTarget: 700,
  army: "Sorgax",
  selectedUnits: [],
  selectedSpells: [],
  selectedMagicItems: [],
  marauders: [],
};

const download = (data, armyName) => {
  const url = window.URL.createObjectURL(new Blob([JSON.stringify(data)]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${armyName}.json`);
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};

const ArmiesManager = ({ state, setState, setPage }) => {
  const [newArmyName, setNewArmyName] = useState("");
  const [overwriteError, setOverwriteError] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (newArmyName in state.armies && !overwriteError) {
      setOverwriteError(true);
      return;
    }
    setState({
      ...state,
      currentArmy: newArmyName,
      armies: {
        ...state.armies,
        [newArmyName]: { ...initialArmyState },
      },
    });
    setPage("army-builder");
  };

  const onUpload = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (state.armies[file.name]) {
        setUploadError(
          "Army with that name alreadt exists. Change the file name before uploading."
        );
        return;
      }
      const fr = new FileReader(file);
      fr.readAsText(file);
      fr.onload = (ev) => {
        const result = ev.currentTarget.result;
        var newState = null;
        var valid = true;
        try {
          newState = JSON.parse(result);
          valid = newState.pointTarget !== undefined && newState.army;
          if (!valid) {
            setUploadError("Files has invalid format.");
          }
        } catch {
          valid = false;
        }
        if (!valid) {
          setUploadError("Unknown upload error.");
        }
        if (valid) {
          setState({
            ...state,
            armies: {
              ...state.armies,
              [file.name]: newState,
            },
          });
        }
      };
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="armies-manager-content">
          <h1 className="armies-manager-title">Army List</h1>
          {Object.keys(state.armies).map((armyName) => {
            return (
              <Army
                key={armyName}
                armyName={armyName}
                state={state}
                setState={setState}
                setPage={setPage}
              />
            );
          })}
          {Object.keys(state.armies).length === 0 && (
            <div>No armies here yet, create one below!</div>
          )}
          <form onSubmit={onSubmit} className="create-new-form">
            <input
              value={newArmyName}
              onChange={(e) => setNewArmyName(e.target.value)}
              maxLength={99}
              placeholder="Army Name"
              required
            />
            <button className="btn" type="submit">
              Create new army
            </button>
          </form>
          <input type="file" multiple={false} onChange={onUpload}>
            Upload
          </input>
          {uploadError && <div style={{ color: "red" }}>{uploadError}</div>}
          {overwriteError && (
            <div style={{ color: "red" }}>
              There is already an army with that name. Submit form again to
              overwrite that army.
            </div>
          )}
          <div style={{ maxWidth: "30rem", fontSize: "0.9rem" }}>
            Your armies are saved locally in your browser. You can download your
            army lists and import them on another device.
          </div>
        </div>
      </div>
    </>
  );
};

const Army = ({ armyName, state, setState, setPage }) => {
  const [shownConfirm, setShownConfirm] = useState(false);

  const onRemove = () => {
    if (shownConfirm) {
      const stateBuf = { ...state, currentArmy: null };
      delete stateBuf.armies[armyName];
      setState(stateBuf);
      localStorage.setItem("state", JSON.stringify(stateBuf));
    }
    setShownConfirm(true);
  };

  return (
    <div className="army-in-list">
      <div className="army-name-points">
        <div
          onClick={() => {
            setState({
              ...state,
              currentArmy: armyName,
            });
            setPage("army-builder");
          }}
          className="army-name"
        >
          {armyName} - {state.armies[armyName].army}
        </div>
        <div>
          {calculateTotalCost(state.armies[armyName])}/
          {state.armies[armyName].pointTarget}pts
        </div>
      </div>
      <div className="army-actions">
        <div>
          <div
            className="material-symbols-rounded notranslate btn"
            onClick={() => {
              download(state.armies[armyName], armyName);
            }}
          >
            download
          </div>
          <div
            onClick={() => {
              setState({
                ...state,
                currentArmy: armyName,
              });
              setPage("print");
            }}
            className="material-symbols-rounded notranslate btn"
          >
            print
          </div>
        </div>
        <div>
          <button onClick={onRemove} className="btn">
            Remove
          </button>
          {shownConfirm && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              Are you sure?
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArmiesManager;
