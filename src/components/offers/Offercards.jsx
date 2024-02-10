import React from "react";
import "./offers.css";

const Offercards = ({ item }) => {
  return (
    <>
      <div className="offers-btmdiv-griditem">
        <div className="griditem1-topdiv">
          <img src={item?.newHeroUrl} alt="offerImage" />
          <div>
            <h3>{item?.pTl}</h3>
            <p>{item?.pTx}</p>
          </div>
        </div>
        <div className="griditem1-bottomdiv">
          <ul>
            <li>{item?.tncCtaText}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offercards;
