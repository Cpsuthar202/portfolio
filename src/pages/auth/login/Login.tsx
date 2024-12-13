import React from "react";
import { TextField, Button, Typography, Divider, Box, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useLogin } from "./Login.hook";
import AuthLayout from "../utility/AuthLayout";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login: React.FC = () => {
  const {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit, handleForgotPassword, handleRegistration },
  } = useLogin();

  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <AuthLayout title="Log in to E-Commerce" subtitle="Enter your details below">
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            variant="standard"
            fullWidth
            autoFocus
            label="Phone Number"
            name="phone_number"
            type="number"
            value={loginDetails.phone_number}
            onChange={handleLoginDetailsChange}
            error={!!loginDetailsErr.phone_number}
            helperText={loginDetailsErr.phone_number}
          />
          <Box sx={{ position: "relative" }}>
            <TextField
              variant="standard"
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Password"
              name="password"
              value={loginDetails.password}
              onChange={handleLoginDetailsChange}
              error={!!loginDetailsErr.password}
              helperText={loginDetailsErr.password}
            />
            <IconButton sx={{ position: "absolute", right: 8, top: 18 }} onClick={toggleShowPassword}>
              {showPassword ? (
                <VisibilityOff
                  sx={{
                    color: loginDetailsErr.password ? "error.main" : "primary.main",
                  }}
                />
              ) : (
                <Visibility
                  sx={{
                    color: loginDetailsErr.password ? "error.main" : "primary.main",
                  }}
                />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
            <Button variant="text" color="primary" sx={{ py: "1px" }} onClick={handleForgotPassword}>
              Forgot password ?
            </Button>
          </Box>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
        </Box>
      </form>
      <Divider>
        <Typography variant="body1" color="primary.main">
          Or, Login with
        </Typography>
      </Divider>
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Sign in with Google
      </Button>
      <Typography variant="body1">
        Don’t have an account?
        <Typography component="span" variant="body1" sx={{ color: "primary.main", cursor: "pointer", ml: 1 }} onClick={handleRegistration}>
          Register here
        </Typography>
      </Typography>
    </AuthLayout>
  );
};

export default Login;
