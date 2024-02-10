import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/HomePage/Main";
import { useEffect, useState } from "react";
import TrainsSearchPage from "./pages/Trainsearch/TrainSearchPage";
import PaymentPageMain from "./components/Paymentpage/PaymentPageMain";
import { useAuthContext } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Traincheckoutpage from "./components/checkoutpages/Traincheckoutpage";
import Flightcheckoutpage from "./components/checkoutpages/Flightcheckoutpage";
import Hotelcheckoutpage from "./components/checkoutpages/Hotelcheckoutpage";
import BusesSearch from "./pages/BuesSearch/BusesSearch";
import Buscheckoutpage from "./components/checkoutpages/Buscheckoutpage";
import ComingSoonPage from "./components/Comingsoonpage/ComingSoonPage";
import TabforLogin from "./components/Login/TabforLogin";
import { LoginStateProvider } from "./Context/LoginContext";
import MytripsPage from "./components/profilePages/MytripsPage";
import HotelSearchPage from "./pages/Hotelsearch/HotelSearchPage";
import SingleHotelPage from "./pages/Hotelsearch/SingleHotelPage";
import FlightSearchpage from "./pages/Flightsearch/FlightSearchpage";
import { Stickyheader } from "./components/stickeyheader/Stickyheader";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const { authenticated, isUserLoggedIn } = useAuthContext();

  useEffect(() => {
    // console.log(authenticated);
    if (!authenticated) isUserLoggedIn();
  }, [authenticated]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 90) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <LoginStateProvider>
        <ToastContainer />
        {showStickyHeader && <Stickyheader />}
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/mytrips" element={<MytripsPage />} />
          <Route path="/hotels" element={<HotelSearchPage />} />
          <Route path="/trains" element={<TrainsSearchPage />} />
          <Route path="/buses" element={<BusesSearch />} />
          <Route path="/Flights" element={<FlightSearchpage />} />
          <Route path="/payment/:id" element={<PaymentPageMain />} />
          <Route path="/comingsoon" element={<ComingSoonPage />} />
          <Route path="/singlehotel/:id" element={<SingleHotelPage />} />
          <Route path="/flightcheckout/:id" element={<Flightcheckoutpage />} />
          <Route
            path="/hotelcheckoutpage/:id"
            element={<Hotelcheckoutpage />}
          />
          <Route
            path="/traincheckoutpage/:id"
            element={<Traincheckoutpage />}
          />
          <Route path="/buscheckoutpage/:id" element={<Buscheckoutpage />} />
          <Route path="/login" element={<TabforLogin />} />
        </Routes>
      </LoginStateProvider>
    </>
  );
}

export default App;
