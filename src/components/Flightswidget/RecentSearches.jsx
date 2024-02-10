import React from "react";
import "./recentsearches.css";
import { IoSearchCircle } from "react-icons/io5";
import { Container } from "@mui/material";

const RecentSearches = () => {
  return (
    <>
      <Container>
        <div className="recentsearchmain">
          <div className="headingdiv">
            <IoSearchCircle size={35}/>
            <h1>Recent Searches</h1>
          </div>
          <div className="rs-middle-div">
            <p>Flight</p>
            <p>New Delhi TO Bengaluru</p>
            <p>1 Traveller</p>
            <p>02 Jan 24</p>
          </div>
          <div className="rs-rightdiv">
          <p>Flight</p>
            <p>Chennai TO Mumbai</p>
            <p>3 Travellers</p>
            <p>31 Dec 23</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RecentSearches;
