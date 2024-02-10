import React, { useState } from "react";
import "./widgetpopup.css";
import { Button } from "@mui/material";
const Flightpopup = ({
  travellers,
  setravellers,
  travellerclass,
  setTravellerClass,
  setShowFightPopup,
}) => {
  const [activeClass, setActiveClass] = useState("");
  const incTraveller = () => {
    setravellers(travellers + 1);
  };
  const decTraveller = () => {
    if (travellers > 1) {
      setravellers(travellers - 1);
    }
  };
  const handleEPE = (classType) => {
    setTravellerClass("Economy/Premium Economy");
    setActiveClass("epe");
  };
  const handlePE = () => {
    setActiveClass("pe");
    setTravellerClass("Premium Economy");
  };
  const handleBSNS = () => {
    setActiveClass("bsns");
    setTravellerClass("Business");
  };
  return (
    <>
      <div className="fltTravellers">
        <div className="gbTravellers">
          <p>Travellers</p>
          <span className="guestCounter">
            <Button className="plus-minus" onClick={decTraveller}>
              -
            </Button>
            {travellers}
            <Button className="plus-minus" onClick={incTraveller}>
              +
            </Button>
          </span>
        </div>
        <div className="travelClass">
          <p>Choose Travel Class</p>
          <ul className="travelClassList">
            <li
              className={activeClass === "epe" ? "activeclass" : ""}
              onClick={handleEPE}
            >
              Economy/Premium Economy
            </li>
            <li
              className={activeClass === "pe" ? "activeclass" : ""}
              onClick={handlePE}
            >
              Premium Economy
            </li>
            <li
              className={activeClass === "bsns" ? "activeclass" : ""}
              onClick={handleBSNS}
            >
              Business
            </li>
          </ul>
        </div>
        <button
          className="travellerApplyBtn"
          onClick={() => {
            setShowFightPopup(false);
          }}
        >
          Apply
        </button>
      </div>
    </>
  );
};
export default Flightpopup;
