import Transaction from "../Transaction";

const Transactions = ({ transactions }) => (
  <div>
    {transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))}
  </div>
);

export default Transactions;
