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
        img={
          "data:image/jpeg;base64,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"
        }
        title={"Parallax"}
        txt={
          "The sun dipped below the horizon, casting a warm glow across the tranquil sea. As night fell, the stars emerged, painting the sky with their celestial brilliance."
        }
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
