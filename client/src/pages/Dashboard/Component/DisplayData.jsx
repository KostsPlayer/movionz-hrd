import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

function DisplayData({ title, percentage, amount, note, isTrendingUp }) {
  return (
    <>
      <div className="container">
        <div className="title">{title}</div>
        <div className={`statistic ${isTrendingUp ? "" : "down"}`}>
          {isTrendingUp ? (
            <>
              <span>
                <TrendingUp size={12} strokeWidth={2} />
              </span>
            </>
          ) : (
            <>
              <span>
                <TrendingDown size={12} strokeWidth={2} />
              </span>
            </>
          )}
          <span>{percentage}</span>
        </div>
        <div className="amount">{amount}</div>
        <div className="note">{note}</div>
      </div>
    </>
  );
}

export default DisplayData;
