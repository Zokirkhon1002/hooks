import React, { useState, useEffect, useRef } from "react";


export default function UsesRef() {
  // const [ count, setCount ] = useState(1);
  const [value, setValue] = useState("default");
  const renderCount = useRef(1)
  const inputRef = useRef(null);
  const PrevValue = useRef('');




  console.log(renderCount)
  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  });

  useEffect(()=> {
      PrevValue.current = value
  }, [value])


  const focus = () => inputRef.current.focus();

  

  return (
    <div className="container">
      <div className="btn-group p-4 d-block">
      <input
          ref={inputRef}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <p>Amount of Rendering: {renderCount.current}</p>
        <p>Prev Value: {PrevValue.current}</p>
        
        <button type="button" className="btn btn-outline-success m-2" onClick={focus}>
          Click
        </button>
        {/* <button type="button" className="btn btn-outline-info m-2">
          Decrement
        </button>
        <button type="button" className="btn btn-outline-secondary m-2">
          Reset
        </button> */}
      </div>
    </div>
  );
}
