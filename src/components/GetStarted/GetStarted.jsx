import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Login and find your pet around your location.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
