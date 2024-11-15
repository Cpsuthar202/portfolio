import { Grid, Typography, Button, IconButton, Box, Stack, Chip, Container, LinearProgress } from "@mui/material";
import { Add, Remove, FavoriteBorder, Share } from "@mui/icons-material";
import Image from "@/components/image/Image";
import { useProduct } from "./Product.hook";
import Ratings from "@/components/ratings/Ratings";
import { WebShare } from "@/components/Container";
import { mColor } from "@color";

const ProductDetails = () => {
  // Destructure variables and methods from the useProduct hook
  const {
    variables: { product, stectImage, quantity, maxQuantity, isSmallScreen, ratingsData },
    methods: { setStectImage, handleIncrement, handleDecrement, navigate },
  } = useProduct();

  return (
    <Box>
      <Grid container>
        {/* Left Section: Image Gallery */}
        <Grid item xs={12} md={6} sx={{ display: "grid", placeItems: "center" }}>
          {/* Main Product Image */}
          <Box sx={{ width: isSmallScreen ? "100%" : "70%", display: "grid", placeItems: "center", position: "relative" }}>
            <Image src={stectImage} alt="image" style={{ width: "100%", borderRadius: 10 }} />
            {/* Sold Out Labels */}
            {product?.stock === 0 && <Chip label="Sold Out" color="error" size="small" sx={{ borderRadius: "5px ", position: "absolute", top: 0, right: 0 }} />}

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
            <Typography variant="subtitle2">{product?.title}</Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", color: "primary.main" }} onClick={() => navigate(`/store_details/${product?.store.id}`)}>
              view stores {product?.store.store_name}
            </Typography>
            {/* Best Selling */}
            {product?.bestSelling && (
              <Chip
                label={`#${product?.bestSelling && product?.bestSelling_number} Best Selling`}
                color="warning"
                size="small"
                sx={{ borderRadius: " 5px", width: "fit-content", color: mColor.white }}
                onClick={() => navigate("/best_selling")}
              />
            )}

            {/* Ratings Component */}
            <Ratings rat={product?.ratings.rat} totalRaters={product?.ratings.totalRaters} />

            {/* Price Section */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body1">₹{product?.discountPrice}</Typography>
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
              {product && product?.stock > 0 && (
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
              )}

              {/* Buy Now Button */}
              <Button variant="contained" color="primary" sx={{ flex: 1 }} disabled={product?.stock === 0}>
                {product?.stock === 0 ? " Sold Out" : "Buy Now"}
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Description
                <Typography variant="body1">{product?.description}</Typography>
              </Typography>

              {/* Delivery and Return Information */}
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Delivery Charge
                <Typography variant="body1">{product?.delivery_charges == 0 ? " Free Delivery" : `₹${product?.delivery_charges} Delivery Charge`}</Typography>
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Return Delivery
                <Typography variant="body1">{product?.replacementPolicy}</Typography>
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Warranty
                <Typography variant="body1">{product?.warranty} year warranty</Typography>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0 }}>
        {/* features */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 1 }}>
            Features
          </Typography>
          {product?.features.map((f) => (
            <Typography variant="body1" sx={{ my: 1 }}>
              - {f}
            </Typography>
          ))}
        </Box>
        {/* Ratings Component */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Ratings
          </Typography>
          <Box sx={{ display: "flex", alignContent: "center", gap: 1 }}>
            {/* <Rating value={product?.ratings.rat} precision={0.1} readOnly /> */}
            <Ratings rat={product?.ratings.rat} totalRaters={product?.ratings.totalRaters} />
            <Typography variant="body1">{product?.ratings.rat} Ratings out of 5</Typography>
          </Box>

          <Stack spacing={1} mt={2}>
            {ratingsData.map(({ rating, count, color }) => {
              const totalRaters = product?.ratings.totalRaters || 0;
              const percentage = totalRaters ? (count / totalRaters) * 100 : 0;

              return (
                <Box key={rating} display="flex" alignItems="center">
                  <Typography variant="body1" sx={{ width: "60px" }}>
                    {rating}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={percentage}
                    sx={{
                      width: "100%",
                      mx: 1,
                      height: 10,
                      borderRadius: 2,
                      backgroundColor: "#E0E0E0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: color,
                      },
                    }}
                    aria-label={`Rating ${rating} at ${percentage.toFixed(0)}%`}
                  />
                  <Typography variant="body1" sx={{ textAlign: "right" }}>
                    {percentage.toFixed(0)}%
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Box>{product?.hero_images && product?.hero_images.map((i) => <Image key={i} src={i} alt="image" style={{ width: "100%" }} />)}</Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
