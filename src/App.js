import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
