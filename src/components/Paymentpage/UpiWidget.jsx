import React, { useEffect, useState } from "react";
import "./upiwidget.css";
import {upiqrcode} from "../../../src/allimages";
import ConfirmationPopup from "../confirmationpopup/ConfirmationPopup";
import { toast } from "react-toastify";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

const UpiWidget = ({ setShowConfirmation, showConfirmation }) => {
  const [upiID, setUpiID] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { post, data, get, loading } = useFetch([]);
  const [upiIDError, setUpiIDError] = useState("");
  const { id } = useParams();

  const handleChange = (field, event) => {
    setUpiID(event.target.value);
    const upiRegex = /^(\w{1,5})?\d{10}@\w+$/;
    if (!upiRegex.test(event.target.value)) {
      setUpiIDError("Enter Invalid UPI ID format*");
    } else {
      setUpiIDError(""); // Clear the error if the format is valid
    }
    setIsValid(!upiIDError);
  };
  useEffect(() => {
    const value = localStorage.getItem("keyforpayment");
    if (value !== undefined && value !== null) {
      get(`/bookingportals/${value}/${id}`);
    }
  }, [id]);

  // console.log("data", data);
  const flightId = data?.data?._id;
  const departureTime = data?.data?.departureTime;
  const arrivalTime = data?.data?.arrivalTime;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const nextDay = date.getDate() + 1;
  const startDate = year + "-" + 0 + month + "-" + day + "T" + departureTime;
  const endDate = year + "-" + 0 + month + "-" + nextDay + "T" + arrivalTime;
  const startDateHotel = year + "-" + 0 + month + "-" + day;
  const endDateHotel = year + "-" + 0 + month + "-" + day;

  const handlePayNowClick = async () => {
    let flightBookingDetails;
    const value = localStorage.getItem("keyforpayment");
    if (value === "flight") {
      flightBookingDetails = {
        bookingType: "flight",
        bookingDetails: {
          flightId: flightId,
          startDate: startDate,
          endDate: endDate,
        },
      };
    }
    if (value === "train") {
      flightBookingDetails = {
        bookingType: "train",
        bookingDetails: {
          trainId: flightId,
          startDate: startDate,
          endDate: endDate,
        },
      };
    }
    if (value === "hotel") {
      flightBookingDetails = {
        bookingType: "hotel",
        bookingDetails: {
          hotelId: flightId,
          startDate: startDateHotel,
          endDate: endDateHotel,
        },
      };
    }
    if (value === "bus") {
      flightBookingDetails = {
        bookingType: "bus",
        bookingDetails: {
          busId: flightId,
          startDate: startDate,
          endDate: endDate,
        },
      };
    }

    // console.log(flightBookingDetails);
    await post("/bookingportals/booking", flightBookingDetails);
    // console.log(response);
    setShowConfirmation(true);
  };
  if (data?.data?.message == "Booking successful") {
    localStorage.setItem("paymentStatus", JSON.stringify(data?.data));
  }
  return (
    <>
      <div className="upiwidget-maindiv">
        <div className="phonemsg-div">
          <div className="phone-icon"></div>
          <p>Keep your phone handy!</p>
        </div>

        <div className="upiwidget-middlediv">
          <div className="upi-details-div">
            <div className="upi-qrcode-div">
              <p>Scan and pay</p>
              <div className="qrcode">
                <img src={upiqrcode} alt="upi qr code" />
              </div>
              <p>Scan and pay using any banking app</p>
            </div>
            <div className="upi-or-div">
              <span>OR</span>
            </div>

            <div className="field-to-enter-upiid">
              <p className="enterupiid-msg">Enter UPI ID</p>
              <input
                type="text"
                placeholder="mobileNumber@upi"
                className="upiid-inputfield"
                onChange={(event) => handleChange("upiID", event)}
              />
              {upiIDError && <div className="error-message">{upiIDError}</div>}

              <button
                className={`upi-verifyandpay-btn ${
                  isValid ? "enabled" : "disabled"
                }`}
                disabled={!isValid || loading}
                onClick={handlePayNowClick}
              >
                {loading ? "Loading..." : " VERIFY & PAY"}
              </button>
              {showConfirmation && (
                <ConfirmationPopup setShowConfirmation={setShowConfirmation} />
              )}
              <ul className="stepsforupipay">
                <li>Enter your registered VPA</li>
                <li>Receive payment request on bank app</li>
                <li>Authorize payment request</li>
              </ul>
            </div>
          </div>
          <ul className="upiwindow-icons ">
            <li className="upi-gpay-icon"></li>
            <li className="upi-phonepay-icon"></li>
            <li className="upi-upipay-icon"></li>
            <li className="upi-hdfcpay-icon"></li>
            <li className="upi-sbipay-icon"></li>
            <li className="upi-axispay-icon"></li>
            <li className="upi-paytm-icon"></li>
          </ul>
        </div>

        <p className="upi-termsandcondition">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default UpiWidget;
