import React, { useState, useEffect, useMemo} from "react";

const complete = (num) =>{
  let i =0;
  while(i<10000) i++;
  return num * 2;
}

export default function UsesMemo() {
const [n, setn ] = useState(6);
const [ rang, setRang ] = useState(false);

const styles = useMemo(()=>{
  return  {
    color: rang? 'red':'blue',
  };
}, [rang]);

useEffect(()=>{
  console.log('useEffect')
}, [styles])

const completed = useMemo(()=>{
  return complete(n);
}, [n]);

  return (
    <div className="container">
      <div className="btn-group p-4 d-block">
      <input
          type="text"
          className="form-control" 
          id="exampleFormControlInput1"
          placeholder="input something..."
        />
        <p style={styles}>Some words: {completed}</p>
        
        <button onClick={()=>setn(prev=>prev+1)} type="button" className="btn btn-outline-success m-2">
          Add
        </button>
        <button onClick={()=>setn(prev=>prev-1)}  type="button" className="btn btn-outline-danger m-2">
          Delete
        </button>
        <button onClick={()=> setRang(prev=>!prev)}  type="button" className="btn btn-outline-info m-2">
          change Color
        </button>
      </div>
    </div>
  );
}
