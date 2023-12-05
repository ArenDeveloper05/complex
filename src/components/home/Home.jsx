import Container from "../common/container/Container";
import HomeSlider from "./home-slider/HomeSlider";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
    </div>
  );
};

export default Home;
