import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { brands } from "@/data/brands";
import { categoriesData } from "@/data/categories";
import { storesData } from "@/data/stores";
import { Icategories } from "@/store/reducers/category/type";
import { Ibrands } from "@/store/reducers/brand/type";
import { IstoresData } from "@/store/reducers/shop/type";

type DataItem = Icategories | Ibrands | IstoresData;

const useDisplay = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { label } = useParams<{ label: string }>();
  const { searchTitle } = useAppSelector((state) => state.topbar);

  // Reset search title on component unmount
  useEffect(() => {
    // Set up logic when the component mounts
    dispatch(setSearchTitle(""));

    // Cleanup function to reset searchTitle when the component unmounts
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, [dispatch]);
  // Fetch and filter data based on label and searchTitle
  const getData = (): DataItem[] => {
    const data = label === "categorie" ? categoriesData : label === "brand" ? brands : label === "store" ? storesData : [];
    return data.filter((item) => {
      const itemLabel = "label" in item ? item.label : "store_name" in item ? item.store_name : "";
      return itemLabel.toLowerCase().includes(searchTitle.toLowerCase());
    });
  };

  // Navigate based on item type
  const handleNavigation = (item: DataItem) => {
    const path = label === "store" ? `/store_details/${item.id}` : `/product/${label}/${item.id}`;
    navigate(path);
  };

  return {
    variable: { searchTitle, label },
    methods: { getData, handleNavigation },
  };
};

export default useDisplay;
