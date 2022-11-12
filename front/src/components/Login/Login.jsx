import { useContext } from "react";
import { ContextAuth } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();

  const [auth, setAuth] = useContext(ContextAuth);

  const loginForm = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await axios.post(`/api/users/login`, user).then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.msg,
          showConfirmButton: false,
          timer: 1300,
          toast: true,
        });
        const { tokenSession, data } = res.data;
        window.sessionStorage.setItem("token", tokenSession);
        window.sessionStorage.setItem("user", JSON.stringify(data));

        setAuth({
          token: tokenSession,
          user: data
        });

        navigate("/damages", { replace: true });
      });
    } catch (error) {
      if (error.response.data.type === "notUser") {
        e.target.email.value = "";
        e.target.password.value = "";
      }
      if (error.response.data.type === "notPassword") {
        e.target.password.value = "";
      }

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
    <div className="container">
      <h4>INICIO DE SESION</h4>
      <header className="justify-content-center py-3 mb-4 border-bottom">
        <form onSubmit={loginForm}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
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
    </div>
  );
};
