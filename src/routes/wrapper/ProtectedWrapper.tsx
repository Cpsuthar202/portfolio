import SideBar from "@/components/sideBar/SideBar";
import { getLocalAuth } from "@/utils/localStorage";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = getLocalAuth();
      if (!userToken || !userToken.token) {
        setIsLoggedIn(false);
        navigate("/user/auth/login", { replace: true });
      } else {
        setIsLoggedIn(true);
      }
    };

    checkUserToken();
  }, [navigate]);

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", width: "100vw" }}>
      {isLoggedIn && (
        <>
          <SideBar />
          <Box sx={{ p: 1, width: "100%", height: "100%" }}>
            <Outlet />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProtectedWrapper;
