import Product from "@/data/products.json";
export const useHome = () => {
  const productslist = Product;
  console.log(productslist);

  return {
    variable: { productslist },
    methods: {},
  };
};
