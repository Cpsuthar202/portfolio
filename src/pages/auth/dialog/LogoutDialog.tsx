import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

// Props interface for the LogoutDialog component
interface LogoutDialogProps {
  handleClose: () => void; // Function to close the dialog
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({ handleClose }) => {
  const navigate = useNavigate();

  // Handles the logout process
  const handleLogOut = () => {
    localStorage.clear(); // Clear user data from localStorage
    handleClose(); // Close the dialog
    navigate("/user/auth/login", { replace: true }); // Redirect to login page
    console.log("handleLogOut");
  };

  return (
    <Box
      sx={{
        bgcolor: "white", // Background color
        borderRadius: 2, // Rounded corners
        boxShadow: 3, // Shadow for elevation effect
        p: 4, // Padding
      }}
    >
      {/* Icon and Message */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2, // Spacing between elements
        }}
      >
        <Logout sx={{ color: "primary.main", fontSize: 40 }} />
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            color: "text.primary",
          }}
        >
          Are you sure you want to log out?
        </Typography>
      </Box>

      {/* Buttons for Cancel and Log Out */}
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button variant="outlined" color="primary" fullWidth onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogOut}>
          Log Out
        </Button>
      </Stack>
    </Box>
  );
};

export default LogoutDialog;
