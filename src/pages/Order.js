import React from "react";

const Order = () => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl underline font-bold mb-5 underline">
            Item Name
          </h3>

          <input
            type="text"
            defaultValue={"email"}
            disabled
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <input
            type="text"
            defaultValue={"price"}
            disabled
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <input
            type="text"
            defaultValue={"hi"}
            disabled
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <select className="select select-success w-full max-w-xs mt-5 ">
            <option disabled selected>
              Pick Location
            </option>
            <option>Badda</option>
            <option>Gulistan</option>
            <option>Uttara</option>
            <option>Gulshan</option>
            <option>Jatrabari</option>
            <option>Narayanganj</option>
            <option>Dhanmondi</option>
          </select>
          <br></br>
          <button className="btn btn-primary mt-10">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
