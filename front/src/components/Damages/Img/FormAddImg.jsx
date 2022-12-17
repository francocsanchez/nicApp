import { useState } from "react";
import { useParams } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";
import { Global } from "../../../helpers/Global";
import useAuth from "../../../hooks/useAuth";

export const FormAddImg = () => {
  const { id } = useParams();

  const [stateUpload, setStateUpload] = useState(true);
  const { token } = useAuth();
  const changeAdd = () => {
    setStateUpload(false);
  };

  const addImg = async (e) => {
    setStateUpload(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", e.target.img.files[0]);

    await axios
      .post(`${Global.url}damages/history/${id}/img/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        e.target.img.value = "";
        setStateUpload(true);
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
        e.target.img.value = "";
        setStateUpload(true);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.response.data.msg,
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      });
  };

  return (
    <div className="my-3 p-3 bg-light rounded shadow-sm">
      <h6 className="border-bottom pb-2 mb-0 text-center">NUEVA IMAGEN</h6>
      <form onSubmit={addImg}>
        <div className="my-3">
          <input
            className="form-control form-control-sm"
            type="file"
            name="img"
            onChange={changeAdd}
          />
        </div>
        <button
          className="mt-2 btn btn-primary w-100"
          type="submit"
          disabled={stateUpload}
        >
          AGREGAR
        </button>
      </form>
    </div>
  );
};
