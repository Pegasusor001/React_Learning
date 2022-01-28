import React from "react";
import { ReactDOM } from "react";

export class ClassComponent_WithConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25,
    };

    // 暂时不懂，为啥要 bind，对于 class 的 this 和 bind 理解不深
    this.handleChange = this.handleChange.bind(this);
    this.decrement_1 = this.decrement_1.bind(this);
    this.increment_2 = this.increment_2.bind(this);
    this.decrement_2 = this.decrement_2.bind(this);
  }

  handleChange() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement_1() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  // setState() is asynchronous, 所以连续三个 setState 不会给 State 加上3，常有未知风险
  increment_2() {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
  }

  // setState() is asynchronous, 给 setState pass in 一个 Call back Function，是更好的操作。
  // setState的第二个 callback，可以在 第一个 function 结束后，在运行一个 function
  decrement_2() {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
    this.setState(
      (prev) => {
        return {
          count: prev.count - 1,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <>
        <div>
          <h2>Counter Fundamental</h2>
          <div>
            <button onClick={this.decrement_1}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleChange}>+</button>
          </div>
        </div>

        <div>
          <h2>Counter Run Code After setState with a Callback</h2>
          <div>
            <button onClick={this.decrement_2}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.increment_2}>+</button>
          </div>
        </div>
      </>
    );
  }
}

// setState 的 shallow merge：
// toggle_1：更新State，State会只更新 obj重的lit value，但是这并不好
// toggle_2：使用 ...Prev, 才是 best practice
export class ClassComponent_WithoutConstructor extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 25,
    lit_1: true,
    lit_2: true
  };

  handleChange = () => {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  };

  decrement_1 = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  // 比较 toggle_1 and toggle_2
  // Shallow Merge
  toggle_1 = () => {
    this.setState((prev) => {
      return {
        lit_1: !prev.lit_1
      };
    });
  };

  // Best practice:
  // 1. 使用 call back
  // 2. 用 setState 而不是直接改 State
  // 3. 使用 ...prev，而不是用 Shallow Merge
  toggle_2 = () => {
    this.setState((prev) => {
      return {
        ...prev,
        lit_2: !prev.lit_2
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Counter Best Practice to Update State</h2>
          <div>
            <button onClick={this.decrement_1}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleChange}>+</button>
            <br></br>
            <label>{this.state.lit_1 ? "true" : "Flase"}</label>
            <br></br>
            <button onClick={this.toggle_1}>Toggle_1</button>
            <br></br>
            <label>{this.state.lit_2 ? "true" : "Flase"}</label>
            <br></br>
            <button onClick={this.toggle_2}>Toggle_2</button>
          </div>
        </div>
      </>
    );
  }
}


export class ClassComponent_Input extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
  };

  handleChange = (event) => {
    this.setState({
      count: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div>
          <h2>Counter Input Change</h2>
          <div>
            <h2>This is Count: {this.state.count}</h2>
            <input onChange={this.handleChange} value={this.state.count}/>
            <label>count</label>
          </div>
        </div>
      </>
    );
  }
}
