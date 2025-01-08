import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useLogin } from "./Login.hook";
import AuthLayout from "../utility/AuthLayout";
import PasswordField from "../utility/PasswordField";

const Login: React.FC = () => {
  const {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit, handleForgotPassword, handleRegistration },
  } = useLogin();

  return (
    <AuthLayout title="Log in to E-Commerce" subtitle="Enter your details below">
      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Email Input */}
          <TextField
            variant="standard"
            fullWidth
            autoFocus
            label="Email"
            name="email"
            type="email"
            value={loginDetails.email}
            onChange={handleLoginDetailsChange}
            error={!!loginDetailsErr.email}
            helperText={loginDetailsErr.email}
          />
          {/* Password Input */}
          <PasswordField value={loginDetails.password} onChange={handleLoginDetailsChange} error={!!loginDetailsErr.password} helperText={loginDetailsErr.password} />
          {/* Forgot Password */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="text" color="primary" sx={{ py: "1px" }} onClick={handleForgotPassword}>
              Forgot password?
            </Button>
          </Box>
          {/* Submit Button */}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
        </Box>
      </form>
      {/* Divider */}
      {/* <Divider>
        <Typography variant="body1" color="primary.main">
          Or, Login with
        </Typography>
      </Divider>
      Google Login
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Sign in with Google
      </Button> */}
      {/* Registration Link */}
      <Typography variant="body1">
        Don’t have an account?
        <Button variant="text" color="primary" sx={{ py: "1px", ml: 0.5 }} onClick={handleRegistration}>
          Register here
        </Button>
      </Typography>
    </AuthLayout>
  );
};

export default Login;
