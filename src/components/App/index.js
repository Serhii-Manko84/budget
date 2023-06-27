import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "../providers/context";
import { getTheme } from "../providers/themes/getTheme";
import App from "./app";

export default () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <App />;
    </ThemeProvider>
  );
};
