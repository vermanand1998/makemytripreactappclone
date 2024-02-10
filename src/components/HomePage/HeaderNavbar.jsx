import React, { useState } from "react";
import "./headernavbar.css";

const HeaderNavbar = ({
  setShowFlight,
  setShowHotel,
  setShowTrains,
  setShowHolidays,
  setShowBuses,
  setShowCabs,
  setShowForex,
  setShowTravelIns,
  setShowHomestays,
}) => {
  const [active, setActive] = useState("flights");

  const handleShowFlights = () => {
    setShowFlight(true);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("flights");
  };
  const handleShowHotels = () => {
    setShowHotel(true);
    setShowFlight(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("hotels");
  };
  const handleShowTrains = () => {
    setShowTrains(true);
    setShowFlight(false);
    setShowHotel(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("trains");
  };
  const handleShowhomestays = () => {
    setShowFlight(false);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(true);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("homestays");
  };

  const handleShowHolidays = () => {
    setShowFlight(false);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(true);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("holidays");
  };
  const handleShowBuses = () => {
    setShowFlight(false);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(true);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("buses");
  };
  const handleShowCabs = () => {
    setShowFlight(false);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(true);
    setShowForex(false);
    setShowTravelIns(false);
    setActive("cabs");
  };
  const handleShowForex = () => {
    setShowFlight(false);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(true);
    setShowTravelIns(false);
    setActive("forex");
  };
  const handleShowTravelIns = () => {
    setShowFlight(false);
    setShowHotel(false);
    setShowTrains(false);
    setShowHomestays(false);
    setShowHolidays(false);
    setShowBuses(false);
    setShowCabs(false);
    setShowForex(false);
    setShowTravelIns(true);
    setActive("travelins");
  };

  return (
    <div className="headernav">
      <div className="mainheadernav">
        <ul className="headernavlist">
          <li
            className={active === "flights" ? "activenav" : ""}
            onClick={handleShowFlights}
          >
            <div className="flightimage"></div>
            <div>Flights</div>
          </li>
          <li
            className={active === "hotels" ? "activenav" : ""}
            onClick={handleShowHotels}
          >
            <div className="hotelimage"></div>
            <div>Hotels</div>
          </li>
          <li
            className={active === "homestays" ? "activenav" : ""}
            onClick={handleShowhomestays}
          >
            <div className="homestaysimage"></div>
            <div>Homestays & Villas</div>
          </li>
          <li
            className={active === "holidays" ? "activenav" : ""}
            onClick={handleShowHolidays}
          >
            <div className="holidayimage"></div>
            <div>Holiday Packages</div>
          </li>
          <li
            className={active === "trains" ? "activenav" : ""}
            onClick={handleShowTrains}
          >
            <div className="trainimage"></div>
            <div>Trains</div>
          </li>
          <li
            className={active === "buses" ? "activenav" : ""}
            onClick={handleShowBuses}
          >
            <div className="busesimage"></div>
            <div>Buses</div>
          </li>
          <li
            className={active === "cabs" ? "activenav" : ""}
            onClick={handleShowCabs}
          >
            <div className="cabsimage"></div>
            <div>Cabs</div>
          </li>
          <li
            className={active === "forex" ? "activenav" : ""}
            onClick={handleShowForex}
          >
            <div className="foreximage"></div>
            <div>Forex Card & Currency</div>
          </li>
          <li
            className={active === "travelins" ? "activenav" : ""}
            onClick={handleShowTravelIns}
          >
            <div className="travelinsuranceimage"></div>
            <div>Travel Insurance</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavbar;
