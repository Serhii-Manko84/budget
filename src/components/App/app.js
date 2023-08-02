import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Bars } from "react-loader-spinner";

import { open } from "../../utils/indexdb";

import Header from "../Header";
import Home from "../Home";
import About from "../About";

import { Wrapper, GlobalStyle } from "./styles";
import { saveToStorage } from "../../utils/sessionStorage";
import IntlAppProvider from "../providers/context/i18n/provider";
import { darkTheme } from "../theme/dark";
import { lightTheme } from "../theme/light";

const Settings = lazy(() => import("../Settings"));
const Statistics = lazy(() => import("../Statistics"));

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    saveToStorage("theme", theme);
  };

  useEffect(() => {
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
            <Suspense
              fallback={
                <div>
                  <Bars styles="width:50px; height: 50px;" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Suspense>
          </Wrapper>
        </IntlAppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
