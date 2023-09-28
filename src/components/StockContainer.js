import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer() {
  const [ownedStocks, setOwnedStocks] = useState([])
  useEffect(()=>{
    fetch ("http://localhost:3001/stocks")
    .then ((res) => res.json())
    .then ((data)=> {
      setOwnedStocks(data)
    })
  });

  const handleClick = (e) => {
    console.log (e.target, "clicked")
  }

  return (
    <div>
      <h2>Stocks</h2>
      <div>{ownedStocks.map((stock)=>{
        return (
        <Stock onClick={handleClick} key={stock.id} name={stock.name} ticker={stock.ticker} type={stock.type} price={stock.price} />
        )
      })};
      </div>
    </div>
  );
}

export default StockContainer;
