import React from "react";
import { TextField, Button, Checkbox, Typography, Box, Stack } from "@mui/material";
import { UseRegistration } from "./Registration.hook"; // Custom hook for handling registration logic
import AuthLayout from "../utility/AuthLayout"; // Layout component for authentication pages
import PasswordField from "../utility/PasswordField"; // Custom password field component

const Registration: React.FC = () => {
  const {
    veriabls: { registrationDetails, registrationDetailsErr }, // Destructure registration details and errors from the hook
    methods: { handleRegistrationDetailsChange, handleSubmit, handleLogin, handleTermsAndConditions }, // Destructure methods from the hook
  } = UseRegistration(); // Call the custom hook

  return (
    <AuthLayout title="Create an account" subtitle="Enter your details to register.">
      {/* Form for registration */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Full Name Input */}
          <TextField
            autoFocus
            variant="standard"
            fullWidth
            label="Full Name"
            name="name"
            value={registrationDetails.name}
            onChange={handleRegistrationDetailsChange} // Handle change for input
            error={!!registrationDetailsErr.name} // Show error if present
            helperText={registrationDetailsErr.name} // Display error message
          />

          {/* Phone Number Input */}
          <TextField
            variant="standard"
            fullWidth
            label="Email"
            name="email"
            type="email"
            // inputProps={{
            //   maxLength: 10, // Enforces a maximum of 10 characters for phone number
            //   pattern: "\\d{10}", // Regex pattern to ensure 10 digit phone number
            // }}
            value={registrationDetails.email}
            onChange={handleRegistrationDetailsChange} // Handle change for input
            error={!!registrationDetailsErr.email} // Show error if present
            helperText={registrationDetailsErr.email} // Display error message
          />

          {/* Password Input */}
          <PasswordField
            value={registrationDetails.password}
            onChange={handleRegistrationDetailsChange}
            error={!!registrationDetailsErr.password} // Show error if present
            helperText={registrationDetailsErr.password} // Display error message
          />

          {/* Terms and Conditions Checkbox */}
          <Stack direction="row" spacing={0} sx={{ p: 0 }}>
            <Checkbox required sx={{ color: "primary.main", p: 0 }} /> {/* Checkbox for Terms and Conditions */}
            <Button variant="text" color="primary" sx={{ py: "1px" }} onClick={handleTermsAndConditions}>
              Terms And Conditions {/* Link to Terms and Conditions page */}
            </Button>
          </Stack>

          {/* Register Button */}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </form>

      {/* Divider with Google Sign Up */}
      {/* <Divider>
        <Typography variant="body1" color="primary.main">
          Or, Register with
        </Typography>
      </Divider>
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Sign up with Google 
      </Button> */}

      {/* Login Link */}
      <Typography>
        Already have an account?
        <Typography
          component="span"
          sx={{ color: "primary.main", cursor: "pointer", ml: 1 }}
          onClick={handleLogin} // Navigate to login page when clicked
        >
          Log in here
        </Typography>
      </Typography>
    </AuthLayout>
  );
};

export default Registration;
