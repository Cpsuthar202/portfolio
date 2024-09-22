import React from "react";
import { Box, Button, TextField, Typography, Divider, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { useLogin } from "./Login.hook";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const {
    veriabls: { loginDetails, loginDetailsErr },
    methods: { handleLoginDetailsChange, handleSubmit },
  } = useLogin();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        sx={{
          height: 40,
          mb: 2,
        }}
        src="/path/to/logo.png"
        alt="Logo"
      />

      {/* Welcome Text */}
      <Typography variant="h5" fontWeight="bold" color="primary.dark">
        Welcome back!
      </Typography>
      <Typography variant="body2" color="primary.main">
        Enter to get unlimited access to data & information.
      </Typography>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        {/* Email Input */}
        <TextField
          margin="normal"
          // required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={loginDetails.email}
          onChange={handleLoginDetailsChange}
          error={!!loginDetailsErr.email}
          helperText={loginDetailsErr.email}
        />

        {/* Password Input */}
        <Box sx={{ position: "relative", width: "100%" }}>
          <TextField
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={loginDetails.password}
            onChange={handleLoginDetailsChange}
            error={!!loginDetailsErr.password}
            helperText={loginDetailsErr.password}
          />
          <IconButton sx={{ position: "absolute", right: 8, top: 30 }} onClick={handleClickShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Forgot Password Link */}

          <Typography variant="body2" sx={{ cursor: "pointer", color: "primary.main" }} onClick={() => navigate("/user/auth/registration")}>
            Forgot password
          </Typography>
        </Box>

        {/* Log In Button */}
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
          LogIn
        </Button>
      </form>

      {/* Divider with Or */}
      <Divider sx={{ width: "100%", mb: 2 }}>
        <Typography variant="body2" color="primary.main">
          Or, Login with
        </Typography>
      </Divider>

      {/* Google Login Button */}
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 2 }}>
        Sign in with Google
      </Button>

      {/* Register Link */}
      <Typography variant="body2" sx={{ mt: 2, display: "flex", gap: 1 }}>
        Don’t have an account?
        <Typography variant="body2" sx={{ cursor: "pointer", color: "primary.main" }} onClick={() => navigate("/user/auth/registration")}>
          Register here
        </Typography>
      </Typography>
    </Box>
  );
};

export default Login;
