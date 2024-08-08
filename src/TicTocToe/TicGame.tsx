import React from "react";
import { Board } from "./Board";
import "./ticGame.css";
export const TicGame = () => {
  return (
    <div className="game-conatiner">
      <div className="status">
        {" "}
        status
        <button>Reset game</button>
      </div>

      {/* <Board /> */}
    </div>
  );
};
