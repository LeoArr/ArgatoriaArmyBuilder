import { useRef, useEffect } from "react";

const Errors = ({ errors, errorsOpen, setErrorsOpen }) => {
  const modal_ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        errorsOpen &&
        modal_ref.current &&
        !modal_ref.current.contains(event.target)
      ) {
        setErrorsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [errorsOpen]);

  return (
    <>
      {errorsOpen && (
        <div ref={modal_ref} className="errors-view">
          <div>
            {errors.map((err, i) => {
              return (
                <div key={i} className="rule-error">
                  <div>{err.title}</div>
                  <div> - {err.msg}</div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => setErrorsOpen(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
            }}
            className="material-symbols-rounded notranslate"
          >
            close
          </div>
        </div>
      )}
    </>
  );
};

export default Errors;
