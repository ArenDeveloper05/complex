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

import { objectHasKey, objectIsNotEpmty } from "../../../utils/helpers/helpers";
import { animationModesConfig } from "../../../config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Atropos from "atropos/react";

import "./HomeSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "atropos/scss";

const HomeSlider = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const slides = useSelector((state) => state.slider.sliderData);

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
        onSlideChange={(e) => {}}
        loop={true}
        speed={500}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {slides &&
          slides.map(
            ({ id, title, info, animation_mode, link, img, bgImg }) => {
              return (
                <SwiperSlide key={id} className="swiper-slide">
                  <Link to={link}>
                    <img src={bgImg} alt="background" className="swiper-bg" />
                    <div className="swiper-slide-container">
                      <p
                        className={`info animate__animated ${generateAnimationMode(
                          animation_mode,
                          "info"
                        )}
                        
                        `}
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
                      <Atropos
                        shadowScale={0}
                        className={generateAnimationMode(animation_mode, "img")}
                      >
                        <img src={img} alt="img" />
                      </Atropos>
                    </div>
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
