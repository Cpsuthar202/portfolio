import { errorToast, successToast } from "@/components/toastify/Toast";
import { Container, Box, Typography, Button, TextField, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Avatar, IconButton, Badge } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { validateFieldsforUpdateInformation } from "./utils";
import { IProfileResponse, IProfileResponseErr } from "@/store/reducers/profile/type";
import { useAppDispatch } from "@/store/store";
import { putprofile } from "@/store/reducers/profile/service";
import SimpleDialog from "@/components/dialog/SimpleDialog";

const Updateinformation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const profile = useLocation().state.profile_information;

  const [updateInformation, setUpdateInformation] = useState<IProfileResponse>(profile);

  const [updateInformationErr, setUpdateInformationErr] = useState<IProfileResponseErr>({});

  const [imageUrl, setImageUrl] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone_number" && value.length > 10) {
      return; // Prevent exceeding 10 digits
    }
    setUpdateInformation((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      // [name]: name === "dob" ? value.split("-").reverse().join("-") : value,
    }));
    setUpdateInformationErr((prevErr) => ({ ...prevErr, [name]: "" }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;

    if (name) {
      setUpdateInformation((prevDetails) => ({
        ...prevDetails,
        [name]: value as string,
      }));
      setUpdateInformationErr((prevErr) => ({ ...prevErr, [name]: "" }));
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validateFieldsforUpdateInformation(updateInformation);

    if (isValid) {
      try {
        const payload: IProfileResponse = updateInformation;
        const promise = dispatch(putprofile(payload));

        // Await and unwrap the result from the dispatched action
        const res = await promise.unwrap();

        if (res?.data) {
          successToast({ message: res.message }); // Show success toast
          navigate("/user/profile/information");
        } else {
          errorToast({ message: "Unexpected response: Missing data" }); // Handle unexpected responses
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } else {
      // Handle validation errors
      setUpdateInformationErr(errors);
    }
  };

  // image crop

  const handleImageUpload = () => {
    setImageUrl(true);
  };

  return (
    <>
      <Container sx={{ p: 0 }}>
        <Box sx={{ width: "100%", maxWidth: 500, m: "auto" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", my: 2, color: "primary.main" }}>
            Update Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4, borderRadius: 2, boxShadow: 1 }}>
              <Box sx={{ margin: "auto" }}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  sx={{ width: "fit-content" }}
                  badgeContent={
                    <IconButton
                      sx={{ bgcolor: "white" }}
                      component="label" // Allows triggering file input
                      onClick={handleImageUpload}
                    >
                      <Add />
                      {/* <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} /> */}
                    </IconButton>
                  }
                >
                  <Avatar
                    src={updateInformation.image}
                    alt={updateInformation.name?.split(" ")[0][0] || "?"}
                    variant="rounded"
                    sx={{
                      width: 100,
                      height: 100,
                      m: 1,
                      bgcolor: "primary.main",
                      color: "white",
                      // border: 1,
                      // borderColor: "primary.main",
                    }}
                  >
                    {!updateInformation.image && (updateInformation.name?.split(" ")[0][0] || "?")}
                  </Avatar>
                </Badge>
              </Box>
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
                InputProps={{
                  readOnly: true, // Makes the field read-only
                }}
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
                  "& .MuiInputLabel-root": { color: updateInformationErr.gender ? "error.main" : "primary.main", fontSize: "20px" }, // Customize label color
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
                  sx={{
                    "& .MuiSelect-select": {
                      fontSize: "18px", // Set the desired font size for the selected value
                      color: "primary.main", // Optional: Set the text color for the selected value
                      mt: 1,
                    },
                  }}
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
                inputProps={{
                  // min: "20  00-01-01", // Set the minimum date
                  max: new Date().toISOString().split("T")[0], // Set the maximum date as today
                }}
                value={updateInformation.dob}
                // value={
                //   updateInformation.dob
                //     ? updateInformation.dob.split("-").reverse().join("-") // Convert DD-MM-YYYY to YYYY-MM-DD
                //     : ""
                // }
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
      {imageUrl && (
        <SimpleDialog open={imageUrl} handleClose={() => setImageUrl(false)}>
          <Box sx={{ p: 2, bgcolor: "#ffffff" }}>
            <TextField variant="standard" fullWidth label="URL" name="url" onChange={(e) => setUpdateInformation((prev) => ({ ...prev, image: e.target.value }))} />
          </Box>
        </SimpleDialog>
      )}
    </>
  );
};

export default Updateinformation;
