import React from "react";

// 1. Mount
// 2. Render
// 3. Commit
// 4. Unmount
export class LifeCycle extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("componentDidMount: ", "Mounted");
    // fetch data, event listerners, DOM nodes
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: ", "Updated");
    // re-sync
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: ", "UnMounted");
    // cleanup - timers, subscriptions
  }

  render() {
    return (
      <>
        <div>
          <h2>LifeScycle</h2>
          <label>Count: {this.state.count}</label>
          <button>Click</button>
        </div>
      </>
    );
  }
}

// 这部分不太对，代码有问题，不成功
// 理论上：使用 shouldComponentUpdate = PureComponent = useMemo 
// 这些可以避免重复 render 所占用的计算空间
export class ShouldComponentUpdate extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state)
  //   console.log(nextProps.value)
  //   // if (nextProps.value !== this.props.value) {
  //   //   return false;
  //   // }
  //   return true;
  // }

  state = {
    lit: true,
    history: []
  };

  componentDidMount() {
    console.log("componentDidMount: ", "Mounted");
    // fetch data, event listerners, DOM nodes
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: ", "Updated");
    // re-sync
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: ", "UnMounted");
    // cleanup - timers, subscriptions
  }

  toggle = () => {
    this.setState(
      (prev) => {
        return {
          ...prev,
          lit: !prev.lit,
          history: [...this.state.history, this.state.lit ? "true" : "Flase"]
        };
      }
    );
  };

  render() {
    
    return (
      <>
        <div>
          <h2>shouldComponentUpdate 不太对，有问题，跳过</h2>
          <label>Lit: {this.state.lit ? "true" : "Flase"}</label>
          <button onClick={this.toggle}>Click</button>
          <h3>history</h3>
          <div>
            <ul>
              {this.state.history.map((item, index) => {
                console.log('History: rendered')
                return (
                  <li key={index}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
