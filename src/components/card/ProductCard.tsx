import React from "react";
import { Typography, IconButton, Box, Stack, Chip } from "@mui/material";
import { FavoriteBorder, Share } from "@mui/icons-material";
import { Iproduct } from "@/data/product";
import Image from "../image/Image";
import { trimTextToWordLimit } from "../utils/textUtils";
import { useNavigate } from "react-router-dom";
import { DisplayRatings } from "../ratings/Ratings";
import { WebShare } from "../container";
import { mColor } from "@color";
import { useResponsiveScreens } from "../mediaQuery/useResponsiveScreens";
import { useProduct } from "@/pages/product/Product.hook";

interface IProductCard {
  data: Iproduct;
  bastSellingNo?: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({ data, bastSellingNo }) => {
  const navigate = useNavigate();
  const { isSmScreen } = useResponsiveScreens();
  const {
    methods: { handleToWishlist },
  } = useProduct();

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        // boxShadow: 1,
        border: 1,
        borderColor: "secondary.main",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ position: "relative", p: 1 }}>
        {/* Product Image */}
        <Image
          src={data.images[0]}
          alt={data.title}
          style={{ width: "100%", height: "200px", borderRadius: 2, opacity: data.stock === 0 ? 0.6 : 1 }}
          onClick={() => navigate(`/product_details/${data.id}`)}
        />
        {/* Favorite and Share Icons */}
        <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", top: 10, right: 10 }}>
          <IconButton aria-label="favorite" size="small" onClick={() => handleToWishlist(data.id)}>
            <FavoriteBorder />
          </IconButton>
          <WebShare text={data.title} url={`product_details/${data.id}`}>
            <IconButton aria-label="share" size="small">
              <Share />
            </IconButton>
          </WebShare>
        </Box>
        {/* Best Selling and Sold Out Labels */}
        {data.bestSelling && (
          <Chip
            label={bastSellingNo ? `# ${data?.bestSelling_number}` : "Best Selling"}
            color="warning"
            size="small"
            sx={{ borderRadius: "0 0 5px 0", position: "absolute", top: 0, left: 0, color: mColor.white, fontSize: isSmScreen ? "10px" : "13px" }}
            onClick={() => navigate("/best_selling")}
          />
        )}
        {data.stock === 0 && <Chip label="Sold Out" color="error" size="small" sx={{ borderRadius: "0 5px 0 0", position: "absolute", bottom: 0, left: 0, fontSize: isSmScreen ? "10px" : "13px" }} />}
        {/* Sold Out Diagonal Label */}
        {/* {data.stock != 0 && (
          <Typography
            variant="subtitle2"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-45deg)",
              color: "error.main",
              px: 2,
              py: 0.5,
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
            }}
          >
            ---- Sold Out ----
          </Typography>
        )} */}
      </Box>
      {/* Product Details */}
      <Box sx={{ p: 2, bgcolor: "secondary.main", height: "100%", cursor: "pointer" }} onClick={() => navigate(`/product_details/${data.id}`)}>
        {/* Title */}
        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
          {trimTextToWordLimit(data.title, 40)}
        </Typography>

        {/* Ratings */}
        <DisplayRatings rat={data.ratings.rat} totalRaters={data.ratings.totalRaters} />

        {/* Price Section */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="subtitle2" color="textPrimary">
            ₹{data.discountPrice}
          </Typography>
          {data.discountPercentage !== 0 && (
            <>
              <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
                ₹{data.mrp}
              </Typography>
              <Typography variant="body1" color="success.main">
                {data.discountPercentage}% off
              </Typography>
            </>
          )}
        </Stack>
        {/* <Button variant="outlined" color="primary" fullWidth>
          Add to cart
        </Button> */}
      </Box>
    </Box>
  );
};
