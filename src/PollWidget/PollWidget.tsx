import React, { useState } from "react";
export const PollWidget = () => {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target?.value === "yes"
      ? setYes((prev) => prev + 1)
      : setNo((prev) => prev + 1);
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          value="yes"
          id="yes"
          name="poll"
          onChange={(e) => handleSelection(e)}
        />
        <input type="range" value={yes * 10} />
      </div>
      <div>
        <input
          type="radio"
          value="no"
          id="no"
          name="poll"
          onChange={(e) => handleSelection(e)}
        />
        <input type="range" value={no * 10} />
      </div>
    </div>
  );
};
