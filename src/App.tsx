import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { Suspense, lazy } from "react";

const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const UnprotectedRoutes = lazy(() => import("./routes/UnprotectedRoutes"));

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ overflow: "auto", height: isSmallScreen ? "95vh" : "100vh", border: 1 }}>
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
