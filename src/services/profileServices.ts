import { apiInstance } from "@/axios/axios.config";
import { IProfileResponse } from "@/store/reducers/profile/type";
import { PROFILE } from "@/utils/constants";

// get profile
export const profileAPI = async () => {
  return await apiInstance.get(PROFILE);
};
// update profile
export const updateprofileAPI = async (data: IProfileResponse) => {
  const url = `${PROFILE}/update`;
  console.log(url);

  return await apiInstance.put(url, { ...data });
};
