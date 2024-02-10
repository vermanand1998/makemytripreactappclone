import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../Flightswidget/airportsearch.css";
import "./buswidget.css";
import BusDropdown from "./BusDropdown";

const BusStandDropdown = ({ handleSearchData, field, busData, setBusData }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const updateSelectedBusStand = (bus) => {
    const key = field === "To" ? "destination" : "source";
    handleSearchData(key, bus.location);
    setBusData(bus);
  };
  const handleCityDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="relative">
        <div className="bw-from" onClick={handleCityDropdown}>
          <p>{field}</p>
          <p>{busData.location}</p>
          {/* <p>
            {airportData.iata_code}, {airportData.name}
          </p> */}
        </div>
        {showDropdown && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowDropdown(false);
            }}
          >
            <div className="airportfrom-search-maindiv">
              <BusDropdown
                setShowDropdown={setShowDropdown}
                updateSelectedBusStand={updateSelectedBusStand}
              />
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </>
  );
};

export default BusStandDropdown;
