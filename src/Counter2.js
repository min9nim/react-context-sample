import React, { Component } from "react";
import { Context } from "./stores/counter";

export default class Counter extends Component {
  static contextType = Context;
  render() {
    const state = this.context;
    return (
      <div>
        <h1>{state.number}</h1>
        <button onClick={state.increase}>+1</button>
        <button onClick={state.decrease}>-1</button>
      </div>
    );
  }
}
