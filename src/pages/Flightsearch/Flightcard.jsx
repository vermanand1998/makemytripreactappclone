import React, { useContext, useEffect, useState } from "react";
import "./flightsearch.css";
import "./flightdetails.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {indigoimg} from "../../../src/allimages";
import {vistaraimg} from "../../../src/allimages";
import {airindiaimg} from "../../../src/allimages";
import {spicejetimg} from "../../../src/allimages";
import {akasaimg} from "../../../src/allimages";
import {airindiaexpressimg} from "../../../src/allimages";
import Flightdetails from "./Flightdetails";
import { useAuthContext } from "../../Context/AuthContext";
import LoginContext from "../../Context/LoginContext";
import TabforLogin from "../../components/Login/TabforLogin";

const images = [
  { airline: indigoimg, flightname: "IndiGo" },
  { airline: vistaraimg, flightname: "Vistara" },
  { airline: airindiaimg, flightname: " Air India " },
  { airline: spicejetimg, flightname: "SpiceJet" },
  { airline: akasaimg, flightname: "Akasa Air" },
  { airline: airindiaexpressimg, flightname: " Air India Express " },
];

const Flightcard = ({ data }) => {
  const [isElementVisible, setElementVisibility] = useState({});
  const { authenticated } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const toggleVisibility = (index) => {
    setElementVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the specific index
    }));
  };

  return (
    <>
      <div className="flightsearch-btmrightdiv">
        {data?.data?.flights.map((flight, index) => (
          <div key={index} className="flightdetails-maindiv">
            <div className="available-flightdetails">
              <div className="flight-details-div">
                <div className="airlinelogo">
                  <img
                    className=""
                    src={images[index % images.length]?.airline}
                    alt=""
                  />
                </div>
                <div className="airline-nameandno-div">
                  <p>{images[index % images.length]?.flightname}</p>
                  <p>{flight?.flightID}</p>
                </div>
              </div>

              <div className="departure-details-div">
                <p>{flight?.departureTime}</p>
                <p className="ml-3">{flight?.source}</p>
              </div>

              <div className="flyingtime-div">
                <p>0{flight?.duration}h</p>
                <p>{flight?.stops} stop</p>
              </div>

              <div className="arrival-details-div">
                <p>{flight?.arrivalTime}</p>
                <p className="mr-3">{flight?.destination}</p>
              </div>

              <div className="price-details-div">
                <p>₹ {flight?.ticketPrice}</p>
                <p>per adult</p>
              </div>
              <div>
                <p className="text-red-500 text-sm px-5 py-1">
                  {flight.availableSeats} seats left
                </p>
                {authenticated ? (
                  <Link to={`/flightcheckout/${flight._id}`}>
                    <button className="flight-booknow-btn">Book Now</button>
                  </Link>
                ) : (
                  <Link
                    onClick={(e) => {
                      if (!authenticated) {
                        e.preventDefault();
                        setShowLogin(true);
                      }
                    }}
                  >
                    <button className="flight-booknow-btn">Book Now</button>
                  </Link>
                )}
              </div>
            </div>
            <div className="offertext">Get Rs 150 off using MMTBONUS*</div>
            <p
              className="linktoflightdetails"
              onClick={() => toggleVisibility(index)}
            >
              {isElementVisible[index]
                ? "Hide Flight Details"
                : "View Flight Details"}
            </p>
            {isElementVisible[index] && (
              <div>
                <Flightdetails
                  id={flight._id}
                  airline={images[index % images.length]?.airline}
                  flightname={images[index % images.length]?.flightname}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {showLogin && <TabforLogin />}
    </>
  );
};

export default Flightcard;
