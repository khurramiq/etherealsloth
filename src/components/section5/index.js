import React from "react";
import specsimg1 from "../../assets/specs-img-1.png";
import specsimg2 from "../../assets/specs-img-2.png";
import specsimg3 from "../../assets/specs-img-3.png";
import specsimg4 from "../../assets/specs-img-4.png";
import specsimg5 from "../../assets/specs-img-5.png";
import specsimg6 from "../../assets/specs-img-6.png";
import specsimg7 from "../../assets/specs-img-7.png";
import specsimg8 from "../../assets/specs-img-8.png";
import "./section5.css";

const Section5 = () => {
  return (
    <div className="section5-main-wrapper">
      <div className="section5-inner-wrapper">
        <div className="section5-heading-wrapper">
          <h1>
            The <span>Specifications</span>
          </h1>
        </div>
        <div className="section5-imgs-wrapper">
          <div className="section5-img-row">
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg1} alt="specsimg1" />
              </div>
              <div className="cart-text-wrapper">
                <p>
                  8,888 Unique ETHereal
                  <br />
                  Sloths stored as
                  <br />
                  ERC-721 tokens.
                </p>
              </div>
            </div>
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg2} alt="specsimg2" />
              </div>
              <div className="cart-text-wrapper">
                <p>
                  All ETHereal Sloths will be
                  <br />
                  listed for a fixed price of
                  <br />
                  0.068888 ETH to ensure a
                  <br />
                  fair distribution
                </p>
              </div>
            </div>
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg3} alt="specsimg3" />
              </div>
              <div className="cart-text-wrapper">
                <p>
                  Algorithmically generated
                  <br />
                  at random from over 200
                  <br />
                  unique attributes across
                  <br />
                  11 categories
                </p>
              </div>
            </div>
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg4} alt="specsimg4" />
              </div>
              <div className="cart-text-wrapper">
                <p>
                  Stored on IPFS
                  <br />
                  (InterPlanetary File
                  <br />
                  System)
                </p>
              </div>
            </div>
          </div>
          <div className="section5-img-row">
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg5} alt="specsimg5" />
              </div>
              <div className="cart-text-wrapper">
                <p>Non sequentially minted</p>
              </div>
            </div>
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg6} alt="specsimg6" />
              </div>
              <div className="cart-text-wrapper">
                <p>
                  All Ethereal Sloths come with
                  <br />
                  full commercial rights
                </p>
              </div>
            </div>
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg7} alt="specsimg7" />
              </div>
              <div className="cart-text-wrapper">
                <p>
                  20 ETH founds reserved to
                  <br />
                  support the NFT
                  <br />
                  community
                </p>
              </div>
            </div>
            <div className="section5-card-wrapper">
              <div className="card-img-wrapper">
                <img src={specsimg8} alt="specsimg8" />
              </div>
              <div className="cart-text-wrapper">
                <p>20 ETH will go to charity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
