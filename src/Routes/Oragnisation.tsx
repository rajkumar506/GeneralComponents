import React from "react";
import { MainLayout } from "./MainLayout";
import { Link } from "react-router-dom";

export const Organisation = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Organisation</div>
      <Link to="/squad">Squad</Link>
      <Link to="/team">Team</Link>
    </div>
  );
};
