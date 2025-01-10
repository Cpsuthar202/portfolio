import { getshopsbyid } from "@/store/reducers/shop/service";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useShopDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { shop } = useAppSelector((state) => state.shops);
  const handleGetShops = async () => {
    try {
      await dispatch(getshopsbyid(id as string)).unwrap();
    } catch (error: any) {
      console.warn(error?.message);
    }
  };

  useEffect(() => {
    handleGetShops();
  }, []);

  return {
    variable: { shop },
    methods: {},
  };
};
