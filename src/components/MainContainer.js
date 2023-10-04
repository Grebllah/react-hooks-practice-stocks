import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortForm, setSortForm] = useState("Alphabetically")
  useEffect(()=>{
    fetch ("http://localhost:3001/stocks")
    .then ((res) => res.json())
    .then ((data)=> {
      setStocks(data)
    })
  }, []);
  const addStock = (stockToAdd) => {
    setPortfolio(portfolio => [...portfolio, stockToAdd])
    setStocks(stocks => stocks.filter(stock=>stock.id !== stockToAdd.id))

  }
  const removeStock = (stockToRemove) => {
    setPortfolio(portfolio => portfolio.filter(stock=>stock.id !== stockToRemove.id))
    setStocks(stocks => [...stocks, stockToRemove])
  }

  const sortByTicker = (stocks) => {
    stocks.sort()
  }

  const sortAlphabetically = () => {}

  return (
    <div>
      <SearchBar
        stocks={stocks}
        sortForm= {sortForm}
        setSortForm= {setSortForm}
        sortByTicker= {sortByTicker}
        sortAlphabetically={sortAlphabetically}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer addStock={addStock} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer removeStock={removeStock} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
