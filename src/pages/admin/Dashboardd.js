import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import toast from "react-hot-toast";

const Dashboardd = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  // console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const deleteUser = (user) => {
    console.log(user._id);
    fetch(`http://localhost:5000/deleteuserr/${user._id}`)
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
  const verify = (user) => {
    console.log(user._id);
    fetch(`http://localhost:5000/verify/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Verified");
          // console.log("successfull");
        } else {
          toast.error("Canceled");
          // console.log("unsucess");
        }
      });
  };
  return (
    <div className="grid grid-cols-1  mx-10 mb-20">
      <div>
        <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
          All Seller
        </h1>
        <div className="grid grid-cols-1 mb-5 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {users.map(
            (user) =>
              user.role === "seller" && (
                <>
                  <div className="card card-side border shadow-xl">
                    <div className="avatar">
                      <div className="avatar  ml-5 my-10">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user?.url} alt={user?.name} />
                        </div>
                      </div>
                    </div>
                    <div className="card-body mt-5 text-left p-2">
                      <h2 className="card-title">{user?.name}</h2>
                      <p>Email : {user?.email}</p>
                      <p>Contact : {user?.phn}</p>
                      <div className="card-actions justify-end mt-5">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            user._id ? deleteUser(user) : console.log(user._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
      <div>
        <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
          All Buyer
        </h1>
        <div className="grid grid-cols-1 mb-5 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {users.map(
            (user) =>
              user.role === "buyer" && (
                <>
                  <div className="card card-side border shadow-xl">
                    <div className="avatar">
                      <div className="avatar  ml-5 my-10">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user?.url} alt={user?.name} />
                        </div>
                      </div>
                    </div>
                    <div className="card-body mt-5 text-left pt-2">
                      <h2 className="card-title ">{user?.name}</h2>
                      <p>Email : {user?.email}</p>
                      <p>Contact : {user?.phn}</p>
                      <div className="card-actions justify-end mt-5">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            user._id ? deleteUser(user) : console.log(user._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
      <div>
        <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
          Reported Items
        </h1>
        <div className="grid grid-cols-1 mb-5 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map(
            (user) =>
              user.report === "yes" && (
                <>
                  <div className="card card-side border shadow-xl">
                    <div className="avatar">
                      <div className="avatar  ml-5 my-10">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user?.url} alt={user?.name} />
                        </div>
                      </div>
                    </div>
                    <div className="card-body mt-5 text-left pt-2">
                      <h2 className="card-title ">{user?.name}</h2>
                      <p>Email : {user?.email}</p>
                      <p>Contact : {user?.phn}</p>
                      <div className="card-actions justify-end mt-5">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            user._id ? deleteUser(user) : console.log(user._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
      <div>
        <h1 className="text-4xl italic mt-10 text-center text-white  underline my-20">
          Unverified Items
        </h1>
        <div className="grid grid-cols-1 mb-5 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map(
            (user) =>
              user.verify === "no" && (
                <>
                  <div className="card card-side border shadow-xl">
                    <div className="avatar">
                      <div className="avatar  ml-5 my-10">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user?.url} alt={user?.name} />
                        </div>
                      </div>
                    </div>
                    <div className="card-body mt-5 text-left pt-2">
                      <h2 className="card-title ">{user?.name}</h2>
                      <p>Email : {user?.email}</p>
                      <p>Contact : {user?.phn}</p>
                      <div className="card-actions justify-end mt-5">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            user._id ? verify(user) : console.log(user._id);
                          }}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboardd;
