import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { IproductPayload } from "@/store/reducers/product/type";
import { getproducts } from "@/store/reducers/product/service";

const useProduct = () => {
  // const { product_id, label, id } = useParams<{ product_id: string; label: string; id: string }>();

  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  const handleGetProducts = async () => {
    try {
      const payload: IproductPayload = {
        limit: 20,
        page: 1,
        // brandId: "20241229bran214324197",
        // categoryId: "20241229cate192337946",
        // shopId: "20250103shop155142361",
        // searchTerm: "aaaaaaaaaaaaaaaaaaaaaaaa",
      };
      await dispatch(getproducts(payload)).unwrap();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      console.warn(errorMessage);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  // Extract route parameters

  // Media query to detect small screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Redux selector for the search title from the top bar
  const { searchTitle } = useAppSelector((state) => state.topbar);

  // State to manage filtered product list
  // const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);

  // Fetch the selected product details
  // const product = productData.find((e) => e.id === product_id);

  // State to manage product quantity
  // const [quantity, setQuantity] = useState<number>(1);
  // const maxQuantity = product?.stock || 0;

  // State to manage selected product details for cart
  // const [cardProduct, setCardProduct] = useState<{
  //   product_id: string | undefined;
  //   size: string | undefined;
  //   color: any | undefined;
  //   quantity: number;
  // }>({
  //   product_id: product?.id,
  //   size: product?.sizes?.[0],
  //   color: product?.colors?.[0],
  //   quantity,
  // });

  // State to manage the selected image of the product
  // const [selectImage, setSelectImage] = useState<string | undefined>(products?.images[0]);

  // Rating distribution for the product

  // // Effect to filter products based on the route parameters and search title
  // useEffect(() => {
  //   let filtered = productData;

  //   // Filter based on label (categorie, brand, store)
  //   if (label === "categorie") {
  //     filtered = filtered.filter((product) => product.categories.id === id);
  //   } else if (label === "brand") {
  //     filtered = filtered.filter((product) => product.brands.id === id);
  //   } else if (label === "store") {
  //     filtered = filtered.filter((product) => product.store.id === id);
  //   }

  //   // Apply search title filter
  //   if (searchTitle) {
  //     filtered = filtered.filter((product) => product.teg.some((tag) => tag.toLowerCase().includes(searchTitle.toLowerCase())));
  //   }

  //   setFilteredProducts(filtered);
  // }, [label, id, searchTitle]);

  // Effect to reset search title when the component unmounts
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
