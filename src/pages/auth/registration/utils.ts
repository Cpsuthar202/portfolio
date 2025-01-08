import { ILoginSchemaErr, IRegistrationSchema } from "@/store/reducers/auth/type";
import { validateEmail, validateName, validatePassword } from "../validateFields";

export const validateFields = (data: IRegistrationSchema) => {
  const err: ILoginSchemaErr = {};
  let isValid = true;

  // Validate name

  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) {
    isValid = false;
    err.name = nameValidation.err.name;
  }

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
