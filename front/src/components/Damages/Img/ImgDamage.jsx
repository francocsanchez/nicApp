import { useState, useEffect, useContext } from "react";
import { ContextAuth } from "../../../context/AuthContext";
import { useParams } from "react-router-dom";
import { TableDamages } from "../TableDamages";

import axios from "axios";
import { FormAddImg } from "./FormAddImg";
import { ListImg } from "./ListImg";

const ImgDamage = () => {
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
          <ListImg img={damage.damage?.img} />
        </div>
        <div className="col-4">
          <FormAddImg />
        </div>
      </div>
    </div>
  );
};

export default ImgDamage;
