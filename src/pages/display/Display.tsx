import React from "react";
import CategoryCard from "@/components/card/CategoryCard";
import { Box, Grid } from "@mui/material";
import useDisplay from "./Display.hook";

const Display: React.FC = () => {
  const {
    methods: { getData, handleNavigation },
  } = useDisplay();

  return (
    <Box>
      {/* Render items in a responsive grid */}
      <Grid container>
        {getData().map((item, index) => (
          <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
            {/* Center the CategoryCard component within each grid item */}
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <CategoryCard
                // Display image based on item type
                src={"logo" in item ? item.logo : "image" in item ? item.image : ""}
                // Display label based on item type
                label={"label" in item ? item.label : "store_name" in item ? item.store_name : ""}
                // Trigger navigation on click
                onClick={() => handleNavigation(item)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Display;
