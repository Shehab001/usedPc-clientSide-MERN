import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="w-full	 mx-auto">
        <div className="form   mt-20 ">
          <h1 className="text-4xl underline text-white m-10">Sign Up Form</h1>
          <form
            className="pb-20"
            //</div>onSubmit={handleForm}
          >
            <div className="mb-6">
              <input
                type="text"
                id="name"
                name="name"
                className="bg-black border w-80 mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Name"
              ></input>
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-black border mx-auto border-gray-300 text-white text-sm rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                className="bg-black border w-80 mx-auto border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Password"
              ></input>
            </div>
            <div className="mb-6 w-72 mx-auto">
              <label className="text-xl font-bold underline" htmlFor="myfile">
                Select Your Picture
              </label>
              <input
                type="file"
                id="myfile"
                className="w-52 mt-5 mx-auto"
                name="myfile"
                required
              ></input>
            </div>
            <div className="form-control justify-center flex-wrap flex-row">
              <label className="label cursor-pointer">
                <span className="label-text mr-5">Buyer</span>
                <input
                  type="radio"
                  name="radio-10"
                  id="buyer"
                  className="radio checked:bg-red-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control justify-center flex-wrap flex-row mb-5">
              <label className="label cursor-pointer">
                <span className="label-text mr-5">Seller</span>
                <input
                  id="seller"
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 "
                  checked
                />
              </label>
            </div>

            <div className="flex items-start mb-6 justify-center">
              <div className="flex items-center h-5 ">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4  bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                ></input>
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            {/* {success && (
            <p className="my-5 text-red-700">Logged In Successfully</p>
          )} */}
            <p className="my-5 text-red-700">{/* {error} */}</p>

            <p className="text-white my-5">
              <small className="mr-5">Already have an account?</small>
              <Link to="/login">Log In</Link>
            </p>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
