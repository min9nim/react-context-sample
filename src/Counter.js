import React from "react";
import { Context } from "./stores/counter";

export default function Counter() {
  return (
    <Context.Consumer>
      {state => (
        <div>
          <h1>{state.number}</h1>
          <button onClick={state.increase}>+1</button>
          <button onClick={state.decrease}>-1</button>
        </div>
      )}
    </Context.Consumer>
  );
}
