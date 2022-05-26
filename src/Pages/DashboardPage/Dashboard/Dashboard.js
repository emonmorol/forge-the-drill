import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../../Hooks/useRole";

const Dashboard = () => {
  const [role] = useRole();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#125e8124] flex flex-col items-center">
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
          {role === "admin" || (
            <>
              <li>
                <NavLink className="uppercase" to="/dashboard/my-orders">
                  My Orders
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/add-review">
                  Add A Review
                </NavLink>
              </li>
            </>
          )}
          {role === "admin" && (
            <>
              <li>
                <NavLink
                  className="uppercase"
                  to="/dashboard/manage-all-orders"
                >
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/make-admin">
                  Make Admin
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/add-product">
                  Add A Product
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/manage-product">
                  Manage Product
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink className="uppercase" to="/dashboard/profile">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
