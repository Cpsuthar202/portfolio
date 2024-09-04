import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const UnprotectedWrapper = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Outlet />
    </Box>
  );
};

export default UnprotectedWrapper;
