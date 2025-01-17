import { Container, Grid } from "@mui/material";

import { ProductCard } from "@components/card";
import { Image } from "@components/image/index";
import { useHome } from "./Home.hook";
import { Circular } from "@components/loader/index";
const Home = () => {
  const {
    variable: { productslist },
    // methods: {},
  } = useHome();

  console.log(productslist);

  if (!productslist) {
    return <Circular />;
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2, px: 0 }}>
      <Image src="https://cpsuthar202.github.io/Gold_Wing_Cooler/image/poster.png" alt="hero" />
      <Grid container>
        {productslist &&
          productslist?.map((p, index) => (
            <Grid item key={index} lg={3} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
