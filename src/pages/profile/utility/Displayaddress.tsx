import { IAddress } from "@/store/reducers/address/type";
import { Box, Typography } from "@mui/material";
import React, { memo } from "react";

interface DisplayProps {
  address: IAddress | undefined | null;
}

const Displayaddress: React.FC<DisplayProps> = memo(({ address }) => {
  // console.log("Displayaddress");

  // Utility function to render each field
  const renderField = (label: string, value: string | undefined) => (
    <Typography variant="body1" sx={{ my: 0.5 }}>
      <strong>{label}:</strong> {value || "N/A"}
    </Typography>
  );

  return (
    <Box>
      {renderField("Name", address?.name)}
      {address?.landmark && renderField("Landmark", address.landmark)}

      {renderField("Pincode", address?.pincode)}
      {renderField("Line 1", address?.line_1)}
      {address?.line_2 && renderField("Line 2", address.line_2)}
      {renderField("City", address?.city)}
      {renderField("State", address?.state)}
      {renderField("Country", address?.country)}
      {renderField("Mobile No.", address?.mobile_no)}
    </Box>
  );
});

export default Displayaddress;
