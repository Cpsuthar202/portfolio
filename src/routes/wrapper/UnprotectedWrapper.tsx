import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const UnprotectedWrapper = () => {
  return (
    <Box sx={{}}>
      <Outlet />
    </Box>
  );
};

export default UnprotectedWrapper;
