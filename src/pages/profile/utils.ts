import { IProfileResponse, IProfileResponseErr } from "@/store/reducers/profile/type";
import { validatePassword } from "../auth/validateFields";
import { IResetpassword, IResetpasswordErr } from "@/store/reducers/auth/type";

export const validateFieldsforUpdateInformation = (data: IProfileResponse): { isValid: boolean; errors: IProfileResponseErr } => {
  const errors: IProfileResponseErr = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Invalid email format";
  if (!/^\d{10}$/.test(data?.phone_number as string)) errors.phone_number = "Phone number must be 10 digits";
  if (!["male", "female"].includes(data?.gender as string)) errors.gender = "Please select a valid gender";
  if (!data.dob) errors.dob = "Date of birth is required";
  return { isValid: Object.keys(errors).length === 0, errors };
};

export const validateFieldsforUpdatepassword = (data: IResetpassword) => {
  const errors: IResetpasswordErr = {};
  let isValid = true;
  // Validate old password
  const oldPasswordValidation = validatePassword(data.old_password);
  if (!oldPasswordValidation.isValid) {
    isValid = false;
    errors.old_password = oldPasswordValidation.err.password;
  }
  // Validate new password
  const newPasswordValidation = validatePassword(data.new_password);
  if (!newPasswordValidation.isValid) {
    isValid = false;
    errors.new_password = newPasswordValidation.err.password;
  }

  return { isValid, errors };
};
