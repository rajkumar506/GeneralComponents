import React from "react";
import { HigherOrder } from "./Enhanced";
const MouseHover = ({ handleCounter, counter }: any) => {
  return (
    <div
      onMouseOver={() => handleCounter()}
      style={{ width: "50px", height: "50px", backgroundColor: "red" }}
    >
      {counter}
    </div>
  );
};
export default HigherOrder(MouseHover, 5);
