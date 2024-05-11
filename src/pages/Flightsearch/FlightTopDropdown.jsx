import React, { useEffect, useState } from "react";
import "../../components/Flightswidget/flightdropdown.css";
import { IoSearch } from "react-icons/io5";
import flightsearch from "../../assets/Images/flightsearch.png";
import useFetch from "../../Hooks/useFetch";

const FlightTopDropdown = ({ setShowDropdown, updateSelectedAirport }) => {
  const { data, get } = useFetch([]);
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    get("/bookingportals/airport?limit=30");
  }, []);

  const handleAirportSelect = (airport) => {
    updateSelectedAirport(airport);
    setShowDropdown(false);
  };

  useEffect(() => {
    const filteredData = !data?.data?.airports
      ? []
      : data?.data?.airports?.filter((airport) =>
          airport.city.toLowerCase().includes(searchValue.toLowerCase())
        );
    setFilterData(filteredData);
  }, [searchValue, data]);

  return (
    <div className="flightdropdown-maindiv">
      <div className="search-from-div">
        <IoSearch className="dd-from-search-icon" />
        <input
          type="text"
          placeholder=""
          className="dd-search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
        />
      </div>

      <div className="list-for-place-search-div">
        <ul className="from-search-list">
          {filterData.map((airport, index) => (
            <li key={index} onClick={() => handleAirportSelect(airport)}>
              <img src={flightsearch} alt="flight" />
              <div className="airport-name-div">
                <h3>
                  {airport.city},{airport.country}
                </h3>
                <p>{airport.name}</p>
              </div>
              <p className="airport-code">{airport.iata_code}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightTopDropdown;
