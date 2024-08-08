import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "./MainLayout";
export const Squad = () => {
  const arr = Array(5).fill(1);

  return (
    <div>
      <div>squad</div>

      <div>
        {arr &&
          arr?.map((element, index) => {
            const path = `/squad/:${index}`;
            return (
              <div key={index}>
                {index}
                <Link to={path}>hello{index}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
