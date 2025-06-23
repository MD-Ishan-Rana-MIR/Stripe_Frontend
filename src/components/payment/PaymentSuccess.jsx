import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const location = useLocation();

  // Extract payment_intent from query params
  const query = new URLSearchParams(location.search);
  const paymentIntentId = query.get("payment_intent");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h2>
        <p className="text-gray-700 mb-2">Thank you for your donation.</p>

        {paymentIntentId && (
          <p className="text-sm text-gray-600 mt-2 mb-6">
            Payment ID: <span className="font-mono">{paymentIntentId}</span>
          </p>
        )}

        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
