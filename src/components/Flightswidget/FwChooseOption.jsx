import React from "react";
import "./fwchooseoption.css";
import wheretogo from "../../../public/assets/images/wheretogo.png";
import insurance from "../../../public/assets/images/insurance.png";
import exploreif from "../../../public/assets/images/exploreif.png";
import mice from "../../../public/assets/images/mice.png";
import giftcard from "../../../public/assets/images/giftcard.png";
import fwad from "../../../public/assets/images/fwad.png";
import { Link } from "react-router-dom";

const FwChooseOption = () => {
  return (
    <>
      <Link to="/comingsoon">
        <div className="fwchoose-maindiv">
          <div className="fwchoosewtg">
            <img src={wheretogo} alt="wtgimg" />
            <p>Where2Go</p>
          </div>

          <div className="fwchooseinsurance">
            <img src={insurance} alt="insuranceimg" />
            <div>
              <p>Insurance</p>
              <p>For International Trips</p>
            </div>
          </div>

          <div className="fwchooseexploreif">
            <img src={exploreif} alt="exploreifimg" />
            <div>
              <p>Explore International Flights</p>
              <p>Cheapest Flights to Paris, Bali, Tokyo & more</p>
            </div>
          </div>

          <div className="fwchoosemice">
            <img src={mice} alt="miceimg" />
            <div>
              <p>MICE</p>
              <p>Offsites, Events & Meetings</p>
            </div>
          </div>

          <div className="fwchoosegiftcard">
            <img src={giftcard} alt="giftcardimg" />
            <p>Gift Cards</p>
          </div>
        </div>
      </Link>
      {/* <img src={fwad} alt="ad"/> */}
    </>
  );
};

export default FwChooseOption;
