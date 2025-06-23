import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DonationPage from "../pages/donation-from/DonationPage";
import StripeContainer from "../components/payment/StripeContainer";
import PaymentSuccess from "../components/payment/PaymentSuccess";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/payment",
                element : <DonationPage></DonationPage>
            },
            {
                path : "/stripe-payment",
                element : <StripeContainer></StripeContainer>
            },
            {
                path : "/payment-success",
                element : <PaymentSuccess></PaymentSuccess>
            }
        ]
    }
])