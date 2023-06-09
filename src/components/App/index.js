import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import { Bars } from "react-loader-spinner";

import { open } from "../../utils/indexdb";

import Home from "../Home";
import About from "../About/";
import Statistics from "../Statistics";
import Header from "../Header";

import { Wrapper, GlobalStyle } from "./styles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    open()
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((error) => console.error(error));
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Bars styles="width:50px; height: 50px;" />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <Wrapper>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
