import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import TopNavbar from "./TopNavbar";
import { Container } from "@mui/material";
import HeaderNavbar from "./HeaderNavbar";
import HotelsWiget from "../Hotelswidget/HotelsWiget";
import FlightsWidgetMain from "../Flightswidget/FlightsWidgetMain";
import TrainsWidget from "../Trainswidget/TrainsWidget";
import FlightwidgetBottom from "../Flightswidget/FlightwidgetBottom";
import HotelWidgetBottom from "../Hotelswidget/HotelWidgetBottom";
import TrainWidgetBottom from "../Trainswidget/TrainWidgetBottom";
import OtherWidget from "../Otherwidget/OtherWidget";
import Buswidget from "../buswidget/Buswidget";
import MainFooter from "../Footer/MainFooter";
TrainsWidget;

const Main = () => {
  const [showFlight, setShowFlight] = useState(true);
  const [showHotel, setShowHotel] = useState(false);
  const [showTrains, setShowTrains] = useState(false);
  const [showHomestays, setShowHomestays] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);
  const [showBuses, setShowBuses] = useState(false);
  const [showCabs, setShowCabs] = useState(false);
  const [showForex, setShowForex] = useState(false);
  const [showTravelIns, setShowTravelIns] = useState(false);

  return (
    <>
      <div className="mainpage-top">
        <Container>
          <TopNavbar />
          <HeaderNavbar
            setShowFlight={setShowFlight}
            setShowHotel={setShowHotel}
            setShowTrains={setShowTrains}
            setShowHomestays={setShowHomestays}
            setShowHolidays={setShowHolidays}
            setShowBuses={setShowBuses}
            setShowCabs={setShowCabs}
            setShowForex={setShowForex}
            setShowTravelIns={setShowTravelIns}
          />
          {showFlight && <FlightsWidgetMain />}
          {showHotel && <HotelsWiget />}
          {showTrains && <TrainsWidget />}
          {showHomestays && <OtherWidget />}
          {showHolidays && <OtherWidget />}
          {showBuses && <Buswidget />}
          {showCabs && <OtherWidget />}
          {showForex && <OtherWidget />}
          {showTravelIns && <OtherWidget />}
        </Container>
      </div>
      <div className="mainpage-bottom">
        {showFlight && <FlightwidgetBottom />}
        {showHotel && <HotelWidgetBottom />}
        {showTrains && <TrainWidgetBottom />}
        {showHomestays && <TrainWidgetBottom />}
        {showHolidays && <TrainWidgetBottom />}
        {showBuses && <TrainWidgetBottom />}
        {showCabs && <TrainWidgetBottom />}
        {showForex && <TrainWidgetBottom />}
        {showTravelIns && <TrainWidgetBottom />}
      </div>
      <MainFooter />
    </>
  );
};

export default Main;
