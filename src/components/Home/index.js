import { Component } from "react";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary";

import { Wrapper } from "./styles";

let id = 0;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
      id: 0,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = ({ value, date, comment }) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        {
          value: +value,
          comment,
          date,
          id: ++id,
        },
        ...state.transactions,
      ],
    }));
  };

  render() {
    return (
      <ErrorBoundary>
        <Wrapper>
          <Balance balance={this.state.balance} />
          <Form onChange={this.onChange} />
          <hr />
          <Transactions transactions={this.state.transactions} />
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

export default Home;
