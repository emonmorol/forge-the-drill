import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Division from "../../Components/Division/Division";
import Social from "./Social";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-login bg-no-repeat bg-cover h-[100vh]">
      <div className="glass max-w-xl mx-auto flex flex-col justify-center items-center mt-20 rounded-2xl shadow-2xl">
        <h2 className="pt-10 text-gray-100 uppercase text-3xl font-bold">
          register
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5 p-10"
        >
          <div class="form-control w-full">
            <label class="input-group w-full">
              <span className="bg-primary font-bold uppercase text-center text-white w-1/4">
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
                class="input input-bordered w-3/4"
              />
            </label>
            {errors?.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div class="form-control w-full">
            <label class="input-group w-full">
              <span className="bg-primary font-bold uppercase text-center text-white w-1/4">
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
              <span className="bg-primary font-bold uppercase text-center text-white w-1/4">
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
          <button
            type="submit"
            className="btn btn-primary text-white rounded-full w-full"
          >
            register
          </button>
        </form>
        <Link className="text-center -mt-5 text-gray-100" to="/login">
          Already have an account ?
        </Link>
        <Division />
        <Social />
      </div>
    </div>
  );
};

export default Register;
