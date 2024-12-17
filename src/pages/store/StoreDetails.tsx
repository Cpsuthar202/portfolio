import { ProductCard } from "@/components/card";
import { handleShareUrl, Sliderview, WebShare } from "@/components/container";
import Image from "@/components/image/Image";
import { Iproduct } from "@/data/product";
import { Email, Facebook, Instagram, Phone, X, Share } from "@mui/icons-material";
import { Avatar, Box, Container, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useStoreDetails } from "./StoreDetails.hook";
import Displayaddress from "../profile/utility/Displayaddress";
import { DisplayRatings } from "@/components/ratings/Ratings";

const StoreDetails = () => {
  const {
    variable: { store, products },
  } = useStoreDetails();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2, px: 0 }}>
      {/* Store Banner Image */}
      <Image
        src={store?.banner_image || "/default-banner.jpg"}
        alt="Store Banner"
        style={{
          width: "100%",
          borderRadius: "8px",
          objectFit: "contain",
        }}
      />

      {/* Store Details */}
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          src={store?.logo || "/default-logo.png"}
          alt={store?.store_name || "Store Logo"}
          variant="rounded"
          sx={{
            width: 70,
            height: 70,
            margin: "auto",
          }}
        />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {store?.store_name}
        </Typography>
        <Typography variant="body1">{store?.description || "No description available."}</Typography>
      </Box>

      {/* Owner Information */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          // p: 2,
          // border: 1,
        }}
      >
        <Avatar src={store?.owner_photo || "/default-owner.jpg"} alt="Owner" variant="rounded" sx={{ width: 50, height: 50 }} />
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Owner
            <Typography variant="body1">{store?.ownerName || "Not available"}</Typography>
          </Typography>
        </Box>
      </Box>

      <Divider />
      {/* Contact Information */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Contact Information
        </Typography>
        <Stack direction="row" alignItems="center">
          <Tooltip title="Email">
            <IconButton aria-label="Email" sx={{ color: "primary.main" }} onClick={() => store?.contact?.email && (window.location.href = `mailto:${store.contact.email}`)}>
              <Email />
            </IconButton>
          </Tooltip>
          <Typography variant="body1">{store?.contact?.email || "N/A"}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Tooltip title="Phone">
            <IconButton aria-label="Phone" sx={{ color: "primary.main" }} onClick={() => store?.contact?.phone && (window.location.href = `tel:${store.contact.phone}`)}>
              <Phone />
            </IconButton>
          </Tooltip>
          <Typography variant="body1">{store?.contact?.phone || "N/A"}</Typography>
        </Stack>
      </Box>

      <Divider />
      {/* Address */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Address
        </Typography>
        <Displayaddress address={store?.address} />
      </Box>

      <Divider />
      {/* Social Media Links */}
      <Box sx={{}}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Follow Us
        </Typography>
        {store?.socialMedia?.facebook && (
          <Tooltip title="Facebook">
            <IconButton aria-label="Facebook" sx={{ color: "#3b5998" }} onClick={() => handleShareUrl({ url: store?.socialMedia?.facebook })}>
              <Facebook sx={{ fontSize: "18px" }} />
            </IconButton>
          </Tooltip>
        )}
        {store?.socialMedia?.twitter && (
          <Tooltip title="Twitter">
            <IconButton aria-label="Twitter" sx={{ color: "#1DA1F2" }} onClick={() => handleShareUrl({ url: store.socialMedia?.twitter })}>
              <X sx={{ fontSize: "18px" }} />
            </IconButton>
          </Tooltip>
        )}
        {store?.socialMedia?.instagram && (
          <Tooltip title="Instagram">
            <IconButton aria-label="Instagram" sx={{ color: "#C13584" }} onClick={() => handleShareUrl({ url: store?.socialMedia?.instagram })}>
              <Instagram sx={{ fontSize: "18px" }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Divider />
      {/* Share Button */}
      <Box>
        <Stack direction="row" alignItems="center">
          <WebShare text={store?.store_name} url={`store_details/${store?.id}`}>
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
      {/* Ratings */}
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Ratings
        </Typography>
        <DisplayRatings rat={store?.rating} totalRaters={store?.rating} />
      </Box>

      <Divider />
      {/* Products */}
      {products?.length > 0 && (
        <Sliderview title="Products" scrollnumber={250} navigateTo={`/product/store/${store?.id}`}>
          {products.map((product: Iproduct, index: number) => (
            <Box key={index} sx={{ minWidth: "200px", mx: 1 }}>
              <ProductCard data={product} />
            </Box>
          ))}
        </Sliderview>
      )}
    </Container>
  );
};

export default StoreDetails;
