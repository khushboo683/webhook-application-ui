// src/ProtectedRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
