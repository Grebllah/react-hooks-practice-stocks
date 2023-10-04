import React from "react";
import Stock from "./Stock";

function PortfolioContainer({sortForm, portfolio, removeStock}) {
  console.log(sortForm, portfolio)
  if(sortForm==="Alphabetically"){
    console.log("in here")
    portfolio.sort((a,b) => a.name - b.name)
  }
  //if prices
  const mappedStocks = portfolio.map((stock)=> <Stock key={stock.id} stock={stock} handleClick={removeStock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedStocks}
    </div>
  );
}

export default PortfolioContainer;
