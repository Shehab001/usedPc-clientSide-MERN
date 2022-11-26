import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../shared/Loader";

const Signup = () => {
  const { createUser, updateUserProfile, user } = useContext(AuthContext);
  //console.log(user);
  const [error, setError] = useState("");
  const [spin, setSpin] = useState(false);

  const [role, setRole] = useState("");
  const [img, setImg] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const onValueChange = (event) => {
    setRole(event.target.value);
  };
  //console.log(role);
  const saveImg = (event) => {
    if (event.target.files.length != 0) {
      setImg(event.target.files[0]);
    }
  };
  //console.log(img);

  const handleForm = (event) => {
    setSpin(true);
    //alert("hi");
    event.preventDefault();

    const form = event.target;

    const name = form.email.value;
    const pass = form.password.value;
    //console.log(name, pass, role);

    if (pass.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    createUser(name, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSpin(false);
        toast.success("Successful");
        form.reset();
        setError("");
        // navigate(from, { replace: true });
        //handleUpdateUserProfile(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        //console.log("hi");
        setError("Invalid Credentials");
      });
    // const handleUpdateUserProfile = (url) => {
    //   const profile = {
    //     photoURL: url,
    //   };
    //   console.log(profile);
    //   updateUserProfile(profile)
    //     .then(() => {})
    //     .catch((error) => console.error(error));
    // };
  };

  return (
    <div>
      <div className="w-full	 mx-auto">
        {spin ? (
          <Loader></Loader>
        ) : (
          <>
            <div className="form   mt-20 ">
              <h1 className="text-4xl underline text-white m-10">
                Sign Up Form
              </h1>
              <form className="pb-20" onSubmit={handleForm}>
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
                  <label
                    className="text-xl font-bold underline"
                    htmlFor="myfile"
                  >
                    Select Your Picture
                  </label>
                  <input
                    type="file"
                    id="myfile"
                    className="w-52 mt-5 mx-auto"
                    name="myfile"
                    onChange={saveImg}
                  ></input>
                </div>
                <div className="form-control justify-center flex-wrap flex-row">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-5">Buyer</span>
                    <input
                      type="radio"
                      name="radio"
                      id="buyer"
                      className="radio checked:bg-blue-500 "
                      value="buyer"
                      onChange={onValueChange}
                    />
                  </label>
                </div>
                <div className="form-control justify-center flex-wrap flex-row mb-5">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-5">Seller</span>
                    <input
                      id="seller"
                      type="radio"
                      name="radio"
                      className="radio checked:bg-blue-500 "
                      value="seller"
                      onChange={onValueChange}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
