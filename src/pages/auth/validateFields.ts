export const validatePassword = (password: string): { isValid: boolean; err: { password?: string } } => {
  const err: { password?: string } = {};
  let isValid = true;

  const checks = [
    { test: () => password.length >= 8, message: "Password must be at least 8 characters long" },
    { test: () => /[A-Z]/.test(password), message: "Password must include one uppercase letter" },
    { test: () => /[a-z]/.test(password), message: "Password must include one lowercase letter" },
    { test: () => /\d/.test(password), message: "Password must include one number" },
    { test: () => /[!@#$%^&*]/.test(password), message: "Password must include one special character" },
  ];

  for (const check of checks) {
    if (!check.test()) {
      isValid = false;
      err.password = check.message;
      break;
    }
  }

  return { isValid, err };
};

export const validateOtp = (otp: string): { isValid: boolean; err: { otp?: string } } => {
  const err: { otp?: string } = {};
  let isValid = true;

  if (!otp) {
    err.otp = "OTP is required ";
    isValid = false;
  } else if (otp.length < 6) {
    err.otp = "Please enter a valid OTP ";
    isValid = false;
  }

  return { isValid, err };
};

export const validateNumber = (phone_number: string): { isValid: boolean; err: { phone_number?: string } } => {
  const err: { phone_number?: string } = {};
  let isValid = true;

  // Number
  if (!phone_number) {
    err.phone_number = "Number is required";
    isValid = false;
  } else if (phone_number.length < 10) {
    err.phone_number = "Please enter a valid Number";
    isValid = false;
  }

  return { isValid, err };
};

// Updated regular expressions
export const emailRegex = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,})+$/;

export const validateEmail = (email: string): { isValid: boolean; err: { email?: string } } => {
  const err: { email?: string } = {};
  let isValid = true;

  if (!email) {
    err.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email ?? "")) {
    err.email = "Please enter a valid email";
    isValid = false;
  }

  return { isValid, err };
};

export const validateName = (full_name: string): { isValid: boolean; err: { full_name?: string } } => {
  const err: { full_name?: string } = {};
  let isValid = true;
  if (!full_name) {
    err.full_name = "name is required";
    isValid = false;
  }

  return { isValid, err };
};
