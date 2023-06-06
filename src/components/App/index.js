import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Wrapper, GlobalStyle } from "./styles";

import Home from "../Home";
import About from "../About/";
import Statistics from "../Statistics";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/statistics"}>Statistics</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
