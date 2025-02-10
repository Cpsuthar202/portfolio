import { Box, Chip, Typography } from "@mui/material";
import aboutData from "@/data/about.json";

const About = () => {
  return (
    <Box sx={{}}>
      <Chip label="About" sx={{ bgcolor: "#030712", p: 1, fontWeight: 600, color: "#ffffff" }} />

      <Typography variant="subtitle1" color="#ffffff" sx={{ my: 2 }}>
        {aboutData.title}
      </Typography>
      <Typography variant="subtitle2" color="#DFE1E3">
        {aboutData.description}
      </Typography>
    </Box>
  );
};

export default About;
