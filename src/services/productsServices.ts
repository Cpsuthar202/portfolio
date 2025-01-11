import { baseInstance } from "@/axios/axios.config";
import { IproductPayload } from "@/store/reducers/product/type";
import { PRODUCT } from "@/utils/constants";

// get product
export const productAPI = async (data: IproductPayload) => {
  let url = `${PRODUCT}`;

  const params = [];
  if (data?.page) {
    params.push(`page=${data?.page}`);
  }
  if (data?.limit) {
    params.push(`limit=${data?.limit}`);
  }
  if (data?.brandId) {
    params.push(`brand_id=${data?.brandId}`);
  }
  if (data?.categoryId) {
    params.push(`category_id=${data?.categoryId}`);
  }
  if (data?.shopId) {
    params.push(`shop_id=${data?.shopId}`);
  }
  if (data?.searchTerm) {
    params.push(`search_term=${data?.searchTerm}`);
  }

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  console.log(url);

  return await baseInstance.get(url);
};

// get product
export const productByIdAPI = async (id: string) => {
  const url = `${PRODUCT}/${id}`;

  console.log(url);

  return await baseInstance.get(url);
};
