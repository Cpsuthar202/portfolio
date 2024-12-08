import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Color, Iproduct, productData } from "@/data/product";
import { useMediaQuery, useTheme } from "@mui/material";
import { RatingDistribution } from "./utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";

const useProduct = () => {
  const { product_id, label, id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Productlist
  const { searchTitle } = useAppSelector((state) => state.topbar);
  const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);
  useEffect(() => {
    let FilteredProducts = productData;
    if (label === "categorie") {
      FilteredProducts = productData.filter((product) => product.categories.id === id);
    } else if (label === "brand") {
      FilteredProducts = productData.filter((product) => product.brands.id === id);
    } else if (label === "store") {
      FilteredProducts = productData.filter((product) => product.store.id === id);
    }

    // Apply search filter
    if (searchTitle) {
      FilteredProducts = FilteredProducts.filter((product) => product.teg.some((tag) => tag.toLowerCase().includes(searchTitle.toLowerCase())));
    }

    setFilteredProducts(FilteredProducts);
  }, [label, id, searchTitle]);

  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, []);

  // ProductDetails
  const product = productData.find((e) => e.id === product_id);
  const [quantity, setQuantity] = useState<number>(1);
  const maxQuantity = product?.stock || 0;
  const [cardProduct, setcardproduct] = useState<{ product_id: string | undefined; size: string | undefined; color: Color | undefined; quantity: number }>({
    product_id: product?.id,
    size: product?.sizes?.[0],
    color: product?.colors?.[0],
    quantity: quantity,
  });

  const [selectImage, setselectImage] = useState<string | undefined>(product?.images[0]);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      setcardproduct({ ...cardProduct, quantity: quantity + 1 });
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setcardproduct({ ...cardProduct, quantity: quantity - 1 });
    }
  };

  const handleToCart = () => {
    console.log("handleToCart", cardProduct);
  };
  const handleToBuy = () => {
    console.log("handleToBuy", cardProduct);
  };
  const ratingsData: RatingDistribution[] = [
    { rating: "5 Start", count: product?.ratings?.rat_5 || 0, color: "#4CAF50" },
    { rating: "4 Start", count: product?.ratings?.rat_4 || 0, color: "#8BC34A" },
    { rating: "3 Start", count: product?.ratings?.rat_3 || 0, color: "#CDDC39" },
    { rating: "2 Start", count: product?.ratings?.rat_2 || 0, color: "#FFC107" },
    { rating: "1 Start", count: product?.ratings?.rat_1 || 0, color: "#F44336" },
  ];

  return {
    variables: {
      product,
      selectImage,
      setselectImage,
      quantity,
      maxQuantity,
      isSmallScreen,
      ratingsData,
      searchTitle,
      filteredProducts,
      cardProduct,
      setcardproduct,
    },
    methods: {
      handleIncrement,
      handleDecrement,
      navigate,
      handleToBuy,
      handleToCart,
    },
  };
};

export { useProduct };
