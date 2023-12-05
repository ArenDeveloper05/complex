import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

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
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime optio facilis \n fuga ipsam officia ipsum voluptate doloribus molestiae, incidunt mollitia quasi! \n Facilis sequi quia quas aperiam, ad quae porro?",
    },
    {
      link: "111",
      title: "Իտալական գազի \n կաթսաներ",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime optio facilis \n fuga ipsam officia ipsum voluptate doloribus molestiae, incidunt mollitia quasi! \n Facilis sequi quia quas aperiam, ad quae porro?",
    },
    {
      link: "111",
      title: `Հաշվեք Ձեր բնակարանի \n ջեռուցումը online`,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime optio facilis \n fuga ipsam officia ipsum voluptate doloribus molestiae, incidunt mollitia quasi! \n Facilis sequi quia quas aperiam, ad quae porro?",
    },
  ]);

  const handleVideoClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="home-slider">
      <video
        src={green}
        controls
        autoPlay
        muted
        loop
        onClick={handleVideoClick}
      ></video>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        speed={500}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/* <Link to={ROUTER.HOME_PAGE_ROUTE}>
                <img src={item.img} alt="img" />
              </Link> */}
              <h1>{item.title}</h1>
              <p>{item.info}</p>
              <button>read more</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
