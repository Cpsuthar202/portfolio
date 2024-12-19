import { errorToast, successToast } from "@/components/toastify/Toast";
import { orderData } from "@/data/orderData";
import { useState } from "react";

export const useOrder = () => {
  const orderItemData = orderData;
  const [expanded, setExpanded] = useState<string | false>(false);
  const [productRating, setProductRating] = useState<{ product_id: string; rat: number | null | undefined }>({ product_id: "", rat: 0 });

  console.log("productRating", productRating);

  const handleProductRatingChange = (id: string, newRating: number | undefined | null) => {
    setProductRating({ product_id: id, rat: newRating }); // Update productRating with the new rating
  };

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    console.log(event);

    setExpanded(isExpanded ? panel : false);
  };

  const handleRatingSubmit = (id: string) => {
    // Logic to handle the submit action, like sending the rating to an API or updating state
    if (productRating.product_id === id && productRating.rat) {
      successToast({ message: "Thank you for your rating!" });
    } else {
      errorToast({ message: "Please provide a rating before submitting" });
    }
  };

  console.log("orderItemData", orderItemData);

  return {
    variable: { orderItemData, expanded, productRating },
    methods: { handleAccordionChange, handleRatingSubmit, handleProductRatingChange },
  };
};
