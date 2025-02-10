import { Box, Chip, Typography } from "@mui/material";
import ProjectsData from "@/data/projects.json";

const Project = () => {
  return (
    <Box>
      <Chip label="Projects" sx={{ bgcolor: "#111827", p: 1, fontWeight: 600, color: "#ffffff", mb: 2 }} />
      {ProjectsData.projects.map((e) => (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 2 }}>
          <Typography variant="subtitle2" color="#ffffff">
            {e.title}
          </Typography>
          <Typography variant="body1" color="#ffffff">
            {e.sub_title}
          </Typography>
          {e.link && (
            <Typography variant="body1" color="#ffffff">
              <a href={e?.link} target="_blank">
                Go to Project
              </a>
            </Typography>
          )}
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

export default Project;
