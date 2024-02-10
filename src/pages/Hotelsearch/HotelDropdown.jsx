import React, { useEffect, useState } from "react";
import "./hoteldropdown.css";
import { IoSearch } from "react-icons/io5";
import useFetch from "../../Hooks/useFetch";
import { IoLocationOutline } from "react-icons/io5";

const HotelDropdown = ({ setShowCity, selectedCity, updateSelecetedCity }) => {
  const { data, get } = useFetch([]);
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    get("/bookingportals/hotel");
  }, []);
  // console.log("hotel", data);
  const handleCitySelect = (hotel) => {
    updateSelecetedCity(hotel);
    setShowCity(false);
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
    <div className="hs-hotel-citydrpdwn-main-div">
      <div className="search-city-div">
        <IoSearch className="city-search-icon" />
        <input
          type="text"
          placeholder=""
          className="hd-search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
        />
      </div>
      <div className="city-list-search-div">
        <ul className="city-search-list">
          {filterData.map((hotel, index) => (
            <li key={index} onClick={() => handleCitySelect(hotel)}>
              <IoLocationOutline size={25} />
              <p>{hotel.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HotelDropdown;
