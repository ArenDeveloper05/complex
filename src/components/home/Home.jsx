import Container from "../common/container/Container";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTop from "./home-top/HomeTop";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeTop />
    </div>
  );
};

export default Home;
