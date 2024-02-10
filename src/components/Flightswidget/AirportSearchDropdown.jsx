import React, { useState } from "react";
import FlightDropdown from "./FlightDropdown";
import "./airportsearch.css";
import "./flightwidgetmain.css";
import OutsideClickHandler from "react-outside-click-handler";

const AirportSearchDropdown = ({
  handleSearchData,
  field,
  airportData,
  setAirportData,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const updateSelectedAirport = (airport) => {
    const key = field === "To" ? "destination" : "source";
    handleSearchData(key, airport.iata_code);
    setAirportData(airport);
  };
  const handleCityDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <div className="fw-fromdiv" onClick={handleCityDropdown}>
        <p>{field}</p>
        <p>{airportData.city}</p>
        <p>
          {airportData.iata_code}, {airportData.name}
        </p>
      </div>
      {showDropdown && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowDropdown(false);
          }}
        >
          <div className="airportfrom-search-maindiv">
            <FlightDropdown
              setShowDropdown={setShowDropdown}
              updateSelectedAirport={updateSelectedAirport}
            />
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default AirportSearchDropdown;
