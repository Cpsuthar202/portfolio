import CategoryCard from "@/components/card/CategoryCard";
import { brands, Ibrands } from "@/data/brands";
import { categoriesData, Icategories } from "@/data/categories";
import { IshopsData, shopsData } from "@/data/shops";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const Display: React.FC = () => {
  const { label } = useParams<{ label: string }>();

  const getData = () => {
    switch (label) {
      case "categories":
        return categoriesData;
      case "brands":
        return brands;
      case "shop":
        return shopsData;
      default:
        return [];
    }
  };

  return (
    <Box>
      <Grid container>
        {getData().map((item: Icategories | Ibrands | IshopsData, index) => (
          <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <CategoryCard src={"logo" in item ? item.logo : "image" in item ? item.image : ""} label={"label" in item ? item.label : "shop_name" in item ? item.shop_name : ""} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Display;
