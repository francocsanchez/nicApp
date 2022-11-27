import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { Global } from "../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");

    if (!token || !user) {
      sessionStorage.clear();
      setLoading(false);
      return false;
    }

    const userObj = JSON.parse(user);
    const userId = userObj.id;

    try {
      const data = await axios.get(`${Global.url}users/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuth(data.data.data);
      setToken(token);
      setLoading(false);
    } catch (error) {
      sessionStorage.clear();
      window.location.reload();
    }
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        token,
        setToken,
        setAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
