import { getproducts } from "@/store/reducers/product/service";
import { IproductPayload } from "@/store/reducers/product/type";
import { getshopsbyid } from "@/store/reducers/shop/service";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useShopDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { shop } = useAppSelector((state) => state.shops);
  const { products } = useAppSelector((state) => state.products);
  const handleGetShops = async () => {
    try {
      await dispatch(getshopsbyid(id as string)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetShops();
  }, []);

  const handleGetProducts = async () => {
    try {
      const payload: IproductPayload = {
        limit: 20,
        page: 1,
        shopId: id,
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
    variable: { shop, products },
    methods: {},
  };
};
