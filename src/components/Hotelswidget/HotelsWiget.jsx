import React, { useEffect, useRef, useState } from "react";
import "./hotelswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, createSearchParams } from "react-router-dom";
import Hotelpopup from "../widgetpopup/Hotelpopup";
import HotelCityDropdown from "./HotelCityDropdown";

const HotelsWiget = () => {
  const [searchData, setSearchData] = useState({
    location: "Delhi",
  });
  const [rcount, setRCount] = useState(1);
  const [gcount, setGCount] = useState(2);
  const [showCity, setShowCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState({
    location: "Pune",
  });
  const [showHotelPopup, setShowHotelPopup] = useState(false);
  const [hotelPopupData, setHotelPopupData] = useState();
  const [showCheckinDate, setShowCheckinDate] = useState(false);
  const [selectedCheckinDate, setSelectedCheckinDate] = useState(null);
  const [showCheckoutDate, setShowCheckoutDate] = useState(false);
  const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(null);

  const handleHotelCityDrpdwn = () => {
    setShowCity(!showCity);
  };

  const updateSelecetedCity = (city) => {
    handleSearchData("location", city.location);
    setSelectedCity(city);
  };

  const handlePopupClick = () => {
    setShowHotelPopup(!showHotelPopup);
  };
  const updateHotelPopupData = () => {
    setHotelPopupData(hotelPopupData);
  };
  const handleCheckinIconClick = () => {
    setShowCheckinDate(!showCheckinDate);
  };
  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleCheckinDate = (date) => {
    updateInDateDivValues(date);
    setSelectedCheckinDate(date);
    setShowCheckinDate(false);
    const cinday = date.getDate();
    const cinmonth = date.toLocaleString("default", { month: "short" });
    const cinyear = date.getFullYear().toString().slice(-2);
    const cindayName = date.toLocaleDateString("default", { weekday: "long" });
    document.getElementById("cinday").innerText = cinday;
    document.getElementById("cinmonth").innerText = cinmonth;
    document.getElementById("cinyear").innerText = cinyear;
    document.getElementById("cindayName").innerText = cindayName;
    handleSearchData(
      "day",
      date.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("date", date);
  };

  const handleCheckoutIconClick = () => {
    setShowCheckoutDate(!showCheckoutDate);
  };
  const updateInDateDivValues = (date) => {
    const cinday = date.getDate();
    const cinmonth = date.toLocaleString("default", { month: "short" });
    const cinyear = date.getFullYear().toString().slice(-2);
    const cindayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("cinday").innerText = cinday;
    document.getElementById("cinmonth").innerText = cinmonth;
    document.getElementById("cinyear").innerText = cinyear;
    document.getElementById("cindayName").innerText = cindayName;
  };

  useEffect(() => {
    updateInDateDivValues(new Date());
  }, []);

  const updateOutDateDivValues = (date) => {
    let coutDate = new Date(date);
    coutDate.setDate(date.getDate() + 2);
    const coutday = coutDate.getDate();
    const coutmonth = date.toLocaleString("default", { month: "short" });
    const coutyear = date.getFullYear().toString().slice(-2);
    const coutdayName = date.toLocaleDateString("default", { weekday: "long" });

    document.getElementById("coutday").innerText = coutday;
    document.getElementById("coutmonth").innerText = coutmonth;
    document.getElementById("coutyear").innerText = coutyear;
    document.getElementById("coutdayName").innerText = coutdayName;
  };

  useEffect(() => {
    updateOutDateDivValues(new Date());
  }, []);
  const handleCheckoutDate = (date) => {
    updateOutDateDivValues(date);
    setSelectedCheckoutDate(date);
    setShowCheckoutDate(false);
    const coutday = date.getDate();
    const coutmonth = date.toLocaleString("default", { month: "short" });
    const coutyear = date.getFullYear().toString().slice(-2);
    const coutdayName = date.toLocaleDateString("default", { weekday: "long" });
    document.getElementById("coutday").innerText = coutday;
    document.getElementById("coutmonth").innerText = coutmonth;
    document.getElementById("coutyear").innerText = coutyear;
    document.getElementById("coutdayName").innerText = coutdayName;

    handleSearchData(
      "day",
      date.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("date", date);
  };

  return (
    <>
      <div className="hotelwidgetmaindiv">
        <Container>
          <div className="hw-upperdiv">
            <p>
              Book Domestic and International Property Online. To list your
              property...
            </p>
          </div>
          <div className="hw-middlediv">
            <div className="hw-cityname" onClick={handleHotelCityDrpdwn}>
              <p>
                City, Property Name Or Location
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </p>
              <p className="hw-selectedcityname">{selectedCity.location}</p>
              {/* <p className="hw-selectedcntrynme">India</p> */}
            </div>
            {showCity && (
              <OutsideClickHandler onOutsideClick={() => setShowCity(false)}>
                <HotelCityDropdown
                  selectedCity={selectedCity}
                  setShowCity={setShowCity}
                  updateSelecetedCity={updateSelecetedCity}
                />
              </OutsideClickHandler>
            )}
            <div className="hw-addcheckin" onClick={handleCheckinIconClick}>
              <div className="checkinheaddiv">
                <p className="checkinheading">Check-In</p>
                <MdKeyboardArrowDown size={20} color="#008CFF" />
              </div>
              {showCheckinDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowCheckinDate(false)}
                >
                  <DatePicker
                    selected={selectedCheckinDate}
                    onChange={handleCheckinDate}
                    inline
                    minDate={new Date()}
                  />
                </OutsideClickHandler>
              )}
              <p>
                <span id="cinday"></span>
                <span id="cinmonth"></span>
                <span id="cinyear"></span>
              </p>
              <p id="cindayName"></p>
            </div>
            <div className="hw-addcheckout" onClick={handleCheckoutIconClick}>
              <div className="checkoutheaddiv">
                <p className="checkoutheading">Check-out</p>
                <MdKeyboardArrowDown size={20} color="#008CFF" />
              </div>
              {showCheckoutDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowCheckoutDate(false)}
                >
                  <DatePicker
                    selected={selectedCheckoutDate}
                    onChange={handleCheckoutDate}
                    inline
                    minDate={new Date()}
                  />
                </OutsideClickHandler>
              )}
              <p>
                <span id="coutday"></span>
                <span id="coutmonth"></span>
                <span id="coutyear"></span>
              </p>
              <p id="coutdayName"></p>
            </div>
            <div className="hw-roomsandguest" onClick={handlePopupClick}>
              <p>
                Rooms & Guests
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </p>
              <p>
                <span>{rcount}</span> Rooms <span>{gcount}</span> Guests
              </p>
            </div>
            {showHotelPopup && (
              <OutsideClickHandler
                onOutsideClick={() => setShowHotelPopup(false)}
              >
                <Hotelpopup
                  updateHotelPopupData={updateHotelPopupData}
                  setShowHotelPopup={setShowHotelPopup}
                  rcount={rcount}
                  setRCount={setRCount}
                  gcount={gcount}
                  setGCount={setGCount}
                />
              </OutsideClickHandler>
            )}
          </div>
          <div className="hw-bottomdiv">
            <p>Trending Searches:</p>
            <span>New York, United States</span>
            <span>Dubai, United Arab Emirates</span>
            <span>Bangkok, Thailand</span>
          </div>
          <Link to={`/hotels?${createSearchParams(searchData)}`}>
            <Searchbutton />
          </Link>
          <div className="fw-exploremore">
            <MdKeyboardDoubleArrowDown size={20} />
            <p>Explore More</p>
            <MdKeyboardDoubleArrowDown size={20} />
          </div>
        </Container>
      </div>
    </>
  );
};
export default HotelsWiget;
