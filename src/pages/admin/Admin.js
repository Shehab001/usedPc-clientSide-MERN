import React from "react";

const Admin = () => {
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
              Reported Orders
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
