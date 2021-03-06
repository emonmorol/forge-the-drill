import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import primaryAxios from "../../Api/primaryAxios";
import Division from "../../Components/Division/Division";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";
import Social from "./Social";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [name, setName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await primaryAxios.put("/user", {
          name: name,
          email: user?.user?.email,
        });
        if (data.token) {
          localStorage.setItem("authorizationToken", data.token);
        }
      })();

      navigate(from, { replace: true });
    }
  }, [user, from, navigate, updating, name]);

  if (loading || updating) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    setName(data?.name);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
    toast.success("Verification Email sent !");
  };

  return (
    <div className="bg-no-repeat bg-cover text-primary p-5 h-[100vh]">
      <div className="glass max-w-xl mx-auto flex flex-col justify-center items-center mt-20 lg:mt-40 rounded-2xl  border-4 shadow-2xl transition-all duration-300">
        <h2 className="pt-10 text-primary uppercase text-3xl font-bold">
          register
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 p-6 lg:p-10"
        >
          <div className="form-control w-full">
            <label className="input-group w-full">
              <span className="bg-primary text-xs lg:text-md font-normal uppercase text-center text-white w-1/4">
                Name
              </span>
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum Four Characters",
                  },
                })}
                placeholder="Enter your name"
                className="input input-bordered w-3/4"
              />
            </label>
            {errors?.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="input-group w-full">
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
                className="input input-bordered w-3/4"
              />
            </label>
            {errors?.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="input-group w-full">
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
                className="input input-bordered w-3/4"
              />
            </label>
            {errors?.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="error">{error.message}</p>}
          <button
            type="submit"
            className="btn btn-primary text-white rounded-lg w-full"
          >
            register
          </button>
        </form>
        <Link className="text-center -mt-5 text-primary text-sm" to="/login">
          Already have an account ?
        </Link>
        <Division />
        <Social />
      </div>
    </div>
  );
};

export default Register;
