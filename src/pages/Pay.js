import React, { useState } from "react";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const Pay = (props) => {
  const [data, setdata] = useState(props.payment);
  console.log(data);

  return (
    <div>
      <div>
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative bg-slate-200	">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-2xl underline font-bold mb-5 underline">
              Card Info
            </h3>

            {/* <form onSubmit={handleForm}>
              <input
                type="text"
                name="number"
                placeholder="1234 1234 1234 1234"
                className="input input-bordered input-success w-full max-w-xs mt-5"
                required
              />
              <input
                type="text"
                name="date"
                placeholder="MM / YY"
                className="input input-bordered input-success w-full max-w-xs mt-5"
                required
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                className="input input-bordered input-success w-full max-w-xs mt-5"
                required
              />
              <br></br>
              <button className="btn btn-primary mt-10">Confirm</button>
            </form> */}
            <Payment data={data}></Payment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
