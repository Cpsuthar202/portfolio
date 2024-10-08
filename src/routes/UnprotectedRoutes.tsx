import { Routes, Route, Navigate } from "react-router-dom";
import UnprotectedWrapper from "./wrapper/UnprotectedWrapper";
import Home from "@/pages/home/Home";

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UnprotectedWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default UnprotectedRoutes;
