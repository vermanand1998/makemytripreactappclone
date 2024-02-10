import React, { useEffect, useState } from "react";
import "./userdetails.css";
import { Link } from "react-router-dom";

const Userdetails = ({ data, keyforTrips }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Error state variables
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [stateError, setStateError] = useState("");
  const [addressError, setAddressError] = useState("");

  useEffect(() => {
    localStorage.setItem("keyforpayment", keyforTrips);
  }, []);

  const handleChange = (fieldName, event) => {
    let errorMessage = "";
    switch (fieldName) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      case "mobileNumber":
        setMobileNumber(event.target.value);
        if (
          event.target.value.length !== 10 ||
          !["6", "7", "8", "9"].includes(event.target.value[0])
        ) {
          errorMessage = "Enter Valid Mobile Number(minimum 10 digits)";
        }
        break;
      case "email":
        setEmail(event.target.value);
        if (!event.target.value.includes("@")) {
          errorMessage = "Enter Invalid email format";
        }
        break;
      case "pincode":
        setPincode(event.target.value);
        if (event.target.value.length !== 6) {
          errorMessage = "Enter Valid Pincode(minimum 6 digits)";
        }
        break;
      case "state":
        setState(event.target.value);
        if (!event.target.value) {
          errorMessage = "State is required*";
        }
        break;
      case "address":
        setAddress(event.target.value);
        if (!event.target.value) {
          errorMessage = "Address is required*";
        }
        break;
      default:
        break;
    }

    // Set the error message for the changed field
    switch (fieldName) {
      case "mobileNumber":
        setMobileNumberError(errorMessage);
        break;
      case "email":
        setEmailError(errorMessage);
        break;
      case "pincode":
        setPincodeError(errorMessage);
        break;
      case "state":
        setStateError(errorMessage);
        break;
      case "address":
        setAddressError(errorMessage);
        break;
      default:
        break;
    }

    setIsValid(
      !mobileNumberError &&
        !emailError &&
        !pincodeError &&
        !stateError &&
        !addressError
    );

    const allFieldsFilled = [
      firstName,
      lastName,
      gender,
      mobileNumber,
      email,
      pincode,
      state,
      address,
    ].every((field) => field !== "");
    setAllFieldsFilled(allFieldsFilled);
  };

  return (
    <>
      <div className="userdetails-form-main-container">
        <h2 className="userdetails-header">User Details</h2>
        <div className="caution-text">
          <span>Important</span>: Enter name as mentioned on your passport or
          Government approved IDs.
        </div>
        <div className="userdetails-maindiv">
          <div className="udmd-topdiv">
            <div className="email-maindiv">
              <p className="udmd-label">First Name*</p>
              <input
                placeholder="First Name"
                className="name-input "
                name="firstName"
                value={firstName}
                onChange={(event) => handleChange("firstName", event)}
              />
            </div>
            <div className="email-maindiv">
              <p className="udmd-label">Last Name*</p>
              <input
                placeholder="Last Name"
                className="name-input"
                name="lastName"
                value={lastName}
                onChange={(event) => handleChange("lastName", event)}
              />
            </div>
            <div className="udmd-malefemale-divs mt-6 cursor-pointer">
              <div
                onClick={() => {
                  setGender("MALE");
                  document.getElementById("maleOption").style.backgroundColor =
                    "#eaf5ff";
                  document.getElementById(
                    "femaleOption"
                  ).style.backgroundColor = "";
                }}
                id="maleOption"
              >
                MALE
              </div>
              <div
                onClick={() => {
                  setGender("FEMALE");
                  document.getElementById(
                    "femaleOption"
                  ).style.backgroundColor = "#eaf5ff";

                  document.getElementById("maleOption").style.backgroundColor =
                    "";
                }}
                id="femaleOption"
              >
                FEMALE
              </div>
            </div>
          </div>
          <div className="udmd-bottomdiv">
            <div className="mobnumber-maindiv">
              <p className="udmd-label">Mobile No</p>
              <input
                placeholder="+91"
                className={`name-input ${mobileNumberError ? "error" : ""}`}
                name="mobileNumber"
                value={mobileNumber}
                onChange={(event) => handleChange("mobileNumber", event)}
              />
              {mobileNumberError && (
                <div className="error-message">{mobileNumberError}</div>
              )}
            </div>
            <div className="email-maindiv">
              <p className="udmd-label">Email</p>
              <input
                placeholder="Email"
                className={`name-input ${emailError ? "error" : ""}`}
                name="email"
                value={email}
                onChange={(event) => handleChange("email", event)}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
          </div>
        </div>

        <div className="pincode-state-main-div">
          <h2 className="psmd-header">
            Your pincode and state
            <span>
              (Required for generating your invoice. You can edit this anytime
              later in your profile section.)
            </span>
          </h2>

          <div className="psinput-field-div">
            <div className="pincode-input-div">
              <p>Pincode</p>
              <input
                name="pincode"
                value={pincode}
                onChange={(event) => handleChange("pincode", event)}
                className={`name-input ${pincodeError ? "error" : ""}`}
              />
              {pincodeError && (
                <div className="error-message">{pincodeError}</div>
              )}
            </div>
            <div className="pincode-input-div">
              <p>State</p>
              <input
                name="state"
                value={state}
                onChange={(event) => handleChange("state", event)}
                className={`name-input ${stateError ? "error" : ""}`}
              />
              {stateError && <div className="error-message">{stateError}</div>}
            </div>
            <div className="pincode-input-div">
              <p>Address</p>
              <input
                name="address"
                value={address}
                onChange={(event) => handleChange("address", event)}
                className={`name-input ${addressError ? "error" : ""}`}
              />
              {addressError && (
                <div className="error-message">{addressError}</div>
              )}
            </div>
          </div>
        </div>

        <Link to={`/payment/${data?.data?._id}`}>
          <button
            className={`ud-continue-btn ${
              isValid && allFieldsFilled ? "enabled" : "disabled"
            }`}
            disabled={!isValid}
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
};

export default Userdetails;
