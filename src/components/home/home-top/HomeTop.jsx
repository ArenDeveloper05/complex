import { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Lines from "../../common/lines/Lines";

//SCSS
import "./HomeTop.scss";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Parallax } from "react-scroll-parallax";
import { useSelector } from "react-redux";

const HomeTop = () => {
  const products = useSelector((state) => state.top.top);

  return (
    <div className="home-top">
      <h1 className="home-top-title section-title">top products</h1>
      <Lines bcg={"green"} />
      <div className="home-top-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={-50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
          }}
        >
          {products &&
            products.map(({ id, info, img, title }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="swiper-slide-productsContainer">
                    <h1>{title ? title : ""}</h1>
                    <Parallax speed={-10}>
                      <img src={img ? img : ""} alt="img" />
                    </Parallax>
                    <Parallax speed={-15}>
                      <div className="swiper-slide-productsContainer-desc">
                        {info ? info : ""}
                      </div>
                    </Parallax>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTop;
