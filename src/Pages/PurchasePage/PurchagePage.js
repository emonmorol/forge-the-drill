import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";
import swal from "sweetalert";
import Footer from "../../Components/Footer/Footer";

const PurchasePage = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [orderedQuantity, setOrderedQuantity] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { data: drill, isLoading } = useQuery(["drill", id], () =>
    primaryAxios.get(`/drill/${id}`)
  );

  const orderingQuantity = watch("quantity");
  console.log(orderingQuantity);

  if (isLoading) {
    return <Loading />;
  }
  const {
    name,
    price,
    image,
    minimumOrder,
    description,
    availableQuantity,
    _id,
  } = drill?.data;
  console.log(
    orderingQuantity >= minimumOrder || orderingQuantity <= availableQuantity
  );

  const onSubmit = (orderInfo) => {
    setOrderedQuantity(orderInfo.quantity);

    const placedOrder = {
      ...orderInfo,
      userName: user?.displayName,
      userEmail: user?.email,
      totalPrice: +orderInfo.quantity * price,
      productName: name,
      productId: _id,
      status: "Pending",
      productImage: image,
    };

    (async () => {
      const { data } = await primaryAxios.post(
        `/order?email=${user?.email}`,
        placedOrder
      );
      if (data.success) {
        swal("Order Placed", "Please Pay To Proceed", "success", {
          button: {
            text: "Okay",
            value: true,
            visible: true,
            className: "rounded-3xl",
            closeModal: true,
          },
        });
      }
      reset();
    })();
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <h2>Details</h2>
        <div className="flex justify-center pt-10">
          <div className="w-1/3">
            <h2 className="text-3xl font-bold text-center text-primary mb-8 uppercase">
              Order Information
            </h2>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                value={user?.displayName}
                disabled
                class="input input-bordered w-full"
              />
              <input
                type="email"
                value={user?.email}
                disabled
                class="input input-bordered w-full"
              />
              <div>
                <input
                  type="text"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                  placeholder="Enter your address"
                  class="input input-bordered w-full"
                />
                {errors?.address && (
                  <p className="error">{errors.address.message}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required",
                    },
                    minLength: {
                      value: 9,
                      message: `Please Provide Valid Phone Number`,
                    },
                  })}
                  placeholder="Enter your mobile number"
                  class="input input-bordered w-full"
                />
                {errors?.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label>Order Quantity</label>
                <div className="flex gap-5 items-center justify-between  mb-3">
                  <input
                    type="number"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Quantity is required To order",
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
                    defaultValue={minimumOrder}
                    placeholder="Input Quantity"
                    class="input input-bordered input-primary w-full"
                  />
                  <p className="bg-secondary py-3 w-full text-center rounded-lg text-lg">
                    Total Price :{" "}
                    <span className="font-bold text-primary">
                      ${(orderingQuantity || orderedQuantity) * price}
                    </span>
                  </p>
                </div>
                {errors?.quantity && (
                  <p className="error">{errors.quantity.message}</p>
                )}
              </div>
              <button
                disabled={
                  orderingQuantity < minimumOrder ||
                  orderingQuantity > availableQuantity
                    ? true
                    : false
                }
                className="btn btn-primary w-full"
                type="submit"
              >
                Order Now
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center -mt-10">
            <div className="w-2/3 z-0">
              <img src={image} alt="" />
            </div>
            <div className="drill-card-body z-10">
              <h2 class="font-bold py-2 text-4xl uppercase">{name}</h2>
              <p className="text-left">
                Available :{" "}
                <span className="font-bold text-lg">{availableQuantity}</span>{" "}
                Pcs
              </p>
              <p className="text-left">
                Minimum Order :{" "}
                <span className="font-bold text-lg">{minimumOrder}</span> Pcs
              </p>
              <p className="text-left text-2xl uppercase font-medium mb-3">
                price: <span className="font-bold">${price}</span>{" "}
                <span className="text-sm">per unit</span>
              </p>
              <p className="w-[60ch] my-5 ">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PurchasePage;
