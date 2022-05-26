import AllDrill from "../Pages/AllDrills/AllDrill";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Portfolio from "../Pages/Portfolio/Portfolio";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/all-drills", name: "Home", Component: AllDrill },
  { path: "/blogs", name: "Home", Component: Blogs },
  { path: "/login", name: "Home", Component: Login },
  { path: "/register", name: "Home", Component: Register },
  { path: "/portfolio", name: "Home", Component: Portfolio },
];
