import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { Instagram, Download } from "@mui/icons-material";
import pdf from "@/data/Catalogue.pdf";
import abort from "@/data/about.json";

import { handleShareUrl } from "@components/Container/index";
const About = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2, px: 0 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Welcome to Gold Wing Cooler
      </Typography>
      {Object.entries(abort.function).map(([sectionTitle, sectionContent]) => (
        <Box key={sectionTitle}>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            {sectionTitle}
          </Typography>
          {sectionContent.map((text, index) => (
            <Typography variant="subtitle2" key={index} sx={{ mx: 2, my: 1 }}>
              {text}
            </Typography>
          ))}
        </Box>
      ))}
      <Divider />
      {(abort.contact.email || abort.contact.phone_1 || abort?.contact?.phone_2 || abort.contact.address) && (
        <Box>
          <Typography variant="subtitle1">Contact Us</Typography>
          <Box sx={{ mx: 2 }}>
            {abort.contact.email && (
              <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                Email -
                <Typography variant="body1" sx={{ cursor: "pointer" }} onClick={() => abort.contact.email && (window.location.href = `mailto:${abort.contact.email}`)}>
                  {abort.contact.email}
                </Typography>
              </Typography>
            )}
            {(abort.contact.phone_1 || abort?.contact?.phone_2) && (
              <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                Phone -
                {abort?.contact?.phone_1 && (
                  <Typography variant="body1" onClick={() => abort.contact.phone_1 && (window.location.href = `tel:${abort.contact.phone_1}`)} sx={{ cursor: "pointer" }}>
                    {abort.contact.phone_1}
                  </Typography>
                )}
                {abort?.contact?.phone_2 && (
                  <Typography variant="body1" onClick={() => abort.contact.phone_2 && (window.location.href = `tel:${abort.contact.phone_2}`)} sx={{ cursor: "pointer" }}>
                    {abort.contact.phone_2}
                  </Typography>
                )}
              </Typography>
            )}

            {abort.contact.address && (
              <Typography variant="subtitle2" sx={{}}>
                Address - <Typography variant="body1">{abort.contact.address}</Typography>
              </Typography>
            )}
          </Box>
        </Box>
      )}

      {abort.contact.map_address && (
        <Box sx={{ height: "200px" }}>
          <iframe src={abort.contact.map_address} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" startIcon={<Instagram />} sx={{ width: "fit-content" }} onClick={() => handleShareUrl({ url: abort.instagram })}>
          Instagram
        </Button>
        <Button variant="contained" href={pdf} download endIcon={<Download />} sx={{ width: "fit-content" }}>
          Catalogue
        </Button>
      </Box>
    </Container>
  );
};

export default About;
