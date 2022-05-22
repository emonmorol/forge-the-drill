import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../../Components/Loading/Loading";

const PurchasePage = () => {
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState(1);
  const [increasedQuantity, setIncreasedQuantity] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data: drill, isLoading } = useQuery(["drill", id], () =>
    primaryAxios.get(`/drill/${id}`)
  );

  if (isLoading) {
    return <Loading />;
  }
  const orderedQuantity = watch("quantity");

  const {
    name,
    price,
    image,
    minimumOrder,
    description,
    availableQuantity,
    _id,
  } = drill?.data;

  const onSubmit = (data) => {
    setTotalPrice(+data.quantity * price);
  };

  return (
    <div className="overflow-hidden">
      <h2>Details</h2>
      <div className="flex items-center justify-center lg:-mr-28 ">
        <div className="drill-card-body lg:-mr-28 z-10">
          <h2 class="card-title py-2 text-4xl uppercase text-center">
            Electric Drilling Machine
          </h2>
          <p className="w-[60ch] my-5">
            If a dog chews shoes whose shoes does he choose? If a dog chews
            shoes whose shoes does he choose?
          </p>
          <div className="flex justify-between mb-3">
            <p className="text-left">
              Available :{" "}
              <span className="font-bold text-lg">{availableQuantity}</span> Pcs
            </p>
            <p className="text-right">
              Minimum Order :{" "}
              <span className="font-bold text-lg">{minimumOrder}</span> Pcs
            </p>
          </div>
          <p className="text-left text-2xl uppercase font-medium">
            price: <span className="font-bold">${price}</span>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5 items-center justify-between  mb-3">
              <input
                type="number"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required",
                  },
                  max: {
                    value: availableQuantity,
                    message: `Maximum Order ${+availableQuantity} Unit`,
                  },
                  min: {
                    value: minimumOrder,
                    message: `Minimum Order ${+minimumOrder} Unit`,
                  },
                })}
                placeholder="Input Quantity"
                class="input input-bordered input-primary w-full max-w-xs"
              />
              <p className="bg-secondary py-3 w-full text-center rounded-lg text-lg">
                Total Price :{" "}
                <span className="font-bold text-primary">
                  ${orderedQuantity * price}
                </span>
              </p>
            </div>
            {errors?.quantity && (
              <p className="error text-left">{errors.quantity.message}</p>
            )}
            <button className="button w-full" type="submit">
              Order Now
            </button>
          </form>
        </div>
        <div className=" z-0">
          <img src="https://i.ibb.co/FJLgV3j/drill1-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
