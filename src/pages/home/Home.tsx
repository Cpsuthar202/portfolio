import { Box } from "@mui/material";

// import { title } from "process";
import { CategoryCard, ProductCard } from "@components/card/index";
import { Sliderview } from "@components/container/index";
import { Iproduct } from "@/store/reducers/product/type";
import { useHome } from "./Home.hook";
import { IBrandsResponse } from "@/store/reducers/brand/type";
import { IShopsResponse } from "@/store/reducers/shop/type";
import { ICategoriesResponse } from "@/store/reducers/category/type";
const Home = () => {
  const {
    variable: { products, brands, categories, shops, navigate },
  } = useHome();
  return (
    <Box>
      <Sliderview title="Categories" scrollnumber={200} navigateTo="/display/categorie">
        {categories?.map((item: ICategoriesResponse, index) => (
          <Box key={index} height={"auto"}>
            <CategoryCard src={item.image} label={item.name} onClick={() => navigate(`/product/categorie/${item.id}`)} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Brands" scrollnumber={200} navigateTo="/display/brand">
        {brands?.map((item: IBrandsResponse, index: number) => (
          <Box key={index}>
            <CategoryCard src={item.image} label={item.name} onClick={() => navigate(`/product/brand/${item.id}`)} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Shops" scrollnumber={200} navigateTo="/display/shop">
        {shops?.map((item: IShopsResponse, index: number) => (
          <Box key={index}>
            <CategoryCard src={item.logo ? item.logo : item.shop_image} label={item.shop_name} onClick={() => navigate(`/shop_details/${item.id}`)} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Products" scrollnumber={250} navigateTo={"/product"}>
        {products?.list?.map((p: Iproduct, index: number) => (
          <Box key={index} sx={{ minWidth: "200px", mx: 1 }}>
            <ProductCard data={p} />
          </Box>
        ))}
      </Sliderview>
    </Box>
  );
};

export default Home;
