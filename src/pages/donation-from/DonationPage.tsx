import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    navigate("/stripe-payment",{state : {amount:amount}})
    
    alert(`Thank you for donating $${amount}!`);
    setAmount(""); // Clear the input
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Make a Donation
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Your support helps us make a difference.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="donation" className="block text-sm font-medium text-gray-700 mb-1">
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="donation"
            name="donation"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
