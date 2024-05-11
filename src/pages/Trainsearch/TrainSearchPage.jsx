import React, { useEffect, useState } from "react";
import "./trainsearchpage.css";
import { Stickyheader } from "../../components/stickeyheader/Stickyheader";
import { Link, useSearchParams } from "react-router-dom";
import Traintopsection from "./Traintopsection";
import useFetch from "../../Hooks/useFetch";
import TrainCard from "./TrainCard";
// import CarouselDate from "./CarouselDate";

const TrainsSearchPage = () => {
  const [params, setParams] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");
  const day = params.get("day");
  const trainType = params.get("trainType");
  const departureTime = params.get("departureTime");
  // const arrivalTime = params.get("arrivalTime");
  const coachType = params.get("coachType");
  const { get, data } = useFetch([]);

  const handleCheckboxChange = (key, value) => {
    // setSelectedOption(value === selectedOption ? null : value);
    if (value === "") {
      params.delete(key);
      setParams(params);
      return;
    }

    const newSearchParams = { ...Object.fromEntries(params), [key]: value };
    setParams(newSearchParams);
  };
  useEffect(() => {
    get(
      `/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day=${day}${
        trainType ? `&filter={"trainType":"${trainType}"}` : ""
      }${coachType ? `&filter={"coaches.coachType":"${coachType}"}` : ""}${
        departureTime ? `&filter={"departureTime":{"$gte":"18:00"}}` : ""
      }`
    );
  }, [params]);

  const handleTrainSearchButtonClick = (searchData) => {
    setParams({
      source: searchData.source,
      destination: searchData.destination,
      day: searchData.day,
      date: searchData.date, // Assuming date is part of searchData
    });
  };
  return (
    <>
      <Stickyheader />
      <div className="trainspagemaindiv">
        <Traintopsection updateSearchParams={handleTrainSearchButtonClick} />
        <div className="trainspage-bottomdiv">
          <div className="filters-div">
            <div className="flitercategory">
              <p>Quick Filters</p>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={departureTime === "18" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "departureTime",
                        e.target.checked ? 18 : ""
                      )
                    }
                  />
                  <p>Departure after 6 PM</p>
                </li>
                {/* <li>
                  <input
                    type="checkbox"
                    checked={arrivalTime === "12" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "arrivalTime",
                        e.target.checked ? 12 : ""
                      )
                    }
                  />
                  <p>Arrival before 12 PM</p>
                </li> */}
              </ul>
            </div>

            <div className="flitercategory">
              <p>Journey Class Filters</p>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "1A" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "1A" : ""
                      )
                    }
                  />
                  <p>1st Class AC - 1A</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "2A" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "2A" : ""
                      )
                    }
                  />
                  <p>2 Tier AC - 2A</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "3A" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "3A" : ""
                      )
                    }
                  />
                  <p>3 Tier AC - 3A</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "3E" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "3E" : ""
                      )
                    }
                  />
                  <p>AC three tier(economy)-3E</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "SL" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "SL" : ""
                      )
                    }
                  />
                  <p>Sleeper - SL</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "CC" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "CC" : ""
                      )
                    }
                  />
                  <p>AC Chair Car - CC</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "2S" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "2S" : ""
                      )
                    }
                  />
                  <p>Second Sitting - 2S</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={coachType === "EA" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "coachType",
                        e.target.checked ? "EA" : ""
                      )
                    }
                  />
                  <p>Executive Anubhuti - EA</p>
                </li>
              </ul>
            </div>
            <div className="flitercategory">
              <p>Train Types</p>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={trainType === "Superfast" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "trainType",
                        e.target.checked ? "Superfast" : ""
                      )
                    }
                  />
                  <p>Superfast</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={trainType === "Rajdhani" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "trainType",
                        e.target.checked ? "Rajdhani" : ""
                      )
                    }
                  />
                  <p>Rajdhani</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={trainType === "Express" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "trainType",
                        e.target.checked ? "Express" : ""
                      )
                    }
                  />
                  <p>Express</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={trainType === "Shatabdi" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "trainType",
                        e.target.checked ? "Shatabdi" : ""
                      )
                    }
                  />
                  <p>Shatabdi</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    checked={trainType === "Duronto" ? true : false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "trainType",
                        e.target.checked ? "Duronto" : ""
                      )
                    }
                  />
                  <p>Duronto </p>
                </li>
              </ul>
            </div>
          </div>

          <TrainCard data={data} />
        </div>
      </div>
    </>
  );
};

export default TrainsSearchPage;
