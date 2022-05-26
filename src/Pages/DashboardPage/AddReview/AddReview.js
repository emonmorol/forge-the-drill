import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import primaryAxios from "../../../Api/primaryAxios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import auth from "../../../firebase.init";
import "./AddReview.css";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newReview = {
      ...data,
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
    };
    (async () => {
      const { data } = await primaryAxios.post("/review", newReview);
      if (data.acknowledged) {
        toast.success("Review Added Successfully");
        reset();
      }
    })();
  };
  return (
    <div className="review p-10 w-4/5 lg:w-1/2">
      <h2 className="text-xl mb-5 text-center font-bold uppercase text-primary">
        Say Something about us
      </h2>
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="font-medium">Rate 1 to 5</label>
          <select
            {...register("ratings")}
            placeholder="Rate 1 To 5"
            className="cursor-pointer input input-bordered input-primary w-full"
          >
            <option index value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label className="font-medium">Review Content</label>
          <textarea
            typeof="text"
            className="textarea textarea-primary w-full"
            {...register("reviewContent", {
              required: {
                value: true,
                message: "Content is required",
              },
              maxLength: {
                value: 160,
                message: `Maximum 160 Characters`,
              },
            })}
            placeholder="Enter Your Thought Here"
          ></textarea>
          {errors?.reviewContent && (
            <p className="error">{errors.reviewContent.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="button w-full rounded-xl overflow-hidden"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
