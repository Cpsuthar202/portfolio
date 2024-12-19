import { cartData } from "@/data/cartData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Interfaces for cart items and price details
// interface CartItem {
//   product_id: string;
//   quantity: number;
//   delivery_charges: number;
//   discountPrice: number;
//   price: number;
// }

// interface PriceDetails {
//   totalPrice: number;
//   totalDiscountPrice: number;
//   totalDeliveryCharges: number;
//   totalSavings: number;
//   totalProducts: number;
//   totalQuantity: number;
// }

export const useCart = () => {
  const navigate = useNavigate();
  console.log("cartData", cartData);
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  // Initialize cart state with items in stock, setting quantity to 1
  // const [cartFData, setCartFData] = useState<CartItem[]>(
  //   cartData
  //     .filter((item) => item.stock > 0)
  //     .map((item) => ({
  //       product_id: item.id,
  //       quantity: 1,
  //       delivery_charges: item.delivery_charges,
  //       discountPrice: item.discountPrice,
  //       price: item.price,
  //     }))
  // );

  // Increase item quantity if below maxQuantity
  const handleIncrement = (product_id: string) => {
    console.log("handleIncrement", product_id);

    // setCartFData((prevCart) => prevCart.map((item) => (item.product_id === product_id && item.quantity < maxQuantity ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  // Decrease item quantity if above 1
  const handleDecrement = (product_id: string) => {
    console.log("handleIhandleDecrementncrement", product_id);
    // setCartFData((prevCart) => prevCart.map((item) => (item.product_id === product_id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
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

  // Calculate total prices, savings, quantities, and delivery charges
  // const calculatePriceDetails = (): PriceDetails =>
  //   cartFData.reduce(
  //     (acc, item) => {
  //       acc.totalPrice += item.price * item.quantity;
  //       acc.totalDiscountPrice += item.discountPrice * item.quantity;
  //       acc.totalDeliveryCharges += item.delivery_charges * item.quantity;
  //       acc.totalSavings = acc.totalPrice - acc.totalDiscountPrice;
  //       acc.totalProducts = cartFData.length;
  //       acc.totalQuantity += item.quantity;
  //       return acc;
  //     },
  //     {
  //       totalPrice: 0,
  //       totalDiscountPrice: 0,
  //       totalDeliveryCharges: 0,
  //       totalSavings: 0,
  //       totalProducts: 0,
  //       totalQuantity: 0,
  //     }
  //   );

  // const priceDetails = calculatePriceDetails();

  return {
    variable: { cartData, paymentMethod },
    methods: { navigate, handleIncrement, handleDecrement, healdWishlistCart, healdRemoveCart, handleCheckOut, handleAddress, handlePaymentMethod },
  };
};
