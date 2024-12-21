import { ProductCard } from "@/components/card";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useBestSelling } from "./BestSelling.hook";
import { Iproduct } from "@/store/reducers/product/type";

const BestSelling: React.FC = () => {
  const {
    variable: { prodect },
  } = useBestSelling();

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Best Selling
      </Typography>
      <Grid container>
        {prodect.length != 0 ? (
          prodect.map((p: Iproduct, index: number) => (
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} bastSellingNo={true} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
            Product Not Found
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default BestSelling;
