import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";

const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const UnprotectedRoutes = lazy(() => import("./routes/UnprotectedRoutes"));

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  return (
    <>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
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
