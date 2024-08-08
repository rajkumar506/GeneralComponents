import React, { Children } from "react";
import "./Routes.css";
import { Routers } from "./Routes";
import { Link, useNavigate, useNavigation, Outlet } from "react-router-dom";
import { DashBoard } from "./DashBoard";
import { Organisation } from "./Oragnisation";
import { ProtectedRoute } from "./ProtectedRoute";
export const MainLayout = (props: any) => {
  //   const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate("/organisation");
  //   };

  return (
    <ProtectedRoute>
      <div className="container">
        <div className="sidebar">
          <Link style={{ textDecoration: "none" }} to="/">
            Dashboard
          </Link>
          <Organisation />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
};
