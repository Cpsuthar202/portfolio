import { successToast } from "@/components/toastify/Toast";
import { deleteaddress, getaddresses, setdefaultaddress } from "@/store/reducers/address/service";
import { IAddress } from "@/store/reducers/address/type";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAddress = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.addresses);

  console.log({ addresses });

  const handleGetAddresses = async () => {
    try {
      await dispatch(getaddresses()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetAddresses();
  }, []);

  const handleAddAddress = () => {
    navigate("/user/profile/manage-address", { state: { action: "Add" } });
  };
  const handleUpdateAddress = (e: IAddress) => {
    console.log("address handleUpdateAddress", e);

    navigate("/user/profile/manage-address", {
      state: { address: e, action: "Update" },
    });
  };

  const handlesDefaultAddres = async (id: string | undefined) => {
    try {
      const promise = dispatch(setdefaultaddress(id as string));
      const res = await promise.unwrap();
      successToast({ message: res.message }); // Show success toast
      handleGetAddresses();
    } catch (error: unknown) {
      setOpenRemoveDialog(false);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  // Edit
  const [openRemoveDialog, setOpenRemoveDialog] = useState<boolean>(false);
  const [removeAddress, setRemoveAddress] = useState<IAddress | undefined | null>();

  const handleRemoveAddressDialog = (address: IAddress) => {
    setRemoveAddress(address);
    setOpenRemoveDialog(true);
  };
  const handleRemoveAddress = async (address: IAddress | undefined | null) => {
    try {
      const promise = dispatch(deleteaddress(address?.id as string));
      const res = await promise.unwrap();
      successToast({ message: res.message }); // Show success toast
      handleGetAddresses();
      setOpenRemoveDialog(false);
    } catch (error: unknown) {
      setOpenRemoveDialog(false);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  return {
    variables: { addresses, removeAddress, openRemoveDialog, setOpenRemoveDialog },
    methods: { handleAddAddress, handleUpdateAddress, handlesDefaultAddres, handleRemoveAddress, handleRemoveAddressDialog },
  };
};
