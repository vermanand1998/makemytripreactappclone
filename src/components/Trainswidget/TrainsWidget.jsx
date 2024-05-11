import React, { useEffect, useState } from "react";
import "./trainswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, createSearchParams } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Trainpopup from "../widgetpopup/Trainpopup";
import StationSearchDropdown from "./StationSearchDropdown";

const TrainsWidget = () => {
  const [searchData, setSearchData] = useState({
    source: "Delhi Junction",
    destination: "Salem Junction",
    day: "Tue",
    date: new Date().toLocaleDateString(),
  });
  const [trainClass, setTrainClass] = useState("All Class");
  const [shortClass, setShortClass] = useState("ALL");
  const [showTrainPopup, setShowTrainPopup] = useState(false);
  const [showTravelDate, setShowTravelDate] = useState(null);
  const [selectedTravelDate, setSelectedTravelDate] = useState(new Date());
  const [fromTrainData, setFromTrainData] = useState({
    JunctionName: "Delhi Junction",
  });
  const [toTrainData, setToTrainData] = useState({
    JunctionName: "Salem Junction",
  });
  const [locations, setLocations] = useState({
    from: "New Delhi",
    to: "Kanpur",
    trainStationB: "NDLS, New Delhi Railway Station",
    trainStationA: "CNB, Kanpur Central",
  });

  const handleSwap = () => {
    setLocations((prevLocations) => ({
      from: prevLocations.to,
      to: prevLocations.from,
      trainStationA: prevLocations.trainStationB,
      trainStationB: prevLocations.trainStationA,
    }));

    setFromTrainData((prevFromTrainData) => ({
      ...toTrainData,
      JunctionName: toTrainData.JunctionName,
    }));

    setToTrainData((prevToTrainData) => ({
      ...fromTrainData,
      JunctionName: fromTrainData.JunctionName,
    }));
  };

  const handleSearchData = (key, value) => {
    setSearchData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePopupClick = () => {
    setShowTrainPopup(!showTrainPopup);
  };

  const handleTravelIconClick = () => {
    setShowTravelDate(!showTravelDate);
  };

  const handleTravelDate = (date) => {
    setSelectedTravelDate(date);
    setShowTravelDate(false);
    handleSearchData(
      "day",
      date.toLocaleDateString("default", { weekday: "short" })
    );
    handleSearchData("date", date.toLocaleDateString());
  };
  return (
    <>
      <div className="trainswidgetmaindiv">
        <Container>
          <div className="tw-upperdiv">
            <p> Train Ticket Booking IRCTC Authorized e-ticketing</p>
          </div>
          <div className="tw-bottomdiv">
            <StationSearchDropdown
              handleSearchData={handleSearchData}
              field={"From"}
              trainData={fromTrainData}
              setTrainData={setFromTrainData}
            />

            <div className="new-div">
              <span className="fltSwipCircle" onClick={handleSwap}>
                <span className="flightsSprite"></span>
              </span>

              <StationSearchDropdown
                handleSearchData={handleSearchData}
                field={"To"}
                trainData={toTrainData}
                setTrainData={setToTrainData}
              />
            </div>
            <div className="tw-traveldate" onClick={handleTravelIconClick}>
              <div className="traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown size={20} color="#008CFF" />
              </div>
              <p>
                <span>{selectedTravelDate.getDate()}</span>
                <span>
                  {selectedTravelDate.toLocaleString("default", {
                    month: "short",
                  })}
                </span>
                <span>
                  {selectedTravelDate.getFullYear().toString().slice(-2)}
                </span>
              </p>
              <p>
                {selectedTravelDate.toLocaleDateString("default", {
                  weekday: "long",
                })}
              </p>
            </div>
            {showTravelDate && (
              <OutsideClickHandler
                onOutsideClick={() => setShowTravelDate(false)}
              >
                <div className="datepicker-train">
                  <DatePicker
                    selected={selectedTravelDate}
                    onChange={handleTravelDate}
                    inline
                    minDate={new Date()}
                  />
                </div>
              </OutsideClickHandler>
            )}
            <div className="tw-class" onClick={handlePopupClick}>
              <p>
                class
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </p>
              <p>{shortClass}</p>
              <p>{trainClass}</p>
            </div>

            {showTrainPopup && (
              <OutsideClickHandler
                onOutsideClick={() => setShowTrainPopup(false)}
              >
                <Trainpopup
                  // updateTrainPopupData={updateTrainPopupData}
                  setShowTrainPopup={setShowTrainPopup}
                  trainClass={trainClass}
                  setTrainClass={setTrainClass}
                  shortClass={shortClass}
                  setShortClass={setShortClass}
                />
              </OutsideClickHandler>
            )}
          </div>
          <Link to={`/trains?${createSearchParams(searchData)}`}>
            <div className="tw-searchbtndiv">
              <Searchbutton />
              <div className="fw-exploremore">
                <MdKeyboardDoubleArrowDown size={20} />
                <p>Explore More</p>
                <MdKeyboardDoubleArrowDown size={20} />
              </div>
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default TrainsWidget;
