import { trimTextToWordLimit } from "@/components/utils/textUtils";
import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { GiveRatings } from "@/components/ratings/Ratings";
import { CustomAccordion } from "@/components/accordion";
import { textCopy } from "@/components/copys/textCopy";
import { ContentCopy } from "@mui/icons-material";
import { useOrder } from "./Order.hook";
import { Image } from "@/components/image";
import Displayaddress from "../profile/utility/Displayaddress";
import moment from "moment";

const Order = () => {
  const {
    variable: { orders, navigate, expanded, productRating },
    methods: { handleAccordionChange, handleRatingSubmit, handleProductRatingChange },
  } = useOrder();

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0, pt: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Your Order
        </Typography>
        {orders?.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
            No items in your Order.
          </Typography>
        ) : (
          <Grid container>
            {orders &&
              orders.map((data) => (
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
                    <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
                      <Image src={data?.product?.image} alt={"N/O"} sx={{ height: 50, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data?.product?.id}`)} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ width: "100%" }}>
                          {trimTextToWordLimit(data?.product?.title || "unkon", 100)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      {data?.color && (
                        <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Color :
                          </Typography>
                          <Typography variant="body1">{data?.color}</Typography>
                        </Stack>
                      )}
                      {data?.size && (
                        <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Size:
                          </Typography>
                          <Typography variant="body1">{data?.size}</Typography>
                        </Stack>
                      )}
                    </Box>
                    <Box>
                      {/* Tracking Details Accordion */}
                      {data?.track_id && data?.tracking_link && (
                        <CustomAccordion id={`tracking-${data.id}`} title="Tracking details" expanded={expanded === `tracking-${data.id}`} onChange={handleAccordionChange(`tracking-${data.id}`)}>
                          <Box>
                            {data?.track_id && (
                              <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="body1" sx={{ fontWeight: "bold", display: "flex" }}>
                                  Track Id :
                                  <Typography variant="body1" sx={{ ml: 1 }}>
                                    {data?.track_id}
                                  </Typography>
                                </Typography>
                                <IconButton onClick={() => textCopy(data?.track_id)}>
                                  <ContentCopy sx={{ fontSize: "18px" }} />
                                </IconButton>
                              </Stack>
                            )}
                            {data?.tracking_link && (
                              <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="body1" color="success.main" sx={{ fontWeight: "bold" }}>
                                  <a href={data?.tracking_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    Tracking link
                                  </a>
                                </Typography>
                                <IconButton onClick={() => textCopy(data?.tracking_link || "")}>
                                  <ContentCopy sx={{ fontSize: "18px" }} />
                                </IconButton>
                              </Stack>
                            )}
                          </Box>
                        </CustomAccordion>
                      )}

                      {/* Order Details Accordion */}
                      <CustomAccordion id={`order-${data.id}`} title="Order Details" expanded={expanded === `order-${data.id}`} onChange={handleAccordionChange(`order-${data.id}`)}>
                        <Box>
                          <Stack spacing={1}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Order date
                              </Typography>
                              <Typography variant="body1">{moment(data.order_date).format("DD MMMM YYYY ")}</Typography>
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
                                Payment Method
                              </Typography>
                              <Typography variant="body1">{data.payment_method}</Typography>
                            </Stack>
                            <Divider />

                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                Price ({data.quantity} Quantity)
                              </Typography>
                              <Typography variant="body1">{data?.price} </Typography>
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
                              <Typography variant="body1">₹{data.totel}</Typography>
                            </Stack>
                          </Stack>
                        </Box>
                      </CustomAccordion>

                      {/* Order Address */}
                      <CustomAccordion id={`address-${data.id}`} title="Shipping Address" expanded={expanded === `address-${data.id}`} onChange={handleAccordionChange(`address-${data.id}`)}>
                        <Box>
                          <Displayaddress address={data?.address} />
                        </Box>
                      </CustomAccordion>

                      {/* Order Ratings */}
                      <CustomAccordion id={`rating-${data.id}`} title="Order Ratings" expanded={expanded === `rating-${data.id}`} onChange={handleAccordionChange(`rating-${data.id}`)}>
                        <Box>
                          <Typography variant="body1">Rate this product</Typography>
                          <GiveRatings
                            value={productRating.id === data.id ? productRating.rating : data.rating ?? 0}
                            setValue={(newRating) => handleProductRatingChange(data.id, newRating)} // Correct type handling
                          />
                          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button variant="contained" onClick={() => handleRatingSubmit(data.id)}>
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
