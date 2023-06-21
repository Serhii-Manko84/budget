import Transaction from "../Transaction";
import PropTypes from "prop-types";

const Transactions = ({ transactions = [], onDelete, onStartClick }) =>
  transactions.map((transaction) => (
    <Transaction
      key={transaction.id}
      transaction={transaction}
      onDelete={onDelete}
      onStartClick={onStartClick}
    />
  ));

Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default Transactions;
