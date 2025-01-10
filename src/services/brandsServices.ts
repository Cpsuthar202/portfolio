import { baseInstance } from "@/axios/axios.config";
import { BRAND } from "@/utils/constants";

// brands
export const brandsAPI = async () => {
  return await baseInstance.get(BRAND);
};
