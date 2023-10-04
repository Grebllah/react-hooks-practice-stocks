import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock, sortForm}) {
  if(sortForm==="Alphabetically"){
    stocks.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
  }
  const mappedStocks = stocks.map((stock)=> <Stock key={stock.id} stock={stock} handleClick={addStock}/>)
  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {mappedStocks};
      </div>
    </div>
  );
}

export default StockContainer;
