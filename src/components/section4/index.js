import React from "react";
import roadmapimgleft from "../../assets/r1.png";
import roadmapimgright from "../../assets/r2.png";
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
            <div className="img-left-wrapper">
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
                0.28888 ETH will be sent to 5<br /> random minters
              </p>
              <span className="pink lt3">25% Sold</span>
              <p className="lt4">
                ETHereal Sloths will be listed on rarity.tools and Rarity Sniper
                where you can check the rarity and rankings of your Sloths
              </p>
              <span className="pink lt5">75% Sold</span>
              <ul className="lt6">
                <li>
                  20 ETH will be donated to “The Sloth Conservation Foundation”{" "}
                </li>
                <li>
                  Development of a website will begin that promotes the benefits
                  of meditation
                </li>
                <li>25 ETH will be reserved to support the NFT community</li>
                <li>Creation of Mini comic series will begin</li>
                <li>
                  A new spiritual collection will be born which will be based
                  upon “The numbered universe”
                </li>
              </ul>
            </div>
            <div className="roadmap-right">
              <p className="rt1">8th September 2021 8 PM EST</p>
              <span className="pink rt2">10% Sold</span>
              <p className="rt3">
                10 ETHereal Sloths will be randomly airdropped to early minters
              </p>
              <span className="pink rt4">50% Sold</span>
              <ul className="rt5">
                <li>Development of our merchandise website will begin</li>
                <li>
                  20 random minters will be given a gift hamper of their
                  ETHereal Sloth NFT
                </li>
              </ul>
              <span className="pink rt6">100% Sold</span>
            </div>
          </div>
          <div className="img-box">
            <div className="img-right-wrapper">
              <img src={roadmapimgright} alt="roadmapimgleft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
