import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { getcategories } from "@/store/reducers/category/service";
import { getbrands } from "@/store/reducers/brand/service";
import { getshops } from "@/store/reducers/shop/service";
import { ICategoriesResponse } from "@/store/reducers/category/type";
import { IBrandsResponse } from "@/store/reducers/brand/type";
import { IShopsResponse } from "@/store/reducers/shop/type";

export type DataItem = ICategoriesResponse | IBrandsResponse | IShopsResponse | null;
export type DataItems = (ICategoriesResponse | IBrandsResponse | IShopsResponse)[] | null | undefined;

const useDisplay = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { label } = useParams<{ label: string }>();
  const { categories } = useAppSelector((state) => state.categories);
  const { brands } = useAppSelector((state) => state.brands);
  const { shops } = useAppSelector((state) => state.shops);
  const { searchTitle } = useAppSelector((state) => state.topbar);

  const data: DataItems = label === "categorie" ? categories : label === "brand" ? brands : label === "shop" ? shops : null;

  // Reset search title on component mount
  useEffect(() => {
    dispatch(setSearchTitle(""));

    return () => {
      dispatch(setSearchTitle(""));
    };
  }, [dispatch]);

  const payload: { search: string } = { search: searchTitle };

  const handleGetCategories = async () => {
    try {
      await dispatch(getcategories(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetBrands = async () => {
    try {
      await dispatch(getbrands(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetShops = async () => {
    try {
      await dispatch(getshops(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    if (label === "categorie") handleGetCategories();
    if (label === "brand") handleGetBrands();
    if (label === "shop") handleGetShops();
  }, [label, dispatch, searchTitle]);

  const handleNavigation = (item: DataItem) => {
    if (!item) return;

    const path = label === "shop" ? `/shop_details/${item.id}` : `/product/${label}/${item.id}`;
    navigate(path);
  };

  return {
    variable: { data, label },
    methods: { handleNavigation },
  };
};

export default useDisplay;
