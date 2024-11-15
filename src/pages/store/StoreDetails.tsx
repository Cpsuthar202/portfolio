import { ProductCard } from "@/components/card";
import { handleShareUrl, Sliderview } from "@/components/Container";
import Image from "@/components/image/Image";
import { Iproduct } from "@/data/product";
import { Email, Facebook, Instagram, Phone, X } from "@mui/icons-material";
import { Avatar, Box, Container, Divider, IconButton, Rating, Typography } from "@mui/material";
import { useStoreDetails } from "./StoreDetails.hook";

const StoreDetails = () => {
  const {
    variable: { store, products },
  } = useStoreDetails();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Image src={store?.banner_image} alt="image" style={{ height: "200", borderRadius: "5px" }} />

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Avatar src={store?.logo} alt={store?.store_name} variant="rounded" sx={{ width: 100, height: 100, margin: "auto" }} />
        <Typography variant="subtitle1">{store?.store_name}</Typography>
      </Box>
      <Typography variant="body1">{store?.description}</Typography>

      <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={store?.owner_photo} alt="Owner" variant="rounded" sx={{ width: 70, height: 70 }} />
        <Typography variant="subtitle2">Owner: {store?.ownerName}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Contact Information</Typography>

      <Typography variant="subtitle2">
        <IconButton aria-label="Email" sx={{ color: "primary.main" }} onClick={() => (window.location.href = `mailto:${store?.contact.email}`)}>
          <Email />
        </IconButton>
        {store?.contact.email},
      </Typography>
      <Typography variant="subtitle2">
        <IconButton aria-label="Phone" sx={{ color: "primary.main" }} onClick={() => (window.location.href = `tel::${store?.contact.phone}`)}>
          <Phone />
        </IconButton>
        {store?.contact.phone},
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Address</Typography>
      <Typography variant="subtitle2">
        {store?.address.street}, {store?.address.city}, {store?.address.state}, {store?.address.zipCode}, {store?.address.country}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Follow Us</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton aria-label="Facebook" sx={{ color: "primary.main" }} onClick={() => handleShareUrl({ url: store?.socialMedia?.facebook })}>
          <Facebook />
        </IconButton>
        <IconButton aria-label="X" sx={{ color: "primary.main" }} onClick={() => handleShareUrl({ url: store?.socialMedia?.twitter })}>
          <X />
        </IconButton>
        <IconButton aria-label="Instagram" sx={{ color: "primary.main" }} onClick={() => handleShareUrl({ url: store?.socialMedia?.instagram })}>
          <Instagram />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Ratings & Reviews</Typography>
      <Rating value={store?.rating} precision={0.5} readOnly />
      <Typography variant="subtitle2">{store?.rating}</Typography>

      <Divider sx={{ my: 1 }} />
      <Sliderview title="Products" scrollnumber={250} navigateTo={`/product/store/${store?.id}`}>
        {products.map((p: Iproduct, index: number) => (
          <Box key={index} sx={{ minWidth: "200px", mx: 1 }}>
            <ProductCard data={p} />
          </Box>
        ))}
      </Sliderview>
    </Container>
  );
};

export default StoreDetails;
