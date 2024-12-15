import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProfileWrraper = () => {
  return (
    <Box sx={{}}>
      <Outlet />
    </Box>
  );
};

export default ProfileWrraper;
