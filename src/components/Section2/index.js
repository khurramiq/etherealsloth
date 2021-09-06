import React from "react";
import "./section2.css";

const Section2 = ({ days, hours, minutes, seconds }) => {
  return (
    <div name="buysloths" className="section2-main-wrapper">
      <div className="section2-inner-wrapper">
        <div className="watch-space-btn-wrapper">
          <button className="round">Watch this space</button>
          {/* <span className="round">
            <span className="pink">7,500</span> / 8,888 Sloths Remaining
          </span> */}
        </div>
        <div className="section2-text-wrapper">
          <>
            <p>ETHereal Sloths are coming out of hibernation</p>
            <h2>Wednesday, 8 September 2021</h2>
            <h2>8 PM EST</h2>
          </>          
        </div>
        <div className="timer-wrapper">
          <div className="t-inner-wrapper">
            <div className="timer-single-box">
              <div className="top">
                <span>{days}</span>
              </div>
              <div className="bottom">
                <span>DAYS</span>
              </div>
            </div>
            <div className="timer-single-box">
              <div className="top">
                <span>{hours}</span>
              </div>
              <div className="bottom">
                <span>HOURS</span>
              </div>
            </div>
            <div className="timer-single-box">
              <div className="top">
                <span>{minutes}</span>
              </div>
              <div className="bottom">
                <span>MINUTES</span>
              </div>
            </div>
            <div className="timer-single-box">
              <div className="top">
                <span>{seconds}</span>
              </div>
              <div className="bottom">
                <span>SECONDS</span>
              </div>
            </div>
          </div>          
        </div>        
      </div>
    </div>
  );
};

export default Section2;
