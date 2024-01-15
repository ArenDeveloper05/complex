import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-scroll-parallax";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Lines from "../../common/lines/Lines";

//SCSS
import "./HomeTop.scss";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeTop = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { t } = useTranslation();

  const products = useSelector((state) => state.top.top);

  return (
    <div className="home-top">
      <h1 className="home-top-title section-title">
        {t("main.main_top_products.title")}
      </h1>
      <Lines bcg={"#215642"} />
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
          loop={true}
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
                    {/* <h1>{title ? title : ""}</h1> */}
                    {/* <h1>{title[language]}</h1> */}
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
