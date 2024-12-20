import { loadingSuccessToast } from "@/components/toastify/Toast";
import { Iaddress, profilDetails } from "@/data/profile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const navigate = useNavigate();

  const userData = profilDetails;
  const defaultAddress: Iaddress | undefined = userData.address.find((a) => a.default); // Fixed syntax

  const handleAddress = () => {
    navigate("/user/profile/address");
  };
  const handleUpdatePassword = () => {
    navigate("/user/profile/update-password", { state: { phone_number: userData.phone_number } });
  };
  const handleUpdateInformation = () => {
    navigate("/user/profile/update-information");
  };

  const handleAddAddress = () => {
    navigate("/user/profile/manage-address", { state: { action: "Add" } });
  };
  const handleUpdateAddress = (e: Iaddress) => {
    console.log("address handleUpdateAddress", e);

    navigate("/user/profile/manage-address", {
      state: { address: e, action: "Update" },
    });
  };

  // Manageaddress

  const handlesDefaultAddres = (id: string | undefined) => {
    console.log("handlesDefaultAddres_ id", id);
    loadingSuccessToast({ message: "Default address changed" });
  };

  // Edit
  const [openRemoveDialog, setOpenRemoveDialog] = useState<boolean>(false);
  const [removeAddress, setRemoveAddress] = useState<Iaddress>();

  const handleRemoveAddressDialog = (address: Iaddress) => {
    setRemoveAddress(address);
    setOpenRemoveDialog(true);
  };
  const handleRemoveAddress = (address: Iaddress | undefined) => {
    console.log("handleRemoveAddressid", address);
    loadingSuccessToast({ message: "Remove address successfully" });
    setTimeout(() => {
      setOpenRemoveDialog(false);
    }, 1500);
  };

  return {
    variables: {
      userData,
      defaultAddress,
      removeAddress,
      openRemoveDialog,
      setOpenRemoveDialog,
    },
    methods: { handleAddress, handleUpdatePassword, handleAddAddress, handleUpdateAddress, handlesDefaultAddres, handleRemoveAddress, handleRemoveAddressDialog, handleUpdateInformation },
  };
};

export { useProfile };
// /user/profile/information
