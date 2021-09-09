import React, { useState, useRef } from "react";
import TextInput from "./textInput";

function UsesImperativeHandle() {
  const [card, setCard] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const cardEl = useRef();
  const phoneEl = useRef();
  const errorEl = useRef();

  const validate = () => {
    if (card.length < 16) {
      setError(`card`);
      cardEl.current.focus();
      return;
    }

    if (phone.length < 10) {
        setError(`phone`);
        phoneEl.current.focus();
        return;
      }

      setError("");
  };

  return (
    <div>
      <h1>Salom Dunyo</h1>
      <TextInput
       hasError={error === 'card'}
       placeholder={"Card"}
       update={setCard}
       value={card}
       ref={cardEl}
       />
       <TextInput
       hasError={error === 'phone'}
       placeholder={"Phone"}
       update={setPhone}
       value={phone}
       ref={phoneEl}
       />

       <br/>
       <button onClick={validate}>Click me</button>
    </div>
  );
}

export default UsesImperativeHandle;
