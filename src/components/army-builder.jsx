import LeftMenu from "./left-menu";
import MainContent from "./main-content";

const ArmyBuilder = ({ state, setState }) => {
  return (
    <>
      <aside className="left">
        <LeftMenu state={state} setState={setState} />
      </aside>
      <div className="main-content">
        <MainContent state={state} setState={setState} />
      </div>
    </>
  );
};

export default ArmyBuilder;
