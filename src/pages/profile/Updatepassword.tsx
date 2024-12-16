import { Box, Button, Container, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { validatePassword } from "../auth/validateFields";
import { useLocation } from "react-router-dom";
import PasswordField from "../auth/utility/PasswordField";

type PasswordData = {
  phone_number: string;
  old_password: string;
  new_password: string;
};

type PasswordErrors = Partial<Record<keyof PasswordData, string>>;

const validateFields = (data: PasswordData) => {
  const errors: PasswordErrors = {};
  let isValid = true;

  // Validate old password
  const oldPasswordValidation = validatePassword(data.old_password);
  console.log("oldPasswordValidation", oldPasswordValidation);

  if (!oldPasswordValidation.isValid) {
    isValid = false;
    errors.old_password = oldPasswordValidation.err.password;
  }

  // Validate new password
  const newPasswordValidation = validatePassword(data.new_password);
  if (!newPasswordValidation.isValid) {
    isValid = false;
    errors.new_password = newPasswordValidation.err.password;
  }

  return { isValid, errors };
};

const Updatepassword = () => {
  const location = useLocation();

  const [updatePassword, setUpdatePassword] = useState<PasswordData>({
    phone_number: location.state.phone_number,
    old_password: "",
    new_password: "",
  });
  const [updatePasswordErr, setUpdatePasswordErr] = useState<PasswordErrors>({});

  console.log("updatePasswordErr", updatePasswordErr);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUpdatePassword((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Clear error for the current field
    setUpdatePasswordErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { isValid, errors } = validateFields(updatePassword);

    if (isValid) {
      console.log("Password updated successfully:", updatePassword);
      // TODO: Add API call for updating password
      setUpdatePassword({
        phone_number: location.state.phone_number,
        old_password: "",
        new_password: "",
      });
      setUpdatePasswordErr({});
    } else {
      setUpdatePasswordErr(errors);
    }
  };

  return (
    <Container sx={{ p: 0 }}>
      <Box sx={{ width: "100%", maxWidth: 500, m: "auto" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", my: 2, color: "primary.main" }}>
          Update Information
        </Typography>
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
