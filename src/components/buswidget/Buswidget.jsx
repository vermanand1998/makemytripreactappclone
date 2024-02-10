import React, { useEffect, useState } from "react";
import "./buswidget.css";
import { Container } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchbutton from "../Searchbutton/Searchbutton";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, createSearchParams } from "react-router-dom";
import BusStandDropdown from "./BusStandDropdown";

const Buswidget = () => {
  const [searchData, setSearchData] = useState({
    source: "Mumbai, Maharashtra",
    destination: "Jabalpur, Madhya Pradesh",
    day: "Mon",
    date: new Date().toLocaleDateString(),
  });
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [fromBusData, setFromBusData] = useState({
    location: "Mumbai, Maharashtra",
  });
  const [toBusData, setToBustData] = useState({
    location: "Jabalpur, Madhya Pradesh",
  });

  const [locations, setLocations] = useState({
    from: "Mumbai, Maharashtra",
    to: "Jabalpur, Madhya Pradesh",
    BusStandB: "India",
    BusStandA: "India",
  });

  const handleSwap = () => {
    setLocations((prevLocations) => ({
      from: locations.to,
      to: locations.from,
      BusStandA: locations.BusStandB,
      BusStandB: locations.BusStandA,
    }));

    setFromBusData((prevFromAirportData) => ({
      ...toBusData,
      name: toBusData.city,
    }));

    setToBustData((prevToAirportData) => ({
      ...fromBusData,
      name: fromBusData.city,
    }));
  };

  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleTravelDateonClick = () => {
    setShowDate(!showDate);
  };
  const updateDateDivValues = (date) => {
    const tday = date.getDate();
    const tmonth = date.toLocaleString("default", { month: "short" });
    const tyear = date.getFullYear().toString().slice(-2);
    const tdayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("tday").innerText = tday;
    document.getElementById("tmonth").innerText = tmonth;
    document.getElementById("tyear").innerText = tyear;
    document.getElementById("tdayName").innerText = tdayName;
  };

  useEffect(() => {
    updateDateDivValues(new Date());
  }, []);

  const handleTravelDate = (date) => {
    setSelectedDate(date);
    setShowDate(false);
    updateDateDivValues(date);
    const tday = date.getDate();
    const tmonth = date.toLocaleString("default", { month: "short" });
    const tyear = date.getFullYear().toString().slice(-2);
    const tdayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("tday").innerText = tday;
    document.getElementById("tmonth").innerText = tmonth;
    document.getElementById("tyear").innerText = tyear;
    document.getElementById("tdayName").innerText = tdayName;

    handleSearchData(
      "day",
      date.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("date", date);
  };

  return (
    <>
      <div className="buseswidgetmaindiv">
        <Container>
          <div className="bw-upperdiv">
            <p>Bus Ticket Booking.Travelling with a group? Hire a bus.</p>
          </div>
          <div className="bw-detailsdiv">
            <BusStandDropdown
              handleSearchData={handleSearchData}
              field={"From"}
              busData={fromBusData}
              setBusData={setFromBusData}
            />

            <div className="new-div">
              <span className="fltSwipCircle" onClick={handleSwap}>
                <span className="flightsSprite"></span>
              </span>
              <BusStandDropdown
                handleSearchData={handleSearchData}
                field={"To"}
                busData={toBusData}
                setBusData={setToBustData}
              />
            </div>
            <div className="bw-traveldate" onClick={handleTravelDateonClick}>
              <div className="bw-traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </div>
              <p>
                <span id="tday"></span>
                <span id="tmonth"></span>
                <span id="tyear"></span>
              </p>
              <p id="tdayName"></p>
              {showDate && (
                <OutsideClickHandler onOutsideClick={() => setShowDate(false)}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleTravelDate}
                    inline
                    minDate={new Date()}
                  />
                </OutsideClickHandler>
              )}
            </div>
          </div>
          <div className="bw-searchbtndiv">
            <Link to={`/buses?${createSearchParams(searchData)}`}>
              <Searchbutton />
            </Link>
            <div className="fw-exploremore">
              <MdKeyboardDoubleArrowDown size={20} />
              <p>Explore More</p>
              <MdKeyboardDoubleArrowDown size={20} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Buswidget;
