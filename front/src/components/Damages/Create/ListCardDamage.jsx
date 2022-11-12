import { useState, useEffect } from "react";

import axios from "axios";

export const ListCardDamage = ({ arrDamage, setArrDamage }) => {
  const [sectorDamage, setSectorDamage] = useState([]);

  const [damageDetails, setDamageDetails] = useState([]);

  const getSectorDamage = async () => {
    const data = await axios.get(`/api/sector-damage`);
    setSectorDamage(data.data.data);
  };

  const getDamageDetails = async (e) => {
    const data = await axios.get(`/api/damage-details`);
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
            <span className="text-danger" onClick={() => deleteDamage(i)}>
              X
            </span>
          </li>
        );
      })}
    </>
  );
};
