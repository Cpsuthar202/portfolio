import { Box, Grid, Typography } from "@mui/material";
import { productData } from "@/data/product";
import { ProductCard } from "@/components/card";
import { Iproduct } from "@/store/reducers/product/type";

const Wishlist = () => {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Your Wishlist
      </Typography>

      <Grid container>
        {productData.map((p: Iproduct, index: number) => (
          <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
            <ProductCard data={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Wishlist;
