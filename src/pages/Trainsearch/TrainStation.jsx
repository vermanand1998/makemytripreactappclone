import React, { useState } from "react";
// import "../Trainswidget/trainswidget.css";

import "./trainsearchpage.css";
import OutsideClickHandler from "react-outside-click-handler";
import Traintopdropdown from "./Traintopdropdown";

const TrainStation = ({ handleSearchData, field, trainData, setTrainData }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const updateSelectedTrain = (train) => {
    const key = field === "To" ? "destination" : "source";
    handleSearchData(key, train.JunctionName);
    setTrainData(train);
  };
  const handleCityDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="ts-dropdown-train">
      <div className="fromcity-div" onClick={handleCityDropdown}>
        <p>{field} City</p>
        <p>{trainData.JunctionName}</p>
      </div>

      {showDropdown && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowDropdown(false);
          }}
        >
          <div className="ts-train-search-maindiv">
            <Traintopdropdown
              setShowDropdown={setShowDropdown}
              updateSelectedTrain={updateSelectedTrain}
            />
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default TrainStation;
