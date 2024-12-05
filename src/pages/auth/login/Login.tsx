import React from "react";
import { TextField, Button, Typography, Divider, Box, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./Login.hook";
import AuthLayout from "../utility/AuthLayout";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit },
  } = useLogin();

  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <AuthLayout title="Log in to E-Commerce" subtitle="Enter your details below">
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* <TextField
            variant="standard"
            fullWidth
            label="Email Address"
            name="email"
            value={loginDetails.email}
            onChange={handleLoginDetailsChange}
            error={!!loginDetailsErr.email}
            helperText={loginDetailsErr.email}
          /> */}
          <TextField
            variant="standard"
            fullWidth
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
              label="PassWord"
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
          <Typography sx={{ textAlign: "end", cursor: "pointer", color: "primary.main" }} onClick={() => navigate("/user/auth/forgot-password")}>
            Forgot password?
          </Typography>
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
      <Typography>
        Don’t have an account?
        <Typography component="span" sx={{ color: "primary.main", cursor: "pointer", ml: 1 }} onClick={() => navigate("/user/auth/registration")}>
          Register here
        </Typography>
      </Typography>
    </AuthLayout>
  );
};

export default Login;
