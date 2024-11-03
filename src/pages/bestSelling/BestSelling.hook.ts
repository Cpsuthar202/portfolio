import { Iproduct, productData } from "@/data/product";

export const useBestSelling = () => {
  const prodect: Iproduct[] = productData.filter((product: Iproduct) => product.bestSelling).sort((a, b) => (a.bestSelling_number ?? 0) - (b.bestSelling_number ?? 0));
  return {
    variable: { prodect },
    methods: {},
  };
};
