import React, { useState } from "react";
import "./widgetpopup.css";
import { Button } from "@mui/material";

const Hotelpopup = ({
  rcount,
  setRCount,
  gcount,
  setGCount,
  setShowHotelPopup,
}) => {
  const decRoom = () => {
    if (rcount > 1) {
      setRCount(rcount - 1);
    }
  };

  const incRoom = () => {
    setRCount(rcount + 1);
  };

  const decGuest = () => {
    if (gcount > 1) {
      setGCount(gcount - 1);
    }
  };

  const incGuest = () => {
    setGCount(gcount + 1);
  };

  return (
    <>
      <div className="rmsGst">
        <div className="rmsGst-hw">
          <p>Rooms</p>
          <div className="guestCounter">
            <Button onClick={decRoom} className="plus-minus">
              -
            </Button>
            {rcount}
            <Button onClick={incRoom} className="plus-minus">
              +
            </Button>
          </div>
        </div>

        <div className="rmsGst-hw">
          <p>Guests</p>
          <div className="guestCounter">
            <Button onClick={decGuest} className="plus-minus">
              -
            </Button>
            {gcount}
            <Button onClick={incGuest} className="plus-minus">
              +
            </Button>
          </div>
        </div>
        <p className="guestnumber-text">
          Please provide right number of Guests for best options and prices.
        </p>
        <button
          onClick={() => {
            setShowHotelPopup(false);
          }}
          className="travellerApplyBtn"
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default Hotelpopup;
