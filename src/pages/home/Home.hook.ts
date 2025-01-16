import { getdashboards } from "@/store/reducers/dashboard/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { dashboards } = useAppSelector((state) => state.dashboards);
  console.log(dashboards);

  const handleGetDashboard = async () => {
    try {
      await dispatch(getdashboards()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetDashboard();
  }, []);
  return {
    variable: { navigate, dashboards },
    methods: {},
  };
};
