import React, { useEffect, useState } from "react";
import "./hotelsearch.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import useFetch from "../../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import HotelDropdown from "./HotelDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelTopSection = ({ updateSearchParams }) => {
  const [searchData, setSearchData] = useState({
    location: "Pune",
    checkindate: new Date().toLocaleDateString(),
    checkoutdate: new Date().toLocaleDateString(),
  });
  const [selectedCity, setSelectedCity] = useState({
    location: "Pune",
  });
  const [showCheckinDate, setShowCheckinDate] = useState(false);
  const [selectedCheckinDate, setSelectedCheckinDate] = useState(null);
  const [showCheckoutDate, setShowCheckoutDate] = useState(false);
  const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(null);
  const [showCity, setShowCity] = useState(false);
  const { data: dropDownData, get: getDropdownData } = useFetch([]);
  const [params] = useSearchParams();
  const checkindate = decodeURI(params.get("checkindate"));
  const checkoutdate = decodeURI(params.get("checkoutdate"));
  const location = params.get("location");

  const updateSelecetedCity = (city) => {
    handleSearchData("location", city.location);
    setSelectedCity(city);
  };

  useEffect(() => {
    getDropdownData("/bookingportals/hotel");
  }, []);
  useEffect(() => {
    if (!dropDownData || !dropDownData.data || !dropDownData.data.hotels)
      return;

    const fromData = dropDownData.data.hotels.find(
      (hotel) => hotel.location === location
    );
    setSelectedCity(fromData || { location: "Pune" });
  }, [dropDownData]);

  const handleHotelSearchBtnClick = () => {
    updateSearchParams(searchData);
  };

  const handleHotelCityDrpdwn = () => {
    setShowCity(!showCity);
  };

  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCheckindateClick = () => {
    setShowCheckinDate(!showCheckinDate);
  };

  const handleCheckoutDateClick = () => {
    setShowCheckoutDate(!showCheckoutDate);
  };

  const handleCheckinDate = (checkindate) => {
    setSelectedCheckinDate(checkindate);
    setShowCheckinDate(false);

    document.getElementById("hs-checkindatepicker").innerText = new Date(
      checkindate
    )
      .toString()
      .split(" ")
      .slice(0, 4)
      .join(" ");
  };

  const handleCheckoutDate = (checkoutdate) => {
    setSelectedCheckoutDate(checkoutdate);
    setShowCheckoutDate(false);

    document.getElementById("hs-checkoutdatepicker").innerText = new Date(
      checkoutdate
    )
      .toString()
      .split(" ")
      .slice(0, 4)
      .join(" ");
  };

  return (
    <>
      <div className="filldetailslist">
        <div className="hs-city" onClick={handleHotelCityDrpdwn}>
          <p>
            CITY, AREA OR PROPERTY <MdKeyboardArrowDown size={20} />
          </p>

          <p className="selecteditem">{selectedCity.location}</p>
        </div>

        <div onClick={handleCheckindateClick}>
          <p>
            CHECK-IN <MdKeyboardArrowDown size={20} />
          </p>
          <p className="selecteditem" id="hs-checkindatepicker">
            {new Date(checkindate).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <div onClick={handleCheckoutDateClick}>
          <p>
            CHECK-OUT <MdKeyboardArrowDown size={20} />
          </p>
          <p className="selecteditem" id="hs-checkoutdatepicker">
            {new Date(checkoutdate).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>

        <button onClick={handleHotelSearchBtnClick}>SEARCH</button>
      </div>
      {showCity && (
        <OutsideClickHandler onOutsideClick={() => setShowCity(false)}>
          <HotelDropdown
            selectedCity={selectedCity}
            setShowCity={setShowCity}
            updateSelecetedCity={updateSelecetedCity}
          />
        </OutsideClickHandler>
      )}
      {showCheckinDate && (
        <OutsideClickHandler onOutsideClick={() => setShowCheckinDate(false)}>
          <div className="hs-checkin-datepicker">
            <DatePicker
              selected={selectedCheckinDate}
              onChange={handleCheckinDate}
              inline
              minDate={new Date()}
            />
          </div>
        </OutsideClickHandler>
      )}
      {showCheckoutDate && (
        <OutsideClickHandler onOutsideClick={() => setShowCheckoutDate(false)}>
          <div className="hs-checkout-datepicker">
            <DatePicker
              selected={selectedCheckoutDate}
              onChange={handleCheckoutDate}
              inline
              minDate={new Date()}
            />
          </div>
        </OutsideClickHandler>
      )}

      <div className="searchresult-linktohome">
        <div className="para-div">
          <p className="direct-to-home">Home</p>
          <IoIosArrowForward className="para-div-arrowicon" />
          <p className="searchresultshead">
            Hotels and more in {selectedCity.location}
          </p>
        </div>
        <h3>Properties in {selectedCity.location}</h3>
      </div>
    </>
  );
};

export default HotelTopSection;
