import { ILoginSchema, ILoginSchemaErr, ILoginResponse } from "@/store/reducers/auth/type";
import { setLocalAuth } from "@/utils/localStorage";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";

const useLogin = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState<ILoginSchema>({ email: "", password: "" });
  const [loginDetailsErr, setLoginDetailsErr] = useState<ILoginSchemaErr>({});
  const loginToken: ILoginResponse = { user: loginDetails, token: "qwertyuiopasdfghjklzxcvbnm" };

  const handleLoginDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setLoginDetailsErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateFields(loginDetails);
    if (validation.isValid) {
      setLocalAuth(loginToken);
      navigate("/user", { replace: true });
    } else {
      setLoginDetailsErr(validation.err);
    }
  };

  return {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit },
  };
};

export { useLogin };
