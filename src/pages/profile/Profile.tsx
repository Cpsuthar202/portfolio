import React from "react";
import { Avatar, Box, Divider, Container, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

// interface Address {
//   street: string;
//   city: string;
//   state: string;
//   zip: string;
//   country: string;
// }

// interface UserProfileProps {}

const userData = {
  profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
  name: "Chandra prakash suthar",
  email: "jane.doe@example.com",
  phone_number: "7023667323",
  gender: "Male",
  dob: "20-02-1999",
};

const Profile: React.FC = () => {
  // const [newPassword, setNewPassword] = useState("");
  // const [addressData, setAddressData] = useState(userData.address);

  // const handlePasswordChange = () => {
  //   if (newPassword) {
  //     alert("Password changed successfully!");
  //     setNewPassword("");
  //   } else {
  //     alert("Please enter a new password.");
  //   }
  // };

  // const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setAddressData((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <Container sx={{ border: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Personal Information
          </Typography>
          <Edit />
        </Box>

        <Avatar src={userData.profile_url} alt="Owner" variant="rounded" sx={{ width: 70, height: 70 }} />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {userData.name}
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Email Address
          <Typography variant="subtitle2"> {userData.email}</Typography>
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Mobile Number
          <Typography variant="subtitle2"> {userData.phone_number}</Typography>
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Gender
          <Typography variant="subtitle2"> {userData.gender}</Typography>
        </Typography>
        <Divider />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Date of Birth
          <Typography variant="subtitle2"> {userData.dob}</Typography>
        </Typography>
        <Divider />
      </Box>
    </Container>
  );
};

export default Profile;
