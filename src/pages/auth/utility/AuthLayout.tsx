import React from "react";
import { Box, Typography } from "@mui/material";

// Props definition for AuthLayout component
interface AuthLayoutProps {
  title: string; // The main title for the layout
  subtitle: string; // A subtitle providing additional context
  children: React.ReactNode; // The form or other content to display inside the layout
}

// AuthLayout component definition
const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children }) => (
  <Box
    sx={{
      // Styles to arrange the content vertically with spacing
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}
  >
    {/* Display the title and subtitle */}
    <Typography variant="subtitle1" fontWeight="bold" color="primary.dark">
      {title}
      {/* Nested Typography for the subtitle */}
      <Typography variant="body1" color="primary.main">
        {subtitle}
      </Typography>
    </Typography>
    {/* Render the children passed to the layout */}
    {children}
  </Box>
);

export default AuthLayout;
