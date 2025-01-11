import { baseInstance } from "@/axios/axios.config";
import { SHOP } from "@/utils/constants";

// Get Shops List
export const shopsAPI = async (data: { search: string }) => {
  let url = `${SHOP}`;

  const params = [];
  if (data?.search) {
    params.push(`search=${data?.search}`);
  }

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }
  return await baseInstance.get(url);
};
// Get Shop By Id
export const shopsByIdAPI = async (id: string | null) => {
  const url = `${SHOP}/${id}`;
  return await baseInstance.get(url);
};
