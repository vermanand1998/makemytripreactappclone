import React, { useEffect } from "react";
import "./mytrip.css";
import { RiBookmarkFill } from "react-icons/ri";
import useFetch from "../../Hooks/useFetch";

const TripCard = () => {
  const { get, data } = useFetch([]);

  useEffect(() => {
    get("/bookingportals/booking");
  }, []);
  console.log(data);

  // Function to convert UTC time to Kolkata time
  const convertToKolkataTime = (utcTime) => {
    const kolkataTime = new Date(utcTime);
    kolkataTime.setHours(kolkataTime.getHours() + 5); // Add 5 hours for UTC+5:00
    kolkataTime.setMinutes(kolkataTime.getMinutes() + 30); // Add 30 minutes for UTC+5:30
    return kolkataTime;
  };

  // Function to format date as "DD-MM-YYYY"
  const formatDate = (utcDate) => {
    const dateObj = new Date(utcDate);
    const day = dateObj.getUTCDate().toString().padStart(2, "0");
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const year = dateObj.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };

  // Get current time in Kolkata timezone
  const currentKolkataTime = convertToKolkataTime(new Date());

  // Calculate arrival time (6 hours later)
  const arrivalTime = new Date(currentKolkataTime);
  arrivalTime.setHours(arrivalTime.getHours() + 6);

  return (
    <>
      <div>
        {data?.data?.reverse()?.map((card, index) => {
          return (
            <div className="Trip-container" key={index}>
              <RiBookmarkFill size={25} className="mt-flight-icon" />
              <div className="T-A-D-text">
                <p>{card.booking_type}</p>
                <p>Booking Id: {card.user._id}</p>
              </div>

              <div className="dates-1">
                <div className="end-date">
                  <span>
                    {card?.booking_type === "hotel"
                      ? "Checkin Time:"
                      : "Departure Date:"}
                  </span>
                  <span>
                    {card?.booking_type === "hotel"
                      ? currentKolkataTime.toLocaleTimeString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          hour: "numeric",
                          minute: "numeric",
                        })
                      : formatDate(currentKolkataTime)}
                    {/* Current departure date */}
                  </span>
                </div>
              </div>

              <div className="dates-2">
                <div className="Start-date">
                  <span>
                    {card?.booking_type === "hotel"
                      ? "Checkout Time:"
                      : "Arrival Date:"}
                  </span>
                  <span>
                    {card?.booking_type === "hotel"
                      ? arrivalTime.toLocaleTimeString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          hour: "numeric",
                          minute: "numeric",
                        })
                      : formatDate(arrivalTime)}{" "}
                    {/* Arrival date (6 hours later) */}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TripCard;
