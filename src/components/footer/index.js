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
          <p>@ Copyright 2021 ETHereal Sloths. All rights Reserved.</p>
        </div>
        <div className="footer-icons-wrapper">
          <div className="icon-wrapper-single">
            <a href="https://opensea.io/" target="_blank">
              <img src={opensealogo} alt="opensealogo" />
            </a>
          </div>
          <div className="icon-wrapper-single">
            <a href="https://twitter.com/EtherealSloths" target="_blank">
              <img src={twitterlogo} alt="twitterlogo" />
            </a>
          </div>
          <div className="icon-wrapper-single">
            <a href="https://discord.gg/zQysa3yqGE" target="_blank">
              <img src={discordlogo} alt="discordlogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
