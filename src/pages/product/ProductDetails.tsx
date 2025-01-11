import { Grid, Typography, Button, IconButton, Box, Stack, Chip, Container, Divider, Rating, LinearProgress } from "@mui/material";
import { Add, Remove, FavoriteBorder, Share } from "@mui/icons-material";
import { Image } from "@/components/image";
import { DisplayRatings } from "@/components/ratings/Ratings";
import { WebShare } from "@/components/container";
import { mColor } from "@color";
import { useProductDetails } from "./productDetails.hook";

const ProductDetails = () => {
  // Destructure variables and methods from the useProduct hook
  const {
    variables: { product, isSmallScreen, selectImage, setSelectImage, navigate, quantity, ratingsData },
    methods: { handleDecrement, handleIncrement, handleToCart, handleToWishlist, handleToBuy },
  } = useProductDetails();

  return (
    <Box>
      <Grid container>
        {/* Left Section: Image Gallery */}
        <Grid item xs={12} md={6} sx={{ display: "grid", placeItems: "center" }}>
          {/* Main Product Image */}
          <Box sx={{ width: isSmallScreen ? "100%" : "70%", display: "grid", placeItems: "center", position: "relative" }}>
            {/* <ZoomImage src={selectImage} /> */}
            <Image src={selectImage} alt="image" style={{ width: "100%", borderRadius: 10 }} />
            {/* Sold Out Labels */}
            {product?.stock === 0 && <Chip label="Sold Out" color="error" size="small" sx={{ borderRadius: "5px ", position: "absolute", top: 0, right: 0 }} />}

            {/* Thumbnail Images */}
            {product?.images && product.images.length >= 2 && (
              <Box sx={{ width: "100%", overflowX: "auto" }}>
                <Box sx={{ display: "flex", width: "fit-content", m: "auto" }}>
                  {product.images.map((image, index) => (
                    <Image key={index} src={image} alt="image" style={{ height: isSmallScreen ? 50 : 70, margin: 8, borderRadius: 10 }} onClick={() => setSelectImage(image)} />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Product Title */}
            <Typography variant="subtitle2">{product?.title}</Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", color: "primary.main" }} onClick={() => navigate(`/shop_details/${product?.shop_id}`)}>
              view stores
            </Typography>
            {/* Best Selling */}
            {product?.best_selling && (
              <Chip
                label={`#${product?.best_selling && product?.best_selling_number} Best Selling`}
                color="warning"
                size="small"
                sx={{ borderRadius: " 5px", width: "fit-content", color: mColor.white }}
                onClick={() => navigate("/best_selling")}
              />
            )}

            {/* Ratings Component */}
            <DisplayRatings rat={product?.ratings?.rat ? Number(product.ratings.rat) : 0} totalRaters={product?.ratings?.total_raters} />

            {/* Price Section */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body1">₹{product?.discount_price}</Typography>
              {/* Show MRP and Discount Percentage if applicable */}
              {!!product?.discount_percentage && (
                <>
                  <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
                    ₹{product?.price}
                  </Typography>
                  <Typography variant="body1" color="success.main">
                    {product?.discount_percentage}% off
                  </Typography>
                </>
              )}
            </Stack>

            {/* Available Colors */}
            {product?.colors && (
              <Box>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  Colors
                </Typography>
                <Stack direction="row" spacing={1} sx={{ width: "100%", overflowX: "auto", pb: 1 }}>
                  {product?.colors.map((color, index) => (
                    <Button key={index} variant="text" sx={{ py: 1, px: 3, width: "fit-content" }}>
                      {/* onClick={() => setCardProduct({ ...cardProduct, size: size })} */}
                      {color}
                    </Button>
                    //   <Button key={index} variant={cardProduct.size === size ? "outlined" : "text"} sx={{ px: 3, width: "fit-content" }} onClick={() => setCardProduct({ ...cardProduct, size: size })}>
                    //   {color}
                    // </Button>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Available Sizes */}
            {product?.sizes && (
              <Box>
                <Typography variant="body1">Size</Typography>
                <Stack direction="row" spacing={1} sx={{ width: "100%", overflowX: "auto", pb: 1 }}>
                  {product?.sizes.map((size, index) => (
                    <Button key={index} variant="text" sx={{ py: 1, px: 3, width: "fit-content" }}>
                      {/* onClick={() => setCardProduct({ ...cardProduct, size: size })} */}
                      {size}
                    </Button>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Quantity Selector and Buy Button */}

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} alignItems="center">
                {/* Quantity Controller */}
                {product && product?.stock > 0 && (
                  <Grid item xs={6} sm={6} md={6} lg={3} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ justifyContent: "space-between" }}>
                      {/* Decrement Quantity Button */}
                      <IconButton onClick={handleDecrement} disabled={quantity <= 1}>
                        <Remove />
                      </IconButton>
                      {/* Current Quantity */}
                      <Box sx={{ border: 1, borderColor: "primary.main", p: 1, px: 2, borderRadius: 2 }}>
                        {" "}
                        <Typography>{quantity}</Typography>
                      </Box>
                      {/* Increment Quantity Button */}
                      <IconButton onClick={handleIncrement} disabled={quantity >= product.stock}>
                        <Add />
                      </IconButton>
                    </Stack>
                  </Grid>
                )}

                {/* Add to Cart Button */}
                <Grid item xs={12} sm={6} md={6} lg={3} order={{ xs: 3, sm: 3, md: 3, lg: 2 }}>
                  <Button variant="outlined" color="primary" fullWidth disabled={product?.stock === 0} onClick={handleToCart}>
                    Add to Cart
                  </Button>
                </Grid>

                {/* Buy Now Button */}
                <Grid item xs={12} sm={6} md={6} lg={3} order={{ xs: 4, sm: 4, md: 4, lg: 3 }}>
                  <Button variant="contained" color="primary" fullWidth disabled={product?.stock === 0} onClick={handleToBuy}>
                    {product?.stock === 0 ? "Sold Out" : "Buy Now"}
                  </Button>
                </Grid>

                {/* Share Button */}
                <Grid item xs={6} sm={6} md={6} lg={3} order={{ xs: 2, sm: 2, md: 2, lg: 4 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ justifyContent: "space-evenly", width: "100%" }}>
                    <IconButton onClick={() => product?.id && handleToWishlist(product.id)}>
                      <FavoriteBorder />
                    </IconButton>
                    <WebShare text={product?.title} url={`product_details/${product?.id}`}>
                      <IconButton>
                        <Share />
                      </IconButton>
                    </WebShare>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            {/* Product Description */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Description
                <Typography variant="body1">{product?.description}</Typography>
              </Typography>
              <Divider />

              {/* Delivery and Return Information */}
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Delivery Charge
                <Typography variant="body1">{product?.delivery_charges == 0 ? " Free Delivery" : `₹${product?.delivery_charges} Delivery Charge`}</Typography>
              </Typography>
              <Divider />

              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Return Delivery
                <Typography variant="body1">{product?.replacement}</Typography>
              </Typography>
              <Divider />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Warranty
                <Typography variant="body1">{product?.warranty} year warranty</Typography>
              </Typography>
              <Divider />
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
          {product?.features.map((f, index) => (
            <Typography variant="body1" key={index} sx={{ my: 1 }}>
              - {f}
            </Typography>
          ))}
        </Box>
        <Divider />
        {/* Ratings Component */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Ratings
          </Typography>
          <Box sx={{ display: "flex", alignContent: "center", gap: 1 }}>
            <Rating value={product?.ratings?.rat ? Number(product.ratings.rat) : 0} precision={0.1} readOnly />
            <DisplayRatings rat={product?.ratings?.rat ? Number(product.ratings.rat) : 0} totalRaters={product?.ratings?.total_raters} />
            <Typography variant="body1">{product?.ratings?.rat ? `${Number(product.ratings.rat)} Ratings out of 5` : "No ratings"}</Typography>
          </Box>

          <Stack spacing={1} mt={2}>
            {ratingsData.map(({ rating, count, color }) => {
              const totalRaters = product?.ratings.total_raters || 0;
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
        <Divider />
        <Box>{product?.hero_images && product?.hero_images.map((i) => <Image key={i} src={i} alt="image" style={{ width: "100%" }} />)}</Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
