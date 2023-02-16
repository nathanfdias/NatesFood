import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { Register } from "../pages/Login/Register";
import { Config } from "../pages/Config";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/config" element={<Config />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
