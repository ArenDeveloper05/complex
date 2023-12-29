import { Parallax as ParallaxContainer } from "react-scroll-parallax";

const ParallaxImage = ({ img }) => {
  return (
    <ParallaxContainer speed={-5}>
      <div className="parallax-img">
        {img && <img src={img || ""} alt="" />}
      </div>
    </ParallaxContainer>
  );
};

export default ParallaxImage;
