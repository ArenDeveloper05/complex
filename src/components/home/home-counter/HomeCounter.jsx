import React from "react";
import CountUp from "react-countup";

import userIcon from "../../../assets/images/user.png";
import atomIcon from "../../../assets/images/atom.png";
import touchIcon from "../../../assets/images/touch.png";
import settingsIcon from "../../../assets/images/settings.png";

import "./HomeCounter.scss";
import Lines from "../../common/lines/Lines";
const HomeCounter = () => {
  return (
    <div className="home-counter">
      <p className="home-counter-info">some facts</p>
      <p className="home-counter-title">We always ready for a challenge</p>
      <Lines bcg={"green"} />
      <div className="home-counter-container">
        <div className="home-counter-container-box">
          <div className="home-counter-container-box-content">
            <img src={userIcon} alt="" width={50} height={50} />
            <CountUp start={0} end={1035} duration={2} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef}></span>}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>clients satisfaction</p>
          </div>
        </div>
        <div className="home-counter-container-box">
          <div className="home-counter-container-box-content">
            <img src={atomIcon} alt="" width={50} height={50} />
            <CountUp start={0} end={958} duration={3} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>great projects</p>
          </div>
        </div>
        <div className="home-counter-container-box">
          <div className="home-counter-container-box-content">
            <img src={touchIcon} alt="" width={50} height={50} />
            <CountUp start={0} end={435} duration={3} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>awards won</p>
          </div>
        </div>
        <div className="home-counter-container-box">
          <div className="home-counter-container-box-content">
            <img src={settingsIcon} alt="" width={50} height={50} />
            <CountUp start={0} end={1236} duration={2} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>spend time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;
