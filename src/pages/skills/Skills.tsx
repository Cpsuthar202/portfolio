import { Box, Chip, Grid, Typography } from "@mui/material";
import skillsData from "@/data/skills.json";
import { Image } from "@components/image";

const Skills = () => {
  console.log(skillsData);

  return (
    <Box sx={{}}>
      <Chip label="Skills" sx={{ bgcolor: "#111827", p: 1, fontWeight: 600, color: "#ffffff", mb: 2 }} />
      <Grid container>
        {skillsData.skills.map((e) => (
          <Grid item lg={1} md={1} sm={2} xs={3} sx={{ p: 1 }}>
            <Box
              sx={{
                borderRadius: 2,
                // border: 1,
                borderColor: "#111827",
                p: 1,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Image src={e.logo} alt={e.title} sx={{ width: "100%", borderRadius: 2, overflow: "hidden" }} />
              <Typography variant="body2" color={"#DFE1E3"} sx={{ textAlign: "center", textWrap: "wrap" }}>
                {e.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
