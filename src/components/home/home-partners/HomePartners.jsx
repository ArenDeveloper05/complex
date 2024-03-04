import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getPartnersThunk } from "../../../redux/slices/partnersSlice";
import { generateImage } from "../../../utils/helpers/helpers";

import Lines from "../../common/lines/Lines";

// SCSS
import "./HomePartners.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePartners = () => {
  const { t } = useTranslation();
  const { partnersList, partnersListLoading, partnersListError } = useSelector(
    (state) => state.partners
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (partnersList.length === 0) {
      dispatch(getPartnersThunk());
    }
  }, []);

  return (
    <div className="home-partners">
      <h1 className="home-partners-title section-title">
        {t("main.main_partners.title")}
      </h1>
      <Lines bcg={"#215642"} />
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
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 6,
          },
          900: {
            slidesPerView: 10,
          },
        }}
      >
        {partnersList &&
          partnersList.map(({ id, icon, name, website_url }) => {
            return (
              <SwiperSlide key={id} className="partner">
                {website_url.includes("https") ? (
                  <a href={website_url}>
                    <img
                      src={icon ? generateImage(icon) : ""}
                      alt="swiper-item"
                      title={name}
                    />
                  </a>
                ) : (
                  <img
                    src={icon ? generateImage(icon) : ""}
                    alt="swiper-item"
                    title={name}
                  />
                )}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomePartners;
