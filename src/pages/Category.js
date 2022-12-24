import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Banner from "../pages/Banner";
import Loader from "../shared/Loader";

import Advertise from "./Advertise";
const Category = () => {
  const { user } = useState(AuthContext);
  const [spinn, setSpinn] = useState(false);

  const [allcategory, setAllcategory] = useState([]);

  //console.log(allcategory);

  useEffect(() => {
    setSpinn(true);
    fetch("https://usedpc-server-shehab001.vercel.app/allcategory")
      .then((res) => res.json())
      .then((data) => {
        setAllcategory(data);
        setSpinn(false);
      });
  }, []);
  return (
    <>
      <Banner></Banner>
      {/* {user && <Advertise></Advertise>} */}
      <Advertise></Advertise>

      <div>
        <h1 className="text-6xl italic mt-10 text-center text-white  underline my-20">
          All Categories
        </h1>
        {spinn && <Loader></Loader>}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-20">
          {allcategory.map((category) => (
            <div
              key={category._id}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={category.url} alt={category.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-2xl">
                  {category.name}
                </h2>
                <p className="text-left font-semibold">
                  Total Laptop : {category.totalproduct}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link to={`/categories/${category.name}`}>More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
