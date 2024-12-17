import { productData } from "@/data/product";
import { storesData } from "@/data/stores";
import { useParams } from "react-router-dom";

export const useStoreDetails = () => {
  const { id } = useParams();
  const store = storesData.find((e) => e.id == id);
  const products = productData.filter((product) => product.store.id === id);

  console.log("store", store);

  return {
    variable: { store, products },
    methods: {},
  };
};
