import React, { useState } from "react";
import "./emiwidget.css";
import { CiSearch } from "react-icons/ci";
import hdfc from "../../assets/Images/hdfc.png";
import icici from "../../assets/Images/icici.png";
import citibank from "../../assets/Images/citibank.png";
import axisbank from "../../assets/Images/axisbank.png";
import sbi from "../../assets/Images/sbi.png";
import ConfirmationPopup from "../confirmationpopup/ConfirmationPopup";

const EmiWidget = ({ setShowConfirmation, showConfirmation }) => {
  const [selectedBank, setSelectedBank] = useState("");

  const handlebankselect = (e) => {
    setSelectedBank(e.target.value);
  };
  const handlePayNowClick = () => {
    setShowConfirmation(true);
  };

  return (
    <>
      <div className="emi-main-div">
        <div className="emi-title-div">
          <p className="allbanks-head">All Banks</p>
          <p className="creditcard-title">Credit Card</p>
        </div>
        <ul className="banks-list">
          <li>
            <div className="bank-name-logo">
              <input
                type="radio"
                value="hdfc"
                checked={selectedBank === "hdfc"}
                onChange={handlebankselect}
                className="select-bank-radio"
              />
              <img src={hdfc} className="bank-icon" />
              <p className="bank-name">HDFC Bank</p>
            </div>
            <p className="bank-percent">15% p.a.</p>
          </li>
          <li>
            <div className="bank-name-logo">
              <input
                type="radio"
                value="icici"
                checked={selectedBank === "icici"}
                onChange={handlebankselect}
                className="select-bank-radio"
              />
              <img src={icici} className="bank-icon" />
              <p className="bank-name">ICICI Bank</p>
            </div>
            <p className="bank-percent">15.0% p.a.</p>
          </li>
          <li>
            <div className="bank-name-logo">
              <input
                type="radio"
                value="citibank"
                checked={selectedBank === "citibank"}
                onChange={handlebankselect}
                className="select-bank-radio"
              />
              <img src={citibank} className="bank-icon" />
              <p className="bank-name">Citibank</p>
            </div>
            <p className="bank-percent">14-16% p.a.</p>
          </li>
          <li>
            <div className="bank-name-logo">
              <input
                type="radio"
                value="axisbank"
                checked={selectedBank === "axisbank"}
                onChange={handlebankselect}
                className="select-bank-radio"
              />
              <img src={axisbank} className="bank-icon" />
              <p className="bank-name">Axis Bank</p>
            </div>
            <p className="bank-percent">14-16% p.a.</p>
          </li>
          <li>
            <div className="bank-name-logo">
              <input
                type="radio"
                value="sbi"
                checked={selectedBank === "sbi"}
                onChange={handlebankselect}
                className="select-bank-radio"
              />
              <img src={sbi} className="bank-icon" />
              <p className="bank-name">State Bank of India</p>
            </div>
            <p className="bank-percent">14-16% p.a.</p>
          </li>
        </ul>
        <div className="emi-amnt-paybtn-div">
          <p className="emi-payamnt">₹ 5050</p>
          <button className="emi-payniw-btn" onClick={handlePayNowClick}>
            Pay now
          </button>
          {showConfirmation && (
            <ConfirmationPopup setShowConfirmation={setShowConfirmation} />
          )}
        </div>
        <p className="emi-terms-conditions">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default EmiWidget;
