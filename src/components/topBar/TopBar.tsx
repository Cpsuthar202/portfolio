import { Box, Grid, IconButton, InputBase, Typography, Drawer, Button } from "@mui/material";
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { mColor } from "@color";
import SideBar from "../sideBar/SideBar";
import { useTopBar } from "./TopBar.hook";
import LogoutDialog from "@/pages/auth/dialog/LogoutDialog";
import SimpleDialog from "../dialog/SimpleDialog";

interface TopBarProps {
  toggleTheme: () => void;
}
const TopBar: React.FC<TopBarProps> = () => {
  const {
    variable: { isLoggedIn, open, searchTitle, openConfDialog, setOpenConfDialog },
    methods: { navigate, handleAuth, toggleDrawer, handleSearch, handleSearchChange },
  } = useTopBar();
  return (
    <>
      {/* Wrapper for top bar and search section */}
      <Box sx={{ borderBottom: 2, borderColor: "secondary.main", width: "100%" }}>
        {/* Hero line display */}
        {/* <Box sx={{ bgcolor: "background.paper", color: "text.secondary" }}>
          <Typography variant="body1" sx={{ textAlign: "center", py: 1 }}>
            {tegLine?.title}
          </Typography>
        </Box> */}

        {/* Main Grid container for menu, search bar, and action icons */}
        <Grid container sx={{ p: 1 }}>
          {/* Left section: Menu button and site title */}
          <Grid item md={4} sm={6} xs={6} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => navigate("/")}>
              Exclusive
            </Typography>
          </Grid>

          {/* Center section: Search bar */}
          <Grid item md={4} sm={12} xs={12} order={{ xs: 3, sm: 3, md: 2 }} sx={{ display: "grid", placeItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "secondary.main",
                borderRadius: 1,
                px: 2,
                py: 1,
                width: "95%",
              }}
              onClick={handleSearch}
            >
              <InputBase placeholder="What are you looking for?" sx={{ width: "100%" }} value={searchTitle} onChange={handleSearchChange} />
            </Box>
          </Grid>

          {/* Right section: Wishlist, Cart, and Authentication button */}
          <Grid item md={4} sm={6} xs={6} order={{ xs: 2, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <Box>
              <IconButton onClick={() => navigate("/user/wishlist")}>
                <FavoriteBorder />
              </IconButton>
              <IconButton onClick={() => navigate("/user/cart")}>
                <ShoppingCart />
              </IconButton>
              <Button onClick={handleAuth}>{isLoggedIn ? "LogOut" : "LogIn"}</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Sidebar Drawer component */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { bgcolor: mColor.white },
        }}
      >
        <SideBar onClickMenu={toggleDrawer(false)} />
      </Drawer>

      {openConfDialog && (
        <SimpleDialog open={openConfDialog} handleClose={() => setOpenConfDialog(false)}>
          <LogoutDialog handleClose={() => setOpenConfDialog(false)} />
        </SimpleDialog>
      )}
    </>
  );
};

export default TopBar;
