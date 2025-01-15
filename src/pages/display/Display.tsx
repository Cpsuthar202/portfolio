import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CategoryCard } from "@/components/card/index";
import { IShopsResponse } from "@/store/reducers/shop/type";
import { ICategoriesResponse } from "@/store/reducers/category/type";
import { IBrandsResponse } from "@/store/reducers/brand/type";
import { useDisplay } from "./Display.hook";

const Display: React.FC = () => {
  const {
    variable: { data, label },
    methods: { handleNavigation },
  } = useDisplay();

  type DataItem = ICategoriesResponse | IBrandsResponse;
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        {label && label.charAt(0).toUpperCase() + label.slice(1)}
      </Typography>

      {/* Render items in a responsive grid */}
      <Grid container>
        {data?.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
              width: "100%", // Ensures the Box takes full width
              minHeight: "200px", // Adjust the height to fit your needs
            }}
          >
            <Typography> {label && label.charAt(0).toUpperCase() + label.slice(1)} not found</Typography>
          </Box>
        ) : (
          data?.map((item, index) => (
            <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
              <Box sx={{ display: "grid", placeItems: "center" }}>
                {label === "shop" ? (
                  <CategoryCard src={(item as IShopsResponse).shop_image} label={(item as IShopsResponse).shop_name} onClick={() => handleNavigation(item)} />
                ) : (
                  <CategoryCard src={(item as DataItem).image} label={(item as DataItem).name} onClick={() => handleNavigation(item)} />
                )}
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Display;
