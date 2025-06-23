import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Donation",
        amount: 3000, // $30.00
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    console.log(`pr is ${pr}`)

    pr.canMakePayment().then((result) => {
      console.log("canMakePayment result:", result);
      if (result && result.googlePay) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/payment-success",
      },
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {paymentRequest && (
        <div className="mb-4">
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
