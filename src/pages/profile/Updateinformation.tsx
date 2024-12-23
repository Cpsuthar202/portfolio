import { loadingSuccessToast } from "@/components/toastify/Toast";
import { Container, Box, Typography, Button, TextField, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Avatar, IconButton, Badge } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { validateFieldsforUpdateInformation } from "./utils";
import { Iupdateprofile, IupdateprofileErr } from "@/store/reducers/profile/type";
import { ImageCropper } from "@/components/image";
import SimpleDialog from "@/components/dialog/SimpleDialog";

const UpdateInformation = () => {
  const location = useLocation();
  const userData = location.state.profile_information;
  const [localImage, setLocalImage] = useState<string>("");

  const [updateInformation, setUpdateInformation] = useState<Iupdateprofile>({
    profile_url: userData.profile_url || "",
    name: userData.name || "",
    email: userData.email || "",
    phone_number: userData.phone_number || "",
    gender: userData.gender || "",
    dob: userData.dob || "",
  });

  const [updateInformationErr, setUpdateInformationErr] = useState<IupdateprofileErr>({});

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
    console.log("name, value ", name, value);

    if (name) {
      setUpdateInformation((prevDetails) => ({
        ...prevDetails,
        [name]: value as string,
      }));
      setUpdateInformationErr((prevErr) => ({ ...prevErr, [name]: "" }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validateFieldsforUpdateInformation(updateInformation);
    if (isValid) {
      console.log("Information updated successfully:", updateInformation);
      loadingSuccessToast({ message: "Information updated successfully" });
      // TODO: Call API here
    } else {
      setUpdateInformationErr(errors);
    }
  };

  // image crop

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // setUpdateInformation((prev) => ({ ...prev, profile_url: imageUrl }));
      setLocalImage(imageUrl);
    }
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
                    >
                      <Add />
                      <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
                    </IconButton>
                  }
                >
                  <Avatar
                    src={updateInformation.profile_url}
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
                    {!updateInformation.profile_url && (userData.name?.split(" ")[0][0] || "?")}
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
      {localImage && (
        <SimpleDialog open={!!localImage} handleClose={() => setLocalImage("")}>
          <ImageCropper handleClose={() => setLocalImage("")} localsrc={localImage} setUrl={(url) => setUpdateInformation((prev) => ({ ...prev, profile_url: url }))} />
        </SimpleDialog>
      )}
    </>
  );
};

export default UpdateInformation;
