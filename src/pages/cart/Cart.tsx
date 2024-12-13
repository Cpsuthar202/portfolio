import React from "react";
import { Container, Typography, Box, Stack, IconButton, Button, Divider } from "@mui/material";
import { cartData } from "@/data/cartData";
import Image from "@/components/image/Image";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "./Cart.hook";

const Cart: React.FC = () => {
  const {
    variable: { cartFData, priceDetails },
    methods: { handleIncrement, handleDecrement, healdCheckout, healdWishlistCart, healdRemoveCart },
  } = useCart();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Your Cart
      </Typography>
      {/* Price Details Box */}
      <Box sx={{ border: 1, borderColor: "secondary.main", borderRadius: 2, p: 2 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Price Details
          </Typography>
          <Typography variant="subtitle2">
            ({priceDetails.totalProducts} Product, {priceDetails.totalQuantity} Quantity)
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="subtitle2">Price: ₹{priceDetails.totalPrice}</Typography>
          <Typography variant="subtitle2">Discounted Price: ₹{priceDetails.totalDiscountPrice}</Typography>
          <Typography variant="subtitle2">Delivery Charges: ₹{priceDetails.totalDeliveryCharges}</Typography>
          <Typography variant="subtitle2">Total Price: ₹{priceDetails.totalDiscountPrice + priceDetails.totalDeliveryCharges}</Typography>
          <Typography variant="subtitle2" color="success.main">
            You Save: ₹{priceDetails.totalSavings}
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" onClick={healdCheckout}>
            Proceed to Checkout
          </Button>
        </Box>
      </Box>

      {/* Cart Items */}
      {cartData.map((data) => {
        const cartItem = cartFData.find((item) => item.product_id === data.id);
        const quantity = cartItem ? cartItem.quantity : 1;

        return (
          <>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 1,
                height: "100%",
                width: "100%",
              }}
            >
              <Image src={data.images[0]} alt={data.title} style={{ width: "100%", height: "200px" }} />
              <Divider />
              <Box sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle2" sx={{ m: "auto" }}>
                  {data.title}
                </Typography>
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
                {data.stock > 0 ? (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton onClick={() => handleDecrement(data.id)} disabled={quantity <= 1}>
                      <Remove />
                    </IconButton>
                    <Box sx={{ border: 1, borderColor: "primary.main", p: 1, px: 2, borderRadius: 2 }}>
                      <Typography>{quantity}</Typography>
                    </Box>
                    <IconButton onClick={() => handleIncrement(data.id, data.stock)} disabled={quantity === data.stock}>
                      <Add />
                    </IconButton>
                  </Stack>
                ) : (
                  <Typography variant="subtitle2" color="error" sx={{ mx: 5 }}>
                    Sold Out
                  </Typography>
                )}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button onClick={() => healdWishlistCart(data.id)}>Add to Wishlist</Button>
                  <Button onClick={() => healdRemoveCart(data.id)}>Remove from Cart</Button>
                </Stack>
              </Box>
            </Box>
          </>
        );
      })}
    </Container>
  );
};

export default Cart;
