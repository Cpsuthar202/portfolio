import { apiInstance } from "@/axios/axios.config";
import { IAddress } from "@/store/reducers/address/type";
import { ADDRESS } from "@/utils/constants";

// get address
export const addressAPI = async () => {
  return await apiInstance.get(ADDRESS);
};

// delete address
export const deleteaddressAPI = async (id: string) => {
  const url = `${ADDRESS}/delete/${id}`;
  return await apiInstance.delete(url);
};

//set-default/
export const setdefaultaddressAPI = async (id: string) => {
  const url = `${ADDRESS}/set-default/${id}`;
  return await apiInstance.put(url);
};

//address create/
export const createaddressAPI = async (data: IAddress) => {
  const url = `${ADDRESS}/create`;
  return await apiInstance.post(url, { ...data });
};

//address update/
export const updateaddressAPI = async (data: IAddress) => {
  const url = `${ADDRESS}/update`;
  return await apiInstance.put(url, { ...data });
};
