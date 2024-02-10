// import React from "react";
import { useContext, useState } from "react";
import SignupPage from "../../components/Login/SignupPage";
import LoginPage from "../../components/Login/LoginPage";
import "./login.css";
import { IoMdClose } from "react-icons/io";
import LoginContext from "../../Context/LoginContext";
``;
const TabforLogin = () => {
  const [activeTab, setActiveTab] = useState(false);
  const { showLogin, setShowLogin } = useContext(LoginContext);

  const handleCloseLogin = (e) => {
    e.stopPropagation();
    setShowLogin(false);
  };

  const handleLogin = () => {
    setActiveTab(false);
  };
  const handleSignUp = () => {
    setActiveTab(true);
  };

  const handleOverlay = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setShowLogin(false);
    }
  };

  return (
    <>
      <div className="background-blur" onClick={handleOverlay}>
        <div className="loginmaindiv">
          <div className="logintopdiv">
            <button
              className={`tabBtn ${!activeTab ? "active" : ""}`}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className={`tabBtn ${activeTab ? "active" : ""}`}
              onClick={handleSignUp}
            >
              Signup
            </button>
          </div>
          {activeTab ? <SignupPage /> : <LoginPage />}

          <div>
            <IoMdClose
              className="logincloseicon"
              size={22}
              onClick={handleCloseLogin}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabforLogin;
