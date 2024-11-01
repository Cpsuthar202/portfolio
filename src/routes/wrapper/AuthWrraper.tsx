import { checkUserToken } from "@/utils/localStorage";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (checkUserToken()) {
      setIsLoggedIn(true);
      navigate("/user", { replace: true });
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate]);

  // useEffect(() => {
  //   const checkUserToken = () => {
  //     const userToken: ILoginResponse = getLocalAuth();
  //     if (userToken && userToken.token) {
  //       setIsLoggedIn(true);
  //       navigate("/user", { replace: true });
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   checkUserToken();
  // }, [navigate]);

  return (
    <>
      <Box sx={{ display: "grid", placeItems: "center", width: "100vw", height: "90vh" }}>
        {!isLoggedIn && (
          <Box sx={{ borderRadius: "10px", padding: "20px", boxShadow: 2, m: 1, width: "370px" }}>
            <Outlet />
          </Box>
        )}
      </Box>
    </>
  );
};

export default AuthWrapper;
