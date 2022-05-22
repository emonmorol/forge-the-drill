import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-[#125e8124] flex flex-col items-center justify-center">
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-[#125e8140] text-base-content">
          <li>
            <Link className="uppercase" to="/dashboard/my-orders">
              My Orders
            </Link>
          </li>
          <li>
            <Link className="uppercase" to="/dashboard/add-review">
              Add A Review
            </Link>
          </li>
          <li>
            <Link className="uppercase" to="/dashboard/profile">
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
