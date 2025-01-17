import { Box, Grid, IconButton, Typography, Drawer } from "@mui/material";
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
      <Box sx={{ borderBottom: 2, borderColor: "secondary.main", bgcolor: "primary.main", width: "100%" }}>
        <Grid item md={4} sm={6} xs={6} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer", color: "white" }} onClick={() => navigate("/")}>
            GOLD WING COOLER
          </Typography>
        </Grid>
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
