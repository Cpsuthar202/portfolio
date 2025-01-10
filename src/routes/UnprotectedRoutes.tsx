import { Routes, Route, Navigate } from "react-router-dom";
import UnprotectedWrapper from "./wrapper/UnprotectedWrapper";
import Home from "@/pages/home/Home";
import Display from "@/pages/display/Display";
import Product from "@/pages/product/Product";
import ProductDetails from "@/pages/product/ProductDetails";
import ShopDetails from "@/pages/shop/ShopDetails";
import BestSelling from "@/pages/bestSelling/BestSelling";

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UnprotectedWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/display/:label" element={<Display />} />
        <Route path="/product/:label/:id" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop_details/:id" element={<ShopDetails />} />
        <Route path="/best_selling" element={<BestSelling />} />
        <Route path="/product_details/:product_id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default UnprotectedRoutes;
