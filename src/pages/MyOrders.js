import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [orders, setOrders] = useState({});
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="mx-10">
      <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
        My Product
      </h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
