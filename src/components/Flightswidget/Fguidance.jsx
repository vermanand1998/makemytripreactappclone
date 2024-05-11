import React from "react";
import "./fguidance.css";
import { Container } from "@mui/material";
import vandeflight from "../../assets/Images/vandeflight.png";
import language from "../../assets/Images/language.png";
import webcheckin from "../../assets/Images/webcheckin.png";
import { Link } from "react-router-dom";

const Fguidance = () => {
  return (
    <>
      <Container>
        <Link to="/comingsoon">
          <div className="fguidance-main">
            <div className="internationalflightbook">
              <img src={vandeflight} alt="vbflight" />
              <div>
                <p>Planning to book an international flight?</p>
                <p>Check Travel Guidelines</p>
              </div>
            </div>

            <div className="available-lang">
              <img src={language} alt="lang" />
              <div>
                <p>We are now available in Hindi!</p>
                <p>Change Language</p>
              </div>
            </div>

            <div className="webcheckin">
              <img src={webcheckin} alt="webcheckin" />
              <div>
                <p>Complete your web check-in on MakeMyTrip in easy steps.</p>
                <p>Know More</p>
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </>
  );
};

export default Fguidance;
