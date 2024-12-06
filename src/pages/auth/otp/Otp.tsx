import React from "react";
import AuthLayout from "../utility/AuthLayout";
import { useOtp } from "./Otp.hook";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const Otp = () => {
  const {
    veriabls: { validationData, validationDataErr, userdata, actiontype, timer },
    methods: { handleChange, handleSubmit, handleResendOtp },
  } = useOtp();
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <AuthLayout title=" Verification" subtitle={`Otp send Successfully on your Number ${userdata.phone_number}`}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            variant="standard"
            label="Otp"
            name="otp"
            type="number"
            value={validationData.otp}
            onChange={handleChange}
            error={!!validationDataErr.otp}
            helperText={validationDataErr.otp}
            sx={{}}
          />

          {actiontype === "forgetpassword" && (
            <Box sx={{ position: "relative" }}>
              <TextField
                variant="standard"
                fullWidth
                type={showPassword ? "text" : "password"}
                label="New Password"
                name="password"
                value={validationData.password}
                onChange={handleChange}
                error={!!validationDataErr.password}
                helperText={validationDataErr.password}
                sx={{}}
              />
              <IconButton sx={{ position: "absolute", right: 8, top: 18 }} onClick={toggleShowPassword}>
                {showPassword ? (
                  <VisibilityOff
                    sx={{
                      color: validationDataErr.password ? "error.main" : "primary.main",
                    }}
                  />
                ) : (
                  <Visibility
                    sx={{
                      color: validationDataErr.password ? "error.main" : "primary.main",
                    }}
                  />
                )}
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {!timer ? (
              <Button type="button" onClick={handleResendOtp} disabled={timer > 0} sx={{}}>
                Resend OTP
              </Button>
            ) : (
              <Typography variant="body1" sx={{}}>
                {timer > 0 && `${timer} sec`}
              </Typography>
            )}
          </Box>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default Otp;
