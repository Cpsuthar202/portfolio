import { Box, Button, Grid, Typography } from "@mui/material";

import { categoriesData } from "@/data/categories";
import ScrollableSection from "./utils/ScrollableSection";
import { Iproduct, productData } from "@/data/product";
import { brands } from "@/data/brands";
// import { title } from "process";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/Container";
const Home = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const [titleData, setTitleData] = useState<string>("");
  // const send = () => {
  //   dispatch(setTitle(titleData));
  //   setTitleData("");
  // };

  // const backgroundImage = getInitialTheme() ? ChatBgImg : chekedIcon;

  return (
    <Box sx={{ overflow: "auto", border: 1 }}>
      <ScrollableSection title="Shop By Categories" items={categoriesData.map((c) => ({ src: c.image, label: c.label }))} navigateTo="/display/categories" />;
      <ScrollableSection title="Shop By Brands" items={brands.map((c) => ({ src: c.logo, label: c.label }))} navigateTo="/display/brands" />;
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" color="primary">
            Products
          </Typography>
          <Button variant="text" color="primary" onClick={() => navigate("/product")}>
            View All
          </Button>
        </Box>
        <Box
          // ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            "&::-webkit-scrollbar": { height: "3px" },
            width: "100%",
          }}
        >
          {productData.map((p: Iproduct, index: number) => (
            <Box key={index} sx={{ width: "300px" }}>
              <ProductCard data={p} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
