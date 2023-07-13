import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

const parent = document.getElementById("modal");

const Portal = ({ children }) => {
  const elem = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    parent.appendChild(elem);

    return () => {
      parent.removeChild(elem);
    };
  }, [elem]);

  return ReactDOM.createPortal(children, elem);
};

export default Portal;
