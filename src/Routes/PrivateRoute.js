import Blogs from "../Pages/Blogs/Blogs";
// import Profile from "../Pages/DashboardPage/Profile/Profile";
import PurchasePage from "../Pages/PurchasePage/PurchagePage";

export const privateRoute = [
  { path: "/blogs", name: "Home", Component: Blogs },
  { path: "/purchase/:id", name: "Home", Component: PurchasePage },
];
