import { useState, useEffect, useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

//Components
import { TableDamages } from "./TableDamages";
import { AddHistory } from "./History/AddHistory";
import { HistoryDetails } from "./History/HistoryDetails";

export const Damage = () => {
  const { id } = useParams();

  const [damage, setDamage] = useState([]);
  const [auth] = useContext(ContextAuth);

  useEffect(() => {
    const getDamage = async () => {
      const data = await axios.get(`/api/damages/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setDamage(data.data.data);
    };
    getDamage();
    // eslint-disable-next-line
  }, [damage]);

  return (
    <div className="container">
      <TableDamages details={damage.damage?.damages} />
      <div className="row">
        <div className="col-8">
          <h4 className="pb-2">INFORMACION DEL SINIESTRO</h4>
        </div>
        <div className="col-4 text-end">
          <Link
            className="btn btn-dark w-100"
            to={`/damages/${damage._id}/show/img`}
          >
            <i className="fa-solid fa-image"></i> IMAGENES
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <HistoryDetails history={damage.damage?.history} />
        </div>
        <div className="col-4">
          <AddHistory id={damage._id} repair={damage.damage?.repair} />
        </div>
      </div>
    </div>
  );
};
