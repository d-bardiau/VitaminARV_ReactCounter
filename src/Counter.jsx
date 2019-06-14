import React from "react";

export default class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleChange = arg => {
    if (!isNaN(arg.target.value)) {
      this.setState({ count: arg.target.value });
    }
  };

  render() {
    return (
      <>
        <p>{this.props.msg}</p>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment (+)</button>
        <button onClick={this.decrement}>Decrement (-)</button>
        <br />
        <br />
        <input
          value={this.state.count}
          type="number"
          onChange={this.handleChange}
        />
      </>
    );
  }
}
