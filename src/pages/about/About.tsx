import { Box, Button, Container, Typography } from "@mui/material";
import { Instagram, Download } from "@mui/icons-material";
import pdf from "@/data/Catalogue.pdf";
import abort from "@/data/about.json";

import { handleShareUrl } from "@components/container";
const About = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        About
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {abort.about.map((a) => (
          <Typography variant="subtitle2" sx={{}}>
            {a}
          </Typography>
        ))}
      </Box>
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
