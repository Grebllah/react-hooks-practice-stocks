import React from "react";
import Stock from "./Stock";

function PortfolioContainer({sortForm, portfolio, removeStock}) {
  const mappedStocks = portfolio.map((stock)=> <Stock key={stock.id} stock={stock} handleClick={removeStock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedStocks}
    </div>
  );
}

export default PortfolioContainer;
