import React, { useState } from "react";
import BusSeatPicker from "./BusSeatPicker";

const BusCard = ({ data }) => {
  const [isElementVisible, setElementVisibility] = useState(false);
  const [isElement, setElement] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = (index) => {
    setElementVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the specific index
    }));
  };
  const toggleVisible = (index) => {
    setIsClicked((prev) => !prev);
    setElement((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the specific index
    }));
  };
  return (
    <>
      {data?.data?.buses.length > 0 ? (
        data?.data?.buses.map((bus, index) => (
          <div key={index} className="busdetails-maindiv">
            <div className="busdetails-topdiv">
              <div className="bdtd-busdetails">
                <div className="busnamedetails-div">
                  <p>{bus?.name}</p>
                  <p>{bus?.type} Seater</p>
                </div>
                <div className="bustimedetails-div">
                  <div className="busdeparttime-div">
                    <span>{bus?.departureTime}</span>
                    {/* <span>18 JAN</span> */}
                  </div>
                  <div className="bustime-seperationline"></div>
                  <div className="bus-duraion">09hrs 00mins</div>
                  <div className="bustime-seperationline"></div>
                  <div className="busarrivaltime-div">
                    <span>{bus?.arrivalTime}</span>
                    {/* <span>19 JAN</span> */}
                  </div>
                </div>
                <div className="busfare-div">₹ {bus?.fare}</div>
              </div>
              <div className="bus-rating-seats">
                <div className="bus-rating-div">
                  <span className="ratingstar-img"></span>
                  <p>4.9</p>
                </div>
                <p className="seat-number">{bus?.seats} seats</p>
              </div>
            </div>

            <div className="busdetails-bottomdiv">
              <div className="flex-col">
                <div>
                  <span
                    className={`bus-amenty ${
                      isClicked[index] ? "grey-text" : "blue-text"
                    }`}
                    onClick={() => toggleVisible(index)}
                  >
                    Amenities
                  </span>
                </div>
                {isElement[index] && (
                  <div className="font-bold text-[#757575]">
                    {bus.amenities.map((amenity, index) => (
                      <span key={index}>{amenity}</span>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => toggleVisibility(index)}
                className="bus-selectseats-btn"
              >
                {isElementVisible[index] ? "HIDE SEAT" : "SELECT SEAT"}
              </button>
            </div>
            {isElementVisible[index] && (
              <div>
                <BusSeatPicker id={bus._id} />
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="flex justify-center items-center my-16 text-2xl font-bold">
          No buses found for the given day.
        </p>
      )}
    </>
  );
};

export default BusCard;
