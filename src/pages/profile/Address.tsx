import { Box, Button, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useProfile } from "./Profile.hook";
import Displayaddress from "./utility/Displayaddress";
import { Add, Close } from "@mui/icons-material";
import SimpleDialog from "@/components/dialog/SimpleDialog";
import { mColor } from "@color";

const Address = () => {
  const {
    variables: { userData, removeAddress, openRemoveDialog, setOpenRemoveDialog },
    methods: { handleAddAddress, handleUpdateAddress, handlesDefaultAddres, handleRemoveAddressDialog, handleRemoveAddress },
  } = useProfile();

  return (
    <>
      <Container sx={{ p: 0 }}>
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
              <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 1, height: "100%", p: 2, border: e.default ? 1.5 : 0, borderColor: "primary.main" }}>
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
