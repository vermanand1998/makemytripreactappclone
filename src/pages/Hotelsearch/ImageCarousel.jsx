import "./imagecarousel.css";
import Flickity from "react-flickity-component";
import { MdPolicy } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";
import "./flickity.css";
import { Link } from "react-router-dom";
import TabforLogin from "../../components/Login/TabforLogin";
import { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
import { useAuthContext } from "../../Context/AuthContext";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: false,
  cellAlign: "center",
  fade: true,
  lazyLoad: true,
};

const ImageCarousel = ({ data }) => {
  const { authenticated } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);
  return (
    <>
      <div className="topcarousel-div">
        <div className="hotel-image-div">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <img className="imageshow" src={data?.data?.images[0]} alt="" />
            <img className="imageshow" src={data?.data?.images[1]} alt="" />
            <img className="imageshow" src={data?.data?.images[2]} alt="" />
            <img className="imageshow" src={data?.data?.images[3]} alt="" />
          </Flickity>
        </div>
        <div className="baseRight">
          <div className="prmRoomDtlCard"></div>
          <span className="font-bold text-lg ">Luxe Twin Room</span>
          <h2 className="text-[#9b9b9b] text-[14px] flex">
            <MdPolicy className="mt-1 mr-1" /> ExtraBedPolicy
          </h2>
          <div className="baseRight-bottom">
            <span className="flex mt-2">
              <IoIosCheckmark className=" text-green-600 text-xl" />
              Bed Provided For Child
            </span>
            <div className="flex justify-between">
              <div className="flex  text-red-600">
                <IoMdPricetag className=" text-green-600 mx-1 mt-1" />
                Extra Bed Charge
              </div>
              <div>
                <span>
                  ₹ {data?.data?.childAndExtraBedPolicy.extraBedCharge}
                </span>
              </div>
            </div>
            <h6 className="text-[12px] ml-2">
              {data?.data?.childAndExtraBedPolicy.additionalInfo}
            </h6>
          </div>

          {authenticated ? (
            <Link to={`/hotelcheckoutpage/${data?.data?._id}`}>
              <button className="primaryBtn">Book Now</button>
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
              <button className="primaryBtn">Book Now</button>
            </Link>
          )}
        </div>
      </div>
      {showLogin && <TabforLogin />}
    </>
  );
};
export default ImageCarousel;
