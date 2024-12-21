import { Box } from "@mui/material";

import { categoriesData } from "@/data/categories";
import { productData } from "@/data/product";
import { brands } from "@/data/brands";
// import { title } from "process";
import { ProductCard } from "@/components/card";
import CategoryCard from "@/components/card/CategoryCard";
import { useNavigate } from "react-router-dom";
import { storesData } from "@/data/stores";
import { Sliderview } from "@/components/container";
import { Icategories } from "@/store/reducers/category/type";
import { Ibrands } from "@/store/reducers/brand/type";
import { IstoresData } from "@/store/reducers/shop/type";
import { Iproduct } from "@/store/reducers/product/type";
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
    <Box>
      <Sliderview title="Categories" scrollnumber={200} navigateTo="/display/categorie">
        {categoriesData.map((item: Icategories, index) => (
          <Box key={index} height={"auto"}>
            <CategoryCard src={item.image} label={item.label} onClick={() => navigate(`/product/categorie/${item.id}`)} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Brands" scrollnumber={200} navigateTo="/display/brand">
        {brands.map((item: Ibrands, index) => (
          <Box key={index}>
            <CategoryCard src={item.logo} label={item.label} onClick={() => navigate(`/product/brand/${item.id}`)} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Stores" scrollnumber={200} navigateTo="/display/store">
        {storesData.map((item: IstoresData, index: number) => (
          <Box key={index}>
            <CategoryCard src={item.logo ? item.logo : item.image} label={item.store_name} onClick={() => navigate(`/store_details/${item.id}`)} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Products" scrollnumber={250} navigateTo={"/product"}>
        {productData.map((p: Iproduct, index: number) => (
          <Box key={index} sx={{ minWidth: "200px", mx: 1 }}>
            <ProductCard data={p} />
          </Box>
        ))}
      </Sliderview>
    </Box>
  );
};

export default Home;
