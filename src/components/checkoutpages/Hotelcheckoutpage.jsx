import React, { useEffect, useState } from "react";
import "./hotelcheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import HotelpropertyRules from "../../pages/Hotelsearch/HotelpropertyRules";

const Hotelcheckoutpage = () => {
  const { data, get } = useFetch([]);

  const { id } = useParams();
  useEffect(() => {
    get(`/bookingportals/hotel/${id}`);
  }, [id]);

  const baseCost = data?.data?.rooms[0].costDetails.baseCost || 0;
  const taxesAndFees = data?.data?.rooms[0].costDetails.taxesAndFees || 0;
  const totalCost = baseCost + taxesAndFees;

  const date = new Date();
  const dateofmmonth = date.getDate();
  const dateofmmonthNext = date.getDate() + 1;
  const year = date.getFullYear();
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

  return (
    <>
      <Stickyheader />
      <div>
        <div className="rvHdr">
          <div className="rvHdrContent">
            <h2 className="font24 latoBlack whiteText">Review your Booking</h2>
          </div>
        </div>
        <div className="rvWrapper">
          <div className="rvWrapperLeft">
            <div className="htlInfoContainer appendBottom20 paper">
              <div className="htlInfo__wrapper">
                <div className="rvHtlInfo">
                  <div className="rvHtlInfoLft">
                    <h3 className="font22 latoBlack blackText">
                      {data?.data?.name}
                    </h3>
                    <div className="makeFlex  appendTop8">
                      <div className="bus-rating-div">
                        <span className="ratingstar-img"></span>
                        <p>{data?.data?.rating}</p>
                      </div>
                      <span className=" htlInfo__tag">
                        <div>
                          <div className="inlineFlex">
                            <span className="rmTypeTag">Couple Friendly</span>
                          </div>
                        </div>
                      </span>
                    </div>
                    <p className="font14 grayText lineHight20 appendTop8 appendBottom8">
                      {data?.data?.location}
                    </p>
                  </div>
                  <div className="rvHtlInfoRht">
                    <div className="rvHtlInfoImg">
                      <img src={data?.data?.images[0]} alt="hotel" />
                    </div>
                  </div>
                </div>
                <div className="prptChkCont appendBottom10">
                  <div className="prptChk forReview">
                    <div className="prptChk__col">
                      <p className="font12 grey2 appendBottom3">CHECK IN</p>
                      <p className="prptChk__date">
                        {day}
                        <span className="text-[1.4rem] font-bold">
                          {dateofmmonth} {month}
                        </span>
                        {year}
                      </p>
                    </div>
                    <div className="prptChk__col last">
                      <p className="font12 grey2 appendBottom3">CHECK OUT</p>
                      <p className="prptChk__date">
                        {nextDayOfWeek}
                        <span className="text-[1.4rem] font-bold">
                          {dateofmmonthNext} {month}
                        </span>
                        {year}
                      </p>
                    </div>
                  </div>
                  <div className="prptChkCont__col undefined">
                    <p className="font16 blackText">
                      <span className="font-bold mr-1">1</span>
                      <span className="">Night |</span>
                      <span className="font-bold mx-1">2</span>
                      Adults |<span>1 Room</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rmDesc">
                  <div className="makeFlex spaceBetween">
                    <div className="flexOne">
                      <h4 className="font18 latoBlack blackText">
                        {data?.data?.rooms[0].roomType} Room
                      </h4>
                      <p className="font14 grayText appendTop5">2 Adults</p>
                      <ul className="incList appendTop15 appendBottom10">
                        <li className="incListItem">
                          <span className="incListIcon">
                            <span className="blackDot"></span>
                          </span>
                          <div className="makeFlex column end">
                            <div>
                              <span>Room Only</span>
                            </div>
                          </div>
                        </li>
                        <li className="incListItem">
                          <span className="incListIcon">
                            <span className="blackDot"></span>
                          </span>
                          <div className="makeFlex column end">
                            <div>
                              <span>No meals included</span>
                            </div>
                          </div>
                        </li>
                        <li className="incListItem">
                          <span className="incListIcon">
                            <span className="blackDot"></span>
                          </span>
                          <div className="makeFlex column end">
                            <div>
                              <span>
                                20% discount on Food and Soft Beverages
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="appendTop10 appendBottom10">
                        <div className="makeFlex top">
                          <div>
                            <span className="latoBold greenText">
                              On Cancellation, You will not get any refund
                            </span>
                            <Link
                              to="/comingsoon"
                              className="latoBlack font12 pointer appendLeft10 cancelPolicy"
                            >
                              Cancellation policy details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="imptInfo">
                  <div className="makeFlex hrtlCenter">
                    <h4 className="imptInfoHdng">Important information</h4>
                  </div>
                  <HotelpropertyRules />
                </div>
              </div>
            </div>
          </div>
          <div className="rvWrapperRight">
            <div className="appendBottom20">
              <div id="FARE_SUMMARY">
                <section className="fareSummary">
                  <div>
                    <p className="fontSize18 blackFont">Price Breakup</p>
                  </div>
                  <div className="fareBreakWrapper">
                    <div className="fareTypeWrap">
                      <div className="fareRow">
                        <div className="makeFlex  pointer flexOne">
                          <span className="appendRight10">
                            <span className="iconPlusImg bgProperties"></span>
                          </span>
                          <span className="fareHeader">1 Room x 1 Night</span>
                        </div>
                        <span className="fontSize14 darkText">
                          ₹ {data?.data?.rooms[0].costDetails.baseCost}
                        </span>
                      </div>
                    </div>
                    <div className="fareTypeWrap">
                      <div className="fareRow">
                        <div className="makeFlex  pointer flexOne">
                          <span className="appendRight10 ">
                            <span className="iconPlusImg bgProperties"></span>
                          </span>
                          <span className="fareHeader">Hotel Taxes</span>
                        </div>
                        <span className="fontSize14 darkText">
                          ₹ {data?.data?.rooms[0].costDetails.taxesAndFees}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hotelfareFooter">
                    <p className="fareRow">
                      <span className="fontSize16 blackFont">
                        Total Payment
                      </span>
                      <span className="fontSize16 blackFont">
                        ₹ {totalCost}
                      </span>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Userdetails data={data} keyforTrips={"hotel"} />
    </>
  );
};

export default Hotelcheckoutpage;
