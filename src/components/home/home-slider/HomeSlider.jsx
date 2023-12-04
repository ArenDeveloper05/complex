import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { ROUTER } from "../../../router/router";

import green from "../../../assets/video/greenBG.mp4";

import "./HomeSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const HomeSlider = () => {
  const [slides, setSlides] = useState([
    {
      link: "111",
      title: "Օդորակիչներ",
    },
    {
      link: "111",
      title: "Իտալական գազի \n կաթսաներ",
    },
    {
      link: "111",
      title: `Հաշվեք Ձեր բնակարանի \n ջեռուցումը online`,
    },
  ]);

  return (
    <section className="home-slider">
      <video src={green} controls autoPlay loop></video>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={900}
      >
        {slides.map((item) => {
          return (
            <SwiperSlide>
              {/* <Link to={ROUTER.HOME_PAGE_ROUTE}>
                <img src={item.img} alt="img" />
              </Link> */}
              <h1>{item.title}</h1>
              <button>read more</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
