import { ILoginSchemaErr, IRegistrationSchema, IRegistrationSchemaErr } from "@/store/reducers/auth/type";
import { setLocalAuth } from "@/utils/localStorage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validateOtp, validatePassword } from "../validateFields";
import { setLoginDetailPreserve, setRegisterDetailPreserve } from "@/store/reducers/auth/authSlice";
import { useAppDispatch } from "@/store/store";
import { postforgetPassword, postregister, postsendOtp } from "@/store/reducers/auth/service";
import { successToast } from "@/components/toastify/Toast";

const useOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const userdata = location.state.userdata; // User data from location state
  const actiontype = location.state.action; // Action type (registration or forgot password)
  const otpTime = 5; // Timer duration in seconds

  // const RegistrationToken: ILoginResponse = { user: userdata, token: "qwertyuiopasdfghjklzxcvbnm" };

  const [validationData, setValidationData] = useState<{ otp: string; password?: string }>({ otp: "", password: "" });
  const [validationDataErr, setValidationDataErr] = useState<{ otp?: string; password?: string }>({});
  const [timer, setTimer] = useState<number>(otpTime); // Timer state
  const [runInterval, setRunInterval] = useState<boolean>(true); // State to manage timer interval

  // Timer logic to countdown OTP resend time
  useEffect(() => {
    if (runInterval && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [runInterval, timer]);

  // Handle change in input fields (OTP and password)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "otp" && value.length > 6) return; // Limit OTP input to 6 digits
    setValidationData((prev) => ({ ...prev, [name]: value }));
    setValidationDataErr((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle OTP form submission
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

    const payload: IRegistrationSchemaErr =
      actiontype === "forgetpassword" ? { email: userdata.email, password: validationData.password, otp: validationData.otp } : { otp: validationData.otp, ...userdata };

    try {
      const promise = actiontype === "forgetpassword" ? dispatch(postforgetPassword(payload as IRegistrationSchemaErr)) : dispatch(postregister(payload as IRegistrationSchema));
      const res = await promise.unwrap();

      if (actiontype !== "forgetpassword" && res?.data) {
        await setLocalAuth(res.data);
        navigate("/user", { replace: true });
      } else if (actiontype === "forgetpassword") {
        navigate("/user/auth/login", { replace: true });
      }

      successToast({ message: res.message });
      dispatch(setLoginDetailPreserve(null));
      dispatch(setRegisterDetailPreserve(null));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  // Handle OTP resend
  const handleResendOtp = async () => {
    try {
      const payload: ILoginSchemaErr = {
        email: userdata.email,
      };
      const promise = dispatch(postsendOtp(payload));
      const res = await promise.unwrap();
      successToast({ message: res.message, duration: 3000 });
      setTimer(otpTime); // Reset timer
      setRunInterval(true); // Start timer countdown
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  return {
    veriabls: { validationData, validationDataErr, userdata, actiontype, timer },
    methods: { handleChange, handleSubmit, handleResendOtp },
  };
};

export { useOtp };
