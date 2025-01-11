import { productData } from "@/data/product";
import { Iproduct } from "@/store/reducers/product/type";

export const useBestSelling = () => {
  const prodect: Iproduct[] = productData.filter((product: Iproduct) => product.best_selling).sort((a, b) => (a.bestSelling_number ?? 0) - (b.bestSelling_number ?? 0));
  return {
    variable: { prodect },
    methods: {},
  };
};
