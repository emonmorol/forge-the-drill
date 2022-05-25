import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import primaryAxios from "../../Api/primaryAxios";
import Division from "../../Components/Division/Division";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";
import Social from "./Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await primaryAxios.put("/user", {
          name: user?.user?.displayName,
          email: user?.user?.email,
        });
        if (data.token) {
          localStorage.setItem("authorizationToken", data.token);
        }
      })();

      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleResetPassword = async () => {
    const email = getValues("email");
    if (email) {
      if (sending) {
        toast("Email is sending");
      }
      if (resetError) {
        toast.error("Something Went Wrong, Try Again");
      }
      await sendPasswordResetEmail(email);
      toast.success("Email Sent , Please Check !");
    }
    if (!email) {
      toast.warning("Please Provide Your Email !");
    }
  };

  return (
    <div className="bg-no-repeat bg-cover p-5 h-[100vh]">
      <div className="glass max-w-xl mx-auto flex flex-col justify-center items-center  mt-20 lg:mt-40 rounded-2xl shadow-2xl">
        <h2 className="pt-10 text-primary uppercase text-3xl font-bold">
          Login
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 p-6 lg:p-10"
        >
          <div class="form-control w-full">
            <label class="input-group w-full">
              <span className="bg-primary text-xs lg:text-md font-normal uppercase text-center text-white w-1/4">
                Email
              </span>
              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please Provide Valid Email",
                  },
                })}
                placeholder="Enter your email"
                class="input input-bordered w-3/4"
              />
            </label>
            {errors?.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div class="form-control w-full">
            <label class="input-group w-full">
              <span className="bg-primary text-xs lg:text-md font-normal uppercase text-center text-white w-1/4">
                Password
              </span>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Minimum six characters, at least one letter and one number",
                  },
                })}
                placeholder="Enter your password"
                class="input input-bordered w-3/4"
              />
            </label>
            {errors?.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="error">{error.message}</p>}
          <button className="btn btn-primary text-white rounded-full w-full">
            Login
          </button>
        </form>

        <div className="flex justify-between items-center w-full px-10">
          <span
            onClick={handleResetPassword}
            className="cursor-pointer -mt-5 text-primary text-sm"
            to="/register"
          >
            Forgot password ?
          </span>
          <Link className="-mt-5  text-primary text-sm" to="/register">
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
