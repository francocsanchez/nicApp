import { useForm } from "../../hooks/useForm";

import Swal from "sweetalert2";

import axios from "axios";
import { Global } from "../../helpers/Global";

export const Login = () => {
  const { form, changed } = useForm({});

  const login = async (e) => {
    e.preventDefault();

    const user = form;

    try {
      await axios.post(`${Global.url}users/login`, user).then((res) => {
        Swal.fire({
          position: "top-end",
          icon: res.data.status,
          title: res.data.msg,
          showConfirmButton: false,
          timer: 1300,
          toast: true,
        });

        const { tokenSession, user } = res.data;
        window.sessionStorage.setItem("token", tokenSession);
        window.sessionStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      });
    } catch (error) {
      document.getElementById("formLogin").reset();

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1300,
        toast: true,
      });
    }
  };
  return (
    <>
      <h4 className="text-bold">INICIO DE SESION</h4>
      <header className="justify-content-center py-3 mb-4 border-bottom">
        <form onSubmit={login} id="formLogin">
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  onChange={changed}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={changed}
                />
              </div>
            </div>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-success">
              INGRESAR
            </button>
          </div>
        </form>
      </header>
    </>
  );
};
