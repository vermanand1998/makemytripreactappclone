import React, { useState } from "react";
import "./cardwidget.css";
import Select from "react-select";
import ConfirmationPopup from "../confirmationpopup/ConfirmationPopup";

const CardWidget = ({ setShowConfirmation, showConfirmation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [cvvCode, setCvvCode] = useState("");

  const [cardNumberError, setCardNumberError] = useState("");
  const [nameError, setNameError] = useState("");
  const [cvvCodeError, setCvvCodeError] = useState("");

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // const handleConfirmClick = () => {
  //   validateCardNumber();
  //   validateName();
  //   validateCvvCode();
  // };

  const monthOptions = [
    { value: "01", label: "January (01)" },
    { value: "02", label: "February (02)" },
    { value: "03", label: "March (03)" },
    { value: "04", label: "April (04)" },
    { value: "05", label: "May (05)" },
    { value: "06", label: "June (06)" },
    { value: "07", label: "July (07)" },
    { value: "08", label: "August (08)" },
    { value: "09", label: "September (09)" },
    { value: "10", label: "October (10)" },
    { value: "11", label: "November (11)" },
    { value: "12", label: "December (12)" },
  ];

  const styles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    indicatorSeparator: () => null,
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 20 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString(),
  }));

  const validateCardNumber = () => {
    const cardNumberRegex = /^\d{12,}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      setCardNumberError("Enter a valid card number (minimum 12 digits)");
    } else {
      setCardNumberError("");
    }
  };

  const validateName = () => {
    if (!name.trim()) {
      setNameError("Enter a valid name");
    } else {
      setNameError("");
    }
  };

  const validateCvvCode = () => {
    const cvvCodeRegex = /^\d{3,4}$/;
    if (!cvvCodeRegex.test(cvvCode)) {
      setCvvCodeError("Enter a valid CVV code (3 or 4 digits)");
    } else {
      setCvvCodeError("");
    }
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    validateCardNumber();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateName();
  };

  const handleCvvCodeChange = (event) => {
    setCvvCode(event.target.value);
    validateCvvCode();
  };

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  const handlePayNowClick = () => {
    setShowConfirmation(true);
    validateCardNumber();
    validateName();
    validateCvvCode();

    // Perform payment logic if all validations pass
  };

  return (
    <div className="cardwidget-container">
      <label className="labelforcardnumber">Card Number</label>
      <input
        type="text"
        placeholder="Enter Your Card Number Here"
        onChange={handleCardNumberChange}
      />
      {cardNumberError && (
        <div className="error-message">{cardNumberError}</div>
      )}

      <label>Name on Card</label>
      <input
        type="text"
        placeholder="Enter Your Name On Card"
        onChange={handleNameChange}
      />
      {nameError && <div className="error-message">{nameError}</div>}

      <div className="expiry-cvv-div">
        <div className="expirydate-div">
          <label>Expiry Month & Year</label>
          <div className="month-year-dropdown">
            <Select
              className="month-dropdown"
              options={monthOptions}
              value={selectedMonth}
              onChange={handleMonthChange}
              styles={styles}
            />
            <Select
              className="year-dropdown"
              options={yearOptions}
              value={selectedYear}
              onChange={handleYearChange}
              styles={styles}
            />
          </div>
        </div>

        <div className="cvv-div">
          <label>Card CVV</label>
          <input
            type="text"
            placeholder="Enter Card CVV"
            onChange={handleCvvCodeChange}
          />
          {cvvCodeError && <div className="error-message">{cvvCodeError}</div>}
        </div>
      </div>

      <button className="card-paynow-btn" onClick={handlePayNowClick}>
        PAY NOW
      </button>
      {showConfirmation && (
        <ConfirmationPopup setShowConfirmation={setShowConfirmation} />
      )}

      <p className="card-termsandconditions">
        By continuing to pay, I understand and agree with the{" "}
        <span>privacy policy</span>, the <span>user agreement</span> and{" "}
        <span>terms of service</span> of makemytrip.
      </p>
    </div>
  );
};

export default CardWidget;
