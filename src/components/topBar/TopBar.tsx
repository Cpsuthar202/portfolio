import { Box, IconButton, Typography, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { mColor } from "@color";
import SideBar from "../sideBar/SideBar";
import { useTopBar } from "./TopBar.hook";
// import LogoutDialog from "@/pages/auth/dialog/LogoutDialog";
// import SimpleDialog from "../dialog/SimpleDialog";

interface TopBarProps {
  toggleTheme: () => void;
}
const TopBar: React.FC<TopBarProps> = () => {
  const {
    variable: { openDrawer },
    methods: { navigate, toggleDrawer },
  } = useTopBar();
  return (
    <>
      <Box sx={{ bgcolor: "primary.main", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 800, cursor: "pointer", color: "white" }} onClick={() => navigate("/")}>
          GOLD WING COOLER
        </Typography>
        <Typography />
      </Box>

      {/* Sidebar Drawer component */}
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { bgcolor: mColor.white },
        }}
      >
        <SideBar onClickMenu={toggleDrawer(false)} />
      </Drawer>
    </>
  );
};

export default TopBar;
