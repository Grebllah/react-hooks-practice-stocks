import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock, sortForm, filterForm}) {
  if(sortForm === "Alphabetically"){
    stocks.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
  } else if (sortForm === "Price"){
    stocks.sort((a,b) => a.price - b.price)
  }
  let filteredStocks = stocks
  if(filterForm === "Tech")
    {
      filteredStocks = stocks.filter(stock => stock.type === "Tech")
    } else if (filterForm === "Sportswear")
    {
      filteredStocks = stocks.filter(stock => stock.type === "Sportswear")
    } else if (filterForm === "Finance")
    {
      filteredStocks = stocks.filter(stock => stock.type === "Finance")
    }
  const mappedStocks = filteredStocks.map((stock) => <Stock key = {stock.id} stock = {stock} handleClick = {addStock}/>)
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
