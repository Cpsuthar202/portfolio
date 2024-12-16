import React from "react";
import { Avatar, Box, Divider, Container, Typography, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useProfile } from "./Profile.hook";
import Displayaddress from "./utility/Displayaddress";

const Profile: React.FC = () => {
  const {
    variables: { userData, defaultAddress },
    methods: { handleAddress, handleUpdatePassword, handleUpdateInformation },
  } = useProfile();

  return (
    <Container sx={{}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
            Information
          </Typography>
          <IconButton onClick={handleUpdateInformation}>
            <Edit />
          </IconButton>
        </Box>
        <Avatar src={userData.profile_url} alt="Owner" variant="rounded" sx={{ width: 70, height: 70 }} />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {userData.name}
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Email Address
          {userData.email ? (
            <Typography variant="body1"> {userData.email}</Typography>
          ) : (
            <Typography variant="body1" color="error">
              Add Email
            </Typography>
          )}
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Mobile Number
          {userData.phone_number ? (
            <Typography variant="body1"> {userData.phone_number}</Typography>
          ) : (
            <Typography variant="body1" color="error">
              Add Phone Number
            </Typography>
          )}
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Gender
          {userData.gender ? (
            <Typography variant="body1"> {userData.gender}</Typography>
          ) : (
            <Typography variant="body1" color="error">
              Add Gender
            </Typography>
          )}{" "}
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Date of Birth
          {userData.dob ? (
            <Typography variant="body1"> {userData.dob}</Typography>
          ) : (
            <Typography variant="body1" color="error">
              Add Date of Birth
            </Typography>
          )}
        </Typography>
        <Divider />

        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Update Password
            </Typography>
            <IconButton onClick={handleUpdatePassword}>
              <Edit />
            </IconButton>
          </Box>
          <Typography variant="body1">******** </Typography>
        </Box>
        <Divider />

        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Address
            </Typography>
            <IconButton onClick={handleAddress}>
              <Edit />
            </IconButton>
          </Box>
          <Displayaddress address={defaultAddress} />
        </Box>

        <Divider />
      </Box>
    </Container>
  );
};

export default Profile;
