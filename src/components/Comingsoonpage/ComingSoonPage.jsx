import React from "react";
import "./comingsoonpage.css";
import { SiFacebook } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ComingSoonPage = () => {
  return (
    <div className="background-container">
      <Link to="/">
        <span>
          <FaArrowLeft className="mx-7 my-8 text-4xl text-lime-950 cursor-pointer" />
        </span>
      </Link>

      <div className="parent-comingSoon">
        <span className="first-text-CS">Working on it...</span>
        <span className="second-text-CS">Great things are coming soon</span>
        <div className="icon-coming-soon">
          <Link
            className="link-icon-comingSoon"
            to="https://www.facebook.com/makemytrip/"
          >
            <SiFacebook />
          </Link>
          <Link
            className="link-icon-comingSoon"
            to="https://www.instagram.com/makemytrip/"
          >
            <GrInstagram />
          </Link>
          <Link
            className="link-icon-comingSoon"
            to="https://twitter.com/makemytrip/"
          >
            <BsTwitterX />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
