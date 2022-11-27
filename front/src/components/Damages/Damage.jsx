import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Global } from "../../helpers/Global";
import useAuth from "../../hooks/useAuth";
import { AddHistory } from "./History/AddHistory";
import { HistoryDetails } from "./History/HistoryDetails";
import { TableDamages } from "./TableDamages";

export const Damage = () => {
  const { id } = useParams();
  const [damage, setDamage] = useState({});
  const { token } = useAuth();

  useEffect(() => {
    getDamage();
    // eslint-disable-next-line
  }, [damage]);
  const getDamage = async () => {
    const data = await axios.get(`${Global.url}damages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDamage(data.data.data);
  };

  return (
    <>
      <div className="row">
        <TableDamages details={damage.damage?.damages} />
        <div className="col-9">
          <h3 className="pb-2">INFORMACION DEL SINIESTRO</h3>
        </div>
        <div className="col-3 text-end">
          <Link className="btn btn-dark w-100" to={`/sys/damages/${id}/img`}>
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
    </>
  );
};
