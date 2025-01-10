import { baseInstance } from "@/axios/axios.config";
import { CATEGORY } from "@/utils/constants";

// categories
export const categoriesAPI = async () => {
  return await baseInstance.get(CATEGORY);
};
