import { getprofile } from "@/store/reducers/profile/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.profiles);

  const handleAddress = () => {
    navigate("/user/profile/address");
  };
  const handleUpdatePassword = () => {
    navigate("/user/profile/update-password");
  };
  const handleUpdateInformation = () => {
    navigate("/user/profile/update-information", { state: { profile_information: profile } });
  };

  // Manageaddress

  const handleGetProfiles = async () => {
    try {
      await dispatch(getprofile()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetProfiles();
  }, []);

  return {
    variables: {
      profile,
    },
    methods: { handleAddress, handleUpdatePassword, handleUpdateInformation },
  };
};

export { useProfile };
// /user/profile/information
