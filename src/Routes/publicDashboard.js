import AddReview from "../Pages/DashboardPage/AddReview/AddReview";
import MyOrders from "../Pages/DashboardPage/MyOrders/MyOrders";
import Payment from "../Pages/DashboardPage/Payment/Payment";

export const publicDashboard = [
  { path: "my-orders", name: "MyOrders", Component: MyOrders },
  { path: "add-review", name: "MyOrders", Component: AddReview },
  { path: "payment/:id", name: "Payment", Component: Payment },
];
