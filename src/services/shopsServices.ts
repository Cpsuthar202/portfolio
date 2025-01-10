import { baseInstance } from "@/axios/axios.config";
import { IShopPayload } from "@/store/reducers/shop/type";
import { SHOP } from "@/utils/constants";

// Get Shops List
export const shopsAPI = async (data: IShopPayload | null) => {
  let url = `${SHOP}`;

  // Check if key and data are present and append them to the URL accordingly
  const params = [];
  if (data?.id) {
    params.push(`id=${data.id}`);
  }

  // If there are any parameters, join them with '&' and append to the URL
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
