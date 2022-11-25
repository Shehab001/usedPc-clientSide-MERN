import React from "react";
import Admin from "./Admin";

const Dashboardd = () => {
  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="drawer w-11/12 col-span-3 	">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content pt-44">
            {/* <!-- Page content here --> */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              My Order
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-9/12	 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto	pt-44 col-span-1">
          <div className="card-actions justify-end">
            <label htmlFor="my-modal-3" className="btn btn-primary w-9/12">
              Add Product
            </label>
          </div>
        </div>
        <div className="drawer drawer-end col-span-3 ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <button className="btn btn-primary mt-10">Confirm</button>
          <div className="drawer-content pt-44">
            {/* <!-- Page content here --> */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              My Seller
            </label>
          </div>
          <div className="drawer-side w-11/12	 ">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

            <ul className="menu p-4 w-9/12 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <Admin></Admin>
      </div>
    </div>
  );
};

export default Dashboardd;
