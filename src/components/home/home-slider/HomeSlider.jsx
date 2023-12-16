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
    },
  ]);

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
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <Atropos activeOffset={40} shadowScale={0}>
                <img
                  className="img"
                  src={item.img}
                  alt="img"
                  data-atropos-offset="12"
                />
                <div className="swiper-slide-container" data-atropos-offset="0">
                  <h1 data-atropos-offset="-5">{item.title[language]}</h1>
                  <p data-atropos-offset="5">{item.info}</p>
                  <button data-atropos-offset="-10">
                    {item.btnText[language]}
                  </button>
                </div>
              </Atropos>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
