import React from "react";
import bannerimage from "../../assets/top1.png";
import opensealogo from "../../assets/opensea-logo.svg";
import "./souldout.css";

const SoldOut = () => {
  return (
    <div className="section1-main-wrapper">
      <div className="section1-inner-wrapper">
        <div className="section1-left">
          <h1 className="heading1">Ethereal</h1>
          <h1 className="heading2">
            <span>Sloths</span> are here
          </h1>
          <p>These Saviours of the new Earth are out and about in their</p>
          <p>very own Avatars. Slow but ethereal, they redefine true</p>
          <p>peace.</p>
          <div className="souldout-buton-wrapper">
            <div className="sould-out-btn">Sold Out</div>
            <div className="buy-on-opensea-btn">
              <img src={opensealogo} alt="opensealogo" />
              &nbsp;
              Buy on OpenSea
            </div>
          </div>
        </div>
        <div className="section1-right">
          <img src={bannerimage} alt="bannerimage" />
        </div>
      </div>
    </div>
  );
};

export default SoldOut;
