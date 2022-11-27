import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Logout = () => {
  const { setAuth, setToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
    setAuth({});
    setToken("");
    navigate("/login");
  });
  return <div>Logout</div>;
};
