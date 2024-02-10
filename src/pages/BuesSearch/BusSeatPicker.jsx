import React, { useContext, useEffect, useState } from "react";
import "./busseatpicker.css";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import LoginContext from "../../Context/LoginContext";
import { useAuthContext } from "../../Context/AuthContext";
import TabforLogin from "../../components/Login/TabforLogin";

const BusSeatPicker = ({ id }) => {
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const { data, get } = useFetch([]);
  const [selectedSeats, setSelectedSeats] = useState(0);
  const { authenticated } = useAuthContext();
  const { showLogin, setShowLogin } = useContext(LoginContext);

  const [seats, setSeats] = useState(() =>
    Array(13)
      .fill()
      .map(() => Array().fill(false))
  );

  const selectSeat = (row, col) => {
    const newSeats = [...seats];
    newSeats[row][col] = !newSeats[row][col]; // Toggle the seat
    setSeats(newSeats);

    // Update the selectedSeats count
    const newCount = seats[row][col] ? selectedSeats + 1 : selectedSeats - 1;
    setSelectedSeats(newCount);
  };

  const rows = Array.from({ length: 13 }, (_, i) => (
    <div key={i}>
      <div>
        <div onClick={() => selectSeat(i, 0)}>
          <span
            className={
              seats[i][0]
                ? "seat-icon-bus seat-icon-bus-selected"
                : "seat-icon-bus"
            }
          ></span>
        </div>

        <div onClick={() => selectSeat(0, i)}>
          <span
            className={
              seats[0][i]
                ? "seat-icon-bus seat-icon-bus-selected"
                : "seat-icon-bus"
            }
          ></span>
        </div>
      </div>
      <div>
        <div onClick={() => selectSeat(i, 1)}>
          <span
            className={
              seats[i][1]
                ? "seat-icon-bus seat-icon-bus-selected"
                : "seat-icon-bus"
            }
          ></span>
        </div>
        <div onClick={() => selectSeat(1, i)}>
          <span
            className={
              seats[1][i]
                ? "seat-icon-bus seat-icon-bus-selected"
                : "seat-icon-bus"
            }
          ></span>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    get(`/bookingportals/bus/${id}`);
  }, [id]);

  return (
    <div className="bus-seatPicker-container">
      <div className="seat-picker-div">
        <p className="seat-picker-header">Select Seats</p>
        <div style={{ width: "390px" }}>
          <div
            style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
          ></div>
          <div
            style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
          ></div>
        </div>
        <div className="seats-in-bus">{rows}</div>
      </div>

      <div className="point-picker-div">
        <div className="pointpicker-top-div">
          <p className="point-picker-header">Select Pickup & Drop Points</p>
          <div className="child-board-drop">
            <div className="br-dr-box">
              <p className="br-dr-text">Pickup Point</p>
              <div>
                <p className="time-br-dp">
                  {data?.data?.departureTime},
                  {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
                </p>
                <p className="add-br-dp">{data?.data?.source}</p>
              </div>
            </div>
            <div className="br-dr-box">
              <p className="br-dr-text">Dropping Point</p>
              <div>
                <p className="time-br-dp">
                  {data?.data?.arrivalTime},
                  {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
                </p>
                <p className="add-br-dp">{data?.data?.destination}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="seatconfirm-and-continuebtn">
          <div className="seats-price-div">
            <p className="selectedseats-text">
              Selected Seats: {selectedSeats}
            </p>
            <p className="selected-seat-price">
              ₹ {data?.data?.fare * selectedSeats}
            </p>
          </div>

          {authenticated ? (
            <Link to={`/buscheckoutpage/${data?.data?._id}`}>
              <button className="seat-pick-btn">CONTINUE</button>
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
              <button className="seat-pick-btn">CONTINUE</button>
            </Link>
          )}
        </div>
      </div>
      {showLogin && <TabforLogin />}
    </div>
  );
};

export default BusSeatPicker;
