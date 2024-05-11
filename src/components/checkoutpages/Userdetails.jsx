import React, { useEffect, useState } from "react";
import "./userdetails.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Userdetails = ({ data, keyforTrips }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [isButtonActive, setButtonActive] = useState(false);
  const [isMobileNumberValid, setMobileNumberValid] = useState(true);
  const [isPincodeValid, setPincodeValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);

  const validateMobileNumber = () => {
    if (mobileNo.length !== 9) {
      setMobileNumberValid(false);
    } else {
      setMobileNumberValid(true);
    }
  };

  const validatePincode = () => {
    if (pincode.length !== 5) {
      setPincodeValid(false);
    } else {
      setPincodeValid(true);
    }
  };

  const validateEmail = () => {
    if (!email.includes("@")) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const validateAndEnableButton = () => {
    if (
      firstName &&
      lastName &&
      gender &&
      mobileNo.length === 10 &&
      isMobileNumberValid &&
      email &&
      pincode.length === 6 &&
      isPincodeValid &&
      state &&
      address
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };

  useEffect(() => {
    validateAndEnableButton();
  }, [firstName, lastName, gender, mobileNo, email, pincode, state, address]);

  useEffect(() => {
    localStorage.setItem("keyforpayment", keyforTrips);
  }, []);

  return (
    <>
      <form className="userdetails-form-main-container" autoComplete="off">
        <h2 className="userdetails-header">User Details</h2>
        <div className="caution-text">
          <span>Important</span>: Enter name as mentioned on your passport or
          Government approved IDs.
        </div>

        <div className="userdetails-maindiv">
          <div className="udmd-topdiv">
            <div className="flex flex-col">
              <p className="">First Name</p>
              <input
                autoComplete="off"
                placeholder="Enter Name*"
                className="name-input"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                  validateAndEnableButton();
                }}
              />
            </div>
            <div className="flex flex-col">
              <p className="">Last Name</p>
              <input
                autoComplete="off"
                placeholder="Enter Last Name*"
                className="name-input"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                  validateAndEnableButton();
                }}
              />
            </div>

            <div className="udmd-malefemale-divs">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className={`gender-input ${
                  gender === "male" ? "selected" : ""
                }`}
                onChange={(e) => {
                  setGender(e.target.value);
                  validateAndEnableButton();
                }}
              />
              <label htmlFor="male">MALE</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className={`gender-input ${
                  gender === "female" ? "selected" : ""
                }`}
                onChange={(e) => {
                  setGender(e.target.value);
                  validateAndEnableButton();
                }}
              />
              <label htmlFor="female">FEMALE</label>
            </div>
          </div>
          <div className="udmd-bottomdiv">
            <div className="mobnumber-maindiv">
              <p className="udmd-label">Mobile No</p>
              <input
                autoComplete="off"
                maxLength={10}
                type="tel"
                placeholder="Enter 10 digits*"
                className="name-input"
                required
                onChange={(e) => {
                  setMobileNo(e.target.value);
                  validateMobileNumber();
                  validateAndEnableButton();
                }}
              />
            </div>

            <div className="email-maindiv">
              <p className="udmd-label">Email</p>
              <input
                autoComplete="off"
                placeholder="Enter Email*"
                className="name-input"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail();
                  validateAndEnableButton();
                }}
              />
              {!isEmailValid && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Email should contain "@"
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="pincode-state-main-div">
          <h2 className="psmd-header">
            Your pincode and state
            <span>
              (Required for generating your invoice.You can edit this anytime
              later in your profile section. )
            </span>
          </h2>

          <div className="psinput-field-div">
            <div className="pincode-input-div">
              <p>Pincode</p>
              <input
                autoComplete="off"
                placeholder="Enter 6 Digits*"
                maxLength={6}
                required
                onChange={(e) => {
                  setPincode(e.target.value);
                  validatePincode();
                  validateAndEnableButton();
                }}
              />
            </div>

            <div className="pincode-input-div">
              <p>State</p>
              <input
                autoComplete="off"
                type="text"
                placeholder="Enter your State*"
                required
                onChange={(e) => {
                  setState(e.target.value);
                  validateAndEnableButton();
                }}
              />
            </div>

            <div className="pincode-input-div">
              <p>Address</p>
              <input
                autoComplete="off"
                placeholder="Enter your Address*"
                type="text"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                  validateAndEnableButton();
                }}
              />
            </div>
          </div>
        </div>
        <Link to={`/payment/${data?.data?._id}`}>
          <button
            className="ud-continue-btn"
            disabled={!isButtonActive}
            style={{ opacity: !isButtonActive ? 0.2 : 1 }}
          >
            CONTINUE
          </button>
        </Link>
      </form>
    </>
  );
};

export default Userdetails;
