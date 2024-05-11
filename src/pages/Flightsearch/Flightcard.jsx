import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import LoginContext from "../../Context/LoginContext";
import TabforLogin from "../../components/Login/TabforLogin";
import Flightdetails from "./Flightdetails";
import { Skeleton } from "@mui/material";
import strip from "../../assets/Images/strip.png";
import fiticon from "../../assets/Images/fliIcon.png";
import indigoimg from "../../assets/Images/indigoimg.png";
import vistaraimg from "../../assets/Images/vistaraimg.png";
import airindiaimg from "../../assets/Images/airindiaimg.png";
import spicejetimg from "../../assets/Images/spicejetimg.png";
import akasaimg from "../../assets/Images/akasaimg.png";
import airindiaexpressimg from "../../assets/Images/airindiaexpressimg.png";
import "./flightsearch.css";
import "./flightdetails.css";

const images = [
  { airline: indigoimg, flightname: "IndiGo" },
  { airline: vistaraimg, flightname: "Vistara" },
  { airline: airindiaimg, flightname: " Air India " },
  { airline: spicejetimg, flightname: "SpiceJet" },
  { airline: akasaimg, flightname: "Akasa Air" },
  { airline: airindiaexpressimg, flightname: " Air India Express " },
];

const Flightcard = ({ data, loading }) => {
  const [isElementVisible, setElementVisibility] = useState({});
  const { authenticated } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);

  const toggleVisibility = (index) => {
    setElementVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the specific index
    }));
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src={strip} alt="strip" />
          <img className="loadingImg" src={fiticon} alt="fiticon" />
        </div>
      ) : data?.data?.flights.length > 0 ? (
        data?.data?.flights.map((flight, index) => (
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
        ))
      ) : (
        <p className="flex justify-center items-center my-16 text-2xl font-bold">
          No Result Found.
        </p>
      )}

      {showLogin && <TabforLogin />}
    </>
  );
};

export default Flightcard;
