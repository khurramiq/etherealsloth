import React, { useState } from "react";
import downarrow from "../../assets/down-arrow.svg";
import uparrow from "../../assets/up-arrow.svg";
import "./faqSection.css";

const FaqSection = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(true);
  // const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);
  const [accordion6, setAccordion6] = useState(false);
  const [accordion7, setAccordion7] = useState(false);

  const handleAccordion1Togle = () => {
    setAccordion1((prev) => !prev);
    setAccordion2(false);
    setAccordion3(false);
    // setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
  };

  const handleAccordion2Togle = () => {
    setAccordion1(false);
    setAccordion2((prev) => !prev);
    setAccordion3(false);
    // setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
  };

  const handleAccordion3Togle = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3((prev) => !prev);
    // setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7(false);
  };
  // const handleAccordion4Togle = () => {
  //   setAccordion1(false);
  //   setAccordion2(false);
  //   setAccordion3(false);
  //   setAccordion4((prev) => !prev);
  //   setAccordion5(false);
  //   setAccordion6(false);
  //   setAccordion7(false);
  // };
  const handleAccordion5Togle = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    // setAccordion4(false);
    setAccordion5((prev) => !prev);
    setAccordion6(false);
    setAccordion7(false);
  };
  const handleAccordion6Togle = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    // setAccordion4(false);
    setAccordion5(false);
    setAccordion6((prev) => !prev);
    setAccordion7(false);
  };
  const handleAccordion7Togle = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    // setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
    setAccordion7((prev) => !prev);
  };

  return (
    <div name="faq" className="faq-Section-main-wrapper">
      <div className="faq-section-inner-wrapper">
        <div className="faq-heading-wrapper">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-accordion-wrapper">
          {/* Question 1 */}
          <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion1Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion1 ? { color: "#C7F649" } : null}>
                  What are Ethereal Sloths?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion1 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion1 ? null : { display: "none" }}
            >
              <p>
                The Ethereal Sloths is a collection of 8,888 unique NFTs stored
                as ERC-721 tokens on the Ethereum Blockchain. Ownership includes
                creative & commercial rights of your ETHereal Sloths
              </p>
            </div>
          </div>
          {/* Question 2 */}
          <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion2Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion2 ? { color: "#C7F649" } : null}>
                  How much does an ETHereal Sloth cost?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion2 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion2 ? null : { display: "none" }}
            >
              <p>0.068888 + gas fee (no bonding curve or price tiers)</p>
            </div>
          </div>
          {/* Question 3 */}
          <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion3Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion3 ? { color: "#C7F649" } : null}>
                  How can I get an ETHereal Sloth?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion3 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion3 ? null : { display: "none" }}
            >
              <p>
                Ethereal Sloth will be available for purchase on our website
                through an initial sale. At the time of purchase, a randomly
                selected Ethereal Sloth will be minted on the blockchain and
                delivered to your wallet and Opensea account.
              </p>
            </div>
          </div>
          {/* Question 4 */}
          {/* <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion4Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion4 ? { color: "#C7F649" } : null}>
                  How were the ETHereal Sloths created?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion4 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion4 ? null : { display: "none" }}
            >
              <p>
                Ethereal Sloth will be available for purchase on our website
                through an initial sale.
                <br />
                At the time of purchase, a randomly selected Ethereal Sloth will
                be minted on the
                <br />
                blockchain and delivered to your wallet and Opensea account.
              </p>
            </div>
          </div> */}
          {/* Question 5 */}
          <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion5Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion5 ? { color: "#C7F649" } : null}>
                  When is it launching?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion5 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion5 ? null : { display: "none" }}
            >
              <p>ETHereal Sloths will go live on 8th September at 8PM EST</p>
            </div>
          </div>
          {/* Question 6 */}
          <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion6Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion6 ? { color: "#C7F649" } : null}>
                  How many ETHereal Sloths will be kept reserved?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion6 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion6 ? null : { display: "none" }}
            >
              <p>
                88 ETHereal Sloths will be kept reserved for airdrops, community
                giveaways and the creators.
              </p>
            </div>
          </div>
          {/* Question 7 */}
          <div className="faq-single-accordion">
            <div
              className="faq-question-wrapper"
              onClick={() => handleAccordion7Togle()}
            >
              <div className="q-text-wrapper">
                <p style={accordion7 ? { color: "#C7F649" } : null}>
                  How do I actually purchase an ETHereal Sloth?
                </p>
              </div>
              <div className="q-expand-icon-wrapper">
                <img src={accordion7 ? uparrow : downarrow} alt="downarrow" />
              </div>
            </div>
            <div
              className="faq-answer-wrapper"
              style={accordion7 ? null : { display: "none" }}
            >
              <p>
                Download the Metamask extension for Google Chrome. Buy Ethereum
                (ETH) on an exchange like Coinbase, Binance, PayPal, etc and
                send it to your Metamask ETH Wallet Public Address with an ERC20
                transfer. Connect your Metamask Wallet to our website by
                clicking on the Chrome extension icon at the top-right of the
                browser (it looks like a Fox) while on our website. Click “Buy
                Now” on our website and approve the transaction on Metamask.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
