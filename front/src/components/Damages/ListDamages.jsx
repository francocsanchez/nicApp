import { useState, useEffect, useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";
import axios from "axios";

//Componets
import { CardDamage } from "./CardDamage";
import { Link } from "react-router-dom";

export const ListDamages = () => {
  const [damages, setDamages] = useState([]);
  const [auth] = useContext(ContextAuth);

  useEffect(() => {
    const getDamages = async () => {
      const data = await axios.get("/api/damages", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setDamages(data.data.data);
    };
    getDamages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {damages.length ? (
            <h3 className="pb-2">LISTADO DE SINIESTROS</h3>
          ) : (
            <h1 className="text-center fw-bold py-5">
              NO HAY UNIDADES SINIESTRADAS
            </h1>
          )}
        </div>
        <div className="col-6 text-end">
          <Link className="btn btn-success" to="/damages/create">
            <i className="fa-solid fa-image"></i>AGREGAR SINIESTRO
          </Link>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 text-center">
        {damages.map((damage, i) => {
          return <CardDamage damage={damage} key={i} />;
        })}
      </div>
    </div>
  );
};
