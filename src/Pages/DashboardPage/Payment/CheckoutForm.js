import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import primaryAxios from "../../../Api/primaryAxios";
import swal from "sweetalert";

const CheckoutForm = ({ totalAmount, orderInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await primaryAxios.post("/create-payment-intent", {
        totalAmount: totalAmount,
      });
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })();
  }, [totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error?.message);
    } else {
      setPaymentError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: orderInfo.userName,
            email: orderInfo.userEmail,
          },
        },
      });

    if (intentError) {
      setPaymentError(intentError?.message);
      //   setProcessing(false);
    } else {
      setPaymentError("");
      //   setTransactionId(paymentIntent.id);
      if (paymentIntent.id) {
        swal(
          "Payment Successful",
          `Your Transaction Id Is ${paymentIntent.id}`,
          "success"
        );
      }
    }
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
        <span className="flex-1 flex items-center">
          <span className=" text-md font-semibold uppercase ">
            Total Amount :
          </span>
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
