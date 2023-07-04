import { Link } from "react-router-dom";
import Switch from "../Switch";
import { Nav } from "./styles";
import { Wrapper } from "./styles";

const Header = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/statistics"}>Statistics</Link>
          </li>
          <li>
            <Link to={"/settings"}>Settings</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </Nav>
      <div>
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </div>
    </Wrapper>
  );
};

export default Header;
