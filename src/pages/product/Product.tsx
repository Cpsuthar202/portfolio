import { ProductCard } from "@/components/card";
import { Iproduct, productData } from "@/data/product";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { label, id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const { searchTitle } = useAppSelector((state) => state.topbar);

  console.log("title", searchTitle);

  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, []);

  useEffect(() => {
    let FilteredProducts = productData;

    if (label === "categorie") {
      FilteredProducts = productData.filter((product) => product.categories.id === id);
    } else if (label === "brand") {
      FilteredProducts = productData.filter((product) => product.brands.id === id);
    } else if (label === "store") {
      FilteredProducts = productData.filter((product) => product.store.id === id);
    }

    // Apply search filter
    if (searchTitle) {
      FilteredProducts = FilteredProducts.filter((product) => product.teg.some((tag) => tag.toLowerCase().includes(searchTitle.toLowerCase())));
    }

    setFilteredProducts(FilteredProducts);
  }, [label, id, searchTitle]);

  // Check if filtered products list is empty

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Search Input */}
      {/* <TextField label="Search Products" variant="outlined" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ marginBottom: 2 }} /> */}

      {/* Displaying filtered products */}
      <Grid container>
        {filteredProducts.length != 0 ? (
          filteredProducts.map((p: Iproduct, index: number) => (
            <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
            Product Not Found
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Product;
