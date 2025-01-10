import { baseInstance } from "@/axios/axios.config";
import { CATEGORY } from "@/utils/constants";

// API function to login
export const categoriesAPI = async () => {
  return await baseInstance.get(CATEGORY);
};
