import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ILoginSchemaErr, IRegistrationSchema, IRegistrationSchemaErr } from "@/store/reducers/auth/type";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setRegisterDetailPreserve } from "@/store/reducers/auth/authSlice";
import { successToast } from "@/components/toastify/Toast";
import { postsendOtp } from "@/store/reducers/auth/service";

// Custom hook for managing registration logic
const UseRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { registerDetailPreserve } = useAppSelector((state) => state.auth); // Retrieve preserved registration details from store

  // State for storing registration details and errors
  const [registrationDetails, setRegistrationDetails] = useState<IRegistrationSchema>({
    name: "",
    email: "",
    password: "",
  });
  const [registrationDetailsErr, setRegistrationDetailsErr] = useState<IRegistrationSchemaErr>({});

  // Handle input changes in registration form
  const handleRegistrationDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) return; // Prevent exceeding 10 digits
    setRegistrationDetails((prev) => ({ ...prev, [name]: value }));
    setRegistrationDetailsErr((prev) => ({ ...prev, [name]: "" })); // Clear error for current field
  };

  // Handle form submission and validate details
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateFields(registrationDetails); // Validate form fields

    if (validation.isValid) {
      dispatch(setRegisterDetailPreserve(registrationDetails)); // Save registration details

      try {
        const payload: ILoginSchemaErr = {
          email: registrationDetails.email,
        };
        const promise = dispatch(postsendOtp(payload));
        const res = await promise.unwrap();
        successToast({ message: res.message, duration: 3000 });
        navigate("/user/auth/verify_otp", { state: { userdata: registrationDetails, action: "registration" } });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } else {
      setRegistrationDetailsErr(validation.err); // Set validation errors if invalid
    }
  };

  // Navigate to login page
  const handleLogin = () => {
    dispatch(setRegisterDetailPreserve(registrationDetails)); // Preserve registration details
    navigate("/user/auth/login");
  };

  // Navigate to Terms and Conditions page
  const handleTermsAndConditions = () => {
    // navigate("/terms-and-conditions");
  };

  // Initialize registration form with preserved details if available
  useEffect(() => {
    if (registerDetailPreserve) {
      setRegistrationDetails(registerDetailPreserve); // Restore saved registration details
    } else {
      console.error("No preserved login.");
    }
  }, [registerDetailPreserve]);

  // Return the state and methods to be used in the Registration component
  return {
    veriabls: { registrationDetails, registrationDetailsErr },
    methods: { handleRegistrationDetailsChange, handleSubmit, handleLogin, handleTermsAndConditions },
  };
};

export { UseRegistration };
