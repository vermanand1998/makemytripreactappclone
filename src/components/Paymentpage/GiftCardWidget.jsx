import React from "react";
import "./giftcardwidget.css";
import {airtelpaymentsbank} from "../../../src/allimages";
import {mobikwik} from "../../../src/allimages";
import {payzapp} from "../../../src/allimages";
import {amazonpay} from "../../../src/allimages";

const GiftCardWidget = () => {
  return (
    <>
      <div className="giftcardwidget-container">
        <p className="giftcard-head">Select wallet to pay</p>
        <div className="giftcard-options-div">
          <div className="giftcard-option">
            <img src={airtelpaymentsbank} alt="apb" className="apb-img" />
            <p>Airtel Payments Bank</p>
          </div>
          <div className="giftcard-option">
            <div className="icc-img"></div>
            <p>Itz Cash Card</p>
          </div>
          <div className="giftcard-option">
            <img src={mobikwik} alt="mk" className="mw-img" />
            <p>MobiKwik</p>
          </div>
          <div className="giftcard-option">
            <img src={payzapp} alt="pz" className="pz-img" />
            <p>PayZapp</p>
          </div>
          <div className="giftcard-option">
            <img src={amazonpay} alt="ap" className="ap-img" />
            <p>Amazon Pay</p>
          </div>
          <div className="giftcard-option">
            <div className="mmtgc-img"></div>
            <p>MakeMyTrip GiftCard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardWidget;
