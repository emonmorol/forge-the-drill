import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useRole from "../../Hooks/useRole";
import CustomLink from "../CustomLink/CustomLink";
import MobileLink from "../CustomLink/MobileLink";
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
        <ul class="p-4 overflow-y-auto w-80 bg-accent text-white">
          <li className="w-full mb-7">
            <MobileLink to="/home">Home</MobileLink>
          </li>
          <li className="w-full mb-7">
            <MobileLink to="/blogs">Blogs</MobileLink>
          </li>
          {user ? (
            <>
              {role === "admin" && (
                <li className="w-full mb-7">
                  <MobileLink to="/dashboard/manage-all-orders">
                    Dashboard
                  </MobileLink>
                </li>
              )}
              {role !== "admin" && (
                <li className="w-full mb-7">
                  <MobileLink to="/dashboard/my-orders">Dashboard</MobileLink>
                </li>
              )}

              <li className="w-full mb-7">
                <MobileLink to="/dashboard/profile">
                  {userName ? userName : "User"}
                </MobileLink>
              </li>
              <li className="w-full mb-7">
                <MobileLink onClick={() => signOut(auth)} to="/login">
                  Logout
                </MobileLink>
              </li>
            </>
          ) : (
            <>
              <li className="w-full mb-7">
                <MobileLink to="/login">Login</MobileLink>
              </li>
              <li className="w-full mb-7">
                <MobileLink to="/register">Register</MobileLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
