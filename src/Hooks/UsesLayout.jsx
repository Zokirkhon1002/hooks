import React, { useState, useLayoutEffect} from "react";

export default function UsesLayout() {
  const [value, setValue] = useState(0);
// useLayout bilan use effectning farqi birida biroz stop holati bor, lekin vazifasi birxil
  useLayoutEffect(() => {
      if(value === 0 ){
          setValue(10*Math.random() * 200)
      }
  }, [value])

  console.log("render value", value);
  return (
    <div className="container">
      <div className="btn-group p-4 d-block">
        <p>User: {value} </p>
        <button
          type="button"
          className="btn btn-outline-danger m-2"
          onClick={() => setValue(0)}
        >
          reset
        </button>
        <button type="button" className="btn btn-outline-info m-2">
          Android-developer
        </button>
        <button type="button" className="btn btn-outline-secondary m-2">
          IOS developer
        </button>
      </div>
    </div>
  );
}
