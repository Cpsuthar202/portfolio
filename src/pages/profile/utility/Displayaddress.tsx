import { Iaddress } from "@/data/profile";
import { Box, Typography } from "@mui/material";
import React, { memo } from "react";

interface DisplayProps {
  address: Iaddress | undefined;
}

const Displayaddress: React.FC<DisplayProps> = memo(({ address }) => {
  console.log("Displayaddress");

  // Utility function to render each field
  const renderField = (label: string, value: string | undefined) => (
    <Typography variant="body1" sx={{ my: 0.5 }}>
      <strong>{label}:</strong> {value || "N/A"}
    </Typography>
  );

  return (
    <Box>
      {address?.name && renderField("Name", address.name)}
      {renderField("Landmark", address?.landmark)}
      {renderField("Apartment", address?.apartment)}
      {renderField("Area", address?.area)}
      {renderField("Pincode", address?.pincode)}
      {renderField("City", address?.city)}
      {renderField("State", address?.state)}
      {renderField("Country", address?.country)}
      {address?.mobile_no && renderField("Mobile No.", address.mobile_no)}
    </Box>
  );
});

export default Displayaddress;
