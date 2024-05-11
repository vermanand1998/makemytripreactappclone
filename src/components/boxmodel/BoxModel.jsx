import React from "react";
import "./boxmodel.css";

const BoxModel = () => {
  return (
    <div>
      <div className="header">header</div>
      <div className="boxes">
        <div className="upper">
          <div className="one grid">min-content</div>
          <div className="two grid">sidebar</div>
        </div>
        <div className="lower">
          <div className="three grid">twin</div>
          <div className="three grid">twin</div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};
export default BoxModel;
