import { useState, useEffect } from "react";
import { ProductCard } from "@/components/card/index";
import { Iproduct, productData } from "@/data/product";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const { label = [] } = location.state || {};

  // State to capture search input
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);

  // Convert label to lowercase and trim spaces for consistent matching
  const labelLowerCaseTrimmed = label.map((l: string) => l.trim().toLowerCase());

  // Filter products based on label and searchQuery
  useEffect(() => {
    const filteredList =
      labelLowerCaseTrimmed.length > 0
        ? productData.filter((product) => product.teg.some((tag) => labelLowerCaseTrimmed.some((l: any) => tag.trim().toLowerCase().includes(l) || l.includes(tag.trim().toLowerCase()))))
        : productData;

    // Filter based on the searchQuery if it's not empty
    const finalFilteredProducts = filteredList.filter(
      (product) =>
        // product.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Matching by product name
        product.teg.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) // Matching by tags
    );

    setFilteredProducts(finalFilteredProducts);
  }, [labelLowerCaseTrimmed, searchQuery]);

  // Check if productlist is empty
  if (filteredProducts.length === 0) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="h6">Product Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* Search Input */}
      <TextField
        label="Search Products"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
        sx={{ width: "300px", mb: 2 }}
      />

      {/* Displaying products */}
      <Grid container>
        {filteredProducts.map((p: Iproduct, index: number) => (
          <Grid item key={index} lg={2} md={4} sm={6} xs={6} sx={{ p: 1 }}>
            <ProductCard data={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
