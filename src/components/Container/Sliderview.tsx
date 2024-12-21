import { ReactNode } from "react";
import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import CategoryCard from "@/components/Container/CategoryCard";

interface ViewSliderview {
  children: ReactNode; // Define the type for children
  title: string;
  navigateTo: string;
  scrollnumber?: number;
}
export const Sliderview: React.FC<ViewSliderview> = ({ children, title, navigateTo }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for the scrollable box

  // Function to scroll left or right by the given offset
  // const scroll = (scrollOffset: number): void => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft += scrollOffset;
  //   }
  // };
  return (
    <Box sx={{ my: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Button variant="text" color="primary" onClick={() => navigate(navigateTo)}>
          View All
        </Button>
      </Box>
      {/* Scrollable Section */}
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        {/* Left Arrow Button */}
        {/* <IconButton onClick={() => scroll(-scrollnumber)}>
          <ArrowBackIos />
        </IconButton> */}

        {/* Scrollable Box */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            // "&::-webkit-scrollbar": { height: "1px" },
            width: "100%",
          }}
        >
          {children}
        </Box>

        {/* Right Arrow Button */}
        {/* <IconButton onClick={() => scroll(scrollnumber)}>
          <ArrowForwardIos />
        </IconButton> */}
      </Box>
    </Box>
  );
};
