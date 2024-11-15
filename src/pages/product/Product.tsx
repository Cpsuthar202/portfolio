import { ProductCard } from "@/components/card";
import { Iproduct } from "@/data/product";

import { Box, Grid, Typography } from "@mui/material";
import { useProduct } from "./Product.hook";

const Product = () => {
  const {
    variables: { filteredProducts },
    // methods: {},
  } = useProduct();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Displaying filtered products */}
      <Grid container>
        {filteredProducts.length != 0 ? (
          filteredProducts.map((p: Iproduct, index: number) => (
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} />
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

export default Product;
