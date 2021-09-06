import React from 'react';
function Main({toggle}) {
    return ( 
        <div>
        <div className="btn-group p-4 d-block">
          <h1>Salom From Context</h1>
          <button
            type="button"
            className="btn btn-outline-success m-2"
            onClick={toggle}
          >
           Show Alert
          </button>
          <button
            type="button"
            className="btn btn-outline-info m-2"
            onClick={toggle}
          >
            Show Confirmation
          </button>
        </div>
      </div>
     );
}

export default Main;