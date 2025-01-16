import { Box, Grid, Typography } from "@mui/material";
import { ProductCard } from "@components/card/index";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { getwish } from "@/store/reducers/wish/service";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { wishs } = useAppSelector((state) => state.wishs);

  const handleGetWish = async () => {
    try {
      await dispatch(getwish()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetWish();
  }, []);

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Your Wishlistd
      </Typography>

      <Grid container>
        {wishs?.length == 0 ? (
          <Typography>dfghj</Typography>
        ) : (
          wishs?.map((p, index: number) => (
            // <Typography>{p?.product?.title}</Typography>
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p?.product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Wishlist;
