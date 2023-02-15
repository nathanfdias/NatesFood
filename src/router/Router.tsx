import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { Register } from "../pages/Login/Register";
import { Perfil } from "../pages/Perfil";
import { Products } from "../pages/Products";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/perfil" element={<Perfil />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}
