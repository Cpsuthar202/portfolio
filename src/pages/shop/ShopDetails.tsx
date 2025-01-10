import { handleShareUrl, WebShare } from "@/components/container";
import { Image } from "@/components/image";
import { Email, Facebook, Instagram, Phone, X, Share } from "@mui/icons-material";
import { Avatar, Box, Container, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Displayaddress from "../profile/utility/Displayaddress";
import { useShopDetails } from "./ShopDetails.hook";

const StoreDetails = () => {
  const {
    variable: { shop },
  } = useShopDetails();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2, px: 0 }}>
      {/* Store Banner Image */}
      {shop?.banner_image && (
        <Image
          src={shop?.banner_image}
          alt="Store Banner"
          style={{
            width: "100%",
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
      )}

      {/* Store Details */}
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          src={shop?.logo || undefined}
          alt={shop?.shop_name || "Store Logo"}
          variant="rounded"
          sx={{
            width: 70,
            height: 70,
            margin: "auto",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          {!shop?.logo && `${shop?.shop_name?.split(" ")[0][0].toUpperCase() || "?"}`}
          {/* {!store?.logo && `${store?.store_name?.split(" ")[0][0] || "?"} ${store?.store_name?.split(" ")[1]?.[0] || ""}`} */}
        </Avatar>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {shop?.shop_name}
        </Typography>
        {shop?.description && <Typography variant="body1">{shop?.description || "No description available."}</Typography>}
      </Box>

      {/* Owner Information */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          src={shop?.owner_image || undefined}
          alt={shop?.owner_name || "Store Logo"}
          variant="rounded"
          sx={{
            width: 70,
            height: 70,
            // margin: "auto",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          {shop?.owner_name?.split(" ")[0][0].toUpperCase() || "?"}
        </Avatar>

        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Owner
          <Typography variant="subtitle2">{shop?.owner_name || "Not available"}</Typography>
        </Typography>
      </Box>

      <Divider />
      {/* Contact Information */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Contact Information
        </Typography>
        {shop?.contact?.email && (
          <Stack direction="row" alignItems="center">
            <Tooltip title="Email">
              <IconButton aria-label="Email" sx={{ color: "primary.main" }} onClick={() => shop?.contact?.email && (window.location.href = `mailto:${shop.contact.email}`)}>
                <Email />
              </IconButton>
            </Tooltip>
            <Typography variant="body1">{shop?.contact?.email || "N/A"}</Typography>
          </Stack>
        )}
        <Stack direction="row" alignItems="center">
          <Tooltip title="Phone">
            <IconButton aria-label="Phone" sx={{ color: "primary.main" }} onClick={() => shop?.contact?.phone_number && (window.location.href = `tel:${shop.contact.phone_number}`)}>
              <Phone />
            </IconButton>
          </Tooltip>
          <Typography variant="body1">{shop?.contact?.phone_number || "N/A"}</Typography>
        </Stack>
      </Box>

      <Divider />
      {/* Address */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Address
        </Typography>
        <Displayaddress address={shop?.address} />
      </Box>

      <Divider />
      {/* Social Media Links */}
      <Box sx={{}}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Follow Us
        </Typography>
        {shop?.socialMedia?.facebook && (
          <Tooltip title="Facebook">
            <IconButton aria-label="Facebook" sx={{ color: "#3b5998" }} onClick={() => handleShareUrl({ url: shop?.socialMedia?.facebook })}>
              <Facebook />
            </IconButton>
          </Tooltip>
        )}
        {shop?.socialMedia?.twitter && (
          <Tooltip title="Twitter">
            <IconButton aria-label="Twitter" sx={{ color: "#1DA1F2" }} onClick={() => handleShareUrl({ url: shop?.socialMedia?.twitter })}>
              <X />
            </IconButton>
          </Tooltip>
        )}
        {shop?.socialMedia?.instagram && (
          <Tooltip title="Instagram">
            <IconButton aria-label="Instagram" sx={{ color: "#C13584" }} onClick={() => handleShareUrl({ url: shop?.socialMedia?.instagram })}>
              <Instagram />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Divider />
      {/* Share Button */}
      <Box>
        <Stack direction="row" alignItems="center">
          <WebShare text={shop?.shop_name} url={`shop_details/${shop?.id}`}>
            <Tooltip title="Share Store">
              <IconButton aria-label="Share" sx={{ color: "primary.main" }}>
                <Share />
              </IconButton>
            </Tooltip>
          </WebShare>
          <Typography variant="body1"> Share Store Details</Typography>
        </Stack>
      </Box>

      <Divider />
      {/* Products */}
      {/* {products?.length > 0 && (
        <Sliderview title="Products" scrollnumber={250} navigateTo={`/product/store/${shops?.id}`}>
          {products.map((product: Iproduct, index: number) => (
            <Box key={index} sx={{ minWidth: "200px", mx: 1 }}>
              <ProductCard data={product} />
            </Box>
          ))}
        </Sliderview>
      )} */}
    </Container>
  );
};

export default StoreDetails;
