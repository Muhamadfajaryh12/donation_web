import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateLayout = ({ children }) => {
  const { token } = useAuth();

  if (!token) return <Navigate to={"/login"} replace />;
  return children;
};

export default PrivateLayout;
