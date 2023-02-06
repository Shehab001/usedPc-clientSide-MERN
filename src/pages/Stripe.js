import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
//import "./Stripe.css";

const Stripe = (props) => {
  //console.log(props.data.data);
  const [data, setData] = useState(props.data.data);
  const [cardError, setCardError] = useState("");
  console.log(data.itemname, data.useremail);
  const price = props.data.data.price;

  const [err, setErr] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  //console.log(clientSecret);
  console.log(data._id);
  console.log(price);

  useEffect(() => {
    fetch("https://usedpc-server-shehab001.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const savePayment = (dataa) => {
    console.log(dataa);
    const info = {
      itemname: data.itemname,
      useremail: data.useremail,
      status: "paid",
      order: "Ordered",
      payment_id: dataa,
      id: data._id,
    };

    console.log(info);
    fetch("https://usedpc-server-shehab001.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          toast.success("Payment Done");
          toast.success(dataa);
          //props.paid(info);
          // console.log("successfull");
        } else {
          toast.error("Error");
          // console.log("unsucess");
        }
      });
  };
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //console.log("[error]", error.message);
      setErr(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErr(null);
    }

    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: data.itemname,
            email: data.useremail,
          },
        },
      });

    if (confirmErr) {
      setCardError(confirmErr.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
    }
    savePayment(paymentIntent.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
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
      <button
        type="submit"
        disabled={!stripe}
        className="btn-primary m-5 px-5 py-2 rounded"
      >
        Pay
      </button>
      <p className="my-5 text-red-800 text-center"> {err}</p>
    </form>
  );
};

export default Stripe;
