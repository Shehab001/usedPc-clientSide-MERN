import React from "react";
import { useLoaderData } from "react-router";
import Order from "./Order";

const ProductDetails = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <Order></Order>
      <div>
        {products.map((product) => (
          <div className="card lg:card-side card-center bg-base-100 shadow-xl my-20 mx-10">
            <figure className="lg:w-4/6 mx-auto w-full">
              <img
                src={product.url}
                alt={product.name}
                className="p-5 rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="text-center text-2xl font-bold mr-10 underline mt-10">
                {product.name}
              </h2>
              <div className="text-left p-10">
                <p className="font-semibold m-2 ">
                  Location : {product.location}
                </p>
                <p className="font-semibold m-2 ">
                  Resell Price : {product.reprice}
                </p>
                <p className="font-semibold m-2 ">
                  Original Price : {product.orprice}
                </p>
                <p className="font-semibold m-2 ">
                  Years of Use : {product.use}
                </p>
                <p className="font-semibold m-2 ">
                  Posted Time : {product.posted}
                </p>
                <p className="font-semibold m-2 ">
                  Seller's Name : {product.sname}
                </p>
              </div>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal-3" className="btn btn-primary">
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

export default ProductDetails;
