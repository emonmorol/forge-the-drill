import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => console.log(data);

  return (
    <>
      <h2 className="text-4xl font-bold my-6 uppercase text-primary">
        Add A Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="w-1/2 flex flex-col flex-start"
      >
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            type="text"
            placeholder="Provide Product Title Here"
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
            class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
          />
        </div>
        <button type="submit"> Add</button>
      </form>
    </>
  );
};

export default AddAProduct;
