import { Iaddress, IaddressErr } from "@/data/profile";
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { validateFields } from "./utils";
import { loadingSuccessToast } from "@/components/toastify/Toast";

const Manageaddress = () => {
  const location = useLocation();

  const state_address = location.state.address;
  const state_action = location.state.action;
  console.log({ state_address, state_action });

  const [disabled, setDisabled] = useState<boolean>(true);

  const [address, setAddress] = useState<Iaddress>({
    name: state_address?.name,
    mobile_no: state_address?.mobile_no,
    pincode: state_address?.pincode,
    landmark: state_address?.landmark,
    city: state_address?.city,
    state: state_address?.state,
    country: state_address?.country,
    area: state_address?.area,
    apartment: state_address?.apartment,
    default: false,
  });
  // const [address, setAddress] = useState<Iaddress>(
  //   location.state?.address || {
  //     name: "",
  //     mobile_no: "",
  //     pincode: "",
  //     landmark: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //     area: "",
  //     apartment: "",
  //     default: false,
  //   }
  // );
  console.log("add  ress", address);

  const [addressErr, setAddressErr] = useState<IaddressErr>({});

  // const omitId = (details: Iaddress | null): Omit<Iaddress, "id"> => {
  //   if (!details) {
  //     return {
  //       name: "",
  //       mobile_no: "",
  //       pincode: "",
  //       landmark: "",
  //       city: "",
  //       state: "",
  //       country: "",
  //       area: "",
  //       apartment: "",
  //       default: false,
  //     }; // Provide default values when details is null
  //   }

  //   const { id, ...rest } = details;
  //   return rest; // Return the rest of the properties without id
  // };

  // Handle changes in address details
  const handleAddressDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDisabled(false);
    // Validation for mobile number and pincode
    if (name === "mobile_no" && value.length > 10) {
      return; // Prevent exceeding 10 digits
    }
    if (name === "pincode" && value.length > 6) {
      return; // Prevent exceeding 6 digits
    }

    setAddress((prevDetails) => ({
      // ...omitId(prevDetails),
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("addressAWERT", address);

    const validation = validateFields(address);
    if (validation.isValid) {
      console.log({ address });
      if (state_action === "Add") {
        loadingSuccessToast({ message: "Add Address successfully" });
      } else {
        loadingSuccessToast({ message: "Update Address successfully" });
      }
    } else {
      setAddressErr(validation.err);
    }
  };

  return (
    <Container>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold", my: 2, color: "primary.main" }}>
        {`${state_action} ${state_action === "Add" ? "a new" : "your"} address`}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField autoFocus variant="standard" label="Name" name="name" value={address?.name} onChange={handleAddressDetailsChange} error={!!addressErr.name} helperText={addressErr.name} />

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
            label="pincode"
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

          <TextField variant="standard" label="City" name="city" value={address?.city} onChange={handleAddressDetailsChange} error={!!addressErr.city} helperText={addressErr.city} />
          <TextField variant="standard" label="State" name="state" value={address?.state} onChange={handleAddressDetailsChange} error={!!addressErr.state} helperText={addressErr.state} />
          <TextField variant="standard" label="Country" name="country" value={address?.country} onChange={handleAddressDetailsChange} error={!!addressErr.country} helperText={addressErr.country} />
          <TextField variant="standard" label="area" name="area" value={address?.area} onChange={handleAddressDetailsChange} error={!!addressErr.area} helperText={addressErr.area} />
          <TextField
            variant="standard"
            label="apartment"
            name="apartment"
            value={address?.apartment}
            onChange={handleAddressDetailsChange}
            error={!!addressErr.apartment}
            helperText={addressErr.apartment}
          />
          {state_action != "Update" && (
            <FormControlLabel
              control={<Checkbox sx={{ color: "primary.main" }} checked={isDefaultAddress} onChange={handleCheckboxChange} />}
              label="Make this my default address"
              sx={{ color: "primary.main" }}
            />
          )}
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={disabled}>
            {state_action} address
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Manageaddress;
