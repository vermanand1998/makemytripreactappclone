import React, { useEffect } from "react";
import "./flightcheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";
import useFetch from "../../Hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";

const Flightcheckoutpage = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();

  const date = new Date();
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  useEffect(() => {
    get(`/bookingportals/flight/${id}`);
  }, [id]);

  return (
    <>
      <Stickyheader />
      <div className="reviewTravellerAddons">
        <div className="pageStickyHder">
          <div className="flightsContainer pageHeaderWrap">
            <div className="pageHeader">
              <h2 className="fontSize20 blackFont whiteText headerTitle">
                Complete your booking
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flightBody">
        <span className="bgGradient"></span>
        <div className="flightsContainer footerSpace">
          <div className="makeFlex spaceBetween">
            <div className="pageLeftConainer">
              <div className="componentContainer padding20">
                <section className="flightDetailBlk undefined">
                  <div className="flDetailHdr">
                    <div>
                      <h2 className="blackFont">
                        <b>
                          {data?.data?.source} → {data?.data?.destination}
                        </b>
                      </h2>
                      <p className="appendTop10 makeFlex">
                        <span className="scheduleDay">{formattedDate}</span>
                        <span className="fontSize14 ml-3">
                          {data?.data?.stops} Stop · {data?.data?.duration}h
                        </span>
                      </p>
                    </div>
                    <div className="makeFlex column">
                      <p className="refundTag">
                        <font className="text-[#ffffff]">
                          Cancellation Fees Apply
                        </font>
                      </p>
                      <p className="fontSize14 linkText appendTop10 textRight">
                        <span>View Fare Rules </span>
                      </p>
                    </div>
                  </div>
                  <div className="flightItenaryWrap 0">
                    <div className="flightItenaryHdr">
                      <div className="makeFlex ">
                        <span className="bgPropertiess icon24"></span>
                        <p className="makeFlex hrtlCenter gap-x-10">
                          <span className="fontSize14 boldFont">IndiGo</span>
                          <span className="fontSize14">
                            {data?.data?.flightID}
                          </span>
                          <span className="aircraftType">Airbus A321</span>
                        </p>
                      </div>
                    </div>
                    <div className="flightItenary">
                      <div className="flightItineraryDetails">
                        <div className="flexOne">
                          <div className="itenaryLeft">
                            <div className=" makeFlex gap-x-10">
                              <div className="makeFlex time-info-ui">
                                <span className="fontSize14 blackFont">
                                  {data?.data?.departureTime}
                                </span>
                                <span className="layoverCircle"></span>
                              </div>
                              <div>
                                <span className="fontSize14 blackFont">
                                  {data?.data?.source}
                                </span>
                                {/* <span className="fontSize14">
                                  . Chhatrapati Shivaji International
                                  Airport,Terminal 2
                                </span> */}
                              </div>
                            </div>
                            <div className="layover-time">
                              <span className="fontSize14">
                                {data?.data?.duration}h
                              </span>
                            </div>
                            <div className="makeFlex gap-x-10 overideBg">
                              <div className="makeFlex time-info-ui">
                                <span className="fontSize14 blackFont">
                                  {data?.data?.arrivalTime}
                                </span>
                                <span className="layoverCircle"></span>
                              </div>
                              <div>
                                <span className="fontSize14 blackFont">
                                  {data?.data?.destination}
                                </span>
                                {/* <span className="fontSize14">
                                  . Indira Gandhi International Airport,
                                  Terminal 2
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="pageRightContainer customScroll">
              <div className="appendBottom20">
                <div id="FARE_SUMMARY">
                  <section className="fareSummary">
                    <div>
                      <p className="fontSize18 blackFont">Fare Summary</p>
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
                            ₹ {data?.data?.ticketPrice}
                          </span>
                        </div>
                      </div>
                      <div className="fareTypeWrap">
                        <div className="fareRow">
                          <div className="makeFlex  pointer flexOne">
                            <span className="appendRight10">
                              <span className="iconPlusImg bgProperties"></span>
                            </span>
                            <span className="fareHeader">
                              Taxes and Surcharges
                            </span>
                          </div>
                          <span className="fontSize14 darkText">₹ 0</span>
                        </div>
                      </div>
                    </div>
                    <div className="fareFooter">
                      <p className="fareRow">
                        <span className="fontSize16 blackFont">
                          Total Amount
                        </span>
                        <span className="fontSize16 blackFont">
                          ₹ {data?.data?.ticketPrice}
                        </span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Userdetails data={data} keyforTrips={"flight"} />
    </>
  );
};

export default Flightcheckoutpage;
