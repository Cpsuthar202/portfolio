import { Container, Box, Typography, Button, TextField, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";

type IpasswordData = {
  name: string;
  email: string;
  phone_number: string;
  gender: string;
  dob: string;
};

type IpasswordErrors = Partial<Record<keyof IpasswordData, string>>;

const UpdateInformation = () => {
  const [updateInformation, setUpdateInformation] = useState<IpasswordData>({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    dob: "",
  });

  const [updateInformationErr, setUpdateInformationErr] = useState<IpasswordErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) {
      return; // Prevent exceeding 10 digits
    }
    setUpdateInformation((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setUpdateInformationErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    console.log("name, value ", name, value);

    if (name) {
      setUpdateInformation((prevDetails) => ({
        ...prevDetails,
        [name]: value as string,
      }));
      setUpdateInformationErr((prevErr) => ({ ...prevErr, [name]: "" }));
    }
  };

  const validateFields = (data: IpasswordData): { isValid: boolean; errors: IpasswordErrors } => {
    const errors: IpasswordErrors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Invalid email format";
    if (!/^\d{10}$/.test(data.phone_number)) errors.phone_number = "Phone number must be 10 digits";
    if (!["male", "female"].includes(data.gender)) errors.gender = "Please select a valid gender";
    if (!data.dob) errors.dob = "Date of birth is required";
    return { isValid: Object.keys(errors).length === 0, errors };
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validateFields(updateInformation);
    if (isValid) {
      console.log("Information updated successfully:", updateInformation);
      // TODO: Call API here
    } else {
      setUpdateInformationErr(errors);
    }
  };
  return (
    <Container sx={{ p: 0 }}>
      <Box sx={{ width: "100%", maxWidth: 500, m: "auto" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", my: 2, color: "primary.main" }}>
          Update Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2, borderRadius: 2, boxShadow: 1 }}>
            <TextField
              variant="standard"
              fullWidth
              label="Name"
              name="name"
              value={updateInformation.name}
              onChange={handleInputChange}
              error={!!updateInformationErr.name}
              helperText={updateInformationErr.name}
            />
            <TextField
              variant="standard"
              fullWidth
              label="Phone Number"
              name="phone_number"
              type="number"
              value={updateInformation.phone_number}
              onChange={handleInputChange}
              error={!!updateInformationErr.phone_number}
              helperText={updateInformationErr.phone_number}
            />
            <TextField
              variant="standard"
              fullWidth
              label="Email"
              name="email"
              value={updateInformation.email}
              onChange={handleInputChange}
              error={!!updateInformationErr.email}
              helperText={updateInformationErr.email}
            />
            <FormControl
              variant="standard"
              fullWidth
              error={!!updateInformationErr.gender}
              sx={{
                "& .MuiInput-underline:before": {
                  // borderBottom: "none", // Remove default underline
                  borderColor: updateInformationErr.gender ? "error.main" : "primary.main",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  // borderBottom: "none", // Remove hover underline
                  borderColor: "primary.main",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "none", // Remove focus underline
                },

                marginBottom: 2, // Adds spacing between form fields
                "& .MuiInputLabel-root": { color: updateInformationErr.gender ? "error.main" : "primary.main", fontSize: "17px" }, // Customize label color
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2, // Smooth rounded corners
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main", // Change outline color on hover\
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: updateInformationErr.gender ? "error.main" : "primary.main", // Default border color
                },
              }}
            >
              <InputLabel>Gender</InputLabel>
              <Select
                value={updateInformation.gender}
                onChange={handleSelectChange}
                name="gender"
                label="Gender"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      backgroundColor: "white",
                      borderRadius: 1,
                      color: "primary.main",
                    },
                  },
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {updateInformationErr.gender && (
                <Typography color="error" variant="caption" sx={{ marginTop: 0.5 }}>
                  {updateInformationErr.gender}
                </Typography>
              )}
            </FormControl>

            <TextField
              variant="standard"
              fullWidth
              label="Date of Birth"
              name="dob"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={updateInformation.dob}
              onChange={handleInputChange}
              error={!!updateInformationErr.dob}
              helperText={updateInformationErr.dob}
            />

            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateInformation;
