import CategoryCard from "@/components/Container/CategoryCard";
import { brands, Ibrands } from "@/data/brands";
import { categoriesData, Icategories } from "@/data/categories";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const Display: React.FC = () => {
  const { label } = useParams<{ label: string }>();

  if (label === "categories") {
    return (
      <Box>
        <Grid container>
          {categoriesData.map((category: Icategories, index: number) => (
            <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
              <Box sx={{ display: "grid", placeItems: "center" }}>
                <CategoryCard src={category.image} label={category.label} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (label === "brands") {
    return (
      <Box>
        <Grid container>
          {brands.map((brand: Ibrands, index: number) => (
            <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
              <Box sx={{ display: "grid", placeItems: "center" }}>
                <CategoryCard src={brand.logo} label={brand.label} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return <>dfgh</>;
};

export default Display;
