import { useState, useEffect } from "react";
import "./app.css";
import rules from "./assets/rules";
import Footer from "./components/footer";
import Errors from "./components/errors";
import Header from "./components/header";
import ArmyBuilder from "./components/army-builder";
import ArmiesManager from "./components/armies-manager";
import Print from "./components/print";

export function App() {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state")) || {
      currentArmy: "",
      armies: {},
    }
  );
  const [errors, setErrors] = useState([]);
  const [errorsOpen, setErrorsOpen] = useState(false);
  const [page, setPage] = useState(
    sessionStorage.getItem("currentPage") || "armies-manager"
  );
  useEffect(() => {
    sessionStorage.setItem("currentPage", page);
  }, [page]);

  const validateRules = () => {
    const _errors = [];
    const army_state = state.armies[state.currentArmy];
    for (const rule of rules) {
      const msg = rule.fn(army_state);
      if (msg) {
        _errors.push({ title: rule.title, msg });
      }
    }
    for (const unit of army_state.selectedUnits) {
      if (unit.ruleFn) {
        const msg = unit.ruleFn(army_state);
        if (msg) {
          _errors.push({ title: unit.name, msg });
        }
      }
    }
    setErrors(_errors);
  };

  const handleMarauders = () => {
    const marauders = [];
    for (const unit of state.armies[state.currentArmy].selectedUnits) {
      if (unit.count >= 16 && !unit.model) {
        marauders.push({ ...unit, pointCost: 0, count: 4 });
      }
    }
    const newArmyState = {
      ...state.armies[state.currentArmy],
      marauders: marauders,
    };
    const newState = {
      ...state,
      armies: {
        ...state.armies,
        [state.currentArmy]: newArmyState,
      },
    };
    setState(newState);
    localStorage.setItem("state", JSON.stringify(state));
  };

  useEffect(() => {
    if (state.currentArmy) {
      validateRules();
      handleMarauders();
    }
  }, [
    state.armies[state.currentArmy]?.selectedUnits,
    state.armies[state.currentArmy]?.selectedMagicItems,
    state.armies[state.currentArmy]?.selectedSpells,
    state.armies[state.currentArmy]?.selectedMagicBanners,
    state.armies[state.currentArmy]?.selectedArtefacts,
  ]);

  const setArmyState = (armyState) => {
    setState({
      ...state,
      armies: {
        ...state.armies,
        [state.currentArmy]: armyState,
      },
    });
  };

  if (page === "print") {
    return (
      <Print armyState={state.armies[state.currentArmy]} setPage={setPage} />
    );
  }

  return (
    <>
      <header className="header">
        <Header
          page={page}
          setPage={setPage}
          state={state}
          setState={setState}
        />
      </header>

      <main>
        {page === "army-builder" && state.armies[state.currentArmy] && (
          <ArmyBuilder
            state={state.armies[state.currentArmy]}
            setState={setArmyState}
          />
        )}
        {page === "armies-manager" && (
          <ArmiesManager state={state} setState={setState} setPage={setPage} />
        )}
      </main>
      <footer>
        {page === "army-builder" && (
          <Footer
            state={state.armies[state.currentArmy]}
            errors={errors}
            setErrorsOpen={setErrorsOpen}
            setPage={setPage}
          />
        )}
      </footer>
      <Errors
        errors={errors}
        errorsOpen={errorsOpen}
        setErrorsOpen={setErrorsOpen}
      />
    </>
  );
}
