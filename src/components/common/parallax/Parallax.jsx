import { Parallax as ParallaxContainer } from "react-scroll-parallax";
import "./Parallax.scss";

const Parallax = ({ bcg, title, txt, img, side }) => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: bcg ? `url(${bcg})` : "",
        justifyContent: side ? "start" : "right",
      }}
    >
      <div className="parallax-img">
        {img && <img src={img || ""} alt="" />}
      </div>

      <div className="parallax-desc">
        <ParallaxContainer speed={-10}>
          <h1 className="ParallaxContainer-desc-title section-title">
            {title}
          </h1>
        </ParallaxContainer>
        <ParallaxContainer speed={-15}>
          <p className="parallax-desc-txt">{txt}</p>
        </ParallaxContainer>
      </div>
    </div>
  );
};

export default Parallax;
