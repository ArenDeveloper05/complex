import { useEffect } from "react";

import HomeCounter from "./home-counter/HomeCounter";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTop from "./home-top/HomeTop";
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
      <Parallax
        bcg={
          "https://www.buildxact.com/us/wp-content/uploads/sites/2/2022/01/blog-104294966.jpg"
        }
        img={
          "https://us.123rf.com/450wm/bryljaev/bryljaev2307/bryljaev230700184/208196165-warehouse-at-sawmill-with-wooden-planks-generative-ai.jpg?ver=6"
        }
        title={"Parallax"}
        txt={
          "The sun dipped below the horizon, casting a warm glow across the tranquil sea. As night fell, the stars emerged, painting the sky with their celestial brilliance."
        }
      />
      <HomeTop />
      {/* <HomeRegister /> */}
      <Parallax
        bcg={
          "https://cdn.iheat.co.uk/blogs/What-You-Should-Know-Before-Getting-A-Heat-Pump.jpg_vnyliq.jpg"
        }
        img={
          "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-home-heating.jpeg.jpg"
        }
        title={"Parallax"}
        txt={
          "The sun dipped below the horizon, casting a warm glow across the tranquil sea. As night fell, the stars emerged, painting the sky with their celestial brilliance."
        }
        side
      />
      <HomeCounter />
      <HomePartners />
    </div>
  );
};

export default Home;
