import { ProductCard } from "@/components/card";
import { Iproduct } from "@/data/product";
import { Box, Grid, Typography } from "@mui/material";
import { useProduct } from "./Product.hook";

const Product = () => {
  const {
    variables: { filteredProducts },
  } = useProduct();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Grid container>
        {/* Render products if available, otherwise show a 'not found' message */}
        {filteredProducts.length ? (
          filteredProducts.map((product: Iproduct, index: number) => (
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={product} />
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
