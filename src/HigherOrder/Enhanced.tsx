import React, { useState } from "react";
export const HigherOrder = (WrappedComponent: any, number: number) => {
  const EnhacedComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
      console.log("hello i am running");
      setCounter(counter + number);
    };
    return <WrappedComponent handleCounter={handleCounter} counter={counter} />;
  };
  return EnhacedComponent;
};
