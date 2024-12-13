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
    <Typography variant="subtitle1" fontWeight="bold" color="primary.dark">
      {title}
      <Typography variant="body1" color="primary.main">
        {subtitle}
      </Typography>
    </Typography>
    {children}
  </Box>
);

export default AuthLayout;
