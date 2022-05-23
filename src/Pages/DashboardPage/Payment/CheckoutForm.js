import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form className="w-full bg-white p-7 rounded-xl" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex justify-between mt-6 items-center">
        <span className="flex-1 text-md font-medium flex items-center">
          <span>Total Amount :</span>
          <span className="text-2xl font-bold text-primary">
            ${totalAmount}
          </span>
        </span>
        <button
          className="flex-1 w-full bg-primary text-white uppercase py-1.5 rounded-2xl"
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
