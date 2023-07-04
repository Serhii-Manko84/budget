import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Wrapper.displayName = "Wrapper";

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0 5px;

    li {
      margin-right: 10px;

      a {
        color: ${(props) => props.theme.linkColor};
      }
    }
  }
`;
Nav.displayName = "Nav";
