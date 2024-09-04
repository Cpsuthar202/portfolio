import { useAppSelector } from "@/store/store";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/user/auth/login", { replace: true });
  };

  const title = useAppSelector((state) => state.topbar.title);

  return (
    <Box sx={{ boxShadow: 1, p: 1 }}>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/user")}>Dashboard</Button>
      <Button onClick={handleLogOut}>Logout</Button>
      <span>{title}</span>
    </Box>
  );
};

export default TopBar;
