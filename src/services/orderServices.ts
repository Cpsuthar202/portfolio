import { apiInstance } from "@/axios/axios.config";
import { IbuyPayload, IOrderPayload } from "@/store/reducers/order/type";
import { ORDER } from "@/utils/constants";

// cart
export const postorderAPI = async (data: IOrderPayload) => {
  const url = `${ORDER}/create`;
  return await apiInstance.post(url, { ...data });
};
export const postbuyorderAPI = async (data: IbuyPayload) => {
  const url = `${ORDER}/buy`;
  return await apiInstance.post(url, { ...data });
};

export const postratorderAPI = async (data: { id: string; rating: number | null | undefined }) => {
  const url = `${ORDER}/rate`;

  return await apiInstance.post(url, { ...data });
};

export const orderAPI = async () => {
  return await apiInstance.get(ORDER);
};
