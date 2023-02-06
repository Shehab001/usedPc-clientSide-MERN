import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, providerLogin, loading, setHide } = useContext(AuthContext);

  // // const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  //console.log(from);
  const saveUser = (name, url, uid) => {
    //console.log(name, url, email);
    const userr = {
      email: name,
      url: url,
      role: "buyer",
      uid: uid,
    };
    console.log(userr);
    fetch("https://usedpc-server-shehab001.vercel.app/saveuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userr),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          toast.success("User Added");
          // console.log("successfull");
        } else {
          toast.error("Canceled");
          // console.log("unsucess");
        }
      });
  };
  const handleBtn = () => {
    setSpin(true);
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        saveUser(user.email, user.photoURL, user.uid);
        jwt(user);
        navigate(from, { replace: true });
        //console.log(user);

        setSpin(false);
        toast.success("Successful");
        setHide(true);
      })
      .catch((err) => {
        toast.error("Unsuccessful");
        setSpin(false);
      });
  };

  const handleForm = (event) => {
    event.preventDefault();

    setSpin(true);

    const form = event.target;
    const name = form.email.value;
    const pass = form.password.value;
    //console.log(name, pass);

    signIn(name, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setSpin(false);
        toast.success("Successful");
        setHide(true);
        //setUser(user);
        //console.log(user);
        jwt(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Invalid Credentials");
        setSpin(false);
      });
  };

  const jwt = (user) => {
    //jwt
    fetch("http://localhost:5000/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token));
  };
  return (
    <div className="w-full	 mx-auto">
      <div className="form   mt-20 ">
        <h1 className="text-4xl underline text-white m-10">Log In Form</h1>
        {spin ? (
          <Loader></Loader>
        ) : (
          <>
            <form className="pb-20" onSubmit={handleForm}>
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
                <small className="mr-5">Don't have an account?</small>
                <Link to="/signup"> Sign Up</Link>
              </p>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <div className="flex justify-evenly pt-5">
                <span
                  onClick={handleBtn}
                  className="text-white font-bold  cursor-pointer text-2xl"
                >
                  Google
                </span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
