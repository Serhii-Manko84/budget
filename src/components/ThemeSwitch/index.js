import React, { useContext } from "react";
import { AppContext } from "../providers/context";
import { THEMES } from "../providers/themes/themeList";

export const ThemeSwitch = () => {
  const { state, dispatch } = useContext(AppContext);

  const setTheme = (themeName) => {
    dispatch({
      type: "setTheme",
      themeName,
    });
  };
  return (
    <>
      <button onClick={() => setTheme(THEMES.LIGHT)}>light</button>
      <button onClick={() => setTheme(THEMES.DARK)}>Dark</button>
    </>
  );
};
