import React from "react";
import "./ticTakToe.css";
export const TicTacToe = () => {
  const arr: Array<number> = Array(9).fill(1);
  return (
    <div className="tic-tak-container">
      {arr.map((element, index) => {
        return <div key={index} className="tic-tak-block"></div>;
      })}
    </div>
  );
};
