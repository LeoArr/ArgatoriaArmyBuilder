const Header = ({ page, setPage, state, setState = { setState } }) => {
  return (
    <div className="header-content">
      <h1 className="heading-title">Argatoria Army Builder</h1>
      {page === "army-builder" && (
        <div
          className="heading-nav"
          onClick={() => {
            setPage("armies-manager");
            setState({
              ...state,
              currentArmy: "",
            });
          }}
        >
          My lists
          <span
            className="material-symbols-rounded"
            style={{ fontSize: "0.8rem" }}
          >
            arrow_forward_ios
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
