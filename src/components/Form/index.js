import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({ value: "" });
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          value={this.state.value}
          name="balance"
          type="number"
          placeholder="Summa"
        ></input>
        <button>Save</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
