import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "./section2.css";

const AfterLaunch = () => {
  const [value, setValue] = useState(1);
  const increase = () => {
    if (value < 20) {
      setValue((prev) => prev + 1);
    }
  };
  const decrease = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  return (
    <div name="buysloths" className="section2-main-wrapper">
      <div className="section2-inner-wrapper">
        <div className="watch-space-btn-wrapper">
          <span className="round">
            <span className="pink">7,500</span> / 8,888 Sloths Remaining
          </span>
        </div>
        <div className="section2-text-wrapper">
          <>
            <p style={{ color: "white" }}>
              How many Sloths would you like to purchase?
            </p>
          </>
        </div>
        <div className="timer-wrapper">
          <>
            <div className="timer-single-box">
              <div className="top">
                <RemoveIcon
                  className="remove-icon"
                  onClick={() => decrease()}
                />
                <span>{value}</span>
                <AddIcon className="add-icon" onClick={() => increase()} />
              </div>
              <div className="bottom">
                <span>MAX 20</span>
              </div>
            </div>
            <div className="const-main-wrapper">
              <div className="cost-wrapper">
                <p className="cost-text">COST</p>
                <p className="cost-digit">
                  {(value * 0.068888).toFixed(6)} <span>+GAS</span>
                </p>
              </div>

              <div className="cost-wrapper">
                <p className="cost-text">TOTAL COST</p>
                <p className="cost-digit">
                  {(value * 0.068888).toFixed(6)} <span>+GAS</span>
                </p>
              </div>
            </div>
          </>
        </div>
        <div className="buy-now-btn-wrapper">
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default AfterLaunch;
