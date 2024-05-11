import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import useFetch from "../../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import BusStandTopSearch from "./BusStandTopSearch";
import OutsideClickHandler from "react-outside-click-handler";
import ReactDatePicker from "react-datepicker";

const BusTopSection = ({ updateSearchParams }) => {
  const [fromBusData, setFromBusData] = useState({
    location: "Mumbai, Maharashtra",
  });
  const [toBusData, setToBustData] = useState({
    location: "Jabalpur, Madhya Pradesh",
  });
  const [searchData, setSearchData] = useState({
    source: "Mumbai, Maharashtra",
    destination: "Jabalpur, Madhya Pradesh",
    day: "Mon",
    date: new Date().toLocaleDateString(),
  });
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { data: dropDownData, get: getDropdownData } = useFetch([]);
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const source = params.get("source");
  const destination = params.get("destination");

  useEffect(() => {
    getDropdownData("/bookingportals/hotel");
  }, []);

  useEffect(() => {
    if (!dropDownData || !dropDownData.data || !dropDownData.data.hotels)
      return;

    const fromData = dropDownData.data.hotels.find(
      (bus) => bus.location === source
    );
    const toData = dropDownData.data.hotels.find(
      (bus) => bus.location === destination
    );

    setFromBusData(fromData || { location: "Mumbai, Maharashtra" });
    setToBustData(toData || { location: "Jabalpur, Madhya Pradesh" });
  }, [dropDownData]);

  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleDepartureDateClick = () => {
    setShowDate(!showDate);
  };

  const handleDepartureDate = (date) => {
    setSelectedDate(date);
    setShowDate(false);
  };

  const handleBusSearchButtonClick = () => {
    updateSearchParams(searchData);
  };

  return (
    <>
      <div className="busessearch-headerdiv">
        <BusStandTopSearch
          handleSearchData={handleSearchData}
          field={"From"}
          busData={fromBusData}
          setBusData={setFromBusData}
        />
        <BusStandTopSearch
          handleSearchData={handleSearchData}
          field={"To"}
          busData={toBusData}
          setBusData={setToBustData}
        />

        <div className="bs-departdate-div" onClick={handleDepartureDateClick}>
          <p>
            DEPART <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem" id="bs-datepicker">
            {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>

        <button
          className="bussearch-searchbtn"
          onClick={handleBusSearchButtonClick}
        >
          SEARCH
        </button>
      </div>
      {showDate && (
        <OutsideClickHandler onOutsideClick={() => setShowDate(false)}>
          <div className="bussearch-datepicker">
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

export default BusTopSection;
