import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  // Autoplay,
  EffectFade,
} from "swiper/modules";

// IMAGES

import homeSliderAirConditioner from "../../../assets/images/homeSliderAirConditioner.png";
import homeSliderGasBoiler from "../../../assets/images/homeSliderGasBoiler.png";
import homeSliderSolarConverter from "../../../assets/images/homeSliderSolarConverter.png";

import homeSlide1BG from "../../../assets/images/homeSlide1BG.png";
// import homeSlide2BG from "../../../assets/images/homeSlide2BG.png";

// SCSS

import "./HomeSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "atropos/scss";

import "../../../styles/media.css";
import { objectHasKey, objectIsNotEpmty } from "../../../utils/helpers/helpers";
import { animationModesConfig } from "../../../config";
import { Link } from "react-router-dom";

// ====================================================

const HomeSlider = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const [slides, setSlides] = useState([
    {
      id: 1,
      img: homeSliderAirConditioner,
      bgImg: homeSlide1BG,
      title: {
        am: "SMART WIFI DRY+",
        ru: "",
        en: "",
      },
      info: {
        am: "WI-FI Управление климатом\n из любой точки мира",
        ru: "",
        en: "",
      },
      animation_mode: {
        title: 1,
        info: 1,
      },
      link: "",
    },
    {
      id: 2,
      img: homeSliderGasBoiler,
      bgImg: homeSlide1BG,
      title: {
        am: "SMART WIFI DRY+",
        ru: "",
        en: "",
      },
      info: {
        am: "WI-FI Управление климатом\n из любой точки мира",
        ru: "",
        en: "",
      },
      animation_mode: {
        title: 2,
        info: 2,
      },
      link: "",
    },
    {
      id: 3,
      img: homeSliderSolarConverter,
      bgImg: homeSlide1BG,
      title: {
        am: "SMART WIFI DRY+",
        ru: "",
        en: "",
      },
      info: {
        am: "WI-FI Управление климатом\n из любой точки мира",
        ru: "",
        en: "",
      },
      animation_mode: {
        title: 3,
        info: 3,
      },
      link: "",
    },
  ]);

  function generateAnimationMode(mode, type) {
    if (
      mode &&
      type &&
      objectIsNotEpmty(mode) &&
      objectHasKey(mode, type) &&
      objectHasKey(animationModesConfig, type)
    ) {
      return objectHasKey(animationModesConfig[type], mode[type])
        ? animationModesConfig[type][mode[type]]
        : "";
    }
    return "";
  }

  return (
    <section className="home-slider">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          // Autoplay,
          EffectFade,
        ]}
        effect={"coverflow"}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        speed={500}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
      >
        {slides &&
          slides.map(
            ({ id, item, title, info, animation_mode, link, img, bgImg }) => {
              return (
                <SwiperSlide key={id} className="swiper-slide">
                  <Link to={link}>
                    <img src={bgImg} alt="" />
                    <div className="swiper-slide-container">
                      <p
                        className={`info ${generateAnimationMode(
                          animation_mode,
                          "info"
                        )}`}
                      >
                        {info ? info[language] : ""}
                      </p>
                      <h1
                        className={`title ${generateAnimationMode(
                          animation_mode,
                          "title"
                        )}`}
                      >
                        {title ? title[language] : ""}
                      </h1>
                    </div>

                    {/* <p></p> */}
                  </Link>
                </SwiperSlide>
              );
            }
          )}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
