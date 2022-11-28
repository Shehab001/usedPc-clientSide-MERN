import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import Order from "./Order";

const Advertise = () => {
  const [advertise, setAdvertise] = useState([]);
  const [send, setSend] = useState({});

  console.log(advertise);
  const filterData = (data) => {
    const result = data.filter((word) => word.left > 0);
    setAdvertise(result);
  };
  const x = () => {
    window.location.reload(false);
  };
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => filterData(data));
  }, []);
  return (
    <div>
      <Order key={send._id} x={x} product={send}></Order>
      {advertise.length > 0 ? (
        <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
          Advertise Product
        </h1>
      ) : (
        <p></p>
      )}
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-20">
        {advertise.map((ad) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={ad.url} alt={ad.name} />
            </figure>
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold mr-10 underline mt-10">
                {ad.pname}
              </h2>
              <div className="text-left p-2">
                <p className="font-semibold m-2 ">Location : {ad.location}</p>
                <p className="font-semibold m-2 ">
                  Resell Price : {ad.reprice}
                </p>
                <p className="font-semibold m-2 ">
                  Original Price : {ad.orprice}
                </p>
                <p className="font-semibold m-2 ">Years of Use : {ad.use}</p>
                <p className="font-semibold m-2 ">Posted Time : {ad.posted}</p>
                <p className="font-semibold m-2 ">Remaining : {ad.left}</p>
                <p className="font-semibold m-2 relative ">
                  <span>Seller's Name : {ad.sname}</span>
                  <span className="absolute -right-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="blue"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
              <div className="card-actions justify-end">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-primary"
                  onClick={() => setSend(ad)}
                >
                  Order
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
