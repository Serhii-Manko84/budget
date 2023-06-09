import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f2f2f2;
  padding: 10px;
`;
Wrapper.displayName = "Wrapper";

export const Input = styled.input`
  min-height: 40px;
  min-width: 80px;
  border-radius: 3px;
  padding: 0 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  outline: none;
`;
Input.displayName = "Input";

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
Row.displayName = "Row";

export const Button = styled.button`
  border: 2px solid #dbdbdb;
  border-radius: 2px;
  padding: 0 20px;
  min-height: 50px;
  min-width: 120px;
  box-sizing: border-box;
  background-color: #e0e0e0;
  margin-right: 10px;
  outline: none;

  &:hover {
    cursor: pointer;
    fond-size: 24px;
    color: #000d33;
    background-color: #ff6600;
  }
`;

Button.displayName = "Button";

export const Comment = styled.textarea`
  min-height: 40px;
  line-height: 1.5;
  padding: 5px;
  min-width: 100px;
  box-sizing: border-box;
  border: 2px solid #dbdbdb;
  margin: 0px;
  outline: none;
`;

Comment.displayName = "Comment";
