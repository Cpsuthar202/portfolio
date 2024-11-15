import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Iproduct, productData } from "@/data/product";
import { useMediaQuery, useTheme } from "@mui/material";
import { RatingDistribution } from "./utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";

const useProduct = () => {
  const { product_id, label, id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const { searchTitle } = useAppSelector((state) => state.topbar);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

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
  const ratingsData: RatingDistribution[] = [
    { rating: "5 Start", count: product?.ratings?.rat_5 || 0, color: "#4CAF50" },
    { rating: "4 Start", count: product?.ratings?.rat_4 || 0, color: "#8BC34A" },
    { rating: "3 Start", count: product?.ratings?.rat_3 || 0, color: "#CDDC39" },
    { rating: "2 Start", count: product?.ratings?.rat_2 || 0, color: "#FFC107" },
    { rating: "1 Start", count: product?.ratings?.rat_1 || 0, color: "#F44336" },
  ];

  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, []);

  return {
    variables: {
      product,
      stectImage,
      quantity,
      maxQuantity,
      isSmallScreen,
      ratingsData,
      searchTitle,
      filteredProducts,
    },
    methods: {
      setStectImage,
      handleIncrement,
      handleDecrement,
      navigate,
    },
  };
};

export { useProduct };
