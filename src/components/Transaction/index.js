const Transaction = ({ transaction }) => {
  return (
    <div>
      label:{transaction.label}
      <p>value: {transaction.value}</p>
    </div>
  );
};

export default Transaction;
