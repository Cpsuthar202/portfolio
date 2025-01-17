import { useNavigate } from "react-router-dom";
import product from "@/data/products.json";

const useSideBar = () => {
  const navigate = useNavigate();
  console.log(product);

  // Extract all model_name values
  const model_name = product.map((product) => product.model_name);

  console.log(model_name); // Output: ["GW 10", "GW 20"]

  // const [currentPathId, setCurrentPathId] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // useEffect(() => {
  //   // Extract the model_name query parameter if it exists
  //   const searchParams = new URLSearchParams(location.search);
  //   const modelNameParam = searchParams.get("model_name");

  //   if (modelNameParam && model_name.includes(modelNameParam)) {
  //     // Set the model_name as the currentPathId
  //     setCurrentPathId(modelNameParam);
  //   } else if (location.pathname) {
  //     // Match against sidebarMenuList
  //     setCurrentPathId(sidebarMenuList.find((it) => it.link === location.pathname)?.id ?? null);
  //   } else {
  //     setCurrentPathId(null);
  //   }
  // }, [location.pathname, location.search, sidebarMenuList, model_name]);

  // useEffect(() => {
  //   if (location.pathname) {
  //     setCurrentPathId(sidebarMenuList.find((it) => it.link === location.pathname)?.id ?? null);
  //   }
  // }, [location.pathname, sidebarMenuList]);

  return {
    variable: {},
    methods: {
      handleNavigate,
    },
  };
};
export { useSideBar };
