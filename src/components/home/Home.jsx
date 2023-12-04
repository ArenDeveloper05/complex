import Container from "../common/container/Container";
import HomeAboutCircle from "./home-about-circle/HomeAboutCircle";
import HomeSlider from "./home-slider/HomeSlider";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <HomeSlider />
      </Container>
    </div>
  );
};

export default Home;
