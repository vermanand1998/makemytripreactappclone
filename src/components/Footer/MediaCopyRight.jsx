import React from "react";
import "./mediacopyright.css";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const MediaCopyRight = () => {
  return (
    <>
      <div className="mainmediadiv">
        <div className="socialmediaicons">
          <Link to="https://twitter.com/makemytrip/">
            <span>
              <BsTwitter size={30} />
            </span>
          </Link>
          <Link to="https://www.facebook.com/makemytrip/">
            <span>
              <TfiFacebook size={30} />
            </span>
          </Link>
        </div>
        <div className="copyright">
          <h3>© 2023 MAKEMYTRIP PVT. LTD.</h3>
          <p>Country India USA UAE</p>
        </div>
      </div>
    </>
  );
};

export default MediaCopyRight;
