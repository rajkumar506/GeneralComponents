import React, { Children, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { AuthContext } from "./AuthProvider";
type ProtectedProps = {
  children: ReactNode;
};
export const ProtectedRoute: React.FC<ProtectedProps> = (Props) => {
  const context = useContext(AuthContext);
  //let context = useAuth();
  const { isSigned }: any = context;
  const navigate = useNavigate();
  const handleUnsigned = () => {
    navigate("/sign");
  };
  return <>{isSigned ? Props?.children : handleUnsigned()}</>;
};
