import { getproducts } from "@/store/reducers/product/service";
import { IproductPayload } from "@/store/reducers/product/type";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export const useBestSelling = () => {
  // const prodect: Iproduct[] = productData.filter((product: Iproduct) => product.best_selling).sort((a, b) => (a.bestSelling_number ?? 0) - (b.bestSelling_number ?? 0));

  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const handleGetProducts = async () => {
    try {
      const payload: IproductPayload = {
        limit: 20,
        page: 1,
        best_selling: true,
      };
      await dispatch(getproducts(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  return {
    variable: { products },
    methods: {},
  };
};
