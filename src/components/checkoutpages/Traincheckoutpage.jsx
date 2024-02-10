import React, { useEffect } from "react";
import "./traincheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Traincheckoutpage = () => {
  const { data, get } = useFetch([]);
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));

  const { id } = useParams();

  useEffect(() => {
    get(`/bookingportals/train/${id}`);
  }, [id]);
  return (
    <>
      <Stickyheader />
      <div className="travellerInfo">
        <div className="travellerHead">
          <h2>Select Travellers</h2>
        </div>
        <div className="railTravellersWrapper">
          <div className="railTravellersContainer">
            <section className="leftSection appendTop30 appendRight30">
              <div className="trdInfo">
                <div className="trdDetails makeFlex column">
                  <div className="appendBottom30">
                    <div className="makeFlex appendBottom5 spaceBetween">
                      <div className="column appendRight50">
                        <h3 className="font22 latoBlack appendBottom5">
                          {data?.data?.trainName}
                        </h3>
                        <p>
                          <span className="font12 lightGreyText">
                            #{data?.data?.trainNumber}
                          </span>
                        </p>
                      </div>
                      <div className="makeFlex hrtlCenter ">
                        <div className="makeFlex column appendRight20 ml-5">
                          <p className="appendBottom10">
                            <span className="latoBlack">
                              {data?.data?.departureTime}
                            </span>
                            <span className="latoBlack">, </span>
                          </p>
                          <p className="font12 darkGreyText">
                            {data?.data?.source}
                          </p>
                        </div>
                        <span className="bdrTop"></span>
                        <div className="makeFlex column appendRight20">
                          <p className="font12 latoBold appendBottom20">
                            10
                            <span className="lightGreyText"> hrs </span>
                            48
                            <span className="lightGreyText"> mins</span>
                          </p>
                        </div>
                        <span className="bdrTop"></span>
                        <div className="makeFlex column appendBottom10 appendTop15">
                          <p className="appendBottom10">
                            <span className="latoBlack">
                              {data?.data?.arrivalTime}
                            </span>

                            <span className="latoBlack">, </span>
                          </p>
                          <p className="font12 darkGreyText">
                            {data?.data?.destination}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="makeFlex makeRelative">
                    <div className="makeFlex column appendRight40">
                      <div className="makeFlex column">
                        <h3 className="latoBold font14 darkGreyText ">
                          Availability Status
                        </h3>
                        <div className="trStatusBlock">
                          <p className="makeFlex appendBottom5 hrtlCenter">
                            <span className="latoBlack font16 appendRight20">
                              SL
                            </span>
                            <span className="latoBold font16">
                              <span className="orangeText">RLWL40/WL33</span>
                            </span>
                          </p>
                          <p className="font12 lightGreyText appendTop10">
                            Updated 11 hrs ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-[43px]">
                      <div className="selectedQuotaContainer noSelection selectWrap makeRelative">
                        <p className="labelName appendBottom10 darkGreyText font14 greyed latoBold">
                          Your Boarding Station
                        </p>
                        <p className="selectedQuota cursorPointer latoBold font12 makeFlex">
                          <span className="latoRegular font14 darkGreyText">
                            {data?.data?.source}- {data?.data?.departureTime}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className=" appendTop30 rightrailSection">
              <div className="appendBottom20">
                <div id="FARE_SUMMARY">
                  <section className="fareSummary">
                    <div>
                      <p className="fontSize18 blackFont payandbook">
                        FARE SUMMARY
                      </p>
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
                            <span className="fareHeader">Extra Charges</span>
                          </div>
                          <span className="fontSize14 darkText">₹ 0</span>
                        </div>
                      </div>
                    </div>
                    <div className="fareFooter">
                      <p className="payNowWrapper">
                        <span className="fontSize16 blackFont">
                          Total Price
                        </span>
                        <span className="fontSize16 blackFont">
                          ₹ {data?.data?.fare}
                        </span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <Userdetails data={data} keyforTrips={"train"} />
      </div>
    </>
  );
};

export default Traincheckoutpage;
