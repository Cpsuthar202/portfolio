import { Box, Button, Container, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import PasswordField from "../auth/utility/PasswordField";
import { validateFieldsforUpdatepassword } from "./utils";
import { IResetpassword, IResetpasswordErr } from "@/store/reducers/auth/type";
import { useAppDispatch } from "@/store/store";
import { postresetPassword } from "@/store/reducers/auth/service";
import { errorToast, successToast } from "@/components/toastify/Toast";
import { useNavigate } from "react-router-dom";

const Updatepassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [updatePassword, setUpdatePassword] = useState<IResetpassword>({
    old_password: "",
    new_password: "",
  });
  const [updatePasswordErr, setUpdatePasswordErr] = useState<IResetpasswordErr>({});

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUpdatePassword((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Clear error for the current field
    setUpdatePasswordErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { isValid, errors } = validateFieldsforUpdatepassword(updatePassword);

    if (isValid) {
      try {
        const payload: IResetpassword = updatePassword;
        const promise = dispatch(postresetPassword(payload));

        // Await and unwrap the result from the dispatched action
        const res = await promise.unwrap();

        if (res?.data) {
          successToast({ message: res.message }); // Show success toast
          navigate("/user/profile/information");
        } else {
          errorToast({ message: "Unexpected response: Missing data" }); // Handle unexpected responses
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } else {
      setUpdatePasswordErr(errors);
    }
  };

  return (
    <Container sx={{ p: 0 }}>
      <Box sx={{ width: "100%", maxWidth: 500, m: "auto" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", my: 2, color: "primary.main" }}>
          Update Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2, borderRadius: 2, boxShadow: 1 }}>
            <PasswordField
              label="Old Password"
              name="old_password"
              value={updatePassword.old_password}
              onChange={handlePasswordChange}
              error={!!updatePasswordErr.old_password}
              helperText={updatePasswordErr.old_password}
            />
            <PasswordField
              label="New Password"
              name="new_password"
              value={updatePassword.new_password}
              onChange={handlePasswordChange}
              error={!!updatePasswordErr.new_password}
              helperText={updatePasswordErr.new_password}
            />

            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Updatepassword;
