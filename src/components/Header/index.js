import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Switch from "../Switch";
import { Nav } from "./styles";
import { Wrapper } from "./styles";

const Header = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <Link to={"/"}>
              <FormattedMessage id="menu.home" />
            </Link>
          </li>
          <li>
            <Link to={"/statistics"}>
              <FormattedMessage id="menu.statistics" />
            </Link>
          </li>
          <li>
            <Link to={"/settings"}>
              <FormattedMessage id="menu.settings" />
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <FormattedMessage id="menu.about" />
            </Link>
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
