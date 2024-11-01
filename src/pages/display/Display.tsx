import React, { useEffect } from "react";
import CategoryCard from "@/components/card/CategoryCard";
import { brands, Ibrands } from "@/data/brands";
import { categoriesData, Icategories } from "@/data/categories";
import { IstoresData, storesData } from "@/data/stores";
import { Box, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";

// Define a type for the combined data
type DataItem = Icategories | Ibrands | IstoresData;

const Display: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { label } = useParams<{ label: string }>();

  const { searchTitle } = useAppSelector((state) => state.topbar);

  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, []);

  // Function to fetch data based on the label and filter it by search query
  const getData = (): DataItem[] => {
    let data: DataItem[] = [];

    switch (label) {
      case "categorie":
        data = categoriesData;
        break;
      case "brand":
        data = brands;
        break;
      case "store":
        data = storesData;
        break;
      default:
        data = [];
    }

    // Filter data based on search query (case-insensitive)
    return data.filter((item) => {
      const itemLabel = "label" in item ? item.label : "store_name" in item ? item.store_name : "";
      return itemLabel.toLowerCase().includes(searchTitle.toLowerCase());
    });
  };

  return (
    <Box>
      <Grid container>
        {getData().map((item, index) => (
          <Grid item key={index} xl={1} lg={2} md={2} sm={4} xs={6}>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <CategoryCard
                src={"logo" in item ? item.logo : "image" in item ? item.image : ""}
                label={"label" in item ? item.label : "store_name" in item ? item.store_name : ""}
                onClick={() => {
                  if (label === "store") {
                    navigate(`/store_details/${item.id}`);
                  } else {
                    navigate(`/product/${label}/${item.id}`);
                  }
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Display;
