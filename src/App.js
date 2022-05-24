import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./Authentication/RequireAdmin";
import RequireAuth from "./Authentication/RequireAuth";
import RequireUser from "./Authentication/RequireUser";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/DashboardPage/Dashboard/Dashboard";
import Profile from "./Pages/DashboardPage/Profile/Profile";
import NotFound from "./Pages/NotFound/NotFound";
import PurchasePage from "./Pages/PurchasePage/PurchagePage";
import { adminRoutes } from "./Routes/adminRoutes";
import { privateRoute } from "./Routes/privateRoute";
import { publicDashboard } from "./Routes/publicDashboard";
import { publicRoute } from "./Routes/publicRoute";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route element={<RequireAuth />}>
            {privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route element={<RequireAdmin />}>
                {adminRoutes.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
              </Route>
              <Route element={<RequireUser />}>
                {publicDashboard.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
              </Route>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Navbar>
    </div>
  );
}

export default App;
