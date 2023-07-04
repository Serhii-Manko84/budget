import { useState } from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import "./switch.css";

const Switch = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return (
    <>
      <SunIcon />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle}></input>
        <span className="switch" />
      </label>
      <MoonIcon />
    </>
  );
};

export default Switch;
