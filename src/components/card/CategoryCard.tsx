import { Box, Typography } from "@mui/material";
import { Image } from "../image";
import { mColor } from "@color";
// import { useNavigate } from "react-router-dom";

interface ICategoryCard {
  src: string | undefined;
  label: string; // Updated to "label" for correct spelling
  onClick: () => void;
}

export const CategoryCard: React.FC<ICategoryCard> = ({ src, label, onClick }) => {
  // const navigate = useNavigate();
  return (
    <Box sx={{ m: 1, borderRadius: 2, overflow: "hidden", width: "95%" }}>
      <Box sx={{ p: 1, border: 1, borderColor: "secondary.main", borderRadius: 2, m: "1px", cursor: "pointer" }} onClick={onClick}>
        <Typography
          variant="body1"
          // color="primary"
          sx={{
            textAlign: "center",
            px: 2,
            mb: 1,
            whiteSpace: "nowrap", // Prevent text wrapping
            overflow: "hidden", // Hide overflow
            // textOverflow: "ellipsis", // Show ellipsis if the text is too long
          }}
        >
          {label}
        </Typography>

        <Box
          sx={{
            height: "100px",
            width: "fit-content",
            m: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: mColor.white,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image src={src} alt="image" style={{ height: "100%", width: "100%", cursor: "pointer" }} />
        </Box>
      </Box>
      {/* <Box
        sx={{
          bgcolor: "secondary.main",
          // bgcolor: mColor.white,
        }}
        onClick={onClick}
      >
        <Button sx={{ width: "100%", borderRadius: 0 }}>view</Button>
      </Box> */}
    </Box>
  );
};

export default CategoryCard;
