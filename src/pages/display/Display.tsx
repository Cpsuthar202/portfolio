import React from "react";
import CategoryCard from "@/components/card/CategoryCard";
import { Box, Grid } from "@mui/material";
import useDisplayHook from "./display.hook";

const Display: React.FC = () => {
  const {
    methods: { getData, handleNavigation },
  } = useDisplayHook();

  return (
    <Box>
      <Grid container>
        {getData().map((item, index) => (
          <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <CategoryCard
                src={"logo" in item ? item.logo : "image" in item ? item.image : ""}
                label={"label" in item ? item.label : "store_name" in item ? item.store_name : ""}
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
