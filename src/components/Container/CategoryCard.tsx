import { Box, Typography } from "@mui/material";
import Image from "../image/Image";
import { useNavigate } from "react-router-dom";

interface ICategoryCard {
  src: string;
  label: string; // Updated to "label" for correct spelling
}

export const CategoryCard: React.FC<ICategoryCard> = ({ src, label }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: "90%", m: 1, borderRadius: "12px", overflow: "hidden", border: 1, borderColor: "secondary.main", cursor: "pointer" }}
      onClick={() => navigate("/product", { state: { label: [label] } })}
    >
      <Box sx={{ height: "100px", p: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image src={src} alt="image" style={{ height: "100%", border: 1, backgroundColor: "#a29494", borderRadius: "10px" }} />
      </Box>
      <Typography
        variant="subtitle1"
        color="primary"
        sx={{
          textAlign: "center",
          px: 2,
          whiteSpace: "nowrap", // Prevent text wrapping
          overflow: "hidden", // Hide overflow
          // textOverflow: "ellipsis", // Show ellipsis if the text is too long
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
