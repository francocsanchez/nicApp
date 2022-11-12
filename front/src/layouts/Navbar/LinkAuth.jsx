import { useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LinkAuth = () => {
  let navigate = useNavigate();
  const [auth] = useContext(ContextAuth);

  const logout = () => {
    window.sessionStorage.setItem("token", "");
    window.sessionStorage.setItem("user", JSON.stringify(""));
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <li className="nav-item">
      {auth.user?.name ? (
        <a href="/#" className="nav-link" onClick={logout}>
          {auth.user.email}
        </a>
      ) : (
        <a href="/login" className="nav-link">
          Iniciar Sesion
        </a>
      )}
    </li>
  );
};
