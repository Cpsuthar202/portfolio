import { checkUserToken } from "@/utils/localStorage";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (checkUserToken()) {
      console.log("jhgfd");

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
      {!isLoggedIn && (
        <Box sx={{ display: "flex", height: "85vh" }}>
          <Box sx={{ display: "grid", placeItems: "center", flex: 1 }}>
            <Box sx={{ maxWidth: "400px", width: "100%", border: 1, p: 3, px: 4, borderColor: "primary.main", borderRadius: 2, textAlign: "center" }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AuthWrapper;
