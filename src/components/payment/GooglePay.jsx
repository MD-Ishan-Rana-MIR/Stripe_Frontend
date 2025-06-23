// src/components/GooglePay.jsx

import GooglePayButton from "@google-pay/button-react";

const GooglePay = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Pay with Google Pay</h2>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "stripe",
                  gatewayMerchantId: "BCR2DN7TZCKMV5ZR", // ❗ Replace with your real Stripe gateway ID
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "BCR2DN7TZCKMV5ZR",
            merchantName: "Demo Charity",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentData) => {
          console.log("Payment Data Loaded:", paymentData);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorized:", paymentData);
          return { transactionState: "SUCCESS" };
        }}
        existingPaymentMethodRequired={false}
        buttonColor="black"
        buttonType="pay"
      />
    </div>
  );
};

export default GooglePay;
