import React, { useState } from "react";
import "./paymentoptions.css";
import gpaylogo from "../../assets/Images/gpaylogo.png";
import CardWidget from "./CardWidget";
import GpayWidget from "./GpayWidget";
import EmiWidget from "./EmiWidget";
import UpiWidget from "./UpiWidget";

const PaymentOptions = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showUpiWidget, setShowUpiWidget] = useState(true);
  const [showCardWidget, setShowCardWidget] = useState(false);
  const [showNetBankingWidget, setShowNetBankingWidget] = useState(false);
  const [showGpayWidget, setShowGpayWidget] = useState(false);
  const [activeWidget, SetActiveWidget] = useState("upi");

  const handleShowUpiWidget = () => {
    setShowCardWidget(false);
    setShowUpiWidget(true);
    setShowNetBankingWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("upi");
  };

  return (
    <>
      <div className="paymentoptions-maindiv">
        <div className="paymentoptionslist">
          <p className="paymentoption-head">Payment options</p>
          <ul>
            <li
              onClick={handleShowUpiWidget}
              className={`cursor-pointer ${
                activeWidget === "upi" ? "activewidget" : ""
              }`}
            >
              <div className="upioptions-img"></div>
              <div className="options-text">
                <p>UPI Options</p>
                <p>Pay Directly From Your Bank Account</p>
              </div>
            </li>

            <li className="cursor-not-allowed">
              <div className="cardoptions-img"></div>
              <div className="options-text">
                <p>Credit/Debit/ATM Card</p>
                <p>Visa,MasterCard,Amex,Rupay And More</p>
              </div>
            </li>

            <li className="cursor-not-allowed">
              <div className="paylater-img "></div>
              <div className="options-text ">
                <p>Book Now Pay Later</p>
                <p>Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC</p>
              </div>
            </li>

            <li className="cursor-not-allowed">
              <div className="netbanking-img"></div>
              <div className="options-text">
                <p>Net Banking</p>
                <p>All Major Banks Available</p>
              </div>
            </li>

            <li className="cursor-not-allowed">
              <div className="giftcards-img "></div>
              <div className="options-text">
                <p>Gift Cards, Wallets & More</p>
                <p>Gift cards, AmazonPay</p>
              </div>
            </li>

            <li className="cursor-not-allowed">
              <img className="gpay-img" src={gpaylogo} alt="gpay" />
              <div className="options-text">
                <p>GooglePay</p>
                <p>Pay with Google Pay</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="paymentoptions-paywindow">
          {showUpiWidget && (
            <UpiWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
          {showCardWidget && (
            <CardWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
          {showNetBankingWidget && (
            <EmiWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
          {showGpayWidget && (
            <GpayWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
