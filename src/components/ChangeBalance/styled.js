import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 50px;
  width: 50px;
  font-size: 42px;
  color: lightgray;
  outline: none;
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;

  &:hover {
    cursor: pointer;
  }
`;
