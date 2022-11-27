import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { SpinnerLoading } from "../Other/SpinnerLoading";
import { Header } from "./Header";

export const PrivateLayout = () => {
  const { auth, loading } = useAuth();
  return (
    <>
      <Header />
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="container">
          {auth._id ? <Outlet /> : <Navigate to="/login" />}
        </div>
      )}
    </>
  );
};
