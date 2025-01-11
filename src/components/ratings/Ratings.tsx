import React from "react";
import { Stack, Rating, Typography } from "@mui/material";

interface DisplayRatingsProps {
  rat: number | undefined | null;
  totalRaters: number | undefined;
}

interface GiveRatingsProps {
  value: number | undefined | null;
  setValue: (newValue: number | null | undefined) => void;
}

export const DisplayRatings: React.FC<DisplayRatingsProps> = ({ rat, totalRaters }) => (
  <Stack direction="row" spacing={0.5} alignItems="center">
    <Rating name="half-rating" value={rat} precision={0.5} readOnly size="small" />
    <Typography variant="body1" sx={{ ml: 1, color: "#555" }}>
      ({totalRaters})
    </Typography>
  </Stack>
);

export const GiveRatings: React.FC<GiveRatingsProps> = ({ value, setValue }) => (
  <Rating
    name="simple-controlled"
    value={value ?? 0} // Use 0 as default value if value is undefined or null
    onChange={(_, newValue) => setValue(newValue)} // Directly update value with newValue
    precision={0.5}
    size="large"
  />
);

// Default export object
const Ratings = { DisplayRatings, GiveRatings };
export default Ratings;
