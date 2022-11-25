import React from "react";

const MyOrders = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-20 mx-10">
        <figure>
          <img
            src="https://placeimg.com/400/400/arch"
            alt="Album"
            className=" p-5 rounded"
          />
        </figure>
        <div className="card-body pt-20">
          <h2 className="text-center text-2xl font-bold">
            New album is released!
          </h2>
          <div className="text-center p-10">
            <p className="text-2xl font-bold m-2 ">Price : </p>
            {/* <p className="font-semibold m-2 ">Resell Price : </p>
            <p className="font-semibold m-2 ">Original Price :</p>
            <p className="font-semibold m-2 ">Years of Use : </p>
            <p className="font-semibold m-2 ">
              Posted Time :{Date().slice(0, 25)}{" "}
            </p>
            <p className="font-semibold m-2 ">Seller's Name : </p> */}
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary mt-10">Pay</button>
            <button className="btn btn-primary mt-10">Paid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
