import React from "react";
import { HigherOrder } from "./Enhanced";
const ButtonClick = ({ handleCounter, counter }: any) => {
  return (
    <div>
      {counter}
      <button onClick={() => handleCounter()}>clickMe</button>
    </div>
  );
};

export default HigherOrder(ButtonClick, 5);
