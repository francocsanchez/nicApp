import { Link } from "react-router-dom";

export const Portal = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">INTRANIC</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Portal de aplicaciones para usuarios de Nippon Car
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              to="/sys/damages"
            >
              SINIESTROS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
