import React, { useEffect, useState } from "react";
import "../Flightswidget/flightdropdown.css";
import "../Flightswidget/airportsearch.css";
import { IoLocationOutline, IoSearch } from "react-icons/io5";

const cities = [
  { JunctionName: "Delhi Junction" },
  { JunctionName: "Salem Junction" },
  { JunctionName: "Hubli Junction" },
  { JunctionName: "Surat" },
  { JunctionName: "Udaipur" },
  { JunctionName: "Katpadi Junction" },
  { JunctionName: "Vadodara Junction" },
  { JunctionName: "Kanpur" },
  { JunctionName: "Dhanbad Junction" },
  { JunctionName: "Kharagpur Junction" },
  { JunctionName: "Manmad Junction" },
  { JunctionName: "Indore Junction" },
  { JunctionName: "Vijayawada Junction" },
  { JunctionName: "Chandigarh" },
  { JunctionName: "Gorakhpur Junction" },
  { JunctionName: "Gwalior Junction" },
  { JunctionName: "Ghaziabad Junction" },
  { JunctionName: "Agra Cantonment" },
  { JunctionName: "Allahabad Junction" },
  { JunctionName: "Ambala Cantonment" },
  { JunctionName: "Warangal" },
  { JunctionName: "Bhusaval Junction" },
  { JunctionName: "Howrah Junction" },
  { JunctionName: "Thrissur" },
  { JunctionName: "Yesvantpur Junction" },
  { JunctionName: "Visakhapatnam Junction" },
  { JunctionName: "Asansol Junction" },
  { JunctionName: "Nagpur Junction" },
  { JunctionName: "Ahmedabad Junction" },
  { JunctionName: "Visakhapatnam Junction" },
  { JunctionName: "Coimbatore Junction" },
  { JunctionName: "Thiruvananthapuram Central" },
];

const TrainDropdown = ({ setShowDropdown, updateSelectedTrain }) => {
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleTrainSelect = (train) => {
    updateSelectedTrain(train);
    setShowDropdown(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredData = cities.filter((train) =>
        train.JunctionName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterData(filteredData);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue]);

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
          {filterData.map((train, index) => (
            <li key={index} onClick={() => handleTrainSelect(train)}>
              <IoLocationOutline size={25} />
              <h3>{train.JunctionName}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainDropdown;
