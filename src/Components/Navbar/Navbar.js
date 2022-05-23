import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }

  return (
    <nav class="relative drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="nav-content w-full navbar bg-accent z-50 sticky top-0">
          <div class="flex-1 px-2 mx-2 text-white">Forge The Drill</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/dashboard/my-orders">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/myProfile">
                      {user?.displayName ? user.displayName : "User"}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => signOut(auth)} to="/login">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Blogs">Navbar Item 2</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
