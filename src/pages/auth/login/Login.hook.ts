import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";
import { validateEmail } from "../validateFields";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setLoginDetailPreserve } from "@/store/reducers/auth/authSlice";
import { ILoginSchema, ILoginSchemaErr } from "@/store/reducers/auth/type";
import { errorToast, successToast } from "@components/toastify/Toast";
import { setLocalAuth } from "@/utils/localStorage";
import { postlogin, postsendOtp } from "@/store/reducers/auth/service";

// Custom hook to manage login functionality
export const useLogin = () => {
  const navigate = useNavigate(); // Navigation hook
  const dispatch = useAppDispatch(); // Redux dispatcher
  const { loginDetailPreserve, isLoading } = useAppSelector((state) => state.auth); // Preserved login details from Redux state
  // State to store login form data and validation errors
  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({ email: "", password: "" });
  const [loginDetailsErr, setLoginDetailsErr] = useState<ILoginSchemaErr>({});

  // Handle changes to form inputs
  const handleLoginDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) return; // Restrict phone number length
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value })); // Update field value
    setLoginDetailsErr((prevErr) => ({ ...prevErr, [name]: "" })); // Clear field-specific error
  };

  // Handle form submission for login
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateFields(loginDetails); // Validate form data

    if (validation.isValid) {
      dispatch(setLoginDetailPreserve(loginDetails)); // Preserve login details in Redux
      try {
        const payload: ILoginSchema = loginDetails;

        const promise = dispatch(postlogin(payload)); // Dispatch login API call
        const res = await promise.unwrap(); // Unwrap response from the API call

        if (res?.data) {
          await setLocalAuth(res.data); // Save auth data to local storage
          successToast({ message: res.message }); // Show success toast
          navigate("/user", { replace: true }); // Navigate to the user dashboard
          dispatch(setLoginDetailPreserve(null)); // Clear preserved login details
        } else {
          errorToast({ message: "Unexpected response: Missing data" });
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } else {
      setLoginDetailsErr(validation.err); // Update validation errors
    }
  };

  // Handle forgot password functionality
  const handleForgotPassword = async () => {
    dispatch(setLoginDetailPreserve(loginDetails)); // Preserve login details in Redux
    const validation = validateEmail(loginDetails.email); // Validate email

    if (validation.isValid) {
      try {
        const payload: ILoginSchemaErr = { email: loginDetails.email };
        const promise = dispatch(postsendOtp(payload)); // Dispatch OTP request
        const res = await promise.unwrap();
        successToast({ message: res.message, duration: 3000 }); // Show success toast
        navigate("/user/auth/verify_otp", {
          state: { userdata: loginDetails, action: "forgetpassword" },
        }); // Navigate to OTP verification page
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } else {
      setLoginDetailsErr(validation.err); // Update validation errors
    }
  };

  // Navigate to registration page
  const handleRegistration = async () => {
    dispatch(setLoginDetailPreserve(loginDetails)); // Preserve login details in Redux
    navigate("/user/auth/registration"); // Redirect to registration page
  };

  // Restore preserved login details when the component mounts
  useEffect(() => {
    if (loginDetailPreserve) setLoginDetails(loginDetailPreserve); // Set login details from Redux state
  }, [loginDetailPreserve]);

  // Return state and methods for use in the component
  return {
    veriabls: { loginDetails, loginDetailsErr, isLoading },
    methods: { handleLoginDetailsChange, handleSubmit, handleForgotPassword, handleRegistration },
  };
};
