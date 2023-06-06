import styled from "styled-components";



export const Wrapper = styled.div`
  background: ${(props) => (props.value < 0 ? "#ffad99" : " #b3ffcc")};
  border: 2px solid rgb(242, 162, 58);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`;

Wrapper.displayName = "TransactionWrapper";
