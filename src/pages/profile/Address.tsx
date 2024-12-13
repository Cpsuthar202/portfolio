import { Box, Button, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useProfile } from "./Profile.hook";
import Displayaddress from "./utility/Displayaddress";
import { Add, CheckBox, CheckBoxOutlineBlank, Close } from "@mui/icons-material";
import SimpleDialog from "@/components/dialog/SimpleDialog";
import { mColor } from "@color";

const Address = () => {
  const {
    variables: { userData, removeAddress, openRemoveDialog, setOpenRemoveDialog },
    methods: { handleAddAddress, handleUpdateAddress, handlesDefaultAddres, handleRemoveAddressDialog, handleRemoveAddress },
  } = useProfile();

  return (
    <>
      <Container>
        <Grid container>
          <Grid item lg={4} md={6} sm={12} xs={12} sx={{ p: 1 }}>
            <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 1, height: "100%", p: 2, display: "grid", placeItems: "center" }}>
              <Button sx={{ display: "flex", flexDirection: "column" }} onClick={handleAddAddress}>
                <Add />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", px: 2 }}>
                  Add Address
                </Typography>
              </Button>
            </Box>
          </Grid>
          {userData.address.map((e, index) => (
            <Grid item lg={4} md={6} sm={12} xs={12} sx={{ p: 1 }} key={index}>
              <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 1, height: "100%", p: 2 }}>
                <Box>
                  <Typography variant="body1" sx={{ display: "flex", gap: 1 }}>
                    Default {e.default ? <CheckBox sx={{ color: "primary.main" }} /> : <CheckBoxOutlineBlank sx={{ color: "primary.main" }} />}
                    {/* <Radio
                    checked={defaultAddressId === e.id}
                    onChange={handledefaultAddressChange}
                    value={e.id}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{ color: "primary.main", ml: 1 }}
                    size="small"
                    icon={<CheckBoxOutlineBlank />} // Icon for unchecked state
                    checkedIcon={<CheckBox />} // Icon for checked state
                  /> */}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                </Box>
                <Displayaddress address={e} />
                <Box sx={{ mt: 1 }}>
                  <Button onClick={() => handleUpdateAddress(e)} sx={{ py: 0, pt: "1px" }}>
                    Edit
                  </Button>
                  <Button sx={{ py: 0, pt: "1px" }} onClick={() => handleRemoveAddressDialog(e)}>
                    Remove
                  </Button>
                  {!e.default && (
                    <Button onClick={() => handlesDefaultAddres(e.id)} sx={{ py: 0, pt: "1px" }}>
                      Set as Default
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {openRemoveDialog && (
        <SimpleDialog open={openRemoveDialog} handleClose={() => setOpenRemoveDialog(false)}>
          <Box sx={{ background: mColor.white, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "primary.main" }}>
                Confirm Deletion
              </Typography>
              <IconButton onClick={() => setOpenRemoveDialog(false)}>
                <Close />
              </IconButton>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Displayaddress address={removeAddress} />
            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => handleRemoveAddress(removeAddress)}>
              Remove
            </Button>
          </Box>
        </SimpleDialog>
      )}
    </>
  );
};

export default Address;
