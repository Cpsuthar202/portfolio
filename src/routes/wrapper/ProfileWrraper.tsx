import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProfileWrraper = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default ProfileWrraper;
