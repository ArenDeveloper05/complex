import { Parallax as ParallaxContainer } from "react-scroll-parallax";
import ParallaxImage from "./parallax-image/ParallaxImage";

import "./Parallax.scss";

const Parallax = ({ bcg, title, txt, img, side }) => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: bcg ? `url(${bcg})` : "",
        justifyContent: side ? "start" : "end",
      }}
    >
      {side && <ParallaxImage img={img} />}

      <div className="parallax-desc">
        <ParallaxContainer
          speed={-10}
          className="parallax-desc-ParallaxContainer"
        >
          <h1 className="parallax-desc-ParallaxContainer-title section-title">
            {title}
          </h1>
        </ParallaxContainer>

        <ParallaxContainer speed={-8}>
          <p className="parallax-desc-txt">{txt}</p>
        </ParallaxContainer>
      </div>

      {!side && <ParallaxImage img={img} />}
    </div>
  );
};

export default Parallax;
