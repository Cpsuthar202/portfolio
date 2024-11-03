import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSearchTitle } from "@/store/reducers/topBar/topBarSlice";
import { brands, Ibrands } from "@/data/brands";
import { categoriesData, Icategories } from "@/data/categories";
import { IstoresData, storesData } from "@/data/stores";

type DataItem = Icategories | Ibrands | IstoresData;

const useDisplayHook = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { label } = useParams<{ label: string }>();
  const { searchTitle } = useAppSelector((state) => state.topbar);

  // Clean up search title on unmount
  useEffect(() => {
    return () => {
      dispatch(setSearchTitle(""));
    };
  }, [dispatch]);

  // Function to fetch and filter data
  const getData = (): DataItem[] => {
    let data: DataItem[] = [];

    switch (label) {
      case "categorie":
        data = categoriesData;
        break;
      case "brand":
        data = brands;
        break;
      case "store":
        data = storesData;
        break;
      default:
        data = [];
    }

    return data.filter((item) => {
      const itemLabel = "label" in item ? item.label : "store_name" in item ? item.store_name : "";
      return itemLabel.toLowerCase().includes(searchTitle.toLowerCase());
    });
  };

  // Navigate to the correct path based on item type
  const handleNavigation = (item: DataItem) => {
    if (label === "store") {
      navigate(`/store_details/${item.id}`);
    } else {
      navigate(`/product/${label}/${item.id}`);
    }
  };

  return {
    variable: {
      searchTitle,
      label,
    },
    methods: {
      getData,
      handleNavigation,
    },
  };
};

export default useDisplayHook;
