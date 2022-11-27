import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Private/Nav";

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            to="/"
          >
            <span className="fs-4 fw-bold">INTRANIC</span>
          </Link>
          <Nav />
        </header>
      </div>
    </>
  );
};
