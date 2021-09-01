import React from "react";
import roadmapimgleft from "../../assets/roadmap-img-left.png";
import roadmapimgright from "../../assets/roadmap-img-right.png";
import "./section4.css";

const Section4 = () => {
  return (
    <div className="section4-main-wrapper">
      <div className="section4-inner-wrapper">
        <div className="roadmap-heading-wrapper">
          <h1>
            The <span>Roadmap</span>
          </h1>
        </div>
        <div className="roadmap-container">
          <div className="img-box">
            <div className="img-wrapper">
              <img src={roadmapimgleft} alt="roadmapimgleft" />
            </div>
          </div>
          <div className="road-map-container">
            <div className="roadmap-left">
              <span className="line-dot line-dot1"></span>
              <span className="line-dot line-dot2"></span>
              <span className="line-dot line-dot3"></span>
              <span className="line-dot line-dot4"></span>
              <span className="line-dot line-dot5"></span>
              <span className="line-dot line-dot6"></span>
              <span className="pink lt1">Launch</span>
              <p className="lt2">
                0.28888 ETH will be sent to 5 <br /> random owners
              </p>
              <span className="pink lt3">25% Solid</span>
              <p className="lt4">
                ETHereal Sloths will be listed on
                <br /> rarity. tools where you can check
                <br />
                the rarity and rankings of your
                <br />
                sloths
              </p>
              <span className="pink lt5">75% Solid</span>
              <ul className="lt6">
                <li>20 ETH will go to charity</li>
                <li>
                  Development of a site will be
                  <br />
                  begin that promotes the
                  <br />
                  benefits of meditation
                </li>
                <li>
                  25 ETH will be reserved to
                  <br />
                  support the NFT community
                </li>
                <li>
                  Creation of Mini comic series
                  <br />
                  will begin
                </li>
                <li>
                  A new spiritual collection will
                  <br />
                  be born
                </li>
              </ul>
            </div>
            <div className="roadmap-right">
              <p className="rt1">
                8 September 2021
                <br />8 PM EST
              </p>
              <span className="pink rt2">10% Solid</span>
              <p className="rt3">
                10 ETHereal Sloths will be
                <br />
                randomly airdroped to early
                <br />
                minters
              </p>
              <span className="pink rt4">50% Solid</span>
              <ul className="rt5">
                <li>
                  Development of our
                  <br />
                  merchandise site will begin
                </li>
                <li>
                  20 random minters will be given
                  <br />
                  a gift hamper of their ETHereal
                  <br />
                  Sloth NFT
                </li>
              </ul>
              <span className="pink rt6">100% Solid</span>
            </div>
          </div>
          <div className="img-box">
            <div className="img-wrapper">
              <img src={roadmapimgright} alt="roadmapimgleft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
