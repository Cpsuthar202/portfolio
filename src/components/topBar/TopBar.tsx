import { heroLine } from "@/data/heroLine";
import { Box, Button, Checkbox, Grid, IconButton, InputBase, Link, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import Image from "../image/Image";
import { moonIcon, sunIcon } from "@svg";
// import { useAppSelector } from "@/store/store";
// import { useNavigate } from "react-router-dom";

interface TopBarProps {
  toggleTheme: () => void;
}
const TopBar: React.FC<TopBarProps> = ({ toggleTheme }) => {
  // const navigate = useNavigate();
  // const handleLogOut = () => {
  //   localStorage.clear();
  //   navigate("/user/auth/login", { replace: true });
  // };

  // const title = useAppSelector((state) => state.topbar.title);

  const tegLine = heroLine.find((e) => e.slug == "top-bar");
  console.log("tegLine", tegLine);

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    console.log("event.target", event.target.checked);

    if (isChecked) {
      toggleTheme();
    } else {
      toggleTheme();
    }
  };

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

        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
        <Grid container>
          <Grid md={4} sm={12} sx={{ border: 1, display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" sx={{ border: 1 }}>
              Exclusive
            </Typography>
          </Grid>
          <Grid md={4} sm={12} sx={{ border: 1, display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", gap: 2, width: "fit-content" }}>
              <Link href="#" underline="hover" color="inherit">
                Home
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Contact
              </Link>
              <Link href="#" underline="hover" color="inherit">
                About
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Sign Up
              </Link>
            </Box>
          </Grid>
          <Grid md={4} sm={12} sx={{ border: 1, display: "flex", justifyContent: "center" }}>
            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "grey.100",
                borderRadius: 1,
                px: 2,
              }}
            >
              <InputBase placeholder="What are you looking for?" sx={{ width: 250 }} />
              <IconButton type="submit" sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Box>

            {/* Icons */}
            <IconButton aria-label="favorites" color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="cart" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Button variant="contained" onClick={toggleTheme}>
              Toggle Theme
            </Button>

            <Checkbox checked={checked} onChange={handleChange} color="primary" icon={<Image src={sunIcon} alt="lighe" />} checkedIcon={<Image src={moonIcon} alt="dark" />} />
          </Grid>
        </Grid>
        {/* 
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button> */}
      </Box>
    </>
  );
};

export default TopBar;
