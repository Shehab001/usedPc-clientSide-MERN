import React from "react";
import Order from "./Order";

const ProductDetails = () => {
  return (
    <div>
      <Order></Order>
      <div className="card lg:card-side bg-base-100 shadow-xl my-20 mx-10">
        <figure>
          <img
            src="https://placeimg.com/400/400/arch"
            alt="Album"
            className="pl-5 rounded"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">
            New album is released!
          </h2>
          <div className="text-left p-10">
            <p className="font-semibold m-2 ">Location : </p>
            <p className="font-semibold m-2 ">Resell Price : </p>
            <p className="font-semibold m-2 ">Original Price :</p>
            <p className="font-semibold m-2 ">Years of Use : </p>
            <p className="font-semibold m-2 ">
              Posted Time :{Date().slice(0, 25)}{" "}
            </p>
            <p className="font-semibold m-2 ">Seller's Name : </p>
          </div>
          <div className="card-actions justify-end">
            <label htmlFor="my-modal-3" className="btn btn-primary">
              Order
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
