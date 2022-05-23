import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L0gEKK0fW8edCbt7kDLXbv8KWlGZciN9TnJpYpZhYFoNsDPH1xDnBZ0nnu7dBaYTEA0dg57jSrnXA8kZBMoIahj00YRVMq95j"
  );

  const { id } = useParams();
  const { data, isLoading } = useQuery(["orders", id], () =>
    primaryAxios.get(`/order/${id}`)
  );

  if (isLoading) {
    return <p>loading ...</p>;
  }

  return (
    <section className="mx-auto w-full lg:w-1/2 border-2 p-4 lg:p-10 rounded-2xl">
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col">
          <h2 class="text-4xl font-bold text-gray-600 uppercase text-center">
            pay to proceed
          </h2>
          <hr className="border w-[10%] my-3 border-primary  mx-auto" />
        </div>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.userName}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.userEmail}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          Ordered {data.data.quantity} Pcs
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.productName}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.address}
        </span>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            totalAmount={data.data.totalPrice}
            orderInfo={data.data}
          />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
