import { apiInstance } from "@/axios/axios.config";
import { IcartPayload } from "@/store/reducers/cart/type";
import { CART } from "@/utils/constants";

// cart
export const postcartAPI = async (data: IcartPayload) => {
  const url = `${CART}/create`;
  return await apiInstance.post(url, { ...data });
};

export const cartAPI = async () => {
  return await apiInstance.get(CART);
};

export const postremovecartAPI = async (id: string) => {
  const url = `${CART}/remove/${id}`;
  return await apiInstance.post(url);
};
