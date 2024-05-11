import React from "react";
import "./forexwidget.css";
import { Container } from "@mui/material";
import travelLoan from "../../assets/Images/travelLoan.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForexWidget = () => {
  return (
    <>
      <Container>
        <div className="forexwidgetmaincontainer">
          <img src={travelLoan} alt="tripmoney" />
          <div className="tripmoneyleftdiv">
            <div className="tripmoneylogo"></div>
            <p>
              <span>Forex</span> at best exchange rates delivered at your
              doorstep
            </p>
          </div>
          <div className="ordernowdiv">
            <Link to="/comingsoon">
              <p>ORDER NOW</p>
            </Link>
            <FaArrowRightLong className="arrowicon" size={25} color="#53b2fe" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForexWidget;
