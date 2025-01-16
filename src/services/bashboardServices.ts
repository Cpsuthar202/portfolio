import { baseInstance } from "@/axios/axios.config";
import { DASHBOARD } from "@/utils/constants";

export const bashboardAPI = async () => {
  return await baseInstance.get(DASHBOARD);
};
