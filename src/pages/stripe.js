import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useTheme as useNextTheme } from 'next-themes'
import CheckoutForm from "../components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const {setTheme, theme}   = useNextTheme();
  let tempTheme="dark"
 if(theme=="dark"){
   tempTheme="light"
 }else{
   tempTheme="dark"
 }
  const appearance = {
    theme: tempTheme,
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="" width="70%" height="35%">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <div className="w-100 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-gray-400">Stripe Payments</h2>
            <p className="text-sm font-medium text-gray-500 text-gray-700">
              Buy me a coffee
            </p>
            <p className="rounded bg-red-100 text-sm font-medium text-gray-600 text-gray-700">
              Test card 4242 4242
            </p>
          </div>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
