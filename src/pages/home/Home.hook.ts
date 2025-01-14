import { getbrands } from "@/store/reducers/brand/service";
import { getcategories } from "@/store/reducers/category/service";
import { getproducts } from "@/store/reducers/product/service";
import { IproductPayload } from "@/store/reducers/product/type";
import { getshops } from "@/store/reducers/shop/service";
import { getwish } from "@/store/reducers/wish/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products } = useAppSelector((state) => state.products);
  const { brands } = useAppSelector((state) => state.brands);
  const { categories } = useAppSelector((state) => state.categories);
  const { shops } = useAppSelector((state) => state.shops);
  const handleGetWish = async () => {
    try {
      await dispatch(getwish()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetProducts = async () => {
    try {
      const payload: IproductPayload = {
        limit: 20,
        page: 1,
      };
      await dispatch(getproducts(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetCategories = async () => {
    try {
      await dispatch(getcategories(null)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetBrands = async () => {
    try {
      await dispatch(getbrands(null)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetShops = async () => {
    try {
      await dispatch(getshops(null)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetWish();
    handleGetProducts();
    handleGetCategories();
    handleGetBrands();
    handleGetShops();
  }, []);
  return {
    variable: { navigate, products, brands, categories, shops },
    methods: {},
  };
};
