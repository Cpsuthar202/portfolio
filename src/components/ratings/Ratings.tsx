import { Stack, Rating, Typography } from "@mui/material";
import React from "react";
interface RatingsProps {
  rat: number | undefined;
  totalRaters: number | undefined;
}

const Ratings: React.FC<RatingsProps> = ({ rat, totalRaters }) => {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <Rating name="half-rating" value={rat} precision={0.5} readOnly size="small" />
      <Typography variant="body2" sx={{ ml: 1, color: "#555" }}>
        ({totalRaters})
      </Typography>
    </Stack>
  );
};

export default Ratings;
