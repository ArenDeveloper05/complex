import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import Atropos from "atropos/react";

// IMAGES
import homeSliderAirConditioner from "../../../assets/images/homeSliderAirConditioner.png";
import homeSliderGasBoiler from "../../../assets/images/homeSliderGasBoiler.png";
import homeSliderSolarConverter from "../../../assets/images/homeSliderSolarConverter.png";

import homeSliderAirConditionerBG from "../../../assets/images/homeSliderAirConditionerBG.png";
import homeSliderGasBoilerBG from "../../../assets/images/homeSliderGasBoilerBG.png";
import homeSliderSolarConverterBG from "../../../assets/images/homeSliderSolarConverterBG.jpg";

import video from "../../../assets/video/greenBG.mp4";

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

// =============================================

const HomeSlider = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const [slides, setSlides] = useState([
    {
      img: homeSliderAirConditioner,
      bgImg: homeSliderAirConditionerBG,
      title: {
        am: "ՕԴՈՐԱԿԻՉՆԵՐ",
        ru: "КОНДИЦИОНЕРЫ",
        en: "AIR CONDITIONERS",
      },
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime optio facilis fuga ipsam officia ipsum voluptate doloribus molestiae, incidunt mollitia quasi! Facilis sequi quia quas aperiam, ad quae porro?",
      btnText: {
        am: "Կարդալ ավելին",
        ru: "УЗНАТЬ БОЛЬШЕ",
        en: "READ MORE",
      },
      animation_mode: {
        title: 1,
        info: 1,
      },
      link: "",
    },
    {
      img: homeSliderGasBoiler,
      bgImg: homeSliderGasBoilerBG,
      title: {
        am: "Ջեռուցման համակարգեր",
        ru: "Системы отопления",
        en: "Heating systems",
      },
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime optio facilis \n fuga ipsam officia ipsum voluptate doloribus molestiae, incidunt mollitia quasi! \n Facilis sequi quia quas aperiam, ad quae porro?",
      btnText: {
        am: "Կարդալ ավելին",
        ru: "УЗНАТЬ БОЛЬШЕ",
        en: "READ MORE",
      },
      animation_mode: {
        title: 1,
        info: 1,
      },
      link: "",
    },
    {
      img: homeSliderSolarConverter,
      bgImg: homeSliderSolarConverterBG,
      title: {
        am: "ԱՐԵՎԱՅԻՆ ԿԱՅԱՆՆԵՐ",
        ru: "сетевые солнечные электростанции",
        en: "SOLAR STATIONS",
      },
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime optio facilis \n fuga ipsam officia ipsum voluptate doloribus molestiae, incidunt mollitia quasi! \n Facilis sequi quia quas aperiam, ad quae porro?",
      btnText: {
        am: "Կարդալ ավելին",
        ru: "УЗНАТЬ БОЛЬШЕ",
        en: "READ MORE",
      },
      animation_mode: {
        title: 1,
        info: 1,
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
          Autoplay,
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides &&
          slides.map(
            ({ id, item, title, info, animation_mode, link }, index) => {
              return (
                <SwiperSlide key={index} className="swiper-slide">
                  <div>
                    <Link to={link}>
                      <h1
                        className={`title ${generateAnimationMode(
                          animation_mode,
                          "title"
                        )}`}
                      >
                        {title ? title[language] : ""}
                      </h1>
                      {/* <p></p> */}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            }
          )}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
