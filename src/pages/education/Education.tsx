import { Box, Chip, Typography } from "@mui/material";
import educationsData from "@/data/educations.json";

const Education = () => {
  return (
    <Box sx={{}}>
      <Chip label="Education" sx={{ bgcolor: "#030712", p: 1, fontWeight: 600, color: "#ffffff", mb: 2 }} />
      {educationsData.education.map((e) => (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 2 }}>
          <Typography variant="subtitle2" color="#ffffff">
            {e.degree}
          </Typography>
          <Typography variant="body1" color="#DFE1E3">
            {e.institution}
          </Typography>
          <Typography variant="body1" color="#DFE1E3">
            {e.location}
          </Typography>
          <Typography variant="body1" color="#DFE1E3">
            {e.year}
          </Typography>
          <Typography variant="body1" color="#DFE1E3">
            {e.percentage}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
