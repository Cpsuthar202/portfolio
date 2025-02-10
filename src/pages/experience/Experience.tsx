import { Box, Chip, Typography } from "@mui/material";
import experiencesData from "@/data/experiences.json";

const Experience = () => {
  return (
    <Box sx={{}}>
      <Chip label="Experience" sx={{ bgcolor: "#030712", p: 1, fontWeight: 600, color: "#ffffff", mb: 2 }} />
      {experiencesData.experience.map((e) => (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="subtitle2" color="#ffffff">
            {e.title}
          </Typography>
          <Typography variant="body1" color="#ffffff">
            {e.company}
          </Typography>
          <Typography variant="body1" color="#ffffff">
            {e.location}
          </Typography>
          <Typography variant="body1" color="#ffffff">
            {e.date}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, ml: 3 }}>
            {e.description.map((e) => (
              <Typography variant="body1" color="#DFE1E3">
                - {e}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
