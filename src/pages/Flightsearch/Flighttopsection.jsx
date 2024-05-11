import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FlightTopAirportSearch from "./FlightTopAirportSearch";

const Flighttopsection = ({ updateSearchParams }) => {
  const [searchData, setSearchData] = useState({
    source: "PNQ",
    destination: "JAI",
    day: "Mon",
    date: new Date().toLocaleDateString(),
  });
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [fromAirportData, setFromAirportData] = useState({
    city: "Pune",
    iata_code: "PNQ",
    name: "Pune Airport",
  });
  const [toAirportData, setToAirportData] = useState({
    city: "Jaipur",
    iata_code: "JAI",
    name: "Jaipur International Airport",
  });
  const { data: dropDownData, get: getDropdownData } = useFetch([]);
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const source = params.get("source");
  const destination = params.get("destination");

  useEffect(() => {
    getDropdownData("/bookingportals/airport?limit=30");
  }, []);
  useEffect(() => {
    if (!dropDownData) return;
    const fromData = dropDownData?.data?.airports.find(
      (airport) => airport.iata_code === source
    );
    const toData = dropDownData?.data?.airports.find(
      (airport) => airport.iata_code === destination
    );
    setFromAirportData(fromData);
    setToAirportData(toData);
  }, [dropDownData]);

  const handleDepartureDateClick = () => {
    setShowDate(!showDate);
  };
  const handleDepartureDate = (date) => {
    setSelectedDate(date);
    setShowDate(false);
  };
  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSearchButtonClick = () => {
    // Call the updateSearchParams function with the selected data
    updateSearchParams(searchData);
  };
  return (
    <>
      <div className="tripdetails-div">
        <FlightTopAirportSearch
          handleSearchData={handleSearchData}
          field={"From"}
          airportData={fromAirportData}
          setAirportData={setFromAirportData}
        />
        <FlightTopAirportSearch
          handleSearchData={handleSearchData}
          field={"To"}
          airportData={toAirportData}
          setAirportData={setToAirportData}
        />
        <div className="fs-depart" onClick={handleDepartureDateClick}>
          <p>
            DEPART <MdKeyboardArrowDown size={20} />
          </p>
          <p className="fd-selecteditem" id="fs-datepicker">
            {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <button className="flight-search-btn" onClick={handleSearchButtonClick}>
          SEARCH
        </button>
      </div>
      {showDate && (
        <OutsideClickHandler onOutsideClick={() => setShowDate(false)}>
          <div className="datepicker">
            <ReactDatePicker
              selected={selectedDate}
              onChange={handleDepartureDate}
              inline
              minDate={new Date()}
            />
          </div>
        </OutsideClickHandler>
      )}
    </>
  );
};
export default Flighttopsection;
