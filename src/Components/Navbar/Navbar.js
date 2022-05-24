import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import CustomLink from "../CustomLink/CustomLink";
import Loading from "../Loading/Loading";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const [role, roleLoading, userName] = useRole();
  if (loading || roleLoading) {
    return <Loading />;
  }

  return (
    <nav class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div className=" bg-accent mx-auto z-50 sticky top-0 w-full  navbar">
          <div class="nav-content w-full max-w-7xl mx-auto z-50">
            <Link to="/home" class="flex-1 px-2 mx-2 text-white">
              Forge The Drill
            </Link>
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
              <ul class="menu-horizontal">
                <li>
                  <CustomLink to="/home">Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/blogs">Blogs</CustomLink>
                </li>
                {user ? (
                  <>
                    {role === "admin" && (
                      <li>
                        <CustomLink to="/dashboard/manage-all-orders">
                          Dashboard
                        </CustomLink>
                      </li>
                    )}
                    {role !== "admin" && (
                      <li>
                        <CustomLink to="/dashboard/my-orders">
                          Dashboard
                        </CustomLink>
                      </li>
                    )}

                    <li>
                      <CustomLink to="/dashboard/profile">
                        {userName ? userName : "User"}
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink onClick={() => signOut(auth)} to="/login">
                        Logout
                      </CustomLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <CustomLink to="/login">Login</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/register">Register</CustomLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-accent text-white">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          {user ? (
            <>
              <div class="collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary rounded-tr-xl rounded-tl-xl peer-checked:border-t-2  text-primary-content peer-checked:border-x-2 border-white">
                  Dashboard
                </div>
                <div class="collapse-content bg-primary  rounded-br-xl rounded-bl-xl text-primary-content peer-checked:border-x-2 peer-checked:border-b-2 border-white">
                  <ul>
                    {role === "admin" || (
                      <>
                        <li>
                          <NavLink
                            className="uppercase"
                            to="/dashboard/my-orders"
                          >
                            My Orders
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="uppercase"
                            to="/dashboard/add-review"
                          >
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
                          <NavLink
                            className="uppercase"
                            to="/dashboard/make-admin"
                          >
                            Make Admin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="uppercase"
                            to="/dashboard/add-product"
                          >
                            Add A Product
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

              <li>
                <Link to="/dashboard/profile">
                  {userName ? userName : "User"}
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
    </nav>
  );
};

export default Navbar;
