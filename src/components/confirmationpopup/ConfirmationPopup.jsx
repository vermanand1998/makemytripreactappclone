import React from "react";
import "./confirmationpopup.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ConfirmationPopup = ({ setShowConfirmation }) => {
  return (
    <div className="bg-blur">
      <div className="confirmation-popup-maindiv">
        <IoCheckmarkCircleOutline size={60} color="rgb(1, 150, 1)" />
        <h2 className="success-msg">Payment Success!!!</h2>
        <p className="confirm-msg">Your Booking is confirmed.</p>
        <Link to="/mytrips">
          <p className="linktomytrip">Check your booking here!</p>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
