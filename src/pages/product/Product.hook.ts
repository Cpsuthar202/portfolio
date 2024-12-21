import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "@/data/product";
import { useMediaQuery, useTheme } from "@mui/material";
import { RatingDistribution } from "./utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { successToast } from "@/components/toastify/Toast";
import { Icolor, Iproduct } from "@/store/reducers/product/type";

const useProduct = () => {
  // Extract route parameters
  const { product_id, label, id } = useParams<{ product_id: string; label: string; id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  // Media query to detect small screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Redux selector for the search title from the top bar
  const { searchTitle } = useAppSelector((state) => state.topbar);

  // State to manage filtered product list
  const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);

  // Fetch the selected product details
  const product = productData.find((e) => e.id === product_id);

  // State to manage product quantity
  const [quantity, setQuantity] = useState<number>(1);
  const maxQuantity = product?.stock || 0;

  // State to manage selected product details for cart
  const [cardProduct, setCardProduct] = useState<{
    product_id: string | undefined;
    size: string | undefined;
    color: Icolor | undefined;
    quantity: number;
  }>({
    product_id: product?.id,
    size: product?.sizes?.[0],
    color: product?.colors?.[0],
    quantity,
  });

  // State to manage the selected image of the product
  const [selectImage, setSelectImage] = useState<string | undefined>(product?.images[0]);

  // Rating distribution for the product
  const ratingsData: RatingDistribution[] = [
    { rating: "5 Star", count: product?.ratings?.rat_5 || 0, color: "#4CAF50" },
    { rating: "4 Star", count: product?.ratings?.rat_4 || 0, color: "#8BC34A" },
    { rating: "3 Star", count: product?.ratings?.rat_3 || 0, color: "#CDDC39" },
    { rating: "2 Star", count: product?.ratings?.rat_2 || 0, color: "#FFC107" },
    { rating: "1 Star", count: product?.ratings?.rat_1 || 0, color: "#F44336" },
  ];

  // Effect to filter products based on the route parameters and search title
  useEffect(() => {
    let filtered = productData;

    // Filter based on label (categorie, brand, store)
    if (label === "categorie") {
      filtered = filtered.filter((product) => product.categories.id === id);
    } else if (label === "brand") {
      filtered = filtered.filter((product) => product.brands.id === id);
    } else if (label === "store") {
      filtered = filtered.filter((product) => product.store.id === id);
    }

    // Apply search title filter
    if (searchTitle) {
      filtered = filtered.filter((product) => product.teg.some((tag) => tag.toLowerCase().includes(searchTitle.toLowerCase())));
    }

    setFilteredProducts(filtered);
  }, [label, id, searchTitle]);

  // Effect to reset search title when the component unmounts
  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, [dispatch]);

  // Increment product quantity
  const handleIncrement = () => {
    console.log("handleIncrement");

    if (quantity < maxQuantity) {
      setQuantity((prev) => prev + 1);
      setCardProduct({ ...cardProduct, quantity: quantity + 1 });
    }
  };

  // Decrement product quantity
  const handleDecrement = () => {
    console.log("handleDecrement");

    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setCardProduct({ ...cardProduct, quantity: quantity - 1 });
    }
  };

  // Handle adding product to cart
  const handleToCart = () => {
    console.log("handleToCart");

    successToast({ message: " product add successfully" });
    console.log("Added to cart", cardProduct);
  };

  // Handle buying product directly
  const handleToWishlist = (id: string | undefined) => {
    console.log("handleToWishlist");

    successToast({ message: "product add to wishlist  successfully" });
    console.log("handleToWishlist", id);
  };
  const handleToBuy = () => {
    console.log("handleToBuy");

    console.log("Purchased", cardProduct);
  };

  return {
    variables: {
      product,
      selectImage,
      setSelectImage,
      quantity,
      maxQuantity,
      isSmallScreen,
      ratingsData,
      searchTitle,
      filteredProducts,
      cardProduct,
      setCardProduct,
    },
    methods: {
      handleIncrement,
      handleDecrement,
      navigate,
      handleToBuy,
      handleToCart,
      handleToWishlist,
    },
  };
};

export { useProduct };
