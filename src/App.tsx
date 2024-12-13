import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Toaster, ToastBar } from "react-hot-toast";
import { useResponsiveScreens } from "./components/mediaQuery/useResponsiveScreens";

const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const UnprotectedRoutes = lazy(() => import("./routes/UnprotectedRoutes"));

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  const { isSmScreen } = useResponsiveScreens();

  return (
    <>
      {/* <Toaster /> */}
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {/* {t.type !== "loading" && <button onClick={() => toast.dismiss(t.id)}>X</button>} */}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>

      <Box sx={{ overflow: "auto", height: isSmScreen ? "94vh" : "100vh", border: 1 }}>
        <TopBar toggleTheme={toggleTheme} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/*" element={<UnprotectedRoutes />} />
            <Route path="/user/*">
              <Route path="auth/*" element={<AuthRoutes />} />
              <Route path="*" element={<ProtectedRoutes />} />
            </Route>
          </Routes>
        </Suspense>
      </Box>
    </>
  );
};

export default App;
