// import Dashboard from "@/pages/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedWrapper from "./wrapper/ProtectedWrapper";
import Home from "@/pages/home/Home";
import Wishlist from "@/pages/wishlist/Wishlist";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedWrapper />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route index element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/user" replace />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
