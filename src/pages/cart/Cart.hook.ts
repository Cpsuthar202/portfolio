import { errorToast, successToast } from "@/components/toastify/Toast";
import { cartData } from "@/data/cartData";
import { getcart, postcart, postremovecart } from "@/store/reducers/cart/service";
import { IcartPayload } from "@/store/reducers/cart/type";
import { postbuyorder, postorder } from "@/store/reducers/order/service";
import { IbuyPayload, IOrderPayload } from "@/store/reducers/order/type";
import { getprofile } from "@/store/reducers/profile/service";
import { getwish, posttogglewish } from "@/store/reducers/wish/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useCart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buydata = location?.state?.data; // User data from location state
  const actiontype = location?.state?.action;
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  const dispatch = useAppDispatch();
  const { carts, isLoading } = useAppSelector((state) => state.carts);
  const { wishs } = useAppSelector((state) => state.wishs);
  const { profile } = useAppSelector((state) => state.profiles);
  const handleGetProfiles = async () => {
    try {
      await dispatch(getprofile()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };
  const handleGetCart = async () => {
    try {
      await dispatch(getcart()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handlePostCart = async (data: IcartPayload) => {
    try {
      const res = await dispatch(postcart(data)).unwrap();
      successToast({ message: res.message });
      handleGetCart();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  const handleGetWish = async () => {
    try {
      await dispatch(getwish()).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetCart();
    handleGetProfiles();
    handleGetWish();
  }, []);

  // Increase item quantity if below maxQuantity
  const handleIncrement = (data: IcartPayload) => {
    const datas = {
      product_id: data?.product?.id,
      quantity: +1,
      ...(data.color && { color: data.color }),
      ...(data.size && { size: data.size }),
    };
    handlePostCart(datas as IcartPayload);
  };

  // Decrease item quantity if above 1
  const handleDecrement = (data: IcartPayload) => {
    const datas = {
      product_id: data?.product?.id,
      quantity: -1,
      ...(data.color && { color: data.color }),
      ...(data.size && { size: data.size }),
    };
    handlePostCart(datas as IcartPayload);
  };

  const healdToggleWishlistCart = async (id: string | undefined) => {
    try {
      const res = await dispatch(posttogglewish(id as string)).unwrap();
      successToast({ message: res.message });
      handleGetWish();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };
  const healdRemoveCart = async (id: string) => {
    try {
      const res = await dispatch(postremovecart(id as string)).unwrap();
      successToast({ message: res.message });
      handleGetCart();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };
  const handleCheckOut = () => {
    navigate("/user/check-out");
  };

  const handleAddress = () => {
    navigate("/user/profile/address");
  };
  const handlePaymentMethod = (type: string) => {
    setPaymentMethod(type);
  };

  const handleOrder = async () => {
    if (!profile?.address?.id) {
      return errorToast({ message: "Add Address" });
    }

    if (actiontype === "buy") {
      const data: IbuyPayload = {
        address_id: profile?.address?.id,
        payment_method: paymentMethod,
        product_id: buydata?.product?.id,
        quantity: buydata.quantity,
        color: buydata.color,
        size: buydata.size,
        shop_id: buydata?.product?.shop_id,
      };

      try {
        const res = await dispatch(postbuyorder(data)).unwrap();
        successToast({ message: res.message });
        navigate("/user/order");
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } else {
      const data: IOrderPayload = {
        address_id: profile?.address?.id,
        payment_method: paymentMethod,
      };
      try {
        const res = await dispatch(postorder(data)).unwrap();
        successToast({ message: res.message });
        navigate("/user/order");
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    }
  };

  return {
    variable: { carts, wishs, cartData, paymentMethod, profile, isLoading, actiontype, buydata },
    methods: { navigate, handleIncrement, handleDecrement, healdToggleWishlistCart, healdRemoveCart, handleCheckOut, handleAddress, handlePaymentMethod, handleOrder },
  };
};
