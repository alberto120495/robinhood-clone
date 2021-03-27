import React from "react";
import "./StatsRow.css";
import StockSVG from "../stock.svg";
import db from "../firebase";

function StatsRow({ name, openPrice, price, shares }) {
  const percentage = ((price - openPrice) / openPrice) * 100;
  const addStock = () => {
    db.collection("myStocks")
      .where("ticker", "==", name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          //update the record
          querySnapshot.forEach(function (doc) {
            db.collection("myStocks")
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
            console.log(doc.id, "=>", doc.data());
          });
        } else {
          //Add a new record
          db.collection("myStocks").add({
            ticker: name,
            shares: 1,
          });
        }
      });
  };
  return (
    <div className="statsRow" onClick={addStock}>
      <div className="statsRow__intro">
        <h1>{name}</h1>
        <p>{shares ? `${shares} Shares ` : ""}</p>
      </div>
      <div className="statsRow__chart">
        <img src={StockSVG} alt="stock" height={16} />
      </div>
      <div className="statsRow__numbers">
        <p className="statsRow__numbersPrice">${price}</p>
        <p className={`statsRow__numbersPercentage ${percentage < 0 && "red"}`}>
          {percentage.toFixed(2)}%
        </p>firebase dep
      </div>
    </div>
  );
}

export default StatsRow;
