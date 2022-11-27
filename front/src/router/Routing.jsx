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

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
          <Route path="sys" element={<PrivateLayout />}>
            <Route index element={<Portal />} />
            <Route path="user/profile/:id" element={<Profile />} />
            <Route path="damages" element={<ListDamages />} />
            <Route path="damages/create" element={<CreateDamage />} />
            <Route path="damages/:id/img" element={<ImgDamage />} />
            <Route path="damages/:id/show" element={<Damage />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
