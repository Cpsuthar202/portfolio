import { Box, Typography, TextField, Button, IconButton, FormControlLabel, Checkbox, Link, Divider } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { mColor } from "@/theme/utils/color";
import { UseRegistration } from "./Registration.hook";
const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    veriabls: { registrationDetails, registrationDetailsErr },
    methods: { handleRegistrationDetailsChange, handleSubmit },
  } = UseRegistration();
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
        Create an account
      </Typography>
      <Typography variant="body2" color="primary.main">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        {/* Full Name Input */}
        {/* <TextField margin="normal" required fullWidth id="fullName" label="Full Name" name="fullName" autoComplete="name" autoFocus /> */}

        {/* name Input */}
        <TextField
          margin="normal"
          // required
          fullWidth
          id="fullName"
          label="Full Name"
          name="full_name"
          autoComplete="name"
          autoFocus
          value={registrationDetails.full_name}
          onChange={handleRegistrationDetailsChange}
          error={!!registrationDetailsErr.full_name}
          helperText={registrationDetailsErr.full_name}
        />

        {/* Email Input */}
        <TextField
          margin="normal"
          // required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={registrationDetails.email}
          onChange={handleRegistrationDetailsChange}
          error={!!registrationDetailsErr.email}
          helperText={registrationDetailsErr.email}
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
            value={registrationDetails.password}
            onChange={handleRegistrationDetailsChange}
            error={!!registrationDetailsErr.password}
            helperText={registrationDetailsErr.password}
          />
          <IconButton sx={{ position: "absolute", right: 8, top: 30 }} onClick={handleClickShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>

        {/* Terms and Conditions */}
        <FormControlLabel control={<Checkbox value="agree" required sx={{ color: mColor.primaryMain }} />} label="Agree to Terms" />

        {/* Register Button */}
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
          Register
        </Button>
      </form>

      {/* Divider with Or */}
      <Divider sx={{ width: "100%", mb: 2 }}>
        <Typography variant="body2" color="primary.main">
          Or, Register with
        </Typography>
      </Divider>

      {/* Google Sign Up Button */}
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 2 }}>
        Sign up with Google
      </Button>

      {/* Login Link */}
      <Typography variant="body2">
        Already have an account?
        <Link href="/user/auth/login" variant="body2" sx={{ ml: "5px" }}>
          Log in here
        </Link>
      </Typography>
    </Box>
  );
};

export default Registration;
