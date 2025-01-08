import AuthLayout from "../utility/AuthLayout";
import { useOtp } from "./Otp.hook";
import { Box, Button, TextField, Typography } from "@mui/material";
import PasswordField from "../utility/PasswordField";

// Otp component for user verification (with optional password reset)
const Otp = () => {
  const {
    veriabls: { validationData, validationDataErr, userdata, actiontype, timer },
    methods: { handleChange, handleSubmit, handleResendOtp },
  } = useOtp(); // Use custom hook for OTP logic and state management

  return (
    <AuthLayout title="Verification" subtitle={`Otp sent successfully to your number ${userdata.email}`}>
      {/* Form for OTP verification */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* OTP input field */}
          <TextField
            autoFocus
            variant="standard"
            label="Otp"
            name="otp"
            type="number"
            value={validationData.otp}
            onChange={handleChange} // Handle OTP input change
            error={!!validationDataErr.otp} // Display error if OTP is invalid
            helperText={validationDataErr.otp} // Error message
            sx={{}}
          />

          {/* Password field appears if action is 'forgetpassword' */}
          {actiontype === "forgetpassword" && (
            <PasswordField
              value={validationData?.password}
              onChange={handleChange} // Handle password input change
              error={!!validationDataErr.password} // Display error if password is invalid
              helperText={validationDataErr.password} // Error message
            />
          )}

          {/* Resend OTP section */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {/* If timer is not running, show the Resend OTP button */}
            {!timer ? (
              <Button type="button" onClick={handleResendOtp} disabled={timer > 0} sx={{}}>
                Resend OTP
              </Button>
            ) : (
              // Show remaining time if timer is active
              <Typography variant="body1" sx={{}}>
                Resend OTP in {timer > 0 && `${timer} sec`}
              </Typography>
            )}
          </Box>

          {/* Submit button */}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default Otp;
