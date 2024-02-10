import React, { useEffect, useRef, useState } from "react";
import "./offers.css";
import { Button, Container } from "@mui/material";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Offercards from "./Offercards";
import useFetch from "../../Hooks/useFetch";

const Offers = () => {
  const [offerActive, setOfferActive] = useState("ALL");
  const { get, data } = useFetch([]);

  const offers = [
    { title: "All Offers", param: "ALL", allData: 67, index: 0 },
    { title: "Hotels", param: "HOTELS", allData: 29, index: 1 },
    { title: "Flights", param: "FLIGHTS", allData: 29, index: 2 },
    { title: "Trains", param: "RAILS", allData: 6, index: 3 },
    { title: "Cabs", param: "CABS", allData: 7, index: 4 },
  ];
  useEffect(() => {
    // Initial data fetch or any other side effect
    get(
      `/bookingportals/offers?filter={"type":"${offers[0].param}"}&limit=${offers[0].allData}`
    );
  }, []);

  const handleShowOffer = (param, index) => {
    setOfferActive(param);
    // Fetch data based on the selected offer type
    get(
      `/bookingportals/offers?filter={"type":"${param}"}&limit=${offers[index].allData}`
    );
  };

  const boxRef = useRef();

  const handlePrevious = () => {
    let width = boxRef.current.clientWidth * 0.8;
    boxRef.current.scrollLeft -= width;
  };

  const handleNext = () => {
    let width = boxRef.current.clientWidth * 0.8;
    boxRef.current.scrollLeft += width;
  };

  return (
    <>
      <Container>
        <div className="offers-main">
          <div className="offers-topdiv">
            <h2 className="mr-16 text-3xl font-bold leading-3 cursor-default">
              Offers
            </h2>
            <ul className="offers-topdiv-list">
              {offers.map((offer, index) => (
                <li
                  key={index}
                  className={offerActive === offer.param ? "activeoffer" : ""}
                  onClick={() => handleShowOffer(offer.param, offer.index)}
                >
                  {offer.title}
                </li>
              ))}
            </ul>
            <div className="ml-[28rem] mt-1 great-less flex">
              <Button onClick={handlePrevious} className="">
                <FaLessThan className=" text-blue-500 rounded-s-full  h-6 w-8 " />
              </Button>
              <Button onClick={handleNext} className="">
                <FaGreaterThan className=" text-blue-500 rounded-e-full  h-6 w-8 " />
              </Button>
            </div>
          </div>
          <div className="offers-bottomdiv" ref={boxRef}>
            {/* Render content based on the selected offer type */}
            {offerActive === "ALL" &&
              data?.data?.offers.map((item, index) => (
                <Offercards item={item} key={index} />
              ))}
            {/* Add conditions for other offer types */}
            {offerActive === "FLIGHTS" &&
              data?.data?.offers.map((item, index) => (
                <Offercards item={item} key={index} />
              ))}

            {offerActive === "HOTELS" &&
              data?.data?.offers.map((item, index) => (
                <Offercards item={item} key={index} />
              ))}
            {offerActive === "RAILS" &&
              data?.data?.offers.map((item, index) => (
                <Offercards item={item} key={index} />
              ))}
            {offerActive === "CABS" &&
              data?.data?.offers.map((item, index) => (
                <Offercards item={item} key={index} />
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Offers;
