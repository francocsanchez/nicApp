import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import { ListDamages } from "./components/Damages/ListDamages";
import { NavBar } from "./layouts/Navbar/NavBar";
import { Error404 } from "./layouts/Error404";
import { Portal } from "./components/Portal";
import { Damage } from "./components/Damages/Damage";
import { CreateDamage } from "./components/Damages/Create/CreateDamage";
import ImgDamage from "./components/Damages/Img/ImgDamage";
import { Login } from "./components/Login/Login";

import { AuthProvider, ContextAuth } from "./context/AuthContext";

function App() {
  const [auth, setAuth] = useContext(ContextAuth);

  return (
    <div className="App">
      <AuthProvider value={[auth, setAuth]}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Portal />} />
          <Route exact path="/damages" element={<ListDamages />} />
          <Route exact path="/damages/create" element={<CreateDamage />} />
          <Route exact path="/damages/:id/show/img" element={<ImgDamage />} />
          <Route exact path="/damages/:id/show" element={<Damage />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
