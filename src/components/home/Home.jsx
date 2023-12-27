import { useEffect } from "react";

import HomeCounter from "./home-counter/HomeCounter";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTop from "./home-top/HomeTop";
import HomeRegister from "./home-register/HomeRegister";
import HomePartners from "./home-partners/HomePartners";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.scss";
import Parallax from "../common/parallax/Parallax";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home">
      <HomeSlider />
      <HomeCounter />
      <Parallax
        bcg={
          "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph"
        }
        title={"Parallax"}
        txt={"some txt"}
      />
      <HomeTop />
      <HomeRegister />
      <Parallax
        bcg={
          "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph"
        }
        title={"Parallax"}
        txt={"some txt"}
      />
      <HomePartners />
    </div>
  );
};

export default Home;
