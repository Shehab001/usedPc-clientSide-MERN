import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Order from "./Order";

const ProductDetails = () => {
  const [send, setSend] = useState({});
  const products = useLoaderData();
  //console.log(products);
  return (
    <div>
      <div>
        <Order key={send._id} product={send}></Order>
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
                <p className="font-semibold m-2 relative ">
                  <span>Seller's Name : {product.sname}</span>
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
                  onClick={() => setSend(product)}
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

export default ProductDetails;
