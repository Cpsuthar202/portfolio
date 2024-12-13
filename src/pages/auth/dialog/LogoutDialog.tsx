import { Box, Button, Stack, Typography } from "@mui/material";
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
      <Typography variant="subtitle1" alignSelf={"center"} fontWeight={"400"} fontSize={"18px"}>
        Are you Sure you want to Logout?
      </Typography>
      <Stack direction="row" justifyContent={"end"} spacing={1}>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleLogOut}>Yes</Button>
      </Stack>
    </Box>
  );
};

export default LogoutDialog;
