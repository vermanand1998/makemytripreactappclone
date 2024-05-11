import React from "react";
import "./flightbottom.css";
import fwad from "../../assets/Images/fwad.png";
import Offers from "../offers/Offers";
import RecentSearches from "./RecentSearches";
import Fguidance from "./Fguidance";
import DownloadApp from "../downloadapp/DownloadApp";
import ForexWidget from "../forexwidget/ForexWidget";
import { Link } from "react-router-dom";

const FlightwidgetBottom = () => {
  return (
    <div>
      <div className="fw-mainbtmdiv">
        <Link to="/comingsoon">
          {/* <img className="fw-adv" src={fwad} alt="ad" /> */}
        </Link>
      </div>
      <Offers />
      <RecentSearches />
      <Fguidance />
      <DownloadApp />
      <ForexWidget />
    </div>
  );
};

export default FlightwidgetBottom;
