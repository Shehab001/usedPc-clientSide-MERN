import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import Pay from "./Pay";
import Loader from "../shared/Loader";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  //console.log(user.email);
  const [orders, setOrders] = useState([]);
  const [send, setSend] = useState({});
  const [spinn, setSpinn] = useState(false);
  //console.log(send);

  useEffect(() => {
    setSpinn(true);
    fetch(`https://usedpc-server-shehab001.vercel.app/myorder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setSpinn(false);
      });
  }, [user]);

  const paid = (data) => {
    fetch("https://usedpc-server-shehab001.vercel.app/updatepayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          toast.success("Status Changed");
          window.location.reload(false);

          // console.log("successfull");
        } else {
          toast.error("Error");
          // console.log("unsucess");
        }
      });
  };

  return (
    <>
      <Pay key={send._id} paid={paid} payment={send}></Pay>
      <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
        My Product
      </h1>
      {spinn && <Loader></Loader>}
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-20">
        {orders.map((order) => (
          <div className="mx-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={order?.url} alt={order?.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{order?.itemname}</h2>
                <p className="text-left text-xl ">Price : {order?.price}</p>
                <p className="text-left text-xl">
                  Location : {order?.location}
                </p>
                <p className="text-left text-xl">
                  Number : {order?.usernumber}
                </p>
                <div className="card-actions justify-end">
                  {order.status === "unpaid" ? (
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-primary"
                      onClick={() => {
                        setSend(order);
                      }}
                    >
                      Order
                    </label>
                  ) : (
                    <button className="btn btn-primary">Paid</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyOrders;
