import React from "react";
import toast from "react-hot-toast";

const Pay = (props) => {
  console.log(props.payment);

  const handleForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const number = form.number.value;
    const date = form.date.value;
    const cvc = form.cvc.value;
    // console.log(number.length);
    if (number.length < 11) {
      toast.error("Invalid Card Info");
      form.reset();
      return;
    }
    if (date.length < 2) {
      toast.error("Invalid Card Info");
      form.reset();
      return;
    }
    if (cvc.length < 2) {
      toast.error("Invalid Card Info");
      form.reset();
      return;
    }
    // console.log(number, date, cvc);
    const info = {
      itemname: props.payment.itemname,
      useremail: props.payment.useremail,
      status: props.payment.status,
      number: number,
      date: date,
      cvc: cvc,
    };

    //console.log(info);
    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          toast.success("Payment Done");
          form.reset();
          // console.log("successfull");
        } else {
          toast.error("Error");
          // console.log("unsucess");
        }
      });
  };
  return (
    <div>
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
              Card Info
            </h3>

            <form onSubmit={handleForm}>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
