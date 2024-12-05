import { ILoginResponse } from "@/store/reducers/auth/type";
import { setLocalAuth } from "@/utils/localStorage";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const validateFields = (otp: string): { isValid: boolean; err: { otp?: string } } => {
  const err: { otp?: string } = {};
  let isValid = true;

  if (!otp || otp.length < 6) {
    err.otp = "OTP is required and should be 6 characters long";
    isValid = false;
  }

  return { isValid, err };
};

const useOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userdata = location.state.registrationDetails;

  const RegistrationToken: ILoginResponse = { user: userdata, token: "qwertyuiopasdfghjklzxcvbnm" };

  const [otp, setOtp] = useState<string>("");
  const [otpErr, setOtpErr] = useState<string>("");
  const handleChangeOtp = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "otp" && value.length > 6) {
      return; // Prevent exceeding 6 digits
    }
    console.log({ name, value });
    setOtp(value);
    setOtpErr("");
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, err } = validateFields(otp);
    console.log({ isValid, err });

    if (isValid) {
      setLocalAuth(RegistrationToken);
      navigate("/user", { replace: true });
    } else {
      setOtpErr(err.otp ?? "");
    }
  };

  return {
    veriabls: {
      otp,
      otpErr,
      userdata,
    },
    methods: { handleChangeOtp, handleSubmit },
  };
};
export { useOtp };
