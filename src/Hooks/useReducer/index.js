import React, { useReducer } from "react";
import UsesReducer from "./UsesReducer";
function ReducerIndex() {
  const [{ r, g, b }, dispatch] = useReducer(UsesReducer, {
    r: 0,
    g: 100,
    b: 200,
  });

  return (
    <div className="App">
      <h1 style={{ color: `rgb(${r},${g},${b})` }}>Use Reducer Hook</h1>
      <div style={{ padding: "10px" }}>
        <span
          style={{
            border: "2px solid blue",
            padding: "5px 20px",
            margin: "5px 5px",
          }}
        >
          R
        </span>
        <button
          onClick={() => dispatch({ type: "INCREMENT_R" })}
          className="btn btn-outline-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT_R" })}
          className="btn btn-outline-danger"
        >
          -
        </button>
      </div>
      <div style={{ padding: "10px" }}>
        <span
          style={{
            border: "2px solid blue",
            padding: "5px 20px",
            margin: "5px 5px",
          }}
        >
          R
        </span>
        <button onClick={() => dispatch({ type: "INCREMENT_G" })} className="btn btn-outline-success">+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_G" })} className="btn btn-outline-danger">-</button>
      </div>
      <div style={{ padding: "10px" }}>
        <span
          style={{
            border: "2px solid blue",
            padding: "5px 20px",
            margin: "5px 5px",
          }}
        >
          R
        </span>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })} className="btn btn-outline-success">+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_B" })} className="btn btn-outline-danger">-</button>
      </div>
    </div>
  );
}

export default ReducerIndex;
