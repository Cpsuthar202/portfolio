import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { successToast } from "@/components/toastify/Toast";
import Rcsc from "@/components/rcsc/Rcsc";
import { IAddress, IAddressErr } from "@/store/reducers/address/type";
import { validateFieldsforManageaddress } from "./utils";
import { useAppDispatch } from "@/store/store";
import { createaddress, updateaddress } from "@/store/reducers/address/service";

const Manageaddress = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state_address = location.state.address;
  const state_action = location.state.action;
  // console.log({ state_address, state_action });

  // const [disabled, setDisabled] = useState<boolean>(true);

  const [address, setAddress] = useState<IAddress>(state_address);

  const [addressErr, setAddressErr] = useState<IAddressErr>({});

  console.log(addressErr);

  // Handle changes in address details
  const handleAddressDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setDisabled(false);
    // Validation for mobile number and pincode
    if (name === "mobile_no" && value.length > 10) {
      return; // Prevent exceeding 10 digits
    }
    if (name === "pincode" && value.length > 6) {
      return; // Prevent exceeding 6 digits
    }

    setAddress((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setAddressErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const [isDefaultAddress, setIsDefaultAddress] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDefaultAddress(e.target.checked);
    setAddress((prevErr) => ({ ...prevErr, default: e.target.checked }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validation = validateFieldsforManageaddress(address);

    if (!validation.isValid) {
      setAddressErr(validation.err);
      return;
    }
    const actionType = state_action === "Add" ? createaddress : updateaddress;
    try {
      const payload: IAddress = address;
      const promise = dispatch(actionType(payload));
      const res = await promise.unwrap();

      successToast({ message: res.message });
      navigate("/user/profile/address");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  return (
    <Container sx={{ p: 0 }}>
      <Box sx={{ width: "100%", maxWidth: 500, m: "auto" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", my: 2, color: "primary.main" }}>
          {`${state_action} ${state_action === "Add" ? "a new" : "your"} address`}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2, borderRadius: 2, boxShadow: 1 }}>
            <TextField autoFocus variant="standard" label="Name" name="name" value={address?.name} onChange={handleAddressDetailsChange} error={!!addressErr.name} helperText={addressErr.name} />
            {/* <Dashboard address={address} /> */}
            <Rcsc setAddress={setAddress} address={address} addressErr={addressErr} setAddressErr={setAddressErr} />
            <TextField
              variant="standard"
              fullWidth
              label="Mobile Number"
              name="mobile_no"
              type="number"
              value={address?.mobile_no}
              onChange={handleAddressDetailsChange}
              error={!!addressErr.mobile_no}
              helperText={addressErr.mobile_no}
            />
            <TextField
              variant="standard"
              label="Pincode"
              name="pincode"
              type="number"
              value={address?.pincode}
              onChange={handleAddressDetailsChange}
              error={!!addressErr.pincode}
              helperText={addressErr.pincode}
            />

            <TextField
              variant="standard"
              label="Landmark"
              name="landmark"
              value={address?.landmark}
              onChange={handleAddressDetailsChange}
              error={!!addressErr.landmark}
              helperText={addressErr.landmark}
            />

            {/* <TextField variant="standard" label="City" name="city" value={address?.city} onChange={handleAddressDetailsChange} error={!!addressErr.city} helperText={addressErr.city} /> */}
            {/* <TextField variant="standard" label="State" name="state" value={address?.state} onChange={handleAddressDetailsChange} error={!!addressErr.state} helperText={addressErr.state} /> */}
            {/* <TextField variant="standard" label="Country" name="country" value={address?.country} onChange={handleAddressDetailsChange} error={!!addressErr.country} helperText={addressErr.country} /> */}
            <TextField variant="standard" label="Line 1" name="line_1" value={address?.line_1} onChange={handleAddressDetailsChange} error={!!addressErr.line_1} helperText={addressErr.line_1} />
            <TextField variant="standard" label="Line 2" name="line_2" value={address?.line_2} onChange={handleAddressDetailsChange} error={!!addressErr.line_2} helperText={addressErr.line_2} />
            {state_action != "Update" && (
              <FormControlLabel
                control={<Checkbox sx={{ color: "primary.main" }} checked={isDefaultAddress} onChange={handleCheckboxChange} />}
                label="Make this my default address"
                sx={{ color: "primary.main" }}
              />
            )}
            <Button type="submit" fullWidth variant="contained" color="primary">
              {state_action} address
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Manageaddress;
