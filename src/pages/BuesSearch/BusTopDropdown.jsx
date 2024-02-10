import React, { useEffect, useState } from "react";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import useFetch from "../../Hooks/useFetch";
import "../../components/Flightswidget/flightdropdown.css";
import "./busessearch.css";

const BusTopDropdown = ({ setShowDropdown, updateSelectedBusStand }) => {
  const { data, get } = useFetch([]);
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    get("/bookingportals/hotel");
  }, []);
  // console.log(data);
  const handleBusSelect = (bus) => {
    updateSelectedBusStand(bus);
    setShowDropdown(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(data?.data?.hotels);
      const filteredData = !data?.data?.hotels
        ? []
        : data?.data?.hotels?.filter((hotel) =>
            hotel.location.toLowerCase().includes(searchValue.toLowerCase())
          );
      setFilterData(filteredData);
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue, data]);

  return (
    <div className="busdropdown-maindiv">
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
export default BusTopDropdown;
// ackground: url(https://imgak.mmtcdn.com/flights/assets/media/dt/listing/fliIcon.png) no-repeat;
//     background-size: 161px 58px;
//     width: 162px;
//     height: 57px;
//     position: relative;
//     display: inline-block;
// }
