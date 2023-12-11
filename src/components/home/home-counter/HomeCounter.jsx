import React, { useEffect } from "react";
import CountUp from "react-countup";
import Lines from "../../common/lines/Lines";

import userIcon from "../../../assets/images/user.png";

import "./HomeCounter.scss";

const HomeCounter = () => {
  return (
    <div className="home-counter">
      <p className="home-counter-info" data-aos="fade-down">
        some facts
      </p>
      <p className="home-counter-title" data-aos="fade-down">
        We always ready for a challenge
      </p>
      <Lines bcg={"green"} />
      <div className="home-counter-container">
        <div className="home-counter-container-box">
          <div
            className="home-counter-container-box-content"
            data-aos="fade-right"
          >
            <img src={userIcon} alt="" />
            <CountUp start={0} end={1035} duration={2} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef}></span>}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>clients satisfaction</p>
          </div>
        </div>
        <div className="home-counter-container-box" data-aos="fade-up">
          <div className="home-counter-container-box-content">
            <img src={userIcon} alt="" />
            <CountUp start={0} end={958} duration={3} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>great projects</p>
          </div>
        </div>
        <div className="home-counter-container-box" data-aos="fade-up">
          <div className="home-counter-container-box-content">
            <img src={userIcon} alt="" />
            <CountUp start={0} end={435} duration={3} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <div className="home-counter-container-box-info">
            <p>awards won</p>
          </div>
        </div>
        <div className="home-counter-container-box">
          <div
            className="home-counter-container-box-content"
            data-aos="fade-left"
          >
            <img src={userIcon} alt="" />
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
