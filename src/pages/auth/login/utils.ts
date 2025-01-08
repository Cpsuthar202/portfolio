// import { ILoginRequest, ILoginRequestErr } from "@/store/reducers/auth/type";
import { ILoginSchema, ILoginSchemaErr } from "@/store/reducers/auth/type";
import { validateEmail, validatePassword } from "../validateFields";

export const validateFields = (data: ILoginSchema) => {
  const err: ILoginSchemaErr = {};
  let isValid = true;

  // Validate phone number
  const phoneValidation = validateEmail(data.email);
  if (!phoneValidation.isValid) {
    isValid = false;
    err.email = phoneValidation.err.email;
  }

  // Validate password
  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.isValid) {
    isValid = false;
    err.password = passwordValidation.err.password;
  }

  return { isValid, err };
};
