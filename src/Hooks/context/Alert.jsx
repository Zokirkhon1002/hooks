import React, { useContext } from "react";
import { AlertContext } from "./UsesContext.js";

function Alert() {
  const alert = useContext(AlertContext);

  if (!alert) return null;

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
      <h3>This is very important message</h3>
    </div>
  );
}

export default Alert;
