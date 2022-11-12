import { useState, createContext } from "react";

export const ContextAuth = createContext([{}, () => {}]);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: window.sessionStorage.getItem("token"),
    user: JSON.parse(window.sessionStorage.getItem("user")),
  });

  return (
    <ContextAuth.Provider value={[auth, setAuth]}>
      {children}
    </ContextAuth.Provider>
  );
};
