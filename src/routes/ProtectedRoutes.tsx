// import Dashboard from "@/pages/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedWrapper from "./wrapper/ProtectedWrapper";
import Home from "@/pages/home/Home";
import Wishlist from "@/pages/wishlist/Wishlist";
import Profile from "@/pages/profile/Profile";
import Order from "@/pages/order/Order";
import Cart from "@/pages/cart/Cart";
import ProfileWrraper from "./wrapper/ProfileWrraper";
import Address from "@/pages/address/Address";
import Updatepassword from "@/pages/profile/Updatepassword";
import Checkout from "@/pages/cart/Checkout";
import UpdateInformation from "../pages/profile/UpdateInformation";
// import UpdateInformation from "@/pages/profile/UpdateInformation";
import Manageaddress from "@/pages/address/Manageaddress";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedWrapper />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route index element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<ProfileWrraper />}>
          <Route index element={<Navigate to="/profile/information" replace />} />
          <Route path="information" element={<Profile />} />
          <Route path="update-information" element={<UpdateInformation />} />
          <Route path="address" element={<Address />} />
          <Route path="manage-address" element={<Manageaddress />} />
          <Route path="update-password" element={<Updatepassword />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check-out" element={<Checkout />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/user" replace />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
