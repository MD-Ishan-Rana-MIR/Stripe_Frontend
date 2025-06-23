// src/components/GooglePayButton.jsx
import React from "react";
import GooglePayButton from "@google-pay/button-react";

const GooglePay = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Donate with Google Pay</h1>

            <GooglePayButton
                environment="TEST"
                buttonColor="black"
                buttonType="donate"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: ["VISA", "MASTERCARD", "AMEX"],
                            },
                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "stripe",
                                    gatewayMerchantId: "stripe", // ✅ must be exactly this
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantName: "Your Demo Charity",
                    },
                    transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPrice: "10.00",
                        currencyCode: "USD",
                        countryCode: "US",
                    },
                }}
                onLoadPaymentData={(paymentData) => {
                    console.log("✅ Payment Loaded", paymentData);
                }}
                onPaymentAuthorized={(paymentData) => {
                    console.log("✅ Payment Authorized", paymentData);
                    return { transactionState: "SUCCESS" };
                }}
                onError={(err) => {
                    console.error("❌ Google Pay Error", err);
                }}
            />

        </div>
    );
};

export default GooglePay;
