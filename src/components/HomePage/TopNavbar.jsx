import React, { useContext, useState } from "react";
import logowhite from "../../assets/Images/logowhite.png";
import { Link, useNavigate } from "react-router-dom";
import "./topnavbar.css";
import { BsChevronDown } from "react-icons/bs";
import TabforLogin from "../Login/TabforLogin";
import { useAuthContext } from "../../Context/AuthContext";
import { SlLogout } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import { toast } from "react-toastify";
import LoginContext from "../../Context/LoginContext";

const TopNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { authenticated, logoutUser } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);

  const openMyStuffHover = () => {
    setIsHovered(true);
  };
  const closeMyStuffHover = () => {
    setIsHovered(false);
  };
  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleSignout = () => {
    logoutUser();
    toast.success("user Loggedout successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="topnavbarmaindiv">
        <div className="mmtwhitelogo">
          <Link to="/">
            <img className="whitelogoimage" src={logowhite} alt="logo" />
          </Link>
        </div>
        <div className="middlenavdiv">
          <Link to="/comingsoon">
            <div className="superoffers">
              <div className="superofferlogo">%</div>
              <div className="superofferdescription">
                <h3>super offers</h3>
                <p>Explore great deals & offers</p>
              </div>
            </div>
          </Link>
          <Link to="/comingsoon">
            <div className="mybiz">
              <div className="mybizlogo"></div>
              <div className="mybizdescription">
                <h3>Introducing myBiz</h3>
                <p>Business Travel Solution</p>
              </div>
            </div>
          </Link>
          <Link
            to={authenticated ? "/mytrips" : ""}
            onClick={(e) => {
              if (!authenticated) {
                e.preventDefault();
                setShowLogin(true);
              }
            }}
            className="linktodeadclick"
          >
            <div className="mytrips">
              <div className="mytripslogo"></div>
              <div className="mytripsdescription">
                <h3>My Trips</h3>
                <p>Manage your bookings</p>
              </div>
            </div>
          </Link>

          <div className="rightnavdiv">
            {authenticated ? (
              <div
                className="afterloginorcreateaccnt"
                onMouseEnter={openMyStuffHover}
                onMouseLeave={closeMyStuffHover}
              >
                <div className="loginlogoafterlogin">
                  <p>T</p>
                </div>
                <div>Hi Traveller</div>
                <BsChevronDown />
                <div
                  className="userDropdown"
                  style={{ display: isHovered ? "block" : "none" }}
                >
                  <Link to="/mytrips">
                    <li className="fadeIndown">
                      <SlHandbag className="mt-1" />
                      <h2>My Trips</h2>
                    </li>
                  </Link>
                  <li className="logoutbtn" onClick={handleSignout}>
                    <SlLogout className="mt-1" />
                    <h2>Logout</h2>
                  </li>
                </div>
              </div>
            ) : (
              <div className="loginorcreateaccnt" onClick={handleOpenLogin}>
                <BsChevronDown />
                <div className="loginlogo"></div>
                <div>Login or Create Account</div>
              </div>
            )}

            <div className="languageselector">
              <div className="flaglogo"></div>
              <div>IN|ENG|INR</div>
              <div className="languageselectordownarror">
                {/* <BsChevronDown /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
        <TabforLogin showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
};

export default TopNavbar;
