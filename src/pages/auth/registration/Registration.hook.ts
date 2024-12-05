import { ChangeEvent, FormEvent, useState } from "react";
import { ILoginSchemaErr, IRegistrationSchema } from "@/store/reducers/auth/type";
import { useNavigate } from "react-router-dom";
import { validateFields } from "./utils";

const UseRegistration = () => {
  const navigate = useNavigate();
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
    //
    const validation = validateFields(registrationDetails);
    if (validation.isValid) {
      console.log({ registrationDetails });
      navigate("/user/auth/verify_otp", {
        state: { registrationDetails },
      });
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
