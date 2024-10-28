import React from "react";
import { Typography, IconButton, Box, Stack, Chip } from "@mui/material";
import { FavoriteBorder, Share } from "@mui/icons-material";
import { Iproduct } from "@/data/product";
import Image from "../image/Image";
import { trimTextToWordLimit } from "../utils/textUtils";
import { useNavigate } from "react-router-dom";
import Ratings from "../ratings/Ratings";

interface IProductCard {
  data: Iproduct;
}

export const ProductCard: React.FC<IProductCard> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        border: 1,
        borderColor: "secondary.main",
        borderRadius: 2,
        // boxShadow: "1px",
        overflow: "hidden",
        // transition: "0.3s",
        // ":hover": { boxShadow:  "3px" },
      }}
    >
      {/* Product Image */}
      <Box sx={{ position: "relative", p: 1 }}>
        <Image src={data.images[0]} alt={data.title} style={{ width: "100%", height: "200px", borderRadius: 2 }} />
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          <IconButton aria-label="favorite" size="small">
            <FavoriteBorder />
          </IconButton>
          <IconButton aria-label="share" size="small">
            <Share />
          </IconButton>
        </Box>

        {data.bestSelling && <Chip label="best Selling" color="success" size="small" sx={{ borderRadius: "0 0 10px 0", position: "absolute", top: 0, left: 0 }} />}
      </Box>

      {/* Product Details */}
      <Box sx={{ p: 2, bgcolor: "secondary.main", cursor: "pointer" }} onClick={() => navigate(`/Product_details/${data.id}`)}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          {trimTextToWordLimit(data.title, 30)}
        </Typography>

        {/* Ratings */}
        <Ratings rat={data.rating} totalRaters={data.totalRaters} />

        {/* Price Section */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="h6" color="textPrimary">
            ₹{data.discountPrice}
          </Typography>
          {data.discountPercentage != 0 && (
            <>
              <Typography variant="body2" sx={{ textDecoration: "line-through", color: "#888" }}>
                ₹{data.mrp}
              </Typography>

              <Typography variant="body2" color="success.main">
                {data.discountPercentage}% off
              </Typography>
            </>
          )}
        </Stack>

        {/* Colors */}
        {/* {data.colors && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <Typography variant="body2">Colors:</Typography>
            {data.colors.map((color) => (
              <Box
                key={color.code}
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: color.code,
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                }}
              />
            ))}
          </Stack>
        )} */}
      </Box>
    </Box>
  );
};
