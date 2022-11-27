import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export const Nav = () => {

  const {auth} = useAuth();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          href="/#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {auth.email}
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to={`user/profile/${auth._id}`}>
              Mi Perfil
            </Link>
          </li>
          <li>
            <Link to='logout' className="dropdown-item">
              Salir
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
