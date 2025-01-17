import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const Circular: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "200px",
    }}
  >
    <CircularProgress />
  </Box>
);
