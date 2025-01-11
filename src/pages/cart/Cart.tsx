import React from "react";
import { Typography, Box, Stack, IconButton, Button, Grid, Container, Divider } from "@mui/material";
import { Image } from "@/components/image";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "./Cart.hook";
import { trimTextToWordLimit } from "@/components/utils/textUtils";
import { IcartPayload } from "@/store/reducers/cart/type";

const Cart: React.FC = () => {
  const {
    variable: { carts },
    methods: { navigate, handleIncrement, handleDecrement, healdWishlistCart, healdRemoveCart, handleCheckOut },
  } = useCart();
  if (!carts?.list?.length) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
        Cart not found
      </Typography>
    );
  }

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
              Price ({carts?.payment_details?.products} items, {carts?.payment_details?.quantity} Quantity)
            </Typography>
            <Typography variant="body1"> ₹{carts?.payment_details?.price}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">Discounted Price </Typography>
            <Typography variant="body1">₹{carts?.payment_details?.discount_price}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">Delivery Charges </Typography>
            <Typography variant="body1"> ₹{carts?.payment_details?.delivery_charges}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Total Amount
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ₹{carts?.payment_details?.totel}
            </Typography>
          </Stack>
          <Divider />
          <Typography variant="body1" color="success.main" sx={{ fontWeight: "bold" }}>
            You will save ₹{carts?.payment_details?.save_price} on this order
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
          {carts.list.map((data) => {
            const stock = data?.product?.stock ?? 0; // Default to 0 if undefined
            const deliveryCharges = data?.product?.delivery_charges ?? 0; // Default to 0 if undefined
            const discountPrice = data?.product?.discount_price ?? 0;
            const price = data?.product?.price ?? 0;

            return (
              <Grid item md={6} sm={6} xs={12} sx={{ p: 1 }} key={data.id}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 1,
                    height: "100%",
                    p: 1,
                    width: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
                    <Image src={data?.product?.image || ""} alt="N/O" sx={{ height: 60, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data.id}`)} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ width: "100%" }}>
                        {trimTextToWordLimit(data?.product?.title || "Untitled", 100)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 1, pt: 0 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      {data?.color && (
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Color :
                          </Typography>
                          <Typography variant="body1">{data.color}</Typography>
                        </Stack>
                      )}
                      {data?.size && (
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Size :
                          </Typography>
                          <Typography variant="body1">{data.size}</Typography>
                        </Stack>
                      )}
                    </Box>
                    {stock > 0 ? (
                      <>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                          <Typography variant="body1">₹{discountPrice}</Typography>
                          <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
                            ₹{price}
                          </Typography>
                          {deliveryCharges > 0 && <Typography variant="body1">Delivery: ₹{deliveryCharges}</Typography>}
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Total Amount
                          </Typography>
                          <Typography variant="body1">₹{(discountPrice + deliveryCharges) * data.quantity}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <IconButton onClick={() => handleDecrement(data as IcartPayload)} disabled={data.quantity <= 1}>
                            <Remove />
                          </IconButton>
                          <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: 2, p: 0.5, px: 1.5 }}>
                            <Typography>{data.quantity}</Typography>
                          </Box>
                          <IconButton onClick={() => handleIncrement(data as IcartPayload)} disabled={data.quantity === stock}>
                            <Add />
                          </IconButton>
                        </Stack>
                      </>
                    ) : (
                      <Typography variant="subtitle2" color="error" sx={{ my: 1 }}>
                        Out Of Stock
                      </Typography>
                    )}
                    <Stack direction="row" alignItems="center" spacing={1}>
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
