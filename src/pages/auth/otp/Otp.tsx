import AuthLayout from "../utility/AuthLayout";
import { useOtp } from "./Otp.hook";
import { Box, Button, TextField } from "@mui/material";

const Otp = () => {
  const {
    veriabls: { otp, otpErr, userdata },
    methods: { handleChangeOtp, handleSubmit },
  } = useOtp();

  return (
    <AuthLayout title=" Verification" subtitle={`Otp send Successfully on your Number ${userdata.phone_number}`}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField variant="standard" label="Otp" name="otp" type="number" value={otp} onChange={handleChangeOtp} error={!!otpErr} helperText={otpErr} />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default Otp;
