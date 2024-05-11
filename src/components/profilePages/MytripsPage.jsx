import React, { useState } from "react";
import "./mytripsPage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { Container } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import TripCard from "../myTripsCard/TripCard";

const MytripsPage = () => {
  const [activeSection, setActiveSection] = useState("completed");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    if (activeSection === "upcoming") {
      return (
        <div className="mytriplistcontainer-upcoming">
          <div>
            <h3>Looks empty, you've no upcoming bookings.</h3>
            <p>When you book a trip, you will see your itinerary here.</p>
            <Link to="/">
              <button>PLAN A TRIP</button>
            </Link>
          </div>
        </div>
      );
    } else if (activeSection === "completed") {
      return (
        <div className="mytriplistcontainer">
          <TripCard />
        </div>
      );
    }
  };

  return (
    <>
      <Stickyheader />
      <div
        className={`mytripsbanner ${
          activeSection === "completed" ? "grey-bg" : ""
        }`}
      >
        <ul>
          <li>My Account</li>
          <li>
            <span className="forwardicon">
              <IoIosArrowForward />
            </span>
            My Trips
          </li>
        </ul>
      </div>
      <Container>
        <div className="mytripsstatus">
          <div className="mytripststusinnerul">
            <ul>
              <li
                className={
                  activeSection === "upcoming" ? "active" : "notActive"
                }
                onClick={() => handleSectionClick("upcoming")}
              >
                <div className="upcomingtripimg"></div>
                <p>UPCOMING</p>
              </li>
              <li
                className={
                  activeSection === "completed" ? "active" : "notActive"
                }
                onClick={() => handleSectionClick("completed")}
              >
                <div className="completedtripimg"></div>
                <p>COMPLETED</p>
              </li>
            </ul>
          </div>
        </div>
        {renderContent()}

        <div className="scrollupbtn">
          <MdKeyboardDoubleArrowUp className="scrollupicon" size={40} />
          Back To Top
        </div>
      </Container>
    </>
  );
};

export default MytripsPage;
