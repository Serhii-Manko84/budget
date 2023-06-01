import PropTypes from "prop-types";

const Transaction = ({ transaction }) => {
  return (
    <div>
      label:{transaction.label}
      <p>value: {transaction.value}</p>
    </div>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Transaction;
