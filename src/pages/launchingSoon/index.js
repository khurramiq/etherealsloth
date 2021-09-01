import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
// import Web3 from "web3";
// import { contractAbi, contractAddress } from "./../../config";
import swal from "sweetalert";
import "../home/home.css";
import Section1 from "../../components/section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Section6 from "../../components/section6";
import FaqSection from "../../components/faqSection";
import Footer from "../../components/footer";
import AfterLaunch from "../../components/afterLaunch";

toast.configure();
const LaunchingSoon = ({ account, mint, totalSupply, displayPrice }) => {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-08-30`) - +new Date();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const connectHandle = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Deleted!", "Your imaginary file has been deleted!", "success");
      }
    });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  return (
    <div style={{ backgroundColor: "#1D1F4A" }}>
      <div className="banner">
        <Header account={account}/>
        <div className="mobile-view-connect-button-wrapper">
          <button className="header-connect-button">
            {account
              ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
              : "Disconnected"}
          </button>
          I
        </div>
        <Section1 />
        <AfterLaunch />
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

export default LaunchingSoon;
