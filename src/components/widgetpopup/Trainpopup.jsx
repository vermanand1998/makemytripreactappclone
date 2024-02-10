import React from "react";
import "./widgetpopup.css";

const Trainpopup = ({
  setShowTrainPopup,
  trainClass,
  setTrainClass,
  shortClass,
  setShortClass,
}) => {
  const handleAllClass = () => {
    setShowTrainPopup(false);
    setTrainClass("All Class");
    setShortClass("ALL");
  };

  const handleSleeper = () => {
    setShowTrainPopup(false);
    setTrainClass("Sleeper Class");
    setShortClass("SL");
  };
  const handleTAC = () => {
    setShowTrainPopup(false);
    setTrainClass("Third AC");
    setShortClass("3A");
  };
  const handleSAC = () => {
    setShowTrainPopup(false);
    setTrainClass("Second AC");
    setShortClass("2A");
  };
  const handleFAC = () => {
    setShowTrainPopup(false);
    setTrainClass("First AC");
    setShortClass("1A");
  };
  const handleSS = () => {
    setShowTrainPopup(false);
    setTrainClass("Second Seating");
    setShortClass("2S");
  };
  const handleVD = () => {
    setShowTrainPopup(false);
    setTrainClass("Vistadome AC");
    setShortClass("EV");
  };
  const handleACCC = () => {
    setShowTrainPopup(false);
    setTrainClass("AC Chair Car");
    setShortClass("CC");
  };
  const handleFC = () => {
    setShowTrainPopup(false);
    setTrainClass("First Class");
    setShortClass("FC");
  };
  const handleTACE = () => {
    setShowTrainPopup(false);
    setTrainClass("Third AC Economy");
    setShortClass("3E");
  };

  return (
    <div>
      <ul className="travelForPopup">
        <li onClick={handleAllClass}>All Class</li>
        <li onClick={handleSleeper}>Sleeper Class</li>
        <li onClick={handleTAC}>Third AC</li>
        <li onClick={handleSAC}>Second AC</li>
        <li onClick={handleFAC}>First AC</li>
        <li onClick={handleSS}>Second Seating</li>
        <li onClick={handleVD}>Vistadome AC</li>
        <li onClick={handleACCC}>AC Chair Car</li>
        <li onClick={handleFC}>First Class</li>
        <li onClick={handleTACE}>Third AC Economy</li>
      </ul>
    </div>
  );
};

export default Trainpopup;
