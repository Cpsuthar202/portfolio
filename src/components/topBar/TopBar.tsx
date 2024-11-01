import { heroLine } from "@/data/heroLine";
import { Box, Button, Grid, IconButton, InputBase, Typography, Menu, MenuItem } from "@mui/material";
import { ShoppingCart, FavoriteBorder, AccountCircle, Login, Logout } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { checkUserToken } from "@/utils/localStorage";
import { useState, useEffect, ChangeEvent } from "react";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

interface TopBarProps {
  toggleTheme: () => void;
}
const TopBar: React.FC<TopBarProps> = ({ toggleTheme }) => {
  // const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (["/", "/user"].includes(location.pathname)) {
      navigate("/product");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    // navigate("/user/auth/login", { replace: true });
  };

  const searchTitle = useAppSelector((state) => state.topbar.searchTitle);

  const dispatch = useAppDispatch();

  // const [titleData, setTitleData] = useState<string>("");
  // const send = () => {
  //   dispatch(setTitle(titleData));
  //   setTitleData("");
  // };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTitle(e.target.value));
    // setTitleData("");
  };

  const tegLine = heroLine.find((e) => e.slug == "top-bar");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    navigate("/user/auth/login");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkUserToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate]);

  return (
    <>
      <Box sx={{ borderBottom: 2, borderColor: "secondary.main", width: "100%" }}>
        <Box sx={{ bgcolor: "background.paper", color: "text.secondary" }}>
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            {tegLine?.title}
            <Button variant="text" sx={{ color: "text.secondary" }}>
              ShopNow
            </Button>
          </Typography>
        </Box>
        <Grid container sx={{ p: 1 }}>
          <Grid item md={4} sm={6} xs={6} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
            <IconButton>{/* <Menu /> */}</IconButton>
            <Typography variant="h5">Exclusive</Typography>
          </Grid>

          <Grid item md={4} sm={12} xs={12} order={{ xs: 3, sm: 3, md: 2 }} sx={{ display: "grid", placeItems: "center" }}>
            {/* Search Bar */}
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

              {/* <IconButton type="submit">
                <Search />
              </IconButton> */}
            </Box>
          </Grid>

          <Grid item md={4} sm={6} xs={6} order={{ xs: 2, sm: 2, md: 3 }} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            {/* Icons */}
            <Box sx={{}}>
              <IconButton onClick={() => navigate("/user/wishlist")}>
                <FavoriteBorder />
              </IconButton>
              <IconButton>
                <ShoppingCart />
              </IconButton>
              <IconButton edge="end" aria-label="account of current user" aria-controls="user-menu" aria-haspopup="true" onClick={handleMenuOpen} color="inherit">
                {isLoggedIn ? <Login /> : <Logout />}
              </IconButton>
              <IconButton onClick={() => toggleTheme()}>
                <AccountCircle />
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#f0f0f0", // Change to your desired color
                  },
                }}
              >
                {isLoggedIn ? (
                  <>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleLogout();
                        handleMenuClose();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                )}
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopBar;
