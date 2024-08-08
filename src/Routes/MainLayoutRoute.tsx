import React from "react";
import { Route } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import "./Routes.css";
export const MainLayoutRoute = ({ element: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={() => (
        <MainLayout>
          <Component />
        </MainLayout>
      )}
    />
  );
};
