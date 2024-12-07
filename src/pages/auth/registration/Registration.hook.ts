import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ILoginSchemaErr, IRegistrationSchema } from "@/store/reducers/auth/type";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setRegisterDetailPreserve } from "@/store/reducers/auth/authSlice";

const UseRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { registerDetailPreserve } = useAppSelector((state) => state.auth);

  const [registrationDetails, setRegistrationDetails] = useState<IRegistrationSchema>({ full_name: "", phone_number: "", password: "" });
  const [registrationDetailsErr, setRegistrationDetailsErr] = useState<ILoginSchemaErr>({});

  const handleRegistrationDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) {
      return; // Prevent exceeding 10 digits
    }
    setRegistrationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setRegistrationDetailsErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setRegisterDetailPreserve(registrationDetails));
    const validation = validateFields(registrationDetails);
    if (validation.isValid) {
      console.log({ registrationDetails });
      navigate("/user/auth/verify_otp", {
        state: { userdata: registrationDetails, action: "registration" },
      });
    } else {
      setRegistrationDetailsErr(validation.err);
    }
  };

  const handleLogin = async () => {
    dispatch(setRegisterDetailPreserve(registrationDetails));
    navigate("/user/auth/login");
  };

  useEffect(() => {
    if (registerDetailPreserve) {
      setRegistrationDetails(registerDetailPreserve);
    } else {
      console.log("No preserved login.");
    }
  }, [registerDetailPreserve]);

  return {
    veriabls: { registrationDetails, registrationDetailsErr },
    methods: { handleRegistrationDetailsChange, handleSubmit, handleLogin },
  };
};

export { UseRegistration };
