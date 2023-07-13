import { useState } from "react";
import { Bars } from "react-loader-spinner";

import Balance from "../Balance";
import Transactions from "../Transactions";

import ErrorBoundary from "../ErrorBoundary";

import { Wrapper } from "./styles";

import { useDate } from "../hooks";
import { STATUSESS } from "../../constants";
import { ChangeBalance } from "../ChangeBalance";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const { transactions, status, pushTransaction, onDelete, onStartClick } =
    useDate();

  const onChange = (transaction) => {
    pushTransaction(transaction);
    setBalance(balance + Number(transaction.value));
  };

  return (
    <ErrorBoundary>
      <Wrapper>
        <Balance balance={balance} />
        <ChangeBalance onChange={onChange} />
        <hr />
        {status === STATUSESS.PENDING ? (
          <div>
            <Bars styles="width:50px; height: 50px;" />
          </div>
        ) : null}
        {status === STATUSESS.SUCCESS ? (
          <Transactions
            transactions={transactions}
            onDelete={onDelete}
            onStartClick={onStartClick}
          />
        ) : null}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Home;
