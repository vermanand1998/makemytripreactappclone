import React, { useEffect, useState } from "react";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import useFetch from "../../Hooks/useFetch";
import "../Flightswidget/flightdropdown.css";

const BusDropdown = ({ setShowDropdown, updateSelectedBusStand }) => {
  const { data, get } = useFetch([]);
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    get("/bookingportals/hotel");
  }, []);

  const handleBusSelect = (bus) => {
    updateSelectedBusStand(bus);
    setShowDropdown(false);
  };

  useEffect(() => {
    const filteredData = !data?.data?.hotels
      ? []
      : data?.data?.hotels?.filter((hotel) =>
          hotel.location.toLowerCase().includes(searchValue.toLowerCase())
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

      <div className="city-list-search-div">
        <ul className="city-search-list">
          {filterData.map((bus, index) => (
            <li key={index} onClick={() => handleBusSelect(bus)}>
              <IoLocationOutline size={25} />
              <h3>{bus.location}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BusDropdown;
