import { Grid, Typography, Button, IconButton, Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Add, Remove, FavoriteBorder, Share } from "@mui/icons-material";
import Image from "@/components/image/Image";
import { useProduct } from "./Product.hook";
import Ratings from "@/components/ratings/Ratings";
import { WebShare } from "@/components/Container";

const ProductDetails = () => {
  // Check if the screen width is below 600px (mobile view)
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Destructure variables and methods from the useProduct hook
  const {
    variables: { product, stectImage, quantity, maxQuantity },
    methods: { setStectImage, handleIncrement, handleDecrement },
  } = useProduct();

  return (
    <Box>
      <Grid container>
        {/* Left Section: Image Gallery */}
        <Grid item xs={12} md={6} sx={{ display: "grid", placeItems: "center" }}>
          {/* Main Product Image */}
          <Box sx={{ width: isSmallScreen ? "100%" : "70%", display: "grid", placeItems: "center" }}>
            <Image src={stectImage} alt="image" style={{ width: "100%", borderRadius: 10 }} />

            {/* Thumbnail Images */}
            {product?.images && product.images.length >= 2 && (
              <Box sx={{ display: "flex", overflowX: "auto", width: "100%" }}>
                {product.images.map((i) => (
                  <Image key={i} src={i} alt="image" style={{ height: isSmallScreen ? 50 : 100, margin: 8, borderRadius: 10 }} onClick={() => setStectImage(i)} />
                ))}
              </Box>
            )}
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Product Title */}
            <Typography variant="h5">{product?.title}</Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", color: "primary.main" }}>
              view stores {product?.store.store_name}
            </Typography>

            {/* Ratings Component */}
            <Ratings rat={product?.rating} totalRaters={product?.totalRaters} />

            {/* Price Section */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h6">₹{product?.discountPrice}</Typography>
              {/* Show MRP and Discount Percentage if applicable */}
              {!!product?.discountPercentage && (
                <>
                  <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
                    ₹{product?.mrp}
                  </Typography>
                  <Typography variant="body1" color="success.main">
                    {product?.discountPercentage}% off
                  </Typography>
                </>
              )}
            </Stack>

            {/* Available Colors */}
            <Box>
              <Typography variant="subtitle2">Colors:</Typography>
              {product?.colors && (
                <Stack direction="row" spacing={1} sx={{ width: "100%", overflowX: "auto", pb: 1 }}>
                  {product.colors.map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        border: 1,
                        borderColor: "secondary.main",
                        borderRadius: "10px",
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "9px",
                      }}
                    >
                      {color.image ? (
                        <Image src={color.image} alt="image" style={{ height: "50px", borderRadius: 10, border: 1 }} onClick={() => setStectImage(color.image)} />
                      ) : (
                        <Box key={color.code} sx={{ width: "20px", height: "20px", bgcolor: color.code, borderRadius: "10%" }} />
                      )}

                      <Typography variant="body1">{color.label}</Typography>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Available Sizes */}
            {product?.sizes && (
              <>
                <Typography variant="subtitle2">Size:</Typography>
                <Stack direction="row" spacing={1} sx={{ width: "100%", overflowX: "auto" }}>
                  {product.sizes.map((size, index) => (
                    <Button key={index} variant="text" sx={{ px: 3, width: "fit-content" }}>
                      {size}
                    </Button>
                  ))}
                </Stack>
              </>
            )}

            {/* Quantity Selector and Buy Button */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {/* Decrement Quantity Button */}
                <IconButton onClick={handleDecrement} disabled={quantity <= 1}>
                  <Remove />
                </IconButton>
                {/* Current Quantity */}
                <Box sx={{ border: 1, borderColor: "primary.main", p: 1, px: 2, borderRadius: 2 }}>
                  <Typography>{quantity}</Typography>
                </Box>
                {/* Increment Quantity Button */}
                <IconButton onClick={handleIncrement} disabled={quantity >= maxQuantity}>
                  <Add />
                </IconButton>
              </Stack>

              {/* Buy Now Button */}
              <Button variant="contained" color="primary" sx={{ flex: 1 }}>
                Buy Now
              </Button>
              {/* Add to Wishlist */}
              <IconButton>
                <FavoriteBorder />
              </IconButton>
              {/* share product*/}
              <WebShare text={product?.title} url={`product_details/${product?.id}`}>
                <IconButton>
                  <Share />
                </IconButton>
              </WebShare>
            </Box>

            {/* Product Description */}

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Description
              <Typography variant="subtitle1">{product?.description}</Typography>
            </Typography>

            {/* Delivery and Return Information */}
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Delivery Charge
              </Typography>
              <Typography variant="body1">{product?.delivery_charges == 0 ? " Free Delivery" : `₹${product?.delivery_charges} Delivery Charge`}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Return Delivery
              </Typography>
              <Typography variant="body1">{product?.replacementPolicy}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Warranty
              </Typography>
              <Typography variant="body1">{product?.warranty} year warranty</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box>
        {/* features */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Features
        </Typography>
        {product?.features.map((f) => (
          <Typography variant="subtitle1">- {f} </Typography>
        ))}
      </Box>
      <Box>{product?.hero_images && product?.hero_images.map((i) => <Image key={i} src={i} alt="image" style={{ width: "100%" }} />)}</Box>
    </Box>
  );
};

export default ProductDetails;
