import { Box, Chip, Typography } from "@mui/material";
import profileData from "@/data/profile.json";

const Profile = () => {
  return (
    <Box>
      <Chip label="Profile" sx={{ bgcolor: "#111827", p: 1, fontWeight: 600, color: "#ffffff", mb: 2 }} />
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography variant="body1" color="#ffffff">
          Full Name -
        </Typography>
        <Typography variant="body1" color="#ffffff">
          {profileData.profile.full_name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography variant="body1" color="#ffffff">
          Email -
        </Typography>
        <Typography variant="body1" color="#ffffff">
          {profileData.profile.email}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography variant="body1" color="#ffffff">
          Contact No -
        </Typography>
        <Typography variant="body1" color="#ffffff">
          {profileData.profile.contact_no}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography variant="body1" color="#ffffff">
          Date of Birth -
        </Typography>
        <Typography variant="body1" color="#ffffff">
          {profileData.profile.date_of_birth}
        </Typography>
      </Box>
      {profileData.profile.links.map((e) => (
        <Typography variant="body1" color="#ffffff" sx={{ m: 1 }}>
          <a href={e?.link} target="_blank">
            {e.label}
          </a>
        </Typography>
      ))}
    </Box>
  );
};

export default Profile;
