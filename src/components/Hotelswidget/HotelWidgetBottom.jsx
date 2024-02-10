import React from "react";
import Offers from "../offers/Offers";
import DownloadApp from "../downloadapp/DownloadApp";
import ForexWidget from "../forexwidget/ForexWidget";

const HotelWidgetBottom = () => {
  return (
    <div>
      {/* <div className="fw-mainbtmdiv">
        <img className="fw-adv" src={fwad} alt="ad" />
      </div> */}
      <Offers />
      <DownloadApp />
      <ForexWidget />
    </div>
  );
};

export default HotelWidgetBottom;
