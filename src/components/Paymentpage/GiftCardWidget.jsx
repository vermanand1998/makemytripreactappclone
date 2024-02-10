import React from "react";
import "./giftcardwidget.css";
import airtelpaymentsbank from "../../../public/assets/images/Airtelpaymentsbank.png";
import mobikwik from "../../../public/assets/images/Mobikwik.png";
import payzapp from "../../../public/assets/images/Payzapp.png";
import amazonpay from "../../../public/assets/images/Amazonpay.png";

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
