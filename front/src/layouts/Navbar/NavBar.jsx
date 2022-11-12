import { Link } from "react-router-dom";

// Components
import { LinkAuth } from "./LinkAuth";
import { LinkNav } from "./LinkNav";

export const NavBar = () => {
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
          <ul className="nav nav-pills">
            <LinkNav />
            <LinkAuth />
          </ul>
        </header>
      </div>
    </>
  );
};
