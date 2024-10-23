import { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "@/data/product";

const useProduct = () => {
  const { product_id } = useParams();
  const product = productData.find((e) => e.id === product_id);
  const maxQuantity = product?.stock || 0;

  const [stectImage, setStectImage] = useState<string | undefined>(product?.images[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return {
    variables: {
      product,
      stectImage,
      quantity,
      maxQuantity,
    },
    methods: {
      setStectImage,
      handleIncrement,
      handleDecrement,
    },
  };
};

export { useProduct };
