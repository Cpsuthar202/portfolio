import React from "react";
import { TextField, Button, Typography, Box, Divider } from "@mui/material";
import { useLogin } from "./Login.hook";
import AuthLayout from "../utility/AuthLayout";
import PasswordField from "../utility/PasswordField";
import { Google } from "@mui/icons-material";

// The Login component handles user authentication with email/password or Google login
const Login: React.FC = () => {
  // Extracting variables and methods from the custom hook `useLogin`
  const {
    veriabls: { loginDetails, loginDetailsErr, isLoading }, // State variables for login form data and errors
    methods: { handleLoginDetailsChange, handleSubmit, handleForgotPassword, handleRegistration }, // Event handlers for various actions
  } = useLogin();

  return (
    // Wrapper layout for authentication pages
    <AuthLayout title="Log in to E-Commerce" subtitle="Enter your details below">
      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Email Input */}
          <TextField
            variant="standard" // Styling variant
            fullWidth // Occupies full width of the container
            autoFocus // Automatically focuses on this field
            label="Email" // Field label
            name="email" // Identifies the field in form data
            type="email" // Input type for validation
            value={loginDetails.email} // Current value of the email field
            onChange={handleLoginDetailsChange} // Updates the value on user input
            error={!!loginDetailsErr.email} // Highlights the field if there's an error
            helperText={loginDetailsErr.email} // Displays error message, if any
          />
          {/* Password Input */}
          <PasswordField
            value={loginDetails.password} // Password value
            onChange={handleLoginDetailsChange} // Updates the value on user input
            error={!!loginDetailsErr.password} // Highlights the field if there's an error
            helperText={loginDetailsErr.password} // Displays error message, if any
          />
          {/* Forgot Password */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="text" // Text button style
              color="primary" // Primary color theme
              sx={{ py: "1px" }} // Padding adjustment
              onClick={handleForgotPassword} // Triggers forgot password logic
              disabled={isLoading}
            >
              Forgot password?
            </Button>
          </Box>
          {/* Submit Button */}
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={isLoading}>
            Log In
            {/* {isLoading ? <CircularProgress color="secondary" size="20px" sx={{ mx: 1 }} /> : "Log In"} */}
          </Button>
        </Box>
      </form>
      {/* Divider */}
      <Divider>
        <Typography variant="body1" color="primary.main">
          Or, Login with
        </Typography>
      </Divider>
      {/* Google Login */}
      <Button fullWidth variant="outlined" startIcon={<Google />}>
        Sign in with Google
      </Button>
      {/* Registration Link */}
      <Typography variant="body1">
        Don’t have an account?
        <Button
          variant="text" // Text button style
          color="primary" // Primary color theme
          sx={{ py: "1px", ml: 0.5 }} // Adjust padding and margin
          onClick={handleRegistration} // Redirects to registration page
        >
          Register here
        </Button>
      </Typography>
    </AuthLayout>
  );
};

export default Login;
