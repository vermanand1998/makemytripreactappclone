import React, { useState } from "react";
import "./flightdropdown.css";
import OutsideClickHandler from "react-outside-click-handler";
import FlightTopDropdown from "./FlightTopDropdown";
import { MdKeyboardArrowDown } from "react-icons/md";

const FlightTopAirportSearch = ({
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
    <div className="fs-drpdwn-container" onClick={handleCityDropdown}>
      <p>
        {field} <MdKeyboardArrowDown size={20} />
      </p>
      <p className="fd-selecteditem">
        {airportData?.city}, {airportData?.country}
      </p>

      {showDropdown && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowDropdown(false);
          }}
        >
          <div className="fs-airportfrom-search-maindiv">
            <FlightTopDropdown
              setShowDropdown={setShowDropdown}
              updateSelectedAirport={updateSelectedAirport}
            />
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default FlightTopAirportSearch;
