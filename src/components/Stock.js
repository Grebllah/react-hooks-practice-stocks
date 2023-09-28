import React from "react";

function Stock(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.ticker}</h5>
          <p className="card-text">{props.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
