import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

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
    <Box sx={{ bgcolor: "white", p: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        <Logout sx={{ color: "primary.main", fontSize: "30px" }} />
        <Typography variant="subtitle1" alignSelf={"center"} fontWeight={"400"} fontSize={"18px"}>
          Are you Sure you want to Logout?
        </Typography>
      </Box>
      <Stack direction="row" justifyContent={"end"} spacing={1} sx={{ mt: 2 }}>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleLogOut}>Yes</Button>
      </Stack>
    </Box>
  );
};

export default LogoutDialog;
