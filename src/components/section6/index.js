/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import twitterlogo from "../../assets/twitter-logo.svg";
import teamimg1 from "../../assets/t1.png";
import teamimg2 from "../../assets/t2.png";
import teamimg3 from "../../assets/t3.png";
import "./section6.css";

const Section6 = () => {
  return (
    <div className="section6-main-wrapper">
      <div className="section6-inner-wrapper">
        <div className="section6-heading-wrapper">
          <h1>
            ETHereal Team{" "}
            <a href="https://twitter.com/borsezinfinity" target="_blank">
              <img src={twitterlogo} alt="twitterlogo" />
            </a>
          </h1>
          <p>
            This trio is determined to express their spiritual experiences
            through their art works,
            <br /> whilst playing their respective roles as a tech geek and two
            creative nerds
          </p>
        </div>
        <div className="section6-imgs-container">
          <div className="section6-imgs-row">
            <div className="section6-imgs-row-item">
              <div className="section6-img-wrapper">
                <img src={teamimg1} alt="teamimg2" />
              </div>
              <div className="section6-row-item-text-wrapper">
                <p>Bobo Snoth</p>
              </div>
            </div>
            <div className="section6-imgs-row-item">
              <div className="section6-img-wrapper">
                <img src={teamimg2} alt="teamimg3" />
              </div>
              <div className="section6-row-item-text-wrapper">
                <p>Silent Tango</p>
              </div>
            </div>
            <div className="section6-imgs-row-item">
              <div className="section6-img-wrapper">
                <img src={teamimg3} alt="teamimg3" />
              </div>
              <div className="section6-row-item-text-wrapper">
                <p>Lola Kroth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
