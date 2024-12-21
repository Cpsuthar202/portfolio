import { Iaddress, IaddressErr, Iupdateprofile, IupdateprofileErr } from "@/store/reducers/profile/type";
import { validatePassword } from "../auth/validateFields";

type PasswordData = {
  phone_number: string;
  old_password: string;
  new_password: string;
};

type PasswordErrors = Partial<Record<keyof PasswordData, string>>;

export const validateFieldsforManageaddress = (data: Iaddress) => {
  const err: IaddressErr = {};
  let isValid = true;

  if (!data.name) {
    err.name = "Name is required";
    isValid = false;
  }

  if (!data.mobile_no) {
    err.mobile_no = "Number is required";
    isValid = false;
  } else if (data.mobile_no.length < 10) {
    err.mobile_no = "Please enter a valid Number";
    isValid = false;
  }

  if (!data.pincode) {
    err.pincode = "Pincode is required";
    isValid = false;
  } else if (data.pincode.length < 6) {
    err.pincode = "Please enter a valid pincode";
    isValid = false;
  }

  // if (!data.landmark) {
  //   err.landmark = "landmark is required";
  //   isValid = false;
  // }

  if (!data.city) {
    err.city = "City is required";
    isValid = false;
  }
  if (!data.state) {
    err.state = "State is required";
    isValid = false;
  }
  if (!data.country) {
    err.country = "Country is required";
    isValid = false;
  }
  if (!data.area) {
    err.area = "Area is required";
    isValid = false;
  }
  if (!data.apartment) {
    err.apartment = "Apartment is required";
    isValid = false;
  }

  return { isValid, err };
};

export const validateFieldsforUpdateInformation = (data: Iupdateprofile): { isValid: boolean; errors: IupdateprofileErr } => {
  const errors: IupdateprofileErr = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Invalid email format";
  if (!/^\d{10}$/.test(data.phone_number)) errors.phone_number = "Phone number must be 10 digits";
  if (!["male", "female"].includes(data.gender)) errors.gender = "Please select a valid gender";
  if (!data.dob) errors.dob = "Date of birth is required";
  return { isValid: Object.keys(errors).length === 0, errors };
};

export const validateFieldsforUpdatepassword = (data: PasswordData) => {
  const errors: PasswordErrors = {};
  let isValid = true;

  // Validate old password

  const oldPasswordValidation = validatePassword(data.old_password);
  console.log("oldPasswordValidation", oldPasswordValidation);

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
