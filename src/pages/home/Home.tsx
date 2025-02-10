import { CommonContainer } from "../utils/index";
import { Box, Typography } from "@mui/material";
import Skills from "../skills/Skills";
import About from "../about/About";
import Experience from "../experience/Experience";
import Project from "../projects/Project";
import Education from "../education/Education";
import Profile from "../profile/Profile";
const Home = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#030712", p: 1, py: 10 }}>
        <CommonContainer>
          <Box>
            <Box sx={{}}>
              <Typography variant="subtitle1" color="#ffffff" sx={{ mb: 2 }}>
                I'am Chandra prakash Suthar
              </Typography>
              <Typography variant="subtitle2" color="#DFE1E3">
                I'am react js developer
              </Typography>
            </Box>
            {/* <Grid container>
              <Grid item md={8} sm={12} xs={12} sx={{ p: 1, display: "grid", placeItems: "center" }}>
                <Box sx={{}}>
                  <Typography variant="subtitle1" color="#ffffff" sx={{ mb: 2 }}>
                    I'am Chandra prakash Suthar
                  </Typography>
                  <Typography variant="subtitle2" color="#DFE1E3">
                    I'am react js developer
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} sm={12} xs={12} sx={{ p: 1, display: "grid", placeItems: "center" }}>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=";lkjh"
                  sx={{ width: "50%" }}
                />
              </Grid>
            </Grid> */}
          </Box>
        </CommonContainer>
      </Box>
      <Box sx={{ bgcolor: "#111827", p: 1, py: 10 }}>
        <CommonContainer>
          <About />
        </CommonContainer>
      </Box>
      <Box sx={{ bgcolor: "#030712", p: 1, py: 10 }}>
        <CommonContainer>
          <Skills />
        </CommonContainer>
      </Box>
      <Box sx={{ bgcolor: "#111827", p: 1, py: 10 }}>
        <CommonContainer>
          <Experience />
        </CommonContainer>
      </Box>
      <Box sx={{ bgcolor: "#030712", p: 1, py: 10 }}>
        <CommonContainer>
          <Project />
        </CommonContainer>
      </Box>
      <Box sx={{ bgcolor: "#111827", p: 1, py: 10 }}>
        <CommonContainer>
          <Education />
        </CommonContainer>
      </Box>
      <Box sx={{ bgcolor: "#030712", p: 1, py: 10 }}>
        <CommonContainer>
          <Profile />
        </CommonContainer>
      </Box>
    </>
  );
};

export default Home;
