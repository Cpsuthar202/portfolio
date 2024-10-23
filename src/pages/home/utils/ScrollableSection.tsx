import React, { useRef } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CategoryCard from "@/components/Container/CategoryCard";

// Define the type for the items array prop
interface Item {
  src: string;
  label: string;
}

// Define the props for the ScrollableSection component
interface ScrollableSectionProps {
  title: string;
  items: Item[];
  navigateTo: string;
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({ title, items, navigateTo }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for the scrollable box

  // Function to scroll left or right by the given offset
  const scroll = (scrollOffset: number): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <Button variant="text" color="primary" onClick={() => navigate(navigateTo)}>
          View All
        </Button>
        {/* <IconButton onClick={() => navigate(navigateTo)}>
          <East />
        </IconButton> */}
      </Box>

      {/* Scrollable Section */}
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        {/* Left Arrow Button */}
        <IconButton onClick={() => scroll(-150)}>
          <ArrowBackIos />
        </IconButton>

        {/* Scrollable Box */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            "&::-webkit-scrollbar": { height: "3px" },
            width: "100%",
          }}
        >
          {items.map((item, index) => (
            <Box key={index}>
              <CategoryCard src={item.src} label={item.label} />
            </Box>
          ))}
        </Box>

        {/* Right Arrow Button */}
        <IconButton onClick={() => scroll(150)}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ScrollableSection;
