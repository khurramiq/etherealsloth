/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import opensealogo from "../../assets/opensea-logo.svg";
import twitterlogo from "../../assets/twitter-logo.svg";
import discordlogo from "../../assets/discord-logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-main-wrapper">
      <div className="footer-inner-wrapper">
        <div className="copyright-text-wrapper">
          <p>&cpy; Copyright 2021 ETHereal Sloths. All rights Reserved.</p>
        </div>
        <div className="footer-icons-wrapper">
          <div className="icon-wrapper-single">
            <img src={opensealogo} alt="opensealogo" />
          </div>
          <div className="icon-wrapper-single">
            <img src={twitterlogo} alt="twitterlogo" />
          </div>
          <div className="icon-wrapper-single">
            <img src={discordlogo} alt="discordlogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
