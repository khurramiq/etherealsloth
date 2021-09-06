import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import headerlogo from "../../assets/ethereal-sloths-logo.svg";
import "./header.css";

const Header = ({ account, loadWeb3 }) => {
  let history = useHistory();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuTogle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const gotoHome = () => {
    history.push("/");
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="header-main-wrapper">
        <div className="header-inner-wrapper">
          <div className="header-logo-wrapper">
            <div className="logo-wrapper">
              <img src={headerlogo} alt="headerlogo" />
            </div>
          </div>
          <div className="header-links-wrapper">
            <ul>
              {/* style={{ color: "#c3e747" }} */}
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={() => gotoHome()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="buysloths"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Buy Sloths
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="collection"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="specs"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Specs
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  FAQ
                </Link>
              </li>
              <button
                className="header-connect-button"
                onClick={() => loadWeb3()}
              >
                {account
                  ? account.slice(0, 8) +
                    "..." +
                    account.slice(account.length - 5)
                  : "CONNECT"}
              </button>
            </ul>
            <button
              className="humbarger-btn"
              onClick={() => handleMobileMenuTogle()}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className="mobile-links"
        style={mobileMenuOpen ? { display: "block" } : { display: "none" }}
      >
        <div className="links-wrapper1">
          <div className="close-wrapper">
            <span
              style={{ color: "white", fontSize: "24px" }}
              onClick={() => handleMobileMenuTogle()}
            >
              X
            </span>
          </div>
          <ul>
            {/* style={{ color: "#c3e747" }} */}
            <li onClick={() => gotoHome()}>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="buysloths"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Sloths
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="collection"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="specs"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Specs
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="faq"
                offset={100}
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
