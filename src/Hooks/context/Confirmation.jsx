import React, { useContext } from "react";
import { AlertContext } from "./UsesContext.js";

function Confirmation() {
  const confirm = useContext(AlertContext);

  if (!confirm) return null;

  return (
    <div
      style={{
        background: "crimson",
        padding: "20px",
        textAlign: "center",
        color: "#fff",
        margin: "10px 0",
      }}
    >
      <h3>Are you ready?</h3>
      <div className="btn-group p-4 d-block">
          <h1>Salom From Context</h1>
          <button
            type="button"
            className="btn btn-outline-success m-2"
            onClick={()=> window.close()}
          >
           Show Alert
          </button>
          <button
            type="button"
            className="btn btn-outline-info m-2"
            onClick={()=> alert(`Zokirkhon`)}
          >
            Show Confirmation
          </button>
        </div>
    </div>
  );
}

export default Confirmation;
