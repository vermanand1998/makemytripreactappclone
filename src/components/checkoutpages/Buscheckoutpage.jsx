import React, { useEffect } from "react";
import "./buscheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Buscheckoutpage = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();

  useEffect(() => {
    get(`/bookingportals/bus/${id}`);
  }, [id]);

  const date = new Date();
  const dateofmmonth = date.getDate();
  const dateofmmonthNext = date.getDate() + 1;
  const fullYear = date.getFullYear();
  const lastTwoDigitsOfYear = fullYear % 100; // Extracting the last two digits
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const nextDay = new Date();
  nextDay.setDate(date.getDate() + 1);

  const nextDayOfWeek = days[nextDay.getDay()];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  console.log(lastTwoDigitsOfYear); // Output: Last two digits of the year

  return (
    <>
      <Stickyheader />
      <div className="reviewHeaderWrapper makeFlex vrtlCenter">
        <div className="reviewHeaderContainer  makeFlex spaceBetween ">
          <h1 className="latoBlack lineHeight29 font24">
            Complete your booking
          </h1>
        </div>
      </div>
      <div className="busTravellersWrapper">
        <div className="busTravellersContainer">
          <section className="leftSection appendRight20">
            <div className="travellerBusInfoDetails makeFlex column card">
              <div className="cardPadding">
                <div className="makeFlex spaceBetween appendBottom6 blackText">
                  <p className="latoBlack font18">{data?.data?.name}</p>
                  <span className="latoBold font14">
                    Seat No:
                    <span>
                      <span>U3</span>
                    </span>
                  </span>
                </div>
                <div className="makeFlex spaceBetween appendBottom10 font14">
                  <span className="defaultGreyText font14">
                    {data?.data?.type} Seater
                  </span>
                </div>
              </div>
              <div className="makeFlex spaceBetween hrtlCenter appendBottom2 busFacilityStrip">
                <div className="bus-rating-div">
                  <span className="ratingstar-img"></span>
                  <p>4.9</p>
                </div>
              </div>
              <div className="makeFlex row blackText reviewBusInfoWrapper cardPadding spaceBetween">
                <div>
                  <span className="makeRelative font18 latoBold">
                    {data?.data?.departureTime}

                    <span className="font16 latoRegular darkGreyText ml-2">
                      {dateofmmonth} {month}' {lastTwoDigitsOfYear}, {day}
                    </span>
                  </span>
                  <div className="makeFlex column maxWidth200 maxHeight200 appendTop8">
                    <span className="font16 latoRegular appendBottom8 lineHeight18 blackText">
                      {data?.data?.source}
                    </span>
                  </div>
                </div>
                <div className="makeFlex column hrtlCenter">
                  <span className="font14 defaultGreyText"> 8h 40m</span>
                  <div className="dottedLine"></div>
                </div>
                <div>
                  <span className="makeRelative font18 latoBold">
                    {data?.data?.arrivalTime}

                    <span className="font16 latoRegular darkGreyText ml-2">
                      {dateofmmonthNext} {month}' {lastTwoDigitsOfYear},{" "}
                      {nextDayOfWeek}
                    </span>
                  </span>
                  <div className="makeFlex column maxWidth200 maxHeight200 appendTop8">
                    <span className="font16 latoRegular appendBottom8 lineHeight18 blackText">
                      {data?.data?.destination}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="rightSection">
            <div className="busrightcontainer">
              <div id="FARE_SUMMARY">
                <section className="fareSummary">
                  <div>
                    <p className="fontSize18 blackFont">Price details</p>
                  </div>
                  <div className="fareBreakWrapper">
                    <div className="fareTypeWrap">
                      <div className="fareRow">
                        <div className="makeFlex  pointer flexOne">
                          <span className="appendRight10 ">
                            <span className="iconPlusImg bgProperties"></span>
                          </span>
                          <span className="fareHeader">Base Fare</span>
                        </div>
                        <span className="fontSize14 darkText">
                          ₹ {data?.data?.fare}
                        </span>
                      </div>
                    </div>
                    <div className="fareTypeWrap">
                      <div className="fareRow">
                        <div className="makeFlex  pointer flexOne">
                          <span className="appendRight10">
                            <span className="iconPlusImg bgProperties"></span>
                          </span>
                          <span className="fareHeader">Amount</span>
                        </div>
                        <span className="fontSize14 darkText">
                          ₹ {data?.data?.fare}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="fareFooter">
                    <p className="totalprice">
                      <span className="fontSize16 blackFont">Total Amount</span>
                      <span className="fontSize16 blackFont">
                        ₹ {data?.data?.fare}
                      </span>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Userdetails data={data} keyforTrips={"bus"} />
      </div>
    </>
  );
};

export default Buscheckoutpage;
