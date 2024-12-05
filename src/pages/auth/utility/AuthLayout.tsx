import React from "react";
import { Box, Typography } from "@mui/material";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}
  >
    <Typography variant="h6" fontWeight="bold" color="primary.dark">
      {title}
      <Typography variant="subtitle2" color="primary.main">
        {subtitle}
      </Typography>
    </Typography>
    {children}
  </Box>
);

export default AuthLayout;
