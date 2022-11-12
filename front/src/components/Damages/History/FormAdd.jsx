import { useState, useContext } from "react";
import { ContextAuth } from "../../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

export const FormAdd = ({ id }) => {
  const [stateDetails, setStateDetails] = useState(true);
  const [auth] = useContext(ContextAuth);

  const validatorDetails = (e) => {
    if (e.target.value.length >= 2) {
      setStateDetails(false);
    } else {
      setStateDetails(true);
    }
  };

  const add = async (e) => {
    e.preventDefault();

    const history = {
      id,
      details: e.target.details.value,
      repair: e.target.repair.checked,
      user: auth.user.id,
    };

    await axios
      .post(`/api/damages/history/add`, history)
      .then((res) => {
        e.target.details.value = "";
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.msg,
          showConfirmButton: false,
          timer: 1300,
          toast: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.response.data.errors.details.msg,
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      });
  };

  return (
    <form onSubmit={add}>
      <div className="my-3">
        <label className="form-label">Agregar movimiento</label>
        <textarea
          className="form-control"
          rows="4"
          name="details"
          onChange={validatorDetails}
        ></textarea>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="repair" />
        <label className="form-check-label">Unidad reparada</label>
      </div>
      <button
        className="mt-2 btn btn-primary w-100"
        type="submit"
        disabled={stateDetails}
      >
        Guardar
      </button>
    </form>
  );
};
