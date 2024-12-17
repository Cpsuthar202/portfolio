import { Iaddress } from "@/data/profile";
import { Box, Typography } from "@mui/material";
import React from "react";
interface DisplayProps {
  address: Iaddress | undefined;
}
const Displayaddress: React.FC<DisplayProps> = ({ address }) => {
  console.log("Displayaddress");

  return (
    <Box>
      {address?.name && (
        <Typography variant="body1">
          <strong>Name:</strong> {address?.name || "N/A"}
        </Typography>
      )}
      <Typography variant="body1">
        <strong>Landmark:</strong> {address?.landmark || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Apartment:</strong> {address?.apartment || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Area:</strong> {address?.area || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Pincode:</strong> {address?.pincode || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>City:</strong> {address?.city || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>State:</strong> {address?.state || "N/A"}
      </Typography>
      <Typography variant="body1">
        <strong>Country:</strong> {address?.country || "N/A"}
      </Typography>
      {address?.mobile_no && (
        <Typography variant="body1">
          <strong>Mobile No.:</strong> {address?.mobile_no || "N/A"}
        </Typography>
      )}
    </Box>
  );
};

export default Displayaddress;
