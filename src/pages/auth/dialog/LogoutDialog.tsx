import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LogoutDialogProps {
  handleClose: () => void;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({ handleClose }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    handleClose();
    navigate("/user/auth/login", { replace: true });
  };

  return (
    <Box display="flex" flexDirection="column" gap="20px" padding="20px" bgcolor={"white"}>
      <Typography variant="body2" alignSelf={"center"} fontWeight={"400"} fontSize={"18px"}>
        Are you Sure you want to Logout?
      </Typography>
      <Button
        onClick={handleClose}
        style={{
          fontSize: "12px",
        }}
      >
        No
      </Button>
      <Button
        onClick={handleLogOut}
        style={{
          fontSize: "12px",
        }}
      >
        Yes
      </Button>
    </Box>
  );
};

export default LogoutDialog;
