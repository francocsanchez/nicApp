import useAuth from "../../hooks/useAuth";

import { Global } from "../../helpers/Global";

import Swal from "sweetalert2";
import axios from "axios";

export const Profile = () => {
  const { auth, token } = useAuth();

  const updateUser = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.repassword.value) {
      e.target.password.value = "";
      e.target.repassword.value = "";
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Las contraseñas no coinciden",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
    }

    const data = {
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      email: `${e.target.email.value}@nipponcarsrl.com.ar`,
    };

    if (e.target.password.value) {
      data.password = e.target.password.value;
    }

    e.target.password.value = "";
    e.target.repassword.value = "";

    try {
      await axios
        .put(`${Global.url}users/profile/update/${auth._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: res.data.status,
            title: res.data.msg,
            showConfirmButton: false,
            timer: 1300,
            toast: true,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h4 className="pb-2">INFORMACION DE USUARIO</h4>
      <form className="mb-3" onSubmit={updateUser}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input
              className="form-control"
              name="name"
              defaultValue={auth.name}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input
              className="form-control"
              name="lastname"
              defaultValue={auth.lastname}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="email"
                defaultValue={auth.email.split("@")[0]}
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">@nipponcarsrl.com.ar</span>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Roles</label>
            <input
              className="form-control"
              name="role"
              disabled
              defaultValue={auth.role}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Contraseña</label>
            <input className="form-control" name="repassword" type="password" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Confirmar contraseña</label>
            <input className="form-control" name="password" type="password" />
          </div>
          <div className="col-12 text-end">
            <button className="btn btn-success btn-sm" type="submit">
              GUARDAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
