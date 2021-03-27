import React, { useEffect, useState } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import StatsRow from "./StatsRow";
import db from "../firebase";
function Stats() {
  const KEY_URL = "bv37tnv48v6vvud32ohg";
  const BASE_URL = "https://finnhub.io/api/v1/quote";

  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        console.log(doc.data());
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        console.log(tempData);
        setMyStocks(tempData);
      });
    });
  };

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${KEY_URL}`)
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  useEffect(() => {
    getMyStocks();
    let testData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];
    getStocksData();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          //console.log(res);
          testData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setStockData(testData);
      console.log(testData);
    });
  }, []);
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.id}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                price={stock.info.c}
                shares={stock.data.shares}
              />
            ))}
          </div>
        </div>
        <div className="stats__header list">
          <p>Lists</p>
          <AddIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
