import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-pink-100 text-black">
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
            <Link className="mr-10 font-semibold">Dashboard</Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact text-white dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
