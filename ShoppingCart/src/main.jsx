import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { allProducts } from "./Api";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={allProducts} element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route  path="shop" element={<Shop  />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
