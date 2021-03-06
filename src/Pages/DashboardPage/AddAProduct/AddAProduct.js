import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import primaryAxios from "../../../Api/primaryAxios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (productInfo) => {
    (async () => {
      const { data } = await primaryAxios.post("/drill", productInfo);
      if (data.acknowledged) {
        toast.success("Drill Added Successfully");
        reset();
      }
    })();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 lg:w-1/2 flex flex-col flex-start my-10 shadow-lg p-5 rounded-2xl"
      >
        <SectionTitle>add a product</SectionTitle>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Product Title
          </label>
          <input
            type="text"
            placeholder="Provide Product Title Here"
            {...register("name", {
              required: {
                value: true,
                message: "Title is required",
              },
              minLength: {
                value: 4,
                message: "Minimum Four Characters",
              },
            })}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
          />
          {errors?.name && (
            <p className="error text-xs mb-3">{errors.name.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Total Stock
            </label>
            <input
              type="number"
              placeholder="Provide Product Title Here"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Total Stock is required",
                },
                min: {
                  value: 1,
                  message: "Negative Number Is not Allowed",
                },
              })}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
            />
            {errors?.availableQuantity && (
              <p className="error text-xs mb-3">
                {errors.availableQuantity.message}
              </p>
            )}
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Minimum Order Value
            </label>
            <input
              type="number"
              placeholder="Provide Product Title Here"
              {...register("minimumOrder", {
                required: {
                  value: true,
                  message: "Minimum Order Value is required",
                },
                min: {
                  value: 1,
                  message: "Negative Number Is not Allowed",
                },
              })}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
            />
            {errors?.minimumOrder && (
              <p className="error text-xs mb-3">
                {errors.minimumOrder.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Product Price (Usd)
            </label>
            <input
              type="number"
              placeholder="Provide Product Title Here"
              {...register("price", {
                required: {
                  value: true,
                  message: "Product Price is required",
                },
                min: {
                  value: 1,
                  message: "Negative Number Is not Allowed",
                },
              })}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
            />
            {errors?.price && (
              <p className="error text-xs mb-3">{errors.price.message}</p>
            )}
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Product Image URL
            </label>
            <input
              type="text"
              placeholder="Provide Product Title Here"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image URL is required",
                },
              })}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
            />
            {errors?.image && (
              <p className="error text-xs mb-3">{errors.image.message}</p>
            )}
          </div>
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Product Description
          </label>
          <textarea
            type="text"
            placeholder="Provide Product Title Here"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
          />
          {errors?.description && (
            <p className="error text-xs mb-3">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="button w-1/2 mx-auto rounded-2xl overflow-hidden"
        >
          {" "}
          Add
        </button>
      </form>
    </>
  );
};

export default AddAProduct;
