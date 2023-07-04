import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Bars } from "react-loader-spinner";

import { open } from "../../utils/indexdb";

import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Settings from "../Settings";
import Statistics from "../Statistics";

import { Wrapper, GlobalStyle } from "./styles";
import { getFormStorage } from "../../utils/sessionStorage";
import IntlAppProvider from "../providers/context/i18n/provider";

const darkTheme = {
  background: "#4b4343a3",
  icon: "#b6b6b6",
  linkColor: "#ffffffcf",
};

const lightTheme = {
  background: "#d7c9c982",
  icon: "#1c1c1c",
  linkColor: "#081dba",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  useEffect(() => {
    getFormStorage("name");
    open()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <div>
        <Bars styles="width:50px; height: 50px;" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <IntlAppProvider>
          <Wrapper>
            <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Wrapper>
        </IntlAppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
