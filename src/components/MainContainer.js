import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  useEffect(()=>{
    fetch ("http://localhost:3001/stocks")
    .then ((res) => res.json())
    .then ((data)=> {
      setStocks(data)
    })
  });
  const addStock = (stockToAdd) => {
    setPortfolio(portfolio=> [...portfolio, stockToAdd])
  }

  const removeStock = (stockToRemove) => {
    setPortfolio(portfolio=> portfolio.filter(stock=>stock.id !== stockToRemove.id))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addStock={addStock} stocks={stocks} setStocks={setStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer removeStock={removeStock} portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
