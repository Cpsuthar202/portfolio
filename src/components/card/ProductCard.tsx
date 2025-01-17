import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { trimTextToWordLimit } from "../utils/textUtils";
import { useNavigate } from "react-router-dom";
import { Share } from "@mui/icons-material";
// import { WebShare } from "../Container/index";
import { Image } from "../image/index";
import { IProduct } from "@/localdatatype/product";
import { WebShare } from "@components/container/index";
// import { Iproduct } from "@/store/reducers/product/type";
// import { useProductDetails } from "@/pages/product/productDetails.hook";

interface IProductCard {
  data: IProduct;
  // bastSellingNo?: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({ data }) => {
  const navigate = useNavigate();
  // const {
  //   variables: {},
  //   methods: {},
  // } = useProductDetails();

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
        <Image src={data?.images[0]} alt={data?.title} style={{ width: "100%", height: "200px", borderRadius: 2 }} onClick={() => navigate(`/product_details?model_name=${data?.model_name}`)} />
        {/* Favorite and Share Icons */}
        <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", top: 10, right: 10 }}>
          <WebShare text={data?.title} url={`product_details?model_name=${data?.model_name}`}>
            <IconButton aria-label="share" size="small">
              <Share />
            </IconButton>
          </WebShare>
        </Box>
        {/* Product Details */}
        <Box sx={{ p: 2, bgcolor: "secondary.main", height: "100%", cursor: "pointer" }} onClick={() => navigate(`/product_details?model_name=${data?.model_name}`)}>
          {/* Title */}
          <Typography variant="subtitle2" sx={{ fontWeight: 500, textAlign: "center" }}>
            {trimTextToWordLimit(data?.title, 40)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
