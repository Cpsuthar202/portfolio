import { trimTextToWordLimit } from "@/components/utils/textUtils";
import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GiveRatings } from "@/components/ratings/Ratings";
import { CustomAccordion } from "@/components/accordion";
import { textCopy } from "@/components/copys/textCopy";
import { ContentCopy, SquareRounded } from "@mui/icons-material";
import { useOrder } from "./Order.hook";
import { Image } from "@/components/image";

const Order = () => {
  const {
    variable: { orderItemData, expanded, productRating },
    methods: { handleAccordionChange, handleRatingSubmit, handleProductRatingChange },
  } = useOrder();
  const navigate = useNavigate();

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0, pt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Your Order
        </Typography>
        {orderItemData.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
            No items in your cart.
          </Typography>
        ) : (
          <Grid container>
            {orderItemData.map((data) => (
              <Grid item md={6} sm={12} xs={12} sx={{ p: 1 }} key={data.id}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 1,
                    // border: 1,
                    // borderColor: "secondary.main",
                    height: "100%",
                    p: 2,
                    // border: 1,
                    width: "100%",
                    // "&:hover": { boxShadow: 3 },
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Delivery on 16 November
                  </Typography>
                  <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
                    <Image src={data.attributes.color?.image || data.image} alt={"N/O"} sx={{ height: 50, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data.id}`)} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ width: "100%" }}>
                        {data.id} {trimTextToWordLimit(data.title, 100)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    {data.attributes.color && (
                      <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          Color :
                        </Typography>
                        {data.attributes.color?.code && <SquareRounded sx={{ color: data.attributes.color?.code }} />}
                        <Typography variant="body1">{data.attributes.color?.label}</Typography>
                      </Stack>
                    )}
                    <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Size:
                      </Typography>
                      <Typography variant="body1">{data.attributes?.size}</Typography>
                    </Stack>
                  </Box>
                  <Box>
                    {/* Tracking Details Accordion */}
                    <CustomAccordion id={`tracking-${data.id}`} title="Tracking details" expanded={expanded === `tracking-${data.id}`} onChange={handleAccordionChange(`tracking-${data.id}`)}>
                      <Box>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                          <Typography variant="body1" sx={{ fontWeight: "bold", display: "flex" }}>
                            Track Id : <Typography variant="body1">{data.tracking_details.tracking_id}</Typography>
                          </Typography>
                          <IconButton onClick={() => textCopy(data.tracking_details.tracking_id)}>
                            <ContentCopy sx={{ fontSize: "18px" }} />
                          </IconButton>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                          <Typography variant="body1" color="success.main" sx={{ fontWeight: "bold" }}>
                            <a href={data.tracking_details.tracking_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                              Tracking link
                            </a>
                          </Typography>
                          <IconButton onClick={() => textCopy(data.tracking_details.tracking_link)}>
                            <ContentCopy sx={{ fontSize: "18px" }} />
                          </IconButton>
                        </Stack>
                      </Box>
                    </CustomAccordion>

                    {/* Order Details Accordion */}
                    <CustomAccordion id={`order-${data.id}`} title="Order Details" expanded={expanded === `order-${data.id}`} onChange={handleAccordionChange(`order-${data.id}`)}>
                      <Box>
                        <Stack spacing={1}>
                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Order date
                            </Typography>
                            <Typography variant="body1">{data.order_date}</Typography>
                          </Stack>
                          <Divider />

                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Order id
                            </Typography>
                            <Typography variant="body1">{data.id}</Typography>
                          </Stack>
                          <Divider />

                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Price ({data.quantity} Quantity)
                            </Typography>
                            <Typography variant="body1">{data.discountPrice} </Typography>
                          </Stack>
                          <Divider />

                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Shipping
                            </Typography>
                            <Typography variant="body1">₹ {data.delivery_charges}</Typography>
                          </Stack>
                          <Divider />

                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Total
                            </Typography>
                            <Typography variant="body1">₹{data.discountPrice + data.delivery_charges}</Typography>
                          </Stack>
                          <Divider />

                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Grand Total
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              ₹{(data.discountPrice + data.delivery_charges) * data.quantity}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </CustomAccordion>

                    {/* Order Address */}
                    <CustomAccordion id={`address-${data.id}`} title="Shipping Address" expanded={expanded === `address-${data.id}`} onChange={handleAccordionChange(`address-${data.id}`)}>
                      <Box>{/* <Displayaddress address={data.address} /> */}</Box>
                    </CustomAccordion>

                    {/* Order Ratings */}
                    <CustomAccordion id={`rating-${data.id}`} title="Order Ratings" expanded={expanded === `rating-${data.id}`} onChange={handleAccordionChange(`rating-${data.id}`)}>
                      <Box>
                        <Typography variant="body1">Rate this product</Typography>
                        <GiveRatings
                          value={productRating.product_id === data.product_id ? productRating.rat : data.rating}
                          setValue={(newRating) => handleProductRatingChange(data.product_id, newRating)} // Correct type handling
                        />

                        {/* <GiveRatings value={productRating.rat} setValue={setRatingValue} /> */}
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                          <Button variant="contained" onClick={() => handleRatingSubmit(data.product_id)}>
                            Submit
                          </Button>
                        </Box>
                      </Box>
                    </CustomAccordion>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Order;
