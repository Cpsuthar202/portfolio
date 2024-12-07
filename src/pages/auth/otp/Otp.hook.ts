import { ILoginResponse } from "@/store/reducers/auth/type";
import { setLocalAuth } from "@/utils/localStorage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validateOtp, validatePassword } from "../validateFields";
import { setLoginDetailPreserve } from "@/store/reducers/auth/authSlice";
import { useAppDispatch } from "@/store/store";
// import { validatePassword } from "../login/utils";

const useOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const userdata = location.state.userdata;
  const actiontype = location.state.action;
  const otpTime = 5 as number;

  const RegistrationToken: ILoginResponse = { user: userdata, token: "qwertyuiopasdfghjklzxcvbnm" };
  const [validationData, setValidationData] = useState<{ otp: string; password?: string }>({ otp: "", password: "" });
  const [validationDataErr, setValidationDataErr] = useState<{ otp?: string; password?: string }>({});
  const [timer, setTimer] = useState<number>(otpTime);
  const [runInterval, setRunInterval] = useState<boolean>(true);

  useEffect(() => {
    if (runInterval && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [runInterval, timer]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "otp" && value.length > 6) {
      return; // Prevent exceeding 6 digits
    }
    console.log({ name, value });
    setValidationData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setValidationDataErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpValidation = validateOtp(validationData.otp);

    if (!otpValidation.isValid) {
      setValidationDataErr((prev) => ({ ...prev, otp: otpValidation.err.otp ?? "" }));
      return;
    }

    if (actiontype === "forgetpassword") {
      const passwordValidation = validatePassword(validationData.password ?? "");

      if (!passwordValidation.isValid) {
        setValidationDataErr((prev) => ({ ...prev, password: passwordValidation.err.password ?? "" }));
        return;
      }
    }

    // Successful validation
    setLocalAuth(RegistrationToken);
    navigate("/user", { replace: true });
    dispatch(setLoginDetailPreserve(null));
  };

  const handleResendOtp = async () => {
    setTimer(otpTime);
    setRunInterval(true);
  };

  return {
    veriabls: {
      validationData,
      validationDataErr,
      userdata,
      actiontype,
      timer,
    },
    methods: { handleChange, handleSubmit, handleResendOtp },
  };
};
export { useOtp };
