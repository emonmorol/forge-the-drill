import AddAProduct from "../Pages/DashboardPage/AddAProduct/AddAProduct";
import MakeAdmin from "../Pages/DashboardPage/MakeAdmin/MakeAdmin";
import ManageAllOrders from "../Pages/DashboardPage/ManageAllOrders/ManageAllOrders";
import ManageProducts from "../Pages/DashboardPage/ManageProducts/ManageProducts";
// import Profile from "../Pages/DashboardPage/Profile/Profile";

export const adminRoutes = [
  {
    path: "manage-all-orders",
    name: "ManageAllOrders",
    Component: ManageAllOrders,
  },
  { path: "make-admin", name: "MakeAdmin", Component: MakeAdmin },
  { path: "add-product", name: "AddAProduct", Component: AddAProduct },
  { path: "manage-product", name: "ManageProduct", Component: ManageProducts },
];
