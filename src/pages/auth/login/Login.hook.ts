import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";
import { validateEmail } from "../validateFields";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setLoginDetailPreserve } from "@/store/reducers/auth/authSlice";
import { login, sendOtp } from "@/store/reducers/auth/service";
import { ILoginSchema, ILoginSchemaErr } from "@/store/reducers/auth/type";
import { errorToast, successToast } from "@/components/toastify/Toast";
import { setLocalAuth } from "@/utils/localStorage";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginDetailPreserve } = useAppSelector((state) => state.auth);

  // State for login details and errors
  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({ email: "", password: "" });
  const [loginDetailsErr, setLoginDetailsErr] = useState<ILoginSchemaErr>({});

  // Handle input changes
  const handleLoginDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) return; // Limit phone number to 10 digits
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    setLoginDetailsErr((prevErr) => ({ ...prevErr, [name]: "" })); // Clear errors for updated field
  };

  // Handle form submission for login
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Preserve current state
    const validation = validateFields(loginDetails);

    if (validation.isValid) {
      dispatch(setLoginDetailPreserve(loginDetails));
      try {
        const payload: ILoginSchemaErr = loginDetails;

        console.log({ payload });
        const promise = dispatch(login(payload));
        const res = await promise.unwrap();
        // Validate res.data
        if (res?.data) {
          await setLocalAuth(res.data);
          successToast({ message: res.message });
          console.log(res);

          navigate("/user", { replace: true });
          dispatch(setLoginDetailPreserve(null));
        } else {
          errorToast({ message: "Unexpected response: Missing data" });
        }
      } catch (error: any) {
        if (error?.message) console.log("error.messa ge", error.message);
      }
    } else {
      setLoginDetailsErr(validation.err); // Show validation errors
    }
  };

  // Handle forgot password functionality
  const handleForgotPassword = async () => {
    dispatch(setLoginDetailPreserve(loginDetails));
    const validation = validateEmail(loginDetails.email);
    if (validation.isValid) {
      try {
        const payload: ILoginSchemaErr = {
          email: loginDetails.email,
        };
        const promise = dispatch(sendOtp(payload));
        const res = await promise.unwrap();
        successToast({ message: res.message, duration: 3000 });
        navigate("/user/auth/verify_otp", {
          state: { userdata: loginDetails, action: "forgetpassword" },
        });
      } catch (error: any) {
        if (error?.message) console.log("error.messa ge", error.message);
      }
    } else {
      setLoginDetailsErr(validation.err);
    }
  };

  // Handle registration navigation
  const handleRegistration = async () => {
    dispatch(setLoginDetailPreserve(loginDetails));
    navigate("/user/auth/registration");
  };

  // Restore preserved login details on mount
  useEffect(() => {
    if (loginDetailPreserve) setLoginDetails(loginDetailPreserve);
  }, [loginDetailPreserve]);

  // Return state and methods
  return {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit, handleForgotPassword, handleRegistration },
  };
};
