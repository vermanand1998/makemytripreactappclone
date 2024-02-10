import React, { useEffect } from "react";
import "./hotelsearch.css";
import { Stickyheader } from "../../components/stickeyheader/Stickyheader";
import { Link, useSearchParams } from "react-router-dom";
import HotelTopSection from "./HotelTopSection";
import HotelCard from "./HotelCard";
import useFetch from "../../Hooks/useFetch";

const HotelSearchPage = () => {
  const [params, setParams] = useSearchParams();
  const location = params.get("location");
  const rating = params.get("rating");
  const roomType = params.get("roomType");
  const avgCostPerNight = params.get("avgCostPerNight");
  const { get, data } = useFetch([]);

  const handleCheckboxChange = (key, value) => {
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
      `/bookingportals/hotel?search={"location":"${location}"}${
        rating ? `&filter={"rating":"${rating}"}` : ""
      }${roomType ? `&filter={"rooms.roomType":"${roomType}"}` : ""}${
        avgCostPerNight
          ? `&filter={"avgCostPerNight":{"$lte":"7000", "$gte":"5000"}}`
          : ""
      }`
    );
  }, [params]);

  const handleHotelSearchBtnClick = (searchData) => {
    setParams({
      location: searchData.location,
      checkindate: searchData.checkindate,
      checkoutdate: searchData.checkoutdate,
    });
  };

  return (
    <>
      <Stickyheader />
      <div className="maindiv">
        <HotelTopSection
          data={data}
          updateSearchParams={handleHotelSearchBtnClick}
        />

        {/* <Container> */}
        <div className="hotelsearchbottomdiv">
          <div className="applyfilters-sidebar">
            <div className="selectfiltersdiv">
              <p className="selectfilters-heading">Select Filters</p>
              <div className="filtercategorydiv">
                <p className="filtercategory-heading">Price per night</p>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      checked={avgCostPerNight === "5000" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "avgCostPerNight",
                          e.target.checked ? 5000 : ""
                        )
                      }
                    />
                    <p>₹ 0 - ₹ 1500</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 1500 - ₹ 2500</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 2500 - ₹ 6000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 6000 - ₹ 9500</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 9500 - ₹ 13000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 13000 - ₹ 15000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 15000 - ₹ 30000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 30000+</p>
                  </li>
                </ul>
              </div>

              <div className="filtercategorydiv">
                <p className="filtercategory-heading">User Rating</p>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      checked={rating === "5" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "rating",
                          e.target.checked ? 5 : ""
                        )
                      }
                    />
                    <p>Excellent: 5</p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      checked={rating === "4" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "rating",
                          e.target.checked ? 4 : ""
                        )
                      }
                    />
                    <p>Very Good: 4</p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      checked={rating === "3.5" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "rating",
                          e.target.checked ? 3.5 : ""
                        )
                      }
                    />
                    <p>Good: 3+</p>
                  </li>
                </ul>
              </div>

              <div className="filtercategorydiv">
                <p className="filtercategory-heading">Room Type</p>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      checked={roomType === "Single" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "roomType",
                          e.target.checked ? "Single" : ""
                        )
                      }
                    />
                    <p>Single</p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      checked={roomType === "Suite" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "roomType",
                          e.target.checked ? "Suite" : ""
                        )
                      }
                    />
                    <p>Suite</p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      checked={roomType === "Double" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "roomType",
                          e.target.checked ? "Double" : ""
                        )
                      }
                    />
                    <p>Double</p>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      checked={roomType === "Deluxe" ? true : false}
                      onChange={(e) =>
                        handleCheckboxChange(
                          "roomType",
                          e.target.checked ? "Deluxe" : ""
                        )
                      }
                    />
                    <p>Deluxe</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <HotelCard data={data} />
        </div>
        {/* </Container> */}
      </div>
    </>
  );
};

export default HotelSearchPage;
