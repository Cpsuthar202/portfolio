import CategoryCard from "@/components/card/CategoryCard";
import { brands, Ibrands } from "@/data/brands";
import { categoriesData, Icategories } from "@/data/categories";
import { IstoresData, storesData } from "@/data/stores";
// import { IstoressData, storesData } from "@/data/stores";
import { Box, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Display: React.FC = () => {
  const navigate = useNavigate();
  const { label } = useParams<{ label: string }>();
  const getData = () => {
    switch (label) {
      case "categorie":
        return categoriesData;
      case "brand":
        return brands;
      case "store":
        return storesData;
      default:
        return [];
    }
  };

  return (
    <Box>
      <Grid container>
        {getData().map((item: Icategories | Ibrands | IstoresData, index) => (
          <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              {label}
              <CategoryCard
                src={"logo" in item ? item.logo : "image" in item ? item.image : ""}
                label={"label" in item ? item.label : "store_name" in item ? item.store_name : ""}
                onClick={() => navigate(`/product/${label}/${item.id}`)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Display;
