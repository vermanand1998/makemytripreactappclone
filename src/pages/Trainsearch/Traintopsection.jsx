import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";
import ReactDatePicker from "react-datepicker";
import TrainStation from "./TrainStation";

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

const Traintopsection = ({ updateSearchParams }) => {
  const [fromTrainData, setFromTrainData] = useState({
    JunctionName: "Delhi Junction",
  });
  const [toTrainData, setToTrainData] = useState({
    JunctionName: "Salem Junction",
  });
  const [dropDownData] = useState({ cities }); // No need for useFetch
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const source = params.get("source");
  const destination = params.get("destination");
  const [searchData, setSearchData] = useState({
    source: "Delhi Junction",
    destination: "Salem Junction",
    day: "Tue",
    date: new Date().toLocaleDateString(),
  });
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fromData = cities.find(
      (train) => train.JunctionName.trim() === source.trim()
    );
    const toData = cities.find(
      (train) => train.JunctionName.trim() === destination.trim()
    );
    setFromTrainData(fromData);
    setToTrainData(toData);
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

    document.getElementById("ts-datepicker").innerText = new Date(date)
      .toString()
      .split(" ")
      .slice(0, 4)
      .join(" ");
  };
  const handleTrainSearchButtonClick = () => {
    updateSearchParams(searchData);
  };

  return (
    <>
      <div className="trainspage-topdiv">
        <div className="trains-searchdetails-div">
          <TrainStation
            handleSearchData={handleSearchData}
            field={"From"}
            trainData={fromTrainData}
            setTrainData={setFromTrainData}
          />
          <TrainStation
            handleSearchData={handleSearchData}
            field={"To"}
            trainData={toTrainData}
            setTrainData={setToTrainData}
          />

          <div className="traveldate-div" onClick={handleDepartureDateClick}>
            <p>TRAVEL DATE</p>
            <p id="ts-datepicker">
              {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
            </p>
          </div>

          <button
            className="trains-searchbtn"
            onClick={handleTrainSearchButtonClick}
          >
            SEARCH
          </button>
        </div>
        {showDate && (
          <OutsideClickHandler onOutsideClick={() => setShowDate(false)}>
            <div className="trainsearch-datepicker">
              <ReactDatePicker
                selected={selectedDate}
                onChange={handleDepartureDate}
                inline
                minDate={new Date()}
              />
            </div>
          </OutsideClickHandler>
        )}

        <div className="sortedby-div">
          <p>Sorted By :</p>
          <p>
            <span>Availability(Default)</span>
            <IoIosArrowUp size={16} color="#008cff" />
          </p>
          <p>| Showing 48 out of 48 trains.</p>
        </div>
      </div>
    </>
  );
};

export default Traintopsection;
