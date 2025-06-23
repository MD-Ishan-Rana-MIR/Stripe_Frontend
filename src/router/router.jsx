import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DonationPage from "../pages/donation-from/DonationPage";
import StripeContainer from "../components/payment/StripeContainer";
import PaymentSuccess from "../components/payment/PaymentSuccess";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import GooglePay from "../components/payment/GooglePay";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <HomePage></HomePage>
            },
            {
                path : "about",
                element : <AboutPage></AboutPage>
            },
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
            },
            {
                path : "google-pay",
                element : <GooglePay></GooglePay>
            }
        ]
    }
])