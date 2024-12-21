import React from "react";
import { Typography, Box, Stack, IconButton, Button, Grid, Container, Divider } from "@mui/material";
import { Image } from "@/components/image";
import { Add, Remove, SquareRounded } from "@mui/icons-material";
import { useCart } from "./Cart.hook";
import { trimTextToWordLimit } from "@/components/utils/textUtils";

const Cart: React.FC = () => {
  const {
    variable: { cartData },
    methods: { navigate, handleIncrement, handleDecrement, healdWishlistCart, healdRemoveCart, handleCheckOut },
  } = useCart();

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
              Price ({cartData.payment_details.items} items, {cartData.payment_details.quantity} Quantity)
            </Typography>
            <Typography variant="body1"> ₹{cartData.payment_details.price}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">Discounted Price </Typography>
            <Typography variant="body1">₹{cartData.payment_details.discountPrice}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">Delivery Charges </Typography>
            <Typography variant="body1"> ₹{cartData.payment_details.delivery_charges}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Total Amount
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ₹{cartData.payment_details.total_amount}
            </Typography>
          </Stack>
          <Divider />
          <Typography variant="body1" color="success.main" sx={{ fontWeight: "bold" }}>
            You will save ₹{cartData.payment_details.save_amount} on this order
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleCheckOut}>
              Proceed to Buy
            </Button>
          </Box>
        </Box>
        {/* </Container> */}
        {/* Cart Items */}
        <Grid container sx={{}}>
          {cartData.cartList.map((data) => {
            // const cartItem = cartFData.find((item) => item.product_id === data.id);
            // const quantity = cartItem ? cartItem.quantity : 1;

            return (
              <Grid item md={6} sm={6} xs={12} sx={{ p: 1 }}>
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
                    <Image src={data.attributes.color?.image || data.image} alt={"N/O"} sx={{ height: 60, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data.id}`)} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ width: "100%" }}>
                        {data.id} {trimTextToWordLimit(data.title, 100)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 1, pt: 0 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          Color :
                        </Typography>
                        {data.attributes.color?.code && <SquareRounded sx={{ color: data.attributes.color?.code }} />}
                        <Typography variant="body1">{data.attributes.color?.label}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          Size :
                        </Typography>
                        <Typography variant="body1">{data.attributes?.size}</Typography>
                      </Stack>
                    </Box>
                    {data.stock > 0 ? (
                      <>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                          <Typography variant="body1">₹{data.discountPrice}</Typography>
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
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Total Amount
                          </Typography>
                          <Typography variant="body1">₹{(data.discountPrice + data.delivery_charges) * data.quantity}</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                          <IconButton onClick={() => handleDecrement(data.id)} disabled={data.quantity <= 1}>
                            <Remove />
                          </IconButton>
                          <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: 2, p: 0.5, px: 1.5 }}>
                            <Typography>{data.quantity}</Typography>
                          </Box>
                          <IconButton onClick={() => handleIncrement(data.id)} disabled={data.quantity === data.stock}>
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
