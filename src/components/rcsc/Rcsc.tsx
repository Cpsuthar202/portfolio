import { Iaddress, IaddressErr } from "@/data/profile";
import { FormControl, InputLabel, Select, MenuItem, Box, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GetCountries, GetState, GetCity, GetPhonecodes } from "react-country-state-city";

interface IrcscList {
  country: Option[];
  state: Option[];
  city: Option[];
  phonecodes: Option[];
}

interface IrcscId {
  country: Option | null;
  state: Option | null;
  city: Option | null;
  phonecode: Option | null;
}

interface Option {
  id: number | null | undefined;
  name: string;
  code?: string; // Added for phone code
  [key: string]: any; // Extendable for dynamic API fields
}

const dropdownStyles = {
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderColor: "primary.main",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none",
  },
  "& .MuiInputLabel-root": { color: "primary.main", fontSize: "20px" },
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.main",
  },
  "& .MuiSelect-icon": {
    // fontSize: "30px", // Font size for the dropdown icon
    color: "primary.main",
  },
};

const menuProps = {
  PaperProps: {
    sx: {
      maxHeight: 200,
      backgroundColor: "white",
      borderRadius: 1,
      color: "primary.main",
    },
  },
};

type RcscProps = {
  setAddress: (address: any) => void; // Replace `any` with a specific type if possible
  address: Iaddress | any; // Replace `any` with a specific type
  addressErr: IaddressErr | any; // Replace `any` with a specific type
  // addressErr: Record<string, any>; // Replace `any` with a specific type
  setAddressErr: (err: Record<string, any>) => void;
};

const Rcsc: React.FC<RcscProps> = ({ setAddress, address, addressErr, setAddressErr }) => {
  const [rcscId, setRcscId] = useState<IrcscId>({ country: null, state: null, city: null, phonecode: null });
  const [rcscList, setRcscList] = useState<IrcscList>({ country: [], state: [], city: [], phonecodes: [] });

  // Function to update rcscId
  const updateRcscId = (type: "country" | "state" | "city", value: string) => {
    const selected = rcscList[type].find((item) => item.name === value);
    if (selected?.id != null) {
      setRcscId((prev) => ({
        ...prev,
        [type]: selected,
        ...(type === "country" && { state: null, city: null, phonecode: rcscList.phonecodes.find((p) => p.id === selected.id) }),
        ...(type === "state" && { city: null }),
      }));
    }
  };

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const countries = await GetCountries();

        setRcscList((prev) => ({ ...prev, country: countries }));

        const phonecodes = await GetPhonecodes();
        setRcscList((prev) => ({ ...prev, phonecodes }));
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (rcscId.country?.id) {
      GetState(rcscId.country.id!)
        .then((states) => setRcscList((prev) => ({ ...prev, state: states })))
        .catch((error) => console.error("Failed to fetch states:", error));
    }
  }, [rcscId.country]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (rcscId.state?.id !== undefined && rcscId.country?.id !== undefined) {
      GetCity(rcscId.country.id!, rcscId.state.id!)
        .then((cities) => setRcscList((prev) => ({ ...prev, city: cities })))
        .catch((error) => console.error("Failed to fetch cities:", error));
    }
  }, [rcscId.state, rcscId.country]);

  // Update rcscId based on address changes
  useEffect(() => {
    if (address.country) updateRcscId("country", address.country);
  }, [address.country, rcscList.country]);

  useEffect(() => {
    if (address.state) updateRcscId("state", address.state);
  }, [address.state, rcscList.state]);

  useEffect(() => {
    if (address.city) updateRcscId("city", address.city);
  }, [address.city, rcscList.city]);

  // Handle selection change
  const handleChange = (type: "country" | "state" | "city") => (e: SelectChangeEvent<number>) => {
    const selectedValue = e.target.value as unknown as string;
    console.log("selectedValue", selectedValue);

    setAddressErr((prevErr: any) => ({ ...prevErr, [type]: "" }));
    updateRcscId(type, selectedValue);
    setAddress((prevAddress: Iaddress) => ({
      ...prevAddress,
      [type]: selectedValue, // Update the address object
      ...(type === "country" && { state: null, city: null }),
      ...(type === "state" && { city: null }),
    }));
  };

  const dropdownData = [
    {
      label: "Country",
      value: rcscId.country?.name ?? "",
      type: "country",
      items: rcscList.country,
      disabled: false,
    },
    {
      label: "State",
      value: rcscId.state?.name ?? "",
      type: "state",
      items: rcscList.state,
      disabled: !rcscId.country,
    },
    {
      label: "City",
      value: rcscId.city?.name ?? "",
      type: "city",
      items: rcscList.city,
      disabled: !rcscId.state,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {dropdownData.map(({ label, value, type, items, disabled }) => (
        <FormControl
          key={label}
          variant="standard"
          fullWidth
          sx={{
            ...dropdownStyles, // Spread the styles from dropdownStyles
            "& .MuiInput-underline:before": {
              borderColor: addressErr[type] ? "error.main" : "primary.main",
            },
            "& .MuiInputLabel-root": { color: addressErr[type] ? "error.main" : "primary.main", fontSize: "17px" },
          }}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            value={value as string | any}
            onChange={handleChange(type as "country" | "state" | "city")}
            label={label}
            disabled={disabled}
            MenuProps={menuProps}
            sx={{
              "& .MuiSelect-select": {
                fontSize: "20px", // Set the desired font size for the selected value
                color: "primary.main", // Optional: Set the text color for the selected value
                mt: 1,
              },
            }}
          >
            {items.map((item) => (
              <MenuItem key={item.id} value={item.name || ""}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          {addressErr[type] && (
            <Typography color="error" variant="caption" sx={{ marginTop: 0.5 }}>
              {addressErr[type]}
            </Typography>
          )}
        </FormControl>
      ))}

      {/* Phone Code Dropdown */}
      {/* <TextField
        variant="standard"
        fullWidth
        label="Phone Code"
        // disabled
        InputProps={{
          readOnly: true, // Makes the field read-only
        }}
        value={`  ${rcscId?.country?.phone_code || ""}`}
        InputLabelProps={{
          shrink: Boolean(rcscId?.country?.phone_code), // Shrink the label if there's a value
        }}
      /> */}
    </Box>
  );
};

export default Rcsc;
