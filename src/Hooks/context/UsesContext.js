import React, { useState } from "react";
import Alert from "./Alert";
import Main from "./Main";
import Confirmation from "./Confirmation";

export const AlertContext = React.createContext();

export default function UsesContext() {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);


  return (
    <div className="container">
      <AlertContext.Provider value={alert}>
        <Alert />
        <Confirmation />
        <Main toggle={toggleAlert} />
      </AlertContext.Provider>
    </div>
  );
}
