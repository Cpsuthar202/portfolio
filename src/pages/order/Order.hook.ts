import { errorToast, successToast } from "@components/toastify/Toast";
import { getorder, postratorder } from "@/store/reducers/order/service";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalAuth } from "@/utils/localStorage";

export const useOrder = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.orders);

  const handleGetOrder = async () => {
    try {
      const payload: { user_id: string } = { user_id: getLocalAuth().user.id };
      await dispatch(getorder(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetOrder();
  }, []);

  const [expanded, setExpanded] = useState<string | false>(false);
  const [productRating, setProductRating] = useState<{ id: string; rating: number | null | undefined }>({ id: "", rating: 0 });

  const handleProductRatingChange = (id: string, newRating: number | null | undefined) => {
    setProductRating({ id: id, rating: newRating }); // Update productRating with the new rating
  };

  const handleAccordionChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleRatingSubmit = async (id: string) => {
    // Logic to handle the submit action, like sending the rating to an API or updating state
    if (productRating.id === id && productRating.rating) {
      try {
        const res = await dispatch(postratorder(productRating)).unwrap();
        successToast({ message: res.message });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        console.warn(errorMessage);
      }
      // successToast({ message: "Thank you for your rating!" });
    } else {
      errorToast({ message: "Please provide a rating before submitting" });
    }
  };

  return {
    variable: { orders, navigate, expanded, productRating },
    methods: { handleAccordionChange, handleRatingSubmit, handleProductRatingChange },
  };
};
