import React from "react";
import { Avatar, Box, Divider, Container, Typography, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useProfile } from "./Profile.hook"; // Custom hook for profile logic
import Displayaddress from "./utility/Displayaddress"; // Component to display address
import { Circular } from "@components/loader/index";

const Profile: React.FC = () => {
  // Extract variables and methods from the useProfile hook
  const {
    variables: { profile },
    methods: { handleAddress, handleUpdatePassword, handleUpdateInformation },
  } = useProfile();

  if (!profile) {
    return <Circular />;
  }

  return (
    <Container>
      {/* Main container for profile information */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Section: User Information */}
        <SectionHeader title="Information" onEdit={handleUpdateInformation} />
        <Avatar src={profile?.image || undefined} alt={profile?.name?.[0]?.toUpperCase() || "?"} variant="rounded" sx={{ width: 70, height: 70, bgcolor: "primary.main", color: "white" }}>
          {profile?.name?.[0]?.toUpperCase() || "?"}
        </Avatar>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {profile?.name}
        </Typography>
        <Divider />

        {/* Section: Email */}
        <ProfileField label="Email Address" value={profile?.email} onClick={handleUpdateInformation} />
        <Divider />

        {/* Section: Mobile Number */}
        <ProfileField label="Mobile Number" value={profile?.phone_number} onClick={handleUpdateInformation} />
        <Divider />

        {/* Section: Gender */}
        <ProfileField label="Gender" value={profile?.gender} onClick={handleUpdateInformation} />
        <Divider />

        {/* Section: Date of Birth */}
        <ProfileField label="Date of Birth" value={profile?.dob} onClick={handleUpdateInformation} />
        <Divider />

        {/* Section: Update Password */}
        <SectionHeader title="Update Password" onEdit={handleUpdatePassword} />
        <Typography variant="body1">********</Typography>
        <Divider />

        {/* Section: Address */}
        <Box>
          <SectionHeader title="Address" onEdit={handleAddress} />
          {profile?.address ? (
            <Displayaddress address={profile?.address} />
          ) : (
            <Typography variant="body1" color="error" sx={{ cursor: "pointer" }} onClick={handleAddress}>
              Add Address
            </Typography>
          )}
        </Box>
        <Divider />
      </Box>
    </Container>
  );
};

// Helper component for headers with edit functionality
const SectionHeader: React.FC<{ title: string; onEdit: () => void }> = ({ title, onEdit }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "primary.main" }}>
      {title}
    </Typography>
    <IconButton onClick={onEdit}>
      <Edit />
    </IconButton>
  </Box>
);

// Helper component for profile fields
const ProfileField: React.FC<{
  label: string;
  value?: string;
  onClick: () => void;
}> = ({ label, value, onClick }) => (
  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
    {label}
    {value ? (
      <Typography variant="subtitle2">{value}</Typography>
    ) : (
      <Typography variant="body1" color="error" sx={{ cursor: "pointer" }} onClick={onClick}>
        Add {label.split(" ")[0]}
      </Typography>
    )}
  </Typography>
);

export default Profile;
