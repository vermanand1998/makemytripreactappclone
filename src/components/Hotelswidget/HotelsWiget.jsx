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
    date: new Date().toLocaleDateString(),
    nextDate: new Date().toLocaleDateString(),
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
  const [selectedCheckinDate, setSelectedCheckinDate] = useState(new Date());
  const [showCheckoutDate, setShowCheckoutDate] = useState(false);
  const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(new Date());

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
    setSelectedCheckinDate(date);
    setShowCheckinDate(false);
    handleSearchData(
      "day",
      date.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("date", date.toLocaleDateString());
  };

  const handleCheckoutIconClick = () => {
    setShowCheckoutDate(!showCheckoutDate);
  };

  const handleCheckoutDate = (nextDate) => {
    setSelectedCheckoutDate(nextDate);
    setShowCheckoutDate(false);
    handleSearchData(
      "day",
      nextDate.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("nextDate", nextDate.toLocaleDateString());
  };
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    handleCheckoutDate(tomorrow);
  }, []);

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
              <p>
                <span>{selectedCheckinDate.getDate()}</span>
                <span>
                  {selectedCheckinDate.toLocaleString("default", {
                    month: "short",
                  })}
                </span>
                <span>
                  {selectedCheckinDate.getFullYear().toString().slice(-2)}
                </span>
              </p>
              <p>
                {selectedCheckinDate.toLocaleDateString("default", {
                  weekday: "long",
                })}
              </p>
            </div>
            {showCheckinDate && (
              <OutsideClickHandler
                onOutsideClick={() => setShowCheckinDate(false)}
              >
                <div className="datepicker-hotelcheckin">
                  <DatePicker
                    selected={selectedCheckinDate}
                    onChange={handleCheckinDate}
                    inline
                    minDate={new Date()}
                  />
                </div>
              </OutsideClickHandler>
            )}
            <div className="hw-addcheckout" onClick={handleCheckoutIconClick}>
              <div className="checkoutheaddiv">
                <p className="checkoutheading">Check-out</p>
                <MdKeyboardArrowDown size={20} color="#008CFF" />
              </div>
              <p>
                <span>{selectedCheckoutDate.getDate()}</span>
                <span>
                  {selectedCheckoutDate.toLocaleString("default", {
                    month: "short",
                  })}
                </span>
                <span>
                  {selectedCheckoutDate.getFullYear().toString().slice(-2)}
                </span>
              </p>
              <p>
                {selectedCheckoutDate.toLocaleDateString("default", {
                  weekday: "long",
                })}
              </p>
            </div>
            {showCheckoutDate && (
              <OutsideClickHandler
                onOutsideClick={() => setShowCheckoutDate(false)}
              >
                <div className="datepicker-hotelcheckout">
                  <DatePicker
                    selected={selectedCheckoutDate}
                    onChange={handleCheckoutDate}
                    inline
                    minDate={new Date()}
                  />
                </div>
              </OutsideClickHandler>
            )}
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
