import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "./Loader";
import "./Header.css";

const Header = () => {
  const [hidee, setHidee] = useState(true);
  const { user, logOut, hide, setHide, dbuser } = useContext(AuthContext);
  console.log("header", dbuser);

  useEffect(() => {}, [hidee]);

  const handleBtn = () => {
    setHidee(false);
    logOut()
      .then(() => {
        setHidee(true);
        //setDbuser({});
        //data = null;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {hidee ? <></> : <Loader></Loader>}
      <div className="navbar bg-pink-100 text-black bg">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl  font-bold"
          >
            QuantumTech
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <Link to="/blogs" className="mr-10 font-semibold">
              BLOGS
            </Link>
          </div>
          <div className="form-control">
            {dbuser?.role === "seller" ? (
              <Link to="/sellerdashboard" className="mr-10 font-semibold">
                Dashboard
              </Link>
            ) : (
              <p></p>
            )}
            {dbuser?.role === "buyer" ? (
              <Link to="/myorders" className="mr-10 font-semibold">
                Dashboard
              </Link>
            ) : (
              <p></p>
            )}
            {dbuser?.role === "admin" ? (
              <Link to="/admindashboard" className="mr-10 font-semibold">
                Dashboard
              </Link>
            ) : (
              <p></p>
            )}
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.uid ? (
                  <img
                    src={dbuser?.url}
                    alt="user"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1669530345/Assignment%2012/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail_brsycz.png"
                    alt="user"
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact text-white dropdown-content bg-base-100 rounded-box w-52"
            >
              {user?.uid ? (
                <li>
                  <Link to="/" onClick={handleBtn}>
                    Log Out
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
