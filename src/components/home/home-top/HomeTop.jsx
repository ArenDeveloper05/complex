import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//IMAGES

import product1 from "../../../assets/images/homeTopProduct1.png";
import product2 from "../../../assets/images/homeTopProduct2.png";
import product3 from "../../../assets/images/homeTopProduct3.jpg";
import product4 from "../../../assets/images/homeTopProduct4.png";
import product5 from "../../../assets/images/homeTopProduct5.jpg";

//SCSS
import "./HomeTop.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomeTopPartners from "./home-top-partners/HomeTopPartners";

const HomeTop = () => {
  const [products, setProducts] = useState([
    {
      img: product1,
      info: "Կոնդենսացիոն գազի կաթսա Immergas VICTRIX TERA 24",
    },
    {
      img: product2,
      info: "Էլ կոնվեկցիոն տաքացուցիչ Ballu Enzo BEC/EZMR-1500",
    },
    {
      img: product4,
      info: "Գազի կաթսա Beretta CIAO S 24 CSI",
    },
  ]);
  return (
    <div className="home-top">
      <div className="home-top-img">
        <p className="home-top-img-info">what our users say</p>
        <p className="home-top-img-title">top products</p>
        <div className="home-top-img-line"></div>
      </div>
      <div className="home-top-container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {products.map((item) => {
            return (
              <SwiperSlide>
                <div className="swiper-slide-container">
                  <p>{item.info}</p>
                  <img src={item.img} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="home-top-footer">
        <HomeTopPartners />
      </div>
    </div>
  );
};

export default HomeTop;
