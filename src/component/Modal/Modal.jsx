import React from "react";
import "./Modal.css";
const Modal = ({ setModal }) => {
  return (
    <div
      onClick={() => setModal(false)}
      className="w-100 vh-100 d-flex justify-content-center align-items-center  position-fixed modal"
    >
      <div className="bg-white rounded-3 modalBox">
        <h2>modal</h2>
      </div>
    </div>
  );
};

export default Modal;
