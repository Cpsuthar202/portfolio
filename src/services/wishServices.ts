import { apiInstance } from "@/axios/axios.config";
import { WISH } from "@/utils/constants";

// get wish
export const wishAPI = async () => {
  return await apiInstance.get(WISH);
};

// ADD wish
export const posttogglewishAPI = async (id: string) => {
  const url = `${WISH}/toggle?product_id=${id}`;

  return await apiInstance.post(url);
};
