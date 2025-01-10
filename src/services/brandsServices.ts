import { baseInstance } from "@/axios/axios.config";
import { BRAND } from "@/utils/constants";

// API function to login
export const brandsAPI = async () => {
  return await baseInstance.get(BRAND);
};
