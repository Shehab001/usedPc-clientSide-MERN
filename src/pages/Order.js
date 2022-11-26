import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const Order = (props) => {
  const { name, sname, reprice, email } = props.product;
  const { user } = useContext(AuthContext);
  const [phn, setPhn] = useState(null);

  const [des, setDes] = useState(null);
  //console.log(user.email);
  //console.log(phn, des);
  const handleSave = () => {
    const data = {
      itemname: name,
      useremail: user.email,
      price: reprice,
      usernumber: phn,
      location: des,
      selleremail: email,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          toast.success("Order confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };
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
            defaultValue={`Product Name : ${name}`}
            disabled
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <input
            type="text"
            defaultValue={`User Email : ${user.email}`}
            disabled
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <input
            type="text"
            defaultValue={`Product Price : ${reprice}`}
            disabled
            className="input input-bordered input-success w-full max-w-xs mt-5"
          />
          <input
            type="text"
            name="phn"
            placeholder="Phone Number"
            className="input input-bordered input-success w-full max-w-xs mt-5"
            onChange={(event) => setPhn(event.target.value)}
          />
          <select
            className="select select-success w-full max-w-xs mt-5 "
            onChange={(event) => setDes(event.target.value)}
          >
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
          <button className="btn btn-primary mt-10" onClick={handleSave}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
