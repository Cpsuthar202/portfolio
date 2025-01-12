import { getproductbyid } from "@/store/reducers/product/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RatingDistribution } from "./utils";
import { postcart } from "@/store/reducers/cart/service";
import { IcartPayload } from "@/store/reducers/cart/type";
import { successToast } from "@/components/toastify/Toast";
import { getwish, posttogglewish } from "@/store/reducers/wish/service";

export const useProductDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { wishs } = useAppSelector((state) => state.wishs);
  const { product_id } = useParams<{ product_id: string; label: string; id: string }>();
  const isInWishlist = Array.isArray(wishs) && wishs?.some((w) => w?.product_id === product_id);
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.products);
  const [selectImage, setSelectImage] = useState<string | undefined>(product?.images[0]);
  const [cartProduct, setCardProduct] = useState<{ product_id: string; quantity: number; color?: string; size?: string }>({
    product_id: "",
    quantity: 1,
  });
  console.log({ cartProduct });

  useEffect(() => {
    if (product?.images) {
      setSelectImage(product.images[0]);
    }
    if (product) {
      setCardProduct((prevCardProduct) => ({
        ...prevCardProduct,
        product_id: product.id,
        ...(product.colors && { color: product.colors[0] }), // Conditionally set color
        ...(product.sizes && { size: product.sizes[0] }), // Conditionally set size
      }));
    }
  }, [product]);

  const handleGetProductById = async () => {
    try {
      await dispatch(getproductbyid(product_id as string)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    if (product_id) handleGetProductById();
  }, [product_id]);

  // const [quantity, setQuantity] = useState<number>(1);
  // Increment product quantity
  const handleIncrement = () => {
    console.log("handleIncrement");

    if (cartProduct?.quantity < (product?.stock ?? 0)) {
      setCardProduct((prevCardProduct) => ({
        ...prevCardProduct,
        quantity: prevCardProduct.quantity + 1,
      }));
    }
  };

  // Decrement product quantity
  const handleDecrement = () => {
    console.log("handleDecrement");

    if (cartProduct?.quantity > 1) {
      // Prevent decrementing below 1
      setCardProduct((prevCardProduct) => ({
        ...prevCardProduct,
        quantity: prevCardProduct.quantity - 1,
      }));
    }
  };

  // Handle adding product to cart
  const handleToCart = async () => {
    console.log("handleToCart");
    // postcart
    // try {
    //   await dispatch(getproductbyid(product_id as string)).unwrap();
    // } catch (error: unknown) {
    //   const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    //   console.warn(errorMessage);
    // }

    try {
      const payload: IcartPayload = cartProduct;
      const promise = dispatch(postcart(payload)); // Dispatch OTP request
      const res = await promise.unwrap();
      successToast({ message: res.message, duration: 3000 }); // Show success toast
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
    // successToast({ message: " product add successfully" });
    console.log("Added to cart");
  };

  // Handle buying product directly
  const handleToggleWishList = async (id: string | undefined) => {
    try {
      const res = await dispatch(posttogglewish(id as string)).unwrap();
      successToast({ message: res.message });
      try {
        await dispatch(getwish()).unwrap();
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };
  const handleToBuy = () => {};

  const ratingsData: RatingDistribution[] = [
    { rating: "5 Star", count: product?.ratings?.rat_5 || 0, color: "#4CAF50" },
    { rating: "4 Star", count: product?.ratings?.rat_4 || 0, color: "#8BC34A" },
    { rating: "3 Star", count: product?.ratings?.rat_3 || 0, color: "#CDDC39" },
    { rating: "2 Star", count: product?.ratings?.rat_2 || 0, color: "#FFC107" },
    { rating: "1 Star", count: product?.ratings?.rat_1 || 0, color: "#F44336" },
  ];

  return {
    variables: { product, wishs, isInWishlist, isSmallScreen, selectImage, setSelectImage, navigate, cartProduct, setCardProduct, ratingsData },
    methods: { handleDecrement, handleIncrement, handleToCart, handleToggleWishList, handleToBuy },
  };
};
