import { useSelector } from "react-redux";

import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

import "./HomeCounter.scss";

const HomeCounter = () => {
  const countData = useSelector((state) => state.count.countData);

  return (
    <div className="home-counter">
      <div className="home-counter-container">
        {countData &&
          countData.map(({ id, title, count, aos }) => {
            return (
              <div className="home-counter-container-box" key={id}>
                <div
                  className="home-counter-container-box-content"
                  data-aos={aos}
                >
                  <CountUp start={0} end={count} duration={5} delay={0}>
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <div className="home-counter-container-box-info">
                  <p>{title ? title : ""}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeCounter;
