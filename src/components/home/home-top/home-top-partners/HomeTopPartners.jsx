import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Images

import immergas from "../../../../assets/images/partners/immergas.png";
import aluTech from "../../../../assets/images/partners/aluTech.png";
import ballu from "../../../../assets/images/partners/ballu.png";
import baretta from "../../../../assets/images/partners/baretta.png";
import best from "../../../../assets/images/partners/best.png";
import deluxe from "../../../../assets/images/partners/deluxe.jpg";
import duyar from "../../../../assets/images/partners/duyar.png";
import egger from "../../../../assets/images/partners/egger.png";
import ferroli from "../../../../assets/images/partners/ferroli.png";
import fico from "../../../../assets/images/partners/fico.png";
import firat from "../../../../assets/images/partners/firat.png";
import geberit from "../../../../assets/images/partners/geberit.jpg";
import grohe from "../../../../assets/images/partners/grohe.jpg";
import italo from "../../../../assets/images/partners/italo.png";
import platform from "../../../../assets/images/partners/platform.png";
import rainbird from "../../../../assets/images/partners/rainbird.png";
import reze from "../../../../assets/images/partners/reze.png";
import riello from "../../../../assets/images/partners/riello.png";
import senkron from "../../../../assets/images/partners/senkron.png";
import sira from "../../../../assets/images/partners/sira.png";
import solnce from "../../../../assets/images/partners/solnce.jpg";
import vorne from "../../../../assets/images/partners/vorne.png";
import warma from "../../../../assets/images/partners/warma.png";
import wilo from "../../../../assets/images/partners/wilo.png";
import winhouse from "../../../../assets/images/partners/winhouse.png";
import yilmaz from "../../../../assets/images/partners/yilmaz.png";

// SCSS
import "./HomeTopPartners.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeTopPartners = () => {
  const [partners, setPartners] = useState([
    {
      img: immergas,
    },
    {
      img: aluTech,
    },
    {
      img: ballu,
    },
    {
      img: baretta,
    },
    {
      img: best,
    },
    {
      img: deluxe,
    },
    {
      img: duyar,
    },
    {
      img: egger,
    },
    {
      img: ferroli,
    },
    {
      img: fico,
    },
    {
      img: firat,
    },
    {
      img: geberit,
    },
    {
      img: grohe,
    },
    {
      img: italo,
    },
    {
      img: platform,
    },
    {
      img: rainbird,
    },
    {
      img: reze,
    },
    {
      img: riello,
    },
    {
      img: senkron,
    },
    {
      img: sira,
    },
    {
      img: solnce,
    },
    {
      img: vorne,
    },
    {
      img: warma,
    },
    {
      img: wilo,
    },
    {
      img: winhouse,
    },
    {
      img: yilmaz,
    },
  ]);
  return (
    <div className="home-top-partners">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {partners.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeTopPartners;
