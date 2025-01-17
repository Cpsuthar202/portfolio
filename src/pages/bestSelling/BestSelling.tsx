import { ProductCard } from "@components/card/index";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useBestSelling } from "./BestSelling.hook";
import { Iproduct } from "@/store/reducers/product/type";
import { Circular } from "@components/loader/index";

const BestSelling: React.FC = () => {
  const {
    variable: { products },
  } = useBestSelling();

  if (!products) {
    return <Circular />;
  }

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Best Selling
      </Typography>
      <Grid container>
        {!products ? (
          <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
            No best-selling products available at this time.
          </Typography>
        ) : (
          products?.list?.map((p: Iproduct, index: number) => (
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default BestSelling;
