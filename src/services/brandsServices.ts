import { baseInstance } from "@/axios/axios.config";
import { BRAND } from "@/utils/constants";

// brands
export const brandsAPI = async (data: { search: string }) => {
  let url = `${BRAND}`;

  const params = [];
  if (data?.search) {
    params.push(`search=${data?.search}`);
  }

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }
  return await baseInstance.get(url);
};
