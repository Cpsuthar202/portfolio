import Product from "@/data/products.json";
export const useHome = () => {
  const productslist = Product;

  return {
    variable: { productslist },
    methods: {},
  };
};
