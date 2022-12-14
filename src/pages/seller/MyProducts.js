import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import Loader from "../../shared/Loader";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [spinn, setSpinn] = useState(false);
  const [data, setData] = useState({});
  //console.log(data);
  //   console.log(products);

  useEffect(() => {
    setSpinn(true);
    fetch(
      `https://usedpc-server-shehab001.vercel.app/sellerproduct/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpinn(false);
      });
  }, [user.email]);

  const advertise = (data) => {
    //console.log(data._id);
    fetch(`https://usedpc-server-shehab001.vercel.app/sadvertise/${data._id}`)
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Advertised");
        window.location.reload(false);
      });
  };
  const deleteProduct = (data) => {
    console.log(data._id);
    fetch(
      `https://usedpc-server-shehab001.vercel.app/deleteproduct/${data._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast.success("Successfully deleted");
          window.location.reload(false);
        } else {
          toast.error("Error");
        }
      });
  };

  const handleForm = (event) => {
    // setSpinn(true);
    //alert("hi");
    event.preventDefault();

    const form = event.target;

    const cat = form.cat.value;
    const pname = form.pname.value;
    const loc = form.loc.value;
    const url = form.url.value;

    const rep = form.rep.value;
    const orp = form.orp.value;
    const use = form.use.value;
    const time = form.time.value;
    const sname = form.sname.value;
    const left = parseInt(form.left.value);
    const email = user.email;
    const con = form.con.value;
    const nmbr = form.nmbr.value;

    // console.log(cat, loc, url, rep, orp, use, time, sname, left, email, pname);

    const info = {
      name: cat,
      pname: pname,
      location: loc,
      url: url,
      reprice: rep,
      orprice: orp,
      use: use,
      posted: time,
      sname: sname,
      left: left,
      email: email,
      con: con,
      nmbr: nmbr,
      advertise: "No",
      verify: "no",
    };
    // console.log(info);

    fetch("https://usedpc-server-shehab001.vercel.app/addproduct", {
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
          // setSpin(false);
          toast.success("Product Added");
          form.reset();
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
      {spinn ? (
        <Loader></Loader>
      ) : (
        <>
          <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
            Seller Product
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-20">
            {products.map((product) => (
              <div
                key={product._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={product.url} alt={product.name} />
                </figure>
                <div className="card-body">
                  <h2 className="text-center text-2xl font-bold mr-10 underline mt-10">
                    {product.pname}
                  </h2>
                  <div className="text-left p-2">
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
                      Remaining : {product.left}
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
                    <p className="font-semibold m-2 ">
                      {!product.advertise ? (
                        <span>Advertise : No</span>
                      ) : (
                        <span>Advertise : {product.advertise}</span>
                      )}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <label
                      className="btn btn-primary"
                      onClick={() => {
                        //setData(product);
                        product._id
                          ? deleteProduct(product)
                          : console.log(data._id);
                      }}
                    >
                      Delete
                    </label>
                    <label
                      className="btn btn-primary"
                      onClick={() => {
                        //setData(product);
                        product._id
                          ? advertise(product)
                          : console.log(data._id);
                      }}
                    >
                      Advertise
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-primary"
                >
                  Add Product
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-overlay my-32"
                ></label>
                <div className="menu p-4 w-10/12 bg-base-100 text-base-content my-32">
                  <h1 className="text-4xl underline text-white m-10">
                    Give Product Details
                  </h1>
                  <form
                    className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 "
                    onSubmit={handleForm}
                  >
                    <div className="mb-6">
                      <input
                        type="text"
                        id="name"
                        name="cat"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Category Name"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="pname"
                        name="pname"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Product Name"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="name"
                        name="loc"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Location"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="name"
                        name="rep"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Resell Price"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="name"
                        name="orp"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Orginal Price"
                      ></input>
                    </div>

                    <div className="mb-6">
                      <input
                        type="text"
                        id="name"
                        name="use"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Years Of Use"
                      ></input>
                    </div>
                    <div className="mb-6	">
                      <input
                        type="datetime-local"
                        id="time"
                        name="time"
                        className="p-2 w-80 rounded"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="left"
                        name="left"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Product Amount"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="sname"
                        name="sname"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder=" Seller Name"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="nmbr"
                        name="nmbr"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Number"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="con"
                        name="con"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Excellent/Good/Fair"
                      ></input>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="url"
                        name="url"
                        className="bg-black border w-80  mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        placeholder="Url"
                      ></input>
                    </div>

                    <button
                      type="submit"
                      className="ml-3	 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none   w-5/12	 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyProducts;
