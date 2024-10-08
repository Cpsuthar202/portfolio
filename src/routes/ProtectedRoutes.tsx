import Dashboard from "@/pages/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedWrapper from "./wrapper/ProtectedWrapper";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedWrapper />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/user" replace />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
