import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAuth } from "../../context/AuthContext";

export const LinkNav = () => {
  const [auth] = useContext(ContextAuth);
  return (
    <div>
      {auth.user?.name ? (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Siniestros
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/damages/create">
                Cargar siniestro
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/damages">
                Listar siniestros
              </Link>
            </li>
            {/* <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/#">
                Siniestros reparados
              </a>
            </li> */}
          </ul>
        </li>
      ) : null}
    </div>
  );
};
