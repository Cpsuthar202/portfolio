import React from "react";
import { Typography, Box, Stack, IconButton, Button, Grid, Container, Divider } from "@mui/material";
import { cartData } from "@/data/cartData";
import Image from "@/components/image/Image";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "./Cart.hook";
import { trimTextToWordLimit } from "@/components/utils/textUtils";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const {
    variable: { cartFData, priceDetails },
    methods: { handleIncrement, handleDecrement, healdCheckout, healdWishlistCart, healdRemoveCart },
  } = useCart();

  console.log("cartData", cartData);

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Your Cart
        </Typography>
        {/* Price Details Box */}
        <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: 2, p: 2, mx: 1, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Price Details
          </Typography>
          <Divider />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">
              Price ({priceDetails.totalProducts} items, {priceDetails.totalQuantity} Quantity)
            </Typography>
            <Typography variant="body1"> ₹{priceDetails.totalPrice}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">Discounted Price </Typography>
            <Typography variant="body1" color="success.main">
              - ₹{priceDetails.totalDiscountPrice}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">Delivery Charges </Typography>
            <Typography variant="body1"> ₹{priceDetails.totalDeliveryCharges}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Total Amount
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ₹{priceDetails.totalDiscountPrice + priceDetails.totalDeliveryCharges}
            </Typography>
          </Stack>
          <Divider />
          <Typography variant="body1" color="success.main" sx={{ fontWeight: "bold" }}>
            You will save ₹{priceDetails.totalSavings} on this order
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={healdCheckout}>
              Place Order
            </Button>
          </Box>
        </Box>
        {/* </Container> */}
        {/* Cart Items */}
        <Grid container sx={{}}>
          {cartData.map((data) => {
            const cartItem = cartFData.find((item) => item.product_id === data.id);
            const quantity = cartItem ? cartItem.quantity : 1;

            return (
              <Grid item md={4} sm={6} xs={12} sx={{ p: 1 }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 1,
                    height: "100%",
                    p: 1,
                    // border: 1,
                    width: "100%",
                    // display: "flex",
                  }}
                >
                  <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
                    <Image src={data.images[0]} alt={data.title} sx={{ height: 60, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data.id}`)} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ width: "100%" }}>
                        {data.id} {trimTextToWordLimit(data.title, 100)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 1, pt: 0 }}>
                    {data.stock > 0 ? (
                      <>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                          <Typography variant="subtitle2">₹{data.discountPrice}</Typography>
                          {data.discountPercentage > 0 && (
                            <>
                              <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
                                ₹{data.price}
                              </Typography>
                              <Typography variant="body1" color="success.main">
                                {data.discountPercentage}% off
                              </Typography>
                              {data.delivery_charges > 0 && <Typography variant="body1">Delivery: ₹{data.delivery_charges}</Typography>}
                            </>
                          )}
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                          <IconButton onClick={() => handleDecrement(data.id)} disabled={quantity <= 1}>
                            <Remove />
                          </IconButton>
                          <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: 2, p: 0.5, px: 1.5 }}>
                            <Typography>{quantity}</Typography>
                          </Box>
                          <IconButton onClick={() => handleIncrement(data.id, data.stock)} disabled={quantity === data.stock}>
                            <Add />
                          </IconButton>
                        </Stack>
                      </>
                    ) : (
                      <Typography variant="subtitle2" color="error" sx={{ my: 1 }}>
                        Out Of Stock
                      </Typography>
                    )}
                    <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                      <Button onClick={() => healdWishlistCart(data.id)}>Add to Wishlist</Button>
                      <Button onClick={() => healdRemoveCart(data.id)}>Remove from Cart</Button>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
