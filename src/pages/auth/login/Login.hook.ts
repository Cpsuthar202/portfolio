import { ILoginSchema, ILoginSchemaErr, ILoginResponse } from "@/store/reducers/auth/type";
import { setLocalAuth } from "@/utils/localStorage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";
import { validateNumber } from "../validateFields";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setLoginDetailPreserve } from "@/store/reducers/auth/authSlice";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loginDetailPreserve } = useAppSelector((state) => state.auth);

  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({ phone_number: "", password: "" });
  const [loginDetailsErr, setLoginDetailsErr] = useState<ILoginSchemaErr>({});
  const loginToken: ILoginResponse = { user: loginDetails, token: "qwertyuiopasdfghjklzxcvbnm" };

  const handleLoginDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) {
      return; // Prevent exceeding 10 digits
    }
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setLoginDetailsErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoginDetailPreserve(loginDetails));
    const validation = validateFields(loginDetails);

    if (validation.isValid) {
      setLocalAuth(loginToken);
      navigate("/user", { replace: true });
      dispatch(setLoginDetailPreserve(null));
    } else {
      setLoginDetailsErr(validation.err);
    }
  };
  const handleForgotPassword = async () => {
    dispatch(setLoginDetailPreserve(loginDetails));
    const validation = validateNumber(loginDetails.phone_number);
    if (validation.isValid) {
      navigate("/user/auth/verify_otp", {
        state: { userdata: loginDetails, action: "forgetpassword" },
      });
    } else {
      setLoginDetailsErr(validation.err);
    }
  };
  const handleRegistration = async () => {
    dispatch(setLoginDetailPreserve(loginDetails));
    navigate("/user/auth/registration");
  };
  useEffect(() => {
    if (loginDetailPreserve) {
      setLoginDetails(loginDetailPreserve);
    } else {
      console.log("No preserved login.");
    }
  }, [loginDetailPreserve]);
  return {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit, handleForgotPassword, handleRegistration },
  };
};

export { useLogin };
