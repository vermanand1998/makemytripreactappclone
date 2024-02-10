import React, { useEffect } from "react";
import "./flightdetails.css";
import useFetch from "../../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Flightdetails = ({ id, airline, flightname }) => {
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const { data, get } = useFetch([]);

  useEffect(() => {
    get(`/bookingportals/flight/${id}`);
  }, [id]);
  console.log("data", data);

  return (
    <>
      <div className="flightDetailsOuter">
        <div className="flightDetailsInfo">
          <p className="hrtlCenter">
            <img className="bg-Properties" src={airline} />
            <span className="airlineHeadng">
              <font className="text-[#000000]">
                <b>{flightname}</b>
              </font>
              <font className="text-[#6d7278] text-sm mx-1">
                | {data?.data?.flightID}
              </font>
            </span>
            <span className="aircraftType">Airbus A321</span>
          </p>

          <div className="airlineInfo">
            <div className="airlineDTInfoCol">
              <p className="fontSize18">{data?.data?.departureTime}</p>
              <p className="fontSize12 text-xs">
                {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
              </p>
              <font className="text-[#4a4a4a]">Terminal 2</font>
              <p className="text-xs">{data?.data?.source}, India</p>
            </div>
            <div className="airlineDtlDuration fontSize12">
              0{data?.data?.duration}
              <font className="text-[#757575]">h</font>
              <div className="fliStopsSep">
                <p className="fliStopsSepLine"></p>
              </div>
            </div>
            <div className="airlineDTInfoCol">
              <p className="fontSize18">{data?.data?.arrivalTime}</p>
              <p className="fontSize12 text-xs">
                {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
              </p>
              <font className="text-[#4a4a4a]">Terminal 2</font>
              <p className=" text-xs">{data?.data?.destination}, India</p>
            </div>
            <div className="baggageInfo">
              <p className="appendBottom3">
                <span className="baggageInfoText">AMENTIES</span>
              </p>
              <ul>
                {data?.data?.amenities &&
                  data.data.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flightdetails;
