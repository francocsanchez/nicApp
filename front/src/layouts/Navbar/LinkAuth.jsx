import { useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export const LinkAuth = () => {
  let navigate = useNavigate();
  const [auth] = useContext(ContextAuth);

  const logout = () => {
    window.sessionStorage.setItem("token", "");
    window.sessionStorage.setItem("user", JSON.stringify(""));
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <>
      {auth.user?.name ? (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {auth.user?.email}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={`/users/${auth.user?.id}/profile`}>
                Mi Perfil
              </Link>
            </li>
            <li>
              <a href="/#" className="dropdown-item" onClick={logout}>
                Salir
              </a>
            </li>
          </ul>
        </li>
      ) : (
        <li className="nav-item">
          <a href="/login" className="nav-link">
            Iniciar Sesion
          </a>
        </li>
      )}
    </>
  );
};
