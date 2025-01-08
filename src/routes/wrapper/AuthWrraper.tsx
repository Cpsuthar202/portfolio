import { checkUserToken } from "@/utils/localStorage";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (checkUserToken()) {
      console.log("checkUserToken");
      setIsLoggedIn(true);
      navigate("/user", { replace: true });
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate]);

  return (
    <>
      {!isLoggedIn && (
        <Box sx={{ display: "grid", placeItems: "center", flex: 1, height: "70vh" }}>
          <Box sx={{ minWidth: "max(20vw, 350px)", width: "350px", p: 3, border: 1, px: 4, borderColor: "primary.main", borderRadius: 2, textAlign: "center" }}>
            <Outlet />
          </Box>
        </Box>
      )}
    </>
  );
};

export default AuthWrapper;
