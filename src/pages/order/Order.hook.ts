import { errorToast, successToast } from "@/components/toastify/Toast";
import { useState } from "react";

export const useOrder = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [productRating, setProductRating] = useState<{ product_id: string; rat: number | null | undefined }>({ product_id: "", rat: 0 });

  console.log("productRating", productRating);

  const handleProductRatingChange = (id: string, newRating: number | undefined | null) => {
    setProductRating({ product_id: id, rat: newRating }); // Update productRating with the new rating
  };

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    console.log("event", event);
  };

  const handleRatingSubmit = (id: string) => {
    console.log("productRating.rat", productRating.rat);

    // Logic to handle the submit action, like sending the rating to an API or updating state
    if (productRating.product_id === id && productRating.rat) {
      successToast({ message: "Thank you for your rating!" });
    } else {
      errorToast({ message: "Please provide a rating before submitting" });
    }
  };

  return {
    variable: { expanded, productRating },
    methods: { handleAccordionChange, handleRatingSubmit, handleProductRatingChange },
  };
};
