import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// SCSS
import "./HomeTopPartners.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeTopPartners = () => {
  const partnersList = useSelector((state) => state.partners.partnersList);

  return (
    <div className="home-top-partners">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={-50}
        slidesPerView={1}
        navigation
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          330: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 6,
          },
        }}
      >
        {partnersList &&
          partnersList.map(({ id, img }) => {
            return (
              <SwiperSlide key={id}>
                <img src={img ? img : ""} alt="swiper-item" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeTopPartners;
