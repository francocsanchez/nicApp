import { useState, useEffect } from "react";

import axios from "axios";
import { Global } from "../../../helpers/Global";
import { Link } from "react-router-dom";

export const ListCardDamage = ({ arrDamage, setArrDamage }) => {
  const [sectorDamage, setSectorDamage] = useState([]);

  const [damageDetails, setDamageDetails] = useState([]);

  const getSectorDamage = async () => {
    const data = await axios.get(`${Global.url}sector-damage`);
    setSectorDamage(data.data.data);
  };

  const getDamageDetails = async (e) => {
    const data = await axios.get(`${Global.url}damage-details`);
    setDamageDetails(data.data.data);
  };

  const deleteDamage = (i) => {
    const arr = arrDamage.filter((damage, index) => index !== i);
    setArrDamage(arr);
  };

  useEffect(() => {
    getSectorDamage();
    getDamageDetails();
  }, []);

  return (
    <>
      {arrDamage?.map((type, i) => {
        return (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between lh-sm"
          >
            <div>
              <h6 className="my-0">
                {sectorDamage.find((x) => x._id === type.sectorDamage)?.name}
              </h6>
              <small className="text-muted">
                {
                  damageDetails.find((x) => x._id === type.damageDetails)
                    ?.details
                }
              </small>
            </div>
            <Link
              className="text-danger text-decoration-none"
              onClick={() => deleteDamage(i)}
            >
              X
            </Link>
          </li>
        );
      })}
    </>
  );
};
