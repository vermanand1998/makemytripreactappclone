import React, { useContext, useEffect } from "react";
import "./singlehotel.css";
import ImageCarousel from "../../pages/Hotelsearch/ImageCarousel";
import hotelroomsize from "../../assets/Images/image.png";
import hotelroombed from "../../assets/Images/hotelroombed.png";
import { TbMathGreater } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import HotelpropertyRules from "../../pages/Hotelsearch/HotelpropertyRules";
import { useAuthContext } from "../../Context/AuthContext";
import LoginContext from "../../Context/LoginContext";
import { Stickyheader } from "../../components/stickeyheader/Stickyheader";
import TabforLogin from "../../components/Login/TabforLogin";

const SingleHotelPage = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();
  const { authenticated } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);

  useEffect(() => {
    get(`/bookingportals/hotel/${id}`);
  }, [id]);

  return (
    <>
      <Stickyheader />
      <div className="singlehotelpage-maindiv">
        <div className="hoteldetails-maindiv">
          <div className="topcontainer-crou">
            <div className="text-[#008cff] font-bold flex -mt-2">
              <Link to="/">
                <h6>Home</h6>
              </Link>
              <span className="mx-1 my-2 text-xs text-[#9b9b9b]">
                <TbMathGreater />
              </span>
              <Link to="/hotels">
                <h6>Hotels</h6>
              </Link>
              <span className="mx-1 my-2 text-xs text-[#9b9b9b]">
                <TbMathGreater />
              </span>
              <h6 className="text-[#9b9b9b]">{data?.data?.name}</h6>
            </div>

            <ImageCarousel data={data} />
            <div className="hotel-name-div">
              <h1>{data?.data?.name}</h1>
              <p>{data?.data?.location}</p>
              <div className="bus-rating-div">
                <span className="ratingstar-img"></span>
                <p>{data?.data?.rating}</p>
              </div>
            </div>
            <div className="prmDtl__bottom">
              <ul>
                <li>
                  <a className="navLink">OVERVIEW</a>
                </li>
                <li>
                  <a className="navLink">ROOMS</a>
                </li>
                <li>
                  <a className="navLink">AMENITIES</a>
                </li>
                <li>
                  <a className="navLink">PROPERTY RULES</a>
                </li>
              </ul>
            </div>

            <div className="rooms-maindiv">
              <h1 className="pt-6  text-[#000] font-extrabold text-[22px]">
                About The {data?.data?.name}
              </h1>
              <span className="text-[#505B61] pt-1 pb-7 text-[14px]">
                Standing in the bustling city of {data?.data?.location}, The
                {data?.data?.name} is an affordable stay choice featuring
                guest-friendly amenities and vicinity to famous landmarks.Bask
                in the comfort of rooms, furnished with elegant decor with an
                expansive living area.
              </span>
              <p className="rooms-heading">Select Rooms</p>
              <div className="roomtype-head-div">
                <div className="roomtype-dropdown">4 ROOM TYPES</div>
                <div className="rooms-option-head">OPTIONS</div>
                <div className="rooms-price-head">PRICE</div>
              </div>
              {data?.data?.rooms &&
                data?.data?.rooms.map((room, index) => (
                  <div key={room._id} className="suiteroom-details-maindiv">
                    <div className="suite-aboutroom">
                      <h2>{room.roomType} Room</h2>
                      <div className="roomsize-div">
                        <img
                          src={hotelroomsize}
                          alt="room"
                          className="roomsizeimg"
                        />
                        <p>{room.roomSize} sq.ft</p>
                      </div>
                      <div className="roombed-div">
                        <img src={hotelroombed} alt="bed" className="bedimg" />
                        <p>{room.bedDetail}</p>
                      </div>
                    </div>

                    <div className="suite-optionsdiv">
                      <p className="cancellation-head">
                        Room With Free Cancellation
                      </p>
                      <div className="cancellation-criteria-div">
                        <div className="tickmark-icon"></div>
                        <p>{room.cancellationPolicy}</p>
                      </div>
                      <div className="meals-div">
                        <div className="tickmark-icon"></div>
                        <p>No meals included</p>
                      </div>
                    </div>
                    <div className="suite-pricediv">
                      <div>
                        <p>Per Night</p>
                        {/* <p>₹ {parseFloat(hotel?.avgCostPerNight).toFixed(0)}</p> */}
                        <p>+₹ {room.costDetails.taxesAndFees} taxes & fees</p>
                      </div>
                      <div>
                        {authenticated ? (
                          <Link to={`/hotelcheckoutpage/${data?.data?._id}`}>
                            <button className="selectroom-btn">
                              SELECT ROOM
                            </button>
                          </Link>
                        ) : (
                          <Link
                            onClick={(e) => {
                              if (!authenticated) {
                                e.preventDefault();
                                setShowLogin(true);
                              }
                            }}
                          >
                            <button className="selectroom-btn">
                              SELECT ROOM
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

              <div>
                <h2 className="text-[#000000] text-[22px] mt-7 font-bold">
                  Amenities at {data?.data?.name}
                </h2>
                <h2 className="text-[#4a4a4a] text-[16px] font-semibold mt-1 ml-2">
                  Highlighted Amenities
                </h2>
                <div className="high-borderline"></div>
                {data?.data?.amenities &&
                  data?.data?.amenities.map((amenty, index) => (
                    <ul key={index} className="text-[#4a4a4a] ml-4">
                      <li>-{amenty}</li>
                    </ul>
                  ))}
              </div>

              <HotelpropertyRules data={data} />
            </div>
          </div>
        </div>
      </div>
      {showLogin && <TabforLogin />}
    </>
  );
};
export default SingleHotelPage;
