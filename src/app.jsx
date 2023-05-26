import { useState, useEffect } from "react";
import "./app.css";
import rules from "./assets/rules";
import Footer from "./components/footer";
import Errors from "./components/errors";
import Header from "./components/header";
import ArmyBuilder from "./components/army-builder";
import ArmiesManager from "./components/armies-manager";
import Print from "./components/print";

// More armies

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

  useEffect(() => {
    if (state.currentArmy) {
      const errors = [];
      for (const rule of rules) {
        const msg = rule.fn(state.armies[state.currentArmy]);
        if (msg) {
          errors.push({ title: rule.title, msg });
        }
        setErrors(errors);
      }
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
    }
  }, [
    state.armies[state.currentArmy]?.selectedUnits,
    state.armies[state.currentArmy]?.selectedMagicItems,
    state.armies[state.currentArmy]?.selectedSpells,
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
