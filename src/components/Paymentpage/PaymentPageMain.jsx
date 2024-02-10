import React, { useEffect } from "react";
import PaymentOptions from "./PaymentOptions";
import "./paymentpagemain.css";

const PaymentPageMain = () => {
  return (
    <div className="paymentpage-conainer">
      <div className="paymentpage-maindiv">
        <div className="logo-and-text">
          <div className="mmt-logo-white"></div>
          <p>
            <span>Hey,</span> You are viewing this booking at the best price
          </p>
        </div>
        <div className="safeandsecure-div">
          <div className="safeandsecure-img"></div>
          <p>SAFE & SECURE</p>
        </div>
      </div>
      <PaymentOptions />
    </div>
  );
};

export default PaymentPageMain;
