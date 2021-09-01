import React from "react";
import twitterlogo from "../../assets/twitter-logo.svg";
import teamimg1 from "../../assets/team-img-1.png";
import teamimg2 from "../../assets/team-img-2.png";
import teamimg3 from "../../assets/team-img-3.png";
import "./section6.css";

const Section6 = () => {
  return (
    <div className="section6-main-wrapper">
      <div className="section6-inner-wrapper">
        <div className="section6-heading-wrapper">
          <h1>
            ETHereal Team <img src={twitterlogo} alt="twitterlogo" />
          </h1>
        </div>
        <div className="section6-imgs-container">
          <div className="section6-imgs-row">
            <div className="section6-imgs-row-item">
              <div className="section6-img-wrapper">
                <img src={teamimg1} alt="teamimg2" />
              </div>
              <div className="section6-row-item-text-wrapper">
                <p>Sloth 1</p>
              </div>
            </div>
            <div className="section6-imgs-row-item">
              <div className="section6-img-wrapper">
                <img src={teamimg2} alt="teamimg3" />
              </div>
              <div className="section6-row-item-text-wrapper">
                <p>Sloth 1</p>
              </div>
            </div>
            <div className="section6-imgs-row-item">
              <div className="section6-img-wrapper">
                <img src={teamimg3} alt="teamimg3" />
              </div>
              <div className="section6-row-item-text-wrapper">
                <p>Sloth 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
