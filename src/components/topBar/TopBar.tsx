import { useAppSelector } from "@/store/store";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  toggleTheme: () => void;
}
const TopBar: React.FC<TopBarProps> = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/user/auth/login", { replace: true });
  };

  const title = useAppSelector((state) => state.topbar.title);

  return (
    <>
      {/* <Box sx={{ boxShadow: 1, p: 1, width: "100%", position: "fixed", bgcolor: mColor.while, zIndex: 2 }}> */}
      <Box sx={{ boxShadow: 1, p: 1, width: "100%" }}>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/user")}>Dashboard</Button>
        <Button onClick={handleLogOut}>Logout</Button>
        <span>{title}</span>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Box>
      {/* <Box sx={{ height: "54px" }} /> */}
    </>
  );
};

export default TopBar;
