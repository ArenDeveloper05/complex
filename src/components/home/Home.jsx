import HomeServices from "./home-services/HomeServices";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTop from "./home-top/HomeTop";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeServices />
      <HomeTop />
    </div>
  );
};

export default Home;
