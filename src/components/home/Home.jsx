import { useEffect } from "react";

import HomeCounter from "./home-counter/HomeCounter";
import HomeServices from "./home-services/HomeServices";
import HomeSlider from "./home-slider/HomeSlider";
import HomeSubscribe from "./home-subscribe/HomeSubscribe";
import HomeTop from "./home-top/HomeTop";
import HomeRegister from "./home-register/HomeRegister";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.scss";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home">
      <HomeSlider />
      <HomeTop />
      <HomeRegister />
      <HomeCounter />
      <HomeServices />
      <HomeSubscribe />
    </div>
  );
};

export default Home;
