import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import "../home/home.css";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Section6 from "../../components/section6";
import FaqSection from "../../components/faqSection";
import Footer from "../../components/footer";
import SoldOut from "../../components/soldout";

toast.configure();
const Sold = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  return (
    <div style={{ backgroundColor: "#1D1F4A" }}>
      <div className="banner">
        <Header account={account} loadWeb3={loadWeb3} />
        <div className="mobile-view-connect-button-wrapper">
          <button className="header-connect-button" onClick={() => loadWeb3()}>
            {account
              ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
              : "CONNECT"}
          </button>
          I
        </div>
        <SoldOut />
      </div>
      <div name="collection" className="collection">
        <Section3 />
      </div>
      <div name="roadmap" className="roadmap">
        <Section4 />
      </div>
      <div name="specs" className="specification">
        <Section5 />
      </div>
      <div name="team" className="team">
        <Section6 />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default Sold;
