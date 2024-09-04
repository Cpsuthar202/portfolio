import { ChangeEvent, FormEvent, useState } from "react";
import { setLocalAuth } from "@/utils/localStorage";
import { ILoginResponse, ILoginSchemaErr, IRegistrationSchema } from "@/store/reducers/auth/type";
import { useNavigate } from "react-router-dom";
import { validateFields } from "../login/utils";

const UseRegistration = () => {
  const navigate = useNavigate();
  const [registrationDetails, setRegistrationDetails] = useState<IRegistrationSchema>({ full_name: "", email: "", password: "" });
  const [registrationDetailsErr, setRegistrationDetailsErr] = useState<ILoginSchemaErr>({});
  const RegistrationToken: ILoginResponse = { user: registrationDetails, token: "qwertyuiopasdfghjklzxcvbnm" };

  console.log("registrationDetails", registrationDetails);

  const handleRegistrationDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setRegistrationDetailsErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateFields(registrationDetails);
    if (validation.isValid) {
      setLocalAuth(RegistrationToken);
      navigate("/user", { replace: true });
    } else {
      setRegistrationDetailsErr(validation.err);
    }
  };
  return {
    veriabls: { registrationDetails, registrationDetailsErr },
    methods: { handleRegistrationDetailsChange, handleSubmit },
  };
};

export { UseRegistration };
