import React, { useState, useEffect } from "react";

export default function UsesEffects() {
  const [user, setUser] = useState("users");
  const [ position, Setposition ] = useState({
      x:0,
      y:0,
  });



  useEffect(() => {
    console.log(`Render ${user}`)

  }, [user])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
      .then((response) => response.json())
      .then((json) => console.log(json));

      return ()=>{
          console.log('tozalandi')
      }
  }, [user]);



  useEffect(()=>{
      window.addEventListener('mousemove', (e)=>{
          Setposition({
              x: e.clientX,
              y: e.clientY,
          });
      });
  }, []);

  return (
    <div className="container">
      <div className="btn-group p-4 d-block">
        <p>User: {user} </p>
        <button
          type="button"
          className="btn btn-outline-success m-2"
          onClick={() => setUser("users")}
        >
          Web-developer
        </button>
        <button
          type="button"
          className="btn btn-outline-info m-2"
          onClick={() => setUser("posts")}
        >
          Android-developer
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary m-2"
          onClick={() => setUser("albums")}
        >
          IOS developer
        </button>
      </div>

      
      <pre>
          {JSON.stringify(position, null, 2)}
      </pre>
    </div>
  );
}
