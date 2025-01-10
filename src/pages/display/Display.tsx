import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import useDisplay from "./Display.hook";
import { CategoryCard } from "@/components/card";
import { IShopsResponse } from "@/store/reducers/shop/type";
import { ICategoriesResponse } from "@/store/reducers/category/type";
import { IBrandsResponse } from "@/store/reducers/brand/type";

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
        {data &&
          data.map((item, index) => {
            if (!item) return null; // Skip if item is null or undefined

            return (
              <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
                <Box sx={{ display: "grid", placeItems: "center" }}>
                  {label === "shop" ? (
                    <CategoryCard src={(item as IShopsResponse).shop_image} label={(item as IShopsResponse).shop_name} onClick={() => handleNavigation(item)} />
                  ) : (
                    <CategoryCard src={(item as DataItem).image} label={(item as DataItem).name} onClick={() => handleNavigation(item)} />
                  )}
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Display;
