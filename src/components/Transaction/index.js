import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../providers/context";
import { Wrapper, TransactionDate, Value, Comment } from "./styles";

const Transaction = ({ transaction: { value, date, comment } }) => {
  const { state } = useContext(AppContext);
  return (
    <Wrapper value={value}>
      <TransactionDate>{date}</TransactionDate>
      <Value>
        {value.toFixed(2)}, {state.currency}
      </Value>
      <Comment>{comment}</Comment>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Transaction;
