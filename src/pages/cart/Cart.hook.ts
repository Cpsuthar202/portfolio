import { errorToast, successToast } from "@/components/toastify/Toast";
import { cartData } from "@/data/cartData";
import { getcart, postcart } from "@/store/reducers/cart/service";
import { IcartPayload } from "@/store/reducers/cart/type";
import { postorder } from "@/store/reducers/order/service";
import { IOrderPayload } from "@/store/reducers/order/type";
import { getprofile } from "@/store/reducers/profile/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCart = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.carts);
  const { profile } = useAppSelector((state) => state.profiles);
  console.log(profile);
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

  useEffect(() => {
    handleGetCart();
    handleGetProfiles();
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

  // Placeholder methods for checkout, wishlist, and cart removal actions
  const healdWishlistCart = (id: string) => console.log({ id });
  const healdRemoveCart = (id: string) => console.log({ id });
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
  };

  return {
    variable: { carts, cartData, paymentMethod, profile },
    methods: { navigate, handleIncrement, handleDecrement, healdWishlistCart, healdRemoveCart, handleCheckOut, handleAddress, handlePaymentMethod, handleOrder },
  };
};
