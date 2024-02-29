import React, { useState, useEffect } from "react";
import HubspotForm from "react-hubspot-form";

const Modal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="hubspot-form">
              <HubspotForm
                className="modal"
                portalId="7592558"
                formId="ff3b527d-3d53-462d-b095-736fad805358"
                onSubmit={closeModal}
                loading={
                  <div className="loading">
                    <span>Loading...</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
