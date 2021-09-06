import React, { useState, useCallback } from "react";
import ItemList from "./ItemList";

export default function UsesCallback() {
  const [rang, setRang] = useState(false);
  const [count, setCount] = useState(5);

  const styles = {
    color: rang ? "crimson" : "blue",
  };

  const generateItem = useCallback((indexNumber) => {
    return new Array(count).fill("").map((_, index) => `Element: ${index + indexNumber}`);
  }, [count]);

  return (
    <div className="container">
      <div className="btn-group p-4 d-block">
        <h1 style={styles}>Amount of count: {count}</h1>
        <button
          type="button"
          className="btn btn-outline-success m-2"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Add Count++
        </button>
        <button
          type="button"
          className="btn btn-outline-info m-2"
          onClick={() => setRang((prev) => !prev)}
        >
          Change Color
        </button>
        <ItemList getItems={generateItem} />
        {/*  <button
            type="button"
            className="btn btn-outline-secondary m-2"
          >
            IOS developer
          </button>
          */}
      </div>
    </div>
  );
}
