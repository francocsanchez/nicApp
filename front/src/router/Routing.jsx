import { Route, BrowserRouter, Routes } from "react-router-dom";

import { AuthProvider } from "../context/AuthProvider";

import { PublicLayout } from "../components/Layouts/Public/PublicLayout";
import { PrivateLayout } from "../components/Layouts/Private/PrivateLayout";

import { NoPageFound } from "../components/Layouts/NoPageFound";
import { Portal } from "../components/Layouts/Private/Portal";
import { Login } from "../components/Users/Login";
import { Logout } from "../components/Users/Logout";
import { Profile } from "../components/Users/Profile";
import { ListDamages } from "../components/Damages/ListDamages";
import { Damage } from "../components/Damages/Damage";
import { CreateDamage } from "../components/Damages/Create/CreateDamage";
import ImgDamage from "../components/Damages/Img/ImgDamage";
import { ListDamagesRepair } from "../components/Damages/ListDamagesRepair";

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route exact path="login" element={<Login />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
          <Route path="sys" element={<PrivateLayout />}>
            <Route index element={<Portal />} />
            <Route exact path="user/profile/:id" element={<Profile />} />
            <Route exact path="damages" element={<ListDamages />} />
            <Route
              exact
              path="damages/repair"
              element={<ListDamagesRepair />}
            />
            <Route exact path="damages/create" element={<CreateDamage />} />
            <Route exact path="damages/:id/img" element={<ImgDamage />} />
            <Route exact path="damages/:id/show" element={<Damage />} />
            <Route exact path="logout" element={<Logout />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
