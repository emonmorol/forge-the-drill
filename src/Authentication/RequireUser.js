import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import auth from "../firebase.init";
import useRole from "../Hooks/useRole";

function RequireUser() {
  const [user, loading] = useAuthState(auth);
  const [role, roleLoading] = useRole();
  let location = useLocation();

  if (loading || roleLoading) {
    return <Loading />;
  }

  console.log(role);
  console.log(user);
  if (!user || role === "admin") {
    console.log("inside require user");
    // signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireUser;
