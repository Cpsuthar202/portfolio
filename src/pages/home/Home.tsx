import { Box } from "@mui/material";

import { categoriesData, Icategories } from "@/data/categories";
import { Iproduct, productData } from "@/data/product";
import { brands, Ibrands } from "@/data/brands";
// import { title } from "process";
import { ProductCard } from "@/components/card";
import Sliderview from "../../components/Container/Sliderview";
import CategoryCard from "@/components/card/CategoryCard";
import { IshopsData, shopsData } from "@/data/shops";
const Home = () => {
  // const dispatch = useAppDispatch();

  // const [titleData, setTitleData] = useState<string>("");
  // const send = () => {
  //   dispatch(setTitle(titleData));
  //   setTitleData("");
  // };

  // const backgroundImage = getInitialTheme() ? ChatBgImg : chekedIcon;

  return (
    <Box>
      <Sliderview title="Categories" scrollnumber={200} navigateTo="/display/categories">
        {categoriesData.map((item: Icategories, index) => (
          <Box key={index}>
            <CategoryCard src={item.image} label={item.label} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Brands" scrollnumber={200} navigateTo="/display/brands">
        {brands.map((item: Ibrands, index) => (
          <Box key={index}>
            <CategoryCard src={item.logo} label={item.label} />
          </Box>
        ))}
      </Sliderview>

      <Sliderview title="Shops" scrollnumber={200} navigateTo="/display/shop">
        {shopsData.map((item: IshopsData, index) => (
          <Box key={index}>
            <CategoryCard src={item.logo ? item.logo : item.image} label={item.shop_name} />
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
