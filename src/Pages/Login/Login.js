import React from "react";
import { Link } from "react-router-dom";
import Division from "../../Components/Division/Division";
import Social from "./Social";

const Login = () => {
  return (
    <div className="bg-login bg-no-repeat bg-cover h-[100vh]">
      <div className="glass max-w-xl mx-auto flex flex-col justify-center items-center mt-20 rounded-2xl shadow-2xl">
        <h2 className="pt-10 text-gray-100 uppercase text-3xl font-bold">
          Login
        </h2>
        <form className="w-full flex flex-col gap-5 p-10">
          <div class="form-control w-full">
            <label class="input-group w-full">
              <span className="bg-primary font-bold uppercase text-center text-white w-1/4">
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                class="input input-bordered w-3/4"
              />
            </label>
          </div>
          <div class="form-control w-full">
            <label class="input-group w-full">
              <span className="bg-primary font-bold uppercase text-center text-white w-1/4">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-bordered w-3/4"
              />
            </label>
          </div>
          <button className="btn btn-primary text-white rounded-full w-full">
            Login
          </button>
        </form>

        <div className="flex justify-between items-center w-full px-10">
          <span className="cursor-pointer -mt-5 text-gray-100" to="/register">
            Forgot password ?
          </span>
          <Link className="-mt-5 text-gray-100" to="/register">
            Don't have an account ?
          </Link>
        </div>
        <Division />
        <Social />
      </div>
    </div>
  );
};

export default Login;
