import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBloodRecord } from "../../../redux/features/auth/authActions"; // Import Redux action
import InputType from "../Form/InputType";

const Modal = ({ onRecordSubmit }) => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  const handleModalSubmit = () => {
    if (!bloodGroup || !quantity || !email) {
      return alert("Please provide all fields");
    }

    const newRecord = {
      email,
      organisation: user?._id,
      inventoryType,
      bloodGroup,
      quantity,
      createdAt: new Date().toISOString(), // Add a timestamp
    };

    // Update Redux State
    dispatch(addBloodRecord(newRecord));

    // Update Local State in HomePage
    onRecordSubmit(newRecord);

    // Reset Form Fields
    setBloodGroup("");
    setQuantity(0);
    setEmail("");

    // Show temporary success message
    setAlertMessage("New Record Created");

    // Hide the message after 1 second
    setTimeout(() => {
      setAlertMessage("");
    }, 1000);
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      {/* Modal Content */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg rounded-4 border-0" style={{ backgroundColor: "white" }}>
          <div
            className="modal-header p-4"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <h5 className="modal-title fs-4 fw-bold" id="staticBackdropLabel">
              Manage Blood Record
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-5">
            {/* Modal Fields */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  type="radio"
                  name="inventoryType"
                  value="in"
                  checked={inventoryType === "in"}
                  onChange={(e) => setInventoryType(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label fw-bold">Donate</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="inventoryType"
                  value="out"
                  checked={inventoryType === "out"}
                  onChange={(e) => setInventoryType(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label fw-bold">Request</label>
              </div>
            </div>

            <div className="mb-4">
              <select
                className="form-select form-select-lg shadow-sm border-danger"
                onChange={(e) => setBloodGroup(e.target.value)}
                value={bloodGroup}
                aria-label="Select Blood Group"
                style={{
                  backgroundColor: "#fff6f6",
                  border: "2px solid #dc3545",
                }}
              >
                <option value="">Select Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </select>
            </div>

            <InputType
              labelText="Email"
              labelFor="Email"
              inputType="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputType
              labelText="Quantity (ML)"
              labelFor="quantity"
              inputType="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="modal-footer d-flex justify-content-end p-4 border-0">
            <button
              type="button"
              className="btn btn-outline-danger rounded-pill px-4 py-2"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger rounded-pill px-4 py-2 shadow-sm"
              onClick={handleModalSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Show alert message if there's any */}
      {alertMessage && (
        <div
          className="alert alert-success"
          role="alert"
          style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1050 }}
        >
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Modal;
