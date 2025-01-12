import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { IproductPayload } from "@/store/reducers/product/type";
import { getproducts } from "@/store/reducers/product/service";

const useProduct = () => {
  const { label, id } = useParams<{ product_id: string; label: string; id: string }>();

  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const { searchTitle } = useAppSelector((state) => state.topbar);

  const handleGetProducts = async () => {
    try {
      const payload: IproductPayload = {
        limit: 20,
        page: 1,
        ...(label === "categorie" && { categoryId: id }), // Conditionally add categoryId
        ...(label === "brand" && { brandId: id }), // Conditionally add brandId
        ...(label === "shop" && { shopId: id }), // Conditionally add shopId
        ...(searchTitle && { searchTerm: searchTitle }), // Conditionally add   search
      };
      await dispatch(getproducts(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [searchTitle]);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, [dispatch]);

  return {
    variables: {
      products,
      isSmallScreen,
      searchTitle,
      navigate,
    },
    methods: {},
  };
};

export { useProduct };
