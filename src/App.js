import React from "react";
import { Context } from "./stores/counter";
import Counter from "./Counter";
import Counter2 from "./Counter2";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      increase: () => {
        console.log("increase call");
        this.setState({
          number: this.state.number + 1
        });
      },
      decrease: () => {
        console.log("decrease call");
        this.setState({
          number: this.state.number - 1
        });
      }
    };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <h1>function component</h1>
          <Counter />
          <h1>class component</h1>
          <Counter2 />
        </div>
      </Context.Provider>
    );
  }
}
