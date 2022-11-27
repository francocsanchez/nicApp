import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { SpinnerLoading } from "../Other/SpinnerLoading";
import { Header } from "./Header";

export const PublicLayout = () => {
  const { auth,loading } = useAuth();
  return (
    <>
      <Header />
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="container">
          {!auth._id ? <Outlet /> : <Navigate to="/sys" />}
        </div>
      )}
    </>
  );
};
