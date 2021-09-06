import React from "react";
import galleryimg1 from "../../assets/c1.png";
import galleryimg2 from "../../assets/c2.png";
import galleryimg3 from "../../assets/c3.png";
import galleryimg4 from "../../assets/c4.png";
import galleryimg5 from "../../assets/c5.png";
import galleryimg6 from "../../assets/c6.png";
import galleryimg7 from "../../assets/c7.png";
import galleryimg8 from "../../assets/c8.png";
import galleryimg9 from "../../assets/c9.png";
import "./section3.css";

const Section3 = () => {
  return (
    <div className="section3-main-wrapper">
      <div className="section3-inner-wrapper">
        <div className="section3-text-wrapper">
          <h1>
            The <span>ETHereal</span> Collection
          </h1>          
          <div className="section3-text-inner-wrapper">
            <p className="text1">These Sloths are meditative in nature.</p>
            <p className="text2">
            The variants portray different experiences they have while
            meditating. Some are
            </p>
            <p className="text2">
            peaceful and blissed out while some are lost in
            their thoughts. Slowly they are
            </p>
            <p className="text2">
            awakening from the dream called
            ‘Life’ and entering into new consciousness.
            </p>
          </div>
          <div className="images-wrapper">
            <div className="img-row">
              <img src={galleryimg1} alt="galleryimg1" />
              <img src={galleryimg2} alt="galleryimg2" />
              <img src={galleryimg3} alt="galleryimg3" />
            </div>
            <div className="img-row">
              <img src={galleryimg4} alt="galleryimg4" />
              <img src={galleryimg5} alt="galleryimg5" />
              <img src={galleryimg6} alt="galleryimg6" />
            </div>
            <div className="img-row">
              <img src={galleryimg7} alt="galleryimg7" />
              <img src={galleryimg8} alt="galleryimg8" />
              <img src={galleryimg9} alt="galleryimg9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
