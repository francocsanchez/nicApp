import { Link } from "react-router-dom";
import { StatusDamages } from "./Helpers/StatusDamages";

export const CardDamage = ({ damage }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header">
          <h5 className="my-0 fw-normal">{damage.car.vin}</h5>
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            <li>TRANSITO</li>
            <StatusDamages damage={damage.damage} />
            <li className="mt-2 small">
              {damage.car.ope?.numOp ? "VENDIDO" : "SIN OP"}
            </li>
          </ul>
          <Link
            className="w-100 btn btn-sm btn-outline-secondary"
            to={`/sys/damages/${damage._id}/show`}
          >
            HISTORIAL
          </Link>
        </div>
      </div>
    </div>
  );
};
