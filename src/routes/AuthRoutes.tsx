// import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthWrraper from "./wrapper/AuthWrraper";
import Login from "@/pages/auth/login/Login";
import Otp from "@/pages/auth/otp/Otp";
import Registration from "@/pages/auth/registration/Registration";
// const Login = lazy(() => import("@/pages/Login/Login"));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthWrraper />}>
        <Route index element={<Navigate to="/auth/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="verify_otp" element={<Otp />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
