import { useEffect } from "react";

import HomeCounter from "./home-counter/HomeCounter";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTop from "./home-top/HomeTop";
import HomeRegister from "./home-register/HomeRegister";
import HomePartners from "./home-partners/HomePartners";

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
      <HomeCounter />
      <HomeTop />
      <HomeRegister />
      <HomePartners />
    </div>
  );
};

export default Home;
