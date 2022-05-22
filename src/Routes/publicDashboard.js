import AddReview from "../Pages/DashboardPage/AddReview/AddReview";
import MyOrders from "../Pages/DashboardPage/MyOrders/MyOrders";
import Profile from "../Pages/DashboardPage/Profile/Profile";

export const publicDashboard = [
  { path: "my-orders", name: "MyOrders", Component: MyOrders },
  { path: "add-review", name: "MyOrders", Component: AddReview },
  { path: "profile", name: "MyOrders", Component: Profile },
];
