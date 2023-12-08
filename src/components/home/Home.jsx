import HomeServices from "./home-services/HomeServices";
import HomeSlider from "./home-slider/HomeSlider";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />

      <HomeServices />
    </div>
  );
};

export default Home;
