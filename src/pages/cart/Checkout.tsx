import { Box, Button, Container, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useCart } from "./Cart.hook";
import Displayaddress from "../profile/utility/Displayaddress";
import { Edit, SquareRounded } from "@mui/icons-material";
import { trimTextToWordLimit } from "@/components/utils/textUtils";
import Image from "@/components/image/Image";

const Checkout = () => {
  const {
    variable: { cartData, paymentMethod },
    methods: { navigate, handleAddress, handlePaymentMethod },
  } = useCart();
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Check Out
      </Typography>

      {/*  Address */}
      <Box sx={{ borderRadius: 2, boxShadow: 1, p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Address
          </Typography>
          <IconButton onClick={handleAddress}>
            <Edit />
          </IconButton>
        </Box>

        <Displayaddress address={cartData.address} />
      </Box>

      {/*      Payment method */}
      <Box sx={{ borderRadius: 2, boxShadow: 1, p: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Payment method
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button variant={paymentMethod === "online" ? "outlined" : "text"} onClick={() => handlePaymentMethod("online")} fullWidth>
            Online Payment method
          </Button>
          <Button variant={paymentMethod === "cash" ? "outlined" : "text"} onClick={() => handlePaymentMethod("cash")} fullWidth>
            Cash on Delivery/Pay on Delivery
          </Button>
        </Box>
      </Box>

      {/*      Order Summary */}
      <Box sx={{ borderRadius: 2, boxShadow: 1, p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Order Summary
        </Typography>
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
      </Box>

      {/* list */}
      {cartData.cartList.map((data) => (
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 1,
            // height: "100%",
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
            <Box sx={{ display: "flex", gap: 3 }}>
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
          </Box>
          <Typography variant="body1" sx={{ width: "100%" }}>
            Total price: ₹ {(data.discountPrice + data.delivery_charges) * data.quantity}
          </Typography>
        </Box>
      ))}
      <Button variant="contained">Place Order</Button>
    </Container>
  );
};

export default Checkout;
