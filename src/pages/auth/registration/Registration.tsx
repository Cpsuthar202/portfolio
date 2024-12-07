import React from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Divider, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { UseRegistration } from "./Registration.hook";
import AuthLayout from "../utility/AuthLayout";
import PasswordField from "../utility/PasswordField";

const Registration: React.FC = () => {
  const {
    veriabls: { registrationDetails, registrationDetailsErr },
    methods: { handleRegistrationDetailsChange, handleSubmit, handleLogin },
  } = UseRegistration();

  return (
    <AuthLayout title="Create an account" subtitle="Enter your details to register.">
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            autoFocus
            variant="standard"
            fullWidth
            label="Full Name"
            name="full_name"
            value={registrationDetails.full_name}
            onChange={handleRegistrationDetailsChange}
            error={!!registrationDetailsErr.full_name}
            helperText={registrationDetailsErr.full_name}
          />

          <TextField
            variant="standard"
            fullWidth
            label="Phone Number"
            name="phone_number"
            type="number"
            inputProps={{
              maxLength: 10, // Enforces a maximum of 10 characters
              pattern: "\\d{10}",
            }}
            value={registrationDetails.phone_number}
            onChange={handleRegistrationDetailsChange}
            error={!!registrationDetailsErr.phone_number}
            helperText={registrationDetailsErr.phone_number}
          />

          <PasswordField value={registrationDetails.password} onChange={handleRegistrationDetailsChange} error={!!registrationDetailsErr.password} helperText={registrationDetailsErr.password} />
          <FormControlLabel control={<Checkbox required sx={{ color: "primary.main" }} />} label="Agree to Terms" sx={{ color: "primary.main" }} />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{}}>
            Register
          </Button>
        </Box>
      </form>
      <Divider>
        <Typography variant="body1" color="primary.main">
          Or, Register with
        </Typography>
      </Divider>
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Sign up with Google
      </Button>
      <Typography>
        Already have an account?
        <Typography component="span" sx={{ color: "primary.main", cursor: "pointer", ml: 1 }} onClick={handleLogin}>
          Log in here
        </Typography>
      </Typography>
    </AuthLayout>
  );
};

export default Registration;
