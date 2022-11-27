import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Global } from "../../../helpers/Global";

export const FormAdd = ({ id }) => {
  const [stateDetails, setStateDetails] = useState(true);
  const { auth, token } = useAuth();

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
      user: auth._id,
    };

    await axios
      .post(`${Global.url}damages/history/add`, history, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
        setStateDetails(true);
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
        <input
          className="form-check-input"
          type="checkbox"
          name="repair"
          disabled={stateDetails}
        />
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
