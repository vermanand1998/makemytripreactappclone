import React, { useEffect, useState } from "react";
import "./busessearch.css";
import { Stickyheader } from "../../components/stickeyheader/Stickyheader";
import BusTopSection from "./BusTopSection";
import BusCard from "./BusCard";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BusesSearch = () => {
  const [params, setParams] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");
  const day = params.get("day");
  const type = params.get("type");
  const sort = params.get("sort");
  const departureTime = params.get("departureTime");
  const arrivalTime = params.get("arrivalTime");
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
      `/bookingportals/bus?search={"source":"${source}","destination":"${destination}"}&day=${day}&limit=1000${
        type ? `&filter={"type":"${type}"}` : ""
      }${sort ? `&sort={"fare":${sort}}` : ""}${
        departureTime
          ? `&filter={"departureTime":{"$lte":"06:00","$gte":"15:00","$gte":"16:00","$lte":"22:00" }}`
          : ""
      }${
        arrivalTime
          ? `&filter={"arrivalTime":{"$lte":"06:00","$gte":"15:00","$gte":"16:00","$lte":"22:00" }}`
          : ""
      }`
    );
  }, [params]);

  const handleBusSearchButtonClick = (searchData) => {
    setParams({
      source: searchData.source,
      destination: searchData.destination,
      day: searchData.day,
      date: searchData.date, // Assuming date is part of searchData
    });
  };

  return (
    <div className="busessearch">
      <Stickyheader />
      <BusTopSection updateSearchParams={handleBusSearchButtonClick} />
      <div className="busessearch-bottomdiv">
        <div className="bs-bottom-leftdiv">
          <div className="bs-filters-heading">
            <h3>Filters</h3>
          </div>

          <div className="AC-filter-div">
            <p className="ac-filter-div-title">Sort By Price</p>
            <div className="ac-category-div">
              <div className="ac-category-subdiv">
                <input
                  className="h-5 w-4"
                  type="checkbox"
                  checked={sort === "1" ? true : false}
                  onChange={(e) =>
                    handleCheckboxChange("sort", e.target.checked ? 1 : "")
                  }
                />

                <div className="ac-category">
                  <p>Low to High</p>
                </div>
              </div>

              <div className="ac-category-subdiv">
                <input
                  className="h-5 w-4"
                  type="checkbox"
                  checked={sort === "-1" ? true : false}
                  onChange={(e) =>
                    handleCheckboxChange("sort", e.target.checked ? -1 : "")
                  }
                />
                <div className="non-ac-catogory">
                  <p>High to Low</p>
                </div>
              </div>
            </div>
          </div>
          <div className="AC-filter-div">
            <p className="ac-filter-div-title">AC</p>
            <div className="ac-category-div">
              <div className="ac-category-subdiv">
                <input
                  className="h-5 w-4"
                  type="checkbox"
                  checked={type === "AC" ? true : false}
                  onChange={(e) =>
                    handleCheckboxChange("type", e.target.checked ? "AC" : "")
                  }
                />

                <div className="ac-category">
                  <div className="ac-img"></div>
                  <p>AC</p>
                </div>
              </div>

              <div className="ac-category-subdiv">
                <input
                  className="h-5 w-4"
                  type="checkbox"
                  checked={type === "Non-AC" ? true : false}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "type",
                      e.target.checked ? "Non-AC" : ""
                    )
                  }
                />
                <div className="non-ac-catogory">
                  <div className="nonac-img"></div>
                  <p>Non AC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="departure-time-div">
            <p className="departure-time-title">Departure Time</p>
            <div className="departuretime-limit-maindiv">
              <div className="departtime-subdiv">
                <input
                  type="checkbox"
                  className="bs-checkbox h-5 w-4"
                  checked={departureTime === "6" || departureTime === "15"}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "departureTime",
                      e.target.checked ? (e.target.checked ? 6 : 15) : ""
                    )
                  }
                />

                <div className="depart-timerangediv">
                  <div className="dt-11amto6pm-img"></div>
                  <p>6 AM to 3 PM</p>
                </div>
              </div>

              <div className="departtime-subdiv">
                <input
                  type="checkbox"
                  className="bs-checkbox h-5 w-4"
                  checked={departureTime === "16" || departureTime === "22"}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "departureTime",
                      e.target.checked ? (e.target.checked ? 16 : 22) : ""
                    )
                  }
                />
                <div className="depart-timerangediv">
                  <div className="dt-11pmto6am-img"></div>
                  <p>4 PM to 10 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="arrival-time-div">
            <p className="arrival-time-title">Arrival Time</p>
            <div className="arrivaltime-limit-maindiv">
              <div className="arrivaltime-subdiv">
                <input
                  type="checkbox"
                  className="bs-checkbox h-5 w-4"
                  checked={arrivalTime === "6" || arrivalTime === "15"}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "arrivalTime",
                      e.target.checked ? (e.target.checked ? 6 : 15) : ""
                    )
                  }
                />
                <div className="arrival-timerangediv">
                  <div className="at-11amto6pm-img"></div>
                  <p>6 AM to 3 PM</p>
                </div>
              </div>

              <div className="arrivaltime-subdiv">
                <input
                  type="checkbox"
                  className="bs-checkbox h-5 w-4"
                  checked={arrivalTime === "16" || arrivalTime === "22"}
                  onChange={(e) =>
                    handleCheckboxChange(
                      "arrivalTime",
                      e.target.checked ? (e.target.checked ? 16 : 22) : ""
                    )
                  }
                />
                <div className="arrival-timerangediv">
                  <div className="at-11pmto6am-img"></div>
                  <p>4 PM to 10 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bs-bottom-rightdiv">
          <BusCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default BusesSearch;
