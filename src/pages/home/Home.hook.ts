import { getwish } from "@/store/reducers/wish/service";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export const useHome = () => {
  const dispatch = useAppDispatch();
  const handleGetWish = async () => {
    try {
      await dispatch(getwish()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetWish();
  }, []);
  return {
    variable: {},
    methods: {},
  };
};
