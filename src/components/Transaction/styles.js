import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => (props.value < 0 ? "#ffad99" : " #b3ffcc")};
  border: 2px solid rgb(242, 162, 58);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
  flex-grow: 1;
`;
TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
  flex-grow: 1;
`;
Value.displayName = "Value";

export const Comment = styled.div`
  flex-grow: 1;
`;
Comment.displayName = "Comment";

export const Icon = styled.span`
  img {
    max-width: 15px;
    margin-right: 10px;
  }
`;
Icon.displayName = "Icon";
