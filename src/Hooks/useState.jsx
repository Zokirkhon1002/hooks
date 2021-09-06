import React, { useState } from "react";

function randomNumber() {
  console.log("Math.random ishlayapti");
  return Math.trunc(Math.random() * 20);
}

export default function UsesStates() {
  const [count, setCount] = useState(() => randomNumber());
  const [state, setState] = useState({
    text: "Number",
    date: Date.now(),
  });

  function Plus() {
    setCount((prev) => prev + 1);
  }
  function Minus() {
    setCount((prev) => prev - 1);
  }
  function replacaer() {
    setState((prev) => {
      return { ...prev, text: "New Text" };
    });
  }

  return (
    <div className="container">
      <div className="btn-group p-4 d-block">
        <p>Number: {count} </p>
        <button
          onClick={Plus}
          type="button"
          className="btn btn-outline-success m-2"
        >
          Add
        </button>
        <button
          onClick={Minus}
          type="button"
          className="btn btn-outline-danger m-2"
        >
          Minus
        </button>
        <button
          type="button"
          className="btn btn-outline-info m-2"
          onClick={replacaer}
        >
          Edit
        </button>
      </div>

      <p>{JSON.stringify(state, null, 2)}</p>
    </div>
  );
}
