import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Global } from "../../helpers/Global";

import { TitleCountDamages } from "./Helpers/TitleCountDamages";
import { CardDamage } from "./CardDamage";

export const ListDamagesRepair = () => {
    const [damages, setDamages] = useState([]);
    const { token } = useAuth();
  
    useEffect(() => {
      getDamages();
    }, []);
  
    const getDamages = async () => {
      try {
        const data = await axios.get(`${Global.url}damages/repair`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDamages(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <div className="row">
          <div className="col-9">
            <TitleCountDamages countDamages={damages.length} />
          </div>
          <div className="col-3 text-end">
            <Link className="btn btn-success" to="/sys/damages/create">
              <i className="fa-solid fa-image"></i>AGREGAR SINIESTRO
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 text-center">
          {damages?.map((damage, i) => {
            return <CardDamage damage={damage} key={i} />;
          })}
        </div>
      </>
    );
};
