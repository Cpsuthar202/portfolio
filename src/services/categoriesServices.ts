import { baseInstance } from "@/axios/axios.config";
import { CATEGORY } from "@/utils/constants";

// categories
export const categoriesAPI = async (data: { search?: string | null } | null) => {
  let url = `${CATEGORY}`;

  const params = [];
  if (data?.search) {
    params.push(`search=${data?.search}`);
  }

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }
  return await baseInstance.get(url);
};
