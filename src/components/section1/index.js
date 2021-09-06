import React from "react";
import bannerimage from "../../assets/top1.png";
import "./section1.css";

const Section1 = () => {
  return (
    <div className="section1-main-wrapper">
      <div className="section1-inner-wrapper">
        <div className="s1-inner-wrapper">
          <div className="section1-left">
            <h1 className="heading1">Ethereal</h1>
            <h1 className="heading2">
              <span>Sloths</span> are here
            </h1>
            <p>These Saviours of the new Earth are out and about in their</p>
            <p>very own Avatars. Slow but ethereal, they redefine true</p>
            <p>peace.</p>
            <div className="round-button-wrapper">
              <div className="round-button">
                <span>8,888</span> Cutest Meditation Sloths minted on the
                Ethereum Blockchain
              </div>
            </div>
          </div>
          <div className="section1-right">
            <img src={bannerimage} alt="bannerimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
