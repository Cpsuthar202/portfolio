import { loadingSuccessToast } from "@/components/toastify/Toast";
import { profilDetails } from "@/data/profile";
import { IAddress } from "@/store/reducers/address/type";
import { getprofile } from "@/store/reducers/profile/service";
// import { Iaddress } from "@/store/reducers/profile/type";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.profiles);

  console.log({ profile });

  const userData = profilDetails;
  const defaultAddress: IAddress | undefined = userData.address.find((a) => a.default); // Fixed syntax

  const handleAddress = () => {
    navigate("/user/profile/address");
  };
  const handleUpdatePassword = () => {
    navigate("/user/profile/update-password", { state: { phone_number: userData.phone_number } });
  };
  const handleUpdateInformation = () => {
    navigate("/user/profile/update-information", { state: { profile_information: profile } });
  };

  const handleAddAddress = () => {
    navigate("/user/profile/manage-address", { state: { action: "Add" } });
  };
  const handleUpdateAddress = (e: IAddress) => {
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
  const [removeAddress, setRemoveAddress] = useState<IAddress>();

  const handleRemoveAddressDialog = (address: IAddress) => {
    setRemoveAddress(address);
    setOpenRemoveDialog(true);
  };
  const handleRemoveAddress = (address: IAddress | undefined) => {
    console.log("handleRemoveAddressid", address);
    loadingSuccessToast({ message: "Remove address successfully" });
    setTimeout(() => {
      setOpenRemoveDialog(false);
    }, 1500);
  };

  const handleGetProfiles = async () => {
    try {
      await dispatch(getprofile()).unwrap();
    } catch (error: any) {
      console.warn(error?.message);
    }
  };

  useEffect(() => {
    handleGetProfiles();
  }, []);

  return {
    variables: {
      profile,
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
