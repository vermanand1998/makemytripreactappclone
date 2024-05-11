import React from "react";
import "./booknowpaylater.css";
import zerointerest from "../../assets/Images/zerointerest.png";
import nodocumentbnpl from "../../assets/Images/nodocumentbnpl.png";
import creditperiod from "../../assets/Images/creditperiod.png";
import lazypay from "../../assets/Images/lazypay.png";
import simpl from "../../assets/Images/simpl.png";
import icicipaylater from "../../assets/Images/icicipaylater.png";
import olamoney from "../../assets/Images/olamoney.png";
import hdfc from "../../assets/Images/hdfc.png";

const BookNowPaylaterWidget = () => {
  return (
    <>
      <div className="bnplw-main-container">
        <p className="bnpl-text">Benefits of pay later</p>
        <ul className="bnpl-benefits">
          <li>
            <img src={zerointerest} className="zero-percent-img" />
            <div className="bnpl-description-div">
              <p>Starts at 0% Interest</p>
              <p>Starts at 0% Interest</p>
            </div>
          </li>
          <li>
            <img src={creditperiod} className="calender-img" />
            <div className="bnpl-description-div">
              <p>15 days-18 Months</p>
              <p>Pay in 15 days - 18 months</p>
            </div>
          </li>
          <li>
            <img src={nodocumentbnpl} className="nopaperwork-img" />
            <div className="bnpl-description-div">
              <p>No Paperwork</p>
              <p>No Paperwork</p>
            </div>
          </li>
        </ul>

        <div className="paylater-eligibility-div">
          <div className="bnpl-text-btn-div">
            <p>Check eligibility of mobile no. </p>
            <button>proceed</button>
          </div>
          <ul className="bnpl-options-list">
            <li>
              <img src={lazypay} />
            </li>
            <li>
              <img src={simpl} />
            </li>
            <li>
              <img src={icicipaylater} />
            </li>
            <li>
              <img src={olamoney} />
            </li>
            <li>
              <img src={hdfc} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookNowPaylaterWidget;
