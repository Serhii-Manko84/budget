import { Component } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
      id: 0,
    };
  }
  onIncrease = () => {
    this.setState((state) => ({
      balance: state.balance + 1,
      transactions: [
        { id: state.id, label: "Increase", value: 1 },
        ...state.transactions,
      ],
      id: state.id + 1,
    }));
  };

  onDecrease = () => {
    this.setState((state) => ({
      balance: state.balance - 1,
      transactions: [
        { id: state.id, label: "Decrease", value: -1 },
        ...state.transactions,
      ],
      id: state.id + 1,
    }));
  };

  render() {
    return (
      <>
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Додати 1</button>
        <button onClick={this.onDecrease}>Зменьшити 1</button>
        <hr />
        <Transactions transactions={this.state.transactions} />
      </>
    );
  }
}

export default App;
