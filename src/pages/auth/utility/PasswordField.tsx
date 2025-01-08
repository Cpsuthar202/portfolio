import React from "react";
import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordFieldProps {
  value: string | undefined;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  label?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  name = "password",
  onChange,
  error,
  helperText,
  label = "Password", // Default label
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Box sx={{ position: "relative" }}>
      <TextField variant="standard" fullWidth type={showPassword ? "text" : "password"} label={label} name={name} value={value} onChange={onChange} error={error} helperText={helperText} />
      <IconButton sx={{ position: "absolute", right: 8, top: 18 }} onClick={toggleShowPassword}>
        {showPassword ? (
          <VisibilityOff
            sx={{
              color: error ? "error.main" : "primary.main",
            }}
          />
        ) : (
          <Visibility
            sx={{
              color: error ? "error.main" : "primary.main",
            }}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default PasswordField;

{
  /* <Box sx={{ position: "relative" }}>
<TextField
  variant="standard"
  fullWidth
  type={showPassword ? "text" : "password"}
  label="password"
  name="password"
  value={registrationDetails.password}
  onChange={handleRegistrationDetailsChange}
  error={!!registrationDetailsErr.password}
  helperText={registrationDetailsErr.password}
/>
<IconButton sx={{ position: "absolute", right: 8, top: 18 }} onClick={toggleShowPassword}>
  {showPassword ? <VisibilityOff /> : <Visibility />}
</IconButton>
</Box> */
}
