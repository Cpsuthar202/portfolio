import { ILoginSchema, ILoginSchemaErr } from "@/store/reducers/auth/type";
import { validateNumber, validatePassword } from "../validateFields";

export const validateFields = (data: ILoginSchema) => {
  const err: ILoginSchemaErr = {};
  let isValid = true;

  // Validate phone number
  const phoneValidation = validateNumber(data.phone_number);
  if (!phoneValidation.isValid) {
    isValid = false;
    err.phone_number = phoneValidation.err.phone_number;
  }

  // Validate password
  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.isValid) {
    isValid = false;
    err.password = passwordValidation.err.password;
  }

  return { isValid, err };
};
