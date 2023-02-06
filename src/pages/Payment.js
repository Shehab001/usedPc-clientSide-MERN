import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import Stripe from "./Stripe";

const stripePromise = loadStripe(
  "pk_test_51LVKw8GSGClrvX9qQR80gAdslLitEfoxn9BlZ549BvvqY7hj4ITUNPWfpH38uXKhXeExTs4yAT3peZOYvlKqUHqC00V8OjI91q"
);

const Payment = (props) => {
  console.log(props.data);

  return (
    <div className="w-full mx-auto p-5 ">
      <Elements stripe={stripePromise}>
        <Stripe data={props} />
      </Elements>
    </div>
  );
};

export default Payment;
