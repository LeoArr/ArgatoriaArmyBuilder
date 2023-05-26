import { calculateTotalCost } from "../utils";

const Footer = ({ state, errors, setErrorsOpen, setPage }) => {
  const totalCost = calculateTotalCost(state);

  return (
    <div className="footer">
      <div></div>
      <div style={{ display: "flex" }}>
        <div style={{ fontSize: "2rem", marginRight: "1rem" }}>
          {totalCost} / {state.pointTarget} pts
        </div>
        {errors.length > 0 && (
          <div style={{ display: "flex" }}>
            <div
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setErrorsOpen(true)}
              className="material-symbols-rounded notranslate btn"
            >
              error
            </div>
            <span style={{ color: "red" }}>{errors.length}</span>
          </div>
        )}
        {errors.length === 0 && (
          <div
            style={{
              color: "#00ff00",
              display: "flex",
              fontSize: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="material-symbols-rounded notranslate"
          >
            check
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setPage("print")}
          className="material-symbols-rounded notranslate btn"
          disabled={totalCost === 0}
        >
          print
        </button>
      </div>
    </div>
  );
};
export default Footer;
