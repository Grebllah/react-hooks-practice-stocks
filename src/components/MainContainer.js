import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortForm, setSortForm] = useState(null)
  const [filterForm, setFilterForm] = useState(null)
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
    console.log(stockToAdd.type)
  }
  const removeStock = (stockToRemove) => {
    setPortfolio(portfolio => portfolio.filter(stock=>stock.id !== stockToRemove.id))
    setStocks(stocks => [...stocks, stockToRemove])
  }

const setSortState = (e) => {
  setSortForm(e.target.value)
}

const changeFilterState = (e) => {
  setFilterForm(e.target.value)
}

return (
    <div>
      <SearchBar
        setSortState={setSortState}
        changeFilterState={changeFilterState}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer sortForm= {sortForm} filterForm={filterForm} addStock={addStock} stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer sortForm= {sortForm} removeStock={removeStock} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
