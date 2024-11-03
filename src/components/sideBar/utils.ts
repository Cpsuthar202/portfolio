interface ITextButtonList {
  id: string;
  label: string;
  link: string;
}

const sidebarMenuList: ITextButtonList[] = [
  {
    id: "profile",
    label: "Profile",
    link: "/user/profile",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/",
  },
  {
    id: "categories",
    label: "Categories",
    link: "/display/categorie",
  },
  {
    id: "brands",
    label: "Brands",
    link: "/display/brand",
  },
  {
    id: "stores",
    label: "Stores",
    link: "/display/store",
  },
  {
    id: "products",
    label: "Products",
    link: "/product",
  },
  {
    id: "best_selling",
    label: "Bast Selling",
    link: "/best_selling",
  },
  {
    id: "your_wishlist",
    label: "Your Wishlist",
    link: "/user/wishlist",
  },

  {
    id: "your_order",
    label: "Your Order",
    link: "/user/order",
  },
];

export { sidebarMenuList };
