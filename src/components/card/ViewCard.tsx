import { Box, Button } from "@mui/material";
import { ReactNode } from "react";

interface ViewCardProps {
  children: ReactNode; // Define the type for children
  button?: boolean; // Define the type for the button prop
}

export const ViewCard: React.FC<ViewCardProps> = ({ children, button }) => {
  return (
    <Box
      sx={{
        m: 1,
        padding: 2,
        borderRadius: 1,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      {children} {/* Rendering the passed children */}
      {/* Conditionally rendering the buttons */}
      {button && (
        <>
          <Button>Ok</Button>
          <Button>Reset</Button>
        </>
      )}
    </Box>
  );
};
