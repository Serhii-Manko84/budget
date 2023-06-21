import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../providers/context";
import { Wrapper, TransactionDate, Value, Comment, Icon } from "./styles";
import Burger from "../../assets/img/Burger.svg";
import Check from "../../assets/img/Check.svg";

const Transaction = ({
  transaction: { id, value, date, comment, isChecked },
  onDelete,
  onStartClick,
}) => {
  const { state } = useContext(AppContext);

  const deleteItem = () => onDelete(id);
  return (
    <Wrapper value={value}>
      <Icon onClick={() => onStartClick(id)}>
        <img src={isChecked ? Check : Burger} />
      </Icon>

      <TransactionDate>{date}</TransactionDate>
      <Value>
        {value.toFixed(2)}, {state.currency}
      </Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}> Delete </button>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
  onDelete: PropTypes.func,
  onStartClick: PropTypes.func,
};

export default Transaction;
