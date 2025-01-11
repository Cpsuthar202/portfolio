import { ProductCard } from "@/components/card";
import { Box, Grid, Typography } from "@mui/material";
import { useProduct } from "./Product.hook";
import { Iproduct } from "@/store/reducers/product/type";

const Product = () => {
  const {
    variables: { products },
  } = useProduct();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Grid container>
        {products?.list?.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
              width: "100%", // Ensures the Box takes full width
              minHeight: "200px", // Adjust the height to fit your needs
            }}
          >
            <Typography>Product not found</Typography>
          </Box>
        ) : (
          products?.list?.map((product: Iproduct) => (
            <Grid item key={product.id} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Product;
